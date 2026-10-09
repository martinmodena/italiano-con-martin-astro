// Lezione A2 «Gli avverbi in -mente» (2026-10-09): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in avverbi-in-mente-i18n.mjs.
//
// Seconda lezione sugli avverbi chiesta da Martin il 2026-10-09: come si formano gli avverbi in -mente
// (femminile + -mente, -le/-re che perdono la e), gli irregolari bene e male, la differenza fra
// aggettivo e avverbio (buono / bene, molto stanca / molti amici), dove si mettono, gli avverbi
// della conversazione e due falsi amici (attualmente, eventualmente). Nell'indice A2 sta in fondo,
// dopo «I pronomi diretti»; il pulsante finale porta ai comparativi (meglio, peggio).

export default {
  slug: 'avverbi-in-mente',
  level: 'a2',
  next: 'comparativo-e-superlativo',
  after: 'pronomi-diretti',
  minutes: 20,
  slugs: {
    en: 'italian-adverbs-ending-in-mente',
    es: 'adverbios-en-mente-en-italiano',
    fr: 'adverbes-en-mente-en-italien',
    cs: 'prislovce-na-mente-v-italstine',
    pl: 'przyslowki-na-mente-po-wlosku',
    tr: 'italyancada-mente-zarflari',
    de: 'adverbien-auf-mente-im-italienischen',
    ja: 'イタリア語の副詞-mente',
  },
  nav: [
    ['forma', 'Forma'],
    ['bene', 'Aggettivo o avverbio?'],
    ['posizione', 'Posizione'],
    ['frasi', 'Frasi utili'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
    ['Maschile', 'Femminile', 'Avverbio'],
    [
      ['lento', 'lenta', 'lentamente'],
      ['sicuro', 'sicura', 'sicuramente'],
      ['vero', 'vera', 'veramente'],
      ['tranquillo', 'tranquilla', 'tranquillamente'],
      ['veloce', 'veloce', 'velocemente'],
      ['semplice', 'semplice', 'semplicemente'],
    ]
  )}<p>${L.formaP2}</p>${h.examples([
    [L.fLe, 'facile → facilmente · gentile → gentilmente · normale → normalmente'],
    [L.fRe, 'regolare → regolarmente · particolare → particolarmente'],
    [L.fIrr, 'buono → bene · cattivo → male · leggero → leggermente · violento → violentemente'],
  ])}<p class="mini-note">${L.formaNote}</p></article>
    <article class="lesson-box" id="bene"><h2>${L.beneH2}</h2><p>${L.beneP}</p>${h.examples([
      [L.bBuono, 'Questa pizza è buona. · Marco cucina bene.'],
      [L.bCattivo, 'Il latte è cattivo. · Stanotte ho dormito male.'],
      [L.bStare, 'Come stai? · Sto bene, grazie!'],
      [L.bMolto, 'Sono molto stanca. · Ho molti amici.'],
      [L.bMeglio, 'Parli italiano meglio di me!'],
    ])}<p class="mini-note">${L.beneNote1}</p><p class="mini-note">${L.beneNote2}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.pVerbo, 'Parla lentamente, per favore.'],
      [L.pAggettivo, 'È veramente bello. · È particolarmente difficile.'],
      [L.pPassato, 'Ho capito perfettamente. · Ho dormito bene.'],
      [L.pFrase, 'Fortunatamente non piove.'],
    ])}<p class="mini-note">${L.posNote}</p></article>
    <article class="lesson-box" id="frasi"><h2>${L.frasiH2}</h2><p>${L.frasiP}</p>${h.examples([
      [L.qSi, 'Vieni stasera? · Sicuramente! · Assolutamente sì!'],
      [L.qForse, 'Probabilmente arrivo alle otto.'],
      [L.qStupore, 'Veramente? Non lo sapevo!'],
      [L.qFinalmente, 'Finalmente sei arrivato!'],
      [L.qOvvio, 'Ovviamente la pizza è italiana.'],
      [L.qFalsi, 'Attualmente lavoro a Milano. · Eventualmente ti chiamo.'],
    ])}<p class="mini-note">${L.frasiNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Parla lentomente.', 'Parla lentamente.'],
      ['Facilemente.', 'Facilmente.'],
      ['Velocamente.', 'Velocemente.'],
      ['Marco cucina buono.', 'Marco cucina bene.'],
      ['Sto buono, grazie.', 'Sto bene, grazie.'],
      ['Sono molta stanca.', 'Sono molto stanca.'],
      ['Ho molto amici.', 'Ho molti amici.'],
      ['Attualmente (= in realtà) non è vero.', 'In realtà non è vero.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Guida ___, per favore! (lento)', a: 'lentamente', hint: 'Lento → lenta → lentamente.' },
        { q: 'Ho trovato la strada ___. (facile)', a: 'facilmente', hint: '-le perde la e: facilmente.' },
        { q: 'Mangi troppo ___. (veloce)', a: 'velocemente', hint: '-e + mente: velocemente.' },
        { q: 'Sei ___ bravo! (vero)', a: 'veramente', hint: 'Vero → vera → veramente.' },
        { q: 'Mi ha risposto ___. (gentile)', a: 'gentilmente', hint: '-le perde la e: gentilmente.' },
        { q: 'Domani ___ piove. (sicuro)', a: 'sicuramente', hint: 'Sicuro → sicura → sicuramente.' },
        { q: '___ ceniamo alle otto. (normale)', a: 'normalmente', hint: '-le perde la e: normalmente.' },
        {
          q: 'Il bambino dorme ___. (tranquillo)',
          a: 'tranquillamente',
          hint: 'Tranquillo → tranquilla → tranquillamente.',
        },
        { q: 'Vado in palestra ___. (regolare)', a: 'regolarmente', hint: '-re perde la e: regolarmente.' },
        { q: 'Piove ___. (leggero)', a: 'leggermente', hint: 'Irregolare: leggermente.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Questo gelato è molto ___. (buono / bene)', a: 'buono', hint: 'Descrive il gelato: aggettivo, buono.' },
      { q: 'Luca cucina molto ___. (buono / bene)', a: 'bene', hint: 'Descrive come cucina: avverbio, bene.' },
      { q: 'Come stai? Sto ___, grazie! (buono / bene)', a: 'bene', hint: 'Stare bene.' },
      {
        q: 'Ho dormito ___: c’era troppo rumore. (cattivo / male)',
        a: 'male',
        hint: 'Descrive come ho dormito: male.',
      },
      { q: 'Non bere quel latte: è ___! (cattivo / male)', a: 'cattivo', hint: 'Descrive il latte: cattivo.' },
      { q: 'Parli italiano molto ___! (buono / bene)', a: 'bene', hint: 'Descrive come parli: bene.' },
      { q: 'Oggi sono ___ stanca. (molto / molta)', a: 'molto', hint: 'Davanti a un aggettivo molto non cambia.' },
      {
        q: 'A Roma ho ___ amici. (molto / molti)',
        a: 'molti',
        hint: 'Davanti a un nome molto si accorda: molti amici.',
      },
      {
        q: 'Questa pasta è ___ buona! (troppo / troppa)',
        a: 'troppo',
        hint: 'Davanti a un aggettivo troppo non cambia.',
      },
      { q: 'Anna parla inglese ___ di me. (bene, +)', a: 'meglio', hint: 'Più bene = meglio.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: '___ sei arrivato! Ti aspetto da un’ora. (finale)', a: 'finalmente', hint: 'Finale → finalmente.' },
      { q: '___ hai ragione tu. (probabile)', a: 'probabilmente', hint: 'Probabile → probabilmente.' },
      { q: 'Vieni alla festa? ___ sì! (assoluto)', a: 'assolutamente', hint: 'Assoluto → assoluta → assolutamente.' },
      { q: '___? Non lo sapevo! (vero)', a: 'veramente', hint: 'Vero → veramente.' },
      {
        q: '___ lavoro a Milano, ma l’anno prossimo vado a Roma. (attuale)',
        a: 'attualmente',
        hint: 'Attualmente = adesso, in questo periodo.',
      },
      { q: 'Se c’è un problema, ___ ti chiamo. (eventuale)', a: 'eventualmente', hint: 'Eventualmente = se serve.' },
      { q: '___ la pizza è italiana! (ovvio)', a: 'ovviamente', hint: 'Ovvio → ovvia → ovviamente.' },
      { q: 'Parla ___ tre lingue. (perfetto)', a: 'perfettamente', hint: 'Perfetto → perfetta → perfettamente.' },
      { q: 'Vieni qui ___! (immediato)', a: 'immediatamente', hint: 'Immediato → immediata → immediatamente.' },
      { q: 'Ascolta ___ la domanda. (attento)', a: 'attentamente', hint: 'Attento → attenta → attentamente.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Finalmente! Come stai?'],
      ['Studente', 'Bene, grazie. Ma oggi sono molto stanco: ho dormito male.'],
      ['Martin', 'Allora parlo lentamente. Capisci tutto?'],
      ['Studente', 'Sì, perfettamente! Lei parla veramente bene.'],
    ])}</article>`,
  it: {
    h1: 'Gli avverbi in -mente',
    card: 'Lentamente, facilmente, bene e male: come si formano e dove vanno.',
    lead: 'Lentamente, facilmente, veramente: come si forma un avverbio da un aggettivo, gli irregolari bene e male, la differenza tra buono e bene, molto e molti, dove va l’avverbio, gli avverbi più utili nella conversazione e due falsi amici. Con 30 esercizi.',
    description:
      'Gli avverbi in -mente in italiano: lentamente, facilmente, veramente. Come si formano, bene e male, buono o bene, molto o molti, la posizione, attualmente ed eventualmente (falsi amici) e 30 esercizi.',
    formaH2: 'Come si forma: femminile + -mente',
    formaP:
      'Si prende l’aggettivo al <strong>femminile singolare</strong> e si aggiunge <em lang="it">-mente</em>: <em lang="it">lenta + mente = lentamente</em>. Gli aggettivi in <em lang="it">-e</em> sono uguali al maschile e al femminile: <em lang="it">veloce → velocemente</em>.',
    formaP2:
      'Gli aggettivi che finiscono in <em lang="it">-le</em> e in <em lang="it">-re</em> perdono la <em lang="it">e</em> finale prima di <em lang="it">-mente</em>.',
    fLe: 'In -le: perdono la e',
    fRe: 'In -re: perdono la e',
    fIrr: 'Da ricordare',
    formaNote:
      '<strong>Bene e male sono gli avverbi di buono e cattivo.</strong> Non esistono <em lang="it">buonamente</em> e <em lang="it">cattivamente</em> nel senso di «bene» e «male».',
    beneH2: 'Bene o buono? Male o cattivo?',
    beneP:
      'L’<strong>aggettivo</strong> descrive una persona o una cosa e cambia (<em lang="it">buono, buona, buoni</em>). L’<strong>avverbio</strong> descrive un’azione e non cambia mai (<em lang="it">bene</em>).',
    bBuono: 'Buono / bene',
    bCattivo: 'Cattivo / male',
    bStare: 'Stare: sempre bene',
    bMolto: 'Molto: avverbio o aggettivo',
    bMeglio: 'Più bene = meglio',
    beneNote1:
      '<strong>Il trucco:</strong> chiediti «com’è?» o «come lo fa?». <em lang="it">Com’è la pizza? Buona.</em> <em lang="it">Come cucina Marco? Bene.</em> Con <em lang="it">essere</em> serve quasi sempre l’aggettivo; con gli altri verbi l’avverbio.',
    beneNote2:
      '<strong>Molto, poco, troppo, tanto</strong> davanti a un aggettivo o a un verbo non cambiano (<em lang="it">sono molto stanca</em>, <em lang="it">lavoro troppo</em>); davanti a un nome si accordano (<em lang="it">molti amici</em>, <em lang="it">poca pazienza</em>).',
    posH2: 'Dove va l’avverbio',
    posP: 'Di solito l’avverbio va <strong>dopo il verbo</strong> che descrive, oppure <strong>prima dell’aggettivo</strong>.',
    pVerbo: 'Dopo il verbo',
    pAggettivo: 'Prima dell’aggettivo',
    pPassato: 'Nel passato prossimo: di solito dopo il participio',
    pFrase: 'Per tutta la frase: all’inizio',
    posNote:
      '<strong>Bene, male, già, sempre, mai</strong> possono stare anche tra ausiliare e participio: <em lang="it">ho dormito bene</em> e <em lang="it">ho ben dormito</em> esistono tutte e due, ma la prima è molto più comune.',
    frasiH2: 'Gli avverbi della conversazione',
    frasiP:
      'Molti avverbi in <em lang="it">-mente</em> sono risposte veloci e naturali: con una parola sola sembri subito più italiano.',
    qSi: 'Per dire di sì con forza',
    qForse: 'Per dire «forse»',
    qStupore: 'Per la sorpresa',
    qFinalmente: 'Dopo un’attesa',
    qOvvio: 'Per una cosa evidente',
    qFalsi: 'Due falsi amici',
    frasiNote:
      '<strong>Attenzione ai falsi amici:</strong> <em lang="it">attualmente</em> vuol dire «adesso, in questo periodo», non «in realtà» (che si dice <em lang="it">in realtà</em> o <em lang="it">veramente</em>). <em lang="it">Eventualmente</em> vuol dire «se serve, nel caso», non «alla fine» (che si dice <em lang="it">alla fine</em> o <em lang="it">prima o poi</em>).',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Forma l’avverbio',
    part1P: 'Scrivi l’avverbio in -mente dell’aggettivo tra parentesi.',
    part2H3: 'Parte 2 · Aggettivo o avverbio?',
    part2P: 'Scegli la parola giusta tra parentesi.',
    part3H3: 'Parte 3 · Gli avverbi della conversazione',
    part3P: 'Scrivi l’avverbio in -mente dell’aggettivo tra parentesi.',
  },
};
