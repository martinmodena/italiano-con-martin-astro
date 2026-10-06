// Lezione A2 «Il passato prossimo» (rifatta il 2026-10-06 agli stessi URL): struttura, materiale
// italiano e testi italiani. Le spiegazioni tradotte stanno in passato-prossimo-i18n.mjs.
//
// Martin: «non è molto spiegato il passato prossimo, inoltre non ci sono liste dei passati prossimi…
// con 100 esercizi, è un tema molto importante». La lezione ha 50 esercizi, la lista dei participi
// regolari e i 20 irregolari più frequenti; la lista completa degli irregolari (con altri 50
// esercizi) è nella lezione «I participi passati irregolari».

const REGULAR = [
  ['parlare → parlato', 'credere → creduto', 'dormire → dormito'],
  ['mangiare → mangiato', 'vendere → venduto', 'partire → partito'],
  ['lavorare → lavorato', 'ricevere → ricevuto', 'finire → finito'],
  ['comprare → comprato', 'ripetere → ripetuto', 'capire → capito'],
  ['studiare → studiato', 'sapere → saputo', 'sentire → sentito'],
  ['giocare → giocato', 'potere → potuto', 'uscire → uscito'],
  ['ascoltare → ascoltato', 'dovere → dovuto', 'pulire → pulito'],
  ['guardare → guardato', 'volere → voluto', 'seguire → seguito'],
  ['arrivare → arrivato', 'avere → avuto', 'preferire → preferito'],
  ['tornare → tornato', 'cadere → caduto', 'servire → servito'],
];

// Infinito, participio, ausiliare.
const TOP_IRREGULAR = [
  ['essere', 'stato', 'essere'],
  ['fare', 'fatto', 'avere'],
  ['dire', 'detto', 'avere'],
  ['vedere', 'visto', 'avere'],
  ['prendere', 'preso', 'avere'],
  ['mettere', 'messo', 'avere'],
  ['leggere', 'letto', 'avere'],
  ['scrivere', 'scritto', 'avere'],
  ['aprire', 'aperto', 'avere'],
  ['chiudere', 'chiuso', 'avere'],
  ['chiedere', 'chiesto', 'avere'],
  ['rispondere', 'risposto', 'avere'],
  ['perdere', 'perso', 'avere'],
  ['decidere', 'deciso', 'avere'],
  ['bere', 'bevuto', 'avere'],
  ['venire', 'venuto', 'essere'],
  ['rimanere', 'rimasto', 'essere'],
  ['nascere', 'nato', 'essere'],
  ['morire', 'morto', 'essere'],
  ['scendere', 'sceso', 'essere / avere'],
];

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'passato-prossimo',
  level: 'a2',
  exerciseCount: 50,
  next: 'participi-passati-irregolari',
  minutes: 35,
  hero: { src: 'grammatica/passato-prossimo-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-passato-prossimo-tense',
    es: 'el-passato-prossimo-italiano',
    fr: 'le-passato-prossimo-italien',
    cs: 'italsky-passato-prossimo',
    pl: 'wloski-passato-prossimo',
    tr: 'italyanca-passato-prossimo',
    de: 'das-italienische-passato-prossimo',
    ja: 'イタリア語の-passato-prossimo',
  },
  nav: [
    ['uso', 'Uso'],
    ['forma', 'Forma'],
    ['participi', 'Participi'],
    ['essere-avere', 'Essere o avere'],
    ['accordo', 'Accordo'],
    ['due-ausiliari', 'Due ausiliari'],
    ['posizione', 'Posizione'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="uso"><h2>${L.usoH2}</h2><p>${L.usoP}</p>${h.examples([
    [L.uIeri, 'Ieri ho studiato due ore.'],
    [L.uFa, 'Sono arrivato in Italia tre anni fa.'],
    [L.uScorso, 'La settimana scorsa abbiamo visto un film.'],
    [L.uOggi, 'Stamattina ho bevuto un caffè al bar.'],
    [L.uEsperienza, 'Sei mai stato a Venezia?'],
    [L.uRisultato, 'Ho perso le chiavi!'],
  ])}<p class="mini-note">${L.usoNote} <a href="${h.href('passato-prossimo-o-imperfetto', 'a2')}">${L.usoLink}</a></p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', `=${it('avere')}`, `=${it('essere')}`],
      [
        ['io', 'ho parlato', 'sono andato / andata'],
        ['tu', 'hai parlato', 'sei andato / andata'],
        ['lui / lei', 'ha parlato', 'è andato / andata'],
        ['noi', 'abbiamo parlato', 'siamo andati / andate'],
        ['voi', 'avete parlato', 'siete andati / andate'],
        ['loro', 'hanno parlato', 'sono andati / andate'],
      ]
    )}<p class="mini-note">${L.formaNote}</p></article>
    <article class="lesson-box" id="participi"><h2>${L.partH2}</h2><p>${L.partP}</p>${h.table(
      ['Infinito', 'Participio', 'Esempio'],
      [
        ['parl<strong>are</strong>', 'parl<strong>ato</strong>', 'Ho parlato con il professore.'],
        ['cred<strong>ere</strong>', 'cred<strong>uto</strong>', 'Non ho creduto alla sua storia.'],
        ['dorm<strong>ire</strong>', 'dorm<strong>ito</strong>', 'Hai dormito bene?'],
      ]
    )}<h3>${L.listaH3}</h3><p>${L.listaP}</p>${h.table(
      [`=${it('-are → -ato')}`, `=${it('-ere → -uto')}`, `=${it('-ire → -ito')}`],
      REGULAR
    )}<p class="mini-note">${L.listaNote}</p><h3>${L.irrH3}</h3><p>${L.irrP}</p>${h.table(
      ['Infinito', 'Participio', 'Ausiliare'],
      TOP_IRREGULAR
    )}<p class="mini-note">${L.irrNote} <a href="${h.href('participi-passati-irregolari', 'a2')}">${L.irrLink}</a></p></article>
    <article class="lesson-box" id="essere-avere"><h2>${L.eaH2}</h2><p>${L.eaP}</p>${h.examples([
      [L.eOggetto, 'Ho mangiato una mela. Abbiamo comprato il pane.'],
      [L.eSenza, 'Ho dormito, ho lavorato, ho riso.'],
      [L.eMoto, 'Sono andata a Roma. Siamo tornati a casa.'],
      [L.eStato, 'Sono rimasto a casa. Sei stato a Napoli?'],
      [L.eCambio, 'Sono nata nel 1990. Luca è diventato medico.'],
      [L.eRifl, 'Mi sono svegliata alle sette.'],
      [L.ePiacere, 'Il film mi è piaciuto. Che cosa è successo?'],
      [L.eTempo, 'È piovuto tutto il giorno. / Ha piovuto tutto il giorno.'],
    ])}<p class="mini-note">${L.eaNote1}</p><p class="mini-note">${L.eaNote2}</p></article>
    <article class="lesson-box" id="accordo"><h2>${L.accH2}</h2><p>${L.accP}</p>${h.table(
      ['Maschile singolare', 'Femminile singolare', 'Maschile plurale', 'Femminile plurale'],
      [['Marco è andato.', 'Anna è andata.', 'Marco e Luca sono andati.', 'Anna e Sara sono andate.']]
    )}${h.examples([
      [L.aMisto, 'Anna e Marco sono partiti.'],
      [L.aAvere, 'Anna ha mangiato. Le ragazze hanno studiato.'],
      [L.aPronome, 'La torta? L’ho mangiata io.'],
      [L.aLei, 'Signora, è già arrivata?'],
    ])}<p class="mini-note">${L.accNote} <a href="${h.href('pronomi-diretti', 'a2')}">${L.accLink}</a></p></article>
    <article class="lesson-box" id="due-ausiliari"><h2>${L.dueH2}</h2><p>${L.dueP}</p>${h.table(
      ['Verbo', 'Ausiliare avere', 'Ausiliare essere'],
      [
        ['finire', 'Ho finito il lavoro.', 'Il film è finito.'],
        ['cominciare', 'Ho cominciato un corso.', 'La lezione è cominciata.'],
        ['salire', 'Ho salito le scale.', 'Sono salito sul treno.'],
        ['scendere', 'Ho sceso le scale.', 'Sono sceso dall’autobus.'],
        ['passare', 'Ho passato una bella giornata.', 'Sono passato da Luca.'],
        ['correre', 'Ho corso per un’ora.', 'Sono corso a casa.'],
        ['cambiare', 'Ho cambiato casa.', 'Roma è cambiata molto.'],
      ]
    )}<p class="mini-note">${L.dueNote} <a href="${h.href('verbi-modali', 'a2')}">${L.dueLink}</a></p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.pNon, 'Non ho capito.'],
      [L.pGia, 'Ho già mangiato, grazie.'],
      [L.pAncora, 'Non ho ancora finito.'],
      [L.pAppena, 'Sono appena arrivata.'],
      [L.pMai, 'Non sono mai stato in Sicilia.'],
      [L.pPronomi, 'L’ho visto ieri. Ci sono andata in treno.'],
    ])}<p class="mini-note">${L.posNote} <a href="${h.href('avverbi-di-frequenza', 'a1')}">${L.posLink}</a></p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io sono mangiato.', 'Io ho mangiato.'],
      ['Lei ha andata a scuola.', 'Lei è andata a scuola.'],
      ['Anna è andato.', 'Anna è andata.'],
      ['Mi ho svegliato tardi.', 'Mi sono svegliato tardi.'],
      ['Sono camminato tanto.', 'Ho camminato tanto.'],
      ['Mi ha piaciuto.', 'Mi è piaciuto.'],
      ['Ho prenduto il treno.', 'Ho preso il treno.'],
      ['Ho già lo visto.', 'L’ho già visto.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'parlare → ___', a: 'parlato', hint: '-are → -ato.' },
        { q: 'mangiare → ___', a: 'mangiato', hint: '-are → -ato.' },
        { q: 'lavorare → ___', a: 'lavorato', hint: '-are → -ato.' },
        { q: 'credere → ___', a: 'creduto', hint: '-ere → -uto.' },
        { q: 'vendere → ___', a: 'venduto', hint: '-ere → -uto.' },
        { q: 'ricevere → ___', a: 'ricevuto', hint: '-ere → -uto.' },
        { q: 'dormire → ___', a: 'dormito', hint: '-ire → -ito.' },
        { q: 'finire → ___', a: 'finito', hint: '-ire → -ito.' },
        { q: 'capire → ___', a: 'capito', hint: '-ire → -ito.' },
        { q: 'sapere → ___', a: 'saputo', hint: '-ere → -uto: saputo.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Ieri (io) ___ andata al mare.', a: 'sono', hint: 'Andare è un movimento verso un luogo: essere.' },
      { q: 'Marco ___ mangiato una pizza.', a: 'ha', hint: 'Mangiare qualcosa: avere.' },
      { q: 'Noi ___ arrivati in ritardo.', a: 'siamo', hint: 'Arrivare vuole essere: noi siamo.' },
      { q: 'Voi ___ dormito bene?', a: 'avete', hint: 'Dormire vuole avere: voi avete.' },
      { q: 'Le mie amiche ___ partite stamattina.', a: 'sono', hint: 'Partire vuole essere: loro sono.' },
      { q: 'Tu ___ visto il film di ieri sera?', a: 'hai', hint: 'Vedere qualcosa: avere.' },
      { q: 'Mio nonno ___ nato nel 1950.', a: 'è', alt: 'e', hint: 'Nascere è un cambiamento: essere.' },
      { q: 'Io ___ camminato per tre ore.', a: 'ho', hint: 'Camminare non dice dove arrivi: avere.' },
      { q: 'Stamattina Lucia si ___ svegliata tardi.', a: 'è', alt: 'e', hint: 'Verbo riflessivo: essere.' },
      { q: 'Il concerto ti ___ piaciuto?', a: 'è', alt: 'e', hint: 'Piacere vuole essere.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Anna è ___ a Parigi. (andare)', a: 'andata', hint: 'Anna: femminile singolare.' },
      { q: 'I ragazzi sono ___ alle otto. (uscire)', a: 'usciti', hint: 'I ragazzi: maschile plurale.' },
      { q: 'Le mie sorelle sono ___ a casa. (restare)', a: 'restate', hint: 'Le sorelle: femminile plurale.' },
      { q: 'Paolo e Giulia si sono ___ ieri. (sposare)', a: 'sposati', hint: 'Gruppo misto: maschile plurale.' },
      { q: 'Signora, a che ora è ___? (arrivare)', a: 'arrivata', hint: 'Lei, la signora: femminile.' },
      { q: 'Maria ha ___ un libro. (comprare)', a: 'comprato', hint: 'Con avere il participio non cambia.' },
      { q: 'Le ragazze hanno ___ tutta la sera. (ballare)', a: 'ballato', hint: 'Con avere il participio non cambia.' },
      {
        q: 'Io e mia moglie siamo ___ a Roma una settimana. (stare)',
        a: 'stati',
        hint: 'Io e mia moglie: gruppo misto, maschile plurale.',
      },
      { q: 'La pizza? L’ho ___ io! (mangiare)', a: 'mangiata', hint: 'La pizza → la: l’ho mangiata.' },
      { q: 'Carla, sei ___ dall’Italia? (tornare)', a: 'tornata', hint: 'Carla: femminile singolare.' },
    ])}<h3>${L.part4H3}</h3><p>${L.part4P}</p>${h.exercises([
      { q: 'Ieri io ___ la cena. (cucinare)', a: 'ho cucinato', hint: 'Avere + cucinato.' },
      {
        q: 'Sabato noi ___ al cinema. (andare)',
        a: 'siamo andati',
        alt: 'siamo andate',
        hint: 'Essere + andati / andate.',
      },
      { q: 'Che cosa ___ ieri sera? (tu, fare)', a: 'hai fatto', hint: 'Fare → fatto, con avere.' },
      { q: 'Laura ___ una lettera a sua madre. (scrivere)', a: 'ha scritto', hint: 'Scrivere → scritto.' },
      {
        q: 'I miei genitori ___ dieci anni in Spagna. (vivere)',
        a: 'hanno vissuto',
        alt: 'sono vissuti',
        hint: 'Vivere → vissuto, con avere o essere.',
      },
      { q: 'Il treno ___ in orario. (partire)', a: 'è partito', alt: 'e partito', hint: 'Partire vuole essere.' },
      { q: 'Ragazzi, ___ il caffè? (voi, prendere)', a: 'avete preso', hint: 'Prendere → preso.' },
      {
        q: 'Mia figlia ___ medico. (diventare)',
        a: 'è diventata',
        alt: 'e diventata',
        hint: 'Diventare vuole essere: è diventata.',
      },
      {
        q: 'Quanto ___ quella borsa? (costare)',
        a: 'è costata',
        alt: 'e costata',
        hint: 'Costare vuole essere; la borsa: femminile.',
      },
      {
        q: 'Stanotte ___ molto. (piovere)',
        a: 'è piovuto',
        alt: 'ha piovuto|e piovuto',
        hint: 'Piovere: è piovuto o ha piovuto.',
      },
    ])}<h3>${L.part5H3}</h3><p>${L.part5P}</p>${h.exercises([
      { q: 'Io sono mangiato una mela. → Io ___ una mela.', a: 'ho mangiato', hint: 'Mangiare qualcosa: avere.' },
      {
        q: 'Lei ha andata a scuola. → Lei ___ a scuola.',
        a: 'è andata',
        alt: 'e andata',
        hint: 'Andare vuole essere.',
      },
      {
        q: 'Noi abbiamo arrivato tardi. → Noi ___ tardi.',
        a: 'siamo arrivati',
        alt: 'siamo arrivate',
        hint: 'Arrivare vuole essere.',
      },
      { q: 'Anna è uscito con Marco. → Anna ___ con Marco.', a: 'è uscita', alt: 'e uscita', hint: 'Anna: uscita.' },
      { q: 'Ho prenduto il treno. → ___ il treno.', a: 'ho preso', hint: 'Prendere → preso.' },
      {
        q: 'Mi ho lavato le mani. → ___ le mani.',
        a: 'mi sono lavato',
        alt: 'mi sono lavata',
        hint: 'Verbo riflessivo: mi sono lavato / lavata.',
      },
      { q: 'Ho aprito la finestra. → ___ la finestra.', a: 'ho aperto', hint: 'Aprire → aperto.' },
      {
        q: 'Non ho mai stato a Napoli. → Non sono mai ___ a Napoli.',
        a: 'stato',
        alt: 'stata',
        hint: 'Essere → stato, con essere.',
      },
      {
        q: 'Il film mi ha piaciuto. → Il film mi ___.',
        a: 'è piaciuto',
        alt: 'e piaciuto',
        hint: 'Piacere vuole essere.',
      },
      {
        q: 'Abbiamo andati al mare. → ___ al mare.',
        a: 'siamo andati',
        alt: 'siamo andate',
        hint: 'Andare vuole essere.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Che cosa hai fatto nel fine settimana?'],
      ['Studentessa', 'Sabato sono andata al mare con le mie amiche e abbiamo mangiato in un ristorante sul porto.'],
      ['Martin', 'Che bello! E domenica?'],
      ['Studentessa', 'Domenica sono rimasta a casa: ho letto un libro e ho dormito tanto.'],
    ])}</article>`,
  it: {
    h1: 'Il passato prossimo: come si forma e quando si usa',
    crumb: 'Passato prossimo',
    cardTitle: 'Passato prossimo',
    card: 'Essere o avere, participi regolari e irregolari, accordo e 50 esercizi.',
    lead: 'Ieri ho studiato, sabato sono andata al mare: il passato prossimo racconta le azioni finite. Qui trovi quando si usa, come si forma, la lista dei participi regolari, i 20 irregolari più frequenti, essere o avere, l’accordo e 50 esercizi.',
    description:
      'Il passato prossimo in italiano: quando si usa, come si forma con essere e avere, lista dei participi passati regolari e irregolari, accordo del participio, verbi con due ausiliari ed errori tipici. 50 esercizi con correzione immediata.',
    heroAlt:
      'Un tavolo vicino a una finestra con vista sui tetti: un diario aperto, le foto di un viaggio al mare e in montagna, una tazzina di caffè e una valigia appena disfatta',
    usoH2: 'Quando si usa',
    usoP: 'Il passato prossimo racconta un’<strong>azione finita</strong> nel passato: una cosa che è successa ed è conclusa. Spesso c’è un’espressione di tempo: <em>ieri</em>, <em>stamattina</em>, <em>la settimana scorsa</em>, <em>tre anni fa</em>, <em>nel 2020</em>.',
    uIeri: 'Ieri',
    uFa: 'Tre anni fa',
    uScorso: 'La settimana scorsa',
    uOggi: 'Oggi, in un momento finito',
    uEsperienza: 'Un’esperienza della vita',
    uRisultato: 'Un fatto che conta adesso',
    usoNote:
      '<strong>E l’imperfetto?</strong> Per descrivere com’era una situazione o un’abitudine nel passato (<em>da bambino giocavo sempre a calcio</em>) si usa l’imperfetto.',
    usoLink: 'Vedi «Passato prossimo o imperfetto?»',
    formaH2: 'Come si forma',
    formaP:
      'Il passato prossimo ha <strong>due parti</strong>: il verbo <em>avere</em> o <em>essere</em> al presente (l’<strong>ausiliare</strong>) e il <strong>participio passato</strong> del verbo che vuoi usare.',
    formaNote:
      '<strong>Formula:</strong> <em>ho / hai / ha / abbiamo / avete / hanno</em> + participio oppure <em>sono / sei / è / siamo / siete / sono</em> + participio. Con <em>essere</em> la finale del participio cambia: <em>andato, andata, andati, andate</em>.',
    partH2: 'Il participio passato',
    partP:
      'Il participio regolare si forma dall’infinito: <strong>-are</strong> diventa <strong>-ato</strong>, <strong>-ere</strong> diventa <strong>-uto</strong>, <strong>-ire</strong> diventa <strong>-ito</strong>.',
    listaH3: 'Trenta participi regolari da sapere',
    listaP:
      'I verbi in <em>-are</em> sono quasi tutti regolari. Fra i verbi in <em>-ire</em> gli irregolari sono pochi. I verbi in <em>-ere</em>, invece, sono spesso irregolari.',
    listaNote:
      '<strong>Anche gli ausiliari hanno un participio:</strong> <em>avere → avuto</em> (<em>ho avuto paura</em>) ed <em>essere → stato</em> (<em>sono stato in Grecia</em>). <em>Conoscere</em>, <em>piacere</em> e <em>crescere</em> prendono una <em>i</em>: <em>conosciuto</em>, <em>piaciuto</em>, <em>cresciuto</em>.',
    irrH3: 'I 20 participi irregolari più frequenti',
    irrP: 'Questi participi non seguono la regola e si usano ogni giorno: conviene impararli subito, insieme al loro ausiliare.',
    irrNote:
      '<strong>Ce ne sono molti altri</strong>, ma seguono pochi schemi: <em>preso, acceso, speso</em>; <em>scritto, letto, fatto</em>; <em>tradotto, prodotto</em>.',
    irrLink: 'La lista completa, per gruppi: «I participi passati irregolari»',
    eaH2: 'Essere o avere?',
    eaP: 'La maggior parte dei verbi usa <strong>avere</strong>. Usano <strong>essere</strong> i verbi di movimento verso un luogo, di stato e di cambiamento, i verbi riflessivi e alcuni verbi come <em>piacere</em>.',
    eOggetto: 'Avere: verbi con un oggetto (che cosa?)',
    eSenza: 'Avere: molti verbi senza oggetto',
    eMoto: 'Essere: andare, venire, arrivare, partire, tornare, entrare, uscire',
    eStato: 'Essere: stare, restare, rimanere, essere',
    eCambio: 'Essere: nascere, morire, diventare, crescere',
    eRifl: 'Essere: tutti i verbi riflessivi',
    ePiacere: 'Essere: piacere, succedere, costare, bastare, mancare',
    eTempo: 'Pioggia e neve: tutti e due',
    eaNote1:
      '<strong>Un trucco.</strong> Se dopo il verbo puoi mettere un oggetto (<em>che cosa?</em>, <em>chi?</em>), l’ausiliare è <em>avere</em>: <em>ho mangiato (una mela)</em>, <em>ho visto (Marco)</em>.',
    eaNote2:
      '<strong>Il movimento da solo non basta.</strong> <em>Camminare</em>, <em>viaggiare</em>, <em>nuotare</em>, <em>ballare</em> e <em>passeggiare</em> usano <em>avere</em>, perché non dicono dove arrivi: <em>ho camminato tanto</em>, <em>abbiamo viaggiato in Europa</em>.',
    accH2: 'L’accordo del participio',
    accP: 'Con <strong>essere</strong> il participio si comporta come un aggettivo: cambia la finale secondo chi fa l’azione (maschile o femminile, singolare o plurale). Con <strong>avere</strong> resta in <em>-o</em>.',
    aMisto: 'Uomini e donne insieme: maschile plurale',
    aAvere: 'Con avere: sempre -o',
    aPronome: 'Con avere e lo, la, li, le: si accorda',
    aLei: 'Lei di cortesia: secondo la persona',
    accNote:
      '<strong>Con i pronomi</strong> <em>lo, la, li, le</em> prima di <em>avere</em> il participio si accorda con il pronome: <em>la pizza? L’ho mangiata</em>; <em>i biglietti? Li ho comprati</em>.',
    accLink: 'Vedi «I pronomi diretti»',
    dueH2: 'Verbi con due ausiliari',
    dueP: 'Alcuni verbi usano <strong>avere</strong> quando hanno un oggetto e <strong>essere</strong> quando non ce l’hanno: <em>ho finito il lavoro</em>, ma <em>il film è finito</em>. Con <em>salire</em>, <em>scendere</em> e <em>correre</em> l’ausiliare è <em>essere</em> quando dici dove arrivi.',
    dueNote:
      '<strong>Dovere, potere, volere</strong> prendono di solito l’ausiliare del verbo che segue: <em>ho dovuto lavorare</em>, ma <em>sono dovuto partire</em>. Nel parlato si sente anche <em>ho dovuto partire</em>.',
    dueLink: 'Vedi «I verbi modali»',
    posH2: 'Non, già, mai e i pronomi',
    posP: '<em>Non</em> e i pronomi vanno <strong>prima dell’ausiliare</strong>. Avverbi come <em>già</em>, <em>ancora</em>, <em>appena</em>, <em>mai</em>, <em>sempre</em> e <em>più</em> vanno di solito <strong>fra l’ausiliare e il participio</strong>.',
    pNon: 'Non: prima dell’ausiliare',
    pGia: 'Già: è successo prima del previsto',
    pAncora: 'Non… ancora: non è successo, ma succederà',
    pAppena: 'Appena: è successo un attimo fa',
    pMai: 'Non… mai: nessuna volta nella vita',
    pPronomi: 'I pronomi: prima dell’ausiliare',
    posNote:
      '<strong>Sempre, spesso, mai</strong> al passato prossimo: <em>ho sempre amato il mare</em>, <em>non sono mai stato in Sicilia</em>.',
    posLink: 'Vedi «Gli avverbi di frequenza»',
    exIntro:
      '50 frasi in cinque parti, dalla più facile alla più difficile. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il participio regolare',
    part1P: 'Scrivi il participio passato.',
    part2H3: 'Parte 2 · Essere o avere?',
    part2P: 'Scrivi l’ausiliare giusto al presente.',
    part3H3: 'Parte 3 · L’accordo',
    part3P: 'Scrivi il participio con la finale giusta.',
    part4H3: 'Parte 4 · La frase completa',
    part4P: 'Scrivi il verbo al passato prossimo: ausiliare + participio.',
    part5H3: 'Parte 5 · Trova l’errore',
    part5P: 'La prima frase ha un errore. Scrivi la parte corretta.',
  },
};
