// Confronto con la lingua dello studente ed errori tipici della lezione «Gli articoli indeterminativi» (A1), rifatta
// il 2026-11-24 (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs,
// che li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese «a / an» solo secondo il suono, «I'm a student», «a friend of mine», «another»;
// spagnolo e portoghese «unos / uns» che non esistono, «otro café / outro café» senza articolo, «un agua»; francese
// «des» che in italiano spesso sparisce, «un ami / une amie»; tedesco il neutro, «ein Freund von mir», «kein»; ceco,
// polacco e giapponese nessun articolo (si dimentica) e il neutro slavo; turco «bir» dopo l'aggettivo.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const AI = 'grammatica/a1/articoli-indeterminativi.html';

export const NOTES_INDETERMINATIVI = {
  [AI]: {
    it: {
      h2: "Gli articoli indeterminativi: il confronto con l'inglese",
      intro: `L'inglese sceglie fra <em lang="en">a</em> e <em lang="en">an</em> solo secondo il suono; l'italiano guarda anche il ${b('genere')}: ${i('un, uno')} al maschile, ${i('una, un’')} al femminile.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['a book · a house', 'un libro · una casa'],
        ['a friend (he) · a friend (she)', 'un amico · un’amica'],
        ["I'm a student.", 'Sono studente.'],
        ['a friend of mine', 'un mio amico'],
        ['some books', 'dei libri'],
      ],
      points: [
        `<em lang="en">An</em> non ha un equivalente unico: ${i('un amico')} senza apostrofo, ${i('un’amica')} con l'apostrofo.`,
        `<em lang="en">I'm a student / a doctor</em> → ${b('sono studente')}, senza articolo.`,
        `<em lang="en">Another</em> → ${i('un altro')}, due parole; <em lang="en">what a day!</em> → ${i('che giornata!')}`,
      ],
    },
    en: {
      h2: 'Indefinite articles compared with English',
      intro: `English chooses between <em>a</em> and <em>an</em> by sound only; Italian also looks at ${b('gender')}: ${i('un, uno')} for masculine, ${i('una, un’')} for feminine.`,
      th: ['English', 'Italian'],
      rows: [
        ['a book · a house', 'un libro · una casa'],
        ['a friend (he) · a friend (she)', 'un amico · un’amica'],
        ["I'm a student.", 'Sono studente.'],
        ['a friend of mine', 'un mio amico'],
        ['some books', 'dei libri'],
      ],
      points: [
        `There is no single Italian “an”: ${i('un amico')} with no apostrophe, ${i('un’amica')} with one.`,
        `<em>I’m a student / a doctor</em> → ${b('sono studente')}, no article.`,
        `<em>Another</em> → ${i('un altro')}, two words; <em>what a day!</em> → ${i('che giornata!')}`,
      ],
    },
    es: {
      h2: 'Los artículos indeterminados: comparación con el español',
      intro: `Casi como en español: ${i('un')} y ${i('una')}. Pero el italiano añade ${b('uno')} (delante de s + consonante, z…) y ${b('un’')} (femenino delante de vocal), y no tiene «unos, unas».`,
      th: ['Español', 'Italiano'],
      rows: [
        ['un libro · una casa', 'un libro · una casa'],
        ['un estudiante', 'uno studente'],
        ['una amiga', 'un’amica'],
        ['unos libros', 'dei libri'],
        ['otro café', 'un altro caffè'],
      ],
      points: [
        `«Unos, unas» no existen: ${b('dei, degli, delle')}, ${i('alcuni')} o nada.`,
        `«Otro café» lleva artículo en italiano: ${b('un altro caffè')}.`,
        `«Una amiga» → ${b('un’amica')}, con apóstrofo; y «un agua» no tiene equivalente: siempre ${i('un’')} delante de vocal.`,
      ],
    },
    pt: {
      h2: 'Os artigos indefinidos: comparação com o português',
      intro: `Quase como em português: ${i('un')} e ${i('una')}, como «um» e «uma». Mas o italiano acrescenta ${b('uno')} (antes de s + consoante, z…) e ${b('un’')} (feminino antes de vogal), e não tem «uns, umas».`,
      th: ['Português', 'Italiano'],
      rows: [
        ['um livro · uma casa', 'un libro · una casa'],
        ['um estudante', 'uno studente'],
        ['uma amiga', 'un’amica'],
        ['uns livros', 'dei libri'],
        ['outro café', 'un altro caffè'],
      ],
      points: [
        `«Uns, umas» não existem: ${b('dei, degli, delle')}, ${i('alcuni')} ou nada.`,
        `«Outro café» leva artigo em italiano: ${b('un altro caffè')}.`,
        `«Um» se escreve ${b('un')}, sem «m»: ${i('un libro')}, nunca ${i('um libro')}.`,
      ],
    },
    fr: {
      h2: 'Les articles indéfinis : comparaison avec le français',
      intro: `Presque comme en français : ${i('un')} et ${i('una')}, comme « un » et « une ». Mais l’italien ajoute ${b('uno')} (devant s + consonne, z…) et ${b('un’')} (féminin devant voyelle), et « des » disparaît souvent.`,
      th: ['Français', 'Italien'],
      rows: [
        ['un livre · une maison', 'un libro · una casa'],
        ['un étudiant', 'uno studente'],
        ['une amie', 'un’amica'],
        ['des livres', 'dei libri'],
        ["J'ai des amis à Rome.", 'Ho amici a Roma.'],
      ],
      points: [
        `« Une amie » → ${b('un’amica')} : l’apostrophe marque le féminin, comme le « e » muet en français.`,
        `« Des » → ${i('dei, degli, delle')}, mais souvent rien : ${b('ho amici a Roma')}.`,
        `« Un de mes amis » → ${b('un mio amico')}, sans « de ».`,
      ],
    },
    cs: {
      h2: 'Neurčité členy: srovnání s češtinou',
      intro: `Čeština členy nemá, italština je potřebuje skoro před každým podstatným jménem. Česky «mám psa», italsky ${b('ho un cane')}. A střední rod v italštině není.`,
      th: ['Česky', 'Italsky'],
      rows: [
        ['Mám psa.', 'Ho un cane.'],
        ['Je tu bar?', 'C’è un bar?'],
        ['Řím je krásné město.', 'Roma è una città bellissima.'],
        ['jeden můj kamarád', 'un mio amico'],
        ['Jsem student.', 'Sono studente.'],
      ],
      points: [
        `Neurčitý člen často odpovídá českému «nějaký» nebo «jeden», ale většinou česky nestojí nic: italsky ho ${b('nevynechávejte')}.`,
        `Česká slova středního rodu jsou italsky mužská nebo ženská: «auto» → ${i('una macchina')}, «okno» → ${i('una finestra')}.`,
        `Povolání po ${i('essere')} je bez členu jako v češtině: ${b('sono studente')}.`,
      ],
    },
    pl: {
      h2: 'Rodzajniki nieokreślone: porównanie z polskim',
      intro: `Polski nie ma rodzajników, włoski potrzebuje ich prawie przed każdym rzeczownikiem. Po polsku «mam psa», po włosku ${b('ho un cane')}. I nie ma rodzaju nijakiego.`,
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Mam psa.', 'Ho un cane.'],
        ['Jest tu bar?', 'C’è un bar?'],
        ['Rzym to piękne miasto.', 'Roma è una città bellissima.'],
        ['jeden z moich przyjaciół', 'un mio amico'],
        ['Jestem studentem.', 'Sono studente.'],
      ],
      points: [
        `Rodzajnik nieokreślony odpowiada czasem polskiemu «jakiś» albo «jeden», ale zwykle po polsku nic nie stoi: po włosku go ${b('nie pomijaj')}.`,
        `Polskie słowa rodzaju nijakiego są po włosku męskie albo żeńskie: «auto» → ${i('una macchina')}, «okno» → ${i('una finestra')}.`,
        `Zawód po ${i('essere')} bez rodzajnika, jak po polsku: ${b('sono studente')}.`,
      ],
    },
    tr: {
      h2: 'Belirsiz artikeller: Türkçeyle karşılaştırma',
      intro: `İtalyanca belirsiz artikel Türkçedeki «bir» gibidir, ama cinsiyete ve sese göre dört biçimi vardır: ${i('un, uno, una, un’')}. Ve sıfattan önce gelir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['bir kitap · bir ev', 'un libro · una casa'],
        ['bir öğrenci', 'uno studente'],
        ['güzel bir gün', 'una bella giornata'],
        ['Bir sorum var.', 'Ho una domanda.'],
        ['Öğrenciyim.', 'Sono studente.'],
      ],
      points: [
        `«Güzel bir gün» → ${b('una bella giornata')}: artikel en başta.`,
        `Türkçede «bir» çoğu zaman düşer («sorum var»), İtalyancada artikel gerekir: ${b('ho una domanda')}.`,
        `«Öğrenciyim» → ${b('sono studente')}, artikelsiz.`,
      ],
    },
    de: {
      h2: 'Unbestimmte Artikel: Vergleich mit dem Deutschen',
      intro: `Wie «ein, eine», aber ohne Neutrum und ohne Fälle: ${i('un, uno')} für Maskulina, ${i('una, un’')} für Feminina. Die Form hängt auch vom ersten Laut des Wortes ab.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['ein Buch · ein Haus', 'un libro · una casa'],
        ['ein Student', 'uno studente'],
        ['eine Freundin', 'un’amica'],
        ['ein Freund von mir', 'un mio amico'],
        ['Was für ein schöner Tag!', 'Che bella giornata!'],
      ],
      points: [
        `Kein Neutrum: «das Buch» → ${i('il libro')}, «das Haus» → ${i('la casa')}. Das Genus mit jedem Wort lernen.`,
        `Keine Fälle: «einen, einem, einer» sind immer ${b('un, uno, una, un’')}.`,
        `«Kein Auto» → ${i('non ho la macchina')} oder ${i('non ho una macchina')}: «kein» ist ${i('non')} + Verb.`,
      ],
    },
    ja: {
      h2: '不定冠詞：日本語との比較',
      intro: `日本語には冠詞がありませんが、イタリア語ではほとんどの名詞の前に冠詞が必要です。「犬を飼っています」→ ${b('ho un cane')}。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['犬を飼っています。', 'Ho un cane.'],
        ['近くにバールはありますか？', 'C’è un bar qui vicino?'],
        ['ローマは美しい町です。', 'Roma è una città bellissima.'],
        ['友だちの一人', 'un mio amico'],
        ['私は学生です。', 'Sono studente.'],
      ],
      points: [
        `日本語で何もつけないところでも、イタリア語では ${b('un, uno, una, un’')} が必要です。`,
        `名詞は冠詞といっしょに覚えましょう：${i('un libro')}、${i('una casa')}。`,
        `「〜は学生です」のような職業は冠詞なし：${b('sono studente')}。`,
      ],
    },
  },
};

export const ERRORS_INDETERMINATIVI = {
  [AI]: {
    it: [
      ['un altra volta', 'un’altra volta', `<em lang="en">Another time</em>: ${i('volta')} è femminile, quindi ${b('un’altra')}, con l'apostrofo.`],
      ['un amica', 'un’amica', `<em lang="en">An</em> al femminile è ${b('un’')}, con l'apostrofo.`],
      ['un’amico', 'un amico', `Al maschile ${b('un')} non ha mai l'apostrofo.`],
      ['un studente', 'uno studente', `s + consonante → ${b('uno')}.`],
      ['un amico di me', 'un mio amico', `<em lang="en">A friend of mine</em> → ${b('un mio amico')}.`],
    ],
    en: [
      ['un altra volta', 'un’altra volta', `<em>Another time</em>: ${i('volta')} is feminine, so ${b('un’altra')}, with an apostrophe.`],
      ['un amica', 'un’amica', `“An” in the feminine is ${b('un’')}, with an apostrophe.`],
      ['un’amico', 'un amico', `In the masculine, ${b('un')} never has an apostrophe.`],
      ['un studente', 'uno studente', `s + consonant → ${b('uno')}.`],
      ['un amico di me', 'un mio amico', `<em>A friend of mine</em> → ${b('un mio amico')}.`],
    ],
    es: [
      ['Vorrei altro caffè.', 'Vorrei un altro caffè.', `«Otro café» → ${b('un altro caffè')}, con artículo.`],
      ['uni libri', 'dei libri', `«Unos libros» → ${b('dei libri')}: no existe el plural de ${i('un')}.`],
      ['una amica', 'un’amica', `Femenino delante de vocal → ${b('un’')}, con apóstrofo.`],
      ['un studente', 'uno studente', `«Un estudiante» → ${b('uno studente')}: s + consonante.`],
      ['un amico mio', 'un mio amico', `«Un amigo mío» → ${b('un mio amico')}: el posesivo va antes.`],
    ],
    pt: [
      ['Vorrei altro caffè.', 'Vorrei un altro caffè.', `«Outro café» → ${b('un altro caffè')}, com artigo.`],
      ['uni libri', 'dei libri', `«Uns livros» → ${b('dei libri')}: o plural de ${i('un')} não existe.`],
      ['um libro', 'un libro', `«Um» → ${b('un')}, sem «m».`],
      ['una amica', 'un’amica', `Feminino antes de vogal → ${b('un’')}, com apóstrofo.`],
      ['un studente', 'uno studente', `«Um estudante» → ${b('uno studente')}: s + consoante.`],
    ],
    fr: [
      ['une amica', 'un’amica', `« Une amie » → ${b('un’amica')}.`],
      ['Ho dei amici a Roma.', 'Ho amici a Roma.', `« J’ai des amis » → souvent sans article ; et « des amis » se dirait ${i('degli amici')}.`],
      ['un studente', 'uno studente', `« Un étudiant » → ${b('uno studente')} : s + consonne.`],
      ['un amico dei miei', 'un mio amico', `« Un de mes amis » → ${b('un mio amico')}.`],
      ['un’amico', 'un amico', `Au masculin, ${b('un')} n’a jamais d’apostrophe.`],
    ],
    cs: [
      ['Ho cane.', 'Ho un cane.', `«Mám psa» → ${b('ho un cane')}: člen nevynechávejte.`],
      ['C’è bar qui vicino?', 'C’è un bar qui vicino?', `«Je tu bar?» → ${b('c’è un bar?')}`],
      ['Roma è città bellissima.', 'Roma è una città bellissima.', `«Krásné město» → ${b('una città bellissima')}.`],
      ['un studente', 'uno studente', `s + souhláska → ${b('uno')}.`],
      ['un macchina', 'una macchina', `«Auto» (střední rod) je italsky ženské: ${b('una macchina')}.`],
    ],
    pl: [
      ['Ho cane.', 'Ho un cane.', `«Mam psa» → ${b('ho un cane')}: nie pomijaj rodzajnika.`],
      ['C’è bar qui vicino?', 'C’è un bar qui vicino?', `«Jest tu bar?» → ${b('c’è un bar?')}`],
      ['Roma è città bellissima.', 'Roma è una città bellissima.', `«Piękne miasto» → ${b('una città bellissima')}.`],
      ['un studente', 'uno studente', `s + spółgłoska → ${b('uno')}.`],
      ['un macchina', 'una macchina', `«Auto» (rodzaj nijaki) jest po włosku żeńskie: ${b('una macchina')}.`],
    ],
    tr: [
      ['Ho domanda.', 'Ho una domanda.', `«Sorum var» → ${b('ho una domanda')}: artikel gerekir.`],
      ['bella una giornata', 'una bella giornata', `«Güzel bir gün» → ${b('una bella giornata')}: artikel başta.`],
      ['un’uomo', 'un uomo', `${i('Uomo')} erildir: ${b('un uomo')}, kesme işaretsiz.`],
      ['un studente', 'uno studente', `s + ünsüz → ${b('uno')}.`],
      ['un casa', 'una casa', `${i('Casa')} dişildir: ${b('una casa')}.`],
    ],
    de: [
      ['un ragazza', 'una ragazza', `«Das Mädchen» ist im Italienischen feminin: ${b('una ragazza')}.`],
      ['una problema', 'un problema', `«Das Problem» ist maskulin: ${b('un problema')}.`],
      ['un studente', 'uno studente', `s + Konsonant → ${b('uno')}.`],
      ['un amico di me', 'un mio amico', `«Ein Freund von mir» → ${b('un mio amico')}.`],
      ['Che una bella giornata!', 'Che bella giornata!', `«Was für ein schöner Tag!» → ${b('che bella giornata!')}, ohne Artikel.`],
    ],
    ja: [
      ['Ho cane.', 'Ho un cane.', `「犬を飼っています」→ ${b('ho un cane')}。冠詞を忘れずに。`],
      ['C’è bar qui vicino?', 'C’è un bar qui vicino?', `「近くにバールはありますか？」→ ${b('c’è un bar?')}`],
      ['Roma è città bellissima.', 'Roma è una città bellissima.', `「美しい町」→ ${b('una città bellissima')}。`],
      ['un studente', 'uno studente', `s + 子音 → ${b('uno')}。`],
      ['un amica', 'un’amica', `女性 + 母音 → ${b('un’')}（アポストロフィつき）。`],
    ],
  },
};
