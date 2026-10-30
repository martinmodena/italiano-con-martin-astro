// Riquadri «confronto con la tua lingua» delle lezioni di grammatica (2026-10-30).
// Martin: le pagine non devono essere una semplice traduzione, ma parlare della lingua dello studente;
// nella versione italiana il confronto è con l'inglese. Li inserisce scripts/add-language-notes.mjs.
//
// Chiave: percorso della lezione italiana in src/html. Per ogni lingua:
//   h2, intro (HTML), th: [colonna della lingua, colonna italiana], rows: [[frase nella lingua, frase italiana]],
//   points: elenco di osservazioni (HTML). L'italiano va sempre in <span lang="it"> o <strong lang="it">.

// Voce del menu della lezione (#confronto), uguale in tutte le lezioni.
export const NAV = {
  it: "Confronto con l'inglese",
  en: 'Compared with English',
  es: 'Comparado con el español',
  pt: 'Comparado com o português',
  fr: 'Comparé au français',
  cs: 'Srovnání s češtinou',
  pl: 'Porównanie z polskim',
  tr: 'Türkçe ile karşılaştırma',
  de: 'Vergleich mit dem Deutschen',
  ja: '日本語との比較',
};

export const NOTES = {
  'grammatica/a1/ce-ci-sono.html': {
    it: {
      h2: "C'è e ci sono: il confronto con l'inglese",
      intro:
        'Chi sa l\'inglese parte avvantaggiato: <strong>c\'è</strong> e <strong>ci sono</strong> funzionano quasi come <em lang="en">there is</em> e <em lang="en">there are</em>. Anche la parolina <strong>ci</strong> vuol dire «lì», proprio come <em lang="en">there</em>.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['There is a pharmacy near here.', "C'è una farmacia qui vicino."],
        ['There are two chairs.', 'Ci sono due sedie.'],
        ["There's no time.", "Non c'è tempo."],
        ['Is Marco in?', "C'è Marco?"],
      ],
      points: [
        'Nell\'inglese parlato si sente spesso <em lang="en">there\'s two people</em>. In italiano no: con il plurale ci vuole sempre <strong>ci sono</strong> — <span lang="it">ci sono due persone</span>.',
        'L\'inglese evita <em lang="en">there is the…</em>, l\'italiano no: <strong>c\'è</strong> va benissimo con una persona o una cosa precisa. <span lang="it">C\'è Marco?</span> (<em lang="en">Is Marco in?</em>), <span lang="it">C\'è il sole</span> (<em lang="en">It\'s sunny</em>).',
        'Non perdere il <strong>ci</strong>: <span lang="it">è una farmacia</span> vuol dire <em lang="en">it\'s a pharmacy</em>, mentre <span lang="it">c\'è una farmacia</span> vuol dire <em lang="en">there\'s a pharmacy</em>.',
      ],
    },
    en: {
      h2: "C'è and ci sono compared with English",
      intro:
        'Good news: <strong lang="it">c\'è</strong> and <strong lang="it">ci sono</strong> work almost exactly like <em>there is</em> and <em>there are</em>. Even the little word <strong lang="it">ci</strong> means “there”.',
      th: ['English', 'Italian'],
      rows: [
        ['There is a pharmacy near here.', "C'è una farmacia qui vicino."],
        ['There are two chairs.', 'Ci sono due sedie.'],
        ["There's no time.", "Non c'è tempo."],
        ['Is Marco in?', "C'è Marco?"],
      ],
      points: [
        'In spoken English you often hear <em>there\'s two people</em>. Italian never does this: a plural always takes <strong lang="it">ci sono</strong> — <span lang="it">ci sono due persone</span>.',
        'English avoids <em>there is the…</em>; Italian doesn\'t mind. <strong lang="it">C\'è</strong> works with a specific person or thing: <span lang="it">C\'è Marco?</span> (Is Marco in?), <span lang="it">C\'è il sole</span> (It\'s sunny).',
        'Don\'t drop <strong lang="it">ci</strong>: <span lang="it">è una farmacia</span> means “it\'s a pharmacy”, while <span lang="it">c\'è una farmacia</span> means “there\'s a pharmacy”.',
      ],
    },
    es: {
      h2: "C'è y ci sono comparados con el español",
      intro:
        'En español <em>hay</em> no cambia nunca: <em>hay un libro</em>, <em>hay dos libros</em>. En italiano, en cambio, el verbo concuerda con lo que viene después: <strong lang="it">c\'è</strong> con el singular y <strong lang="it">ci sono</strong> con el plural.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Hay una farmacia cerca.', "C'è una farmacia qui vicino."],
        ['Hay dos sillas.', 'Ci sono due sedie.'],
        ['No hay problemas.', 'Non ci sono problemi.'],
        ['¿Está Marco?', "C'è Marco?"],
        ['Había muchas personas.', "C'erano molte persone."],
      ],
      points: [
        'El error típico de quien habla español es pensar en <em>hay</em> y decir <span lang="it">c\'è due persone</span>. Antes de hablar, mira la palabra que sigue: si es plural, <strong lang="it">ci sono</strong>.',
        'Con una persona o una cosa concreta el español usa <em>estar</em> (<em>¿Está Marco?</em>), pero el italiano puede usar <strong lang="it">c\'è</strong>: <span lang="it">C\'è Marco?</span> Para decir dónde está algo que ya conocemos se usa <span lang="it">essere</span>: <span lang="it">Il libro è sul tavolo.</span>',
        'En el pasado pasa lo mismo: <em>había</em> no cambia, pero en italiano se dice <span lang="it">c\'era</span> (singular) y <span lang="it">c\'erano</span> (plural).',
      ],
    },
    pt: {
      h2: "C'è e ci sono comparados com o português",
      intro:
        'No Brasil se diz <em>tem um livro</em>, <em>tem dois livros</em>: <em>tem</em> (ou <em>há</em>) nunca muda. Em italiano o verbo concorda com o que vem depois: <strong lang="it">c\'è</strong> com o singular e <strong lang="it">ci sono</strong> com o plural.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Tem uma farmácia aqui perto?', "C'è una farmacia qui vicino?"],
        ['Tem duas cadeiras.', 'Ci sono due sedie.'],
        ['Não tem problema.', "Non c'è problema."],
        ['O Marco está?', "C'è Marco?"],
        ['Tinha muitas pessoas.', "C'erano molte persone."],
      ],
      points: [
        'Não traduza <em>tem</em> por <span lang="it">ha</span>: <span lang="it">ha una farmacia qui vicino</span> não faz sentido em italiano. O <em>tem</em> que indica existência é sempre <strong lang="it">c\'è</strong> ou <strong lang="it">ci sono</strong>; o verbo <span lang="it">avere</span> serve para a posse: <span lang="it">Ho un libro</span> (eu tenho um livro).',
        'Como <em>tem</em> não muda, o erro mais comum é <span lang="it">c\'è due persone</span>. Olhe a palavra que vem depois: se for plural, <strong lang="it">ci sono</strong>.',
        'No passado é igual: <em>tinha</em> não muda, mas em italiano se diz <span lang="it">c\'era</span> (singular) e <span lang="it">c\'erano</span> (plural).',
      ],
    },
    fr: {
      h2: "C'è et ci sono comparés au français",
      intro:
        '<em>Il y a</em> ne change jamais : <em>il y a un livre</em>, <em>il y a deux livres</em>. En italien, le verbe s\'accorde avec ce qui suit : <strong lang="it">c\'è</strong> au singulier, <strong lang="it">ci sono</strong> au pluriel. Le petit mot <strong lang="it">ci</strong> correspond d\'ailleurs au <em>y</em> de <em>il y a</em>.',
      th: ['Français', 'Italien'],
      rows: [
        ["Il y a une pharmacie près d'ici ?", "C'è una farmacia qui vicino?"],
        ['Il y a deux chaises.', 'Ci sono due sedie.'],
        ["Il n'y a pas de temps.", "Non c'è tempo."],
        ['Marco est là ?', "C'è Marco?"],
        ['Il y a deux ans', 'Due anni fa'],
      ],
      points: [
        'Erreur fréquente, calquée sur <em>il y a</em> : <span lang="it">c\'è due persone</span>. Regardez le mot qui suit : s\'il est au pluriel, <strong lang="it">ci sono</strong>.',
        '<em>Il y a</em> sert aussi à situer dans le passé (<em>il y a deux ans</em>). Là, l\'italien utilise <strong lang="it">fa</strong>, placé après : <span lang="it">due anni fa</span>, jamais <span lang="it">ci sono due anni</span>.',
        'Pas de <em>de</em> après la négation : <em>il n\'y a pas de problèmes</em> → <span lang="it">non ci sono problemi</span>.',
      ],
    },
    cs: {
      h2: "C'è a ci sono ve srovnání s češtinou",
      intro:
        'Čeština si vystačí se slovesem <em>být</em>: <em>Tady je lékárna</em>, <em>Tady jsou dvě židle</em>. Italština k němu přidává malé slovo <strong lang="it">ci</strong> („tam, tady“): <strong lang="it">c\'è</strong> v jednotném čísle, <strong lang="it">ci sono</strong> v množném.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Je tady blízko lékárna?', "C'è una farmacia qui vicino?"],
        ['Na stole jsou dvě knihy.', 'Sul tavolo ci sono due libri.'],
        ['Není čas.', "Non c'è tempo."],
        ['Nejsou žádné problémy.', 'Non ci sono problemi.'],
        ['Je tady Marco?', "C'è Marco?"],
      ],
      points: [
        'Nejčastější chyba je vynechat <strong lang="it">ci</strong>. <span lang="it">È una farmacia</span> znamená „To je lékárna“, ne „Je tu lékárna“. Když říkáte, že něco někde je, použijte vždy <strong lang="it">c\'è</strong> nebo <strong lang="it">ci sono</strong>.',
        'Slovosled je stejný jako v češtině: nejdřív místo, potom nová informace. <em>Na stole je kniha</em> → <span lang="it">Sul tavolo c\'è un libro.</span>',
        'Zápor je jednoduchý: <span lang="it">non</span> před slovesem a číslo zůstává. <em>Nejsou tu žádné problémy</em> → <span lang="it">Non ci sono problemi</span>, ne <span lang="it">non c\'è problemi</span>.',
      ],
    },
    pl: {
      h2: "C'è i ci sono w porównaniu z polskim",
      intro:
        'Po polsku wystarczy <em>jest</em> albo <em>są</em>: <em>Tu jest apteka</em>, <em>Tu są dwa krzesła</em>. Włoski dodaje małe słowo <strong lang="it">ci</strong> („tam, tu”): <strong lang="it">c\'è</strong> w liczbie pojedynczej, <strong lang="it">ci sono</strong> w mnogiej.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Czy jest tu blisko apteka?', "C'è una farmacia qui vicino?"],
        ['Na stole są dwie książki.', 'Sul tavolo ci sono due libri.'],
        ['Nie ma czasu.', "Non c'è tempo."],
        ['Nie ma problemów.', 'Non ci sono problemi.'],
        ['Czy jest Marco?', "C'è Marco?"],
      ],
      points: [
        '<em>Nie ma</em> nigdy się nie zmienia i łączy się z dopełniaczem (<em>nie ma problemów</em>). Po włosku przeczenie zachowuje liczbę: <strong lang="it">non c\'è</strong> dla jednej rzeczy, <strong lang="it">non ci sono</strong> dla wielu. Dlatego <span lang="it">non c\'è problemi</span> to błąd.',
        'Nie zapominaj o <strong lang="it">ci</strong>: <span lang="it">è una farmacia</span> znaczy „to jest apteka”, a nie „jest tu apteka”.',
        'Szyk jest jak po polsku: najpierw miejsce, potem nowa informacja. <em>Na stole jest książka</em> → <span lang="it">Sul tavolo c\'è un libro.</span>',
      ],
    },
    tr: {
      h2: "C'è ve ci sono: Türkçe ile karşılaştırma",
      intro:
        'Türkçede <em>var</em> ve <em>yok</em> hiç değişmez ve cümlenin sonunda durur: <em>Masada bir kitap var</em>, <em>Masada iki kitap var</em>. İtalyancada ise fiil, ardından gelen isme uyar: tekil için <strong lang="it">c\'è</strong>, çoğul için <strong lang="it">ci sono</strong>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Yakında bir eczane var mı?', "C'è una farmacia qui vicino?"],
        ['Masada iki kitap var.', 'Sul tavolo ci sono due libri.'],
        ['Zaman yok.', "Non c'è tempo."],
        ['Sorun yok.', "Non c'è problema."],
        ['Marco burada mı?', "C'è Marco?"],
      ],
      points: [
        'Türkçede sayıdan sonra isim tekil kalır (<em>iki kitap</em>). İtalyancada hem isim hem fiil çoğul olur: <span lang="it">ci sono due libri</span>. <span lang="it">C\'è due libro</span> iki kez yanlıştır.',
        '<em>Yok</em> demek için <strong lang="it">non</strong> fiilin önüne gelir: <span lang="it">non c\'è</span>, <span lang="it">non ci sono</span>.',
        'Türkçede sahiplik için de <em>var</em> kullanılır (<em>arabam var</em>), ama İtalyancada bunun için <span lang="it">avere</span> fiili gerekir: <span lang="it">Ho una macchina.</span> <strong lang="it">C\'è</strong> yalnızca bir şeyin bir yerde bulunduğunu söyler.',
      ],
    },
    de: {
      h2: "C'è und ci sono im Vergleich zum Deutschen",
      intro:
        'Im Deutschen hast du zwei Möglichkeiten: <em>es gibt</em> (immer im Singular) und <em>da ist / da sind</em>. Im Italienischen deckt <strong lang="it">c\'è / ci sono</strong> beides ab, und das Verb richtet sich nach dem, was folgt: <strong lang="it">c\'è</strong> im Singular, <strong lang="it">ci sono</strong> im Plural.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Gibt es hier in der Nähe eine Apotheke?', "C'è una farmacia qui vicino?"],
        ['Es gibt zwei Stühle.', 'Ci sono due sedie.'],
        ['Es gibt keine Probleme.', 'Non ci sono problemi.'],
        ['Ist Marco da?', "C'è Marco?"],
      ],
      points: [
        'Weil <em>es gibt</em> nie in den Plural geht, sagen Deutschsprachige oft <span lang="it">c\'è due persone</span>. Schau auf das Wort danach: Plural heißt <strong lang="it">ci sono</strong>.',
        'Ein <em>kein</em> gibt es im Italienischen nicht: Du verneinst das Verb mit <strong lang="it">non</strong> und lässt den Artikel meist weg. <em>Es gibt kein Brot mehr</em> → <span lang="it">Non c\'è più pane.</span>',
        'Das <em>es</em> wird nicht übersetzt: <strong lang="it">ci</strong> ist kein Subjekt, sondern bedeutet „da“. <span lang="it">È una farmacia</span> ohne <span lang="it">ci</span> heißt „Das ist eine Apotheke“.',
      ],
    },
    ja: {
      h2: "c'è・ci sono と日本語の「ある・いる」",
      intro:
        '日本語では、物には「ある」、人や動物には「いる」を使い分けますが、数は区別しません。イタリア語はその逆です。人か物かは関係なく、単数なら <strong lang="it">c\'è</strong>、複数なら <strong lang="it">ci sono</strong> を使います。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['近くに薬局がありますか。', "C'è una farmacia qui vicino?"],
        ['机の上に本が二冊あります。', 'Sul tavolo ci sono due libri.'],
        ['教室に学生が三人います。', 'In classe ci sono tre studenti.'],
        ['時間がありません。', "Non c'è tempo."],
        ['マルコさんはいますか。', "C'è Marco?"],
      ],
      points: [
        '「本が一冊あります」「本が二冊あります」のように、日本語では数が変わっても動詞は同じです。イタリア語では後ろの名詞を見て、複数なら必ず <strong lang="it">ci sono</strong> にします。<span lang="it">c\'è due libri</span> は間違いです。',
        '語順は日本語に似ていて、場所を先に言えます。<span lang="it">Sul tavolo c\'è un libro.</span>（机の上に本があります。）',
        '否定は動詞の前に <strong lang="it">non</strong> を置くだけです。<span lang="it">non c\'è</span>、<span lang="it">non ci sono</span>。',
      ],
    },
  },

  'grammatica/b1/comparativo-e-superlativo.html': {
    it: {
      h2: "Comparativo e superlativo: il confronto con l'inglese",
      intro:
        'L\'inglese ha due sistemi: <em lang="en">-er / -est</em> per gli aggettivi corti (<em lang="en">bigger, the biggest</em>) e <em lang="en">more / the most</em> per quelli lunghi. L\'italiano ne ha uno solo: <strong>più</strong> e <strong>il più</strong> con tutti gli aggettivi.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['Rome is bigger than Pisa.', 'Roma è più grande di Pisa.'],
        ["It's easier to read than to write.", 'È più facile leggere che scrivere.'],
        ['Marco is as tall as Luca.', 'Marco è alto come Luca.'],
        ['the most useful book in the class', 'il libro più utile della classe'],
        ['very beautiful', 'bellissimo'],
      ],
      points: [
        '<em lang="en">Than</em> ha due traduzioni: <strong>di</strong> quando confronti due persone o cose (<span lang="it">più grande di Pisa</span>), <strong>che</strong> quando confronti due azioni o due qualità (<span lang="it">più facile leggere che scrivere</span>).',
        'Dopo il superlativo l\'inglese usa <em lang="en">in</em>, l\'italiano <strong>di</strong>: <span lang="it">il più bello del mondo</span>, non <span lang="it">nel mondo</span>.',
        'Come <em lang="en">better</em> e <em lang="en">worse</em>, anche l\'italiano ha forme irregolari: <span lang="it">migliore</span>, <span lang="it">peggiore</span>. Il superlativo in <strong>-issimo</strong> invece in inglese non esiste: <span lang="it">bellissimo</span> = <em lang="en">very beautiful</em>.',
      ],
    },
    en: {
      h2: 'Comparatives and superlatives compared with English',
      intro:
        'English has two systems: <em>-er / -est</em> for short adjectives (<em>bigger, the biggest</em>) and <em>more / the most</em> for long ones. Italian has just one: <strong lang="it">più</strong> and <strong lang="it">il più</strong> with every adjective.',
      th: ['English', 'Italian'],
      rows: [
        ['Rome is bigger than Pisa.', 'Roma è più grande di Pisa.'],
        ["It's easier to read than to write.", 'È più facile leggere che scrivere.'],
        ['Marco is as tall as Luca.', 'Marco è alto come Luca.'],
        ['the most useful book in the class', 'il libro più utile della classe'],
        ['very beautiful', 'bellissimo'],
      ],
      points: [
        '<em>Than</em> has two translations: <strong lang="it">di</strong> when you compare two people or things (<span lang="it">più grande di Pisa</span>), <strong lang="it">che</strong> when you compare two actions or two qualities (<span lang="it">più facile leggere che scrivere</span>).',
        'After a superlative English uses <em>in</em>, Italian uses <strong lang="it">di</strong>: <span lang="it">il più bello del mondo</span> (the most beautiful in the world), not <span lang="it">nel mondo</span>.',
        '<em>As … as</em> needs only one word: <span lang="it">alto come Luca</span>. And Italian has a form English lacks: <strong lang="it">-issimo</strong>, <span lang="it">bellissimo</span> = very beautiful.',
      ],
    },
    es: {
      h2: 'Comparativo y superlativo comparados con el español',
      intro:
        'La estructura es casi la misma que en español: <em>más</em> → <strong lang="it">più</strong>, <em>menos</em> → <strong lang="it">meno</strong>, <em>el más</em> → <strong lang="it">il più</strong>. La gran diferencia está en la palabra que sigue: el español usa siempre <em>que</em>, el italiano casi siempre <strong lang="it">di</strong>.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Roma es más grande que Pisa.', 'Roma è più grande di Pisa.'],
        ['Es más fácil leer que escribir.', 'È più facile leggere che scrivere.'],
        ['Marco es tan alto como Luca.', 'Marco è alto come Luca.'],
        ['el libro más útil de la clase', 'il libro più utile della classe'],
        ['buenísimo', 'buonissimo'],
      ],
      points: [
        'El error típico de quien habla español es <span lang="it">più grande che Pisa</span>. Entre dos personas o cosas, el italiano usa <strong lang="it">di</strong>: <span lang="it">più grande di Pisa</span>, <span lang="it">più alto di me</span>. <strong lang="it">Che</strong> solo entre dos acciones o dos cualidades: <span lang="it">più facile leggere che scrivere</span>.',
        'El <em>tan</em> de <em>tan alto como</em> desaparece: <span lang="it">Marco è alto come Luca</span>.',
        'Lo demás funciona como en español: <em>-ísimo</em> → <strong lang="it">-issimo</strong> (<span lang="it">buonissimo</span>), <em>mejor / peor</em> → <span lang="it">migliore / peggiore</span>, <em>mayor / menor</em> → <span lang="it">maggiore / minore</span>.',
      ],
    },
    pt: {
      h2: 'Comparativo e superlativo comparados com o português',
      intro:
        'A estrutura é quase a mesma do português: <em>mais</em> → <strong lang="it">più</strong>, <em>menos</em> → <strong lang="it">meno</strong>, <em>o mais</em> → <strong lang="it">il più</strong>. A grande diferença está na palavra que vem depois: o português usa <em>(do) que</em>, o italiano quase sempre <strong lang="it">di</strong>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Roma é maior do que Pisa.', 'Roma è più grande di Pisa.'],
        ['É mais fácil ler do que escrever.', 'È più facile leggere che scrivere.'],
        ['O Marco é tão alto quanto o Luca.', 'Marco è alto come Luca.'],
        ['o livro mais útil da turma', 'il libro più utile della classe'],
        ['lindíssimo', 'bellissimo'],
      ],
      points: [
        'O erro típico de quem fala português é <span lang="it">più grande che Pisa</span>. Entre duas pessoas ou coisas, o italiano usa <strong lang="it">di</strong>: <span lang="it">più grande di Pisa</span>, <span lang="it">più alto di me</span>. <strong lang="it">Che</strong> só entre duas ações ou duas qualidades: <span lang="it">più facile leggere che scrivere</span>.',
        '<em>Maior</em> e <em>menor</em> para tamanho viram <span lang="it">più grande</span> e <span lang="it">più piccolo</span>; <span lang="it">maggiore</span> e <span lang="it">minore</span> se usam sobretudo para idade e importância (<span lang="it">mio fratello maggiore</span>).',
        'O <em>tão</em> de <em>tão alto quanto</em> cai: <span lang="it">alto come Luca</span> ou <span lang="it">alto quanto Luca</span>. E <em>-íssimo</em> funciona igual: <span lang="it">bellissimo</span>, <span lang="it">buonissimo</span>.',
      ],
    },
    fr: {
      h2: 'Comparatif et superlatif comparés au français',
      intro:
        'Le principe est le même qu\'en français : <em>plus</em> → <strong lang="it">più</strong>, <em>moins</em> → <strong lang="it">meno</strong>. Deux différences piègent presque tous les francophones : le mot après l\'adjectif et l\'article du superlatif.',
      th: ['Français', 'Italien'],
      rows: [
        ['Rome est plus grande que Pise.', 'Roma è più grande di Pisa.'],
        ["Il est plus facile de lire que d'écrire.", 'È più facile leggere che scrivere.'],
        ['Marco est aussi grand que Luca.', 'Marco è alto come Luca.'],
        ['le livre le plus utile de la classe', 'il libro più utile della classe'],
        ['très beau', 'bellissimo'],
      ],
      points: [
        '<em>Que</em> ne se traduit pas toujours par <span lang="it">che</span>. Entre deux personnes ou deux choses, l\'italien utilise <strong lang="it">di</strong> : <span lang="it">più grande di Pisa</span>, <span lang="it">più alto di me</span>. <strong lang="it">Che</strong> sert à comparer deux actions ou deux qualités.',
        'Le français répète l\'article (<em>le livre <u>le</u> plus utile</em>), l\'italien non : <span lang="it">il libro più utile</span>, jamais <span lang="it">il libro il più utile</span>.',
        '<em>Aussi … que</em> devient simplement <span lang="it">come</span> : <span lang="it">alto come Luca</span>. Et l\'italien a un superlatif en <strong lang="it">-issimo</strong> qui n\'existe pas en français : <span lang="it">bellissimo</span> = très beau.',
      ],
    },
    cs: {
      h2: 'Druhý a třetí stupeň ve srovnání s češtinou',
      intro:
        'Čeština stupňuje koncovkami: <em>velký – větší – největší</em>. Italské přídavné jméno se nemění, jen se před něj přidá <strong lang="it">più</strong> (více) nebo <strong lang="it">il più</strong> (nej-): <span lang="it">grande – più grande – il più grande</span>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Řím je větší než Pisa.', 'Roma è più grande di Pisa.'],
        ['Číst je snazší než psát.', 'È più facile leggere che scrivere.'],
        ['Marco je stejně vysoký jako Luca.', 'Marco è alto come Luca.'],
        ['nejužitečnější kniha ve třídě', 'il libro più utile della classe'],
        ['velmi krásný', 'bellissimo'],
      ],
      points: [
        '<em>Než</em> má v italštině dva překlady: <strong lang="it">di</strong>, když srovnáváte dvě osoby nebo věci (<span lang="it">più grande di Pisa</span>), a <strong lang="it">che</strong>, když srovnáváte dvě činnosti nebo vlastnosti (<span lang="it">più facile leggere che scrivere</span>).',
        'Nejvyšší stupeň potřebuje člen: <span lang="it">il più grande</span>, <span lang="it">la più bella</span>. A místo <em>ve třídě</em> se říká <strong lang="it">della classe</strong> (z třídy), ne <span lang="it">nella classe</span>.',
        'Jako <em>lepší / horší</em> má i italština nepravidelné tvary: <span lang="it">migliore / peggiore</span>, u příslovcí <span lang="it">meglio / peggio</span> (<em>lépe / hůř</em>).',
      ],
    },
    pl: {
      h2: 'Stopniowanie w porównaniu z polskim',
      intro:
        'Po polsku stopniujesz końcówkami: <em>duży – większy – największy</em>. Włoski przymiotnik się nie zmienia, dodajesz tylko <strong lang="it">più</strong> (bardziej) albo <strong lang="it">il più</strong> (naj-): <span lang="it">grande – più grande – il più grande</span>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Rzym jest większy od Pizy.', 'Roma è più grande di Pisa.'],
        ['Łatwiej jest czytać niż pisać.', 'È più facile leggere che scrivere.'],
        ['Marco jest tak wysoki jak Luca.', 'Marco è alto come Luca.'],
        ['najbardziej przydatna książka w klasie', 'il libro più utile della classe'],
        ['bardzo piękny', 'bellissimo'],
      ],
      points: [
        'Dobra wskazówka: tam, gdzie po polsku możesz powiedzieć <em>od</em> (<em>większy od Pizy</em>, <em>wyższy ode mnie</em>), po włosku jest <strong lang="it">di</strong>: <span lang="it">più grande di Pisa</span>, <span lang="it">più alto di me</span>. Tam, gdzie pasuje tylko <em>niż</em> (dwie czynności, dwie cechy), jest <strong lang="it">che</strong>: <span lang="it">più facile leggere che scrivere</span>.',
        'Stopień najwyższy potrzebuje rodzajnika: <span lang="it">il più grande</span>, <span lang="it">la più bella</span>. Zamiast <em>w klasie</em> mówisz <strong lang="it">della classe</strong>, nie <span lang="it">nella classe</span>.',
        'Jak <em>lepszy / gorszy</em>, włoski też ma formy nieregularne: <span lang="it">migliore / peggiore</span>, a przy przysłówkach <span lang="it">meglio / peggio</span> (<em>lepiej / gorzej</em>).',
      ],
    },
    tr: {
      h2: 'Karşılaştırma ve üstünlük: Türkçe ile karşılaştırma',
      intro:
        'Türkçede karşılaştırılan şey önce gelir: <em>Roma, Pisa\'dan daha büyük</em>. İtalyancada sıra tersidir: önce sıfat, sonra karşılaştırılan şey. <em>Daha</em> → <strong lang="it">più</strong>, <em>-den</em> → <strong lang="it">di</strong>, <em>en</em> → <strong lang="it">il più</strong>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ["Roma, Pisa'dan daha büyük.", 'Roma è più grande di Pisa.'],
        ['Okumak yazmaktan daha kolay.', 'È più facile leggere che scrivere.'],
        ['Marco, Luca kadar uzun.', 'Marco è alto come Luca.'],
        ['sınıfın en faydalı kitabı', 'il libro più utile della classe'],
        ['çok güzel', 'bellissimo'],
      ],
      points: [
        'Türkçede <em>-den</em> her zaman kullanılır, İtalyancada iki karşılığı vardır: iki kişi veya iki şey için <strong lang="it">di</strong> (<span lang="it">più grande di Pisa</span>), iki eylem veya iki nitelik için <strong lang="it">che</strong> (<span lang="it">più facile leggere che scrivere</span>).',
        '<em>En</em> için tanımlık gerekir ve isim genellikle önce gelir: <span lang="it">il libro più utile</span>. <em>Sınıfın</em> → <strong lang="it">della classe</strong>.',
        'İtalyancada sıfat, ismin cinsiyetine ve sayısına uyar: <span lang="it">più alto</span> (erkek), <span lang="it">più alta</span> (kadın), <span lang="it">più alti</span> (çoğul). <em>-issimo</em> ise <em>çok</em> anlamına gelir: <span lang="it">bellissimo</span> = çok güzel.',
      ],
    },
    de: {
      h2: 'Komparativ und Superlativ im Vergleich zum Deutschen',
      intro:
        'Im Deutschen hängst du eine Endung an: <em>groß – größer – am größten</em>. Im Italienischen bleibt das Adjektiv gleich, du stellst nur <strong lang="it">più</strong> (mehr) oder <strong lang="it">il più</strong> davor: <span lang="it">grande – più grande – il più grande</span>.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Rom ist größer als Pisa.', 'Roma è più grande di Pisa.'],
        ['Lesen ist leichter als Schreiben.', 'È più facile leggere che scrivere.'],
        ['Marco ist so groß wie Luca.', 'Marco è alto come Luca.'],
        ['das nützlichste Buch der Klasse', 'il libro più utile della classe'],
        ['sehr schön', 'bellissimo'],
      ],
      points: [
        '<em>Als</em> hat zwei Übersetzungen: <strong lang="it">di</strong>, wenn du zwei Personen oder Dinge vergleichst (<span lang="it">più grande di Pisa</span>, <span lang="it">più alto di me</span>), und <strong lang="it">che</strong>, wenn du zwei Tätigkeiten oder zwei Eigenschaften vergleichst. <span lang="it">Più grande come Pisa</span> ist falsch.',
        'Im Superlativ steht das Nomen meist vorne: <span lang="it">il libro più utile</span> (wörtlich „das Buch nützlichste“).',
        '<em>Besser</em> hat im Italienischen zwei Formen: <span lang="it">migliore</span> beim Nomen (<span lang="it">un vino migliore</span>) und <span lang="it">meglio</span> beim Verb (<span lang="it">canta meglio</span>). Ebenso <em>schlechter</em>: <span lang="it">peggiore / peggio</span>.',
      ],
    },
    ja: {
      h2: '比較級・最上級と日本語の「より・一番」',
      intro:
        '日本語では比べる相手が先に来ます（ローマは<em>ピサより</em>大きい）。イタリア語では順番が逆で、形容詞のあとに相手が来ます。「より」→ <strong lang="it">più … di</strong>、「一番」→ <strong lang="it">il più</strong>。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['ローマはピサより大きいです。', 'Roma è più grande di Pisa.'],
        ['書くより読むほうが簡単です。', 'È più facile leggere che scrivere.'],
        ['マルコはルカと同じくらい背が高いです。', 'Marco è alto come Luca.'],
        ['クラスで一番役に立つ本', 'il libro più utile della classe'],
        ['とても美しい', 'bellissimo'],
      ],
      points: [
        '「より」には二つの訳があります。人や物を比べるときは <strong lang="it">di</strong>（<span lang="it">più grande di Pisa</span>）、二つの動作や性質を比べるときは <strong lang="it">che</strong>（<span lang="it">più facile leggere che scrivere</span>）です。',
        '「クラスで」の「で」は <strong lang="it">di</strong> になります。<span lang="it">il libro più utile della classe</span>（<span lang="it">nella classe</span> ではありません）。最上級には冠詞 <span lang="it">il / la</span> が必要です。',
        '日本語の形容詞は比較しても形が変わりませんが、イタリア語の形容詞は名詞の性と数に合わせます。<span lang="it">più alto</span>（男性）、<span lang="it">più alta</span>（女性）、<span lang="it">più alti</span>（複数）。',
      ],
    },
  },

  'grammatica/a1/preposizioni-semplici.html': {
    after: 'luoghi',
    it: {
      h2: "Le preposizioni: il confronto con l'inglese",
      intro:
        'In inglese la scelta dipende dal movimento: <em lang="en">to</em> per andare, <em lang="en">in / at</em> per stare. In italiano no: conta <strong>il tipo di luogo</strong>. Città con <strong>a</strong>, Paesi con <strong>in</strong>, persone con <strong>da</strong>, sia per andare sia per stare.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ["I'm going to Rome. / I'm in Rome.", 'Vado a Roma. / Sono a Roma.'],
        ['I live in Italy.', 'Vivo in Italia.'],
        ["I'm going to Marco's.", 'Vado da Marco.'],
        ["I've been studying Italian for two years.", 'Studio italiano da due anni.'],
        ['in five minutes', 'tra cinque minuti'],
        ['by train / on foot', 'in treno / a piedi'],
      ],
      points: [
        '<em lang="en">In Rome</em> non è <span lang="it">in Roma</span>: con le città si usa sempre <strong>a</strong>, anche per la posizione. <span lang="it">Sono a Roma</span>, <span lang="it">abito a Milano</span>.',
        '<em lang="en">For two years</em>, se l\'azione continua ancora, diventa <strong>da</strong> + presente: <span lang="it">studio italiano da due anni</span> (non <span lang="it">per due anni</span>, e non al passato).',
        '<em lang="en">In five minutes</em>, nel futuro, è <strong>tra</strong> (o <strong>fra</strong>): <span lang="it">arrivo tra cinque minuti</span>. <span lang="it">In cinque minuti</span> vuol dire «nel giro di cinque minuti».',
      ],
    },
    en: {
      h2: 'Italian prepositions compared with English',
      intro:
        'In English the choice depends on movement: <em>to</em> for going, <em>in / at</em> for being there. Italian doesn\'t care about movement: what counts is <strong>the type of place</strong>. Cities take <strong lang="it">a</strong>, countries <strong lang="it">in</strong>, people <strong lang="it">da</strong>, both for going and for being there.',
      th: ['English', 'Italian'],
      rows: [
        ["I'm going to Rome. / I'm in Rome.", 'Vado a Roma. / Sono a Roma.'],
        ['I live in Italy.', 'Vivo in Italia.'],
        ["I'm going to Marco's.", 'Vado da Marco.'],
        ["I've been studying Italian for two years.", 'Studio italiano da due anni.'],
        ['in five minutes', 'tra cinque minuti'],
        ['by train / on foot', 'in treno / a piedi'],
      ],
      points: [
        '<em>In Rome</em> is not <span lang="it">in Roma</span>: cities always take <strong lang="it">a</strong>, even for position. <span lang="it">Sono a Roma</span>, <span lang="it">abito a Milano</span>.',
        '<em>For two years</em>, when the action is still going on, becomes <strong lang="it">da</strong> + present tense: <span lang="it">studio italiano da due anni</span>. Not <span lang="it">per due anni</span>, and not a past tense.',
        '<em>In five minutes</em>, in the future, is <strong lang="it">tra</strong> (or <strong lang="it">fra</strong>): <span lang="it">arrivo tra cinque minuti</span>. <span lang="it">In cinque minuti</span> means “within five minutes”.',
      ],
    },
    es: {
      h2: 'Las preposiciones comparadas con el español',
      intro:
        'En español la preposición cambia con el movimiento: <em>voy a Roma</em>, <em>estoy en Roma</em>. En italiano lo que cuenta es <strong>el tipo de lugar</strong>: ciudades con <strong lang="it">a</strong>, países con <strong lang="it">in</strong>, personas con <strong lang="it">da</strong>, tanto para ir como para estar.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Estoy en Roma.', 'Sono a Roma.'],
        ['Voy a Italia.', 'Vado in Italia.'],
        ['Voy a casa de Marco.', 'Vado da Marco.'],
        ['Soy de Nápoles. / Vengo de Milán.', 'Sono di Napoli. / Vengo da Milano.'],
        ['Estudio italiano desde hace dos años.', 'Studio italiano da due anni.'],
        ['dentro de cinco minutos', 'tra cinque minuti'],
      ],
      points: [
        'Los dos errores típicos de quien habla español son <span lang="it">sono in Roma</span> y <span lang="it">vado a Italia</span>. Con ciudades, siempre <strong lang="it">a</strong>; con países, siempre <strong lang="it">in</strong>: <span lang="it">sono a Roma</span>, <span lang="it">vado in Italia</span>.',
        'El <em>de</em> español se divide en dos: <strong lang="it">di</strong> para el origen de una persona (<span lang="it">sono di Napoli</span>) y <strong lang="it">da</strong> para el lugar del que vienes (<span lang="it">vengo da Milano</span>). <em>A casa de</em> también es <strong lang="it">da</strong>: <span lang="it">vado da Marco</span>.',
        '<em>Desde hace</em> → <strong lang="it">da</strong> + presente (<span lang="it">studio italiano da due anni</span>); <em>dentro de</em> → <strong lang="it">tra</strong> (<span lang="it">tra cinque minuti</span>).',
      ],
    },
    pt: {
      h2: 'As preposições comparadas com o português',
      intro:
        'Em português a preposição muda com o movimento: <em>vou para Roma</em>, <em>moro em Roma</em>. Em italiano o que conta é <strong>o tipo de lugar</strong>: cidades com <strong lang="it">a</strong>, países com <strong lang="it">in</strong>, pessoas com <strong lang="it">da</strong>, tanto para ir quanto para estar.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Moro em Roma.', 'Abito a Roma.'],
        ['Vou para a Itália.', 'Vado in Italia.'],
        ['Vou na casa do Marco.', 'Vado da Marco.'],
        ['Sou de Nápoles. / Venho de Milão.', 'Sono di Napoli. / Vengo da Milano.'],
        ['Estudo italiano há dois anos.', 'Studio italiano da due anni.'],
        ['Vou de trem. / Vou a pé.', 'Vado in treno. / Vado a piedi.'],
      ],
      points: [
        'Com cidades, sempre <strong lang="it">a</strong>, também para dizer onde você está: <span lang="it">abito a Roma</span>, não <span lang="it">in Roma</span>. Com países, sempre <strong lang="it">in</strong>: <span lang="it">vado in Italia</span>.',
        '<em>De trem</em>, <em>de carro</em> viram <strong lang="it">in</strong>: <span lang="it">in treno</span>, <span lang="it">in macchina</span> (<span lang="it">di treno</span> está errado). Só <em>a pé</em> é igual: <span lang="it">a piedi</span>.',
        'Cuidado com <em>há</em>: se a ação continua, <em>há dois anos</em> → <strong lang="it">da</strong> + presente (<span lang="it">studio italiano da due anni</span>); se já terminou, é <span lang="it">due anni fa</span>. E <em>daqui a cinco minutos</em> → <span lang="it">tra cinque minuti</span>.',
      ],
    },
    fr: {
      h2: 'Les prépositions comparées au français',
      intro:
        'Bonne nouvelle : pour les lieux, l\'italien ressemble beaucoup au français. <em>À Rome</em> → <strong lang="it">a Roma</strong>, <em>en Italie</em> → <strong lang="it">in Italia</strong>, <em>chez Marco</em> → <strong lang="it">da Marco</strong>, que l\'on y aille ou que l\'on y soit.',
      th: ['Français', 'Italien'],
      rows: [
        ["Je vais à Rome. / J'habite à Rome.", 'Vado a Roma. / Abito a Roma.'],
        ['Je vais au Japon.', 'Vado in Giappone.'],
        ['Je vais chez Marco. / chez le médecin', 'Vado da Marco. / dal medico'],
        ['Je suis de Naples. / Je viens de Milan.', 'Sono di Napoli. / Vengo da Milano.'],
        ["J'étudie l'italien depuis deux ans.", 'Studio italiano da due anni.'],
        ['dans cinq minutes', 'tra cinque minuti'],
      ],
      points: [
        'Le français dit <em>au Japon</em>, <em>au Portugal</em>, <em>aux États-Unis</em> ; l\'italien garde <strong lang="it">in</strong> avec tous les pays : <span lang="it">in Giappone</span>, <span lang="it">in Portogallo</span>, <span lang="it">negli Stati Uniti</span>.',
        'Le <em>de</em> français se divise en deux : <strong lang="it">di</strong> pour l\'origine (<span lang="it">sono di Napoli</span>), <strong lang="it">da</strong> pour la provenance (<span lang="it">vengo da Milano</span>).',
        '<em>Depuis</em> + présent fonctionne comme en français : <span lang="it">studio italiano da due anni</span>. Mais <em>dans</em> + durée devient <strong lang="it">tra</strong> : <span lang="it">tra cinque minuti</span>, pas <span lang="it">in cinque minuti</span>.',
      ],
    },
    cs: {
      h2: 'Předložky ve srovnání s češtinou',
      intro:
        'Čeština rozlišuje <em>kam</em> a <em>kde</em>: <em>do Říma / v Římě</em>, <em>k Markovi / u Marka</em>. Italština ne: rozhoduje <strong>druh místa</strong>. Města s <strong lang="it">a</strong>, země s <strong lang="it">in</strong>, osoby s <strong lang="it">da</strong>, pro <em>kam</em> i pro <em>kde</em>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Jedu do Říma. / Jsem v Římě.', 'Vado a Roma. / Sono a Roma.'],
        ['Bydlím v Itálii.', 'Abito in Italia.'],
        ['Jdu k Markovi. / Jsem u Marka.', 'Vado da Marco. / Sono da Marco.'],
        ['Jedu vlakem. / Píšu perem.', 'Vado in treno. / Scrivo con la penna.'],
        ['Učím se italsky dva roky.', 'Studio italiano da due anni.'],
        ['za pět minut', 'tra cinque minuti'],
      ],
      points: [
        '<em>Do</em> i <em>v</em> se u měst překládají stejně: <span lang="it">vado a Roma</span>, <span lang="it">sono a Roma</span>. <span lang="it">In Roma</span> je chyba.',
        'Co čeština vyjádří pádem bez předložky (<em>vlakem</em>, <em>perem</em>), potřebuje v italštině předložku: <span lang="it">in treno</span>, <span lang="it">in macchina</span>, <span lang="it">con la penna</span>.',
        'Když něco trvá dodnes, italština přidá <strong lang="it">da</strong>: <em>Učím se italsky dva roky</em> → <span lang="it">Studio italiano da due anni</span>. <em>Za pět minut</em> → <span lang="it">tra cinque minuti</span>.',
      ],
    },
    pl: {
      h2: 'Przyimki w porównaniu z polskim',
      intro:
        'Po polsku rozróżniasz <em>dokąd</em> i <em>gdzie</em>: <em>do Rzymu / w Rzymie</em>, <em>do Marka / u Marka</em>. Po włosku nie: liczy się <strong>rodzaj miejsca</strong>. Miasta z <strong lang="it">a</strong>, kraje z <strong lang="it">in</strong>, osoby z <strong lang="it">da</strong>, i dla <em>dokąd</em>, i dla <em>gdzie</em>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Jadę do Rzymu. / Jestem w Rzymie.', 'Vado a Roma. / Sono a Roma.'],
        ['Mieszkam we Włoszech.', 'Abito in Italia.'],
        ['Idę do Marka. / Jestem u Marka.', 'Vado da Marco. / Sono da Marco.'],
        ['Jadę pociągiem. / Piszę długopisem.', 'Vado in treno. / Scrivo con la penna.'],
        ['Uczę się włoskiego od dwóch lat.', 'Studio italiano da due anni.'],
        ['za pięć minut', 'tra cinque minuti'],
      ],
      points: [
        '<em>Do</em> i <em>w</em> przy miastach tłumaczysz tak samo: <span lang="it">vado a Roma</span>, <span lang="it">sono a Roma</span>. <span lang="it">In Roma</span> to błąd.',
        'To, co polski wyraża samym narzędnikiem (<em>pociągiem</em>, <em>długopisem</em>), po włosku wymaga przyimka: <span lang="it">in treno</span>, <span lang="it">in macchina</span>, <span lang="it">con la penna</span>.',
        '<em>Od</em> + czas teraźniejszy działa jak po polsku: <em>od dwóch lat</em> → <span lang="it">da due anni</span>. A <em>za pięć minut</em> → <strong lang="it">tra</strong>: <span lang="it">tra cinque minuti</span>.',
      ],
    },
    tr: {
      h2: 'Edatlar: Türkçe ile karşılaştırma',
      intro:
        'Türkçede yön ve yer bir ekle gösterilir ve kelimenin sonuna gelir: <em>Roma\'ya</em>, <em>Roma\'da</em>, <em>Milano\'dan</em>. İtalyancada kelimenin önüne bir edat gelir ve yönü değil <strong>yerin türünü</strong> gösterir: şehirler için <strong lang="it">a</strong>, ülkeler için <strong lang="it">in</strong>, kişiler için <strong lang="it">da</strong>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ["Roma'ya gidiyorum. / Roma'dayım.", 'Vado a Roma. / Sono a Roma.'],
        ["İtalya'da yaşıyorum.", 'Abito in Italia.'],
        ["Marco'ya gidiyorum.", 'Vado da Marco.'],
        ["Milano'dan geliyorum.", 'Vengo da Milano.'],
        ['İki yıldır İtalyanca öğreniyorum.', 'Studio italiano da due anni.'],
        ['Trenle gidiyorum. / Kalemle yazıyorum.', 'Vado in treno. / Scrivo con la penna.'],
      ],
      points: [
        '<em>-e/-a</em> ve <em>-de/-da</em> ekleri şehirlerde aynı edatla çevrilir: <span lang="it">vado a Roma</span>, <span lang="it">sono a Roma</span>. Ülkelerde ise ikisi de <strong lang="it">in</strong> olur: <span lang="it">vado in Italia</span>, <span lang="it">abito in Italia</span>.',
        '<em>-den/-dan</em> çoğu zaman <strong lang="it">da</strong> olur (<span lang="it">da Milano</span>). <em>-le/-la</em> ise <strong lang="it">con</strong> olur (<span lang="it">con la penna</span>), ama taşıtlarda <strong lang="it">in</strong> kullanılır: <span lang="it">in treno</span>, <span lang="it">in macchina</span>.',
        '<em>-dir</em> ile anlatılan, hâlâ süren bir durum <strong lang="it">da</strong> + şimdiki zamanla söylenir: <span lang="it">studio italiano da due anni</span>. <em>Beş dakika sonra</em> → <span lang="it">tra cinque minuti</span>.',
      ],
    },
    de: {
      h2: 'Präpositionen im Vergleich zum Deutschen',
      intro:
        'Im Deutschen hängt die Präposition oft von der Richtung ab: <em>nach Rom / in Rom</em>, <em>zu Marco / bei Marco</em>. Im Italienischen zählt nur <strong>die Art des Ortes</strong>: Städte mit <strong lang="it">a</strong>, Länder mit <strong lang="it">in</strong>, Personen mit <strong lang="it">da</strong>, für <em>wohin</em> und für <em>wo</em>. Und es gibt keine Fälle.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich fahre nach Rom. / Ich bin in Rom.', 'Vado a Roma. / Sono a Roma.'],
        ['Ich wohne in Italien.', 'Abito in Italia.'],
        ['Ich gehe zu Marco. / Ich bin bei Marco.', 'Vado da Marco. / Sono da Marco.'],
        ['Ich komme aus Neapel. / Ich komme gerade aus Mailand.', 'Sono di Napoli. / Vengo da Milano.'],
        ['Ich lerne seit zwei Jahren Italienisch.', 'Studio italiano da due anni.'],
        ['in fünf Minuten', 'tra cinque minuti'],
      ],
      points: [
        '<em>Nach Rom</em> und <em>in Rom</em> sind beide <span lang="it">a Roma</span>. <span lang="it">In Roma</span> ist falsch, <span lang="it">in</span> gilt nur für Länder und Regionen: <span lang="it">in Italia</span>, <span lang="it">in Toscana</span>.',
        '<em>Zu</em> und <em>bei</em> + Person sind <strong lang="it">da</strong>: <span lang="it">vado da Marco</span>, <span lang="it">sono dal medico</span>. <em>Aus</em> hat zwei Übersetzungen: <span lang="it">di</span> für die Herkunft, <span lang="it">da</span> für den Ort, von dem du gerade kommst.',
        '<em>Seit</em> + Präsens funktioniert wie im Deutschen: <span lang="it">studio italiano da due anni</span>. Aber <em>in fünf Minuten</em> heißt <strong lang="it">tra</strong>: <span lang="it">tra cinque minuti</span>.',
      ],
    },
    ja: {
      h2: 'イタリア語の前置詞と日本語の助詞',
      intro:
        '日本語の助詞は名詞の<em>あと</em>に来ます（ローマ<em>に</em>、ローマ<em>で</em>）。イタリア語の前置詞は名詞の<em>前</em>に来て、「行く」か「いる」かではなく<strong>場所の種類</strong>で選びます。町は <strong lang="it">a</strong>、国は <strong lang="it">in</strong>、人のところは <strong lang="it">da</strong> です。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['ローマに行きます。／ローマにいます。', 'Vado a Roma. / Sono a Roma.'],
        ['イタリアに住んでいます。', 'Abito in Italia.'],
        ['マルコさんの家に行きます。', 'Vado da Marco.'],
        ['ミラノから電車で来ます。', 'Vengo da Milano in treno.'],
        ['ペンで書きます。', 'Scrivo con la penna.'],
        ['二年前からイタリア語を勉強しています。', 'Studio italiano da due anni.'],
      ],
      points: [
        '「に」も「で」も、町なら <strong lang="it">a</strong>、国なら <strong lang="it">in</strong> です。<span lang="it">vado a Roma</span>、<span lang="it">sono a Roma</span>、<span lang="it">abito in Italia</span>。',
        '「で」にはいろいろな訳があります。乗り物は <strong lang="it">in</strong>（<span lang="it">in treno</span>）、道具は <strong lang="it">con</strong>（<span lang="it">con la penna</span>）、町は <strong lang="it">a</strong>（<span lang="it">a Roma</span>）。',
        '「から」は <strong lang="it">da</strong> です（<span lang="it">da Milano</span>）。「二年前から〜している」も <strong lang="it">da</strong> + 現在形になります。<span lang="it">studio italiano da due anni</span>。「五分後に」は <span lang="it">tra cinque minuti</span> です。',
      ],
    },
  },

  'grammatica/a1/avverbi-di-frequenza.html': {
    after: 'mai',
    it: {
      h2: "Gli avverbi di frequenza: il confronto con l'inglese",
      intro:
        'In inglese l\'avverbio va <strong>prima</strong> del verbo: <em lang="en">I often go</em>. In italiano va <strong>dopo</strong>: <span lang="it">vado spesso</span>. E con <strong>mai</strong> l\'italiano usa due negazioni, dove l\'inglese ne usa una.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I often go to the cinema.', 'Vado spesso al cinema.'],
        ['I usually have dinner at eight.', 'Di solito ceno alle otto.'],
        ['I never smoke.', 'Non fumo mai.'],
        ["I've always lived in Milan.", 'Ho sempre abitato a Milano.'],
        ['Have you ever been to Rome?', 'Sei mai stato a Roma?'],
      ],
      points: [
        '<em lang="en">Never</em> diventa <strong>non … mai</strong>: <span lang="it">non fumo mai</span>. In inglese due negazioni sono un errore, in italiano sono obbligatorie.',
        '<em lang="en">Ever</em> nelle domande è <strong>mai</strong>, senza <span lang="it">non</span>: <span lang="it">Sei mai stato a Roma?</span>',
        'Con i tempi composti l\'avverbio sta tra ausiliare e participio, proprio come in inglese: <em lang="en">I have always lived</em> → <span lang="it">ho sempre abitato</span>.',
      ],
    },
    en: {
      h2: 'Adverbs of frequency compared with English',
      intro:
        'In English the adverb goes <strong>before</strong> the verb: <em>I often go</em>. In Italian it goes <strong>after</strong> it: <span lang="it">vado spesso</span>. And with <strong lang="it">mai</strong> Italian uses two negatives where English uses one.',
      th: ['English', 'Italian'],
      rows: [
        ['I often go to the cinema.', 'Vado spesso al cinema.'],
        ['I usually have dinner at eight.', 'Di solito ceno alle otto.'],
        ['I never smoke.', 'Non fumo mai.'],
        ["I've always lived in Milan.", 'Ho sempre abitato a Milano.'],
        ['Have you ever been to Rome?', 'Sei mai stato a Roma?'],
      ],
      points: [
        '<em>Never</em> becomes <strong lang="it">non … mai</strong>: <span lang="it">non fumo mai</span>. A double negative is a mistake in English, but compulsory in Italian.',
        '<em>Ever</em> in questions is <strong lang="it">mai</strong>, without <span lang="it">non</span>: <span lang="it">Sei mai stato a Roma?</span>',
        'With compound tenses the adverb sits between the auxiliary and the participle, just like in English: <em>I have always lived</em> → <span lang="it">ho sempre abitato</span>.',
      ],
    },
    es: {
      h2: 'Los adverbios de frecuencia comparados con el español',
      intro:
        'Muchos adverbios son casi iguales: <em>siempre</em> → <strong lang="it">sempre</strong>, <em>a veces</em> → <strong lang="it">a volte</strong>. Las diferencias están en el lugar del adverbio y en <em>nunca</em>.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Siempre desayuno.', 'Faccio sempre colazione.'],
        ['Nunca fumo. / No fumo nunca.', 'Non fumo mai.'],
        ['Casi nunca salgo por la noche.', 'Non esco quasi mai la sera.'],
        ['Siempre he vivido en Milán.', 'Ho sempre abitato a Milano.'],
        ['¿Has estado alguna vez en Roma?', 'Sei mai stato a Roma?'],
      ],
      points: [
        'En español puedes decir <em>nunca fumo</em>. En italiano no: <span lang="it">mai</span> va después del verbo y <strong lang="it">non</strong> delante, como en <em>no fumo nunca</em>. <span lang="it">Mai fumo</span> suena raro.',
        'El español pone a menudo el adverbio delante (<em>siempre desayuno</em>); el italiano lo pone detrás del verbo: <span lang="it">faccio sempre colazione</span>. En los tiempos compuestos va entre el auxiliar y el participio: <span lang="it">ho sempre abitato</span>.',
        '<em>Alguna vez</em> en las preguntas se dice <strong lang="it">mai</strong>: <span lang="it">Sei mai stato a Roma?</span> No es negativo: aquí <span lang="it">mai</span> significa «alguna vez».',
      ],
    },
    pt: {
      h2: 'Os advérbios de frequência comparados com o português',
      intro:
        'Muitos advérbios são quase iguais: <em>sempre</em> → <strong lang="it">sempre</strong>, <em>às vezes</em> → <strong lang="it">a volte</strong>, <em>de vez em quando</em> → <strong lang="it">ogni tanto</strong>. As diferenças estão no lugar do advérbio e em <em>nunca</em>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Sempre tomo café da manhã.', 'Faccio sempre colazione.'],
        ['Nunca fumo.', 'Non fumo mai.'],
        ['Quase nunca saio à noite.', 'Non esco quasi mai la sera.'],
        ['Geralmente janto às oito.', 'Di solito ceno alle otto.'],
        ['Você já foi a Roma?', 'Sei mai stato a Roma?'],
      ],
      points: [
        '<em>Nunca</em> antes do verbo vira <strong lang="it">non</strong> antes do verbo e <strong lang="it">mai</strong> depois: <span lang="it">non fumo mai</span>. As duas negações são obrigatórias.',
        'Na pergunta <em>Você já foi…?</em>, o <em>já</em> não é <span lang="it">già</span>, é <strong lang="it">mai</strong>: <span lang="it">Sei mai stato a Roma?</span> <span lang="it">Sei già stato a Roma?</span> pergunta só se aconteceu antes de agora.',
        'O português põe muitas vezes o advérbio antes do verbo; o italiano, depois: <span lang="it">faccio sempre colazione</span>, <span lang="it">vado spesso al cinema</span>.',
      ],
    },
    fr: {
      h2: 'Les adverbes de fréquence comparés au français',
      intro:
        'Bonne nouvelle : la place de l\'adverbe est la même qu\'en français. <em>Je vais souvent au cinéma</em> → <span lang="it">Vado spesso al cinema</span> ; <em>j\'ai toujours habité</em> → <span lang="it">ho sempre abitato</span>. Et <em>ne … jamais</em> → <strong lang="it">non … mai</strong>.',
      th: ['Français', 'Italien'],
      rows: [
        ['Je vais souvent au cinéma.', 'Vado spesso al cinema.'],
        ['Je ne fume jamais.', 'Non fumo mai.'],
        ["J'ai toujours habité à Milan.", 'Ho sempre abitato a Milano.'],
        ['Vous êtes déjà allé à Rome ?', 'È mai stato a Roma?'],
        ['de temps en temps', 'ogni tanto'],
      ],
      points: [
        'À l\'oral, le français laisse souvent tomber le <em>ne</em> (<em>je fume jamais</em>). En italien, le <strong lang="it">non</strong> ne tombe jamais : <span lang="it">non fumo mai</span>.',
        'Dans les questions, <em>déjà</em> se traduit par <strong lang="it">mai</strong> : <span lang="it">Sei mai stato a Roma?</span> Avec <span lang="it">già</span> on demande seulement si c\'est déjà arrivé, sans l\'idée de « une fois dans la vie ».',
        '<em>D\'habitude</em> → <span lang="it">di solito</span>, <em>parfois</em> → <span lang="it">a volte</span>, <em>rarement</em> → <span lang="it">raramente</span> : ces trois-là peuvent aussi ouvrir la phrase, comme en français.',
      ],
    },
    cs: {
      h2: 'Příslovce frekvence ve srovnání s češtinou',
      intro:
        'Dobrá zpráva: dvojí zápor znáte. <em>Nikdy nekouřím</em> → <strong lang="it">Non fumo mai</strong>. Liší se hlavně místo příslovce: česky stojí před slovesem, italsky <strong>za ním</strong>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Často chodím do kina.', 'Vado spesso al cinema.'],
        ['Nikdy nekouřím.', 'Non fumo mai.'],
        ['Skoro nikdy nevycházím večer.', 'Non esco quasi mai la sera.'],
        ['Vždycky jsem bydlel v Miláně.', 'Ho sempre abitato a Milano.'],
        ['Byl jsi někdy v Římě?', 'Sei mai stato a Roma?'],
      ],
      points: [
        '<em>Nikdy</em> stojí česky před slovesem, italské <strong lang="it">mai</strong> za ním. Před sloveso patří <strong lang="it">non</strong>: <span lang="it">non fumo mai</span>.',
        'Česky <em>někdy</em> znamená „občas“ i „vůbec někdy“. Italsky jsou to dvě slova: <span lang="it">a volte</span> (občas) a <strong lang="it">mai</strong> v otázce (<span lang="it">Sei mai stato a Roma?</span>).',
        'V minulém čase stojí příslovce mezi pomocným slovesem a příčestím: <span lang="it">ho sempre abitato</span>, <span lang="it">non sono mai stato</span>.',
      ],
    },
    pl: {
      h2: 'Przysłówki częstotliwości w porównaniu z polskim',
      intro:
        'Dobra wiadomość: podwójne przeczenie znasz. <em>Nigdy nie palę</em> → <strong lang="it">Non fumo mai</strong>. Różni się głównie miejsce przysłówka: po polsku stoi przed czasownikiem, po włosku <strong>za nim</strong>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Często chodzę do kina.', 'Vado spesso al cinema.'],
        ['Nigdy nie palę.', 'Non fumo mai.'],
        ['Prawie nigdy nie wychodzę wieczorem.', 'Non esco quasi mai la sera.'],
        ['Zawsze mieszkałem w Mediolanie.', 'Ho sempre abitato a Milano.'],
        ['Byłeś kiedyś w Rzymie?', 'Sei mai stato a Roma?'],
      ],
      points: [
        '<em>Nigdy</em> stoi po polsku przed czasownikiem, włoskie <strong lang="it">mai</strong> za nim. Przed czasownik idzie <strong lang="it">non</strong>: <span lang="it">non fumo mai</span>.',
        '<em>Kiedyś</em> w pytaniu to <strong lang="it">mai</strong>: <span lang="it">Sei mai stato a Roma?</span> Tutaj <span lang="it">mai</span> nie jest przeczeniem.',
        'W czasie przeszłym przysłówek stoi między czasownikiem posiłkowym a imiesłowem: <span lang="it">ho sempre abitato</span>, <span lang="it">non sono mai stato</span>.',
      ],
    },
    tr: {
      h2: 'Sıklık zarfları: Türkçe ile karşılaştırma',
      intro:
        'Türkçede zarf fiilden önce gelir: <em>Sık sık sinemaya giderim</em>. İtalyancada fiilden <strong>sonra</strong> gelir: <span lang="it">Vado spesso al cinema</span>. <em>Hiç</em> ve olumsuz fiil ise İtalyancadaki <strong lang="it">non … mai</strong> ile aynı mantıktadır.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Sık sık sinemaya giderim.', 'Vado spesso al cinema.'],
        ['Genellikle saat sekizde akşam yemeği yerim.', 'Di solito ceno alle otto.'],
        ['Hiç sigara içmem.', 'Non fumo mai.'],
        ["Hep Milano'da yaşadım.", 'Ho sempre abitato a Milano.'],
        ["Hiç Roma'ya gittiniz mi?", 'È mai stato a Roma?'],
      ],
      points: [
        '<em>Hiç</em> → <strong lang="it">mai</strong>, fiildeki olumsuzluk eki <em>-me/-ma</em> → <strong lang="it">non</strong>: <em>Hiç içmem</em> → <span lang="it">non fumo mai</span>. Ama <span lang="it">non</span> fiilin önüne, <span lang="it">mai</span> arkasına gelir.',
        'Sorularda da <em>hiç</em> = <strong lang="it">mai</strong>: <span lang="it">Sei mai stato a Roma?</span> Burada <span lang="it">non</span> yoktur.',
        'Türkçedeki geniş zaman (<em>giderim</em>, <em>yerim</em>) alışkanlıkları anlatır; İtalyancada bunun için şimdiki zaman kullanılır: <span lang="it">vado</span>, <span lang="it">ceno</span>.',
      ],
    },
    de: {
      h2: 'Häufigkeitsadverbien im Vergleich zum Deutschen',
      intro:
        'Im Hauptsatz steht das Adverb wie im Deutschen nach dem Verb: <em>Ich gehe oft ins Kino</em> → <span lang="it">Vado spesso al cinema</span>. Der große Unterschied ist <em>nie</em>: Das Italienische braucht <strong>zwei</strong> Verneinungen.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich gehe oft ins Kino.', 'Vado spesso al cinema.'],
        ['Normalerweise esse ich um acht zu Abend.', 'Di solito ceno alle otto.'],
        ['Ich rauche nie.', 'Non fumo mai.'],
        ['Ich habe immer in Mailand gewohnt.', 'Ho sempre abitato a Milano.'],
        ['Warst du schon mal in Rom?', 'Sei mai stato a Roma?'],
      ],
      points: [
        '<em>Nie</em> wird zu <strong lang="it">non … mai</strong>: <span lang="it">non fumo mai</span>. Ohne <span lang="it">non</span> ist der Satz falsch.',
        '<em>Schon mal</em> heißt in der Frage <strong lang="it">mai</strong>: <span lang="it">Sei mai stato a Roma?</span> Hier ist <span lang="it">mai</span> keine Verneinung.',
        'Das Partizip steht nicht am Satzende: <em>Ich habe immer in Mailand gewohnt</em> → <span lang="it">ho sempre abitato a Milano</span>, mit dem Adverb zwischen Hilfsverb und Partizip.',
      ],
    },
    ja: {
      h2: '頻度の副詞と日本語の「よく・時々・全然」',
      intro:
        '日本語では副詞は動詞の前に来ます（<em>よく</em>映画館に行きます）。イタリア語では動詞の<strong>後ろ</strong>です。<span lang="it">Vado spesso al cinema.</span> 「全然〜ない」のように否定の動詞と組む形は、イタリア語の <strong lang="it">non … mai</strong> と同じ考え方です。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['よく映画館に行きます。', 'Vado spesso al cinema.'],
        ['たいてい八時に晩ご飯を食べます。', 'Di solito ceno alle otto.'],
        ['たばこは全然吸いません。', 'Non fumo mai.'],
        ['夜はめったに出かけません。', 'Non esco quasi mai la sera.'],
        ['ローマに行ったことがありますか。', 'Sei mai stato a Roma?'],
      ],
      points: [
        '否定は二か所に入ります。動詞の前に <strong lang="it">non</strong>、後ろに <strong lang="it">mai</strong>（全然・一度も）。<span lang="it">non fumo mai</span>。',
        '「〜したことがありますか」は <strong lang="it">mai</strong> を使って言えます。<span lang="it">Sei mai stato a Roma?</span> この <span lang="it">mai</span> は否定ではなく「一度でも」の意味です。',
        '「めったに〜ない」は <span lang="it">non … quasi mai</span>、「時々」は <span lang="it">a volte</span>、「たまに」は <span lang="it">ogni tanto</span> です。',
      ],
    },
  },

  'grammatica/b1/connettivi.html': {
    after: 'concludere',
    it: {
      h2: "I connettivi: il confronto con l'inglese",
      intro:
        'Molti connettivi hanno un equivalente diretto in inglese (<em lang="en">but</em> → <strong>ma</strong>, <em lang="en">so</em> → <strong>quindi</strong>). Le trappole sono tre: le parole con due significati, il congiuntivo dopo alcuni connettivi e i falsi amici.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ["It's expensive, but the food is great. / The food is great, though.", 'È caro, ma si mangia benissimo. / Si mangia benissimo, però.'],
        ["Since it's raining, we'll take the bus.", 'Siccome piove, prendiamo l\'autobus.'],
        ["I've been here since Monday.", 'Sono qui da lunedì.'],
        ["Although I'm tired, I'll finish the job.", 'Sebbene sia stanco, finisco il lavoro.'],
        ['Actually, I prefer tea.', 'In realtà preferisco il tè.'],
      ],
      points: [
        '<em lang="en">Since</em> ha due significati: causa (<span lang="it">siccome, visto che</span>) e tempo (<span lang="it">da, da quando</span>).',
        'Dopo <span lang="it">sebbene, benché, nonostante</span> ci vuole il congiuntivo (<span lang="it">sebbene sia</span>); dopo <span lang="it">anche se</span> l\'indicativo (<span lang="it">anche se sono stanco</span>). L\'inglese usa sempre la stessa forma.',
        'Falsi amici: <em lang="en">actually</em> = <span lang="it">in realtà</span> (<span lang="it">attualmente</span> = <em lang="en">currently</em>); <em lang="en">eventually</em> = <span lang="it">alla fine</span> (<span lang="it">eventualmente</span> = <em lang="en">if necessary</em>).',
      ],
    },
    en: {
      h2: 'Italian connectives compared with English',
      intro:
        'Many connectives have a direct English equivalent (<em>but</em> → <strong lang="it">ma</strong>, <em>so</em> → <strong lang="it">quindi</strong>). There are three traps: words with two meanings, the subjunctive after some connectives, and false friends.',
      th: ['English', 'Italian'],
      rows: [
        ["It's expensive, but the food is great. / The food is great, though.", 'È caro, ma si mangia benissimo. / Si mangia benissimo, però.'],
        ["Since it's raining, we'll take the bus.", 'Siccome piove, prendiamo l\'autobus.'],
        ["I've been here since Monday.", 'Sono qui da lunedì.'],
        ["Although I'm tired, I'll finish the job.", 'Sebbene sia stanco, finisco il lavoro.'],
        ['Actually, I prefer tea.', 'In realtà preferisco il tè.'],
      ],
      points: [
        '<em>Since</em> has two meanings: cause (<span lang="it">siccome, visto che</span>) and time (<span lang="it">da, da quando</span>).',
        'After <span lang="it">sebbene, benché, nonostante</span> Italian needs the subjunctive (<span lang="it">sebbene sia</span>); after <span lang="it">anche se</span>, the indicative (<span lang="it">anche se sono stanco</span>). English uses the same form for both.',
        'False friends: <em>actually</em> = <span lang="it">in realtà</span> (<span lang="it">attualmente</span> means “currently”); <em>eventually</em> = <span lang="it">alla fine</span> (<span lang="it">eventualmente</span> means “if necessary”).',
      ],
    },
    es: {
      h2: 'Los conectores comparados con el español',
      intro:
        'Muchos conectores se parecen: <em>pero</em> → <strong lang="it">ma, però</strong>, <em>mientras</em> → <strong lang="it">mentre</strong>, <em>sin embargo</em> → <strong lang="it">tuttavia</strong>, <em>además</em> → <strong lang="it">inoltre</strong>. Las trampas están en <em>aunque</em> y en algunas palabras que suenan igual y no lo son.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Salgo aunque llueva.', 'Esco anche se piove.'],
        ['Aunque esté cansado, termino el trabajo.', 'Sebbene sia stanco, finisco il lavoro.'],
        ['Ya que estás aquí, ¿me ayudas?', 'Visto che sei qui, mi aiuti?'],
        ['No es caro, sino barato.', 'Non è caro, ma economico.'],
        ['Luego vamos al cine.', 'Poi andiamo al cinema.'],
      ],
      points: [
        '<em>Aunque</em> admite subjuntivo, pero <strong lang="it">anche se</strong> va siempre con indicativo: <span lang="it">esco anche se piove</span>, nunca <span lang="it">anche se piova</span>. El subjuntivo va con <span lang="it">sebbene, benché, nonostante</span>.',
        '<strong lang="it">Poi</strong> no es <em>pues</em>: significa <em>luego, después</em>. Y <span lang="it">poiché</span> significa <em>ya que</em>.',
        '<em>No … sino</em> se dice <span lang="it">non … ma</span> (o <span lang="it">bensì</span>, más formal): <span lang="it">non è caro, ma economico</span>.',
      ],
    },
    pt: {
      h2: 'Os conectivos comparados com o português',
      intro:
        'Muitos conectivos se parecem: <em>mas</em> → <strong lang="it">ma</strong>, <em>porém</em> → <strong lang="it">però</strong>, <em>todavia</em> → <strong lang="it">tuttavia</strong>, <em>por isso</em> → <strong lang="it">perciò</strong>, <em>enquanto</em> → <strong lang="it">mentre</strong>. As armadilhas estão em <em>mesmo que</em> e em <em>pois</em>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['É caro, porém se come muito bem.', 'È caro, però si mangia benissimo.'],
        ['Saio mesmo que chova.', 'Esco anche se piove.'],
        ['Embora esteja cansado, termino o trabalho.', 'Sebbene sia stanco, finisco il lavoro.'],
        ['Já que você está aqui, me ajuda?', 'Visto che sei qui, mi aiuti?'],
        ['Depois vamos ao cinema.', 'Poi andiamo al cinema.'],
      ],
      points: [
        '<em>Embora</em> funciona como <strong lang="it">sebbene / benché</strong>: os dois pedem o subjuntivo (<span lang="it">sebbene sia stanco</span>).',
        '<em>Mesmo que</em> pede o subjuntivo, mas <strong lang="it">anche se</strong> vai sempre com o indicativo: <span lang="it">esco anche se piove</span>, nunca <span lang="it">anche se piova</span>.',
        '<em>Pois</em> (porque) é <span lang="it">perché</span> ou <span lang="it">poiché</span>; e <strong lang="it">poi</strong> não é <em>pois</em>: quer dizer <em>depois</em>.',
      ],
    },
    fr: {
      h2: 'Les connecteurs comparés au français',
      intro:
        'Bonne nouvelle : les modes sont les mêmes qu\'en français. <em>Bien que</em> + subjonctif → <strong lang="it">sebbene</strong> + congiuntivo ; <em>même si</em> + indicatif → <strong lang="it">anche se</strong> + indicativo. Le piège principal est un faux ami.',
      th: ['Français', 'Italien'],
      rows: [
        ["Je sors même s'il pleut.", 'Esco anche se piove.'],
        ['Bien que je sois fatigué, je finis le travail.', 'Sebbene sia stanco, finisco il lavoro.'],
        ["Puisque vous êtes là, vous m'aidez ?", 'Visto che è qui, mi aiuta?'],
        ['Je suis fatigué, donc je vais me coucher.', 'Sono stanco, quindi vado a letto.'],
        ['Pourtant, ça coûte trop cher.', 'Eppure costa troppo.'],
      ],
      points: [
        'Faux ami : <strong lang="it">pertanto</strong> ne veut pas dire <em>pourtant</em>, mais <em>donc, par conséquent</em>. <em>Pourtant</em> se dit <span lang="it">eppure</span> ou <span lang="it">tuttavia</span>.',
        '<em>Car</em> n\'a pas d\'équivalent direct : on dit <span lang="it">perché</span> ou, à l\'écrit, <span lang="it">poiché</span>.',
        '<em>Pendant que</em> et <em>tandis que</em> se disent tous les deux <span lang="it">mentre</span>. Et <span lang="it">però</span>, comme <em>pourtant</em>, peut se placer en fin de phrase : <span lang="it">è caro, è buono però</span>.',
      ],
    },
    cs: {
      h2: 'Spojky ve srovnání s češtinou',
      intro:
        'Mnoho spojek má přímý protějšek: <em>ale</em> → <strong lang="it">ma</strong>, <em>protože</em> → <strong lang="it">perché</strong>, <em>takže</em> → <strong lang="it">quindi</strong>, <em>zatímco</em> → <strong lang="it">mentre</strong>. Rozdíl je v tom, že po některých spojkách italština potřebuje <strong>konjunktiv</strong>, který čeština nemá.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Zůstávám doma, protože jsem unavený.', 'Resto a casa perché sono stanco.'],
        ['Přestože jsem unavený, dodělám práci.', 'Sebbene sia stanco, finisco il lavoro.'],
        ['Když prší, zůstávám doma.', 'Quando piove, resto a casa.'],
        ['Jestli bude pršet, zůstanu doma.', 'Se piove, resto a casa.'],
        ['Mluvím pomalu, abys mi rozuměl.', 'Parlo piano perché tu mi capisca.'],
      ],
      points: [
        '<em>Přestože, i když</em> mají v italštině dvě podoby: <span lang="it">anche se</span> + indikativ (<span lang="it">anche se sono stanco</span>) nebo <span lang="it">sebbene, benché, nonostante</span> + konjunktiv (<span lang="it">sebbene sia stanco</span>).',
        'Česky <em>když</em> znamená „kdy“ i „jestli“. Italsky jsou to dvě slova: <span lang="it">quando</span> (čas) a <span lang="it">se</span> (podmínka).',
        '<em>Aby</em> se překládá <span lang="it">perché</span> nebo <span lang="it">affinché</span> + konjunktiv: <span lang="it">perché tu mi capisca</span>.',
      ],
    },
    pl: {
      h2: 'Spójniki w porównaniu z polskim',
      intro:
        'Wiele spójników ma bezpośredni odpowiednik: <em>ale</em> → <strong lang="it">ma</strong>, <em>bo, ponieważ</em> → <strong lang="it">perché</strong>, <em>więc</em> → <strong lang="it">quindi</strong>, <em>jednak</em> → <strong lang="it">però, tuttavia</strong>. Różnica: po niektórych spójnikach włoski wymaga <strong>trybu łączącego</strong> (congiuntivo).',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Zostaję w domu, bo jestem zmęczony.', 'Resto a casa perché sono stanco.'],
        ['Chociaż jestem zmęczony, kończę pracę.', 'Sebbene sia stanco, finisco il lavoro.'],
        ['Jestem zmęczony, więc idę spać.', 'Sono stanco, quindi vado a letto.'],
        ['Ja piję herbatę, a Marek kawę.', 'Io prendo il tè, Marco invece il caffè.'],
        ['Mówię powoli, żebyś mnie rozumiał.', 'Parlo piano perché tu mi capisca.'],
      ],
      points: [
        'Polskie <em>a</em> (<em>ja herbatę, a Marek kawę</em>) to po włosku <span lang="it">invece</span> albo <span lang="it">mentre</span>. Włoskie <span lang="it">a</span> jest tylko przyimkiem.',
        '<em>Chociaż, mimo że</em> mają dwie formy: <span lang="it">anche se</span> + indicativo (<span lang="it">anche se sono stanco</span>) albo <span lang="it">sebbene, benché, nonostante</span> + congiuntivo (<span lang="it">sebbene sia stanco</span>).',
        '<em>Żeby</em> to <span lang="it">perché</span> albo <span lang="it">affinché</span> + congiuntivo: <span lang="it">perché tu mi capisca</span>. Gdy podmiot jest ten sam, wystarczy <span lang="it">per</span> + bezokolicznik: <span lang="it">studio per imparare</span>.',
      ],
    },
    tr: {
      h2: 'Bağlaçlar: Türkçe ile karşılaştırma',
      intro:
        'Türkçede yan cümleler çoğu zaman bir ekle kurulur ve ek cümlenin sonuna gelir: <em>yorgun olduğum için</em>, <em>yorgun olmama rağmen</em>, <em>yemek yerken</em>. İtalyancada ise yan cümlenin <strong>başına</strong> bir bağlaç gelir: <strong lang="it">perché</strong>, <strong lang="it">sebbene</strong>, <strong lang="it">mentre</strong>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Yorgun olduğum için evde kalıyorum.', 'Resto a casa perché sono stanco.'],
        ['Yorgun olmama rağmen işi bitiriyorum.', 'Sebbene sia stanco, finisco il lavoro.'],
        ['Yorgunum, bu yüzden yatıyorum.', 'Sono stanco, quindi vado a letto.'],
        ['Yemek yerken televizyon izlerim.', 'Guardo la televisione mentre mangio.'],
        ["İtalyanca öğrenmek için İtalya'ya gidiyorum.", "Vado in Italia per imparare l'italiano."],
      ],
      points: [
        '<em>-diği için</em> → <strong lang="it">perché</strong>, ana cümleden sonra: <span lang="it">resto a casa perché sono stanco</span>. Sebebi başa koymak isterseniz <span lang="it">siccome</span> kullanılır: <span lang="it">siccome sono stanco, resto a casa</span>.',
        '<em>-e rağmen</em> → <span lang="it">sebbene, benché, nonostante</span> + congiuntivo (<span lang="it">sebbene sia stanco</span>) ya da <span lang="it">anche se</span> + indicativo (<span lang="it">anche se sono stanco</span>).',
        '<em>-ken</em> → <span lang="it">mentre</span> + çekimli fiil (<span lang="it">mentre mangio</span>); <em>-mek için</em> → <span lang="it">per</span> + mastar (<span lang="it">per imparare</span>).',
      ],
    },
    de: {
      h2: 'Konnektoren im Vergleich zum Deutschen',
      intro:
        'Die gute Nachricht: Im Italienischen wandert das Verb nach einem Konnektor <strong>nicht ans Ende</strong>. <em>…, weil ich müde bin</em> → <span lang="it">…, perché sono stanco</span>. Und nach <em>deshalb</em> gibt es keine Umstellung: <span lang="it">quindi vado a letto</span>.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich bleibe zu Hause, weil ich müde bin.', 'Resto a casa perché sono stanco.'],
        ['Obwohl ich müde bin, mache ich die Arbeit fertig.', 'Sebbene sia stanco, finisco il lavoro.'],
        ['Da es regnet, nehmen wir den Bus.', "Siccome piove, prendiamo l'autobus."],
        ['Ich bin müde, also gehe ich ins Bett.', 'Sono stanco, quindi vado a letto.'],
        ['Ich trinke Tee, mein Bruder dagegen Kaffee.', 'Io prendo il tè, mio fratello invece il caffè.'],
      ],
      points: [
        'Falscher Freund: <em>also</em> heißt <strong lang="it">quindi</strong>, nicht <span lang="it">anche</span>. <span lang="it">Anche</span> ist <em>auch</em>.',
        '<em>Obwohl</em> hat zwei Entsprechungen: <span lang="it">sebbene, benché, nonostante</span> + Konjunktiv (<span lang="it">sebbene sia stanco</span>) oder <span lang="it">anche se</span> + Indikativ (<span lang="it">anche se sono stanco</span>).',
        '<em>Aber</em> und <em>sondern</em> sind beide <span lang="it">ma</span>: <span lang="it">non è caro, ma economico</span>. <em>Während</em> ist <span lang="it">mentre</span>, für die Zeit wie für den Gegensatz.',
      ],
    },
    ja: {
      h2: 'つなぎの言葉と日本語の「から・けど・ても」',
      intro:
        '日本語では「から」「けど」「ても」が節の<em>終わり</em>に付きます。イタリア語の接続詞は節の<strong>始め</strong>に来ます。<span lang="it">perché sono stanco</span>（疲れているから）。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['疲れているので、家にいます。', 'Siccome sono stanco, resto a casa.'],
        ['疲れているから家にいます。', 'Resto a casa perché sono stanco.'],
        ['雨が降っても出かけます。', 'Esco anche se piove.'],
        ['疲れているけれど、仕事を終わらせます。', 'Sono stanco, ma finisco il lavoro.'],
        ['食べながらテレビを見ます。', 'Guardo la televisione mentre mangio.'],
      ],
      points: [
        '理由を先に言うときは <strong lang="it">siccome</strong>、後ろに言うときは <strong lang="it">perché</strong> を使います。<span lang="it">Perché sono stanco, resto a casa</span> とは普通言いません。',
        '「〜ても」は <span lang="it">anche se</span> + 直説法（<span lang="it">anche se piove</span>）。「〜のに」に近い <span lang="it">sebbene, benché</span> のあとは接続法です（<span lang="it">sebbene sia stanco</span>）。',
        '「〜ながら」は <span lang="it">mentre</span> + 活用した動詞です。<span lang="it">mentre mangio</span>（不定詞の <span lang="it">mangiare</span> ではありません）。',
      ],
    },
  },

  'grammatica/a1/verbi-riflessivi.html': {
    after: 'giornata',
    it: {
      h2: "I verbi riflessivi: il confronto con l'inglese",
      intro:
        'L\'inglese usa <em lang="en">myself</em> solo di rado: <em lang="en">I get up, I wake up, I get dressed</em>. In italiano questi verbi sono riflessivi e il pronome non si può togliere: <strong>mi alzo, mi sveglio, mi vesto</strong>.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I wake up and get up at seven.', 'Mi sveglio e mi alzo alle sette.'],
        ['I get dressed and sit down.', 'Mi vesto e mi siedo.'],
        ['I wash my hands.', 'Mi lavo le mani.'],
        ['My name is Anna.', 'Mi chiamo Anna.'],
        ['I got up late.', 'Mi sono alzato tardi.'],
      ],
      points: [
        'Dove l\'inglese usa <em lang="en">get</em> + aggettivo o un verbo con particella (<em lang="en">get up, get dressed, fall asleep</em>), l\'italiano usa spesso un verbo riflessivo: <span lang="it">alzarsi, vestirsi, addormentarsi</span>.',
        '<em lang="en">My hands, my teeth</em>: in italiano niente possessivo, basta il pronome. <span lang="it">Mi lavo i denti</span>, non <span lang="it">lavo i miei denti</span>.',
        'Al passato l\'ausiliare è <strong>essere</strong> e il participio si accorda: <span lang="it">mi sono alzato</span> (lui), <span lang="it">mi sono alzata</span> (lei).',
      ],
    },
    en: {
      h2: 'Reflexive verbs compared with English',
      intro:
        'English rarely uses <em>myself</em>: <em>I get up, I wake up, I get dressed</em>. In Italian these verbs are reflexive and the pronoun can\'t be left out: <strong lang="it">mi alzo, mi sveglio, mi vesto</strong>.',
      th: ['English', 'Italian'],
      rows: [
        ['I wake up and get up at seven.', 'Mi sveglio e mi alzo alle sette.'],
        ['I get dressed and sit down.', 'Mi vesto e mi siedo.'],
        ['I wash my hands.', 'Mi lavo le mani.'],
        ['My name is Anna.', 'Mi chiamo Anna.'],
        ['I got up late.', 'Mi sono alzato tardi.'],
      ],
      points: [
        'Where English uses <em>get</em> + adjective or a phrasal verb (<em>get up, get dressed, fall asleep</em>), Italian often uses a reflexive verb: <span lang="it">alzarsi, vestirsi, addormentarsi</span>.',
        '<em>My hands, my teeth</em>: Italian drops the possessive, the pronoun is enough. <span lang="it">Mi lavo i denti</span>, not <span lang="it">lavo i miei denti</span>.',
        'In the past the auxiliary is <strong lang="it">essere</strong> and the participle agrees: <span lang="it">mi sono alzato</span> (he), <span lang="it">mi sono alzata</span> (she).',
      ],
    },
    es: {
      h2: 'Los verbos reflexivos comparados con el español',
      intro:
        'Aquí el español ayuda mucho: <em>me levanto</em> → <strong lang="it">mi alzo</strong>, <em>me llamo</em> → <strong lang="it">mi chiamo</strong>, <em>me lavo las manos</em> → <strong lang="it">mi lavo le mani</strong>. Las diferencias están en el pasado y en algunos verbos.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Me levanto a las siete.', 'Mi alzo alle sette.'],
        ['Me lavo las manos.', 'Mi lavo le mani.'],
        ['Me he levantado tarde.', 'Mi sono alzato tardi.'],
        ['Me quedo en casa.', 'Resto a casa.'],
        ['Me voy.', 'Me ne vado.'],
      ],
      points: [
        'En el pasado, el español usa <em>haber</em>; el italiano, <strong lang="it">essere</strong>, y el participio concuerda: <span lang="it">mi sono alzato</span>, <span lang="it">mi sono alzata</span>, <span lang="it">ci siamo alzati</span>.',
        'No todos los verbos coinciden: <em>quedarse</em> → <span lang="it">restare</span> (sin pronombre), <em>irse</em> → <span lang="it">andarsene</span> o <span lang="it">andare via</span>.',
        'Lo demás es igual que en español, también sin posesivo con el cuerpo: <span lang="it">mi lavo i denti</span>, como <em>me lavo los dientes</em>.',
      ],
    },
    pt: {
      h2: 'Os verbos reflexivos comparados com o português',
      intro:
        'No Brasil o pronome muitas vezes cai: <em>eu levanto às sete</em>, <em>sentei no sofá</em>. Em italiano o pronome é obrigatório e vem antes do verbo: <strong lang="it">mi alzo</strong>, <strong lang="it">mi sono seduto</strong>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Eu levanto às sete.', 'Mi alzo alle sette.'],
        ['Me chamo Ana.', 'Mi chiamo Anna.'],
        ['Lavo as mãos.', 'Mi lavo le mani.'],
        ['Sentei no sofá.', 'Mi sono seduto sul divano.'],
        ['A gente se vê amanhã.', 'Ci vediamo domani.'],
      ],
      points: [
        'Não tire o pronome: <span lang="it">alzo alle sette</span> está errado, é <strong lang="it">mi alzo</strong>. O mesmo com <span lang="it">mi siedo</span>, <span lang="it">mi sveglio</span>, <span lang="it">mi lavo le mani</span>.',
        'No passado o auxiliar é <strong lang="it">essere</strong> e o particípio concorda: <span lang="it">mi sono alzato</span> (ele), <span lang="it">mi sono alzata</span> (ela).',
        'O <em>se</em> recíproco funciona igual: <em>a gente se vê</em> → <span lang="it">ci vediamo</span>, <em>eles se conhecem</em> → <span lang="it">si conoscono</span>.',
      ],
    },
    fr: {
      h2: 'Les verbes pronominaux comparés au français',
      intro:
        'Bonne nouvelle : le système est presque le même qu\'en français. <em>Je me lève</em> → <strong lang="it">mi alzo</strong>, <em>je me suis levé(e)</em> → <strong lang="it">mi sono alzato / alzata</strong>, avec <em>être</em> et l\'accord, comme en français.',
      th: ['Français', 'Italien'],
      rows: [
        ['Je me lève à sept heures.', 'Mi alzo alle sette.'],
        ['Je me lave les mains.', 'Mi lavo le mani.'],
        ['Elle s\'est levée tard.', 'Si è alzata tardi.'],
        ['Je me promène.', 'Faccio una passeggiata.'],
        ['Je m\'en vais.', 'Me ne vado.'],
      ],
      points: [
        'Attention à la forme du pronom : <em>me, te, se, nous, vous, se</em> → <span lang="it">mi, ti, si, ci, vi, si</span>. <em>Nous nous levons</em> → <span lang="it">ci alziamo</span>.',
        'Quelques verbes ne correspondent pas : <em>se promener</em> → <span lang="it">fare una passeggiata</span> ou <span lang="it">passeggiare</span>, <em>se taire</em> → <span lang="it">stare zitto</span>.',
        'Comme en français, pas de possessif avec le corps : <span lang="it">mi lavo i denti</span>.',
      ],
    },
    cs: {
      h2: 'Zvratná slovesa ve srovnání s češtinou',
      intro:
        'Čeština má pro všechny osoby jedno <em>se</em>: <em>myju se, myješ se, myjeme se</em>. Italština zájmeno mění podle osoby a dává ho <strong>před sloveso</strong>: <span lang="it">mi lavo, ti lavi, ci laviamo</span>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Vstávám v sedm.', 'Mi alzo alle sette.'],
        ['Jmenuji se Anna.', 'Mi chiamo Anna.'],
        ['Myju si ruce.', 'Mi lavo le mani.'],
        ['Umyl jsem se.', 'Mi sono lavato.'],
        ['Učím se italsky.', "Studio l'italiano."],
      ],
      points: [
        '<em>Se</em> → <span lang="it">mi, ti, si, ci, vi, si</span> podle osoby: <em>oblékáme se</em> → <span lang="it">ci vestiamo</span>.',
        'Některá slovesa jsou zvratná jen česky: <em>učit se</em> → <span lang="it">studiare, imparare</span>, <em>smát se</em> → <span lang="it">ridere</span>, <em>bát se</em> → <span lang="it">avere paura</span>. A naopak: <em>vstávat</em> → <span lang="it">alzarsi</span>, <em>usnout</em> → <span lang="it">addormentarsi</span>.',
        'V minulém čase se používá <strong lang="it">essere</strong> a příčestí se shoduje: <span lang="it">mi sono lavato</span> (muž), <span lang="it">mi sono lavata</span> (žena).',
      ],
    },
    pl: {
      h2: 'Czasowniki zwrotne w porównaniu z polskim',
      intro:
        'Po polsku masz jedno <em>się</em> dla wszystkich osób: <em>myję się, myjesz się, myjemy się</em>. Po włosku zaimek zmienia się z osobą i stoi <strong>przed czasownikiem</strong>: <span lang="it">mi lavo, ti lavi, ci laviamo</span>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Wstaję o siódmej.', 'Mi alzo alle sette.'],
        ['Nazywam się Anna.', 'Mi chiamo Anna.'],
        ['Myję ręce.', 'Mi lavo le mani.'],
        ['Umyłem się.', 'Mi sono lavato.'],
        ['Uczę się włoskiego.', "Studio l'italiano."],
      ],
      points: [
        '<em>Się</em> → <span lang="it">mi, ti, si, ci, vi, si</span> zależnie od osoby: <em>ubieramy się</em> → <span lang="it">ci vestiamo</span>.',
        'Niektóre czasowniki są zwrotne tylko po polsku: <em>uczyć się</em> → <span lang="it">studiare, imparare</span>, <em>śmiać się</em> → <span lang="it">ridere</span>, <em>bać się</em> → <span lang="it">avere paura</span>. I odwrotnie: <em>wstawać</em> → <span lang="it">alzarsi</span>, <em>myć ręce</em> → <span lang="it">lavarsi le mani</span>.',
        'W czasie przeszłym używa się <strong lang="it">essere</strong>, a imiesłów zgadza się z osobą: <span lang="it">mi sono lavato</span> (on), <span lang="it">mi sono lavata</span> (ona).',
      ],
    },
    tr: {
      h2: 'Dönüşlü fiiller: Türkçe ile karşılaştırma',
      intro:
        'Türkçede dönüşlülük bir ekle gösterilir (<em>yıkamak → yıkanmak</em>, <em>giymek → giyinmek</em>) ve günlük fiillerin çoğu dönüşlü değildir. İtalyancada fiilin önüne bir zamir gelir: <strong lang="it">mi alzo</strong> (kalkıyorum), <strong lang="it">mi sveglio</strong> (uyanıyorum).',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Yedide uyanıp kalkıyorum.', 'Mi sveglio e mi alzo alle sette.'],
        ['Giyiniyorum.', 'Mi vesto.'],
        ['Ellerimi yıkıyorum.', 'Mi lavo le mani.'],
        ['Adım Anna.', 'Mi chiamo Anna.'],
        ['Geç kalktım.', 'Mi sono alzato tardi.'],
      ],
      points: [
        '<em>Kalkmak, uyanmak, oturmak, uyumak</em> Türkçede dönüşlü değildir, İtalyancada dönüşlüdür: <span lang="it">alzarsi, svegliarsi, sedersi, addormentarsi</span>.',
        'Vücut için iyelik eki kullanılmaz: <em>ellerimi</em> → <span lang="it">le mani</span>, zamir <span lang="it">mi</span> kimin elleri olduğunu söyler: <span lang="it">mi lavo le mani</span>.',
        'Geçmiş zamanda yardımcı fiil <strong lang="it">essere</strong>dir ve ortaç cinsiyete uyar: <span lang="it">mi sono alzato</span> (erkek), <span lang="it">mi sono alzata</span> (kadın).',
      ],
    },
    de: {
      h2: 'Reflexive Verben im Vergleich zum Deutschen',
      intro:
        'Reflexive Verben kennst du: <em>ich ziehe mich an</em> → <strong lang="it">mi vesto</strong>. Im Italienischen steht das Pronomen aber <strong>vor</strong> dem Verb, und viele Alltagsverben sind reflexiv, die es im Deutschen nicht sind.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich wache um sieben auf und stehe auf.', 'Mi sveglio alle sette e mi alzo.'],
        ['Ich ziehe mich an.', 'Mi vesto.'],
        ['Ich wasche mir die Hände.', 'Mi lavo le mani.'],
        ['Ich habe mich gewaschen.', 'Mi sono lavato.'],
        ['Wir heiraten im Mai.', 'Ci sposiamo a maggio.'],
      ],
      points: [
        'Im Perfekt <strong lang="it">essere</strong> statt <em>haben</em>, und das Partizip richtet sich nach der Person: <span lang="it">mi sono lavato</span> (Mann), <span lang="it">mi sono lavata</span> (Frau).',
        'Reflexiv nur im Italienischen: <em>aufstehen</em> → <span lang="it">alzarsi</span>, <em>aufwachen</em> → <span lang="it">svegliarsi</span>, <em>einschlafen</em> → <span lang="it">addormentarsi</span>, <em>heiraten</em> → <span lang="it">sposarsi</span>.',
        '<em>Ich wasche mir die Hände</em> funktioniert genau wie im Italienischen: Pronomen + Artikel, kein Possessiv. <span lang="it">Mi lavo le mani.</span>',
      ],
    },
    ja: {
      h2: '再帰動詞と日本語の比較',
      intro:
        '日本語には再帰動詞の形がありません。「起きる」「着る」「座る」はそのままです。イタリア語では、自分にする動作の多くに代名詞 <strong lang="it">mi, ti, si…</strong> を付けます。<span lang="it">mi alzo</span>（起きる）、<span lang="it">mi vesto</span>（服を着る）。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['七時に起きます。', 'Mi alzo alle sette.'],
        ['服を着ます。', 'Mi vesto.'],
        ['手を洗います。', 'Mi lavo le mani.'],
        ['アンナといいます。', 'Mi chiamo Anna.'],
        ['十二時ごろ寝ます。', 'Mi addormento verso mezzanotte.'],
      ],
      points: [
        '代名詞は主語に合わせて変わります。<span lang="it">mi alzo</span>（私）、<span lang="it">ti alzi</span>（君）、<span lang="it">si alza</span>（彼・彼女）。省略はできません。',
        '「手を洗う」に「私の」は要りません。<span lang="it">mi</span> が「自分の」を表します。<span lang="it">mi lavo le mani</span>。',
        '過去形（passato prossimo）では <strong lang="it">essere</strong> を使い、過去分詞は性と数に合わせます。<span lang="it">mi sono alzato</span>（男性）、<span lang="it">mi sono alzata</span>（女性）。',
      ],
    },
  },

  'grammatica/a2/passato-prossimo.html': {
    it: {
      h2: "Il passato prossimo: il confronto con l'inglese",
      intro:
        'L\'inglese ha due tempi, il <em lang="en">simple past</em> (<em lang="en">I went</em>) e il <em lang="en">present perfect</em> (<em lang="en">I have gone</em>). Nell\'italiano parlato tutti e due diventano quasi sempre <strong>passato prossimo</strong>. E l\'ausiliare non è sempre <em lang="en">have</em>: a volte è <strong>essere</strong>.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I went to Rome yesterday.', 'Ieri sono andato a Roma.'],
        ["I've already eaten.", 'Ho già mangiato.'],
        ['She arrived late.', 'È arrivata tardi.'],
        ['I was born in 1990.', 'Sono nato nel 1990.'],
        ["I've lived here for three years.", 'Abito qui da tre anni.'],
      ],
      points: [
        'Con <em lang="en">yesterday, last year, in 2019</em> l\'inglese vuole il <em lang="en">simple past</em>, l\'italiano parlato usa lo stesso il <strong>passato prossimo</strong>: <span lang="it">ieri sono andato</span>.',
        '<em lang="en">Have</em> è <strong>avere</strong> con la maggior parte dei verbi, ma <strong>essere</strong> con i verbi di movimento e di cambiamento (<span lang="it">andare, arrivare, nascere, diventare</span>) e con i riflessivi. Con <span lang="it">essere</span> il participio si accorda: <span lang="it">è arrivata</span>.',
        '<em lang="en">I\'ve lived here for three years</em>, se ci abiti ancora, è <strong>presente + da</strong>: <span lang="it">abito qui da tre anni</span>.',
      ],
    },
    en: {
      h2: 'The passato prossimo compared with English',
      intro:
        'English has two tenses, the simple past (<em>I went</em>) and the present perfect (<em>I have gone</em>). In spoken Italian both usually become the <strong lang="it">passato prossimo</strong>. And the auxiliary isn\'t always <em>have</em>: sometimes it\'s <strong lang="it">essere</strong> (to be).',
      th: ['English', 'Italian'],
      rows: [
        ['I went to Rome yesterday.', 'Ieri sono andato a Roma.'],
        ["I've already eaten.", 'Ho già mangiato.'],
        ['She arrived late.', 'È arrivata tardi.'],
        ['I was born in 1990.', 'Sono nato nel 1990.'],
        ["I've lived here for three years.", 'Abito qui da tre anni.'],
      ],
      points: [
        'With <em>yesterday, last year, in 2019</em> English needs the simple past; spoken Italian still uses the <strong lang="it">passato prossimo</strong>: <span lang="it">ieri sono andato</span>.',
        '<em>Have</em> is <strong lang="it">avere</strong> with most verbs, but <strong lang="it">essere</strong> with verbs of movement and change (<span lang="it">andare, arrivare, nascere, diventare</span>) and with reflexive verbs. With <span lang="it">essere</span> the participle agrees: <span lang="it">è arrivata</span>.',
        '<em>I\'ve lived here for three years</em>, if you still live there, is <strong>present tense + da</strong>: <span lang="it">abito qui da tre anni</span>.',
      ],
    },
    es: {
      h2: 'El passato prossimo comparado con el español',
      intro:
        'Se forma como el pretérito perfecto (<em>he comido</em> → <strong lang="it">ho mangiato</strong>), pero en la lengua hablada se usa mucho más: también donde el español usa el indefinido (<em>ayer fui</em> → <strong lang="it">ieri sono andato</strong>). Y el auxiliar no siempre es <em>haber</em>.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Ayer fui a Roma.', 'Ieri sono andato a Roma.'],
        ['Hoy he comido pasta.', 'Oggi ho mangiato la pasta.'],
        ['María ha llegado tarde.', 'Maria è arrivata tardi.'],
        ['He estado en Roma.', 'Sono stato a Roma.'],
        ['Vivo aquí desde hace tres años.', 'Abito qui da tre anni.'],
      ],
      points: [
        'El indefinido (<em>fui, comí, llegó</em>) se traduce casi siempre con el <strong lang="it">passato prossimo</strong> cuando hablas. El <span lang="it">passato remoto</span> existe, pero sobre todo en la lengua escrita.',
        '<em>Haber</em> → <strong lang="it">avere</strong> con la mayoría de los verbos, pero <strong lang="it">essere</strong> con los de movimiento y cambio, con los reflexivos y con <span lang="it">essere</span> mismo: <span lang="it">sono stato</span>.',
        'Con <span lang="it">essere</span> el participio concuerda, cosa que en español no pasa: <span lang="it">Maria è arrivata</span>, <span lang="it">siamo arrivati</span>.',
      ],
    },
    pt: {
      h2: 'O passato prossimo comparado com o português',
      intro:
        'O <strong lang="it">passato prossimo</strong> corresponde ao pretérito perfeito: <em>ontem fui</em> → <span lang="it">ieri sono andato</span>, <em>comi</em> → <span lang="it">ho mangiato</span>. A diferença é que em italiano ele tem duas partes: um auxiliar (<span lang="it">avere</span> ou <span lang="it">essere</span>) e o particípio.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Ontem fui a Roma.', 'Ieri sono andato a Roma.'],
        ['Comi uma pizza.', 'Ho mangiato una pizza.'],
        ['A Maria chegou tarde.', 'Maria è arrivata tardi.'],
        ['Já comi.', 'Ho già mangiato.'],
        ['Tenho estudado muito.', 'Ultimamente studio molto.'],
      ],
      points: [
        'Cuidado: <em>tenho estudado</em> não é <span lang="it">ho studiato</span>. O pretérito perfeito composto fala de algo que se repete até agora; em italiano: <span lang="it">ultimamente studio molto</span>. <span lang="it">Ho studiato</span> = <em>estudei</em>.',
        'O auxiliar é <strong lang="it">avere</strong> com a maioria dos verbos e <strong lang="it">essere</strong> com os de movimento e mudança (<span lang="it">andare, arrivare, nascere</span>), com os reflexivos e com <span lang="it">essere</span>: <span lang="it">sono stato</span>.',
        'Com <span lang="it">essere</span> o particípio concorda, como um adjetivo: <span lang="it">Maria è arrivata</span>, <span lang="it">siamo arrivati</span>.',
      ],
    },
    fr: {
      h2: 'Le passato prossimo comparé au français',
      intro:
        'Bonne nouvelle : le <strong lang="it">passato prossimo</strong> fonctionne presque comme le passé composé, avec deux auxiliaires et l\'accord avec <em>être</em>. <em>Je suis allée</em> → <span lang="it">sono andata</span>. Mais certains verbes changent d\'auxiliaire.',
      th: ['Français', 'Italien'],
      rows: [
        ['Je suis allé à Rome.', 'Sono andato a Roma.'],
        ["J'ai été malade.", 'Sono stato malato.'],
        ["Le film m'a plu.", 'Il film mi è piaciuto.'],
        ["J'ai réussi à finir.", 'Sono riuscito a finire.'],
        ['Ça a coûté cher.', 'È costato caro.'],
      ],
      points: [
        '<em>Être</em> se conjugue avec lui-même : <em>j\'ai été</em> → <strong lang="it">sono stato</strong>.',
        'Avec <em>avoir</em> en français mais <strong lang="it">essere</strong> en italien : <span lang="it">piacere</span> (<span lang="it">mi è piaciuto</span>), <span lang="it">riuscire</span>, <span lang="it">costare</span>, <span lang="it">durare</span>, et tous les verbes pronominaux comme en français.',
        'L\'accord se fait comme en français : <span lang="it">Maria è arrivata</span>, et avec <span lang="it">avere</span> seulement quand le complément <span lang="it">lo, la, li, le</span> est placé avant : <span lang="it">le ho viste</span>.',
      ],
    },
    cs: {
      h2: 'Passato prossimo ve srovnání s češtinou',
      intro:
        'Česká minulost má jedno pomocné sloveso (<em>byl jsem, šla jsem</em>) a koncovka se vždy shoduje s rodem. Italština má dvě pomocná slovesa, <strong lang="it">avere</strong> a <strong lang="it">essere</strong>, a shoda v rodě je jen u <span lang="it">essere</span>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Včera jsem jel do Říma.', 'Ieri sono andato a Roma.'],
        ['Marie přišla pozdě.', 'Maria è arrivata tardi.'],
        ['Marie snědla pizzu.', 'Maria ha mangiato la pizza.'],
        ['Přečetl jsem tu knihu.', 'Ho letto quel libro.'],
        ['Bydlím tady tři roky.', 'Abito qui da tre anni.'],
      ],
      points: [
        'České <em>jsem</em> v minulém čase není italské <span lang="it">sono</span>. Většina sloves má <strong lang="it">avere</strong>: <span lang="it">ho letto</span>, <span lang="it">ho mangiato</span>. <span lang="it">Essere</span> mají slovesa pohybu a změny a zvratná slovesa.',
        'Česky se mění koncovka vždy (<em>snědl / snědla</em>), italsky jen s <span lang="it">essere</span>: <span lang="it">Maria è arrivata</span>, ale <span lang="it">Maria ha mangiato</span>.',
        'Vid pomáhá: dokonavé sloveso (<em>přečetl</em>, ukončený děj) bývá <span lang="it">passato prossimo</span>; nedokonavé (<em>četl</em>, popis, zvyk) často <span lang="it">imperfetto</span>.',
      ],
    },
    pl: {
      h2: 'Passato prossimo w porównaniu z polskim',
      intro:
        'Polski czas przeszły to jedno słowo z końcówką osoby i rodzaju: <em>poszedłem, poszłam</em>. Włoski potrzebuje dwóch: czasownika posiłkowego (<strong lang="it">avere</strong> albo <strong lang="it">essere</strong>) i imiesłowu: <span lang="it">sono andato</span>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Wczoraj pojechałem do Rzymu.', 'Ieri sono andato a Roma.'],
        ['Maria przyszła późno.', 'Maria è arrivata tardi.'],
        ['Maria zjadła pizzę.', 'Maria ha mangiato la pizza.'],
        ['Przeczytałem tę książkę.', 'Ho letto quel libro.'],
        ['Mieszkam tu od trzech lat.', 'Abito qui da tre anni.'],
      ],
      points: [
        'Nie zapominaj o czasowniku posiłkowym: <em>poszedłem</em> → <span lang="it">sono andato</span>, nie <span lang="it">andato</span>. Większość czasowników ma <strong lang="it">avere</strong>, czasowniki ruchu, zmiany i zwrotne mają <strong lang="it">essere</strong>.',
        'Po polsku rodzaj widać zawsze (<em>zjadł / zjadła</em>), po włosku tylko z <span lang="it">essere</span>: <span lang="it">Maria è arrivata</span>, ale <span lang="it">Maria ha mangiato</span>.',
        'Aspekt pomaga: czasownik dokonany (<em>przeczytałem</em>) to zwykle <span lang="it">passato prossimo</span>, niedokonany (<em>czytałem</em>, opis, zwyczaj) często <span lang="it">imperfetto</span>.',
      ],
    },
    tr: {
      h2: 'Passato prossimo: Türkçe ile karşılaştırma',
      intro:
        'Türkçede geçmiş zaman tek kelimedir: <em>gittim, yedim</em>. İtalyancada iki parçadan oluşur: yardımcı fiil (<strong lang="it">avere</strong> ya da <strong lang="it">essere</strong>) ve ortaç: <span lang="it">sono andato</span>, <span lang="it">ho mangiato</span>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ["Dün Roma'ya gittim.", 'Ieri sono andato a Roma.'],
        ['Pizza yedim.', 'Ho mangiato la pizza.'],
        ['Maria geç geldi.', 'Maria è arrivata tardi.'],
        ['Bu kitabı okudum.', 'Ho letto questo libro.'],
        ['Üç yıldır burada oturuyorum.', 'Abito qui da tre anni.'],
      ],
      points: [
        'Fiillerin çoğu <strong lang="it">avere</strong> alır; hareket ve değişim bildiren fiiller (<span lang="it">andare, arrivare, nascere</span>) ve dönüşlü fiiller <strong lang="it">essere</strong> alır.',
        'Türkçede cinsiyet yoktur, ama <span lang="it">essere</span> ile ortaç cinsiyete ve sayıya uyar: <span lang="it">è arrivato</span> (erkek), <span lang="it">è arrivata</span> (kadın), <span lang="it">sono arrivati</span> (çoğul).',
        '<em>-dir</em> ile süren durum geçmiş zaman değildir: <em>üç yıldır oturuyorum</em> → <span lang="it">abito qui da tre anni</span>.',
      ],
    },
    de: {
      h2: 'Das passato prossimo im Vergleich zum Deutschen',
      intro:
        'Das <strong lang="it">passato prossimo</strong> ist das italienische Perfekt, mit zwei Hilfsverben wie im Deutschen: <span lang="it">avere</span> (haben) und <span lang="it">essere</span> (sein). Es wird auch genauso im Gespräch benutzt. Unterschiede gibt es bei der Wortstellung, bei einigen Hilfsverben und beim Partizip.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich bin nach Rom gefahren.', 'Sono andato a Roma.'],
        ['Ich habe gestern einen Film gesehen.', 'Ieri ho visto un film.'],
        ['Maria ist spät angekommen.', 'Maria è arrivata tardi.'],
        ['Ich habe mich gewaschen.', 'Mi sono lavato.'],
        ['Der Film hat mir gefallen.', 'Il film mi è piaciuto.'],
      ],
      points: [
        'Das Partizip steht nicht am Ende, sondern direkt nach dem Hilfsverb: <span lang="it">ieri ho visto un film</span>.',
        '<em>Haben</em> im Deutschen, aber <strong lang="it">essere</strong> im Italienischen: alle reflexiven Verben (<span lang="it">mi sono lavato</span>), <span lang="it">piacere</span>, <span lang="it">costare</span>, <span lang="it">durare</span>.',
        'Mit <span lang="it">essere</span> richtet sich das Partizip nach dem Subjekt: <span lang="it">Maria è arrivata</span>, <span lang="it">siamo arrivati</span>. Das deutsche Partizip bleibt immer gleich.',
      ],
    },
    ja: {
      h2: 'passato prossimo と日本語の「〜た」',
      intro:
        '日本語の過去形は「行った」「食べた」の一語です。イタリア語の <strong lang="it">passato prossimo</strong> は二つの部分からなります。助動詞（<span lang="it">avere</span> か <span lang="it">essere</span>）と過去分詞です。<span lang="it">sono andato</span>、<span lang="it">ho mangiato</span>。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['昨日ローマに行きました。', 'Ieri sono andato a Roma.'],
        ['ピザを食べました。', 'Ho mangiato la pizza.'],
        ['マリアさんは遅く着きました。', 'Maria è arrivata tardi.'],
        ['もう食べました。', 'Ho già mangiato.'],
        ['三年前からここに住んでいます。', 'Abito qui da tre anni.'],
      ],
      points: [
        '多くの動詞は <strong lang="it">avere</strong> を使い、移動や変化の動詞（<span lang="it">andare, arrivare, nascere</span>）と再帰動詞は <strong lang="it">essere</strong> を使います。',
        '<span lang="it">essere</span> を使うとき、過去分詞は主語の性と数に合わせます。<span lang="it">è arrivato</span>（男性）、<span lang="it">è arrivata</span>（女性）、<span lang="it">sono arrivati</span>（複数）。',
        '「〜しています」で今も続いていることは過去形ではありません。<span lang="it">abito qui da tre anni</span>（現在形 + <span lang="it">da</span>）。',
      ],
    },
  },

  'grammatica/b1/imperativo.html': {
    it: {
      h2: "L'imperativo: il confronto con l'inglese",
      intro:
        'In inglese l\'imperativo è uno solo, per una persona o per tante: <em lang="en">speak!</em> In italiano cambia: <strong>parla</strong> (tu), <strong>parlate</strong> (voi). E il negativo con <span lang="it">tu</span> non usa l\'imperativo, ma l\'infinito.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['Speak more slowly! (one person)', 'Parla più lentamente!'],
        ['Speak more slowly! (two or more)', 'Parlate più lentamente!'],
        ["Don't speak now!", 'Non parlare adesso!'],
        ['Take it!', 'Prendilo!'],
        ['Listen to me!', 'Ascoltami!'],
      ],
      points: [
        '<em lang="en">Don\'t</em> + verbo con <span lang="it">tu</span> è <strong>non + infinito</strong>: <span lang="it">non parlare, non prendere</span>. Con <span lang="it">voi</span> resta la forma normale: <span lang="it">non parlate</span>.',
        '<em lang="en">Take it, tell me</em>: il pronome si attacca alla fine del verbo, in una parola sola: <span lang="it">prendilo, dimmi</span>.',
        'Il tono lo danno la voce e <span lang="it">per favore</span>: l\'imperativo italiano non è scortese. <span lang="it">Entra, per favore</span> è un invito gentile.',
      ],
    },
    en: {
      h2: 'The imperative compared with English',
      intro:
        'English has one imperative for one person or many: <em>speak!</em> Italian has two: <strong lang="it">parla</strong> (one person, <span lang="it">tu</span>) and <strong lang="it">parlate</strong> (several, <span lang="it">voi</span>). And the negative with <span lang="it">tu</span> uses the infinitive, not the imperative.',
      th: ['English', 'Italian'],
      rows: [
        ['Speak more slowly! (one person)', 'Parla più lentamente!'],
        ['Speak more slowly! (two or more)', 'Parlate più lentamente!'],
        ["Don't speak now!", 'Non parlare adesso!'],
        ['Take it!', 'Prendilo!'],
        ['Listen to me!', 'Ascoltami!'],
      ],
      points: [
        '<em>Don\'t</em> + verb with <span lang="it">tu</span> is <strong lang="it">non + infinitive</strong>: <span lang="it">non parlare, non prendere</span>. With <span lang="it">voi</span> the normal form stays: <span lang="it">non parlate</span>.',
        '<em>Take it, tell me</em>: the pronoun is glued to the end of the verb, as one word: <span lang="it">prendilo, dimmi</span>.',
        'Tone comes from your voice and <span lang="it">per favore</span>: the Italian imperative isn\'t rude. <span lang="it">Entra, per favore</span> is a friendly invitation.',
      ],
    },
    es: {
      h2: 'El imperativo comparado con el español',
      intro:
        'El afirmativo se parece mucho: <em>habla</em> → <strong lang="it">parla</strong>, <em>tómalo</em> → <strong lang="it">prendilo</strong>, con el pronombre pegado al final como en español. La gran diferencia está en el negativo: el español usa el subjuntivo, el italiano no.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Habla más despacio.', 'Parla più lentamente.'],
        ['No hables ahora.', 'Non parlare adesso.'],
        ['Hablad más despacio.', 'Parlate più lentamente.'],
        ['No hagáis ruido.', 'Non fate rumore.'],
        ['Tómalo.', 'Prendilo.'],
      ],
      points: [
        '<em>No hables</em> → <strong lang="it">non parlare</strong>: con <span lang="it">tu</span>, el negativo es <span lang="it">non</span> + infinitivo. <span lang="it">Non parli</span> significa «él no habla» o es el imperativo de <span lang="it">Lei</span>.',
        'El <em>vosotros</em> afirmativo (<em>hablad</em>) es en italiano igual al presente: <strong lang="it">parlate</strong>. Y el negativo también: <em>no hagáis</em> → <span lang="it">non fate</span>.',
        'Con <span lang="it">tu</span>, los verbos en <span lang="it">-ere</span> e <span lang="it">-ire</span> terminan en <span lang="it">-i</span>: <em>toma, abre</em> → <span lang="it">prendi, apri</span>.',
      ],
    },
    pt: {
      h2: 'O imperativo comparado com o português',
      intro:
        'No Brasil se diz muitas vezes <em>fala mais devagar</em> e <em>não fala</em>. Em italiano o afirmativo é parecido (<strong lang="it">parla</strong>), mas o negativo com <span lang="it">tu</span> usa o infinitivo: <strong lang="it">non parlare</strong>. E o pronome vai no fim do verbo.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Fala mais devagar.', 'Parla più lentamente.'],
        ['Não fala agora. / Não fale agora.', 'Non parlare adesso.'],
        ['Falem mais devagar. (vocês)', 'Parlate più lentamente.'],
        ['Me escuta!', 'Ascoltami!'],
        ['Pega isso!', 'Prendilo!'],
      ],
      points: [
        'Nem <em>não fala</em> nem <em>não fale</em>: com <span lang="it">tu</span> o negativo é <strong lang="it">non</strong> + infinitivo: <span lang="it">non parlare, non prendere</span>.',
        'O pronome não vem antes, como em <em>me escuta</em>: vem colado no fim do verbo, numa palavra só. <span lang="it">Ascoltami, prendilo, dimmi</span>.',
        'Para <em>vocês</em> use a forma de <span lang="it">voi</span>, igual ao presente: <span lang="it">parlate, prendete, non parlate</span>.',
      ],
    },
    fr: {
      h2: "L'impératif comparé au français",
      intro:
        'L\'affirmatif ressemble au français : <em>parle</em> → <strong lang="it">parla</strong>, <em>parlez</em> (à plusieurs) → <strong lang="it">parlate</strong>. Mais le négatif avec <span lang="it">tu</span> ne se fait pas avec l\'impératif, et le pronom se colle au verbe sans trait d\'union.',
      th: ['Français', 'Italien'],
      rows: [
        ['Parle plus lentement.', 'Parla più lentamente.'],
        ['Ne parle pas maintenant.', 'Non parlare adesso.'],
        ['Parlez plus lentement. (à plusieurs)', 'Parlate più lentamente.'],
        ['Prends-le.', 'Prendilo.'],
        ['Ne le prends pas.', 'Non prenderlo. / Non lo prendere.'],
      ],
      points: [
        '<em>Ne parle pas</em> → <strong lang="it">non parlare</strong> : avec <span lang="it">tu</span>, le négatif est <span lang="it">non</span> + infinitif.',
        '<em>Prends-le</em> → <strong lang="it">prendilo</strong> : un seul mot, sans trait d\'union.',
        'Le <em>vous</em> de politesse n\'est pas <span lang="it">voi</span> mais <span lang="it">Lei</span> : à une seule personne qu\'on vouvoie, on dit <span lang="it">parli più lentamente</span>. <span lang="it">Parlate</span> s\'adresse à plusieurs personnes.',
      ],
    },
    cs: {
      h2: 'Rozkazovací způsob ve srovnání s češtinou',
      intro:
        'Kladný rozkaz je podobný: <em>mluv</em> → <strong lang="it">parla</strong>, <em>mluvte</em> (více lidem) → <strong lang="it">parlate</strong>. Zápor ale italština tvoří jinak: u <span lang="it">tu</span> používá <strong>infinitiv</strong>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Mluv pomaleji.', 'Parla più lentamente.'],
        ['Teď nemluv.', 'Non parlare adesso.'],
        ['Mluvte pomaleji. (více lidem)', 'Parlate più lentamente.'],
        ['Vezmi to.', 'Prendilo.'],
        ['Poslouchej mě.', 'Ascoltami.'],
      ],
      points: [
        '<em>Nemluv</em> → <strong lang="it">non parlare</strong>: <span lang="it">non</span> + infinitiv. S <span lang="it">voi</span> zůstává normální tvar: <span lang="it">non parlate</span>.',
        'Zájmeno se připojí na konec slovesa, jedním slovem: <em>vezmi to</em> → <span lang="it">prendilo</span>, <em>řekni mi</em> → <span lang="it">dimmi</span>.',
        'Vykání není <span lang="it">voi</span>, ale <span lang="it">Lei</span>: jednomu člověku, kterému vykáte, řeknete <span lang="it">parli più lentamente</span>.',
      ],
    },
    pl: {
      h2: 'Tryb rozkazujący w porównaniu z polskim',
      intro:
        'Twierdzący rozkaz jest podobny: <em>mów</em> → <strong lang="it">parla</strong>, <em>mówcie</em> → <strong lang="it">parlate</strong>. Przeczenie jest inne: przy <span lang="it">tu</span> używa się <strong>bezokolicznika</strong>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Mów wolniej.', 'Parla più lentamente.'],
        ['Nie mów teraz.', 'Non parlare adesso.'],
        ['Mówcie wolniej.', 'Parlate più lentamente.'],
        ['Weź to.', 'Prendilo.'],
        ['Proszę mówić wolniej.', 'Parli più lentamente, per favore.'],
      ],
      points: [
        '<em>Nie mów</em> → <strong lang="it">non parlare</strong>: <span lang="it">non</span> + bezokolicznik. Z <span lang="it">voi</span> zostaje zwykła forma: <span lang="it">non parlate</span>.',
        'Zaimek dokleja się na końcu czasownika, w jednym słowie: <em>weź to</em> → <span lang="it">prendilo</span>, <em>powiedz mi</em> → <span lang="it">dimmi</span>.',
        'Uprzejme <em>proszę mówić</em> to nie bezokolicznik, tylko forma <span lang="it">Lei</span>: <span lang="it">parli più lentamente</span>.',
      ],
    },
    tr: {
      h2: 'Emir kipi: Türkçe ile karşılaştırma',
      intro:
        'Türkçede <em>konuş</em>, <em>konuşma</em>, <em>konuşun</em> derken olumsuzluk bir ekle yapılır. İtalyancada <span lang="it">tu</span> için olumlu <strong lang="it">parla</strong>, olumsuz ise <strong lang="it">non + mastar</strong>: <span lang="it">non parlare</span>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Daha yavaş konuş.', 'Parla più lentamente.'],
        ['Şimdi konuşma.', 'Non parlare adesso.'],
        ['Daha yavaş konuşun. (birden fazla kişiye)', 'Parlate più lentamente.'],
        ['Daha yavaş konuşur musunuz? (kibar)', 'Parli più lentamente, per favore.'],
        ['Onu al.', 'Prendilo.'],
      ],
      points: [
        '<em>Konuşma</em> → <strong lang="it">non parlare</strong>: <span lang="it">non</span> + mastar. <span lang="it">Voi</span> ile normal biçim kalır: <span lang="it">non parlate</span>.',
        'Türkçede nesne önce gelir (<em>onu al</em>); İtalyancada zamir fiilin sonuna eklenir: <span lang="it">prendilo</span>, <span lang="it">dimmi</span>.',
        '<em>-in / -ın</em> eki hem çoğul hem kibar olabilir. İtalyancada çoğul için <span lang="it">parlate</span>, tek bir kişiye kibarca <span lang="it">parli</span> (<span lang="it">Lei</span>) denir.',
      ],
    },
    de: {
      h2: 'Der Imperativ im Vergleich zum Deutschen',
      intro:
        'Wie im Deutschen gibt es eine Form für eine Person und eine für mehrere: <em>sprich</em> → <strong lang="it">parla</strong>, <em>sprecht</em> → <strong lang="it">parlate</strong>. Anders sind die Verneinung mit <span lang="it">tu</span> und die Stellung der Pronomen.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Sprich langsamer!', 'Parla più lentamente!'],
        ['Sprich jetzt nicht!', 'Non parlare adesso!'],
        ['Sprecht langsamer!', 'Parlate più lentamente!'],
        ['Sprechen Sie langsamer!', 'Parli più lentamente!'],
        ['Nimm es!', 'Prendilo!'],
      ],
      points: [
        '<em>Sprich nicht</em> → <strong lang="it">non parlare</strong>: <span lang="it">non</span> steht vorne, danach der Infinitiv.',
        'Das Pronomen wird ans Verb angehängt, in einem Wort: <em>nimm es</em> → <span lang="it">prendilo</span>, <em>sag mir</em> → <span lang="it">dimmi</span>.',
        '<em>Sie</em> ist nicht <span lang="it">voi</span>, sondern <span lang="it">Lei</span>: <span lang="it">parli più lentamente</span>. <span lang="it">Parlate</span> heißt <em>sprecht</em>.',
      ],
    },
    ja: {
      h2: '命令法と日本語の「〜て・〜ないで」',
      intro:
        '日本語では「話して」「話さないで」「話してください」と言います。イタリア語の命令法はもっと直接的ですが、失礼ではありません。丁寧さは <span lang="it">per favore</span> と声の調子で表します。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['もっとゆっくり話して。', 'Parla più lentamente.'],
        ['今は話さないで。', 'Non parlare adesso.'],
        ['（みんな）もっとゆっくり話して。', 'Parlate più lentamente.'],
        ['もっとゆっくり話してください。', 'Parli più lentamente, per favore.'],
        ['それを取って。', 'Prendilo.'],
      ],
      points: [
        '「〜ないで」は <strong lang="it">non</strong> + 不定詞です。<span lang="it">non parlare</span>、<span lang="it">non prendere</span>。',
        '代名詞は動詞の最後にくっつけて一語にします。<span lang="it">prendilo</span>（それを取って）、<span lang="it">dimmi</span>（私に言って）。',
        '一人に言うときは <span lang="it">parla</span>、何人かに言うときは <span lang="it">parlate</span>。初対面の人には <span lang="it">Lei</span> の形 <span lang="it">parli</span> を使います。',
      ],
    },
  },

  'grammatica/a1/aggettivi-e-pronomi-possessivi.html': {
    it: {
      h2: "I possessivi: il confronto con l'inglese",
      intro:
        'Due differenze contano più di tutto. L\'italiano mette l\'<strong>articolo</strong> davanti al possessivo (<em lang="en">my book</em> → <span lang="it">il mio libro</span>). E <strong>suo / sua</strong> si accorda con la cosa posseduta, non con la persona: <em lang="en">his</em> e <em lang="en">her</em> sono la stessa parola.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['my book', 'il mio libro'],
        ['his sister / her sister', 'sua sorella'],
        ['his brother / her brother', 'suo fratello'],
        ['my mother / my brothers', 'mia madre / i miei fratelli'],
        ['a friend of mine', 'un mio amico'],
      ],
      points: [
        '<em lang="en">My, your, our</em> + nome vogliono quasi sempre l\'articolo: <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        '<em lang="en">His</em> o <em lang="en">her</em> non importa: conta il nome che segue. <span lang="it">Anna e suo fratello</span>, <span lang="it">Marco e sua sorella</span>.',
        'Eccezione: i nomi di famiglia al singolare non hanno articolo (<span lang="it">mia madre, tuo padre</span>), ma al plurale sì (<span lang="it">i miei fratelli</span>).',
      ],
    },
    en: {
      h2: 'Possessives compared with English',
      intro:
        'Two differences matter most. Italian puts the <strong>article</strong> before the possessive (<em>my book</em> → <span lang="it">il mio libro</span>). And <strong lang="it">suo / sua</strong> agrees with the thing owned, not with the owner: <em>his</em> and <em>her</em> are the same word.',
      th: ['English', 'Italian'],
      rows: [
        ['my book', 'il mio libro'],
        ['his sister / her sister', 'sua sorella'],
        ['his brother / her brother', 'suo fratello'],
        ['my mother / my brothers', 'mia madre / i miei fratelli'],
        ['a friend of mine', 'un mio amico'],
      ],
      points: [
        '<em>My, your, our</em> + noun almost always need the article: <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        '<em>His</em> or <em>her</em> doesn\'t matter: what counts is the noun that follows. <span lang="it">Anna e suo fratello</span> (Anna and her brother), <span lang="it">Marco e sua sorella</span> (Marco and his sister).',
        'Exception: singular family nouns take no article (<span lang="it">mia madre, tuo padre</span>), but plurals do (<span lang="it">i miei fratelli</span>).',
      ],
    },
    es: {
      h2: 'Los posesivos comparados con el español',
      intro:
        'En español <em>mi libro</em> va sin artículo; en italiano se dice <strong lang="it">il mio libro</strong>. Y el <em>su</em> español, que puede ser de él, de ella, de usted o de ellos, en italiano se divide: <strong lang="it">suo / sua</strong> (de él, de ella, de usted) y <strong lang="it">loro</strong> (de ellos).',
      th: ['Español', 'Italiano'],
      rows: [
        ['mi libro', 'il mio libro'],
        ['mis hermanos', 'i miei fratelli'],
        ['mi madre', 'mia madre'],
        ['su casa (de él / de ella)', 'la sua casa'],
        ['su casa (de ellos)', 'la loro casa'],
      ],
      points: [
        'Delante del nombre, el posesivo italiano lleva casi siempre artículo: <span lang="it">il mio libro, la tua casa, i nostri amici</span>. Es como decir <em>el libro mío</em>, pero con el posesivo delante.',
        'Excepción que coincide con el español: los familiares en singular van sin artículo (<span lang="it">mia madre, tuo padre</span>); en plural, con artículo (<span lang="it">i miei fratelli</span>).',
        '<span lang="it">Loro</span> no cambia nunca y siempre lleva artículo: <span lang="it">il loro libro, la loro casa, i loro figli</span>.',
      ],
    },
    pt: {
      h2: 'Os possessivos comparados com o português',
      intro:
        'No Brasil se diz <em>meu livro</em>, sem artigo; em italiano é <strong lang="it">il mio libro</strong>. E cuidado com <em>seu</em>: no Brasil quer dizer quase sempre <em>de você</em>, que em italiano é <strong lang="it">tuo</strong> (ou <span lang="it">Suo</span>, formal). <em>Dele / dela</em> é <strong lang="it">suo / sua</strong>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['meu livro', 'il mio libro'],
        ['seu livro (de você)', 'il tuo libro'],
        ['o livro dele / o livro dela', 'il suo libro'],
        ['minha mãe / meus irmãos', 'mia madre / i miei fratelli'],
        ['o livro deles', 'il loro libro'],
      ],
      points: [
        'O possessivo italiano leva quase sempre artigo: <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        '<em>Seu</em> (de você) → <span lang="it">tuo</span>; <em>dele</em> e <em>dela</em> → <span lang="it">suo / sua</span>, que concorda com a coisa possuída: <span lang="it">Anna e suo fratello</span>.',
        'Parentes no singular ficam sem artigo, como no Brasil: <span lang="it">mia madre, tuo padre</span>. No plural, com artigo: <span lang="it">i miei fratelli</span>.',
      ],
    },
    fr: {
      h2: 'Les possessifs comparés au français',
      intro:
        'Bonne nouvelle : <strong lang="it">suo / sua</strong> s\'accorde avec l\'objet possédé, exactement comme <em>son / sa</em>. La différence : l\'italien ajoute l\'<strong>article</strong>. <em>Mon livre</em> → <span lang="it">il mio libro</span>.',
      th: ['Français', 'Italien'],
      rows: [
        ['mon livre', 'il mio libro'],
        ['son frère / sa sœur', 'suo fratello / sua sorella'],
        ['mon amie', 'la mia amica'],
        ['ma mère / mes frères', 'mia madre / i miei fratelli'],
        ['leur maison', 'la loro casa'],
        ['un ami à moi', 'un mio amico'],
      ],
      points: [
        'Devant le nom, le possessif italien prend presque toujours l\'article : <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        '<em>Mon amie</em> (avec <em>mon</em> devant une voyelle) → <span lang="it">la mia amica</span> : en italien le féminin reste féminin.',
        'Exception : les noms de famille au singulier n\'ont pas d\'article (<span lang="it">mia madre</span>), mais au pluriel oui (<span lang="it">i miei fratelli</span>). <span lang="it">Loro</span> est invariable et prend toujours l\'article.',
      ],
    },
    cs: {
      h2: 'Přivlastňovací zájmena ve srovnání s češtinou',
      intro:
        'Čeština nemá členy, italština je dává i před přivlastňovací zájmeno: <em>moje kniha</em> → <strong lang="it">il mio libro</strong>. A <em>jeho / její</em> se v italštině neřídí majitelem, ale věcí: obojí je <strong lang="it">suo / sua</strong>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['moje kniha', 'il mio libro'],
        ['jeho sestra / její sestra', 'sua sorella'],
        ['jeho bratr / její bratr', 'suo fratello'],
        ['moje matka / moji bratři', 'mia madre / i miei fratelli'],
        ['Marek miluje svou ženu.', 'Marco ama sua moglie.'],
      ],
      points: [
        'Před podstatným jménem dejte skoro vždy člen: <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        '<em>Její bratr</em> je <span lang="it">suo fratello</span> (bratr je mužského rodu), <em>jeho sestra</em> je <span lang="it">sua sorella</span>. Rozhoduje rod věci, ne majitele.',
        '<em>Svůj</em> italština nemá: <em>svou ženu</em> → <span lang="it">sua moglie</span>, <em>svého syna</em> → <span lang="it">suo figlio</span>. Příbuzní v jednotném čísle jsou bez členu.',
      ],
    },
    pl: {
      h2: 'Zaimki dzierżawcze w porównaniu z polskim',
      intro:
        'Polski nie ma rodzajników, włoski dodaje je nawet przed zaimkiem: <em>moja książka</em> → <strong lang="it">il mio libro</strong>. A <em>jego / jej</em> zależy po włosku nie od właściciela, tylko od rzeczy: oba to <strong lang="it">suo / sua</strong>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['moja książka', 'il mio libro'],
        ['jego siostra / jej siostra', 'sua sorella'],
        ['jego brat / jej brat', 'suo fratello'],
        ['moja mama / moi bracia', 'mia madre / i miei fratelli'],
        ['Marek kocha swoją żonę.', 'Marco ama sua moglie.'],
      ],
      points: [
        'Przed rzeczownikiem prawie zawsze dajesz rodzajnik: <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        '<em>Jej brat</em> to <span lang="it">suo fratello</span> (brat jest rodzaju męskiego), <em>jego siostra</em> to <span lang="it">sua sorella</span>. Decyduje rodzaj rzeczy, nie właściciela.',
        '<em>Swój</em> nie istnieje: <em>swoją żonę</em> → <span lang="it">sua moglie</span>. Po polsku często pomijasz zaimek (<em>dzwonię do mamy</em>); po włosku lepiej go powiedzieć: <span lang="it">chiamo mia madre</span>.',
      ],
    },
    tr: {
      h2: 'İyelik sıfatları: Türkçe ile karşılaştırma',
      intro:
        'Türkçede iyelik bir ektir: <em>kitabım, kitabın, kitabı</em>. İtalyancada ismin önüne tanımlık ve iyelik sıfatı gelir: <strong lang="it">il mio libro</strong>. Türkçe <em>onun</em> gibi, <strong lang="it">suo</strong> da sahibin cinsiyetini göstermez.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['kitabım', 'il mio libro'],
        ['onun kitabı', 'il suo libro'],
        ['onun kız kardeşi', 'sua sorella'],
        ['annem / kardeşlerim', 'mia madre / i miei fratelli'],
        ['onların evi', 'la loro casa'],
      ],
      points: [
        'İsmin önüne genellikle tanımlık gelir: <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        'İyelik sıfatı, sahip olunan şeyin cinsiyetine ve sayısına uyar: <span lang="it">il mio libro</span> (eril), <span lang="it">la mia casa</span> (dişil), <span lang="it">i miei libri</span> (çoğul).',
        'Aile üyeleri tekilken tanımlıksızdır (<span lang="it">mia madre</span>), çoğulda tanımlıklıdır (<span lang="it">i miei fratelli</span>). <span lang="it">Loro</span> değişmez.',
      ],
    },
    de: {
      h2: 'Possessivbegleiter im Vergleich zum Deutschen',
      intro:
        'Im Italienischen steht vor dem Possessiv meist der <strong>Artikel</strong>: <em>mein Buch</em> → <span lang="it">il mio libro</span>. Und <em>sein</em> und <em>ihr</em> sind dasselbe Wort: <strong lang="it">suo / sua</strong> richtet sich nach dem Besitz, nicht nach dem Besitzer.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['mein Buch', 'il mio libro'],
        ['sein Bruder / ihr Bruder', 'suo fratello'],
        ['seine Schwester / ihre Schwester', 'sua sorella'],
        ['meine Mutter / meine Brüder', 'mia madre / i miei fratelli'],
        ['ein Freund von mir', 'un mio amico'],
      ],
      points: [
        'Vor dem Nomen fast immer mit Artikel: <span lang="it">il mio libro, la tua casa, i nostri amici</span>.',
        '<em>Ihr Bruder</em> (von Anna) ist <span lang="it">suo fratello</span>, weil <span lang="it">fratello</span> männlich ist. Ob der Besitzer Mann oder Frau ist, spielt keine Rolle.',
        'Familie im Singular ohne Artikel (<span lang="it">mia madre</span>), im Plural mit (<span lang="it">i miei fratelli</span>). Das höfliche <em>Ihr</em> ist <span lang="it">Suo</span>.',
      ],
    },
    ja: {
      h2: '所有形容詞と日本語の「〜の」',
      intro:
        '日本語は「私の本」と言うだけですが、イタリア語では冠詞も付けます。<strong lang="it">il mio libro</strong>。また、<strong lang="it">suo / sua</strong> は「彼の」も「彼女の」も表し、持ち主ではなく<strong>持ち物</strong>の性に合わせます。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['私の本', 'il mio libro'],
        ['彼の妹／彼女の妹', 'sua sorella'],
        ['彼の兄／彼女の兄', 'suo fratello'],
        ['母／私の兄弟', 'mia madre / i miei fratelli'],
        ['母に電話します。', 'Chiamo mia madre.'],
      ],
      points: [
        '名詞の前ではほとんどいつも冠詞を付けます。<span lang="it">il mio libro</span>、<span lang="it">la tua casa</span>、<span lang="it">i nostri amici</span>。',
        '「彼女の兄」は <span lang="it">suo fratello</span>（<span lang="it">fratello</span> が男性名詞だから）。持ち主の性は関係ありません。',
        '日本語では「母に電話します」と「私の」を省きますが、イタリア語では普通 <span lang="it">mia madre</span> と言います。家族の単数は冠詞なし、複数は冠詞ありです。',
      ],
    },
  },

  'grammatica/a1/verbo-essere.html': {
    it: {
      h2: "Il verbo essere: il confronto con l'inglese",
      intro:
        '<em lang="en">To be</em> e <strong>essere</strong> si somigliano, ma non coprono le stesse cose. Per l\'età, la fame e il freddo l\'italiano usa <span lang="it">avere</span>; per dire come stai usa <span lang="it">stare</span>. E il soggetto di solito non si dice: <span lang="it">sono</span> basta.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ["I'm Italian.", 'Sono italiano.'],
        ["I'm a teacher.", 'Sono insegnante.'],
        ["It's me.", 'Sono io.'],
        ['How are you? I\'m fine.', 'Come stai? Sto bene.'],
        ["I'm twenty. I'm cold.", 'Ho vent\'anni. Ho freddo.'],
      ],
      points: [
        'Il verbo dice già chi è il soggetto: <span lang="it">sono</span> = <em lang="en">I am</em>, <span lang="it">sei</span> = <em lang="en">you are</em>. <span lang="it">Io sono</span> si usa solo per dare enfasi.',
        '<em lang="en">It\'s me</em> → <strong>sono io</strong>: il verbo si accorda con <span lang="it">io</span>, non con <em lang="en">it</em>.',
        'Con età, fame, sete, caldo, freddo e paura si usa <strong>avere</strong>: <span lang="it">ho vent\'anni, ho fame</span>. Con <em lang="en">how are you</em> si usa <strong>stare</strong>.',
      ],
    },
    en: {
      h2: 'The verb essere compared with English',
      intro:
        '<em>To be</em> and <strong lang="it">essere</strong> look alike, but they don\'t cover the same ground. For age, hunger and cold Italian uses <span lang="it">avere</span> (to have); for “how are you” it uses <span lang="it">stare</span>. And the subject is usually left out: <span lang="it">sono</span> is enough.',
      th: ['English', 'Italian'],
      rows: [
        ["I'm Italian.", 'Sono italiano.'],
        ["I'm a teacher.", 'Sono insegnante.'],
        ["It's me.", 'Sono io.'],
        ["How are you? I'm fine.", 'Come stai? Sto bene.'],
        ["I'm twenty. I'm cold.", "Ho vent'anni. Ho freddo."],
      ],
      points: [
        'The verb already tells you who the subject is: <span lang="it">sono</span> = I am, <span lang="it">sei</span> = you are. <span lang="it">Io sono</span> is only for emphasis.',
        '<em>It\'s me</em> → <strong lang="it">sono io</strong>: the verb agrees with <span lang="it">io</span>, not with <em>it</em>.',
        'Age, hunger, thirst, heat, cold and fear use <strong lang="it">avere</strong>: <span lang="it">ho vent\'anni, ho fame</span> (literally “I have twenty years, I have hunger”). <em>How are you</em> uses <strong lang="it">stare</strong>.',
      ],
    },
    es: {
      h2: 'El verbo essere comparado con el español',
      intro:
        'El italiano también tiene dos verbos, <strong lang="it">essere</strong> y <strong lang="it">stare</strong>, pero no se reparten el trabajo como <em>ser</em> y <em>estar</em>. <strong lang="it">Essere</strong> hace casi todo, también la ubicación y los estados: <em>estoy en casa</em> → <span lang="it">sono a casa</span>, <em>estoy cansado</em> → <span lang="it">sono stanco</span>.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Soy italiano.', 'Sono italiano.'],
        ['Estoy en casa.', 'Sono a casa.'],
        ['Estoy cansado.', 'Sono stanco.'],
        ['¿Cómo estás? Estoy bien.', 'Come stai? Sto bene.'],
        ['Soy yo.', 'Sono io.'],
      ],
      points: [
        '<em>Estar</em> + adjetivo (<em>cansado, contento, enfermo</em>) es casi siempre <strong lang="it">essere</strong>: <span lang="it">sono stanco, sono contento</span>.',
        '<strong lang="it">Stare</strong> se usa sobre todo para la salud (<span lang="it">come stai? sto bene</span>), con el gerundio (<span lang="it">sto mangiando</span>) y en expresiones como <span lang="it">stare zitto</span>.',
        'Como en español, el pronombre sujeto no hace falta: <span lang="it">sono</span> = <em>soy, estoy</em>.',
      ],
    },
    pt: {
      h2: 'O verbo essere comparado com o português',
      intro:
        'O italiano também tem <strong lang="it">essere</strong> e <strong lang="it">stare</strong>, mas não divide o trabalho como <em>ser</em> e <em>estar</em>. <strong lang="it">Essere</strong> faz quase tudo, também lugar e estado: <em>estou em casa</em> → <span lang="it">sono a casa</span>, <em>estou cansado</em> → <span lang="it">sono stanco</span>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Sou italiano.', 'Sono italiano.'],
        ['Estou em casa.', 'Sono a casa.'],
        ['Estou cansado.', 'Sono stanco.'],
        ['Tudo bem? Estou bem.', 'Come stai? Sto bene.'],
        ['Sou eu.', 'Sono io.'],
      ],
      points: [
        '<em>Estar</em> + adjetivo (<em>cansado, contente, doente</em>) é quase sempre <strong lang="it">essere</strong>: <span lang="it">sono stanco, sono contento</span>.',
        '<strong lang="it">Stare</strong> serve sobretudo para a saúde (<span lang="it">come stai? sto bene</span>) e com o gerúndio (<span lang="it">sto mangiando</span>).',
        'Como em português, o pronome sujeito pode cair: <span lang="it">sono</span> = <em>eu sou, eu estou</em>.',
      ],
    },
    fr: {
      h2: 'Le verbe essere comparé au français',
      intro:
        '<strong lang="it">Essere</strong> correspond presque toujours à <em>être</em>, et l\'âge, la faim et le froid se disent avec <span lang="it">avere</span>, comme en français. Deux différences : le pronom sujet tombe, et <em>ça va</em> se dit avec <span lang="it">stare</span>.',
      th: ['Français', 'Italien'],
      rows: [
        ['Je suis italien.', 'Sono italiano.'],
        ['Il est médecin.', 'È medico.'],
        ["C'est moi.", 'Sono io.'],
        ['Comment ça va ? Je vais bien.', 'Come stai? Sto bene.'],
        ["J'ai vingt ans. J'ai froid.", "Ho vent'anni. Ho freddo."],
      ],
      points: [
        'Le verbe suffit : <span lang="it">sono</span> = <em>je suis</em>. <span lang="it">Io sono</span> sert à insister.',
        '<em>C\'est moi</em> → <strong lang="it">sono io</strong> ; <em>c\'est nous</em> → <span lang="it">siamo noi</span>. Le verbe s\'accorde avec la personne.',
        '<em>Je vais bien</em> ne se dit pas avec <span lang="it">andare</span> : <strong lang="it">sto bene</strong>.',
      ],
    },
    cs: {
      h2: 'Sloveso essere ve srovnání s češtinou',
      intro:
        'Dobrá zpráva: jako čeština i italština vynechává zájmeno (<em>jsem</em> → <span lang="it">sono</span>). Liší se ale věk, zima a otázka „jak se máš“: tam italština nepoužívá <span lang="it">essere</span>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Jsem Ital.', 'Sono italiano.'],
        ['Je učitel.', 'È insegnante.'],
        ['To jsem já.', 'Sono io.'],
        ['Je mi dvacet let. Je mi zima.', "Ho vent'anni. Ho freddo."],
        ['Jak se máš? Mám se dobře.', 'Come stai? Sto bene.'],
      ],
      points: [
        '<em>Je mi dvacet</em>, <em>je mi zima</em>, <em>mám hlad</em>: italsky vždy <strong lang="it">avere</strong> — <span lang="it">ho vent\'anni, ho freddo, ho fame</span>.',
        '<em>Jak se máš? Mám se dobře</em> se neříká s <span lang="it">avere</span>, ale se <strong lang="it">stare</strong>: <span lang="it">come stai? sto bene</span>.',
        '<em>To jsem já</em> → <span lang="it">sono io</span>, bez <span lang="it">to</span>. Povolání bez členu: <span lang="it">è insegnante</span>.',
      ],
    },
    pl: {
      h2: 'Czasownik essere w porównaniu z polskim',
      intro:
        'Dobra wiadomość: jak po polsku, zaimek można pominąć (<em>jestem</em> → <span lang="it">sono</span>), a wiek wyraża się przez <em>mieć</em>: <em>mam dwadzieścia lat</em> → <span lang="it">ho vent\'anni</span>. Różnice są w zimnie, w pytaniu „jak się masz” i w narzędniku.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Jestem Włochem.', 'Sono italiano.'],
        ['On jest nauczycielem.', 'È insegnante.'],
        ['To ja.', 'Sono io.'],
        ['Jest mi zimno.', 'Ho freddo.'],
        ['Jak się masz? Dobrze.', 'Come stai? Sto bene.'],
      ],
      points: [
        'Po <em>być</em> polski używa narzędnika (<em>nauczycielem</em>); po włosku słowo się nie zmienia: <span lang="it">sono insegnante</span>.',
        '<em>Jest mi zimno</em>, <em>jest mi gorąco</em> → <strong lang="it">ho freddo, ho caldo</strong>. <em>To ja</em> → <span lang="it">sono io</span>.',
        '<em>Jak się masz?</em> to <span lang="it">come stai?</span> ze <strong lang="it">stare</strong>, nie z <span lang="it">avere</span>.',
      ],
    },
    tr: {
      h2: 'Essere fiili: Türkçe ile karşılaştırma',
      intro:
        'Türkçede «olmak» çoğu zaman bir ektir: <em>İtalyanım, öğretmensin</em>, üçüncü kişide bazen hiçbir şey: <em>O öğretmen</em>. İtalyancada her zaman bir fiil gerekir: <strong lang="it">sono italiano</strong>, <strong lang="it">è insegnante</strong>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['İtalyanım.', 'Sono italiano.'],
        ['O öğretmen.', 'È insegnante.'],
        ['Benim.', 'Sono io.'],
        ['Yirmi yaşındayım.', "Ho vent'anni."],
        ['Nasılsın? İyiyim.', 'Come stai? Sto bene.'],
      ],
      points: [
        '<em>O öğretmen</em> gibi fiilsiz cümle İtalyancada olmaz: <span lang="it">è</span> gerekir. <span lang="it">Lui è insegnante</span>.',
        'Yaş, açlık, soğuk için <strong lang="it">avere</strong> kullanılır: <span lang="it">ho vent\'anni</span> (yirmi yaşındayım), <span lang="it">ho freddo</span> (üşüyorum).',
        '<em>İyiyim</em> → <span lang="it">sto bene</span>, <strong lang="it">stare</strong> fiiliyle.',
      ],
    },
    de: {
      h2: 'Das Verb essere im Vergleich zum Deutschen',
      intro:
        '<strong lang="it">Essere</strong> entspricht meist <em>sein</em>, und wie im Deutschen steht der Beruf ohne Artikel: <em>Ich bin Lehrer</em> → <span lang="it">sono insegnante</span>. Das Pronomen fällt aber weg, und bei Alter, Kälte und Befinden nimmt das Italienische andere Verben.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich bin Italiener.', 'Sono italiano.'],
        ['Ich bin Lehrer.', 'Sono insegnante.'],
        ['Ich bin es.', 'Sono io.'],
        ['Ich bin zwanzig. Mir ist kalt.', "Ho vent'anni. Ho freddo."],
        ['Wie geht es dir? Mir geht es gut.', 'Come stai? Sto bene.'],
      ],
      points: [
        'Das Verb reicht: <span lang="it">sono</span> = <em>ich bin</em>. <span lang="it">Io sono</span> nur zur Betonung.',
        '<em>Ich bin zwanzig</em>, <em>mir ist kalt</em> → <strong lang="it">avere</strong>: <span lang="it">ho vent\'anni, ho freddo</span>. <em>Es ist kalt</em> (Wetter) → <span lang="it">fa freddo</span>.',
        '<em>Ich bin es</em> → <span lang="it">sono io</span>. <em>Wie geht\'s</em> → <span lang="it">come stai</span>, mit <strong lang="it">stare</strong>.',
      ],
    },
    ja: {
      h2: 'essere と日本語の「です」',
      intro:
        '「です」と <strong lang="it">essere</strong> は似ていますが、同じではありません。年齢、空腹、寒さには <span lang="it">avere</span>、「元気です」には <span lang="it">stare</span> を使います。主語は普通言いません。<span lang="it">sono</span> だけで「私は〜です」になります。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['私はイタリア人です。', 'Sono italiano.'],
        ['彼は先生です。', 'È insegnante.'],
        ['二十歳です。', "Ho vent'anni."],
        ['元気です。', 'Sto bene.'],
        ['（注文で）コーヒーです。', 'Prendo un caffè.'],
      ],
      points: [
        '「〜です」を何でも <span lang="it">essere</span> にしないでください。年齢は <strong lang="it">avere</strong>（<span lang="it">ho vent\'anni</span>）、「寒いです」は <span lang="it">fa freddo</span>（天気）か <span lang="it">ho freddo</span>（私が寒い）。',
        '「元気です」は <strong lang="it">sto bene</strong> です。',
        '「私はコーヒーです」のような「です」は、イタリア語では動詞を変えます。<span lang="it">prendo un caffè</span>（コーヒーにします）。',
      ],
    },
  },

  'grammatica/a1/verbo-avere.html': {
    it: {
      h2: "Il verbo avere: il confronto con l'inglese",
      intro:
        'Molte frasi che in inglese usano <em lang="en">to be</em> + aggettivo in italiano usano <strong>avere</strong> + nome: <em lang="en">I\'m hungry</em> → <span lang="it">ho fame</span> («ho la fame»). E alcune frasi con <em lang="en">have</em> usano <span lang="it">fare</span>.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I have a brother.', 'Ho un fratello.'],
        ["I'm hungry. I'm cold.", 'Ho fame. Ho freddo.'],
        ["I'm thirty.", "Ho trent'anni."],
        ["You're right.", 'Hai ragione.'],
        ['I have breakfast at eight.', 'Faccio colazione alle otto.'],
      ],
      points: [
        '<em lang="en">Hungry, thirsty, cold, hot, afraid, right</em> → <span lang="it">avere fame, sete, freddo, caldo, paura, ragione</span>. E l\'età: <span lang="it">ho trent\'anni</span>.',
        '<em lang="en">Have breakfast, have a shower</em> → <strong>fare</strong>: <span lang="it">faccio colazione, faccio la doccia</span>. <em lang="en">Have to</em> → <span lang="it">dovere</span>.',
        'La <strong>h</strong> non si pronuncia ma si scrive: <span lang="it">ho, hai, ha, hanno</span>. Senza h sono altre parole: <span lang="it">o</span> (or), <span lang="it">a</span> (to), <span lang="it">anno</span> (year).',
      ],
    },
    en: {
      h2: 'The verb avere compared with English',
      intro:
        'Many phrases that use <em>to be</em> + adjective in English use <strong lang="it">avere</strong> + noun in Italian: <em>I\'m hungry</em> → <span lang="it">ho fame</span> (“I have hunger”). And some <em>have</em> phrases use <span lang="it">fare</span> (to do).',
      th: ['English', 'Italian'],
      rows: [
        ['I have a brother.', 'Ho un fratello.'],
        ["I'm hungry. I'm cold.", 'Ho fame. Ho freddo.'],
        ["I'm thirty.", "Ho trent'anni."],
        ["You're right.", 'Hai ragione.'],
        ['I have breakfast at eight.', 'Faccio colazione alle otto.'],
      ],
      points: [
        '<em>Hungry, thirsty, cold, hot, afraid, right</em> → <span lang="it">avere fame, sete, freddo, caldo, paura, ragione</span>. And age: <span lang="it">ho trent\'anni</span>.',
        '<em>Have breakfast, have a shower</em> → <strong lang="it">fare</strong>: <span lang="it">faccio colazione, faccio la doccia</span>. <em>Have to</em> → <span lang="it">dovere</span>.',
        'The <strong>h</strong> is silent but written: <span lang="it">ho, hai, ha, hanno</span>. Without it they are different words: <span lang="it">o</span> (or), <span lang="it">a</span> (to), <span lang="it">anno</span> (year).',
      ],
    },
    es: {
      h2: 'El verbo avere comparado con el español',
      intro:
        '<strong lang="it">Avere</strong> es a la vez <em>tener</em> y el auxiliar <em>haber</em>. Las expresiones con <em>tener</em> funcionan igual: <em>tengo hambre</em> → <span lang="it">ho fame</span>, <em>tengo treinta años</em> → <span lang="it">ho trent\'anni</span>. Pero <em>hay</em> y <em>tener que</em> no se dicen con <span lang="it">avere</span>.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Tengo un hermano.', 'Ho un fratello.'],
        ['Tengo hambre y frío.', 'Ho fame e freddo.'],
        ['Tengo treinta años.', "Ho trent'anni."],
        ['Tengo que trabajar.', 'Devo lavorare.'],
        ['Hay un problema.', "C'è un problema."],
      ],
      points: [
        '<em>Tener que</em> → <strong lang="it">dovere</strong>: <span lang="it">devo lavorare</span>.',
        '<em>Hay</em> (de <em>haber</em>) no es <span lang="it">ha</span>: se dice <strong lang="it">c\'è / ci sono</strong>.',
        'La <strong>h</strong> no suena pero se escribe: <span lang="it">ho, hai, ha, hanno</span>. <span lang="it">A</span> sin h es la preposición.',
      ],
    },
    pt: {
      h2: 'O verbo avere comparado com o português',
      intro:
        '<strong lang="it">Avere</strong> corresponde a <em>ter</em>, e muitas expressões funcionam igual: <em>tenho fome</em> → <span lang="it">ho fame</span>, <em>tenho trinta anos</em> → <span lang="it">ho trent\'anni</span>. Mas o <em>tem</em> de existência e o <em>ter que</em> não se dizem com <span lang="it">avere</span>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Tenho um irmão.', 'Ho un fratello.'],
        ['Estou com fome.', 'Ho fame.'],
        ['Tenho trinta anos.', "Ho trent'anni."],
        ['Tenho que trabalhar.', 'Devo lavorare.'],
        ['Tem um problema.', "C'è un problema."],
      ],
      points: [
        '<em>Estou com fome, com frio, com medo</em> → <strong lang="it">avere</strong>: <span lang="it">ho fame, ho freddo, ho paura</span>.',
        '<em>Ter que</em> → <strong lang="it">dovere</strong>: <span lang="it">devo lavorare</span>. <em>Tem um problema</em> (existe) → <span lang="it">c\'è un problema</span>.',
        'O <strong>h</strong> não se pronuncia mas se escreve: <span lang="it">ho, hai, ha, hanno</span>.',
      ],
    },
    fr: {
      h2: 'Le verbe avere comparé au français',
      intro:
        'Bonne nouvelle : <strong lang="it">avere</strong> s\'utilise presque comme <em>avoir</em>. <em>J\'ai faim, j\'ai froid, j\'ai vingt ans, j\'ai raison</em> → <span lang="it">ho fame, ho freddo, ho vent\'anni, ho ragione</span>. Attention seulement à quelques expressions et à l\'orthographe.',
      th: ['Français', 'Italien'],
      rows: [
        ["J'ai un frère.", 'Ho un fratello.'],
        ["J'ai faim et froid.", 'Ho fame e freddo.'],
        ["J'ai mal à la tête.", 'Ho mal di testa.'],
        ["J'ai envie d'une glace.", 'Ho voglia di un gelato.'],
        ['Il y a un livre.', "C'è un libro."],
      ],
      points: [
        '<em>Avoir mal à</em> → <span lang="it">avere mal di</span> : <span lang="it">ho mal di testa, ho mal di denti</span>.',
        '<em>Il y a</em> ne se dit pas avec <span lang="it">avere</span> : <span lang="it">c\'è, ci sono</span>.',
        'Le <strong>h</strong> est muet mais s\'écrit : <span lang="it">ho, hai, ha, hanno</span>. <em>Il a</em> → <span lang="it">ha</span> ; <span lang="it">a</span> sans h est la préposition.',
      ],
    },
    cs: {
      h2: 'Sloveso avere ve srovnání s češtinou',
      intro:
        '<strong lang="it">Avere</strong> je <em>mít</em> a mnoho vazeb je stejných: <em>mám hlad</em> → <span lang="it">ho fame</span>, <em>máš pravdu</em> → <span lang="it">hai ragione</span>. Tam, kde čeština říká <em>je mi</em>, italština také používá <span lang="it">avere</span>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Mám bratra.', 'Ho un fratello.'],
        ['Mám hlad.', 'Ho fame.'],
        ['Je mi třicet let.', "Ho trent'anni."],
        ['Je mi zima.', 'Ho freddo.'],
        ['Mám rád kávu.', 'Mi piace il caffè.'],
      ],
      points: [
        '<em>Je mi třicet</em>, <em>je mi zima</em>, <em>je mi horko</em> → <strong lang="it">ho trent\'anni, ho freddo, ho caldo</strong>.',
        '<em>Mám rád</em> se nepřekládá s <span lang="it">avere</span>: <em>mám rád kávu</em> → <span lang="it">mi piace il caffè</span>.',
        '<strong>H</strong> se nevyslovuje, ale píše: <span lang="it">ho, hai, ha, hanno</span>.',
      ],
    },
    pl: {
      h2: 'Czasownik avere w porównaniu z polskim',
      intro:
        '<strong lang="it">Avere</strong> to <em>mieć</em>, a wiek wyraża się tak samo: <em>mam trzydzieści lat</em> → <span lang="it">ho trent\'anni</span>. Ale tam, gdzie polski używa przymiotnika albo <em>jest mi</em>, włoski też używa <span lang="it">avere</span>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Mam brata.', 'Ho un fratello.'],
        ['Mam trzydzieści lat.', "Ho trent'anni."],
        ['Jestem głodny.', 'Ho fame.'],
        ['Jest mi zimno.', 'Ho freddo.'],
        ['Boję się.', 'Ho paura.'],
      ],
      points: [
        '<em>Jestem głodny, spragniony</em> → <strong lang="it">ho fame, ho sete</strong>: dosłownie „mam głód, mam pragnienie”.',
        '<em>Jest mi zimno, gorąco</em> → <span lang="it">ho freddo, ho caldo</span>; <em>boję się</em> → <span lang="it">ho paura</span>; <em>masz rację</em> → <span lang="it">hai ragione</span>.',
        '<strong>H</strong> się nie wymawia, ale pisze: <span lang="it">ho, hai, ha, hanno</span>.',
      ],
    },
    tr: {
      h2: 'Avere fiili: Türkçe ile karşılaştırma',
      intro:
        'Türkçede «sahip olmak» genellikle <em>var</em> ve iyelik ekiyle söylenir: <em>bir kardeşim var</em>. İtalyancada bunun için bir fiil vardır: <strong lang="it">avere</strong> — <span lang="it">ho un fratello</span>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Bir kardeşim var.', 'Ho un fratello.'],
        ['Acıktım.', 'Ho fame.'],
        ['Otuz yaşındayım.', "Ho trent'anni."],
        ['Üşüyorum.', 'Ho freddo.'],
        ['Haklısın.', 'Hai ragione.'],
      ],
      points: [
        '<em>Bir kardeşim var</em> → <strong lang="it">ho</strong> un fratello. <span lang="it">C\'è</span> sadece bir şeyin bir yerde bulunduğunu söyler.',
        'Açlık, susuzluk, soğuk, sıcak, korku ve yaş için de <span lang="it">avere</span> kullanılır: <span lang="it">ho fame, ho sete, ho freddo, ho paura, ho trent\'anni</span>.',
        '<strong>H</strong> okunmaz ama yazılır: <span lang="it">ho, hai, ha, hanno</span>.',
      ],
    },
    de: {
      h2: 'Das Verb avere im Vergleich zum Deutschen',
      intro:
        'Gute Nachricht: <strong lang="it">avere</strong> funktioniert oft wie <em>haben</em>, auch bei <em>Hunger, Durst, Angst</em> und <em>recht haben</em>. Anders ist es beim Alter und bei <em>mir ist kalt</em>: Auch dort steht <span lang="it">avere</span>.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich habe einen Bruder.', 'Ho un fratello.'],
        ['Ich habe Hunger.', 'Ho fame.'],
        ['Ich bin dreißig.', "Ho trent'anni."],
        ['Mir ist kalt.', 'Ho freddo.'],
        ['Ich brauche einen Kaffee.', 'Ho bisogno di un caffè.'],
      ],
      points: [
        '<em>Ich bin dreißig</em> → <span lang="it">ho trent\'anni</span>; <em>mir ist kalt / warm</em> → <span lang="it">ho freddo / caldo</span>.',
        '<em>Brauchen</em> → <span lang="it">avere bisogno <strong>di</strong></span>: <span lang="it">ho bisogno di un caffè</span>.',
        'Das <strong>h</strong> wird nicht gesprochen, aber geschrieben: <span lang="it">ho, hai, ha, hanno</span>.',
      ],
    },
    ja: {
      h2: 'avere と日本語の「ある・いる」',
      intro:
        '日本語では「兄がいます」「車があります」と言いますが、イタリア語では持っていることを <strong lang="it">avere</strong> で表します。<span lang="it">ho un fratello</span>、<span lang="it">ho una macchina</span>。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['兄がいます。', 'Ho un fratello.'],
        ['車があります。', 'Ho una macchina.'],
        ['お腹がすきました。', 'Ho fame.'],
        ['三十歳です。', "Ho trent'anni."],
        ['頭が痛いです。', 'Ho mal di testa.'],
      ],
      points: [
        '自分の家族や持ち物の「いる・ある」は <strong lang="it">avere</strong> です。<span lang="it">c\'è</span> は「（ある場所に）ある」です。',
        '空腹、のどの渇き、寒さ、暑さ、怖さ、年齢も <span lang="it">avere</span>：<span lang="it">ho fame, ho sete, ho freddo, ho caldo, ho paura, ho trent\'anni</span>。',
        '<strong>h</strong> は発音しませんが書きます。<span lang="it">ho, hai, ha, hanno</span>。',
      ],
    },
  },

  'grammatica/a2/imperfetto.html': {
    it: {
      h2: "L'imperfetto: il confronto con l'inglese",
      intro:
        'L\'inglese non ha un tempo solo per l\'imperfetto: usa <em lang="en">used to</em>, <em lang="en">would</em>, <em lang="en">was … -ing</em> o il <em lang="en">simple past</em>. In italiano tutte queste idee (abitudini, descrizioni, azioni in corso) diventano <strong>imperfetto</strong>.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['When I was a child, I used to play football.', 'Da bambino giocavo a calcio.'],
        ['I was reading when Marco arrived.', 'Leggevo quando è arrivato Marco.'],
        ['It was cold and it was raining.', 'Faceva freddo e pioveva.'],
        ['Every summer we would go to the sea.', "Ogni estate andavamo al mare."],
      ],
      points: [
        '<em lang="en">Used to</em> e <em lang="en">would</em> (abitudini) non si traducono parola per parola: basta l\'imperfetto, <span lang="it">giocavo, andavamo</span>.',
        '<em lang="en">Was reading</em> → <span lang="it">leggevo</span> (o <span lang="it">stavo leggendo</span>). L\'azione che interrompe va al passato prossimo: <span lang="it">quando è arrivato Marco</span>.',
        'Il <em lang="en">simple past</em> va diviso: un fatto concluso → <span lang="it">passato prossimo</span>; una descrizione o un\'abitudine → <strong>imperfetto</strong>.',
      ],
    },
    en: {
      h2: 'The imperfetto compared with English',
      intro:
        'English has no single tense for the imperfetto: it uses <em>used to</em>, <em>would</em>, <em>was … -ing</em> or the simple past. In Italian all these ideas (habits, descriptions, actions in progress) become the <strong lang="it">imperfetto</strong>.',
      th: ['English', 'Italian'],
      rows: [
        ['When I was a child, I used to play football.', 'Da bambino giocavo a calcio.'],
        ['I was reading when Marco arrived.', 'Leggevo quando è arrivato Marco.'],
        ['It was cold and it was raining.', 'Faceva freddo e pioveva.'],
        ['Every summer we would go to the sea.', 'Ogni estate andavamo al mare.'],
      ],
      points: [
        '<em>Used to</em> and <em>would</em> (habits) aren\'t translated word for word: the imperfetto is enough, <span lang="it">giocavo, andavamo</span>.',
        '<em>Was reading</em> → <span lang="it">leggevo</span> (or <span lang="it">stavo leggendo</span>). The action that interrupts goes in the passato prossimo: <span lang="it">quando è arrivato Marco</span>.',
        'The simple past splits in two: a finished event → <span lang="it">passato prossimo</span>; a description or habit → <strong lang="it">imperfetto</strong>.',
      ],
    },
    es: {
      h2: 'El imperfetto comparado con el español',
      intro:
        'Buena noticia: el <strong lang="it">imperfetto</strong> se usa casi exactamente como el pretérito imperfecto. <em>Jugaba, leía, hacía frío</em> → <span lang="it">giocavo, leggevo, faceva freddo</span>. La trampa está en las formas.',
      th: ['Español', 'Italiano'],
      rows: [
        ['De niño jugaba al fútbol.', 'Da bambino giocavo a calcio.'],
        ['Leía cuando llegó Marco.', 'Leggevo quando è arrivato Marco.'],
        ['Hacía frío y llovía.', 'Faceva freddo e pioveva.'],
        ['Yo era / él era', 'io ero / lui era'],
      ],
      points: [
        'En español <em>yo jugaba</em> y <em>él jugaba</em> son iguales; en italiano no: <strong lang="it">io giocavo</strong>, <span lang="it">lui giocava</span>. Lo mismo con <em>era</em>: <span lang="it">io ero</span>, <span lang="it">lui era</span>.',
        'La terminación es <span lang="it">-avo, -evo, -ivo</span> en los tres grupos: <span lang="it">parlavo, leggevo, dormivo</span>.',
        'Cuidado con el contraste: donde el español usa el indefinido (<em>llegó</em>), el italiano hablado usa el <span lang="it">passato prossimo</span> (<span lang="it">è arrivato</span>).',
      ],
    },
    pt: {
      h2: 'O imperfetto comparado com o português',
      intro:
        'Boa notícia: o <strong lang="it">imperfetto</strong> se usa quase exatamente como o pretérito imperfeito. <em>Jogava, lia, fazia frio</em> → <span lang="it">giocavo, leggevo, faceva freddo</span>. A armadilha está nas formas.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Quando eu era criança, jogava futebol.', 'Da bambino giocavo a calcio.'],
        ['Eu estava lendo quando o Marco chegou.', 'Leggevo quando è arrivato Marco.'],
        ['Fazia frio e chovia.', 'Faceva freddo e pioveva.'],
        ['eu era / ele era', 'io ero / lui era'],
      ],
      points: [
        'Em português <em>eu jogava</em> e <em>ele jogava</em> são iguais; em italiano não: <strong lang="it">io giocavo</strong>, <span lang="it">lui giocava</span>. O mesmo com <em>era</em>: <span lang="it">io ero</span>, <span lang="it">lui era</span>.',
        '<em>Estava lendo</em> → <span lang="it">leggevo</span> ou <span lang="it">stavo leggendo</span>.',
        'Onde o português usa o pretérito perfeito (<em>chegou</em>), o italiano falado usa o <span lang="it">passato prossimo</span> (<span lang="it">è arrivato</span>).',
      ],
    },
    fr: {
      h2: "L'imperfetto comparé au français",
      intro:
        'Bonne nouvelle : l\'<strong lang="it">imperfetto</strong> s\'utilise comme l\'imparfait, et le <span lang="it">passato prossimo</span> comme le passé composé. <em>Je lisais quand Marco est arrivé</em> → <span lang="it">leggevo quando è arrivato Marco</span>. Seules les formes demandent de l\'attention.',
      th: ['Français', 'Italien'],
      rows: [
        ['Enfant, je jouais au foot.', 'Da bambino giocavo a calcio.'],
        ['Je lisais quand Marco est arrivé.', 'Leggevo quando è arrivato Marco.'],
        ['Il faisait froid et il pleuvait.', 'Faceva freddo e pioveva.'],
        ["j'étais / il était", 'io ero / lui era'],
      ],
      points: [
        '<em>J\'étais</em> et <em>il était</em> se prononcent pareil ; en italien ce sont deux formes : <strong lang="it">io ero</strong>, <span lang="it">lui era</span>.',
        'Les terminaisons : <span lang="it">-avo, -avi, -ava, -avamo, -avate, -avano</span>. <em>Ils parlaient</em> → <span lang="it">parlavano</span>.',
        'Comme en français, l\'action qui interrompt est au <span lang="it">passato prossimo</span> : <span lang="it">quando è arrivato Marco</span>.',
      ],
    },
    cs: {
      h2: 'Imperfetto ve srovnání s češtinou',
      intro:
        'Pomůže vám vid. Nedokonavé sloveso v minulosti (<em>četl jsem, hrál jsem</em>: děj v průběhu, zvyk, popis) bývá v italštině <strong lang="it">imperfetto</strong>; dokonavé (<em>přečetl jsem, přišel</em>: ukončený děj) bývá <span lang="it">passato prossimo</span>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Jako dítě jsem hrál fotbal.', 'Da bambino giocavo a calcio.'],
        ['Četl jsem, když přišel Marek.', 'Leggevo quando è arrivato Marco.'],
        ['Byla zima a pršelo.', 'Faceva freddo e pioveva.'],
        ['Přečetl jsem tu knihu.', 'Ho letto quel libro.'],
      ],
      points: [
        'Zvyk a popis v minulosti → <strong lang="it">imperfetto</strong>: <span lang="it">giocavo, faceva freddo</span>.',
        'Děj, který probíhal, a děj, který ho přerušil: <span lang="it">leggevo</span> (četl jsem) + <span lang="it">è arrivato</span> (přišel).',
        'Pozor na tvary: <span lang="it">io ero</span> (byl jsem), <span lang="it">lui era</span> (byl).',
      ],
    },
    pl: {
      h2: 'Imperfetto w porównaniu z polskim',
      intro:
        'Pomoże ci aspekt. Czasownik niedokonany w przeszłości (<em>czytałem, grałem</em>: czynność w toku, zwyczaj, opis) to zwykle <strong lang="it">imperfetto</strong>; dokonany (<em>przeczytałem, przyszedł</em>: czynność zakończona) to zwykle <span lang="it">passato prossimo</span>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Jako dziecko grałem w piłkę.', 'Da bambino giocavo a calcio.'],
        ['Czytałem, kiedy przyszedł Marek.', 'Leggevo quando è arrivato Marco.'],
        ['Było zimno i padało.', 'Faceva freddo e pioveva.'],
        ['Przeczytałem tę książkę.', 'Ho letto quel libro.'],
      ],
      points: [
        'Zwyczaj i opis w przeszłości → <strong lang="it">imperfetto</strong>: <span lang="it">giocavo, faceva freddo</span>.',
        'Czynność w toku i czynność, która ją przerwała: <span lang="it">leggevo</span> (czytałem) + <span lang="it">è arrivato</span> (przyszedł).',
        'Uwaga na formy: <span lang="it">io ero</span> (byłem), <span lang="it">lui era</span> (był).',
      ],
    },
    tr: {
      h2: 'Imperfetto: Türkçe ile karşılaştırma',
      intro:
        'Türkçe zamanlar iyi bir rehberdir. <em>-iyordu</em> (<em>okuyordum</em>) ve <em>-ırdı</em> (<em>oynardım</em>) çoğu zaman <strong lang="it">imperfetto</strong> olur; <em>-di</em> ile anlatılan bitmiş olay (<em>geldi</em>) çoğu zaman <span lang="it">passato prossimo</span>dur.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Çocukken futbol oynardım.', 'Da bambino giocavo a calcio.'],
        ['Marco geldiğinde kitap okuyordum.', 'Leggevo quando è arrivato Marco.'],
        ['Hava soğuktu ve yağmur yağıyordu.', 'Faceva freddo e pioveva.'],
        ['O kitabı okudum.', 'Ho letto quel libro.'],
      ],
      points: [
        '<em>-ırdı</em> (geçmişteki alışkanlık) → <strong lang="it">imperfetto</strong>: <span lang="it">giocavo</span>.',
        '<em>-iyordu</em> (süren eylem) → <span lang="it">leggevo</span> ya da <span lang="it">stavo leggendo</span>; araya giren olay <span lang="it">passato prossimo</span>: <span lang="it">è arrivato</span>.',
        'Geçmişteki betimlemeler de imperfetto olur: <em>hava soğuktu</em> → <span lang="it">faceva freddo</span>.',
      ],
    },
    de: {
      h2: 'Das imperfetto im Vergleich zum Deutschen',
      intro:
        'Das <strong lang="it">imperfetto</strong> ist kein Präteritum: Es geht nicht um gesprochen oder geschrieben, sondern darum, <em>wie</em> man auf die Vergangenheit schaut. Gewohnheiten, Beschreibungen und laufende Handlungen → <span lang="it">imperfetto</span>; abgeschlossene Ereignisse → <span lang="it">passato prossimo</span>.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Als Kind habe ich Fußball gespielt.', 'Da bambino giocavo a calcio.'],
        ['Ich las gerade, als Marco kam.', 'Leggevo quando è arrivato Marco.'],
        ['Es war kalt und es regnete.', 'Faceva freddo e pioveva.'],
        ['Ich habe das Buch gelesen.', 'Ho letto il libro.'],
      ],
      points: [
        'Im Gespräch sagt man auf Deutsch fast immer Perfekt. Im Italienischen muss man wählen: Gewohnheit (<em>früher immer</em>) → <strong lang="it">imperfetto</strong>, <span lang="it">giocavo</span>.',
        '<em>Ich war gerade dabei zu lesen</em> → <span lang="it">leggevo</span> oder <span lang="it">stavo leggendo</span>; das unterbrechende Ereignis → <span lang="it">è arrivato</span>.',
        'Beschreibungen (<em>es war kalt, sie war müde</em>) → <span lang="it">faceva freddo, era stanca</span>.',
      ],
    },
    ja: {
      h2: 'imperfetto と日本語の「〜ていた」',
      intro:
        '日本語の「〜ていた」（読んでいた）や「よく〜したものだ」（習慣）、過去の様子（寒かった）は、イタリア語では <strong lang="it">imperfetto</strong> になることが多いです。一回で終わった出来事（来た）は <span lang="it">passato prossimo</span> です。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['子どものころ、よくサッカーをしていました。', 'Da bambino giocavo a calcio.'],
        ['マルコさんが来たとき、本を読んでいました。', 'Leggevo quando è arrivato Marco.'],
        ['寒くて、雨が降っていました。', 'Faceva freddo e pioveva.'],
        ['その本を読みました。', 'Ho letto quel libro.'],
      ],
      points: [
        '過去の習慣「よく〜していた」→ <strong lang="it">imperfetto</strong>：<span lang="it">giocavo</span>。',
        '「読んでいた」（続いていたこと）は <span lang="it">leggevo</span>、そこに起きた「来た」は <span lang="it">è arrivato</span>。',
        '「寒かった」のような過去の様子も <span lang="it">imperfetto</span> です：<span lang="it">faceva freddo</span>。',
      ],
    },
  },

  'grammatica/a1/articoli-determinativi.html': {
    it: {
      h2: "Gli articoli determinativi: il confronto con l'inglese",
      intro:
        'L\'inglese ha una sola parola, <em lang="en">the</em>. L\'italiano ne ha sette (<strong>il, lo, la, l\', i, gli, le</strong>), scelte secondo genere, numero e suono iniziale. E le usa anche dove l\'inglese non mette niente.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['the book / the student / the friend', "il libro / lo studente / l'amico"],
        ['Coffee is good.', 'Il caffè è buono.'],
        ['I like music.', 'Mi piace la musica.'],
        ['Italy is beautiful.', "L'Italia è bella."],
        ['on Mondays', 'il lunedì'],
      ],
      points: [
        'Quando parli di qualcosa in generale l\'italiano vuole l\'articolo: <span lang="it">il caffè, la musica, gli animali</span>.',
        'Anche i nomi dei Paesi hanno l\'articolo: <span lang="it">l\'Italia, la Francia, gli Stati Uniti</span>.',
        '<span lang="it">Lo</span> e <span lang="it">gli</span> si usano davanti a <span lang="it">s</span> + consonante, <span lang="it">z</span>, <span lang="it">gn</span>, <span lang="it">ps</span>, <span lang="it">y</span>: <span lang="it">lo studente, gli zaini</span>.',
      ],
    },
    en: {
      h2: 'Definite articles compared with English',
      intro:
        'English has one word, <em>the</em>. Italian has seven (<strong lang="it">il, lo, la, l\', i, gli, le</strong>), chosen by gender, number and the first sound of the next word. And Italian uses them where English uses nothing.',
      th: ['English', 'Italian'],
      rows: [
        ['the book / the student / the friend', "il libro / lo studente / l'amico"],
        ['Coffee is good.', 'Il caffè è buono.'],
        ['I like music.', 'Mi piace la musica.'],
        ['Italy is beautiful.', "L'Italia è bella."],
        ['on Mondays', 'il lunedì'],
      ],
      points: [
        'When you talk about something in general, Italian needs the article: <span lang="it">il caffè, la musica, gli animali</span>.',
        'Countries take the article too: <span lang="it">l\'Italia, la Francia, gli Stati Uniti</span>.',
        '<span lang="it">Lo</span> and <span lang="it">gli</span> go before <span lang="it">s</span> + consonant, <span lang="it">z</span>, <span lang="it">gn</span>, <span lang="it">ps</span>, <span lang="it">y</span>: <span lang="it">lo studente, gli zaini</span>.',
      ],
    },
    es: {
      h2: 'Los artículos determinados comparados con el español',
      intro:
        'El italiano usa el artículo casi donde lo usa el español (<em>el café es bueno</em> → <span lang="it">il caffè è buono</span>), pero tiene más formas: al lado de <strong lang="it">il, la, i, le</strong> están <strong lang="it">lo, l\', gli</strong>, que dependen del sonido de la palabra siguiente.',
      th: ['Español', 'Italiano'],
      rows: [
        ['el libro / el estudiante', 'il libro / lo studente'],
        ['los libros / los estudiantes', 'i libri / gli studenti'],
        ['el agua / el amigo', "l'acqua / l'amico"],
        ['la leche / la sal', 'il latte / il sale'],
        ['Llego el lunes.', 'Arrivo lunedì.'],
      ],
      points: [
        'Delante de <span lang="it">s</span> + consonante, <span lang="it">z</span>, <span lang="it">gn</span> y <span lang="it">ps</span>: <strong lang="it">lo / gli</strong>. <em>Los estudiantes</em> → <span lang="it">gli studenti</span>, no <span lang="it">i studenti</span>.',
        'El género no siempre coincide: <em>la leche</em> → <span lang="it">il latte</span>, <em>la sal</em> → <span lang="it">il sale</span>, <em>la nariz</em> → <span lang="it">il naso</span>, <em>el árbol</em> → <span lang="it">l\'albero</span> (masculino, como en español).',
        'Para un día concreto no se pone artículo: <em>llego el lunes</em> → <span lang="it">arrivo lunedì</span>. <span lang="it">Il lunedì</span> significa «todos los lunes».',
      ],
    },
    pt: {
      h2: 'Os artigos definidos comparados com o português',
      intro:
        'O italiano usa o artigo quase como o português, mas tem mais formas: além de <strong lang="it">il, la, i, le</strong> existem <strong lang="it">lo, l\', gli</strong>, que dependem do som da palavra seguinte. E com nomes de pessoas o artigo cai.',
      th: ['Português', 'Italiano'],
      rows: [
        ['o livro / o estudante', 'il libro / lo studente'],
        ['os livros / os estudantes', 'i libri / gli studenti'],
        ['o amigo / a árvore', "l'amico / l'albero"],
        ['O João chegou.', 'Giovanni è arrivato.'],
        ['Chego na segunda.', 'Arrivo lunedì.'],
      ],
      points: [
        'Diante de <span lang="it">s</span> + consoante, <span lang="it">z</span>, <span lang="it">gn</span> e <span lang="it">ps</span>: <strong lang="it">lo / gli</strong>. <em>Os estudantes</em> → <span lang="it">gli studenti</span>.',
        'Com nomes próprios de pessoa não se usa artigo: <em>o João</em> → <span lang="it">Giovanni</span>.',
        'O gênero às vezes muda: <em>a árvore</em> → <span lang="it">l\'albero</span> (masculino), <em>a ponte</em> → <span lang="it">il ponte</span>. E um dia concreto vai sem artigo: <span lang="it">arrivo lunedì</span>.',
      ],
    },
    fr: {
      h2: 'Les articles définis comparés au français',
      intro:
        'L\'italien met l\'article là où le français le met (<em>le café est bon</em> → <span lang="it">il caffè è buono</span>), avec l\'élision comme en français (<span lang="it">l\'amico</span>). Mais il a plus de formes, surtout au pluriel : <em>les</em> devient <strong lang="it">i, gli</strong> ou <strong lang="it">le</strong>.',
      th: ['Français', 'Italien'],
      rows: [
        ["le livre / l'étudiant", 'il libro / lo studente'],
        ['les livres / les étudiants', 'i libri / gli studenti'],
        ['les filles', 'le ragazze'],
        ['la mer / la fleur', 'il mare / il fiore'],
        ['le lundi / lundi', 'il lunedì / lunedì'],
      ],
      points: [
        '<em>Les</em> a trois traductions : <span lang="it">i</span> (masculin), <span lang="it">gli</span> (masculin devant voyelle, <span lang="it">s</span> + consonne, <span lang="it">z</span>), <span lang="it">le</span> (féminin). <em>Les filles</em> → <span lang="it">le ragazze</span>.',
        'Le genre change parfois : <em>la mer</em> → <span lang="it">il mare</span>, <em>la fleur</em> → <span lang="it">il fiore</span>, <em>le lait</em> → <span lang="it">il latte</span> (masculin aussi).',
        'Comme en français : <span lang="it">lunedì</span> (ce lundi), <span lang="it">il lunedì</span> (tous les lundis).',
      ],
    },
    cs: {
      h2: 'Určitý člen ve srovnání s češtinou',
      intro:
        'Čeština členy nemá, italština je používá skoro před každým podstatným jménem: <strong lang="it">il, lo, la, l\', i, gli, le</strong>. Rod podstatných jmen znáte, ale v italštině jsou jen dva (mužský a ženský) a často se liší od češtiny.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['kniha / student', 'il libro / lo studente'],
        ['Káva je dobrá.', 'Il caffè è buono.'],
        ['Mám rád hudbu.', 'Mi piace la musica.'],
        ['Itálie je krásná.', "L'Italia è bella."],
        ['slunce / měsíc', 'il sole / la luna'],
      ],
      points: [
        'Když mluvíte obecně, člen nechybí: <span lang="it">il caffè, la musica, gli animali</span>. Člen mají i země: <span lang="it">l\'Italia</span>.',
        'Střední rod neexistuje: <em>slunce</em> → <span lang="it">il sole</span>, <em>moře</em> → <span lang="it">il mare</span>. A rod se může lišit: <em>měsíc</em> (m.) → <span lang="it">la luna</span>.',
        'Člen se učte se slovem: <span lang="it">il libro, la casa, lo zaino</span>. Prozradí rod i číslo.',
      ],
    },
    pl: {
      h2: 'Rodzajnik określony w porównaniu z polskim',
      intro:
        'Polski nie ma rodzajników, włoski stawia je prawie przed każdym rzeczownikiem: <strong lang="it">il, lo, la, l\', i, gli, le</strong>. Rodzaj znasz, ale po włosku są tylko dwa (męski i żeński) i często różnią się od polskich.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['książka / student', 'il libro / lo studente'],
        ['Kawa jest dobra.', 'Il caffè è buono.'],
        ['Lubię muzykę.', 'Mi piace la musica.'],
        ['Włochy są piękne.', "L'Italia è bella."],
        ['słońce / księżyc', 'il sole / la luna'],
      ],
      points: [
        'Gdy mówisz ogólnie, rodzajnik jest potrzebny: <span lang="it">il caffè, la musica, gli animali</span>. Kraje też go mają: <span lang="it">l\'Italia</span>.',
        'Nie ma rodzaju nijakiego: <em>słońce</em> → <span lang="it">il sole</span>, <em>morze</em> → <span lang="it">il mare</span>. Rodzaj bywa inny: <em>księżyc</em> (m.) → <span lang="it">la luna</span>.',
        'Ucz się rzeczownika razem z rodzajnikiem: <span lang="it">il libro, la casa, lo zaino</span>.',
      ],
    },
    tr: {
      h2: 'Belirli tanımlıklar: Türkçe ile karşılaştırma',
      intro:
        'Türkçede tanımlık ve dilbilgisel cinsiyet yoktur. İtalyancada hemen her ismin önüne bir tanımlık gelir ve bu tanımlık ismin cinsiyetini, sayısını gösterir: <strong lang="it">il, lo, la, l\', i, gli, le</strong>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['kitap / öğrenci', 'il libro / lo studente'],
        ['Kahve güzel.', 'Il caffè è buono.'],
        ['Müziği severim.', 'Mi piace la musica.'],
        ['İtalya güzel.', "L'Italia è bella."],
        ['güneş / ay', 'il sole / la luna'],
      ],
      points: [
        'Genel konuşurken de tanımlık gerekir: <span lang="it">il caffè, la musica</span>. Ülke adlarında da: <span lang="it">l\'Italia, la Turchia</span>.',
        'Her ismin cinsiyeti vardır ve tanımlıkla birlikte öğrenilir: <span lang="it">il libro</span> (eril), <span lang="it">la casa</span> (dişil).',
        '<span lang="it">Lo / gli</span>, <span lang="it">s</span> + ünsüz, <span lang="it">z</span>, <span lang="it">gn</span>, <span lang="it">ps</span> önünde kullanılır: <span lang="it">lo studente, gli zaini</span>.',
      ],
    },
    de: {
      h2: 'Bestimmte Artikel im Vergleich zum Deutschen',
      intro:
        'Das Italienische hat keine Fälle: Der Artikel ändert sich nicht mit <em>den, dem, des</em>. Dafür hängt er vom Anfangslaut des Wortes ab: <strong lang="it">il, lo, la, l\', i, gli, le</strong>. Und es gibt nur zwei Genera, kein Neutrum.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['das Buch / der Student', 'il libro / lo studente'],
        ['Kaffee ist gut.', 'Il caffè è buono.'],
        ['Ich mag Musik.', 'Mi piace la musica.'],
        ['die Sonne / der Mond', 'il sole / la luna'],
        ['das Mädchen', 'la ragazza'],
      ],
      points: [
        'Wo man im Deutschen allgemein ohne Artikel spricht (<em>Kaffee ist gut, ich mag Musik</em>), braucht das Italienische einen: <span lang="it">il caffè, la musica</span>.',
        'Das Genus ist oft anders: <em>die Sonne</em> → <span lang="it">il sole</span>, <em>der Mond</em> → <span lang="it">la luna</span>, <em>das Mädchen</em> → <span lang="it">la ragazza</span>.',
        '<span lang="it">Lo / gli</span> vor <span lang="it">s</span> + Konsonant, <span lang="it">z</span>, <span lang="it">gn</span>, <span lang="it">ps</span>: <span lang="it">lo studente, gli zaini</span>.',
      ],
    },
    ja: {
      h2: '定冠詞と日本語の比較',
      intro:
        '日本語には冠詞も文法上の性もありません。イタリア語では名詞の前にほとんどいつも冠詞を付け、その冠詞が性と数を表します。<strong lang="it">il, lo, la, l\', i, gli, le</strong>。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['本／学生', 'il libro / lo studente'],
        ['コーヒーはおいしいです。', 'Il caffè è buono.'],
        ['音楽が好きです。', 'Mi piace la musica.'],
        ['イタリアはきれいです。', "L'Italia è bella."],
        ['太陽／月', 'il sole / la luna'],
      ],
      points: [
        '「は」「が」は冠詞ではありません。一般的なことを言うときも冠詞を付けます。<span lang="it">il caffè</span>、<span lang="it">la musica</span>。国名にも付けます：<span lang="it">l\'Italia, il Giappone</span>。',
        '名詞は冠詞といっしょに覚えましょう。<span lang="it">il libro</span>（男性）、<span lang="it">la casa</span>（女性）。',
        '<span lang="it">s</span> + 子音、<span lang="it">z</span> などの前は <span lang="it">lo / gli</span>：<span lang="it">lo studente, gli zaini</span>。',
      ],
    },
  },

  'grammatica/a2/futuro-semplice.html': {
    after: 'usi',
    it: {
      h2: "Il futuro semplice: il confronto con l'inglese",
      intro:
        'L\'inglese parla del futuro con <em lang="en">will</em>, <em lang="en">going to</em> o il <em lang="en">present continuous</em>. L\'italiano ha un tempo in una parola sola, il <strong>futuro</strong> (<span lang="it">partirò</span>), ma per i piani vicini usa spesso il semplice <strong>presente</strong>.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ["I'm leaving tomorrow.", 'Parto domani.'],
        ["I'll call you tonight.", 'Ti chiamo stasera. / Ti chiamerò stasera.'],
        ["It's going to rain.", 'Pioverà. / Sta per piovere.'],
        ["When I arrive, I'll call you.", 'Quando arriverò, ti chiamerò.'],
        ["He's probably at home.", 'Sarà a casa.'],
      ],
      points: [
        '<em lang="en">Going to</em> non si traduce con <span lang="it">andare a</span>, che indica un movimento: <span lang="it">vado a studiare</span> = vado in un posto per studiare. Per il futuro: <span lang="it">studierò</span> o <span lang="it">sta per piovere</span>.',
        'Dopo <span lang="it">quando</span> e <span lang="it">appena</span>, se l\'azione è futura, si può usare il futuro: <span lang="it">quando arriverò</span>, dove l\'inglese usa il presente.',
        'Il futuro serve anche per le ipotesi sul presente: <span lang="it">sarà a casa</span> = <em lang="en">he\'s probably at home</em>.',
      ],
    },
    en: {
      h2: 'The future tense compared with English',
      intro:
        'English talks about the future with <em>will</em>, <em>going to</em> or the present continuous. Italian has a one-word tense, the <strong lang="it">futuro</strong> (<span lang="it">partirò</span>), but for near plans it often just uses the <strong>present</strong>.',
      th: ['English', 'Italian'],
      rows: [
        ["I'm leaving tomorrow.", 'Parto domani.'],
        ["I'll call you tonight.", 'Ti chiamo stasera. / Ti chiamerò stasera.'],
        ["It's going to rain.", 'Pioverà. / Sta per piovere.'],
        ["When I arrive, I'll call you.", 'Quando arriverò, ti chiamerò.'],
        ["He's probably at home.", 'Sarà a casa.'],
      ],
      points: [
        '<em>Going to</em> is not <span lang="it">andare a</span>, which is about movement: <span lang="it">vado a studiare</span> = I\'m going (somewhere) to study. For the future: <span lang="it">studierò</span>, or <span lang="it">sta per piovere</span> (it\'s about to rain).',
        'After <span lang="it">quando</span> and <span lang="it">appena</span>, a future action can take the future tense: <span lang="it">quando arriverò</span>, where English uses the present.',
        'The future also expresses guesses about now: <span lang="it">sarà a casa</span> = he\'s probably at home.',
      ],
    },
    es: {
      h2: 'El futuro simple comparado con el español',
      intro:
        'El <strong lang="it">futuro</strong> funciona como en español: <em>hablaré</em> → <span lang="it">parlerò</span>, y también sirve para suposiciones (<em>estará en casa</em> → <span lang="it">sarà a casa</span>). La diferencia está en <em>ir a</em> + infinitivo y en las formas.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Mañana hablaré con él.', 'Domani parlerò con lui.'],
        ['Va a llover.', 'Pioverà. / Sta per piovere.'],
        ['Voy a comer.', 'Mangio adesso. / Sto per mangiare.'],
        ['Estará en casa.', 'Sarà a casa.'],
        ['Iré a Roma.', 'Andrò a Roma.'],
      ],
      points: [
        '<em>Ir a</em> + infinitivo no se traduce con <span lang="it">andare a</span>, que indica movimiento. <em>Va a llover</em> → <span lang="it">pioverà</span> o <span lang="it">sta per piovere</span>.',
        'En los verbos en <span lang="it">-are</span> la <span lang="it">a</span> se vuelve <strong lang="it">e</strong>: <em>hablaré</em> → <span lang="it">parlerò</span>, no <span lang="it">parlarò</span>.',
        'Algunos futuros pierden una vocal: <em>iré, podré, tendré</em> → <span lang="it">andrò, potrò, avrò</span>.',
      ],
    },
    pt: {
      h2: 'O futuro simples comparado com o português',
      intro:
        'No Brasil quase sempre se diz <em>vou falar</em>, <em>vai chover</em>. Em italiano não se usa <span lang="it">andare</span> para o futuro: ou se usa o <strong lang="it">futuro</strong> (<span lang="it">parlerò</span>), ou simplesmente o <strong>presente</strong> (<span lang="it">domani parlo con lui</span>).',
      th: ['Português', 'Italiano'],
      rows: [
        ['Amanhã vou falar com ele.', 'Domani parlo con lui. / Domani parlerò con lui.'],
        ['Vai chover.', 'Pioverà. / Sta per piovere.'],
        ['Vou viajar para Roma.', 'Andrò a Roma.'],
        ['Ele deve estar em casa.', 'Sarà a casa.'],
        ['falarei / comerei', 'parlerò / mangerò'],
      ],
      points: [
        '<em>Vou + infinitivo</em> não é <span lang="it">vado a</span> + infinitivo, que indica movimento (<span lang="it">vado a mangiare</span> = vou a um lugar para comer).',
        'Nos verbos em <span lang="it">-are</span> o <span lang="it">a</span> vira <strong lang="it">e</strong>: <em>falarei</em> → <span lang="it">parlerò</span>.',
        'O futuro serve para suposições, como <em>deve estar</em>: <span lang="it">sarà a casa</span>, <span lang="it">avrà trent\'anni</span>.',
      ],
    },
    fr: {
      h2: 'Le futur simple comparé au français',
      intro:
        'Bonne nouvelle : le <strong lang="it">futuro</strong> s\'utilise comme le futur simple, y compris après <em>quand</em> (<em>quand j\'arriverai</em> → <span lang="it">quando arriverò</span>). Le futur proche, lui, ne se traduit pas avec <span lang="it">andare</span>.',
      th: ['Français', 'Italien'],
      rows: [
        ['Je partirai demain.', 'Partirò domani.'],
        ['Je vais partir.', 'Parto. / Sto per partire.'],
        ['Il va pleuvoir.', 'Pioverà. / Sta per piovere.'],
        ["Quand j'arriverai, je t'appellerai.", 'Quando arriverò, ti chiamerò.'],
        ['Il doit être chez lui.', 'Sarà a casa.'],
      ],
      points: [
        '<em>Je vais</em> + infinitif → présent (<span lang="it">parto</span>) ou <span lang="it">stare per</span> + infinitif (<span lang="it">sto per partire</span>). <span lang="it">Vado a partire</span> n\'existe pas.',
        'Attention aux terminaisons : <em>je parlerai</em> → <span lang="it">parlerò</span>, <em>tu parleras</em> → <span lang="it">parlerai</span>. Le <span lang="it">-ai</span> italien est la 2<sup>e</sup> personne.',
        'Le futur exprime aussi la supposition, comme <em>il doit être</em> : <span lang="it">sarà a casa</span>.',
      ],
    },
    cs: {
      h2: 'Budoucí čas ve srovnání s češtinou',
      intro:
        'Čeština tvoří budoucnost dvakrát: dokonavým slovesem (<em>udělám</em>) nebo <em>budu</em> + infinitiv (<em>budu dělat</em>). Italština má jeden tvar v jednom slově: <strong lang="it">farò</strong>. A pro blízké plány často stačí přítomný čas.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Zítra pojedu do Říma.', 'Domani andrò a Roma. / Domani vado a Roma.'],
        ['Budu se učit italsky.', "Studierò l'italiano."],
        ['Udělám to.', 'Lo farò.'],
        ['Bude pršet.', 'Pioverà.'],
        ['Asi je doma.', 'Sarà a casa.'],
      ],
      points: [
        '<em>Budu</em> + infinitiv se nepřekládá <span lang="it">sarò</span> + infinitiv: <em>budu mluvit</em> → <span lang="it">parlerò</span>.',
        'U sloves na <span lang="it">-are</span> se <span lang="it">a</span> mění v <strong lang="it">e</strong>: <span lang="it">parlerò</span>, ne <span lang="it">parlarò</span>.',
        'Budoucí čas vyjadřuje i odhad o přítomnosti: <em>asi je doma</em> → <span lang="it">sarà a casa</span>.',
      ],
    },
    pl: {
      h2: 'Czas przyszły w porównaniu z polskim',
      intro:
        'Po polsku przyszłość tworzysz na dwa sposoby: czasownikiem dokonanym (<em>zrobię</em>) albo <em>będę</em> + bezokolicznik (<em>będę robić</em>). Włoski ma jedną formę w jednym słowie: <strong lang="it">farò</strong>. Dla bliskich planów często wystarczy czas teraźniejszy.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Jutro pojadę do Rzymu.', 'Domani andrò a Roma. / Domani vado a Roma.'],
        ['Będę się uczyć włoskiego.', "Studierò l'italiano."],
        ['Zrobię to.', 'Lo farò.'],
        ['Będzie padać.', 'Pioverà.'],
        ['Pewnie jest w domu.', 'Sarà a casa.'],
      ],
      points: [
        '<em>Będę</em> + bezokolicznik to nie <span lang="it">sarò</span> + bezokolicznik: <em>będę mówić</em> → <span lang="it">parlerò</span>.',
        'W czasownikach na <span lang="it">-are</span> <span lang="it">a</span> zmienia się w <strong lang="it">e</strong>: <span lang="it">parlerò</span>, nie <span lang="it">parlarò</span>.',
        'Czas przyszły wyraża też przypuszczenie: <em>pewnie jest w domu</em> → <span lang="it">sarà a casa</span>.',
      ],
    },
    tr: {
      h2: 'Gelecek zaman: Türkçe ile karşılaştırma',
      intro:
        'Türkçedeki <em>-ecek</em> eki İtalyancadaki <strong lang="it">futuro</strong> ile iyi örtüşür: <em>konuşacağım</em> → <span lang="it">parlerò</span>. Ama yakın planlar için İtalyancada çoğu zaman şimdiki zaman yeterlidir: <span lang="it">domani parto</span>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Yarın Roma\'ya gideceğim.', 'Domani andrò a Roma. / Domani vado a Roma.'],
        ['Onunla konuşacağım.', 'Parlerò con lui.'],
        ['Yağmur yağacak.', 'Pioverà.'],
        ['Geldiğimde seni arayacağım.', 'Quando arriverò, ti chiamerò.'],
        ['Evdedir. (tahmin)', 'Sarà a casa.'],
      ],
      points: [
        '<span lang="it">-are</span> ile biten fiillerde <span lang="it">a</span>, <strong lang="it">e</strong> olur: <span lang="it">parlerò</span> (<span lang="it">parlarò</span> değil).',
        '<em>Geldiğimde</em> gibi zaman yan cümleleri <span lang="it">quando</span> + gelecek zamanla kurulabilir: <span lang="it">quando arriverò</span>.',
        'Tahmin bildiren <em>-dır</em> eki (<em>evdedir</em>) İtalyancada gelecek zamanla söylenir: <span lang="it">sarà a casa</span>.',
      ],
    },
    de: {
      h2: 'Das Futur im Vergleich zum Deutschen',
      intro:
        'Wie im Deutschen reicht für die Zukunft oft das <strong>Präsens</strong>: <em>Morgen fahre ich nach Rom</em> → <span lang="it">domani vado a Roma</span>. Das <strong lang="it">futuro</strong> ist aber ein Wort, ohne <em>werden</em>: <span lang="it">andrò</span>.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Morgen fahre ich nach Rom.', 'Domani vado a Roma.'],
        ['Ich werde mit ihm sprechen.', 'Parlerò con lui.'],
        ['Es wird regnen.', 'Pioverà.'],
        ['Er wird wohl zu Hause sein.', 'Sarà a casa.'],
        ['Wenn ich ankomme, rufe ich dich an.', 'Quando arriverò, ti chiamerò.'],
      ],
      points: [
        '<em>Werden</em> + Infinitiv → ein Wort: <span lang="it">parlerò</span>. <span lang="it">Divento</span> heißt <em>werden</em> nur im Sinn von „etwas werden“.',
        'Wie <em>er wird wohl … sein</em> drückt das <span lang="it">futuro</span> eine Vermutung aus: <span lang="it">sarà a casa, avrà trent\'anni</span>.',
        'Bei Verben auf <span lang="it">-are</span> wird das <span lang="it">a</span> zu <strong lang="it">e</strong>: <span lang="it">parlerò</span>, <span lang="it">mangerò</span>.',
      ],
    },
    ja: {
      h2: '未来形と日本語の比較',
      intro:
        '日本語には未来形がなく、「明日行きます」のように現在の形で未来を表します。イタリア語でも近い予定は現在形で言えますが、未来形（<strong lang="it">futuro</strong>）もあります。<span lang="it">andrò</span>（行くでしょう、行きます）。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['明日ローマに行きます。', 'Domani vado a Roma. / Domani andrò a Roma.'],
        ['彼と話します。', 'Parlerò con lui.'],
        ['雨が降るでしょう。', 'Pioverà.'],
        ['家にいるでしょう。', 'Sarà a casa.'],
        ['着いたら電話します。', 'Quando arriverò, ti chiamerò.'],
      ],
      points: [
        '「〜でしょう」（推量）は未来形で言えます。<span lang="it">sarà a casa</span>（家にいるでしょう）、<span lang="it">pioverà</span>（雨が降るでしょう）。',
        '「着いたら」は <span lang="it">quando</span> + 未来形：<span lang="it">quando arriverò</span>。',
        '<span lang="it">-are</span> 動詞は <span lang="it">a</span> が <strong lang="it">e</strong> に変わります：<span lang="it">parlerò</span>、<span lang="it">mangerò</span>。',
      ],
    },
  },

  'grammatica/b1/condizionale-presente.html': {
    after: 'usi',
    it: {
      h2: "Il condizionale: il confronto con l'inglese",
      intro:
        'L\'inglese usa <em lang="en">would, could, should</em> davanti al verbo. L\'italiano mette tutto in una parola sola: <em lang="en">I would go</em> → <strong>andrei</strong>, <em lang="en">could you</em> → <strong>potresti</strong>, <em lang="en">you should</em> → <strong>dovresti</strong>.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ["I'd like a coffee.", 'Vorrei un caffè.'],
        ['Could you help me?', 'Potresti aiutarmi?'],
        ['You should sleep more.', 'Dovresti dormire di più.'],
        ['If I had time, I would travel.', 'Se avessi tempo, viaggerei.'],
        ['Every summer we would go to the sea.', 'Ogni estate andavamo al mare.'],
      ],
      points: [
        'Dopo <span lang="it">se</span> non va il condizionale ma il <strong>congiuntivo</strong>: <span lang="it">se avessi tempo</span>, non <span lang="it">se avrei tempo</span>.',
        '<em lang="en">Would</em> per le abitudini del passato non è condizionale: <span lang="it">andavamo</span> (imperfetto).',
        '<em lang="en">I\'d like</em> → <strong>vorrei</strong> è il modo più naturale per chiedere al bar o in negozio.',
      ],
    },
    en: {
      h2: 'The conditional compared with English',
      intro:
        'English puts <em>would, could, should</em> before the verb. Italian packs it all into one word: <em>I would go</em> → <strong lang="it">andrei</strong>, <em>could you</em> → <strong lang="it">potresti</strong>, <em>you should</em> → <strong lang="it">dovresti</strong>.',
      th: ['English', 'Italian'],
      rows: [
        ["I'd like a coffee.", 'Vorrei un caffè.'],
        ['Could you help me?', 'Potresti aiutarmi?'],
        ['You should sleep more.', 'Dovresti dormire di più.'],
        ['If I had time, I would travel.', 'Se avessi tempo, viaggerei.'],
        ['Every summer we would go to the sea.', 'Ogni estate andavamo al mare.'],
      ],
      points: [
        'After <span lang="it">se</span> (if) Italian uses the <strong>subjunctive</strong>, not the conditional: <span lang="it">se avessi tempo</span>, not <span lang="it">se avrei tempo</span>.',
        '<em>Would</em> for past habits is not the conditional: <span lang="it">andavamo</span> (imperfetto).',
        '<em>I\'d like</em> → <strong lang="it">vorrei</strong> is the most natural way to ask in a bar or a shop.',
      ],
    },
    es: {
      h2: 'El condicional comparado con el español',
      intro:
        'Buena noticia: el <strong lang="it">condizionale</strong> se usa como el condicional español: <em>me gustaría</em> → <span lang="it">mi piacerebbe</span>, <em>podrías</em> → <span lang="it">potresti</span>, <em>deberías</em> → <span lang="it">dovresti</span>. Lo difícil son las terminaciones.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Hablaría con él.', 'Parlerei con lui.'],
        ['Me gustaría viajar.', 'Mi piacerebbe viaggiare.'],
        ['¿Podrías ayudarme?', 'Potresti aiutarmi?'],
        ['Quisiera un café.', 'Vorrei un caffè.'],
        ['Si tuviera tiempo, viajaría.', 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        'La terminación <em>-ía</em> no existe en italiano: <span lang="it">io parlerei</span>, <span lang="it">lui parlerebbe</span>. <em>Gustaría</em> → <span lang="it">piacerebbe</span>.',
        'Como en el futuro, en los verbos en <span lang="it">-are</span> la <span lang="it">a</span> se vuelve <strong lang="it">e</strong>: <em>hablaría</em> → <span lang="it">parlerei</span>.',
        'Como en español, después de <span lang="it">se</span> va el subjuntivo: <em>si tuviera</em> → <span lang="it">se avessi</span>.',
      ],
    },
    pt: {
      h2: 'O condicional comparado com o português',
      intro:
        'Boa notícia: o <strong lang="it">condizionale</strong> se usa como o futuro do pretérito: <em>eu gostaria</em> → <span lang="it">mi piacerebbe</span> ou <span lang="it">vorrei</span>, <em>você poderia</em> → <span lang="it">potresti</span>. O difícil são as terminações.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Eu falaria com ele.', 'Parlerei con lui.'],
        ['Eu gostaria de viajar.', 'Mi piacerebbe viaggiare.'],
        ['Você poderia me ajudar?', 'Potresti aiutarmi?'],
        ['Eu queria um café.', 'Vorrei un caffè.'],
        ['Se eu tivesse tempo, viajaria.', 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        'A terminação <em>-ia</em> não existe em italiano: <span lang="it">io parlerei</span>, <span lang="it">lui parlerebbe</span>. <em>Gostaria</em> → <span lang="it">piacerebbe</span>.',
        'Para pedir no bar, <em>eu queria</em> → <strong lang="it">vorrei</strong> (no bar também se ouve <span lang="it">volevo</span>, como o seu <em>queria</em>).',
        'Como em português, depois de <span lang="it">se</span> vai o subjuntivo: <em>se eu tivesse</em> → <span lang="it">se avessi</span>.',
      ],
    },
    fr: {
      h2: 'Le conditionnel comparé au français',
      intro:
        'Le <strong lang="it">condizionale</strong> s\'utilise comme le conditionnel : <em>je voudrais</em> → <span lang="it">vorrei</span>, <em>tu pourrais</em> → <span lang="it">potresti</span>. Une seule différence importante, après <em>si</em>.',
      th: ['Français', 'Italien'],
      rows: [
        ['Je voudrais un café.', 'Vorrei un caffè.'],
        ['Tu pourrais m\'aider ?', 'Potresti aiutarmi?'],
        ['Tu devrais dormir plus.', 'Dovresti dormire di più.'],
        ["Si j'avais le temps, je voyagerais.", 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        'Après <em>si</em>, le français met l\'imparfait (<em>si j\'avais</em>) ; l\'italien met le <strong lang="it">congiuntivo imperfetto</strong> : <span lang="it">se avessi</span>, pas <span lang="it">se avevo</span>.',
        'Les terminaisons : <em>je parlerais</em> → <span lang="it">parlerei</span>, <em>il parlerait</em> → <span lang="it">parlerebbe</span>, <em>ils parleraient</em> → <span lang="it">parlerebbero</span>.',
        'Comme en français, le conditionnel rend une demande plus polie : <span lang="it">vorrei</span> plutôt que <span lang="it">voglio</span>.',
      ],
    },
    cs: {
      h2: 'Podmiňovací způsob ve srovnání s češtinou',
      intro:
        'Čeština tvoří kondicionál pomocí <em>bych, bys, by</em>: <em>šel bych</em>. Italština to dělá jedním slovem: <strong lang="it">andrei</strong>. A ve větě s <em>kdyby</em> se italština od češtiny liší.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Chtěl bych kávu.', 'Vorrei un caffè.'],
        ['Mohl bys mi pomoct?', 'Potresti aiutarmi?'],
        ['Měl bys víc spát.', 'Dovresti dormire di più.'],
        ['Kdybych měl čas, cestoval bych.', 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        'Česky je kondicionál v obou částech věty (<em>kdybych měl … cestoval bych</em>). Italsky je po <span lang="it">se</span> <strong lang="it">congiuntivo</strong>: <span lang="it">se avessi</span>, ne <span lang="it">se avrei</span>.',
        '<em>Chtěl bych</em> → <span lang="it">vorrei</span>, <em>mohl bys</em> → <span lang="it">potresti</span>, <em>měl bys</em> → <span lang="it">dovresti</span>.',
        'Koncovky: <span lang="it">-ei, -esti, -ebbe, -emmo, -este, -ebbero</span>.',
      ],
    },
    pl: {
      h2: 'Tryb przypuszczający w porównaniu z polskim',
      intro:
        'Po polsku tryb przypuszczający tworzysz z <em>-by</em>: <em>poszedłbym</em>. Po włosku to jedno słowo: <strong lang="it">andrei</strong>. A w zdaniu z <em>gdyby</em> włoski różni się od polskiego.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Chciałbym kawę.', 'Vorrei un caffè.'],
        ['Mógłbyś mi pomóc?', 'Potresti aiutarmi?'],
        ['Powinieneś więcej spać.', 'Dovresti dormire di più.'],
        ['Gdybym miał czas, podróżowałbym.', 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        'Po polsku tryb przypuszczający jest w obu częściach (<em>gdybym miał … podróżowałbym</em>). Po włosku po <span lang="it">se</span> jest <strong lang="it">congiuntivo</strong>: <span lang="it">se avessi</span>, nie <span lang="it">se avrei</span>.',
        '<em>Powinieneś</em> → <span lang="it">dovresti</span>: rada brzmi grzecznie właśnie w trybie warunkowym.',
        'Końcówki: <span lang="it">-ei, -esti, -ebbe, -emmo, -este, -ebbero</span>.',
      ],
    },
    tr: {
      h2: 'Şart kipi: Türkçe ile karşılaştırma',
      intro:
        'Türkçede <em>isterdim, gelirdim</em> gibi <em>-erdi</em> biçimleri ve kibar <em>-ebilir misin</em> soruları İtalyancada <strong lang="it">condizionale</strong> ile söylenir: <span lang="it">vorrei</span>, <span lang="it">potresti</span>.',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Bir kahve istiyorum. (kibar)', 'Vorrei un caffè.'],
        ['Bana yardım edebilir misin?', 'Potresti aiutarmi?'],
        ['Daha çok uyumalısın.', 'Dovresti dormire di più.'],
        ['Vaktim olsa seyahat ederdim.', 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        '<em>-sa</em> şart eki → <span lang="it">se</span> + <strong lang="it">congiuntivo</strong> (<span lang="it">se avessi</span>); <em>-erdi</em> → <span lang="it">condizionale</span> (<span lang="it">viaggerei</span>).',
        'Kibar istek için <span lang="it">voglio</span> yerine <strong lang="it">vorrei</strong> kullanılır.',
        'Ekler: <span lang="it">-ei, -esti, -ebbe, -emmo, -este, -ebbero</span>.',
      ],
    },
    de: {
      h2: 'Der Konditional im Vergleich zum Deutschen',
      intro:
        'Wo das Deutsche <em>würde</em> + Infinitiv oder den Konjunktiv II benutzt, hat das Italienische ein Wort: <em>ich würde fahren</em> → <strong lang="it">andrei</strong>, <em>ich möchte</em> → <strong lang="it">vorrei</strong>, <em>könntest du</em> → <strong lang="it">potresti</strong>.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich möchte einen Kaffee.', 'Vorrei un caffè.'],
        ['Könntest du mir helfen?', 'Potresti aiutarmi?'],
        ['Du solltest mehr schlafen.', 'Dovresti dormire di più.'],
        ['Wenn ich Zeit hätte, würde ich reisen.', 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        'Im <em>wenn</em>-Satz steht nicht der Konditional, sondern der <strong lang="it">congiuntivo</strong>: <em>wenn ich hätte</em> → <span lang="it">se avessi</span>, nicht <span lang="it">se avrei</span>.',
        '<em>Würde</em> wird nicht übersetzt: <span lang="it">viaggerei</span> = <em>ich würde reisen</em>.',
        'Endungen: <span lang="it">-ei, -esti, -ebbe, -emmo, -este, -ebbero</span>.',
      ],
    },
    ja: {
      h2: '条件法と日本語の丁寧な言い方',
      intro:
        '日本語の「〜たいのですが」「〜てくれませんか」「〜したほうがいい」は、イタリア語では <strong lang="it">condizionale</strong> で表すことが多いです。<span lang="it">vorrei</span>、<span lang="it">potresti</span>、<span lang="it">dovresti</span>。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['コーヒーをお願いしたいのですが。', 'Vorrei un caffè.'],
        ['手伝ってくれませんか。', 'Potresti aiutarmi?'],
        ['もっと寝たほうがいいよ。', 'Dovresti dormire di più.'],
        ['時間があったら旅行するのに。', 'Se avessi tempo, viaggerei.'],
      ],
      points: [
        '「〜たら…のに」：<span lang="it">se</span> のあとは <strong lang="it">congiuntivo</strong>（<span lang="it">se avessi</span>）、もう一方が条件法（<span lang="it">viaggerei</span>）です。',
        '注文するときは <span lang="it">voglio</span>（ほしい）より <strong lang="it">vorrei</strong> のほうが丁寧です。',
        '語尾：<span lang="it">-ei, -esti, -ebbe, -emmo, -este, -ebbero</span>。',
      ],
    },
  },

  'grammatica/a2/pronomi-diretti.html': {
    it: {
      h2: "I pronomi diretti: il confronto con l'inglese",
      intro:
        'In inglese il pronome va <strong>dopo</strong> il verbo (<em lang="en">I see him</em>); in italiano va <strong>prima</strong>: <span lang="it">lo vedo</span>. E <em lang="en">it</em> non esiste: si sceglie <strong>lo</strong> o <strong>la</strong> secondo il genere della cosa.',
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I see him every day.', 'Lo vedo ogni giorno.'],
        ['The pizza? I\'ll eat it.', 'La pizza? La mangio.'],
        ['I saw her yesterday.', "L'ho vista ieri."],
        ['I bought them.', 'Li ho comprati.'],
        ['I want to see it.', 'Voglio vederlo. / Lo voglio vedere.'],
      ],
      points: [
        'Il pronome sta prima del verbo coniugato: <span lang="it">lo vedo</span>, <span lang="it">la chiamo</span>. Con l\'infinito si può attaccare alla fine: <span lang="it">vederlo</span>.',
        '<em lang="en">It</em> e <em lang="en">them</em> dipendono dal genere: <span lang="it">il libro → lo</span>, <span lang="it">la pizza → la</span>, <span lang="it">i libri → li</span>, <span lang="it">le chiavi → le</span>.',
        'Al passato prossimo il participio si accorda con <span lang="it">lo, la, li, le</span>: <span lang="it">l\'ho vista, li ho comprati</span>.',
      ],
    },
    en: {
      h2: 'Direct object pronouns compared with English',
      intro:
        'In English the pronoun goes <strong>after</strong> the verb (<em>I see him</em>); in Italian it goes <strong>before</strong>: <span lang="it">lo vedo</span>. And there is no <em>it</em>: you choose <strong lang="it">lo</strong> or <strong lang="it">la</strong> by the gender of the thing.',
      th: ['English', 'Italian'],
      rows: [
        ['I see him every day.', 'Lo vedo ogni giorno.'],
        ["The pizza? I'll eat it.", 'La pizza? La mangio.'],
        ['I saw her yesterday.', "L'ho vista ieri."],
        ['I bought them.', 'Li ho comprati.'],
        ['I want to see it.', 'Voglio vederlo. / Lo voglio vedere.'],
      ],
      points: [
        'The pronoun goes before the conjugated verb: <span lang="it">lo vedo</span>, <span lang="it">la chiamo</span>. With an infinitive it can be attached at the end: <span lang="it">vederlo</span>.',
        '<em>It</em> and <em>them</em> depend on gender: <span lang="it">il libro → lo</span>, <span lang="it">la pizza → la</span>, <span lang="it">i libri → li</span>, <span lang="it">le chiavi → le</span>.',
        'In the passato prossimo the participle agrees with <span lang="it">lo, la, li, le</span>: <span lang="it">l\'ho vista, li ho comprati</span>.',
      ],
    },
    es: {
      h2: 'Los pronombres directos comparados con el español',
      intro:
        'Buena noticia: el pronombre va delante del verbo, como en español (<em>lo veo</em> → <span lang="it">lo vedo</span>), y se pega al infinitivo (<em>verlo</em> → <span lang="it">vederlo</span>). Cambian los plurales y el participio.',
      th: ['Español', 'Italiano'],
      rows: [
        ['Lo veo.', 'Lo vedo.'],
        ['Los compro. / Las compro.', 'Li compro. / Le compro.'],
        ['A Marco le veo mucho. (leísmo)', 'Marco lo vedo spesso.'],
        ['La he visto.', "L'ho vista."],
        ['Quiero verlo.', 'Voglio vederlo.'],
      ],
      points: [
        '<em>Los</em> → <strong lang="it">li</strong>, <em>las</em> → <strong lang="it">le</strong>. Ojo: el <span lang="it">le</span> italiano es femenino plural, no <em>le</em> de persona.',
        'Sin leísmo: para una persona masculina, siempre <strong lang="it">lo</strong>: <span lang="it">lo vedo</span>, <span lang="it">lo conosco</span>.',
        'Con el <span lang="it">passato prossimo</span> el participio concuerda: <em>la he visto</em> → <span lang="it">l\'ho vista</span>, <em>los he comprado</em> → <span lang="it">li ho comprati</span>.',
      ],
    },
    pt: {
      h2: 'Os pronomes diretos comparados com o português',
      intro:
        'No Brasil o pronome objeto muitas vezes some (<em>Comprou o pão? Comprei.</em>) ou vira <em>ele / ela</em> depois do verbo (<em>vi ela</em>). Em italiano ele é obrigatório e vem antes do verbo: <strong lang="it">l\'ho comprato</strong>, <strong lang="it">l\'ho vista</strong>.',
      th: ['Português', 'Italiano'],
      rows: [
        ['Comprou o pão? Comprei.', "Hai comprato il pane? Sì, l'ho comprato."],
        ['Eu vi ela ontem.', "L'ho vista ieri."],
        ['Te amo.', 'Ti amo.'],
        ['Comprei os livros. Comprei eles.', 'Li ho comprati.'],
        ['Quero ver isso.', 'Voglio vederlo.'],
      ],
      points: [
        'Não deixe o verbo sozinho: <span lang="it">sì, l\'ho comprato</span>, não <span lang="it">sì, ho comprato</span>.',
        '<em>Ele, ela, eles, elas</em> como objeto → <strong lang="it">lo, la, li, le</strong>, antes do verbo.',
        'No <span lang="it">passato prossimo</span> o particípio concorda com o pronome: <span lang="it">l\'ho vista</span>, <span lang="it">li ho comprati</span>.',
      ],
    },
    fr: {
      h2: 'Les pronoms directs comparés au français',
      intro:
        'Bonne nouvelle : comme en français, le pronom se place avant le verbe, s\'élide (<em>je l\'ai vue</em> → <span lang="it">l\'ho vista</span>) et le participe s\'accorde. La différence est au pluriel : <em>les</em> a deux formes.',
      th: ['Français', 'Italien'],
      rows: [
        ['Je le vois.', 'Lo vedo.'],
        ['Je les achète. (les livres / les clés)', 'Li compro. / Le compro.'],
        ["Je l'ai vue hier.", "L'ho vista ieri."],
        ['Regarde-le !', 'Guardalo!'],
        ['Je veux le voir.', 'Voglio vederlo. / Lo voglio vedere.'],
      ],
      points: [
        '<em>Les</em> → <strong lang="it">li</strong> (masculin) ou <strong lang="it">le</strong> (féminin) : <span lang="it">i libri → li</span>, <span lang="it">le chiavi → le</span>.',
        'Avec un infinitif, le pronom peut se coller à la fin : <span lang="it">vederlo</span>.',
        'À l\'impératif, comme en français, il vient après, mais sans trait d\'union : <span lang="it">guardalo</span>.',
      ],
    },
    cs: {
      h2: 'Přímé předměty ve srovnání s češtinou',
      intro:
        'České <em>ho, ji, je</em> stojí na druhém místě ve větě (<em>Já ho vidím</em>). Italské zájmeno stojí vždy <strong>těsně před slovesem</strong>: <span lang="it">lo vedo</span>. Rod znáte, ale v minulém čase se příčestí shoduje s <strong>předmětem</strong>.',
      th: ['Česky', 'Italsky'],
      rows: [
        ['Vidím ho každý den.', 'Lo vedo ogni giorno.'],
        ['Pizza? Sním ji.', 'La pizza? La mangio.'],
        ['Viděl jsem ji včera.', "L'ho vista ieri."],
        ['Koupil jsem je. (knihy)', 'Li ho comprati.'],
        ['Chci ho vidět.', 'Voglio vederlo. / Lo voglio vedere.'],
      ],
      points: [
        'Zájmeno stojí těsně před časovaným slovesem: <span lang="it">lo vedo</span>, <span lang="it">la chiamo</span>. K infinitivu se může připojit: <span lang="it">vederlo</span>.',
        '<em>Viděl jsem ji</em>: česky se příčestí shoduje s mluvčím (<em>viděl / viděla</em>), italsky s předmětem: <span lang="it">l\'ho vista</span> (ji), <span lang="it">l\'ho visto</span> (ho).',
        '<em>Je</em> → <span lang="it">li</span> (mužský rod) nebo <span lang="it">le</span> (ženský rod).',
      ],
    },
    pl: {
      h2: 'Zaimki w bierniku w porównaniu z polskim',
      intro:
        'Polskie <em>go, ją, je</em> stoją dość swobodnie (<em>Widzę go</em>, <em>Ja go widzę</em>). Włoski zaimek stoi zawsze <strong>tuż przed czasownikiem</strong>: <span lang="it">lo vedo</span>. A w czasie przeszłym imiesłów zgadza się z <strong>dopełnieniem</strong>.',
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Widzę go codziennie.', 'Lo vedo ogni giorno.'],
        ['Pizza? Zjem ją.', 'La pizza? La mangio.'],
        ['Widziałem ją wczoraj.', "L'ho vista ieri."],
        ['Kupiłem je. (książki)', 'Li ho comprati.'],
        ['Chcę go zobaczyć.', 'Voglio vederlo. / Lo voglio vedere.'],
      ],
      points: [
        'Zaimek stoi tuż przed odmienionym czasownikiem: <span lang="it">lo vedo</span>. Do bezokolicznika można go dokleić: <span lang="it">vederlo</span>.',
        '<em>Widziałem ją</em>: po polsku imiesłów zgadza się z mówiącym (<em>widziałem / widziałam</em>), po włosku z dopełnieniem: <span lang="it">l\'ho vista</span> (ją), <span lang="it">l\'ho visto</span> (jego).',
        '<em>Je</em> → <span lang="it">li</span> (rodzaj męski) albo <span lang="it">le</span> (żeński).',
      ],
    },
    tr: {
      h2: 'Nesne zamirleri: Türkçe ile karşılaştırma',
      intro:
        'Türkçede nesne çoğu zaman söylenmez (<em>Gördüm</em>) ya da <em>onu</em> ile söylenir ve cinsiyet yoktur. İtalyancada nesne zamiri gereklidir, fiilden <strong>önce</strong> gelir ve cinsiyete göre değişir: <strong lang="it">lo</strong> (eril), <strong lang="it">la</strong> (dişil).',
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Onu her gün görüyorum.', 'Lo vedo ogni giorno.'],
        ['Pizza mı? Onu yiyorum.', 'La pizza? La mangio.'],
        ['Dün gördüm. (onu)', "L'ho vista ieri. / L'ho visto ieri."],
        ['Onları aldım. (kitapları)', 'Li ho comprati.'],
        ['Onu görmek istiyorum.', 'Voglio vederlo.'],
      ],
      points: [
        'Nesne düşmez: <em>gördüm</em> → <span lang="it">l\'ho visto</span>; <span lang="it">ho visto</span> tek başına eksik kalır.',
        '<em>Onu</em> için <span lang="it">lo</span> ya da <span lang="it">la</span> seçilir: <span lang="it">il libro → lo</span>, <span lang="it">la pizza → la</span>.',
        'Geçmiş zamanda ortaç zamire uyar: <span lang="it">l\'ho vista</span> (onu, kadın), <span lang="it">li ho comprati</span>.',
      ],
    },
    de: {
      h2: 'Direkte Objektpronomen im Vergleich zum Deutschen',
      intro:
        'Im Deutschen steht das Pronomen hinter dem Verb (<em>Ich sehe ihn</em>); im Italienischen <strong>davor</strong>: <span lang="it">lo vedo</span>. Das Genus kennst du schon (<em>die Pizza → sie</em> → <span lang="it">la</span>), aber das Partizip richtet sich nach dem Pronomen.',
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich sehe ihn jeden Tag.', 'Lo vedo ogni giorno.'],
        ['Die Pizza? Ich esse sie.', 'La pizza? La mangio.'],
        ['Ich habe sie gestern gesehen.', "L'ho vista ieri."],
        ['Ich habe sie gekauft. (die Bücher)', 'Li ho comprati.'],
        ['Ich will es sehen.', 'Voglio vederlo.'],
      ],
      points: [
        'Das Pronomen steht vor dem konjugierten Verb: <span lang="it">lo vedo</span>. Beim Infinitiv kann es angehängt werden: <span lang="it">vederlo</span>.',
        '<em>Sie</em> (Plural) hat zwei Formen: <span lang="it">li</span> (männlich) und <span lang="it">le</span> (weiblich).',
        'Im Perfekt richtet sich das Partizip nach <span lang="it">lo, la, li, le</span>: <span lang="it">l\'ho vista, li ho comprati</span>.',
      ],
    },
    ja: {
      h2: '直接目的語の代名詞と日本語の比較',
      intro:
        '日本語では「見ました」のように目的語をよく省きますが、イタリア語では代名詞が必要です。動詞の<strong>前</strong>に置き、物の性で <strong lang="it">lo</strong>（男性）か <strong lang="it">la</strong>（女性）を選びます。',
      th: ['日本語', 'イタリア語'],
      rows: [
        ['（彼を）毎日見ます。', 'Lo vedo ogni giorno.'],
        ['ピザ？食べます。', 'La pizza? La mangio.'],
        ['（彼女を）昨日見ました。', "L'ho vista ieri."],
        ['（本を）買いました。', 'Li ho comprati.'],
        ['見たいです。', 'Voglio vederlo.'],
      ],
      points: [
        '目的語を省かないでください。「買いました」→ <span lang="it">l\'ho comprato</span>（<span lang="it">ho comprato</span> だけでは足りません）。',
        '「それ」は物の性で変わります：<span lang="it">il libro → lo</span>、<span lang="it">la pizza → la</span>、複数は <span lang="it">li / le</span>。',
        '過去形では過去分詞が代名詞に合わせます：<span lang="it">l\'ho vista</span>、<span lang="it">li ho comprati</span>。',
      ],
    },
  },
};
