// Lezione A1 «Il verbo avere» (rifatta il 2026-11-26 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in verbo-avere-i18n.mjs.
//
// Quattordicesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto
// era scritta a mano: una regola, una tabella, le espressioni e 10 esercizi. Ora: quando si usa (possesso, famiglia,
// età, impegni), le forme (la h muta: ho / o, ha / a, hanno / anno), le espressioni (fame, sete, freddo, paura,
// ragione), avere bisogno di e avere voglia di, descrivere le persone (ha gli occhi azzurri), ce l'ho, avere o fare
// (faccio colazione), il passato (ho avuto e avere ausiliare), le trappole e 30 esercizi. Il confronto con la lingua
// resta quello di confronti-lingua.mjs; gli errori per lingua sono in confronti-verbo-avere.mjs. Nell'indice A1 la
// tessera resta dov'era; il pulsante finale porta agli articoli determinativi.

export default {
  slug: 'verbo-avere',
  next: 'articoli-determinativi',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/verbo-avere-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-italian-verb-avere',
    es: 'el-verbo-avere-en-italiano',
    fr: 'le-verbe-avere-en-italien',
    cs: 'italske-sloveso-avere',
    pl: 'wloski-czasownik-avere',
    tr: 'italyanca-avere-fiili',
    de: 'das-italienische-verb-avere',
    ja: 'イタリア語動詞-avere',
  },
  nav: [
    ['uso', 'Uso'],
    ['forme', 'Forme'],
    ['espressioni', 'Espressioni'],
    ['bisogno', 'Bisogno e voglia'],
    ['descrivere', 'Descrivere le persone'],
    ['ce-lho', 'Ce l’ho'],
    ['fare', 'Avere o fare?'],
    ['passato', 'Al passato'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="uso"><h2>${L.usoH2}</h2><p>${L.usoP}</p>${h.examples([
    [L.uCose, 'Ho una bicicletta. · Hai un gatto?'],
    [L.uFamiglia, 'Ho un fratello e due sorelle. · Anna ha due figli.'],
    [L.uEta, 'Ho trent’anni. · Quanti anni hai?'],
    [L.uSentire, 'Ho fame. · Ho freddo. · Ho paura.'],
    [L.uImpegni, 'Domani ho lezione. · Oggi ho una riunione.'],
  ])}<p class="mini-note">${L.usoNote.replace('{{ESSERE}}', h.href('verbo-essere', 'a1'))}</p></article>
    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
      ['Persona', 'Forma', 'Esempio'],
      [
        ['io', 'ho', 'Ho un cane.'],
        ['tu', 'hai', 'Hai tempo?'],
        ['lui / lei / Lei', 'ha', 'Ha venticinque anni.'],
        ['noi', 'abbiamo', 'Abbiamo fame.'],
        ['voi', 'avete', 'Avete ragione.'],
        ['loro', 'hanno', 'Hanno una casa al mare.'],
      ]
    )}<p class="mini-note">${L.formeNote}</p>${h.examples([
      [L.fHo, 'Ho un libro. · Un tè o un caffè?'],
      [L.fHa, 'Marco ha un cane. · Vado a Roma.'],
      [L.fHanno, 'Hanno vent’anni. · Buon anno!'],
      [L.fNon, 'Non ho tempo. · Hai fame? No, non ho fame.'],
    ])}</article>
    <article class="lesson-box" id="espressioni"><h2>${L.espH2}</h2><p>${L.espP}</p>${h.examples([
      [L.eFame, 'Ho fame. · Hai sete? · Ho sonno.'],
      [L.eCaldo, 'Ho freddo. · Abbiamo caldo.'],
      [L.ePaura, 'Ho paura dei cani. · Non avere paura!'],
      [L.eFretta, 'Scusa, ho fretta!'],
      [L.eRagione, 'Hai ragione. · Ho torto.'],
      [L.eMale, 'Ho mal di testa. · Ho la febbre.'],
    ])}<p class="mini-note">${L.espNote}</p></article>
    <article class="lesson-box" id="bisogno"><h2>${L.bisH2}</h2><p>${L.bisP}</p>${h.examples([
      [L.bNome, 'Ho bisogno di aiuto. · Hai bisogno di qualcosa?'],
      [L.bVerbo, 'Ho bisogno di dormire.'],
      [L.vNome, 'Ho voglia di un gelato.'],
      [L.vVerbo, 'Non ho voglia di uscire. · Hai voglia di venire al cinema?'],
    ])}<p class="mini-note">${L.bisNote}</p></article>
    <article class="lesson-box" id="descrivere"><h2>${L.descH2}</h2><p>${L.descP}</p>${h.examples([
      [L.dOcchi, 'Anna ha gli occhi azzurri.'],
      [L.dCapelli, 'Marco ha i capelli corti. · Ho i capelli lunghi.'],
      [L.dBarba, 'Mio padre ha la barba. · Luca ha gli occhiali.'],
      [L.dEssere, 'Anna è alta e ha gli occhi verdi.'],
    ])}<p class="mini-note">${L.descNote}</p></article>
    <article class="lesson-box" id="ce-lho"><h2>${L.ceH2}</h2><p>${L.ceP}</p>${h.examples([
      [L.cSi, 'Hai una penna? Sì, ce l’ho.'],
      [L.cNo, 'Hai la macchina? No, non ce l’ho.'],
      [L.cPlurale, 'Hai le chiavi? Sì, ce le ho. · I biglietti? Ce li ho io.'],
    ])}<p class="mini-note">${L.ceNote}</p></article>
    <article class="lesson-box" id="fare"><h2>${L.fareH2}</h2><p>${L.fareP}</p>${h.examples([
      [L.faPasti, 'Faccio colazione alle otto. · Facciamo pranzo insieme?'],
      [L.faDoccia, 'Faccio la doccia. · Faccio una pausa.'],
      [L.faFesta, 'Sabato faccio una festa.'],
      [L.faCe, 'C’è un problema. · Ho un problema.'],
    ])}<p class="mini-note">${L.fareNote.replace('{{CE}}', h.href('ce-ci-sono', 'a1'))}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.passH2}</h2><p>${L.passP}</p>${h.examples([
      [L.pAvuto, 'Ieri ho avuto la febbre. · Abbiamo avuto fortuna.'],
      [L.pAusiliare, 'Ho mangiato. · Hai visto Marco? · Abbiamo dormito bene.'],
      [L.pImperfetto, 'Da bambino avevo un cane.'],
    ])}<p class="mini-note">${L.passNote
      .replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))
      .replace('{{IMPERFETTO}}', h.href('imperfetto', 'a2'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tH, 'Ho un cane. · Un cane o un gatto?'],
      [L.tDovere, 'Devo lavorare. · Ho da fare.'],
      [L.tArticolo, 'Ho fame. · Ho un po’ di fame.'],
      [L.tAnni, 'Ho vent’anni. · Quanti anni hai?'],
    ])}<p class="mini-note">${L.trapNote.replace('{{MODALI}}', h.href('verbi-modali', 'a2'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['O un fratello.', 'Ho un fratello.'],
      ['Sono fame.', 'Ho fame.'],
      ['Ho venti.', 'Ho vent’anni.'],
      ['Ho colazione alle otto.', 'Faccio colazione alle otto.'],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Io ___ una bicicletta.', a: 'ho', hint: 'Avere con io: ho, con la h.' },
        { q: 'Tu ___ un gatto?', a: 'hai', hint: 'Avere con tu: hai.' },
        { q: 'Anna ___ due figli.', a: 'ha', hint: 'Avere con lei: ha.' },
        { q: 'Noi ___ una casa al mare.', a: 'abbiamo', hint: 'Avere con noi: abbiamo.' },
        { q: 'Voi ___ tempo stasera?', a: 'avete', hint: 'Avere con voi: avete.' },
        { q: 'Marco e Luca ___ un cane.', a: 'hanno', hint: 'Marco e Luca = loro: hanno.' },
        { q: 'Signora, Lei ___ una penna?', a: 'ha', hint: 'Lei di cortesia: ha.' },
        { q: 'Io e mia sorella ___ gli occhi verdi.', a: 'abbiamo', hint: 'Io e mia sorella = noi: abbiamo.' },
        { q: 'Marco ___ un cane. (ha o a?)', a: 'ha', hint: 'Il verbo avere: ha, con la h.' },
        { q: 'Vado ___ Roma. (ha o a?)', a: 'a', hint: 'Qui è la preposizione: a, senza h.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Mangiamo? Ho ___! (cibo)', a: 'fame', hint: 'Voglia di mangiare: ho fame.' },
      { q: 'Hai ___? Ecco un bicchiere d’acqua.', a: 'sete', hint: 'Voglia di bere: hai sete?' },
      { q: 'Vado a letto, ho ___.', a: 'sonno', hint: 'Voglia di dormire: ho sonno.' },
      { q: 'Chiudi la finestra, per favore: ho ___.', a: 'freddo', hint: 'Si chiude la finestra quando si ha freddo.' },
      { q: 'Scusa, non posso parlare: ho ___!', a: 'fretta', hint: 'Quando non c’è tempo: ho fretta.' },
      { q: 'Sì, è vero, hai ___.', a: 'ragione', hint: 'È vero: hai ragione.' },
      { q: 'Il bambino ha ___ del buio.', a: 'paura', hint: 'Avere paura di qualcosa.' },
      { q: 'Ho bisogno ___ aiuto.', a: 'di', hint: 'Avere bisogno di: con di.' },
      { q: 'Stasera non ho ___ di uscire. (desiderio)', a: 'voglia', hint: 'Il desiderio: avere voglia di.' },
      { q: 'Quanti ___ hai? Ventidue.', a: 'anni', hint: 'L’età: quanti anni hai?' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Anna ___ gli occhi azzurri.', a: 'ha', hint: 'Per gli occhi e i capelli si usa avere: ha.' },
      { q: 'Marco ha ___ capelli corti.', a: 'i', hint: 'Con i capelli serve l’articolo: i capelli.' },
      { q: 'Hai una penna? Sì, ce l’___.', a: 'ho', hint: 'Nel parlato: ce l’ho.' },
      { q: 'Hai le chiavi? No, non ce le ___.', a: 'ho', hint: 'Non ce le ho: il verbo resta ho.' },
      { q: 'Ogni mattina ___ colazione al bar. (io)', a: 'faccio', hint: 'Colazione, doccia, festa: con fare.' },
      { q: 'Scusi, ___ un bagno qui?', a: 'c’è', alt: "c'è", hint: 'Per chiedere se esiste in un posto: c’è?' },
      { q: 'Ieri ___ avuto la febbre. (io)', a: 'ho', hint: 'Il passato di avere: ho avuto.' },
      { q: 'Abbiamo ___ fortuna! (avere, passato)', a: 'avuto', hint: 'Il participio di avere: avuto.' },
      { q: 'Hai ___ il film? (vedere, passato)', a: 'visto', hint: 'Avere ausiliare: hai visto.' },
      { q: 'Domani ___ lavorare fino alle sei. (io)', a: 'devo', hint: 'L’obbligo si dice con dovere: devo lavorare.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Ciao! Hai un minuto?'],
      ['Studente', 'Sì, ma ho un po’ di fretta: alle tre ho lezione.'],
      ['Martin', 'Hai una penna? Ho dimenticato la mia.'],
      ['Studente', 'Sì, ce l’ho. Eccola!'],
      ['Martin', 'Grazie! Hai fame? Dopo la lezione facciamo pranzo insieme?'],
      ['Studente', 'Volentieri, ho proprio fame. E ho anche voglia di un caffè.'],
    ])}</article>`,
  it: {
    h1: 'Il verbo avere',
    card: 'Ho, hai, ha: le forme con la h, ho fame e ho freddo, ho bisogno di, ce l’ho, avere o fare e 30 esercizi.',
    lead: 'Ho, hai, ha, abbiamo, avete, hanno: con il verbo avere dici che cosa hai, quanti anni hai e come ti senti. Le forme (con la h che non si pronuncia), le espressioni (ho fame, ho freddo, ho ragione), avere bisogno di e avere voglia di, come descrivere una persona (ha gli occhi azzurri), ce l’ho, quando si usa fare (faccio colazione), il passato e le trappole. Con 30 esercizi.',
    description:
      'Il verbo avere in italiano: ho, hai, ha, abbiamo, avete, hanno. Quando si usa (possesso, famiglia, età, impegni), la h muta (ho / o, ha / a), le espressioni (ho fame, ho sete, ho freddo, ho paura, ho ragione), avere bisogno di, avere voglia di, ha gli occhi azzurri, ce l’ho, avere o fare, il passato, gli errori tipici e 30 esercizi.',
    heroAlt: 'Un gatto rosso che dorme acciambellato su una poltrona al sole, accanto a una finestra',
    usoH2: 'Quando si usa',
    usoP:
      'Il verbo <strong>avere</strong> serve per dire che cosa <strong>possiedi</strong>, com’è la tua <strong>famiglia</strong>, quanti <strong>anni</strong> hai, come ti <strong>senti</strong> (fame, freddo, paura) e che <strong>impegni</strong> hai.',
    uCose: 'Le cose e gli animali',
    uFamiglia: 'La famiglia',
    uEta: 'L’età',
    uSentire: 'Come ti senti',
    uImpegni: 'Gli impegni',
    usoNote:
      'Guarda il gatto della foto: <em lang="it">ho un gatto</em>, <em lang="it">ha sonno</em>, <em lang="it">ha il pelo rosso</em>. Molte lingue dicono «sono affamato» o «sono vent’anni»; l’italiano dice <strong>ho fame</strong>, <strong>ho vent’anni</strong>. Per la differenza con essere vedi <a href="{{ESSERE}}">il verbo essere</a>.',
    formeH2: 'Le forme',
    formeP: 'Il presente di avere è <strong>irregolare</strong>. Quattro forme cominciano con una <strong>h</strong> che non si pronuncia: <strong>ho, hai, ha, hanno</strong>.',
    formeNote:
      'La <strong>h</strong> non si sente ma si scrive, perché distingue il verbo da altre parole che suonano uguali: <em lang="it">ho</em> (verbo) e <em lang="it">o</em> («oppure»), <em lang="it">ha</em> e <em lang="it">a</em> (preposizione), <em lang="it">hanno</em> e <em lang="it">anno</em>. <em lang="it">Abbiamo</em> e <em lang="it">avete</em> non hanno la h.',
    fHo: 'Ho (verbo) e o (oppure)',
    fHa: 'Ha (verbo) e a (preposizione)',
    fHanno: 'Hanno (verbo) e anno (dodici mesi)',
    fNon: 'La negazione: non prima del verbo',
    espH2: 'Le espressioni con avere',
    espP: 'Per molte sensazioni l’italiano usa <strong>avere + nome</strong>, senza articolo: si «ha» fame come si ha una cosa.',
    eFame: 'Fame, sete, sonno',
    eCaldo: 'Caldo e freddo (che senti tu)',
    ePaura: 'Avere paura di',
    eFretta: 'Avere fretta',
    eRagione: 'Avere ragione, avere torto',
    eMale: 'Avere mal di…, avere la febbre',
    espNote:
      'Il nome resta invariato: <em lang="it">ho fame</em>, mai <em lang="it">ho la fame</em>. Per dire «molto» si usa <strong>tanta</strong> o <strong>molta</strong>, perché <em lang="it">fame</em> e <em lang="it">paura</em> sono nomi femminili: <em lang="it">ho tanta fame</em>, <em lang="it">ho molta paura</em>; con caldo e freddo, <em lang="it">ho molto freddo</em>. Per il tempo che fa si usa fare: <em lang="it">fa freddo</em>.',
    bisH2: 'Avere bisogno di, avere voglia di',
    bisP: 'Due espressioni utilissime, sempre con <strong>di</strong>: <strong>avere bisogno di</strong> (una cosa necessaria) e <strong>avere voglia di</strong> (una cosa che desideri).',
    bNome: 'Bisogno di + nome',
    bVerbo: 'Bisogno di + infinito',
    vNome: 'Voglia di + nome',
    vVerbo: 'Voglia di + infinito',
    bisNote:
      'Il <strong>di</strong> non si dimentica mai: <em lang="it">ho bisogno di un caffè</em>, non <em lang="it">ho bisogno un caffè</em>. Con l’articolo diventa <em lang="it">del, della</em>…: <em lang="it">ho bisogno del tuo aiuto</em>. <em lang="it">Non ho voglia</em> è il modo più comune di dire «non mi va».',
    descH2: 'Descrivere le persone',
    descP: 'Per gli occhi, i capelli, la barba e gli occhiali si usa <strong>avere</strong>, con l’<strong>articolo determinativo</strong>.',
    dOcchi: 'Gli occhi',
    dCapelli: 'I capelli',
    dBarba: 'La barba, gli occhiali',
    dEssere: 'Con essere l’altezza e il carattere',
    descNote:
      'Si dice <strong>ha gli occhi azzurri</strong>, con <em lang="it">gli</em>, e <strong>ha i capelli corti</strong>, con <em lang="it">i</em>: <em lang="it">capelli</em> è sempre plurale. L’altezza e il carattere vanno con essere: <em lang="it">è alta</em>, <em lang="it">è simpatico</em>.',
    ceH2: 'Ce l’ho',
    ceP: 'Nel parlato, quando rispondi a una domanda con avere, non si dice <em lang="it">sì, ho</em>: si dice <strong>ce l’ho</strong>. <em lang="it">Ce</em> non si traduce; <em lang="it">l’</em> è la cosa (<em lang="it">lo, la</em>).',
    cSi: 'Sì, ce l’ho',
    cNo: 'No, non ce l’ho',
    cPlurale: 'Al plurale: ce li ho, ce le ho',
    ceNote:
      'Per una cosa al singolare <strong>ce l’ho</strong> (anche al femminile: <em lang="it">la penna? ce l’ho</em>); per il plurale <strong>ce li ho</strong> (maschile) e <strong>ce le ho</strong> (femminile). Rispondere solo <em lang="it">sì, ho</em> non si può: in italiano <em lang="it">ho</em> ha sempre bisogno di qualcosa dopo.',
    fareH2: 'Avere o fare?',
    fareP: 'Molte lingue usano «avere» per i pasti, la doccia o una festa. In italiano si usa <strong>fare</strong>.',
    faPasti: 'I pasti: fare colazione, fare pranzo',
    faDoccia: 'La doccia, una pausa',
    faFesta: 'Una festa',
    faCe: 'C’è (esiste) o ho (possiedo)?',
    fareNote:
      'Si dice <strong>faccio colazione</strong>, <strong>faccio la doccia</strong>, <strong>faccio una festa</strong>. E attenzione a <strong>c’è</strong>: <em lang="it">c’è un problema</em> vuol dire che un problema esiste; <em lang="it">ho un problema</em> vuol dire che il problema è mio. Per chiedere se in un posto esiste qualcosa: <em lang="it">c’è un bagno?</em>, non <em lang="it">ha un bagno?</em> Vedi <a href="{{CE}}">c’è e ci sono</a>.',
    passH2: 'Avere al passato',
    passP: 'Il participio di avere è <strong>avuto</strong>: <em lang="it">ho avuto</em>. E avere è anche il verbo che forma il passato prossimo della maggior parte dei verbi.',
    pAvuto: 'Ho avuto',
    pAusiliare: 'Avere + participio: il passato prossimo',
    pImperfetto: 'L’imperfetto: avevo',
    passNote:
      '<em lang="it">Ho mangiato</em>, <em lang="it">hai visto</em>, <em lang="it">abbiamo dormito</em>: per il passato prossimo si usano le forme di avere (o di essere) + il participio. Vedi <a href="{{PASSATO}}">il passato prossimo</a> e, per <em lang="it">avevo</em>, <a href="{{IMPERFETTO}}">l’imperfetto</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tH: 'La h: ho e o',
    tDovere: 'L’obbligo: dovere, non avere',
    tArticolo: 'Ho fame, non ho la fame',
    tAnni: 'L’età: sempre con anni',
    trapNote:
      'Non dimenticare la <strong>h</strong>: <em lang="it">ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em>. Per l’obbligo si usa <strong>dovere</strong>: <em lang="it">devo lavorare</em> (vedi <a href="{{MODALI}}">i verbi modali</a>); <em lang="it">ho da fare</em> è un’espressione fissa che vuol dire «sono occupato». E l’età vuole sempre la parola <strong>anni</strong>: <em lang="it">ho vent’anni</em>, non <em lang="it">ho venti</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo la parola che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Le forme',
    part1P: 'Ho, hai, ha, abbiamo, avete o hanno? E attenzione alla h.',
    part2H3: 'Parte 2 · Le espressioni',
    part2P: 'Fame, sete, sonno, freddo, fretta, ragione, paura, bisogno, voglia, anni.',
    part3H3: 'Parte 3 · Descrivere, ce l’ho, fare e il passato',
    part3P: 'Avere, fare, c’è o dovere? E il passato con avere.',
  },
};
