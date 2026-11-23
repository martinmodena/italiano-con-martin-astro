// Lezione A1 «Genere e numero dei nomi: il libro, i libri» (rifatta il 2026-11-23 agli stessi URL): struttura,
// materiale italiano e testi. Le spiegazioni tradotte stanno in genere-e-numero-i18n.mjs.
//
// Terza delle lezioni con pochi esercizi (Martin, 2026-11-23). La lezione di agosto aveva una tabella, quattro
// eccezioni e 8 esercizi, senza confronto con la lingua né errori per lingua. Ora: la regola (-o, -a, -e e i
// suffissi che aiutano: -zione e -tà femminili, -ore maschile), il plurale (anche -co, -ca, -go), maschile e
// femminile delle persone, i nomi che non cambiano, le eccezioni (il problema, la mano, l'uomo, le uova) e 30
// esercizi. Confronto ed errori per lingua in confronti-genere-numero.mjs. Nell'indice A1 la tessera resta dov'era
// (dopo i verbi riflessivi); il pulsante finale porta alle preposizioni semplici.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'genere-e-numero',
  next: 'preposizioni-semplici',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/genere-e-numero-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'gender-and-number-of-italian-nouns',
    es: 'genero-y-numero-de-los-sustantivos-italianos',
    fr: 'genre-et-nombre-des-noms-italiens',
    cs: 'rod-a-cislo-italskych-podstatnych-jmen',
    pl: 'rodzaj-i-liczba-wloskich-rzeczownikow',
    tr: 'italyanca-isimlerde-cinsiyet-ve-cogul',
    de: 'geschlecht-und-zahl-italienischer-substantive',
    ja: 'イタリア語の名詞の性と数',
  },
  nav: [
    ['regola', 'Regola'],
    ['plurale', 'Il plurale'],
    ['persone', 'Con le persone'],
    ['invariabili', 'Nomi invariabili'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rO, 'il libro · il gatto · il treno'],
    [L.rA, 'la casa · la pizza · la scuola'],
    [L.rE, 'il pane · il fiore · la chiave · la notte'],
    [L.rSuffissi, 'la stazione · la città · il colore · il dottore'],
  ])}<p class="mini-note">${L.regolaNote}</p></article>
    <article class="lesson-box" id="plurale"><h2>${L.plurH2}</h2><p>${L.plurP}</p>${h.table(
      ['Singolare', 'Plurale', 'Esempio'],
      [
        ['-o', '-i', 'il libro → i libri'],
        ['-a', '-e', 'la casa → le case'],
        ['-e', '-i', 'il fiore → i fiori · la chiave → le chiavi'],
        ['-ca · -ga', '-che · -ghe', 'l’amica → le amiche · la riga → le righe'],
        ['-co · -go', '-ci · -chi · -ghi', 'l’amico → gli amici · il gioco → i giochi'],
      ]
    )}<p class="mini-note">${L.plurNote.replace('{{DETERMINATIVI}}', h.href('articoli-determinativi', 'a1'))}</p></article>
    <article class="lesson-box" id="persone"><h2>${L.persH2}</h2><p>${L.persP}</p>${h.table(
      ['Maschile', 'Femminile'],
      [
        ['il ragazzo', 'la ragazza'],
        ['l’amico', 'l’amica'],
        ['il signore', 'la signora'],
        ['lo studente', 'la studentessa'],
        ['il dottore', 'la dottoressa'],
        ['l’attore', 'l’attrice'],
        ['il cantante', 'la cantante'],
        ['il turista', 'la turista'],
      ]
    )}<p class="mini-note">${L.persNote}</p></article>
    <article class="lesson-box" id="invariabili"><h2>${L.invH2}</h2><p>${L.invP}</p>${h.examples([
      [L.iAccento, 'la città → le città · il caffè → i caffè'],
      [L.iStraniere, 'il bar → i bar · lo sport → gli sport'],
      [L.iCorte, 'la foto → le foto · la bici → le bici · il cinema → i cinema'],
    ])}<p class="mini-note">${L.invNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tMaschileA, 'il problema → i problemi · il programma → i programmi'],
      [L.tMano, 'la mano → le mani · la radio → le radio'],
      [L.tUomo, 'l’uomo → gli uomini'],
      [L.tUova, 'l’uovo → le uova · il braccio → le braccia'],
      [L.tGente, 'la gente è simpatica · le persone sono simpatiche'],
    ])}<p class="mini-note">${L.trapNote.replace('{{AGGETTIVI}}', h.href('aggettivi-qualificativi', 'a1'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['i casa', 'le case'],
      ['la problema', 'il problema'],
      ['le caffè', 'i caffè'],
      ['le amice', 'le amiche'],
      ['due libro', 'due libri'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ libro', a: 'il', hint: 'Libro finisce in -o: è maschile, il libro.' },
        { q: '___ casa', a: 'la', hint: 'Casa finisce in -a: è femminile, la casa.' },
        { q: '___ pane', a: 'il', hint: 'Pane finisce in -e ed è maschile: il pane.' },
        { q: '___ notte', a: 'la', hint: 'Notte finisce in -e ed è femminile: la notte.' },
        { q: '___ stazione', a: 'la', hint: 'I nomi in -zione sono femminili: la stazione.' },
        { q: '___ colore', a: 'il', hint: 'I nomi in -ore sono maschili: il colore.' },
        { q: '___ città', a: 'la', hint: 'I nomi in -tà sono femminili: la città.' },
        { q: '___ problema', a: 'il', hint: 'Attenzione: problema finisce in -a, ma è maschile.' },
        { q: '___ mano', a: 'la', hint: 'Attenzione: mano finisce in -o, ma è femminile.' },
        { q: '___ ragazza', a: 'la', hint: 'Ragazza finisce in -a: è femminile.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'il libro → i ___', a: 'libri', hint: '-o diventa -i: libri.' },
      { q: 'la casa → le ___', a: 'case', hint: '-a diventa -e: case.' },
      { q: 'il fiore → i ___', a: 'fiori', hint: '-e diventa -i: fiori.' },
      { q: 'la chiave → le ___', a: 'chiavi', hint: '-e diventa -i anche al femminile: chiavi.' },
      { q: 'lo studente → gli ___', a: 'studenti', hint: '-e diventa -i: studenti.' },
      { q: 'la ragazza → le ___', a: 'ragazze', hint: '-a diventa -e: ragazze.' },
      { q: 'l’amica → le ___', a: 'amiche', hint: '-ca diventa -che: amiche.' },
      { q: 'il gioco → i ___', a: 'giochi', hint: '-co diventa -chi: giochi.' },
      { q: 'l’amico → gli ___', a: 'amici', hint: 'Amico è speciale: amici, senza h.' },
      { q: 'la studentessa → le ___', a: 'studentesse', hint: '-a diventa -e: studentesse.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'la città → le ___', a: 'città', alt: 'citta', hint: 'Con l’accento finale non cambia: città.' },
      { q: 'il caffè → i ___', a: 'caffè', alt: 'caffe', hint: 'Con l’accento finale non cambia: caffè.' },
      { q: 'il bar → i ___', a: 'bar', hint: 'Parola straniera: non cambia.' },
      { q: 'la foto → le ___', a: 'foto', hint: 'Foto è una parola corta (fotografia): non cambia.' },
      { q: 'il cinema → i ___', a: 'cinema', hint: 'Cinema è corto (cinematografo): non cambia.' },
      { q: 'il problema → i ___', a: 'problemi', hint: 'Maschile in -a: il plurale è in -i, problemi.' },
      { q: 'la mano → le ___', a: 'mani', hint: 'Mano è femminile ma fa mani.' },
      { q: 'l’uomo → gli ___', a: 'uomini', hint: 'Plurale irregolare: uomini.' },
      { q: 'l’uovo → le ___', a: 'uova', hint: 'Plurale irregolare e femminile: le uova.' },
      { q: 'il turista → i ___', a: 'turisti', hint: 'Un gruppo di turisti uomini o misto: turisti.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Che cosa c’è nella tua borsa?'],
      ['Studente', 'Un libro, due quaderni, le chiavi e il telefono.'],
      ['Martin', 'E nel frigorifero?'],
      ['Studente', 'Tre mele, un’arancia, le uova… e due caffè freddi!'],
      ['Martin', 'Perfetto: hai usato bene tutti i plurali!'],
    ])}</article>`,
  it: {
    h1: 'Genere e numero dei nomi: il libro, i libri',
    card: 'Il libro, la casa, i libri, le case: maschile e femminile, il plurale, i nomi che non cambiano e le eccezioni.',
    lead: 'Il libro, la casa, i libri, le case: in italiano ogni nome è maschile o femminile e cambia al plurale. La regola delle vocali, il plurale, maschile e femminile delle persone, i nomi che non cambiano (la città, il bar) e le eccezioni (il problema, la mano, le uova). Con 30 esercizi.',
    description:
      'Genere e numero dei nomi italiani: maschile e femminile (-o, -a, -e), il plurale (libri, case, amiche, giochi), maschile e femminile delle persone, i nomi invariabili (città, caffè, bar, foto), le eccezioni (problema, mano, uomo, uova), gli errori tipici e 30 esercizi.',
    heroAlt: 'Una mela rossa da sola e, accanto, tre mele rosse insieme su un tavolo di legno chiaro',
    regolaH2: 'Maschile o femminile?',
    regolaP: 'In italiano <strong>ogni nome è maschile o femminile</strong>, anche le cose: <em lang="it">il libro</em> è maschile, <em lang="it">la casa</em> è femminile. Quasi sempre lo dice l’ultima lettera.',
    rO: '-o: quasi sempre maschile',
    rA: '-a: quasi sempre femminile',
    rE: '-e: maschile o femminile',
    rSuffissi: 'Finali che aiutano: -zione, -tà femminili; -ore maschile',
    regolaNote:
      '<strong>Impara ogni nome con il suo articolo</strong>: non <em lang="it">pane</em>, ma <em lang="it">il pane</em>; non <em lang="it">chiave</em>, ma <em lang="it">la chiave</em>. Con i nomi in <strong>-e</strong> è l’unico modo per sapere il genere.',
    plurH2: 'Il plurale',
    plurP: 'Al plurale cambia <strong>l’ultima vocale</strong>: niente -s come in tante altre lingue.',
    plurNote:
      'Cambia anche l’articolo: <em lang="it">il → i</em>, <em lang="it">lo → gli</em>, <em lang="it">la → le</em>, <em lang="it">l’ → gli</em> (maschile) o <em lang="it">le</em> (femminile). Tutte le forme sono nella lezione sugli <a href="{{DETERMINATIVI}}">articoli determinativi</a>. Con <strong>-ca, -ga</strong> arriva una <strong>h</strong> per tenere lo stesso suono: <em lang="it">amica → amiche</em>. Con <strong>-co, -go</strong> di solito anche: <em lang="it">gioco → giochi</em>, ma <em lang="it">amico → amici</em>, <em lang="it">medico → medici</em>.',
    persH2: 'Le persone: maschile e femminile',
    persP: 'Per le persone (e per molti animali) c’è spesso una forma maschile e una femminile.',
    persNote:
      '<strong>-o → -a</strong> è il caso più comune: <em lang="it">il ragazzo, la ragazza</em>. Alcuni nomi aggiungono <strong>-essa</strong> (<em lang="it">la studentessa, la dottoressa</em>) o <strong>-trice</strong> (<em lang="it">l’attrice</em>). I nomi in <strong>-ante</strong> e <strong>-ista</strong> restano uguali: cambia solo l’articolo, <em lang="it">il cantante, la cantante</em>.',
    invH2: 'I nomi che non cambiano',
    invP: 'Alcuni nomi sono uguali al singolare e al plurale: cambia solo l’articolo.',
    iAccento: 'Con l’accento sull’ultima vocale',
    iStraniere: 'Le parole straniere',
    iCorte: 'Le parole accorciate',
    invNote:
      'Come capire se è singolare o plurale? <strong>Guarda l’articolo</strong>: <em lang="it">la città</em> (una), <em lang="it">le città</em> (tante). Le parole accorciate tengono il genere della parola lunga: <em lang="it">la foto</em> (la fotografia), <em lang="it">la bici</em> (la bicicletta), <em lang="it">il cinema</em> (il cinematografo).',
    trapH2: 'Le eccezioni',
    trapP: 'Poche parole non seguono la regola, ma sono parole di tutti i giorni: vale la pena impararle subito.',
    tMaschileA: 'Maschili in -a: il plurale in -i',
    tMano: 'Femminili in -o',
    tUomo: 'Un plurale tutto diverso',
    tUova: 'Maschili al singolare, femminili al plurale',
    tGente: 'La gente: singolare',
    trapNote:
      'Molti nomi maschili in <strong>-a</strong> vengono dal greco e finiscono in <strong>-ma</strong>: <em lang="it">il problema, il programma, il tema, il clima</em>. Alcune parti del corpo hanno un plurale femminile in <strong>-a</strong>: <em lang="it">le braccia, le dita, le ginocchia</em>. E <strong>la gente</strong> è singolare anche se sono tante persone: <em lang="it">la gente è simpatica</em>. Anche gli aggettivi cambiano con il nome: lo vedi nella lezione sugli <a href="{{AGGETTIVI}}">aggettivi</a>.',
    exIntro: '30 esercizi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il o la?',
    part1P: 'Scrivi l’articolo: il (maschile) o la (femminile).',
    part2H3: 'Parte 2 · Il plurale',
    part2P: 'Scrivi il nome al plurale.',
    part3H3: 'Parte 3 · Nomi che non cambiano ed eccezioni',
    part3P: 'Scrivi il nome al plurale: attenzione, alcuni non cambiano.',
  },
};
