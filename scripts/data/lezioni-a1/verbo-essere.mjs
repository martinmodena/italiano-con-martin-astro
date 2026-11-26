// Lezione A1 «Il verbo essere» (rifatta il 2026-11-26 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in verbo-essere-i18n.mjs.
//
// Tredicesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano: una regola, una tabella, sei esempi e 10 esercizi. Ora: quando si usa (chi, di dove, com'è, dov'è,
// il lavoro), le forme (è con l'accento, il soggetto che non serve, Lei di cortesia), negazione e domande, l'accordo
// dell'aggettivo, dove e di dove, essere o avere (età, fame, freddo), essere o stare (come stai?), le frasi utili
// (sono io, che ore sono?, quant'è?), le trappole e 30 esercizi. Il confronto con la lingua resta quello di
// confronti-lingua.mjs; gli errori per lingua sono in confronti-verbo-essere.mjs. Nell'indice A1 la tessera resta
// dov'era; il pulsante finale porta al verbo avere.

export default {
  slug: 'verbo-essere',
  next: 'verbo-avere',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/verbo-essere-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-italian-verb-essere',
    es: 'el-verbo-essere-en-italiano',
    fr: 'le-verbe-essere-en-italien',
    cs: 'italske-sloveso-essere',
    pl: 'wloski-czasownik-essere',
    tr: 'italyanca-essere-fiili',
    de: 'das-italienische-verb-essere',
    ja: 'イタリア語動詞-essere',
  },
  nav: [
    ['uso', 'Uso'],
    ['forme', 'Forme'],
    ['domande', 'Negazione e domande'],
    ['accordo', 'Accordo'],
    ['dove', 'Dove?'],
    ['avere', 'Essere o avere'],
    ['stare', 'Essere o stare?'],
    ['frasi', 'Frasi utili'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="uso"><h2>${L.usoH2}</h2><p>${L.usoP}</p>${h.examples([
    [L.uChi, 'Sono Martin. · Lei è Anna.'],
    [L.uNazione, 'Sono italiano. · Anna è di Milano.'],
    [L.uLavoro, 'Sono insegnante. · Marco è medico.'],
    [L.uCome, 'La casa è grande. · Il caffè è buono.'],
    [L.uStato, 'Sono stanco. · Siamo contenti.'],
    [L.uDove, 'Sono a casa. · Il libro è sul tavolo.'],
  ])}<p class="mini-note">${L.usoNote}</p></article>
    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
      ['Persona', 'Forma', 'Esempio'],
      [
        ['io', 'sono', 'Sono italiano.'],
        ['tu', 'sei', 'Sei stanca?'],
        ['lui / lei / Lei', 'è', 'È a Roma.'],
        ['noi', 'siamo', 'Siamo amici.'],
        ['voi', 'siete', 'Siete pronti?'],
        ['loro', 'sono', 'Sono studenti.'],
      ]
    )}<p class="mini-note">${L.formeNote}</p></article>
    <article class="lesson-box" id="domande"><h2>${L.domH2}</h2><p>${L.domP}</p>${h.examples([
      [L.dNon, 'Non sono stanco. · Marco non è a casa.'],
      [L.dDomanda, 'Sei italiano? · Siete pronti?'],
      [L.dParole, 'Chi è? · Com’è? · Dov’è? · Di dove sei?'],
      [L.dRisposta, 'Sei stanco? Sì, sono stanco. · No, non sono stanco.'],
    ])}<p class="mini-note">${L.domNote}</p></article>
    <article class="lesson-box" id="accordo"><h2>${L.accH2}</h2><p>${L.accP}</p>${h.table(
      ['Maschile', 'Femminile'],
      [
        ['Marco è stanco.', 'Anna è stanca.'],
        ['I ragazzi sono stanchi.', 'Le ragazze sono stanche.'],
        ['Marco è felice.', 'Anna è felice.'],
        ['Marco e Anna sono stanchi.', 'Anna e Giulia sono stanche.'],
      ]
    )}<p class="mini-note">${L.accNote.replace('{{AGGETTIVI}}', h.href('aggettivi-qualificativi', 'a1'))}</p></article>
    <article class="lesson-box" id="dove"><h2>${L.doveH2}</h2><p>${L.doveP}</p>${h.examples([
      [L.dvLuogo, 'Sono a casa. · Siamo in Italia. · Il gatto è in cucina.'],
      [L.dvDomanda, 'Dov’è la stazione? · Dove sono le chiavi?'],
      [L.dvOrigine, 'Di dove sei? · Sono di Roma. · Sono italiana.'],
      [L.dvCe, 'C’è un bar qui vicino? · Sì, il bar è in piazza.'],
    ])}<p class="mini-note">${L.doveNote.replace('{{CE}}', h.href('ce-ci-sono', 'a1'))}</p></article>
    <article class="lesson-box" id="avere"><h2>${L.avH2}</h2><p>${L.avP}</p>${h.examples([
      [L.aEta, 'Ho trent’anni. · Quanti anni hai?'],
      [L.aCorpo, 'Ho fame. · Ho sete. · Ho sonno.'],
      [L.aCaldo, 'Ho freddo. · Ho caldo.'],
      [L.aAltro, 'Ho ragione. · Ho paura. · Ho fretta.'],
      [L.aTempo, 'Oggi fa freddo. · Fa caldo.'],
    ])}<p class="mini-note">${L.avNote.replace('{{AVERE}}', h.href('verbo-avere', 'a1'))}</p></article>
    <article class="lesson-box" id="stare"><h2>${L.stH2}</h2><p>${L.stP}</p>${h.examples([
      [L.sSalute, 'Come stai? Sto bene. · Come sta, signora?'],
      [L.sGerundio, 'Sto mangiando. · Stiamo arrivando.'],
      [L.sStato, 'Sono stanco. · Sono contenta. · Sono a casa.'],
    ])}<p class="mini-note">${L.stNote.replace('{{GERUNDIO}}', h.href('stare-gerundio', 'a2'))}</p></article>
    <article class="lesson-box" id="frasi"><h2>${L.frasiH2}</h2><p>${L.frasiP}</p>${h.examples([
      [L.fIo, 'Chi è? Sono io. · Siamo noi.'],
      [L.fOre, 'Che ore sono? Sono le tre. · È l’una.'],
      [L.fPrezzo, 'Quant’è? Sono dieci euro. · È caro.'],
      [L.fOpinione, 'È vero. · È tardi. · È facile.'],
      [L.fPassato, 'Ieri sono stato a casa. · Anna è stata a Roma.'],
    ])}<p class="mini-note">${L.frasiNote
      .replace('{{ORE}}', h.href('che-ore-sono', 'a1'))
      .replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tAccento, 'Anna è italiana e Marco è francese.'],
      [L.tSoggetto, 'Sono stanco. · Io sono stanco, non tu!'],
      [L.tLavoro, 'Sono studente. · Sono un bravo studente.'],
      [L.tSonoIo, 'Sono io. · Sei tu? · Siete voi?'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Anna e italiana.', 'Anna è italiana.'],
      ['Sono trenta anni.', 'Ho trent’anni.'],
      ['Sono fame.', 'Ho fame.'],
      ['Come sei? Sono bene.', 'Come stai? Sto bene.'],
      ['Anna è stanco.', 'Anna è stanca.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Io ___ italiano.', a: 'sono', hint: 'Essere con io: sono.' },
        { q: 'Tu ___ a casa?', a: 'sei', hint: 'Essere con tu: sei.' },
        { q: 'Anna ___ di Milano.', a: 'è', hint: 'Essere con lei: è, con l’accento.' },
        { q: 'Noi ___ amici.', a: 'siamo', hint: 'Essere con noi: siamo.' },
        { q: 'Voi ___ pronti?', a: 'siete', hint: 'Essere con voi: siete.' },
        { q: 'Marco e Luca ___ studenti.', a: 'sono', hint: 'Marco e Luca = loro: sono.' },
        { q: 'Signora, Lei ___ italiana?', a: 'è', hint: 'Lei di cortesia: è, come con lei.' },
        { q: 'Marco e io ___ in ufficio.', a: 'siamo', hint: 'Marco e io = noi: siamo.' },
        { q: 'Roma ___ in Italia.', a: 'è', hint: 'Roma è una città: è.' },
        { q: 'Tu e Anna ___ di Napoli?', a: 'siete', hint: 'Tu e Anna = voi: siete.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Anna è stanc___.', a: 'a', hint: 'Anna è femminile: stanca.' },
      { q: 'I ragazzi sono content___.', a: 'i', hint: 'Maschile plurale: contenti.' },
      { q: 'Le case sono piccol___.', a: 'e', hint: 'Femminile plurale: piccole.' },
      { q: 'Il caffè è buon___.', a: 'o', hint: 'Caffè è maschile: buono.' },
      { q: 'Io ___ sono stanco. (negazione)', a: 'non', hint: 'Non va prima del verbo: non sono.' },
      { q: '___ la stazione? È qui vicino.', a: 'dov’è', alt: "dov'è|dove è", hint: 'Per il luogo: dov’è?, con l’apostrofo.' },
      { q: 'Di ___ sei? Sono di Roma.', a: 'dove', hint: 'Per l’origine: di dove sei?' },
      { q: '___ è? Sono io, Marco.', a: 'chi', hint: 'Per la persona: chi è?' },
      { q: 'Chi è? ___ io.', a: 'sono', hint: 'Sono io: il verbo va con io.' },
      { q: 'Che ore ___? Sono le cinque.', a: 'sono', hint: 'Le ore sono plurali: che ore sono?' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Quanti anni ___? (tu)', a: 'hai', hint: 'L’età si dice con avere: quanti anni hai?' },
      { q: '___ trent’anni. (io)', a: 'ho', hint: 'L’età con avere: ho trent’anni.' },
      { q: 'Ciao, come ___? (tu)', a: 'stai', hint: 'Per la salute si usa stare: come stai?' },
      { q: '___ bene, grazie. (io)', a: 'sto', hint: 'Stare con io: sto bene.' },
      { q: '___ fame, andiamo a mangiare? (io)', a: 'ho', hint: 'La fame si dice con avere: ho fame.' },
      { q: 'Marco ___ stanco dopo il lavoro.', a: 'è', hint: 'Stanco è un aggettivo: essere.' },
      { q: 'Apri la finestra? ___ caldo. (io)', a: 'ho', hint: 'Sentire caldo: ho caldo, con avere.' },
      { q: 'Oggi ___ freddo: metti la giacca.', a: 'fa', hint: 'Il tempo che fa: fa freddo.' },
      { q: 'Noi ___ a casa stasera.', a: 'siamo', hint: 'Il luogo si dice con essere: siamo a casa.' },
      { q: 'Hai ragione, ___ vero.', a: 'è', hint: 'È vero: essere alla terza persona.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Ciao! Io sono Martin, sono l’insegnante. Tu come ti chiami?'],
      ['Studente', 'Ciao, sono Alex. Non sono italiano, sono di Londra.'],
      ['Martin', 'Benvenuto! Come stai?'],
      ['Studente', 'Sto bene, grazie, ma sono un po’ stanco: il viaggio è stato lungo.'],
      ['Martin', 'Hai fame? Il bar è qui vicino e il caffè è buono.'],
      ['Studente', 'Sì, ho fame e ho anche sete. Andiamo!'],
    ])}</article>`,
  it: {
    h1: 'Il verbo essere',
    card: 'Sono, sei, è: le forme, l’accordo, essere o avere (ho fame), essere o stare (come stai?) e 30 esercizi.',
    lead: 'Sono, sei, è, siamo, siete, sono: con il verbo essere dici chi sei, di dove sei, com’è una cosa e dove si trova. Le forme (è con l’accento), la negazione e le domande, l’accordo dell’aggettivo (Anna è stanca), quando si usa avere (ho fame, ho trent’anni) e quando stare (come stai?), le frasi utili e le trappole. Con 30 esercizi.',
    description:
      'Il verbo essere in italiano: sono, sei, è, siamo, siete, sono. Quando si usa (identità, origine, lavoro, descrizione, luogo), la negazione e le domande, l’accordo dell’aggettivo, essere o avere (ho fame, ho freddo), essere o stare (come stai?), frasi utili come sono io e che ore sono, gli errori tipici e 30 esercizi.',
    heroAlt: 'Una Vespa rossa parcheggiata al sole su una strada lastricata, davanti a un muro rosa salmone con le persiane azzurre',
    usoH2: 'Quando si usa',
    usoP:
      'Il verbo <strong>essere</strong> è il primo verbo da imparare. Serve per dire <strong>chi è</strong> una persona, <strong>di dove</strong> è, che <strong>lavoro</strong> fa, <strong>com’è</strong> una persona o una cosa e <strong>dove</strong> si trova.',
    uChi: 'Chi è: il nome',
    uNazione: 'Di dove è: nazionalità e città',
    uLavoro: 'Il lavoro',
    uCome: 'Com’è: le caratteristiche',
    uStato: 'Come si sente: lo stato',
    uDove: 'Dov’è: il luogo',
    usoNote:
      'Guarda la Vespa della foto: <em lang="it">è una Vespa</em> (che cos’è), <em lang="it">è rossa</em> (com’è), <em lang="it">è in strada</em> (dov’è). Con un solo verbo si descrive quasi tutto.',
    formeH2: 'Le forme',
    formeP: 'Il presente di essere è <strong>irregolare</strong>: le sei forme vanno imparate a memoria. <strong>Sono</strong> vale per <em lang="it">io</em> e per <em lang="it">loro</em>.',
    formeNote:
      '<strong>È</strong> (verbo) vuole sempre l’accento; <strong>e</strong> senza accento vuol dire «e, and»: <em lang="it">Anna è italiana e Marco è francese</em>. Il soggetto di solito non si dice, perché la forma del verbo basta: <em lang="it">sono stanco</em>, <em lang="it">siamo amici</em>. Per dare del <strong>Lei</strong> (cortesia) si usa la forma di <em lang="it">lui / lei</em>: <em lang="it">Lei è italiana, signora?</em>',
    domH2: 'Negazione e domande',
    domP: 'Per la negazione basta <strong>non</strong> prima del verbo. Per la domanda le parole non cambiano: cambia solo l’intonazione, che sale alla fine.',
    dNon: 'Non prima del verbo',
    dDomanda: 'La domanda: stesse parole, voce che sale',
    dParole: 'Le parole per chiedere',
    dRisposta: 'Rispondere sì o no',
    domNote:
      'Davanti a <em lang="it">è</em> le parole <em lang="it">come, dove</em> perdono la vocale: <strong>com’è</strong>, <strong>dov’è</strong>. <em lang="it">Chi è</em> resta intero. Al plurale: <em lang="it">dove sono le chiavi?</em>',
    accH2: 'L’accordo dell’aggettivo',
    accP: 'Dopo essere l’aggettivo si accorda con il soggetto: <strong>maschile o femminile</strong>, <strong>singolare o plurale</strong>.',
    accNote:
      '<strong>-o</strong> e <strong>-a</strong> al singolare, <strong>-i</strong> e <strong>-e</strong> al plurale: <em lang="it">stanco, stanca, stanchi, stanche</em>. Gli aggettivi in <strong>-e</strong> (<em lang="it">felice, gentile</em>) hanno una sola forma al singolare e <em lang="it">-i</em> al plurale: <em lang="it">sono felici</em>. Con un gruppo misto si usa il maschile. Tutto il resto nella lezione sugli <a href="{{AGGETTIVI}}">aggettivi qualificativi</a>.',
    doveH2: 'Dove e di dove',
    doveP: 'Con essere si dice dove si trova qualcosa e da dove viene una persona.',
    dvLuogo: 'Il luogo: essere a, in, su…',
    dvDomanda: 'Dov’è? Dove sono?',
    dvOrigine: 'L’origine: essere di + città',
    dvCe: 'Una cosa nuova: c’è',
    doveNote:
      '<strong>Sono di Roma</strong> (la città) ma <strong>sono italiano</strong> (la nazionalità, senza <em lang="it">di</em>). Per una cosa che nomini per la prima volta si usa <strong>c’è</strong>: <em lang="it">c’è un bar?</em>; per una cosa già nota, <strong>è</strong>: <em lang="it">il bar è in piazza</em>. Vedi <a href="{{CE}}">c’è e ci sono</a>.',
    avH2: 'Essere o avere?',
    avP: 'Molte lingue dicono «sono affamato» o «sono vent’anni». L’italiano usa <strong>avere</strong> + nome: si «ha» fame, come si ha una cosa.',
    aEta: 'L’età',
    aCorpo: 'Fame, sete, sonno',
    aCaldo: 'Freddo e caldo (che senti tu)',
    aAltro: 'Ragione, paura, fretta',
    aTempo: 'Il tempo che fa: fare',
    avNote:
      '<strong>Ho freddo</strong> = sento freddo; <strong>sono freddo</strong> = sono una persona fredda, poco affettuosa. Per il tempo si usa <strong>fare</strong>: <em lang="it">fa freddo</em>, non <em lang="it">è freddo</em>. Vedi anche <a href="{{AVERE}}">il verbo avere</a>.',
    stH2: 'Essere o stare?',
    stP: 'Anche <strong>stare</strong> traduce a volte «essere», ma ha pochi usi precisi. Nel dubbio, si usa <strong>essere</strong>.',
    sSalute: 'La salute: come stai? sto bene',
    sGerundio: 'Stare + gerundio: un’azione in corso',
    sStato: 'Stati e luoghi: essere',
    stNote:
      '<strong>Come stai?</strong> chiede della salute; <strong>com’è?</strong> chiede una descrizione: <em lang="it">com’è Roma? È bellissima</em>. Per dire come ti senti con un aggettivo si usa essere: <em lang="it">sono stanco</em>, <em lang="it">sono contenta</em>. Per <em lang="it">sto mangiando</em> vedi <a href="{{GERUNDIO}}">stare + gerundio</a>.',
    frasiH2: 'Frasi utili',
    frasiP: 'Alcune frasi con essere che si usano ogni giorno.',
    fIo: 'Sono io: il verbo va con la persona',
    fOre: 'Le ore',
    fPrezzo: 'Il prezzo',
    fOpinione: 'È vero, è tardi',
    fPassato: 'Al passato: sono stato, sono stata',
    frasiNote:
      'Si dice <strong>sono io</strong>, non <em lang="it">è io</em>: il verbo si accorda con <em lang="it">io</em>. Le ore sono plurali (<em lang="it">sono le tre</em>), tranne <em lang="it">è l’una</em>, <em lang="it">è mezzogiorno</em>: vedi <a href="{{ORE}}">che ore sono?</a>. Al passato essere fa <strong>sono stato / sono stata</strong>: vedi <a href="{{PASSATO}}">il passato prossimo</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tAccento: 'È (verbo) ed e (congiunzione)',
    tSoggetto: 'Io sono solo per contrasto',
    tLavoro: 'Il lavoro senza articolo',
    tSonoIo: 'Sono io, sei tu',
    trapNote:
      'Scrivi sempre <strong>è</strong> con l’accento quando è il verbo. <em lang="it">Io sono</em> non è sbagliato, ma si usa per <strong>contrastare</strong>: <em lang="it">io sono stanco, non tu</em>. Con il lavoro di solito non si mette l’articolo (<em lang="it">sono studente</em>), ma con un aggettivo sì: <em lang="it">sono un bravo studente</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo la parola che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Le forme',
    part1P: 'Sono, sei, è, siamo, siete o sono?',
    part2H3: 'Parte 2 · Accordo, negazione e domande',
    part2P: 'La lettera finale dell’aggettivo, non, chi, dove.',
    part3H3: 'Parte 3 · Essere, avere, stare o fare?',
    part3P: 'Il verbo giusto per l’età, la fame, la salute e il tempo.',
  },
};
