// Lezione A1 «Aggettivi e pronomi possessivi» (rifatta il 2026-11-26 agli stessi URL): struttura, materiale italiano e
// testi. Le spiegazioni tradotte stanno in aggettivi-e-pronomi-possessivi-i18n.mjs.
//
// Diciassettesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano: una tabella, quattro esempi e 10 esercizi. Ora: la regola (articolo + possessivo, accordo con la
// cosa posseduta), le forme in tabella, suo / sua / loro e il Suo di cortesia, la famiglia senza articolo (mia madre,
// ma i miei fratelli, la mia mamma, la loro madre), i casi senza articolo (è mio, a casa mia, un mio amico),
// aggettivo o pronome (la tua?, i miei = i genitori), le espressioni (colpa mia, piacere mio), le trappole e 30
// esercizi. Il confronto con la lingua resta quello di confronti-lingua.mjs; gli errori per lingua (cinque al posto
// di tre o quattro) sono in confronti-aggettivi-e-pronomi-possessivi.mjs. Tolta la descrizione scritta a mano da
// seo-boost.mjs. Nell’indice A1 la tessera resta dov’era; il pulsante finale porta ai numeri (dal 2026-11-27 agli interrogativi).

export default {
  slug: 'aggettivi-e-pronomi-possessivi',
  next: 'interrogativi',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/aggettivi-e-pronomi-possessivi-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-possessive-adjectives-and-pronouns',
    es: 'adjetivos-y-pronombres-posesivos-en-italiano',
    fr: 'adjectifs-et-pronoms-possessifs-en-italien',
    cs: 'italska-privlastnovaci-pridavna-jmena-a-zajmena',
    pl: 'wloskie-przymiotniki-i-zaimki-dzierzawcze',
    tr: 'italyanca-iyelik-sifatlari-ve-zamirleri',
    de: 'italienische-possessivadjektive-und-pronomen',
    ja: 'イタリア語の所有形容詞と代名詞',
  },
  nav: [
    ['regola', 'Regola'],
    ['forme', 'Forme'],
    ['suo', 'Suo, sua e loro'],
    ['famiglia', 'La famiglia'],
    ['senza', 'Senza articolo'],
    ['pronomi', 'Aggettivo o pronome?'],
    ['espressioni', 'Espressioni'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rArticolo, 'il mio cappotto · la tua sciarpa · il suo zaino'],
    [L.rCosa, 'il mio libro · la mia casa · i miei amici · le mie chiavi'],
  ])}<p class="mini-note">${L.regolaNote.replace('{{ARTICOLI}}', h.href('articoli-determinativi', 'a1'))}</p></article>
    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
      ['Persona', 'Maschile singolare', 'Femminile singolare', 'Maschile plurale', 'Femminile plurale'],
      [
        ['io', 'il mio', 'la mia', 'i miei', 'le mie'],
        ['tu', 'il tuo', 'la tua', 'i tuoi', 'le tue'],
        ['lui · lei · Lei', 'il suo', 'la sua', 'i suoi', 'le sue'],
        ['noi', 'il nostro', 'la nostra', 'i nostri', 'le nostre'],
        ['voi', 'il vostro', 'la vostra', 'i vostri', 'le vostre'],
        ['loro', 'il loro', 'la loro', 'i loro', 'le loro'],
      ]
    )}${h.examples([
      [L.fMiei, 'i miei amici · i tuoi genitori · i suoi libri'],
      [L.fNostro, 'la nostra casa · le vostre valigie'],
      [L.fPrep, 'nel mio zaino · dalla tua amica · con i nostri figli'],
    ])}<p class="mini-note">${L.formeNote.replace('{{PREPOSIZIONI}}', h.href('preposizioni-articolate', 'a1'))}</p></article>
    <article class="lesson-box" id="suo"><h2>${L.suoH2}</h2><p>${L.suoP}</p>${h.examples([
      [L.sLui, 'Marco e sua sorella · Marco e il suo zaino'],
      [L.sLei, 'Anna e suo fratello · Anna e il suo zaino'],
      [L.sLoro, 'Marco e Anna e la loro casa · i loro figli'],
      [L.sLei2, 'Signora, questa è la Sua borsa?'],
    ])}<p class="mini-note">${L.suoNote}</p></article>
    <article class="lesson-box" id="famiglia"><h2>${L.famH2}</h2><p>${L.famP}</p>${h.examples([
      [L.faSenza, 'mia madre · mio padre · tuo fratello · sua moglie'],
      [L.faPlurale, 'i miei fratelli · le tue sorelle · i nostri nonni'],
      [L.faLoro, 'la loro madre · il loro figlio'],
      [L.faAffetto, 'la mia mamma · il mio papà · la mia sorellina · il mio fratello maggiore'],
    ])}<p class="mini-note">${L.famNote}</p></article>
    <article class="lesson-box" id="senza"><h2>${L.senzaH2}</h2><p>${L.senzaP}</p>${h.examples([
      [L.seEssere, 'Di chi è questo zaino? È mio.'],
      [L.seCasa, 'Stasera mangiamo a casa mia. · Vieni a casa nostra?'],
      [L.seUn, 'un mio amico · una sua collega · due nostri vicini'],
      [L.seVocativo, 'Amore mio! · Mamma mia!'],
    ])}<p class="mini-note">${L.senzaNote}</p></article>
    <article class="lesson-box" id="pronomi"><h2>${L.pronH2}</h2><p>${L.pronP}</p>${h.examples([
      [L.pAgg, 'Questa è la mia macchina.'],
      [L.pPron, 'La mia macchina è rossa. E la tua?'],
      [L.pConfronto, 'Il mio telefono è nuovo, il suo è vecchio.'],
      [L.pMiei, 'Abito ancora con i miei. · Saluta i tuoi!'],
    ])}<p class="mini-note">${L.pronNote}</p></article>
    <article class="lesson-box" id="espressioni"><h2>${L.espH2}</h2><p>${L.espP}</p>${h.examples([
      [L.eColpa, 'Scusa, è colpa mia.'],
      [L.ePiacere, 'Piacere di conoscerti! – Piacere mio!'],
      [L.eCasa, 'Fate come a casa vostra!'],
      [L.eParte, 'Saluta Marco da parte mia.'],
      [L.eModo, 'Lo faccio a modo mio.'],
    ])}<p class="mini-note">${L.espNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tCosa, 'Anna e suo fratello · Marco e sua sorella'],
      [L.tArticolo, 'il mio libro · mia madre · i miei fratelli'],
      [L.tLoro, 'la loro casa · i loro amici'],
      [L.tMiei, 'mio → miei · tuo → tuoi · suo → suoi'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.'],
      ['Anna e sua fratello.', 'Anna e suo fratello.'],
      ['La mia madre è medico.', 'Mia madre è medico.'],
      ['Mie fratelli sono alti.', 'I miei fratelli sono alti.'],
      ['Loro casa è grande.', 'La loro casa è grande.'],
      ['Un amico di mio.', 'Un mio amico.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: '___ libro è sul tavolo. (io)', a: 'il mio', hint: 'Libro, maschile singolare: il mio.' },
        { q: 'Dov’è ___ borsa? (tu)', a: 'la tua', hint: 'Borsa, femminile singolare: la tua.' },
        { q: '___ amici sono simpatici. (noi)', a: 'i nostri', hint: 'Amici, maschile plurale: i nostri.' },
        { q: 'Ecco ___ chiavi. (voi)', a: 'le vostre', hint: 'Chiavi, femminile plurale: le vostre.' },
        { q: 'Marco ama ___ città. (lui)', a: 'la sua', hint: 'Città è femminile: la sua.' },
        { q: 'Anna cerca ___ telefono. (lei)', a: 'il suo', hint: 'Conta telefono (maschile), non Anna: il suo.' },
        { q: 'I ragazzi aspettano ___ treno. (loro)', a: 'il loro', hint: 'Loro non cambia, ma l’articolo sì: il loro treno.' },
        { q: 'Le ragazze vendono ___ biciclette. (loro)', a: 'le loro', hint: 'Biciclette, femminile plurale: le loro.' },
        { q: 'Leggo ___ messaggi. (tu)', a: 'i tuoi', hint: 'Messaggi, maschile plurale: i tuoi.' },
        { q: 'Mi piacciono ___ scarpe! (tu)', a: 'le tue', hint: 'Scarpe, femminile plurale: le tue.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: '___ madre è insegnante. (io)', a: 'mia', hint: 'Famiglia al singolare: senza articolo, mia madre.' },
      { q: '___ fratelli abitano a Roma. (io)', a: 'i miei', hint: 'Famiglia al plurale: con l’articolo, i miei fratelli.' },
      { q: 'Marco telefona a ___ sorella. (lui)', a: 'sua', hint: 'Sorella è femminile: sua, senza articolo.' },
      { q: 'Anna esce con ___ fratello. (lei)', a: 'suo', hint: 'Fratello è maschile: suo, anche se Anna è una donna.' },
      { q: 'Giulia e Paolo vivono con ___ madre. (loro)', a: 'la loro', hint: 'Con loro l’articolo resta sempre: la loro madre.' },
      { q: 'Come sta ___ padre? (tu)', a: 'tuo', hint: 'Padre, singolare: tuo padre, senza articolo.' },
      { q: 'Ti presento ___ mamma. (io)', a: 'la mia', hint: 'Mamma è una parola affettuosa: la mia mamma.' },
      { q: 'Signora, questa è ___ borsa? (Lei)', a: 'la Sua', hint: 'Con Lei di cortesia: la Sua borsa.' },
      { q: '___ nonni sono molto simpatici. (noi)', a: 'i nostri', hint: 'Nonni, plurale: i nostri nonni.' },
      { q: 'Ieri ho visto ___ cugina. (tu)', a: 'tua', hint: 'Cugina, singolare: tua cugina.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'La mia macchina è rossa. E ___? (tu)', a: 'la tua', hint: 'Il pronome ha l’articolo: la tua.' },
      { q: 'Di chi è questo zaino? È ___. (io)', a: 'mio', alt: 'il mio', hint: 'Dopo essere, per dire di chi è: è mio.' },
      { q: 'Il mio telefono è nuovo, ___ è vecchio. (lui)', a: 'il suo', hint: 'Il suo = il suo telefono.' },
      { q: 'Stasera mangiamo a casa ___. (io)', a: 'mia', hint: 'A casa mia: il possessivo dopo, senza articolo.' },
      { q: 'Scusa, è colpa ___. (io)', a: 'mia', hint: 'È colpa mia.' },
      { q: 'Piacere di conoscerti! – Piacere ___!', a: 'mio', hint: 'Piacere mio!' },
      { q: 'Stasera esco con un ___ amico. (io)', a: 'mio', hint: 'Un mio amico = un amico tra i miei amici.' },
      { q: 'Questo fine settimana vado dai ___. (= i miei genitori)', a: 'miei', hint: 'I miei = i miei genitori: dai miei.' },
      { q: 'Questi libri sono ___? (voi)', a: 'vostri', hint: 'Libri, maschile plurale: sono vostri?' },
      { q: 'Fate come a casa ___! (voi)', a: 'vostra', hint: 'Come a casa vostra.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Di chi è questo zaino verde? È tuo?'],
      ['Martin', 'No, il mio è nero. È di Anna: è il suo.'],
      ['Studente', 'E la sciarpa gialla?'],
      ['Martin', 'È di suo fratello. Lui e sua sorella abitano qui vicino, con i loro genitori.'],
      ['Studente', 'Il cappotto rosso, invece, è mio. Scusa, è colpa mia: l’ho lasciato qui ieri!'],
      ['Martin', 'Nessun problema! Qui sei a casa tua.'],
    ])}</article>`,
  it: {
    h1: 'Aggettivi e pronomi possessivi',
    card: 'Il mio cappotto, la tua sciarpa, il suo zaino: articolo e possessivo, suo e loro, la famiglia, è mio, a casa mia, la tua? e 30 esercizi.',
    lead: 'Il mio cappotto, la tua sciarpa, il suo zaino: con i possessivi dici di chi è una cosa. La regola (articolo + possessivo, accordo con la cosa), tutte le forme, suo, sua e loro, la famiglia senza articolo (mia madre, ma i miei fratelli), i casi senza articolo (è mio, a casa mia, un mio amico), il pronome (e la tua?), le espressioni di tutti i giorni e le trappole. Con 30 esercizi.',
    description:
      'Aggettivi e pronomi possessivi in italiano: il mio, la tua, i suoi, le nostre, il loro. Articolo e possessivo, l’accordo con la cosa posseduta (Anna e suo fratello), il Suo di cortesia, la famiglia senza articolo (mia madre, i miei fratelli), è mio, a casa mia, un mio amico, la tua?, i miei, colpa mia, piacere mio, gli errori tipici e 30 esercizi.',
    heroAlt: 'Un appendiabiti di legno su una parete chiara con un cappotto rosso, una sciarpa gialla e uno zaino verde',
    regolaH2: 'La regola',
    regolaP:
      'Il possessivo dice <strong>di chi è</strong> una cosa: <em lang="it">mio, tuo, suo, nostro, vostro, loro</em>. Di solito va con l’<strong>articolo</strong> e si accorda con la <strong>cosa posseduta</strong>, non con la persona che la possiede.',
    rArticolo: 'Articolo + possessivo + nome',
    rCosa: 'Si accorda con la cosa',
    regolaNote:
      'Guarda la foto: <em lang="it">il mio cappotto, la tua sciarpa, il suo zaino</em>. L’articolo è quello normale del nome: <em lang="it">il libro → il mio libro</em>, <em lang="it">le chiavi → le mie chiavi</em>. Vedi <a href="{{ARTICOLI}}">gli articoli determinativi</a>.',
    formeH2: 'Le forme',
    formeP: 'Ogni possessivo ha quattro forme, come gli aggettivi in <em lang="it">-o</em>. Solo <strong>loro</strong> non cambia mai.',
    fMiei: 'Attenzione: miei, tuoi, suoi',
    fNostro: 'Nostro e vostro: regolari',
    fPrep: 'Con le preposizioni articolate',
    formeNote:
      'Il maschile plurale è irregolare per <em lang="it">mio, tuo, suo</em>: <strong>miei, tuoi, suoi</strong> (non <em lang="it">mii</em>). Il femminile plurale è regolare: <em lang="it">mie, tue, sue</em>. Con le preposizioni l’articolo si unisce come sempre: <em lang="it">nel mio zaino, dalla tua amica</em>. Vedi <a href="{{PREPOSIZIONI}}">le preposizioni articolate</a>.',
    suoH2: 'Suo, sua e loro',
    suoP: '<strong>Suo</strong> vuol dire «di lui» e «di lei»: la forma dipende dalla cosa, non dalla persona. <strong>Loro</strong> vuol dire «di loro» e non cambia mai.',
    sLui: 'Di lui',
    sLei: 'Di lei',
    sLoro: 'Di loro: sempre loro',
    sLei2: 'Il Suo di cortesia',
    suoNote:
      '<em lang="it">Anna e suo fratello</em>: <em lang="it">suo</em> perché <em lang="it">fratello</em> è maschile, anche se Anna è una donna. <em lang="it">Marco e sua sorella</em>: <em lang="it">sua</em> perché <em lang="it">sorella</em> è femminile. Se non è chiaro di chi parli, si può dire <em lang="it">il libro di Marco</em>. Con <em lang="it">Lei</em> di cortesia si usa lo stesso <strong>Suo</strong>, a volte con la maiuscola nello scritto: <em lang="it">la Sua borsa</em>.',
    famH2: 'La famiglia',
    famP: 'Con i nomi di famiglia al <strong>singolare</strong> il possessivo va <strong>senza articolo</strong>. In tutti gli altri casi l’articolo torna.',
    faSenza: 'Singolare: senza articolo',
    faPlurale: 'Plurale: con l’articolo',
    faLoro: 'Con loro: sempre l’articolo',
    faAffetto: 'Parole affettuose o con un aggettivo: articolo',
    famNote:
      'Senza articolo: <em lang="it">mia madre, mio padre, mio fratello, mia sorella, mio marito, mia moglie, mio figlio, mia zia, mio cugino</em>. Con l’articolo: al plurale (<em lang="it">i miei fratelli</em>), con <em lang="it">loro</em> (<em lang="it">la loro madre</em>), con le parole affettuose o alterate (<em lang="it">la mia mamma, il mio papà, la mia sorellina</em>) e quando c’è un aggettivo (<em lang="it">il mio fratello maggiore</em>). E per <em lang="it">il mio ragazzo, la mia ragazza</em> l’articolo resta sempre.',
    senzaH2: 'Senza articolo',
    senzaP: 'L’articolo sparisce anche in alcuni casi fissi, facili da riconoscere.',
    seEssere: 'Dopo essere: di chi è?',
    seCasa: 'A casa mia: il possessivo dopo',
    seUn: 'Un mio amico: uno dei miei amici',
    seVocativo: 'Quando chiami qualcuno',
    senzaNote:
      'Per dire <strong>di chi è</strong> una cosa: <em lang="it">è mio, è tua, sono nostri</em>; <em lang="it">è il mio</em> si usa per distinguere tra più cose (<em lang="it">quale zaino è il tuo? Il mio è quello verde</em>). In <strong>a casa mia, a casa tua</strong> il possessivo va dopo il nome. <strong>Un mio amico</strong> vuol dire «uno dei miei amici»: qui c’è l’articolo indeterminativo, mai <em lang="it">un amico di mio</em>.',
    pronH2: 'Aggettivo o pronome?',
    pronP: 'Quando accompagna un nome, il possessivo è un <strong>aggettivo</strong>. Quando prende il posto del nome, è un <strong>pronome</strong>: le forme sono le stesse, con l’articolo.',
    pAgg: 'Aggettivo: con il nome',
    pPron: 'Pronome: al posto del nome',
    pConfronto: 'Per confrontare',
    pMiei: 'I miei = i miei genitori',
    pronNote:
      'Il pronome prende genere e numero della cosa sostituita: <em lang="it">la mia macchina… e la tua?</em> (la tua macchina). Anche con la famiglia il pronome ha l’articolo: <em lang="it">mia madre è italiana, la sua è spagnola</em>. Nel parlato <strong>i miei, i tuoi, i suoi</strong> da soli vogliono dire «i genitori»: <em lang="it">abito ancora con i miei</em>, <em lang="it">vado dai miei</em>.',
    espH2: 'Espressioni',
    espP: 'Alcune espressioni di tutti i giorni con il possessivo dopo il nome e senza articolo.',
    eColpa: 'È colpa mia: chiedere scusa',
    ePiacere: 'Piacere mio: quando conosci qualcuno',
    eCasa: 'Come a casa tua: per accogliere',
    eParte: 'Da parte mia: per salutare',
    eModo: 'A modo mio: come voglio io',
    espNote:
      '<strong>Piacere mio!</strong> risponde a <em lang="it">piacere</em> o <em lang="it">piacere di conoscerti</em>. <strong>Colpa mia</strong>, <strong>a casa mia</strong>, <strong>da parte mia</strong>, <strong>a modo mio</strong>: in queste espressioni il possessivo va dopo e non c’è articolo. Anche <em lang="it">mamma mia!</em> si dice per la sorpresa, senza parlare della mamma.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tCosa: 'Conta la cosa, non la persona',
    tArticolo: 'L’articolo: quasi sempre sì',
    tLoro: 'Loro: sempre con l’articolo',
    tMiei: 'I plurali irregolari',
    trapNote:
      'Il possessivo segue il genere della cosa: <em lang="it">Anna e suo fratello</em>, mai <em lang="it">sua fratello</em>. L’articolo serve quasi sempre (<em lang="it">il mio libro</em>), tranne con la famiglia al singolare (<em lang="it">mia madre</em>). <strong>Loro</strong> non diventa mai <em lang="it">lori</em> e vuole sempre l’articolo: <em lang="it">la loro casa, i loro figli</em>.',
    exIntro: '30 frasi in tre parti. Scrivi il possessivo, con l’articolo quando serve: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Articolo e possessivo',
    part1P: 'Il mio, la tua, i nostri, le loro: la forma giusta con l’articolo.',
    part2H3: 'Parte 2 · Suo, sua e la famiglia',
    part2P: 'Con o senza articolo? Suo o sua? E il Suo di cortesia.',
    part3H3: 'Parte 3 · Pronomi ed espressioni',
    part3P: 'E la tua?, è mio, a casa mia, un mio amico, i miei.',
  },
};
