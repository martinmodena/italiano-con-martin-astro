// Lezione A1 «Gli articoli indeterminativi: un, uno, una, un’» (rifatta il 2026-11-24 agli stessi URL): struttura,
// materiale italiano e testi. Le spiegazioni tradotte stanno in articoli-indeterminativi-i18n.mjs.
//
// Nona delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era scritta
// a mano: una regola, una tabella, sei esempi e 10 esercizi. Ora: la regola (una cosa nuova o qualsiasi, il numero
// uno), la tabella, uno e un’ (s + consonante, z, gn, ps, y; l'apostrofo solo al femminile), quando si usa (la prima
// volta, per descrivere, un mio amico, un altro), quando no (il lavoro dopo essere, che bella giornata!, senza), il
// plurale (dei, degli, delle, alcuni, niente), le trappole e 30 esercizi. Confronto ed errori per lingua in
// confronti-articoli-indeterminativi.mjs (prima non c'erano). Nell'indice A1 la tessera resta dov'era; il pulsante
// finale porta al presente dei verbi regolari.

export default {
  slug: 'articoli-indeterminativi',
  next: 'presente-indicativo-verbi-regolari',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/articoli-indeterminativi-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-indefinite-articles',
    es: 'articulos-indeterminados-en-italiano',
    fr: 'articles-indefinis-en-italien',
    cs: 'neurcite-cleny-v-italstine',
    pl: 'rodzajniki-nieokreslone-w-jezyku-wloskim',
    tr: 'italyanca-belirsiz-artikeller',
    de: 'unbestimmte-artikel-im-italienischen',
    ja: 'イタリア語の不定冠詞',
  },
  nav: [
    ['regola', 'Regola'],
    ['tabella', 'Tabella'],
    ['uno', 'Uno e un’'],
    ['quando', 'Quando usarlo'],
    ['senza', 'Senza articolo'],
    ['plurale', 'Il plurale'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rNuovo, 'Ho un gatto. Il gatto si chiama Leo.'],
    [L.rQualsiasi, 'Scusi, cerco una farmacia.'],
    [L.rNumero, 'Ho un fratello e due sorelle.'],
  ])}<p class="mini-note">${L.regolaNote
    .replace('{{DETERMINATIVI}}', h.href('articoli-determinativi', 'a1'))
    .replace('{{GENERE}}', h.href('genere-e-numero', 'a1'))}</p></article>
    <article class="lesson-box" id="tabella"><h2>${L.tabH2}</h2><p>${L.tabP}</p>${h.table(
      ['Maschile', 'Femminile'],
      [
        ['un libro', 'una casa'],
        ['un amico', 'un’amica'],
        ['uno studente', 'una studentessa'],
        ['uno zaino', 'una zia'],
      ]
    )}<p class="mini-note">${L.tabNote}</p></article>
    <article class="lesson-box" id="uno"><h2>${L.unoH2}</h2><p>${L.unoP}</p>${h.examples([
      [L.uS, 'uno studente · uno sport · uno specchio'],
      [L.uZ, 'uno zaino · uno zio · uno zero'],
      [L.uAltri, 'uno gnomo · uno psicologo · uno yogurt'],
      [L.uMaschVocale, 'un amico · un albero · un uomo'],
      [L.uFemmVocale, 'un’amica · un’isola · un’ora'],
    ])}<p class="mini-note">${L.unoNote}</p></article>
    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
      [L.qPrima, 'C’è un bar qui vicino? · Sì, il bar è in piazza.'],
      [L.qDescrivere, 'Firenze è una città d’arte. · Marco è un ragazzo simpatico.'],
      [L.qAvere, 'Ho una domanda. · Hai un minuto?'],
      [L.qMio, 'Un mio amico abita a Tokyo.'],
      [L.qAltro, 'Un altro caffè, per favore! · Un’altra volta.'],
    ])}<p class="mini-note">${L.quandoNote}</p></article>
    <article class="lesson-box" id="senza"><h2>${L.senzaH2}</h2><p>${L.senzaP}</p>${h.examples([
      [L.sLavoro, 'Sono studente. · Marco è medico.'],
      [L.sAggettivo, 'Marco è un bravo medico.'],
      [L.sChe, 'Che bella giornata! · Che peccato!'],
      [L.sSenza, 'Esco senza ombrello.'],
    ])}<p class="mini-note">${L.senzaNote}</p></article>
    <article class="lesson-box" id="plurale"><h2>${L.plurH2}</h2><p>${L.plurP}</p>${h.examples([
      [L.pDei, 'un libro → dei libri · uno zaino → degli zaini · una casa → delle case'],
      [L.pAlcuni, 'alcuni amici · alcune amiche'],
      [L.pNiente, 'Ho amici a Roma. · Vendono fiori.'],
    ])}<p class="mini-note">${L.plurNote.replace('{{PARTITIVI}}', h.href('articoli-partitivi', 'a1'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tGenere, 'un problema · un programma · una mano · una foto'],
      [L.tStraniere, 'un hotel · un weekend · uno yogurt · uno smartphone'],
      [L.tNumero, 'Quanti caffè? Uno. · Una, per favore.'],
      [L.tApostrofo, 'un artista (lui) · un’artista (lei)'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['un studente', 'uno studente'],
      ['un zaino', 'uno zaino'],
      ['un amica', 'un’amica'],
      ['un’amico', 'un amico'],
      ['una problema', 'un problema'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ libro', a: 'un', hint: 'Maschile, consonante normale: un.' },
        { q: '___ studente', a: 'uno', hint: 's + consonante: uno.' },
        { q: '___ casa', a: 'una', hint: 'Femminile, consonante: una.' },
        { q: '___ amica', a: 'un’', alt: "un'", hint: 'Femminile + vocale: un’, con l’apostrofo.' },
        { q: '___ amico', a: 'un', hint: 'Maschile + vocale: un, senza apostrofo.' },
        { q: '___ zaino', a: 'uno', hint: 'z: uno.' },
        { q: '___ isola', a: 'un’', alt: "un'", hint: 'Femminile + vocale: un’isola.' },
        { q: '___ psicologo', a: 'uno', hint: 'ps: uno.' },
        { q: '___ ora', a: 'un’', alt: "un'", hint: 'Ora è femminile: un’ora.' },
        { q: '___ albero', a: 'un', hint: 'Albero è maschile: un albero.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: '___ zio', a: 'uno', hint: 'z: uno zio.' },
      { q: '___ sport', a: 'uno', hint: 's + consonante: uno sport.' },
      { q: '___ problema', a: 'un', hint: 'Problema è maschile, anche se finisce in -a: un problema.' },
      { q: '___ mano', a: 'una', hint: 'Mano è femminile, anche se finisce in -o: una mano.' },
      { q: '___ yogurt', a: 'uno', hint: 'y: uno yogurt.' },
      { q: '___ hotel', a: 'un', hint: 'La h non si pronuncia: un hotel.' },
      { q: '___ idea', a: 'un’', alt: "un'", hint: 'Femminile + vocale: un’idea.' },
      { q: '___ uomo', a: 'un', hint: 'Maschile + vocale: un uomo.' },
      { q: '___ specchio', a: 'uno', hint: 's + consonante: uno specchio.' },
      { q: '___ foto', a: 'una', hint: 'Foto è femminile (la fotografia): una foto.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Vicino a casa mia c’è ___ bar.', a: 'un', hint: 'Un bar qualsiasi, nominato per la prima volta: un.' },
      { q: '___ bar si chiama «Sole» ed è molto carino.', a: 'il', hint: 'Ora sappiamo quale bar: il bar.' },
      { q: 'Roma è ___ città bellissima.', a: 'una', hint: 'Per descrivere: una città.' },
      { q: 'Scusi, ho ___ domanda.', a: 'una', hint: 'Domanda è femminile: una domanda.' },
      { q: 'Ieri ho visto ___ film bellissimo.', a: 'un', hint: 'Film è maschile: un film.' },
      { q: '___ mio amico abita a Tokyo.', a: 'un', hint: 'Uno dei miei amici: un mio amico.' },
      { q: 'Vorrei ___ altro caffè, per favore.', a: 'un', hint: 'Maschile + vocale: un altro, senza apostrofo.' },
      { q: 'un libro → ___ libri', a: 'dei', hint: 'Il plurale di un libro: dei libri.' },
      { q: 'uno studente → ___ studenti', a: 'degli', hint: 'Il plurale di uno: degli studenti.' },
      { q: 'un’amica → ___ amiche', a: 'delle', hint: 'Il plurale di una e un’: delle amiche.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Scusi, c’è una farmacia qui vicino?'],
      ['Martin', 'Sì, c’è una farmacia in via Roma, vicino a un grande supermercato.'],
      ['Studente', 'È lontano?'],
      ['Martin', 'No, sono cinque minuti a piedi. Prenda la prima strada a destra, dopo un piccolo parco.'],
      ['Studente', 'Grazie mille! Un’ultima domanda: c’è anche uno sportello bancomat?'],
      ['Martin', 'Sì, proprio davanti alla farmacia.'],
    ])}</article>`,
  it: {
    h1: 'Gli articoli indeterminativi: un, uno, una, un’',
    card: 'Un libro, uno studente, una casa, un’amica: come scegliere l’articolo, quando si usa e il plurale.',
    lead: 'Un libro, uno studente, una casa, un’amica: gli articoli indeterminativi sono quattro. Come scegliere quello giusto, uno e un’ (con l’apostrofo solo al femminile), quando si usano (la prima volta, per descrivere, un mio amico) e quando no (sono studente, che bella giornata!), il plurale (dei, degli, delle) e le trappole. Con 30 esercizi.',
    description:
      'Gli articoli indeterminativi in italiano: un, uno, una e un’. Come scegliere (genere e suono iniziale), uno e un’, quando si usano e quando no, il plurale con dei, degli, delle, le trappole (un problema, una mano, un hotel), gli errori tipici e 30 esercizi.',
    heroAlt: 'Una bicicletta azzurra appoggiata al muro giallo di un vicolo italiano, con un vaso di fiori rossi accanto alla porta',
    regolaH2: 'Quando si usano',
    regolaP:
      'L’articolo indeterminativo parla di una persona o di una cosa <strong>non precisa</strong>: una qualsiasi, oppure nominata <strong>per la prima volta</strong>. Ha solo il singolare e cambia secondo il <strong>genere</strong> (maschile o femminile) e il <strong>suono iniziale</strong> della parola dopo.',
    rNuovo: 'Una cosa nominata per la prima volta',
    rQualsiasi: 'Una cosa qualsiasi, non precisa',
    rNumero: 'Il numero uno',
    regolaNote:
      '<strong>Un gatto</strong> è un gatto qualsiasi, <strong>il gatto</strong> è quello di cui stiamo parlando: vedi <a href="{{DETERMINATIVI}}">gli articoli determinativi</a>. La regola del suono è la stessa: dove si dice <em lang="it">il</em> si dice <em lang="it">un</em>, dove si dice <em lang="it">lo</em> si dice <em lang="it">uno</em>, dove si dice <em lang="it">la</em> si dice <em lang="it">una</em>. Per riconoscere maschile e femminile: <a href="{{GENERE}}">genere e numero dei nomi</a>.',
    tabH2: 'La tabella',
    tabP: 'Quattro forme: due maschili, <strong>un</strong> e <strong>uno</strong>, e due femminili, <strong>una</strong> e <strong>un’</strong>.',
    tabNote:
      '<strong>un</strong>: maschile, quasi sempre. <strong>uno</strong>: maschile davanti a s + consonante, z, gn, ps, y. <strong>una</strong>: femminile davanti a consonante. <strong>un’</strong>: femminile davanti a vocale.',
    unoH2: 'Uno e un’',
    unoP: 'Le due forme che fanno sbagliare di più. <strong>Uno</strong> serve davanti a suoni difficili da pronunciare dopo <em lang="it">un</em>; <strong>un’</strong> è <em lang="it">una</em> che perde la <em lang="it">a</em> davanti a vocale.',
    uS: 'Maschile + s e consonante: uno',
    uZ: 'Maschile + z: uno',
    uAltri: 'Maschile + gn, ps, y: uno',
    uMaschVocale: 'Maschile + vocale: un, senza apostrofo',
    uFemmVocale: 'Femminile + vocale: un’, con l’apostrofo',
    unoNote:
      '<strong>Il trucco dell’apostrofo</strong>: <em lang="it">un’</em> con l’apostrofo esiste solo al femminile, perché è <em lang="it">una</em> senza la <em lang="it">a</em>. Al maschile <em lang="it">un</em> è già completo: <em lang="it">un amico</em>, <em lang="it">un albero</em>. Per questo l’apostrofo dice il genere: <em lang="it">un artista</em> è un uomo, <em lang="it">un’artista</em> è una donna. Con s + vocale non serve <em lang="it">uno</em>: <em lang="it">un sabato</em>, <em lang="it">un sogno</em>.',
    quandoH2: 'Quando si usa',
    quandoP: 'L’articolo indeterminativo serve spesso nelle frasi di tutti i giorni.',
    qPrima: 'La prima volta un, dopo il',
    qDescrivere: 'Per descrivere: è un…, è una…',
    qAvere: 'Con avere e c’è',
    qMio: 'Un mio amico: uno dei miei amici',
    qAltro: 'Un altro, un’altra',
    quandoNote:
      '<strong>Un mio amico</strong> vuol dire «uno dei miei amici»: l’articolo resta davanti al possessivo. <strong>Un altro</strong> è maschile, quindi senza apostrofo; <strong>un’altra</strong> è femminile, con l’apostrofo.',
    senzaH2: 'Quando non si usa',
    senzaP: 'In alcuni casi l’italiano non mette l’articolo indeterminativo.',
    sLavoro: 'Il lavoro dopo essere',
    sAggettivo: 'Ma con un aggettivo l’articolo torna',
    sChe: 'Che + nome, nelle esclamazioni',
    sSenza: 'Spesso dopo senza',
    senzaNote:
      'Si dice <strong>sono studente</strong>, <strong>Marco è medico</strong>: il lavoro dopo <em lang="it">essere</em> va senza articolo. Si può dire anche <em lang="it">è un medico</em>, ma con un aggettivo l’articolo è obbligatorio: <em lang="it">è un bravo medico</em>. Nelle esclamazioni: <em lang="it">che bella giornata!</em>, senza articolo dopo <em lang="it">che</em>.',
    plurH2: 'Il plurale',
    plurP: 'Un, uno e una non hanno plurale. Per parlare di più cose non precise ci sono tre possibilità.',
    pDei: 'Dei, degli, delle (gli articoli partitivi)',
    pAlcuni: 'Alcuni, alcune',
    pNiente: 'Spesso niente',
    plurNote:
      'La regola è facile: <strong>un → dei</strong>, <strong>uno → degli</strong> (e <em lang="it">un</em> davanti a vocale: <em lang="it">un amico → degli amici</em>), <strong>una, un’ → delle</strong>. Tutto il resto nella lezione sugli <a href="{{PARTITIVI}}">articoli partitivi</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tGenere: 'Parole in -a maschili, parole in -o femminili',
    tStraniere: 'Le parole straniere',
    tNumero: 'Uno da solo: il numero',
    tApostrofo: 'L’apostrofo cambia il genere',
    trapNote:
      'Guarda il genere, non solo la vocale finale: <em lang="it">un problema</em>, <em lang="it">una mano</em>. Le parole straniere sono quasi tutte maschili: <em lang="it">un hotel</em> (la h non si pronuncia), <em lang="it">uno yogurt</em>, <em lang="it">uno smartphone</em> (s + consonante). Quando conti, <strong>uno</strong> e <strong>una</strong> stanno anche da soli: <em lang="it">quanti caffè? Uno</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo l’articolo: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Un, uno, una o un’?',
    part1P: 'Scrivi l’articolo indeterminativo giusto.',
    part2H3: 'Parte 2 · Le parole difficili',
    part2P: 'Attenzione al genere e alla prima lettera.',
    part3H3: 'Parte 3 · Nella frase',
    part3P: 'Un o il? E il plurale: dei, degli o delle?',
  },
};
