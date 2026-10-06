// Lezione B1 «I connettivi» (2026-10-06): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in connettivi-i18n.mjs.
//
// Martin: «esiste una scheda con le connessioni come "nonostante", "perciò"? Sarebbe buono ordinarla
// logicamente». I connettivi sono in sei gruppi per funzione, in quest'ordine: aggiungere e opporre, causa e
// conseguenza, concessione, fine e condizione, tempo, ordinare e concludere. Quelli che vogliono il
// congiuntivo lo dicono nella cella stessa («+ congiuntivo»): è l'errore più comune (nonostante piove).
// Dopo la lezione si va al congiuntivo presente (B2).

export default {
  slug: 'connettivi',
  level: 'b1',
  next: 'congiuntivo-presente',
  after: 'comparativo-e-superlativo',
  minutes: 30,
  slugs: {
    en: 'italian-linking-words-connectives',
    es: 'conectores-en-italiano',
    fr: 'connecteurs-logiques-en-italien',
    cs: 'spojovaci-vyrazy-v-italstine',
    pl: 'wyrazenia-laczace-po-wlosku',
    tr: 'italyancada-baglaclar',
    de: 'konnektoren-im-italienischen',
    ja: 'イタリア語の接続表現',
  },
  nav: [
    ['aggiungere', 'Aggiungere e opporre'],
    ['causa', 'Causa e conseguenza'],
    ['concessione', 'Concessione'],
    ['fine', 'Fine e condizione'],
    ['tempo', 'Tempo'],
    ['concludere', 'Ordinare e concludere'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box"><h2>${L.mapH2}</h2><p>${L.mapP}</p></article>
    <article class="lesson-box" id="aggiungere"><h2>${L.aggH2}</h2><p>${L.aggP}</p>${h.table(
      ['Connettivo', 'Esempio'],
      [
        ['e', 'Ho fame e sete.'],
        ['anche', 'Parlo inglese e anche un po’ di tedesco.'],
        ['inoltre', 'La casa è grande; inoltre ha un bel giardino.'],
        ['per di più', 'Pioveva e, per di più, avevo dimenticato l’ombrello.'],
        ['ma', 'È tardi, ma non ho sonno.'],
        ['però', 'Il ristorante è caro, però si mangia benissimo.'],
        ['invece', 'Io prendo il tè; Marco invece prende il caffè.'],
        ['mentre', 'Mia sorella è bionda, mentre io sono mora.'],
        ['tuttavia', 'Il progetto è interessante; tuttavia costa troppo.'],
      ]
    )}<p class="mini-note">${L.aggNote}</p></article>
    <article class="lesson-box" id="causa"><h2>${L.causaH2}</h2><p>${L.causaP}</p>${h.table(
      ['Connettivo', 'Esempio'],
      [
        ['perché', 'Resto a casa perché sono stanco.'],
        ['siccome', 'Siccome piove, prendiamo l’autobus.'],
        ['dato che, visto che', 'Visto che sei qui, mi aiuti?'],
        ['poiché', 'Poiché il treno è in ritardo, la riunione comincia alle dieci.'],
        ['a causa di + nome', 'Il volo è stato cancellato a causa della neve.'],
        ['quindi', 'Sono stanco, quindi vado a letto.'],
        ['perciò', 'Ho perso il treno, perciò sono arrivato tardi.'],
        ['così', 'Ha studiato molto, così ha passato l’esame.'],
        ['allora', 'Non hai fame? Allora mangio io!'],
        ['di conseguenza', 'I prezzi sono saliti; di conseguenza compriamo meno.'],
      ]
    )}<p class="mini-note">${L.causaNote1}</p><p class="mini-note">${L.causaNote2}</p></article>
    <article class="lesson-box" id="concessione"><h2>${L.concH2}</h2><p>${L.concP}</p>${h.table(
      ['Connettivo', 'Esempio'],
      [
        ['anche se + indicativo', 'Esco anche se piove.'],
        ['nonostante + congiuntivo', 'Esco nonostante piova.'],
        ['sebbene, benché + congiuntivo', 'Sebbene sia stanco, finisco il lavoro.'],
        ['malgrado + congiuntivo', 'Malgrado faccia freddo, andiamo al mare.'],
        ['nonostante, malgrado + nome', 'Nonostante la pioggia, siamo usciti.'],
        ['comunque', 'Il film era lungo; comunque mi è piaciuto.'],
        ['lo stesso', 'Era stanco, ma è venuto lo stesso.'],
      ]
    )}<p class="mini-note">${L.concNote}</p></article>
    <article class="lesson-box" id="fine"><h2>${L.fineH2}</h2><p>${L.fineP}</p>${h.table(
      ['Connettivo', 'Esempio'],
      [
        ['per + infinito', 'Studio l’italiano per lavorare a Roma.'],
        ['perché + congiuntivo', 'Te lo spiego perché tu capisca.'],
        ['affinché + congiuntivo', 'Parlo piano affinché tutti capiscano.'],
        ['se', 'Se piove, restiamo a casa.'],
        ['purché + congiuntivo', 'Puoi uscire, purché torni entro mezzanotte.'],
        ['a patto che + congiuntivo', 'Ti presto la macchina a patto che tu guidi piano.'],
        ['a meno che (non) + congiuntivo', 'Vengo, a meno che non piova.'],
      ]
    )}<p class="mini-note">${L.fineNote}</p></article>
    <article class="lesson-box" id="tempo"><h2>${L.tempoH2}</h2><p>${L.tempoP}</p>${h.table(
      ['Connettivo', 'Esempio'],
      [
        ['quando', 'Quando arrivo, ti chiamo.'],
        ['mentre', 'Mentre cucino, ascolto la radio.'],
        ['appena, non appena', 'Appena finisco, esco.'],
        ['prima di + infinito', 'Lavati le mani prima di mangiare.'],
        ['prima che + congiuntivo', 'Chiudo la finestra prima che entri il freddo.'],
        ['dopo + infinito passato', 'Dopo aver mangiato, facciamo una passeggiata.'],
        ['finché (non)', 'Aspetto finché non arrivi.'],
        ['da quando', 'Da quando abito a Milano, prendo sempre la metro.'],
      ]
    )}<p class="mini-note">${L.tempoNote}</p></article>
    <article class="lesson-box" id="concludere"><h2>${L.ordH2}</h2><p>${L.ordP}</p>${h.table(
      ['Connettivo', 'Esempio'],
      [
        ['prima di tutto, innanzitutto', 'Prima di tutto, grazie per l’invito.'],
        ['poi', 'Poi parliamo del programma.'],
        ['infine', 'Infine, qualche consiglio pratico.'],
        ['per esempio', 'Mi piace la frutta, per esempio le mele.'],
        ['cioè', 'Arrivo dopodomani, cioè giovedì.'],
        ['insomma', 'Insomma, è stata una bella giornata.'],
        ['in conclusione', 'In conclusione, il progetto funziona.'],
      ]
    )}<p class="mini-note">${L.ordNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Nonostante piove, esco.', 'Nonostante piova, esco.'],
      ['Sebbene è tardi, resto.', 'Sebbene sia tardi, resto.'],
      ['Anche se sia tardi, resto.', 'Anche se è tardi, resto.'],
      ['Resto a casa siccome piove.', 'Siccome piove, resto a casa.'],
      ['Studio perché io impari.', 'Studio per imparare.'],
      ['Prima di tu esci, chiudi la porta.', 'Prima di uscire, chiudi la porta.'],
      ['Dopo mangiare, esco.', 'Dopo aver mangiato, esco.'],
      ['Malgrado la pioggia, ma siamo usciti.', 'Malgrado la pioggia, siamo usciti.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        {
          q: 'Resto a casa ___ sono stanco. (causa)',
          a: 'perché',
          alt: 'poiché|dato che|visto che',
          hint: 'La causa, dopo la frase principale: perché.',
        },
        {
          q: '___ piove, prendiamo l’autobus. (causa, all’inizio)',
          a: 'siccome',
          alt: 'dato che|visto che|poiché',
          hint: 'All’inizio della frase: siccome.',
        },
        {
          q: 'Ho perso il treno, ___ sono arrivato tardi. (conseguenza)',
          a: 'quindi',
          alt: 'perciò|così|allora|di conseguenza',
          hint: 'La conseguenza: quindi, perciò.',
        },
        {
          q: 'È tardi, ___ non ho sonno. (opposizione)',
          a: 'ma',
          alt: 'però',
          hint: 'Un’opposizione semplice: ma, però.',
        },
        { q: 'Io prendo il tè; Marco ___ prende il caffè. (al contrario)', a: 'invece', hint: 'Al contrario: invece.' },
        {
          q: 'La casa è grande; ___ ha un bel giardino. (in più)',
          a: 'inoltre',
          alt: 'per di più|anche',
          hint: 'Per aggiungere: inoltre.',
        },
        { q: 'Esco ___ piove. (+ indicativo)', a: 'anche se', hint: 'Con l’indicativo: anche se.' },
        { q: 'Studio l’italiano ___ lavorare a Roma. (fine)', a: 'per', hint: 'Il fine con l’infinito: per.' },
        {
          q: '___ finisco, ti chiamo. (subito dopo)',
          a: 'appena',
          alt: 'non appena|quando',
          hint: 'Subito dopo: appena.',
        },
        {
          q: '___, è stata una bella giornata. (per concludere)',
          a: 'insomma',
          alt: 'in conclusione|infine',
          hint: 'Per riassumere: insomma.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Nonostante ___, usciamo. (piovere)', a: 'piova', hint: 'Nonostante + congiuntivo: piova.' },
      { q: 'Anche se ___, usciamo. (piovere)', a: 'piove', hint: 'Anche se + indicativo: piove.' },
      { q: 'Sebbene ___ stanco, finisco il lavoro. (essere, io)', a: 'sia', hint: 'Sebbene + congiuntivo: sia.' },
      { q: 'Benché ___ poco tempo, mi aiuta. (avere, lui)', a: 'abbia', hint: 'Benché + congiuntivo: abbia.' },
      { q: 'Puoi uscire, purché ___ presto. (tornare, tu)', a: 'torni', hint: 'Purché + congiuntivo: torni.' },
      {
        q: 'Ti presto la bici a patto che tu la ___ domani. (riportare)',
        a: 'riporti',
        hint: 'A patto che + congiuntivo: riporti.',
      },
      {
        q: 'Te lo spiego perché tu ___. (capire)',
        a: 'capisca',
        hint: 'Perché con il senso di fine: congiuntivo, capisca.',
      },
      {
        q: 'Resto a casa perché ___ malato. (essere, io)',
        a: 'sono',
        hint: 'Perché con il senso di causa: indicativo, sono.',
      },
      {
        q: 'Chiudo la finestra prima che ___ il freddo. (entrare)',
        a: 'entri',
        hint: 'Prima che + congiuntivo: entri.',
      },
      { q: 'Malgrado ___ freddo, andiamo al mare. (fare)', a: 'faccia', hint: 'Malgrado + congiuntivo: faccia.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: '___ la pioggia, siamo usciti. (= anche con la pioggia)',
        a: 'nonostante',
        alt: 'malgrado',
        hint: 'Con un nome: nonostante la pioggia.',
      },
      { q: 'Il volo è stato cancellato a causa ___ neve.', a: 'della', hint: 'A causa di + la = a causa della.' },
      { q: 'Lavati le mani prima ___ mangiare.', a: 'di', hint: 'Prima di + infinito.' },
      {
        q: 'Dopo ___ mangiato, facciamo una passeggiata.',
        a: 'aver',
        alt: 'avere',
        hint: 'Dopo + infinito passato: dopo aver mangiato.',
      },
      { q: 'Aspetto ___ non arrivi.', a: 'finché', hint: 'Fino al momento in cui: finché.' },
      { q: 'Vengo, a meno ___ non piova.', a: 'che', hint: 'A meno che (non) + congiuntivo.' },
      { q: 'Era stanco, ma è venuto lo ___.', a: 'stesso', hint: 'Comunque, alla fine: lo stesso.' },
      { q: 'Arrivo dopodomani, ___ giovedì.', a: 'cioè', hint: 'Per spiegare meglio: cioè.' },
      { q: 'Mi piace la frutta, per ___ le mele.', a: 'esempio', hint: 'Per esempio.' },
      {
        q: '___ abito a Milano, prendo sempre la metro. (dal momento in cui)',
        a: 'da quando',
        hint: 'Dal momento in cui: da quando.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Com’è andato il viaggio?'],
      ['Studente', 'Bene, anche se il treno era in ritardo. Siccome avevo fame, ho mangiato in stazione.'],
      ['Martin', 'E poi?'],
      [
        'Studente',
        'Poi sono arrivato in albergo. Insomma, nonostante all’inizio sia andato tutto storto, è stata una bella giornata!',
      ],
    ])}</article>`,
  it: {
    h1: 'I connettivi: perché, quindi, nonostante, invece',
    crumb: 'Connettivi',
    cardTitle: 'Connettivi',
    card: 'Perché, quindi, invece, nonostante, affinché: i connettivi in ordine logico.',
    lead: 'I connettivi legano le frasi e dicono che rapporto c’è fra le idee: si aggiunge, si oppone, si spiega una causa, una conseguenza, un fine. Qui li trovi in sei gruppi logici, con quelli che vogliono il congiuntivo e 30 esercizi.',
    description:
      'I connettivi italiani in ordine logico: e, ma, però, invece, perché, siccome, quindi, perciò, anche se, nonostante, sebbene, affinché, purché, mentre, appena, insomma. Con indicativo o congiuntivo, errori comuni e 30 esercizi.',
    mapH2: 'La mappa dei connettivi',
    mapP: 'Prima di scegliere un connettivo chiediti che cosa fa la frase. <strong>Aggiunge</strong> un’idea o la <strong>oppone</strong>? Dice una <strong>causa</strong> o una <strong>conseguenza</strong>? Ammette un ostacolo (<strong>concessione</strong>)? Dice uno scopo o una <strong>condizione</strong>? Colloca un fatto nel <strong>tempo</strong>? O mette in <strong>ordine</strong> un discorso? I gruppi qui sotto seguono queste domande.',
    aggH2: 'Aggiungere e opporre',
    aggP: 'Per aggiungere un’idea o per metterne due a confronto. Sono i connettivi più semplici e più usati.',
    aggNote:
      '<strong>Ma e però</strong> vogliono dire la stessa cosa, ma <em lang="it">però</em> può stare anche alla fine: <em lang="it">è caro, è buono però</em>. <em lang="it">Tuttavia</em> è più formale, si usa soprattutto nello scritto. <em lang="it">Mentre</em> vuol dire «invece» quando confronta due persone o cose.',
    causaH2: 'Causa e conseguenza',
    causaP:
      'Per dire <strong>perché</strong> succede qualcosa (la causa) e <strong>che cosa succede dopo</strong> (la conseguenza).',
    causaNote1:
      '<strong>Siccome va all’inizio della frase:</strong> <em lang="it">siccome piove, resto a casa</em>. <em lang="it">Perché</em> invece va dopo: <em lang="it">resto a casa perché piove</em>. <em lang="it">Poiché</em> e <em lang="it">di conseguenza</em> sono più formali.',
    causaNote2:
      '<strong>Quindi, perciò, così</strong> introducono la conseguenza e sono quasi uguali. <em lang="it">Allora</em> è più colloquiale e si usa molto parlando.',
    concH2: 'Concessione: anche se, nonostante, sebbene',
    concP: 'Per dire che c’è un ostacolo, ma il fatto succede lo stesso: «c’è la pioggia, ma esco».',
    concNote:
      '<strong>Anche se vuole l’indicativo; nonostante, sebbene, benché e malgrado il congiuntivo.</strong> È l’errore più comune: non <em lang="it">nonostante piove</em>, ma <em lang="it">nonostante piova</em>. Il congiuntivo presente è spiegato nella lezione B2.',
    fineH2: 'Fine e condizione',
    fineP:
      'Per dire lo <strong>scopo</strong> di un’azione (a che cosa serve) e la <strong>condizione</strong> che deve esserci perché succeda.',
    fineNote:
      '<strong>Perché ha due significati.</strong> Con l’indicativo dice la causa (<em lang="it">studio perché mi piace</em>), con il congiuntivo il fine (<em lang="it">te lo spiego perché tu capisca</em>). Se il soggetto è lo stesso si usa <em lang="it">per</em> + infinito: <em lang="it">studio per imparare</em>.',
    tempoH2: 'Tempo: quando, mentre, appena, prima che',
    tempoP: 'Per dire quando succede un fatto rispetto a un altro: prima, nello stesso momento, subito dopo.',
    tempoNote:
      '<strong>Prima di o prima che?</strong> Con lo stesso soggetto si dice <em lang="it">prima di</em> + infinito: <em lang="it">prima di uscire, chiudo la finestra</em>. Con due soggetti diversi <em lang="it">prima che</em> + congiuntivo: <em lang="it">chiudo la finestra prima che entri il freddo</em>.',
    ordH2: 'Ordinare e concludere',
    ordP: 'Per dare un ordine a un discorso, fare un esempio, spiegare meglio e chiudere.',
    ordNote:
      '<strong>Insomma</strong> è molto italiano: riassume quello che si è detto (<em lang="it">insomma, è andata bene</em>) e, con il tono giusto, mostra un po’ di impazienza (<em lang="it">insomma, vieni o no?</em>).',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il connettivo giusto',
    part1P: 'Leggi la funzione tra parentesi e scrivi il connettivo.',
    part2H3: 'Parte 2 · Indicativo o congiuntivo?',
    part2P: 'Scrivi il verbo nella forma giusta.',
    part3H3: 'Parte 3 · Una parola sola',
    part3P: 'Scrivi la parola che manca.',
  },
};
