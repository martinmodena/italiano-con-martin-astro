// Stringhe di pagina della lezione «La montagna» (2026-09-27), kind 'words'.
//
// Campi come in city-pages.mjs; `note` spiega «in montagna» contro «al mare», «il monte» davanti ai nomi
// (il Monte Bianco) e le catene (le Alpi, gli Appennini, le Dolomiti), fare un'escursione / una passeggiata,
// andare a sciare, «gli sci» plurale, salire in cima; rimanda a «Il mare» e, per la marmotta e l'aquila, a
// «Gli animali».
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { mountainVocabulary } from './mountain-vocabulary.mjs';
import { animalPages } from './animals-pages.mjs';

const N = mountainVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

const sea = {
  it: ['/vocabolario/mare.html', 'Il mare'],
  en: ['/en/vocabulary/italian-sea-vocabulary.html', 'The sea'],
  es: ['/es/vocabulario/vocabulario-del-mar-en-italiano.html', 'El mar'],
  fr: ['/fr/vocabulaire/vocabulaire-de-la-mer-en-italien.html', 'La mer'],
  cs: ['/cs/slovni-zasoba/italska-slovni-zasoba-more.html', 'Moře'],
  pl: ['/pl/slownictwo/wloskie-slownictwo-morze.html', 'Morze'],
  tr: ['/tr/kelime-bilgisi/italyanca-deniz-kelimeleri.html', 'Deniz'],
  de: ['/de/wortschatz/italienischer-wortschatz-meer.html', 'Das Meer'],
  ja: ['/ja/goi/italian-sea-vocabulary.html', '海'],
};
const seaLink = (lang) => `<a href="${sea[lang][0]}">${sea[lang][1]}</a>`;
const animals = (lang) =>
  `<a href="/${animalPages[lang].dir}/${animalPages[lang].slug}.html">${animalPages[lang].name}</a>`;

export const mountainPages = {
  it: {
    dir: 'vocabolario',
    slug: 'montagna',
    name: 'La montagna',
    title: 'La montagna: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole della montagna in italiano — la cima, il bosco, il sentiero, il rifugio, la funivia, lo zaino, gli scarponi, gli sci… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Dodici foto della montagna: una roccia, un abete, un rifugio, una baita, la funivia, lo zaino, gli scarponi, la tenda, la bussola, gli sci, lo slittino e il falò',
    cardText: `${N} parole per la montagna: paesaggi, boschi, rifugi, l’escursione e la neve.`,
    note: {
      title: 'In montagna',
      body: `Si va <em>in montagna</em> ma <em>al mare</em>, e si dice <em>in montagna</em> anche per dire dove si è: <em>siamo in montagna</em>. Davanti al nome si usa <em>il monte</em>: <em>il Monte Bianco</em>, <em>il Monte Rosa</em>; le catene sono al plurale: <em>le Alpi</em>, <em>gli Appennini</em>, <em>le Dolomiti</em>. Si <em>fa un’escursione</em> o <em>una passeggiata</em>, si <em>sale in cima</em>, si <em>va a sciare</em>. <em>Gli sci</em> sono gli attrezzi (al plurale, perché sono due), <em>lo sci</em> è lo sport: <em>mi piace lo sci</em>. Le parole della spiaggia sono nella lezione ${seaLink('it')}; la marmotta, l’aquila e il cervo in ${animals('it')}.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-mountain-vocabulary',
    name: 'The mountains',
    title: 'The mountains | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for the mountains — the summit, the woods, the trail, the mountain hut, the cable car, the backpack, hiking boots, skis… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'Twelve mountain photos: a rock, a fir tree, a mountain hut, a cabin, the cable car, a backpack, hiking boots, a tent, a compass, skis, a sledge and a campfire',
    cardText: `${N} words for the mountains: landscapes, woods, huts, hiking and snow.`,
    note: {
      title: it('In montagna'),
      body: `You go ${it('in montagna')} (to the mountains) but ${it('al mare')} (to the seaside), and ${it('in montagna')} also says where you are: ${it('siamo in montagna')}. Before a name Italian uses ${it('il monte')}: ${it('il Monte Bianco')}, ${it('il Monte Rosa')}; ranges are plural: ${it('le Alpi')}, ${it('gli Appennini')}, ${it('le Dolomiti')}. You ${it('fai un’escursione')} (go hiking) or ${it('una passeggiata')} (go for a walk), you ${it('sali in cima')} (climb to the top), you ${it('vai a sciare')} (go skiing). ${it('Gli sci')} are the skis (plural, there are two), ${it('lo sci')} is the sport: ${it('mi piace lo sci')}. Beach words are in the lesson ${seaLink('en')}; the marmot, the eagle and the deer in ${animals('en')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-la-montana-en-italiano',
    name: 'La montaña',
    title: 'La montaña | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de la montaña en italiano — la cima, el bosque, el sendero, el refugio, el teleférico, la mochila, las botas, los esquís… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Doce fotos de la montaña: una roca, un abeto, un refugio, una cabaña, el teleférico, la mochila, las botas, la tienda, la brújula, los esquís, el trineo y la hoguera',
    cardText: `${N} palabras para la montaña: paisajes, bosques, refugios, excursiones y nieve.`,
    note: {
      title: it('In montagna'),
      body: `Se va ${it('in montagna')} (a la montaña) pero ${it('al mare')} (a la playa), y ${it('in montagna')} también dice dónde estás: ${it('siamo in montagna')}. Delante del nombre se usa ${it('il monte')}: ${it('il Monte Bianco')}, ${it('il Monte Rosa')}; las cordilleras van en plural: ${it('le Alpi')}, ${it('gli Appennini')}, ${it('le Dolomiti')}. Se ${it('fa un’escursione')} (se hace una excursión) o ${it('una passeggiata')} (un paseo), se ${it('sale in cima')} (se sube a la cima), se ${it('va a sciare')} (se va a esquiar). ${it('Gli sci')} son los esquís (en plural, porque son dos), ${it('lo sci')} es el deporte: ${it('mi piace lo sci')}. Las palabras de la playa están en la lección ${seaLink('es')}; la marmota, el águila y el ciervo, en ${animals('es')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-la-montagne-en-italien',
    name: 'La montagne',
    title: 'La montagne | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens de la montagne — le sommet, le bois, le sentier, le refuge, le téléphérique, le sac à dos, les chaussures de randonnée, les skis… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Douze photos de la montagne : un rocher, un sapin, un refuge, un chalet, le téléphérique, le sac à dos, les chaussures, la tente, la boussole, les skis, la luge et le feu de camp',
    cardText: `${N} mots pour la montagne : paysages, bois, refuges, randonnée et neige.`,
    note: {
      title: it('In montagna'),
      body: `On va ${it('in montagna')} (à la montagne) mais ${it('al mare')} (à la mer), et ${it('in montagna')} dit aussi où l’on est : ${it('siamo in montagna')}. Devant un nom, on utilise ${it('il monte')} : ${it('il Monte Bianco')}, ${it('il Monte Rosa')} ; les chaînes sont au pluriel : ${it('le Alpi')}, ${it('gli Appennini')}, ${it('le Dolomiti')}. On ${it('fa un’escursione')} (on fait une randonnée) ou ${it('una passeggiata')} (une promenade), on ${it('sale in cima')} (on monte au sommet), on ${it('va a sciare')} (on va skier). ${it('Gli sci')} sont les skis (au pluriel, il y en a deux), ${it('lo sci')} est le sport : ${it('mi piace lo sci')}. Les mots de la plage sont dans la leçon ${seaLink('fr')} ; la marmotte, l’aigle et le cerf dans ${animals('fr')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-hory',
    name: 'Hory',
    title: 'Hory | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o horách — vrchol, les, stezka, horská chata, lanovka, batoh, pohorky, lyže… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Dvanáct fotografií hor: skála, jedle, horská chata, srub, lanovka, batoh, pohorky, stan, kompas, lyže, sáňky a táborák',
    cardText: `${N} slov o horách: krajina, lesy, chaty, turistika a sníh.`,
    note: {
      title: it('In montagna'),
      body: `Na hory se jede ${it('in montagna')}, ale k moři ${it('al mare')}; a ${it('in montagna')} říká i to, kde jste: ${it('siamo in montagna')} (jsme na horách). Před jménem hory se používá ${it('il monte')}: ${it('il Monte Bianco')}, ${it('il Monte Rosa')}; pohoří jsou v množném čísle: ${it('le Alpi')}, ${it('gli Appennini')}, ${it('le Dolomiti')}. Dělá se ${it('un’escursione')} (túra) nebo ${it('una passeggiata')} (procházka), ${it('si sale in cima')} (vystoupá se na vrchol), ${it('si va a sciare')} (jede se lyžovat). ${it('Gli sci')} jsou lyže (množné číslo, jsou dvě), ${it('lo sci')} je sport: ${it('mi piace lo sci')}. Slova o pláži najdete v lekci ${seaLink('cs')}; svišť, orel a jelen v lekci ${animals('cs')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-gory',
    name: 'Góry',
    title: 'Góry | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o górach — szczyt, las, szlak, schronisko, kolejka linowa, plecak, buty trekkingowe, narty… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Dwanaście zdjęć gór: skała, jodła, schronisko, chata, kolejka linowa, plecak, buty, namiot, kompas, narty, sanki i ognisko',
    cardText: `${N} słów o górach: krajobrazy, lasy, schroniska, wędrówki i śnieg.`,
    note: {
      title: it('In montagna'),
      body: `W góry jedzie się ${it('in montagna')}, ale nad morze ${it('al mare')}; ${it('in montagna')} mówi też, gdzie jesteś: ${it('siamo in montagna')} (jesteśmy w górach). Przed nazwą używa się ${it('il monte')}: ${it('il Monte Bianco')}, ${it('il Monte Rosa')}; pasma są w liczbie mnogiej: ${it('le Alpi')}, ${it('gli Appennini')}, ${it('le Dolomiti')}. Robi się ${it('un’escursione')} (wycieczkę) albo ${it('una passeggiata')} (spacer), ${it('si sale in cima')} (wchodzi się na szczyt), ${it('si va a sciare')} (jedzie się na narty). ${it('Gli sci')} to narty (liczba mnoga, bo są dwie), ${it('lo sci')} to sport: ${it('mi piace lo sci')}. Słowa o plaży są w lekcji ${seaLink('pl')}; świstak, orzeł i jeleń w lekcji ${animals('pl')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-dag-kelimeleri',
    name: 'Dağ',
    title: 'Dağ | İtalyanca kelimeler | Italiano con Martin',
    description: `Dağ için ${N} İtalyanca kelime öğrenin — zirve, orman, patika, dağ evi, teleferik, sırt çantası, dağ botları, kayaklar… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Dağla ilgili on iki fotoğraf: bir kaya, bir köknar, dağ evi, dağ kulübesi, teleferik, sırt çantası, botlar, çadır, pusula, kayaklar, kızak ve kamp ateşi',
    cardText: `Dağ için ${N} kelime: manzaralar, ormanlar, dağ evleri, doğa yürüyüşü ve kar.`,
    note: {
      title: it('In montagna'),
      body: `Dağa ${it('in montagna')} gidilir ama denize ${it('al mare')}; ${it('in montagna')} nerede olduğunuzu da söyler: ${it('siamo in montagna')} (dağdayız). Bir dağın adından önce ${it('il monte')} kullanılır: ${it('il Monte Bianco')}, ${it('il Monte Rosa')}; sıradağlar çoğuldur: ${it('le Alpi')}, ${it('gli Appennini')}, ${it('le Dolomiti')}. ${it('Un’escursione')} (doğa yürüyüşü) ya da ${it('una passeggiata')} (gezinti) yapılır, ${it('si sale in cima')} (zirveye çıkılır), ${it('si va a sciare')} (kayağa gidilir). ${it('Gli sci')} kayak takımıdır (iki tane olduğu için çoğul), ${it('lo sci')} ise spordur: ${it('mi piace lo sci')}. Plaj kelimeleri ${seaLink('tr')} dersinde; dağ sıçanı, kartal ve geyik ${animals('tr')} dersinde.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-berge',
    name: 'Die Berge',
    title: 'Die Berge | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für die Berge — der Gipfel, der Wald, der Wanderweg, die Berghütte, die Seilbahn, der Rucksack, die Wanderschuhe, die Skier … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Zwölf Bergfotos: ein Felsen, eine Tanne, eine Berghütte, eine Almhütte, die Seilbahn, der Rucksack, die Wanderschuhe, das Zelt, der Kompass, die Skier, der Schlitten und das Lagerfeuer',
    cardText: `${N} Wörter für die Berge: Landschaften, Wälder, Hütten, Wandern und Schnee.`,
    note: {
      title: it('In montagna'),
      body: `Man fährt ${it('in montagna')} (in die Berge), aber ${it('al mare')} (ans Meer), und ${it('in montagna')} sagt auch, wo man ist: ${it('siamo in montagna')}. Vor einem Namen steht ${it('il monte')}: ${it('il Monte Bianco')}, ${it('il Monte Rosa')}; Gebirge stehen im Plural: ${it('le Alpi')}, ${it('gli Appennini')}, ${it('le Dolomiti')}. Man ${it('fa un’escursione')} (macht eine Wanderung) oder ${it('una passeggiata')} (einen Spaziergang), man ${it('sale in cima')} (steigt auf den Gipfel), man ${it('va a sciare')} (geht Ski fahren). ${it('Gli sci')} sind die Skier (Plural, es sind zwei), ${it('lo sci')} ist der Sport: ${it('mi piace lo sci')}. Die Wörter für den Strand stehen in der Lektion ${seaLink('de')}; Murmeltier, Adler und Hirsch in ${animals('de')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-mountain-vocabulary',
    name: '山',
    title: '山 | イタリア語の語彙 | Italiano con Martin',
    description: `頂上、森、山道、山小屋、ロープウェー、リュックサック、登山靴、スキー板など、山に関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt:
      '山の写真12枚：岩、モミの木、山小屋、山荘、ロープウェー、リュックサック、登山靴、テント、コンパス、スキー板、そり、たき火',
    cardText: `山に関する ${N} 語。景色、森、山小屋、ハイキング、そして雪。`,
    note: {
      title: it('In montagna'),
      body: `山へは ${it('in montagna')}、海へは ${it('al mare')} と言います。${it('in montagna')} は「山にいる」という意味にもなります：${it('siamo in montagna')}。山の名前の前には ${it('il monte')} をつけます：${it('il Monte Bianco')}、${it('il Monte Rosa')}。山脈は複数形です：${it('le Alpi')}、${it('gli Appennini')}、${it('le Dolomiti')}。${it('fare un’escursione')}（ハイキングをする）、${it('fare una passeggiata')}（散歩する）、${it('salire in cima')}（頂上に登る）、${it('andare a sciare')}（スキーに行く）と言います。${it('Gli sci')} は道具のスキー板（2本なので複数形）、${it('lo sci')} はスポーツのスキーです：${it('mi piace lo sci')}。浜辺の単語はレッスン「${seaLink('ja')}」に、マーモット、ワシ、シカは「${animals('ja')}」にあります。`,
    },
  },
};
