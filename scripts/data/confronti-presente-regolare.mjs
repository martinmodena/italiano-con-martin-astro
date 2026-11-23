// Confronto con la lingua dello studente ed errori tipici della lezione «Il presente dei verbi regolari» (A1),
// rifatta il 2026-11-23 (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed
// errori-lingua.mjs, che li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese «do», la -s e il present continuous; spagnolo e portoghese -amos/-emos
// (noi -iamo), «vocês falam» → voi parlate, «estoy / estou + gerundio»; francese il pronome obbligatorio, le
// desinenze mute e «ne… pas»; tedesco il pronome e «nicht» dopo il verbo, «warten auf»; ceco e polacco il vid
// perfettivo («napíšu / napiszę» è futuro) e «čekat na / czekać na»; turco l'ordine delle parole e la
// negazione dentro il verbo; giapponese nessuna persona nel verbo e l'ordine SOV.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const PR = 'grammatica/a1/presente-indicativo-verbi-regolari.html';

export const NOTES_PRESENTE_REGOLARE = {
  [PR]: {
    it: {
      h2: "Il presente: il confronto con l'inglese",
      intro: `In inglese il verbo cambia solo con <em lang="en">he</em> e <em lang="en">she</em> (<em lang="en">speaks</em>); in italiano ha ${b('sei desinenze')}, e per questo il soggetto non serve. E un solo presente italiano vale per <em lang="en">I speak</em> e <em lang="en">I'm speaking</em>.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I speak Italian.', 'Parlo italiano.'],
        ["I'm reading a book.", 'Leggo un libro.'],
        ['Do you work here?', 'Lavori qui?'],
        ["I don't eat meat.", 'Non mangio la carne.'],
        ["I've lived here for two years.", 'Abito qui da due anni.'],
      ],
      points: [
        `Niente <em lang="en">do / does</em>: la domanda è la frase con il punto interrogativo, ${i('Lavori qui?')}`,
        `<em lang="en">I've lived here for two years</em> → presente + ${b('da')}: ${i('abito qui da due anni')}.`,
        `<em lang="en">Listen to, wait for, look for</em> → ${i('ascoltare, aspettare, cercare')}, senza preposizione.`,
      ],
    },
    en: {
      h2: 'The present compared with English',
      intro: `In English the verb only changes with <em>he</em> and <em>she</em> (<em>speaks</em>); Italian has ${b('six endings')}, so you don’t need the subject. And one Italian present covers both <em>I speak</em> and <em>I’m speaking</em>.`,
      th: ['English', 'Italian'],
      rows: [
        ['I speak Italian.', 'Parlo italiano.'],
        ["I'm reading a book.", 'Leggo un libro.'],
        ['Do you work here?', 'Lavori qui?'],
        ["I don't eat meat.", 'Non mangio la carne.'],
        ["I've lived here for two years.", 'Abito qui da due anni.'],
      ],
      points: [
        `No <em>do / does</em>: a question is just the sentence with a question mark, ${i('Lavori qui?')}`,
        `<em>I’ve lived here for two years</em> → present + ${b('da')}: ${i('abito qui da due anni')}.`,
        `<em>Listen to, wait for, look for</em> → ${i('ascoltare, aspettare, cercare')}, with no preposition.`,
      ],
    },
    es: {
      h2: 'El presente comparado con el español',
      intro: `Buena noticia: el presente italiano funciona como el español, con seis terminaciones y sin sujeto. Cambian sobre todo ${b('las terminaciones')}: <em>-as, -amos, -áis</em> no existen.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Hablo italiano.', 'Parlo italiano.'],
        ['Hablamos, comemos, vivimos.', 'Parliamo, mangiamo, viviamo.'],
        ['¿Habláis / hablan (ustedes) inglés?', 'Parlate inglese?'],
        ['Estoy leyendo.', 'Leggo.'],
        ['Espero a Luca.', 'Aspetto Luca.'],
      ],
      points: [
        `Con ${i('noi')} siempre ${b('-iamo')}: <em>hablamos, comemos, vivimos</em> → ${i('parliamo, mangiamo, viviamo')}.`,
        `Con ${i('tu')} siempre ${b('-i')}: <em>hablas, comes</em> → ${i('parli, mangi')}.`,
        `Con personas no hay «a»: <em>espero a Luca</em> → ${i('aspetto Luca')}.`,
      ],
    },
    pt: {
      h2: 'O presente comparado com o português',
      intro: `Boa notícia: o presente italiano funciona como o português, com terminações para cada pessoa e sem sujeito. Mas cuidado com ${b('voi')}: é o «vocês», e usa a segunda pessoa do plural.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Eu falo italiano.', 'Parlo italiano.'],
        ['Nós falamos, comemos.', 'Parliamo, mangiamo.'],
        ['Vocês falam inglês?', 'Parlate inglese?'],
        ['Estou estudando.', 'Studio.'],
        ['Moro aqui há dois anos.', 'Abito qui da due anni.'],
      ],
      points: [
        `Com ${i('noi')} sempre ${b('-iamo')}: <em>falamos, comemos</em> → ${i('parliamo, mangiamo')}.`,
        `<em>Vocês falam</em> → ${b('voi parlate')}, não ${i('voi parlano')}: ${i('parlano')} é «eles falam».`,
        `<em>Estou estudando</em> é quase sempre só ${i('studio')}; <em>há dois anos</em> → ${b('da due anni')}.`,
      ],
    },
    fr: {
      h2: 'Le présent comparé au français',
      intro: `Le présent italien s’emploie comme le présent français. Deux différences : le ${b('pronom sujet')} ne se dit pas, et toutes les terminaisons ${b('se prononcent')}.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Je parle italien.', 'Parlo italiano.'],
        ['Ils parlent.', 'Parlano.'],
        ['Je ne mange pas de viande.', 'Non mangio la carne.'],
        ['Est-ce que tu travailles ici ?', 'Lavori qui?'],
        ['J’habite ici depuis deux ans.', 'Abito qui da due anni.'],
      ],
      points: [
        `Pas de pronom : <em>je parle</em> → ${b('parlo')}.`,
        `Un seul mot pour la négation : <em>ne… pas</em> → ${b('non')} devant le verbe.`,
        `<em>Ils parlent</em> → ${i('PARlano')} : tout se prononce, avec l’accent sur la première syllabe.`,
      ],
    },
    cs: {
      h2: 'Přítomný čas ve srovnání s češtinou',
      intro: `Dobrá zpráva: italský přítomný čas funguje jako český, se šesti koncovkami a bez podmětu. Rozdíl je ve ${b('vidu')}: italština ho nemá.`,
      th: ['Česky', 'Italsky'],
      rows: [
        ['Mluvím italsky.', 'Parlo italiano.'],
        ['Píšu dopis.', 'Scrivo una lettera.'],
        ['Napíšu ti zítra.', 'Ti scrivo domani.'],
        ['Čekám na autobus.', 'Aspetto l’autobus.'],
        ['Bydlím tady dva roky.', 'Abito qui da due anni.'],
      ],
      points: [
        `Italský přítomný čas je vždy „nedokonavý“; dokonavé <em>napíšu</em> je budoucnost, ale u plánů stačí přítomný čas: ${i('ti scrivo domani')}.`,
        `<em>Čekat na</em>, <em>dívat se na</em> → bez předložky: ${i('aspetto l’autobus')}, ${i('guardo la TV')}.`,
        `<em>Dva roky</em> (pořád trvá) → ${b('da due anni')}.`,
      ],
    },
    pl: {
      h2: 'Czas teraźniejszy w porównaniu z polskim',
      intro: `Dobra wiadomość: włoski czas teraźniejszy działa jak polski, z sześcioma końcówkami i bez podmiotu. Różnica jest w ${b('aspekcie')}: włoski go nie ma.`,
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['Mówię po włosku.', 'Parlo italiano.'],
        ['Piszę list.', 'Scrivo una lettera.'],
        ['Napiszę do ciebie jutro.', 'Ti scrivo domani.'],
        ['Czekam na autobus.', 'Aspetto l’autobus.'],
        ['Mieszkam tu od dwóch lat.', 'Abito qui da due anni.'],
      ],
      points: [
        `Włoski czas teraźniejszy jest zawsze „niedokonany”; dokonane <em>napiszę</em> to przyszłość, ale przy planach wystarczy czas teraźniejszy: ${i('ti scrivo domani')}.`,
        `<em>Czekać na</em>, <em>patrzeć na</em> → bez przyimka: ${i('aspetto l’autobus')}, ${i('guardo la TV')}.`,
        `<em>Od dwóch lat</em> → ${b('da due anni')}.`,
      ],
    },
    tr: {
      h2: 'Şimdiki zaman: Türkçe ile karşılaştırma',
      intro: `İyi haber: İtalyancada da kişi ekleri vardır ve özne söylenmez, Türkçedeki gibi. Fark ${b('sırada')}: fiil cümlenin sonunda değil, ortadadır.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['İtalyanca konuşuyorum.', 'Parlo italiano.'],
        ['Her gün kitap okurum.', 'Leggo un libro ogni giorno.'],
        ['Et yemiyorum.', 'Non mangio la carne.'],
        ['Burada mı çalışıyorsun?', 'Lavori qui?'],
        ['İki yıldır burada oturuyorum.', 'Abito qui da due anni.'],
      ],
      points: [
        `<em>-iyor</em> ve geniş zaman İtalyancada tek biçimdir: ${i('parlo')}.`,
        `Olumsuzluk ek değil, fiilin önünde ayrı bir kelimedir: ${b('non')} ${i('mangio')}.`,
        `<em>-dır / -den beri</em> → ${b('da')}: ${i('da due anni')}.`,
      ],
    },
    de: {
      h2: 'Das Präsens im Vergleich zum Deutschen',
      intro: `Das italienische Präsens wird fast wie das deutsche benutzt, auch für die Zukunft. Zwei Unterschiede: Man sagt ${b('kein Pronomen')}, und die Verneinung steht ${b('vor')} dem Verb.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich spreche Italienisch.', 'Parlo italiano.'],
        ['Ich esse kein Fleisch.', 'Non mangio la carne.'],
        ['Arbeitest du hier?', 'Lavori qui?'],
        ['Ich warte auf den Bus.', 'Aspetto l’autobus.'],
        ['Ich wohne seit zwei Jahren hier.', 'Abito qui da due anni.'],
      ],
      points: [
        `Kein <em>ich, du</em>: Die Endung reicht, ${i('parlo')}.`,
        `<em>Nicht</em> und <em>kein</em> → ${b('non')} vor dem Verb: ${i('non mangio')}.`,
        `<em>Warten auf, hören, suchen nach</em> → ${i('aspettare, ascoltare, cercare')} ohne Präposition.`,
      ],
    },
    ja: {
      h2: '現在形：日本語とのちがい',
      intro: `日本語の動詞は主語で形が変わりませんが、イタリア語は ${b('主語によって6つの形')} に変わります。そのかわり主語は言わなくてもかまいません。語順もちがい、動詞が目的語の前に来ます。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['（私は）イタリア語を話します。', 'Parlo italiano.'],
        ['（彼は）イタリア語を話します。', 'Parla italiano.'],
        ['肉は食べません。', 'Non mangio la carne.'],
        ['ここで働いているんですか。', 'Lavori qui?'],
        ['2年前からここに住んでいます。', 'Abito qui da due anni.'],
      ],
      points: [
        `「話します」でも、主語で形が変わります：${i('parlo')}（私）、${i('parla')}（彼・彼女）、${i('parliamo')}（私たち）。`,
        `「〜ています」も現在形：${i('studio')}「勉強しています」。`,
        `「〜前から」は ${b('da')}：${i('da due anni')}。`,
      ],
    },
  },
};

export const ERRORS_PRESENTE_REGOLARE = {
  [PR]: {
    it: [
      ['Io parla italiano.', 'Io parlo italiano.', `Con ${i('io')} la desinenza è sempre ${b('-o')}.`],
      ['Fai lavori qui?', 'Lavori qui?', `<em lang="en">Do you work</em>: in italiano non c’è ${b('do')}, basta il verbo.`],
      ['Ascolto alla musica.', 'Ascolto la musica.', `<em lang="en">Listen to</em>, ma in italiano ${b('ascoltare')} non vuole preposizione.`],
      ['Abito qui per due anni.', 'Abito qui da due anni.', `<em lang="en">For two years</em> (e ancora adesso) → ${b('da')}.`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `Con ${i('-care')} serve la ${b('h')}: ${i('cerchi')}.`],
    ],
    en: [
      ['Io parla italiano.', 'Io parlo italiano.', `With ${i('io')} the ending is always ${b('-o')}.`],
      ['Fai lavori qui?', 'Lavori qui?', `<em>Do you work</em>: Italian has no ${b('do')}, the verb alone is enough.`],
      ['Ascolto alla musica.', 'Ascolto la musica.', `<em>Listen to</em>, but ${b('ascoltare')} takes no preposition.`],
      ['Abito qui per due anni.', 'Abito qui da due anni.', `<em>For two years</em> (and still now) → ${b('da')}.`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `Verbs in ${i('-care')} need an ${b('h')}: ${i('cerchi')}.`],
    ],
    es: [
      ['Noi parlamo.', 'Noi parliamo.', `<em>Hablamos</em>: con ${i('noi')} siempre ${b('-iamo')}.`],
      ['Tu parlas.', 'Tu parli.', `<em>Hablas</em>: con ${i('tu')} siempre ${b('-i')}.`],
      ['Aspetto a Luca.', 'Aspetto Luca.', `<em>Espero a Luca</em>: en italiano sin ${b('a')}.`],
      ['Sto leggendo un libro ogni sera.', 'Leggo un libro ogni sera.', `Hábito: ${b('presente')}, no «stare + gerundio».`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `Como «busqué»: ${i('-care')} lleva ${b('h')}, ${i('cerchi')}.`],
    ],
    pt: [
      ['Noi parlamo.', 'Noi parliamo.', `<em>Falamos</em>: com ${i('noi')} sempre ${b('-iamo')}.`],
      ['Voi parlano inglese?', 'Voi parlate inglese?', `<em>Vocês falam</em> → ${b('voi parlate')}; ${i('parlano')} é «eles».`],
      ['Abito qui per due anni.', 'Abito qui da due anni.', `<em>Há dois anos</em> (e ainda agora) → ${b('da')}.`],
      ['Sto studiando italiano da due anni.', 'Studio italiano da due anni.', `<em>Estou estudando</em> como hábito → ${b('presente')}.`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `${i('-care')} leva ${b('h')}: ${i('cerchi')}.`],
    ],
    fr: [
      ['Non mangio pas.', 'Non mangio.', `<em>Ne… pas</em> → un seul mot, ${b('non')}.`],
      ['Io parlo italiano, io abito a Roma.', 'Parlo italiano, abito a Roma.', `Le pronom n’est pas obligatoire : la terminaison suffit.`],
      ['Loro parlan.', 'Loro parlano.', `<em>Ils parlent</em> : tout se prononce, ${b('parlano')}.`],
      ['Abito qui depuis due anni.', 'Abito qui da due anni.', `<em>Depuis</em> → ${b('da')}.`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `${i('-care')} prend un ${b('h')} : ${i('cerchi')}.`],
    ],
    cs: [
      ['Aspetto per l’autobus.', 'Aspetto l’autobus.', `<em>Čekám na autobus</em> → bez předložky: ${b('aspetto l’autobus')}.`],
      ['Io parla italiano.', 'Io parlo italiano.', `S ${i('io')} vždy ${b('-o')}.`],
      ['Noi parlamo.', 'Noi parliamo.', `S ${i('noi')} vždy ${b('-iamo')}.`],
      ['Abito qui due anni.', 'Abito qui da due anni.', `<em>Bydlím tu dva roky</em> → ${b('da')} due anni.`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `U ${i('-care')} je potřeba ${b('h')}: ${i('cerchi')}.`],
    ],
    pl: [
      ['Aspetto per l’autobus.', 'Aspetto l’autobus.', `<em>Czekam na autobus</em> → bez przyimka: ${b('aspetto l’autobus')}.`],
      ['Io parla italiano.', 'Io parlo italiano.', `Z ${i('io')} zawsze ${b('-o')}.`],
      ['Noi parlamo.', 'Noi parliamo.', `Z ${i('noi')} zawsze ${b('-iamo')}.`],
      ['Abito qui dal due anni.', 'Abito qui da due anni.', `<em>Od dwóch lat</em> → ${b('da')} due anni.`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `Przy ${i('-care')} potrzebne jest ${b('h')}: ${i('cerchi')}.`],
    ],
    tr: [
      ['Io italiano parlo.', 'Io parlo italiano.', `Fiil sonda değil, ${b('ortada')}: ${i('parlo italiano')}.`],
      ['Mangio non la carne.', 'Non mangio la carne.', `${b('Non')} fiilin ${b('önüne')} gelir.`],
      ['Io parla italiano.', 'Io parlo italiano.', `${i('io')} ile her zaman ${b('-o')}.`],
      ['Aspetto a Luca.', 'Aspetto Luca.', `<em>Luca’yı bekliyorum</em> → doğrudan nesne, edat yok.`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `${i('-care')} ile ${b('h')} gerekir: ${i('cerchi')}.`],
    ],
    de: [
      ['Mangio non la carne.', 'Non mangio la carne.', `<em>Ich esse nicht</em> → ${b('non')} steht vor dem Verb.`],
      ['Aspetto per l’autobus.', 'Aspetto l’autobus.', `<em>Warten auf</em> → ohne Präposition.`],
      ['Io parla italiano.', 'Io parlo italiano.', `Mit ${i('io')} immer ${b('-o')}.`],
      ['Lei parlano tedesco?', 'Lei parla tedesco?', `<em>Sprechen Sie</em> → ${i('Lei')} mit der ${b('3. Person Singular')}.`],
      ['Abito qui per due anni.', 'Abito qui da due anni.', `<em>Seit zwei Jahren</em> → ${b('da')}.`],
    ],
    ja: [
      ['Io parla italiano.', 'Io parlo italiano.', `主語が ${i('io')} なら語尾は ${b('-o')}。`],
      ['Italiano parlo.', 'Parlo italiano.', `動詞は目的語の ${b('前')}：${i('parlo italiano')}。`],
      ['Mangio non la carne.', 'Non mangio la carne.', `${b('non')} は動詞の前に置きます。`],
      ['Abito qui due anni fa.', 'Abito qui da due anni.', `「2年前から」は ${b('da')} due anni。`],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.', `${i('-care')} は ${b('h')} が必要：${i('cerchi')}。`],
    ],
  },
};
