// Lezione A2 «Passato prossimo o imperfetto? Come scegliere» (rifatta il 2026-11-24 agli stessi URL): struttura,
// materiale italiano e testi. Le spiegazioni tradotte stanno in passato-prossimo-o-imperfetto-i18n.mjs.
//
// Ottava delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano, con una tabella, una mini storia e 12 esercizi. Ora: la domanda per scegliere (fatto, sequenza,
// numero di volte / abitudine, descrizione, stato d'animo, azione in corso), le due azioni nella stessa frase
// (mentre, quando), la durata (per due anni, tutto il giorno, da + durata), i verbi che cambiano senso (sapere,
// conoscere, dovere, potere, volere), un racconto commentato, le trappole e 30 esercizi. Confronto ed errori per
// lingua in confronti-pp-imperfetto.mjs (prima non c'erano). Il pulsante finale porta a «Stare + gerundio».

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'passato-prossimo-o-imperfetto',
  level: 'a2',
  next: 'stare-gerundio',
  minutes: 22,
  hero: { src: 'grammatica/passato-prossimo-o-imperfetto-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'passato-prossimo-vs-imperfetto',
    es: 'passato-prossimo-o-imperfetto',
    fr: 'passato-prossimo-ou-imperfetto',
    cs: 'passato-prossimo-nebo-imperfetto',
    pl: 'passato-prossimo-czy-imperfetto',
    tr: 'passato-prossimo-mu-imperfetto-mu',
    de: 'passato-prossimo-oder-imperfetto',
    ja: 'passato-prossimo-と-imperfetto',
  },
  nav: [
    ['scelta', 'Scelta'],
    ['insieme', 'Nella stessa frase'],
    ['durata', 'Quanto dura?'],
    ['cambiano', 'Verbi che cambiano'],
    ['racconto', 'Nel racconto'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="scelta"><h2>${L.sceltaH2}</h2><p>${L.sceltaP}</p>${h.examples([
    [L.eFatto, 'Sabato sono andato al mare.'],
    [L.eSequenza, 'Sono entrato, ho salutato e mi sono seduto.'],
    [L.eVolte, 'Sono stato a Roma tre volte.'],
    [L.eAbitudine, 'Da bambino andavo al mare ogni estate.'],
    [L.eDescrizione, 'Il mare era calmo, faceva caldo ed erano le cinque.'],
    [L.eStato, 'Ero contento e volevo ballare.'],
    [L.eInCorso, 'Alle otto facevo colazione.'],
  ])}<p class="mini-note">${L.sceltaNote
    .replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))
    .replace('{{IMPERFETTO}}', h.href('imperfetto', 'a2'))}</p></article>
    <article class="lesson-box" id="insieme"><h2>${L.insiemeH2}</h2><p>${L.insiemeP}</p>${h.examples([
      [L.iInterrompe, 'Mentre facevo la doccia, è suonato il telefono.'],
      [L.iQuando, 'Quando sono arrivato, pioveva.'],
      [L.iParallele, 'Mentre io cucinavo, Luca apparecchiava.'],
      [L.iSequenza, 'Quando è arrivato Luca, abbiamo mangiato.'],
    ])}<p class="mini-note">${L.insiemeNote.replace('{{GERUNDIO}}', h.href('stare-gerundio', 'a2'))}</p></article>
    <article class="lesson-box" id="durata"><h2>${L.durataH2}</h2><p>${L.durataP}</p>${h.examples([
      [L.dAperta, 'Abitavo a Milano.'],
      [L.dChiusa, 'Ho abitato a Milano per cinque anni.'],
      [L.dTutto, 'Ieri ha piovuto tutto il giorno.'],
      [L.dDa, 'Quando l’ho conosciuta, abitava a Milano da due anni.'],
    ])}<p class="mini-note">${L.durataNote}</p></article>
    <article class="lesson-box" id="cambiano"><h2>${L.cambH2}</h2><p>${L.cambP}</p>${h.examples([
      [L.cSapere, 'Sapevo che eri qui. · Ieri ho saputo la notizia.'],
      [L.cConoscere, 'Conoscevo Marta da anni. · Ho conosciuto Marta a una festa.'],
      [L.cDovere, 'Dovevo partire, ma sono rimasto. · Sono dovuto partire.'],
      [L.cPotere, 'Potevo venire, ma ero stanco. · Finalmente ho potuto riposare.'],
      [L.cVolere, 'Volevo uscire, ma pioveva. · Ho voluto vedere il film fino alla fine.'],
    ])}<p class="mini-note">${L.cambNote}</p></article>
    <article class="lesson-box" id="racconto"><h2>${L.racH2}</h2><p>${L.racP}</p><p class="italian-box" lang="it"><em>Era</em> domenica e <em>pioveva</em>. Io <em>ero</em> a casa da sola e <em>leggevo</em> un libro sul divano. Il gatto <em>dormiva</em> vicino alla finestra. All’improvviso <strong>è suonato</strong> il campanello. <strong>Ho aperto</strong> la porta: <em>c’era</em> mia sorella, tutta bagnata. <em>Aveva</em> in mano un ombrello rotto e <em>rideva</em>. L’<strong>ho fatta</strong> entrare e <strong>abbiamo preparato</strong> un tè.</p><p class="mini-note">${L.racNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tIeri, 'Ieri pioveva. · Ieri ho visto Anna.'],
      [L.tSempre, 'Da piccolo andavo sempre al mare. · Mi hai sempre aiutato.'],
      [L.tEta, 'Avevo dieci anni. · Erano le tre.'],
      [L.tCera, 'C’era molta gente. · C’è stato un incidente.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Da bambino ho giocato a calcio ogni sabato.', 'Da bambino giocavo a calcio ogni sabato.'],
      ['Ieri andavo al cinema con Marta.', 'Ieri sono andato al cinema con Marta.'],
      ['Mentre ho fatto la doccia, è suonato il telefono.', 'Mentre facevo la doccia, è suonato il telefono.'],
      ['Quando ho avuto dieci anni, abitavo a Napoli.', 'Quando avevo dieci anni, abitavo a Napoli.'],
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.'],
      ['Sapevo la notizia ieri sera.', 'Ho saputo la notizia ieri sera.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Ieri sera ___ un film bellissimo. (vedere, io)', a: 'ho visto', hint: 'Un fatto concluso: passato prossimo, ho visto.' },
        { q: 'Da bambina ___ sempre con la nonna. (cucinare, io)', a: 'cucinavo', hint: 'Da bambina, sempre: un’abitudine, cucinavo.' },
        { q: 'La casa al mare ___ piccola ma luminosa. (essere)', a: 'era', hint: 'Una descrizione: era.' },
        { q: 'Sabato scorso ___ in montagna. (andare, noi)', a: 'siamo andati', alt: 'siamo andate', hint: 'Un fatto, sabato scorso: siamo andati.' },
        { q: 'Quando ero giovane, ___ in un ristorante. (lavorare, io)', a: 'lavoravo', hint: 'Un periodo della vita: lavoravo.' },
        { q: 'Stamattina Luca ___ il treno delle sette. (prendere)', a: 'ha preso', hint: 'Un fatto di stamattina: ha preso.' },
        { q: 'Il nostro professore ___ simpatico e molto paziente. (essere)', a: 'era', hint: 'Una descrizione di una persona: era.' },
        { q: 'L’anno scorso ___ tre volte a Parigi. (essere, io)', a: 'sono stato', alt: 'sono stata', hint: 'Tre volte: un numero preciso, sono stato.' },
        { q: 'Ogni domenica i miei genitori ___ dai nonni. (andare)', a: 'andavano', hint: 'Ogni domenica: un’abitudine, andavano.' },
        { q: 'Alle otto in punto ___ il concerto. (cominciare)', a: 'è cominciato', alt: 'è iniziato', hint: 'Un momento preciso: è cominciato.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Mentre ___ la doccia, è suonato il telefono. (fare, io)', a: 'facevo', hint: 'Mentre + azione in corso: facevo.' },
      { q: 'Mentre io studiavo, mio fratello ___ la chitarra. (suonare)', a: 'suonava', hint: 'Due azioni lunghe insieme: suonava.' },
      { q: 'Quando sono uscito, ___ già buio. (essere)', a: 'era', hint: 'Lo sfondo, com’era: era buio.' },
      { q: 'Quando è arrivata Anna, noi ___ a mangiare. (cominciare)', a: 'abbiamo cominciato', alt: 'abbiamo iniziato', hint: 'Due fatti uno dopo l’altro: abbiamo cominciato.' },
      { q: 'Ieri ___ tutto il giorno. (piovere)', a: 'ha piovuto', alt: 'è piovuto', hint: 'Tutto il giorno: una durata chiusa, ha piovuto.' },
      { q: 'Lucia ___ a Torino per dieci anni, poi si è trasferita. (abitare)', a: 'ha abitato', hint: 'Per dieci anni: durata precisa, ha abitato.' },
      { q: 'Quando l’ho conosciuto, Marco ___ in Italia da un anno. (vivere)', a: 'viveva', hint: 'Da + durata, ancora in corso: viveva.' },
      { q: 'Ieri ___ che Paolo si sposa! (sapere, io)', a: 'ho saputo', hint: 'L’ho scoperto ieri: ho saputo.' },
      { q: 'Tre anni fa ___ Giulia a una festa. (conoscere, io)', a: 'ho conosciuto', hint: 'Il primo incontro: ho conosciuto.' },
      { q: '___ venire alla festa, ma ero troppo stanca. (volere, io)', a: 'volevo', hint: 'Avevo voglia, ma non sono venuta: volevo.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Era lunedì e ___ molto freddo. (fare)', a: 'faceva', hint: 'Il tempo, lo sfondo: faceva.' },
      { q: 'Alle sette e mezza ___ alla stazione di corsa. (arrivare, io)', a: 'sono arrivata', alt: 'sono arrivato', hint: 'Un fatto a un’ora precisa: sono arrivata.' },
      { q: 'Sul binario ___ tantissima gente. (esserci)', a: 'c’era', hint: 'Una descrizione: c’era.' },
      { q: 'Mentre ___ il biglietto nella borsa, ho sentito il fischio. (cercare, io)', a: 'cercavo', hint: 'Mentre + azione in corso: cercavo.' },
      { q: 'Il treno ___ senza di me! (partire)', a: 'è partito', hint: 'Il fatto che cambia la storia: è partito.' },
      { q: 'Ero arrabbiata e ___ fame. (avere, io)', a: 'avevo', hint: 'Uno stato: avevo fame.' },
      { q: 'Allora ___ in un bar lì vicino. (entrare, io)', a: 'sono entrata', alt: 'sono entrato', hint: 'Un fatto: sono entrata.' },
      { q: 'Il barista ___ un signore anziano molto gentile. (essere)', a: 'era', hint: 'Una descrizione: era.' },
      { q: 'Mi ___ un tè caldo e un consiglio: «Il prossimo parte tra dieci minuti». (dare)', a: 'ha dato', hint: 'Un fatto: mi ha dato.' },
      { q: 'Così quel giorno ___ il treno delle otto. (prendere, io)', a: 'ho preso', hint: 'Un fatto concluso: ho preso.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Che cosa hai fatto lo scorso fine settimana?'],
      ['Studente', 'Sabato sono andato al mare con degli amici.'],
      ['Martin', 'Che bello! Com’era il tempo?'],
      ['Studente', 'All’inizio c’era il sole e faceva caldo. Poi, mentre facevamo il bagno, è arrivato un temporale!'],
      ['Martin', 'E che cosa avete fatto?'],
      ['Studente', 'Siamo corsi in un bar e abbiamo aspettato. Pioveva tantissimo, ma ci siamo divertiti lo stesso.'],
    ])}</article>`,
  it: {
    h1: 'Passato prossimo o imperfetto? Come scegliere',
    card: 'Ho visto o vedevo? La domanda per scegliere, mentre e quando, la durata, i verbi che cambiano senso e il racconto.',
    lead: 'Sabato sono andato al mare, ma da bambino andavo al mare ogni estate: il passato prossimo racconta i fatti, l’imperfetto descrive e racconta le abitudini. La domanda per scegliere, le due azioni nella stessa frase (mentre, quando), la durata, i verbi che cambiano senso (sapevo, ho saputo), un racconto e le trappole. Con 30 esercizi.',
    description:
      'Passato prossimo o imperfetto? Come scegliere: fatti, abitudini e descrizioni, mentre e quando, la durata (per cinque anni, tutto il giorno), i verbi che cambiano senso (sapere, conoscere, dovere, potere, volere), il racconto, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Un ombrellone rosso aperto sopra il tavolino di un bar, con due sedie vuote, in una piazzetta italiana bagnata dalla pioggia',
    sceltaH2: 'La domanda per scegliere',
    sceltaP:
      'Tutti e due i tempi parlano del passato, ma guardano le cose in modo diverso. Il <strong>passato prossimo</strong> racconta un <strong>fatto</strong>: è successo, è finito. L’<strong>imperfetto</strong> descrive <strong>com’era</strong> la situazione o che cosa succedeva <strong>di solito</strong>.',
    eFatto: 'Passato prossimo: un fatto concluso',
    eSequenza: 'Passato prossimo: fatti uno dopo l’altro',
    eVolte: 'Passato prossimo: un numero preciso di volte',
    eAbitudine: 'Imperfetto: un’abitudine',
    eDescrizione: 'Imperfetto: luoghi, persone, tempo, ora, età',
    eStato: 'Imperfetto: stati d’animo, pensieri, desideri',
    eInCorso: 'Imperfetto: un’azione in corso in quel momento',
    sceltaNote:
      '<strong>Il trucco</strong>: chiediti «che cosa è successo?» → passato prossimo; «com’era?» o «che cosa succedeva di solito?» → imperfetto. Spesso la stessa frase si può dire nei due modi, ma il senso cambia: <em lang="it">alle otto facevo colazione</em> (ero a metà) / <em lang="it">alle otto ho fatto colazione</em> (è il fatto delle otto). Le forme sono nelle lezioni <a href="{{PASSATO}}">passato prossimo</a> e <a href="{{IMPERFETTO}}">imperfetto</a>.',
    insiemeH2: 'Due azioni nella stessa frase',
    insiemeP:
      'Con <strong>mentre</strong> e <strong>quando</strong> i due tempi si incontrano. Guarda quale azione dura e quale arriva.',
    iInterrompe: 'Un’azione lunga interrotta da un fatto',
    iQuando: 'Quando + un fatto, e sullo sfondo una situazione',
    iParallele: 'Due azioni lunghe insieme: imperfetto + imperfetto',
    iSequenza: 'Due fatti uno dopo l’altro: passato prossimo + passato prossimo',
    insiemeNote:
      '<strong>Mentre</strong> vuole quasi sempre l’imperfetto, perché introduce un’azione che dura. <strong>Quando</strong> va con tutti e due: <em lang="it">quando ero piccolo</em> (un periodo), <em lang="it">quando sono arrivato</em> (un momento). E il senso cambia: <em lang="it">quando è arrivato Luca, mangiavamo</em> (eravamo già a tavola) / <em lang="it">quando è arrivato Luca, abbiamo mangiato</em> (abbiamo cominciato dopo). Al posto dell’imperfetto puoi usare anche <a href="{{GERUNDIO}}">stavo + gerundio</a>: <em lang="it">mentre stavo facendo la doccia</em>.',
    durataH2: 'Quanto è durato?',
    durataP:
      'Una trappola per molti: un’azione lunga non vuole per forza l’imperfetto. Se dici <strong>quanto è durata</strong>, l’azione è chiusa, finita: passato prossimo.',
    dAperta: 'Senza una fine: imperfetto',
    dChiusa: 'Con una durata precisa: passato prossimo',
    dTutto: 'Tutto il giorno, tutta la sera: passato prossimo',
    dDa: 'Da + durata, ancora in corso in quel momento: imperfetto',
    durataNote:
      '<em lang="it">Ieri pioveva</em> descrive com’era la giornata; <em lang="it">ieri ha piovuto tutto il giorno</em> racconta un fatto chiuso, con la sua durata. Con <strong>da</strong> l’azione era ancora in corso: <em lang="it">abitava a Milano da due anni</em> (e ci abitava ancora). Con <strong>per</strong> è finita: <em lang="it">ho abitato a Milano per cinque anni</em> (poi sono andato via).',
    cambH2: 'I verbi che cambiano senso',
    cambP: 'Con alcuni verbi la scelta del tempo cambia quasi il significato.',
    cSapere: 'Sapere: lo sapevo già · l’ho scoperto',
    cConoscere: 'Conoscere: ci conoscevamo già · la prima volta che ci siamo visti',
    cDovere: 'Dovere: era previsto, forse non l’ho fatto · e l’ho fatto',
    cPotere: 'Potere: avevo la possibilità · ci sono riuscito',
    cVolere: 'Volere: avevo voglia · ho deciso',
    cambNote:
      '<strong>Dovevo, potevo, volevo</strong> non dicono se l’azione è successa davvero: spesso dopo arriva un <em lang="it">ma</em>. <strong>Ho dovuto, ho potuto, ho voluto</strong> dicono che è successa. Con <em lang="it">essere</em> è lo stesso: <em lang="it">ero malato</em> descrive, <em lang="it">sono stato malato per una settimana</em> racconta un periodo chiuso.',
    racH2: 'Nel racconto',
    racP:
      'Leggi questa piccola storia. L’imperfetto (in corsivo) prepara la scena, il passato prossimo (in grassetto) la fa andare avanti.',
    racNote:
      '<strong>Prova a togliere le parole in corsivo</strong>: i fatti restano, ma senza colore. Togli quelle in grassetto: resta una fotografia, non succede niente. Per questo in un racconto servono tutti e due i tempi.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tIeri: 'Ieri: tutti e due i tempi',
    tSempre: 'Sempre: un’abitudine o fino a oggi',
    tEta: 'L’età e l’ora: sempre imperfetto',
    tCera: 'C’era o c’è stato?',
    trapNote:
      'Le parole spia aiutano, ma decide il senso: con <em lang="it">ieri</em> e <em lang="it">sempre</em> vanno bene tutti e due i tempi. Per l’età si dice <strong>avevo dieci anni</strong>, mai <em lang="it">ho avuto dieci anni</em>. <strong>C’era</strong> descrive (chi o che cosa c’era), <strong>c’è stato</strong> racconta un fatto: un incidente, una festa, un problema.',
    exIntro: '30 frasi in tre parti. Scrivi solo il verbo: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Fatto o descrizione?',
    part1P: 'Scrivi il verbo al passato prossimo o all’imperfetto.',
    part2H3: 'Parte 2 · Nella stessa frase',
    part2P: 'Mentre, quando, la durata e i verbi che cambiano senso.',
    part3H3: 'Parte 3 · Il treno perso: un racconto',
    part3P: 'Una storia: scegli tu il tempo giusto.',
  },
};
