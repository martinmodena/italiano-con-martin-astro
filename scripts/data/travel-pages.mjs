// Stringhe di pagina della lezione «In viaggio» (2026-11-02), kind 'words'.
//
// `note` non e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// il treno si prende, si perde, ci si sale e si scende; la coincidenza e' il cambio di treno o di volo;
// fare la valigia; timbrare il biglietto; andare A Roma ma IN Italia; la camera e' la stanza (la foto si fa
// con la macchina fotografica). Poi le trappole della lingua dello studente (camera / kamera, coincidence,
// salir / salire, passagem / passaggio, Anschluss, aktarma, 乗り換え...).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { travelVocabulary } from './travel-vocabulary.mjs';

const N = travelVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const travelPages = {
  it: {
    dir: 'vocabolario',
    slug: 'viaggi',
    name: 'In viaggio',
    title: 'In viaggio: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole del viaggio in italiano — l’aeroporto, il passaporto, la valigia, il binario, il biglietto, il traghetto, la camera doppia… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt: 'Una valigia rossa sul binario di una piccola stazione italiana, con un treno regionale in arrivo',
    cardText: `${N} parole per viaggiare: in aeroporto, in treno e in strada, dove dormire e cosa visitare.`,
    note: {
      title: 'Prendere, perdere e timbrare',
      body: 'Il treno, l’aereo e il traghetto si <em>prendono</em>, e se arrivi tardi si <em>perdono</em>: <em>ho perso il treno</em>. Sul treno si <em>sale</em> e dal treno si <em>scende</em>. <em>La coincidenza</em> è il secondo treno o il secondo volo da prendere: <em>a Bologna ho la coincidenza per Venezia</em>. Prima di partire si <em>fa la valigia</em>, e sui treni regionali e sugli autobus il biglietto di carta si <em>timbra</em> nell’obliteratrice. Si va <em>a</em> Roma, <em>a</em> Parigi (le città) ma <em>in</em> Italia, <em>in</em> Sicilia (i Paesi e le regioni). <em>La camera</em> è la stanza dell’albergo: le foto si fanno con <em>la macchina fotografica</em>. E a chi parte si dice <em>Buon viaggio!</em>',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-travel-vocabulary',
    name: 'Travelling',
    title: 'Travelling | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian travel words — the airport, the passport, the suitcase, the platform, the ticket, the ferry, the double room… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'A red suitcase on the platform of a small Italian station, with a regional train arriving',
    cardText: `${N} words for travelling: at the airport, by train and on the road, where to sleep and what to visit.`,
    note: {
      title: `A ${it('camera')} is a room!`,
      body: `Two false friends for every English-speaking traveller. ${it('La camera')} is a hotel room (${it('una camera doppia')}, a double room): the camera you take photos with is ${it('la macchina fotografica')}. And ${it('la coincidenza')} is not a coincidence but your connecting train or flight: ${it('ho perso la coincidenza')}, I missed my connection. “To miss” a train is ${it('perdere')}, literally “to lose”: ${it('ho perso il treno')}. You ${it('prendere')} (take) trains and planes, ${it('salire')} (get on) and ${it('scendere')} (get off). “To pack” is ${it('fare la valigia')}, “to make the suitcase”. On regional trains and buses you must validate your paper ticket in the ${it('obliteratrice')} (${it('timbrare il biglietto')}), or you can be fined. Cities take ${it('a')}, countries ${it('in')}: ${it('vado a Roma')}, ${it('vado in Italia')}. A return ticket is ${it('andata e ritorno')}. And to someone leaving, say ${it('Buon viaggio!')}`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-viajes-en-italiano',
    name: 'De viaje',
    title: 'De viaje | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de viaje en italiano — el aeropuerto, el pasaporte, la maleta, el andén, el billete, el ferry, la habitación doble… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'Una maleta roja en el andén de una pequeña estación italiana, con un tren regional llegando',
    cardText: `${N} palabras para viajar: en el aeropuerto, en tren y por carretera, dónde dormir y qué visitar.`,
    note: {
      title: `${it('Salire')} no es «salir»`,
      body: `La trampa más traicionera: ${it('salire')} es «subir»: ${it('salgo sul treno')} quiere decir que entro en el tren. «Salir» es ${it('uscire')} o, para un tren, ${it('partire')}: ${it('il treno parte alle otto')}. Y «bajar» del tren es ${it('scendere')}. Otro falso amigo: ${it('la camera')} es la habitación (${it('una camera doppia')}); la cámara de fotos es ${it('la macchina fotografica')}. El andén es ${it('il binario')}, el enlace ${it('la coincidenza')} y el autocar ${it('il pullman')}. Como en español, el tren se ${it('prende')} (se coge) y se ${it('perde')}: ${it('ho perso il treno')}. «Hacer la maleta» se dice igual: ${it('fare la valigia')}. Para la cola valen ${it('la fila')} y ${it('la coda')}. En los trenes regionales y en el autobús el billete de papel se valida en la ${it('obliteratrice')} (${it('timbrare il biglietto')}), si no, te multan. A las ciudades se va con ${it('a')}, a los países con ${it('in')}: ${it('vado a Roma')}, ${it('vado in Italia')}. Y a quien se va, ${it('Buon viaggio!')}`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-du-voyage-en-italien',
    name: 'En voyage',
    title: 'En voyage | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens du voyage — l’aéroport, le passeport, la valise, le quai, le billet, le ferry, la chambre double… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Une valise rouge sur le quai d’une petite gare italienne, avec un train régional qui arrive',
    cardText: `${N} mots pour voyager : à l’aéroport, en train et sur la route, où dormir et quoi visiter.`,
    note: {
      title: `Votre correspondance, c’est ${it('la coincidenza')}`,
      body: `Bonne nouvelle : ${it('la camera')} ressemble à « la chambre » et c’est bien la chambre d’hôtel (${it('una camera doppia')}) ; l’appareil photo, c’est ${it('la macchina fotografica')}. La correspondance s’appelle ${it('la coincidenza')} et « rater » son train se dit ${it('perdere')} : ${it('ho perso la coincidenza')}. Le quai est ${it('il binario')} (le numéro de la voie), le car ${it('il pullman')}, le péage ${it('il casello')}. « Composter » se dit ${it('timbrare')} : dans les trains régionaux et les bus, on valide son billet papier dans l’${it('obliteratrice')}, sinon c’est l’amende. On ${it('sale')} dans le train (on monte) et on en ${it('scende')} (on descend) ; attention, ${it('salire')} n’a rien à voir avec « salir ». « Faire sa valise » se dit presque pareil : ${it('fare la valigia')}, sans possessif. Pour les villes ${it('a')}, pour les pays ${it('in')} : ${it('vado a Roma')}, ${it('vado in Italia')}. Et à quelqu’un qui part : ${it('Buon viaggio!')}`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-cestovani',
    name: 'Na cestách',
    title: 'Na cestách | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o cestování — letiště, pas, kufr, nástupiště, jízdenka, trajekt, dvoulůžkový pokoj… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Červený kufr na nástupišti malého italského nádraží, přijíždí regionální vlak',
    cardText: `${N} slov na cesty: na letišti, ve vlaku a na silnici, kde spát a co navštívit.`,
    note: {
      title: `${it('Camera')} není kamera`,
      body: `Pozor na falešného přítele: ${it('la camera')} je pokoj v hotelu (${it('una camera doppia')}, dvoulůžkový pokoj); fotoaparát je ${it('la macchina fotografica')} a kamera ${it('la videocamera')}. Přípoj je ${it('la coincidenza')}. Když vám vlak ujede, italsky ho „ztratíte“: ${it('ho perso il treno')}. Vlak, letadlo i trajekt se „berou“: ${it('prendo il treno')}; do vlaku se ${it('sale')} (nastupuje) a z vlaku se ${it('scende')} (vystupuje). „Sbalit si kufr“ je ${it('fare la valigia')}. Nástupiště je ${it('il binario')}, dálkový autobus ${it('il pullman')}, mýtná brána ${it('il casello')}. V regionálních vlacích a autobusech se papírová jízdenka označuje v ${it('obliteratrice')} (${it('timbrare il biglietto')}), jinak hrozí pokuta. Italština nemá pády: do města ${it('a')}, do země ${it('in')} — ${it('vado a Roma')}, ${it('vado in Italia')}. Zpáteční jízdenka je ${it('andata e ritorno')}. A tomu, kdo odjíždí, se říká ${it('Buon viaggio!')}`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-podroze',
    name: 'W podróży',
    title: 'W podróży | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o podróżowaniu — lotnisko, paszport, walizka, peron, bilet, prom, pokój dwuosobowy… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Czerwona walizka na peronie małej włoskiej stacji, wjeżdża pociąg regionalny',
    cardText: `${N} słów na podróż: na lotnisku, w pociągu i w trasie, gdzie spać i co zwiedzać.`,
    note: {
      title: `${it('Camera')} to nie kamera`,
      body: `Fałszywy przyjaciel: ${it('la camera')} to pokój w hotelu (${it('una camera doppia')}, pokój dwuosobowy); aparat to ${it('la macchina fotografica')}, a kamera ${it('la videocamera')}. Przesiadka to ${it('la coincidenza')}. Gdy spóźnisz się na pociąg, po włosku go „gubisz”: ${it('ho perso il treno')}. Pociąg, samolot i prom się „bierze”: ${it('prendo il treno')}; do pociągu się ${it('sale')} (wsiada), a z niego ${it('scende')} (wysiada). „Spakować walizkę” to ${it('fare la valigia')}. Dobra wiadomość: ${it('l’autostrada')} to po prostu autostrada, a ${it('il biglietto')} brzmi jak bilet. Peron to jednak ${it('il binario')}, autokar ${it('il pullman')}, bramka na autostradzie ${it('il casello')}. W pociągach regionalnych i autobusach papierowy bilet kasuje się w ${it('obliteratrice')} (${it('timbrare il biglietto')}), inaczej grozi mandat. Bez przypadków: do miasta ${it('a')}, do kraju ${it('in')} — ${it('vado a Roma')}, ${it('vado in Italia')}. A temu, kto wyjeżdża, mówi się ${it('Buon viaggio!')}`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-seyahat-kelimeleri',
    name: 'Seyahatte',
    title: 'Seyahatte | İtalyanca kelimeler | Italiano con Martin',
    description: `Seyahat için ${N} İtalyanca kelime öğrenin — havalimanı, pasaport, bavul, peron, bilet, feribot, çift kişilik oda… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'Küçük bir İtalyan istasyonunun peronunda kırmızı bir bavul ve gelen bir bölgesel tren',
    cardText: `Seyahat için ${N} kelime: havalimanında, trende ve yolda, nerede kalınır ve neler gezilir.`,
    note: {
      title: `${it('Camera')} kamera değil, odadır`,
      body: `Yanıltıcı bir kelime: ${it('la camera')} otel odasıdır (${it('una camera doppia')}, çift kişilik oda); fotoğraf makinesi ${it('la macchina fotografica')}, video kamera ${it('la videocamera')}. Aktarma ${it('la coincidenza')}’dır. Treni kaçırmak İtalyancada treni “kaybetmek”tir: ${it('ho perso il treno')}. Tren, uçak ve feribot “alınır”: ${it('prendo il treno')}; trene ${it('salire')} ile binilir, ${it('scendere')} ile inilir. “Bavul hazırlamak” ${it('fare la valigia')}’dır. Türkçedeki “-e” eki İtalyancada ikiye ayrılır: şehirlere ${it('a')}, ülkelere ${it('in')} — ${it('vado a Roma')} (Roma’ya), ${it('vado in Italia')} (İtalya’ya). Peron ${it('il binario')}, şehirlerarası otobüs ${it('il pullman')}, otoyol gişesi ${it('il casello')}. Bölgesel trenlerde ve otobüslerde kâğıt bilet ${it('obliteratrice')}’de onaylanır (${it('timbrare il biglietto')}), yoksa ceza yazılır. Artikelleri de birlikte öğrenin: ${it('il biglietto')}, ${it('la valigia')}, ${it('l’aereo')}. Yola çıkana “iyi yolculuklar” yerine ${it('Buon viaggio!')} denir.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-reisen',
    name: 'Auf Reisen',
    title: 'Auf Reisen | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für die Reise — der Flughafen, der Reisepass, der Koffer, das Gleis, die Fahrkarte, die Fähre, das Doppelzimmer … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Ein roter Koffer auf dem Bahnsteig eines kleinen italienischen Bahnhofs, ein Regionalzug fährt ein',
    cardText: `${N} Wörter fürs Reisen: am Flughafen, mit dem Zug und auf der Straße, wo man schläft und was man besichtigt.`,
    note: {
      title: `Die ${it('camera')} ist ein Zimmer`,
      body: `Falscher Freund: ${it('la camera')} ist das Hotelzimmer (${it('una camera doppia')}, ein Doppelzimmer); die Kamera zum Fotografieren ist ${it('la macchina fotografica')}. Der Anschluss heißt ${it('la coincidenza')}, und einen Zug „verpasst“ man nicht, man „verliert“ ihn: ${it('ho perso la coincidenza')}. Züge, Flugzeuge und Fähren „nimmt“ man: ${it('prendo il treno')}; man ${it('sale')} (steigt ein) und ${it('scende')} (steigt aus). „Koffer packen“ heißt ${it('fare la valigia')}, wörtlich „den Koffer machen“. Das Gleis ist ${it('il binario')}, der Reisebus ${it('il pullman')}, die Mautstelle ${it('il casello')}, die Raststätte ${it('l’area di servizio')} (oft einfach ${it('l’autogrill')}). Entwerten heißt ${it('timbrare il biglietto')}: In Regionalzügen und Bussen muss die Papierfahrkarte in die ${it('obliteratrice')}, sonst droht ein Bußgeld. Städte mit ${it('a')}, Länder mit ${it('in')}: ${it('vado a Roma')}, ${it('vado in Italia')}. Hin und zurück: ${it('andata e ritorno')}. Und zum Abschied: ${it('Buon viaggio!')}`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-travel-vocabulary',
    name: '旅行',
    title: '旅行 | イタリア語の語彙 | Italiano con Martin',
    description: `空港、パスポート、スーツケース、番線、切符、フェリー、ダブルルームなど、旅行に関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: 'イタリアの小さな駅のホームに置かれた赤いスーツケースと、到着する普通列車',
    cardText: `旅行のための ${N} 語。空港で、電車や車で、泊まる場所と観光。`,
    note: {
      title: `${it('camera')} はカメラではなく「部屋」`,
      body: `まぎらわしい単語：${it('la camera')} はホテルの「部屋」です（${it('una camera doppia')}＝ダブルルーム）。写真をとるカメラは ${it('la macchina fotografica')} です。乗り換えは ${it('la coincidenza')}。電車に乗り遅れることは、イタリア語では「失う」${it('perdere')} を使います：${it('ho perso il treno')}。電車・飛行機・フェリーには「とる」${it('prendere')} を使い、乗るのは ${it('salire')}、降りるのは ${it('scendere')} です。「荷造りをする」は ${it('fare la valigia')}（スーツケースを作る）。日本語の「〜に行く」は、町なら ${it('a')}、国なら ${it('in')} になります：${it('vado a Roma')}、${it('vado in Italia')}。番線は ${it('il binario')}、長距離バスは ${it('il pullman')}、高速道路の料金所は ${it('il casello')}。普通列車やバスでは、紙の切符を ${it('obliteratrice')} に入れて刻印しないと（${it('timbrare il biglietto')}）罰金になることがあります。冠詞もいっしょに覚えましょう：${it('il biglietto')}、${it('la valigia')}、${it('l’aereo')}。旅立つ人には ${it('Buon viaggio!')}（よい旅を）と言います。`,
    },
  },
};
