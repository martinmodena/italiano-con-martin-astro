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
};
