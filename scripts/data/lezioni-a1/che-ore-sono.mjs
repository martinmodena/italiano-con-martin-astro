// Lezione A1 «Che ore sono? L’ora in italiano»: struttura, materiale italiano e
// testi italiani. Le spiegazioni tradotte stanno in che-ore-sono-i18n.mjs.

export default {
  slug: 'che-ore-sono',
  next: 'giorni-mesi-date',
  minutes: 20,
  slugs: {
    en: 'telling-the-time-in-italian',
    es: 'la-hora-en-italiano',
    fr: 'lheure-en-italien',
    cs: 'hodiny-v-italstine',
    pl: 'godziny-po-wlosku',
    tr: 'italyancada-saat',
    de: 'uhrzeit-auf-italienisch',
    ja: 'イタリア語の時刻の言い方',
  },
  nav: [
    ['ora', 'Dire l’ora'],
    ['minuti', 'Minuti'],
    ['a-che-ora', 'A che ora?'],
    ['ventiquattro', '24 ore'],
    ['giornata', 'Giornata'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="ora"><h2>${L.oraH2}</h2><p>${L.oraP}</p>${h.table(
    ['Ora', 'In italiano'],
    [
      ['1:00', 'È l’una.'],
      ['2:00', 'Sono le due.'],
      ['3:00', 'Sono le tre.'],
      ['8:00', 'Sono le otto.'],
      ['11:00', 'Sono le undici.'],
      ['12:00', 'È mezzogiorno.'],
      ['0:00', 'È mezzanotte.'],
    ]
  )}<p class="mini-note">${L.oraNote1}</p><p class="mini-note">${L.oraNote2}</p></article>
    <article class="lesson-box" id="minuti"><h2>${L.minH2}</h2><p>${L.minP}</p>${h.table(
      ['Ora', 'In italiano', 'Oppure'],
      [
        ['3:05', 'Sono le tre e cinque.', '—'],
        ['3:15', 'Sono le tre e un quarto.', 'Sono le tre e quindici.'],
        ['3:30', 'Sono le tre e mezza.', 'Sono le tre e mezzo. Sono le tre e trenta.'],
        ['3:40', 'Sono le quattro meno venti.', 'Sono le tre e quaranta.'],
        ['3:45', 'Sono le quattro meno un quarto.', 'Sono le tre e tre quarti. Sono le tre e quarantacinque.'],
        ['3:55', 'Sono le quattro meno cinque.', 'Sono le tre e cinquantacinque.'],
        ['1:20', 'È l’una e venti.', '—'],
      ]
    )}<p class="mini-note">${L.minNote1}</p><p class="mini-note">${L.minNote2}</p></article>
    <article class="lesson-box" id="a-che-ora"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
      [L.qAsk, 'A che ora comincia il film?'],
      [L.qAlle, 'Il film comincia alle nove.'],
      [L.qAll, 'Pranziamo all’una.'],
      [L.qA, 'Ci vediamo a mezzogiorno.'],
      [L.qDalle, 'Lavoro dalle nove alle cinque.'],
      [L.qVerso, 'Arrivo verso le otto.'],
      [L.qPunto, 'Il treno parte alle sette in punto.'],
      [L.qRitardo, 'Scusa, sono in ritardo di dieci minuti.'],
    ])}<p class="mini-note">${L.quandoNote}</p></article>
    <article class="lesson-box" id="ventiquattro"><h2>${L.h24H2}</h2><p>${L.h24P}</p>${h.table(
      ['Ora', 'Tutti i giorni', 'Orario ufficiale'],
      [
        ['8:00', 'le otto di mattina', 'le otto'],
        ['14:00', 'le due del pomeriggio', 'le quattordici'],
        ['15:15', 'le tre e un quarto del pomeriggio', 'le quindici e quindici'],
        ['18:30', 'le sei e mezza di sera', 'le diciotto e trenta'],
        ['20:45', 'le nove meno un quarto di sera', 'le venti e quarantacinque'],
        ['23:00', 'le undici di sera', 'le ventitré'],
      ]
    )}<p class="mini-note">${L.h24Note}</p></article>
    <article class="lesson-box" id="giornata"><h2>${L.dayH2}</h2>${h.table(
      ['Parte della giornata', 'Quando', 'Esempio'],
      [
        ['la mattina', '6-12', 'Le sette di mattina.'],
        ['mezzogiorno', '12:00', 'Pranzo a mezzogiorno.'],
        ['il pomeriggio', '12-18', 'Le quattro del pomeriggio.'],
        ['la sera', '18-24', 'Le nove di sera.'],
        ['mezzanotte', '0:00', 'Torno a mezzanotte.'],
        ['la notte', '0-6', 'Le tre di notte.'],
      ]
    )}<p class="mini-note">${L.dayNote1}</p><p class="mini-note">${L.dayNote2}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['sono l’una.', 'è l’una.'],
      ['è le tre.', 'sono le tre.'],
      ['sono tre.', 'sono le tre.'],
      ['alle una.', 'all’una.'],
      ['a le otto.', 'alle otto.'],
      ['alle mezzogiorno.', 'a mezzogiorno.'],
      ['che ora sono?', 'che ore sono? / che ora è?'],
      ['le otto di notte (20:00).', 'le otto di sera.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ l’una. (1:00)', a: 'è', alt: "e'", hint: 'L’una è singolare: è l’una.' },
        { q: '___ le quattro. (4:00)', a: 'sono', hint: 'Dalle due in poi il verbo è plurale: sono le quattro.' },
        { q: 'È ___. (12:00)', a: 'mezzogiorno', hint: 'Le 12:00: è mezzogiorno.' },
        { q: 'Sono ___ sette. (7:00)', a: 'le', hint: 'Con le ore serve l’articolo: sono le sette.' },
        { q: 'È ___ e dieci. (1:10)', a: 'l’una', hint: 'L’1:00 è l’una: è l’una e dieci.' },
        { q: 'Sono le sei e ___. (6:15)', a: 'un quarto', alt: 'quindici', hint: '15 minuti: e un quarto.' },
        { q: 'Sono le otto e ___. (8:30)', a: 'mezza', alt: 'mezzo|trenta', hint: '30 minuti: e mezza.' },
        { q: 'Sono le dieci e ___. (10:20)', a: 'venti', hint: '20 minuti: e venti.' },
        {
          q: 'Sono le tre meno ___. (2:45)',
          a: 'un quarto',
          alt: 'quindici',
          hint: 'Mancano 15 minuti alle tre: meno un quarto.',
        },
        {
          q: 'Sono le cinque ___ dieci. (4:50)',
          a: 'meno',
          hint: 'Mancano 10 minuti alle cinque: le cinque meno dieci.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Il film comincia ___ nove.', a: 'alle', hint: 'A + le = alle.' },
      { q: 'Pranziamo ___ e mezza. (13:30)', a: 'all’una', hint: 'A + l’una = all’una.' },
      { q: 'Ci vediamo ___ mezzogiorno.', a: 'a', hint: 'Con mezzogiorno basta a.' },
      { q: 'La lezione finisce ___ undici.', a: 'alle', hint: 'A + le = alle.' },
      { q: 'La farmacia è aperta dalle nove ___ sette di sera.', a: 'alle', hint: 'Da… a…: dalle nove alle sette.' },
      { q: 'Vado a dormire ___ mezzanotte.', a: 'a', hint: 'Con mezzanotte basta a.' },
      { q: 'Lavoro ___ otto alle quattro.', a: 'dalle', hint: 'Da + le = dalle.' },
      { q: 'A che ___ arriva il treno? Alle otto.', a: 'ora', hint: 'Per chiedere quando: a che ora?' },
      { q: 'Che ___ sono? Sono le dieci.', a: 'ore', hint: 'Con sono: che ore sono?' },
      { q: 'Arrivo ___ le otto, più o meno.', a: 'verso', hint: 'Più o meno a quell’ora: verso le otto.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Il treno parte alle 15:30: alle quindici e ___.',
        a: 'trenta',
        hint: 'Orario ufficiale: i minuti con il numero, trenta.',
      },
      { q: 'Il negozio chiude alle 19:00: alle ___.', a: 'diciannove', hint: '19:00 = le diciannove.' },
      { q: 'Il telegiornale è alle 20:00: alle ___.', a: 'venti', hint: '20:00 = le venti.' },
      {
        q: 'Il museo chiude alle 18:45: alle diciotto e ___.',
        a: 'quarantacinque',
        hint: 'Orario ufficiale: quarantacinque, non meno un quarto.',
      },
      { q: 'Mi sveglio alle 7:00: alle sette di ___.', a: 'mattina', hint: 'Prima di mezzogiorno: di mattina.' },
      {
        q: 'Ho una riunione alle 15:00: alle tre del ___.',
        a: 'pomeriggio',
        hint: 'Dopo mezzogiorno: del pomeriggio.',
      },
      {
        q: 'Il concerto comincia alle 21:00: alle nove di ___.',
        a: 'sera',
        hint: 'Alle 21:00 è sera: le nove di sera.',
      },
      { q: 'Il volo parte alle 2:00 di ___.', a: 'notte', hint: 'Dopo mezzanotte: di notte.' },
      { q: 'Pranzo alle 13:00, cioè all’___.', a: 'una', hint: '13:00 = l’una: all’una.' },
      { q: 'Sono le 23:55: è quasi ___.', a: 'mezzanotte', hint: 'Le 24:00 sono mezzanotte.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Scusa, che ore sono?'],
      ['Studente', 'Sono le sei meno un quarto.'],
      ['Martin', 'A che ora comincia la lezione?'],
      ['Studente', 'Alle sei in punto. Dobbiamo sbrigarci!'],
    ])}</article>`,
  it: {
    h1: 'Che ore sono? L’ora in italiano',
    crumb: 'Che ore sono?',
    cardTitle: 'Che ore sono?',
    card: 'Dire l’ora, a che ora, orari ufficiali e parti della giornata.',
    lead: 'Chiedere e dire l’ora, fissare un appuntamento, leggere l’orario di un treno. Qui trovi le regole, le parti della giornata e 30 esercizi.',
    description:
      'L’ora in italiano spiegata semplice: che ore sono?, è l’una e sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle e all’, orario ufficiale e 30 esercizi.',
    oraH2: 'Chiedere e dire l’ora',
    oraP: 'Per chiedere l’ora ci sono due domande, tutte e due corrette: <em lang="it">Che ore sono?</em> e <em lang="it">Che ora è?</em> Nella risposta usiamo <em lang="it">essere</em> e l’articolo femminile, perché pensiamo alla parola <em lang="it">ore</em>: <em lang="it">sono le tre</em>.',
    oraNote1:
      '<strong>Perché è l’una ma sono le due?</strong> L’una è un’ora sola, quindi il verbo è singolare: <em lang="it">è l’una</em>. Dalle due in poi le ore sono più di una, quindi il verbo è plurale: <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong>Mezzogiorno e mezzanotte</strong> non hanno l’articolo: <em lang="it">è mezzogiorno, è mezzanotte</em>. Per le 12:00 si dice anche <em lang="it">sono le dodici</em>.',
    minH2: 'I minuti: e, meno, un quarto, mezza',
    minP: 'Dopo l’ora si aggiungono i minuti con <em lang="it">e</em>. Dopo la mezz’ora si può anche dire quanti minuti mancano all’ora successiva, con <em lang="it">meno</em>.',
    minNote1:
      '<strong>Mezza o mezzo?</strong> Vanno bene tutte e due: <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. Con il quarto invece serve <em lang="it">un</em>: <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong>Meno vuol dire che mancano dei minuti.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em>. Di solito si usa <em lang="it">meno</em> quando mancano 20 minuti o meno.',
    quandoH2: 'A che ora? Alle, all’, a mezzogiorno',
    quandoP:
      'Per dire quando succede qualcosa usiamo <em lang="it">a</em> + articolo: <em lang="it">alle</em> (<em lang="it">a + le</em>) con quasi tutte le ore, <em lang="it">all’</em> (<em lang="it">a + l’</em>) con l’una. Con <em lang="it">mezzogiorno</em> e <em lang="it">mezzanotte</em> basta <em lang="it">a</em>.',
    qAsk: 'Domanda',
    qAlle: 'Alle + ora',
    qAll: 'All’una',
    qA: 'A mezzogiorno, a mezzanotte',
    qDalle: 'Da… a…',
    qVerso: 'Più o meno',
    qPunto: 'Esattamente',
    qRitardo: 'In ritardo',
    quandoNote:
      '<strong>Che ore sono? o A che ora?</strong> <em lang="it">Che ore sono?</em> chiede l’ora di adesso: <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> chiede quando succede qualcosa: <em lang="it">alle otto</em>.',
    h24H2: 'Orario di tutti i giorni e orario ufficiale',
    h24P: 'Con amici e familiari si usano le ore da 1 a 12 e, se serve, si aggiunge la parte della giornata: <em lang="it">le otto di mattina, le otto di sera</em>. Negli orari ufficiali (treni, negozi, uffici, televisione) si usano le 24 ore e i minuti si dicono con il numero.',
    h24Note:
      '<strong>Negli orari ufficiali niente quarto, mezza e meno.</strong> Il treno delle 17:45 parte <em lang="it">alle diciassette e quarantacinque</em>, non <em lang="it">alle sei meno un quarto</em>.',
    dayH2: 'Le parti della giornata',
    dayNote1:
      '<strong>Di mattina, del pomeriggio, di sera, di notte.</strong> Con l’ora si dice <em lang="it">le otto di mattina</em> (o <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em>. Gli orari della tabella sono indicativi.',
    dayNote2:
      '<strong>Buongiorno, buonasera, buonanotte.</strong> <em lang="it">Buongiorno</em> si usa la mattina e fino al primo pomeriggio, <em lang="it">buonasera</em> dal pomeriggio in poi. <em lang="it">Buonanotte</em> si dice solo quando si va a dormire o ci si saluta a notte fonda.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Che ore sono?',
    part1P: 'Guarda l’ora tra parentesi e completa la risposta.',
    part2H3: 'Parte 2 · A che ora?',
    part2P: 'Scrivi la parola che manca.',
    part3H3: 'Parte 3 · Orario ufficiale e parti della giornata',
    part3P: 'Leggi l’orario e completa la frase.',
  },
};
