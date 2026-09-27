// Stringhe di pagina della lezione «Il tempo e le stagioni» (2026-09-26), kind 'words'.
//
// Campi come in people-pages.mjs; `note` spiega come si parla del tempo: «che tempo fa?», fa caldo / fa
// freddo / fa bel tempo, i verbi senza soggetto (piove, nevica), c'e' il sole / c'e' vento, le stagioni con
// «in» e «d'», la minuscola, e rimanda alla lezione di grammatica «Giorni, mesi e date» per giorni e mesi.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { weatherVocabulary } from './weather-vocabulary.mjs';

const N = weatherVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

const dates = {
  it: ['/grammatica/a1/giorni-mesi-date.html', 'Giorni, mesi e date'],
  en: ['/en/grammar/a1/days-months-and-dates-in-italian.html', 'Days, months and dates in Italian'],
  es: ['/es/gramatica/a1/dias-meses-y-fechas-en-italiano.html', 'Días, meses y fechas en italiano'],
  fr: ['/fr/grammaire/a1/jours-mois-et-dates-en-italien.html', 'Jours, mois et dates en italien'],
  cs: ['/cs/gramatika/a1/dny-mesice-a-data-v-italstine.html', 'Dny, měsíce a data v italštině'],
  pl: ['/pl/gramatyka/a1/dni-miesiace-i-daty-po-wlosku.html', 'Dni, miesiące i daty po włosku'],
  tr: ['/tr/dilbilgisi/a1/italyanca-gunler-aylar-ve-tarihler.html', 'İtalyanca günler, aylar ve tarihler'],
  de: [
    '/de/grammatik/a1/wochentage-monate-und-datum-auf-italienisch.html',
    'Wochentage, Monate und Datum auf Italienisch',
  ],
  ja: ['/ja/bunpo/a1/イタリア語の曜日と月と日付.html', 'イタリア語の曜日・月・日付'],
};
const link = (lang) => `<a href="${dates[lang][0]}">${dates[lang][1]}</a>`;

export const weatherPages = {
  it: {
    dir: 'vocabolario',
    slug: 'tempo-stagioni',
    name: 'Il tempo e le stagioni',
    title: 'Il tempo e le stagioni: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole per parlare del tempo in italiano — il sole, la pioggia, la neve, il temporale, fa caldo, nuvoloso, le quattro stagioni… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Lo stesso albero su una collina nelle quattro stagioni: fiori in primavera, grano d’estate, foglie rosse e nebbia in autunno, neve e un pupazzo di neve d’inverno, sotto un arcobaleno',
    cardText: `${N} parole per parlare del tempo: sole, pioggia, neve, vento, temporale, caldo e freddo, e le quattro stagioni.`,
    note: {
      title: 'Che tempo fa?',
      body: `Per il tempo si usa spesso <em>fare</em>: <em>fa caldo</em>, <em>fa freddo</em>, <em>fa bel tempo</em>, <em>fa brutto tempo</em>. <em>Piove</em>, <em>nevica</em> e <em>grandina</em> non hanno soggetto: in italiano non si dice «esso piove». Con i nomi si usa <em>c’è</em>: <em>c’è il sole</em>, <em>c’è vento</em>, <em>c’è nebbia</em>. Attenzione: <em>fa caldo</em> parla del tempo, <em>ho caldo</em> di come sto io. <em>Il tempo</em> è anche quello che passa: <em>non ho tempo</em>. Le stagioni si scrivono con la minuscola: <em>in primavera</em>, <em>in autunno</em>, <em>d’estate</em> o <em>in estate</em>, <em>d’inverno</em> o <em>in inverno</em>. I giorni e i mesi sono nella lezione ${link('it')}.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-weather-and-seasons-vocabulary',
    name: 'The weather and the seasons',
    title: 'The weather and the seasons | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words to talk about the weather — sun, rain, snow, thunderstorm, hot, cloudy, the four seasons… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'The same tree on a hill in the four seasons: blossoms in spring, wheat in summer, red leaves and fog in autumn, snow and a snowman in winter, under a rainbow',
    cardText: `${N} words to talk about the weather: sun, rain, snow, wind, storms, heat and cold, and the four seasons.`,
    note: {
      title: it('Che tempo fa?'),
      body: `To talk about the weather Italian often uses ${it('fare')}: ${it('fa caldo')} (it’s hot), ${it('fa freddo')} (it’s cold), ${it('fa bel tempo')} (the weather is nice), ${it('fa brutto tempo')} (the weather is bad). ${it('Piove')}, ${it('nevica')} and ${it('grandina')} have no subject: there is no word for “it”. With nouns you use ${it('c’è')}: ${it('c’è il sole')}, ${it('c’è vento')}, ${it('c’è nebbia')}. Careful: ${it('fa caldo')} is about the weather, ${it('ho caldo')} about how you feel (“I’m hot”). ${it('Il tempo')} also means “time”: ${it('non ho tempo')}. Seasons are written in lower case: ${it('in primavera')}, ${it('in autunno')}, ${it('d’estate')} or ${it('in estate')}, ${it('d’inverno')} or ${it('in inverno')}. Days and months are in the lesson ${link('en')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-del-tiempo-y-las-estaciones-en-italiano',
    name: 'El tiempo y las estaciones',
    title: 'El tiempo y las estaciones | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras en italiano para hablar del tiempo — sol, lluvia, nieve, tormenta, calor, nublado, las cuatro estaciones… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'El mismo árbol en una colina en las cuatro estaciones: flores en primavera, trigo en verano, hojas rojas y niebla en otoño, nieve y un muñeco de nieve en invierno, bajo un arcoíris',
    cardText: `${N} palabras para hablar del tiempo: sol, lluvia, nieve, viento, tormentas, calor y frío, y las cuatro estaciones.`,
    note: {
      title: it('Che tempo fa?'),
      body: `Para el tiempo el italiano usa a menudo ${it('fare')}, como el español «hacer»: ${it('fa caldo')} (hace calor), ${it('fa freddo')} (hace frío), ${it('fa bel tempo')} (hace buen tiempo), ${it('fa brutto tempo')} (hace mal tiempo). ${it('Piove')}, ${it('nevica')} y ${it('grandina')} no tienen sujeto, igual que en español. Con los sustantivos se usa ${it('c’è')}: ${it('c’è il sole')} (hace sol), ${it('c’è vento')} (hace viento), ${it('c’è nebbia')} (hay niebla). Cuidado: ${it('fa caldo')} habla del tiempo, ${it('ho caldo')} de cómo estás tú («tengo calor»). ${it('Il tempo')} también es el tiempo que pasa: ${it('non ho tempo')}. Las estaciones se escriben con minúscula: ${it('in primavera')}, ${it('in autunno')}, ${it('d’estate')} o ${it('in estate')}, ${it('d’inverno')} o ${it('in inverno')}. Los días y los meses están en la lección ${link('es')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-la-meteo-et-des-saisons-en-italien',
    name: 'La météo et les saisons',
    title: 'La météo et les saisons | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens pour parler de la météo — soleil, pluie, neige, orage, chaleur, nuageux, les quatre saisons… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Le même arbre sur une colline au fil des quatre saisons : des fleurs au printemps, du blé en été, des feuilles rouges et du brouillard en automne, de la neige et un bonhomme de neige en hiver, sous un arc-en-ciel',
    cardText: `${N} mots pour parler de la météo : soleil, pluie, neige, vent, orages, chaleur et froid, et les quatre saisons.`,
    note: {
      title: it('Che tempo fa?'),
      body: `Pour la météo, l’italien utilise souvent ${it('fare')}, comme le français « faire » : ${it('fa caldo')} (il fait chaud), ${it('fa freddo')} (il fait froid), ${it('fa bel tempo')} (il fait beau), ${it('fa brutto tempo')} (il fait mauvais). ${it('Piove')}, ${it('nevica')} et ${it('grandina')} n’ont pas de sujet : pas de « il » en italien. Avec les noms on utilise ${it('c’è')} : ${it('c’è il sole')} (il y a du soleil), ${it('c’è vento')} (il y a du vent), ${it('c’è nebbia')} (il y a du brouillard). Attention : ${it('fa caldo')} parle du temps, ${it('ho caldo')} de ce que vous ressentez (« j’ai chaud »). ${it('Il tempo')} est aussi le temps qui passe : ${it('non ho tempo')}. Les saisons s’écrivent en minuscules : ${it('in primavera')}, ${it('in autunno')}, ${it('d’estate')} ou ${it('in estate')}, ${it('d’inverno')} ou ${it('in inverno')}. Les jours et les mois sont dans la leçon ${link('fr')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-pocasi-a-rocni-obdobi',
    name: 'Počasí a roční období',
    title: 'Počasí a roční období | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o počasí — slunce, déšť, sníh, bouřka, horko, zataženo, čtyři roční období… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Tentýž strom na kopci ve čtyřech ročních obdobích: květy na jaře, obilí v létě, červené listí a mlha na podzim, sníh a sněhulák v zimě, pod duhou',
    cardText: `${N} slov o počasí: slunce, déšť, sníh, vítr, bouřky, horko a zima a čtyři roční období.`,
    note: {
      title: it('Che tempo fa?'),
      body: `O počasí se v italštině často mluví se slovesem ${it('fare')} (dělat): ${it('fa caldo')} (je horko), ${it('fa freddo')} (je zima), ${it('fa bel tempo')} (je hezky), ${it('fa brutto tempo')} (je ošklivo). ${it('Piove')} (prší), ${it('nevica')} (sněží) a ${it('grandina')} (padají kroupy) nemají podmět, stejně jako v češtině. S podstatnými jmény se používá ${it('c’è')}: ${it('c’è il sole')} (svítí slunce), ${it('c’è vento')} (fouká vítr), ${it('c’è nebbia')} (je mlha). Pozor: ${it('fa caldo')} mluví o počasí, ${it('ho caldo')} o tom, jak je vám („je mi horko“). ${it('Il tempo')} je také čas, který plyne: ${it('non ho tempo')}. Roční období se píšou s malým písmenem: ${it('in primavera')}, ${it('in autunno')}, ${it('d’estate')} nebo ${it('in estate')}, ${it('d’inverno')} nebo ${it('in inverno')}. Dny a měsíce najdete v lekci ${link('cs')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-pogoda-i-pory-roku',
    name: 'Pogoda i pory roku',
    title: 'Pogoda i pory roku | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o pogodzie — słońce, deszcz, śnieg, burza, upał, pochmurno, cztery pory roku… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'To samo drzewo na wzgórzu w czterech porach roku: kwiaty wiosną, zboże latem, czerwone liście i mgła jesienią, śnieg i bałwan zimą, pod tęczą',
    cardText: `${N} słów o pogodzie: słońce, deszcz, śnieg, wiatr, burze, upał i zimno oraz cztery pory roku.`,
    note: {
      title: it('Che tempo fa?'),
      body: `O pogodzie mówi się po włosku często z czasownikiem ${it('fare')} (robić): ${it('fa caldo')} (jest gorąco), ${it('fa freddo')} (jest zimno), ${it('fa bel tempo')} (jest ładna pogoda), ${it('fa brutto tempo')} (jest brzydka pogoda). ${it('Piove')} (pada deszcz), ${it('nevica')} (pada śnieg) i ${it('grandina')} (pada grad) nie mają podmiotu. Z rzeczownikami używa się ${it('c’è')}: ${it('c’è il sole')} (świeci słońce), ${it('c’è vento')} (wieje wiatr), ${it('c’è nebbia')} (jest mgła). Uwaga: ${it('fa caldo')} mówi o pogodzie, ${it('ho caldo')} o tym, jak się czujesz („jest mi gorąco”). ${it('Il tempo')} to także czas, który płynie: ${it('non ho tempo')}. Pory roku pisze się małą literą: ${it('in primavera')}, ${it('in autunno')}, ${it('d’estate')} albo ${it('in estate')}, ${it('d’inverno')} albo ${it('in inverno')}. Dni i miesiące są w lekcji ${link('pl')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hava-durumu-ve-mevsimler-kelimeleri',
    name: 'Hava durumu ve mevsimler',
    title: 'Hava durumu ve mevsimler | İtalyanca kelimeler | Italiano con Martin',
    description: `Hava durumundan söz etmek için ${N} İtalyanca kelime öğrenin — güneş, yağmur, kar, fırtına, sıcak, bulutlu, dört mevsim… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Dört mevsimde bir tepedeki aynı ağaç: ilkbaharda çiçekler, yazın buğday, sonbaharda kızıl yapraklar ve sis, kışın kar ve kardan adam, bir gökkuşağının altında',
    cardText: `Hava durumu için ${N} kelime: güneş, yağmur, kar, rüzgâr, fırtına, sıcak ve soğuk, ve dört mevsim.`,
    note: {
      title: it('Che tempo fa?'),
      body: `İtalyancada hava durumu için çoğu zaman ${it('fare')} (yapmak) fiili kullanılır: ${it('fa caldo')} (hava sıcak), ${it('fa freddo')} (hava soğuk), ${it('fa bel tempo')} (hava güzel), ${it('fa brutto tempo')} (hava kötü). ${it('Piove')} (yağmur yağıyor), ${it('nevica')} (kar yağıyor) ve ${it('grandina')} (dolu yağıyor) öznesizdir. İsimlerle ${it('c’è')} kullanılır: ${it('c’è il sole')} (güneş var), ${it('c’è vento')} (rüzgâr var), ${it('c’è nebbia')} (sis var). Dikkat: ${it('fa caldo')} havadan söz eder, ${it('ho caldo')} ise sizin nasıl hissettiğinizden (“sıcakladım”). ${it('Il tempo')} aynı zamanda geçen zaman demektir: ${it('non ho tempo')}. Mevsimler küçük harfle yazılır: ${it('in primavera')}, ${it('in autunno')}, ${it('d’estate')} ya da ${it('in estate')}, ${it('d’inverno')} ya da ${it('in inverno')}. Günler ve aylar ${link('tr')} dersinde.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-wetter-und-jahreszeiten',
    name: 'Das Wetter und die Jahreszeiten',
    title: 'Das Wetter und die Jahreszeiten | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter, um über das Wetter zu sprechen — Sonne, Regen, Schnee, Gewitter, Hitze, bewölkt, die vier Jahreszeiten … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Derselbe Baum auf einem Hügel in den vier Jahreszeiten: Blüten im Frühling, Weizen im Sommer, rote Blätter und Nebel im Herbst, Schnee und ein Schneemann im Winter, unter einem Regenbogen',
    cardText: `${N} Wörter, um über das Wetter zu sprechen: Sonne, Regen, Schnee, Wind, Gewitter, Hitze und Kälte und die vier Jahreszeiten.`,
    note: {
      title: it('Che tempo fa?'),
      body: `Für das Wetter benutzt das Italienische oft ${it('fare')} (machen): ${it('fa caldo')} (es ist heiß), ${it('fa freddo')} (es ist kalt), ${it('fa bel tempo')} (es ist schönes Wetter), ${it('fa brutto tempo')} (es ist schlechtes Wetter). ${it('Piove')}, ${it('nevica')} und ${it('grandina')} haben kein Subjekt: Ein „es“ gibt es im Italienischen nicht. Mit Substantiven benutzt man ${it('c’è')}: ${it('c’è il sole')} (die Sonne scheint), ${it('c’è vento')} (es ist windig), ${it('c’è nebbia')} (es ist neblig). Achtung: ${it('fa caldo')} spricht vom Wetter, ${it('ho caldo')} davon, wie es dir geht („mir ist heiß“). ${it('Il tempo')} ist auch die Zeit, die vergeht: ${it('non ho tempo')}. Die Jahreszeiten schreibt man klein: ${it('in primavera')}, ${it('in autunno')}, ${it('d’estate')} oder ${it('in estate')}, ${it('d’inverno')} oder ${it('in inverno')}. Wochentage und Monate stehen in der Lektion ${link('de')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-weather-and-seasons-vocabulary',
    name: '天気と季節',
    title: '天気と季節 | イタリア語の語彙 | Italiano con Martin',
    description: `太陽、雨、雪、雷雨、暑さ、曇り、四季など、天気について話すためのイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '虹の下、丘の上の同じ木の四季：春の花、夏の麦畑、秋の紅葉と霧、冬の雪と雪だるま',
    cardText: `天気について話すための ${N} 語。太陽、雨、雪、風、雷雨、暑さと寒さ、そして四季。`,
    note: {
      title: it('Che tempo fa?'),
      body: `天気を言うとき、イタリア語ではよく ${it('fare')}（する）を使います：${it('fa caldo')}（暑い）、${it('fa freddo')}（寒い）、${it('fa bel tempo')}（いい天気だ）、${it('fa brutto tempo')}（天気が悪い）。${it('Piove')}（雨が降る）、${it('nevica')}（雪が降る）、${it('grandina')}（雹が降る）には主語がありません。名詞には ${it('c’è')} を使います：${it('c’è il sole')}（日が照っている）、${it('c’è vento')}（風がある）、${it('c’è nebbia')}（霧が出ている）。注意：${it('fa caldo')} は天気のこと、${it('ho caldo')} は自分が暑いと感じていることです。${it('Il tempo')} には「時間」の意味もあります：${it('non ho tempo')}（時間がない）。季節は小文字で書きます：${it('in primavera')}、${it('in autunno')}、${it('d’estate')} または ${it('in estate')}、${it('d’inverno')} または ${it('in inverno')}。曜日と月はレッスン「${link('ja')}」で学べます。`,
    },
  },
};
