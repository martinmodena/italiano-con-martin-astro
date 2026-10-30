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

};
