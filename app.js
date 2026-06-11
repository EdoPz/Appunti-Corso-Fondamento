// APP.JS — Single Page Application Logic for Corso del Fondamento

// Application State
let currentLessonId = null; // null represents the Dashboard view
let currentView = 'dashboard'; // 'dashboard', 'reader', 'quiz'
let searchQuery = '';
let completedLessons = [];
let quizScores = {};
let bibleHighlightsActive = false;
let currentTheme = 'light';
let currentFontSize = 'medium';
let notes = {};

// Speech synthesis state
let speechUtterance = null;
let isSpeaking = false;
let speechText = "";

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initUI();
    handleRouting();
    
    // Listen to hash changes for routing
    window.addEventListener('hashchange', handleRouting);
});

// Load variables from LocalStorage
function loadState() {
    completedLessons = JSON.parse(localStorage.getItem('course_completed_lessons')) || [];
    quizScores = JSON.parse(localStorage.getItem('course_quiz_scores')) || {};
    bibleHighlightsActive = JSON.parse(localStorage.getItem('course_bible_highlights')) || false;
    currentTheme = localStorage.getItem('course_theme') || 'light';
    currentFontSize = localStorage.getItem('course_font_size') || 'medium';
    notes = JSON.parse(localStorage.getItem('course_notes')) || {};
}

// Initial UI Setup
function initUI() {
    // Setup Theme
    setTheme(currentTheme);
    
    // Setup Font size
    changeFontSize(currentFontSize);
    
    // Setup Bible highlight classes on body
    if (bibleHighlightsActive) {
        document.body.classList.add('bible-highlights-active');
        const toggleBtn = document.getElementById('highlight-toggle');
        if (toggleBtn) toggleBtn.classList.add('bg-indigo-50', 'dark:bg-indigo-950/40', 'border-indigo-200', 'dark:border-indigo-800');
    }
    
    // Render Sidebar list
    renderSidebarList();
    
    // Render Dashboard
    renderDashboard();
    
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Setup click outside for font size dropdown
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('font-dropdown');
        const fontBtn = document.getElementById('font-size-controls');
        if (dropdown && fontBtn && !dropdown.classList.contains('hidden') && !fontBtn.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    });
}

// Simple Client-Side Router based on URL Hash
function handleRouting() {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#dashboard') {
        currentLessonId = null;
        currentView = 'dashboard';
        showDashboardView();
    } else {
        const lessonId = hash.substring(1);
        const lessonExists = lessonsData.some(l => l.id === lessonId);
        if (lessonExists) {
            currentLessonId = lessonId;
            currentView = 'reader';
            showReaderView(lessonId);
        } else {
            // Fallback to dashboard
            window.location.hash = '#dashboard';
        }
    }
    // Highlight correct link in sidebar
    updateActiveSidebarLink();
}

// Render the 11 Chapters in the Sidebar
function renderSidebarList() {
    const listContainer = document.getElementById('lessons-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    lessonsData.forEach((lesson, index) => {
        const isCompleted = completedLessons.includes(lesson.id);
        const score = quizScores[lesson.id];
        
        let statusIcon = '<div class="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 shrink-0"></div>';
        if (isCompleted) {
            statusIcon = '<div class="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><i data-lucide="check" class="w-3.5 h-3.5"></i></div>';
        }
        
        let scoreBadge = '';
        if (score !== undefined) {
            const scoreColor = score >= 80 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
            scoreBadge = `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-md ${scoreColor}">${score}%</span>`;
        }
        
        const link = document.createElement('a');
        link.href = `#${lesson.id}`;
        link.id = `sidebar-link-${lesson.id}`;
        link.className = `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all select-none group`;
        link.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0">
                ${statusIcon}
                <span class="truncate text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    ${index + 1}. ${lesson.title}
                </span>
            </div>
            ${scoreBadge}
        `;
        listContainer.appendChild(link);
    });
    
    lucide.createIcons();
    updateActiveSidebarLink();
}

// Highlight the currently selected lesson in the sidebar
function updateActiveSidebarLink() {
    // Remove active class from all links
    const links = document.querySelectorAll('#lessons-list a');
    links.forEach(link => {
        link.classList.remove('bg-indigo-50', 'dark:bg-indigo-950/35', 'text-indigo-900', 'dark:text-indigo-300', 'border-l-4', 'border-indigo-600', 'pl-2', 'active-lesson-link');
    });
    
    if (currentLessonId) {
        const activeLink = document.getElementById(`sidebar-link-${currentLessonId}`);
        if (activeLink) {
            activeLink.classList.add('bg-indigo-50', 'dark:bg-indigo-950/35', 'text-indigo-900', 'dark:text-indigo-300', 'border-l-4', 'border-indigo-600', 'pl-2', 'active-lesson-link');
        }
    }
}

// Render all content and cards on the Dashboard
function renderDashboard() {
    const gridContainer = document.getElementById('lessons-grid');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';
    
    // Filter lessons based on active search
    const filteredLessons = lessonsData.filter(l => {
        const matchTitle = l.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchContent = l.htmlContent.toLowerCase().includes(searchQuery.toLowerCase());
        return matchTitle || matchContent;
    });
    
    if (filteredLessons.length === 0) {
        gridContainer.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-400 dark:text-slate-500">
                <i data-lucide="search-code" class="w-10 h-10 mx-auto mb-2 text-slate-300"></i>
                <p class="text-sm">Nessuna lezione corrisponde alla ricerca.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    filteredLessons.forEach((lesson, index) => {
        const isCompleted = completedLessons.includes(lesson.id);
        const score = quizScores[lesson.id];
        const orgIndex = lessonsData.findIndex(l => l.id === lesson.id);
        
        let themeBadge = '';
        let bannerBg = 'from-slate-800 to-slate-900';
        if (lesson.theme === 'blue') {
            themeBadge = 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50';
            bannerBg = 'from-blue-900 to-slate-900';
        } else if (lesson.theme === 'amber') {
            themeBadge = 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-100 dark:border-amber-900/50';
            bannerBg = 'from-amber-950 to-stone-900';
        } else if (lesson.theme === 'emerald') {
            themeBadge = 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50';
            bannerBg = 'from-emerald-900 to-slate-900';
        } else if (lesson.theme === 'purple') {
            themeBadge = 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50';
            bannerBg = 'from-purple-900 to-slate-900';
        } else if (lesson.theme === 'stone') {
            themeBadge = 'bg-stone-100 text-stone-700 dark:bg-stone-900/40 dark:text-stone-400 border border-stone-200 dark:border-stone-800/50';
            bannerBg = 'from-stone-800 to-stone-950';
        }
        
        let completionBadge = `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">Non letto</span>`;
        if (isCompleted) {
            completionBadge = `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center gap-1"><i data-lucide="check" class="w-3 h-3"></i> Completato</span>`;
        }
        
        let quizBadge = '';
        if (score !== undefined) {
            const scoreColor = score >= 80 ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
            quizBadge = `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${scoreColor}">Quiz: ${score}%</span>`;
        }
        
        const card = document.createElement('div');
        card.className = "bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col group stats-card";
        card.innerHTML = `
            <!-- Card Top Banner -->
            <div class="h-20 bg-gradient-to-r ${bannerBg} p-4 flex flex-col justify-end relative">
                <div class="absolute inset-0 bg-slate-950/20 mix-blend-multiply"></div>
                <div class="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white/80">Lezione ${String(orgIndex + 1).padStart(2, '0')}</div>
            </div>
            <!-- Card Body -->
            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2 items-center">
                        ${completionBadge}
                        ${quizBadge}
                    </div>
                    <h4 class="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                        ${lesson.title}
                    </h4>
                    <p class="text-xs text-slate-400 dark:text-slate-500 line-clamp-2 leading-relaxed font-light">
                        ${lesson.subtitle || 'Dispensa del corso di discepolato.'}
                    </p>
                </div>
                <div class="pt-2">
                    <a href="#${lesson.id}" class="w-full bg-slate-50 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-600 dark:hover:text-white hover:text-white text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-2xl text-xs font-semibold text-center block transition-all active:scale-[0.98]">
                        Inizia Studio
                    </a>
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });
    
    lucide.createIcons();
    updateOverallProgress();
}

// Calculate global study indicators
function updateOverallProgress() {
    const totalLessons = lessonsData.length;
    const completedCount = completedLessons.length;
    const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    
    // Update Sidebar Progress
    const sidebarText = document.getElementById('sidebar-progress-text');
    const sidebarBar = document.getElementById('sidebar-progress-bar');
    if (sidebarText) sidebarText.innerText = `${progressPercent}%`;
    if (sidebarBar) sidebarBar.style.width = `${progressPercent}%`;
    
    // Update Stats in Dashboard
    const statsRead = document.getElementById('stats-lessons-read');
    if (statsRead) statsRead.innerText = `${completedCount} / ${totalLessons}`;
    
    // Calculate Average Quiz Score
    const scoreValues = Object.values(quizScores);
    const avgScore = scoreValues.length > 0 ? Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length) : 0;
    
    const statsQuiz = document.getElementById('stats-quiz-avg');
    if (statsQuiz) statsQuiz.innerText = `${avgScore}%`;
}

// Dashboard link handler
function showDashboard(event) {
    if (event) event.preventDefault();
    window.location.hash = '#dashboard';
}

// Router actions: Show Dashboard View
function showDashboardView() {
    document.getElementById('view-dashboard').classList.remove('hidden');
    document.getElementById('view-reader').classList.add('hidden');
    document.getElementById('view-quiz').classList.add('hidden');
    
    document.getElementById('current-section-title').innerText = "Scuola di Discepolato";
    
    // Hide reader controls
    document.getElementById('highlight-toggle').classList.add('hidden');
    document.getElementById('font-size-controls').classList.add('hidden');
    document.getElementById('tts-controls').classList.add('hidden');
    
    // Reset reading voice if running
    stopTTS();
}

// Router actions: Show Reader View & Populate HTML
function showReaderView(lessonId) {
    const lesson = lessonsData.find(l => l.id === lessonId);
    if (!lesson) return;
    
    const index = lessonsData.findIndex(l => l.id === lessonId);
    
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('view-reader').classList.remove('hidden');
    document.getElementById('view-quiz').classList.add('hidden');
    
    // Set Header
    document.getElementById('current-section-title').innerText = lesson.title;
    
    // Show reader controls
    document.getElementById('highlight-toggle').classList.remove('hidden');
    document.getElementById('font-size-controls').classList.remove('hidden');
    document.getElementById('tts-controls').classList.remove('hidden');
    
    // Populate banner
    document.getElementById('reader-chapter-num').innerText = `Lezione ${String(index + 1).padStart(2, '0')}`;
    document.getElementById('reader-title').innerText = lesson.title;
    document.getElementById('reader-subtitle').innerText = lesson.subtitle || '';
    
    // Set Banner Colors based on original theme
    const banner = document.getElementById('reader-header');
    banner.className = "rounded-3xl p-6 sm:p-8 text-white shadow-lg overflow-hidden relative bg-gradient-to-r";
    if (lesson.theme === 'blue') {
        banner.classList.add('from-blue-900', 'via-blue-950', 'to-indigo-950');
    } else if (lesson.theme === 'amber') {
        banner.classList.add('from-amber-900', 'via-amber-950', 'to-stone-900');
    } else if (lesson.theme === 'emerald') {
        banner.classList.add('from-emerald-800', 'via-emerald-900', 'to-slate-900');
    } else if (lesson.theme === 'purple') {
        banner.classList.add('from-purple-800', 'via-purple-900', 'to-slate-900');
    } else {
        banner.classList.add('from-slate-800', 'via-slate-900', 'to-slate-950');
    }
    
    // Load and Prepare Content (Process Bible Highlights)
    const processedHtml = prepareHtmlContent(lesson.htmlContent);
    document.getElementById('reader-content-html').innerHTML = processedHtml;
    
    // Setup note textarea
    const textarea = document.getElementById('notes-textarea');
    textarea.value = notes[lessonId] || '';
    textarea.placeholder = `Scrivi qui le tue riflessioni e appunti per la lezione di "${lesson.title}"...`;
    
    // Setup completion checkbox
    const isCompleted = completedLessons.includes(lessonId);
    const checkbox = document.getElementById('lesson-completed-checkbox');
    checkbox.checked = isCompleted;
    
    // Update reader badge status
    const statusBadge = document.getElementById('reader-status-badge');
    if (isCompleted) {
        statusBadge.innerText = 'Completato';
        statusBadge.className = 'px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400';
    } else {
        statusBadge.innerText = 'In Corso';
        statusBadge.className = 'px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400';
    }
    
    // Handle adjacent buttons
    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn');
    
    if (index > 0) {
        prevBtn.style.visibility = 'visible';
    } else {
        prevBtn.style.visibility = 'hidden';
    }
    
    if (index < lessonsData.length - 1) {
        nextBtn.style.visibility = 'visible';
    } else {
        nextBtn.style.visibility = 'hidden';
    }
    
    // Scroll page content to top
    document.querySelector('main').scrollTop = 0;
    
    // Reset TTS state for new lesson
    stopTTS();
}

// Inject tags around Bible scriptures citations
function prepareHtmlContent(rawHtml) {
    // Regular expression matching Italian references like (Eb 6:1-2), (1Cor 3:11), (Col 2:15)
    const bibleRegex = /\(((?:[123]\s*)?[A-Z][a-zà-ùA-Z]+\.?\s*\d+\s*:\s*\d+(?:\s*-\s*\d+)?(?:,\s*\d+)?)\)/g;
    
    return rawHtml.replace(bibleRegex, function(match, ref) {
        const cleanRef = ref.trim();
        return `(<span class="bible-citation" onclick="handleBibleCitationClick('${cleanRef.replace(/'/g, "\\'")}')">${ref}</span>)`;
    });
}

// Action when a bible reference is clicked: Open external window
function handleBibleCitationClick(ref) {
    const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=NR06`;
    window.open(url, '_blank');
}

// Mark current chapter as completed/uncompleted
function toggleCurrentLessonCompleted(checked) {
    if (!currentLessonId) return;
    
    if (checked) {
        if (!completedLessons.includes(currentLessonId)) {
            completedLessons.push(currentLessonId);
        }
    } else {
        completedLessons = completedLessons.filter(id => id !== currentLessonId);
    }
    
    localStorage.setItem('course_completed_lessons', JSON.stringify(completedLessons));
    
    // Update UI elements
    updateOverallProgress();
    renderSidebarList();
    
    const statusBadge = document.getElementById('reader-status-badge');
    if (checked) {
        statusBadge.innerText = 'Completato';
        statusBadge.className = 'px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400';
    } else {
        statusBadge.innerText = 'In Corso';
        statusBadge.className = 'px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400';
    }
}

// Write/Save notes into browser memory
function saveCurrentNote(value) {
    if (!currentLessonId) return;
    notes[currentLessonId] = value;
    localStorage.setItem('course_notes', JSON.stringify(notes));
}

// Previous/Next Lesson handlers
function navigateToAdjacentLesson(direction) {
    if (!currentLessonId) return;
    
    const currentIndex = lessonsData.findIndex(l => l.id === currentLessonId);
    const targetIndex = currentIndex + direction;
    
    if (targetIndex >= 0 && targetIndex < lessonsData.length) {
        const targetLesson = lessonsData[targetIndex];
        window.location.hash = `#${targetLesson.id}`;
    }
}

// Home helper scrolling
function scrollToLessonsList() {
    const section = document.getElementById('lessons-grid-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Dashboard helper
function startFirstUnread() {
    const unread = lessonsData.find(l => !completedLessons.includes(l.id));
    if (unread) {
        window.location.hash = `#${unread.id}`;
    } else {
        // If all are read, open the first
        window.location.hash = `#${lessonsData[0].id}`;
    }
}

// Search filter implementation
function handleSearch(val) {
    searchQuery = val;
    // Only search has visual impact on dashboard cards
    if (currentView === 'dashboard') {
        renderDashboard();
    } else {
        // If query inputted while inside reader, return to dashboard to see results
        if (val.trim() !== '') {
            showDashboard(null);
            renderDashboard();
        }
    }
}

// Theme Selector
function setTheme(themeName) {
    currentTheme = themeName;
    localStorage.setItem('course_theme', themeName);
    
    // Reset theme class on body
    document.body.classList.remove('dark', 'theme-sepia');
    
    // Highlight Active Buttons in toolbar
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-indigo-600', 'dark:text-indigo-400');
    });
    
    if (themeName === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-btn-dark').classList.add('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-indigo-600', 'dark:text-indigo-400');
    } else if (themeName === 'sepia') {
        document.body.classList.add('theme-sepia');
        document.getElementById('theme-btn-sepia').classList.add('bg-white', 'shadow-sm', 'text-indigo-600');
    } else {
        // light mode
        document.getElementById('theme-btn-light').classList.add('bg-white', 'shadow-sm', 'text-indigo-600');
    }
}

// Toggle font dropdown UI
function toggleFontDropdown() {
    const dropdown = document.getElementById('font-dropdown');
    dropdown.classList.toggle('hidden');
}

// Font Size changer
function changeFontSize(size) {
    const root = document.getElementById('reader-content-html');
    currentFontSize = size;
    localStorage.setItem('course_font_size', size);
    
    if (root) {
        if (size === 'small') {
            root.style.setProperty('--reader-font-size', '15px');
        } else if (size === 'medium') {
            root.style.setProperty('--reader-font-size', '17px');
        } else if (size === 'large') {
            root.style.setProperty('--reader-font-size', '20px');
        }
    }
    
    const dropdown = document.getElementById('font-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
}

// Toggle Bible highlight view
function toggleBibleHighlights() {
    bibleHighlightsActive = !bibleHighlightsActive;
    localStorage.setItem('course_bible_highlights', bibleHighlightsActive);
    
    const toggleBtn = document.getElementById('highlight-toggle');
    if (bibleHighlightsActive) {
        document.body.classList.add('bible-highlights-active');
        toggleBtn.classList.add('bg-indigo-50', 'dark:bg-indigo-950/40', 'border-indigo-200', 'dark:border-indigo-800');
    } else {
        document.body.classList.remove('bible-highlights-active');
        toggleBtn.classList.remove('bg-indigo-50', 'dark:bg-indigo-950/40', 'border-indigo-200', 'dark:border-indigo-800');
    }
}

// Responsive Drawer menu controller
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}


/* ==========================================================================
   TEXT TO SPEECH PLAYER LOGIC
   ========================================================================== */
function toggleTTS() {
    if (isSpeaking) {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            document.getElementById('tts-play-btn').innerHTML = '<i data-lucide="pause" class="w-3.5 h-3.5"></i>';
        } else {
            window.speechSynthesis.pause();
            document.getElementById('tts-play-btn').innerHTML = '<i data-lucide="play" class="w-3.5 h-3.5"></i>';
        }
        lucide.createIcons();
    } else {
        const contentDiv = document.getElementById('reader-content-html');
        if (!contentDiv) return;
        
        // Extract text and filter out HTML code representations
        speechText = contentDiv.innerText || contentDiv.textContent;
        
        // Stop any current reading
        window.speechSynthesis.cancel();
        
        speechUtterance = new SpeechSynthesisUtterance(speechText);
        speechUtterance.lang = 'it-IT';
        
        const speedSelect = document.getElementById('tts-speed');
        speechUtterance.rate = parseFloat(speedSelect.value) || 1.0;
        
        speechUtterance.onend = function() {
            stopTTS();
        };
        
        speechUtterance.onerror = function() {
            stopTTS();
        };
        
        window.speechSynthesis.speak(speechUtterance);
        isSpeaking = true;
        document.getElementById('tts-play-btn').innerHTML = '<i data-lucide="pause" class="w-3.5 h-3.5"></i>';
        lucide.createIcons();
    }
}

function stopTTS() {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    const playBtn = document.getElementById('tts-play-btn');
    if (playBtn) {
        playBtn.innerHTML = '<i data-lucide="play" class="w-3.5 h-3.5"></i>';
    }
    lucide.createIcons();
}

function changeTTSSpeed(val) {
    if (isSpeaking && speechUtterance) {
        const rate = parseFloat(val);
        // Unfortunately rate cannot be changed on the fly in most browsers, 
        // we need to stop and restart from same/new utterance, or just wait for next play
        stopTTS();
        toggleTTS();
    }
}


/* ==========================================================================
   QUIZ CONTROLLER LOGIC
   ========================================================================== */
let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    selectedOption: null,
    answered: false
};

function startQuizMode() {
    const questions = quizData[currentLessonId];
    if (!questions || questions.length === 0) {
        alert("Nessun quiz disponibile per questa lezione al momento.");
        return;
    }
    
    stopTTS();
    
    quizState.questions = questions;
    quizState.currentIndex = 0;
    quizState.score = 0;
    quizState.selectedOption = null;
    quizState.answered = false;
    
    currentView = 'quiz';
    document.getElementById('view-reader').classList.add('hidden');
    document.getElementById('view-quiz').classList.remove('hidden');
    
    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-results-container').classList.add('hidden');
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    
    // Update headers and progress indicators
    document.getElementById('quiz-progress-text').innerText = `DOMANDA ${quizState.currentIndex + 1} DI ${quizState.questions.length}`;
    const percent = ((quizState.currentIndex + 1) / quizState.questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${percent}%`;
    document.getElementById('quiz-score-badge').innerText = `Punti: ${quizState.score} / ${quizState.currentIndex}`;
    
    // Question title
    document.getElementById('quiz-question-text').innerText = q.question;
    
    // Clear list options
    const listContainer = document.getElementById('quiz-options-list');
    listContainer.innerHTML = '';
    
    // Populate options
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "quiz-option-btn w-full p-4 text-left text-sm font-medium border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 transition-all flex items-start gap-3";
        btn.innerHTML = `
            <span class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs text-slate-500 font-semibold shrink-0">${String.fromCharCode(65 + idx)}</span>
            <span class="text-slate-700 dark:text-slate-300 leading-snug">${opt}</span>
        `;
        btn.onclick = () => selectQuizOption(idx, btn);
        listContainer.appendChild(btn);
    });
    
    // Hide feedback box
    document.getElementById('quiz-feedback').classList.add('hidden');
    
    // Reset next button state
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.innerText = 'Conferma';
    nextBtn.disabled = true;
    
    quizState.selectedOption = null;
    quizState.answered = false;
    
    // Scroll quiz container to top
    document.querySelector('main').scrollTop = 0;
}

function selectQuizOption(idx, element) {
    if (quizState.answered) return;
    
    quizState.selectedOption = idx;
    
    // Clear selections in other buttons
    const btns = document.querySelectorAll('.quiz-option-btn');
    btns.forEach(btn => {
        btn.classList.remove('border-indigo-600', 'dark:border-indigo-400', 'bg-indigo-50/30');
        btn.querySelector('span').classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
    });
    
    // Set selection border to active clicked
    element.classList.add('border-indigo-600', 'dark:border-indigo-400', 'bg-indigo-50/30');
    const badge = element.querySelector('span');
    badge.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
    
    // Enable Next/Conferma Button
    document.getElementById('quiz-next-btn').disabled = false;
}

function nextQuizStep() {
    const q = quizState.questions[quizState.currentIndex];
    const nextBtn = document.getElementById('quiz-next-btn');
    
    if (!quizState.answered) {
        // User clicked "Conferma" to evaluate selection
        quizState.answered = true;
        const selectedIdx = quizState.selectedOption;
        const isCorrect = (selectedIdx === q.answer);
        
        if (isCorrect) {
            quizState.score++;
        }
        
        // Show correct / incorrect colors on buttons
        const btns = document.querySelectorAll('.quiz-option-btn');
        btns.forEach((btn, idx) => {
            const badge = btn.querySelector('span');
            
            if (idx === q.answer) {
                // Correct answer is colored in green
                btn.classList.remove('border-indigo-600', 'dark:border-indigo-400', 'bg-indigo-50/30');
                btn.classList.add('border-emerald-500', 'dark:border-emerald-500/50', 'bg-emerald-50/30', 'dark:bg-emerald-950/20');
                badge.classList.remove('bg-indigo-600');
                badge.classList.add('bg-emerald-500', 'text-white', 'border-emerald-500');
            } else if (idx === selectedIdx) {
                // Wrong clicked selection colored in red
                btn.classList.remove('border-indigo-600', 'dark:border-indigo-400', 'bg-indigo-50/30');
                btn.classList.add('border-rose-500', 'dark:border-rose-500/50', 'bg-rose-50/30', 'dark:bg-rose-950/20');
                badge.classList.remove('bg-indigo-600');
                badge.classList.add('bg-rose-500', 'text-white', 'border-rose-500');
            }
            
            btn.disabled = true; // disable clicks
        });
        
        // Populate feedback panel
        const feedbackBox = document.getElementById('quiz-feedback');
        const feedbackIcon = document.getElementById('quiz-feedback-icon');
        const feedbackTitle = document.getElementById('quiz-feedback-title');
        const feedbackExplanation = document.getElementById('quiz-feedback-explanation');
        
        feedbackBox.classList.remove('hidden');
        if (isCorrect) {
            feedbackBox.className = "p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20 flex items-start gap-3 transition-all";
            feedbackIcon.className = "w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5";
            feedbackIcon.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i>';
            feedbackTitle.innerText = "Risposta Esatta!";
            feedbackTitle.className = "text-sm font-bold text-emerald-950 dark:text-emerald-400";
        } else {
            feedbackBox.className = "p-4 rounded-2xl border border-rose-200 dark:border-rose-800 bg-rose-50/30 dark:bg-rose-950/20 flex items-start gap-3 transition-all";
            feedbackIcon.className = "w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0 mt-0.5";
            feedbackIcon.innerHTML = '<i data-lucide="x" class="w-3.5 h-3.5"></i>';
            feedbackTitle.innerText = "Risposta Errata!";
            feedbackTitle.className = "text-sm font-bold text-rose-950 dark:text-rose-400";
        }
        feedbackExplanation.innerText = q.explanation;
        
        lucide.createIcons();
        
        // Update Action text
        if (quizState.currentIndex === quizState.questions.length - 1) {
            nextBtn.innerHTML = 'Vedi Risultato <i data-lucide="chevron-right" class="w-4 h-4"></i>';
        } else {
            nextBtn.innerHTML = 'Prossima <i data-lucide="chevron-right" class="w-4 h-4"></i>';
        }
        lucide.createIcons();
        
    } else {
        // User clicked "Prossima" / "Vedi Risultato" to advance
        if (quizState.currentIndex < quizState.questions.length - 1) {
            quizState.currentIndex++;
            renderQuizQuestion();
        } else {
            showQuizResults();
        }
    }
}

function showQuizResults() {
    const finalPercent = Math.round((quizState.score / quizState.questions.length) * 100);
    
    // Save quiz score in state & localStorage if it's high score
    const prevScore = quizScores[currentLessonId] || 0;
    if (finalPercent > prevScore) {
        quizScores[currentLessonId] = finalPercent;
        localStorage.setItem('course_quiz_scores', JSON.stringify(quizScores));
        
        // Auto-complete lesson if scored >= 80%
        if (finalPercent >= 80 && !completedLessons.includes(currentLessonId)) {
            completedLessons.push(currentLessonId);
            localStorage.setItem('course_completed_lessons', JSON.stringify(completedLessons));
            document.getElementById('lesson-completed-checkbox').checked = true;
        }
        
        updateOverallProgress();
        renderSidebarList();
    }
    
    document.getElementById('quiz-question-container').classList.add('hidden');
    document.getElementById('quiz-results-container').classList.remove('hidden');
    
    document.getElementById('quiz-final-score-text').innerText = `${quizState.score} / ${quizState.questions.length}`;
    document.getElementById('quiz-percentage-text').innerText = `${finalPercent}% Corretto`;
    
    const motivationalEl = document.getElementById('quiz-results-motivational');
    if (finalPercent === 100) {
        motivationalEl.innerText = "Eccellente! Hai risposto correttamente a tutte le domande. Hai una comprensione profonda di questa lezione!";
    } else if (finalPercent >= 80) {
        motivationalEl.innerText = "Ottimo lavoro! Hai superato il quiz brillantemente. Continua così!";
    } else if (finalPercent >= 60) {
        motivationalEl.innerText = "Buon tentativo! Hai superato il quiz, ma ti consigliamo di rileggere la dispensa per chiarire le incertezze.";
    } else {
        motivationalEl.innerText = "Rileggi la dispensa! Metti in pratica lo studio e riprova il quiz. Puoi fare di meglio!";
    }
    
    // Scroll container to top
    document.querySelector('main').scrollTop = 0;
}

function exitQuiz() {
    currentView = 'reader';
    document.getElementById('view-quiz').classList.add('hidden');
    document.getElementById('view-reader').classList.remove('hidden');
}
