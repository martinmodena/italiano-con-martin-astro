// Stringhe di pagina della lezione «La casa» (2026-09-27), kind 'words'.
//
// Campi come in weather-pages.mjs; `note` spiega «a casa» senza articolo (e «casa mia»), stanza e camera,
// i due sensi di «bagno», i piani (il primo piano non e' il piano terra), il plurale «le lenzuola», e
// rimanda alle lezioni «La cucina» e «Il salotto» per gli oggetti di quelle due stanze.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { houseVocabulary } from './house-vocabulary.mjs';

const N = houseVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

const rooms = {
  it: [
    ['/vocabolario/cucina.html', 'La cucina'],
    ['/vocabolario/salotto.html', 'Il salotto'],
  ],
  en: [
    ['/en/vocabulary/italian-kitchen-vocabulary.html', 'The kitchen'],
    ['/en/vocabulary/italian-living-room-vocabulary.html', 'The living room'],
  ],
  es: [
    ['/es/vocabulario/vocabulario-cocina-italiano.html', 'La cocina'],
    ['/es/vocabulario/vocabulario-del-salon-en-italiano.html', 'El salón'],
  ],
  fr: [
    ['/fr/vocabulaire/vocabulaire-cuisine-italien.html', 'La cuisine'],
    ['/fr/vocabulaire/vocabulaire-du-salon-en-italien.html', 'Le salon'],
  ],
  cs: [
    ['/cs/slovni-zasoba/italska-slovni-zasoba-kuchyne.html', 'Kuchyně'],
    ['/cs/slovni-zasoba/italska-slovni-zasoba-obyvaci-pokoj.html', 'Obývací pokoj'],
  ],
  pl: [
    ['/pl/slownictwo/wloskie-slownictwo-kuchnia.html', 'Kuchnia'],
    ['/pl/slownictwo/wloskie-slownictwo-salon.html', 'Salon'],
  ],
  tr: [
    ['/tr/kelime-bilgisi/italyanca-mutfak-kelimeleri.html', 'Mutfak'],
    ['/tr/kelime-bilgisi/italyanca-oturma-odasi-kelimeleri.html', 'Oturma odası'],
  ],
  de: [
    ['/de/wortschatz/italienischer-wortschatz-kueche.html', 'Die Küche'],
    ['/de/wortschatz/italienischer-wortschatz-wohnzimmer.html', 'Das Wohnzimmer'],
  ],
  ja: [
    ['/ja/goi/italian-kitchen-vocabulary.html', '台所'],
    ['/ja/goi/italian-living-room-vocabulary.html', 'リビング'],
  ],
};
const kitchen = (lang) => `<a href="${rooms[lang][0][0]}">${rooms[lang][0][1]}</a>`;
const living = (lang) => `<a href="${rooms[lang][1][0]}">${rooms[lang][1][1]}</a>`;

export const housePages = {
  it: {
    dir: 'vocabolario',
    slug: 'casa',
    name: 'La casa',
    title: 'La casa e le stanze: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole della casa in italiano — le stanze, la porta, le scale, il letto, l’armadio, la doccia, la lavatrice… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Un appartamento italiano luminoso: il soggiorno con il divano, il tappeto e la libreria, la cucina e la camera da letto sullo sfondo, il balcone con i gerani',
    cardText: `${N} parole per la casa: le stanze, le parti della casa, la camera da letto, il bagno e le faccende.`,
    note: {
      title: 'A casa',
      body: `Si dice <em>sono a casa</em> e <em>vado a casa</em>, senza articolo, e <em>casa mia</em>, <em>casa tua</em> senza articolo e con il possessivo dopo. <em>La stanza</em> è una stanza qualsiasi; <em>la camera</em> di solito è la camera da letto: <em>una casa di quattro stanze</em>, <em>la camera dei bambini</em>. <em>Il bagno</em> è la stanza, ma <em>fare il bagno</em> vuol dire lavarsi nella vasca o nuotare al mare. <em>Il piano terra</em> è quello della strada: <em>il primo piano</em> è già un piano sopra. <em>Il lenzuolo</em> al plurale diventa <em>le lenzuola</em>. Gli oggetti della cucina e del salotto sono nelle lezioni ${kitchen('it')} e ${living('it')}.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-house-vocabulary',
    name: 'The house',
    title: 'The house and its rooms | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for the house — the rooms, the door, the stairs, the bed, the wardrobe, the shower, the washing machine… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'A bright Italian apartment: the living room with a sofa, a rug and a bookcase, the kitchen and bedroom in the background, a balcony with geraniums',
    cardText: `${N} words for the house: the rooms, the parts of the house, the bedroom, the bathroom and the housework.`,
    note: {
      title: it('A casa'),
      body: `“At home” is ${it('a casa')}, with no article: ${it('sono a casa')} (I’m at home), ${it('vado a casa')} (I’m going home). “My home” is ${it('casa mia')}, with no article and the possessive after the noun. ${it('La stanza')} is any room; ${it('la camera')} is usually the bedroom: ${it('una casa di quattro stanze')} (a four-room house), ${it('la camera dei bambini')} (the children’s bedroom). ${it('Il bagno')} is the bathroom, but ${it('fare il bagno')} means having a bath or swimming in the sea. ${it('Il piano terra')} is the ground floor, so ${it('il primo piano')} is one floor up, as in British English. The plural of ${it('il lenzuolo')} is ${it('le lenzuola')}. Kitchen and living-room objects are in the lessons ${kitchen('en')} and ${living('en')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-la-casa-en-italiano',
    name: 'La casa',
    title: 'La casa y las habitaciones | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de la casa en italiano — las habitaciones, la puerta, las escaleras, la cama, el armario, la ducha, la lavadora… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Un piso italiano luminoso: el salón con el sofá, la alfombra y la estantería, la cocina y el dormitorio al fondo, el balcón con geranios',
    cardText: `${N} palabras para la casa: las habitaciones, las partes de la casa, el dormitorio, el baño y las tareas domésticas.`,
    note: {
      title: it('A casa'),
      body: `«En casa» se dice ${it('a casa')}, sin artículo: ${it('sono a casa')} (estoy en casa), ${it('vado a casa')} (voy a casa). «Mi casa» es ${it('casa mia')}, sin artículo y con el posesivo detrás. ${it('La stanza')} es cualquier habitación; ${it('la camera')} suele ser el dormitorio: ${it('una casa di quattro stanze')} (una casa de cuatro habitaciones), ${it('la camera dei bambini')} (el dormitorio de los niños). ${it('Il bagno')} es el cuarto de baño, pero ${it('fare il bagno')} significa bañarse en la bañera o en el mar. ${it('Il piano terra')} es la planta baja, así que ${it('il primo piano')} ya está un piso más arriba. El plural de ${it('il lenzuolo')} es ${it('le lenzuola')}. Los objetos de la cocina y del salón están en las lecciones ${kitchen('es')} y ${living('es')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-la-maison-en-italien',
    name: 'La maison',
    title: 'La maison et les pièces | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens de la maison — les pièces, la porte, l’escalier, le lit, l’armoire, la douche, la machine à laver… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Un appartement italien lumineux : le séjour avec le canapé, le tapis et la bibliothèque, la cuisine et la chambre au fond, le balcon avec des géraniums',
    cardText: `${N} mots pour la maison : les pièces, les parties de la maison, la chambre, la salle de bains et les tâches ménagères.`,
    note: {
      title: it('A casa'),
      body: `« À la maison » se dit ${it('a casa')}, sans article : ${it('sono a casa')} (je suis à la maison), ${it('vado a casa')} (je rentre à la maison). « Chez moi » se dit ${it('casa mia')}, sans article et avec le possessif après le nom. ${it('La stanza')} est une pièce quelconque ; ${it('la camera')} est en général la chambre : ${it('una casa di quattro stanze')} (une maison de quatre pièces), ${it('la camera dei bambini')} (la chambre des enfants). ${it('Il bagno')} est la salle de bains, mais ${it('fare il bagno')} veut dire prendre un bain ou se baigner dans la mer. ${it('Il piano terra')} est le rez-de-chaussée : ${it('il primo piano')} est le premier étage, comme en français. Le pluriel de ${it('il lenzuolo')} est ${it('le lenzuola')}. Les objets de la cuisine et du salon sont dans les leçons ${kitchen('fr')} et ${living('fr')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-dum',
    name: 'Dům',
    title: 'Dům a místnosti | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o domě — místnosti, dveře, schody, postel, skříň, sprcha, pračka… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Světlý italský byt: obývací pokoj s pohovkou, kobercem a knihovnou, v pozadí kuchyně a ložnice, balkon s muškáty',
    cardText: `${N} slov o domě: místnosti, části domu, ložnice, koupelna a domácí práce.`,
    note: {
      title: it('A casa'),
      body: `„Doma“ se řekne ${it('a casa')}, bez členu: ${it('sono a casa')} (jsem doma), ${it('vado a casa')} (jdu domů). „U mě doma“ je ${it('casa mia')}, bez členu a s přivlastňovacím zájmenem za podstatným jménem. ${it('La stanza')} je jakákoli místnost; ${it('la camera')} je obvykle ložnice: ${it('una casa di quattro stanze')} (dům se čtyřmi místnostmi), ${it('la camera dei bambini')} (dětský pokoj). ${it('Il bagno')} je koupelna, ale ${it('fare il bagno')} znamená koupat se ve vaně nebo v moři. ${it('Il piano terra')} je přízemí, takže ${it('il primo piano')} je první patro nad ním, stejně jako v češtině. Množné číslo od ${it('il lenzuolo')} je ${it('le lenzuola')}. Předměty z kuchyně a obývacího pokoje najdete v lekcích ${kitchen('cs')} a ${living('cs')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-dom',
    name: 'Dom',
    title: 'Dom i pomieszczenia | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o domu — pomieszczenia, drzwi, schody, łóżko, szafa, prysznic, pralka… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Jasne włoskie mieszkanie: salon z kanapą, dywanem i regałem na książki, w tle kuchnia i sypialnia, balkon z pelargoniami',
    cardText: `${N} słów o domu: pomieszczenia, części domu, sypialnia, łazienka i prace domowe.`,
    note: {
      title: it('A casa'),
      body: `„W domu” to ${it('a casa')}, bez rodzajnika: ${it('sono a casa')} (jestem w domu), ${it('vado a casa')} (idę do domu). „U mnie w domu” to ${it('casa mia')}, bez rodzajnika i z zaimkiem dzierżawczym po rzeczowniku. ${it('La stanza')} to dowolny pokój; ${it('la camera')} to zwykle sypialnia: ${it('una casa di quattro stanze')} (dom z czterema pokojami), ${it('la camera dei bambini')} (pokój dziecięcy). ${it('Il bagno')} to łazienka, ale ${it('fare il bagno')} znaczy kąpać się w wannie albo w morzu. ${it('Il piano terra')} to parter, więc ${it('il primo piano')} to pierwsze piętro nad nim, tak jak po polsku. Liczba mnoga od ${it('il lenzuolo')} to ${it('le lenzuola')}. Przedmioty z kuchni i salonu są w lekcjach ${kitchen('pl')} i ${living('pl')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-ev-kelimeleri',
    name: 'Ev',
    title: 'Ev ve odalar | İtalyanca kelimeler | Italiano con Martin',
    description: `Ev için ${N} İtalyanca kelime öğrenin — odalar, kapı, merdiven, yatak, gardırop, duş, çamaşır makinesi… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Aydınlık bir İtalyan dairesi: kanepe, halı ve kitaplıklı oturma odası, arkada mutfak ve yatak odası, sardunyalı balkon',
    cardText: `Ev için ${N} kelime: odalar, evin bölümleri, yatak odası, banyo ve ev işleri.`,
    note: {
      title: it('A casa'),
      body: `“Evde” ${it('a casa')} diye söylenir, artikelsiz: ${it('sono a casa')} (evdeyim), ${it('vado a casa')} (eve gidiyorum). “Benim evim” ${it('casa mia')} olur: artikel yok, iyelik sözcüğü ismin arkasında. ${it('La stanza')} herhangi bir odadır; ${it('la camera')} genellikle yatak odasıdır: ${it('una casa di quattro stanze')} (dört odalı bir ev), ${it('la camera dei bambini')} (çocuk odası). ${it('Il bagno')} banyodur, ama ${it('fare il bagno')} küvette yıkanmak ya da denizde yüzmek demektir. ${it('Il piano terra')} zemin kattır, yani ${it('il primo piano')} onun bir üstüdür. ${it('Il lenzuolo')} kelimesinin çoğulu ${it('le lenzuola')}’dır. Mutfak ve oturma odası eşyaları ${kitchen('tr')} ve ${living('tr')} derslerinde.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-haus',
    name: 'Das Haus',
    title: 'Das Haus und die Zimmer | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter rund ums Haus — die Zimmer, die Tür, die Treppe, das Bett, der Kleiderschrank, die Dusche, die Waschmaschine … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Eine helle italienische Wohnung: das Wohnzimmer mit Sofa, Teppich und Bücherregal, im Hintergrund Küche und Schlafzimmer, ein Balkon mit Geranien',
    cardText: `${N} Wörter rund ums Haus: die Zimmer, die Teile des Hauses, das Schlafzimmer, das Bad und die Hausarbeit.`,
    note: {
      title: it('A casa'),
      body: `„Zu Hause“ heißt ${it('a casa')}, ohne Artikel: ${it('sono a casa')} (ich bin zu Hause), ${it('vado a casa')} (ich gehe nach Hause). „Bei mir zu Hause“ ist ${it('casa mia')}, ohne Artikel und mit dem Possessiv nach dem Nomen. ${it('La stanza')} ist irgendein Zimmer; ${it('la camera')} ist meistens das Schlafzimmer: ${it('una casa di quattro stanze')} (ein Haus mit vier Zimmern), ${it('la camera dei bambini')} (das Kinderzimmer). ${it('Il bagno')} ist das Badezimmer, aber ${it('fare il bagno')} heißt baden, in der Wanne oder im Meer. ${it('Il piano terra')} ist das Erdgeschoss, also ist ${it('il primo piano')} der erste Stock darüber, wie im Deutschen. Der Plural von ${it('il lenzuolo')} ist ${it('le lenzuola')}. Die Dinge in Küche und Wohnzimmer stehen in den Lektionen ${kitchen('de')} und ${living('de')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-house-vocabulary',
    name: '家',
    title: '家と部屋 | イタリア語の語彙 | Italiano con Martin',
    description: `部屋、ドア、階段、ベッド、洋服だんす、シャワー、洗濯機など、家に関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '明るいイタリアのアパート：ソファ、じゅうたん、本棚のあるリビング、奥に台所と寝室、ゼラニウムのバルコニー',
    cardText: `家に関する ${N} 語。部屋、家の各部分、寝室、浴室、そして家事。`,
    note: {
      title: it('A casa'),
      body: `「家で・家に」は冠詞なしで ${it('a casa')} と言います：${it('sono a casa')}（家にいます）、${it('vado a casa')}（家に帰ります）。「私の家」は ${it('casa mia')} で、冠詞をつけず、所有形容詞を名詞の後ろに置きます。${it('La stanza')} は部屋一般、${it('la camera')} はふつう寝室のことです：${it('una casa di quattro stanze')}（4部屋の家）、${it('la camera dei bambini')}（子ども部屋）。${it('Il bagno')} は浴室ですが、${it('fare il bagno')} は「お風呂に入る」または「海で泳ぐ」という意味です。${it('Il piano terra')} は地上階（日本の1階）なので、${it('il primo piano')} は日本の2階にあたります。${it('Il lenzuolo')} の複数形は ${it('le lenzuola')} です。台所とリビングの物はレッスン「${kitchen('ja')}」と「${living('ja')}」で学べます。`,
    },
  },
};
