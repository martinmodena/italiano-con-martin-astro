// Lezione B2 «Il congiuntivo presente» (rifatta il 2026-11-27 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in congiuntivo-presente-i18n.mjs.
//
// Diciannovesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto
// era scritta a mano: una tabella dei regolari, quattro usi, cinque irregolari e 10 esercizi. Ora: gli usi, le forme
// (anche -isc-), il trucco dalla prima persona del presente (vengo → venga), gli irregolari, dopo verbi ed
// espressioni (penso, voglio, spero, mi dispiace, è importante, bisogna), dopo le congiunzioni (benché, perché finale,
// affinché, prima che, senza che, a meno che), congiuntivo o indicativo (so che è / penso che sia; quando + futuro),
// lo stesso soggetto (spero di venire / spero che tu venga), le trappole e 30 esercizi. Prima non aveva né il
// confronto con la lingua né gli errori per lingua: stanno in confronti-congiuntivo-presente.mjs. Nell’indice B2 la
// tessera resta dov’era; il pulsante finale porta al condizionale passato.

export default {
  slug: 'congiuntivo-presente',
  level: 'b2',
  next: 'condizionale-passato',
  minutes: 25,
  hero: { src: 'grammatica/congiuntivo-presente-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-congiuntivo-presente',
    es: 'el-congiuntivo-presente-italiano',
    fr: 'le-congiuntivo-presente-italien',
    cs: 'italsky-congiuntivo-presente',
    pl: 'wloski-congiuntivo-presente',
    tr: 'italyanca-congiuntivo-presente',
    de: 'das-italienische-congiuntivo-presente',
    ja: 'イタリア語の-congiuntivo-presente',
  },
  nav: [
    ['usi', 'Usi'],
    ['forme', 'Forme'],
    ['trucco', 'Come funziona'],
    ['irregolari', 'Irregolari'],
    ['verbi', 'Dopo verbi ed espressioni'],
    ['congiunzioni', 'Dopo le congiunzioni'],
    ['indicativo', 'Congiuntivo o indicativo?'],
    ['soggetto', 'Stesso soggetto'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="usi"><h2>${L.usiH2}</h2><p>${L.usiP}</p>${h.examples([
    [L.uOpinione, 'Penso che sia una buona idea.'],
    [L.uDesiderio, 'Spero che domani ci sia il sole. · Voglio che tu venga.'],
    [L.uEmozione, 'Sono contento che tu sia qui.'],
    [L.uNecessita, 'È importante che tutti capiscano.'],
  ])}<p class="mini-note">${L.usiNote}</p></article>
    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
      ['Persona', '=parlare', '=prendere', '=partire', '=finire'],
      [
        ['che io', 'parli', 'prenda', 'parta', 'finisca'],
        ['che tu', 'parli', 'prenda', 'parta', 'finisca'],
        ['che lui · lei · Lei', 'parli', 'prenda', 'parta', 'finisca'],
        ['che noi', 'parliamo', 'prendiamo', 'partiamo', 'finiamo'],
        ['che voi', 'parliate', 'prendiate', 'partiate', 'finiate'],
        ['che loro', 'parlino', 'prendano', 'partano', 'finiscano'],
      ]
    )}<p class="mini-note">${L.formeNote}</p></article>
    <article class="lesson-box" id="trucco"><h2>${L.truccoH2}</h2><p>${L.truccoP}</p>${h.examples([
      [L.tIo, 'vengo → che io venga · faccio → che io faccia · dico → che io dica'],
      [L.tNoi, 'veniamo → che noi veniamo · facciamo → che noi facciamo'],
      [L.tVoi, 'veniamo → che voi veniate · diciamo → che voi diciate'],
      [L.tLoro, 'venga → che loro vengano · faccia → che loro facciano'],
    ])}<p class="mini-note">${L.truccoNote.replace('{{IRREGOLARI}}', h.href('presente-verbi-irregolari', 'a1'))}</p></article>
    <article class="lesson-box" id="irregolari"><h2>${L.irrH2}</h2><p>${L.irrP}</p>${h.table(
      ['Infinito', '=io · tu · lui', '=noi', '=voi', '=loro'],
      [
        ['essere', 'sia', 'siamo', 'siate', 'siano'],
        ['avere', 'abbia', 'abbiamo', 'abbiate', 'abbiano'],
        ['sapere', 'sappia', 'sappiamo', 'sappiate', 'sappiano'],
        ['dare', 'dia', 'diamo', 'diate', 'diano'],
        ['stare', 'stia', 'stiamo', 'stiate', 'stiano'],
        ['andare', 'vada', 'andiamo', 'andiate', 'vadano'],
        ['fare', 'faccia', 'facciamo', 'facciate', 'facciano'],
        ['venire', 'venga', 'veniamo', 'veniate', 'vengano'],
        ['dire', 'dica', 'diciamo', 'diciate', 'dicano'],
        ['potere', 'possa', 'possiamo', 'possiate', 'possano'],
        ['volere', 'voglia', 'vogliamo', 'vogliate', 'vogliano'],
        ['dovere', 'debba', 'dobbiamo', 'dobbiate', 'debbano'],
        ['uscire', 'esca', 'usciamo', 'usciate', 'escano'],
      ]
    )}<p class="mini-note">${L.irrNote}</p></article>
    <article class="lesson-box" id="verbi"><h2>${L.verbiH2}</h2><p>${L.verbiP}</p>${h.examples([
      [L.vOpinione, 'Penso che · Credo che · Mi sembra che · Non sono sicuro che'],
      [L.vVolonta, 'Voglio che · Preferisco che · Spero che · Lascio che'],
      [L.vEmozione, 'Sono contento che · Mi dispiace che · Ho paura che'],
      [L.vImpersonali, 'È importante che · È meglio che · Bisogna che · È possibile che'],
    ])}<p class="mini-note">${L.verbiNote}</p></article>
    <article class="lesson-box" id="congiunzioni"><h2>${L.congH2}</h2><p>${L.congP}</p>${h.examples([
      [L.cBenche, 'Benché sia tardi, restiamo ancora un po’.'],
      [L.cPerche, 'Ti presto il libro perché tu lo legga.'],
      [L.cPrima, 'Torniamo a casa prima che cominci a piovere.'],
      [L.cSenza, 'Esco senza che mi vedano.'],
      [L.cAMeno, 'Vengo, a meno che non piova.'],
    ])}<p class="mini-note">${L.congNote.replace('{{CONNETTIVI}}', h.href('connettivi', 'b1'))}</p></article>
    <article class="lesson-box" id="indicativo"><h2>${L.indH2}</h2><p>${L.indP}</p>${h.examples([
      [L.iCerto, 'So che è vero. · Sono sicuro che viene.'],
      [L.iDubbio, 'Penso che sia vero. · Non so se venga.'],
      [L.iSecondo, 'Secondo me è vero. · Per me ha ragione.'],
      [L.iQuando, 'Quando arrivi, chiamami. · Quando sarò grande…'],
      [L.iPerche, 'Non vengo perché sono stanco. · Te lo dico perché tu lo sappia.'],
    ])}<p class="mini-note">${L.indNote}</p></article>
    <article class="lesson-box" id="soggetto"><h2>${L.soggH2}</h2><p>${L.soggP}</p>${h.examples([
      [L.sStesso, 'Spero di venire. · Penso di avere ragione.'],
      [L.sDiverso, 'Spero che tu venga. · Penso che tu abbia ragione.'],
      [L.sVoglio, 'Voglio andare. · Voglio che tu vada.'],
    ])}<p class="mini-note">${L.soggNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tUguali, 'che io sia, che tu sia, che lui sia → che tu sia'],
      [L.tInvertite, 'parlare → parli · prendere → prenda (le vocali si scambiano)'],
      [L.tParlato, 'Penso che è vero. (parlato) · Penso che sia vero. (corretto)'],
      [L.tNoiPres, 'che noi andiamo (uguale al presente)'],
    ])}<p class="mini-note">${L.trapNote.replace('{{IMPERFETTO}}', h.href('congiuntivo-imperfetto', 'c1')).replace('{{PASSATO}}', h.href('congiuntivo-passato-e-trapassato', 'c1'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Penso che lui è bravo.', 'Penso che lui sia bravo.'],
      ['Spero che tu vieni.', 'Spero che tu venga.'],
      ['È importante che voi parlate.', 'È importante che voi parliate.'],
      ['Penso che ho ragione.', 'Penso di avere ragione.'],
      ['So che sia vero.', 'So che è vero.'],
      ['Benché è tardi, resto.', 'Benché sia tardi, resto.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Penso che Marco ___ simpatico. (essere)', a: 'sia', hint: 'Essere: che io, tu, lui sia.' },
        { q: 'Spero che tu ___ tempo stasera. (avere)', a: 'abbia', hint: 'Avere: che tu abbia.' },
        { q: 'Credo che Anna ___ bene l’italiano. (parlare)', a: 'parli', hint: 'Verbi in -are: -i. Che lei parli.' },
        { q: 'È meglio che noi ___ il treno. (prendere)', a: 'prendiamo', hint: 'Noi è uguale al presente: prendiamo.' },
        { q: 'È necessario che voi ___ presto. (partire)', a: 'partiate', hint: 'Voi: -iate. Che voi partiate.' },
        { q: 'Voglio che loro ___ i compiti. (finire)', a: 'finiscano', hint: 'Finire ha -isc-: che loro finiscano.' },
        { q: 'Mi sembra che Luca ___ male. (stare)', a: 'stia', hint: 'Stare: che lui stia.' },
        { q: 'Spero che Paolo ___ alla festa. (venire)', a: 'venga', hint: 'Vengo → che lui venga.' },
        { q: 'Bisogna che tu ___ la verità. (dire)', a: 'dica', hint: 'Dico → che tu dica.' },
        { q: 'Non credo che loro ___ venire. (potere)', a: 'possano', hint: 'Potere: che loro possano.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'So che Marco ___ a casa. (essere)', a: 'è', alt: 'e', hint: 'Sapere esprime certezza: indicativo, è.' },
      { q: 'Penso che Marco ___ a casa. (essere)', a: 'sia', hint: 'Pensare esprime un’opinione: congiuntivo, sia.' },
      { q: 'Sono sicuro che tu ___ ragione. (avere)', a: 'hai', hint: 'Sono sicuro: certezza, indicativo.' },
      { q: 'Dubito che tu ___ ragione. (avere)', a: 'abbia', hint: 'Dubitare: congiuntivo, abbia.' },
      { q: 'È vero che Anna ___ in Spagna. (vivere)', a: 'vive', hint: 'È vero che: un fatto, indicativo.' },
      { q: 'È possibile che Anna ___ in Spagna. (vivere)', a: 'viva', hint: 'È possibile che: congiuntivo, viva.' },
      { q: 'Ti presto il libro perché tu lo ___. (leggere)', a: 'legga', hint: 'Perché = affinché (scopo): congiuntivo.' },
      { q: 'Non vengo perché ___ stanco. (essere, io)', a: 'sono', hint: 'Perché = la causa: indicativo.' },
      { q: 'Torniamo prima che ___ a piovere. (cominciare)', a: 'cominci', hint: 'Prima che vuole il congiuntivo: cominci.' },
      { q: 'Benché ___ tardi, restiamo ancora un po’. (essere)', a: 'sia', hint: 'Benché vuole il congiuntivo: sia.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Spero ___ venire domani. (io spero, io vengo)', a: 'di', hint: 'Stesso soggetto: di + infinito.' },
      { q: 'Spero che tu ___ domani. (venire)', a: 'venga', hint: 'Soggetti diversi: che + congiuntivo.' },
      { q: 'Voglio ___ in Italia. (io voglio, io vado)', a: 'andare', hint: 'Stesso soggetto: volere + infinito.' },
      { q: 'Voglio che tu ___ in Italia con me. (andare)', a: 'vada', hint: 'Andare: che tu vada.' },
      { q: 'Penso ___ avere ragione. (io penso, io ho ragione)', a: 'di', hint: 'Stesso soggetto: penso di avere.' },
      { q: 'Mi dispiace che voi non ___ venire. (potere)', a: 'possiate', hint: 'Potere: che voi possiate.' },
      { q: 'Ho paura che ___ troppo tardi. (essere)', a: 'sia', hint: 'Avere paura che: congiuntivo, sia.' },
      { q: 'È importante che tutti ___ le regole. (sapere)', a: 'sappiano', hint: 'Sapere: che loro sappiano.' },
      { q: 'Lavoro molto affinché i miei figli ___ studiare. (potere)', a: 'possano', hint: 'Affinché: congiuntivo, possano.' },
      { q: 'Che cosa vuoi che ti ___? (dire, io)', a: 'dica', hint: 'Vuoi che io ti dica.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Piove da tre giorni. Speri che domani ci sia il sole?'],
      ['Martin', 'Spero di sì, ma credo che piova ancora un po’.'],
      ['Studente', 'Peccato! Voglio che tu venga al mare con noi.'],
      ['Martin', 'Vengo volentieri, a meno che non faccia freddo. È importante che portiate l’ombrello, però!'],
      ['Studente', 'Va bene. Benché sia autunno, sono sicuro che ci divertiremo.'],
    ])}</article>`,
  it: {
    h1: 'Il congiuntivo presente',
    card: 'Penso che sia, spero che venga: le forme, il trucco dal presente, gli irregolari, dopo verbi e congiunzioni, congiuntivo o indicativo, di + infinito e 30 esercizi.',
    lead: 'Piove, ma spero che domani ci sia il sole. Il congiuntivo presente si usa per opinioni, desideri, emozioni e necessità: penso che sia, voglio che tu venga, è importante che capiscano. Le forme, il trucco per costruirlo dal presente (vengo → venga), gli irregolari, dopo quali verbi, espressioni e congiunzioni (benché, perché, prima che), quando invece serve l’indicativo, lo stesso soggetto (spero di venire) e le trappole. Con 30 esercizi.',
    description:
      'Il congiuntivo presente in italiano: penso che sia, spero che venga, è importante che. Le forme regolari (parli, prenda, parta, finisca), il trucco dalla prima persona del presente, gli irregolari (sia, abbia, vada, faccia, venga, dica, possa), dopo verbi, espressioni e congiunzioni (benché, perché, prima che), congiuntivo o indicativo, spero di venire o spero che tu venga, gli errori tipici e 30 esercizi.',
    heroAlt: 'Un geranio rosso davanti a una finestra bagnata dalla pioggia; fuori i tetti di una città e le nuvole che si aprono sul cielo azzurro',
    usiH2: 'Quando si usa',
    usiP: 'Il congiuntivo è il modo delle cose <strong>non certe</strong> o <strong>viste dall’interno</strong>: opinioni, desideri, emozioni, necessità. Si trova quasi sempre dopo <strong>che</strong>, in una frase che dipende da un’altra.',
    uOpinione: 'Opinione',
    uDesiderio: 'Desiderio e volontà',
    uEmozione: 'Emozione',
    uNecessita: 'Necessità e giudizio',
    usiNote:
      'Guarda la foto: piove, ma <em lang="it">spero che domani ci sia il sole</em>. Il sole di domani non è un fatto, è una speranza: per questo si usa il congiuntivo. Il congiuntivo non dipende dalla parola <em lang="it">che</em>, ma dal verbo che viene prima: <em lang="it">so che c’è il sole</em> (certezza) vuole l’indicativo.',
    formeH2: 'Le forme',
    formeP: 'I verbi regolari scambiano la vocale: <strong>-are</strong> prende la <strong>i</strong>, <strong>-ere</strong> e <strong>-ire</strong> prendono la <strong>a</strong>.',
    formeNote:
      '<em lang="it">Io, tu, lui</em> hanno la stessa forma: per questo spesso si aggiunge il pronome, <em lang="it">che tu parli</em>. <em lang="it">Noi</em> è uguale al presente (<em lang="it">parliamo</em>), <em lang="it">voi</em> finisce sempre in <strong>-iate</strong>. I verbi in <em lang="it">-isc-</em> lo tengono come nel presente: <em lang="it">che io finisca, che loro capiscano</em>, ma <em lang="it">che noi finiamo</em>.',
    truccoH2: 'Il trucco: partire dal presente',
    truccoP: 'Quasi tutti i verbi, anche irregolari, si costruiscono dalla <strong>prima persona del presente</strong>: togli la <em lang="it">-o</em> e aggiungi <em lang="it">-a</em> (o <em lang="it">-i</em> per i verbi in -are).',
    tIo: 'Io, tu, lui: dalla prima persona',
    tNoi: 'Noi: uguale al presente',
    tVoi: 'Voi: dal noi + -iate',
    tLoro: 'Loro: + -no',
    truccoNote:
      '<em lang="it">Vengo → venga, faccio → faccia, dico → dica, esco → esca, bevo → beva, tengo → tenga</em>. Per questo è utile sapere bene <a href="{{IRREGOLARI}}">il presente dei verbi irregolari</a>. Il trucco non vale per sei verbi: <em lang="it">essere, avere, sapere, dare, stare</em> e in parte <em lang="it">andare</em> (vedi la tabella sotto).',
    irrH2: 'Gli irregolari',
    irrP: 'I più importanti. Quasi tutti seguono il trucco; <strong>essere, avere, sapere, dare, stare</strong> vanno imparati a memoria.',
    irrNote:
      '<strong>Sia</strong> e <strong>abbia</strong> sono i più frequenti in assoluto. Attenzione a <em lang="it">andare</em>: <em lang="it">vada, vadano</em>, ma <em lang="it">andiamo, andiate</em>. Per <em lang="it">dovere</em> si sente anche <em lang="it">deva, devano</em>, ma <em lang="it">debba, debbano</em> è la forma più usata.',
    verbiH2: 'Dopo verbi ed espressioni',
    verbiP: 'Il congiuntivo dipende dal verbo o dall’espressione che regge la frase. Questi sono i gruppi più comuni.',
    vOpinione: 'Opinione e dubbio',
    vVolonta: 'Volontà, desiderio, speranza',
    vEmozione: 'Emozioni',
    vImpersonali: 'Espressioni impersonali',
    verbiNote:
      'Opinione: <em lang="it">penso, credo, mi sembra, immagino, dubito, non sono sicuro che</em>. Volontà: <em lang="it">voglio, preferisco, spero, desidero, lascio che</em>. Emozioni: <em lang="it">sono contento, mi dispiace, ho paura, mi sorprende che</em>. Impersonali: <em lang="it">è importante, è meglio, è necessario, è possibile, è probabile, bisogna, basta che</em>.',
    congH2: 'Dopo le congiunzioni',
    congP: 'Alcune congiunzioni vogliono sempre il congiuntivo: per la concessione, lo scopo, il tempo prima e le condizioni.',
    cBenche: 'Benché, sebbene, nonostante',
    cPerche: 'Perché, affinché: lo scopo',
    cPrima: 'Prima che',
    cSenza: 'Senza che',
    cAMeno: 'A meno che (non), purché',
    congNote:
      '<strong>Benché, sebbene, nonostante</strong> = anche se: <em lang="it">benché sia tardi</em> (ma <em lang="it">anche se</em> vuole l’indicativo: <em lang="it">anche se è tardi</em>). <strong>Perché</strong> con il congiuntivo indica lo <strong>scopo</strong> (= affinché). <strong>Prima che</strong> vuole il congiuntivo, <em lang="it">dopo che</em> l’indicativo. Vedi anche <a href="{{CONNETTIVI}}">i connettivi</a>.',
    indH2: 'Congiuntivo o indicativo?',
    indP: 'La regola pratica: <strong>certezza</strong> → indicativo; <strong>opinione, desiderio, dubbio</strong> → congiuntivo.',
    iCerto: 'Certezza: indicativo',
    iDubbio: 'Opinione o dubbio: congiuntivo',
    iSecondo: 'Secondo me, per me: indicativo',
    iQuando: 'Quando: indicativo o futuro',
    iPerche: 'Perché: causa o scopo',
    indNote:
      '<em lang="it">So, sono sicuro, è vero, è chiaro che</em> vogliono l’indicativo. <strong>Secondo me</strong> non regge un <em lang="it">che</em>: <em lang="it">secondo me è vero</em>. Dopo <strong>quando</strong> non si usa mai il congiuntivo: per il futuro si usa il presente o il futuro (<em lang="it">quando arrivi, quando arriverai</em>). Nel parlato si sente spesso <em lang="it">penso che è</em>, ma nello scritto e in un esame è un errore.',
    soggH2: 'Stesso soggetto: di + infinito',
    soggP: 'Se il soggetto delle due frasi è lo <strong>stesso</strong>, non si usa <em lang="it">che</em> + congiuntivo ma <strong>di + infinito</strong> (o l’infinito da solo dopo volere, preferire).',
    sStesso: 'Stesso soggetto: di + infinito',
    sDiverso: 'Soggetti diversi: che + congiuntivo',
    sVoglio: 'Volere, preferire: infinito senza di',
    soggNote:
      '<em lang="it">Io spero + io vengo → spero di venire</em>; <em lang="it">io spero + tu vieni → spero che tu venga</em>. <em lang="it">Penso che io abbia ragione</em> è sbagliato: si dice <strong>penso di avere ragione</strong>. Con <em lang="it">volere, preferire, desiderare</em> l’infinito non vuole <em lang="it">di</em>: <em lang="it">voglio andare</em>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tUguali: 'Io, tu, lui uguali: aggiungi il pronome',
    tInvertite: 'Le vocali si scambiano',
    tParlato: 'Il parlato e lo scritto',
    tNoiPres: 'Noi come il presente',
    trapNote:
      '<em lang="it">Che tu parli</em> sembra il presente di <em lang="it">tu parli</em>, ma <em lang="it">che lui parli</em> no: le vocali si scambiano (<em lang="it">lui parla → che lui parli</em>, <em lang="it">lui prende → che lui prenda</em>). Per il passato si usano <a href="{{PASSATO}}">il congiuntivo passato</a> (<em lang="it">penso che sia venuto</em>) e <a href="{{IMPERFETTO}}">il congiuntivo imperfetto</a> (<em lang="it">pensavo che venisse</em>).',
    exIntro: '30 frasi in tre parti. Scrivi la forma giusta: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Le forme',
    part1P: 'Regolari, -isc- e irregolari: sia, abbia, stia, venga, dica, possano.',
    part2H3: 'Parte 2 · Congiuntivo o indicativo?',
    part2P: 'Certezza o opinione? Perché causa o scopo? E le congiunzioni.',
    part3H3: 'Parte 3 · Stesso soggetto ed espressioni',
    part3P: 'Spero di venire o spero che tu venga? E le espressioni di tutti i giorni.',
  },
};
