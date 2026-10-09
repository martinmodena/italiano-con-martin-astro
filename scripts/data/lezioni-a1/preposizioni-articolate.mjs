// Lezione A1 «Le preposizioni articolate» (2026-10-09): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in preposizioni-articolate-i18n.mjs.
//
// Martin: «si potrebbe fare la lezione sulle preposizioni articolate?». La tabella di + il = del…,
// quando serve l'articolo (a Roma / al mare, da Marco / dal medico, di mia madre / della mia amica),
// le ore (alle otto, dalle nove alle cinque), il partitivo (del pane, dei libri), gli errori tipici e
// 30 esercizi. Nell'indice A1 sta subito dopo «Le preposizioni semplici».

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'preposizioni-articolate',
  next: 'ce-ci-sono',
  after: 'preposizioni-semplici',
  minutes: 25,
  slugs: {
    en: 'italian-articulated-prepositions',
    es: 'preposiciones-articuladas-en-italiano',
    fr: 'prepositions-articulees-en-italien',
    cs: 'predlozky-se-clenem-v-italstine',
    pl: 'przyimki-sciagniete-z-rodzajnikiem-po-wlosku',
    tr: 'italyanca-artikelli-edatlar',
    de: 'praepositionen-mit-artikel-im-italienischen',
    ja: 'イタリア語の冠詞前置詞',
  },
  nav: [
    ['tabella', 'Tabella'],
    ['quando', 'Quando usarlo'],
    ['partitivo', 'Partitivo'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="tabella"><h2>${L.tabH2}</h2><p>${L.tabP}</p>${h.table(
    ['Preposizione', '=il', '=lo', '=l’', '=la', '=i', '=gli', '=le'],
    [
      ['di', 'del', 'dello', 'dell’', 'della', 'dei', 'degli', 'delle'],
      ['a', 'al', 'allo', 'all’', 'alla', 'ai', 'agli', 'alle'],
      ['da', 'dal', 'dallo', 'dall’', 'dalla', 'dai', 'dagli', 'dalle'],
      ['in', 'nel', 'nello', 'nell’', 'nella', 'nei', 'negli', 'nelle'],
      ['su', 'sul', 'sullo', 'sull’', 'sulla', 'sui', 'sugli', 'sulle'],
    ]
  )}${h.examples([
    [`${it('di + il')} → ${it('del')}`, 'Il libro del professore.'],
    [`${it('a + la')} → ${it('alla')}`, 'Vado alla stazione.'],
    [`${it('da + lo')} → ${it('dallo')}`, 'Torno dallo stadio.'],
    [`${it('in + l’')} → ${it('nell’')}`, 'Il cappotto è nell’armadio.'],
    [`${it('su + i')} → ${it('sui')}`, 'Le foto sono sui muri.'],
    [`${it('a + gli')} → ${it('agli')}`, 'Scrivo agli amici.'],
  ])}<p class="mini-note">${L.tabNote1}</p><p class="mini-note">${L.tabNote2}</p></article>
    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
      [L.qCitta, 'Vado a Roma. · Vado al mare.'],
      [L.qPaesi, 'Vivo in Italia. · Vivo nell’Italia del Sud.'],
      [L.qPersone, 'Vado da Marco. · Vado dal medico.'],
      [L.qFamiglia, 'Il libro di mia sorella. · Il libro della mia amica.'],
      [L.qOre, 'alle otto, all’una, dalle nove alle cinque'],
      [L.qLuoghi, 'al bar, al cinema, allo stadio · in centro, in città'],
    ])}<p class="mini-note">${L.quandoNote1}</p><p class="mini-note">${L.quandoNote2}</p></article>
    <article class="lesson-box" id="partitivo"><h2>${L.partH2}</h2><p>${L.partP}</p>${h.examples([
      [L.pSing, 'Vorrei del pane, per favore.'],
      [L.pPlur, 'Ho comprato dei pomodori e delle mele.'],
      [L.pSenza, 'Non ho pane. · Ho un po’ di pane.'],
    ])}<p class="mini-note">${L.partNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Vado a il cinema.', 'Vado al cinema.'],
      ['Il libro di il professore.', 'Il libro del professore.'],
      ['Le chiavi sono su il tavolo.', 'Le chiavi sono sul tavolo.'],
      ['Vado al Roma.', 'Vado a Roma.'],
      ['Lavoro dalle nove a le cinque.', 'Lavoro dalle nove alle cinque.'],
      ['Torno dal stadio.', 'Torno dallo stadio.'],
      ['La casa dei amici.', 'La casa degli amici.'],
      ['Vado nella Italia.', 'Vado in Italia.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Stasera vado ___ cinema. (a + il)', a: 'al', hint: 'A + il = al.' },
        { q: 'Ecco il libro ___ professoressa. (di + la)', a: 'della', hint: 'Di + la = della.' },
        { q: 'Torno ___ ufficio alle sei. (da + l’)', a: 'dall’', hint: 'Da + l’ = dall’.' },
        { q: 'Le chiavi sono ___ tavolo. (su + il)', a: 'sul', hint: 'Su + il = sul.' },
        { q: 'Il telefono è ___ borsa. (in + la)', a: 'nella', hint: 'In + la = nella: in diventa ne-.' },
        { q: 'Questi sono i quaderni ___ studenti. (di + gli)', a: 'degli', hint: 'Di + gli = degli.' },
        { q: 'Scrivo un messaggio ___ amiche. (a + le)', a: 'alle', hint: 'A + le = alle.' },
        { q: 'Torno ___ stadio in autobus. (da + lo)', a: 'dallo', hint: 'Da + lo = dallo.' },
        { q: 'I libri sono ___ scaffali. (su + gli)', a: 'sugli', hint: 'Su + gli = sugli.' },
        { q: 'Il gatto dorme ___ armadio. (in + l’)', a: 'nell’', hint: 'In + l’ = nell’.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'La lezione comincia ___ nove.', a: 'alle', hint: 'Le ore: alle nove.' },
      { q: 'Lavoro ___ lunedì al venerdì.', a: 'dal', hint: 'Dal lunedì al venerdì.' },
      { q: 'Stasera andiamo ___ ristorante.', a: 'al', hint: 'Al ristorante, al bar, al cinema.' },
      { q: 'Questa è la macchina ___ mio vicino.', a: 'del', hint: 'Di + il mio vicino = del mio vicino.' },
      { q: 'Metti il latte ___ frigo, per favore.', a: 'nel', hint: 'In + il = nel.' },
      { q: 'Oggi pomeriggio vado ___ dentista.', a: 'dal', hint: 'Da + il dentista = dal dentista.' },
      { q: 'Mi piace la musica ___ anni Ottanta.', a: 'degli', hint: 'Di + gli anni = degli anni.' },
      { q: 'Parliamo ___ vacanze.', a: 'delle', hint: 'Parlare di + le vacanze = delle vacanze.' },
      { q: 'Le foto sono ___ muro.', a: 'sul', hint: 'Su + il muro = sul muro.' },
      { q: 'Ci vediamo ___ una.', a: 'all’', hint: 'L’una: all’una.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Vado ___ Roma in treno.', a: 'a', hint: 'Città senza articolo: a Roma.' },
      { q: 'D’estate vado ___ mare.', a: 'al', hint: 'Al mare, con l’articolo.' },
      { q: 'Mio fratello vive ___ Spagna.', a: 'in', hint: 'Paese senza aggettivo: in Spagna.' },
      { q: 'La mamma è ___ cucina.', a: 'in', hint: 'In cucina, in camera, in bagno: senza articolo.' },
      { q: 'Stasera vado ___ Anna.', a: 'da', hint: 'Un nome di persona non ha articolo: da Anna.' },
      { q: 'Ho la febbre: vado ___ medico.', a: 'dal', hint: 'Il medico: dal medico.' },
      {
        q: 'Oggi è il compleanno ___ mia madre.',
        a: 'di',
        hint: 'Mia madre: niente articolo con la famiglia al singolare.',
      },
      { q: 'Oggi è il compleanno ___ mia amica Sara.', a: 'della', hint: 'La mia amica: della mia amica.' },
      { q: 'Vorrei ___ pane, per favore.', a: 'del', hint: 'Un po’ di pane: del pane.' },
      { q: 'Stasera esco ___ i miei amici.', a: 'con', hint: 'Con non si unisce all’articolo: con i.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Dove vai dopo la lezione?'],
      ['Studente', 'Prima vado dal medico, poi al supermercato.'],
      ['Martin', 'E che cosa compri?'],
      ['Studente', 'Del pane, delle mele e un regalo per il compleanno della mia vicina.'],
    ])}</article>`,
  it: {
    h1: 'Le preposizioni articolate',
    card: 'Del, al, dal, nel, sul: la tabella, le ore, del pane e dei libri.',
    lead: 'Di + il = del, a + la = alla, in + lo = nello: la tabella completa, quando serve l’articolo (a Roma ma al mare, da Marco ma dal medico), le ore, del pane e dei libri, gli errori tipici e 30 esercizi.',
    description:
      'Le preposizioni articolate italiane: del, al, dal, nel, sul e tutte le altre in una tabella, quando serve l’articolo (a Roma / al mare, da Marco / dal medico), le ore, il partitivo e 30 esercizi.',
    tabH2: 'Preposizione + articolo = una parola sola',
    tabP: 'Quando dopo <em lang="it">di</em>, <em lang="it">a</em>, <em lang="it">da</em>, <em lang="it">in</em> e <em lang="it">su</em> viene un articolo determinativo, le due parole si uniscono: <em lang="it">di + il = del</em>.',
    tabNote1:
      '<strong>Due cose da ricordare.</strong> <em lang="it">Di</em> diventa <em lang="it">de-</em> e <em lang="it">in</em> diventa <em lang="it">ne-</em>: <em lang="it">del</em>, <em lang="it">nel</em>. E con <em lang="it">lo, la, l’, gli, le</em> la <em lang="it">l</em> si raddoppia: <em lang="it">dello</em>, <em lang="it">alla</em>, <em lang="it">negli</em>.',
    tabNote2:
      '<strong>Con, per, tra e fra non si uniscono:</strong> <em lang="it">con il</em>, <em lang="it">per la</em>, <em lang="it">tra gli</em>. Qualche volta si sente <em lang="it">col</em> (con + il), ma non è obbligatorio.',
    quandoH2: 'Quando serve l’articolo?',
    quandoP:
      'La preposizione articolata serve solo quando il nome vuole l’articolo. Confronta le coppie: a sinistra il nome non ha articolo, a destra sì.',
    qCitta: 'Città / luoghi con articolo',
    qPaesi: 'Paese / Paese con un aggettivo',
    qPersone: 'Nome / mestiere',
    qFamiglia: 'Famiglia / amici',
    qOre: 'Le ore',
    qLuoghi: 'Luoghi fissi',
    quandoNote1:
      '<strong>Le città e i nomi di persona non hanno articolo</strong>, quindi la preposizione resta semplice: <em lang="it">a Roma</em>, <em lang="it">da Anna</em>. I nomi comuni invece lo hanno: <em lang="it">al mare</em>, <em lang="it">dal medico</em>, <em lang="it">alla stazione</em>.',
    quandoNote2:
      '<strong>Attenzione ai luoghi fissi:</strong> <em lang="it">al bar</em>, <em lang="it">al cinema</em>, <em lang="it">al supermercato</em>, ma <em lang="it">in centro</em>, <em lang="it">in città</em>, <em lang="it">in cucina</em>, <em lang="it">a casa</em>, senza articolo. Si imparano a gruppi.',
    partH2: 'Del pane, dei libri: una quantità non precisa',
    partP:
      '<em lang="it">Di</em> + articolo serve anche per dire «un po’ di» o «alcuni»: è il partitivo. Si usa molto al bar, al mercato e al ristorante.',
    pSing: 'Un po’ di: del, della, dello',
    pPlur: 'Alcuni: dei, degli, delle',
    pSenza: 'Nelle frasi negative: niente',
    partNote:
      '<strong><em lang="it">Dei, degli, delle</em> sono il plurale di <em lang="it">un, uno, una</em>:</strong> <em lang="it">un libro → dei libri</em>, <em lang="it">uno zaino → degli zaini</em>, <em lang="it">una mela → delle mele</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo la preposizione: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Unisci le due parole',
    part1P: 'Scrivi la preposizione articolata.',
    part2H3: 'Parte 2 · Senza aiuto',
    part2P: 'Scrivi la preposizione articolata giusta.',
    part3H3: 'Parte 3 · Semplice o articolata?',
    part3P: 'Attenzione: in alcune frasi l’articolo non serve.',
  },
};
