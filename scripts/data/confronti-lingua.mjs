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
};
