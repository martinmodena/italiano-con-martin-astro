// Stringhe di pagina della lezione «Le persone intorno a noi» (2026-09-26), kind 'words'.
//
// Campi come in jobs-pages.mjs; `note` spiega le trappole della lezione: «la gente» e' singolare,
// «la persona» e' femminile anche per un uomo, i plurali irregolari (uomini, amici, colleghi) e le parole
// che cambiano solo l'articolo (il/la cliente, il/la turista, l'ospite).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { peopleVocabulary } from './people-vocabulary.mjs';

const N = peopleVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const peoplePages = {
  it: {
    dir: 'vocabolario',
    slug: 'persone',
    name: 'Le persone intorno a noi',
    title: 'Le persone intorno a noi: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole per le persone di tutti i giorni in italiano — l’amico, il vicino di casa, il collega, il compagno di classe, l’ospite… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Dodici foto di persone: una bambina con la palla, due amiche, un anziano, un tifoso, due gemelle, una vicina di casa che saluta e altri',
    cardText: `${N} parole per le persone di tutti i giorni: amici, vicini di casa, colleghi, compagni di classe, ospiti e sconosciuti.`,
    note: {
      title: 'La gente è…, la persona è…',
      body: '<em>La gente</em> è singolare: <em>la gente aspetta</em>, non «aspettano». <em>La persona</em> è sempre femminile, anche per un uomo: <em>Marco è una persona gentile</em>. Alcuni plurali sono irregolari: <em>l’uomo</em>, <em>gli uomini</em>; <em>l’amico</em>, <em>gli amici</em>; <em>il collega</em>, <em>i colleghi</em> e <em>le colleghe</em>. Altre parole cambiano solo l’articolo: <em>il cliente</em>, <em>la cliente</em>; <em>il turista</em>, <em>la turista</em>; <em>l’ospite</em> è uguale per uomini e donne. E <em>il ragazzo</em> vuol dire anche «il fidanzato»: <em>Luca è il ragazzo di Anna</em>.',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-people-vocabulary',
    name: 'The people around us',
    title: 'The people around us | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for the people in your everyday life — friend, neighbour, colleague, classmate, guest… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'Twelve photos of people: a girl with a ball, two friends, an elderly man, a sports fan, twin girls, a neighbour waving and others',
    cardText: `${N} words for the people in your everyday life: friends, neighbours, colleagues, classmates, guests and strangers.`,
    note: {
      title: `${it('La gente è…')}, ${it('la persona è…')}`,
      body: `${it('La gente')} (people) is singular: ${it('la gente aspetta')}, not “aspettano”. ${it('La persona')} is always feminine, even for a man: ${it('Marco è una persona gentile')}. Some plurals are irregular: ${it('l’uomo')}, ${it('gli uomini')}; ${it('l’amico')}, ${it('gli amici')}; ${it('il collega')}, ${it('i colleghi')} and ${it('le colleghe')}. Other words only change the article: ${it('il cliente')}, ${it('la cliente')}; ${it('il turista')}, ${it('la turista')}; ${it('l’ospite')} is the same for men and women. And ${it('il ragazzo')} also means “boyfriend”: ${it('Luca è il ragazzo di Anna')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-las-personas-en-italiano',
    name: 'Las personas que nos rodean',
    title: 'Las personas que nos rodean | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras en italiano para las personas de tu día a día — amigo, vecino, compañero de trabajo, compañero de clase, invitado… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Doce fotos de personas: una niña con una pelota, dos amigas, un anciano, un hincha, dos gemelas, una vecina que saluda y otros',
    cardText: `${N} palabras para las personas de todos los días: amigos, vecinos, compañeros de trabajo y de clase, invitados y desconocidos.`,
    note: {
      title: `${it('La gente è…')}, ${it('la persona è…')}`,
      body: `${it('La gente')} es singular, como en español: ${it('la gente aspetta')}, no «aspettano». ${it('La persona')} es siempre femenina, también para un hombre: ${it('Marco è una persona gentile')}. Algunos plurales son irregulares: ${it('l’uomo')}, ${it('gli uomini')}; ${it('l’amico')}, ${it('gli amici')}; ${it('il collega')}, ${it('i colleghi')} y ${it('le colleghe')}. Otras palabras solo cambian el artículo: ${it('il cliente')}, ${it('la cliente')}; ${it('il turista')}, ${it('la turista')}; ${it('l’ospite')} es igual para hombres y mujeres. Y ${it('il ragazzo')} también significa «el novio»: ${it('Luca è il ragazzo di Anna')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-des-personnes-en-italien',
    name: 'Les gens autour de nous',
    title: 'Les gens autour de nous | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens pour les personnes de tous les jours — ami, voisin, collègue, camarade de classe, invité… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Douze photos de personnes : une fillette avec un ballon, deux amies, un homme âgé, un supporter, des jumelles, une voisine qui salue et d’autres',
    cardText: `${N} mots pour les personnes de tous les jours : amis, voisins, collègues, camarades de classe, invités et inconnus.`,
    note: {
      title: `${it('La gente è…')}, ${it('la persona è…')}`,
      body: `${it('La gente')} (les gens) est au singulier : ${it('la gente aspetta')}, pas « aspettano ». ${it('La persona')} est toujours féminin, même pour un homme : ${it('Marco è una persona gentile')}. Certains pluriels sont irréguliers : ${it('l’uomo')}, ${it('gli uomini')} ; ${it('l’amico')}, ${it('gli amici')} ; ${it('il collega')}, ${it('i colleghi')} et ${it('le colleghe')}. D’autres mots ne changent que l’article : ${it('il cliente')}, ${it('la cliente')} ; ${it('il turista')}, ${it('la turista')} ; ${it('l’ospite')} est le même pour les hommes et les femmes. Et ${it('il ragazzo')} veut aussi dire « le petit ami » : ${it('Luca è il ragazzo di Anna')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-lide',
    name: 'Lidé kolem nás',
    title: 'Lidé kolem nás | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov pro lidi kolem vás — kamarád, soused, kolega, spolužák, host… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Dvanáct fotografií lidí: holčička s míčem, dvě kamarádky, starý pán, fanoušek, dvojčata, sousedka, která mává, a další',
    cardText: `${N} slov pro lidi kolem nás: kamarádi, sousedé, kolegové, spolužáci, hosté a cizí lidé.`,
    note: {
      title: `${it('La gente è…')}, ${it('la persona è…')}`,
      body: `${it('La gente')} (lidé) je v italštině jednotné číslo: ${it('la gente aspetta')}, ne „aspettano“. ${it('La persona')} je vždy ženského rodu, i když jde o muže: ${it('Marco è una persona gentile')}. Některá množná čísla jsou nepravidelná: ${it('l’uomo')}, ${it('gli uomini')}; ${it('l’amico')}, ${it('gli amici')}; ${it('il collega')}, ${it('i colleghi')} a ${it('le colleghe')}. Jiná slova mění jen člen: ${it('il cliente')}, ${it('la cliente')}; ${it('il turista')}, ${it('la turista')}; ${it('l’ospite')} je stejné pro muže i ženy. A ${it('il ragazzo')} znamená i „přítel, kluk“: ${it('Luca è il ragazzo di Anna')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-ludzie',
    name: 'Ludzie wokół nas',
    title: 'Ludzie wokół nas | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o ludziach z codziennego życia — przyjaciel, sąsiad, kolega z pracy, kolega z klasy, gość… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Dwanaście zdjęć ludzi: dziewczynka z piłką, dwie przyjaciółki, starszy pan, kibic, bliźniaczki, sąsiadka, która macha, i inni',
    cardText: `${N} słów o ludziach z codziennego życia: przyjaciele, sąsiedzi, koledzy z pracy i z klasy, goście i nieznajomi.`,
    note: {
      title: `${it('La gente è…')}, ${it('la persona è…')}`,
      body: `${it('La gente')} (ludzie) jest po włosku w liczbie pojedynczej: ${it('la gente aspetta')}, a nie „aspettano”. ${it('La persona')} jest zawsze rodzaju żeńskiego, także o mężczyźnie: ${it('Marco è una persona gentile')}. Niektóre liczby mnogie są nieregularne: ${it('l’uomo')}, ${it('gli uomini')}; ${it('l’amico')}, ${it('gli amici')}; ${it('il collega')}, ${it('i colleghi')} i ${it('le colleghe')}. Inne słowa zmieniają tylko rodzajnik: ${it('il cliente')}, ${it('la cliente')}; ${it('il turista')}, ${it('la turista')}; ${it('l’ospite')} jest takie samo dla mężczyzn i kobiet. A ${it('il ragazzo')} znaczy też „chłopak” w sensie partnera: ${it('Luca è il ragazzo di Anna')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-insanlar-kelimeleri',
    name: 'Çevremizdeki insanlar',
    title: 'Çevremizdeki insanlar | İtalyanca kelimeler | Italiano con Martin',
    description: `Günlük hayattaki insanlar için ${N} İtalyanca kelime öğrenin — arkadaş, komşu, iş arkadaşı, sınıf arkadaşı, misafir… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'İnsanlardan on iki fotoğraf: elinde top olan bir kız çocuğu, iki arkadaş, yaşlı bir adam, bir taraftar, ikiz kızlar, el sallayan bir komşu ve diğerleri',
    cardText: `Günlük hayattaki insanlar için ${N} kelime: arkadaşlar, komşular, iş ve sınıf arkadaşları, misafirler ve yabancılar.`,
    note: {
      title: `${it('La gente è…')}, ${it('la persona è…')}`,
      body: `${it('La gente')} (insanlar) İtalyancada tekildir: ${it('la gente aspetta')}, “aspettano” değil. ${it('La persona')} her zaman dişildir, bir erkek için bile: ${it('Marco è una persona gentile')}. Bazı çoğullar düzensizdir: ${it('l’uomo')}, ${it('gli uomini')}; ${it('l’amico')}, ${it('gli amici')}; ${it('il collega')}, ${it('i colleghi')} ve ${it('le colleghe')}. Bazı kelimelerde yalnızca artikel değişir: ${it('il cliente')}, ${it('la cliente')}; ${it('il turista')}, ${it('la turista')}; ${it('l’ospite')} kadın ve erkek için aynıdır. ${it('Il ragazzo')} ayrıca “erkek arkadaş, sevgili” demektir: ${it('Luca è il ragazzo di Anna')}.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-menschen',
    name: 'Die Menschen um uns herum',
    title: 'Die Menschen um uns herum | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für die Menschen in deinem Alltag — Freund, Nachbar, Kollege, Klassenkamerad, Gast … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Zwölf Fotos von Menschen: ein Mädchen mit Ball, zwei Freundinnen, ein älterer Mann, ein Fan, Zwillingsmädchen, eine winkende Nachbarin und andere',
    cardText: `${N} Wörter für die Menschen im Alltag: Freunde, Nachbarn, Kollegen, Klassenkameraden, Gäste und Fremde.`,
    note: {
      title: `${it('La gente è…')}, ${it('la persona è…')}`,
      body: `${it('La gente')} (die Leute) ist im Italienischen Singular: ${it('la gente aspetta')}, nicht „aspettano“. ${it('La persona')} ist immer weiblich, auch für einen Mann: ${it('Marco è una persona gentile')}. Manche Plurale sind unregelmäßig: ${it('l’uomo')}, ${it('gli uomini')}; ${it('l’amico')}, ${it('gli amici')}; ${it('il collega')}, ${it('i colleghi')} und ${it('le colleghe')}. Andere Wörter ändern nur den Artikel: ${it('il cliente')}, ${it('la cliente')}; ${it('il turista')}, ${it('la turista')}; ${it('l’ospite')} ist für Männer und Frauen gleich. Und ${it('il ragazzo')} heißt auch „der (feste) Freund“: ${it('Luca è il ragazzo di Anna')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-people-vocabulary',
    name: '身の回りの人々',
    title: '身の回りの人々 | イタリア語の語彙 | Italiano con Martin',
    description: `友だち、隣人、同僚、クラスメート、客など、毎日の生活で出会う人を表すイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '人々の写真12枚：ボールを持った女の子、二人の友だち、お年寄り、サポーター、双子の女の子、手を振る隣人など',
    cardText: `毎日の生活で出会う人を表す ${N} 語。友だち、隣人、同僚、クラスメート、客、知らない人。`,
    note: {
      title: `${it('La gente è…')}、${it('la persona è…')}`,
      body: `${it('La gente')}（人々）はイタリア語では単数扱いです：${it('la gente aspetta')}（「aspettano」ではない）。${it('La persona')} は男性を指すときも常に女性名詞です：${it('Marco è una persona gentile')}。不規則な複数形もあります：${it('l’uomo')} → ${it('gli uomini')}、${it('l’amico')} → ${it('gli amici')}、${it('il collega')} → ${it('i colleghi')}・${it('le colleghe')}。冠詞だけが変わる語もあります：${it('il cliente')}・${it('la cliente')}、${it('il turista')}・${it('la turista')}。${it('l’ospite')} は男女同じ形です。また ${it('il ragazzo')} には「彼氏」の意味もあります：${it('Luca è il ragazzo di Anna')}。`,
    },
  },
};
