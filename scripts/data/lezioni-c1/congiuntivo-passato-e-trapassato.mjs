// Lezione C1 «Il congiuntivo passato e trapassato: abbia fatto, avessi fatto» (2026-11-17): struttura, materiale
// italiano e testi. Le spiegazioni tradotte stanno in congiuntivo-passato-e-trapassato-i18n.mjs.
//
// Martin il 2026-11-17: «manca il congiuntivo trapassato vero?». C'erano solo poche righe nella lezione sul
// congiuntivo imperfetto. I due tempi composti stanno insieme perché si sceglie fra loro con la concordanza:
// penso che sia partito / pensavo che fosse partito. Qui: quando si usano, la forma del passato, la forma del
// trapassato, la concordanza dei tempi (prima, nello stesso momento, dopo), se / come se / magari, le trappole.
// Nell'indice C1 sta dopo «Il congiuntivo imperfetto»; il pulsante finale porta alla forma passiva. Confronto
// ed errori per lingua in confronti-condizionale-congiuntivo.mjs.

export default {
  slug: 'congiuntivo-passato-e-trapassato',
  level: 'c1',
  next: 'forma-passiva',
  after: 'congiuntivo-imperfetto',
  minutes: 25,
  hero: { src: 'grammatica/congiuntivo-passato-e-trapassato-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'the-italian-congiuntivo-passato-and-trapassato',
    es: 'el-congiuntivo-passato-y-trapassato-en-italiano',
    fr: 'le-congiuntivo-passato-et-trapassato-en-italien',
    cs: 'congiuntivo-passato-a-trapassato-v-italstine',
    pl: 'congiuntivo-passato-i-trapassato-po-wlosku',
    tr: 'italyanca-congiuntivo-passato-ve-trapassato',
    de: 'congiuntivo-passato-und-trapassato-im-italienischen',
    ja: 'イタリア語の接続法過去と大過去',
  },
  nav: [
    ['quando', 'Quando usarlo'],
    ['passato', 'Il passato: abbia fatto'],
    ['trapassato', 'Il trapassato: avessi fatto'],
    ['concordanza', 'Concordanza dei tempi'],
    ['se', 'Se, come se, magari'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
    [L.qPassato, 'Penso che Luca sia già partito.'],
    [L.qTrapassato, 'Pensavo che Luca fosse già partito.'],
    [L.qSe, 'Se fossi partito prima, sarei arrivato in tempo.'],
    [L.qMagari, 'Magari avessi studiato di più!'],
  ])}<p class="mini-note">${L.quandoNote.replace('{{PRESENTE}}', h.href('congiuntivo-presente', 'b2')).replace('{{IMPERFETTO}}', h.href('congiuntivo-imperfetto', 'c1'))}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.passH2}</h2><p>${L.passP}</p>${h.table(
      ['Persona', 'Ausiliare avere', 'Ausiliare essere'],
      [
        ['che io', 'abbia mangiato', 'sia partito · partita'],
        ['che tu', 'abbia mangiato', 'sia partito · partita'],
        ['che lui · lei', 'abbia mangiato', 'sia partito · partita'],
        ['che noi', 'abbiamo mangiato', 'siamo partiti · partite'],
        ['che voi', 'abbiate mangiato', 'siate partiti · partite'],
        ['che loro', 'abbiano mangiato', 'siano partiti · partite'],
      ]
    )}${h.examples([
      [L.pOpinione, 'Credo che abbiate fatto bene.'],
      [L.pSperanza, 'Spero che il viaggio sia andato bene.'],
      [L.pSentimento, 'Mi dispiace che tu non sia potuto venire.'],
      [L.pBenche, 'Benché abbia studiato poco, ha passato l’esame.'],
    ])}<p class="mini-note">${L.passNote}</p></article>
    <article class="lesson-box" id="trapassato"><h2>${L.tpH2}</h2><p>${L.tpP}</p>${h.table(
      ['Persona', 'Ausiliare avere', 'Ausiliare essere'],
      [
        ['che io', 'avessi mangiato', 'fossi partito · partita'],
        ['che tu', 'avessi mangiato', 'fossi partito · partita'],
        ['che lui · lei', 'avesse mangiato', 'fosse partito · partita'],
        ['che noi', 'avessimo mangiato', 'fossimo partiti · partite'],
        ['che voi', 'aveste mangiato', 'foste partiti · partite'],
        ['che loro', 'avessero mangiato', 'fossero partiti · partite'],
      ]
    )}${h.examples([
      [L.tpOpinione, 'Credevo che avessi già mangiato.'],
      [L.tpSentimento, 'Ero contento che fossero arrivati tutti.'],
      [L.tpBenche, 'Benché avesse dormito poco, era di ottimo umore.'],
    ])}<p class="mini-note">${L.tpNote}</p></article>
    <article class="lesson-box" id="concordanza"><h2>${L.concH2}</h2><p>${L.concP}</p>${h.table(
      ['Frase al presente', 'Frase al passato'],
      [
        ['Penso che Marco parta oggi.', 'Pensavo che Marco partisse quel giorno.'],
        ['Penso che Marco sia partito ieri.', 'Pensavo che Marco fosse partito il giorno prima.'],
        ['Penso che Marco partirà domani.', 'Pensavo che Marco sarebbe partito il giorno dopo.'],
      ]
    )}${h.examples([
      [L.cStesso, 'Penso che parta. · Pensavo che partisse.'],
      [L.cPrima, 'Penso che sia partito. · Pensavo che fosse partito.'],
      [L.cDopo, 'Penso che partirà. · Pensavo che sarebbe partito.'],
    ])}<p class="mini-note">${L.concNote.replace('{{CONDPASS}}', h.href('condizionale-passato', 'b2'))}</p></article>
    <article class="lesson-box" id="se"><h2>${L.seH2}</h2><p>${L.seP}</p>${h.examples([
      [L.sSe, 'Se me l’avessi detto, sarei venuto.'],
      [L.sMisto, 'Se avessi studiato, adesso parlerei meglio.'],
      [L.sCome, 'Mi guardava come se non mi avesse mai visto.'],
      [L.sMagari, 'Magari fossi rimasto a casa! · Se solo l’avessi saputo!'],
    ])}<p class="mini-note">${L.seNote.replace('{{IPOTETICO}}', h.href('periodo-ipotetico', 'b2'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trH2}</h2><p>${L.trP}</p>${h.examples([
      [L.tSapere, 'So che è partito. · Penso che sia partito.'],
      [L.tTempo, 'Spero che tu abbia dormito bene. · Speravo che tu avessi dormito bene.'],
      [L.tSoggetto, 'Credeva che io avessi capito. · Credeva che tu avessi capito.'],
    ])}<p class="mini-note">${L.trNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Penso che Marco è già partito.', 'Penso che Marco sia già partito.'],
      ['Pensavo che Marco sia già partito.', 'Pensavo che Marco fosse già partito.'],
      ['Se avrei saputo, sarei venuto.', 'Se avessi saputo, sarei venuto.'],
      ['Spero che abbiate arrivati bene.', 'Spero che siate arrivati bene.'],
      ['Magari avrei studiato di più!', 'Magari avessi studiato di più!'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Penso che Luca ___ ragione. (avere)', a: 'abbia avuto', hint: 'Abbia + avuto: anche avere vuole avere.' },
        { q: 'Spero che tu ___ bene. (dormire)', a: 'abbia dormito', hint: 'Che tu abbia + dormito.' },
        { q: 'Credo che Anna ___ ieri. (partire)', a: 'sia partita', hint: 'Partire vuole essere; Anna → partita.' },
        { q: 'Mi sembra che voi ___ molto. (lavorare)', a: 'abbiate lavorato', hint: 'Che voi abbiate + lavorato.' },
        {
          q: 'È possibile che loro ___ l’autobus. (perdere)',
          a: 'abbiano perso',
          alt: 'abbiano perduto',
          hint: 'Participio irregolare: perso.',
        },
        {
          q: 'Sono contento che tu ___ . (venire)',
          a: 'sia venuto',
          alt: 'sia venuta',
          hint: 'Venire vuole essere: sia venuto, sia venuta.',
        },
        {
          q: 'Immagino che i ragazzi ___ tardi. (tornare)',
          a: 'siano tornati',
          alt: 'siano tornate',
          hint: 'Tornare vuole essere: siano tornati.',
        },
        { q: 'Non credo che Paolo ___ la verità. (dire)', a: 'abbia detto', hint: 'Participio irregolare: detto.' },
        {
          q: 'Benché ___ poco, ho passato l’esame. (studiare, io)',
          a: 'abbia studiato',
          hint: 'Dopo benché ci vuole il congiuntivo: abbia studiato.',
        },
        {
          q: 'Peccato che voi ___ alla festa. (annoiarsi)',
          a: 'vi siate annoiati',
          alt: 'vi siate annoiate',
          hint: 'Riflessivo, quindi essere: vi siate annoiati.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Pensavo che Luca ___ . (partire)', a: 'fosse partito', hint: 'Partire vuole essere: fosse partito.' },
      { q: 'Credevo che tu ___ la lettera. (leggere)', a: 'avessi letto', hint: 'Participio irregolare: letto.' },
      {
        q: 'Speravo che voi ___ in tempo. (arrivare)',
        a: 'foste arrivati',
        alt: 'foste arrivate',
        hint: 'Che voi foste + arrivati.',
      },
      {
        q: 'Era strano che nessuno ___ niente. (sentire)',
        a: 'avesse sentito',
        hint: 'Nessuno è singolare: avesse sentito.',
      },
      {
        q: 'Non sapevo che Marta ___ a Parigi. (vivere)',
        a: 'avesse vissuto',
        alt: 'fosse vissuta',
        hint: 'Vivere va con avere (e anche con essere): avesse vissuto.',
      },
      { q: 'Mi sembrava che loro ___ . (capire)', a: 'avessero capito', hint: 'Che loro avessero + capito.' },
      {
        q: 'Benché ___ tutta la notte, Sara era stanchissima. (dormire)',
        a: 'avesse dormito',
        hint: 'Benché, nel passato, prima di quel momento: avesse dormito.',
      },
      {
        q: 'Se ___ prima, avremmo preso il treno. (uscire, noi)',
        a: 'fossimo usciti',
        alt: 'fossimo uscite',
        hint: 'Ipotesi irreale nel passato: fossimo usciti.',
      },
      {
        q: 'Parlava come se ___ tutto. (vedere, lui)',
        a: 'avesse visto',
        alt: 'avesse veduto',
        hint: 'Come se + congiuntivo trapassato: avesse visto.',
      },
      {
        q: 'Magari ___ quella casa! (comprare, noi)',
        a: 'avessimo comprato',
        hint: 'Un rimpianto sul passato: magari avessimo comprato.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Penso che Giulia ___ adesso. (lavorare)', a: 'lavori', hint: 'Presente, nello stesso momento: lavori.' },
      {
        q: 'Penso che Giulia ___ ieri. (lavorare)',
        a: 'abbia lavorato',
        hint: 'Presente, ma il fatto è prima: abbia lavorato.',
      },
      {
        q: 'Pensavo che Giulia ___ quel giorno. (lavorare)',
        a: 'lavorasse',
        hint: 'Passato, nello stesso momento: lavorasse.',
      },
      {
        q: 'Pensavo che Giulia ___ il giorno prima. (lavorare)',
        a: 'avesse lavorato',
        hint: 'Passato, e il fatto è prima: avesse lavorato.',
      },
      {
        q: 'Spero che ieri i bambini ___ bene. (dormire)',
        a: 'abbiano dormito',
        hint: 'Spero (presente) + ieri (prima): abbiano dormito.',
      },
      {
        q: 'Quando siamo arrivati, temevo che il film ___ da un pezzo. (cominciare)',
        a: 'fosse cominciato',
        alt: 'fosse iniziato|avesse cominciato',
        hint: 'Temevo (passato) + prima: fosse cominciato.',
      },
      {
        q: 'È strano che Marco non mi ___ ieri. (chiamare)',
        a: 'abbia chiamato',
        hint: 'È strano (presente) + ieri (prima): abbia chiamato.',
      },
      {
        q: 'Era strano che Marco non mi ___ la settimana prima. (chiamare)',
        a: 'avesse chiamato',
        hint: 'Era strano (passato) + prima: avesse chiamato.',
      },
      { q: 'Mi dispiace che tu ___ male adesso. (stare)', a: 'stia', hint: 'Presente, nello stesso momento: stia.' },
      {
        q: 'Avrei voluto che tu ___ con noi a Napoli l’estate scorsa. (venire)',
        a: 'fossi venuto',
        alt: 'fossi venuta|venissi',
        hint: 'Avrei voluto (condizionale passato) + una cosa che non è successa: fossi venuto.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Ciao! Pensavo che fossi già partita per le vacanze.'],
      ['Studente', 'No, parto domani. Ma credo che Marco sia partito ieri.'],
      ['Martin', 'Davvero? Magari me l’avesse detto: gli avrei prestato la mia valigia grande.'],
      ['Studente', 'Mi sembra che ne abbia comprata una nuova. Ne parlava come se avesse vinto alla lotteria!'],
      ['Martin', 'Tipico di Marco. Allora buon viaggio anche a te!'],
    ])}</article>`,
  it: {
    h1: 'Il congiuntivo passato e trapassato: abbia fatto, avessi fatto',
    card: 'Penso che sia partito, pensavo che fosse partito, se l’avessi saputo, magari fossi venuto: le forme e la concordanza dei tempi.',
    lead: 'Penso che Luca sia partito, pensavo che Luca fosse partito: il congiuntivo passato e il congiuntivo trapassato raccontano un fatto successo prima del verbo principale. Quando si usano, le due forme (abbia fatto, avessi fatto), la concordanza dei tempi, il trapassato dopo se, come se e magari, e le trappole. Con 30 esercizi.',
    description:
      'Il congiuntivo passato e il congiuntivo trapassato in italiano: la forma con abbia e sia, avessi e fossi, la concordanza dei tempi (penso che sia partito, pensavo che fosse partito), se, come se, magari, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Una lettera scritta a mano e la sua busta su un tavolo di legno accanto a una finestra; fuori, i tetti sfocati di un paese italiano',
    quandoH2: 'Quando si usano',
    quandoP:
      'Il congiuntivo ha due tempi composti. Servono dopo gli stessi verbi ed espressioni del congiuntivo presente e imperfetto (<em lang="it">penso che, spero che, è possibile che, benché</em>…), quando il fatto della frase con <em lang="it">che</em> è <strong>successo prima</strong>.',
    qPassato: 'Verbo principale al presente: congiuntivo passato',
    qTrapassato: 'Verbo principale al passato: congiuntivo trapassato',
    qSe: 'Un’ipotesi irreale nel passato',
    qMagari: 'Un rimpianto',
    quandoNote:
      'I verbi che vogliono il congiuntivo li conosci già dal <a href="{{PRESENTE}}">congiuntivo presente</a> e dal <a href="{{IMPERFETTO}}">congiuntivo imperfetto</a>. Qui cambia solo una cosa: <strong>il momento</strong>. <em lang="it">Penso che Luca parta</em> (adesso o dopo), <em lang="it">penso che Luca sia partito</em> (prima).',
    passH2: 'Il congiuntivo passato: abbia fatto',
    passP:
      'Si forma con il <strong>congiuntivo presente di avere o essere</strong> (<strong>abbia, abbiamo, abbiate, abbiano</strong> oppure <strong>sia, siamo, siate, siano</strong>) + il participio passato. Si usa quando il verbo principale è al presente.',
    pOpinione: 'Un’opinione',
    pSperanza: 'Una speranza',
    pSentimento: 'Un sentimento',
    pBenche: 'Dopo benché, sebbene, nonostante',
    passNote:
      '<strong>Io, tu, lui e lei hanno la stessa forma</strong> (<em lang="it">abbia mangiato, sia partito</em>): quando non è chiaro, metti il soggetto, <em lang="it">credo che tu abbia sbagliato</em>. Essere o avere, e gli accordi del participio, seguono le regole del passato prossimo: <em lang="it">è partita → che sia partita</em>.',
    tpH2: 'Il congiuntivo trapassato: avessi fatto',
    tpP: 'Si forma con il <strong>congiuntivo imperfetto di avere o essere</strong> (<strong>avessi, avesse, avessimo…</strong> oppure <strong>fossi, fosse, fossimo…</strong>) + il participio passato. Si usa quando il verbo principale è al passato o al condizionale.',
    tpOpinione: 'Un’opinione nel passato',
    tpSentimento: 'Un sentimento nel passato',
    tpBenche: 'Dopo benché, nel passato',
    tpNote:
      '<strong>Io e tu hanno la stessa forma</strong> (<em lang="it">avessi mangiato, fossi partito</em>): anche qui il soggetto aiuta. Attenzione a <em lang="it">aveste</em> e <em lang="it">foste</em> (voi): sono senza <em lang="it">-ss-</em>, come al congiuntivo imperfetto.',
    concH2: 'La concordanza dei tempi',
    concP:
      'Nella frase con <em lang="it">che</em> il tempo dipende da due cose: il tempo del verbo principale (presente o passato) e il momento del fatto (nello stesso momento, prima o dopo).',
    cStesso: 'Nello stesso momento: presente o imperfetto',
    cPrima: 'Prima: passato o trapassato',
    cDopo: 'Dopo: futuro o condizionale passato',
    concNote:
      'Conta come passato ogni tempo passato del verbo principale: <em lang="it">pensavo, ho pensato, avevo pensato che fosse partito</em>. Anche il condizionale vuole l’imperfetto o il trapassato: <em lang="it">vorrei che tu venissi</em>, <em lang="it">avrei voluto che tu fossi venuto</em>. Per il fatto successo dopo, nel passato, si usa il <a href="{{CONDPASS}}">condizionale passato</a>: <em lang="it">pensavo che sarebbe partito</em>.',
    seH2: 'Se, come se, magari',
    seP: 'Il congiuntivo trapassato si usa anche senza un verbo di opinione, in tre costruzioni molto comuni.',
    sSe: 'Se: un’ipotesi irreale nel passato',
    sMisto: 'Il periodo ipotetico misto',
    sCome: 'Come se',
    sMagari: 'Magari, se solo: un rimpianto',
    seNote:
      'Dopo <strong>se</strong> non si usa mai il condizionale: <em lang="it">se avessi saputo</em>, non <em lang="it">se avrei saputo</em>. Il condizionale va nell’altra metà della frase (trovi tutti i tipi nel <a href="{{IPOTETICO}}">periodo ipotetico</a>). Con <strong>magari</strong> e <strong>se solo</strong> la frase resta a metà: è un desiderio che ormai non si può realizzare.',
    trH2: 'Le trappole',
    trP: 'Tre errori che fanno anche gli studenti avanzati.',
    tSapere: 'Una certezza o un’opinione?',
    tTempo: 'Il verbo principale decide',
    tSoggetto: 'Io o tu? Metti il soggetto',
    trNote:
      'Con <strong>so che, è vero che, sono sicuro che</strong> ci vuole l’indicativo, perché è una certezza: <em lang="it">so che è partito</em>. Con <strong>penso che, credo che, mi sembra che</strong> ci vuole il congiuntivo. Nel parlato molti italiani dicono anche <em lang="it">penso che è partito</em>, ma nella lingua scritta e curata è un errore. E ricorda: <strong>il presente vuole il passato, il passato vuole il trapassato</strong>; <em lang="it">pensavo che sia partito</em> non va bene.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il congiuntivo passato',
    part1P: 'Scrivi il verbo al congiuntivo passato.',
    part2H3: 'Parte 2 · Il congiuntivo trapassato',
    part2P: 'Scrivi il verbo al congiuntivo trapassato.',
    part3H3: 'Parte 3 · Quale tempo?',
    part3P: 'Scrivi il verbo al congiuntivo presente, imperfetto, passato o trapassato.',
  },
};
