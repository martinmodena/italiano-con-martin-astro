// Lezione A1 «Gli interrogativi: chi, che cosa, dove, quando» (2026-11-27): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in interrogativi-i18n.mjs.
//
// Martin il 2026-11-27: «penso anche che non ci sia una scheda sugli interrogativi, vero?». Prima le parole delle
// domande comparivano solo qua e là (c’è / ci sono, che ore sono). Qui: la regola (la parola interrogativa all’inizio,
// poi il verbo), la tabella, chi e che cosa (che cos’è?, di chi è?), dove, quando, come e perché (com’è?, come mai?),
// quale e quanto (qual è senza apostrofo, quanti anni hai?), le preposizioni all’inizio (con chi?, di dove?, a che
// ora?), l’ordine delle parole (dove lavora tua sorella?), le trappole e 30 esercizi. Nell’indice A1 sta subito dopo
// i possessivi, che ora portano qui; il pulsante finale porta ai numeri. Il confronto con la lingua dello studente e
// gli errori per lingua sono in confronti-interrogativi.mjs.

export default {
  slug: 'interrogativi',
  next: 'numeri',
  after: 'aggettivi-e-pronomi-possessivi',
  minutes: 15,
  hero: { src: 'grammatica/interrogativi-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'italian-question-words',
    es: 'interrogativos-en-italiano',
    fr: 'mots-interrogatifs-en-italien',
    cs: 'tazaci-slova-v-italstine',
    pl: 'zaimki-pytajne-po-wlosku',
    tr: 'italyanca-soru-kelimeleri',
    de: 'fragewoerter-im-italienischen',
    ja: 'イタリア語の疑問詞',
  },
  nav: [
    ['regola', 'Regola'],
    ['tabella', 'Tabella'],
    ['chi', 'Chi e che cosa'],
    ['dove', 'Dove, quando, come, perché'],
    ['quale', 'Quale e quanto'],
    ['preposizioni', 'Con le preposizioni'],
    ['posizione', 'Posizione'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rParola, 'Dove andiamo? · Quando partiamo? · Come ci arriviamo?'],
    [L.rSiNo, 'Parti domani? · Parti domani.'],
    [L.rRisposta, 'Dove abiti? – A Roma. · Perché? – Perché mi piace.'],
  ])}<p class="mini-note">${L.regolaNote}</p></article>
    <article class="lesson-box" id="tabella"><h2>${L.tabH2}</h2><p>${L.tabP}</p>${h.table(
      ['Forma', 'Esempio'],
      [
        ['chi?', 'Chi è quel ragazzo?'],
        ['che cosa? · che? · cosa?', 'Che cosa fai stasera?'],
        ['dove?', 'Dove abiti?'],
        ['quando?', 'Quando parti?'],
        ['come?', 'Come ti chiami?'],
        ['perché?', 'Perché studi l’italiano?'],
        ['quale? · quali?', 'Quale preferisci? · Quali scarpe compri?'],
        ['quanto? · quanta? · quanti? · quante?', 'Quanto costa? · Quanti anni hai?'],
      ]
    )}<p class="mini-note">${L.tabNote}</p></article>
    <article class="lesson-box" id="chi"><h2>${L.chiH2}</h2><p>${L.chiP}</p>${h.examples([
      [L.cChi, 'Chi è? · Chi viene alla festa?'],
      [L.cCosa, 'Che cosa mangi? · Cosa fai? · Che fai?'],
      [L.cCose, 'Che cos’è questo? · Cos’è?'],
      [L.cChe, 'Che lavoro fai? · Che musica ascolti?'],
    ])}<p class="mini-note">${L.chiNote}</p></article>
    <article class="lesson-box" id="dove"><h2>${L.doveH2}</h2><p>${L.doveP}</p>${h.examples([
      [L.dDove, 'Dove abiti? · Dov’è il bagno?'],
      [L.dQuando, 'Quando arriva il treno? · Da quando sei qui?'],
      [L.dCome, 'Come stai? · Com’è la tua città? · Come ti chiami?'],
      [L.dPerche, 'Perché ridi? – Perché sono contento.'],
      [L.dComeMai, 'Come mai sei qui?'],
    ])}<p class="mini-note">${L.doveNote}</p></article>
    <article class="lesson-box" id="quale"><h2>${L.qualeH2}</h2><p>${L.qualeP}</p>${h.examples([
      [L.qQuale, 'Quale borsa compri? · Quali scarpe ti piacciono?'],
      [L.qQual, 'Qual è il tuo numero? · Qual è la tua città?'],
      [L.qQuanto, 'Quanto pane? · Quanta acqua? · Quanti anni? · Quante persone?'],
      [L.qCosta, 'Quanto costa? · Quanto costano?'],
    ])}<p class="mini-note">${L.qualeNote.replace('{{NUMERI}}', h.href('numeri', 'a1'))}</p></article>
    <article class="lesson-box" id="preposizioni"><h2>${L.prepH2}</h2><p>${L.prepP}</p>${h.examples([
      [L.pCon, 'Con chi esci stasera?'],
      [L.pDi, 'Di dove sei? · Di chi è questa borsa?'],
      [L.pA, 'A che ora parte il treno? · A chi scrivi?'],
      [L.pDa, 'Da quanto tempo studi l’italiano? · Da dove vieni?'],
    ])}<p class="mini-note">${L.prepNote.replace('{{ORE}}', h.href('che-ore-sono', 'a1'))}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.poVerbo, 'Dove lavora tua sorella? · Che cosa fanno i bambini?'],
      [L.poSoggetto, 'Dove abiti? (tu) · Che cosa fate? (voi)'],
      [L.poSiNo, 'Marco viene stasera? · Viene anche Marco?'],
      [L.poNon, 'Perché non vieni? · Non hai fame?'],
    ])}<p class="mini-note">${L.posNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tQual, 'Qual è (mai qual’è) · Com’è · Dov’è · Cos’è'],
      [L.tPerche, 'perché, con l’accento acuto'],
      [L.tQuanti, 'Quanti anni hai? (mai quanto anni)'],
      [L.tChi, 'Chi è? (una persona) · Che cos’è? (una cosa)'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Qual’è il tuo indirizzo?', 'Qual è il tuo indirizzo?'],
      ['Quanto anni hai?', 'Quanti anni hai?'],
      ['Chi è questo? (una cosa)', 'Che cos’è questo?'],
      ['Dove tua sorella lavora?', 'Dove lavora tua sorella?'],
      ['Chi con esci?', 'Con chi esci?'],
      ['Perche?', 'Perché?'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ ti chiami? – Mi chiamo Anna.', a: 'come', hint: 'Il nome si chiede con come: come ti chiami?' },
        { q: '___ abiti? – A Roma.', a: 'dove', hint: 'Un luogo: dove?' },
        { q: '___ è quel ragazzo? – È mio fratello.', a: 'chi', hint: 'Una persona: chi?' },
        { q: '___ fai stasera? – Vado al cinema.', a: 'che cosa', alt: 'cosa|che', hint: 'Una cosa, un’azione: che cosa?' },
        { q: '___ parti? – Domani.', a: 'quando', hint: 'Il tempo: quando?' },
        { q: '___ studi l’italiano? – Perché mi piace.', a: 'perché', alt: 'perche', hint: 'La ragione: perché?' },
        { q: '___ anni hai? – Ventidue.', a: 'quanti', hint: 'Anni è maschile plurale: quanti.' },
        { q: '___ costa il biglietto? – Due euro.', a: 'quanto', hint: 'Il prezzo: quanto costa?' },
        { q: '___ è il tuo colore preferito? – Il verde.', a: 'qual', hint: 'Qual è, senza apostrofo.' },
        { q: '___ libri preferisci, questi o quelli?', a: 'quali', hint: 'Libri è plurale: quali.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: '___ dove sei? – Sono di Madrid.', a: 'di', hint: 'L’origine: di dove sei?' },
      { q: '___ chi esci stasera? – Con Anna.', a: 'con', hint: 'La preposizione va all’inizio: con chi?' },
      { q: 'Di ___ è questa borsa? – È di Giulia.', a: 'chi', hint: 'Di chi è? = a chi appartiene?' },
      { q: '___ che ora parte il treno? – Alle otto.', a: 'a', hint: 'L’orario: a che ora?' },
      { q: 'Da ___ tempo studi l’italiano? – Da un anno.', a: 'quanto', hint: 'La durata: da quanto tempo?' },
      { q: '___ sorelle hai? (quanto)', a: 'quante', hint: 'Sorelle è femminile plurale: quante.' },
      { q: '___ pasta compro? (quanto)', a: 'quanta', hint: 'Pasta è femminile singolare: quanta.' },
      { q: '___ sono le tue scarpe? – Quelle rosse. (quale)', a: 'quali', hint: 'Scarpe è plurale: quali.' },
      { q: '___ cos’è questo? – È un regalo.', a: 'che', hint: 'Che cos’è? per chiedere che cosa è una cosa.' },
      { q: 'Come ___ sei qui? Non lavori oggi?', a: 'mai', hint: 'Come mai? = perché, con sorpresa.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Dove ___ tua sorella? (lavorare)', a: 'lavora', hint: 'Prima il verbo, poi il soggetto: dove lavora tua sorella?' },
      { q: 'Che cosa ___ i bambini? (mangiare)', a: 'mangiano', hint: 'I bambini, loro: mangiano.' },
      { q: 'Com’___ la tua casa? – Grande e luminosa.', a: 'è', alt: 'e', hint: 'Com’è? per chiedere una descrizione.' },
      { q: 'Scusi, dov’___ la stazione?', a: 'è', alt: 'e', hint: 'Dove + è → dov’è.' },
      { q: 'Qual ___ il tuo numero di telefono?', a: 'è', alt: 'e', hint: 'Qual è, senza apostrofo.' },
      { q: 'Scusi, che ___ sono? – Sono le tre.', a: 'ore', hint: 'Che ore sono? al plurale.' },
      { q: 'Quanto ___ i pomodori? (costare)', a: 'costano', hint: 'I pomodori, plurale: quanto costano?' },
      { q: 'Che lavoro ___? – Sono infermiera. (tu)', a: 'fai', hint: 'Il lavoro si chiede con fare: che lavoro fai?' },
      { q: 'Come ___ chiami? – Mi chiamo Luca.', a: 'ti', hint: 'Chiamarsi, con tu: ti chiami.' },
      { q: 'Quanti anni ___ tuo padre?', a: 'ha', hint: 'L’età si dice con avere: quanti anni ha?' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Ciao! Come ti chiami?'],
      ['Studente', 'Mi chiamo Sara. E tu?'],
      ['Martin', 'Io sono Martin. Di dove sei, Sara?'],
      ['Studente', 'Sono di Lisbona. E tu dove abiti?'],
      ['Martin', 'Qui vicino. Da quanto tempo studi l’italiano? E perché?'],
      ['Studente', 'Da sei mesi, perché il mio ragazzo è italiano! Ma scusa, che ore sono? A che ora parte l’ultimo autobus?'],
    ])}</article>`,
  it: {
    h1: 'Gli interrogativi: chi, che cosa, dove, quando',
    card: 'Chi, che cosa, dove, quando, come, perché, quale, quanto: la tabella, qual è, quanti anni hai?, con chi?, di dove sei?, l’ordine delle parole e 30 esercizi.',
    lead: 'Dove andiamo? Quando partiamo? Come ci arriviamo? Con le parole interrogative fai le domande di tutti i giorni. La regola (la parola all’inizio, poi il verbo), la tabella, chi e che cosa, dove, quando, come e perché, quale e quanto (qual è, quanti anni hai?), le preposizioni all’inizio (con chi?, di dove sei?, a che ora?), l’ordine delle parole e le trappole. Con 30 esercizi.',
    description:
      'Gli interrogativi in italiano: chi, che cosa, dove, quando, come, perché, quale, quanto. Come fare le domande (dove abiti?, che cosa fai?), che cos’è?, di chi è?, com’è?, come mai?, qual è senza apostrofo, quanti anni hai?, con chi?, di dove sei?, a che ora?, l’ordine delle parole, gli errori tipici e 30 esercizi.',
    heroAlt: 'Una vecchia bussola d’ottone aperta su un tavolino di un bar, accanto a una tazzina di caffè, con una strada al sole sullo sfondo',
    regolaH2: 'La regola',
    regolaP:
      'La parola interrogativa (<em lang="it">chi, che cosa, dove, quando, come, perché, quale, quanto</em>) va <strong>all’inizio</strong> della domanda, poi viene il <strong>verbo</strong>. Per le domande con risposta sì o no basta cambiare l’intonazione.',
    rParola: 'La parola interrogativa all’inizio',
    rSiNo: 'Sì o no: cambia solo la voce',
    rRisposta: 'Le risposte',
    regolaNote:
      'Guarda la foto: <em lang="it">dove andiamo? Quando partiamo? Come ci arriviamo?</em> Non servono verbi ausiliari né parole in più: <em lang="it">dove abiti?</em>. Per le domande sì / no le parole sono le stesse della frase normale: <em lang="it">parti domani?</em> sale alla fine, <em lang="it">parti domani.</em> scende. Nello scritto il punto di domanda va solo alla fine.',
    tabH2: 'La tabella',
    tabP: 'Le parole interrogative più importanti. Solo <strong>quale</strong> e <strong>quanto</strong> cambiano forma.',
    tabNote:
      '<strong>Chi</strong>, <strong>che cosa</strong>, <strong>dove</strong>, <strong>quando</strong>, <strong>come</strong> e <strong>perché</strong> non cambiano mai. <strong>Quale</strong> ha due forme (<em lang="it">quale, quali</em>), <strong>quanto</strong> quattro (<em lang="it">quanto, quanta, quanti, quante</em>).',
    chiH2: 'Chi e che cosa',
    chiP: '<strong>Chi</strong> chiede una <strong>persona</strong>, <strong>che cosa</strong> chiede una <strong>cosa</strong> o un’azione.',
    cChi: 'Chi: una persona',
    cCosa: 'Che cosa, cosa, che: tre forme',
    cCose: 'Che cos’è?',
    cChe: 'Che + nome',
    chiNote:
      '<em lang="it">Che cosa</em>, <em lang="it">cosa</em> e <em lang="it">che</em> vogliono dire la stessa cosa: <em lang="it">che cosa</em> va bene ovunque, <em lang="it">cosa</em> e <em lang="it">che</em> sono più del parlato. Davanti a <em lang="it">è</em> si dice <strong>che cos’è?</strong> o <strong>cos’è?</strong>. <strong>Che</strong> + nome chiede il tipo: <em lang="it">che lavoro fai?</em>, <em lang="it">che musica ascolti?</em>. <strong>Chi</strong> è sempre singolare: <em lang="it">chi viene?</em>, anche se la risposta è «tutti».',
    doveH2: 'Dove, quando, come, perché',
    doveP: 'Per il luogo, il tempo, il modo e la ragione. Con <em lang="it">è</em> spesso perdono la vocale: <em lang="it">dov’è, com’è</em>.',
    dDove: 'Dove: il luogo',
    dQuando: 'Quando: il tempo',
    dCome: 'Come: il modo, com’è',
    dPerche: 'Perché: domanda e risposta',
    dComeMai: 'Come mai: perché, con sorpresa',
    doveNote:
      '<strong>Com’è?</strong> chiede una descrizione (<em lang="it">com’è Roma? – Bellissima</em>); <strong>come stai?</strong> la salute; <strong>come ti chiami?</strong> il nome. <strong>Perché</strong> serve per la domanda e per la risposta: <em lang="it">perché? – perché sì</em>. <strong>Come mai?</strong> è un perché più gentile o sorpreso: <em lang="it">come mai sei qui?</em>.',
    qualeH2: 'Quale e quanto',
    qualeP: '<strong>Quale</strong> chiede di scegliere tra più cose. <strong>Quanto</strong> chiede una quantità o un prezzo e si accorda con il nome.',
    qQuale: 'Quale, quali: scegliere',
    qQual: 'Qual è: senza apostrofo',
    qQuanto: 'Quanto, quanta, quanti, quante',
    qCosta: 'Quanto costa? Il prezzo',
    qualeNote:
      'Davanti a <em lang="it">è</em> si scrive <strong>qual è</strong>, <strong>senza apostrofo</strong>: è un errore molto comune anche tra gli italiani. <strong>Quanto</strong> segue il nome: <em lang="it">quanti anni</em>, <em lang="it">quante persone</em>, <em lang="it">quanta acqua</em>. Da solo, per il prezzo: <em lang="it">quanto costa?</em>, <em lang="it">quanto costano?</em>. Vedi anche <a href="{{NUMERI}}">i numeri</a>.',
    prepH2: 'Con le preposizioni',
    prepP: 'Se la domanda ha una preposizione, la preposizione va <strong>all’inizio</strong>, prima della parola interrogativa.',
    pCon: 'Con chi?',
    pDi: 'Di dove? Di chi?',
    pA: 'A che ora? A chi?',
    pDa: 'Da quanto tempo? Da dove?',
    prepNote:
      'La preposizione non resta mai in fondo: <em lang="it">con chi esci?</em>, non <em lang="it">chi esci con?</em>. <strong>Di dove sei?</strong> chiede la città o il Paese di origine; <strong>di chi è?</strong> chiede a chi appartiene una cosa. <strong>Da quanto tempo?</strong> + presente: <em lang="it">da quanto tempo abiti qui?</em>. Per gli orari vedi <a href="{{ORE}}">che ore sono?</a>.',
    posH2: 'L’ordine delle parole',
    posP: 'Dopo la parola interrogativa viene subito il <strong>verbo</strong>; il soggetto, se c’è, va <strong>dopo</strong>.',
    poVerbo: 'Prima il verbo, poi il soggetto',
    poSoggetto: 'Il soggetto spesso non serve',
    poSiNo: 'Sì / no: l’ordine è libero',
    poNon: 'Con non',
    posNote:
      'Si dice <em lang="it">dove lavora tua sorella?</em>, non <em lang="it">dove tua sorella lavora?</em>. I pronomi soggetto di solito non si dicono: il verbo basta (<em lang="it">dove abiti?</em>). Nelle domande sì / no l’ordine è più libero: <em lang="it">Marco viene?</em> e <em lang="it">viene Marco?</em> vanno bene tutti e due.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tQual: 'Qual è senza apostrofo',
    tPerche: 'Perché con l’accento',
    tQuanti: 'Quanto si accorda',
    tChi: 'Chi per le persone, che cosa per le cose',
    trapNote:
      '<em lang="it">Dov’è, com’è, cos’è</em> hanno l’apostrofo, <strong>qual è</strong> no. <strong>Perché</strong> ha l’accento acuto (é). <em lang="it">Quanto</em> davanti a un nome cambia: <em lang="it">quanti anni hai?</em>. E per una cosa non si usa <em lang="it">chi</em>: <em lang="it">che cos’è questo?</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo la parola che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Quale parola?',
    part1P: 'Chi, che cosa, dove, quando, come, perché, quale, quanto: scegli guardando la risposta.',
    part2H3: 'Parte 2 · Preposizioni e accordo',
    part2P: 'Con chi, di dove, a che ora, da quanto tempo; quanti, quante, quali.',
    part3H3: 'Parte 3 · Il verbo e le domande utili',
    part3P: 'L’ordine delle parole e le domande di tutti i giorni.',
  },
};
