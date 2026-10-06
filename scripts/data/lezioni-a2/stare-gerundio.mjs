// Lezione A2 «Stare + gerundio» (2026-10-06): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in stare-gerundio-i18n.mjs.
//
// Martin: «non vedo nel sito come formare la forma continuativa "sto mangiando", "lui sta lavorando"».
// La lezione insegna la forma, il gerundio regolare e irregolare (con il trucco dell'imperfetto: facevo →
// facendo), quando si usa e soprattutto quando NO (futuro, abitudini, verbi di stato: errori tipici di chi
// parla inglese), stavo + gerundio e stare per + infinito. Nell'indice A2 sta dopo «Passato prossimo o
// imperfetto?», perché stavo + gerundio usa l'imperfetto.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'stare-gerundio',
  level: 'a2',
  next: 'futuro-semplice',
  after: 'passato-prossimo-o-imperfetto',
  minutes: 25,
  slugs: {
    en: 'italian-present-continuous-stare-gerund',
    es: 'estar-gerundio-en-italiano',
    fr: 'stare-gerondif-en-italien',
    cs: 'stare-gerundium-v-italstine',
    pl: 'stare-gerundium-po-wlosku',
    tr: 'italyancada-stare-ulac',
    de: 'stare-gerundium-im-italienischen',
    ja: 'イタリア語の進行形',
  },
  nav: [
    ['forma', 'Forma'],
    ['irregolari', 'Irregolari'],
    ['uso', 'Quando usarlo'],
    ['passato', 'Al passato'],
    ['stare-per', 'Stare per'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
    ['Persona', `=${it('stare')}`, 'Esempio'],
    [
      ['io', 'sto', 'Sto parlando al telefono.'],
      ['tu', 'stai', 'Stai leggendo un libro?'],
      ['lui / lei', 'sta', 'Il bambino sta dormendo.'],
      ['noi', 'stiamo', 'Stiamo mangiando.'],
      ['voi', 'state', 'State scrivendo un’email?'],
      ['loro', 'stanno', 'Stanno lavorando.'],
    ]
  )}${h.table(
    ['Infinito', 'Gerundio', 'Esempio'],
    [
      ['parlare (-are)', 'parlando (-ando)', 'Sto parlando con Anna.'],
      ['leggere (-ere)', 'leggendo (-endo)', 'Sto leggendo il giornale.'],
      ['dormire (-ire)', 'dormendo (-endo)', 'Sto dormendo poco.'],
      ['finire (-isc-)', 'finendo (-endo)', 'Sto finendo i compiti.'],
    ]
  )}<p class="mini-note">${L.formaNote1}</p><p class="mini-note">${L.formaNote2}</p></article>
    <article class="lesson-box" id="irregolari"><h2>${L.irrH2}</h2><p>${L.irrP}</p>${h.table(
      ['Infinito', 'Gerundio', 'Esempio'],
      [
        ['fare (facevo)', 'facendo', 'Sto facendo la doccia.'],
        ['dire (dicevo)', 'dicendo', 'Che cosa stai dicendo?'],
        ['bere (bevevo)', 'bevendo', 'Sto bevendo un caffè.'],
        ['tradurre (traducevo)', 'traducendo', 'Sto traducendo una lettera.'],
        ['porre (ponevo)', 'ponendo', 'Ti sto ponendo una domanda.'],
      ]
    )}<p class="mini-note">${L.irrNote}</p></article>
    <article class="lesson-box" id="uso"><h2>${L.usoH2}</h2><p>${L.usoP}</p>${h.examples([
      [L.uAdesso, 'Non posso rispondere: sto guidando.'],
      [L.uTelefono, 'Che cosa stai facendo? Sto cucinando.'],
      [L.uPeriodo, 'In questi mesi sto studiando il tedesco.'],
      [L.uPresente, 'Che fai stasera? Esco con Anna.'],
      [L.uAbitudine, 'Lavoro in banca da dieci anni.'],
      [L.uFuturo, 'Domani parto per Roma.'],
    ])}<p class="mini-note">${L.usoNote1}</p><p class="mini-note">${L.usoNote2}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.passH2}</h2><p>${L.passP}</p>${h.table(
      ['Persona', `=${it('stare')}`, 'Esempio'],
      [
        ['io', 'stavo', 'Stavo dormendo.'],
        ['tu', 'stavi', 'Stavi uscendo?'],
        ['lui / lei', 'stava', 'Stava piovendo.'],
        ['noi', 'stavamo', 'Stavamo cenando.'],
        ['voi', 'stavate', 'Stavate guardando la TV?'],
        ['loro', 'stavano', 'Stavano parlando di te.'],
      ]
    )}${h.examples([
      [L.pInterrotta, 'Stavo dormendo quando è suonato il telefono.'],
      [L.pMentre, 'Mentre stavamo cenando, è andata via la luce.'],
      [L.pTempo, 'Quando sono uscito stava piovendo.'],
    ])}<p class="mini-note">${L.passNote}</p></article>
    <article class="lesson-box" id="stare-per"><h2>${L.sperH2}</h2><p>${L.sperP}</p>${h.examples([
      [L.sTraPoco, 'Sto per uscire: ti chiamo dopo.'],
      [L.sPassato, 'Stavo per addormentarmi quando sei arrivato.'],
      [L.sPericolo, 'Attento, il bicchiere sta per cadere!'],
      [L.sConfronto, 'Sto uscendo adesso. Sto per uscire tra un minuto.'],
    ])}<p class="mini-note">${L.sperNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io sto mangiare.', 'Io sto mangiando.'],
      ['Sono mangiando.', 'Sto mangiando.'],
      ['Sto leggiando.', 'Sto leggendo.'],
      ['Sto fando i compiti.', 'Sto facendo i compiti.'],
      ['Stanno mangiandi.', 'Stanno mangiando.'],
      ['Domani sto partendo per Roma.', 'Domani parto per Roma.'],
      ['Sto sapendo la risposta.', 'So la risposta.'],
      ['Sto essendo stanco.', 'Sono stanco.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Sto ___ al telefono. (parlare)', a: 'parlando', hint: '-are → -ando: parlando.' },
        { q: 'Marco sta ___ il giornale. (leggere)', a: 'leggendo', hint: '-ere → -endo: leggendo.' },
        { q: 'I bambini stanno ___. (dormire)', a: 'dormendo', hint: '-ire → -endo: dormendo.' },
        { q: 'Stiamo ___ il lavoro. (finire)', a: 'finendo', hint: 'Finire → finendo, senza -isc-.' },
        { q: 'Che cosa stai ___? (fare)', a: 'facendo', hint: 'Facevo → facendo.' },
        { q: 'Scusa, che cosa stai ___? (dire)', a: 'dicendo', hint: 'Dicevo → dicendo.' },
        { q: 'Sto ___ un tè caldo. (bere)', a: 'bevendo', hint: 'Bevevo → bevendo.' },
        { q: 'Luca sta ___ un libro. (tradurre)', a: 'traducendo', hint: 'Traducevo → traducendo.' },
        { q: 'State ___ la partita? (guardare)', a: 'guardando', hint: '-are → -ando: guardando.' },
        { q: 'Sto ___ poco a poco. (capire)', a: 'capendo', hint: 'Capire → capendo, senza -isc-.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Io ___ cucinando.', a: 'sto', hint: 'Io sto.' },
      { q: 'Tu ___ studiando?', a: 'stai', hint: 'Tu stai.' },
      { q: 'Anna ___ lavorando.', a: 'sta', hint: 'Lei sta.' },
      { q: 'Noi ___ arrivando!', a: 'stiamo', hint: 'Noi stiamo.' },
      { q: 'Voi ___ scherzando?', a: 'state', hint: 'Voi state.' },
      { q: 'I miei genitori ___ guardando un film.', a: 'stanno', hint: 'Loro stanno.' },
      { q: 'Ieri sera io ___ dormendo quando hai chiamato.', a: 'stavo', hint: 'Nel passato: io stavo.' },
      { q: 'Mentre noi ___ cenando, è andata via la luce.', a: 'stavamo', hint: 'Nel passato: noi stavamo.' },
      { q: 'Quando sono uscita, ___ piovendo.', a: 'stava', hint: 'Nel passato: stava piovendo.' },
      { q: 'Attento! Il treno sta ___ partire.', a: 'per', hint: 'Tra un attimo: stare per + infinito.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Domani ___ per Roma. (partire, io)', a: 'parto', hint: 'Per il futuro basta il presente: parto.' },
      { q: 'Non posso rispondere: ___. (guidare, io)', a: 'sto guidando', hint: 'Proprio adesso: sto guidando.' },
      { q: 'Di solito ___ da casa. (lavorare, io)', a: 'lavoro', hint: 'Un’abitudine: il presente.' },
      { q: '___ la risposta! (sapere, io)', a: 'so', hint: 'Sapere non va con stare + gerundio: so.' },
      {
        q: 'Silenzio, il bambino ___! (dormire)',
        a: 'sta dormendo',
        alt: 'dorme',
        hint: 'Proprio adesso: sta dormendo.',
      },
      { q: 'Ogni mattina ___ un caffè. (bere, io)', a: 'bevo', hint: 'Un’abitudine: il presente.' },
      {
        q: 'Mi ___ le mani, arrivo subito! (lavare)',
        a: 'sto lavando',
        hint: 'Mi sto lavando: il pronome va prima di stare.',
      },
      {
        q: 'Lo ___ adesso, un attimo! (fare, io)',
        a: 'sto facendo',
        hint: 'Lo sto facendo: il pronome va prima di stare.',
      },
      {
        q: 'Ti piace? Sì, mi ___ molto. (piacere)',
        a: 'piace',
        hint: 'Piacere non va con stare + gerundio: mi piace.',
      },
      {
        q: 'Che cosa ___ in questo momento? (fare, tu)',
        a: 'stai facendo',
        alt: 'fai',
        hint: 'In questo momento: stai facendo.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Pronto? Che cosa stai facendo?'],
      ['Studente', 'Sto preparando la cena. E tu?'],
      ['Martin', 'Stavo leggendo, ma adesso sto per uscire: è tardi!'],
      ['Studente', 'Allora ci sentiamo dopo. Ciao!'],
    ])}</article>`,
  it: {
    h1: 'Stare + gerundio: sto mangiando, sta lavorando',
    crumb: 'Stare + gerundio',
    cardTitle: 'Stare + gerundio',
    card: 'Sto mangiando, stavo dormendo, sto per uscire: le azioni in corso.',
    lead: 'Per dire che un’azione sta succedendo proprio adesso: sto mangiando, lui sta lavorando. Qui trovi come si forma il gerundio, gli irregolari, quando usarlo (e quando no), stavo + gerundio, stare per + infinito e 30 esercizi.',
    description:
      'Stare + gerundio in italiano: sto mangiando, sta lavorando. Il gerundio regolare e irregolare (facendo, dicendo, bevendo), quando usarlo e quando no, stavo + gerundio, stare per + infinito e 30 esercizi.',
    formaH2: 'Come si forma: stare + gerundio',
    formaP:
      'Si usa il verbo <em lang="it">stare</em> al presente e il <strong>gerundio</strong> del verbo. <em lang="it">Stare</em> cambia con la persona, il gerundio invece non cambia mai.',
    formaNote1:
      '<strong>-ere e -ire hanno la stessa desinenza: -endo.</strong> Anche i verbi come <em lang="it">finire</em> e <em lang="it">capire</em> perdono <em lang="it">-isc-</em>: <em lang="it">finendo</em>, <em lang="it">capendo</em>.',
    formaNote2:
      '<strong>Dove vanno i pronomi?</strong> Prima di <em lang="it">stare</em> oppure attaccati al gerundio: <em lang="it">lo sto facendo</em> = <em lang="it">sto facendolo</em>, <em lang="it">mi sto lavando</em> = <em lang="it">sto lavandomi</em>. La prima forma è molto più comune.',
    irrH2: 'I gerundi irregolari',
    irrP: 'I gerundi irregolari sono pochi, ma sono verbi molto usati.',
    irrNote:
      '<strong>Il trucco dell’imperfetto.</strong> Il gerundio irregolare si forma come l’imperfetto: <em lang="it">facevo → facendo</em>, <em lang="it">dicevo → dicendo</em>, <em lang="it">bevevo → bevendo</em>, <em lang="it">traducevo → traducendo</em>. Se conosci l’imperfetto, conosci già il gerundio.',
    usoH2: 'Quando si usa (e quando no)',
    usoP: '<em lang="it">Stare</em> + gerundio dice che un’azione è in corso <strong>proprio in questo momento</strong>. Ma l’italiano lo usa meno di altre lingue: spesso basta il presente.',
    uAdesso: 'Proprio adesso',
    uTelefono: 'Al telefono',
    uPeriodo: 'Un periodo in corso',
    uPresente: 'Spesso basta il presente',
    uAbitudine: 'Abitudini: il presente',
    uFuturo: 'Futuro: il presente',
    usoNote1:
      '<strong>Per il futuro non si usa mai.</strong> Per un programma si dice <em lang="it">domani parto</em>, non <em lang="it">domani sto partendo</em>.',
    usoNote2:
      '<strong>I verbi di stato vanno al presente:</strong> <em lang="it">so</em>, <em lang="it">voglio</em>, <em lang="it">mi piace</em>, <em lang="it">sono</em>, <em lang="it">ho</em>. Non si dice <em lang="it">sto sapendo</em> né <em lang="it">sto essendo</em>.',
    passH2: 'Al passato: stavo + gerundio',
    passP:
      'Con <em lang="it">stare</em> all’imperfetto si racconta un’azione in corso nel passato, spesso interrotta da un’altra al passato prossimo.',
    pInterrotta: 'Un’azione interrotta',
    pMentre: 'Con mentre',
    pTempo: 'Il tempo che faceva',
    passNote:
      '<strong>Stavo dormendo o dormivo?</strong> Vanno bene tutte e due: <em lang="it">dormivo quando è suonato il telefono</em>. Con <em lang="it">stavo</em> + gerundio l’azione sembra più viva, come se la guardassimo succedere.',
    sperH2: 'Stare per + infinito: sto per uscire',
    sperP:
      'Attenzione a non confonderli: <em lang="it">stare per</em> + infinito vuol dire che un’azione <strong>comincia tra pochissimo</strong>.',
    sTraPoco: 'Tra un attimo',
    sPassato: 'Al passato',
    sPericolo: 'Un pericolo',
    sConfronto: 'Il confronto',
    sperNote:
      '<strong>Sto uscendo o sto per uscire?</strong> <em lang="it">Sto uscendo</em>: sono già sulla porta. <em lang="it">Sto per uscire</em>: esco tra poco, ma sono ancora in casa.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il gerundio',
    part1P: 'Scrivi il gerundio del verbo tra parentesi.',
    part2H3: 'Parte 2 · Stare, stavo, stare per',
    part2P: 'Scrivi la parola che manca.',
    part3H3: 'Parte 3 · Gerundio o presente?',
    part3P: 'Scrivi la forma giusta: stare + gerundio solo se l’azione è in corso.',
  },
};
