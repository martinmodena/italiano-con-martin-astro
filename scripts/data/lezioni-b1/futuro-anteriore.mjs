// Lezione B1 «Il futuro anteriore: avrò fatto, sarò andato» (2026-11-18): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in futuro-anteriore-i18n.mjs.
//
// Martin il 2026-11-18: «penso che si dovrebbe aggiungere una lezione sul futuro anteriore». Non c'era. Qui:
// quando si usa (prima di un altro fatto futuro, entro un momento futuro, ipotesi sul passato), la forma (futuro
// di avere o essere + participio), essere o avere, le parole spia (quando, appena, dopo che, entro, già), le
// ipotesi sul passato (sarà stanco / sarà stato stanco), il parlato (quando finisco, ti chiamo), le trappole.
// Nell'indice B1 sta dopo «Il trapassato prossimo», che ora porta qui con il pulsante finale; da qui si va ai
// pronomi combinati. Confronto ed errori per lingua in confronti-futuro-anteriore.mjs.

export default {
  slug: 'futuro-anteriore',
  level: 'b1',
  next: 'pronomi-combinati',
  after: 'trapassato-prossimo',
  minutes: 20,
  hero: { src: 'grammatica/futuro-anteriore-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'the-italian-futuro-anteriore',
    es: 'el-futuro-anteriore-en-italiano',
    fr: 'le-futuro-anteriore-en-italien',
    cs: 'futuro-anteriore-v-italstine',
    pl: 'futuro-anteriore-po-wlosku',
    tr: 'italyanca-futuro-anteriore',
    de: 'das-futuro-anteriore-im-italienischen',
    ja: 'イタリア語の未来完了',
  },
  nav: [
    ['quando', 'Quando usarlo'],
    ['forma', 'Forma'],
    ['ausiliare', 'Essere o avere'],
    ['parole-spia', 'Parole spia'],
    ['ipotesi', 'Ipotesi sul passato'],
    ['parlato', 'Nel parlato'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples(
    [
      [L.qPrima, 'Quando avrò finito di lavorare, ti chiamerò.'],
      [L.qEntro, 'Domani a quest’ora sarò arrivato a Parigi.'],
      [L.qIpotesi, 'Marco non risponde: sarà già uscito.'],
    ]
  )}<p class="mini-note">${L.quandoNote}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', 'Ausiliare avere', 'Ausiliare essere'],
      [
        ['io', 'avrò mangiato', 'sarò partito · partita'],
        ['tu', 'avrai mangiato', 'sarai partito · partita'],
        ['lui · lei', 'avrà mangiato', 'sarà partito · partita'],
        ['noi', 'avremo mangiato', 'saremo partiti · partite'],
        ['voi', 'avrete mangiato', 'sarete partiti · partite'],
        ['loro', 'avranno mangiato', 'saranno partiti · partite'],
      ]
    )}<p class="mini-note">${L.formaNote.replace('{{FUTURO}}', h.href('futuro-semplice', 'a2')).replace('{{PARTICIPI}}', h.href('participi-passati-irregolari', 'a2'))}</p></article>
    <article class="lesson-box" id="ausiliare"><h2>${L.ausH2}</h2><p>${L.ausP.replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))}</p>${h.examples(
      [
        [L.aAvere, 'Avrò già mangiato. · Avremo visto il film.'],
        [L.aEssere, 'Anna sarà già uscita. · Saremo arrivati in tempo.'],
        [L.aRifl, 'Si sarà addormentato. · Ci saremo riposati.'],
        [L.aPron, 'La lettera? L’avrò letta entro stasera. · I biglietti? Li avrà comprati online.'],
      ]
    )}<p class="mini-note">${L.ausNote.replace('{{TRAPASSATO}}', h.href('trapassato-prossimo', 'b1'))}</p></article>
    <article class="lesson-box" id="parole-spia"><h2>${L.spiaH2}</h2><p>${L.spiaP}</p>${h.examples([
      [L.sQuando, 'Quando avrete letto il testo, risponderete alle domande.'],
      [L.sAppena, 'Appena sarò arrivato, ti manderò un messaggio.'],
      [L.sDopo, 'Dopo che avremo cenato, guarderemo un film.'],
      [L.sEntro, 'Entro giugno avrò finito l’università.'],
      [L.sGia, 'Alle nove sarò già uscito. · Domani non avrò ancora finito.'],
    ])}<p class="mini-note">${L.spiaNote.replace('{{GIA}}', h.href('gia-ancora-appena', 'a2'))}</p></article>
    <article class="lesson-box" id="ipotesi"><h2>${L.ipoH2}</h2><p>${L.ipoP.replace('{{FUTURO}}', h.href('futuro-semplice', 'a2'))}</p>${h.examples(
      [
        [L.iAdesso, 'Anna non risponde: sarà in metropolitana.'],
        [L.iPrima, 'Anna non ha risposto: sarà stata in metropolitana.'],
        [L.iPerche, 'Ha gli occhi rossi: avrà pianto. · Che fame! Non avrai fatto colazione.'],
        [L.iChissa, 'Chissà dove avrò messo gli occhiali! · Che cosa gli sarà successo?'],
      ]
    )}<p class="mini-note">${L.ipoNote}</p></article>
    <article class="lesson-box" id="parlato"><h2>${L.parH2}</h2><p>${L.parP}</p>${h.examples([
      [L.pCurato, 'Quando avrò finito, ti chiamerò.'],
      [L.pParlato, 'Quando finisco, ti chiamo.'],
      [L.pIpotesi, 'Dov’è Luca? Sarà andato a casa.'],
    ])}<p class="mini-note">${L.parNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tPrima, 'Appena avrò finito, uscirò.'],
      [L.tMomento, 'Domani parlerò con il direttore. · Domani a mezzogiorno avrò già parlato con il direttore.'],
      [L.tTempo, 'Sarà stanco. · Sarà stato stanco.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Quando avrò finito, ti avrò chiamato.', 'Quando avrò finito, ti chiamerò.'],
      ['Domani a quest’ora avrò partito.', 'Domani a quest’ora sarò partito.'],
      ['Anna sarà già uscito.', 'Anna sarà già uscita.'],
      ['Si avrà addormentato.', 'Si sarà addormentato.'],
      ['Ieri sera Luca sarà stanco.', 'Ieri sera Luca sarà stato stanco.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Entro le otto io ___ . (finire)', a: 'avrò finito', hint: 'Avere al futuro + participio: avrò finito.' },
        {
          q: 'Tu ___ a casa prima di cena? (tornare)',
          a: 'sarai tornato',
          alt: 'sarai tornata',
          hint: 'Tornare vuole essere: sarai tornato, sarai tornata.',
        },
        {
          q: 'Domani a quest’ora lei ___ per Londra. (partire)',
          a: 'sarà partita',
          hint: 'Partire vuole essere; lei → partita.',
        },
        {
          q: 'Fra un mese noi ___ tutto il libro. (leggere)',
          a: 'avremo letto',
          hint: 'Participio irregolare: letto.',
        },
        {
          q: 'Quando arriveremo, voi ___ la cena? (preparare)',
          a: 'avrete preparato',
          hint: 'Avrete + preparato.',
        },
        {
          q: 'Alle dieci loro ___ . (arrivare)',
          a: 'saranno arrivati',
          alt: 'saranno arrivate',
          hint: 'Arrivare vuole essere: saranno arrivati.',
        },
        {
          q: 'Quando ___ la risposta, ti chiamerò. (ricevere, io)',
          a: 'avrò ricevuto',
          hint: 'Prima ricevo, poi chiamo: avrò ricevuto.',
        },
        {
          q: 'Appena ___ , faremo colazione. (svegliarsi, noi)',
          a: 'ci saremo svegliati',
          alt: 'ci saremo svegliate',
          hint: 'I riflessivi vogliono essere: ci saremo svegliati.',
        },
        {
          q: 'Alle sei Anna e Sara ___ dall’ufficio. (uscire)',
          a: 'saranno uscite',
          hint: 'Uscire vuole essere; due donne → uscite.',
        },
        {
          q: 'Dopo che ___ il film, ne parleremo. (vedere, voi)',
          a: 'avrete visto',
          hint: 'Participio irregolare: visto.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      {
        q: 'Quando avrò finito i compiti, ___ a calcio. (giocare, io)',
        a: 'giocherò',
        hint: 'Questo viene dopo: futuro semplice, giocherò.',
      },
      {
        q: 'Ti presterò il libro appena lo ___ . (finire, io)',
        a: 'avrò finito',
        hint: 'Prima finisco, poi lo presto: avrò finito.',
      },
      {
        q: 'Domani ___ a Milano per lavoro. (andare, io)',
        a: 'andrò',
        hint: 'Un fatto futuro e basta: futuro semplice.',
      },
      {
        q: 'Entro venerdì ___ tutti gli esami. (fare, noi)',
        a: 'avremo fatto',
        hint: 'Entro venerdì: il limite nel futuro, avremo fatto.',
      },
      {
        q: 'Dopo che ___ , vi telefoneremo. (arrivare, noi)',
        a: 'saremo arrivati',
        alt: 'saremo arrivate',
        hint: 'Prima arriviamo, poi telefoniamo: saremo arrivati.',
      },
      {
        q: 'Se domani ___ bel tempo, andremo al mare. (fare)',
        a: 'farà',
        hint: 'Nessun fatto prima: futuro semplice, farà.',
      },
      {
        q: 'Fra due ore il treno ___ a Napoli. (arrivare)',
        a: 'sarà arrivato',
        hint: 'Fra due ore sarà già successo: sarà arrivato.',
      },
      {
        q: 'Quando ___ grande, farò il medico. (essere, io)',
        a: 'sarò',
        hint: 'Le due cose sono insieme, non una prima dell’altra: sarò.',
      },
      {
        q: 'Appena Marco ___ un lavoro, lo festeggeremo. (trovare)',
        a: 'avrà trovato',
        hint: 'Prima lo trova, poi festeggiamo: avrà trovato.',
      },
      {
        q: 'Il prossimo anno ___ in una casa nuova. (vivere, noi)',
        a: 'vivremo',
        hint: 'Un fatto futuro e basta: vivremo.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Luca non risponde al telefono: ___ il cellulare a casa. (dimenticare)',
        a: 'avrà dimenticato',
        hint: 'Un’ipotesi su una cosa già successa: avrà dimenticato.',
      },
      {
        q: 'Il cane abbaia: ___ fame. (avere)',
        a: 'avrà',
        hint: 'Un’ipotesi su adesso: futuro semplice, avrà.',
      },
      {
        q: 'Anna non è venuta alla festa: ___ male. (stare)',
        a: 'sarà stata',
        hint: 'Ipotesi sul passato; stare vuole essere: sarà stata.',
      },
      {
        q: 'Le strade sono bagnate: stanotte ___ . (piovere)',
        a: 'sarà piovuto',
        alt: 'avrà piovuto',
        hint: 'Piovere va bene con essere e con avere: sarà piovuto.',
      },
      {
        q: 'Che ore sono? Non lo so, ___ le cinque. (essere)',
        a: 'saranno',
        hint: 'Un’ipotesi su adesso: saranno le cinque.',
      },
      {
        q: 'Marco è arrivato tardi: ___ il treno. (perdere)',
        a: 'avrà perso',
        hint: 'Participio irregolare: perso.',
      },
      {
        q: 'Paolo ha l’aria stanca: ___ poco. (dormire)',
        a: 'avrà dormito',
        hint: 'La causa viene prima: avrà dormito.',
      },
      {
        q: 'Quando si è sposata, la nonna ___ vent’anni. (avere)',
        a: 'avrà avuto',
        hint: 'Un’ipotesi su un momento passato: avrà avuto.',
      },
      {
        q: 'Non trovo le chiavi: le ___ in macchina. (lasciare, io)',
        a: 'avrò lasciate',
        hint: 'Con le il participio si accorda: le avrò lasciate.',
      },
      {
        q: 'I ragazzi sono tornati felici: ___ molto. (divertirsi)',
        a: 'si saranno divertiti',
        hint: 'Riflessivo, quindi essere: si saranno divertiti.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Hai sentito Giulia? Non risponde ai messaggi.'],
      ['Studente', 'No… Avrà dimenticato il telefono a casa, come sempre!'],
      ['Martin', 'Oppure sarà già partita per Napoli: stasera ha il treno.'],
      ['Studente', 'Hai ragione. Quando sarà arrivata, ci risponderà.'],
      ['Martin', 'Va bene. E tu, quando avrai finito gli esami, verrai a cena da noi?'],
      ['Studente', 'Volentieri! Entro venerdì avrò fatto anche l’ultimo.'],
    ])}</article>`,
  it: {
    h1: 'Il futuro anteriore: avrò fatto, sarò andato',
    card: 'Quando avrò finito, ti chiamerò: il futuro prima del futuro, la forma, essere o avere e le ipotesi sul passato.',
    lead: 'Quando avrò finito, ti chiamerò. Sarà già partito. Il futuro anteriore racconta una cosa futura che succede prima di un’altra, e serve anche per fare ipotesi sul passato. Quando si usa, la forma (avrò fatto, sarò andato), essere o avere, le parole spia come quando, appena ed entro, come si usa nel parlato e le trappole. Con 30 esercizi.',
    description:
      'Il futuro anteriore in italiano: quando si usa (prima di un altro futuro, entro un momento futuro, ipotesi sul passato), la forma con avrò e sarò, essere o avere, quando, appena, dopo che, il futuro anteriore nel parlato, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Una clessidra su un tavolo di legno accanto a una finestra aperta; fuori, sfocate, le case color terracotta di un paese italiano',
    quandoH2: 'Quando si usa',
    quandoP:
      'Il futuro anteriore è <strong>il passato del futuro</strong>. Quando parli di due fatti futuri, quello che <strong>succede prima</strong> va al futuro anteriore: <em lang="it">avrò finito</em> (prima) e <em lang="it">ti chiamerò</em> (dopo). Serve anche per dire che una cosa sarà già successa entro un momento futuro, e per fare <strong>ipotesi su un fatto passato</strong>.',
    qPrima: 'Prima di un altro fatto futuro',
    qEntro: 'Entro un momento del futuro',
    qIpotesi: 'Per fare un’ipotesi sul passato',
    quandoNote:
      '<strong>Quando avrò finito, ti chiamerò</strong>: prima finisco, poi ti chiamo. Il futuro anteriore va sulla cosa che succede prima; quella che viene dopo resta al futuro semplice. <strong>Sarà già uscito</strong> invece non parla del futuro: vuol dire «probabilmente è già uscito».',
    formaH2: 'La forma',
    formaP:
      'Si forma come il passato prossimo, ma con l’ausiliare al <strong>futuro</strong>: <strong>avrò, avrai, avrà…</strong> oppure <strong>sarò, sarai, sarà…</strong> + il participio passato.',
    formaNote:
      'Ti servono solo due cose che conosci già: il <a href="{{FUTURO}}">futuro semplice</a> di <em lang="it">avere</em> e <em lang="it">essere</em> e il participio passato, con gli stessi <a href="{{PARTICIPI}}">participi irregolari</a> del passato prossimo: <em lang="it">avrò fatto, avrò visto, sarò venuto</em>.',
    ausH2: 'Essere o avere?',
    ausP: 'Le regole sono le stesse del <a href="{{PASSATO}}">passato prossimo</a>: se un verbo vuole <em lang="it">essere</em> al passato prossimo, lo vuole anche al futuro anteriore. E con <em lang="it">essere</em> il participio si accorda.',
    aAvere: 'Con avere: il participio non cambia',
    aEssere: 'Con essere: il participio si accorda',
    aRifl: 'I verbi riflessivi: sempre essere',
    aPron: 'Con lo, la, li, le: il participio si accorda',
    ausNote:
      '<strong>Sono partita → sarò partita</strong>, <strong>ho mangiato → avrò mangiato</strong>: cambia solo il tempo dell’ausiliare, come nel <a href="{{TRAPASSATO}}">trapassato prossimo</a> (<em lang="it">ero partita, avevo mangiato</em>). Con <em lang="it">essere</em> il participio si accorda con il soggetto (<em lang="it">Anna sarà uscita</em>); con <em lang="it">avere</em> si accorda solo con <em lang="it">lo, la, li, le</em> (<em lang="it">l’avrò letta</em>).',
    spiaH2: 'Le parole spia',
    spiaP:
      'Il futuro anteriore temporale arriva quasi sempre dopo alcune parole che mettono in fila due momenti del futuro, o che fissano un limite.',
    sQuando: 'Quando: prima una cosa, poi l’altra',
    sAppena: 'Appena: subito dopo',
    sDopo: 'Dopo che: prima una cosa, poi l’altra',
    sEntro: 'Entro, fra, a quest’ora: un limite nel futuro',
    sGia: 'Già, non… ancora',
    spiaNote:
      'Dopo <strong>quando, appena, dopo che</strong> va il futuro anteriore, e nell’altra parte della frase il futuro semplice. <strong>Già, ancora, mai</strong> vanno fra l’ausiliare e il participio, come al passato prossimo: <em lang="it">sarò già uscito</em>. Li trovi spiegati nella lezione <a href="{{GIA}}">già, ancora, appena</a>.',
    ipoH2: 'Le ipotesi sul passato',
    ipoP: 'Il futuro anteriore serve anche quando <strong>non sei sicuro</strong> di una cosa passata e fai un’ipotesi. È lo stesso uso del <a href="{{FUTURO}}">futuro semplice</a> (<em lang="it">sarà a casa</em> = probabilmente è a casa), ma spostato nel passato.',
    iAdesso: 'Futuro semplice: ipotesi su adesso',
    iPrima: 'Futuro anteriore: ipotesi su prima',
    iPerche: 'Per spiegare quello che vedi',
    iChissa: 'Nelle domande, con chissà',
    ipoNote:
      '<strong>Sarà stanco</strong> = probabilmente è stanco (adesso). <strong>Sarà stato stanco</strong> = probabilmente era stanco (prima). <em lang="it">Avrà perso il treno</em> vuol dire <em lang="it">probabilmente ha perso il treno</em>. Nella conversazione questo è l’uso più frequente del futuro anteriore.',
    parH2: 'Nel parlato',
    parP: 'Nella conversazione di tutti i giorni, per mettere in fila due fatti futuri, gli italiani usano spesso il presente al posto dei due futuri.',
    pCurato: 'Lingua curata: futuro anteriore + futuro',
    pParlato: 'Parlato di tutti i giorni: presente + presente',
    pIpotesi: 'Le ipotesi invece restano al futuro anteriore',
    parNote:
      'Tutte e due le frasi sono corrette: <em lang="it">appena arrivo, ti scrivo</em> è normalissimo a voce. Nello scritto, negli esami e negli esercizi di questa pagina usa il futuro anteriore. Per le ipotesi sul passato il presente non funziona: <em lang="it">sarà andato a casa</em>, oppure <em lang="it">forse è andato a casa</em>.',
    trapH2: 'Le trappole',
    trapP:
      'Il futuro anteriore non è un futuro più lontano o più importante: serve solo quando c’è un altro momento futuro di riferimento, o un’ipotesi.',
    tPrima: 'Il futuro anteriore va sulla cosa che viene prima',
    tMomento: 'Da solo, senza un altro momento, basta il futuro',
    tTempo: 'Ipotesi: adesso o prima?',
    trapNote:
      '<strong>Nella frase principale resta il futuro semplice</strong>: <em lang="it">quando avrò finito, ti chiamerò</em>, non <em lang="it">ti avrò chiamato</em>. <strong>Un fatto futuro e basta va al futuro semplice</strong>: <em lang="it">domani parlerò con il direttore</em>; il futuro anteriore serve se dici che a mezzogiorno sarà già fatto. E per le ipotesi guarda il tempo: <em lang="it">sarà stanco</em> parla di adesso, <em lang="it">sarà stato stanco</em> di prima.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · La forma',
    part1P: 'Scrivi il verbo al futuro anteriore.',
    part2H3: 'Parte 2 · Futuro o futuro anteriore?',
    part2P: 'Scrivi il verbo al futuro semplice o al futuro anteriore.',
    part3H3: 'Parte 3 · Che cosa sarà successo?',
    part3P: 'Fai un’ipotesi: scrivi il verbo al futuro semplice (adesso) o al futuro anteriore (prima).',
  },
};
