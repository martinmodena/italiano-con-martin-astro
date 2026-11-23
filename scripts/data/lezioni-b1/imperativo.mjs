// Lezione B1 «L'imperativo: parla, prendi, si accomodi» (rifatta il 2026-11-23 agli stessi URL): struttura,
// materiale italiano e testi. Le spiegazioni tradotte stanno in imperativo-i18n.mjs.
//
// Seconda delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione del 2026-11-17
// (scripts/expand-imperativo.mjs, ora superato) aveva le cinque persone, il trucco delle due famiglie, gli
// irregolari, i pronomi e 20 esercizi. Ora in più: gli usi, il negativo con tutte le persone e con i pronomi, due
// pronomi insieme (dammelo), le trappole (Lei o voi, va' e va, le parole del parlato come senti e dai, una
// richiesta più morbida, i riflessivi) e 30 esercizi. Il confronto con la lingua resta quello di
// confronti-lingua.mjs; gli errori per lingua sono in confronti-imperativo.mjs.
// Nell'indice B1 la tessera resta dov'era (dopo i pronomi combinati); il pulsante finale porta ai comparativi.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'imperativo',
  level: 'b1',
  next: 'comparativo-e-superlativo',
  minutes: 20,
  hero: { src: 'grammatica/imperativo-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-italian-imperative',
    es: 'el-imperativo-italiano',
    fr: 'limperatif-italien',
    cs: 'italsky-imperativ',
    pl: 'tryb-rozkazujacy-po-wlosku',
    tr: 'italyanca-emir-kipi',
    de: 'der-italienische-imperativ',
    ja: 'イタリア語の命令法',
  },
  nav: [
    ['usi', 'Usi'],
    ['forma', 'Forma'],
    ['trucco', 'Come funziona'],
    ['negativo', 'Frasi negative'],
    ['irregolari', 'Irregolari'],
    ['pronomi', 'Con i pronomi'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="usi"><h2>${L.usiH2}</h2><p>${L.usiP}</p>${h.examples([
    [L.uIstruzione, 'Gira a destra e poi vai sempre dritto.'],
    [L.uInvito, 'Entra pure, accomodati!'],
    [L.uConsiglio, 'Dormi un po’, sei stanco.'],
    [L.uDivieto, 'Non toccare, è caldo!'],
    [L.uRicetta, 'Tagliate le cipolle e aggiungete l’olio.'],
    [L.uInsieme, 'Andiamo al mare!'],
  ])}<p class="mini-note">${L.usiNote}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Infinito', `=${it('tu')}`, `=${it('noi')}`, `=${it('voi')}`, `=${it('Lei')}`, `=${it('Loro')}`],
      [
        ['parlare', 'parla', 'parliamo', 'parlate', 'parli', 'parlino'],
        ['prendere', 'prendi', 'prendiamo', 'prendete', 'prenda', 'prendano'],
        ['partire', 'parti', 'partiamo', 'partite', 'parta', 'partano'],
        ['finire', 'finisci', 'finiamo', 'finite', 'finisca', 'finiscano'],
      ]
    )}<p class="mini-note">${L.formaNote}</p></article>
    <article class="lesson-box" id="trucco"><h2>${L.truccoH2}</h2><p>${L.truccoP}</p>${h.examples([
      [L.tAmici, 'prendi · parti · parliamo · parlate'],
      [L.tSignori, '(che) Lei entri → Entri! · (che) Loro aspettino → Aspettino!'],
      [L.tScambio, 'tu parla ↔ Lei parli · tu prendi ↔ Lei prenda'],
    ])}<p class="mini-note">${L.truccoNote
      .replace('{{PRESENTE}}', h.href('presente-indicativo-verbi-regolari', 'a1'))
      .replace('{{CONGPRES}}', h.href('congiuntivo-presente', 'b2'))}</p></article>
    <article class="lesson-box" id="negativo"><h2>${L.negH2}</h2><p>${L.negP}</p>${h.examples([
      [L.nTu, 'Non parlare! · Non correre! · Non partire!'],
      [L.nAltri, 'Non parliamo! · Non correte! · Signora, non parta!'],
      [L.nPron, 'Non toccarlo! · Non lo toccare!'],
      [L.nLei, 'Non si preoccupi! · Non lo dica a nessuno!'],
    ])}<p class="mini-note">${L.negNote}</p></article>
    <article class="lesson-box" id="irregolari"><h2>${L.irrH2}</h2><p>${L.irrP}</p>${h.table(
      ['Infinito', `=${it('tu')}`, `=${it('noi')}`, `=${it('voi')}`, `=${it('Lei')}`, `=${it('Loro')}`],
      [
        ['andare', 'va’ · vai', 'andiamo', 'andate', 'vada', 'vadano'],
        ['fare', 'fa’ · fai', 'facciamo', 'fate', 'faccia', 'facciano'],
        ['dare', 'da’ · dai', 'diamo', 'date', 'dia', 'diano'],
        ['stare', 'sta’ · stai', 'stiamo', 'state', 'stia', 'stiano'],
        ['dire', 'di’', 'diciamo', 'dite', 'dica', 'dicano'],
        ['venire', 'vieni', 'veniamo', 'venite', 'venga', 'vengano'],
        ['uscire', 'esci', 'usciamo', 'uscite', 'esca', 'escano'],
        ['essere', 'sii', 'siamo', 'siate', 'sia', 'siano'],
        ['avere', 'abbi', 'abbiamo', 'abbiate', 'abbia', 'abbiano'],
        ['sapere', 'sappi', 'sappiamo', 'sappiate', 'sappia', 'sappiano'],
      ]
    )}<p class="mini-note">${L.irrNote}</p></article>
    <article class="lesson-box" id="pronomi"><h2>${L.pronH2}</h2><p>${L.pronP}</p>${h.examples([
      [L.pAttacca, 'Prendilo! · Ascoltami! · Mandatela! · Prendiamolo!'],
      [L.pDoppia, 'dimmi · fallo · dammi · vacci · stammi bene'],
      [L.pDue, 'Dammelo! · Portatemela! · Diciamoglielo!'],
      [L.pRifl, 'Alzati! · Sbrighiamoci! · Accomodatevi! · Si accomodi!'],
      [L.pLei, 'Il modulo? Lo firmi qui. · Mi dica!'],
    ])}<p class="mini-note">${L.pronNote.replace('{{COMBINATI}}', h.href('pronomi-combinati', 'b1'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tLeiVoi, 'Signora, entri! · Ragazzi, entrate!'],
      [L.tVa, 'Va’ a casa! (tu) · Marco va a casa. (lui)'],
      [L.tParlato, 'Senti, … · Guarda, … · Dai, andiamo! · Scusa! · Mi raccomando!'],
      [L.tMorbido, 'Passami il sale. · Mi passi il sale?'],
      [L.tCorte, 'Dimmi tutto! · Digli la verità!'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Non parla adesso!', 'Non parlare adesso!'],
      ['Lo prendi!', 'Prendilo!'],
      ['Parlate più lentamente, signora.', 'Parli più lentamente, signora.'],
      ['Dimi la verità!', 'Dimmi la verità!'],
      ['Si siedi!', 'Siediti!'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ più lentamente, per favore. (tu, parlare)', a: 'parla', hint: 'Verbo in -are con tu: parla.' },
        { q: '___ l’autobus numero 4. (tu, prendere)', a: 'prendi', hint: 'Con tu è come il presente: prendi.' },
        { q: '___ la porta, fa freddo! (tu, chiudere)', a: 'chiudi', hint: 'Con tu: chiudi.' },
        { q: '___ a mangiare, è pronto! (voi, venire)', a: 'venite', hint: 'Con voi è come il presente: venite.' },
        { q: '___ una pizza stasera! (noi, ordinare)', a: 'ordiniamo', hint: 'Noi = presente: ordiniamo.' },
        { q: '___ i compiti prima di cena. (tu, finire)', a: 'finisci', hint: 'Finire con tu: finisci.' },
        {
          q: '___ adesso, il bambino dorme! (tu, parlare, negativo)',
          a: 'non parlare',
          hint: 'Negativo con tu: non + infinito.',
        },
        {
          q: '___ la finestra, piove. (tu, aprire, negativo)',
          a: 'non aprire',
          hint: 'Negativo con tu: non + infinito.',
        },
        {
          q: '___ tardi, domani c’è scuola! (voi, tornare, negativo)',
          a: 'non tornate',
          hint: 'Con voi il negativo è non + la stessa forma: non tornate.',
        },
        { q: '___ attenzione! (voi, fare)', a: 'fate', hint: 'Fare con voi: fate.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Signora, ___ pure! (Lei, entrare)', a: 'entri', hint: 'Verbo in -are con Lei: entri.' },
      {
        q: 'Dottore, ___ un momento, per favore. (Lei, aspettare)',
        a: 'aspetti',
        hint: 'Verbo in -are con Lei: la a diventa i.',
      },
      { q: 'Signora, ___ qui il Suo nome. (Lei, scrivere)', a: 'scriva', hint: 'Verbo in -ere con Lei: scriva.' },
      { q: 'Professore, mi ___ la verità. (Lei, dire)', a: 'dica', hint: 'Che Lei dica: dica.' },
      { q: 'Signor Rossi, ___ pure con noi! (Lei, venire)', a: 'venga', hint: 'Che Lei venga: venga.' },
      {
        q: 'Signora, ___ tranquilla, va tutto bene. (Lei, stare)',
        a: 'stia',
        hint: 'Stare con Lei: stia.',
      },
      {
        q: 'Signori, ___ la porta, per favore. (Loro, chiudere)',
        a: 'chiudano',
        hint: 'Loro = congiuntivo: chiudano.',
      },
      {
        q: '___ a casa, sei stanco! (tu, andare)',
        a: 'va’',
        alt: "vai|va'|va",
        hint: 'Andare con tu: va’ oppure vai.',
      },
      { q: '___ paziente, arriva subito. (tu, essere)', a: 'sii', hint: 'Essere con tu: sii.' },
      {
        q: 'Ragazzi, ___ coraggio! (voi, avere)',
        a: 'abbiate',
        hint: 'Avere con voi: abbiate, come il congiuntivo.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Il libro è sul tavolo: ___! (tu, prendere + lo)',
        a: 'prendilo',
        hint: 'Con tu il pronome si attacca alla fine: prendilo.',
      },
      { q: '___ un momento! (tu, ascoltare + mi)', a: 'ascoltami', hint: 'Ascolta + mi: ascoltami.' },
      { q: '___ la verità! (tu, dire + mi)', a: 'dimmi', hint: 'Di’ + mi: la m raddoppia.' },
      { q: 'Ti piace la torta? ___ assaggiare! (tu, fare + mi)', a: 'fammi', hint: 'Fa’ + mi: la m raddoppia.' },
      {
        q: 'Il caffè è pronto: ___ subito! (noi, bere + lo)',
        a: 'beviamolo',
        hint: 'Con noi il pronome si attacca alla fine: beviamolo.',
      },
      {
        q: 'Le foto? ___ stasera! (voi, mandare + le)',
        a: 'mandatele',
        hint: 'Con voi il pronome si attacca alla fine: mandatele.',
      },
      {
        q: 'La chiave? ___, per favore! (tu, dare + me + la)',
        a: 'dammela',
        hint: 'Da’ + me + la: dammela, con la m doppia.',
      },
      {
        q: 'Sono le sette: ___, è tardi! (tu, alzarsi)',
        a: 'alzati',
        hint: 'Riflessivo con tu: alza + ti = alzati.',
      },
      {
        q: 'Signora, ___ pure! (Lei, accomodarsi)',
        a: 'si accomodi',
        hint: 'Con Lei il pronome va prima: si accomodi.',
      },
      {
        q: 'È un segreto: ___ a nessuno! (tu, dire + lo, negativo)',
        a: 'non dirlo',
        alt: 'non lo dire',
        hint: 'Non + infinito, con il pronome alla fine o prima: non dirlo / non lo dire.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Scusi, per la stazione?'],
      ['Passante', 'Allora, vada dritto fino al semaforo, poi giri a sinistra.'],
      ['Studente', 'A sinistra… e poi?'],
      ['Passante', 'Attraversi la piazza e prenda la seconda strada a destra. Non si preoccupi, sono cinque minuti!'],
      ['Studente', 'Grazie mille!'],
      ['Passante', 'Si figuri! Buon viaggio!'],
    ])}</article>`,
  it: {
    h1: 'L’imperativo: parla, prendi, si accomodi',
    card: 'Parla, prendi, si accomodi: tutte le persone, il trucco delle due famiglie, il negativo, gli irregolari e i pronomi.',
    lead: 'Gira a destra, entra pure, non toccare, si accomodi: l’imperativo serve per istruzioni, inviti, consigli e divieti. Le cinque persone, il trucco per ricordarle, il negativo, gli irregolari (va’, fa’, di’, sii), i pronomi (dimmi, dammelo, si accomodi) e le trappole. Con 30 esercizi.',
    description:
      'L’imperativo in italiano: quando si usa, la forma con tu, noi, voi, Lei e Loro, il trucco delle due famiglie, il negativo (non parlare), gli irregolari (va’, fa’, di’, sii, abbi), i pronomi (dimmi, dammelo, si accomodi), gli errori tipici e 30 esercizi.',
    heroAlt:
      'Un incrocio di una via di un paese italiano con una freccia bianca dipinta sull’asfalto che indica di girare a destra, alla luce del pomeriggio',
    usiH2: 'Quando si usa',
    usiP: 'L’imperativo serve quando chiedi a qualcuno di <strong>fare</strong> (o di <strong>non fare</strong>) qualcosa: per dare istruzioni, invitare, consigliare, vietare. In italiano non è scortese: il tono lo danno la voce e parole come <em lang="it">per favore</em> e <em lang="it">pure</em>.',
    uIstruzione: 'Istruzioni e indicazioni',
    uInvito: 'Un invito',
    uConsiglio: 'Un consiglio',
    uDivieto: 'Un divieto',
    uRicetta: 'Una ricetta, delle istruzioni scritte',
    uInsieme: 'Una proposta (noi)',
    usiNote:
      '<strong>Pure</strong> rende l’imperativo più gentile: <em lang="it">entra pure</em>, <em lang="it">si sieda pure</em> vogliono dire «fai pure, non c’è problema». Nelle ricette e nelle istruzioni si usa spesso <em lang="it">voi</em> (<em lang="it">tagliate, aggiungete</em>) oppure l’infinito (<em lang="it">tagliare, aggiungere</em>).',
    formaH2: 'La forma',
    formaP: 'L’imperativo ha cinque persone: <strong>tu, noi, voi</strong> e le due forme di cortesia <strong>Lei</strong> (una persona) e <strong>Loro</strong> (più persone). Non c’è <em lang="it">io</em>: non diamo ordini a noi stessi.',
    formaNote:
      '<strong>Noi</strong> è una proposta a fare qualcosa insieme: <em lang="it">andiamo!</em>, <em lang="it">mangiamo qualcosa!</em> <strong>Loro</strong> oggi è raro (camerieri, annunci, lettere): con più persone, nella vita di tutti i giorni, si usa <em lang="it">voi</em>. I verbi come <em lang="it">finire</em> tengono <strong>-isc-</strong> come al presente: <em lang="it">finisci, finisca, finiscano</em>.',
    truccoH2: 'Il trucco: due famiglie',
    truccoP: 'Non serve imparare una tabella nuova: le forme vengono da due tempi che conosci già.',
    tAmici: 'Tu, noi, voi: come il presente',
    tSignori: 'Lei, Loro: come il congiuntivo',
    tScambio: 'Tu e Lei si scambiano le vocali',
    truccoNote:
      '<strong>Tra amici il presente, con i signori il congiuntivo.</strong> Tu, noi e voi sono uguali al <a href="{{PRESENTE}}">presente</a> (<em lang="it">tu prendi → prendi!</em>); l’unica eccezione è tu con i verbi in <em lang="it">-are</em>, che tengono la <strong>a</strong>: <em lang="it">parla!</em> Lei e Loro sono uguali al <a href="{{CONGPRES}}">congiuntivo presente</a>: pensa a <em lang="it">che Lei entri</em> e togli <em lang="it">che</em>. Così la <strong>a</strong> e la <strong>i</strong> fanno a cambio: tu <em lang="it">parla</em>, Lei <em lang="it">parli</em>; tu <em lang="it">prendi</em>, Lei <em lang="it">prenda</em>.',
    negH2: 'Il negativo',
    negP: 'Per dire di <strong>non</strong> fare qualcosa c’è una sola regola speciale, e riguarda tu.',
    nTu: 'Tu: non + infinito',
    nAltri: 'Noi, voi, Lei, Loro: non + la stessa forma',
    nPron: 'Con un pronome: alla fine o prima',
    nLei: 'Con Lei: il pronome sempre prima',
    negNote:
      '<strong>Non parla!</strong> non è un imperativo: è <em lang="it">lui non parla</em>. Con tu il negativo è sempre <strong>non + infinito</strong>: <em lang="it">non parlare, non prendere, non fare</em>. Con il pronome si può scegliere: <em lang="it">non toccarlo</em> o <em lang="it">non lo toccare</em>, tutte e due giuste.',
    irrH2: 'Gli irregolari',
    irrP: 'Il trucco funziona anche qui: Lei e Loro prendono il congiuntivo (<em lang="it">vada, faccia, dica, venga, esca</em>), noi e voi sono quasi sempre il presente. Le sorprese sono poche.',
    irrNote:
      '<strong>Le cinque forme corte con tu:</strong> <em lang="it">va’, da’, fa’, sta’, di’</em>, da ripetere come una filastrocca. Per le prime quattro va bene anche il presente: <em lang="it">vai, dai, fai, stai</em>. <strong>Essere, avere, sapere</strong> sorprendono anche con tu e voi, perché vengono dal congiuntivo: <em lang="it">sii, abbi, sappi; siate, abbiate, sappiate</em>.',
    pronH2: 'Con i pronomi',
    pronP: 'Con tu, noi e voi il pronome si <strong>attacca alla fine</strong>, in una parola sola; con Lei e Loro va <strong>prima</strong> del verbo.',
    pAttacca: 'Tu, noi, voi: il pronome alla fine',
    pDoppia: 'Dopo le forme corte la consonante raddoppia',
    pDue: 'Due pronomi insieme',
    pRifl: 'I verbi riflessivi',
    pLei: 'Lei e Loro: il pronome prima',
    pronNote:
      '<strong>Di’ + mi = dimmi</strong>, <em lang="it">fa’ + lo = fallo</em>, <em lang="it">da’ + mi = dammi</em>: dopo le cinque forme corte la consonante del pronome raddoppia. L’unica eccezione è <em lang="it">gli</em>: <em lang="it">digli, fagli</em>. Con due pronomi (<em lang="it">dammelo, portatemela</em>) valgono le forme della lezione sui <a href="{{COMBINATI}}">pronomi combinati</a>. L’accento resta dove era: <em lang="it">prendi → prendilo</em>, <em lang="it">mandate → mandatela</em>.',
    trapH2: 'Le trappole',
    trapP: 'Cinque punti in cui sbagliano in tanti, e qualche parola del parlato che sentirai di continuo.',
    tLeiVoi: 'Una persona con il Lei, più persone con il voi',
    tVa: 'Va’ (imperativo) o va (presente)?',
    tParlato: 'Imperativi che sono parole del parlato',
    tMorbido: 'Più morbido: una domanda al presente',
    tCorte: 'Le forme corte con i pronomi',
    trapNote:
      '<strong>A una persona a cui dai del Lei</strong> non si dice <em lang="it">entrate</em>: <em lang="it">voi</em> è per più persone, il Lei vuole <em lang="it">entri</em>. <strong>Va’</strong> con l’apostrofo è l’imperativo; <em lang="it">va</em> senza apostrofo è il presente di lui. Molti imperativi sono diventati <strong>parole del discorso</strong>: <em lang="it">senti</em> e <em lang="it">guarda</em> per cominciare una frase, <em lang="it">dai!</em> per incoraggiare, <em lang="it">mi raccomando</em> per dire «non dimenticare». E per chiedere con più gentilezza si usa spesso una domanda al presente: <em lang="it">mi passi il sale?</em>',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Tu, noi, voi',
    part1P: 'Scrivi l’imperativo. Quando c’è «negativo», scrivi anche il non.',
    part2H3: 'Parte 2 · Lei, Loro e gli irregolari',
    part2P: 'Scrivi l’imperativo di cortesia o la forma irregolare.',
    part3H3: 'Parte 3 · Con i pronomi',
    part3P: 'Scrivi l’imperativo con il pronome, in una parola sola quando serve.',
  },
};
