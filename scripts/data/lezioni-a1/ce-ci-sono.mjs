// Lezione A1 «C’è e ci sono» (rifatta il 2026-11-26 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in ce-ci-sono-i18n.mjs.
//
// Quindicesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano: una regola, sei esempi e 10 esercizi. Ora: la regola (ci = lì), negazione e domande, le quantità
// (c’è tanta gente, ci sono dei posti), con le persone (c’è Marco?, ci sono anch’io), c’è o è (c’è una farmacia / la
// farmacia è in piazza), c’è o ho, il passato e il futuro (c’era, c’erano, c’è stato, ci sarà), le frasi utili (che
// c’è?, c’è il sole, non c’è problema), le trappole e 30 esercizi. Il confronto con la lingua resta quello di
// confronti-lingua.mjs; gli errori per lingua sono in confronti-ce-ci-sono.mjs. Tolta la descrizione scritta a mano
// da seo-boost.mjs. Nell’indice A1 la tessera resta dov’era; il pulsante finale porta agli aggettivi qualificativi.

export default {
  slug: 'ce-ci-sono',
  next: 'aggettivi-qualificativi',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/ce-ci-sono-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'ce-and-ci-sono-in-italian',
    es: 'ce-y-ci-sono-en-italiano',
    fr: 'ce-et-ci-sono-en-italien',
    cs: 'ce-a-ci-sono-v-italstine',
    pl: 'ce-i-ci-sono-po-wlosku',
    tr: 'italyancada-ce-ve-ci-sono',
    de: 'ce-und-ci-sono-im-italienischen',
    ja: 'イタリア語の-ce-と-ci-sono',
  },
  nav: [
    ['regola', 'Regola'],
    ['domande', 'Negazione e domande'],
    ['quantita', 'Quantità'],
    ['persone', 'Con le persone'],
    ['dove', 'C’è o è?'],
    ['avere', 'C’è o ho?'],
    ['passato', 'Al passato'],
    ['frasi', 'Frasi utili'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rSing, 'In piazza c’è una fontana.'],
    [L.rPlur, 'Ci sono due panchine.'],
    [L.rCi, 'ci + è → c’è · ci + sono → ci sono'],
  ])}<p class="mini-note">${L.regolaNote}</p></article>
    <article class="lesson-box" id="domande"><h2>${L.domH2}</h2><p>${L.domP}</p>${h.examples([
      [L.dDomanda, 'C’è un bagno? · Ci sono domande?'],
      [L.dNon, 'Non c’è tempo. · Non ci sono problemi.'],
      [L.dCosa, 'Che cosa c’è nel frigo? · Quanti studenti ci sono?'],
      [L.dRisposta, 'C’è un bar qui vicino? Sì, c’è. · No, non c’è.'],
    ])}<p class="mini-note">${L.domNote}</p></article>
    <article class="lesson-box" id="quantita"><h2>${L.quantH2}</h2><p>${L.quantP}</p>${h.examples([
      [L.qNumeri, 'Ci sono tre camere. · C’è una sola finestra.'],
      [L.qMolto, 'C’è molto traffico. · Ci sono molte macchine.'],
      [L.qGente, 'C’è tanta gente in piazza.'],
      [L.qDei, 'Ci sono dei posti liberi? · C’è un po’ di pane.'],
    ])}<p class="mini-note">${L.quantNote.replace('{{PARTITIVI}}', h.href('articoli-partitivi', 'a1'))}</p></article>
    <article class="lesson-box" id="persone"><h2>${L.persH2}</h2><p>${L.persP}</p>${h.examples([
      [L.pQui, 'Pronto, c’è Marco? · No, Marco non c’è.'],
      [L.pChi, 'Chi c’è alla festa? · Ci sono tutti.'],
      [L.pIo, 'Ci sei stasera? · Sì, ci sono! · Ci sono anch’io.'],
    ])}<p class="mini-note">${L.persNote}</p></article>
    <article class="lesson-box" id="dove"><h2>${L.doveH2}</h2><p>${L.doveP}</p>${h.examples([
      [L.dvEsiste, 'C’è una farmacia qui vicino?'],
      [L.dvDove, 'La farmacia è in via Roma. · Dov’è la farmacia?'],
      [L.dvSenzaCi, 'È una farmacia. · C’è una farmacia.'],
    ])}<p class="mini-note">${L.doveNote.replace('{{ESSERE}}', h.href('verbo-essere', 'a1'))}</p></article>
    <article class="lesson-box" id="avere"><h2>${L.avH2}</h2><p>${L.avP}</p>${h.examples([
      [L.aCe, 'C’è un problema. · In città ci sono due musei.'],
      [L.aHo, 'Ho un problema. · Ho due fratelli.'],
      [L.aNegozio, 'Scusi, c’è il pane? · Avete il pane?'],
    ])}<p class="mini-note">${L.avNote.replace('{{AVERE}}', h.href('verbo-avere', 'a1'))}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.passH2}</h2><p>${L.passP}</p>${h.table(
      ['Tempo', 'Singolare', 'Plurale'],
      [
        ['Presente', 'c’è', 'ci sono'],
        ['Passato', 'c’era · c’è stato', 'c’erano · ci sono stati'],
        ['Futuro', 'ci sarà', 'ci saranno'],
      ]
    )}${h.examples([
      [L.pEra, 'Ieri c’era il sole. · Alla festa c’erano tanti amici.'],
      [L.pStato, 'Stamattina c’è stato un incidente.'],
      [L.pSara, 'Domani ci sarà lo sciopero dei treni. · Ci saranno molte persone.'],
    ])}<p class="mini-note">${L.passNote.replace('{{IMPERFETTO}}', h.href('imperfetto', 'a2'))}</p></article>
    <article class="lesson-box" id="frasi"><h2>${L.frasiH2}</h2><p>${L.frasiP}</p>${h.examples([
      [L.fChe, 'Che c’è? Sei triste?'],
      [L.fTempo, 'C’è il sole. · C’è vento. · C’è nebbia.'],
      [L.fProblema, 'Non c’è problema! · Non c’è di che.'],
      [L.fTv, 'Che cosa c’è stasera in TV?'],
      [L.fNe, 'Ci sono ancora biglietti? Sì, ce ne sono. · No, non ce ne sono più.'],
    ])}<p class="mini-note">${L.frasiNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tPlurale, 'C’è un libro. · Ci sono due libri.'],
      [L.tGente, 'C’è tanta gente. · Ci sono tante persone.'],
      [L.tApostrofo, 'c’è · c’era · ci sono · ci sarà'],
      [L.tOrdine, 'In cucina c’è un tavolo. · C’è un tavolo in cucina.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['C’è due persone.', 'Ci sono due persone.'],
      ['Ci è un problema.', 'C’è un problema.'],
      ['Ci sono tanta gente.', 'C’è tanta gente.'],
      ['Dove c’è la stazione?', 'Dov’è la stazione?'],
      ['Ieri c’era molte persone.', 'Ieri c’erano molte persone.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ un bar qui vicino.', a: 'c’è', alt: "c'è", hint: 'Un bar, singolare: c’è.' },
        { q: 'Sul tavolo ___ tre libri.', a: 'ci sono', hint: 'Tre libri, plurale: ci sono.' },
        { q: 'Oggi non ___ tempo.', a: 'c’è', alt: "c'è", hint: 'Tempo è singolare: non c’è.' },
        { q: 'Non ___ problemi.', a: 'ci sono', hint: 'Problemi è plurale: non ci sono.' },
        { q: '___ una farmacia in centro?', a: 'c’è', alt: "c'è", hint: 'Una farmacia, singolare: c’è?' },
        { q: 'In classe ___ dodici studenti.', a: 'ci sono', hint: 'Dodici studenti, plurale: ci sono.' },
        { q: 'In piazza ___ tanta gente.', a: 'c’è', alt: "c'è", hint: 'Gente è singolare in italiano: c’è tanta gente.' },
        { q: 'Nella mia città ___ due musei.', a: 'ci sono', hint: 'Due musei, plurale: ci sono.' },
        { q: 'Nel frigo ___ dell’acqua?', a: 'c’è', alt: "c'è", hint: 'Dell’acqua è singolare: c’è.' },
        { q: 'Scusi, ___ posti liberi?', a: 'ci sono', hint: 'Posti, plurale: ci sono.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Pronto, ___ Marco?', a: 'c’è', alt: "c'è", hint: 'Al telefono, per chiedere se una persona è lì: c’è Marco?' },
      { q: 'Marco non c’è: ___ al lavoro.', a: 'è', hint: 'Dove si trova Marco: è al lavoro.' },
      { q: '___ una farmacia qui vicino? Sì, in via Roma.', a: 'c’è', alt: "c'è", hint: 'Chiedi se esiste: c’è una farmacia?' },
      { q: 'La farmacia ___ in via Roma.', a: 'è', hint: 'La farmacia che conosci: dove si trova? È in via Roma.' },
      { q: 'Scusi, dov’___ la stazione?', a: 'è', hint: 'La stazione è una sola e la conosci: dov’è.' },
      { q: '___ un fratello e una sorella. (io)', a: 'ho', hint: 'La famiglia che hai: ho un fratello.' },
      { q: 'Nella mia famiglia ___ cinque persone.', a: 'ci sono', hint: 'Cinque persone, plurale: ci sono.' },
      { q: 'Scusa, ___ una penna? (tu)', a: 'hai', hint: 'Una cosa che possiedi: hai una penna?' },
      { q: 'Che cosa ___ stasera in TV?', a: 'c’è', alt: "c'è", hint: 'Che cosa c’è: sempre singolare.' },
      { q: 'Venite al cinema? Sì, ci ___ anch’io! (io)', a: 'sono', hint: 'Esserci con io: ci sono.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Ieri ___ il sole. (imperfetto)', a: 'c’era', alt: "c'era", hint: 'Il passato per descrivere: c’era.' },
      { q: 'Alla festa ___ tanti amici. (imperfetto)', a: 'c’erano', alt: "c'erano", hint: 'Plurale al passato: c’erano.' },
      { q: 'Domani ___ lo sciopero dei treni. (futuro)', a: 'ci sarà', hint: 'Il futuro singolare: ci sarà.' },
      { q: 'Domani ___ molte persone in piazza. (futuro)', a: 'ci saranno', hint: 'Il futuro plurale: ci saranno.' },
      { q: 'Stamattina ___ un incidente. (passato prossimo)', a: 'c’è stato', alt: "c'è stato", hint: 'Un fatto finito: c’è stato.' },
      { q: 'Che ___? Sei triste?', a: 'c’è', alt: "c'è", hint: 'Che c’è? = che cosa succede?' },
      { q: 'Oggi ___ il sole: andiamo al mare!', a: 'c’è', alt: "c'è", hint: 'Il tempo: c’è il sole.' },
      { q: 'Grazie mille! Non c’è ___.', a: 'di che', hint: 'Risposta a grazie: non c’è di che.' },
      { q: 'Ci sono ancora biglietti? Sì, ce ne ___.', a: 'sono', hint: 'Ce ne sono: ne sostituisce «biglietti».' },
      { q: 'Quante persone ___ nella tua classe?', a: 'ci sono', hint: 'Quante persone: plurale, ci sono.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Scusi, c’è un supermercato qui vicino?'],
      ['Martin', 'Sì, c’è un supermercato in piazza, vicino alla fontana.'],
      ['Studente', 'Ci sono anche dei negozi?'],
      ['Martin', 'Ci sono un fornaio, un fruttivendolo e un bar. Oggi c’è anche il mercato.'],
      ['Studente', 'C’è tanta gente al mercato?'],
      ['Martin', 'Il sabato sì, ci sono moltissime persone. Ma non c’è problema: è grande!'],
    ])}</article>`,
  it: {
    h1: 'C’è e ci sono',
    card: 'C’è una fontana, ci sono due panchine: singolare e plurale, c’è o è, c’è o ho, c’era, ci sarà e 30 esercizi.',
    lead: 'C’è una fontana, ci sono due panchine: con c’è e ci sono dici che una cosa o una persona esiste o è presente. La regola, le domande e la negazione, le quantità (c’è tanta gente), le persone (c’è Marco?), la differenza con è (la farmacia è in via Roma) e con ho, il passato e il futuro (c’era, ci sarà), le frasi utili e le trappole. Con 30 esercizi.',
    description:
      'C’è e ci sono in italiano: c’è + singolare, ci sono + plurale. Domande e negazione, le quantità (c’è tanta gente), c’è Marco?, c’è o è (dov’è la stazione?), c’è o ho, il passato e il futuro (c’era, c’erano, c’è stato, ci sarà), frasi utili (che c’è?, c’è il sole, non c’è problema), gli errori tipici e 30 esercizi.',
    heroAlt: 'Una piccola piazza italiana al sole con una fontana di pietra al centro e due panchine di legno',
    regolaH2: 'La regola',
    regolaP:
      'Con <strong>c’è</strong> e <strong>ci sono</strong> dici che una cosa o una persona <strong>esiste</strong> o <strong>si trova</strong> in un posto. <strong>C’è</strong> va con il singolare, <strong>ci sono</strong> con il plurale.',
    rSing: 'C’è + singolare',
    rPlur: 'Ci sono + plurale',
    rCi: 'Ci + essere',
    regolaNote:
      'Guarda la foto: <em lang="it">in piazza c’è una fontana e ci sono due panchine</em>. <strong>Ci</strong> vuol dire «lì, in quel posto»; davanti a <em lang="it">è</em> perde la <em lang="it">i</em> e diventa <strong>c’è</strong>, con l’apostrofo. Il verbo si accorda con quello che viene dopo: una cosa, <em lang="it">c’è</em>; due o più, <em lang="it">ci sono</em>.',
    domH2: 'Negazione e domande',
    domP: 'Per la negazione <strong>non</strong> va prima di <em lang="it">ci</em>. Per la domanda le parole non cambiano: cambia solo l’intonazione.',
    dDomanda: 'La domanda',
    dNon: 'Non prima di ci',
    dCosa: 'Che cosa c’è? Quanti ci sono?',
    dRisposta: 'Rispondere: sì, c’è · no, non c’è',
    domNote:
      'Si dice <strong>non c’è</strong>, <strong>non ci sono</strong>: mai <em lang="it">ci non è</em>. Per rispondere basta ripetere il verbo: <em lang="it">sì, c’è</em>, <em lang="it">no, non ci sono</em>. <em lang="it">Che cosa c’è?</em> è sempre singolare, anche se la risposta è plurale: <em lang="it">che cosa c’è nel frigo? Ci sono le mele e l’acqua</em>.',
    quantH2: 'Le quantità',
    quantP: 'Con c’è e ci sono si usano spesso numeri e parole di quantità. Il verbo si accorda con la parola dopo.',
    qNumeri: 'Con i numeri',
    qMolto: 'Molto, molta, molti, molte',
    qGente: 'La gente è singolare',
    qDei: 'Dei, delle, un po’ di',
    quantNote:
      '<strong>Gente</strong> è un nome singolare: <em lang="it">c’è tanta gente</em>, ma <em lang="it">ci sono tante persone</em>. <strong>Molto</strong> si accorda: <em lang="it">c’è molto traffico</em>, <em lang="it">c’è molta acqua</em>, <em lang="it">ci sono molti turisti</em>. Per «alcuni» si usa <em lang="it">dei, degli, delle</em>: vedi <a href="{{PARTITIVI}}">gli articoli partitivi</a>.',
    persH2: 'Con le persone',
    persP: 'C’è e ci sono vanno benissimo anche con una persona precisa: dicono se è <strong>presente</strong>, se è lì.',
    pQui: 'C’è Marco? È qui?',
    pChi: 'Chi c’è?',
    pIo: 'Esserci: ci sono, ci sei',
    persNote:
      'Al telefono o alla porta: <strong>c’è Marco?</strong> = «Marco è lì?». La risposta: <em lang="it">no, non c’è</em> o <em lang="it">sì, te lo passo</em>. Il verbo è <strong>esserci</strong> e ha tutte le persone: <em lang="it">ci sono, ci sei, c’è, ci siamo, ci siete, ci sono</em>. <em lang="it">Ci sei stasera?</em> = vieni anche tu?',
    doveH2: 'C’è o è?',
    doveP: 'La differenza è importante. <strong>C’è</strong> dice che una cosa <strong>esiste</strong> in un posto; <strong>è</strong> dice <strong>dove</strong> si trova una cosa che conosci già.',
    dvEsiste: 'C’è: esiste? (una cosa nuova)',
    dvDove: 'È: dove si trova? (una cosa nota)',
    dvSenzaCi: 'Senza ci cambia tutto',
    doveNote:
      '<em lang="it">C’è una farmacia qui vicino?</em> chiede se esiste. Quando sai che esiste, chiedi dove si trova: <strong>dov’è la farmacia?</strong>, non <em lang="it">dove c’è la farmacia?</em>. E attenzione al <em lang="it">ci</em>: <em lang="it">è una farmacia</em> vuol dire «quella è una farmacia», <em lang="it">c’è una farmacia</em> vuol dire «esiste una farmacia». Vedi <a href="{{ESSERE}}">il verbo essere</a>.',
    avH2: 'C’è o ho?',
    avP: 'Molte lingue usano lo stesso verbo per «avere» e per «esserci». In italiano no: <strong>c’è</strong> dice che una cosa esiste in un posto, <strong>ho</strong> dice che è tua.',
    aCe: 'C’è: esiste',
    aHo: 'Ho: è mio',
    aNegozio: 'Nei negozi',
    avNote:
      '<em lang="it">C’è un problema</em> = un problema esiste; <em lang="it">ho un problema</em> = il problema è mio. La famiglia e le cose che possiedi vanno con avere: <em lang="it">ho due fratelli</em>, non <em lang="it">ci sono due fratelli</em>. In un negozio si può chiedere in tutti e due i modi: <em lang="it">c’è il pane?</em> o <em lang="it">avete il pane?</em>. Vedi <a href="{{AVERE}}">il verbo avere</a>.',
    passH2: 'Al passato e al futuro',
    passP: 'Esserci si coniuga come essere: basta mettere <strong>ci</strong> davanti.',
    pEra: 'C’era, c’erano: descrivere il passato',
    pStato: 'C’è stato: un fatto finito',
    pSara: 'Ci sarà, ci saranno: il futuro',
    passNote:
      '<strong>C’era</strong> e <strong>c’erano</strong> descrivono una situazione del passato (<em lang="it">c’era il sole</em>); <strong>c’è stato</strong> racconta un fatto (<em lang="it">c’è stato un incidente</em>), e il participio si accorda: <em lang="it">c’è stata una festa</em>, <em lang="it">ci sono stati problemi</em>. <em lang="it">C’era una volta…</em> è l’inizio delle favole. Vedi <a href="{{IMPERFETTO}}">l’imperfetto</a>.',
    frasiH2: 'Frasi utili',
    frasiP: 'Alcune frasi con c’è che si usano ogni giorno.',
    fChe: 'Che c’è? = che cosa succede?',
    fTempo: 'Il tempo: c’è il sole',
    fProblema: 'Non c’è problema, non c’è di che',
    fTv: 'In programma',
    fNe: 'Ce n’è, ce ne sono: quanti?',
    frasiNote:
      '<strong>Che c’è?</strong> si dice a chi sembra triste o preoccupato. Per il tempo: <em lang="it">c’è il sole</em>, <em lang="it">c’è vento</em>, ma <em lang="it">fa caldo</em>, <em lang="it">piove</em>. <em lang="it">Non c’è di che</em> è una risposta a <em lang="it">grazie</em>. Con una quantità la cosa si sostituisce con <strong>ne</strong> e <em lang="it">ci</em> diventa <em lang="it">ce</em>: <em lang="it">ce n’è uno</em>, <em lang="it">ce ne sono tre</em>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tPlurale: 'Il plurale vuole sempre ci sono',
    tGente: 'Gente è singolare, persone è plurale',
    tApostrofo: 'L’apostrofo solo davanti a è',
    tOrdine: 'Il luogo prima o dopo',
    trapNote:
      'Il verbo cambia con il numero: <em lang="it">c’è un libro</em>, <em lang="it">ci sono due libri</em>. L’apostrofo c’è solo davanti a una vocale: <em lang="it">c’è, c’era, c’erano</em>, ma <em lang="it">ci sono, ci sarà</em>; mai <em lang="it">ci è</em>. Il luogo può stare prima o dopo, ma <em lang="it">c’è</em> resta prima della cosa: <em lang="it">in cucina c’è un tavolo</em>, non <em lang="it">in cucina un tavolo c’è</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo le parole che mancano: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · C’è o ci sono?',
    part1P: 'Singolare o plurale? Attenzione a gente.',
    part2H3: 'Parte 2 · C’è, è o ho?',
    part2P: 'Esiste, dove si trova o è mio? E le persone: c’è Marco?',
    part3H3: 'Parte 3 · Passato, futuro e frasi utili',
    part3P: 'C’era, c’erano, c’è stato, ci sarà, ci saranno e le frasi di tutti i giorni.',
  },
};
