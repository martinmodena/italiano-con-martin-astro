// Lezione A1 «Gli articoli partitivi: del, della, dei» (2026-11-03): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in articoli-partitivi-i18n.mjs.
//
// Martin il 2026-11-03: «mancherebbe una scheda degli articoli partitivi, o no?». Prima il partitivo era
// solo una sezione breve delle preposizioni articolate. Qui: le sette forme (di + articolo), quando si usa
// (un po' di / alcuni) e quando no (mi piace il caffè, al bar un caffè), gli altri modi per dirlo
// (un po' di, alcuni / alcune, qualche + singolare), le frasi negative (non ho pane), le trappole
// (del partitivo o del possesso). Nell'indice A1 sta subito dopo «Le preposizioni articolate».
// Il confronto con la lingua dello studente e gli errori per lingua sono in confronti-partitivi.mjs.

export default {
  slug: 'articoli-partitivi',
  next: 'ce-ci-sono',
  after: 'preposizioni-articolate',
  minutes: 20,
  hero: { src: 'grammatica/articoli-partitivi-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'italian-partitive-articles',
    es: 'articulos-partitivos-en-italiano',
    fr: 'articles-partitifs-en-italien',
    cs: 'delivy-clen-v-italstine',
    pl: 'rodzajnik-czastkowy-po-wlosku',
    tr: 'italyancada-kismi-tanimliklar',
    de: 'teilungsartikel-im-italienischen',
    ja: 'イタリア語の部分冠詞',
  },
  nav: [
    ['forme', 'Forme'],
    ['quando', 'Quando usarlo'],
    ['altri-modi', 'Altri modi'],
    ['negative', 'Frasi negative'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
    ['Articolo', 'Di + articolo', 'Esempio'],
    [
      ['il', 'del', 'del pane · del caffè · del riso'],
      ['lo', 'dello', 'dello zucchero · dello yogurt'],
      ['l’', 'dell’', 'dell’acqua · dell’olio'],
      ['la', 'della', 'della frutta · della pasta · della pizza'],
      ['i', 'dei', 'dei pomodori · dei libri'],
      ['gli', 'degli', 'degli amici · degli spaghetti · degli zaini'],
      ['le', 'delle', 'delle mele · delle arance · delle amiche'],
    ]
  )}<p class="mini-note">${L.formeNote1}</p><p class="mini-note">${L.formeNote2}</p></article>
    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
      [L.qSing, 'Vorrei dell’acqua, per favore. · Metti del sale nella pasta?'],
      [L.qPlur, 'Ho comprato delle mele e dei pomodori. · Stasera vengono degli amici.'],
      [L.qPiace, 'Mi piace il caffè. · Odio le cipolle. · Preferisco il tè.'],
      [L.qBar, 'Un caffè, per favore. · Due birre e una pizza.'],
    ])}<p class="mini-note">${L.quandoNote1}</p><p class="mini-note">${L.quandoNote2}</p></article>
    <article class="lesson-box" id="altri-modi"><h2>${L.altriH2}</h2><p>${L.altriP}</p>${h.examples([
      [L.aPo, 'Vorrei un po’ di pane. · Ci vuole un po’ di pazienza.'],
      [L.aAlcuni, 'Ho alcuni amici a Roma. · Ho fatto alcune foto.'],
      [L.aQualche, 'Resto qualche giorno. · Ho qualche domanda. · Qualche studente è in ritardo.'],
    ])}<p class="mini-note">${L.altriNote}</p></article>
    <article class="lesson-box" id="negative"><h2>${L.negH2}</h2><p>${L.negP}</p>${h.examples([
      [L.nPos, 'Ho del pane. · Ci sono degli studenti.'],
      [L.nNeg, 'Non ho pane. · Non ci sono studenti.'],
      [L.nNessun, 'Non ho nessun amico qui. · Non c’è nessuna lettera.'],
    ])}<p class="mini-note">${L.negNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tPossesso, 'Vorrei del pane. · Il libro del professore.'],
      [L.tOmettere, 'Compro pane e latte. · Hai fratelli? · Vendono frutta e verdura.'],
      [L.tDomanda, 'C’è del latte? · Hai degli spiccioli?'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Ho comprato qualche libri.', 'Ho comprato qualche libro.'],
      ['Ho dei amici a Roma.', 'Ho degli amici a Roma.'],
      ['Vorrei dello pane.', 'Vorrei del pane.'],
      ['Mi piace del caffè.', 'Mi piace il caffè.'],
      ['Ho alcuni pane.', 'Ho un po’ di pane.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Vorrei ___ pane, per favore.', a: 'del', hint: 'Il pane → del pane.' },
        { q: 'Metti ___ zucchero nel caffè?', a: 'dello', hint: 'Lo zucchero → dello zucchero.' },
        { q: 'Mi dai ___ acqua?', a: 'dell’', hint: 'L’acqua → dell’acqua, con l’apostrofo.' },
        { q: 'Ho comprato ___ frutta al mercato.', a: 'della', hint: 'La frutta → della frutta.' },
        { q: 'In frigo ci sono ___ pomodori.', a: 'dei', hint: 'I pomodori → dei pomodori.' },
        { q: 'Stasera vengono ___ amici a cena.', a: 'degli', hint: 'Gli amici → degli amici.' },
        { q: 'Prendo ___ arance per la spremuta.', a: 'delle', hint: 'Le arance → delle arance.' },
        { q: 'Vuoi ___ olio sull’insalata?', a: 'dell’', hint: 'L’olio → dell’olio.' },
        { q: 'Per cena cucino ___ spaghetti.', a: 'degli', hint: 'Gli spaghetti → degli spaghetti.' },
        { q: 'Al corso ho conosciuto ___ ragazze simpatiche.', a: 'delle', hint: 'Le ragazze → delle ragazze.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Resto a Roma qualche ___. (giorno)', a: 'giorno', hint: 'Qualche vuole sempre il singolare.' },
      { q: 'Ho ___ amici a Milano. (alcuni o alcune?)', a: 'alcuni', hint: 'Amici è maschile: alcuni.' },
      { q: 'Ho fatto ___ foto al mare. (alcuni o alcune?)', a: 'alcune', hint: 'La foto è femminile: alcune foto.' },
      { q: 'Vuoi un po’ ___ tè?', a: 'di', hint: 'Un po’ di + la cosa: un po’ di tè.' },
      { q: 'C’è qualche ___ per me? (lettera)', a: 'lettera', hint: 'Qualche + singolare: qualche lettera.' },
      { q: 'Ho letto dei libri. = Ho letto qualche ___.', a: 'libro', hint: 'Dei libri → qualche libro.' },
      { q: 'Ho visto delle amiche. = Ho visto ___ amiche.', a: 'alcune', hint: 'Delle amiche → alcune amiche.' },
      { q: 'Vorrei del latte. = Vorrei ___ po’ di latte.', a: 'un', hint: 'Del latte → un po’ di latte.' },
      { q: 'Qualche studente ___ in ritardo. (essere)', a: 'è', alt: 'e’', hint: 'Qualche + singolare: anche il verbo è singolare.' },
      { q: 'Ci sono ___ problemi con il computer. (alcuni o alcune?)', a: 'alcuni', hint: 'Il problema è maschile: alcuni problemi.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Mi piace molto ___ caffè.', a: 'il', hint: 'Con piacere si parla del caffè in generale: il caffè.' },
      { q: 'Al bar: «Vorrei ___ caffè, per favore.»', a: 'un', hint: 'Al bar si ordina una tazzina: un caffè.' },
      { q: 'Odio ___ cipolle!', a: 'le', hint: 'Con odiare, amare, preferire: l’articolo determinativo.' },
      { q: 'Hai del pane? No, non ho ___.', a: 'pane', hint: 'Nelle frasi negative il partitivo sparisce: non ho pane.' },
      { q: 'Ci sono degli studenti? No, non ci sono ___.', a: 'studenti', hint: 'Non ci sono studenti, senza degli.' },
      { q: 'Questa è la macchina ___ professore. (di + il)', a: 'del', hint: 'Qui del vuol dire «di chi?»: la macchina del professore.' },
      { q: 'C’è ___ latte in frigo?', a: 'del', hint: 'Una quantità non precisa: del latte.' },
      { q: 'Non ho ___ amico qui. (nessun o nessuno?)', a: 'nessun', hint: 'Nessun + singolare, come un: nessun amico.' },
      { q: 'Al mercato vendono ___ verdura buonissima.', a: 'della', hint: 'La verdura → della verdura.' },
      { q: 'Preferisci ___ tè o il caffè?', a: 'il', hint: 'Preferire: il tè, in generale.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Stasera vengono degli amici a cena. Mi aiuti a fare la spesa?'],
      ['Studente', 'Certo! Che cosa compriamo?'],
      ['Martin', 'Della pasta, dei pomodori e un po’ di basilico. E qualche bottiglia d’acqua.'],
      ['Studente', 'E il pane?'],
      ['Martin', 'Il pane non serve: ne ho ancora. Ma non ho frutta: prendiamo delle arance.'],
    ])}</article>`,
  it: {
    h1: 'Gli articoli partitivi: del, della, dei',
    card: 'Del pane, dell’acqua, degli amici: il partitivo, un po’ di, alcuni e qualche.',
    lead: 'Vorrei del pane, ho degli amici, c’è dell’acqua? Il partitivo dice «un po’ di» o «alcuni»: le sette forme (del, dello, dell’, della, dei, degli, delle), quando si usa e quando no, gli altri modi per dirlo (un po’ di, alcuni, qualche) e le frasi negative. Con 30 esercizi.',
    description:
      'Gli articoli partitivi in italiano: del, dello, dell’, della, dei, degli, delle. Quando si usa il partitivo, un po’ di, alcuni e qualche, le frasi negative, le trappole e 30 esercizi.',
    heroAlt: 'Un sacchetto di carta con alcune arance su un tavolo di legno, in un mercato italiano',
    formeH2: 'Le forme: di + articolo',
    formeP:
      'Il partitivo è la preposizione <em lang="it">di</em> unita all’articolo determinativo: le stesse forme delle preposizioni articolate. Si sceglie la forma come si sceglie l’articolo: guardando la parola che viene dopo.',
    formeNote1:
      '<strong>Dello, dell’, degli</strong> seguono le regole di <em lang="it">lo, l’, gli</em>: davanti a <em lang="it">s</em> + consonante, <em lang="it">z</em>, <em lang="it">y</em> (<em lang="it">dello zucchero</em>, <em lang="it">degli spaghetti</em>) e davanti a vocale (<em lang="it">dell’acqua</em>, <em lang="it">degli amici</em>).',
    formeNote2:
      '<strong>Dei, degli, delle sono il plurale di un, uno, una:</strong> <em lang="it">un libro → dei libri</em>, <em lang="it">uno zaino → degli zaini</em>, <em lang="it">una mela → delle mele</em>.',
    quandoH2: 'Quando si usa',
    quandoP:
      'Il partitivo indica <strong>una quantità non precisa</strong>. Al singolare vuol dire «un po’ di» e va con le cose che non si contano (il pane, l’acqua, la frutta); al plurale vuol dire «alcuni».',
    qSing: 'Un po’ di: del, dello, dell’, della',
    qPlur: 'Alcuni: dei, degli, delle',
    qPiace: 'In generale: il, lo, la…',
    qBar: 'Una porzione: un, uno, una',
    quandoNote1:
      '<strong>Con piacere, amare, odiare, preferire</strong> si parla della cosa in generale: si usa l’articolo determinativo, mai il partitivo. <em lang="it">Mi piace il caffè</em>, non <em lang="it">mi piace del caffè</em>.',
    quandoNote2:
      '<strong>Al bar e al ristorante</strong> si ordinano porzioni: <em lang="it">un caffè</em>, <em lang="it">una birra</em>, <em lang="it">due pizze</em>. Il partitivo serve quando la quantità non conta: <em lang="it">vorrei dell’acqua</em>.',
    altriH2: 'Un po’ di, alcuni, qualche',
    altriP:
      'Il partitivo non è l’unico modo per dire una quantità non precisa. Nella lingua di tutti i giorni si usano spesso anche queste tre forme.',
    aPo: 'Un po’ di + singolare',
    aAlcuni: 'Alcuni, alcune + plurale',
    aQualche: 'Qualche + singolare',
    altriNote:
      '<strong>Qualche vuole sempre il singolare</strong>, anche se il significato è plurale: <em lang="it">qualche giorno</em> = alcuni giorni. Anche il verbo va al singolare: <em lang="it">qualche studente è in ritardo</em>. E non cambia mai: <em lang="it">qualche amico</em>, <em lang="it">qualche amica</em>.',
    negH2: 'Nelle frasi negative',
    negP:
      'Nelle frasi con <em lang="it">non</em> il partitivo di solito <strong>sparisce</strong>: resta solo la parola, senza articolo.',
    nPos: 'Frase positiva',
    nNeg: 'Frase negativa',
    nNessun: 'Per insistere: nessun, nessuna',
    negNote:
      '<strong>Nessun, nessuna</strong> si usano come <em lang="it">un, una</em> e vogliono il singolare: <em lang="it">nessun amico</em>, <em lang="it">nessuno studente</em>, <em lang="it">nessuna lettera</em>. Servono per dire «proprio zero».',
    trapH2: 'Le trappole',
    trapP: 'Tre cose da sapere per non sbagliare e per parlare in modo naturale.',
    tPossesso: 'Del: partitivo o «di chi?»',
    tOmettere: 'Spesso si può togliere',
    tDomanda: 'Nelle domande',
    trapNote:
      '<strong>La stessa forma ha due usi:</strong> in <em lang="it">vorrei del pane</em> è un partitivo (un po’), in <em lang="it">il libro del professore</em> è una preposizione articolata (il libro di chi?). E il partitivo <strong>non è obbligatorio</strong>: negli elenchi, nelle domande e sulle insegne gli italiani lo tolgono spesso (<em lang="it">compro pane e latte</em>, <em lang="it">hai fratelli?</em>). Se non sei sicuro, puoi sempre usare <em lang="it">un po’ di</em> o <em lang="it">alcuni</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il partitivo giusto',
    part1P: 'Scrivi del, dello, dell’, della, dei, degli o delle.',
    part2H3: 'Parte 2 · Un po’ di, alcuni, qualche',
    part2P: 'Scrivi la parola che manca: guarda il suggerimento tra parentesi.',
    part3H3: 'Parte 3 · Partitivo, articolo o niente?',
    part3P: 'Attenzione: non tutte le frasi vogliono il partitivo.',
  },
};
