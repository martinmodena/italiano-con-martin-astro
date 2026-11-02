// Lezione B1 «I nomi alterati: -ino, -one, -accio» (2026-11-02): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in nomi-alterati-i18n.mjs.
//
// Martin il 2026-11-02: «non ho visto nemmeno nulla per vezzeggiativi, peggiorativi vero?». La lezione va
// dalla forma (si toglie la vocale finale e si aggiunge il suffisso) ai diminutivi e vezzeggiativi (-ino,
// -etto, -ello, -uccio, anche negli aggettivi e negli avverbi: carino, benino), agli accrescitivi (-one, con
// la porta → il portone) e ai peggiorativi (-accio, -astro, compreso fratellastro), fino ai falsi alterati
// (mulino, mattone, lampone) e agli alterati diventati parole nuove (panino, ombrellone, cassetto).
// Nell'indice B1 sta dopo «I connettivi». Il confronto con la lingua dello studente è in confronti-lingua.mjs.

export default {
  slug: 'nomi-alterati',
  level: 'b1',
  next: 'congiuntivo-presente',
  after: 'connettivi',
  minutes: 25,
  hero: { src: 'grammatica/nomi-alterati-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'italian-diminutives-and-augmentatives',
    es: 'diminutivos-y-aumentativos-en-italiano',
    fr: 'diminutifs-et-augmentatifs-en-italien',
    cs: 'zdrobneliny-v-italstine',
    pl: 'zdrobnienia-i-zgrubienia-po-wlosku',
    tr: 'italyancada-kucultme-ve-buyutme-ekleri',
    de: 'verkleinerungsformen-im-italienischen',
    ja: 'イタリア語の縮小辞と増大辞',
  },
  nav: [
    ['forma', 'Forma'],
    ['diminutivi', 'Diminutivi'],
    ['accrescitivi', 'Accrescitivi'],
    ['peggiorativi', 'Peggiorativi'],
    ['falsi', 'Falsi alterati'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
    ['Parola base', 'Diminutivo', 'Accrescitivo', 'Peggiorativo'],
    [
      ['la casa', 'la casetta', 'la casona', 'la casaccia'],
      ['il libro', 'il libretto', 'il librone', 'il libraccio'],
      ['il gatto', 'il gattino', 'il gattone', 'il gattaccio'],
      ['il ragazzo', 'il ragazzino', 'il ragazzone', 'il ragazzaccio'],
      ['la parola', 'la parolina', 'la parolona', 'la parolaccia'],
    ]
  )}<p class="mini-note">${L.formaNote1}</p><p class="mini-note">${L.formaNote2}</p></article>
    <article class="lesson-box" id="diminutivi"><h2>${L.dimH2}</h2><p>${L.dimP}</p>${h.examples([
      [L.dIno, 'il gattino · il tavolino · la mammina · un momentino'],
      [L.dEtto, 'la casetta · il libretto · la borsetta · la camicetta'],
      [L.dEllo, 'l’alberello · il venticello · il paesello'],
      [L.dIcino, 'il cuoricino · il libricino · il topolino'],
      [L.dUccio, 'il tesoruccio · la casuccia · la boccuccia'],
      [L.dAgg, 'carino · piccolino · benino · pochino · pianino'],
    ])}<p class="mini-note">${L.dimNote}</p></article>
    <article class="lesson-box" id="accrescitivi"><h2>${L.accH2}</h2><p>${L.accP}</p>${h.examples([
      [L.aOne, 'un librone · un nasone · un omone · un ragazzone'],
      [L.aGenere, 'la porta → il portone · la finestra → il finestrone · la febbre → il febbrone'],
      [L.aVerbi, 'mangiare → un mangione · chiacchierare → una chiacchierona · brontolare → un brontolone'],
    ])}<p class="mini-note">${L.accNote}</p></article>
    <article class="lesson-box" id="peggiorativi"><h2>${L.pegH2}</h2><p>${L.pegP}</p>${h.examples([
      [L.pAccio, 'che tempaccio! · una giornataccia · le parolacce · un ragazzaccio'],
      [L.pAstro, 'un giovinastro · un poetastro'],
      [L.pColori, 'giallastro · verdastro · rossastro · dolciastro'],
      [L.pFamiglia, 'il fratellastro · la sorellastra'],
    ])}<p class="mini-note">${L.pegNote}</p></article>
    <article class="lesson-box" id="falsi"><h2>${L.falsiH2}</h2><p>${L.falsiP}</p>${h.examples([
      [L.fDim, 'il mulino · il tacchino · il postino'],
      [L.fAcc, 'il mattone · il bottone · il burrone · il lampone · il limone'],
      [L.fNuove, 'il panino · gli spaghetti · l’ombrellone · il cassetto · il rossetto · la cartolina · il fazzoletto'],
    ])}<p class="mini-note">${L.falsiNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['La portona di casa è chiusa.', 'Il portone di casa è chiuso.'],
      ['Che tempino brutto oggi!', 'Che tempaccio oggi!'],
      ['Non dire parolone davanti ai bambini!', 'Non dire parolacce davanti ai bambini!'],
      ['Il mio libretto ha novecento pagine.', 'Il mio librone ha novecento pagine.'],
      ['Quel signore è un uomone.', 'Quel signore è un omone.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        {
          q: 'La nostra gatta ha avuto sei ___. (gatto, piccoli)',
          a: 'gattini',
          hint: 'Gatto → gattino, al plurale gattini.',
        },
        { q: 'Abitano in una ___ in montagna. (casa, piccola)', a: 'casetta', alt: 'casina', hint: 'Casa → casetta.' },
        {
          q: 'Vorrei solo un ___ di torta, grazie. (pezzo, piccolo)',
          a: 'pezzetto',
          alt: 'pezzettino',
          hint: 'Pezzo → pezzetto.',
        },
        { q: 'Aspetta un ___, arrivo! (momento)', a: 'momentino', hint: 'Momento → momentino: gentile.' },
        {
          q: 'Nel giardino c’è un ___ con i fiori bianchi. (albero, piccolo)',
          a: 'alberello',
          hint: 'Albero → alberello.',
        },
        { q: 'Per la gita il bambino porta uno ___. (zaino, piccolo)', a: 'zainetto', hint: 'Zaino → zainetto.' },
        {
          q: 'Vieni qui, ___ mio! (tesoro, con affetto)',
          a: 'tesoruccio',
          alt: 'tesorino',
          hint: 'Con affetto: -uccio, tesoruccio.',
        },
        {
          q: 'Come stai? Così così, sto ___. (bene, ma non troppo)',
          a: 'benino',
          hint: 'Bene → benino: abbastanza bene.',
        },
        { q: 'Parla ___: il bambino dorme. (piano)', a: 'pianino', hint: 'Piano → pianino.' },
        {
          q: 'Che vestito ___! Ti sta benissimo. (caro, nel senso di grazioso)',
          a: 'carino',
          hint: 'Caro → carino: grazioso.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Questo dizionario è un ___ di mille pagine. (libro, grande)', a: 'librone', hint: 'Libro → librone.' },
      { q: 'Piove e fa freddo: che ___! (tempo, brutto)', a: 'tempaccio', hint: 'Tempo → tempaccio.' },
      {
        q: 'Quando esci, chiudi il ___ del palazzo! (porta, grande)',
        a: 'portone',
        hint: 'La porta → il portone: diventa maschile.',
      },
      {
        q: 'Oggi è andato tutto storto: che ___! (giornata, brutta)',
        a: 'giornataccia',
        hint: 'Giornata → giornataccia.',
      },
      {
        q: 'Non dire ___ davanti ai bambini! (parole, volgari)',
        a: 'parolacce',
        hint: 'Parola → parolaccia, al plurale parolacce.',
      },
      {
        q: 'Ha trentanove di ___: deve stare a letto. (febbre, alta)',
        a: 'febbrone',
        hint: 'La febbre → il febbrone.',
      },
      { q: 'Mio nipote è alto due metri: è un ___. (ragazzo, grande)', a: 'ragazzone', hint: 'Ragazzo → ragazzone.' },
      { q: 'Non bere quest’acqua: ha un colore ___. (verde, ma brutto)', a: 'verdastro', hint: 'Verde → verdastro.' },
      { q: 'Mangia sempre tantissimo: è un ___. (mangiare)', a: 'mangione', hint: 'Mangiare → mangione.' },
      {
        q: 'Parla sempre, anche al cinema: è una ___. (chiacchierare)',
        a: 'chiacchierona',
        hint: 'Chiacchierare → chiacchierona.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Luca è figlio di mio padre, ma non di mia madre: è il mio ___. (fratello)',
        a: 'fratellastro',
        hint: 'Fratellastro: un solo genitore in comune.',
      },
      { q: 'A pranzo prendo un ___ con formaggio e pomodoro. (pane)', a: 'panino', hint: 'Il panino è un sandwich.' },
      {
        q: 'Al mare prendiamo un ___ e due lettini. (ombrello)',
        a: 'ombrellone',
        hint: 'L’ombrellone è quello della spiaggia.',
      },
      {
        q: 'Le calze sono nel primo ___ dell’armadio. (cassa)',
        a: 'cassetto',
        hint: 'Il cassetto: si apre e si chiude.',
      },
      { q: 'Ti mando una ___ da Venezia. (carta)', a: 'cartolina', hint: 'La cartolina si spedisce dalle vacanze.' },
      { q: 'Il ___ porta le lettere. (posta)', a: 'postino', hint: 'Postino: non è una posta piccola!' },
      {
        q: 'Il ___ è un frutto rosso, simile alla fragola. (non viene da lampo!)',
        a: 'lampone',
        hint: 'Lampone: un frutto, non un lampo grande.',
      },
      {
        q: 'Si è staccato un ___ della camicia. (non viene da botte!)',
        a: 'bottone',
        hint: 'Bottone: non è una botte grande.',
      },
      {
        q: 'Prima di uscire si mette il ___ sulle labbra. (rosso)',
        a: 'rossetto',
        hint: 'Il rossetto: per le labbra.',
      },
      {
        q: 'Ho il raffreddore: hai un ___ di carta? (per il naso, finisce in -etto)',
        a: 'fazzoletto',
        hint: 'Il fazzoletto, per il naso.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Allora, com’è andata la vacanza al mare?'],
      ['Studente', 'Una settimana di tempaccio! Pioveva sempre.'],
      ['Martin', 'Che sfortuna! E la casa?'],
      ['Studente', 'Una casetta carina, ma piccolina: un solo cassetto per tutti i vestiti!'],
      ['Martin', 'Almeno hai mangiato bene?'],
      ['Studente', 'Sì: ogni giorno un panino al porto e un gelatino sotto l’ombrellone.'],
    ])}</article>`,
  it: {
    h1: 'I nomi alterati: -ino, -one, -accio',
    card: 'Gattino, portone, tempaccio: diminutivi, vezzeggiativi, accrescitivi, peggiorativi e falsi alterati.',
    lead: 'Gattino, casetta, portone, tempaccio: come si cambia una parola con un suffisso per dire piccolo, grande, caro o brutto. Diminutivi e vezzeggiativi, accrescitivi, peggiorativi, i falsi alterati come mulino e mattone e le parole nuove come panino e ombrellone. Con 30 esercizi.',
    description:
      'I nomi alterati in italiano: diminutivi e vezzeggiativi (-ino, -etto, -ello, -uccio), accrescitivi (-one), peggiorativi (-accio, -astro), i falsi alterati come mulino e mattone, panino e ombrellone, e 30 esercizi.',
    heroAlt: 'Tre vasi di basilico su un davanzale al sole, uno piccolo, uno medio e uno grande',
    formaH2: 'Come si forma: la parola + un suffisso',
    formaP:
      'Si toglie la vocale finale e si aggiunge un <strong>suffisso</strong>: <em lang="it">gatt-o → gatt-ino</em>. Il suffisso cambia l’idea della parola: piccola (<strong>diminutivo</strong>), cara (<strong>vezzeggiativo</strong>), grande (<strong>accrescitivo</strong>) o brutta (<strong>peggiorativo</strong>). Il genere di solito non cambia e il plurale è regolare: <em lang="it">la casetta, le casette</em>.',
    formaNote1:
      '<strong>Non tutte le parole accettano tutti i suffissi:</strong> si imparano con l’uso. Nel dubbio, <em lang="it">piccolo</em> e <em lang="it">grande</em> vanno sempre bene: <em lang="it">una piccola casa</em>, <em lang="it">un grande libro</em>.',
    formaNote2:
      '<strong>Si possono anche sommare:</strong> <em lang="it">casa → casetta → casettina</em>, <em lang="it">piccolo → piccolino</em>. Più suffissi, più affetto.',
    dimH2: 'Diminutivi e vezzeggiativi',
    dimP: 'Il diminutivo dice che una cosa è piccola, ma spesso aggiunge anche <strong>affetto</strong> o <strong>gentilezza</strong>. È molto usato con i bambini, in famiglia e per chiedere qualcosa con garbo.',
    dIno: '-ino / -ina: il più comune',
    dEtto: '-etto / -etta',
    dEllo: '-ello / -ella',
    dIcino: '-icino / -olino',
    dUccio: '-uccio / -uccia: con affetto',
    dAgg: 'Anche aggettivi e avverbi',
    dimNote:
      '<strong>Un momentino, un caffettino, un attimino:</strong> qui il diminutivo non vuol dire «piccolo», rende la frase più gentile. Anche i nomi di persona lo usano: <em lang="it">Paola → Paoletta</em>, <em lang="it">Giovanni → Giovannino</em>.',
    accH2: 'Gli accrescitivi: -one',
    accP: 'Il suffisso <em lang="it">-one</em> (<em lang="it">-ona</em> al femminile) dice che una cosa è grande o grossa. Con le persone può essere simpatico o ironico.',
    aOne: '-one: grande, grosso',
    aGenere: 'Il femminile diventa spesso maschile',
    aVerbi: 'Dai verbi: chi lo fa troppo',
    accNote:
      '<strong>Attenzione al genere:</strong> molti nomi femminili con <em lang="it">-one</em> diventano maschili: <em lang="it">la porta → il portone</em>. E <em lang="it">uomo</em> diventa <em lang="it">omone</em>, senza la <em lang="it">u</em>.',
    pegH2: 'I peggiorativi: -accio, -astro',
    pegP: 'Il suffisso <em lang="it">-accio</em> (<em lang="it">-accia</em>) dice che una cosa è brutta o cattiva; <em lang="it">-astro</em> che una persona non vale molto o che un colore «tende a».',
    pAccio: '-accio: brutto, cattivo',
    pAstro: '-astro: poco valore',
    pColori: '-astro con i colori: «tendente a»',
    pFamiglia: 'In famiglia: nessun giudizio',
    pegNote:
      '<strong>Fratellastro e sorellastra</strong> non sono fratelli cattivi: sono fratelli con un solo genitore in comune. <strong>Le parolacce</strong> sono le parole volgari: <em lang="it">dire le parolacce</em>.',
    falsiH2: 'I falsi alterati',
    falsiP:
      'Alcune parole sembrano alterate, ma non lo sono. Altre lo erano una volta e oggi sono parole nuove, con un significato proprio.',
    fDim: 'Sembrano diminutivi, ma non lo sono',
    fAcc: 'Sembrano accrescitivi, ma non lo sono',
    fNuove: 'Alterati diventati parole nuove',
    falsiNote:
      '<strong>Il mulino</strong> non è un piccolo mulo e <strong>il mattone</strong> non è un grande matto. <strong>Il panino</strong> non è un piccolo pane qualsiasi: è il sandwich italiano. <strong>L’ombrellone</strong> è quello della spiaggia, <strong>il rossetto</strong> è per le labbra, <strong>gli spaghetti</strong> vengono da <em lang="it">spago</em>, il filo sottile.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Diminutivi e vezzeggiativi',
    part1P: 'Scrivi la forma alterata della parola tra parentesi.',
    part2H3: 'Parte 2 · Accrescitivi e peggiorativi',
    part2P: 'Scrivi la forma alterata della parola tra parentesi.',
    part3H3: 'Parte 3 · Parole nuove e falsi alterati',
    part3P: 'Scrivi la parola giusta. Tra parentesi c’è un aiuto.',
  },
};
