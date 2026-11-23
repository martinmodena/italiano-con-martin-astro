// Errori tipici della lezione «Gli articoli determinativi» (A1), rifatta il 2026-11-23, per chi parla ogni lingua:
// cinque per lingua al posto dei tre o quattro di ottobre. Stesso formato di errori-lingua.mjs, che li aggiunge a
// ERRORS; li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese l'articolo in generale e con i Paesi; spagnolo «los / las», il possessivo con
// l'articolo, il genere (la leche); portoghese l'articolo con i nomi di persona e le città (o Rio), «as»;
// francese «les», il possessivo, il genere (la mer); ceco, polacco, turco e giapponese senza articoli: lo
// dimenticano; tedesco «die» al plurale, il genere (die Sonne). Per tutti: il studente, i amici.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const AD = 'grammatica/a1/articoli-determinativi.html';

export const ERRORS_ARTICOLI_DETERMINATIVI = {
  [AD]: {
    it: [
      ['Caffè è buono.', 'Il caffè è buono.', `<em lang="en">Coffee is good</em>: in generale l’italiano vuole l’articolo.`],
      ['Mi piace musica.', 'Mi piace la musica.', `<em lang="en">I like music</em> → ${b('la musica')}.`],
      ['Italia è bella.', 'L’Italia è bella.', 'I Paesi hanno l’articolo.'],
      ['il studente', 'lo studente', `Davanti a ${i('s')} + consonante: ${b('lo')}.`],
      ['i amici', 'gli amici', `Plurale maschile davanti a vocale: ${b('gli')}.`],
    ],
    en: [
      ['Caffè è buono.', 'Il caffè è buono.', `<em>Coffee is good</em>: general statements need the article in Italian.`],
      ['Mi piace musica.', 'Mi piace la musica.', `<em>I like music</em> → ${b('la musica')}.`],
      ['Italia è bella.', 'L’Italia è bella.', 'Countries take the article.'],
      ['il studente', 'lo studente', `Before ${i('s')} + consonant: ${b('lo')}.`],
      ['Mi lavo mie mani.', 'Mi lavo le mani.', `<em>I wash my hands</em> → ${b('le mani')}, the article instead of “my”.`],
    ],
    es: [
      ['las case', 'le case', `<em>Las casas</em> → ${b('le')} case.`],
      ['i studenti', 'gli studenti', `<em>Los estudiantes</em>: delante de ${i('s')} + consonante, ${b('gli')}.`],
      ['mia casa', 'la mia casa', `<em>Mi casa</em>: en italiano el posesivo lleva ${b('artículo')}.`],
      ['la latte', 'il latte', `<em>La leche</em>, pero en italiano es masculino: ${b('il latte')}.`],
      ['Arrivo il lunedì.', 'Arrivo lunedì.', `<em>Llego el lunes</em> (este lunes) va sin artículo; ${i('il lunedì')} es «todos los lunes».`],
    ],
    pt: [
      ['Il Giovanni è arrivato.', 'Giovanni è arrivato.', `<em>O João</em>: em italiano nomes de pessoas não levam artigo.`],
      ['La Roma è bella.', 'Roma è bella.', `<em>O Rio, a Bahia</em>: em italiano as cidades ficam ${b('sem artigo')}.`],
      ['i studenti', 'gli studenti', `<em>Os estudantes</em>: antes de ${i('s')} + consoante, ${b('gli')}.`],
      ['la albero', 'l’albero', `<em>A árvore</em>, mas em italiano é masculino e com vogal: ${b('l’albero')}.`],
      ['as case', 'le case', `<em>As casas</em> → ${b('le')} case.`],
    ],
    fr: [
      ['les case', 'le case', `<em>Les maisons</em> → ${b('le')} case ; <em>les livres</em> → ${b('i')} libri.`],
      ['i ragazze', 'le ragazze', `<em>Les filles</em> : au féminin pluriel, ${b('le')}.`],
      ['i studenti', 'gli studenti', `<em>Les étudiants</em> : devant ${i('s')} + consonne, ${b('gli')}.`],
      ['mia casa', 'la mia casa', `<em>Ma maison</em> : en italien, ${b('article')} + possessif.`],
      ['la mare', 'il mare', `<em>La mer</em>, mais ${i('mare')} est ${b('masculin')}.`],
    ],
    cs: [
      ['Italia è bella.', 'L’Italia è bella.', 'Čeština členy nemá, ale italské státy ho mají.'],
      ['Mi piace musica.', 'Mi piace la musica.', `<em>Mám rád hudbu</em> → obecně, ale ${b('se členem')}.`],
      ['Libro è sul tavolo.', 'Il libro è sul tavolo.', `<em>Kniha je na stole</em>: italsky ${b('člen')} nesmí chybět.`],
      ['il luna', 'la luna', `<em>Měsíc</em> je mužského rodu, ${i('luna')} ${b('ženského')}.`],
      ['il studente', 'lo studente', `Před ${i('s')} + souhláskou: ${b('lo')}.`],
    ],
    pl: [
      ['Italia è bella.', 'L’Italia è bella.', 'Polski nie ma rodzajników, ale włoskie kraje go mają.'],
      ['Mi piace musica.', 'Mi piace la musica.', `<em>Lubię muzykę</em> → ogólnie, ale ${b('z rodzajnikiem')}.`],
      ['Libro è sul tavolo.', 'Il libro è sul tavolo.', `<em>Książka jest na stole</em>: po włosku ${b('rodzajnik')} nie może zniknąć.`],
      ['il luna', 'la luna', `<em>Księżyc</em> jest rodzaju męskiego, ${i('luna')} ${b('żeńskiego')}.`],
      ['il studente', 'lo studente', `Przed ${i('s')} + spółgłoską: ${b('lo')}.`],
    ],
    tr: [
      ['Caffè è buono.', 'Il caffè è buono.', `<em>Kahve güzel</em>: İtalyancada genel konuşurken de ${b('artikel')} gerekir.`],
      ['Italia è bella.', 'L’Italia è bella.', 'Ülke adları artikel alır.'],
      ['Libro è sul tavolo.', 'Il libro è sul tavolo.', `<em>Kitap masada</em>: İtalyancada ${b('artikel')} atlanmaz.`],
      ['il studente', 'lo studente', `${i('s')} + ünsüz önünde ${b('lo')}.`],
      ['i amici', 'gli amici', `Ünlüyle başlayan eril çoğul: ${b('gli')}.`],
    ],
    de: [
      ['Caffè è buono.', 'Il caffè è buono.', `<em>Kaffee ist gut</em>: im Italienischen ${b('mit Artikel')}.`],
      ['la sole', 'il sole', `<em>Die Sonne</em>, aber ${i('sole')} ist ${b('männlich')}.`],
      ['il luna', 'la luna', `<em>Der Mond</em>, aber ${i('luna')} ist ${b('weiblich')}.`],
      ['le libri', 'i libri', `<em>Die Bücher</em>: männlicher Plural → ${b('i')}, nicht ${i('le')}.`],
      ['il studente', 'lo studente', `Vor ${i('s')} + Konsonant: ${b('lo')}.`],
    ],
    ja: [
      ['Caffè è buono.', 'Il caffè è buono.', '「コーヒーは」の「は」の代わりに冠詞が必要です。'],
      ['Mi piace musica.', 'Mi piace la musica.', '「音楽が好き」も冠詞をつけます。'],
      ['Italia è bella.', 'L’Italia è bella.', '国名にも冠詞をつけます。'],
      ['Libro è sul tavolo.', 'Il libro è sul tavolo.', `「本は机の上にある」：${b('冠詞')}は省けません。`],
      ['i amici', 'gli amici', `母音で始まる男性複数は ${b('gli')}。`],
    ],
  },
};
