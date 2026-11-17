// Lezione B2 «Il condizionale passato: avrei fatto, sarei andato» (2026-11-17): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in condizionale-passato-i18n.mjs.
//
// Martin il 2026-11-17: «manca il congiuntivo trapassato vero?». Mancavano anche il congiuntivo passato e il
// condizionale passato, che serve al periodo ipotetico dell'irrealtà. Qui: quando si usa (desiderio non
// realizzato, consiglio o rimprovero sul passato, ipotesi irreale, notizia non confermata, futuro nel passato),
// la forma, essere o avere, i modali (avrei dovuto, potuto, voluto), il futuro nel passato (ha detto che
// sarebbe venuto, la trappola di chi parla spagnolo, francese, inglese o tedesco), le trappole. Nell'indice B2
// sta dopo «Il congiuntivo presente»; il pulsante finale porta al periodo ipotetico. Confronto ed errori per
// lingua in confronti-condizionale-congiuntivo.mjs.

export default {
  slug: 'condizionale-passato',
  level: 'b2',
  next: 'periodo-ipotetico',
  after: 'congiuntivo-presente',
  minutes: 20,
  hero: { src: 'grammatica/condizionale-passato-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'the-italian-condizionale-passato',
    es: 'el-condizionale-passato-en-italiano',
    fr: 'le-condizionale-passato-en-italien',
    cs: 'condizionale-passato-v-italstine',
    pl: 'condizionale-passato-po-wlosku',
    tr: 'italyanca-condizionale-passato',
    de: 'das-condizionale-passato-im-italienischen',
    ja: 'イタリア語の条件法過去',
  },
  nav: [
    ['quando', 'Quando usarlo'],
    ['forma', 'Forma'],
    ['ausiliare', 'Essere o avere'],
    ['modali', 'Con i modali'],
    ['futuro', 'Futuro nel passato'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
    [L.qDesiderio, 'Sarei venuto volentieri, ma ero malato.'],
    [L.qConsiglio, 'Avresti dovuto dirmelo prima!'],
    [L.qIpotesi, 'Se avessi saputo, ti avrei aiutato.'],
    [L.qNotizia, 'Secondo i giornali, il ladro sarebbe fuggito in moto.'],
    [L.qFuturo, 'Mi ha detto che sarebbe arrivato alle otto.'],
  ])}<p class="mini-note">${L.quandoNote.replace('{{PRESENTE}}', h.href('condizionale-presente', 'b1'))}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', 'Ausiliare avere', 'Ausiliare essere'],
      [
        ['io', 'avrei mangiato', 'sarei partito · partita'],
        ['tu', 'avresti mangiato', 'saresti partito · partita'],
        ['lui · lei', 'avrebbe mangiato', 'sarebbe partito · partita'],
        ['noi', 'avremmo mangiato', 'saremmo partiti · partite'],
        ['voi', 'avreste mangiato', 'sareste partiti · partite'],
        ['loro', 'avrebbero mangiato', 'sarebbero partiti · partite'],
      ]
    )}<p class="mini-note">${L.formaNote.replace('{{PRESENTE}}', h.href('condizionale-presente', 'b1')).replace('{{PARTICIPI}}', h.href('participi-passati-irregolari', 'a2'))}</p></article>
    <article class="lesson-box" id="ausiliare"><h2>${L.ausH2}</h2><p>${L.ausP.replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))}</p>${h.examples(
      [
        [L.aAvere, 'Avrei comprato il pane. · Avremmo visto il film.'],
        [L.aEssere, 'Lucia sarebbe venuta. · Saremmo partiti prima.'],
        [L.aRifl, 'Mi sarei divertito. · Vi sareste annoiati.'],
        [L.aPron, 'La torta? L’avrei mangiata tutta. · I soldi? Li avrei spesi subito.'],
      ]
    )}<p class="mini-note">${L.ausNote}</p></article>
    <article class="lesson-box" id="modali"><h2>${L.modH2}</h2><p>${L.modP}</p>${h.examples([
      [L.mDovere, 'Avresti dovuto prendere l’ombrello.'],
      [L.mPotere, 'Avrei potuto vincere, ma sono caduto.'],
      [L.mVolere, 'Avrei voluto studiare medicina.'],
      [L.mPiacere, 'Mi sarebbe piaciuto venire con voi.'],
    ])}<p class="mini-note">${L.modNote}</p></article>
    <article class="lesson-box" id="futuro"><h2>${L.futH2}</h2><p>${L.futP}</p>${h.examples([
      [L.fDetto, '«Verrò alla festa.» → Marco ha detto che sarebbe venuto alla festa.'],
      [L.fPensavo, 'Pensavo che avrebbe piovuto, invece c’era il sole.'],
      [L.fPromesso, 'Mi avevi promesso che mi avresti chiamato!'],
    ])}<p class="mini-note">${L.futNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tOggi, 'Vorrei un caffè. · Avrei voluto un caffè, ma il bar era chiuso.'],
      [L.tDoppia, 'Se fossimo partiti prima, avremmo preso il treno. · Domani avremo più tempo.'],
      [L.tNotizia, 'Il ministro avrebbe dato le dimissioni.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Ha detto che verrebbe.', 'Ha detto che sarebbe venuto.'],
      ['Avrei andato volentieri.', 'Sarei andato volentieri.'],
      ['Laura sarebbe venuto.', 'Laura sarebbe venuta.'],
      ['Se avrei saputo, sarei venuto.', 'Se avessi saputo, sarei venuto.'],
      ['Ieri vorrei uscire, ma pioveva.', 'Ieri sarei voluto uscire, ma pioveva.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        {
          q: 'Io ___ volentieri. (venire)',
          a: 'sarei venuto',
          alt: 'sarei venuta',
          hint: 'Venire vuole essere: sarei venuto, sarei venuta.',
        },
        { q: 'Tu ___ il treno. (prendere)', a: 'avresti preso', hint: 'Participio irregolare: preso.' },
        { q: 'Lei ___ prima. (partire)', a: 'sarebbe partita', hint: 'Partire vuole essere; lei → partita.' },
        { q: 'Noi ___ quel film. (vedere)', a: 'avremmo visto', hint: 'Avremmo, con due m, + visto.' },
        { q: 'Voi ___ di più. (studiare)', a: 'avreste studiato', hint: 'Avreste + studiato.' },
        {
          q: 'Loro ___ in tempo. (arrivare)',
          a: 'sarebbero arrivati',
          alt: 'sarebbero arrivate',
          hint: 'Arrivare vuole essere: sarebbero arrivati.',
        },
        { q: 'Marco ___ tutto da solo. (fare)', a: 'avrebbe fatto', hint: 'Participio irregolare: fatto.' },
        {
          q: 'Io ___ alla festa. (divertirsi)',
          a: 'mi sarei divertito',
          alt: 'mi sarei divertita',
          hint: 'I riflessivi vogliono essere: mi sarei divertito.',
        },
        {
          q: 'Anna e Sara ___ con noi. (uscire)',
          a: 'sarebbero uscite',
          hint: 'Uscire vuole essere; due donne → uscite.',
        },
        {
          q: 'Tu ___ a Roma? (rimanere)',
          a: 'saresti rimasto',
          alt: 'saresti rimasta',
          hint: 'Rimanere vuole essere; participio irregolare: rimasto.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Adesso ___ volentieri un caffè. (bere, io)', a: 'berrei', hint: 'Adesso: condizionale presente, berrei.' },
      {
        q: 'Ieri ___ uscire, ma pioveva. (volere, io)',
        a: 'avrei voluto',
        alt: 'sarei voluto|sarei voluta',
        hint: 'Ieri, e non è successo: avrei voluto.',
      },
      {
        q: 'Non hai preso l’ombrello? ___ prenderlo! (dovere, tu)',
        a: 'avresti dovuto',
        hint: 'Un consiglio arrivato tardi: avresti dovuto.',
      },
      {
        q: 'Se avessi più tempo, ___ il tedesco. (studiare, io)',
        a: 'studierei',
        hint: 'Un’ipotesi su oggi: condizionale presente, studierei.',
      },
      {
        q: 'Se avessi studiato, ___ l’esame. (superare, io)',
        a: 'avrei superato',
        hint: 'Un’ipotesi sul passato: avrei superato.',
      },
      { q: 'Scusi, mi ___ aiutare? (potere, lei)', a: 'potrebbe', hint: 'Una richiesta gentile, adesso: potrebbe.' },
      {
        q: 'Al tuo posto, l’anno scorso non ___ quella casa. (comprare, io)',
        a: 'avrei comprato',
        hint: 'L’anno scorso: avrei comprato.',
      },
      {
        q: 'Mi ___ venire alla festa, ma ero malata. (piacere)',
        a: 'sarebbe piaciuto',
        hint: 'Piacere vuole essere: mi sarebbe piaciuto.',
      },
      { q: 'Domani ___ volentieri al mare. (andare, noi)', a: 'andremmo', hint: 'Domani: condizionale presente, andremmo.' },
      {
        q: 'Secondo i giornali, il ladro ___ dalla finestra. (scappare)',
        a: 'sarebbe scappato',
        hint: 'Una notizia non confermata sul passato: sarebbe scappato.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Giulia ha detto che ___ alle nove. (arrivare)',
        a: 'sarebbe arrivata',
        hint: 'Futuro nel passato: sarebbe arrivata.',
      },
      { q: 'Pensavo che ___ bel tempo. (fare)', a: 'avrebbe fatto', hint: 'Futuro nel passato: avrebbe fatto.' },
      {
        q: 'Le previsioni dicevano che non ___ . (piovere)',
        a: 'avrebbe piovuto',
        alt: 'sarebbe piovuto',
        hint: 'Piovere va bene con avere e con essere: avrebbe piovuto.',
      },
      {
        q: 'Marco mi aveva promesso che ___ i panini. (portare, lui)',
        a: 'avrebbe portato',
        hint: 'Una promessa del passato: avrebbe portato.',
      },
      {
        q: 'Gli amici hanno scritto che ___ in macchina. (venire)',
        a: 'sarebbero venuti',
        hint: 'Futuro nel passato; venire vuole essere: sarebbero venuti.',
      },
      {
        q: 'Ero sicuro che il viaggio ___ breve. (essere)',
        a: 'sarebbe stato',
        hint: 'Essere vuole essere: sarebbe stato.',
      },
      {
        q: 'Invece c’era traffico: ___ partire prima! (dovere, noi)',
        a: 'avremmo dovuto',
        alt: 'saremmo dovuti',
        hint: 'Un rimprovero sul passato: avremmo dovuto.',
      },
      {
        q: 'La radio ha detto che sull’autostrada ___ un incidente. (esserci)',
        a: 'ci sarebbe stato',
        hint: 'Una notizia non confermata: ci sarebbe stato.',
      },
      {
        q: 'Alla fine Giulia ha detto: «Senza di voi non mi ___ così tanto!» (divertirsi)',
        a: 'sarei divertita',
        alt: 'sarei divertito',
        hint: 'Mi è già scritto; Giulia è una donna: sarei divertita.',
      },
      {
        q: 'Abbiamo deciso che ___ la gita l’anno dopo. (rifare, noi)',
        a: 'avremmo rifatto',
        hint: 'Futuro nel passato: avremmo rifatto.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Allora, sei andato al concerto sabato?'],
      ['Studente', 'No, purtroppo. Sarei andato volentieri, ma i biglietti erano finiti.'],
      ['Martin', 'Peccato! Avresti dovuto comprarli prima.'],
      ['Studente', 'Lo so. Il mio amico mi aveva detto che li avrebbe presi lui, ma se n’è dimenticato!'],
      ['Martin', 'Al tuo posto mi sarei arrabbiato un po’. Ma la prossima volta andiamo insieme!'],
    ])}</article>`,
  it: {
    h1: 'Il condizionale passato: avrei fatto, sarei andato',
    card: 'Sarei venuto volentieri, avresti dovuto dirmelo, ha detto che sarebbe arrivato: la forma, i modali e il futuro nel passato.',
    lead: 'Sarei venuto volentieri, ma ero malato: il condizionale passato parla di quello che sarebbe potuto succedere e non è successo. Quando si usa, la forma (avrei fatto, sarei andato), essere o avere, avrei dovuto, potuto e voluto, il futuro nel passato (ha detto che sarebbe venuto) e le trappole. Con 30 esercizi.',
    description:
      'Il condizionale passato in italiano: quando si usa (desideri non realizzati, consigli sul passato, ipotesi irreali, notizie non confermate), la forma con avrei e sarei, avrei dovuto, potuto, voluto, il futuro nel passato, gli errori tipici e 30 esercizi.',
    heroAlt: 'Un ombrello rosso appeso accanto a una porta aperta; fuori piove su una strada italiana di pietra',
    quandoH2: 'Quando si usa',
    quandoP:
      'Il condizionale passato parla di <strong>cose che non sono successe</strong>, o che non sappiamo se sono successe davvero. E serve anche per raccontare al passato <strong>un futuro</strong>.',
    qDesiderio: 'Un desiderio non realizzato',
    qConsiglio: 'Un consiglio o un rimprovero sul passato',
    qIpotesi: 'Un’ipotesi irreale nel passato',
    qNotizia: 'Una notizia non confermata',
    qFuturo: 'Il futuro visto dal passato',
    quandoNote:
      'Il <a href="{{PRESENTE}}">condizionale presente</a> parla di oggi o di domani: <em lang="it">verrei volentieri</em> (la festa è stasera, posso ancora venire). Il condizionale passato parla di una cosa ormai chiusa: <em lang="it">sarei venuto volentieri</em> (la festa c’è stata, e io non c’ero).',
    formaH2: 'La forma',
    formaP:
      'Si forma con il <strong>condizionale presente di avere o essere</strong> (<strong>avrei, avresti, avrebbe…</strong> oppure <strong>sarei, saresti, sarebbe…</strong>) + il participio passato.',
    formaNote:
      'Ti servono due cose che conosci già: il <a href="{{PRESENTE}}">condizionale presente</a> di <em lang="it">avere</em> ed <em lang="it">essere</em> e il participio passato, con gli stessi <a href="{{PARTICIPI}}">participi irregolari</a> del passato prossimo. Attenzione alla doppia <strong>m</strong>: <em lang="it">avremmo, saremmo</em> sono condizionale; <em lang="it">avremo, saremo</em> sono futuro.',
    ausH2: 'Essere o avere?',
    ausP: 'Le regole sono quelle del <a href="{{PASSATO}}">passato prossimo</a>: se un verbo vuole <em lang="it">essere</em> al passato prossimo, lo vuole anche qui. Con <em lang="it">essere</em> il participio si accorda.',
    aAvere: 'Con avere: il participio non cambia',
    aEssere: 'Con essere: il participio si accorda',
    aRifl: 'I verbi riflessivi: sempre essere',
    aPron: 'Con lo, la, li, le: il participio si accorda',
    ausNote:
      '<strong>Sono venuta → sarei venuta</strong>, <strong>ho mangiato → avrei mangiato</strong>: cambia solo l’ausiliare. Con <em lang="it">essere</em> il participio si accorda con il soggetto (<em lang="it">Lucia sarebbe venuta</em>); con <em lang="it">avere</em> solo con <em lang="it">lo, la, li, le</em> (<em lang="it">l’avrei mangiata</em>).',
    modH2: 'Avrei dovuto, avrei potuto, avrei voluto',
    modP: 'Con i verbi modali il condizionale passato è frequentissimo: è il modo normale per parlare di occasioni perse e di consigli arrivati tardi.',
    mDovere: 'Avrei dovuto: il consiglio arrivato tardi',
    mPotere: 'Avrei potuto: la possibilità persa',
    mVolere: 'Avrei voluto: il desiderio rimasto un desiderio',
    mPiacere: 'Mi sarebbe piaciuto: con essere',
    modNote:
      '<strong>Avresti dovuto dirmelo</strong> vuol dire: dovevi dirmelo, ma non l’hai fatto. Se dopo il modale c’è un verbo che vuole <em lang="it">essere</em>, la lingua curata usa <em lang="it">essere</em> (<em lang="it">sarei dovuto partire</em>), ma nel parlato si sente spesso anche <em lang="it">avrei dovuto partire</em>: tutte e due vanno bene. <em lang="it">Mi sarebbe piaciuto</em> vuole sempre <em lang="it">essere</em>, come <em lang="it">mi è piaciuto</em>.',
    futH2: 'Il futuro nel passato',
    futP: 'Quando racconti al passato una cosa che allora era nel futuro, l’italiano usa il <strong>condizionale passato</strong>, anche se poi quella cosa è successa davvero.',
    fDetto: 'Quello che qualcuno ha detto',
    fPensavo: 'Quello che pensavi o speravi',
    fPromesso: 'Una promessa',
    futNote:
      '<strong>«Verrò» → ha detto che sarebbe venuto</strong>, non <em lang="it">che verrebbe</em>. In molte lingue qui si usa una forma simile al condizionale presente; in italiano no: dopo un verbo al passato (<em lang="it">ha detto, pensavo, sapevo, mi avevi promesso</em>) il futuro diventa sempre condizionale passato.',
    trapH2: 'Le trappole',
    trapP: 'Tre errori che fanno anche gli studenti avanzati.',
    tOggi: 'Oggi: presente; una cosa ormai persa: passato',
    tDoppia: 'Avremmo o avremo?',
    tNotizia: 'Nei giornali: non è sicuro',
    trapNote:
      '<strong>Ieri vorrei uscire</strong> è sbagliato: per una cosa passata e non realizzata ci vuole <em lang="it">sarei voluto uscire</em> (o <em lang="it">avrei voluto</em>). <strong>Una m o due?</strong> <em lang="it">Avremmo</em> (condizionale) e <em lang="it">avremo</em> (futuro) si pronunciano diversi: la doppia si sente. E nei telegiornali <strong>il ministro avrebbe dato le dimissioni</strong> non è un’ipotesi: vuol dire «pare che le abbia date, ma non è confermato».',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · La forma',
    part1P: 'Scrivi il verbo al condizionale passato.',
    part2H3: 'Parte 2 · Presente o passato?',
    part2P: 'Scrivi il verbo al condizionale presente o al condizionale passato.',
    part3H3: 'Parte 3 · La gita al lago',
    part3P: 'Una storia: scrivi il verbo al condizionale passato.',
  },
};
