// Lezione A2 «L'imperfetto: giocavo, ero, facevo» (rifatta il 2026-11-24 agli stessi URL): struttura, materiale
// italiano e testi. Le spiegazioni tradotte stanno in imperfetto-i18n.mjs.
//
// Settima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto aveva
// gli usi, le forme e 12 esercizi. Ora: gli usi (abitudini, descrizioni, età e ora, azioni in corso, azioni
// contemporanee, il «volevo» gentile), la forma, gli irregolari (essere, fare, dire, bere), le parole spia, il
// racconto con il passato prossimo, le trappole e 30 esercizi. Il confronto con la lingua resta quello di
// confronti-lingua.mjs; gli errori per lingua sono in confronti-imperfetto.mjs. Nell'indice A2 la tessera resta
// dov'era; il pulsante finale porta a «Passato prossimo o imperfetto?».

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'imperfetto',
  level: 'a2',
  next: 'passato-prossimo-o-imperfetto',
  minutes: 20,
  hero: { src: 'grammatica/imperfetto-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-imperfetto-tense',
    es: 'el-imperfetto-italiano',
    fr: 'limperfetto-italien',
    cs: 'italsky-imperfetto',
    pl: 'wloski-imperfetto',
    tr: 'italyanca-imperfetto',
    de: 'das-italienische-imperfetto',
    ja: 'イタリア語の-imperfetto',
  },
  nav: [
    ['usi', 'Usi'],
    ['forma', 'Forma'],
    ['irregolari', 'Irregolari'],
    ['parole-spia', 'Parole spia'],
    ['racconto', 'Nel racconto'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="usi"><h2>${L.usiH2}</h2><p>${L.usiP}</p>${h.examples([
    [L.uAbitudine, 'Da bambino giocavo a calcio ogni giorno.'],
    [L.uDescrizione, 'Mio nonno era alto e aveva i capelli bianchi.'],
    [L.uTempo, 'Erano le otto, faceva freddo e avevo dieci anni.'],
    [L.uInCorso, 'Leggevo quando è arrivato Marco.'],
    [L.uMentre, 'Mentre cucinavo, ascoltavo la radio.'],
    [L.uGentile, 'Buongiorno, volevo un caffè.'],
  ])}<p class="mini-note">${L.usiNote}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', `=${it('parlare')}`, `=${it('prendere')}`, `=${it('dormire')}`],
      [
        ['io', 'parlavo', 'prendevo', 'dormivo'],
        ['tu', 'parlavi', 'prendevi', 'dormivi'],
        ['lui · lei · Lei', 'parlava', 'prendeva', 'dormiva'],
        ['noi', 'parlavamo', 'prendevamo', 'dormivamo'],
        ['voi', 'parlavate', 'prendevate', 'dormivate'],
        ['loro', 'parlavano', 'prendevano', 'dormivano'],
      ]
    )}<p class="mini-note">${L.formaNote}</p></article>
    <article class="lesson-box" id="irregolari"><h2>${L.irrH2}</h2><p>${L.irrP}</p>${h.table(
      ['Persona', `=${it('essere')}`, `=${it('fare')}`, `=${it('dire')}`, `=${it('bere')}`],
      [
        ['io', 'ero', 'facevo', 'dicevo', 'bevevo'],
        ['tu', 'eri', 'facevi', 'dicevi', 'bevevi'],
        ['lui · lei · Lei', 'era', 'faceva', 'diceva', 'beveva'],
        ['noi', 'eravamo', 'facevamo', 'dicevamo', 'bevevamo'],
        ['voi', 'eravate', 'facevate', 'dicevate', 'bevevate'],
        ['loro', 'erano', 'facevano', 'dicevano', 'bevevano'],
      ]
    )}<p class="mini-note">${L.irrNote}</p></article>
    <article class="lesson-box" id="parole-spia"><h2>${L.spiaH2}</h2><p>${L.spiaP}</p>${h.examples([
      [L.sAbitudine, 'sempre · di solito · spesso · ogni giorno · ogni estate'],
      [L.sPeriodo, 'da bambino · da giovane · una volta · a quei tempi'],
      [L.sMentre, 'Mentre studiavo, mio fratello giocava.'],
    ])}<p class="mini-note">${L.spiaNote}</p></article>
    <article class="lesson-box" id="racconto"><h2>${L.racH2}</h2><p>${L.racP}</p>${h.examples([
      [L.rSfondo, 'Era sabato, pioveva e io ero a casa.'],
      [L.rFatto, 'Alle sei ha suonato il telefono.'],
      [L.rInterrompe, 'Mentre guardavo un film, è andata via la luce.'],
    ])}<p class="mini-note">${L.racNote
      .replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))
      .replace('{{PPIMP}}', h.href('passato-prossimo-o-imperfetto', 'a2'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tEro, 'io ero · lui era'],
      [L.tDurata, 'Abitavo a Roma. · Ho abitato a Roma per due anni.'],
      [L.tStavo, 'Leggevo. · Stavo leggendo.'],
      [L.tVolevo, 'Volevo un caffè. · Volevo chiederti una cosa.'],
    ])}<p class="mini-note">${L.trapNote.replace('{{GERUNDIO}}', h.href('stare-gerundio', 'a2'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.'],
      ['Io era stanco.', 'Io ero stanco.'],
      ['Ero leggendo quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.'],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.'],
      ['Loro parlavono.', 'Loro parlavano.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Da giovane io ___ a Roma. (abitare)', a: 'abitavo', hint: 'Verbo in -are con io: abitavo.' },
        { q: 'Da bambino tu ___ molto? (leggere)', a: 'leggevi', hint: 'Verbo in -ere con tu: leggevi.' },
        { q: 'Mia sorella ___ sempre fino a tardi. (dormire)', a: 'dormiva', hint: 'Verbo in -ire con lei: dormiva.' },
        { q: 'Noi ___ a carte ogni sera. (giocare)', a: 'giocavamo', hint: 'Con noi: giocavamo.' },
        { q: 'Voi ___ il treno ogni giorno? (prendere)', a: 'prendevate', hint: 'Con voi: prendevate.' },
        { q: 'I miei genitori ___ in un negozio. (lavorare)', a: 'lavoravano', hint: 'Con loro: lavoravano.' },
        { q: 'Io ___ di lavorare alle sei. (finire)', a: 'finivo', hint: 'All’imperfetto niente -isc-: finivo.' },
        { q: 'Tu ___ la radio la mattina? (ascoltare)', a: 'ascoltavi', hint: 'Con tu: ascoltavi.' },
        { q: 'Mia nonna ___ benissimo. (cucinare)', a: 'cucinava', hint: 'Con lei: cucinava.' },
        { q: 'I bambini ___ in giardino. (correre)', a: 'correvano', hint: 'Verbo in -ere con loro: correvano.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Da piccolo io ___ molto timido. (essere)', a: 'ero', hint: 'Essere con io: ero.' },
      { q: 'Ieri sera ___ molto freddo. (fare)', a: 'faceva', hint: 'Il tempo: faceva freddo.' },
      { q: 'Noi ___ sempre la verità. (dire)', a: 'dicevamo', hint: 'Dire usa dic-: dicevamo.' },
      { q: 'Mio nonno ___ un caffè ogni mattina. (bere)', a: 'beveva', hint: 'Bere usa bev-: beveva.' },
      { q: 'Dopo il viaggio loro ___ stanchissimi. (essere)', a: 'erano', hint: 'Essere con loro: erano.' },
      { q: 'Tu che cosa ___ il sabato? (fare)', a: 'facevi', hint: 'Fare usa fac-: facevi.' },
      { q: 'Quando sono uscito, ___ le otto. (essere)', a: 'erano', hint: 'L’ora nel passato: erano le otto.' },
      { q: 'In quella foto io ___ dieci anni. (avere)', a: 'avevo', hint: 'L’età nel passato: avevo dieci anni.' },
      { q: 'La casa dei nonni ___ un grande giardino. (avere)', a: 'aveva', hint: 'Una descrizione: aveva.' },
      { q: 'Voi ___ al mare ogni estate? (andare)', a: 'andavate', hint: 'Andare è regolare all’imperfetto: andavate.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Quando ___ piccola, vivevo in campagna. (essere, io)', a: 'ero', hint: 'Una descrizione: ero piccola.' },
      { q: 'Ogni mattina ___ a scuola in bicicletta. (andare, io)', a: 'andavo', hint: 'Ogni mattina: abitudine, andavo.' },
      { q: 'Un giorno, mentre ___ , ho visto una volpe. (pedalare, io)', a: 'pedalavo', hint: 'Mentre + azione in corso: pedalavo.' },
      { q: 'La volpe ___ rossa e bellissima. (essere)', a: 'era', hint: 'Una descrizione: era.' },
      { q: 'Quel giorno ___ caldo e il cielo era azzurro. (fare)', a: 'faceva', hint: 'Il tempo, lo sfondo: faceva.' },
      { q: 'All’improvviso la volpe ___ nel bosco. (scappare)', a: 'è scappata', alt: 'e scappata', hint: 'Un fatto improvviso: passato prossimo, è scappata.' },
      { q: 'A scuola ___ tutto alla maestra. (raccontare, io)', a: 'ho raccontato', hint: 'Un fatto: passato prossimo, ho raccontato.' },
      { q: 'Mentre la maestra ___ , io pensavo alla volpe. (spiegare)', a: 'spiegava', hint: 'Due azioni insieme: spiegava.' },
      { q: 'Da quel giorno ___ sempre la volpe dalla bicicletta. (cercare, io)', a: 'cercavo', hint: 'Sempre: abitudine, cercavo.' },
      { q: 'Ma non l’___ più. (vedere, io)', a: 'ho vista', alt: 'ho visto', hint: 'Un fatto concluso: l’ho vista (la volpe).' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Com’eri da bambino?'],
      ['Studente', 'Ero piccolo e molto curioso. Facevo sempre tante domande!'],
      ['Martin', 'E che cosa facevi d’estate?'],
      ['Studente', 'Andavamo dai nonni in campagna. Mio nonno aveva un orto e io lo aiutavo.'],
      ['Martin', 'Che bello! E vi piaceva?'],
      ['Studente', 'Moltissimo. La sera mangiavamo in giardino e guardavamo le stelle.'],
    ])}</article>`,
  it: {
    h1: 'L’imperfetto: giocavo, ero, facevo',
    card: 'Da bambino giocavo, era tardi, faceva freddo: abitudini, descrizioni, la forma, gli irregolari e il racconto.',
    lead: 'Da bambino giocavo a calcio, mio nonno era alto, faceva freddo, mentre leggevo è arrivato Marco: l’imperfetto racconta le abitudini, descrive e fa da sfondo. Gli usi, la forma (parlavo, prendevo, dormivo), gli irregolari (ero, facevo, dicevo, bevevo), le parole spia, come si usa nel racconto con il passato prossimo e le trappole. Con 30 esercizi.',
    description:
      'L’imperfetto in italiano: quando si usa (abitudini, descrizioni, età, ora e tempo, azioni in corso, volevo), la forma (parlavo, prendevo, dormivo), gli irregolari (ero, facevo, dicevo, bevevo), le parole spia, il racconto con il passato prossimo, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Una vecchia altalena di legno appesa al ramo di un ulivo in un giardino di campagna, nella luce dorata della sera',
    usiH2: 'Quando si usa',
    usiP: 'L’imperfetto è il tempo dei <strong>ricordi</strong> e delle <strong>descrizioni</strong>: racconta com’erano le cose, che cosa si faceva di solito, che cosa stava succedendo in un momento del passato.',
    uAbitudine: 'Un’abitudine nel passato',
    uDescrizione: 'Una descrizione di persone e cose',
    uTempo: 'L’ora, il tempo, l’età',
    uInCorso: 'Un’azione in corso, interrotta da un fatto',
    uMentre: 'Due azioni nello stesso momento',
    uGentile: 'Una richiesta gentile',
    usiNote:
      '<strong>Una domanda utile</strong>: «com’era?» o «che cosa succedeva di solito?» → imperfetto; «che cosa è successo?» → passato prossimo. E <strong>volevo</strong> al bar o in negozio è un modo gentile per chiedere qualcosa adesso: <em lang="it">volevo due biglietti</em>.',
    formaH2: 'La forma',
    formaP: 'È il tempo più regolare dell’italiano: togli <strong>-re</strong> dall’infinito e aggiungi <strong>-vo, -vi, -va, -vamo, -vate, -vano</strong>. La vocale prima (<strong>a, e, i</strong>) resta quella dell’infinito.',
    formaNote:
      '<strong>parla-re → parla-vo</strong>, <em lang="it">prende-re → prende-vo</em>, <em lang="it">dormi-re → dormi-vo</em>. I verbi in -isc- non lo usano: <em lang="it">finivo, capivo</em>. Attenzione all’accento di <em lang="it">loro</em>: <em lang="it">parlàvano</em>, <em lang="it">prendèvano</em>, con l’accento sulla terzultima sillaba.',
    irrH2: 'Gli irregolari',
    irrP: 'Pochissimi. <strong>Essere</strong> ha forme proprie; <strong>fare, dire, bere</strong> usano una radice antica (<em lang="it">fac-, dic-, bev-</em>) ma le desinenze di sempre.',
    irrNote:
      'Verbi irregolari al presente come <em lang="it">avere, andare, stare, venire, uscire</em> all’imperfetto sono <strong>regolari</strong>: <em lang="it">avevo, andavo, stavo, venivo, uscivo</em>. Lo stesso per i verbi come <em lang="it">tradurre</em> (<em lang="it">traducevo</em>) e <em lang="it">porre</em> (<em lang="it">ponevo</em>).',
    spiaH2: 'Le parole spia',
    spiaP: 'Alcune parole accompagnano spesso l’imperfetto, perché parlano di abitudini o di periodi lunghi.',
    sAbitudine: 'Le abitudini',
    sPeriodo: 'I periodi della vita',
    sMentre: 'Mentre: due cose nello stesso momento',
    spiaNote:
      '<strong>Mentre</strong> vuole quasi sempre l’imperfetto, perché parla di un’azione che dura. Ma attenzione: una parola spia aiuta, non decide da sola. <em lang="it">Ieri</em> va bene con tutti e due i tempi: <em lang="it">ieri pioveva</em> (descrizione), <em lang="it">ieri ho visto Anna</em> (fatto).',
    racH2: 'Nel racconto',
    racP: 'Quando racconti una storia, l’imperfetto e il passato prossimo lavorano insieme, come lo sfondo e i personaggi di un film.',
    rSfondo: 'Imperfetto: lo sfondo, la scena',
    rFatto: 'Passato prossimo: il fatto, che cosa succede',
    rInterrompe: 'Un fatto interrompe un’azione in corso',
    racNote:
      '<strong>L’imperfetto descrive, il passato prossimo fa andare avanti la storia.</strong> Se un’azione lunga viene interrotta da un fatto breve, la lunga va all’imperfetto e la breve al <a href="{{PASSATO}}">passato prossimo</a>. Tutte le regole per scegliere sono nella lezione <a href="{{PPIMP}}">passato prossimo o imperfetto?</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tEro: 'Io ero, lui era',
    tDurata: 'Con una durata precisa: passato prossimo',
    tStavo: 'Imperfetto o stavo + gerundio',
    tVolevo: 'Volevo: gentile anche nel presente',
    trapNote:
      '<strong>Ero</strong> è «io», <strong>era</strong> è «lui» o «lei»: è l’errore più frequente. Con una durata precisa e finita si usa il passato prossimo: <em lang="it">ho abitato a Roma per due anni</em>, ma <em lang="it">abitavo a Roma</em> (senza fine detta). Per un’azione in corso puoi usare anche <em lang="it">stavo + gerundio</em>, che la sottolinea: vedi <a href="{{GERUNDIO}}">stare + gerundio</a>.',
    exIntro: '30 frasi in tre parti. Scrivi solo il verbo: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · La forma',
    part1P: 'Scrivi il verbo all’imperfetto.',
    part2H3: 'Parte 2 · Irregolari e descrizioni',
    part2P: 'Scrivi il verbo all’imperfetto: età, ora, tempo, abitudini.',
    part3H3: 'Parte 3 · La volpe: un racconto',
    part3P: 'Una storia: scrivi il verbo all’imperfetto o al passato prossimo.',
  },
};
