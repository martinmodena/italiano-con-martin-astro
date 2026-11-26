// Lezione A1 «Gli aggettivi qualificativi» (rifatta il 2026-11-26 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in aggettivi-qualificativi-i18n.mjs.
//
// Sedicesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano: una tabella, quattro esempi sulla posizione e 10 esercizi. Ora: la regola (l’aggettivo si accorda
// con il nome), i due gruppi (-o con quattro forme, -e con due), i plurali particolari (bianchi, simpatici, lunghi,
// vecchi), i colori (blu, rosa, viola non cambiano), la posizione (dopo il nome; prima bello, buono, piccolo; vecchio
// amico / amico vecchio), bello e buono davanti al nome (bel, bell’, bei, begli; buon), con essere (Anna è stanca,
// Marco e Anna sono simpatici, sto bene), descrivere le persone (molto alta, bellissima), le trappole (il problema
// serio, la mano fredda, le foto belle) e 30 esercizi. Prima non aveva né il confronto con la lingua né gli errori per
// lingua: stanno in confronti-aggettivi-qualificativi.mjs. Nell’indice A1 la tessera resta dov’era; il pulsante
// finale porta ai possessivi.

export default {
  slug: 'aggettivi-qualificativi',
  next: 'aggettivi-e-pronomi-possessivi',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/aggettivi-qualificativi-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-qualifying-adjectives',
    es: 'adjetivos-calificativos-en-italiano',
    fr: 'adjectifs-qualificatifs-en-italien',
    cs: 'italska-pridavna-jmena',
    pl: 'wloskie-przymiotniki-kwalifikujace',
    tr: 'italyanca-niteleme-sifatlari',
    de: 'italienische-adjektive',
    ja: 'イタリア語の形容詞',
  },
  nav: [
    ['regola', 'Regola'],
    ['gruppi', 'In -o e in -e'],
    ['plurale', 'Il plurale'],
    ['colori', 'I colori'],
    ['posizione', 'Posizione'],
    ['bello', 'Bello e buono'],
    ['essere', 'Con essere'],
    ['descrivere', 'Descrivere le persone'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.table(
    ['Singolare', 'Plurale'],
    [
      ['un libro nuovo', 'due libri nuovi'],
      ['una casa nuova', 'due case nuove'],
    ]
  )}${h.examples([
    [L.rNome, 'una bicicletta gialla · un fiore giallo'],
    [L.rNumero, 'un fiore fresco · dei fiori freschi'],
  ])}<p class="mini-note">${L.regolaNote.replace('{{GENERE}}', h.href('genere-e-numero', 'a1'))}</p></article>
    <article class="lesson-box" id="gruppi"><h2>${L.gruppiH2}</h2><p>${L.gruppiP}</p>${h.table(
      ['Maschile singolare', 'Femminile singolare', 'Maschile plurale', 'Femminile plurale'],
      [
        ['nuovo', 'nuova', 'nuovi', 'nuove'],
        ['italiano', 'italiana', 'italiani', 'italiane'],
        ['gentile', 'gentile', 'gentili', 'gentili'],
        ['inglese', 'inglese', 'inglesi', 'inglesi'],
      ]
    )}${h.examples([
      [L.gO, 'un ragazzo alto · una ragazza alta · ragazzi alti · ragazze alte'],
      [L.gE, 'un ragazzo gentile · una ragazza gentile · ragazzi gentili · ragazze gentili'],
      [L.gMisto, 'una lezione nuova e interessante'],
    ])}<p class="mini-note">${L.gruppiNote}</p></article>
    <article class="lesson-box" id="plurale"><h2>${L.plurH2}</h2><p>${L.plurP}</p>${h.table(
      ['Singolare', 'Plurale', 'Esempio'],
      [
        ['-co', '-chi', 'bianco → bianchi · stanco → stanchi'],
        ['-co', '-ci', 'simpatico → simpatici · tipico → tipici'],
        ['-ca', '-che', 'bianca → bianche · simpatica → simpatiche'],
        ['-go · -ga', '-ghi · -ghe', 'lungo → lunghi · lunga → lunghe'],
        ['-io', '-i', 'vecchio → vecchi · grigio → grigi'],
      ]
    )}${h.examples([
      [L.pChi, 'i pantaloni bianchi · i ragazzi stanchi'],
      [L.pCi, 'gli amici simpatici · i piatti tipici'],
      [L.pFemm, 'le amiche simpatiche · le strade lunghe'],
    ])}<p class="mini-note">${L.plurNote}</p></article>
    <article class="lesson-box" id="colori"><h2>${L.colH2}</h2><p>${L.colP}</p>${h.examples([
      [L.cO, 'una borsa rossa · due borse rosse · gli occhi neri'],
      [L.cE, 'un vestito verde · gli occhi verdi · le scarpe marroni'],
      [L.cInv, 'una maglietta rosa · due magliette rosa · le macchine blu'],
      [L.cNaz, 'una ragazza italiana · un amico francese · la cucina giapponese'],
    ])}<p class="mini-note">${L.colNote}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.posDopo, 'una macchina rossa · un ragazzo simpatico · una lezione utile'],
      [L.posPrima, 'una bella giornata · un piccolo problema · una buona idea'],
      [L.posSignificato, 'un vecchio amico · un amico vecchio'],
      [L.posDue, 'una bella casa grande · una casa grande e luminosa'],
    ])}<p class="mini-note">${L.posNote}</p></article>
    <article class="lesson-box" id="bello"><h2>${L.belloH2}</h2><p>${L.belloP}</p>${h.table(
      ['Articolo', '=bello', 'Esempio'],
      [
        ['il', 'bel', 'un bel ragazzo · un bel film'],
        ['lo', 'bello', 'un bello zaino'],
        ['l’', 'bell’', 'un bell’albero · una bell’amica'],
        ['la', 'bella', 'una bella casa'],
        ['i', 'bei', 'dei bei fiori'],
        ['gli', 'begli', 'dei begli occhi'],
        ['le', 'belle', 'delle belle case'],
      ]
    )}${h.examples([
      [L.bBuono, 'un buon libro · un buono stipendio · una buona idea · una buon’amica'],
      [L.bAuguri, 'Buon viaggio! · Buon appetito! · Buona giornata!'],
      [L.bDopo, 'Il ragazzo è bello. · Questi fiori sono belli.'],
    ])}<p class="mini-note">${L.belloNote}</p></article>
    <article class="lesson-box" id="essere"><h2>${L.essH2}</h2><p>${L.essP}</p>${h.examples([
      [L.eSogg, 'Anna è stanca. · Le case sono nuove.'],
      [L.eIo, 'Sono stanco. (Marco) · Sono stanca. (Anna)'],
      [L.eMisto, 'Marco e Anna sono simpatici. · Anna e Giulia sono simpatiche.'],
      [L.eBene, 'La pizza è buona. · Sto bene, grazie.'],
    ])}<p class="mini-note">${L.essNote.replace('{{ESSERE}}', h.href('verbo-essere', 'a1'))}</p></article>
    <article class="lesson-box" id="descrivere"><h2>${L.descH2}</h2><p>${L.descP}</p>${h.examples([
      [L.dAspetto, 'Mia sorella è alta e giovane. Ha i capelli lunghi e gli occhi verdi.'],
      [L.dCarattere, 'È simpatica, gentile e un po’ timida.'],
      [L.dMolto, 'molto alta · un po’ stanchi · troppo cari · abbastanza bravi'],
      [L.dIssimo, 'bello → bellissimo · buona → buonissima · facili → facilissimi'],
    ])}<p class="mini-note">${L.descNote
      .replace('{{AVERE}}', h.href('verbo-avere', 'a1'))
      .replace('{{CONTRARI}}', h.href('contrari', 'a2'))
      .replace('{{COMPARATIVO}}', h.href('comparativo-e-superlativo', 'b1'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tGenere, 'il problema serio · la mano fredda · le foto belle'],
      [L.tE, 'una lezione interessante (mai interessanta)'],
      [L.tMolto, 'Le case sono molto belle. · Ci sono molte case belle.'],
      [L.tBene, 'La cena è buona. · Mangio bene.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['una casa nuovo', 'una casa nuova'],
      ['una lezione interessanta', 'una lezione interessante'],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.'],
      ['due magliette rose', 'due magliette rosa'],
      ['un bello ragazzo', 'un bel ragazzo'],
      ['Le case sono molte belle.', 'Le case sono molto belle.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'una casa ___ (nuovo)', a: 'nuova', hint: 'Casa è femminile singolare: nuova.' },
        { q: 'due libri ___ (nuovo)', a: 'nuovi', hint: 'Libri è maschile plurale: nuovi.' },
        { q: 'due lezioni ___ (interessante)', a: 'interessanti', hint: 'Gli aggettivi in -e al plurale finiscono in -i.' },
        { q: 'una ragazza ___ (inglese)', a: 'inglese', hint: 'Gli aggettivi in -e non cambiano tra maschile e femminile.' },
        { q: 'le amiche ___ (simpatico)', a: 'simpatiche', hint: 'Femminile plurale di -ca: -che, con la h.' },
        { q: 'i ragazzi ___ (simpatico)', a: 'simpatici', hint: 'Simpàtico ha l’accento sulla terzultima: simpatici, senza h.' },
        { q: 'le strade ___ (lungo)', a: 'lunghe', hint: 'Femminile plurale di -ga: -ghe, con la h.' },
        { q: 'i pantaloni ___ (bianco)', a: 'bianchi', hint: 'Biànco ha l’accento sulla penultima: bianchi, con la h.' },
        { q: 'due amici ___ (vecchio)', a: 'vecchi', hint: 'Gli aggettivi in -io perdono la o: vecchi, con una sola i.' },
        { q: 'un problema ___ (serio)', a: 'serio', hint: 'Problema finisce in -a ma è maschile: serio.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'due magliette ___ (rosa)', a: 'rosa', hint: 'Rosa non cambia mai: due magliette rosa.' },
      { q: 'gli occhi ___ (verde)', a: 'verdi', hint: 'Verde finisce in -e: al plurale verdi.' },
      { q: 'le scarpe ___ (marrone)', a: 'marroni', hint: 'Marrone finisce in -e: al plurale marroni.' },
      { q: 'due borse ___ (blu)', a: 'blu', hint: 'Blu non cambia mai.' },
      { q: 'Ho un’amica ___. (francese)', a: 'francese', hint: 'Nazionalità in -e, e sempre con la minuscola: francese.' },
      { q: 'Che ___ idea! (buono)', a: 'buona', hint: 'Idea è femminile: buona idea.' },
      { q: 'È un ___ libro. (buono)', a: 'buon', hint: 'Buono davanti al nome maschile fa come un: un buon libro.' },
      { q: 'È un ___ ragazzo. (bello)', a: 'bel', hint: 'Il ragazzo → un bel ragazzo.' },
      { q: 'Che ___ occhi! (bello)', a: 'begli', hint: 'Gli occhi → begli occhi.' },
      { q: 'Che ___ fiori! (bello)', a: 'bei', hint: 'I fiori → bei fiori.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Anna è ___. (stanco)', a: 'stanca', hint: 'L’aggettivo si accorda con Anna: stanca.' },
      { q: 'Marco e Anna sono ___. (simpatico)', a: 'simpatici', hint: 'Un uomo e una donna: maschile plurale, simpatici.' },
      { q: 'Le mie sorelle sono ___. (alto)', a: 'alte', hint: 'Sorelle, femminile plurale: alte.' },
      { q: 'Questo ragazzo è molto ___. (bello)', a: 'bello', hint: 'Dopo essere bello ha la forma intera: è bello.' },
      { q: 'La pizza è ___. (buono)', a: 'buona', hint: 'Pizza è femminile: buona.' },
      { q: 'Come stai? Sto ___, grazie.', a: 'bene', hint: 'Con stare si usa l’avverbio: sto bene.' },
      { q: 'Le foto sono ___. (bello)', a: 'belle', hint: 'Foto (fotografia) è femminile: le foto belle.' },
      { q: 'Ho le mani ___. (freddo)', a: 'fredde', hint: 'Mano è femminile: le mani fredde.' },
      { q: 'Queste scarpe sono ___ care. (molto)', a: 'molto', hint: 'Davanti a un aggettivo molto non cambia: molto care.' },
      { q: 'Il film è ___. (bello + -issimo)', a: 'bellissimo', hint: 'Bello + -issimo: bellissimo.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Com’è la tua nuova coinquilina?'],
      ['Martin', 'È simpatica e molto gentile. È spagnola, di Valencia.'],
      ['Studente', 'Com’è fisicamente?'],
      ['Martin', 'È alta, ha i capelli corti e neri e gli occhi verdi.'],
      ['Studente', 'E la casa nuova com’è?'],
      ['Martin', 'È piccola ma bellissima: le camere sono luminose e c’è un bel balcone con tanti fiori gialli.'],
    ])}</article>`,
  it: {
    h1: 'Gli aggettivi qualificativi',
    card: 'Una bicicletta gialla, una porta blu: l’accordo, i due gruppi, i colori, la posizione, bello e buono, descrivere le persone e 30 esercizi.',
    lead: 'Una bicicletta gialla, una porta blu, dei fiori freschi: l’aggettivo descrive e cambia con il nome. La regola dell’accordo, gli aggettivi in -o e in -e, i plurali particolari (bianchi, simpatici), i colori che non cambiano (blu, rosa), la posizione, bello e buono davanti al nome (un bel ragazzo, un buon libro), l’aggettivo dopo essere e come descrivere le persone. Con 30 esercizi.',
    description:
      'Gli aggettivi qualificativi in italiano: l’accordo con il nome (una casa nuova, due libri nuovi), aggettivi in -o e in -e, plurali particolari (bianchi, simpatici, lunghi, vecchi), i colori invariabili (blu, rosa), la posizione (un vecchio amico), bello e buono (bel, bell’, begli, buon), con essere, descrivere le persone, gli errori tipici e 30 esercizi.',
    heroAlt: 'Una bicicletta gialla d’epoca con un cestino di girasoli appoggiata a una vecchia porta di legno blu, in una via al sole',
    regolaH2: 'La regola',
    regolaP:
      'L’aggettivo qualificativo dice <strong>com’è</strong> una persona o una cosa: <em lang="it">nuovo, bello, gentile, rosso</em>. In italiano l’aggettivo <strong>si accorda</strong> con il nome: prende il suo genere (maschile o femminile) e il suo numero (singolare o plurale).',
    rNome: 'Cambia con il genere del nome',
    rNumero: 'Cambia con il numero del nome',
    regolaNote:
      'Guarda la foto: <em lang="it">una bicicletta gialla, una porta blu e dei fiori freschi</em>. Prima devi sapere se il nome è maschile o femminile, singolare o plurale: vedi <a href="{{GENERE}}">il genere e il numero dei nomi</a>. Poi l’aggettivo segue il nome.',
    gruppiH2: 'Aggettivi in -o e in -e',
    gruppiP:
      'Gli aggettivi sono di due tipi. Quelli in <strong>-o</strong> hanno <strong>quattro forme</strong>; quelli in <strong>-e</strong> ne hanno solo <strong>due</strong>, una per il singolare e una per il plurale.',
    gO: 'In -o: -o, -a, -i, -e',
    gE: 'In -e: -e, -i',
    gMisto: 'Due aggettivi insieme',
    gruppiNote:
      'Gli aggettivi in <strong>-e</strong> sono uguali al maschile e al femminile: <em lang="it">un ragazzo gentile</em>, <em lang="it">una ragazza gentile</em>. Non esiste <em lang="it">gentila</em> né <em lang="it">interessanta</em>. Quindi la fine dell’aggettivo non è sempre uguale alla fine del nome: <em lang="it">una lezione nuova e interessante</em>, <em lang="it">un fiore giallo</em>.',
    plurH2: 'Il plurale',
    plurP: 'Alcuni aggettivi aggiungono una <strong>h</strong> al plurale per non cambiare suono; altri no. Dipende dall’accento.',
    pChi: '-co → -chi (accento sulla penultima)',
    pCi: '-co → -ci (accento sulla terzultima)',
    pFemm: 'Il femminile ha sempre la h',
    plurNote:
      'Gli aggettivi in <strong>-co</strong> con l’accento sulla penultima sillaba fanno <strong>-chi</strong>: <em lang="it">biànco → bianchi</em>, <em lang="it">stànco → stanchi</em>, <em lang="it">pòco → pochi</em>. Con l’accento sulla terzultima fanno <strong>-ci</strong>: <em lang="it">simpàtico → simpatici</em>, <em lang="it">tìpico → tipici</em>, <em lang="it">econòmico → economici</em>. Il femminile ha sempre la <em lang="it">h</em>: <em lang="it">simpatiche, bianche</em>. Gli aggettivi in <strong>-io</strong> perdono la <em lang="it">o</em>: <em lang="it">vecchio → vecchi</em>.',
    colH2: 'I colori e le nazionalità',
    colP: 'I colori sono aggettivi come gli altri e vanno dopo il nome. Ma alcuni <strong>non cambiano mai</strong>.',
    cO: 'In -o: quattro forme',
    cE: 'In -e: due forme',
    cInv: 'Blu, rosa, viola: non cambiano',
    cNaz: 'Le nazionalità, con la minuscola',
    colNote:
      '<strong>Rosso, giallo, nero, bianco, azzurro, grigio</strong> hanno quattro forme; <strong>verde, marrone, arancione</strong> due. <strong>Blu, rosa, viola, beige</strong> non cambiano mai: <em lang="it">una maglietta rosa, due magliette rosa</em>. Anche le nazionalità sono aggettivi e si scrivono con la <strong>minuscola</strong>: <em lang="it">una ragazza italiana</em>, <em lang="it">un amico francese</em>, <em lang="it">gli studenti giapponesi</em>.',
    posH2: 'Dove va l’aggettivo?',
    posP: 'Di solito l’aggettivo va <strong>dopo</strong> il nome. Alcuni aggettivi molto comuni e corti vanno spesso <strong>prima</strong>.',
    posDopo: 'Dopo il nome: quasi sempre',
    posPrima: 'Prima: bello, buono, piccolo, grande…',
    posSignificato: 'Prima o dopo: cambia il significato',
    posDue: 'Due aggettivi',
    posNote:
      'Vanno <strong>sempre dopo</strong> i colori, le nazionalità e le forme: <em lang="it">una macchina rossa</em>, <em lang="it">un ragazzo italiano</em>, <em lang="it">un tavolo rotondo</em>. Possono andare prima <em lang="it">bello, brutto, buono, cattivo, grande, piccolo, nuovo, vecchio, giovane, lungo</em>. A volte il significato cambia: <em lang="it">un vecchio amico</em> è un amico da tanti anni, <em lang="it">un amico vecchio</em> è un amico anziano; <em lang="it">un caro amico</em> è un amico importante, <em lang="it">un ristorante caro</em> costa tanto.',
    belloH2: 'Bello e buono',
    belloP: 'Davanti al nome <strong>bello</strong> cambia come l’articolo determinativo e <strong>buono</strong> come l’articolo indeterminativo.',
    bBuono: 'Buono fa come un, uno, una, un’',
    bAuguri: 'Gli auguri',
    bDopo: 'Dopo il nome o dopo essere: forma intera',
    belloNote:
      'Per scegliere la forma di <strong>bello</strong> pensa all’articolo: <em lang="it">il ragazzo → un bel ragazzo</em>, <em lang="it">gli occhi → begli occhi</em>, <em lang="it">l’albero → un bell’albero</em>. <strong>Buono</strong> fa come <em lang="it">un</em>: <em lang="it">un buon libro</em>, <em lang="it">un buono stipendio</em> (come <em lang="it">uno</em>), <em lang="it">una buon’amica</em> (come <em lang="it">un’</em>). Quando l’aggettivo viene dopo il nome o dopo essere, la forma è quella normale: <em lang="it">il ragazzo è bello</em>, <em lang="it">un libro buono</em>.',
    essH2: 'Con essere',
    essP: 'Dopo <strong>essere</strong> (e dopo <em lang="it">sembrare, diventare</em>) l’aggettivo si accorda con il <strong>soggetto</strong>.',
    eSogg: 'Si accorda con il soggetto',
    eIo: 'Io e tu: dipende da chi parla',
    eMisto: 'Maschile e femminile insieme',
    eBene: 'Buono o bene?',
    essNote:
      'Con <em lang="it">io</em> e <em lang="it">tu</em> l’aggettivo dipende da chi è la persona: un uomo dice <em lang="it">sono stanco</em>, una donna <em lang="it">sono stanca</em>. Se il gruppo è misto (anche un solo uomo) si usa il <strong>maschile plurale</strong>: <em lang="it">Marco e Anna sono simpatici</em>. <strong>Buono</strong> è un aggettivo (<em lang="it">la pizza è buona</em>), <strong>bene</strong> un avverbio e non cambia: <em lang="it">sto bene</em>, <em lang="it">parli bene</em>. Vedi <a href="{{ESSERE}}">il verbo essere</a>.',
    descH2: 'Descrivere le persone',
    descP: 'Per descrivere una persona servono <strong>essere</strong> + aggettivo e <strong>avere</strong> + nome + aggettivo.',
    dAspetto: 'L’aspetto: è alta, ha gli occhi verdi',
    dCarattere: 'Il carattere',
    dMolto: 'Molto, un po’, troppo, abbastanza',
    dIssimo: 'Molto molto: -issimo',
    descNote:
      'L’aspetto: <em lang="it">alto, basso, giovane, anziano, biondo, bruno</em>; con avere: <em lang="it">ha i capelli lunghi, corti, ricci</em>, <em lang="it">ha gli occhi azzurri</em> (vedi <a href="{{AVERE}}">il verbo avere</a>). Il carattere: <em lang="it">simpatico, gentile, allegro, timido, bravo, pigro</em>. Davanti all’aggettivo <strong>molto, poco, troppo</strong> non cambiano: <em lang="it">molto alta</em>, <em lang="it">troppo cari</em>. Con <strong>-issimo</strong> l’aggettivo resta variabile: <em lang="it">bellissima, buonissimi</em>. Vedi anche <a href="{{CONTRARI}}">i contrari</a> e <a href="{{COMPARATIVO}}">il comparativo e il superlativo</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tGenere: 'Conta il genere, non la lettera finale',
    tE: 'Gli aggettivi in -e non diventano -a',
    tMolto: 'Molto + aggettivo non cambia',
    tBene: 'Buono è aggettivo, bene è avverbio',
    trapNote:
      'Alcuni nomi in <em lang="it">-a</em> sono maschili e alcuni nomi in <em lang="it">-o</em> sono femminili: <em lang="it">il problema serio</em>, <em lang="it">il programma nuovo</em>, <em lang="it">la mano fredda</em>, <em lang="it">la foto bella</em>. L’aggettivo segue il genere del nome, non la sua ultima lettera. <strong>Molto</strong> cambia davanti a un nome (<em lang="it">molte case</em>) ma non davanti a un aggettivo (<em lang="it">molto belle</em>).',
    exIntro: '30 frasi in tre parti. Scrivi solo la forma giusta: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · L’accordo',
    part1P: 'Aggettivi in -o e in -e, i plurali con la h e il genere dei nomi.',
    part2H3: 'Parte 2 · Colori, bello e buono',
    part2P: 'Colori che cambiano e che non cambiano, nazionalità, bello e buono davanti al nome.',
    part3H3: 'Parte 3 · Con essere e con le persone',
    part3P: 'L’accordo con il soggetto, buono o bene, molto e -issimo.',
  },
};
