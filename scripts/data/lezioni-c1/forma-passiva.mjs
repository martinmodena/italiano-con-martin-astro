// Lezione C1 «La forma passiva» (rifatta il 2026-11-28 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in forma-passiva-i18n.mjs.
//
// Ventesima e ultima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di
// agosto era scritta a mano: una tabella con essere, venire, andare e da, quattro esempi e 10 esercizi. Ora: la regola
// (chi riceve l’azione diventa soggetto, quando si usa), le forme in tutti i tempi, l’accordo del participio, venire
// (solo nei tempi semplici, azione e non stato), andare (necessità; andare perso), da + agente, il si passivante (si
// vendono case), le trappole e 30 esercizi. Prima non aveva né il confronto con la lingua né gli errori per lingua:
// stanno in confronti-forma-passiva.mjs. Tolta la descrizione scritta a mano da seo-boost.mjs. È l’ultima lezione
// dell’indice: il pulsante finale torna all’indice.

export default {
  slug: 'forma-passiva',
  level: 'c1',
  next: null,
  minutes: 25,
  hero: { src: 'grammatica/forma-passiva-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-passive-voice',
    es: 'la-voz-pasiva-en-italiano',
    fr: 'la-voix-passive-en-italien',
    cs: 'trpny-rod-v-italstine',
    pl: 'strona-bierna-po-wlosku',
    tr: 'italyanca-edilgen-yapi',
    de: 'passiv-im-italienischen',
    ja: 'イタリア語の受動態',
  },
  nav: [
    ['regola', 'Regola'],
    ['forme', 'Forme'],
    ['accordo', 'Accordo'],
    ['venire', 'Con venire'],
    ['andare', 'Con andare'],
    ['agente', 'Da + agente'],
    ['si', 'Il si passivante'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rAttiva, 'Migliaia di persone attraversano il ponte ogni giorno.'],
    [L.rPassiva, 'Il ponte è attraversato ogni giorno da migliaia di persone.'],
    [L.rNotizie, 'Il ponte fu costruito cinque secoli fa. · La strada è stata chiusa.'],
  ])}<p class="mini-note">${L.regolaNote}</p></article>
    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
      ['Tempo', 'Attiva', 'Passiva'],
      [
        ['Presente', 'Marco scrive la lettera.', 'La lettera è scritta da Marco.'],
        ['Passato prossimo', 'Marco ha scritto la lettera.', 'La lettera è stata scritta da Marco.'],
        ['Imperfetto', 'Marco scriveva la lettera.', 'La lettera era scritta da Marco.'],
        ['Passato remoto', 'Marco scrisse la lettera.', 'La lettera fu scritta da Marco.'],
        ['Futuro', 'Marco scriverà la lettera.', 'La lettera sarà scritta da Marco.'],
        ['Condizionale', 'Marco scriverebbe la lettera.', 'La lettera sarebbe scritta da Marco.'],
        ['Congiuntivo', 'Penso che Marco scriva la lettera.', 'Penso che la lettera sia scritta da Marco.'],
      ]
    )}<p class="mini-note">${L.formeNote.replace('{{PARTICIPI}}', h.href('participi-passati-irregolari', 'a2'))}</p></article>
    <article class="lesson-box" id="accordo"><h2>${L.accH2}</h2><p>${L.accP}</p>${h.examples([
      [L.aSing, 'Il libro è stato pubblicato. · La lettera è stata scritta.'],
      [L.aPlur, 'I documenti sono stati firmati. · Le case sono state vendute.'],
      [L.aMisto, 'Il tavolo e la sedia sono stati venduti.'],
    ])}<p class="mini-note">${L.accNote}</p></article>
    <article class="lesson-box" id="venire"><h2>${L.venH2}</h2><p>${L.venP}</p>${h.examples([
      [L.vAzione, 'La posta viene consegnata ogni mattina.'],
      [L.vStato, 'La porta è chiusa. · La porta viene chiusa alle otto.'],
      [L.vTempi, 'veniva costruito · verrà approvato · venne scoperto · verrebbe accettato'],
      [L.vNo, 'Il ponte è stato costruito nel 1990. (mai: è venuto costruito)'],
    ])}<p class="mini-note">${L.venNote}</p></article>
    <article class="lesson-box" id="andare"><h2>${L.andH2}</h2><p>${L.andP}</p>${h.examples([
      [L.anObbligo, 'Il modulo va compilato in stampatello. · Le medicine vanno prese dopo i pasti.'],
      [L.anDovere, 'Il modulo va compilato = deve essere compilato.'],
      [L.anPerso, 'I bagagli sono andati persi. · Una giornata andata sprecata.'],
    ])}<p class="mini-note">${L.andNote}</p></article>
    <article class="lesson-box" id="agente"><h2>${L.agH2}</h2><p>${L.agP}</p>${h.examples([
      [L.agDa, 'Il film è stato diretto da Fellini.'],
      [L.agArticolo, 'La legge è stata approvata dal Parlamento. · Il quadro fu dipinto dalla pittrice.'],
      [L.agSenza, 'Il museo è stato chiuso. · I risultati saranno pubblicati domani.'],
    ])}<p class="mini-note">${L.agNote.replace('{{ARTICOLATE}}', h.href('preposizioni-articolate', 'a1'))}</p></article>
    <article class="lesson-box" id="si"><h2>${L.siH2}</h2><p>${L.siP}</p>${h.examples([
      [L.sSing, 'Si affitta appartamento. · In Italia si mangia molta pasta.'],
      [L.sPlur, 'Si vendono biciclette. · Da qui si vedono le montagne.'],
      [L.sCome, 'Come si scrive questa parola? · Come si dice in italiano?'],
      [L.sPassato, 'Si è costruita una nuova scuola. · Si sono vendute molte case.'],
    ])}<p class="mini-note">${L.siNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tDoppio, 'La lettera è stata scritta. (due accordi)'],
      [L.tVenire, 'Viene costruito · È stato costruito (mai: è venuto costruito)'],
      [L.tIndiretto, 'Mi è stato regalato un libro. (mai: sono stato regalato un libro)'],
      [L.tSi, 'Si vendono case. (mai: si vende case)'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['La lettera è stato scritto.', 'La lettera è stata scritta.'],
      ['La casa è venuta costruita.', 'La casa è stata costruita.'],
      ['Il film è stato diretto per Fellini.', 'Il film è stato diretto da Fellini.'],
      ['Il modulo deve compilato.', 'Il modulo va compilato. · Deve essere compilato.'],
      ['Si vende case.', 'Si vendono case.'],
      ['Sono stato regalato un libro.', 'Mi è stato regalato un libro.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'La lettera ___ da Anna. (scrivere, presente)', a: 'è scritta', alt: 'e scritta', hint: 'Essere + participio, accordato con lettera: è scritta.' },
        { q: 'Il libro ___ nel 2020. (pubblicare, passato prossimo)', a: 'è stato pubblicato', alt: 'e stato pubblicato', hint: 'Passato prossimo passivo: è stato + participio.' },
        { q: 'Queste case ___ dai miei nonni. (costruire, passato prossimo)', a: 'sono state costruite', hint: 'Case, femminile plurale: sono state costruite.' },
        { q: 'I risultati ___ domani. (pubblicare, futuro)', a: 'saranno pubblicati', hint: 'Futuro passivo: saranno + participio.' },
        { q: 'La Divina Commedia ___ da Dante. (scrivere, passato remoto)', a: 'fu scritta', hint: 'Passato remoto passivo: fu + participio.' },
        { q: 'Il museo ___ ogni anno da migliaia di turisti. (visitare, presente)', a: 'è visitato', alt: 'e visitato|viene visitato', hint: 'È visitato (o viene visitato).' },
        { q: 'Quando sono arrivato, la cena era già ___. (preparare)', a: 'preparata', hint: 'La cena, femminile: preparata.' },
        { q: 'I documenti ___ firmati ieri dal direttore.', a: 'sono stati', hint: 'Documenti, maschile plurale: sono stati firmati.' },
        { q: 'Penso che la decisione ___ presa troppo in fretta. (congiuntivo passato)', a: 'sia stata', hint: 'Congiuntivo passato passivo: sia stata presa.' },
        { q: 'Senza i soldi, il progetto non ___ approvato. (condizionale)', a: 'sarebbe', alt: 'verrebbe', hint: 'Condizionale passivo: sarebbe approvato.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'La posta ___ consegnata ogni mattina. (venire)', a: 'viene', hint: 'Venire + participio: un’azione che si ripete.' },
      { q: 'Le finestre ___ chiuse alle otto. (venire, presente)', a: 'vengono', hint: 'Finestre, plurale: vengono chiuse.' },
      { q: 'Il modulo ___ compilato in stampatello. (andare)', a: 'va', hint: 'Andare + participio = deve essere: va compilato.' },
      { q: 'Le medicine ___ prese dopo i pasti. (andare)', a: 'vanno', hint: 'Medicine, plurale: vanno prese.' },
      { q: 'Purtroppo i bagagli sono ___ persi.', a: 'andati', hint: 'Andare perso = perdersi: sono andati persi.' },
      { q: 'Il film è stato diretto ___ Fellini.', a: 'da', hint: 'Chi compie l’azione: da + agente.' },
      { q: 'La legge è stata approvata ___ Parlamento.', a: 'dal', hint: 'Da + il = dal.' },
      { q: 'La lettera ___ scritta da Marco domani. (venire, futuro)', a: 'verrà', alt: 'verra', hint: 'Venire al futuro: verrà scritta.' },
      { q: 'Il ponte ___ costruito nel 1990. (passato prossimo)', a: 'è stato', alt: 'e stato', hint: 'Nei tempi composti solo essere: è stato costruito.' },
      { q: 'La scuola ___ chiusa da una settimana: è uno stato.', a: 'è', alt: 'e', hint: 'Per uno stato si usa essere: è chiusa.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'In Italia si ___ molta pasta. (mangiare)', a: 'mangia', hint: 'Molta pasta, singolare: si mangia.' },
      { q: 'Qui si ___ biciclette. (affittare)', a: 'affittano', hint: 'Biciclette, plurale: si affittano.' },
      { q: 'Da questa finestra si ___ le montagne. (vedere)', a: 'vedono', hint: 'Le montagne, plurale: si vedono.' },
      { q: 'Come si ___ questa parola? (scrivere)', a: 'scrive', hint: 'Questa parola, singolare: si scrive.' },
      { q: 'Marco ha scritto la lettera. → La lettera è stata scritta ___ Marco.', a: 'da', hint: 'L’agente con da.' },
      { q: 'Molti turisti visitano Roma. → Roma ___ da molti turisti.', a: 'è visitata', alt: 'e visitata|viene visitata', hint: 'Roma, femminile: è visitata.' },
      { q: 'Il Comune ha chiuso la strada. → La strada ___ dal Comune.', a: 'è stata chiusa', alt: 'e stata chiusa', hint: 'Passato prossimo passivo: è stata chiusa.' },
      { q: 'Bisogna firmare il contratto. → Il contratto ___ firmato.', a: 'va', hint: 'Bisogna = andare + participio: va firmato.' },
      { q: 'Hanno rubato la mia bici! → La mia bici ___ rubata!', a: 'è stata', alt: 'e stata', hint: 'La bici, femminile: è stata rubata.' },
      { q: 'Mi hanno regalato un libro. → ___ è stato regalato un libro.', a: 'mi', hint: 'A me: mi è stato regalato. Il soggetto è il libro.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Che bel ponte! Quando è stato costruito?'],
      ['Martin', 'Fu costruito nel Cinquecento ed è stato restaurato pochi anni fa.'],
      ['Studente', 'È ancora usato dalle macchine?'],
      ['Martin', 'No, nel 2010 è stato chiuso al traffico: oggi viene attraversato solo a piedi o in bici.'],
      ['Studente', 'E quel cartello sul ponte che cosa dice?'],
      ['Martin', 'Che le biciclette vanno portate a mano. Qui si rispettano le regole!'],
    ])}</article>`,
  it: {
    h1: 'La forma passiva',
    card: 'Il ponte fu costruito, la posta viene consegnata, il modulo va compilato: tutti i tempi, l’accordo, venire, andare, da + agente, il si passivante e 30 esercizi.',
    lead: 'Questo ponte fu costruito cinque secoli fa ed è attraversato ogni giorno da migliaia di persone. Con la forma passiva al centro della frase c’è chi riceve l’azione. La regola, le forme in tutti i tempi, l’accordo del participio, venire (la posta viene consegnata), andare (il modulo va compilato), da + agente, il si passivante (si vendono case) e le trappole. Con 30 esercizi.',
    description:
      'La forma passiva in italiano: essere + participio in tutti i tempi (è scritta, è stata scritta, fu scritta, sarà scritta), l’accordo, venire + participio (viene consegnata), andare + participio (va compilato, è andato perso), da + agente, il si passivante (si vendono case), quando usarla, gli errori tipici e 30 esercizi.',
    heroAlt: 'Un vecchio ponte di pietra ad archi su un fiume calmo, tra case gialle e arancioni con le persiane verdi, sotto il cielo azzurro',
    regolaH2: 'La regola',
    regolaP:
      'Nella frase <strong>attiva</strong> il soggetto fa l’azione; nella frase <strong>passiva</strong> il soggetto la <strong>riceve</strong>. La forma base è <strong>essere + participio passato</strong>.',
    rAttiva: 'Attiva: chi fa l’azione',
    rPassiva: 'Passiva: chi la riceve',
    rNotizie: 'Nelle notizie e nei testi formali',
    regolaNote:
      'Guarda la foto: <em lang="it">questo ponte fu costruito cinque secoli fa</em>. Chi l’ha costruito non interessa, interessa il ponte. Il passivo si usa soprattutto quando l’azione o la cosa contano più di chi agisce: nelle notizie (<em lang="it">la strada è stata chiusa</em>), nei testi formali, nelle istruzioni e nei cartelli. Solo i verbi con un complemento oggetto (transitivi) possono diventare passivi.',
    formeH2: 'Le forme',
    formeP: 'Il passivo si forma con <strong>essere</strong> allo stesso tempo del verbo attivo + il <strong>participio passato</strong>.',
    formeNote:
      'Il tempo è quello di <em lang="it">essere</em>: <em lang="it">scrive → è scritta</em>, <em lang="it">ha scritto → è stata scritta</em>, <em lang="it">scrisse → fu scritta</em>. Nei libri di storia e nelle notizie è molto comune il passato remoto: <em lang="it">fu costruito, venne scoperto</em>. Molti participi sono irregolari: vedi <a href="{{PARTICIPI}}">i participi passati irregolari</a>.',
    accH2: 'L’accordo',
    accP: 'Il participio si accorda sempre con il <strong>soggetto</strong>, in genere e numero. Nei tempi composti si accordano <strong>due</strong> participi.',
    aSing: 'Singolare',
    aPlur: 'Plurale',
    aMisto: 'Maschile e femminile insieme',
    accNote:
      '<em lang="it">La lettera è stata scritta</em>: <em lang="it">stata</em> e <em lang="it">scritta</em> sono tutti e due femminili. <em lang="it">I documenti sono stati firmati</em>: tutti e due maschili plurali. Se i soggetti sono maschili e femminili insieme, si usa il maschile plurale: <em lang="it">il tavolo e la sedia sono stati venduti</em>.',
    venH2: 'Con venire',
    venP: 'Al posto di <em lang="it">essere</em> si può usare <strong>venire</strong>, ma <strong>solo nei tempi semplici</strong>. Venire sottolinea l’<strong>azione</strong>, non lo stato.',
    vAzione: 'Un’azione che succede',
    vStato: 'Stato o azione?',
    vTempi: 'Solo tempi semplici',
    vNo: 'Mai nei tempi composti',
    venNote:
      '<em lang="it">La porta è chiusa</em> può voler dire «adesso è chiusa» (uno stato); <em lang="it">la porta viene chiusa alle otto</em> dice solo l’azione. Venire si usa al presente, imperfetto, passato remoto, futuro e condizionale (<em lang="it">viene, veniva, venne, verrà, verrebbe</em>), mai nei tempi composti: <em lang="it">è stato costruito</em>, non <em lang="it">è venuto costruito</em>.',
    andH2: 'Con andare',
    andP: '<strong>Andare</strong> + participio esprime una <strong>necessità</strong>: quello che bisogna fare. È tipico delle istruzioni.',
    anObbligo: 'Istruzioni e regole',
    anDovere: 'Va fatto = deve essere fatto',
    anPerso: 'Andare perso, andare distrutto',
    andNote:
      '<em lang="it">Il modulo va compilato</em> = deve essere compilato, bisogna compilarlo. Si usa nei tempi semplici: <em lang="it">va, andava, andrà, andrebbe</em>. Con alcuni verbi come <em lang="it">perdere, distruggere, sprecare</em>, invece, andare non indica obbligo: <em lang="it">i bagagli sono andati persi</em> = si sono persi.',
    agH2: 'Da + agente',
    agP: 'Chi compie l’azione (l’<strong>agente</strong>) si introduce con <strong>da</strong>, che si unisce all’articolo.',
    agDa: 'Da + nome',
    agArticolo: 'Dal, dalla, dai, dalle',
    agSenza: 'Spesso l’agente non si dice',
    agNote:
      '<em lang="it">Da</em> + articolo diventa <em lang="it">dal, dallo, dalla, dai, dagli, dalle</em>: vedi <a href="{{ARTICOLATE}}">le preposizioni articolate</a>. Molto spesso l’agente non si dice perché non è importante o non si sa: <em lang="it">il museo è stato chiuso</em>. Se l’agente è importante, spesso è più naturale la frase attiva.',
    siH2: 'Il si passivante',
    siP: 'Nel parlato e nei cartelli si usa molto <strong>si + verbo</strong> alla terza persona: il verbo si accorda con la cosa.',
    sSing: 'Cosa singolare: verbo singolare',
    sPlur: 'Cosa plurale: verbo plurale',
    sCome: 'Come si dice? Come si scrive?',
    sPassato: 'Al passato: con essere',
    siNote:
      '<em lang="it">Si vende casa</em> ma <strong>si vendono case</strong>: il verbo segue la cosa, che è il vero soggetto. Al passato si usa <em lang="it">essere</em> e il participio si accorda: <em lang="it">si è costruita una scuola</em>, <em lang="it">si sono vendute molte case</em>. Con il si passivante non si dice mai l’agente.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tDoppio: 'Due participi da accordare',
    tVenire: 'Venire solo nei tempi semplici',
    tIndiretto: 'Solo il complemento oggetto diventa soggetto',
    tSi: 'Si + plurale',
    trapNote:
      'In italiano solo il complemento oggetto può diventare soggetto: <em lang="it">mi hanno regalato un libro → mi è stato regalato un libro</em> (il soggetto è il libro), mai <em lang="it">sono stato regalato un libro</em>. Lo stesso per <em lang="it">mi è stato detto</em>, <em lang="it">gli è stato chiesto</em>.',
    exIntro: '30 frasi in tre parti. Scrivi la forma che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Essere + participio',
    part1P: 'Tutti i tempi e l’accordo: è scritta, è stata scritta, fu scritta, saranno pubblicati.',
    part2H3: 'Parte 2 · Venire, andare, da',
    part2P: 'Viene consegnata, va compilato, andati persi, da Fellini, dal Parlamento.',
    part3H3: 'Parte 3 · Si passivante e trasformazioni',
    part3P: 'Si vendono case, come si scrive? E dalla frase attiva alla passiva.',
  },
};
