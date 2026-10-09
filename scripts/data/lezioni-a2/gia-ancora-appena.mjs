// Lezione A2 «Già, ancora, appena, non… più» (2026-10-09): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in gia-ancora-appena-i18n.mjs.
//
// Martin: «si potrebbero aggiungere una o più schede sugli avverbi? vedilo tu». Dopo «Gli avverbi di
// frequenza» (A1) mancavano gli avverbi di tempo che vivono dentro il passato prossimo: che cosa
// vogliono dire, le coppie già ↔ non ancora e ancora ↔ non più, e soprattutto la posizione fra
// ausiliare e participio (ho già mangiato, non sono mai stato). Nell'indice A2 sta dopo «I participi
// passati irregolari».

export default {
  slug: 'gia-ancora-appena',
  level: 'a2',
  next: 'imperfetto',
  after: 'participi-passati-irregolari',
  minutes: 20,
  slugs: {
    en: 'italian-adverbs-gia-ancora-appena',
    es: 'adverbios-gia-ancora-appena-en-italiano',
    fr: 'adverbes-gia-ancora-appena-en-italien',
    cs: 'prislovce-gia-ancora-appena-v-italstine',
    pl: 'przyslowki-gia-ancora-appena-po-wlosku',
    tr: 'italyancada-gia-ancora-appena-zarflari',
    de: 'adverbien-gia-ancora-appena-im-italienischen',
    ja: 'イタリア語の副詞-gia-ancora-appena',
  },
  nav: [
    ['uso', 'Uso'],
    ['coppie', 'Confronti'],
    ['posizione', 'Posizione'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="uso"><h2>${L.usoH2}</h2><p>${L.usoP}</p>${h.examples([
    [L.uGia, 'Hai già finito? Che velocità!'],
    [L.uAncora, 'Dormi ancora? Sono le undici!'],
    [L.uAncora2, 'Vuoi ancora un po’ di pasta? · Ancora tu?'],
    [L.uAppena, 'Il treno è appena partito.'],
    [L.uPiu, 'Non fumo più: ho smesso a maggio.'],
    [L.uNonAncora, 'Non ho ancora finito: aspettami!'],
    [L.uMai, 'Non sono mai stato in Sicilia.'],
  ])}<p class="mini-note">${L.usoNote}</p></article>
    <article class="lesson-box" id="coppie"><h2>${L.coppieH2}</h2><p>${L.coppieP}</p>${h.examples([
      [L.cGia, 'Hai già mangiato? · No, non ho ancora mangiato.'],
      [L.cAncora, 'Abiti ancora a Roma? · No, non abito più a Roma.'],
      [L.cMai, 'Sei mai stato a Napoli? · No, non ci sono mai stato.'],
      [L.cBreve, 'Hai finito? · Non ancora! · Lavori lì? · Non più.'],
    ])}<p class="mini-note">${L.coppieNote}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.table(
      ['Ausiliare', 'Avverbio', 'Participio'],
      [
        ['ho', 'già', 'mangiato'],
        ['non ho', 'ancora', 'finito'],
        ['sono', 'appena', 'arrivato'],
        ['non sono', 'più', 'tornato'],
        ['non ho', 'mai', 'visto'],
        ['ho', 'sempre', 'detto'],
      ]
    )}${h.examples([
      [L.pPresente, 'Lavoro ancora qui. · Non lavoro più qui.'],
      [L.pAppena, 'Appena arrivo, ti chiamo.'],
    ])}<p class="mini-note">${L.posNote1}</p><p class="mini-note">${L.posNote2}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Già ho mangiato.', 'Ho già mangiato.'],
      ['Non ho finito già.', 'Non ho ancora finito.'],
      ['Hai mangiato ancora? (= prima del previsto)', 'Hai già mangiato?'],
      ['Non abito ancora a Roma. (= prima ci abitavo)', 'Non abito più a Roma.'],
      ['Sono arrivato appena.', 'Sono appena arrivato.'],
      ['Ho appena mangiato tre ore fa.', 'Ho mangiato tre ore fa.'],
      ['Ho non mai visto Roma.', 'Non ho mai visto Roma.'],
      ['Più non fumo.', 'Non fumo più.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Hai ___ finito i compiti? Bravo, sono solo le cinque!', a: 'già', hint: 'Prima del previsto: già.' },
        { q: 'Non ho ___ finito: mi mancano due esercizi.', a: 'ancora', hint: 'Non… ancora: succederà dopo.' },
        { q: 'Il treno è ___ partito: due minuti fa!', a: 'appena', hint: 'Un momento fa: appena.' },
        { q: 'Non fumo ___: ho smesso l’anno scorso.', a: 'più', hint: 'Prima sì, adesso no: non… più.' },
        { q: 'Non sono ___ stata in Giappone, ma vorrei andarci.', a: 'mai', hint: 'Nemmeno una volta: non… mai.' },
        { q: 'Sei ___ qui? Sei arrivato prestissimo!', a: 'già', hint: 'Prima del previsto: già.' },
        { q: 'Marco dorme ___? Sono le undici!', a: 'ancora', hint: 'Continua: ancora.' },
        { q: 'Vuoi ___ un po’ di pasta?', a: 'ancora', hint: 'Un’altra volta, di più: ancora.' },
        { q: 'Non lavoro ___ in banca: adesso insegno.', a: 'più', hint: 'Prima sì, adesso no: non… più.' },
        {
          q: 'Ho ___ preso un caffè: ne ho bevuto uno cinque minuti fa.',
          a: 'appena',
          alt: 'già',
          hint: 'Cinque minuti fa: appena.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Hai già visto il film? No, non l’ho ___ visto.', a: 'ancora', hint: 'Già → non… ancora.' },
      { q: 'Lavori ancora in quel bar? No, non ci lavoro ___.', a: 'più', hint: 'Ancora → non… più.' },
      { q: 'Il bambino dorme ancora? No, non dorme ___.', a: 'più', hint: 'Ancora → non… più.' },
      { q: 'È già arrivato Luca? No, non è ___ arrivato.', a: 'ancora', hint: 'Già → non… ancora.' },
      { q: 'Hai già pagato? Sì, ho ___ pagato.', a: 'già', hint: 'Sì: già.' },
      { q: 'Siete ancora in ufficio? Sì, siamo ___ qui.', a: 'ancora', hint: 'Sì: ancora.' },
      { q: 'Sei mai stato in Sicilia? No, non ci sono ___ stato.', a: 'mai', hint: 'Mai → non… mai.' },
      { q: 'Fumi ancora? No, non fumo ___.', a: 'più', hint: 'Ancora → non… più.' },
      { q: 'Hai già finito? No, ___ ancora!', a: 'non', hint: 'La risposta breve: non ancora.' },
      { q: 'Abiti ancora con i tuoi genitori? No, non ___ più.', a: 'abito', hint: 'Il verbo sta tra non e più.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Io ___. (già / ho / mangiato)', a: 'ho già mangiato', hint: 'Ausiliare + già + participio.' },
      { q: 'Anna ___. (appena / è / arrivata)', a: 'è appena arrivata', hint: 'Ausiliare + appena + participio.' },
      {
        q: 'Io ___ il libro. (ancora / ho / non / finito)',
        a: 'non ho ancora finito',
        hint: 'Non + ausiliare + ancora + participio.',
      },
      {
        q: 'Noi ___ a Parigi. (mai / siamo / non / stati)',
        a: 'non siamo mai stati',
        hint: 'Non + ausiliare + mai + participio.',
      },
      {
        q: 'Dopo la scuola ___ Marco. (più / ho / non / visto)',
        a: 'non ho più visto',
        hint: 'Non + ausiliare + più + participio.',
      },
      { q: 'Mia nonna lo ___. (sempre / ha / detto)', a: 'ha sempre detto', hint: 'Ausiliare + sempre + participio.' },
      { q: '___ colazione? (già / hai / fatto)', a: 'hai già fatto', hint: 'Anche nelle domande: hai già fatto.' },
      {
        q: 'I ragazzi ___ di mangiare. (appena / hanno / finito)',
        a: 'hanno appena finito',
        hint: 'Ausiliare + appena + participio.',
      },
      { q: 'Luca ___ qui. (più / non / lavora)', a: 'non lavora più', hint: 'Al presente: non + verbo + più.' },
      {
        q: 'Giulia ___ a casa. (ancora / è / non / tornata)',
        a: 'non è ancora tornata',
        hint: 'Non + ausiliare + ancora + participio.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Hai già letto la storia di Emma?'],
      ['Studente', 'Non ancora: ho appena finito i compiti.'],
      ['Martin', 'E abiti ancora a Bologna?'],
      ['Studente', 'No, non ci abito più. E non sono mai tornato!'],
    ])}</article>`,
  it: {
    h1: 'Già, ancora, appena, non… più',
    card: 'Ho già mangiato, non ho ancora finito, sono appena arrivato: dove vanno.',
    lead: 'Ho già mangiato, non ho ancora finito, sono appena arrivato, non fumo più: che cosa vogliono dire già, ancora, appena, mai e non… più, come rispondere alle domande e dove si mettono nel passato prossimo. Con 30 esercizi.',
    description:
      'Già, ancora, appena, mai e non… più in italiano: che cosa vogliono dire, le coppie già / non ancora e ancora / non più, la posizione nel passato prossimo (ho già mangiato, sono appena arrivato) e 30 esercizi.',
    usoH2: 'Che cosa vogliono dire',
    usoP: 'Sono parole piccole, ma cambiano il senso della frase: dicono se un’azione è finita, se continua o se non è ancora cominciata.',
    uGia: 'Già: prima del previsto, è fatto',
    uAncora: 'Ancora: continua',
    uAncora2: 'Ancora: di più, di nuovo',
    uAppena: 'Appena: un momento fa',
    uPiu: 'Non… più: prima sì, adesso no',
    uNonAncora: 'Non… ancora: non ancora, ma succederà',
    uMai: 'Non… mai: nemmeno una volta',
    usoNote:
      '<strong><em lang="it">Ancora</em> ha tre significati:</strong> «continua» (<em lang="it">dormi ancora?</em>), «di più» (<em lang="it">ancora un caffè</em>) e «di nuovo» (<em lang="it">ancora tu?</em>). Il contesto ti dice quale.',
    coppieH2: 'Le coppie: già ↔ non ancora, ancora ↔ non più',
    coppieP:
      'Alla domanda con <em lang="it">già</em> si risponde di no con <em lang="it">non… ancora</em>; alla domanda con <em lang="it">ancora</em> si risponde di no con <em lang="it">non… più</em>.',
    cGia: 'Già → non… ancora',
    cAncora: 'Ancora → non… più',
    cMai: 'Mai → non… mai',
    cBreve: 'Le risposte brevi',
    coppieNote:
      '<strong>La negazione è doppia:</strong> <em lang="it">non</em> va prima del verbo e <em lang="it">ancora</em>, <em lang="it">più</em> o <em lang="it">mai</em> dopo. In italiano due negazioni non si annullano: <em lang="it">non ho mai visto</em> vuol dire «mai».',
    posH2: 'Dove si mettono',
    posP: 'Nel passato prossimo questi avverbi vanno <strong>tra l’ausiliare e il participio</strong>. Il <em lang="it">non</em>, invece, va prima dell’ausiliare.',
    pPresente: 'Al presente: dopo il verbo',
    pAppena: 'Appena + presente o futuro = quando',
    posNote1:
      '<strong>Appena ha due usi.</strong> Con il passato prossimo vuol dire «un momento fa»: <em lang="it">sono appena arrivato</em>. All’inizio della frase vuol dire «nel momento in cui»: <em lang="it">appena arrivo, ti chiamo</em>.',
    posNote2:
      '<strong>Non mettere appena con un’ora precisa:</strong> <em lang="it">ho mangiato tre ore fa</em>, non <em lang="it">ho appena mangiato tre ore fa</em>. <em lang="it">Appena</em> vuol dire già da solo «poco fa».',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Qual è la parola giusta?',
    part1P: 'Scrivi già, ancora, appena, più o mai.',
    part2H3: 'Parte 2 · Rispondi',
    part2P: 'Completa la risposta con la parola che manca.',
    part3H3: 'Parte 3 · Metti in ordine',
    part3P: 'Scrivi le parole tra parentesi nell’ordine giusto.',
  },
};
