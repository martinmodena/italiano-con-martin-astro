// Lezione A1 «I numeri in italiano»: struttura, materiale italiano e testi
// italiani. Le spiegazioni tradotte stanno in numeri-i18n.mjs.
// Tutto ciò che è in <span lang="it"> / <em lang="it"> è lingua-oggetto.

export default {
  slug: 'numeri',
  next: 'che-ore-sono',
  minutes: 25,
  slugs: {
    en: 'italian-numbers',
    es: 'los-numeros-en-italiano',
    fr: 'les-nombres-en-italien',
    cs: 'cisla-v-italstine',
    pl: 'liczby-po-wlosku',
    tr: 'italyanca-sayilar',
    de: 'zahlen-auf-italienisch',
    ja: 'イタリア語の数字',
  },
  nav: [
    ['zero-venti', 'Da 0 a 20'],
    ['decine', 'Decine'],
    ['grandi', 'Numeri grandi'],
    ['ordinali', 'Ordinali'],
    ['uso', 'Uso'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="zero-venti"><h2>${L.zeroH2}</h2><p>${L.zeroP}</p>${h.table(
    ['Numero', 'In lettere', 'Numero', 'In lettere'],
    [
      ['0', 'zero', '11', 'undici'],
      ['1', 'uno', '12', 'dodici'],
      ['2', 'due', '13', 'tredici'],
      ['3', 'tre', '14', 'quattordici'],
      ['4', 'quattro', '15', 'quindici'],
      ['5', 'cinque', '16', 'sedici'],
      ['6', 'sei', '17', 'diciassette'],
      ['7', 'sette', '18', 'diciotto'],
      ['8', 'otto', '19', 'diciannove'],
      ['9', 'nove', '20', 'venti'],
      ['10', 'dieci', '', ''],
    ]
  )}<p class="mini-note">${L.zeroNote}</p></article>
    <article class="lesson-box" id="decine"><h2>${L.decineH2}</h2><p>${L.decineP}</p>${h.table(
      ['Numero', 'In lettere', '=+ 1', '=+ 3', '=+ 8'],
      [
        ['20', 'venti', 'ventuno', 'ventitré', 'ventotto'],
        ['30', 'trenta', 'trentuno', 'trentatré', 'trentotto'],
        ['40', 'quaranta', 'quarantuno', 'quarantatré', 'quarantotto'],
        ['50', 'cinquanta', 'cinquantuno', 'cinquantatré', 'cinquantotto'],
        ['60', 'sessanta', 'sessantuno', 'sessantatré', 'sessantotto'],
        ['70', 'settanta', 'settantuno', 'settantatré', 'settantotto'],
        ['80', 'ottanta', 'ottantuno', 'ottantatré', 'ottantotto'],
        ['90', 'novanta', 'novantuno', 'novantatré', 'novantotto'],
      ]
    )}<p class="mini-note">${L.decineNote1}</p><p class="mini-note">${L.decineNote2}</p></article>
    <article class="lesson-box" id="grandi"><h2>${L.grandiH2}</h2><p>${L.grandiP}</p>${h.table(
      ['Numero', 'In lettere'],
      [
        ['100', 'cento'],
        ['200', 'duecento'],
        ['245', 'duecentoquarantacinque'],
        ['1.000', 'mille'],
        ['2.000', 'duemila'],
        ['3.500', 'tremilacinquecento'],
        ['10.000', 'diecimila'],
        ['100.000', 'centomila'],
        ['1.000.000', 'un milione'],
        ['2.000.000', 'due milioni'],
        ['1.000.000.000', 'un miliardo'],
      ]
    )}<p class="mini-note">${L.grandiNote1}</p><p class="mini-note">${L.grandiNote2}</p><p class="mini-note">${L.grandiNote3}</p></article>
    <article class="lesson-box" id="ordinali"><h2>${L.ordH2}</h2><p>${L.ordP}</p>${h.table(
      ['Numero', 'Maschile', 'Femminile'],
      [
        ['1°', 'primo', 'prima'],
        ['2°', 'secondo', 'seconda'],
        ['3°', 'terzo', 'terza'],
        ['4°', 'quarto', 'quarta'],
        ['5°', 'quinto', 'quinta'],
        ['6°', 'sesto', 'sesta'],
        ['7°', 'settimo', 'settima'],
        ['8°', 'ottavo', 'ottava'],
        ['9°', 'nono', 'nona'],
        ['10°', 'decimo', 'decima'],
        ['11°', 'undicesimo', 'undicesima'],
        ['20°', 'ventesimo', 'ventesima'],
        ['23°', 'ventitreesimo', 'ventitreesima'],
        ['100°', 'centesimo', 'centesima'],
      ]
    )}<p class="mini-note">${L.ordNote1}</p><p class="mini-note">${L.ordNote2}</p></article>
    <article class="lesson-box" id="uso"><h2>${L.useH2}</h2>${h.examples([
      [L.useAge, 'Quanti anni hai? Ho ventotto anni.'],
      [L.usePrice, 'Quanto costa? Costa tre euro e cinquanta.'],
      [L.useOrder, 'Due cappuccini e un cornetto, per favore.'],
      [L.usePeople, 'Quanti siete? Siamo in quattro.'],
      [L.useYear, 'Mia nonna è nata nel 1948: nel millenovecentoquarantotto.'],
      [L.useMath, 'Due più tre fa cinque. Dieci meno quattro fa sei.'],
      [L.usePercent, 'Oggi c’è lo sconto del 20%: del venti per cento.'],
      [L.useDecimal, 'Ho la febbre: trentotto virgola due (38,2).'],
    ])}<p class="mini-note">${L.useNote1}</p><p class="mini-note">${L.useNote2}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['ventiuno.', 'ventuno.'],
      ['trentaotto.', 'trentotto.'],
      ['ventitre.', 'ventitré.'],
      ['dieciotto.', 'diciotto.'],
      ['duemille euro.', 'duemila euro.'],
      ['un milione persone.', 'un milione di persone.'],
      ['sono 25 anni.', 'ho 25 anni.'],
      ['la terzo volta.', 'la terza volta.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Una settimana ha ___ giorni. (7)', a: 'sette', hint: '7 = sette.' },
        { q: 'Un anno ha ___ mesi. (12)', a: 'dodici', hint: '12 = dodici.' },
        { q: 'Mia sorella ha ___ anni. (16)', a: 'sedici', hint: '16 = sedici, con -dici alla fine.' },
        {
          q: 'Il treno parte dal binario ___. (17)',
          a: 'diciassette',
          hint: '17 = diciassette: comincia con dici- e ha due s.',
        },
        {
          q: 'In classe ci sono ___ studenti. (19)',
          a: 'diciannove',
          hint: '19 = diciannove: comincia con dici- e ha due n.',
        },
        {
          q: 'Luca compie ___ anni domani. (21)',
          a: 'ventuno',
          alt: 'ventun',
          hint: 'Venti + uno: la i cade, ventuno.',
        },
        { q: 'Febbraio di solito ha ___ giorni. (28)', a: 'ventotto', hint: 'Venti + otto: la i cade, ventotto.' },
        {
          q: 'Abito in via Dante, al numero ___. (33)',
          a: 'trentatré',
          hint: 'Trenta + tre: tre prende l’accento, trentatré.',
        },
        { q: 'Una partita di calcio dura ___ minuti. (90)', a: 'novanta', hint: '90 = novanta.' },
        { q: 'Mio nonno ha ___ anni. (88)', a: 'ottantotto', hint: 'Ottanta + otto: la a cade, ottantotto.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Il biglietto del concerto costa ___ euro. (100)', a: 'cento', hint: '100 = cento.' },
      {
        q: 'Questa bicicletta costa ___ euro. (250)',
        a: 'duecentocinquanta',
        hint: 'Duecento + cinquanta, in una sola parola.',
      },
      { q: 'Un cappuccino costa un euro e ___. (1,50 €)', a: 'cinquanta', hint: '1,50 € = un euro e cinquanta.' },
      {
        q: 'Da Milano a Roma ci sono circa ___ chilometri. (570)',
        a: 'cinquecentosettanta',
        hint: 'Cinquecento + settanta, in una sola parola.',
      },
      { q: 'Il computer nuovo costa ___ euro. (1.000)', a: 'mille', hint: '1.000 = mille.' },
      {
        q: 'In questo paese vivono ___ persone. (3.000)',
        a: 'tremila',
        hint: 'Mille al plurale diventa -mila: tremila.',
      },
      {
        q: 'L’affitto costa ___ euro al mese. (1.200)',
        a: 'milleduecento',
        hint: 'Mille + duecento, in una sola parola.',
      },
      { q: 'Nello stadio ci sono ___ posti. (60.000)', a: 'sessantamila', hint: 'Sessanta + mila: sessantamila.' },
      {
        q: 'Il video ha ___ di visualizzazioni. (1.000.000)',
        a: 'un milione',
        hint: '1.000.000 = un milione, poi di.',
      },
      { q: 'Roma ha quasi tre ___ di abitanti. (3.000.000)', a: 'milioni', hint: 'Milione al plurale: milioni.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Abito al ___ piano. (3°)', a: 'terzo', hint: 'Il piano è maschile: terzo.' },
      { q: 'È la ___ volta che vengo in Italia. (1ª)', a: 'prima', hint: 'La volta è femminile: prima.' },
      { q: 'Il bagno è la ___ porta a destra. (2ª)', a: 'seconda', hint: 'La porta è femminile: seconda.' },
      { q: 'Prendi la ___ strada a sinistra. (4ª)', a: 'quarta', hint: 'La strada è femminile: quarta.' },
      { q: 'Maria è arrivata ___ nella gara. (5ª)', a: 'quinta', hint: 'Maria è una donna: quinta.' },
      { q: 'Ottobre è il ___ mese dell’anno. (10°)', a: 'decimo', hint: '10° = decimo.' },
      {
        q: 'Dicembre è il ___ mese dell’anno. (12°)',
        a: 'dodicesimo',
        hint: 'Dodici perde la i e prende -esimo: dodicesimo.',
      },
      {
        q: 'Domani Anna festeggia il suo ___ compleanno. (18°)',
        a: 'diciottesimo',
        hint: 'Diciotto perde la o e prende -esimo: diciottesimo.',
      },
      {
        q: 'Viviamo nel ___ secolo. (21°)',
        a: 'ventunesimo',
        hint: 'Ventuno perde la o e prende -esimo: ventunesimo.',
      },
      {
        q: 'Il mio ufficio è al ___ piano del grattacielo. (23°)',
        a: 'ventitreesimo',
        hint: 'Con tre la e resta: ventitreesimo.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Quanti anni hai?'],
      ['Studente', 'Ho ventitré anni.'],
      ['Martin', 'E quanto costa un caffè nella tua città?'],
      ['Studente', 'Più o meno due euro e venti.'],
      ['Martin', 'In Italia al bar costa circa un euro e trenta.'],
    ])}</article>`,
  it: {
    h1: 'I numeri in italiano',
    crumb: 'I numeri',
    cardTitle: 'I numeri',
    card: 'Da zero a un miliardo, età, prezzi e numeri ordinali.',
    lead: 'Contare, dire l’età e i prezzi, leggere un anno. Qui trovi i numeri da zero a un miliardo, le regole per scriverli, i numeri ordinali e 30 esercizi.',
    description:
      'I numeri in italiano spiegati semplice: da 0 a 20, ventuno e ventotto, cento, mille e duemila, un milione di, i numeri ordinali (primo, secondo, terzo) e 30 esercizi.',
    zeroH2: 'Da 0 a 20',
    zeroP:
      'Questi numeri si imparano a memoria: tutti gli altri si costruiscono partendo da loro. Da 11 a 16 finiscono in <em lang="it">-dici</em>, da 17 a 19 cominciano con <em lang="it">dici-</em>.',
    zeroNote:
      '<strong>Attenzione alle doppie:</strong> <em lang="it">diciassette</em> ha due <em lang="it">s</em>, <em lang="it">diciotto</em> due <em lang="it">t</em>, <em lang="it">diciannove</em> due <em lang="it">n</em>.',
    decineH2: 'Le decine e i numeri da 21 a 99',
    decineP:
      'Le decine sono <em lang="it">venti, trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta</em>. Gli altri numeri uniscono decina e unità in una sola parola: <em lang="it">trenta + due = trentadue</em>.',
    decineNote1:
      '<strong>Con uno e otto cade una vocale.</strong> Davanti a <em lang="it">uno</em> e <em lang="it">otto</em> la decina perde la vocale finale: <em lang="it">ventuno, quarantotto</em>, non <em lang="it">ventiuno, quarantaotto</em>.',
    decineNote2:
      '<strong>Tre prende l’accento.</strong> Alla fine di un numero lungo si scrive <em lang="it">tré</em>: <em lang="it">ventitré, trentatré, centotré</em>. Da solo, invece, <em lang="it">tre</em> non ha l’accento.',
    grandiH2: 'Centinaia, migliaia e milioni',
    grandiP:
      'Anche i numeri grandi si scrivono in una sola parola, dalla parte più grande alla più piccola: <em lang="it">245 = duecentoquarantacinque</em>, <em lang="it">1998 = millenovecentonovantotto</em>.',
    grandiNote1:
      '<strong>Cento non cambia, mille sì.</strong> <em lang="it">Cento</em> resta uguale: <em lang="it">duecento, trecento</em>. <em lang="it">Mille</em> al plurale diventa <em lang="it">-mila</em>: <em lang="it">duemila, tremila, diecimila</em>. Davanti a <em lang="it">otto</em> e <em lang="it">ottanta</em> di solito <em lang="it">cento</em> perde la <em lang="it">o</em>: <em lang="it">centotto, centottanta</em>.',
    grandiNote2:
      '<strong>Milione e miliardo vogliono di.</strong> Sono nomi: hanno il plurale (<em lang="it">due milioni</em>) e davanti a un altro nome prendono <em lang="it">di</em>: <em lang="it">un milione di persone</em>. Con <em lang="it">cento</em> e <em lang="it">mille</em> non serve: <em lang="it">mille persone</em>.',
    grandiNote3:
      '<strong>Punto per le migliaia, virgola per i decimali.</strong> <em lang="it">1.500</em> si legge <em lang="it">millecinquecento</em>, <em lang="it">2,5</em> si legge <em lang="it">due virgola cinque</em>. Negli anni il punto non si mette: <em lang="it">1998</em>.',
    ordH2: 'I numeri ordinali: primo, secondo, terzo',
    ordP: 'Gli ordinali dicono il posto in una serie: <em lang="it">il primo giorno, la seconda strada</em>. I primi dieci si imparano a memoria. Dall’11 in poi si toglie l’ultima vocale del numero e si aggiunge <em lang="it">-esimo</em>: <em lang="it">undici → undicesimo, venti → ventesimo, cento → centesimo</em>.',
    ordNote1:
      '<strong>Sono aggettivi.</strong> Si accordano con il nome, come <em lang="it">rosso</em> o <em lang="it">piccolo</em>: <em lang="it">il terzo piano, la terza volta, i primi giorni, le prime parole</em>.',
    ordNote2:
      '<strong>Due casi speciali.</strong> Quando il numero finisce con <em lang="it">tre</em> o <em lang="it">sei</em>, la vocale resta: <em lang="it">ventitreesimo, trentaseiesimo</em>. Nello scritto c’è anche la forma breve: <em lang="it">1°</em> (primo), <em lang="it">1ª</em> (prima).',
    useH2: 'I numeri di tutti i giorni',
    useAge: 'Età',
    usePrice: 'Prezzo',
    useOrder: 'Al bar',
    usePeople: 'Quante persone?',
    useYear: 'Anno',
    useMath: 'Calcoli',
    usePercent: 'Percentuale',
    useDecimal: 'Decimali',
    useNote1:
      '<strong>L’età si dice con avere:</strong> <em lang="it">ho vent’anni</em>, non <em lang="it">sono venti anni</em>.',
    useNote2:
      '<strong>Uno davanti a un nome</strong> cambia come l’articolo: <em lang="it">un cornetto, una pizza, uno zaino</em>. <em lang="it">Euro</em> non cambia al plurale (<em lang="it">un euro, dieci euro</em>) e con i prezzi di solito non si dice <em lang="it">centesimi</em>: <em lang="it">3,50 € = tre euro e cinquanta</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Da 0 a 100',
    part1P: 'Scrivi in lettere il numero tra parentesi.',
    part2H3: 'Parte 2 · Numeri grandi e prezzi',
    part2P: 'Scrivi in lettere il numero tra parentesi.',
    part3H3: 'Parte 3 · Numeri ordinali',
    part3P: 'Scrivi il numero ordinale. Guarda il nome: maschile o femminile?',
  },
};
