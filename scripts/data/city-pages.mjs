// Stringhe di pagina della lezione «La città» (2026-09-27), kind 'words'.
//
// Campi come in house-pages.mjs; `note` spiega le preposizioni con i luoghi (in piazza, in banca, in farmacia,
// ma al cinema, al bar, alla stazione; a scuola), i mezzi (in autobus, in macchina, in bici, ma a piedi;
// prendere l'autobus), il falso amico «libreria» (negozio di libri; i libri in prestito sono in biblioteca) e
// il bar italiano, dove si beve il caffe'.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { cityVocabulary } from './city-vocabulary.mjs';

const N = cityVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const cityPages = {
  it: {
    dir: 'vocabolario',
    slug: 'citta',
    name: 'La città',
    title: 'La città: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole della città in italiano — la piazza, la stazione, la farmacia, il bar, il semaforo, le strisce pedonali, l’autobus… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Dodici foto della città: una chiesa, il municipio, la fontana, il semaforo, il bar, il mercato, l’autobus, il tram, la bicicletta e altre',
    cardText: `${N} parole per la città: piazze ed edifici, negozi, la strada e i mezzi di trasporto.`,
    note: {
      title: 'In banca o al cinema?',
      body: `Con molti luoghi si usa <em>in</em> senza articolo: <em>vado in piazza</em>, <em>in banca</em>, <em>in farmacia</em>, <em>in biblioteca</em>, <em>in centro</em>. Con altri si usa <em>a</em> con l’articolo: <em>al cinema</em>, <em>al bar</em>, <em>al mercato</em>, <em>al parco</em>, <em>alla stazione</em>, <em>all’ospedale</em>. E si dice <em>a scuola</em>, <em>a teatro</em>, <em>a casa</em>. I mezzi vogliono <em>in</em>: <em>in autobus</em>, <em>in macchina</em>, <em>in bici</em>, <em>in treno</em>; ma si va <em>a piedi</em>. L’autobus, il treno e il taxi si <em>prendono</em>: <em>prendo la metropolitana</em>. Attenzione: <em>la libreria</em> è il negozio dove si comprano i libri (e il mobile con gli scaffali); i libri in prestito si prendono in <em>biblioteca</em>. <em>Il bar</em> italiano è soprattutto il posto del caffè e della colazione.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-city-vocabulary',
    name: 'The city',
    title: 'The city | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for the city — the square, the station, the pharmacy, the café, traffic lights, the zebra crossing, the bus… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'Twelve city photos: a church, the town hall, a fountain, traffic lights, a café, the market, a bus, a tram, a bicycle and others',
    cardText: `${N} words for the city: squares and buildings, shops, the street and transport.`,
    note: {
      title: `${it('In banca')} or ${it('al cinema')}?`,
      body: `With many places Italian uses ${it('in')} without an article: ${it('vado in piazza')}, ${it('in banca')}, ${it('in farmacia')}, ${it('in biblioteca')}, ${it('in centro')} (to the square, the bank, the pharmacy, the library, the centre). With others it uses ${it('a')} plus the article: ${it('al cinema')}, ${it('al bar')}, ${it('al mercato')}, ${it('al parco')}, ${it('alla stazione')}, ${it('all’ospedale')}. And you say ${it('a scuola')}, ${it('a teatro')}, ${it('a casa')}. Transport takes ${it('in')}: ${it('in autobus')} (by bus), ${it('in macchina')}, ${it('in bici')}, ${it('in treno')}; but on foot is ${it('a piedi')}. You “take” buses, trains and taxis: ${it('prendo la metropolitana')}. Careful: ${it('la libreria')} is a bookshop (or a bookcase), not a library; a library is ${it('la biblioteca')}. An Italian ${it('bar')} is mainly a café, for coffee and breakfast.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-la-ciudad-en-italiano',
    name: 'La ciudad',
    title: 'La ciudad | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de la ciudad en italiano — la plaza, la estación, la farmacia, la cafetería, el semáforo, el paso de peatones, el autobús… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Doce fotos de la ciudad: una iglesia, el ayuntamiento, una fuente, un semáforo, una cafetería, el mercado, un autobús, un tranvía, una bicicleta y otras',
    cardText: `${N} palabras para la ciudad: plazas y edificios, tiendas, la calle y los medios de transporte.`,
    note: {
      title: `¿${it('In banca')} o ${it('al cinema')}?`,
      body: `Con muchos lugares el italiano usa ${it('in')} sin artículo: ${it('vado in piazza')}, ${it('in banca')}, ${it('in farmacia')}, ${it('in biblioteca')}, ${it('in centro')} (voy a la plaza, al banco, a la farmacia, a la biblioteca, al centro). Con otros usa ${it('a')} con el artículo: ${it('al cinema')}, ${it('al bar')}, ${it('al mercato')}, ${it('al parco')}, ${it('alla stazione')}, ${it('all’ospedale')}. Y se dice ${it('a scuola')}, ${it('a teatro')}, ${it('a casa')}. Los medios de transporte llevan ${it('in')}: ${it('in autobus')} (en autobús), ${it('in macchina')}, ${it('in bici')}, ${it('in treno')}; pero se va ${it('a piedi')} (a pie). El autobús, el tren y el taxi se «toman»: ${it('prendo la metropolitana')}. Cuidado: ${it('la libreria')} es la librería (o la estantería), y los libros prestados están en ${it('la biblioteca')}. ${it('Il bar')} italiano es sobre todo el sitio del café y del desayuno.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-la-ville-en-italien',
    name: 'La ville',
    title: 'La ville | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens de la ville — la place, la gare, la pharmacie, le café, le feu, le passage piéton, le bus… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Douze photos de la ville : une église, la mairie, une fontaine, un feu de circulation, un café, le marché, un bus, un tram, un vélo et d’autres',
    cardText: `${N} mots pour la ville : places et bâtiments, magasins, la rue et les transports.`,
    note: {
      title: `${it('In banca')} ou ${it('al cinema')} ?`,
      body: `Avec beaucoup de lieux, l’italien utilise ${it('in')} sans article : ${it('vado in piazza')}, ${it('in banca')}, ${it('in farmacia')}, ${it('in biblioteca')}, ${it('in centro')} (je vais sur la place, à la banque, à la pharmacie, à la bibliothèque, au centre). Avec d’autres, il utilise ${it('a')} avec l’article : ${it('al cinema')}, ${it('al bar')}, ${it('al mercato')}, ${it('al parco')}, ${it('alla stazione')}, ${it('all’ospedale')}. Et on dit ${it('a scuola')}, ${it('a teatro')}, ${it('a casa')}. Les transports prennent ${it('in')} : ${it('in autobus')} (en bus), ${it('in macchina')}, ${it('in bici')}, ${it('in treno')} ; mais on va ${it('a piedi')} (à pied). Le bus, le train et le taxi, on les « prend » : ${it('prendo la metropolitana')}. Attention : ${it('la libreria')} est la librairie (ou la bibliothèque, le meuble) ; pour emprunter des livres, on va à ${it('la biblioteca')}. ${it('Il bar')} italien, c’est surtout le café où l’on prend son expresso et son petit-déjeuner.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-mesto',
    name: 'Město',
    title: 'Město | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o městě — náměstí, nádraží, lékárna, kavárna, semafor, přechod pro chodce, autobus… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Dvanáct fotografií města: kostel, radnice, kašna, semafor, kavárna, trh, autobus, tramvaj, kolo a další',
    cardText: `${N} slov o městě: náměstí a budovy, obchody, ulice a doprava.`,
    note: {
      title: `${it('In banca')}, nebo ${it('al cinema')}?`,
      body: `U mnoha míst se v italštině používá ${it('in')} bez členu: ${it('vado in piazza')}, ${it('in banca')}, ${it('in farmacia')}, ${it('in biblioteca')}, ${it('in centro')} (jdu na náměstí, do banky, do lékárny, do knihovny, do centra). U jiných ${it('a')} se členem: ${it('al cinema')}, ${it('al bar')}, ${it('al mercato')}, ${it('al parco')}, ${it('alla stazione')}, ${it('all’ospedale')}. A říká se ${it('a scuola')}, ${it('a teatro')}, ${it('a casa')}. Dopravní prostředky mají ${it('in')}: ${it('in autobus')} (autobusem), ${it('in macchina')}, ${it('in bici')}, ${it('in treno')}; ale pěšky je ${it('a piedi')}. Autobus, vlak a taxi se „berou“: ${it('prendo la metropolitana')}. Pozor: ${it('la libreria')} je knihkupectví (nebo knihovna jako nábytek); knihy si půjčujete v ${it('biblioteca')}. Italský ${it('bar')} je hlavně kavárna na kávu a snídani.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-miasto',
    name: 'Miasto',
    title: 'Miasto | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o mieście — plac, dworzec, apteka, kawiarnia, światła, przejście dla pieszych, autobus… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Dwanaście zdjęć miasta: kościół, ratusz, fontanna, sygnalizacja świetlna, kawiarnia, targ, autobus, tramwaj, rower i inne',
    cardText: `${N} słów o mieście: place i budynki, sklepy, ulica i środki transportu.`,
    note: {
      title: `${it('In banca')} czy ${it('al cinema')}?`,
      body: `Przy wielu miejscach po włosku używa się ${it('in')} bez rodzajnika: ${it('vado in piazza')}, ${it('in banca')}, ${it('in farmacia')}, ${it('in biblioteca')}, ${it('in centro')} (idę na plac, do banku, do apteki, do biblioteki, do centrum). Przy innych ${it('a')} z rodzajnikiem: ${it('al cinema')}, ${it('al bar')}, ${it('al mercato')}, ${it('al parco')}, ${it('alla stazione')}, ${it('all’ospedale')}. Mówi się też ${it('a scuola')}, ${it('a teatro')}, ${it('a casa')}. Środki transportu łączą się z ${it('in')}: ${it('in autobus')} (autobusem), ${it('in macchina')}, ${it('in bici')}, ${it('in treno')}; ale pieszo to ${it('a piedi')}. Autobus, pociąg i taksówkę się „bierze”: ${it('prendo la metropolitana')}. Uwaga: ${it('la libreria')} to księgarnia (albo regał na książki); książki wypożycza się w ${it('biblioteca')}. Włoski ${it('bar')} to przede wszystkim kawiarnia, na kawę i śniadanie.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-sehir-kelimeleri',
    name: 'Şehir',
    title: 'Şehir | İtalyanca kelimeler | Italiano con Martin',
    description: `Şehir için ${N} İtalyanca kelime öğrenin — meydan, istasyon, eczane, kafe, trafik lambası, yaya geçidi, otobüs… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Şehirle ilgili on iki fotoğraf: bir kilise, belediye binası, çeşme, trafik lambası, kafe, pazar, otobüs, tramvay, bisiklet ve diğerleri',
    cardText: `Şehir için ${N} kelime: meydanlar ve binalar, dükkânlar, sokak ve ulaşım araçları.`,
    note: {
      title: `${it('In banca')} mı, ${it('al cinema')} mı?`,
      body: `Birçok yerle İtalyanca artikelsiz ${it('in')} kullanır: ${it('vado in piazza')}, ${it('in banca')}, ${it('in farmacia')}, ${it('in biblioteca')}, ${it('in centro')} (meydana, bankaya, eczaneye, kütüphaneye, merkeze gidiyorum). Başka yerlerle artikelli ${it('a')} kullanılır: ${it('al cinema')}, ${it('al bar')}, ${it('al mercato')}, ${it('al parco')}, ${it('alla stazione')}, ${it('all’ospedale')}. Ayrıca ${it('a scuola')}, ${it('a teatro')}, ${it('a casa')} denir. Ulaşım araçları ${it('in')} alır: ${it('in autobus')} (otobüsle), ${it('in macchina')}, ${it('in bici')}, ${it('in treno')}; ama yürüyerek ${it('a piedi')} gidilir. Otobüs, tren ve taksi “alınır”: ${it('prendo la metropolitana')}. Dikkat: ${it('la libreria')} kitapçıdır (ya da kitaplık); ödünç kitap ${it('biblioteca')}’dan alınır. İtalyan ${it('bar')}’ı daha çok kahve içilen ve kahvaltı yapılan bir kafedir.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-stadt',
    name: 'Die Stadt',
    title: 'Die Stadt | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für die Stadt — der Platz, der Bahnhof, die Apotheke, das Café, die Ampel, der Zebrastreifen, der Bus … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Zwölf Fotos aus der Stadt: eine Kirche, das Rathaus, ein Brunnen, eine Ampel, ein Café, der Markt, ein Bus, eine Straßenbahn, ein Fahrrad und andere',
    cardText: `${N} Wörter für die Stadt: Plätze und Gebäude, Geschäfte, die Straße und die Verkehrsmittel.`,
    note: {
      title: `${it('In banca')} oder ${it('al cinema')}?`,
      body: `Bei vielen Orten steht im Italienischen ${it('in')} ohne Artikel: ${it('vado in piazza')}, ${it('in banca')}, ${it('in farmacia')}, ${it('in biblioteca')}, ${it('in centro')} (ich gehe auf den Platz, zur Bank, in die Apotheke, in die Bibliothek, ins Zentrum). Bei anderen ${it('a')} mit Artikel: ${it('al cinema')}, ${it('al bar')}, ${it('al mercato')}, ${it('al parco')}, ${it('alla stazione')}, ${it('all’ospedale')}. Und man sagt ${it('a scuola')}, ${it('a teatro')}, ${it('a casa')}. Verkehrsmittel stehen mit ${it('in')}: ${it('in autobus')} (mit dem Bus), ${it('in macchina')}, ${it('in bici')}, ${it('in treno')}; aber zu Fuß heißt ${it('a piedi')}. Bus, Zug und Taxi „nimmt“ man: ${it('prendo la metropolitana')}. Achtung: ${it('la libreria')} ist die Buchhandlung (oder das Bücherregal); Bücher leiht man in der ${it('biblioteca')} aus. Die italienische ${it('bar')} ist vor allem ein Café für Espresso und Frühstück.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-city-vocabulary',
    name: '町',
    title: '町 | イタリア語の語彙 | Italiano con Martin',
    description: `広場、駅、薬局、バール、信号、横断歩道、バスなど、町に関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '町の写真12枚：教会、市役所、噴水、信号、バール、市場、バス、路面電車、自転車など',
    cardText: `町に関する ${N} 語。広場と建物、お店、通り、そして乗り物。`,
    note: {
      title: `${it('In banca')} か ${it('al cinema')} か？`,
      body: `多くの場所には冠詞なしの ${it('in')} を使います：${it('vado in piazza')}、${it('in banca')}、${it('in farmacia')}、${it('in biblioteca')}、${it('in centro')}（広場へ、銀行へ、薬局へ、図書館へ、中心街へ行く）。ほかの場所には冠詞つきの ${it('a')} を使います：${it('al cinema')}、${it('al bar')}、${it('al mercato')}、${it('al parco')}、${it('alla stazione')}、${it('all’ospedale')}。また ${it('a scuola')}、${it('a teatro')}、${it('a casa')} とも言います。乗り物には ${it('in')} を使います：${it('in autobus')}（バスで）、${it('in macchina')}、${it('in bici')}、${it('in treno')}。ただし「歩いて」は ${it('a piedi')} です。バス・電車・タクシーには ${it('prendere')}（とる）を使います：${it('prendo la metropolitana')}。注意：${it('la libreria')} は「書店」（または本棚）で、本を借りる図書館は ${it('la biblioteca')} です。イタリアの ${it('bar')} は主にコーヒーと朝食の店です。`,
    },
  },
};
