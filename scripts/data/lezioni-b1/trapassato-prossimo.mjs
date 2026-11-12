// Lezione B1 «Il trapassato prossimo: avevo fatto, ero andato» (2026-11-12): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in trapassato-prossimo-i18n.mjs.
//
// Martin il 2026-11-12: «c'è nel sito una scheda sul trapassato prossimo?». Non c'era. Qui: quando si usa (il
// passato del passato, la causa, il discorso riferito), la forma (imperfetto di avere o essere + participio),
// essere o avere e gli accordi, le parole spia (già, non ancora, mai, appena, dopo che), il trapassato nel
// racconto con passato prossimo e imperfetto, le trappole (in ordine si usa il passato prossimo, imperfetto o
// trapassato, serve un altro momento passato). Nell'indice B1 sta dopo «Il condizionale presente»; il pulsante
// finale porta ai pronomi combinati. Confronto ed errori per lingua in confronti-piacere-trapassato.mjs.

export default {
  slug: 'trapassato-prossimo',
  level: 'b1',
  next: 'pronomi-combinati',
  after: 'condizionale-presente',
  minutes: 20,
  hero: { src: 'grammatica/trapassato-prossimo-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'the-italian-trapassato-prossimo',
    es: 'el-trapassato-prossimo-en-italiano',
    fr: 'le-trapassato-prossimo-en-italien',
    cs: 'trapassato-prossimo-v-italstine',
    pl: 'trapassato-prossimo-po-wlosku',
    tr: 'italyanca-trapassato-prossimo',
    de: 'das-trapassato-prossimo-im-italienischen',
    ja: 'イタリア語の大過去',
  },
  nav: [
    ['quando', 'Quando usarlo'],
    ['forma', 'Forma'],
    ['ausiliare', 'Essere o avere'],
    ['parole-spia', 'Parole spia'],
    ['racconto', 'Nel racconto'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples(
    [
      [L.qPrima, 'Quando sono arrivato alla stazione, il treno era già partito.'],
      [L.qCausa, 'Ero stanco perché avevo lavorato tutto il giorno.'],
      [L.qDiscorso, 'Marco mi ha detto che aveva perso le chiavi.'],
    ]
  )}<p class="mini-note">${L.quandoNote}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', 'Ausiliare avere', 'Ausiliare essere'],
      [
        ['io', 'avevo mangiato', 'ero partito · partita'],
        ['tu', 'avevi mangiato', 'eri partito · partita'],
        ['lui · lei', 'aveva mangiato', 'era partito · partita'],
        ['noi', 'avevamo mangiato', 'eravamo partiti · partite'],
        ['voi', 'avevate mangiato', 'eravate partiti · partite'],
        ['loro', 'avevano mangiato', 'erano partiti · partite'],
      ]
    )}<p class="mini-note">${L.formaNote.replace('{{IMPERFETTO}}', h.href('imperfetto', 'a2')).replace('{{PARTICIPI}}', h.href('participi-passati-irregolari', 'a2'))}</p></article>
    <article class="lesson-box" id="ausiliare"><h2>${L.ausH2}</h2><p>${L.ausP.replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))}</p>${h.examples(
      [
        [L.aAvere, 'Avevo già mangiato. · Avevamo visto il film.'],
        [L.aEssere, 'Anna era già uscita. · Eravamo arrivati tardi.'],
        [L.aRifl, 'Si era addormentato. · Ci eravamo conosciuti a Roma.'],
        [L.aPron, 'La lettera? L’avevo già letta. · I biglietti? Li avevo comprati online.'],
      ]
    )}<p class="mini-note">${L.ausNote}</p></article>
    <article class="lesson-box" id="parole-spia"><h2>${L.spiaH2}</h2><p>${L.spiaP}</p>${h.examples([
      [L.sGia, 'Quando ho chiamato, Luca era già uscito.'],
      [L.sAncora, 'Non avevo ancora finito quando sei arrivata.'],
      [L.sMai, 'Non ero mai stato a Napoli prima di quel viaggio.'],
      [L.sAppena, 'Quando mi hai telefonato, ero appena tornato a casa.'],
      [L.sDopo, 'Dopo che avevamo cenato, siamo andati a fare una passeggiata.'],
    ])}<p class="mini-note">${L.spiaNote.replace('{{GIA}}', h.href('gia-ancora-appena', 'a2'))}</p></article>
    <article class="lesson-box" id="racconto"><h2>${L.racH2}</h2><p>${L.racP}</p>${h.examples([
      [L.rPP, 'Sabato sono andato alla festa di Giulia.'],
      [L.rImp, 'Faceva freddo e la casa era piena di gente.'],
      [L.rTrap, 'Le avevo comprato un libro, ma l’avevo dimenticato a casa!'],
    ])}<p class="mini-note">${L.racNote.replace('{{PPIMP}}', h.href('passato-prossimo-o-imperfetto', 'a2'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tOrdine, 'Prima ho cenato, poi sono uscito. · Sono uscito alle nove: avevo già cenato.'],
      [L.tImp, 'Quando sono arrivato, Anna dormiva. · Quando sono arrivato, Anna era già andata a letto.'],
      [L.tVicino, 'Ho appena finito. · Quando mi hai chiamato, avevo appena finito.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Quando sono arrivato, il treno è già partito.', 'Quando sono arrivato, il treno era già partito.'],
      ['Avevo andato al mare.', 'Ero andato al mare.'],
      ['Anna era già partito.', 'Anna era già partita.'],
      ['Si aveva addormentato.', 'Si era addormentato.'],
      ['Avevo stato a Roma.', 'Ero stato a Roma.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        {
          q: 'Io ___ troppo. (mangiare)',
          a: 'avevo mangiato',
          hint: 'Avere all’imperfetto + participio: avevo mangiato.',
        },
        {
          q: 'Tu ___ a Roma prima? (essere)',
          a: 'eri stato',
          alt: 'eri stata',
          hint: 'Essere vuole essere: eri stato, eri stata.',
        },
        { q: 'Lei ___ presto. (partire)', a: 'era partita', hint: 'Partire vuole essere; lei → partita.' },
        { q: 'Noi ___ quel film. (vedere)', a: 'avevamo visto', hint: 'Participio irregolare: visto.' },
        { q: 'Voi ___ la cena? (preparare)', a: 'avevate preparato', hint: 'Avevate + preparato.' },
        {
          q: 'Loro ___ tardi. (arrivare)',
          a: 'erano arrivati',
          alt: 'erano arrivate',
          hint: 'Arrivare vuole essere: erano arrivati.',
        },
        { q: 'Marco ___ le chiavi. (perdere)', a: 'aveva perso', hint: 'Participio irregolare: perso.' },
        {
          q: 'Io ___ alle sei. (svegliarsi)',
          a: 'mi ero svegliato',
          alt: 'mi ero svegliata',
          hint: 'I riflessivi vogliono essere: mi ero svegliato.',
        },
        {
          q: 'Anna e Sara ___ prima di noi. (uscire)',
          a: 'erano uscite',
          hint: 'Uscire vuole essere; due donne → uscite.',
        },
        { q: 'Il professore ___ la regola. (spiegare)', a: 'aveva spiegato', hint: 'Aveva + spiegato.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      {
        q: 'Quando sono arrivato alla stazione, il treno ___ da cinque minuti. (partire)',
        a: 'era partito',
        hint: 'È successo prima del mio arrivo: era partito.',
      },
      {
        q: 'Ieri ___ a casa alle otto e poi ho cenato. (tornare, io)',
        a: 'sono tornato',
        alt: 'sono tornata',
        hint: 'I fatti sono in ordine: passato prossimo.',
      },
      {
        q: 'Ero stanchissima perché ___ male. (dormire)',
        a: 'avevo dormito',
        hint: 'La causa viene prima: avevo dormito.',
      },
      {
        q: 'Mi ha restituito il libro che gli ___ a maggio. (prestare, io)',
        a: 'avevo prestato',
        hint: 'Il prestito viene prima della restituzione: avevo prestato.',
      },
      {
        q: 'Non ho riconosciuto Luca: ___ la barba. (tagliarsi)',
        a: 'si era tagliato',
        hint: 'Riflessivo, prima del momento in cui l’ho visto: si era tagliato.',
      },
      {
        q: 'Paola mi ha detto che ___ un nuovo lavoro. (trovare)',
        a: 'aveva trovato',
        hint: 'Discorso riferito: aveva trovato.',
      },
      {
        q: 'Stamattina ___ il treno delle sette. (prendere, io)',
        a: 'ho preso',
        hint: 'Un fatto solo, senza un altro passato: ho preso.',
      },
      {
        q: 'Non avevo fame perché ___ un panino. (mangiare, io)',
        a: 'avevo mangiato',
        hint: 'Prima del momento in cui non avevo fame: avevo mangiato.',
      },
      {
        q: 'Siamo arrivati al cinema, ma il film ___ . (cominciare)',
        a: 'era cominciato',
        alt: 'era già cominciato|aveva cominciato|era iniziato',
        hint: 'Il film, da solo, comincia: era cominciato.',
      },
      {
        q: 'Finalmente ho visto Venezia: non ci ___ mai. (essere, io)',
        a: 'ero stato',
        alt: 'ero stata',
        hint: 'Mai prima di allora: ero stato.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Sabato ___ alla festa di Giulia. (andare, io)',
        a: 'sono andato',
        alt: 'sono andata',
        hint: 'Il fatto principale: passato prossimo.',
      },
      { q: 'La casa ___ piena di gente. (essere)', a: 'era', hint: 'Lo sfondo, la descrizione: imperfetto.' },
      {
        q: 'Il giorno prima ___ un libro per lei. (comprare, io)',
        a: 'avevo comprato',
        hint: 'Il giorno prima della festa: avevo comprato.',
      },
      {
        q: 'Ma quando sono arrivato, ho capito che l’___ a casa! (dimenticare, io)',
        a: 'avevo dimenticato',
        hint: 'L’ho dimenticato prima di arrivare: l’avevo dimenticato.',
      },
      {
        q: 'Per fortuna Giulia non ___ niente. (notare)',
        a: 'ha notato',
        hint: 'Un fatto della festa: passato prossimo.',
      },
      {
        q: 'Infatti ___ già tanti regali. (ricevere, lei)',
        a: 'aveva ricevuto',
        hint: 'Già, prima di quel momento: aveva ricevuto.',
      },
      { q: 'Alle undici ___ stanchissimo. (essere, io)', a: 'ero', hint: 'Uno stato, una descrizione: imperfetto.' },
      {
        q: 'La mattina ___ alle sei. (svegliarsi, io)',
        a: 'mi ero svegliato',
        alt: 'mi ero svegliata',
        hint: 'Prima della sera: mi ero svegliato.',
      },
      {
        q: 'Così ___ a casa prima degli altri. (tornare, io)',
        a: 'sono tornato',
        alt: 'sono tornata',
        hint: 'Un fatto nuovo della storia: passato prossimo.',
      },
      {
        q: 'Il giorno dopo Giulia mi ha scritto che la festa le ___ tanto. (piacere)',
        a: 'era piaciuta',
        hint: 'Discorso riferito; piacere vuole essere: era piaciuta.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Com’è andato il viaggio a Firenze?'],
      ['Studente', 'Benissimo! Non c’ero mai stato prima.'],
      ['Martin', 'E sei riuscito a vedere gli Uffizi?'],
      [
        'Studente',
        'Sì, per fortuna avevo prenotato i biglietti online. Quando siamo arrivati, la fila era già lunghissima!',
      ],
      ['Martin', 'Hai fatto bene. Io una volta non avevo prenotato e ho aspettato due ore!'],
    ])}</article>`,
  it: {
    h1: 'Il trapassato prossimo: avevo fatto, ero andato',
    card: 'Quando sono arrivato, il treno era già partito: il passato del passato, la forma, essere o avere e il racconto.',
    lead: 'Quando sono arrivato alla stazione, il treno era già partito: il trapassato prossimo racconta un fatto successo prima di un altro fatto passato. Quando si usa, la forma (avevo fatto, ero andato), essere o avere, le parole spia come già e mai, come si mescola con passato prossimo e imperfetto nel racconto e le trappole. Con 30 esercizi.',
    description:
      'Il trapassato prossimo in italiano: quando si usa (il passato del passato), la forma con avevo ed ero, essere o avere, già, mai, appena, il trapassato nel racconto con passato prossimo e imperfetto, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Una valigia blu sola su un binario vuoto in campagna; in fondo ai binari un piccolo treno rosso, fra colline con gli ulivi',
    quandoH2: 'Quando si usa',
    quandoP:
      'Il trapassato prossimo è <strong>il passato del passato</strong>. Quando racconti due fatti passati, quello <strong>successo prima</strong> va al trapassato: <em lang="it">sono arrivato</em> (dopo) e <em lang="it">il treno era partito</em> (prima).',
    qPrima: 'Prima di un altro fatto passato',
    qCausa: 'Per spiegare una causa',
    qDiscorso: 'Per riferire quello che qualcuno ha detto',
    quandoNote:
      '<strong>Sono arrivato e il treno è partito</strong>: due fatti uno dopo l’altro, li ho visti tutti e due. <strong>Sono arrivato e il treno era partito</strong>: quando sono arrivato, il treno non c’era più. Nel discorso riferito il passato prossimo diventa trapassato: «<em lang="it">Ho perso le chiavi</em>» → <em lang="it">mi ha detto che aveva perso le chiavi</em>.',
    formaH2: 'La forma',
    formaP:
      'Si forma come il passato prossimo, ma con l’ausiliare all’<strong>imperfetto</strong>: <strong>avevo, avevi, aveva…</strong> oppure <strong>ero, eri, era…</strong> + il participio passato.',
    formaNote:
      'Ti servono solo due cose che conosci già: l’<a href="{{IMPERFETTO}}">imperfetto</a> di <em lang="it">avere</em> e <em lang="it">essere</em> e il participio passato, con gli stessi <a href="{{PARTICIPI}}">participi irregolari</a> del passato prossimo: <em lang="it">avevo fatto, avevo visto, ero venuto</em>.',
    ausH2: 'Essere o avere?',
    ausP: 'Le regole sono le stesse del <a href="{{PASSATO}}">passato prossimo</a>: se un verbo vuole <em lang="it">essere</em> al passato prossimo, lo vuole anche al trapassato. E con <em lang="it">essere</em> il participio si accorda.',
    aAvere: 'Con avere: il participio non cambia',
    aEssere: 'Con essere: il participio si accorda',
    aRifl: 'I verbi riflessivi: sempre essere',
    aPron: 'Con lo, la, li, le: il participio si accorda',
    ausNote:
      '<strong>Sono partita → ero partita</strong>, <strong>ho mangiato → avevo mangiato</strong>: cambia solo il tempo dell’ausiliare. Con <em lang="it">essere</em> il participio si accorda con il soggetto (<em lang="it">Anna era uscita</em>); con <em lang="it">avere</em> si accorda solo con i pronomi diretti <em lang="it">lo, la, li, le</em> (<em lang="it">l’avevo letta</em>). Anche <em lang="it">essere</em> stesso vuole <em lang="it">essere</em>: <em lang="it">ero stato</em>.',
    spiaH2: 'Le parole spia',
    spiaP:
      'Alcune parole accompagnano spesso il trapassato, perché dicono che una cosa era già successa (o non ancora) in quel momento del passato.',
    sGia: 'Già: era già successo',
    sAncora: 'Non… ancora: non era ancora successo',
    sMai: 'Mai: mai fino a quel momento',
    sAppena: 'Appena: era successo da pochissimo',
    sDopo: 'Dopo che: prima una cosa, poi l’altra',
    spiaNote:
      '<strong>Già, ancora, mai, appena</strong> vanno fra l’ausiliare e il participio, come al passato prossimo: <em lang="it">era già uscito</em>, <em lang="it">non avevo ancora finito</em>. Li trovi spiegati nella lezione <a href="{{GIA}}">già, ancora, appena</a>. Con <em lang="it">dopo che</em> e <em lang="it">quando</em> il trapassato segna la cosa successa prima.',
    racH2: 'Nel racconto',
    racP: 'Quando racconti una storia al passato usi tre tempi insieme, e ognuno ha il suo compito.',
    rPP: 'Passato prossimo: i fatti',
    rImp: 'Imperfetto: lo sfondo',
    rTrap: 'Trapassato: quello che era successo prima',
    racNote:
      '<strong>Il passato prossimo fa andare avanti la storia</strong>, l’imperfetto descrive com’era la scena, il trapassato <strong>torna indietro</strong> per spiegare. Se la scelta fra passato prossimo e imperfetto ti crea ancora dubbi, ripassa <a href="{{PPIMP}}">passato prossimo o imperfetto</a>.',
    trapH2: 'Le trappole',
    trapP:
      'Il trapassato non si usa per ogni fatto lontano nel tempo: serve solo quando torni indietro rispetto a un altro passato.',
    tOrdine: 'In ordine: passato prossimo; tornando indietro: trapassato',
    tImp: 'Imperfetto o trapassato?',
    tVicino: 'Serve un altro momento passato',
    trapNote:
      '<strong>Se racconti i fatti nell’ordine in cui sono successi, basta il passato prossimo</strong>: <em lang="it">prima ho cenato, poi sono uscito</em>. Il trapassato serve quando cambi l’ordine. <strong>Imperfetto e trapassato non sono la stessa cosa</strong>: <em lang="it">Anna dormiva</em> (in quel momento), <em lang="it">Anna era andata a letto</em> (prima di quel momento). E <strong>un fatto lontano non è per forza trapassato</strong>: <em lang="it">nel 2010 sono andato in Spagna</em> è passato prossimo, perché non c’è un altro momento passato di riferimento.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · La forma',
    part1P: 'Scrivi il verbo al trapassato prossimo.',
    part2H3: 'Parte 2 · Prima o dopo?',
    part2P: 'Scrivi il verbo al trapassato prossimo o al passato prossimo.',
    part3H3: 'Parte 3 · Racconta la festa',
    part3P: 'Una storia: scrivi il verbo al passato prossimo, all’imperfetto o al trapassato prossimo.',
  },
};
