// Confronto con la lingua dello studente ed errori tipici della lezione «Gli articoli partitivi» (A1),
// 2026-11-03. Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che li aggiungono a NOTES
// ed ERRORS; li inserisce scripts/add-language-notes.mjs.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;
const en = (s) => `<em lang="en">${s}</em>`;

const KEY = 'grammatica/a1/articoli-partitivi.html';

export const NOTES_PARTITIVI = {
  [KEY]: {
    after: 'quando',
    it: {
      h2: "Il partitivo: il confronto con l'inglese",
      intro: `Il partitivo corrisponde più o meno a ${en('some')}. Ma l'inglese ha anche ${en('any')}, che in italiano non ha una traduzione: nelle domande e nelle frasi negative di solito non si dice niente.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['some bread', 'del pane · un po’ di pane'],
        ['some friends', 'degli amici · alcuni amici'],
        ['a few days', 'qualche giorno'],
        ['Do you have any brothers?', 'Hai fratelli?'],
        ["I don't have any bread.", 'Non ho pane.'],
        ['I like coffee.', 'Mi piace il caffè.'],
      ],
      points: [
        `${en('Any')} non si traduce: ${i('non ho pane')}, ${i('hai fratelli?')}. Mai ${i('non ho qualche pane')}.`,
        `Dove l'inglese non mette niente per parlare in generale (${en('I like coffee')}), l'italiano vuole l'articolo: ${b('mi piace il caffè')}.`,
        `${en('Some water')} è ${b('dell’acqua')} o ${b('un po’ d’acqua')}, non ${i('qualche acqua')}: ${i('qualche')} va solo con le cose che si contano.`,
      ],
    },
    en: {
      h2: 'The partitive compared with English',
      intro: `The Italian partitive is roughly English <em>some</em>. But English also has <em>any</em>, which has no Italian equivalent: in questions and negative sentences Italian usually says nothing at all.`,
      th: ['English', 'Italian'],
      rows: [
        ['some bread', 'del pane · un po’ di pane'],
        ['some friends', 'degli amici · alcuni amici'],
        ['a few days', 'qualche giorno'],
        ['Do you have any brothers?', 'Hai fratelli?'],
        ["I don't have any bread.", 'Non ho pane.'],
        ['I like coffee.', 'Mi piace il caffè.'],
      ],
      points: [
        `<em>Any</em> isn’t translated: ${i('non ho pane')}, ${i('hai fratelli?')}. Never ${i('non ho qualche pane')}.`,
        `Where English uses no article to talk in general (<em>I like coffee</em>), Italian needs one: ${b('mi piace il caffè')}.`,
        `<em>Some water</em> is ${b('dell’acqua')} or ${b('un po’ d’acqua')}, not ${i('qualche acqua')}: ${i('qualche')} only goes with things you can count.`,
      ],
    },
    es: {
      h2: 'El partitivo comparado con el español',
      intro: `El español no tiene partitivo: dice «quiero pan» o «unos amigos». El italiano puede decir ${i('vorrei pane')}, pero usa mucho ${b('del pane')}, y ${b('dei, degli, delle')} corresponden a «unos, unas».`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Quiero pan.', 'Vorrei del pane. · Vorrei pane.'],
        ['un poco de agua', 'dell’acqua · un po’ d’acqua'],
        ['unos amigos', 'degli amici'],
        ['algunos días', 'qualche giorno · alcuni giorni'],
        ['No tengo pan.', 'Non ho pane.'],
        ['ningún amigo', 'nessun amico'],
      ],
      points: [
        `«Algunos» tiene dos traducciones: ${b('alcuni')} + plural, como en español, o ${b('qualche')} + <strong>singular</strong>: ${i('qualche giorno')}, nunca ${i('qualche giorni')}.`,
        `«Unos amigos» es ${b('degli amici')}, no ${i('dei amici')}: se elige como el artículo (${i('gli amici')}).`,
        `${i('Del')} ya lo conoces: es «del» en ${i('il libro del professore')}. El partitivo es la misma forma con otro significado.`,
      ],
    },
    pt: {
      h2: 'O partitivo comparado com o português',
      intro: `O português não tem partitivo: diz «quero pão» ou «uns amigos». O italiano também pode dizer ${i('vorrei pane')}, mas usa muito ${b('del pane')}, e ${b('dei, degli, delle')} correspondem a «uns, umas».`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Quero pão.', 'Vorrei del pane. · Vorrei pane.'],
        ['um pouco de água', 'dell’acqua · un po’ d’acqua'],
        ['uns amigos', 'degli amici'],
        ['alguns dias', 'qualche giorno · alcuni giorni'],
        ['Não tenho pão.', 'Non ho pane.'],
        ['nenhum amigo', 'nessun amico'],
      ],
      points: [
        `${i('Del, della')} são como «do, da» (${i('il libro del professore')} = o livro do professor). No partitivo a forma é a mesma, mas quer dizer «um pouco de».`,
        `«Alguns» tem duas traduções: ${b('alcuni')} + plural ou ${b('qualche')} + <strong>singular</strong>: ${i('qualche giorno')}, nunca ${i('qualche giorni')}.`,
        `«Alguma água» não é ${i('qualche acqua')}: ${i('qualche')} só vai com coisas que se contam. Diga ${b('dell’acqua')} ou ${b('un po’ d’acqua')}.`,
      ],
    },
    fr: {
      h2: 'Le partitif comparé au français',
      intro: `Le partitif italien ressemble beaucoup au français : ${b('del pane')} = du pain, ${b('della frutta')} = des fruits, ${b('degli amici')} = des amis. Mais en français il est obligatoire, et il change à la négation et après les quantités. En italien, non.`,
      th: ['Français', 'Italien'],
      rows: [
        ['du pain, de l’eau', 'del pane, dell’acqua'],
        ['des amis', 'degli amici'],
        ['Je n’ai pas de pain.', 'Non ho pane.'],
        ['beaucoup de pain', 'molto pane'],
        ['quelques jours', 'qualche giorno'],
        ['J’achète du pain et du lait.', 'Compro pane e latte.'],
      ],
      points: [
        `Pas de « de » à la négation : « je n’ai pas de pain » = ${b('non ho pane')}, jamais ${i('non ho di pane')}.`,
        `Après « beaucoup, peu, trop » l’italien n’a pas de ${i('di')}, et l’adjectif s’accorde : ${b('molto pane')}, ${b('molti amici')}, ${b('troppa acqua')}.`,
        `« Quelques » est au pluriel, mais ${b('qualche')} veut le singulier : ${i('qualche giorno')}, ${i('qualche amico')}.`,
      ],
    },
    de: {
      h2: 'Der Teilungsartikel im Vergleich mit dem Deutschen',
      intro: `Das Deutsche hat keinen Teilungsartikel: „Ich kaufe Brot“, „Ich habe Freunde in Rom“. Im Italienischen geht das auch ohne, aber sehr oft sagt man ${b('del pane')} oder ${b('degli amici')}. Und wo das Deutsche allgemein spricht, will das Italienische den bestimmten Artikel.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich kaufe Brot.', 'Compro del pane. · Compro pane.'],
        ['etwas Wasser', 'dell’acqua · un po’ d’acqua'],
        ['ein paar Freunde', 'degli amici · alcuni amici'],
        ['ein paar Tage', 'qualche giorno'],
        ['Ich habe kein Brot.', 'Non ho pane.'],
        ['Ich mag Kaffee.', 'Mi piace il caffè.'],
      ],
      points: [
        `„Kein“ hat kein eigenes Wort: ${b('non ho pane')}. Zur Betonung ${b('nessun')} + Singular: ${i('non ho nessun amico qui')}.`,
        `„Ich mag Kaffee“ ohne Artikel ist im Italienischen falsch: ${b('mi piace il caffè')}.`,
        `„Ein paar Tage“ steht im Plural, ${b('qualche')} aber mit dem Singular: ${i('qualche giorno')}.`,
      ],
    },
    cs: {
      h2: 'Dělivý člen ve srovnání s češtinou',
      intro: `Čeština nemá členy, ale neurčité množství umí vyjádřit druhým pádem: „napij se vody“, „ukroj si chleba“. Přesně to dělá italský dělivý člen: ${b('bevi dell’acqua')}, ${b('prendi del pane')}.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Napij se vody.', 'Bevi dell’acqua.'],
        ['Kup chleba.', 'Compra del pane.'],
        ['nějací přátelé', 'degli amici · alcuni amici'],
        ['pár dní', 'qualche giorno'],
        ['Nemám chleba.', 'Non ho pane.'],
        ['Mám rád kávu.', 'Mi piace il caffè.'],
      ],
      points: [
        `Když v češtině mluvíte o věci obecně, nepotřebujete nic; v italštině je nutný určitý člen: ${b('mi piace il caffè')}, ne ${i('mi piace caffè')}.`,
        `„Pár dní“ je v množném čísle, ale ${b('qualche')} chce jednotné: ${i('qualche giorno')}.`,
        `V záporu italština nic nepřidává: „nemám chleba“ = ${b('non ho pane')}.`,
      ],
    },
    pl: {
      h2: 'Rodzajnik cząstkowy w porównaniu z polskim',
      intro: `Polski nie ma rodzajników, ale nieokreśloną ilość wyraża dopełniaczem: „daj mi wody”, „kup chleba”. Dokładnie to robi włoski rodzajnik cząstkowy: ${b('dammi dell’acqua')}, ${b('compra del pane')}.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Daj mi wody.', 'Dammi dell’acqua.'],
        ['Kup chleba.', 'Compra del pane.'],
        ['kilku przyjaciół', 'degli amici · alcuni amici'],
        ['kilka dni', 'qualche giorno'],
        ['Nie mam chleba.', 'Non ho pane.'],
        ['Lubię kawę.', 'Mi piace il caffè.'],
      ],
      points: [
        `Gdy mówi się o czymś ogólnie, polski nie potrzebuje niczego, a włoski wymaga rodzajnika określonego: ${b('mi piace il caffè')}, nie ${i('mi piace caffè')}.`,
        `„Kilka dni” to liczba mnoga, ale ${b('qualche')} łączy się z pojedynczą: ${i('qualche giorno')}.`,
        `W przeczeniu po polsku zmienia się przypadek („nie mam chleba”), a po włosku po prostu znika rodzajnik: ${b('non ho pane')}.`,
      ],
    },
    tr: {
      h2: 'Kısmi tanımlık ile Türkçe karşılaştırması',
      intro: `Türkçede tanımlık yoktur; belirsiz miktarı “biraz” ve “birkaç” ile söyleriz. İtalyancada da ${b('un po’ di')} ve ${b('qualche')} var, ama çok sık ${b('del pane')}, ${b('degli amici')} gibi kısmi tanımlık kullanılır.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['biraz ekmek', 'del pane · un po’ di pane'],
        ['biraz su', 'dell’acqua · un po’ d’acqua'],
        ['birkaç arkadaş', 'qualche amico · degli amici'],
        ['bazı arkadaşlar', 'alcuni amici'],
        ['Ekmek yok.', 'Non c’è pane.'],
        ['Kahve severim.', 'Mi piace il caffè.'],
      ],
      points: [
        `${b('Qualche')} tıpkı “birkaç” gibi tekil isimle kullanılır: ${i('qualche giorno')} = birkaç gün. Ama ${b('alcuni')} ve ${b('dei, degli, delle')} çoğul ister: ${i('alcuni amici')}.`,
        `Bir şeyden genel olarak söz ederken Türkçede tanımlık yoktur, İtalyancada belirli tanımlık gerekir: ${b('mi piace il caffè')}.`,
        `Olumsuz cümlede kısmi tanımlık kaybolur: ${b('non ho pane')} = ekmeğim yok.`,
      ],
    },
    ja: {
      h2: '日本語との比較',
      intro: `日本語には冠詞も単数・複数の区別もないので、「パンを買う」「友だちが来る」で十分です。イタリア語でははっきりしない量に${b('del pane')}、${b('degli amici')}のような部分冠詞をよく使い、名詞の単数・複数にも気をつけます。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['パンを（少し）買う', 'Compro del pane.'],
        ['お水をください', 'Vorrei dell’acqua.'],
        ['友だちが何人か来る', 'Vengono degli amici.'],
        ['数日', 'qualche giorno'],
        ['パンがない', 'Non c’è pane.'],
        ['コーヒーが好き', 'Mi piace il caffè.'],
      ],
      points: [
        `${b('Dei, degli, delle')}のあとは名詞も複数形：${i('dei libri')}（${i('dei libro')}ではありません）。`,
        `「数日」でも、${b('qualche')}のあとは単数形：${i('qualche giorno')}。`,
        `「〜が好き」と一般的に言うときは、定冠詞が必要です：${b('mi piace il caffè')}。`,
      ],
    },
  },
};

export const ERRORS_PARTITIVI = {
  [KEY]: {
    it: [
      ['Mi piace del caffè.', 'Mi piace il caffè.', `${en('I like coffee')}: in generale ci vuole l'articolo, ${b('il caffè')}.`],
      ['Ho qualche amici a Roma.', 'Ho qualche amico a Roma.', `${en('Some friends')} è plurale, ma ${i('qualche')} vuole il singolare: ${b('qualche amico')}.`],
      ['Vorrei qualche acqua.', 'Vorrei dell’acqua.', `${en('Some water')}: l'acqua non si conta, quindi ${b('dell’acqua')} o ${b('un po’ d’acqua')}.`],
      ['Non ho qualche pane.', 'Non ho pane.', `${en("I don't have any bread")}: ${en('any')} non si traduce, ${b('non ho pane')}.`],
    ],
    en: [
      ['Mi piace del caffè.', 'Mi piace il caffè.', `<em>I like coffee</em>: in general Italian needs the article, ${b('il caffè')}.`],
      ['Ho qualche amici a Roma.', 'Ho qualche amico a Roma.', `<em>Some friends</em> is plural, but ${i('qualche')} takes the singular: ${b('qualche amico')}.`],
      ['Vorrei qualche acqua.', 'Vorrei dell’acqua.', `<em>Some water</em>: water can’t be counted, so ${b('dell’acqua')} or ${b('un po’ d’acqua')}.`],
      ['Non ho qualche pane.', 'Non ho pane.', `<em>I don’t have any bread</em>: <em>any</em> isn’t translated, ${b('non ho pane')}.`],
    ],
    es: [
      ['Resto qualche giorni.', 'Resto qualche giorno.', `«Algunos días» va en plural, pero ${i('qualche')} quiere el singular: ${b('qualche giorno')}.`],
      ['Ho dei amici a Roma.', 'Ho degli amici a Roma.', `«Unos amigos»: se elige como el artículo, ${i('gli amici')} → ${b('degli amici')}.`],
      ['Ho alcuni pane.', 'Ho un po’ di pane.', `${i('Alcuni')} es solo plural («algunos»); «algo de pan» es ${b('un po’ di pane')} o ${b('del pane')}.`],
    ],
    pt: [
      ['Resto qualche giorni.', 'Resto qualche giorno.', `«Alguns dias» é plural, mas ${i('qualche')} quer o singular: ${b('qualche giorno')}.`],
      ['Vorrei qualche acqua.', 'Vorrei dell’acqua.', `«Alguma água»: ${i('qualche')} só vai com coisas que se contam. Diga ${b('dell’acqua')}.`],
      ['Ho dei amici a Roma.', 'Ho degli amici a Roma.', `«Uns amigos»: escolhe-se como o artigo, ${i('gli amici')} → ${b('degli amici')}.`],
    ],
    fr: [
      ['Non ho di pane.', 'Non ho pane.', `« Je n’ai pas de pain » : en italien, pas de ${i('di')} à la négation, ${b('non ho pane')}.`],
      ['Ho molto di lavoro.', 'Ho molto lavoro.', `« Beaucoup de travail » : pas de ${i('di')} après ${i('molto')}, ${b('molto lavoro')}.`],
      ['Ho qualche amici a Roma.', 'Ho qualche amico a Roma.', `« Quelques amis » est au pluriel, mais ${i('qualche')} veut le singulier : ${b('qualche amico')}.`],
    ],
    de: [
      ['Mi piace caffè.', 'Mi piace il caffè.', `„Ich mag Kaffee“ hat keinen Artikel, das Italienische braucht einen: ${b('il caffè')}.`],
      ['Resto qualche giorni.', 'Resto qualche giorno.', `„Ein paar Tage“ steht im Plural, ${i('qualche')} aber mit dem Singular: ${b('qualche giorno')}.`],
      ['Ho alcuni pane.', 'Ho un po’ di pane.', `„Etwas Brot“: ${i('alcuni')} gibt es nur im Plural; richtig ist ${b('un po’ di pane')} oder ${b('del pane')}.`],
    ],
    cs: [
      ['Mi piace caffè.', 'Mi piace il caffè.', `„Mám rád kávu“: v italštině je nutný určitý člen, ${b('il caffè')}.`],
      ['Resto qualche giorni.', 'Resto qualche giorno.', `„Pár dní“ je v množném čísle, ale ${i('qualche')} chce jednotné: ${b('qualche giorno')}.`],
      ['Ho dei amici a Roma.', 'Ho degli amici a Roma.', `Tvar se vybírá podle členu: ${i('gli amici')} → ${b('degli amici')}.`],
    ],
    pl: [
      ['Mi piace caffè.', 'Mi piace il caffè.', `„Lubię kawę”: po włosku potrzebny jest rodzajnik określony, ${b('il caffè')}.`],
      ['Resto qualche giorni.', 'Resto qualche giorno.', `„Kilka dni” to liczba mnoga, ale ${i('qualche')} chce pojedynczej: ${b('qualche giorno')}.`],
      ['Ho dei amici a Roma.', 'Ho degli amici a Roma.', `Formę wybiera się według rodzajnika: ${i('gli amici')} → ${b('degli amici')}.`],
    ],
    tr: [
      ['Ho alcuni amico.', 'Ho alcuni amici.', `“Birkaç arkadaş” tekildir ama ${i('alcuni')} çoğul ister: ${b('alcuni amici')} (ya da ${b('qualche amico')}).`],
      ['Mi piace caffè.', 'Mi piace il caffè.', `“Kahve severim”: İtalyancada belirli tanımlık gerekir, ${b('il caffè')}.`],
      ['Ho dei amici a Roma.', 'Ho degli amici a Roma.', `Biçim tanımlığa göre seçilir: ${i('gli amici')} → ${b('degli amici')}.`],
    ],
    ja: [
      ['Ho comprato dei libro.', 'Ho comprato dei libri.', `${i('dei')}のあとは名詞も複数形：${b('dei libri')}。`],
      ['Resto qualche giorni.', 'Resto qualche giorno.', `${i('qualche')}のあとは単数形：${b('qualche giorno')}（数日）。`],
      ['Mi piace caffè.', 'Mi piace il caffè.', `「コーヒーが好き」：一般的に言うときは定冠詞が必要です、${b('il caffè')}。`],
    ],
  },
};
