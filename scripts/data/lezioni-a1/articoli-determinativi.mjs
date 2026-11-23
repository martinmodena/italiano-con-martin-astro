// Lezione A1 «Gli articoli determinativi: il, lo, la, i, gli, le» (rifatta il 2026-11-23 agli stessi URL):
// struttura, materiale italiano e testi. Le spiegazioni tradotte stanno in articoli-determinativi-i18n.mjs.
//
// Sesta delle lezioni con pochi esercizi (Martin, 2026-11-23). La lezione di agosto aveva la regola, una tabella,
// sei esempi e 12 esercizi. Ora: la regola (genere, numero, suono iniziale), le tabelle maschile e femminile, lo e
// gli (s + consonante, z, gn, ps, y; gli davanti a vocale), quando l'articolo si usa (in generale, i Paesi, il
// lunedì, le ore, il signor Rossi, le parti del corpo, la mia casa) e quando no (le città, i nomi, mia madre,
// parlo italiano, a casa), le trappole (le parole straniere, l'h, gli italiani) e 30 esercizi. Il confronto con la
// lingua resta quello di confronti-lingua.mjs; gli errori per lingua sono in confronti-articoli-determinativi.mjs.
// Nell'indice A1 la tessera resta dov'era; il pulsante finale porta agli articoli indeterminativi.

export default {
  slug: 'articoli-determinativi',
  next: 'articoli-indeterminativi',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/articoli-determinativi-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-definite-articles',
    es: 'articulos-determinados-en-italiano',
    fr: 'articles-definis-en-italien',
    cs: 'urcite-cleny-v-italstine',
    pl: 'rodzajniki-okreslone-w-jezyku-wloskim',
    tr: 'italyanca-belirli-artikeller',
    de: 'bestimmte-artikel-im-italienischen',
    ja: 'イタリア語の定冠詞',
  },
  nav: [
    ['regola', 'Regola'],
    ['tabella', 'Tabella'],
    ['lo-gli', 'Lo e gli'],
    ['quando', 'Quando usarlo'],
    ['senza', 'Senza articolo'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rGenere, 'il libro · la casa'],
    [L.rNumero, 'il libro · i libri'],
    [L.rSuono, 'il libro · lo studente · l’amico'],
  ])}<p class="mini-note">${L.regolaNote.replace('{{GENERE}}', h.href('genere-e-numero', 'a1'))}</p></article>
    <article class="lesson-box" id="tabella"><h2>${L.tabH2}</h2><p>${L.tabP}</p>${h.table(
      ['Maschile singolare', 'Maschile plurale', 'Esempio'],
      [
        ['il', 'i', 'il libro → i libri'],
        ['lo', 'gli', 'lo zaino → gli zaini'],
        ['l’', 'gli', 'l’amico → gli amici'],
      ]
    )}${h.table(
      ['Femminile singolare', 'Femminile plurale', 'Esempio'],
      [
        ['la', 'le', 'la casa → le case'],
        ['l’', 'le', 'l’amica → le amiche'],
      ]
    )}<p class="mini-note">${L.tabNote}</p></article>
    <article class="lesson-box" id="lo-gli"><h2>${L.loH2}</h2><p>${L.loP}</p>${h.examples([
      [L.lS, 'lo studente · lo sport · lo spagnolo'],
      [L.lZ, 'lo zaino · lo zio · lo zucchero'],
      [L.lAltri, 'lo gnomo · lo psicologo · lo yogurt'],
      [L.lGli, 'gli studenti · gli zii · gli amici · gli alberi'],
    ])}<p class="mini-note">${L.loNote.replace('{{INDETERMINATIVI}}', h.href('articoli-indeterminativi', 'a1'))}</p></article>
    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
      [L.qGenerale, 'Il caffè fa bene. · Mi piace la musica.'],
      [L.qPaesi, 'L’Italia è bella. · Gli Stati Uniti sono grandi.'],
      [L.qGiorni, 'Il lunedì vado in palestra. · Sono le tre.'],
      [L.qTitoli, 'Il signor Rossi è qui. · La dottoressa Bianchi arriva.'],
      [L.qCorpo, 'Mi lavo le mani. · Ho gli occhi verdi.'],
      [L.qPossessivi, 'la mia casa · i tuoi amici'],
    ])}<p class="mini-note">${L.quandoNote
      .replace('{{POSSESSIVI}}', h.href('aggettivi-e-pronomi-possessivi', 'a1'))
      .replace('{{PIACERE}}', h.href('verbo-piacere', 'a2'))}</p></article>
    <article class="lesson-box" id="senza"><h2>${L.senzaH2}</h2><p>${L.senzaP}</p>${h.examples([
      [L.sCitta, 'Roma è bella. · Vivo a Milano.'],
      [L.sNomi, 'Marco è qui. · Conosco Anna.'],
      [L.sFamiglia, 'mia madre · mio fratello'],
      [L.sLingue, 'Parlo italiano. · Studio inglese.'],
      [L.sLuoghi, 'Vado a casa. · Sono a scuola. · Vado in Italia.'],
    ])}<p class="mini-note">${L.senzaNote.replace('{{ARTICOLATE}}', h.href('preposizioni-articolate', 'a1'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tStraniere, 'il computer · lo yogurt · il weekend · l’hotel'],
      [L.tVocale, 'gli italiani · gli amici · le amiche'],
      [L.tGenere, 'il problema · la mano · il latte · la radio'],
      [L.tSignore, 'Il signor Rossi è qui. · Buongiorno, signor Rossi!'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['il studente', 'lo studente'],
      ['i amici', 'gli amici'],
      ['l’amici', 'gli amici'],
      ['Caffè è buono.', 'Il caffè è buono.'],
      ['La Roma è bella.', 'Roma è bella.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ libro', a: 'il', hint: 'Maschile, consonante normale: il.' },
        { q: '___ studente', a: 'lo', hint: 's + consonante: lo.' },
        { q: '___ amico', a: 'l’', alt: "l'", hint: 'Vocale: l’, con l’apostrofo.' },
        { q: '___ zaino', a: 'lo', hint: 'z: lo.' },
        { q: '___ casa', a: 'la', hint: 'Femminile, consonante: la.' },
        { q: '___ isola', a: 'l’', alt: "l'", hint: 'Femminile con vocale: l’.' },
        { q: '___ psicologo', a: 'lo', hint: 'ps: lo.' },
        { q: '___ gnomo', a: 'lo', hint: 'gn: lo.' },
        { q: '___ yogurt', a: 'lo', hint: 'y: lo.' },
        { q: '___ hotel', a: 'l’', alt: "l'", hint: 'La h non si pronuncia: è come una vocale, l’hotel.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'il libro → ___ libri', a: 'i', hint: 'Il → i.' },
      { q: 'lo studente → ___ studenti', a: 'gli', hint: 'Lo → gli.' },
      { q: 'l’amico → ___ amici', a: 'gli', hint: 'L’ maschile → gli.' },
      { q: 'la casa → ___ case', a: 'le', hint: 'La → le.' },
      { q: 'l’amica → ___ amiche', a: 'le', hint: 'L’ femminile → le, senza apostrofo.' },
      { q: 'lo zio → ___ zii', a: 'gli', hint: 'Lo → gli.' },
      { q: 'il ragazzo → ___ ragazzi', a: 'i', hint: 'Il → i.' },
      { q: 'l’albero → ___ alberi', a: 'gli', hint: 'Albero è maschile: gli alberi.' },
      { q: 'la scuola → ___ scuole', a: 'le', hint: 'La → le.' },
      { q: 'lo sport → ___ sport', a: 'gli', hint: 'Lo → gli; sport non cambia.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Mi piace ___ musica classica.', a: 'la', hint: 'Una cosa in generale: con l’articolo, la musica.' },
      { q: '___ Italia è un Paese bellissimo.', a: 'l’', alt: "l'", hint: 'I Paesi hanno l’articolo: l’Italia.' },
      { q: 'Il museo è chiuso ___ lunedì.', a: 'il', hint: 'Ogni lunedì: il lunedì.' },
      { q: '___ signora Bianchi è in ufficio.', a: 'la', hint: 'Signora + cognome, quando parli di lei: la signora.' },
      { q: 'Prima di mangiare mi lavo ___ mani.', a: 'le', hint: 'Parti del corpo: le mani.' },
      { q: 'Dov’è ___ mia borsa?', a: 'la', hint: 'Possessivo: la mia borsa.' },
      { q: '___ caffè italiano è forte.', a: 'il', hint: 'In generale: il caffè.' },
      { q: '___ Stati Uniti sono molto grandi.', a: 'gli', hint: 'Stati comincia con s + consonante: gli Stati Uniti.' },
      { q: 'Che ore sono? Sono ___ tre.', a: 'le', hint: 'Le ore: le tre (le ore tre).' },
      { q: '___ gatti dormono molto.', a: 'i', hint: 'I gatti in generale: i gatti.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Che cosa ti piace mangiare?'],
      ['Studente', 'Mi piacciono la pizza e la pasta. E il gelato!'],
      ['Martin', 'E la mattina che cosa bevi?'],
      ['Studente', 'Il caffè. Ma il sabato bevo il cappuccino al bar con gli amici.'],
      ['Martin', 'Allora sei già un vero italiano!'],
    ])}</article>`,
  it: {
    h1: 'Gli articoli determinativi: il, lo, la, i, gli, le',
    card: 'Il libro, lo studente, l’amica, gli amici: come scegliere l’articolo, quando si usa e quando no.',
    lead: 'Il libro, lo studente, l’amica, gli amici, le case: in italiano gli articoli determinativi sono sette. Come scegliere quello giusto (genere, numero e suono iniziale), lo e gli, quando l’articolo si usa (il caffè fa bene, l’Italia, il lunedì) e quando no (Roma, mia madre, parlo italiano), e le trappole. Con 30 esercizi.',
    description:
      'Gli articoli determinativi italiani: il, lo, la, l’, i, gli, le in tabella, quando si usa lo e gli, quando si usa l’articolo (in generale, i Paesi, il lunedì, le ore, la mia casa) e quando no (le città, i nomi, mia madre), le trappole, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Il banco di un mercato italiano con cassette di legno piene di frutta e verdura colorata: pomodori, limoni, arance e peperoni',
    regolaH2: 'Come si sceglie',
    regolaP: 'L’articolo determinativo va davanti al nome di una cosa o di una persona precisa: <em lang="it">il libro</em>, <em lang="it">la casa</em>. Per scegliere quello giusto guardi <strong>tre cose</strong>.',
    rGenere: '1. Il genere: maschile o femminile',
    rNumero: '2. Il numero: singolare o plurale',
    rSuono: '3. Il suono iniziale della parola',
    regolaNote:
      '<strong>Impara ogni nome insieme al suo articolo</strong>: così impari anche il genere. Per sapere se un nome è maschile o femminile, guarda la lezione su <a href="{{GENERE}}">genere e numero</a>.',
    tabH2: 'Le tabelle',
    tabP: 'Sette articoli in tutto: tre per il maschile singolare, due per il maschile plurale, la e l’ per il femminile singolare, le per il femminile plurale.',
    tabNote:
      '<strong>Il</strong> e <strong>la</strong> sono i più comuni. <strong>L’</strong> si usa davanti a vocale, sia al maschile sia al femminile. Al plurale l’apostrofo sparisce: <em lang="it">l’amico → gli amici</em>, <em lang="it">l’amica → le amiche</em>.',
    loH2: 'Lo e gli',
    loP: 'Al maschile si usano <strong>lo</strong> (singolare) e <strong>gli</strong> (plurale) davanti ad alcuni suoni difficili da pronunciare dopo <em lang="it">il</em>.',
    lS: 's + consonante',
    lZ: 'z',
    lAltri: 'gn, ps, y (e x)',
    lGli: 'Gli: plurale di lo e di l’',
    loNote:
      '<strong>Gli</strong> si usa anche davanti a tutte le parole maschili che cominciano con vocale: <em lang="it">gli amici</em>, <em lang="it">gli alberi</em>, <em lang="it">gli italiani</em>. Le stesse regole valgono per <em lang="it">uno</em>, nella lezione sugli <a href="{{INDETERMINATIVI}}">articoli indeterminativi</a>: <em lang="it">uno studente, uno zaino</em>.',
    quandoH2: 'Quando si usa',
    quandoP: 'L’italiano usa l’articolo più di molte altre lingue, anche quando parli di cose in generale.',
    qGenerale: 'Una cosa in generale',
    qPaesi: 'I Paesi, le regioni, i fiumi',
    qGiorni: 'Ogni lunedì; le ore',
    qTitoli: 'Signore, signora, dottore + cognome',
    qCorpo: 'Le parti del corpo',
    qPossessivi: 'Con i possessivi',
    quandoNote:
      '<strong>Il caffè fa bene</strong>: per parlare di una cosa in generale l’articolo serve, anche con <em lang="it">piacere</em> (<em lang="it">mi piace la musica</em>, vedi il <a href="{{PIACERE}}">verbo piacere</a>). <strong>Il lunedì</strong> vuol dire «ogni lunedì»; <em lang="it">lunedì</em> senza articolo è «questo lunedì». Con i possessivi l’articolo c’è quasi sempre: <em lang="it">la mia casa</em> (vedi i <a href="{{POSSESSIVI}}">possessivi</a>).',
    senzaH2: 'Quando non si usa',
    senzaP: 'In altri casi l’articolo non si mette.',
    sCitta: 'Le città',
    sNomi: 'I nomi di persona',
    sFamiglia: 'Mio padre, mia madre (al singolare)',
    sLingue: 'Le lingue dopo parlare e studiare',
    sLuoghi: 'Alcune espressioni di luogo',
    senzaNote:
      '<strong>Roma, Milano, Napoli</strong>: le città non hanno l’articolo, i Paesi sì (<em lang="it">l’Italia</em>). I nomi di persona di solito non lo hanno: <em lang="it">Marco</em>, non <em lang="it">il Marco</em>. Ma attenzione: <em lang="it">vado a scuola</em> e <em lang="it">vado in Italia</em> sono senza articolo, mentre <em lang="it">vado al mare</em> lo ha, unito alla preposizione: vedi le <a href="{{ARTICOLATE}}">preposizioni articolate</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tStraniere: 'Le parole straniere: conta il suono',
    tVocale: 'Gli davanti a vocale, mai l’ al plurale',
    tGenere: 'Il genere non si vede sempre dalla fine',
    tSignore: 'Il signor Rossi, ma Buongiorno, signor Rossi',
    trapNote:
      '<strong>Le parole straniere</strong> seguono il suono: <em lang="it">il computer</em>, <em lang="it">lo yogurt</em>, <em lang="it">l’hotel</em> (la h non si pronuncia). Al plurale <strong>non si scrive mai l’</strong>: <em lang="it">gli amici</em>, <em lang="it">le amiche</em>. Alcuni nomi ingannano: <em lang="it">il problema</em> è maschile, <em lang="it">la mano</em> femminile. E con <em lang="it">signore, signora, dottore</em> l’articolo c’è quando parli <em>di</em> una persona, non quando parli <em>con</em> lei.',
    exIntro: '30 esercizi in tre parti. Scrivi solo l’articolo: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il, lo, la o l’?',
    part1P: 'Scrivi l’articolo singolare.',
    part2H3: 'Parte 2 · I, gli o le?',
    part2P: 'Scrivi l’articolo plurale.',
    part3H3: 'Parte 3 · Nelle frasi',
    part3P: 'Scrivi l’articolo che manca.',
  },
};
