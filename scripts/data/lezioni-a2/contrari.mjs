// Lezione A2 «I contrari: s-, dis-, in-» (2026-11-02): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in contrari-i18n.mjs.
//
// Martin il 2026-11-02: «non c'è una scheda nella grammatica per i contrari vero? come vantaggio-svantaggio».
// Le coppie di tutti i giorni senza prefisso (aprire / chiudere, sempre / mai), i prefissi degli aggettivi
// e dei nomi (s-, dis-, in- con im-, il-, ir-, a-, anti-), i verbi con s- e dis- (caricare / scaricare,
// bloccare / sbloccare) e le trappole: s- che non è un contrario (scegliere), dispiacere, infiammabile,
// le parole che un contrario con il prefisso non lo hanno (interessante → noioso). Nell'indice A2 sta in
// fondo, dopo «Gli avverbi in -mente». Il confronto con la lingua dello studente è in confronti-lingua.mjs.

export default {
  slug: 'contrari',
  level: 'a2',
  next: 'comparativo-e-superlativo',
  after: 'avverbi-in-mente',
  minutes: 20,
  hero: { src: 'grammatica/contrari-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'italian-opposites-prefixes',
    es: 'contrarios-en-italiano',
    fr: 'les-contraires-en-italien',
    cs: 'opaky-v-italstine',
    pl: 'przeciwienstwa-po-wlosku',
    tr: 'italyancada-zit-anlamlilar',
    de: 'gegenteile-im-italienischen',
    ja: 'イタリア語の反対語',
  },
  nav: [
    ['coppie', 'Coppie di contrari'],
    ['prefissi', 'I prefissi'],
    ['verbi', 'Verbi con s- e dis-'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="coppie"><h2>${L.coppieH2}</h2><p>${L.coppieP}</p>${h.examples(
    [
      [L.cAgg, 'grande / piccolo · bello / brutto · caro / economico · facile / difficile · pieno / vuoto'],
      [
        L.cVerbi,
        'aprire / chiudere · accendere / spegnere · comprare / vendere · entrare / uscire · ricordare / dimenticare',
      ],
      [L.cAvv, 'sempre / mai · presto / tardi · prima / dopo · sopra / sotto · dentro / fuori'],
      [L.cPron, 'tutto / niente · qualcuno / nessuno · qualcosa / niente'],
    ]
  )}<p class="mini-note">${L.coppieNote}</p></article>
    <article class="lesson-box" id="prefissi"><h2>${L.prefH2}</h2><p>${L.prefP}</p>${h.table(
      ['Prefisso', 'Esempio'],
      [
        [
          's-',
          'vantaggio → svantaggio · fortuna → sfortuna · comodo → scomodo · contento → scontento · conosciuto → sconosciuto · piacevole → spiacevole',
        ],
        [
          'dis-',
          'onesto → disonesto · ordine → disordine · accordo → disaccordo · occupato → disoccupato · attento → disattento',
        ],
        [
          'in-',
          'utile → inutile · felice → infelice · capace → incapace · sicuro → insicuro · credibile → incredibile',
        ],
        [
          'im- (+ p, b, m)',
          'possibile → impossibile · paziente → impaziente · probabile → improbabile · maturo → immaturo',
        ],
        ['il- (+ l)', 'legale → illegale · logico → illogico'],
        ['ir- (+ r)', 'regolare → irregolare · responsabile → irresponsabile · reale → irreale'],
        ['a- · anti-', 'tipico → atipico · sociale → asociale · simpatico → antipatico'],
      ]
    )}<p class="mini-note">${L.prefNote1}</p><p class="mini-note">${L.prefNote2}</p></article>
    <article class="lesson-box" id="verbi"><h2>${L.verbiH2}</h2><p>${L.verbiP}</p>${h.examples([
      [L.vCaricare, 'Carico la lavatrice. · Scarico la lavatrice. · Scarico una app.'],
      [L.vBloccare, 'Il telefono si è bloccato. · Come sblocco il telefono?'],
      [L.vCollegare, 'Collega il computer alla stampante. · Scollega il cavo.'],
      [L.vAttaccare, 'Attacco una foto al frigo. · Stacco la spina.'],
      [L.vMontare, 'Monto il letto nuovo. · Smonto il vecchio armadio.'],
      [L.vFare, 'Faccio la valigia. · Disfo la valigia.'],
      [L.vScoprire, 'Copro il bambino. · Il bambino si scopre di notte. · Ho scoperto un bel ristorante.'],
    ])}<p class="mini-note">${L.verbiNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tS, 'scegliere · spiegare · sbagliare · scrivere · studiare'],
      [L.tDispiacere, 'Mi dispiace, non posso venire. · Questo film non mi piace.'],
      [L.tInfiammabile, 'Attenzione: la benzina è infiammabile!'],
      [L.tSenza, 'interessante / noioso · caro / economico · buono / cattivo · vero / falso'],
      [L.tNon, 'Non è facile. · Non è bellissimo. · Non è il massimo.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['È inpossibile.', 'È impossibile.'],
      ['Parcheggiare qui è inlegale.', 'Parcheggiare qui è illegale.'],
      ['Lui è sonesto.', 'Lui è disonesto.'],
      ['Il film è disinteressante.', 'Il film è noioso.'],
      ['Mi dispiace la pizza.', 'Non mi piace la pizza.'],
      ['Non c’è qualcuno.', 'Non c’è nessuno.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Questo corso è utile? No, è ___. (utile)', a: 'inutile', hint: 'In- davanti a vocale: inutile.' },
        { q: 'Il divano è comodo? No, è ___. (comodo)', a: 'scomodo', hint: 'S- davanti a consonante: scomodo.' },
        {
          q: 'Non mi fido di lui: è ___. (onesto)',
          a: 'disonesto',
          hint: 'Davanti a vocale non si usa s-: disonesto.',
        },
        {
          q: 'Finire tutto oggi? È ___! (possibile)',
          a: 'impossibile',
          hint: 'Davanti a p, in- diventa im-: impossibile.',
        },
        { q: 'Parcheggiare qui è ___. (legale)', a: 'illegale', hint: 'Davanti a l, in- diventa il-: illegale.' },
        {
          q: '«Andare» è un verbo ___. (regolare)',
          a: 'irregolare',
          hint: 'Davanti a r, in- diventa ir-: irregolare.',
        },
        { q: 'Il treno è in ritardo: che ___! (fortuna)', a: 'sfortuna', hint: 'Fortuna → sfortuna.' },
        {
          q: 'Abitare in centro ha un grande ___: il rumore. (vantaggio)',
          a: 'svantaggio',
          hint: 'Vantaggio → svantaggio.',
        },
        {
          q: 'Mio figlio non sa aspettare: è molto ___. (paziente)',
          a: 'impaziente',
          hint: 'Davanti a p: impaziente.',
        },
        { q: 'Non so chi è quell’uomo: è uno ___. (conosciuto)', a: 'sconosciuto', hint: 'Conosciuto → sconosciuto.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Siamo arrivati: dobbiamo ___ la macchina. (caricare)', a: 'scaricare', hint: 'Caricare → scaricare.' },
      {
        q: 'Ho dimenticato il PIN e non riesco a ___ il telefono. (bloccare)',
        a: 'sbloccare',
        hint: 'Bloccare → sbloccare.',
      },
      {
        q: 'Sono tornato dal viaggio, ma non ho ancora voglia di ___ la valigia. (fare)',
        a: 'disfare',
        hint: 'Fare la valigia → disfare la valigia.',
      },
      {
        q: 'Il wi-fi non va: prova a ___ il modem e poi a ricollegarlo. (collegare)',
        a: 'scollegare',
        hint: 'Collegare → scollegare.',
      },
      {
        q: 'La ruota della bici è ___: devo gonfiarla. (gonfia)',
        a: 'sgonfia',
        hint: 'Gonfiare → sgonfiare: la ruota è sgonfia.',
      },
      { q: 'Di notte voglio ___ le notifiche. (attivare)', a: 'disattivare', hint: 'Attivare → disattivare.' },
      { q: 'Il letto non passa dalla porta: lo dobbiamo ___. (montare)', a: 'smontare', hint: 'Montare → smontare.' },
      { q: 'Domani il sindaco va a ___ la nuova statua. (coprire)', a: 'scoprire', hint: 'Coprire → scoprire.' },
      { q: 'Fa caldo: posso ___ la giacca? (abbottonare)', a: 'sbottonare', hint: 'Abbottonare → sbottonare.' },
      {
        q: 'Prima di pulire il forno, ___ la spina! (attaccare, imperativo tu)',
        a: 'stacca',
        hint: 'Attaccare → staccare: stacca!',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Il negozio apre alle nove e ___ alle sette. (apre)', a: 'chiude', hint: 'Aprire → chiudere.' },
      {
        q: 'Questa borsa è troppo cara: prendo quella più ___. (cara)',
        a: 'economica',
        hint: 'Il contrario di caro è economico.',
      },
      { q: 'Entri o ___? (entri)', a: 'esci', hint: 'Entrare → uscire: esci.' },
      { q: 'Io vendo la bici e tu la ___. (vendo)', a: 'compri', hint: 'Vendere → comprare: compri.' },
      { q: 'La luce è accesa? No, l’ho ___. (accesa)', a: 'spenta', hint: 'Accendere → spegnere: spenta.' },
      { q: 'C’è qualcuno in casa? No, non c’è ___. (qualcuno)', a: 'nessuno', hint: 'Qualcuno → non… nessuno.' },
      {
        q: 'Hai capito tutto? No, non ho capito ___. (tutto)',
        a: 'niente',
        alt: 'nulla',
        hint: 'Tutto → non… niente.',
      },
      { q: 'Vai sempre in palestra? No, non ci vado ___. (sempre)', a: 'mai', hint: 'Sempre → non… mai.' },
      {
        q: 'Questa risposta è giusta? No, è ___. (giusta)',
        a: 'sbagliata',
        hint: 'Il contrario di giusto è sbagliato.',
      },
      {
        q: 'Il film non è interessante: è ___. (interessante)',
        a: 'noioso',
        hint: 'Disinteressante non esiste: noioso.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Allora, ti piace la casa nuova?'],
      ['Studente', 'Ha vantaggi e svantaggi. È luminosa, ma un po’ scomoda: il bagno è piccolissimo.'],
      ['Martin', 'E i vicini?'],
      [
        'Studente',
        'La signora del primo piano è simpatica, il signore del secondo è antipatico. Ma il prezzo non è caro, anzi: è economico!',
      ],
      ['Martin', 'Allora è impossibile dire di no!'],
    ])}</article>`,
  it: {
    h1: 'I contrari: s-, dis-, in-',
    card: 'Vantaggio / svantaggio, possibile / impossibile, caricare / scaricare: i contrari e i loro prefissi.',
    lead: 'Vantaggio e svantaggio, onesto e disonesto, possibile e impossibile: le coppie di contrari di tutti i giorni, i prefissi che trasformano una parola nel suo contrario (s-, dis-, in-, im-, il-, ir-), i verbi come caricare e scaricare e le trappole, come scegliere o dispiacere. Con 30 esercizi.',
    description:
      'I contrari in italiano: vantaggio / svantaggio, possibile / impossibile, caricare / scaricare. I prefissi s-, dis-, in-, im-, il-, ir-, le coppie di tutti i giorni, le trappole e 30 esercizi.',
    heroAlt: 'Due finestre uguali su un muro giallo: una aperta al sole, l’altra chiusa nell’ombra',
    coppieH2: 'Le coppie di tutti i giorni',
    coppieP:
      'Molti contrari sono parole diverse, senza un prefisso: si imparano in coppia. Quando impari un aggettivo o un verbo nuovo, chiediti subito qual è il suo contrario.',
    cAgg: 'Aggettivi',
    cVerbi: 'Verbi',
    cAvv: 'Avverbi',
    cPron: 'Pronomi',
    coppieNote:
      '<strong>Nessuno, niente e mai</strong> vogliono <em lang="it">non</em> davanti al verbo: <em lang="it">non c’è nessuno</em>, <em lang="it">non ho capito niente</em>, <em lang="it">non vado mai al cinema</em>. In italiano due negazioni non si annullano.',
    prefH2: 'I prefissi: s-, dis-, in-',
    prefP:
      'Spesso basta aggiungere un <strong>prefisso</strong> all’inizio della parola. I più comuni sono tre: <em lang="it">s-</em>, <em lang="it">dis-</em> e <em lang="it">in-</em>. Davanti a <em lang="it">p, b, m</em> il prefisso <em lang="it">in-</em> diventa <em lang="it">im-</em>; davanti a <em lang="it">l</em> diventa <em lang="it">il-</em>; davanti a <em lang="it">r</em> diventa <em lang="it">ir-</em>.',
    prefNote1:
      '<strong>Un trucco per scegliere:</strong> <em lang="it">s-</em> va solo davanti a una consonante (<em lang="it">s-comodo</em>, <em lang="it">s-fortuna</em>). Davanti a una vocale si usa <em lang="it">dis-</em> o <em lang="it">in-</em> (<em lang="it">dis-onesto</em>, <em lang="it">in-utile</em>): <em lang="it">sonesto</em> non esiste. Per il resto non c’è una regola: le parole si imparano con il loro prefisso.',
    prefNote2:
      '<strong>Il prefisso non cambia il resto della parola:</strong> l’accordo è lo stesso (<em lang="it">disonesto, disonesta, disonesti</em>) e anche l’avverbio si forma come sempre (<em lang="it">sfortunatamente</em>, <em lang="it">impossibilmente</em>).',
    verbiH2: 'I verbi con s- e dis-',
    verbiP:
      'Anche molti verbi hanno il contrario con <em lang="it">s-</em> o <em lang="it">dis-</em>. Sono verbi di tutti i giorni: la casa, il telefono, il computer, i viaggi.',
    vCaricare: 'Caricare / scaricare',
    vBloccare: 'Bloccare / sbloccare',
    vCollegare: 'Collegare / scollegare',
    vAttaccare: 'Attaccare / staccare',
    vMontare: 'Montare / smontare',
    vFare: 'Fare / disfare',
    vScoprire: 'Coprire / scoprire',
    verbiNote:
      '<strong>Due verbi con un secondo significato:</strong> <em lang="it">scaricare</em> vuol dire anche prendere un file da internet (<em lang="it">scaricare una app</em>), e <em lang="it">scoprire</em> vuol dire anche trovare una cosa nuova (<em lang="it">ho scoperto un bel ristorante</em>).',
    trapH2: 'Le trappole',
    trapP:
      'Attenzione: non tutte le parole che cominciano con <em lang="it">s-</em>, <em lang="it">dis-</em> o <em lang="it">in-</em> sono contrari.',
    tS: 'S- che non è un contrario',
    tDispiacere: 'Dispiacere non è «non piacere»',
    tInfiammabile: 'Infiammabile: brucia!',
    tSenza: 'Contrari senza prefisso',
    tNon: 'Con non, più gentile',
    trapNote:
      '<strong>Mi dispiace</strong> vuol dire che sei triste per qualcosa o chiedi scusa; il contrario di <em lang="it">mi piace</em> è <em lang="it">non mi piace</em>. <strong>Infiammabile</strong> vuol dire che prende fuoco facilmente: qui <em lang="it">in-</em> non è una negazione. E <em lang="it">disinteressante</em> o <em lang="it">incaro</em> non esistono: per molte parole il contrario è un’altra parola. Per essere gentili, gli italiani usano spesso <em lang="it">non</em> + la parola positiva: <em lang="it">non è bellissimo</em> invece di <em lang="it">è brutto</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Aggiungi il prefisso',
    part1P: 'Scrivi il contrario della parola tra parentesi con s-, dis-, in-, im-, il- o ir-.',
    part2H3: 'Parte 2 · I verbi al contrario',
    part2P: 'Scrivi il contrario del verbo tra parentesi, con s- o dis-.',
    part3H3: 'Parte 3 · Contrari senza prefisso',
    part3P: 'Scrivi il contrario della parola tra parentesi, nella forma giusta.',
  },
};
