// Lezione A1 «Le preposizioni semplici» (rifatta il 2026-10-09 agli stessi URL): struttura, materiale
// italiano e testi italiani. Le spiegazioni tradotte stanno in preposizioni-semplici-i18n.mjs.
//
// La versione del 2026-08 aveva otto esempi e otto esercizi. Ora: che cosa indica ogni preposizione,
// i luoghi (a / in / da: la difficoltà vera), il tempo (da + presente, tra, per), i verbi con a e di
// + infinito, gli errori tipici e 30 esercizi. Le preposizioni articolate hanno una lezione a parte,
// subito dopo.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'preposizioni-semplici',
  next: 'preposizioni-articolate',
  updateCard: true,
  minutes: 25,
  slugs: {
    en: 'italian-simple-prepositions',
    es: 'preposiciones-simples-en-italiano',
    fr: 'prepositions-simples-en-italien',
    cs: 'jednoduche-predlozky-v-italstine',
    pl: 'proste-przyimki-po-wlosku',
    tr: 'italyanca-basit-edatlar',
    de: 'einfache-praepositionen-im-italienischen',
    ja: 'イタリア語の単純前置詞',
  },
  nav: [
    ['usi', 'Usi'],
    ['luoghi', 'Dove?'],
    ['tempo', 'Tempo'],
    ['verbi', 'Con i verbi'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="usi"><h2>${L.usiH2}</h2><p>${L.usiP}</p>${h.examples([
    [`${it('di')} · ${L.uDi}`, 'Il libro di Anna. Sono di Napoli.'],
    [`${it('a')} · ${L.uA}`, 'Vado a Roma. Scrivo a Luca.'],
    [`${it('da')} · ${L.uDa}`, 'Vengo da Milano. Vado da Marco.'],
    [`${it('in')} · ${L.uIn}`, 'Vivo in Italia. Vado in treno.'],
    [`${it('con')} · ${L.uCon}`, 'Esco con Sara. Scrivo con la penna.'],
    [`${it('su')} · ${L.uSu}`, 'Salgo su una sedia. Un libro su Roma.'],
    [`${it('per')} · ${L.uPer}`, 'Un regalo per te. Parto per Parigi.'],
    [`${it('tra / fra')} · ${L.uTra}`, 'Arrivo tra cinque minuti. Fra noi due.'],
  ])}<p class="mini-note">${L.usiNote}</p></article>
    <article class="lesson-box" id="luoghi"><h2>${L.luoghiH2}</h2><p>${L.luoghiP}</p>${h.examples([
      [L.lCitta, 'Vivo a Roma. Vado a Milano.'],
      [L.lPaese, 'Vivo in Italia. Vado in Spagna.'],
      [L.lPersona, 'Stasera ceno da Giulia. Vado da Paolo.'],
      [L.lNegozi, 'Lavoro in banca. Sono in farmacia. Vado in ufficio.'],
      [L.lFissi, 'a casa, a scuola, a letto, a teatro'],
      [L.lMezzi, 'in treno, in macchina, in bici · a piedi'],
    ])}<p class="mini-note">${L.luoghiNote1}</p><p class="mini-note">${L.luoghiNote2}</p></article>
    <article class="lesson-box" id="tempo"><h2>${L.tempoH2}</h2><p>${L.tempoP}</p>${h.examples([
      [L.tDa, 'Studio italiano da due anni.'],
      [L.tTra, 'Il treno parte tra dieci minuti.'],
      [L.tPer, 'Ho vissuto a Londra per tre anni.'],
      [L.tA, 'a mezzogiorno, a maggio, a Natale'],
      [L.tIn, 'in estate, in inverno, in dieci minuti'],
      [L.tOrigine, 'Sono di Torino, ma oggi arrivo da Roma.'],
    ])}<p class="mini-note">${L.tempoNote1}</p><p class="mini-note">${L.tempoNote2}</p></article>
    <article class="lesson-box" id="verbi"><h2>${L.verbiH2}</h2><p>${L.verbiP}</p>${h.examples([
      [L.vA, 'Vado a mangiare. Imparo a nuotare. Comincio a lavorare.'],
      [L.vDi, 'Finisco di lavorare alle sei. Cerco di dormire. Ho deciso di partire.'],
      [L.vPer, 'Studio per trovare un lavoro.'],
    ])}<p class="mini-note">${L.verbiNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Vado in Roma.', 'Vado a Roma.'],
      ['Vivo a Italia.', 'Vivo in Italia.'],
      ['Vado a Marco.', 'Vado da Marco.'],
      ['Vado in piedi.', 'Vado a piedi.'],
      ['Sono da Milano.', 'Sono di Milano.'],
      ['Studio italiano per due anni (e continuo).', 'Studio italiano da due anni.'],
      ['Il treno parte in dieci minuti.', 'Il treno parte tra dieci minuti.'],
      ['Finisco a lavorare.', 'Finisco di lavorare.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Abito ___ Napoli.', a: 'a', hint: 'Con una città: a.' },
        { q: 'Quest’estate vado ___ Grecia.', a: 'in', hint: 'Con un Paese: in.' },
        { q: 'Stasera ceno ___ Giulia.', a: 'da', hint: 'A casa di una persona: da.' },
        { q: 'Vado ___ ufficio in autobus.', a: 'in', hint: 'In ufficio, in banca, in farmacia.' },
        { q: 'Domani resto ___ casa.', a: 'a', hint: 'A casa, a scuola, a letto.' },
        { q: 'I bambini vanno ___ scuola.', a: 'a', hint: 'A scuola, senza articolo.' },
        { q: 'Andiamo al mare ___ treno.', a: 'in', hint: 'Con i mezzi di trasporto: in.' },
        { q: 'Oggi torno a casa ___ piedi.', a: 'a', hint: 'A piedi è l’eccezione.' },
        { q: 'Vado ___ Paolo per studiare.', a: 'da', hint: 'Da una persona: da.' },
        { q: 'Mia sorella lavora ___ banca.', a: 'in', hint: 'In banca.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Il film comincia ___ cinque minuti.', a: 'tra', alt: 'fra', hint: 'Nel futuro: tra o fra.' },
      { q: 'Studio italiano ___ un anno.', a: 'da', hint: 'Un’azione che continua: da + presente.' },
      { q: 'Sono ___ Torino, ma vivo a Roma.', a: 'di', hint: 'La città di origine: essere di.' },
      { q: 'Questo treno viene ___ Firenze.', a: 'da', hint: 'Venire da.' },
      { q: 'Ho lavorato in Germania ___ sei mesi.', a: 'per', hint: 'Una durata finita: per.' },
      { q: 'Stasera esco ___ i miei amici.', a: 'con', hint: 'Insieme a qualcuno: con.' },
      { q: 'Scrivo ___ la matita.', a: 'con', hint: 'Lo strumento: con.' },
      { q: 'Questo regalo è ___ te.', a: 'per', hint: 'Il destinatario: per.' },
      { q: 'Ecco la macchina ___ Marta.', a: 'di', hint: 'Il possesso: di.' },
      { q: 'Domani parto ___ Parigi.', a: 'per', hint: 'Partire per una destinazione.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Sono stanco, vado ___ dormire.', a: 'a', hint: 'Andare a + infinito.' },
      { q: 'Finisco ___ lavorare alle sei.', a: 'di', hint: 'Finire di + infinito.' },
      { q: 'Quest’anno imparo ___ guidare.', a: 'a', hint: 'Imparare a + infinito.' },
      { q: 'Cerco ___ studiare ogni giorno.', a: 'di', hint: 'Cercare di + infinito.' },
      { q: 'Comincio ___ capire l’italiano!', a: 'a', hint: 'Cominciare a + infinito.' },
      { q: 'Studio ___ trovare un lavoro in Italia.', a: 'per', hint: 'Lo scopo: per + infinito.' },
      { q: 'Ho deciso ___ partire.', a: 'di', hint: 'Decidere di + infinito.' },
      { q: 'Vieni ___ mangiare da noi?', a: 'a', hint: 'Venire a + infinito.' },
      { q: 'Mio padre smette ___ fumare.', a: 'di', hint: 'Smettere di + infinito.' },
      { q: 'Pensi ___ tornare in Italia?', a: 'di', hint: 'Pensare di + infinito.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Di dove sei?'],
      ['Studente', 'Sono di Lione, in Francia, ma vivo a Bologna da due anni.'],
      ['Martin', 'E come vai a lavorare?'],
      ['Studente', 'Vado in ufficio in bici. Stasera ceno da un’amica: domani parto per Roma!'],
    ])}</article>`,
  it: {
    h1: 'Le preposizioni semplici',
    card: 'Di, a, da, in, con, su, per, tra e fra: luoghi, tempo, verbi.',
    lead: 'Di, a, da, in, con, su, per, tra e fra: che cosa indica ognuna, come scegliere tra a, in e da per i luoghi, le preposizioni del tempo, i verbi con a e di + infinito, gli errori tipici e 30 esercizi.',
    description:
      'Le preposizioni semplici italiane di, a, da, in, con, su, per, tra e fra: a, in o da con i luoghi, da + presente, tra e per con il tempo, verbi con a e di + infinito, errori tipici e 30 esercizi.',
    usiH2: 'Che cosa indica ogni preposizione',
    usiP: 'Le preposizioni semplici sono nove parole brevi. Ognuna ha un uso principale: imparalo con un esempio.',
    uDi: 'possesso, origine',
    uA: 'città, direzione, persona a cui',
    uDa: 'provenienza, a casa di qualcuno',
    uIn: 'Paesi, luoghi chiusi, mezzi',
    uCon: 'compagnia, strumento',
    uSu: 'sopra, argomento',
    uPer: 'destinazione, scopo, per chi',
    uTra: 'tra poco, in mezzo',
    usiNote:
      '<strong>Tra e fra sono uguali.</strong> Si sceglie quella che suona meglio: <em lang="it">tra fratelli</em> e <em lang="it">fra tre giorni</em> sono più facili da dire di <em lang="it">fra fratelli</em> e <em lang="it">tra tre giorni</em>.',
    luoghiH2: 'I luoghi: a, in o da?',
    luoghiP:
      'È la scelta più difficile. Per fortuna <em lang="it">andare</em> (il movimento) ed <em lang="it">essere</em> (la posizione) usano la stessa preposizione: <em lang="it">vado a Roma</em>, <em lang="it">sono a Roma</em>.',
    lCitta: 'Città: a',
    lPaese: 'Paesi e regioni: in',
    lPersona: 'Una persona: da',
    lNegozi: 'Negozi e uffici: in',
    lFissi: 'Espressioni fisse con a',
    lMezzi: 'Mezzi di trasporto: in',
    luoghiNote1:
      '<strong>Da + persona</strong> vuol dire «a casa di» o «nel negozio, nello studio di»: <em lang="it">vado da Marco</em>, <em lang="it">sono da Giulia</em>. Non si dice mai <em lang="it">vado a Marco</em>.',
    luoghiNote2:
      '<strong>Con le parole in -ia e -eria</strong> si usa quasi sempre <em lang="it">in</em>: <em lang="it">in farmacia</em>, <em lang="it">in pizzeria</em>, <em lang="it">in libreria</em>. E con i mezzi c’è un’eccezione da ricordare: <em lang="it">a piedi</em>.',
    tempoH2: 'Il tempo: da, tra, per',
    tempoP: 'Anche per il tempo ogni preposizione ha il suo lavoro.',
    tDa: 'Da quando? da + presente',
    tTra: 'Fra quanto? tra / fra',
    tPer: 'Quanto è durato? per',
    tA: 'Mesi, feste, ore: a',
    tIn: 'Stagioni, durata: in',
    tOrigine: 'Essere di, venire da',
    tempoNote1:
      '<strong>Da + presente: l’azione continua ancora.</strong> <em lang="it">Studio italiano da due anni</em>: ho cominciato due anni fa e studio ancora. Con <em lang="it">per</em> invece l’azione è finita: <em lang="it">ho studiato italiano per due anni</em>.',
    tempoNote2:
      '<strong>Tra dieci minuti o in dieci minuti?</strong> <em lang="it">Tra dieci minuti</em> = fra dieci minuti, nel futuro. <em lang="it">In dieci minuti</em> = quanto tempo serve: <em lang="it">faccio la doccia in dieci minuti</em>.',
    verbiH2: 'I verbi con a e di + infinito',
    verbiP:
      'Molti verbi si uniscono a un altro verbo all’infinito con <em lang="it">a</em> o con <em lang="it">di</em>. Non c’è una regola sicura: impara il verbo insieme alla sua preposizione.',
    vA: 'Con a',
    vDi: 'Con di',
    vPer: 'Lo scopo: per',
    verbiNote:
      '<strong>Un piccolo trucco:</strong> i verbi di movimento e di inizio vogliono quasi sempre <em lang="it">a</em> (<em lang="it">andare a</em>, <em lang="it">venire a</em>, <em lang="it">cominciare a</em>). Con <em lang="it">di</em> stanno <em lang="it">finire</em>, <em lang="it">smettere</em>, <em lang="it">cercare</em>, <em lang="it">decidere</em>, <em lang="it">pensare</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo la preposizione: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · I luoghi',
    part1P: 'Scrivi a, in o da.',
    part2H3: 'Parte 2 · Tempo, origine, compagnia',
    part2P: 'Scrivi la preposizione giusta.',
    part3H3: 'Parte 3 · I verbi + infinito',
    part3P: 'Scrivi a, di o per.',
  },
};
