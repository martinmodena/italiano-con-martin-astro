// Lezione A1 «Giorni, mesi e date»: struttura, materiale italiano e testi
// italiani. Le spiegazioni tradotte stanno in giorni-mesi-date-i18n.mjs.

export default {
  slug: 'giorni-mesi-date',
  next: null,
  minutes: 25,
  slugs: {
    en: 'days-months-and-dates-in-italian',
    es: 'dias-meses-y-fechas-en-italiano',
    fr: 'jours-mois-et-dates-en-italien',
    cs: 'dny-mesice-a-data-v-italstine',
    pl: 'dni-miesiace-i-daty-po-wlosku',
    tr: 'italyanca-gunler-aylar-ve-tarihler',
    de: 'wochentage-monate-und-datum-auf-italienisch',
    ja: 'イタリア語の曜日と月と日付',
  },
  nav: [
    ['giorni', 'Giorni'],
    ['mesi', 'Mesi e stagioni'],
    ['date', 'Date'],
    ['quando', 'Ieri, oggi, domani'],
    ['fa-tra', 'Fa e tra'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="giorni"><h2>${L.giorniH2}</h2><p>${L.giorniP}</p>${h.table(
    ['Giorno', 'Abbreviazione'],
    [
      ['lunedì', 'lun.'],
      ['martedì', 'mar.'],
      ['mercoledì', 'mer.'],
      ['giovedì', 'gio.'],
      ['venerdì', 'ven.'],
      ['sabato', 'sab.'],
      ['domenica', 'dom.'],
    ]
  )}${h.examples([
    [L.gOne, 'Lunedì vado dal medico.'],
    [L.gEvery, 'Il lunedì vado in palestra.'],
    [L.gFem, 'Questa domenica andiamo al lago.'],
    [L.gPlural, 'Il museo è chiuso tutti i lunedì.'],
  ])}<p class="mini-note">${L.giorniNote1}</p><p class="mini-note">${L.giorniNote2}</p><p class="mini-note">${L.giorniNote3}</p></article>
    <article class="lesson-box" id="mesi"><h2>${L.mesiH2}</h2><p>${L.mesiP}</p>${h.table(
      ['Numero', 'Mese', 'Numero', 'Mese'],
      [
        ['1', 'gennaio', '7', 'luglio'],
        ['2', 'febbraio', '8', 'agosto'],
        ['3', 'marzo', '9', 'settembre'],
        ['4', 'aprile', '10', 'ottobre'],
        ['5', 'maggio', '11', 'novembre'],
        ['6', 'giugno', '12', 'dicembre'],
      ]
    )}${h.table(
      ['Stagione', 'Mesi'],
      [
        ['la primavera', 'marzo, aprile, maggio'],
        ['l’estate', 'giugno, luglio, agosto'],
        ['l’autunno', 'settembre, ottobre, novembre'],
        ['l’inverno', 'dicembre, gennaio, febbraio'],
      ]
    )}${h.examples([
      [L.mMonth, 'In agosto molti negozi chiudono. A maggio fa già caldo.'],
      [L.mSeason, 'In estate andiamo al mare. D’inverno scio in montagna.'],
      [L.mOf, 'Il mese di dicembre è pieno di feste.'],
      [L.mFromTo, 'Il corso va da ottobre a giugno.'],
    ])}<p class="mini-note">${L.mesiNote1}</p><p class="mini-note">${L.mesiNote2}</p></article>
    <article class="lesson-box" id="date"><h2>${L.dateH2}</h2><p>${L.dateP}</p>${h.table(
      ['Si scrive', 'Si dice'],
      [
        ['1° maggio', 'il primo maggio'],
        ['3 maggio', 'il tre maggio'],
        ['8 marzo', 'l’otto marzo'],
        ['11 settembre', 'l’undici settembre'],
        ['25/12', 'il venticinque dicembre'],
        ['12/10/2026', 'il dodici ottobre duemilaventisei'],
      ]
    )}${h.examples([
      [L.dAsk, 'Che giorno è oggi? Oggi è martedì tre marzo.'],
      [L.dAsk2, 'Quanti ne abbiamo oggi? Ne abbiamo tre.'],
      [L.dWeekday, 'Il concerto è sabato 14 giugno.'],
      [L.dBirthday, 'Il mio compleanno è il 2 aprile.'],
      [L.dYear, 'Siamo arrivati in Italia nel 2019.'],
      [L.dLetter, 'Roma, 3 marzo 2026'],
    ])}<p class="mini-note">${L.dateNote1}</p><p class="mini-note">${L.dateNote2}</p><p class="mini-note">${L.dateNote3}</p></article>
    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2>${h.table(
      ['Passato', 'Presente', 'Futuro'],
      [
        ['ieri', 'oggi', 'domani'],
        ['l’altro ieri', '—', 'dopodomani'],
        ['ieri mattina', 'stamattina', 'domani mattina'],
        ['ieri sera', 'stasera', 'domani sera'],
        ['la settimana scorsa', 'questa settimana', 'la settimana prossima'],
        ['il mese scorso', 'questo mese', 'il mese prossimo'],
        ['l’anno scorso', 'quest’anno', 'l’anno prossimo'],
      ]
    )}<p class="mini-note">${L.quandoNote1}</p><p class="mini-note">${L.quandoNote2}</p><h3>${L.freqH3}</h3>${h.examples(
      [
        [L.fEvery, 'Studio italiano tutti i giorni.'],
        [L.fTimes, 'Vado in piscina due volte alla settimana.'],
        [L.fMonth, 'Una volta al mese ceniamo al ristorante.'],
        [L.fNever, 'La sera non bevo mai caffè.'],
      ]
    )}</article>
    <article class="lesson-box" id="fa-tra"><h2>${L.faH2}</h2><p>${L.faP}</p>${h.examples([
      [L.faPast, 'Sono arrivato in Italia tre mesi fa.'],
      [L.faFuture, 'Parto tra una settimana.'],
      [L.faFra, 'Ci vediamo fra dieci minuti.'],
      [L.faDa, 'Studio italiano da due anni.'],
    ])}<p class="mini-note">${L.faNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['ci vediamo Lunedì.', 'ci vediamo lunedì.'],
      ['in Gennaio.', 'in gennaio. / a gennaio.'],
      ['il uno maggio.', 'il primo maggio.'],
      ['il otto marzo.', 'l’otto marzo.'],
      ['in 2026.', 'nel 2026.'],
      ['fa tre giorni.', 'tre giorni fa.'],
      ['il domenica.', 'la domenica.'],
      ['studio italiano per due anni (e studio ancora).', 'studio italiano da due anni.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Dopo lunedì viene ___.', a: 'martedì', hint: 'Lunedì, martedì, mercoledì…' },
        { q: 'Il giorno prima di sabato è ___.', a: 'venerdì', hint: 'Giovedì, venerdì, sabato.' },
        {
          q: 'L’ultimo giorno della settimana è la ___.',
          a: 'domenica',
          hint: 'L’unico giorno femminile: la domenica.',
        },
        {
          q: '___ lunedì vado in palestra: ci vado ogni settimana.',
          a: 'il',
          hint: 'Un’abitudine, ogni settimana: il lunedì.',
        },
        { q: 'Il primo mese dell’anno è ___.', a: 'gennaio', hint: 'Gennaio, febbraio, marzo…' },
        { q: 'Dopo luglio viene ___.', a: 'agosto', hint: 'Giugno, luglio, agosto.' },
        { q: 'Il mese più corto dell’anno è ___.', a: 'febbraio', hint: '28 o 29 giorni: febbraio.' },
        { q: 'Il decimo mese dell’anno è ___.', a: 'ottobre', hint: 'Settembre, ottobre, novembre.' },
        {
          q: 'Dicembre, gennaio e febbraio sono i mesi dell’___.',
          a: 'inverno',
          hint: 'La stagione fredda: l’inverno.',
        },
        {
          q: 'In ___ fa caldo e molti italiani vanno al mare.',
          a: 'estate',
          hint: 'Giugno, luglio e agosto: l’estate.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'La Festa dei lavoratori è il ___ maggio. (1/5)', a: 'primo', hint: 'Il primo giorno del mese: il primo.' },
      { q: 'Natale è il ___ dicembre. (25/12)', a: 'venticinque', hint: '25 = venticinque.' },
      { q: 'La Festa della donna è ___ marzo. (8/3)', a: 'l’otto', hint: 'Otto comincia con una vocale: l’otto.' },
      { q: 'La Festa della Repubblica è il ___ giugno. (2/6)', a: 'due', hint: '2 = due: il due giugno.' },
      { q: 'Ferragosto è il ___ agosto. (15/8)', a: 'quindici', hint: '15 = quindici.' },
      { q: 'Il 04/10 in Italia è il quattro ___.', a: 'ottobre', hint: 'Prima il giorno, poi il mese: 10 = ottobre.' },
      { q: 'Il corso comincia ___ primo settembre.', a: 'il', hint: 'La data vuole l’articolo: il primo settembre.' },
      { q: 'Il mio compleanno è ___ luglio. (11/7)', a: 'l’undici', hint: 'Undici comincia con una vocale: l’undici.' },
      { q: 'Siamo arrivati in Italia ___ 2019.', a: 'nel', hint: 'In + il = nel: nel 2019.' },
      {
        q: 'Leonardo da Vinci è nato nel ___. (1452)',
        a: 'millequattrocentocinquantadue',
        hint: 'Mille + quattrocento + cinquantadue, in una sola parola.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Oggi è martedì: ieri era ___.', a: 'lunedì', hint: 'Il giorno prima di martedì: lunedì.' },
      { q: 'Oggi è martedì: domani è ___.', a: 'mercoledì', hint: 'Il giorno dopo martedì: mercoledì.' },
      { q: 'Il giorno dopo domani è ___.', a: 'dopodomani', hint: 'Dopo + domani, in una sola parola.' },
      { q: 'Questa mattina = ___.', a: 'stamattina', hint: 'Questa mattina in una parola: stamattina.' },
      { q: 'Questa sera = ___.', a: 'stasera', hint: 'Questa sera in una parola: stasera.' },
      { q: 'Sono arrivato in Italia tre anni ___.', a: 'fa', hint: 'Nel passato, dopo il tempo: tre anni fa.' },
      {
        q: 'Il treno parte ___ dieci minuti.',
        a: 'tra',
        alt: 'fra',
        hint: 'Nel futuro, prima del tempo: tra dieci minuti.',
      },
      {
        q: 'Studio italiano ___ due anni e studio ancora.',
        a: 'da',
        hint: 'Un’azione che continua ancora: da due anni.',
      },
      {
        q: 'L’anno ___ sono stato in Grecia, quest’anno vado in Spagna.',
        a: 'scorso',
        hint: 'L’anno prima di questo: l’anno scorso.',
      },
      {
        q: 'La settimana ___ comincio un nuovo lavoro.',
        a: 'prossima',
        hint: 'Nel futuro, al femminile: la settimana prossima.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Che giorno è oggi?'],
      ['Studente', 'Oggi è giovedì dodici marzo.'],
      ['Martin', 'E quando è il tuo compleanno?'],
      ['Studente', 'Il primo agosto, tra quasi cinque mesi!'],
    ])}</article>`,
  it: {
    h1: 'Giorni, mesi e date',
    card: 'Giorni della settimana, mesi, stagioni, date, ieri e domani, fa e tra.',
    lead: 'I giorni della settimana, i mesi e le stagioni, come si dice la data e le parole per dire quando: ieri, oggi, domani, fa e tra. Con 30 esercizi.',
    description:
      'Giorni della settimana, mesi e date in italiano spiegati semplice: lunedì o il lunedì, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri e domani, fa, tra e da, e 30 esercizi.',
    giorniH2: 'I giorni della settimana',
    giorniP:
      'In Italia la settimana comincia con il lunedì. I giorni si scrivono con la lettera minuscola e sono tutti maschili, tranne <em lang="it">la domenica</em>. Da <em lang="it">lunedì</em> a <em lang="it">venerdì</em> hanno l’accento sull’ultima sillaba.',
    gOne: 'Un giorno preciso',
    gEvery: 'Ogni settimana',
    gFem: 'Domenica è femminile',
    gPlural: 'Plurale',
    giorniNote1:
      '<strong>Con o senza articolo?</strong> Senza articolo il giorno è uno solo, quello più vicino: <em lang="it">sabato vado al cinema</em>. Con l’articolo è un’abitudine, ogni settimana: <em lang="it">il sabato vado al cinema</em>. Davanti al giorno non serve nessuna preposizione: <em lang="it">ci vediamo venerdì</em>.',
    giorniNote2:
      '<strong>Al plurale</strong> i giorni con l’accento non cambiano: <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> e <em lang="it">domenica</em> invece sì: <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>Da dove vengono i nomi?</strong> <em lang="it">Lunedì</em> è il giorno della Luna, <em lang="it">martedì</em> di Marte, <em lang="it">mercoledì</em> di Mercurio, <em lang="it">giovedì</em> di Giove, <em lang="it">venerdì</em> di Venere: <em lang="it">-dì</em> viene dal latino <em lang="la">dies</em>, giorno. <em lang="it">Sabato</em> viene dall’ebraico <em>shabbat</em> e <em lang="it">domenica</em> dal latino <em lang="la">dies dominica</em>, il giorno del Signore.',
    mesiH2: 'I mesi e le stagioni',
    mesiP:
      'Anche i mesi si scrivono con la minuscola e sono tutti maschili: <em lang="it">un gennaio freddo, un agosto caldo</em>. Le stagioni sono quattro.',
    mMonth: 'In o a + mese',
    mSeason: 'Le stagioni',
    mOf: 'Il mese di…',
    mFromTo: 'Da… a…',
    mesiNote1:
      '<strong>In o a?</strong> Con i mesi vanno bene tutte e due: <em lang="it">in agosto</em> o <em lang="it">ad agosto</em> (<em lang="it">ad</em> davanti a vocale), <em lang="it">a maggio</em> o <em lang="it">in maggio</em>. Con le stagioni si dice <em lang="it">in estate, in inverno</em>, ma anche <em lang="it">d’estate, d’inverno</em>.',
    mesiNote2:
      '<strong>Il genere delle stagioni.</strong> <em lang="it">La primavera</em> e <em lang="it">l’estate</em> sono femminili, <em lang="it">l’autunno</em> e <em lang="it">l’inverno</em> sono maschili. Le stagioni astronomiche cominciano verso il 21 del mese (<em lang="it">il 21 marzo</em>), ma nella vita di tutti i giorni si pensa ai mesi della tabella.',
    dateH2: 'Come si dice la data',
    dateP:
      'La data si dice così: articolo, giorno, mese e anno, sempre in questo ordine. Il giorno è un numero normale (<em lang="it">il tre maggio</em>); solo il primo giorno del mese usa l’ordinale: <em lang="it">il primo maggio</em>.',
    dAsk: 'Domanda',
    dAsk2: 'Domanda informale',
    dWeekday: 'Giorno e data',
    dBirthday: 'Compleanno',
    dYear: 'Anno',
    dLetter: 'In una lettera',
    dateNote1:
      '<strong>Prima il giorno, poi il mese.</strong> In Italia <em lang="it">05/12</em> è <em lang="it">il cinque dicembre</em>, non il 12 maggio.',
    dateNote2:
      '<strong>L’otto e l’undici.</strong> <em lang="it">Otto</em> e <em lang="it">undici</em> cominciano con una vocale, quindi l’articolo diventa <em lang="it">l’</em>: <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Gli anni vogliono l’articolo:</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>), <em lang="it">dal 2020 al 2024</em>. Nella data completa, invece, l’anno viene dopo il mese senza articolo: <em lang="it">il 3 marzo 2026</em>. In una lettera o in un documento anche il giorno è senza articolo: <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Ieri, oggi, domani',
    quandoNote1:
      '<strong>Stamattina e stasera</strong> sono una parola sola: <em lang="it">questa mattina → stamattina</em>, <em lang="it">questa sera → stasera</em>. Allo stesso modo si dice <em lang="it">stanotte</em>.',
    quandoNote2:
      '<strong>Scorso e prossimo si accordano con il nome:</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> può stare anche prima del nome: <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: 'Quante volte?',
    fEvery: 'Ogni giorno',
    fTimes: 'Alla settimana',
    fMonth: 'Al mese',
    fNever: 'Mai',
    faH2: 'Fa, tra e da',
    faP: '<em lang="it">Fa</em> guarda indietro, nel passato, e va dopo l’espressione di tempo: <em lang="it">due anni fa</em>. <em lang="it">Tra</em> (o <em lang="it">fra</em>: sono uguali) guarda avanti, nel futuro, e va prima: <em lang="it">tra due anni</em>.',
    faPast: 'Nel passato',
    faFuture: 'Nel futuro',
    faFra: 'Fra = tra',
    faDa: 'Da + tempo',
    faNote:
      '<strong>Da + tempo, con il presente.</strong> Quando un’azione è cominciata nel passato e continua ancora, si usa il presente con <em lang="it">da</em>: <em lang="it">studio italiano da due anni</em> (e studio ancora). Non si dice <em lang="it">per due anni</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Giorni, mesi e stagioni',
    part1P: 'Scrivi la parola che manca.',
    part2H3: 'Parte 2 · Le date',
    part2P: 'Completa la data. I numeri si scrivono in lettere.',
    part3H3: 'Parte 3 · Ieri, oggi, domani, fa e tra',
    part3P: 'Scrivi la parola che manca.',
  },
};
