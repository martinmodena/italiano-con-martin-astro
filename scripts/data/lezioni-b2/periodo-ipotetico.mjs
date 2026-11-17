// Lezione B2 «Il periodo ipotetico» (rifatta il 2026-11-17 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in periodo-ipotetico-i18n.mjs.
//
// Martin il 2026-11-17: «sarebbe buono una scheda che riassume i periodi ipotetici, o c'è già?». C'era una
// lezione scritta a mano con tre tipi e 10 esercizi. Invece di una scheda doppia la lezione è stata allargata:
// lo schema di tutti i tipi in una tabella, la realtà (anche con futuro e imperativo), la possibilità e
// l'irrealtà nel presente, l'irrealtà nel passato, il tipo misto (se avessi studiato, ora sarei medico),
// il parlato (se lo sapevo, venivo), gli altri modi per dire una condizione, le trappole e 30 esercizi.
// Rimanda alle lezioni nuove sul condizionale passato (B2) e sul congiuntivo passato e trapassato (C1).
// Confronto ed errori per lingua in confronti-periodo-ipotetico.mjs.

export default {
  slug: 'periodo-ipotetico',
  level: 'b2',
  next: 'congiuntivo-imperfetto',
  minutes: 25,
  hero: { src: 'grammatica/periodo-ipotetico-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-periodo-ipotetico',
    es: 'periodo-ipotetico-en-italiano',
    fr: 'periodo-ipotetico-en-italien',
    cs: 'italsky-periodo-ipotetico',
    pl: 'wloski-periodo-ipotetico',
    tr: 'italyanca-periodo-ipotetico',
    de: 'der-italienische-periodo-ipotetico',
    ja: 'イタリア語の-periodo-ipotetico',
  },
  nav: [
    ['tipi', 'Tipi'],
    ['reale', 'Reale'],
    ['possibile', 'Possibile'],
    ['irreale', 'Irreale'],
    ['misto', 'Tipo misto'],
    ['parlato', 'Nel parlato'],
    ['altri', 'Altri modi'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="tipi"><h2>${L.tipiH2}</h2><p>${L.tipiP}</p>${h.table(
    ['Tipo', 'Dopo se', 'Conseguenza', 'Esempio'],
    [
      ['reale', 'presente · futuro', 'presente · futuro · imperativo', 'Se piove, resto a casa.'],
      ['possibile', 'congiuntivo imperfetto', 'condizionale presente', 'Se avessi tempo, leggerei di più.'],
      ['irreale (oggi)', 'congiuntivo imperfetto', 'condizionale presente', 'Se fossi un uccello, volerei.'],
      ['irreale (ieri)', 'congiuntivo trapassato', 'condizionale passato', 'Se avessi studiato, avrei superato l’esame.'],
      ['misto: ieri → oggi', 'congiuntivo trapassato', 'condizionale presente', 'Se avessi studiato medicina, ora sarei medico.'],
      ['misto: sempre → ieri', 'congiuntivo imperfetto', 'condizionale passato', 'Se fossi più attento, non avresti sbagliato.'],
      ['parlato', 'imperfetto', 'imperfetto', 'Se lo sapevo, venivo.'],
    ]
  )}<p class="mini-note">${L.tipiNote}</p></article>
    <article class="lesson-box" id="reale"><h2>${L.realeH2}</h2><p>${L.realeP}</p>${h.examples([
      [L.rPresente, 'Se piove, resto a casa. · Se scaldi il ghiaccio, si scioglie.'],
      [L.rFuturo, 'Se verrai a Roma, ti porterò al Colosseo.'],
      [L.rImperativo, 'Se hai fame, mangia qualcosa!'],
      [L.rPassato, 'Se hai finito, possiamo uscire. · Se Marco ha detto così, è vero.'],
    ])}<p class="mini-note">${L.realeNote}</p></article>
    <article class="lesson-box" id="possibile"><h2>${L.possH2}</h2><p>${L.possP}</p>${h.examples([
      [L.pPossibile, 'Se domani avessi tempo, verrei con voi.'],
      [L.pIrreale, 'Se fossi un uccello, volerei sopra il mare. · Se abitassi a Napoli, mangerei la pizza ogni giorno.'],
      [L.pConsiglio, 'Se fossi in te, parlerei con lei.'],
    ])}<p class="mini-note">${L.possNote.replace('{{CONGIMP}}', h.href('congiuntivo-imperfetto', 'c1')).replace('{{CONDPRES}}', h.href('condizionale-presente', 'b1'))}</p></article>
    <article class="lesson-box" id="irreale"><h2>${L.irrH2}</h2><p>${L.irrP}</p>${h.examples([
      [L.iPassato, 'Se avessi saputo la risposta, l’avrei detta.'],
      [L.iEssere, 'Se fossi partito prima, sarei arrivato in tempo.'],
      [L.iRimpianto, 'Se avessimo prenotato, avremmo trovato posto.'],
      [L.iOrdine, 'Ti avrei aiutato volentieri, se me l’avessi chiesto.'],
    ])}<p class="mini-note">${L.irrNote.replace('{{CONGTRAP}}', h.href('congiuntivo-passato-e-trapassato', 'c1')).replace('{{CONDPASS}}', h.href('condizionale-passato', 'b2'))}</p></article>
    <article class="lesson-box" id="misto"><h2>${L.mistoH2}</h2><p>${L.mistoP}</p>${h.examples([
      [L.mIeriOggi, 'Se avessi studiato medicina, ora sarei medico. · Se ieri sera fossi andato a letto presto, oggi non sarei stanco.'],
      [L.mSempreIeri, 'Se fossi più attento, non avresti perso le chiavi. · Se Laura parlasse tedesco, avrebbe accettato quel lavoro a Berlino.'],
    ])}<p class="mini-note">${L.mistoNote}</p></article>
    <article class="lesson-box" id="parlato"><h2>${L.parlH2}</h2><p>${L.parlP}</p>${h.examples([
      [L.plDoppio, 'Se lo sapevo, venivo. · Se partivi prima, non perdevi il treno.'],
      [L.plScritto, 'Se l’avessi saputo, sarei venuto. · Se fossi partito prima, non avresti perso il treno.'],
    ])}<p class="mini-note">${L.parlNote}</p></article>
    <article class="lesson-box" id="altri"><h2>${L.altriH2}</h2><p>${L.altriP}</p>${h.examples([
      [L.aGerundio, 'Studiando un po’ ogni giorno, migliorerai presto.'],
      [L.aCaso, 'Nel caso in cui piovesse, la festa si farà in casa. · Qualora ci fossero problemi, chiamateci.'],
      [L.aPatto, 'Ti presto la macchina, a patto che tu me la riporti stasera. · Puoi uscire, purché tu torni per cena.'],
      [L.aAltrimenti, 'Sbrigati, altrimenti perdiamo il treno. · Al tuo posto, accetterei.'],
    ])}<p class="mini-note">${L.altriNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tSe, 'Se avessi tempo… (mai: se avrei tempo)'],
      [L.tFuturo, 'Se domani piove, resto a casa. · Se domani pioverà, resterò a casa.'],
      [L.tSeDubbio, 'Non so se verrà. · Mi chiedo se abbia capito.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Se avrei tempo, verrei.', 'Se avessi tempo, verrei.'],
      ['Se sarei stato lì, ti avrei aiutato.', 'Se fossi stato lì, ti avrei aiutato.'],
      ['Se avessi studiato medicina, ora avrei fatto il medico.', 'Se avessi studiato medicina, ora farei il medico.'],
      ['Se piove, resterei a casa.', 'Se piove, resto a casa.'],
      ['Se studiavi di più, passeresti l’esame.', 'Se studiassi di più, passeresti l’esame.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        {
          q: 'Se piove, ___ a casa. (restare, noi)',
          a: 'restiamo',
          alt: 'resteremo',
          hint: 'Periodo reale: se + presente, poi presente o futuro.',
        },
        {
          q: 'Se finisci presto, mi ___? (chiamare, tu)',
          a: 'chiami',
          alt: 'chiamerai',
          hint: 'Periodo reale: presente o futuro.',
        },
        {
          q: 'Se ___ più tempo, leggerei di più. (avere, io)',
          a: 'avessi',
          hint: 'Dopo se, nell’ipotesi possibile: congiuntivo imperfetto, avessi.',
        },
        { q: 'Se fossi in te, non lo ___. (fare, io)', a: 'farei', hint: 'Conseguenza: condizionale presente, farei.' },
        { q: 'Se ___ ricco, comprerei una casa al mare. (essere, io)', a: 'fossi', hint: 'Essere al congiuntivo imperfetto: fossi.' },
        { q: 'Se Marco ___ qui, sarebbe contento. (essere)', a: 'fosse', hint: 'Lui: fosse.' },
        {
          q: 'Se ___ prima, avremmo preso il treno. (partire, noi)',
          a: 'fossimo partiti',
          alt: 'fossimo partite',
          hint: 'Irreale nel passato: congiuntivo trapassato; partire vuole essere.',
        },
        { q: 'Se l’avessi saputo, ti ___. (aiutare, io)', a: 'avrei aiutato', hint: 'Conseguenza nel passato: condizionale passato.' },
        {
          q: 'Se voi ___ attenzione, avreste capito. (fare)',
          a: 'aveste fatto',
          hint: 'Congiuntivo trapassato di fare: aveste fatto.',
        },
        {
          q: 'Se le ragazze fossero arrivate in tempo, ___ il concerto. (vedere)',
          a: 'avrebbero visto',
          hint: 'Condizionale passato: avrebbero visto.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      {
        q: 'Se avessi studiato medicina, ora ___ medico. (essere, io)',
        a: 'sarei',
        hint: 'Una scelta di ieri, un risultato di oggi: condizionale presente.',
      },
      {
        q: 'Se ieri non avessi fatto tardi, oggi non ___ così stanco. (essere, io)',
        a: 'sarei',
        hint: 'Oggi: condizionale presente, sarei.',
      },
      {
        q: 'Se fossi più organizzato, ieri non ___ l’aereo. (perdere, io)',
        a: 'avrei perso',
        hint: 'Come sei sempre, cosa è successo ieri: condizionale passato.',
      },
      {
        q: 'Se Laura parlasse tedesco, l’anno scorso ___ quel lavoro a Berlino. (accettare)',
        a: 'avrebbe accettato',
        hint: 'L’anno scorso: condizionale passato.',
      },
      {
        q: 'Se avessimo comprato i biglietti, adesso ___ al concerto. (essere, noi)',
        a: 'saremmo',
        hint: 'Adesso: condizionale presente, saremmo.',
      },
      {
        q: 'Se domani c’è il sole, ___ al mare. (andare, noi)',
        a: 'andiamo',
        alt: 'andremo',
        hint: 'Periodo reale: presente o futuro.',
      },
      { q: 'Se tu ___ meno, dormiresti meglio. (lavorare)', a: 'lavorassi', hint: 'Congiuntivo imperfetto: lavorassi.' },
      {
        q: 'Se non ___ il passaporto, saremmo già in vacanza. (dimenticare, noi)',
        a: 'avessimo dimenticato',
        hint: 'La causa è nel passato: congiuntivo trapassato.',
      },
      {
        q: 'Se mi avessi ascoltato, ora non ___ questo problema. (avere, tu)',
        a: 'avresti',
        hint: 'Ora: condizionale presente, avresti.',
      },
      {
        q: 'Se fosse meno timido, ieri ___ con lei alla festa. (parlare, lui)',
        a: 'avrebbe parlato',
        hint: 'Ieri: condizionale passato.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: '«Se lo sapevo, venivo.» → Se lo ___, sarei venuto. (sapere, io)',
        a: 'avessi saputo',
        hint: 'Nello scritto: congiuntivo trapassato.',
      },
      {
        q: '«Se partivi prima, non perdevi il treno.» → Se fossi partito prima, non ___ il treno. (perdere, tu)',
        a: 'avresti perso',
        hint: 'Condizionale passato di perdere: avresti perso.',
      },
      {
        q: '«Se mi chiamavi, ti venivo a prendere.» → Se mi ___, ti sarei venuto a prendere. (chiamare, tu)',
        a: 'avessi chiamato',
        hint: 'Congiuntivo trapassato: avessi chiamato.',
      },
      {
        q: '«Se c’era un altro treno, lo prendevo.» → Se ci ___ un altro treno, l’avrei preso. (essere)',
        a: 'fosse stato',
        hint: 'Esserci al congiuntivo trapassato: ci fosse stato.',
      },
      {
        q: '«Se non c’era lo sciopero, arrivavamo in tempo.» → Se non ci fosse stato lo sciopero, ___ in tempo. (arrivare, noi)',
        a: 'saremmo arrivati',
        alt: 'saremmo arrivate',
        hint: 'Arrivare vuole essere: saremmo arrivati.',
      },
      {
        q: 'Se il treno fosse partito in orario, adesso ___ già a Roma. (essere, noi)',
        a: 'saremmo',
        hint: 'Tipo misto: adesso, condizionale presente.',
      },
      { q: 'Se avessi una macchina, ___ meno il treno. (prendere, io)', a: 'prenderei', hint: 'Possibile: condizionale presente.' },
      {
        q: 'Se fossi il capotreno, ___ scusa a tutti. (chiedere, io)',
        a: 'chiederei',
        hint: 'Irreale nel presente: condizionale presente.',
      },
      {
        q: 'Se la prossima volta ___ prima, prenderemo il treno delle otto. (uscire, noi)',
        a: 'usciamo',
        alt: 'usciremo',
        hint: 'Periodo reale sul futuro: presente o futuro.',
      },
      {
        q: 'Se perdi anche quel treno, ___ subito! (chiamare, tu + mi)',
        a: 'chiamami',
        hint: 'Periodo reale con l’imperativo: chiamami.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Allora, com’è andato il viaggio a Roma?'],
      ['Studente', 'Male! Se lo sapevo, restavo a casa. C’era lo sciopero dei treni.'],
      ['Martin', 'Se l’avessi saputo, ti avrei avvisato! Comunque, se fossi in te, la prossima volta andrei in pullman.'],
      ['Studente', 'Hai ragione. Se avessi preso il pullman, ora sarei meno stanco.'],
      ['Martin', 'E se il mese prossimo vuoi riprovare, vengo con te!'],
    ])}</article>`,
  it: {
    h1: 'Il periodo ipotetico: se avessi tempo, se l’avessi saputo',
    card: 'Tutti i tipi in uno schema: realtà, possibilità, irrealtà, il tipo misto (se avessi studiato, ora sarei medico) e il parlato (se lo sapevo, venivo).',
    lead: 'Se avessi tempo, leggerei di più; se l’avessi saputo, sarei venuto. Il periodo ipotetico in uno schema: realtà, possibilità, irrealtà nel presente e nel passato, il tipo misto, il «se lo sapevo, venivo» del parlato, gli altri modi per dire una condizione e le trappole. Con 30 esercizi.',
    description:
      'Il periodo ipotetico in italiano: lo schema di tutti i tipi (reale, possibile, irreale), i tempi dopo se, il tipo misto, «se lo sapevo, venivo» nel parlato, a patto che e qualora, gli errori tipici e 30 esercizi.',
    heroAlt: 'Una strada bianca di campagna fra le colline toscane, con un cipresso e una casa di pietra in lontananza',
    tipiH2: 'Lo schema: tutti i tipi in una tabella',
    tipiP:
      'Il periodo ipotetico ha due parti: la <strong>condizione</strong> (con <strong>se</strong>) e la <strong>conseguenza</strong>. I tempi dei verbi dicono quanto è probabile l’ipotesi: dal fatto quasi sicuro alla cosa impossibile.',
    tipiNote:
      'La regola d’oro: <strong>dopo se non c’è mai il condizionale</strong>. Il condizionale sta nella conseguenza; dopo <em lang="it">se</em> c’è l’indicativo (realtà) o il congiuntivo (possibilità e irrealtà).',
    realeH2: 'La realtà: se + indicativo',
    realeP:
      'Quando l’ipotesi è reale o molto probabile, si usa l’<strong>indicativo</strong> in tutte e due le parti. Nella conseguenza va bene anche l’<strong>imperativo</strong>.',
    rPresente: 'Presente + presente: le cose che succedono sempre',
    rFuturo: 'Futuro + futuro: una cosa del futuro',
    rImperativo: 'Presente + imperativo: un consiglio',
    rPassato: 'Con il passato prossimo',
    realeNote:
      'Per il futuro il parlato preferisce il presente: <em lang="it">se vieni a Roma, ti porto al Colosseo</em>. Se usi il futuro, mettilo <strong>in tutte e due le parti</strong>: <em lang="it">se verrai, ti porterò</em>.',
    possH2: 'La possibilità e l’irrealtà nel presente',
    possP:
      'Quando l’ipotesi è solo possibile, o impossibile oggi, si usa <strong>se + congiuntivo imperfetto</strong> e il <strong>condizionale presente</strong> nella conseguenza. La forma è la stessa: è il senso a dire se la cosa può succedere.',
    pPossibile: 'Possibile: può succedere',
    pIrreale: 'Irreale nel presente: non è così',
    pConsiglio: 'Se fossi in te: per dare un consiglio',
    possNote:
      'Ti servono il <a href="{{CONGIMP}}">congiuntivo imperfetto</a> (<em lang="it">avessi, fossi, facessi, potessi</em>) e il <a href="{{CONDPRES}}">condizionale presente</a> (<em lang="it">avrei, sarei, farei, potrei</em>).',
    irrH2: 'L’irrealtà nel passato',
    irrP:
      'Quando parliamo di una cosa che <strong>non è successa</strong>, si usa <strong>se + congiuntivo trapassato</strong> e il <strong>condizionale passato</strong>. È il periodo dei rimpianti e delle occasioni perse.',
    iPassato: 'Con avere',
    iEssere: 'Con essere: il participio si accorda',
    iRimpianto: 'Un’occasione persa',
    iOrdine: 'La conseguenza può venire prima',
    irrNote:
      'Le forme sono spiegate nelle lezioni sul <a href="{{CONGTRAP}}">congiuntivo passato e trapassato</a> (<em lang="it">avessi fatto, fossi andato</em>) e sul <a href="{{CONDPASS}}">condizionale passato</a> (<em lang="it">avrei fatto, sarei andato</em>). Essere o avere si scelgono come al passato prossimo.',
    mistoH2: 'Il tipo misto: il passato cambia il presente',
    mistoP:
      'A volte la condizione e la conseguenza stanno in <strong>due tempi diversi</strong>. Allora si mescolano i tipi: ogni parte prende il tempo che le serve.',
    mIeriOggi: 'Ieri → oggi: congiuntivo trapassato + condizionale presente',
    mSempreIeri: 'Sempre → ieri: congiuntivo imperfetto + condizionale passato',
    mistoNote:
      'Fatti due domande. <strong>Quando sarebbe dovuta succedere la condizione?</strong> Ieri: <em lang="it">avessi studiato</em>; in generale o oggi: <em lang="it">fossi</em>. <strong>Quando c’è la conseguenza?</strong> Oggi: <em lang="it">sarei</em>; ieri: <em lang="it">avrei perso</em>. Parole come <em lang="it">ora, adesso, oggi, ieri, l’anno scorso</em> aiutano molto.',
    parlH2: 'Nel parlato: se lo sapevo, venivo',
    parlP:
      'Nella conversazione molti italiani usano l’<strong>imperfetto indicativo</strong> in tutte e due le parti per l’irrealtà nel passato. È più veloce e più leggero.',
    plDoppio: 'Parlato: imperfetto + imperfetto',
    plScritto: 'Scritto e lingua curata',
    parlNote:
      '<em lang="it">Se lo sapevo, venivo</em> è normale fra amici, nei messaggi e nei film, ma <strong>non va scritto</strong> in un tema, in un’email di lavoro o in un esame: lì ci vuole <em lang="it">se l’avessi saputo, sarei venuto</em>. Impara la forma curata e riconosci quella del parlato. Si sente anche il misto <em lang="it">se lo sapevo, sarei venuto</em>; anche questo è solo parlato.',
    altriH2: 'Altri modi per dire una condizione',
    altriP: 'Non serve sempre <strong>se</strong>: l’italiano ha altre parole e costruzioni.',
    aGerundio: 'Il gerundio',
    aCaso: 'Nel caso in cui, qualora + congiuntivo',
    aPatto: 'A patto che, purché + congiuntivo',
    aAltrimenti: 'Altrimenti, al tuo posto',
    altriNote:
      '<em lang="it">Nel caso in cui, qualora, a patto che, purché</em> vogliono <strong>sempre il congiuntivo</strong>, anche quando l’ipotesi è probabile. <em lang="it">Qualora</em> è formale: si trova nei contratti e negli avvisi.',
    trapH2: 'Le trappole',
    trapP: 'Tre errori che fanno anche gli studenti avanzati.',
    tSe: 'Dopo se: mai il condizionale',
    tFuturo: 'Il futuro: in tutte e due le parti o in nessuna',
    tSeDubbio: 'Il se del dubbio non è un periodo ipotetico',
    trapNote:
      '<strong>Se avrei</strong> è l’errore più famoso, anche fra gli italiani: dopo <em lang="it">se</em> ci vuole il congiuntivo. Ma attenzione: <em lang="it">non so se verrà</em> non è un periodo ipotetico. Qui <em lang="it">se</em> vuol dire «se oppure no», e dopo può venire il futuro o il condizionale (<em lang="it">mi chiedevo se avresti potuto aiutarmi</em>).',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Tipo per tipo',
    part1P: 'Scrivi il verbo al tempo giusto: reale, possibile o irreale.',
    part2H3: 'Parte 2 · Il tipo misto',
    part2P: 'Guarda le parole di tempo (ora, ieri, l’anno scorso) e scegli fra presente e passato.',
    part3H3: 'Parte 3 · Il treno perso',
    part3P: 'Una storia. Nelle prime cinque frasi trasforma il parlato nella forma scritta.',
  },
};
