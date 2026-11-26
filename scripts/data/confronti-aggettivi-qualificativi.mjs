// Confronto con la lingua dello studente ed errori tipici della lezione «Gli aggettivi qualificativi» (A1), rifatta il
// 2026-11-26 (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che
// li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese aggettivi invariabili e prima del nome, nazionalità con la maiuscola, «very» = molto
// invariabile, «I'm good»; spagnolo e portoghese «estar cansado» → sto stanco, «muy / muito» → molta, «azules / azuis»,
// bello senza troncamento; francese «marron» invariabile, il genere diverso (la mer → il mare), «un bel homme», «les
// gens»; tedesco l'aggettivo predicativo invariabile («die Häuser sind neu»), il neutro («das Auto»), prima del nome;
// ceco e polacco prima del nome, il neutro («auto»), la desinenza -é / -ie del plurale («dlouhé vlasy, długie
// włosy»); turco niente genere né plurale dopo i numeri, «iyi» per buono e bene, prima del nome; giapponese niente
// genere né numero, l'aggettivo prima del nome.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const AQ = 'grammatica/a1/aggettivi-qualificativi.html';

export const NOTES_AGGETTIVI = {
  [AQ]: {
    after: 'regola',
    it: {
      h2: 'Gli aggettivi: il confronto con l’inglese',
      intro: `In inglese l’aggettivo non cambia mai e va prima del nome: <em lang="en">a new house, two new houses</em>. In italiano cambia con il nome e di solito va dopo.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['a new house', 'una casa nuova'],
        ['two new houses', 'due case nuove'],
        ['a red car', 'una macchina rossa'],
        ['The houses are very nice.', 'Le case sono molto belle.'],
        ['an Italian friend', 'un’amica italiana'],
      ],
      points: [
        `L’aggettivo prende genere e numero del nome: ${i('nuovo, nuova, nuovi, nuove')}.`,
        `Colori e nazionalità vanno ${b('dopo')} il nome: ${i('una macchina rossa')}.`,
        `Le nazionalità si scrivono con la ${b('minuscola')}: ${i('italiano, inglese')}.`,
      ],
    },
    en: {
      h2: 'Adjectives compared with English',
      intro: `English adjectives never change and go before the noun: <em>a new house, two new houses</em>. Italian adjectives change with the noun and usually come after it.`,
      th: ['English', 'Italian'],
      rows: [
        ['a new house', 'una casa nuova'],
        ['two new houses', 'due case nuove'],
        ['a red car', 'una macchina rossa'],
        ['The houses are very nice.', 'Le case sono molto belle.'],
        ['an Italian friend', 'un’amica italiana'],
      ],
      points: [
        `The adjective takes the gender and number of the noun: ${i('nuovo, nuova, nuovi, nuove')}.`,
        `Colours and nationalities go ${b('after')} the noun: ${i('una macchina rossa')}.`,
        `Nationalities take a ${b('small letter')}: ${i('italiano, inglese')}, not <em>Italiano</em>.`,
      ],
    },
    es: {
      h2: 'Los adjetivos comparados con el español',
      intro: `Aquí el español ayuda mucho: el adjetivo concuerda con el nombre y suele ir detrás, igual que en italiano. Las trampas están en los verbos y en algunos detalles.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['una casa nueva', 'una casa nuova'],
        ['Estoy cansado.', 'Sono stanco.'],
        ['Es muy guapa.', 'È molto bella.'],
        ['unos ojos azules', 'degli occhi blu · azzurri'],
        ['un chico guapo', 'un bel ragazzo'],
      ],
      points: [
        `«Estar» + adjetivo no es ${i('stare')}: «estoy cansado» → ${b('sono stanco')}.`,
        `${i('Bello')} se acorta delante del nombre, como el artículo: ${b('un bel ragazzo')}, ${b('begli occhi')}.`,
        `${i('Blu')} y ${i('rosa')} no cambian nunca: ${i('due borse blu')}.`,
      ],
    },
    pt: {
      h2: 'Os adjetivos comparados com o português',
      intro: `Aqui o português ajuda muito: o adjetivo concorda com o nome e geralmente vem depois, como em italiano. As armadilhas estão nos verbos e em alguns detalhes.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['uma casa nova', 'una casa nuova'],
        ['Estou cansado.', 'Sono stanco.'],
        ['Ela é muito bonita.', 'È molto bella.'],
        ['uns olhos azuis', 'degli occhi azzurri'],
        ['um menino bonito', 'un bel ragazzo'],
      ],
      points: [
        `«Estar» + adjetivo não é ${i('stare')}: «estou cansado» → ${b('sono stanco')}.`,
        `${i('Bello')} encurta antes do nome, como o artigo: ${b('un bel ragazzo')}, ${b('begli occhi')}.`,
        `${i('Blu')} não muda: «carros azuis» → ${b('macchine blu')}.`,
      ],
    },
    fr: {
      h2: 'Les adjectifs comparés au français',
      intro: `Le français aide beaucoup : l’adjectif s’accorde et se place surtout après le nom, avec les mêmes exceptions (beau, bon, petit, grand). Les pièges : le genre des noms et quelques couleurs.`,
      th: ['Français', 'Italien'],
      rows: [
        ['une maison neuve', 'una casa nuova'],
        ['La mer est belle.', 'Il mare è bello.'],
        ['des chaussures marron', 'delle scarpe marroni'],
        ['un bel homme', 'un bell’uomo'],
        ['Les gens sont gentils.', 'La gente è gentile.'],
      ],
      points: [
        `L’adjectif suit le genre ${b('italien')} du nom : ${i('il mare')} est masculin, donc ${i('bello')}.`,
        `${i('Marrone')} et ${i('arancione')} s’accordent au pluriel : ${b('marroni, arancioni')}.`,
        `${i('Bello')} change comme l’article : ${b('bel')}, ${b('bell’')}, ${b('bei')}, ${b('begli')}.`,
      ],
    },
    cs: {
      h2: 'Přídavná jména ve srovnání s češtinou',
      intro: `Jako v češtině se přídavné jméno shoduje s podstatným jménem v rodě a čísle. Rozdíl: v italštině stojí většinou ${b('za')} podstatným jménem a neexistuje střední rod.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['nový dům', 'una casa nuova'],
        ['červené auto', 'una macchina rossa'],
        ['Auto je nové.', 'L’auto è nuova.'],
        ['dlouhé vlasy', 'i capelli lunghi'],
        ['Marek a Anna jsou milí.', 'Marco e Anna sono simpatici.'],
      ],
      points: [
        `Barvy a národnosti jdou ${b('za')} podstatné jméno: ${i('una macchina rossa')}.`,
        `Střední rod neexistuje: ${i('l’auto')} je ženského rodu, ${i('il mare')} mužského.`,
        `Koncovka -e není jen „dlouhé“: ${i('capelli')} jsou mužského rodu, tedy ${b('lunghi')}.`,
      ],
    },
    pl: {
      h2: 'Przymiotniki w porównaniu z polskim',
      intro: `Jak w polskim przymiotnik zgadza się z rzeczownikiem w rodzaju i liczbie. Różnica: po włosku stoi zwykle ${b('po')} rzeczowniku i nie ma rodzaju nijakiego.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['nowy dom', 'una casa nuova'],
        ['czerwony samochód', 'una macchina rossa'],
        ['Auto jest nowe.', 'L’auto è nuova.'],
        ['długie włosy', 'i capelli lunghi'],
        ['Marek i Anna są mili.', 'Marco e Anna sono simpatici.'],
      ],
      points: [
        `Kolory i narodowości stoją ${b('po')} rzeczowniku: ${i('una macchina rossa')}.`,
        `Nie ma rodzaju nijakiego: ${i('l’auto')} jest rodzaju żeńskiego, ${i('il mare')} męskiego.`,
        `Końcówka -e to nie „długie”: ${i('capelli')} są rodzaju męskiego, więc ${b('lunghi')}.`,
      ],
    },
    tr: {
      h2: 'Sıfatlar ve Türkçe',
      intro: `Türkçede sıfat değişmez ve ismin önüne gelir: “yeni ev, iki yeni ev”. İtalyancada sıfat ismin ${b('cinsiyetine')} ve ${b('sayısına')} göre değişir ve genellikle ${b('arkaya')} gelir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['yeni bir ev', 'una casa nuova'],
        ['iki yeni ev', 'due case nuove'],
        ['kırmızı bir araba', 'una macchina rossa'],
        ['Anna yorgun.', 'Anna è stanca.'],
        ['Pizza iyi. · İyiyim.', 'La pizza è buona. · Sto bene.'],
      ],
      points: [
        `Sayıdan sonra hem isim hem sıfat çoğul olur: ${b('due case nuove')}.`,
        `Kadın için ${b('-a')}, erkek için ${b('-o')}: ${i('Anna è stanca, Marco è stanco')}.`,
        `“İyi” iki kelimedir: şey için ${b('buono')}, durum için ${b('bene')}.`,
      ],
    },
    de: {
      h2: 'Die Adjektive im Vergleich mit dem Deutschen',
      intro: `Im Deutschen ändert sich das Adjektiv nur vor dem Nomen; nach „sein“ bleibt es gleich: „die Häuser sind neu“. Im Italienischen passt es sich ${b('immer')} an und steht meistens ${b('nach')} dem Nomen.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['ein neues Haus', 'una casa nuova'],
        ['Die Häuser sind neu.', 'Le case sono nuove.'],
        ['ein rotes Auto', 'una macchina rossa'],
        ['Das Auto ist neu.', 'L’auto è nuova.'],
        ['Mir geht es gut. · Die Pizza ist gut.', 'Sto bene. · La pizza è buona.'],
      ],
      points: [
        `Auch nach ${i('essere')} wird angeglichen: ${b('le case sono nuove')}.`,
        `Es gibt kein Neutrum: ${i('l’auto')} ist weiblich, ${i('il mare')} männlich.`,
        `„Gut“ hat zwei Formen: ${b('buono')} (Adjektiv) und ${b('bene')} (Adverb).`,
      ],
    },
    ja: {
      h2: '形容詞と日本語',
      intro: `日本語の形容詞は名詞の前に置き、形は変わりません（新しい家、二軒の新しい家）。イタリア語では名詞の${b('性と数')}に合わせて形が変わり、ふつう名詞の${b('後ろ')}に置きます。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['新しい家', 'una casa nuova'],
        ['二軒の新しい家', 'due case nuove'],
        ['赤い車', 'una macchina rossa'],
        ['アンナは疲れています。', 'Anna è stanca.'],
        ['マルコとアンナは感じがいい。', 'Marco e Anna sono simpatici.'],
      ],
      points: [
        `語尾は 4 つ：${i('nuovo, nuova, nuovi, nuove')}。名詞の性と数を先に確認しましょう。`,
        `色と国籍は名詞の${b('後ろ')}：${i('una macchina rossa, un amico giapponese')}。`,
        `「とても」は ${b('molto')} で、形容詞の前では変わりません：${i('molto belle')}。`,
      ],
    },
  },
};

export const ERRORS_AGGETTIVI = {
  [AQ]: {
    it: [
      ['due macchine rosso', 'due macchine rosse', `In inglese <em lang="en">red</em> non cambia; in italiano l’aggettivo si accorda: ${b('rosse')}.`],
      ['una rossa macchina', 'una macchina rossa', `I colori vanno ${b('dopo')} il nome, non prima come in inglese.`],
      ['un amico Italiano', 'un amico italiano', `Le nazionalità si scrivono con la ${b('minuscola')}.`],
      ['Le case sono molte belle.', 'Le case sono molto belle.', `<em lang="en">Very</em> = ${b('molto')}, che davanti a un aggettivo non cambia.`],
      ['Sono buono, grazie.', 'Sto bene, grazie.', `<em lang="en">I’m good</em> per dire come stai è ${b('sto bene')}.`],
    ],
    en: [
      ['due macchine rosso', 'due macchine rosse', `<em>Red</em> never changes; Italian adjectives agree: ${b('rosse')}.`],
      ['una rossa macchina', 'una macchina rossa', `Colours go ${b('after')} the noun.`],
      ['un amico Italiano', 'un amico italiano', `Nationalities take a ${b('small letter')} in Italian.`],
      ['Le case sono molte belle.', 'Le case sono molto belle.', `<em>Very</em> = ${b('molto')}, which never changes before an adjective.`],
      ['Sono buono, grazie.', 'Sto bene, grazie.', `<em>I’m good</em> (I’m fine) → ${b('sto bene')}.`],
    ],
    es: [
      ['Sto stanco.', 'Sono stanco.', `«Estoy cansado» → ${b('sono stanco')}: con los adjetivos se usa ${i('essere')}.`],
      ['Maria è molta bella.', 'Maria è molto bella.', `«Muy» es ${b('molto')} y delante de un adjetivo no cambia.`],
      ['due macchine blue', 'due macchine blu', `«Azules» cambia, ${b('blu')} no.`],
      ['un bello ragazzo', 'un bel ragazzo', `«Un chico guapo»: delante del nombre ${i('bello')} se acorta, ${b('bel')}.`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `«Simpáticos» → ${b('simpatici')}, sin h; el femenino sí la lleva: ${i('simpatiche')}.`],
    ],
    pt: [
      ['Sto stanco.', 'Sono stanco.', `«Estou cansado» → ${b('sono stanco')}: com adjetivos se usa ${i('essere')}.`],
      ['Maria è molta bella.', 'Maria è molto bella.', `«Muito» antes de adjetivo é ${b('molto')} e não muda.`],
      ['due macchine blue', 'due macchine blu', `«Azuis» muda, ${b('blu')} não.`],
      ['un bello ragazzo', 'un bel ragazzo', `Antes do nome ${i('bello')} encurta: ${b('bel')}.`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `«Simpáticos» → ${b('simpatici')}, sem h; o feminino tem: ${i('simpatiche')}.`],
    ],
    fr: [
      ['delle scarpe marrone', 'delle scarpe marroni', `« Marron » ne change pas, ${b('marrone')} si : ${b('marroni')}.`],
      ['Il mare è bella.', 'Il mare è bello.', `« La mer » est féminin, ${i('il mare')} masculin : ${b('bello')}.`],
      ['un bel uomo', 'un bell’uomo', `Devant une voyelle, ${b('bell’')}, avec l’apostrophe.`],
      ['La gente sono gentili.', 'La gente è gentile.', `« Les gens » est pluriel, ${i('la gente')} singulier.`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `${b('Simpatici')} sans h ; le féminin en a un : ${i('simpatiche')}.`],
    ],
    cs: [
      ['una rossa macchina', 'una macchina rossa', `„Červené auto“: italsky barva stojí ${b('za')} podstatným jménem.`],
      ['L’auto è nuovo.', 'L’auto è nuova.', `„Auto je nové“ je střední rod; italsky je ${i('auto')} ženského rodu: ${b('nuova')}.`],
      ['Ha i capelli lunghe.', 'Ha i capelli lunghi.', `„Dlouhé vlasy“, ale ${i('capelli')} jsou mužského rodu: ${b('lunghi')}.`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `${b('Simpatici')} bez h; ženský rod ho má: ${i('simpatiche')}.`],
      ['un bello ragazzo', 'un bel ragazzo', `Před podstatným jménem se ${i('bello')} zkracuje: ${b('bel')}.`],
    ],
    pl: [
      ['una rossa macchina', 'una macchina rossa', `„Czerwony samochód”: po włosku kolor stoi ${b('po')} rzeczowniku.`],
      ['L’auto è nuovo.', 'L’auto è nuova.', `„Auto jest nowe” to rodzaj nijaki; po włosku ${i('auto')} jest rodzaju żeńskiego: ${b('nuova')}.`],
      ['Ha i capelli lunghe.', 'Ha i capelli lunghi.', `„Długie włosy”, ale ${i('capelli')} są rodzaju męskiego: ${b('lunghi')}.`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `${b('Simpatici')} bez h; rodzaj żeński ma h: ${i('simpatiche')}.`],
      ['un bello ragazzo', 'un bel ragazzo', `Przed rzeczownikiem ${i('bello')} się skraca: ${b('bel')}.`],
    ],
    tr: [
      ['una rossa macchina', 'una macchina rossa', `“Kırmızı araba”: İtalyancada renk ismin ${b('arkasına')} gelir.`],
      ['due macchine rossa', 'due macchine rosse', `Sayıdan sonra sıfat da çoğul olur: ${b('rosse')}.`],
      ['Anna è stanco.', 'Anna è stanca.', `Anna kadın: sıfat ${b('-a')} ile biter.`],
      ['La pizza è bene.', 'La pizza è buona.', `“İyi” bir şey için ${b('buono / buona')}; “iyiyim” ise ${i('sto bene')}.`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `${b('Simpatici')}, h olmadan; dişil çoğulda h var: ${i('simpatiche')}.`],
    ],
    de: [
      ['Le case sono nuovo.', 'Le case sono nuove.', `„Die Häuser sind neu“: auch nach ${i('essere')} wird angeglichen, ${b('nuove')}.`],
      ['una rossa macchina', 'una macchina rossa', `Farben stehen ${b('nach')} dem Nomen.`],
      ['L’auto è nuovo.', 'L’auto è nuova.', `„Das Auto“ ist Neutrum, ${i('l’auto')} weiblich: ${b('nuova')}.`],
      ['Sto buono.', 'Sto bene.', `„Mir geht es gut“ → ${b('sto bene')}; ${i('buono')} nur für Dinge: ${i('la pizza è buona')}.`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `${b('Simpatici')} ohne h; das Femininum hat eins: ${i('simpatiche')}.`],
    ],
    ja: [
      ['una rossa macchina', 'una macchina rossa', `「赤い車」：色は名詞の${b('後ろ')}です。`],
      ['due macchine rossa', 'due macchine rosse', `名詞が複数なら形容詞も複数：${b('rosse')}。`],
      ['Anna è stanco.', 'Anna è stanca.', `アンナは女性なので ${b('-a')}：${b('stanca')}。`],
      ['Marco e Anna sono simpatiche.', 'Marco e Anna sono simpatici.', `男性が一人でもいれば男性複数：${b('simpatici')}。`],
      ['I ragazzi sono simpatichi.', 'I ragazzi sono simpatici.', `${b('simpatici')} には h がありません。女性形は ${i('simpatiche')}。`],
    ],
  },
};
