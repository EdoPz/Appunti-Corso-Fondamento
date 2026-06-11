// Database dei quiz per il Corso del Fondamento
const quizData = {
  "introduzione-alle-dottrine": [
    {
      "question": "Quali sono i sei fondamenti della dottrina cristiana elencati in Ebrei 6:1-2?",
      "options": [
        "Preghiera, digiuno, elemosina, battesimo, Cena del Signore, studio biblico",
        "Ravvedimento dalle opere morte, fede in Dio, dottrina dei battesimi, imposizione delle mani, risurrezione dei morti, giudizio eterno",
        "Amore, gioia, pace, pazienza, mansuetudine, autocontrollo",
        "Predicazione, profezia, guarigione, battesimo, apostolato, pastorato"
      ],
      "answer": 1,
      "explanation": "Ebrei 6:1-2 elenca esattamente questi sei insegnamenti elementari definiti 'fondamenti'."
    },
    {
      "question": "Chi è l'uomo avveduto che edifica sulla roccia secondo Matteo 7:24-29?",
      "options": [
        "Colui che predica e compie miracoli nel nome di Gesù",
        "Colui che ascolta la Parola e la mette in pratica",
        "Colui che studia la teologia e frequenta regolarmente i culti",
        "Colui che ascolta la Parola ma lascia che passi senza agire"
      ],
      "answer": 1,
      "explanation": "Gesù paragona a un uomo avveduto chi ascolta le sue parole e le mette in pratica: la sua casa non crollerà davanti alle tempeste."
    },
    {
      "question": "Nella metafora fluviale, a cosa servono le sponde del fiume rispetto alle dottrine?",
      "options": [
        "A proteggere la chiesa dalle inondazioni esterne del mondo",
        "A contenere e indirizzare le manifestazioni dello Spirito senza che si disperdano",
        "A limitare la libertà d'azione dei credenti per mantenerli sotto controllo",
        "A stabilire chi fa parte della chiesa e chi ne è escluso"
      ],
      "answer": 1,
      "explanation": "Le sponde servono a contenere e indirizzare la forza del fiume. Nello stesso modo, la sana dottrina canalizza le manifestazioni dello Spirito affinché non si disperdano."
    },
    {
      "question": "Quale monito è espresso nel Salmo 11:3 riguardo alle fondamenta?",
      "options": [
        "Le fondamenta sono invisibili ma costose",
        "Quando le fondamenta sono distrutte, che può fare il giusto?",
        "Ogni casa ha bisogno di fondamenta in pietra naturale",
        "Le fondamenta non contano se le pareti sono forti"
      ],
      "answer": 1,
      "explanation": "Il Salmo 11:3 afferma: 'Quando le fondamenta sono distrutte, che può fare il giusto?', indicando l'assoluta necessità di avere solide basi spirituali."
    },
    {
      "question": "Secondo 1 Timoteo 4:6, da cosa è nutrito un 'buon ministro di Gesù Cristo'?",
      "options": [
        "Dalle parole della fede e della buona dottrina",
        "Dalla sola preghiera contemplativa ed estatica",
        "Dallo studio delle tradizioni umane e della storia ecclesiastica",
        "Dall'approvazione delle persone e della società"
      ],
      "answer": 0,
      "explanation": "Paolo scrive a Timoteo che sarà un buon ministro se sarà 'nutrito nelle parole della fede e della buona dottrina'."
    }
  ],
  "tu-e-la-parola-di-dio": [
    {
      "question": "Secondo il Salmo 119:160, che cos'è la verità?",
      "options": [
        "Un singolo versetto interpretato personalmente",
        "La somma della Parola di Dio",
        "Un'interpretazione riservata solo ad alcuni studiosi",
        "La tradizione orale della chiesa"
      ],
      "answer": 1,
      "explanation": "Salmo 119:160 dichiara: 'La somma della tua parola è verità'. Non si può basare una dottrina su un singolo versetto isolato."
    },
    {
      "question": "Quali sono le tre fasi del metodo induttivo di studio biblico?",
      "options": [
        "Lettura, memorizzazione, proclamazione",
        "Osservazione (cosa vedo?), Interpretazione (cosa significa?), Applicazione (come lo applico?)",
        "Traduzione letterale, esegesi storica, speculazione filosofica",
        "Canto, predicazione, testimonianza pratica"
      ],
      "answer": 1,
      "explanation": "Il metodo induttivo si sviluppa attraverso tre passaggi successivi: Osservazione, Interpretazione e infine Applicazione."
    },
    {
      "question": "Cosa si rischia isolando un versetto dal suo contesto originario?",
      "options": [
        "Di rendere la lettura più rapida ed efficiente",
        "Di costruire false dottrine o avere un'immagine errata di Dio",
        "Di comprendere meglio il significato nascosto e spirituale",
        "Nulla, poiché ogni versetto contiene l'intera teologia biblica"
      ],
      "answer": 1,
      "explanation": "L'isolamento di un versetto senza guardare a ciò che sta prima e dopo rischia di produrre fraintendimenti o eresie (come nel caso degli amici di Giobbe)."
    },
    {
      "question": "A cosa serve l'applicazione pratica nello studio della Bibbia?",
      "options": [
        "A riempire il quaderno di appunti teologici",
        "A far sì che la Parola cambi la nostra vita e non sia solo conoscenza teorica",
        "A mostrare agli altri credenti la propria maturità",
        "Ad acquisire meriti particolari davanti a Dio"
      ],
      "answer": 1,
      "explanation": "Lo scopo finale dello studio non è l'informazione intellettuale ma la trasformazione della nostra vita quotidiana."
    },
    {
      "question": "Quale metodo consiste nello studiare un tema specifico (es. la gioia o la fede) attraverso tutta la Bibbia?",
      "options": [
        "Metodo Biografico",
        "Metodo per Soggetto (o Tematico)",
        "Metodo per Libro",
        "Analisi microscopica di un versetto"
      ],
      "answer": 1,
      "explanation": "Lo studio tematico (o per soggetto) raccoglie ed esamina tutti i riferimenti biblici riguardanti un determinato argomento."
    }
  ],
  "la-nuova-nascita": [
    {
      "question": "In base a Giovanni 3:3-5, cosa occorre fare per vedere ed entrare nel regno di Dio?",
      "options": [
        "Rispettare scrupolosamente la Legge di Mosè",
        "Nascere di nuovo (d'acqua e di Spirito)",
        "Fare grandi opere di beneficenza",
        "Essere discendenti fisici del popolo d'Israele"
      ],
      "answer": 1,
      "explanation": "Gesù risponde a Nicodemo che se uno non nasce di nuovo (d'acqua e di Spirito) non può vedere né entrare nel regno di Dio."
    },
    {
      "question": "Secondo la tripartizione dell'essere umano (1 Tessalonicesi 5:23), come è composto l'uomo?",
      "options": [
        "Corpo, mente e azioni",
        "Spirito, anima e corpo",
        "Cervello, cuore e membra",
        "Ragione, sentimenti e istinto"
      ],
      "answer": 1,
      "explanation": "L'uomo è uno spirito, possiede un'anima (mente, volontà, sentimenti) e vive in un corpo fisico."
    },
    {
      "question": "Cosa accade allo spirito dell'uomo nel momento della nuova nascita?",
      "options": [
        "Viene educato gradualmente a comportarsi bene",
        "Viene rigenerato e ricreato all'istante dallo Spirito Santo, diventando una nuova creatura",
        "Subisce modifiche fisiche avvertibili dal corpo",
        "Resta identico, mentre cambia solo l'anima dell'uomo"
      ],
      "answer": 1,
      "explanation": "Nello spirito avviene una rigenerazione istantanea: le cose vecchie sono passate, sono diventate nuove (2 Corinzi 5:17)."
    },
    {
      "question": "Qual è la differenza fondamentale tra la 'giustificazione' e la 'santificazione'?",
      "options": [
        "La giustificazione è un processo lento, la santificazione è immediata",
        "La giustificazione è l'atto legale e immediato con cui Dio ci dichiara giusti in Cristo; la santificazione è il cammino quotidiano di trasformazione dell'anima",
        "La santificazione riguarda il corpo, la giustificazione riguarda solo la mente",
        "Non vi è alcuna differenza, sono sinonimi che indicano la stessa operazione"
      ],
      "answer": 1,
      "explanation": "Siamo giustificati all'istante per grazia mediante la fede; la santificazione è la maturazione progressiva del nostro carattere allineato alla Parola."
    },
    {
      "question": "Chi è il nostro 'uomo interiore' secondo la dispensa?",
      "options": [
        "La parte conscia del nostro cervello",
        "Il nostro vero io spirituale ricreato a immagine di Dio",
        "La coscienza etica che si sviluppa con la crescita",
        "Il subconscio che custodisce i ricordi d'infanzia"
      ],
      "answer": 1,
      "explanation": "L'uomo interiore è lo spirito umano rigenerato che riceve la Parola e ha comunione con Dio."
    }
  ],
  "ravvedimento-dalle-opere-morte": [
    {
      "question": "Qual è il significato etimologico della parola greca 'Metanoia' (tradotta con Ravvedimento)?",
      "options": [
        "Un forte sentimento di tristezza e rimorso",
        "Cambiamento di mente, di direzione e di attitudine",
        "Punizione autoinflitta per espiare le proprie colpe",
        "Confessione verbale e formale dei peccati"
      ],
      "answer": 1,
      "explanation": "Metanoia significa letteralmente cambiare modo di pensare, che produce una svolta radicale di 180 gradi nella condotta di vita."
    },
    {
      "question": "Cosa NON è il vero ravvedimento secondo le Scritture?",
      "options": [
        "Un cambiamento di direzione visibile nei frutti",
        "Il solo rimorso emotivo o la paura delle conseguenze senza un reale cambiamento",
        "Un'inversione di marcia rispetto al peccato",
        "Riconoscere l'errore e decidere di abbandonarlo"
      ],
      "answer": 1,
      "explanation": "Il semplice rimorso (come quello di Giuda) o il dispiacere emotivo temporaneo non equivalgono al ravvedimento biblico che cambia il comportamento."
    },
    {
      "question": "Cosa si intende per 'opere morte' nella dispensa?",
      "options": [
        "Le opere di carità fatte a favore delle persone defunte",
        "Qualsiasi sforzo o opera compiuta per cercare di guadagnare la salvezza senza la fede in Cristo",
        "I lavori fisici faticosi svolti la domenica",
        "I crimini violenti puniti dalla legge civile"
      ],
      "answer": 1,
      "explanation": "Le opere morte sono tutti i tentativi religiosi e morali di rendersi giusti davanti a Dio basandosi sulle proprie forze anziché sulla grazia di Cristo."
    },
    {
      "question": "Quali sono gli strumenti che Dio usa per condurci al ravvedimento?",
      "options": [
        "La condanna implacabile e il timore del giudizio umano",
        "La Sua bontà, la Sua Parola che convince di peccato, e la correzione paterna",
        "Solo i miracoli eclatanti e le visioni celesti",
        "La povertà, le malattie e le disgrazie familiari"
      ],
      "answer": 1,
      "explanation": "Romani 2:4 dice che la bontà di Dio spinge al ravvedimento, unita all'opera della Parola e dello Spirito."
    },
    {
      "question": "Qual è la differenza tra 'remissione' e 'perdono' dei peccati?",
      "options": [
        "La remissione cancella la colpa legalmente; il perdono risana la relazione",
        "La remissione è per gli increduli; il perdono è solo per i pastori",
        "Non c'è differenza: sono termini del Vecchio Testamento inutilizzati oggi",
        "La remissione richiede sacrifici fisici; il perdono è gratuito"
      ],
      "answer": 0,
      "explanation": "La remissione cancella legalmente il peccato e la condanna (cancellazione del debito); il perdono ripristina la comunione e la relazione intima con il Padre."
    }
  ],
  "il-patto-de-sangue": [
    {
      "question": "Come si può definire il concetto biblico di 'Patto'?",
      "options": [
        "Un contratto revocabile tra due persone con clausole d'uscita",
        "Un legame indissolubile e solenne suggellato dal sangue, che unisce due parti in modo permanente",
        "Un accordo verbale temporaneo basato sulla simpatia reciproca",
        "Un'imposizione unilaterale che cancella la volontà dell'uomo"
      ],
      "answer": 1,
      "explanation": "Il patto (di sangue) è l'accordo più sacro, forte e inviolabile dell'antichità; un'alleanza eterna in cui si condivide tutto ciò che si possiede."
    },
    {
      "question": "Nel patto di sangue, qual è il significato profondo del sangue stesso?",
      "options": [
        "Rappresenta una semplice penale in caso di disubbidienza",
        "Contiene la vita stessa: donare il sangue significa scambiare e donare la propria vita per l'altro",
        "Ha un valore magico di protezione dagli spiriti",
        "Simboleggia la sofferenza e la sconfitta dell'uomo"
      ],
      "answer": 1,
      "explanation": "Levitico 17:11 dichiara che la vita della carne è nel sangue. Mettere in comune il sangue significa scambiarsi la vita e assumersi reciproca responsabilità di protezione."
    },
    {
      "question": "Cosa rappresenta il primo spargimento di sangue nella Genesi dopo il peccato di Adamo ed Eva?",
      "options": [
        "Un castigo divino per punire la disubbidienza dei primi uomini",
        "L'uccisione di animali da parte di Dio per fare vesti di pelle, prefigurando la copertura del peccato tramite un sostituto",
        "La ferita che Caino ha inflitto ad Abele nei campi",
        "Una leggenda senza alcun significato dottrinale"
      ],
      "answer": 1,
      "explanation": "In Genesi 3:21, Dio riveste Adamo ed Eva con tuniche di pelle di animali. Questo ha richiesto la morte di un innocente, prefigurando il sacrificio espiatorio."
    },
    {
      "question": "In base a Ebrei 9:22, cosa è necessario affinché vi sia remissione dei peccati?",
      "options": [
        "Una sincera promessa di non sbagliare più",
        "Lo spargimento di sangue",
        "Il digiuno prolungato per quaranta giorni",
        "Un'offerta finanziaria presentata al tempio"
      ],
      "answer": 1,
      "explanation": "La Scrittura afferma categoricamente: 'Senza spargimento di sangue non c'è remissione'."
    },
    {
      "question": "Durante l'ultima cena, cosa dichiara Gesù nel porgere il calice ai discepoli?",
      "options": [
        "Questo calice rappresenta la vostra promessa di fedeltà",
        "Questo calice è il nuovo patto nel mio sangue, che è sparso per voi",
        "Questo vino serve per rallegrarvi durante la festa",
        "Chiunque berrà questo calice non subirà mai persecuzioni"
      ],
      "answer": 1,
      "explanation": "Gesù istituisce la Cena del Signore definendo il calice come il 'nuovo patto nel mio sangue', che sostituisce definitivamente i vecchi sacrifici animali."
    }
  ],
  "imposizione-delle-mani": [
    {
      "question": "Cos'è, dal punto di vista spirituale, l'imposizione delle mani?",
      "options": [
        "Un gesto puramente formale e simbolico privo di effetti spirituali",
        "Un canale di trasmissione e di impartizione di benedizione, autorità, guarigione o Spirito Santo",
        "Una pratica medica dell'antichità per diagnosticare le malattie",
        "Un rito riservato esclusivamente alla consacrazione dei re d'Israele"
      ],
      "answer": 1,
      "explanation": "L'imposizione delle mani è una dottrina fondamentale che funge da punto di contatto per la trasmissione di benedizioni spirituali, doni e potenza di Dio."
    },
    {
      "question": "Nel Vecchio Testamento, quale significato aveva poggiare le mani sul capo del capro espiatorio?",
      "options": [
        "La benedizione dell'animale prima della liberazione nel deserto",
        "La trasmissione e il trasferimento dei peccati e delle colpe del popolo sull'animale sostituto",
        "La scelta dell'animale più bello e forte per l'agricoltura",
        "L'addomesticamento dell'animale per scopi rituali"
      ],
      "answer": 1,
      "explanation": "Il sommo sacerdote trasferiva simbolicamente le colpe di Israele sull'animale innocente, che le portava via nel deserto."
    },
    {
      "question": "Nel Nuovo Testamento, per quali scopi principali viene praticata l'imposizione delle mani?",
      "options": [
        "Battesimo in acqua, predicazione all'aperto, esorcismo",
        "Guarigione dei malati, battesimo nello Spirito Santo, consacrazione di ministeri ed invio",
        "Scrittura dei vangeli, celebrazione delle festività ebraiche, elemosina",
        "Esame teologico dei discepoli prima del quiz"
      ],
      "answer": 1,
      "explanation": "Gesù e gli apostoli imponevano le mani per guarire i malati, trasmettere lo Spirito Santo e separare/consacrare i ministeri per l'opera di Dio."
    },
    {
      "question": "Quale avvertimento scrive Paolo a Timoteo in 1 Timoteo 5:22 riguardo a questa pratica?",
      "options": [
        "Non imporre le mani su chi non ti è simpatico",
        "Non imporre le mani a nessuno con fretta, per non essere partecipe dei peccati altrui",
        "Imponi le mani solo di domenica e all'interno della chiesa",
        "Evita di imporre le mani se hai le mani fredde"
      ],
      "answer": 1,
      "explanation": "Paolo raccomanda prudenza e discernimento: imporre le mani in fretta su qualcuno senza conoscerne la condotta morale rischia di associare spiritualmente ai suoi peccati."
    },
    {
      "question": "Chi, nel Nuovo Testamento, ricevette lo Spirito Santo tramite l'imposizione delle mani da parte di Pietro e Giovanni?",
      "options": [
        "I discepoli a Samaria",
        "I centurioni romani a Cesarea",
        "I sacerdoti del tempio di Gerusalemme",
        "I mercanti del tempio"
      ],
      "answer": 0,
      "explanation": "Atti 8 descrive come i credenti di Samaria ricevettero lo Spirito Santo quando Pietro e Giovanni imposero loro le mani."
    }
  ],
  "resurrezione-dei-morti": [
    {
      "question": "Qual è la differenza principale tra la risurrezione di Gesù e le risurrezioni compiute in precedenza (es. Lazzaro)?",
      "options": [
        "Gesù è risorto da solo, mentre gli altri hanno avuto bisogno di aiuto",
        "Lazzaro e gli altri sono risorti per poi morire di nuovo fisicamente; Gesù è risorto con un corpo glorioso incorruttibile per non morire mai più",
        "La risurrezione di Gesù è avvenuta di notte, le altre di giorno",
        "Non c'è alcuna differenza reale dal punto di vista biologico"
      ],
      "answer": 1,
      "explanation": "Gesù è la 'primizia' dei risorti: il primo a risorgere con un corpo spirituale glorioso ed eterno che non sperimenta più la morte o la corruzione."
    },
    {
      "question": "Secondo 1 Corinzi 15, se Cristo non fosse risorto, come sarebbe la nostra fede?",
      "options": [
        "Ugualmente valida, poiché contano solo i suoi insegnamenti morali",
        "Vana, e noi saremmo ancora nei nostri peccati",
        "Più misteriosa e spirituale",
        "Più facile da spiegare al mondo"
      ],
      "answer": 1,
      "explanation": "Paolo scrive che se Cristo non è risorto, la predicazione è vana ed è vana anche la nostra fede."
    },
    {
      "question": "Da dove ha origine la morte fisica dell'essere umano secondo la Bibbia?",
      "options": [
        "È un processo naturale ed evolutivo insito nella creazione iniziale",
        "Dal peccato di Adamo che ha introdotto la morte spirituale e fisica nella creazione",
        "Da una decisione arbitraria di Dio slegata dalle azioni umane",
        "Da una carenza nutrizionale originaria"
      ],
      "answer": 1,
      "explanation": "La morte è entrata nel mondo a causa del peccato originale (Romani 5:12): il salario del peccato è la morte."
    },
    {
      "question": "In cosa consisterà la 'redenzione del corpo' per i credenti al ritorno di Gesù?",
      "options": [
        "Nel restauro biologico dei tessuti malati per prolungare la vita terrestre",
        "Nella trasformazione istantanea del nostro corpo mortale in un corpo incorruttibile e glorioso",
        "Nel trasferimento dello spirito in un corpo totalmente estraneo",
        "Nella reincarnazione in un altro essere umano"
      ],
      "answer": 1,
      "explanation": "1 Corinzi 15:52-53 descrive come in un batter d'occhio i morti risusciteranno incorruttibili e noi saremo trasformati."
    },
    {
      "question": "In base a Filippesi 3:20-21, a quale modello sarà conforme il nostro corpo risorto?",
      "options": [
        "Al corpo originale di Adamo prima del peccato",
        "Al corpo glorioso di Gesù Cristo",
        "A quello degli angeli in cielo",
        "Non avrà alcuna forma visibile"
      ],
      "answer": 1,
      "explanation": "La Scrittura dice che Gesù trasformerà il corpo della nostra umiliazione per renderlo conforme al suo corpo glorioso."
    }
  ],
  "il-giudizio-eterno": [
    {
      "question": "Cosa significa essenzialmente la parola 'Giudizio' all'origine?",
      "options": [
        "Punire violentemente un colpevole",
        "Scindere il giusto dallo sbagliato, discernere, valutare",
        "Ignorare gli errori per amore della pace",
        "Prendere una decisione affrettata basata sul pregiudizio"
      ],
      "answer": 1,
      "explanation": "Giudizio significa discernere e scindere il bene dal male per ristabilire l'ordine e la giustizia."
    },
    {
      "question": "Cosa si intende per 'Giudizio della Croce' avvenuto nel passato?",
      "options": [
        "La condanna che Ponzio Pilato ha subito per aver crocifisso Gesù",
        "Il giudizio in cui Satana è stato spogliato di autorità e il peccato nella carne è stato condannato in Cristo",
        "Il giudizio del popolo ebraico che ha preferito Barabba",
        "L'autocondanna provata dai soldati romani ai piedi della croce"
      ],
      "answer": 1,
      "explanation": "Sulla croce, Gesù ha pagato interamente la condanna del peccato per noi e ha sconfitto legalmente il principe di questo mondo."
    },
    {
      "question": "Qual è lo scopo del 'Tribunale di Cristo' (giudizio sull'operato del credente)?",
      "options": [
        "Decidere se il credente entrerà in paradiso o all'inferno (salvezza)",
        "Valutare l'opera e le motivazioni del credente per assegnare premi/ricompense",
        "Punire pubblicamente i peccati commessi dopo la conversione",
        "Selezionare i leader della chiesa nel millennio"
      ],
      "answer": 1,
      "explanation": "Il Tribunale di Cristo (1 Corinzi 3:11-15) non riguarda la salvezza (già ottenuta per grazia), ma la valutazione delle nostre opere e l'assegnazione dei premi."
    },
    {
      "question": "Nel Tribunale di Cristo, quali materiali simboleggiano le opere approvate che resistono al fuoco?",
      "options": [
        "Legno, fieno, stoppia",
        "Oro, argento, pietre preziose",
        "Ferro, rame, bronzo",
        "Carta, plastica, cera"
      ],
      "answer": 1,
      "explanation": "L'oro, l'argento e le pietre preziose resistono al fuoco e rappresentano opere fatte con motivazioni pure, amore e obbedienza alla Parola."
    },
    {
      "question": "Chi sarà giudicato nel 'Giudizio del Gran Trono Bianco' descritto in Apocalisse 20?",
      "options": [
        "La chiesa dei credenti prima del rapimento",
        "Unicamente i non credenti, giudicati in base alle loro opere scritte nei libri",
        "Gli angeli rimasti fedeli a Dio",
        "I patriarchi del Vecchio Testamento"
      ],
      "answer": 1,
      "explanation": "Il Gran Trono Bianco è il giudizio finale dei morti non credenti di tutte le epoche, dove chi non è scritto nel libro della vita viene condannato."
    }
  ],
  "etica-cristiana": [
    {
      "question": "Che cos'è l'Etica Cristiana secondo la definizione della dispensa?",
      "options": [
        "Una dottrina teologica obbligatoria per la salvezza",
        "Uno strumento comportamentale che ci salvaguarda da errori verso Dio e verso il prossimo",
        "Un elenco di regole create dall'uomo per limitare lo Spirito",
        "Il codice penale applicato all'interno della chiesa locale"
      ],
      "answer": 1,
      "explanation": "L'etica non è una dottrina ma la condotta pratica che protegge il nostro cuore, la nostra fede e le nostre relazioni da errori."
    },
    {
      "question": "La Bibbia insegna una sottomissione cieca e assoluta alle autorità umane?",
      "options": [
        "Sì, il credente deve sempre obbedire a qualsiasi ordine dello Stato o dei leader",
        "No, l'obbedienza è richiesta nel bene. Se l'autorità ordina di disubbidire a Dio, si deve ubbidire a Dio piuttosto che agli uomini",
        "Sì, ma solo all'interno del posto di lavoro",
        "No, il cristiano è libero dalla legge e non deve sottomettersi a nessuna autorità"
      ],
      "answer": 1,
      "explanation": "La sottomissione all'autorità è stabilita da Dio, ma non è cieca: figure come Raab, le ostetriche ebree e gli apostoli disubbidirono a ordini contrari alla volontà divina."
    },
    {
      "question": "Secondo Proverbi 25:28, a cosa è paragonato l'uomo che non sa dominare l'ira?",
      "options": [
        "A un leone ruggente senza preda",
        "A una città smantellata e senza mura",
        "A una diga piena di crepe",
        "A una lampada senza olio"
      ],
      "answer": 1,
      "explanation": "Chi non ha controllo sul proprio spirito ed ira è come una città con le mura abbattute: vulnerabile a qualunque attacco esterno."
    },
    {
      "question": "Cosa si intende per 'doppio peso e doppia misura' in Proverbi 20:10?",
      "options": [
        "Un metodo di bilanciamento delle offerte",
        "Giudicare le persone in modo diverso ed ingiusto a seconda di convenienze personali",
        "Una bilancia professionale usata nel commercio antico",
        "La doppia porzione di Spirito Santo"
      ],
      "answer": 1,
      "explanation": "Il doppio peso e la doppia misura simboleggiano l'ipocrisia e il favoritismo nel giudicare le situazioni, cose abominevoli all'Eterno."
    },
    {
      "question": "Nel modello a cerchi concentrici dell'etica, cosa si trova al nucleo (centro)?",
      "options": [
        "I Dieci Comandamenti",
        "Il Cuore / Amore",
        "Il Carattere e i Principi",
        "Le leggi civili dello Stato"
      ],
      "answer": 1,
      "explanation": "Al centro di tutto c'è il Cuore e l'Amore; da esso si sviluppa il Carattere (cerchio intermedio) e infine l'Etica/Regole esterne (cerchio esterno)."
    }
  ],
  "relazioni-sane": [
    {
      "question": "Qual è il modello supremo di relazione a cui deve ispirarsi il credente?",
      "options": [
        "I modelli relazionali proposti dalla psicologia moderna",
        "Il modello della Trinità (Padre, Figlio e Spirito Santo in perfetta unità)",
        "Le alleanze politiche ed economiche descritte nei libri storici",
        "Il comportamento degli eroi mitologici"
      ],
      "answer": 1,
      "explanation": "La Trinità mostra il perfetto esempio di relazione basato su amore, onore reciproco, sottomissione volontaria e perfetta unità nella diversità."
    },
    {
      "question": "Perché il confronto e la vita comunitaria sono definiti importanti nella dispensa?",
      "options": [
        "Perché permettono di controllare il comportamento degli altri",
        "Perché, come il ferro affila il ferro, le relazioni ci aiutano a crescere, limare il carattere e specchiarci",
        "Perché riducono i costi operativi delle attività di chiesa",
        "Perché garantiscono il successo sociale immediato"
      ],
      "answer": 1,
      "explanation": "Proverbi 27:17 dice: 'Il ferro affila il ferro; così l'uomo affila il volto del suo compagno'. Le relazioni sane ci aiutano a maturare."
    },
    {
      "question": "Cosa significa perdonare secondo il concetto biblico illustrato?",
      "options": [
        "Minimizzare l'offesa dicendo che in fondo non è successo nulla",
        "Rilasciare l'offensore, cancellare il debito emotivo e rimettere il giudizio nelle mani di Dio",
        "Dimenticare all'istante l'accaduto per mezzo di uno sforzo mentale",
        "Fingere che la relazione sia tornata intima come prima senza alcun chiarimento"
      ],
      "answer": 1,
      "explanation": "Il perdono è una scelta di obbedienza a Dio: significa sciogliere la persona dall'obbligo di risarcimento emotivo nei nostri confronti."
    },
    {
      "question": "Qual è il rischio di trattenere il risentimento e la mancanza di perdono?",
      "options": [
        "Aumentare il proprio senso di giustizia personale",
        "Aprire la porta ad amarezza, legami spirituali e ostacoli alla nostra comunione con Dio",
        "Migliorare la reputazione di fronte agli altri",
        "Nessuno, il risentimento è una reazione protettiva sana"
      ],
      "answer": 1,
      "explanation": "La mancanza di perdono intossica la nostra anima e impedisce alla grazia di Dio di scorrere liberamente nella nostra vita."
    },
    {
      "question": "Come deve avvenire il confronto biblico in caso di offesa (Matteo 18:15)?",
      "options": [
        "Parlandone con altri fratelli per sfogarsi prima del chiarimento",
        "Andando privatamente a parlare con l'offensore, da solo a solo, con spirito di mansuetudine",
        "Pubblicando l'offesa sui social network per ricevere sostegno",
        "Ignorando l'offensore sperando che si accorga da solo dell'errore"
      ],
      "answer": 1,
      "explanation": "Matteo 18 insegna a chiarire prima privatamente 'fra te e lui solo', per preservare la dignità della persona e cercare la riconciliazione."
    }
  ],
  "la-chiesa-locale-e-struttura-gesu-vive": [
    {
      "question": "Cosa significa far parte del corpo di Cristo a livello pratico?",
      "options": [
        "Avere il proprio nome registrato in un elenco d'archivio",
        "Essere un membro attivo, inserito in una chiesa locale, che collabora e cresce in relazione con le altre membra",
        "Frequentare saltuariamente le riunioni quando si ha tempo",
        "Seguire i culti esclusivamente online senza interagire con nessuno"
      ],
      "answer": 1,
      "explanation": "La Bibbia paragona la chiesa a un corpo: ogni membro ha una funzione specifica e deve essere collegato agli altri per funzionare bene."
    },
    {
      "question": "Qual è la responsabilità del credente verso le autorità spirituali della chiesa (Ebrei 13:17)?",
      "options": [
        "Ubbidire e sottomettersi nel Signore, affinché svolgano il loro ministero con gioia e non sospirando",
        "Criticarle costantemente per spingerle a migliorare",
        "Ignorare le loro linee guida per mantenere l'indipendenza spirituale",
        "Sostituirsi a loro nella gestione della comunità"
      ],
      "answer": 0,
      "explanation": "Ebrei 13:17 comanda di avere rispetto e sottomettersi alla guida spirituale dei conduttori che vegliano sulle nostre anime."
    },
    {
      "question": "Qual è lo scopo principale dell'Associazione Noah all'interno della visione di 'Gesù Vive'?",
      "options": [
        "Gestire l'amministrazione finanziaria interna della chiesa",
        "Operare nel sociale per dare risposte pratiche ai bisogni della comunità (povertà, emarginazione, aiuti concreti)",
        "Organizzare gite e attività ricreative per i membri",
        "Provvedere alla formazione teologica accademica"
      ],
      "answer": 1,
      "explanation": "L'Associazione Noah è il braccio sociale della chiesa, volto a portare il Vangelo pratico della solidarietà alle persone in difficoltà."
    },
    {
      "question": "Cosa NON significa essere membro di una chiesa locale secondo la dispensa?",
      "options": [
        "Condividere la visione e sostenere l'opera di Dio",
        "Essere un semplice spettatore passivo che usufruisce solo di servizi",
        "Sviluppare relazioni di cura e stima reciproca",
        "Mettere a disposizione i propri doni per servire"
      ],
      "answer": 1,
      "explanation": "Essere membri significa appartenere attivamente, non essere clienti o spettatori di uno spettacolo domenicale."
    },
    {
      "question": "Perché è importante camminare in sottomissione reciproca e autorità?",
      "options": [
        "Per mantenere una struttura rigida e piramidale",
        "Perché l'autorità spirituale ci protegge e ci permette di operare in ordine e potenza secondo la Parola",
        "Per evitare che chiunque prenda iniziative personali",
        "Perché così stabilisce lo statuto civile dell'associazione"
      ],
      "answer": 1,
      "explanation": "Dio è un Dio di ordine. Camminare sotto copertura spirituale e in sottomissione reciproca sblocca l'autorità reale del credente contro il nemico."
    }
  ],
  "dottrina-dei-battesimi": [
    {
      "question": "Quanti tipi di battesimo esistono secondo Ebrei 6:1-2?",
      "options": [
        "Uno solo: il battesimo in acqua",
        "Due: il battesimo in acqua e il battesimo nello Spirito Santo",
        "Tre: il battesimo in Cristo, il battesimo in acqua e il battesimo nello Spirito Santo",
        "Quattro: battesimo in Cristo, in acqua, nello Spirito Santo e di fuoco"
      ],
      "answer": 2,
      "explanation": "La Scrittura parla di 'battesimi' al plurale. I tre tipi sono: battesimo in Cristo (per la salvezza), battesimo in acqua (per ubbidienza) e battesimo nello Spirito Santo (per ricevere potenza)."
    },
    {
      "question": "Il battesimo in acqua è necessario per la salvezza?",
      "options": [
        "Sì, senza il battesimo in acqua non si può essere salvati",
        "No, il battesimo in acqua non salva; ciò che salva è il credere in Dio e il battesimo in Cristo",
        "Sì, ma solo se avviene per immersione completa",
        "No, il battesimo in acqua è stato abolito nel Nuovo Testamento"
      ],
      "answer": 1,
      "explanation": "Il battesimo in acqua non salva. Ciò che salva è il credere in Dio e il battesimo in Cristo (1Pt 3:21; Ro 10:9). Il battesimo in acqua è un atto di ubbidienza e testimonianza pratica."
    },
    {
      "question": "Qual è la differenza tra lo Spirito Santo 'IN noi' e lo Spirito Santo 'SU di noi'?",
      "options": [
        "Non c'è differenza, sono la stessa esperienza",
        "Lo Spirito Santo IN noi è presente dalla nuova nascita e testimonia la salvezza; lo Spirito Santo SU di noi è il battesimo nello Spirito che dà potenza per il servizio",
        "Lo Spirito Santo IN noi è per i pastori, SU di noi è per tutti i credenti",
        "Lo Spirito Santo IN noi è temporaneo, SU di noi è permanente"
      ],
      "answer": 1,
      "explanation": "Lo Spirito Santo dimora IN noi dalla nuova nascita (1Cor 12:13; Ro 8:9). Il battesimo nello Spirito Santo è lo Spirito SU DI NOI, un riempimento di potenza che equipaggia per il servizio e l'evangelizzazione (At 1:8)."
    },
    {
      "question": "Qual è l'evidenza iniziale del battesimo nello Spirito Santo?",
      "options": [
        "Un sentimento di pace interiore profonda",
        "La capacità di compiere miracoli visibili",
        "Il parlare in altre lingue",
        "La visione di angeli e manifestazioni celesti"
      ],
      "answer": 2,
      "explanation": "L'evidenza iniziale del battesimo nello Spirito Santo è il parlare in altre lingue, come avvenuto il giorno della Pentecoste (At 2:4)."
    },
    {
      "question": "Davanti a quanti e quali 'testimoni' serve spiritualmente il battesimo in acqua?",
      "options": [
        "Due: la famiglia e la chiesa locale",
        "Tre: Dio e gli angeli, il mondo, e Satana",
        "Uno solo: il pastore che battezza",
        "Tre: il Padre, il Figlio e lo Spirito Santo"
      ],
      "answer": 1,
      "explanation": "Il battesimo in acqua serve come testimonianza davanti a tre testimoni: a Dio e agli angeli (ubbidienza), al mondo (separazione dai principi mondani) e a Satana (dichiarazione di appartenenza al regno della luce)."
    }
  ],
  "principi-di-preghiera": [
    {
      "question": "Secondo la premessa della dispensa, perché preghiamo?",
      "options": [
        "Per meritarci il favore di Dio e ottenere la salvezza",
        "Per aprire il cielo che è chiuso sopra di noi",
        "Per vivere ciò che il cielo ha già riversato su di noi e mostrare il Regno di Dio",
        "Per dimostrare a Dio che siamo degni delle Sue benedizioni"
      ],
      "answer": 2,
      "explanation": "Non preghiamo per meritare il favore di Dio (siamo già nel Suo favore, Ef 1:6), né per aprire il cielo (è già aperto, Eb 6:20). Preghiamo per vivere ciò che il cielo ha riversato su di noi e mostrare il Regno di Dio (Lu 17:21)."
    },
    {
      "question": "Quali sono le due 'colonne portanti' della casa di preghiera?",
      "options": [
        "Adorazione e digiuno",
        "Fede e Parola",
        "Intercessione e lode",
        "Umiltà e perseveranza"
      ],
      "answer": 1,
      "explanation": "Le colonne portanti sono FEDE e PAROLA. La fede ha due facce: fede in Dio (basata sulla Sua potenza) e fiducia in Dio (basata sul Suo amore)."
    },
    {
      "question": "Nel modello del 'Padre nostro', qual è il primo elemento della preghiera?",
      "options": [
        "La confessione dei peccati personali",
        "La richiesta dei bisogni quotidiani",
        "L'adorazione ('sia santificato')",
        "La guerra spirituale contro il nemico"
      ],
      "answer": 2,
      "explanation": "La preghiera del Signore inizia e finisce con l'adorazione ('sia santificato il tuo nome'), ci ricorda la nostra relazione con Dio e mette i bisogni del Regno al primo posto."
    },
    {
      "question": "Cosa significa 'vegliare nello spirito' secondo la dispensa?",
      "options": [
        "Non dormire fisicamente durante la notte per pregare",
        "Avere il cuore sempre attento e collegato ai pensieri e alla vita di Dio",
        "Controllare le azioni degli altri fratelli nella chiesa",
        "Stare svegli durante le riunioni di preghiera"
      ],
      "answer": 1,
      "explanation": "Vegliare non significa non dormire fisicamente. Cantico 5:2 dice: 'Io dormivo ma il mio cuore vegliava'. Significa essere spiritualmente attivi e svegli, con il cuore sempre connesso a Dio."
    },
    {
      "question": "Perché Gesù riceveva sempre risposta alle Sue preghiere?",
      "options": [
        "Perché era il Figlio di Dio e aveva un privilegio esclusivo non accessibile ai credenti",
        "Perché pregava più a lungo degli altri e con più insistenza",
        "Perché conosceva il Padre, conosceva il nemico, obbediva sempre, sapeva i desideri del Padre e sapeva che il Padre lo amava",
        "Perché digiunava ogni giorno e non aveva bisogni materiali"
      ],
      "answer": 2,
      "explanation": "Gesù riceveva risposta perché: conosceva il Padre, conosceva il nemico, obbediva sempre al Padre, sapeva quali erano i Suoi desideri, e sapeva che il Padre lo amava (Gv 16:23-27; Gv 17:1-26)."
    }
  ]
};
