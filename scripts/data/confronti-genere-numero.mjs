// Confronto con la lingua dello studente ed errori tipici della lezione «Genere e numero dei nomi» (A1), rifatta il
// 2026-11-23 (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs,
// che li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese senza genere e con il plurale in -s; spagnolo e portoghese stesso sistema ma
// plurale con la -s e generi diversi (la leche / il latte, a flor / il fiore, a cor / il colore); francese -s muta
// e generi diversi (la fleur, la mer, l'été); tedesco senza neutro e senza Umlaut (die Sonne / il sole, das
// Mädchen / la ragazza); ceco e polacco senza neutro, senza casi, e il genere che non coincide; turco senza
// genere, plurale in -ler e il singolare dopo i numeri (iki kitap / due libri); giapponese senza genere né plurale.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const GN = 'grammatica/a1/genere-e-numero.html';

export const NOTES_GENERE_NUMERO = {
  [GN]: {
    it: {
      h2: "Genere e numero: il confronto con l'inglese",
      intro: `In inglese le cose non hanno genere (<em lang="en">the book, the house</em>) e il plurale si fa con <em lang="en">-s</em>. In italiano ogni nome è ${b('maschile o femminile')} e al plurale cambia l'ultima vocale.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['the book → the books', 'il libro → i libri'],
        ['the house → the houses', 'la casa → le case'],
        ['the key → the keys', 'la chiave → le chiavi'],
        ['two coffees', 'due caffè'],
        ['people are nice', 'la gente è simpatica'],
      ],
      points: [
        `<em lang="en">The</em> ha quattro forme al singolare e tre al plurale: ${i('il, lo, la, l’')} → ${i('i, gli, le')}.`,
        `Niente <em lang="en">-s</em>: ${i('due libri')}, mai ${i('due libros')}; e le parole inglesi restano uguali: ${i('i computer')}.`,
        `${i('La gente')} è singolare, <em lang="en">people</em> è plurale.`,
      ],
    },
    en: {
      h2: 'Gender and number compared with English',
      intro: `In English things have no gender (<em>the book, the house</em>) and the plural takes <em>-s</em>. In Italian every noun is ${b('masculine or feminine')} and the plural changes the last vowel.`,
      th: ['English', 'Italian'],
      rows: [
        ['the book → the books', 'il libro → i libri'],
        ['the house → the houses', 'la casa → le case'],
        ['the key → the keys', 'la chiave → le chiavi'],
        ['two coffees', 'due caffè'],
        ['people are nice', 'la gente è simpatica'],
      ],
      points: [
        `<em>The</em> has four forms in the singular and three in the plural: ${i('il, lo, la, l’')} → ${i('i, gli, le')}.`,
        `No <em>-s</em>: ${i('due libri')}; and English words used in Italian don’t change: ${i('i computer')}, not “i computers”.`,
        `${i('La gente')} is singular, while <em>people</em> is plural.`,
      ],
    },
    es: {
      h2: 'Género y número comparados con el español',
      intro: `El sistema es el mismo del español: masculino y femenino, ${i('-o')} y ${i('-a')}. Cambian dos cosas: el plural ${b('no lleva -s')}, y algunas palabras tienen otro género.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['los libros, las casas', 'i libri, le case'],
        ['la leche', 'il latte'],
        ['la flor', 'il fiore'],
        ['la sangre', 'il sangue'],
        ['el árbol', 'l’albero (m)'],
        ['los cafés', 'i caffè'],
      ],
      points: [
        `Plural sin <em>-s</em>: <em>los libros</em> → ${i('i libri')}, <em>las casas</em> → ${i('le case')}.`,
        `Género distinto: ${i('il latte, il fiore, il sangue, il dolore, il colore')} son masculinos.`,
        `Los acabados en vocal acentuada no cambian: <em>los cafés</em> → ${i('i caffè')}.`,
      ],
    },
    pt: {
      h2: 'Gênero e número comparados com o português',
      intro: `O sistema é o mesmo do português: masculino e feminino, ${i('-o')} e ${i('-a')}. Mudam duas coisas: o plural ${b('não tem -s')}, e algumas palavras têm outro gênero.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['os livros, as casas', 'i libri, le case'],
        ['a flor', 'il fiore'],
        ['a cor', 'il colore'],
        ['a dor', 'il dolore'],
        ['a árvore', 'l’albero (m)'],
        ['os cafés', 'i caffè'],
      ],
      points: [
        `Plural sem <em>-s</em>: <em>os livros</em> → ${i('i libri')}, <em>as casas</em> → ${i('le case')}.`,
        `Gênero diferente: ${i('il fiore, il colore, il dolore, il ponte')} são masculinos.`,
        `As palavras com acento na última vogal não mudam: <em>os cafés</em> → ${i('i caffè')}.`,
      ],
    },
    fr: {
      h2: 'Genre et nombre comparés au français',
      intro: `Le système ressemble au français : masculin et féminin. Mais en italien le genre se voit à la fin du mot (${i('-o')}, ${i('-a')}), et le pluriel ${b('s’entend')} : pas de -s muet.`,
      th: ['Français', 'Italien'],
      rows: [
        ['les livres, les maisons', 'i libri, le case'],
        ['la fleur', 'il fiore'],
        ['la mer', 'il mare'],
        ['la couleur', 'il colore'],
        ['l’été (m)', 'l’estate (f)'],
        ['les cafés', 'i caffè'],
      ],
      points: [
        `Un seul article pluriel en français (<em>les</em>), trois en italien : ${i('i, gli, le')}.`,
        `Genre différent : ${i('il fiore, il mare, il colore, il dolore')} ; ${i('la primavera, l’estate')} sont féminins.`,
        `Les mots en voyelle accentuée ne changent pas : <em>les cafés</em> → ${i('i caffè')}.`,
      ],
    },
    cs: {
      h2: 'Rod a číslo ve srovnání s češtinou',
      intro: `Italština má jen ${b('dva rody')}: mužský a ženský, střední ne. A nemá pády: jedno slovo má jen dva tvary, ${i('libro')} a ${i('libri')}. Navíc má členy, které čeština nezná.`,
      th: ['Česky', 'Italsky'],
      rows: [
        ['kniha (ž)', 'il libro (m)'],
        ['slunce (s)', 'il sole (m)'],
        ['měsíc (m)', 'la luna (ž)'],
        ['auto (s)', 'la macchina (ž)'],
        ['dvě knihy, pět knih', 'due libri, cinque libri'],
      ],
      points: [
        `Střední rod neexistuje: <em>slunce</em> → ${i('il sole')}, <em>moře</em> → ${i('il mare')}, <em>dítě</em> → ${i('il bambino / la bambina')}.`,
        `Po číslovce je vždy stejný tvar: ${i('due libri, cinque libri')}.`,
        `Rod se pozná podle koncovky a členu, ne podle češtiny.`,
      ],
    },
    pl: {
      h2: 'Rodzaj i liczba w porównaniu z polskim',
      intro: `Włoski ma tylko ${b('dwa rodzaje')}: męski i żeński, nijakiego nie ma. Nie ma też przypadków: jedno słowo ma tylko dwie formy, ${i('libro')} i ${i('libri')}. Za to ma rodzajniki, których polski nie zna.`,
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['książka (ż)', 'il libro (m)'],
        ['słońce (n)', 'il sole (m)'],
        ['księżyc (m)', 'la luna (ż)'],
        ['auto (n)', 'la macchina (ż)'],
        ['dwie książki, pięć książek', 'due libri, cinque libri'],
      ],
      points: [
        `Rodzaju nijakiego nie ma: <em>słońce</em> → ${i('il sole')}, <em>morze</em> → ${i('il mare')}, <em>dziecko</em> → ${i('il bambino / la bambina')}.`,
        `Po liczebniku zawsze ta sama forma: ${i('due libri, cinque libri')}.`,
        `Rodzaj poznaje się po końcówce i rodzajniku, nie po polskim.`,
      ],
    },
    tr: {
      h2: 'Cinsiyet ve çoğul: Türkçe ile karşılaştırma',
      intro: `Türkçede dil bilgisel cinsiyet yoktur ve çoğul <em>-ler / -lar</em> ile yapılır. İtalyancada her isim ${b('eril ya da dişildir')}, çoğulda son ünlü değişir ve artikel de değişir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['kitap → kitaplar', 'il libro → i libri'],
        ['ev → evler', 'la casa → le case'],
        ['iki kitap', 'due libri'],
        ['üç elma', 'tre mele'],
        ['iki kahve', 'due caffè'],
      ],
      points: [
        `Sayılardan sonra Türkçe tekil kullanır (<em>iki kitap</em>); İtalyanca ${b('çoğul')}: ${i('due libri')}.`,
        `Türkçede artikel yoktur; İtalyancada isim artikelle öğrenilir: ${i('il libro, la casa')}.`,
        `Eril ya da dişil, kelimenin anlamına değil sonuna bağlıdır: ${i('il libro')} (eril), ${i('la casa')} (dişil).`,
      ],
    },
    de: {
      h2: 'Geschlecht und Zahl im Vergleich zum Deutschen',
      intro: `Das Italienische hat nur ${b('zwei Geschlechter')}: männlich und weiblich, kein Neutrum. Und der Plural ist fast immer regelmäßig: Es ändert sich nur der letzte Vokal.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['das Buch → die Bücher', 'il libro → i libri'],
        ['das Haus → die Häuser', 'la casa → le case'],
        ['die Sonne', 'il sole (m)'],
        ['der Mond', 'la luna (f)'],
        ['das Mädchen', 'la ragazza (f)'],
      ],
      points: [
        `Kein Neutrum: <em>das Buch</em> → ${i('il libro')}, <em>das Auto</em> → ${i('la macchina')}.`,
        `Kein Umlaut, kein -er, -en, -s: nur ${i('-o → -i')}, ${i('-a → -e')}, ${i('-e → -i')}.`,
        `Das deutsche Geschlecht hilft nicht: <em>die Sonne</em> → ${i('il sole')}, <em>der Mond</em> → ${i('la luna')}.`,
      ],
    },
    ja: {
      h2: '名詞の性と数：日本語とのちがい',
      intro: `日本語の名詞には性も複数形もありません。イタリア語では名詞がすべて ${b('男性か女性')} で、数が2つ以上なら形を変えます。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['本（1冊）', 'il libro'],
        ['本（2冊）', 'i libri'],
        ['家（たくさん）', 'le case'],
        ['りんご3つ', 'tre mele'],
        ['コーヒー2杯', 'due caffè'],
      ],
      points: [
        `数が2つ以上なら ${b('必ず複数形')}：${i('due libri')}（${i('due libro')} はまちがい）。`,
        `日本語の「〜冊、〜杯」のような数え方の言葉はいりません：${i('tre mele')}。`,
        `名詞は冠詞といっしょに覚えると、性も単数・複数もわかります：${i('il libro / i libri')}。`,
      ],
    },
  },
};

export const ERRORS_GENERE_NUMERO = {
  [GN]: {
    it: [
      ['i casa', 'le case', `Femminile plurale: articolo ${b('le')} e finale ${b('-e')}.`],
      ['due libros', 'due libri', `Niente <em lang="en">-s</em>: ${i('-o')} diventa ${b('-i')}.`],
      ['la problema', 'il problema', `${i('Problema')} è ${b('maschile')}, come i nomi in ${i('-ma')}.`],
      ['i computers', 'i computer', 'Le parole inglesi in italiano non cambiano al plurale.'],
      ['la gente sono simpatiche', 'la gente è simpatica', `<em lang="en">People</em> è plurale, ${i('la gente')} è ${b('singolare')}.`],
    ],
    en: [
      ['i casa', 'le case', `Feminine plural: article ${b('le')} and ending ${b('-e')}.`],
      ['due libros', 'due libri', `No <em>-s</em>: ${i('-o')} becomes ${b('-i')}.`],
      ['la problema', 'il problema', `${i('Problema')} is ${b('masculine')}, like the nouns in ${i('-ma')}.`],
      ['i computers', 'i computer', 'English words used in Italian don’t change in the plural.'],
      ['la gente sono simpatiche', 'la gente è simpatica', `<em>People</em> is plural, ${i('la gente')} is ${b('singular')}.`],
    ],
    es: [
      ['las casas', 'le case', `Ni <em>las</em> ni <em>-s</em>: ${b('le case')}.`],
      ['i libros', 'i libri', `Plural sin <em>-s</em>: ${i('-o')} se vuelve ${b('-i')}.`],
      ['la latte', 'il latte', `<em>La leche</em>, pero ${b('il latte')}: masculino.`],
      ['la fiore', 'il fiore', `<em>La flor</em>, pero ${b('il fiore')}: masculino.`],
      ['i caffès', 'i caffè', 'Con acento en la última vocal el plural no cambia.'],
    ],
    pt: [
      ['as casas', 'le case', `Nem <em>as</em> nem <em>-s</em>: ${b('le case')}.`],
      ['i livros', 'i libri', `Plural sem <em>-s</em>: ${i('-o')} vira ${b('-i')}.`],
      ['la fiore', 'il fiore', `<em>A flor</em>, mas ${b('il fiore')}: masculino.`],
      ['la colore', 'il colore', `<em>A cor</em>, mas ${b('il colore')}: masculino.`],
      ['i caffès', 'i caffè', 'Com acento na última vogal o plural não muda.'],
    ],
    fr: [
      ['les case', 'le case', `<em>Les</em> → ${b('le')} au féminin, ${b('i / gli')} au masculin.`],
      ['i libros', 'i libri', `Pas de <em>-s</em> : ${i('-o')} devient ${b('-i')}.`],
      ['la fiore', 'il fiore', `<em>La fleur</em>, mais ${b('il fiore')} : masculin.`],
      ['la mare', 'il mare', `<em>La mer</em>, mais ${b('il mare')} : masculin.`],
      ['i caffès', 'i caffè', 'Avec un accent sur la dernière voyelle, le pluriel ne change pas.'],
    ],
    cs: [
      ['la libro', 'il libro', `<em>Kniha</em> je ženského rodu, ale ${b('il libro')} mužského: rozhoduje ${i('-o')}.`],
      ['la sole', 'il sole', `<em>Slunce</em> (střední) → ${b('il sole')}, mužský rod.`],
      ['cinque libro', 'cinque libri', `Po číslovce vždy ${b('množné číslo')}: ${i('libri')}.`],
      ['le libri', 'i libri', `Mužský rod v množném čísle: ${b('i')}, ne ${i('le')}.`],
      ['le cittè', 'le città', 'Slova s přízvukem na konci se nemění.'],
    ],
    pl: [
      ['la libro', 'il libro', `<em>Książka</em> jest żeńska, ale ${b('il libro')} męski: decyduje ${i('-o')}.`],
      ['la sole', 'il sole', `<em>Słońce</em> (nijakie) → ${b('il sole')}, męski.`],
      ['cinque libro', 'cinque libri', `Po liczebniku zawsze ${b('liczba mnoga')}: ${i('libri')}.`],
      ['le libri', 'i libri', `Męski w liczbie mnogiej: ${b('i')}, nie ${i('le')}.`],
      ['la gente sono simpatici', 'la gente è simpatica', `${i('La gente')} to ${b('liczba pojedyncza')}, inaczej niż „ludzie”.`],
    ],
    tr: [
      ['due libro', 'due libri', `<em>İki kitap</em>: İtalyancada sayıdan sonra ${b('çoğul')} gelir.`],
      ['libro', 'il libro', `İsim ${b('artikelle')} kullanılır: ${i('il libro, la casa')}.`],
      ['i casa', 'le case', `Dişil çoğul: artikel ${b('le')}, son ${b('-e')}.`],
      ['i libroler', 'i libri', `<em>-ler</em> eki yoktur: ${i('-o')} → ${b('-i')}.`],
      ['la problema', 'il problema', `${i('Problema')} ${b('erildir')}, ${i('-ma')} ile biten isimler gibi.`],
    ],
    de: [
      ['lo libro', 'il libro', `<em>Das Buch</em>: kein Neutrum, ${b('il libro')} ist männlich.`],
      ['la sole', 'il sole', `<em>Die Sonne</em> → ${b('il sole')}, männlich.`],
      ['il luna', 'la luna', `<em>Der Mond</em> → ${b('la luna')}, weiblich.`],
      ['i librien', 'i libri', `Kein -en: ${i('-o')} wird ${b('-i')}.`],
      ['i computers', 'i computer', 'Englische Wörter bekommen im Italienischen kein -s.'],
    ],
    ja: [
      ['due libro', 'due libri', `2つ以上なら ${b('複数形')}：${i('libri')}。`],
      ['libro', 'il libro', `名詞は ${b('冠詞')} といっしょに使います：${i('il libro')}。`],
      ['i casa', 'le case', `女性の複数は ${b('le')} と ${b('-e')}。`],
      ['la problema', 'il problema', `${i('problema')} は ${b('男性名詞')}です。`],
      ['le cittàe', 'le città', 'アクセント記号で終わる名詞は複数でも変わりません。'],
    ],
  },
};
