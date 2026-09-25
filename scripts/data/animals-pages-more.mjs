// Stringhe di pagina delle tre lezioni nate il 2026-09-24 dalla divisione e dall'ampliamento
// delle prime due (vedi animals-pages.mjs per «Gli animali»):
//
//   - «Le caratteristiche fisiche degli animali»  (physicalPages,    50 aggettivi)
//   - «La personalita' degli animali»             (personalityPages, 62 aggettivi)
//   - «I verbi degli animali»                     (verbPages,        119 verbi)
//
// Dal 2026-09-25 le tre lezioni insegnano parole di tutti i giorni, valide anche per le persone: le
// descrizioni e le note lo dicono (il numero di parole va aggiornato qui e in audit-vocabulary.mjs).
//
// Le etichette di servizio comuni a tutte le lezioni (Riconosci la parola, Frasi da tradurre, i
// bottoni) NON stanno qui: lo script le legge dalla pagina della cucina, gia' tradotta. I testi
// degli esercizi con trascinamento delle due lezioni sugli aggettivi sono in `traitUi`
// (animals-pages.mjs); qui ci sono la nota della lezione fisica e i testi dei verbi.
//
// REGOLE_LINGUE.md: le parole italiane dentro i testi tradotti stanno in <em lang="it">.
// Nelle meta description, che sono testo puro, le parole di esempio sono tradotte.

export const physicalPages = {
  it: {
    dir: 'vocabolario',
    slug: 'caratteristiche-fisiche-animali',
    name: 'Le caratteristiche fisiche degli animali',
    title: 'Aggettivi per descrivere il corpo degli animali | Italiano con Martin',
    description:
      'Impara 50 aggettivi italiani per descrivere il corpo, la forza, l’aspetto e come si sta — validi per animali, persone e cose — con immagini, tre frasi d’esempio ed esercizi da trascinare.',
    heroAlt: 'Un prato con elefante, giraffa, topolino, zebra, riccio, pappagallo e pecora',
    cardText:
      '50 aggettivi di tutti i giorni per descrivere animali, persone e cose: alto, stanco, bagnato, peloso…, con esercizi da trascinare.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animal-physical-traits-vocabulary',
    name: 'Animal physical characteristics',
    title: 'Animal physical characteristics | Italian vocabulary | Italiano con Martin',
    description:
      'Learn 50 Italian adjectives to describe bodies, strength, looks and how you feel — for animals, people and things — with images, three example sentences and drag-and-drop exercises.',
    heroAlt: 'A meadow with an elephant, giraffe, tiny mouse, zebra, hedgehog, parrot and sheep',
    cardText:
      '50 everyday adjectives for animals, people and things: tall, tired, wet, hairy… with drag-and-drop exercises.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-caracteristicas-fisicas-animales-en-italiano',
    name: 'Las características físicas de los animales',
    title: 'Las características físicas de los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 50 adjetivos italianos para describir el cuerpo, la fuerza, el aspecto y cómo se siente uno — para animales, personas y cosas — con imágenes, tres frases de ejemplo y ejercicios de arrastrar.',
    heroAlt: 'Un prado con elefante, jirafa, ratoncito, cebra, erizo, loro y oveja',
    cardText:
      '50 adjetivos de todos los días para animales, personas y cosas: alto, cansado, mojado, peludo… con ejercicios de arrastrar.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-caracteristiques-physiques-des-animaux-en-italien',
    name: 'Les caractéristiques physiques des animaux',
    title: 'Les caractéristiques physiques des animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 50 adjectifs italiens pour décrire le corps, la force, l’apparence et l’état physique — pour les animaux, les personnes et les choses — avec des images, trois exemples de phrases et des exercices à glisser-déposer.',
    heroAlt: 'Une prairie avec éléphant, girafe, petite souris, zèbre, hérisson, perroquet et mouton',
    cardText:
      '50 adjectifs de tous les jours pour les animaux, les personnes et les choses : grand, fatigué, mouillé, poilu… avec des exercices à glisser-déposer.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-fyzicke-vlastnosti-zvirat',
    name: 'Fyzické vlastnosti zvířat',
    title: 'Fyzické vlastnosti zvířat | italská slovní zásoba | Italiano con Martin',
    description:
      'Naučte se 50 italských přídavných jmen pro popis těla, síly, vzhledu a tělesného stavu — pro zvířata, lidi i věci — s obrázky, třemi příkladovými větami a cvičeními na přetahování.',
    heroAlt: 'Louka se slonem, žirafou, malou myškou, zebrou, ježkem, papouškem a ovcí',
    cardText:
      '50 každodenních přídavných jmen pro zvířata, lidi i věci: vysoký, unavený, mokrý, chlupatý… s cvičeními na přetahování.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-cechy-fizyczne-zwierzat',
    name: 'Cechy fizyczne zwierząt',
    title: 'Cechy fizyczne zwierząt | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 50 włoskich przymiotników opisujących ciało, siłę, wygląd i samopoczucie — o zwierzętach, ludziach i rzeczach — z obrazkami, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.',
    heroAlt: 'Łąka ze słoniem, żyrafą, małą myszką, zebrą, jeżem, papugą i owcą',
    cardText:
      '50 codziennych przymiotników o zwierzętach, ludziach i rzeczach: wysoki, zmęczony, mokry, owłosiony… z ćwiczeniami z przeciąganiem.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-fiziksel-ozellikleri-kelimeleri',
    name: 'Hayvanların fiziksel özellikleri',
    title: 'Hayvanların fiziksel özellikleri | İtalyanca kelimeler | Italiano con Martin',
    description:
      'Vücudu, gücü, görünüşü ve fiziksel durumu anlatan 50 İtalyanca sıfatı — hayvanlar, insanlar ve eşyalar için — resimler, üç örnek cümle ve sürükle-bırak alıştırmalarıyla öğrenin.',
    heroAlt: 'Fil, zürafa, küçük fare, zebra, kirpi, papağan ve koyunun olduğu bir çayır',
    cardText:
      'Hayvanlar, insanlar ve eşyalar için 50 günlük sıfat: uzun boylu, yorgun, ıslak, tüylü… sürükle-bırak alıştırmalarıyla.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-koerperliche-eigenschaften-tiere',
    name: 'Die körperlichen Eigenschaften der Tiere',
    title: 'Die körperlichen Eigenschaften der Tiere | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 50 italienische Adjektive für Körper, Kraft, Aussehen und körperlichen Zustand — für Tiere, Menschen und Dinge — mit Bildern, drei Beispielsätzen und Drag-and-drop-Übungen.',
    heroAlt: 'Eine Wiese mit Elefant, Giraffe, kleiner Maus, Zebra, Igel, Papagei und Schaf',
    cardText:
      '50 Alltagsadjektive für Tiere, Menschen und Dinge: groß, müde, nass, haarig … mit Drag-and-drop-Übungen.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animal-physical-traits-vocabulary',
    name: '動物の身体的特徴',
    title: '動物の身体的特徴 | イタリア語の語彙 | Italiano con Martin',
    description:
      '体、力、見た目、体の状態を表すイタリア語の形容詞 50 個を、動物・人・ものに使える表現として、画像、3 つの例文、ドラッグ＆ドロップの練習問題で学びます。',
    heroAlt: 'ゾウ、キリン、小さなネズミ、シマウマ、ハリネズミ、オウム、ヒツジのいる草原',
    cardText:
      '動物・人・ものに使える日常の形容詞 50 個：背が高い、疲れた、濡れた、毛深い…。ドラッグ＆ドロップの練習付き。',
  },
};

export const personalityPages = {
  it: {
    dir: 'vocabolario',
    slug: 'personalita-animali',
    name: 'La personalità degli animali',
    title: 'Aggettivi per descrivere la personalità degli animali | Italiano con Martin',
    description:
      'Impara 62 aggettivi italiani per descrivere il carattere e lo stato d’animo di animali e persone — buono, generoso, triste, arrabbiato — con immagini, tre frasi d’esempio ed esercizi da trascinare.',
    heroAlt: 'Un prato con ghepardo, lumaca, pavone, bradipo, gufo, volpe, coniglio e leoncino',
    cardText:
      '62 aggettivi di tutti i giorni per il carattere e l’umore di persone e animali, con esercizi da trascinare.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animal-personality-vocabulary',
    name: 'Animal personality',
    title: 'Animal personality | Italian vocabulary | Italiano con Martin',
    description:
      'Learn 62 Italian adjectives to describe the character and mood of animals and people — kind, generous, sad, angry — with images, three example sentences and drag-and-drop exercises.',
    heroAlt: 'A meadow with a cheetah, snail, peacock, sloth, owl, fox, rabbit and lion cub',
    cardText: '62 everyday adjectives for the character and mood of people and animals, with drag-and-drop exercises.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-personalidad-animales-en-italiano',
    name: 'La personalidad de los animales',
    title: 'La personalidad de los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 62 adjetivos italianos para describir el carácter y el estado de ánimo de animales y personas — bueno, generoso, triste, enfadado — con imágenes, tres frases de ejemplo y ejercicios de arrastrar.',
    heroAlt: 'Un prado con guepardo, caracol, pavo real, perezoso, búho, zorro, conejo y cachorro de león',
    cardText:
      '62 adjetivos de todos los días para el carácter y el ánimo de personas y animales, con ejercicios de arrastrar.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-personnalite-des-animaux-en-italien',
    name: 'La personnalité des animaux',
    title: 'La personnalité des animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 62 adjectifs italiens pour décrire le caractère et l’humeur des animaux et des personnes — gentil, généreux, triste, en colère — avec des images, trois exemples de phrases et des exercices à glisser-déposer.',
    heroAlt: 'Une prairie avec guépard, escargot, paon, paresseux, hibou, renard, lapin et lionceau',
    cardText:
      '62 adjectifs de tous les jours pour le caractère et l’humeur des personnes et des animaux, avec des exercices à glisser-déposer.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-povaha-zvirat',
    name: 'Povaha zvířat',
    title: 'Povaha zvířat | italská slovní zásoba | Italiano con Martin',
    description:
      'Naučte se 62 italských přídavných jmen pro popis povahy a nálady zvířat i lidí — hodný, štědrý, smutný, naštvaný — s obrázky, třemi příkladovými větami a cvičeními na přetahování.',
    heroAlt: 'Louka s gepardem, hlemýžděm, pávem, lenochodem, sovou, liškou, králíkem a lvíčetem',
    cardText: '62 každodenních přídavných jmen pro povahu a náladu lidí i zvířat, s cvičeními na přetahování.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-charakter-zwierzat',
    name: 'Charakter zwierząt',
    title: 'Charakter zwierząt | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 62 włoskich przymiotników opisujących charakter i nastrój zwierząt i ludzi — dobry, hojny, smutny, zły — z obrazkami, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.',
    heroAlt: 'Łąka z gepardem, ślimakiem, pawiem, leniwcem, sową, lisem, królikiem i lwiątkiem',
    cardText:
      '62 codzienne przymiotniki opisujące charakter i nastrój ludzi i zwierząt, z ćwiczeniami z przeciąganiem.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-kisiligi-kelimeleri',
    name: 'Hayvanların kişiliği',
    title: 'Hayvanların kişiliği | İtalyanca kelimeler | Italiano con Martin',
    description:
      'Hayvanların ve insanların karakterini ve ruh halini anlatan 62 İtalyanca sıfatı — iyi, cömert, üzgün, kızgın — resimler, üç örnek cümle ve sürükle-bırak alıştırmalarıyla öğrenin.',
    heroAlt: 'Çita, salyangoz, tavus kuşu, tembel hayvan, baykuş, tilki, tavşan ve aslan yavrusunun olduğu bir çayır',
    cardText:
      'İnsanların ve hayvanların karakterini ve ruh halini anlatan 62 günlük sıfat, sürükle-bırak alıştırmalarıyla.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-persoenlichkeit-tiere',
    name: 'Die Persönlichkeit der Tiere',
    title: 'Die Persönlichkeit der Tiere | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 62 italienische Adjektive für Charakter und Stimmung von Tieren und Menschen — gut, großzügig, traurig, wütend — mit Bildern, drei Beispielsätzen und Drag-and-drop-Übungen.',
    heroAlt: 'Eine Wiese mit Gepard, Schnecke, Pfau, Faultier, Eule, Fuchs, Kaninchen und Löwenjunges',
    cardText: '62 Alltagsadjektive für Charakter und Stimmung von Menschen und Tieren, mit Drag-and-drop-Übungen.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animal-personality-vocabulary',
    name: '動物の性格',
    title: '動物の性格 | イタリア語の語彙 | Italiano con Martin',
    description:
      '動物や人の性格と気分を表すイタリア語の形容詞 62 個（優しい、気前がよい、悲しい、怒った）を、画像、3 つの例文、ドラッグ＆ドロップの練習問題で学びます。',
    heroAlt: 'チーター、カタツムリ、クジャク、ナマケモノ、フクロウ、キツネ、ウサギ、子ライオンのいる草原',
    cardText: '人や動物の性格と気分を表す日常の形容詞 62 個。ドラッグ＆ドロップの練習付き。',
  },
};

export const verbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-animali',
    name: 'I verbi degli animali',
    title: 'Verbi degli animali in italiano | Italiano con Martin',
    description:
      'Impara 119 verbi italiani di tutti i giorni — nascere, morire, lavorare, aspettare, ridere, fare rumore — con un animale che li fa in foto, tre frasi d’esempio ed esercizi da trascinare.',
    heroAlt: 'Un prato con ruscello: castoro, aquila, formica con una foglia, anatra, ragno, canguro e scimmia',
    cardText:
      '119 verbi di tutti i giorni, per le persone e per gli animali: nascere, correre, aspettare, litigare, fare rumore…',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animal-verbs-vocabulary',
    name: 'Animal verbs',
    title: 'Animal verbs | Italian vocabulary | Italiano con Martin',
    description:
      'Learn 119 everyday Italian verbs — to be born, to die, to work, to wait, to laugh, to make noise — each shown by an animal, with three example sentences and drag-and-drop exercises.',
    heroAlt: 'A meadow with a stream: beaver, eagle, ant with a leaf, duck, spider, kangaroo and monkey',
    cardText: '119 everyday verbs for people and animals: to be born, to run, to wait, to argue, to make noise…',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-animales-en-italiano',
    name: 'Los verbos de los animales',
    title: 'Los verbos de los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 119 verbos italianos de todos los días — nacer, morir, trabajar, esperar, reír, hacer ruido — cada uno ilustrado por un animal, con tres frases de ejemplo y ejercicios de arrastrar.',
    heroAlt: 'Un prado con un arroyo: castor, águila, hormiga con una hoja, pato, araña, canguro y mono',
    cardText: '119 verbos de todos los días para personas y animales: nacer, correr, esperar, discutir, hacer ruido…',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-des-animaux-en-italien',
    name: 'Les verbes des animaux',
    title: 'Les verbes des animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 119 verbes italiens de tous les jours — naître, mourir, travailler, attendre, rire, faire du bruit — chacun illustré par un animal, avec trois exemples de phrases et des exercices à glisser-déposer.',
    heroAlt:
      'Une prairie avec un ruisseau : castor, aigle, fourmi avec une feuille, canard, araignée, kangourou et singe',
    cardText:
      '119 verbes de tous les jours pour les personnes et les animaux : naître, courir, attendre, se disputer, faire du bruit…',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-zvirat',
    name: 'Slovesa zvířat',
    title: 'Slovesa zvířat | italská slovní zásoba | Italiano con Martin',
    description:
      'Naučte se 119 každodenních italských sloves — narodit se, zemřít, pracovat, čekat, smát se, dělat hluk — každé ilustruje zvíře, se třemi příkladovými větami a cvičeními na přetahování.',
    heroAlt: 'Louka s potokem: bobr, orel, mravenec s listem, kachna, pavouk, klokan a opice',
    cardText: '119 každodenních sloves pro lidi i zvířata: narodit se, běžet, čekat, hádat se, dělat hluk…',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-zwierzat',
    name: 'Czasowniki zwierząt',
    title: 'Czasowniki zwierząt | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 119 codziennych włoskich czasowników — urodzić się, umrzeć, pracować, czekać, śmiać się, hałasować — każdy pokazany przez zwierzę, z trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.',
    heroAlt: 'Łąka z potokiem: bóbr, orzeł, mrówka z liściem, kaczka, pająk, kangur i małpa',
    cardText: '119 codziennych czasowników dla ludzi i zwierząt: urodzić się, biegać, czekać, kłócić się, hałasować…',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-fiilleri-kelimeleri',
    name: 'Hayvanların fiilleri',
    title: 'Hayvanların fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description:
      '119 günlük İtalyanca fiili — doğmak, ölmek, çalışmak, beklemek, gülmek, gürültü yapmak — her biri bir hayvanla gösterilmiş, üç örnek cümle ve sürükle-bırak alıştırmalarıyla öğrenin.',
    heroAlt: 'Dereli bir çayır: kunduz, kartal, yaprak taşıyan karınca, ördek, örümcek, kanguru ve maymun',
    cardText: 'İnsanlar ve hayvanlar için 119 günlük fiil: doğmak, koşmak, beklemek, tartışmak, gürültü yapmak…',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-tiere',
    name: 'Die Verben der Tiere',
    title: 'Die Verben der Tiere | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 119 italienische Alltagsverben — geboren werden, sterben, arbeiten, warten, lachen, Lärm machen — jedes von einem Tier gezeigt, mit drei Beispielsätzen und Drag-and-drop-Übungen.',
    heroAlt: 'Eine Wiese mit Bach: Biber, Adler, Ameise mit einem Blatt, Ente, Spinne, Känguru und Affe',
    cardText: '119 Alltagsverben für Menschen und Tiere: geboren werden, rennen, warten, streiten, Lärm machen …',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animal-verbs-vocabulary',
    name: '動物の動詞',
    title: '動物の動詞 | イタリア語の語彙 | Italiano con Martin',
    description:
      '日常で使うイタリア語の動詞 119 個（生まれる、死ぬ、働く、待つ、笑う、音を立てる）を、動物の写真、3 つの例文、ドラッグ＆ドロップの練習問題で学びます。',
    heroAlt: '小川のある草原：ビーバー、ワシ、葉っぱを運ぶアリ、アヒル、クモ、カンガルー、サル',
    cardText: '人にも動物にも使える日常の動詞 119 個：生まれる、走る、待つ、けんかする、音を立てる…',
  },
};

// La nota sotto le schede della lezione fisica (sostituisce la nota sull'articolo).
export const physicalNote = {
  it: {
    title: 'Parole per tutti i giorni',
    body: 'Questi aggettivi non servono solo per gli animali: si usano ogni giorno per descrivere persone, cose e come ci si sente (<em>Mio nonno è vecchio</em>, <em>Il tavolo è rotondo</em>, <em>Sono stanco</em>). Gli animali sono solo un modo simpatico per ricordarli. Molti aggettivi hanno due forme: <em>lungo</em> (maschile) e <em>lunga</em> (femminile); quelli che finiscono in <em>-e</em>, come <em>veloce</em> e <em>forte</em>, ne hanno una sola. Molte caratteristiche sono relative: un gatto è piccolo rispetto a un cavallo, ma grande rispetto a una formica. Le parole senza riga negli esercizi (<em>stanco</em>, <em>bagnato</em>, <em>malato</em>…) descrivono situazioni in cui può trovarsi qualsiasi animale, o persona.',
  },
  en: {
    title: 'Words for everyday life',
    body: 'These adjectives are not only for animals: you use them every day to describe people, things and how you feel (<em lang="it">Mio nonno è vecchio</em>, <em lang="it">Il tavolo è rotondo</em>, <em lang="it">Sono stanco</em>). The animals are just a fun way to remember them. Many adjectives have two forms: <em lang="it">lungo</em> (masculine) and <em lang="it">lunga</em> (feminine); those ending in <em lang="it">-e</em>, like <em lang="it">veloce</em> and <em lang="it">forte</em>, have only one. Many characteristics are relative: a cat is small compared to a horse, but big compared to an ant. Words without a row in the exercises (<em lang="it">stanco</em>, <em lang="it">bagnato</em>, <em lang="it">malato</em>…) describe situations any animal — or person — can be in.',
  },
  es: {
    title: 'Palabras para todos los días',
    body: 'Estos adjetivos no son solo para animales: se usan todos los días para describir personas, cosas y cómo se siente uno (<em lang="it">Mio nonno è vecchio</em>, <em lang="it">Il tavolo è rotondo</em>, <em lang="it">Sono stanco</em>). Los animales son solo una forma divertida de recordarlos. Muchos adjetivos tienen dos formas: <em lang="it">lungo</em> (masculino) y <em lang="it">lunga</em> (femenino); los que terminan en <em lang="it">-e</em>, como <em lang="it">veloce</em> y <em lang="it">forte</em>, tienen una sola. Muchas características son relativas: un gato es pequeño comparado con un caballo, pero grande comparado con una hormiga. Las palabras sin fila en los ejercicios (<em lang="it">stanco</em>, <em lang="it">bagnato</em>, <em lang="it">malato</em>…) describen situaciones en las que puede estar cualquier animal, o persona.',
  },
  fr: {
    title: 'Des mots pour tous les jours',
    body: 'Ces adjectifs ne servent pas seulement pour les animaux : on les utilise tous les jours pour décrire des personnes, des objets et ce que l’on ressent (<em lang="it">Mio nonno è vecchio</em>, <em lang="it">Il tavolo è rotondo</em>, <em lang="it">Sono stanco</em>). Les animaux sont juste une façon amusante de s’en souvenir. Beaucoup d’adjectifs ont deux formes : <em lang="it">lungo</em> (masculin) et <em lang="it">lunga</em> (féminin) ; ceux qui finissent en <em lang="it">-e</em>, comme <em lang="it">veloce</em> et <em lang="it">forte</em>, n’en ont qu’une. Beaucoup de caractéristiques sont relatives : un chat est petit comparé à un cheval, mais grand comparé à une fourmi. Les mots sans ligne dans les exercices (<em lang="it">stanco</em>, <em lang="it">bagnato</em>, <em lang="it">malato</em>…) décrivent des situations où peut se trouver n’importe quel animal, ou personne.',
  },
  cs: {
    title: 'Slova pro každý den',
    body: 'Tato přídavná jména nejsou jen pro zvířata: používají se každý den k popisu lidí, věcí i toho, jak se cítíme (<em lang="it">Mio nonno è vecchio</em>, <em lang="it">Il tavolo è rotondo</em>, <em lang="it">Sono stanco</em>). Zvířata jsou jen zábavný způsob, jak si je zapamatovat. Mnoho přídavných jmen má dva tvary: <em lang="it">lungo</em> (mužský rod) a <em lang="it">lunga</em> (ženský rod); ta, která končí na <em lang="it">-e</em>, například <em lang="it">veloce</em> a <em lang="it">forte</em>, mají jen jeden. Mnoho vlastností je relativních: kočka je malá ve srovnání s koněm, ale velká ve srovnání s mravencem. Slova bez řádku v cvičeních (<em lang="it">stanco</em>, <em lang="it">bagnato</em>, <em lang="it">malato</em>…) popisují situace, ve kterých se může ocitnout jakékoli zvíře i člověk.',
  },
  pl: {
    title: 'Słowa na co dzień',
    body: 'Te przymiotniki nie służą tylko do opisywania zwierząt: używa się ich codziennie do opisu ludzi, rzeczy i samopoczucia (<em lang="it">Mio nonno è vecchio</em>, <em lang="it">Il tavolo è rotondo</em>, <em lang="it">Sono stanco</em>). Zwierzęta to tylko wesoły sposób, by je zapamiętać. Wiele przymiotników ma dwie formy: <em lang="it">lungo</em> (rodzaj męski) i <em lang="it">lunga</em> (rodzaj żeński); te, które kończą się na <em lang="it">-e</em>, jak <em lang="it">veloce</em> i <em lang="it">forte</em>, mają tylko jedną. Wiele cech jest względnych: kot jest mały w porównaniu z koniem, ale duży w porównaniu z mrówką. Słowa bez wiersza w ćwiczeniach (<em lang="it">stanco</em>, <em lang="it">bagnato</em>, <em lang="it">malato</em>…) opisują sytuacje, w których może być każde zwierzę albo człowiek.',
  },
  tr: {
    title: 'Her gün için kelimeler',
    body: 'Bu sıfatlar yalnızca hayvanlar için değildir: insanları, eşyaları ve nasıl hissettiğimizi anlatmak için her gün kullanılır (<em lang="it">Mio nonno è vecchio</em>, <em lang="it">Il tavolo è rotondo</em>, <em lang="it">Sono stanco</em>). Hayvanlar onları hatırlamanın eğlenceli bir yoludur. Birçok sıfatın iki biçimi vardır: <em lang="it">lungo</em> (eril) ve <em lang="it">lunga</em> (dişil); <em lang="it">veloce</em> ve <em lang="it">forte</em> gibi <em lang="it">-e</em> ile biten sıfatların ise tek biçimi vardır. Birçok özellik görecelidir: bir kedi attan küçük, ama karıncadan büyüktür. Alıştırmalarda satırı olmayan kelimeler (<em lang="it">stanco</em>, <em lang="it">bagnato</em>, <em lang="it">malato</em>…) her hayvanın, hatta her insanın içinde bulunabileceği durumları anlatır.',
  },
  de: {
    title: 'Wörter für den Alltag',
    body: 'Diese Adjektive gelten nicht nur für Tiere: Man benutzt sie jeden Tag, um Menschen, Dinge und das eigene Befinden zu beschreiben (<em lang="it">Mio nonno è vecchio</em>, <em lang="it">Il tavolo è rotondo</em>, <em lang="it">Sono stanco</em>). Die Tiere sind nur eine lustige Merkhilfe. Viele Adjektive haben zwei Formen: <em lang="it">lungo</em> (maskulin) und <em lang="it">lunga</em> (feminin); die auf <em lang="it">-e</em> enden, wie <em lang="it">veloce</em> und <em lang="it">forte</em>, haben nur eine. Viele Eigenschaften sind relativ: Eine Katze ist klein im Vergleich zu einem Pferd, aber groß im Vergleich zu einer Ameise. Wörter ohne Zeile in den Übungen (<em lang="it">stanco</em>, <em lang="it">bagnato</em>, <em lang="it">malato</em> …) beschreiben Situationen, in denen jedes Tier – oder jeder Mensch – sein kann.',
  },
  ja: {
    title: '毎日使う言葉',
    body: 'これらの形容詞は動物だけのものではありません。人やもの、そして自分の気持ちを言い表すために毎日使います（<em lang="it">Mio nonno è vecchio</em>、<em lang="it">Il tavolo è rotondo</em>、<em lang="it">Sono stanco</em>）。動物は、覚えるための楽しい手がかりにすぎません。形容詞の多くは 2 つの形を持ちます。<em lang="it">lungo</em>（男性形）と <em lang="it">lunga</em>（女性形）です。<em lang="it">veloce</em> や <em lang="it">forte</em> のように <em lang="it">-e</em> で終わる形容詞は、形が 1 つだけです。特徴の多くは相対的です。猫は馬に比べれば小さいですが、アリに比べれば大きいです。練習に行がない語（<em lang="it">stanco</em>、<em lang="it">bagnato</em>、<em lang="it">malato</em> など）は、どんな動物にも人にも当てはまる状態を表します。',
  },
};

// La nota sotto le schede della lezione sulla personalita'.
export const personalityNote = {
  it: {
    title: 'Parole per tutti i giorni',
    body: 'Questi aggettivi descrivono il carattere e l’umore e valgono soprattutto per le persone (<em>Mia nonna è generosa</em>, <em>Sono triste</em>, <em>Sei troppo distratto</em>): gli animali sono solo un modo simpatico per ricordarli. Molti aggettivi hanno due forme: <em>pigro</em> (maschile) e <em>pigra</em> (femminile); quelli che finiscono in <em>-e</em>, come <em>felice</em> e <em>gentile</em>, ne hanno una sola. Le associazioni fra animali e caratteri sono quasi tutte stereotipi, come nei modi di dire italiani («furbo come una volpe», «testardo come un mulo»): non sono verità scientifiche.',
  },
  en: {
    title: 'Words for everyday life',
    body: 'These adjectives describe character and mood, and are mostly used for people (<em lang="it">Mia nonna è generosa</em>, <em lang="it">Sono triste</em>, <em lang="it">Sei troppo distratto</em>): the animals are just a fun way to remember them. Many adjectives have two forms: <em lang="it">pigro</em> (masculine) and <em lang="it">pigra</em> (feminine); those ending in <em lang="it">-e</em>, like <em lang="it">felice</em> and <em lang="it">gentile</em>, have only one. The links between animals and traits are mostly stereotypes, as in Italian sayings (<em lang="it">furbo come una volpe</em>, “sly as a fox”; <em lang="it">testardo come un mulo</em>, “stubborn as a mule”): they are not scientific facts.',
  },
  es: {
    title: 'Palabras para todos los días',
    body: 'Estos adjetivos describen el carácter y el estado de ánimo, y se usan sobre todo para personas (<em lang="it">Mia nonna è generosa</em>, <em lang="it">Sono triste</em>, <em lang="it">Sei troppo distratto</em>): los animales son solo una forma divertida de recordarlos. Muchos adjetivos tienen dos formas: <em lang="it">pigro</em> (masculino) y <em lang="it">pigra</em> (femenino); los que terminan en <em lang="it">-e</em>, como <em lang="it">felice</em> y <em lang="it">gentile</em>, tienen una sola. Las asociaciones entre animales y rasgos son casi todas estereotipos, como en los dichos italianos (<em lang="it">furbo come una volpe</em>, «astuto como un zorro»; <em lang="it">testardo come un mulo</em>, «terco como una mula»): no son verdades científicas.',
  },
  fr: {
    title: 'Des mots pour tous les jours',
    body: 'Ces adjectifs décrivent le caractère et l’humeur, et s’emploient surtout pour les personnes (<em lang="it">Mia nonna è generosa</em>, <em lang="it">Sono triste</em>, <em lang="it">Sei troppo distratto</em>) : les animaux sont juste une façon amusante de s’en souvenir. Beaucoup d’adjectifs ont deux formes : <em lang="it">pigro</em> (masculin) et <em lang="it">pigra</em> (féminin) ; ceux qui finissent en <em lang="it">-e</em>, comme <em lang="it">felice</em> et <em lang="it">gentile</em>, n’en ont qu’une. Les liens entre animaux et traits de caractère sont presque tous des stéréotypes, comme dans les expressions italiennes (<em lang="it">furbo come una volpe</em>, « rusé comme un renard » ; <em lang="it">testardo come un mulo</em>, « têtu comme une mule ») : ce ne sont pas des vérités scientifiques.',
  },
  cs: {
    title: 'Slova pro každý den',
    body: 'Tato přídavná jména popisují povahu a náladu a používají se hlavně o lidech (<em lang="it">Mia nonna è generosa</em>, <em lang="it">Sono triste</em>, <em lang="it">Sei troppo distratto</em>): zvířata jsou jen zábavný způsob, jak si je zapamatovat. Mnoho přídavných jmen má dva tvary: <em lang="it">pigro</em> (mužský rod) a <em lang="it">pigra</em> (ženský rod); ta, která končí na <em lang="it">-e</em>, například <em lang="it">felice</em> a <em lang="it">gentile</em>, mají jen jeden. Spojení zvířat s povahovými rysy jsou většinou stereotypy, jako v italských rčeních (<em lang="it">furbo come una volpe</em>, „mazaný jako liška“; <em lang="it">testardo come un mulo</em>, „tvrdohlavý jako mezek“): nejsou to vědecké pravdy.',
  },
  pl: {
    title: 'Słowa na co dzień',
    body: 'Te przymiotniki opisują charakter i nastrój i używa się ich głównie o ludziach (<em lang="it">Mia nonna è generosa</em>, <em lang="it">Sono triste</em>, <em lang="it">Sei troppo distratto</em>): zwierzęta to tylko wesoły sposób, by je zapamiętać. Wiele przymiotników ma dwie formy: <em lang="it">pigro</em> (rodzaj męski) i <em lang="it">pigra</em> (rodzaj żeński); te, które kończą się na <em lang="it">-e</em>, jak <em lang="it">felice</em> i <em lang="it">gentile</em>, mają tylko jedną. Skojarzenia zwierząt z cechami to w większości stereotypy, jak we włoskich powiedzeniach (<em lang="it">furbo come una volpe</em>, „przebiegły jak lis”; <em lang="it">testardo come un mulo</em>, „uparty jak muł”): nie są to prawdy naukowe.',
  },
  tr: {
    title: 'Her gün için kelimeler',
    body: 'Bu sıfatlar karakteri ve ruh halini anlatır ve çoğunlukla insanlar için kullanılır (<em lang="it">Mia nonna è generosa</em>, <em lang="it">Sono triste</em>, <em lang="it">Sei troppo distratto</em>): hayvanlar onları hatırlamanın eğlenceli bir yoludur. Birçok sıfatın iki biçimi vardır: <em lang="it">pigro</em> (eril) ve <em lang="it">pigra</em> (dişil); <em lang="it">felice</em> ve <em lang="it">gentile</em> gibi <em lang="it">-e</em> ile biten sıfatların ise tek biçimi vardır. Hayvanlarla özellikler arasındaki bağlar çoğunlukla kalıp yargılardır, tıpkı İtalyanca deyimlerde olduğu gibi (<em lang="it">furbo come una volpe</em>, “tilki gibi kurnaz”; <em lang="it">testardo come un mulo</em>, “katır gibi inatçı”): bilimsel gerçekler değildir.',
  },
  de: {
    title: 'Wörter für den Alltag',
    body: 'Diese Adjektive beschreiben Charakter und Stimmung und werden vor allem für Menschen benutzt (<em lang="it">Mia nonna è generosa</em>, <em lang="it">Sono triste</em>, <em lang="it">Sei troppo distratto</em>): Die Tiere sind nur eine lustige Merkhilfe. Viele Adjektive haben zwei Formen: <em lang="it">pigro</em> (maskulin) und <em lang="it">pigra</em> (feminin); die auf <em lang="it">-e</em> enden, wie <em lang="it">felice</em> und <em lang="it">gentile</em>, haben nur eine. Die Verbindungen zwischen Tieren und Eigenschaften sind meist Klischees, wie in italienischen Redensarten (<em lang="it">furbo come una volpe</em>, „schlau wie ein Fuchs“; <em lang="it">testardo come un mulo</em>, „stur wie ein Maulesel“): Es sind keine wissenschaftlichen Wahrheiten.',
  },
  ja: {
    title: '毎日使う言葉',
    body: 'これらの形容詞は性格や気分を表し、おもに人に対して使います（<em lang="it">Mia nonna è generosa</em>、<em lang="it">Sono triste</em>、<em lang="it">Sei troppo distratto</em>）。動物は、覚えるための楽しい手がかりにすぎません。形容詞の多くは 2 つの形を持ちます。<em lang="it">pigro</em>（男性形）と <em lang="it">pigra</em>（女性形）です。<em lang="it">felice</em> や <em lang="it">gentile</em> のように <em lang="it">-e</em> で終わる形容詞は、形が 1 つだけです。動物と性格の結びつきは、イタリア語のことわざのように（<em lang="it">furbo come una volpe</em>「キツネのようにずる賢い」、<em lang="it">testardo come un mulo</em>「ラバのように頑固」）、ほとんどが固定観念です。科学的な事実ではありません。',
  },
};

// Testi della lezione sui verbi (stessa forma di `traitUi`: note, positive, negative, ui).
// `ui` e `lessonLink` si prendono da `traitUi` e si cambiano solo le tre voci che nominano
// gli «aggettivi» (vedi verbUiOverrides).
export const verbUi = {
  it: {
    note: {
      title: 'Parole per tutti i giorni',
      body: 'Questi verbi non servono solo per gli animali: si usano ogni giorno con le persone (<em>Mio padre lavora in banca</em>, <em>Aspetto l’autobus</em>). Gli animali sono solo un modo simpatico per ricordarli. In italiano l’infinito finisce in <em>-are</em>, <em>-ere</em> o <em>-ire</em>; nelle frasi il verbo cambia la sua fine (<em>lavorare</em> → <em>il papà lavora</em>). I verbi come <em>svegliarsi</em> e <em>arrampicarsi</em> finiscono in <em>-si</em>: sono riflessivi (<em>mi sveglio</em>, <em>si sveglia</em>). I verbi che fanno tutti gli animali (<em>nascere</em>, <em>mangiare</em>, <em>guardare</em>…) hanno la scheda ma non la riga negli esercizi.',
    },
    positive: {
      eyebrow: 'Esercizio con trascinamento',
      title: 'Quale animale lo fa?',
      intro:
        'Trascina un animale sul verbo che descrive quello che fa. Per ogni verbo basta trovare <strong>almeno un animale</strong>, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca l’animale, poi tocca il verbo.',
    },
    negative: {
      eyebrow: 'Con la negazione',
      title: 'Quale animale non può farlo?',
      intro:
        'Ora al contrario: trascina un animale che <strong>non</strong> può fare quell’azione. Anche qui ne basta uno. Attenzione alle trappole: nella barra ci sono anche animali che la fanno.',
    },
  },
  en: {
    note: {
      title: 'Words for everyday life',
      body: 'These verbs are not only for animals: you use them every day with people (<em lang="it">Mio padre lavora in banca</em>, <em lang="it">Aspetto l’autobus</em>). The animals are just a fun way to remember them. In Italian the infinitive ends in <em lang="it">-are</em>, <em lang="it">-ere</em> or <em lang="it">-ire</em>; in a sentence the verb changes its ending (<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>). Verbs like <em lang="it">svegliarsi</em> and <em lang="it">arrampicarsi</em> end in <em lang="it">-si</em>: they are reflexive (<em lang="it">mi sveglio</em>, <em lang="it">si sveglia</em>). Verbs that every animal does (<em lang="it">nascere</em>, <em lang="it">mangiare</em>, <em lang="it">guardare</em>…) have a card but no row in the exercises.',
    },
    positive: {
      eyebrow: 'Drag-and-drop exercise',
      title: 'Which animal does this?',
      intro:
        'Drag an animal onto the verb that describes what it does. For each verb you only need to find <strong>at least one animal</strong>, but you can add as many as you like. On a phone: tap the animal, then tap the verb.',
    },
    negative: {
      eyebrow: 'With negation',
      title: 'Which animal cannot do this?',
      intro:
        'Now the other way round: drag an animal that <strong>cannot</strong> do that action. Again, one is enough. Beware of traps: the tray also contains animals that can.',
    },
  },
  es: {
    note: {
      title: 'Palabras para todos los días',
      body: 'Estos verbos no son solo para animales: se usan todos los días con las personas (<em lang="it">Mio padre lavora in banca</em>, <em lang="it">Aspetto l’autobus</em>). Los animales son solo una forma divertida de recordarlos. En italiano el infinitivo termina en <em lang="it">-are</em>, <em lang="it">-ere</em> o <em lang="it">-ire</em>; en las frases el verbo cambia de terminación (<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>). Los verbos como <em lang="it">svegliarsi</em> y <em lang="it">arrampicarsi</em> terminan en <em lang="it">-si</em>: son reflexivos (<em lang="it">mi sveglio</em>, <em lang="it">si sveglia</em>). Los verbos que hacen todos los animales (<em lang="it">nascere</em>, <em lang="it">mangiare</em>, <em lang="it">guardare</em>…) tienen ficha pero no fila en los ejercicios.',
    },
    positive: {
      eyebrow: 'Ejercicio de arrastrar',
      title: '¿Qué animal hace esto?',
      intro:
        'Arrastra un animal hasta el verbo que describe lo que hace. Para cada verbo basta con encontrar <strong>al menos un animal</strong>, pero puedes añadir todos los que quieras. En el móvil: toca el animal y luego toca el verbo.',
    },
    negative: {
      eyebrow: 'Con negación',
      title: '¿Qué animal no puede hacerlo?',
      intro:
        'Ahora al revés: arrastra un animal que <strong>no</strong> pueda hacer esa acción. Aquí también basta con uno. Cuidado con las trampas: en la barra también hay animales que sí pueden.',
    },
  },
  fr: {
    note: {
      title: 'Des mots pour tous les jours',
      body: 'Ces verbes ne servent pas seulement pour les animaux : on les utilise tous les jours avec les personnes (<em lang="it">Mio padre lavora in banca</em>, <em lang="it">Aspetto l’autobus</em>). Les animaux sont juste une façon amusante de s’en souvenir. En italien, l’infinitif se termine par <em lang="it">-are</em>, <em lang="it">-ere</em> ou <em lang="it">-ire</em> ; dans une phrase, le verbe change de terminaison (<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>). Les verbes comme <em lang="it">svegliarsi</em> et <em lang="it">arrampicarsi</em> se terminent par <em lang="it">-si</em> : ils sont pronominaux (<em lang="it">mi sveglio</em>, <em lang="it">si sveglia</em>). Les verbes que tous les animaux font (<em lang="it">nascere</em>, <em lang="it">mangiare</em>, <em lang="it">guardare</em>…) ont une fiche mais pas de ligne dans les exercices.',
    },
    positive: {
      eyebrow: 'Exercice à glisser-déposer',
      title: 'Quel animal fait cela ?',
      intro:
        'Faites glisser un animal sur le verbe qui décrit ce qu’il fait. Pour chaque verbe, il suffit de trouver <strong>au moins un animal</strong>, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez l’animal, puis touchez le verbe.',
    },
    negative: {
      eyebrow: 'Avec la négation',
      title: 'Quel animal ne peut pas le faire ?',
      intro:
        'Maintenant, c’est l’inverse : faites glisser un animal qui <strong>ne peut pas</strong> faire cette action. Là aussi, un seul suffit. Attention aux pièges : la barre contient aussi des animaux qui le peuvent.',
    },
  },
  cs: {
    note: {
      title: 'Slova pro každý den',
      body: 'Tato slovesa nejsou jen pro zvířata: používají se každý den s lidmi (<em lang="it">Mio padre lavora in banca</em>, <em lang="it">Aspetto l’autobus</em>). Zvířata jsou jen zábavný způsob, jak si je zapamatovat. V italštině končí infinitiv na <em lang="it">-are</em>, <em lang="it">-ere</em> nebo <em lang="it">-ire</em>; ve větě se konec slovesa mění (<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>). Slovesa jako <em lang="it">svegliarsi</em> a <em lang="it">arrampicarsi</em> končí na <em lang="it">-si</em>: jsou zvratná (<em lang="it">mi sveglio</em>, <em lang="it">si sveglia</em>). Slovesa, která dělají všechna zvířata (<em lang="it">nascere</em>, <em lang="it">mangiare</em>, <em lang="it">guardare</em>…), mají kartu, ale ne řádek v cvičeních.',
    },
    positive: {
      eyebrow: 'Cvičení na přetahování',
      title: 'Které zvíře to dělá?',
      intro:
        'Přetáhněte zvíře na sloveso, které popisuje, co dělá. U každého slovesa stačí najít <strong>alespoň jedno zvíře</strong>, ale můžete jich přidat, kolik chcete. V telefonu: klepněte na zvíře a potom na sloveso.',
    },
    negative: {
      eyebrow: 'Se záporem',
      title: 'Které zvíře to dělat nemůže?',
      intro:
        'Teď naopak: přetáhněte zvíře, které tuto činnost <strong>nemůže</strong> dělat. I tady stačí jedno. Pozor na pasti: v liště jsou i zvířata, která to dělat mohou.',
    },
  },
  pl: {
    note: {
      title: 'Słowa na co dzień',
      body: 'Te czasowniki nie służą tylko do opisywania zwierząt: używa się ich codziennie w rozmowach o ludziach (<em lang="it">Mio padre lavora in banca</em>, <em lang="it">Aspetto l’autobus</em>). Zwierzęta to tylko wesoły sposób, by je zapamiętać. We włoskim bezokolicznik kończy się na <em lang="it">-are</em>, <em lang="it">-ere</em> lub <em lang="it">-ire</em>; w zdaniu czasownik zmienia końcówkę (<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>). Czasowniki takie jak <em lang="it">svegliarsi</em> i <em lang="it">arrampicarsi</em> kończą się na <em lang="it">-si</em>: są zwrotne (<em lang="it">mi sveglio</em>, <em lang="it">si sveglia</em>). Czasowniki, które robią wszystkie zwierzęta (<em lang="it">nascere</em>, <em lang="it">mangiare</em>, <em lang="it">guardare</em>…), mają kartę, ale nie mają wiersza w ćwiczeniach.',
    },
    positive: {
      eyebrow: 'Ćwiczenie z przeciąganiem',
      title: 'Które zwierzę to robi?',
      intro:
        'Przeciągnij zwierzę na czasownik, który opisuje, co ono robi. Przy każdym czasowniku wystarczy znaleźć <strong>przynajmniej jedno zwierzę</strong>, ale możesz dodać ich tyle, ile chcesz. Na telefonie: dotknij zwierzęcia, a potem czasownika.',
    },
    negative: {
      eyebrow: 'Z przeczeniem',
      title: 'Które zwierzę tego nie potrafi?',
      intro:
        'Teraz odwrotnie: przeciągnij zwierzę, które <strong>nie może</strong> tego robić. Tu też wystarczy jedno. Uważaj na pułapki: na pasku są też zwierzęta, które to potrafią.',
    },
  },
  tr: {
    note: {
      title: 'Her gün için kelimeler',
      body: 'Bu fiiller yalnızca hayvanlar için değildir: insanlarla her gün kullanılır (<em lang="it">Mio padre lavora in banca</em>, <em lang="it">Aspetto l’autobus</em>). Hayvanlar onları hatırlamanın eğlenceli bir yoludur. İtalyancada mastar <em lang="it">-are</em>, <em lang="it">-ere</em> veya <em lang="it">-ire</em> ile biter; cümle içinde fiilin sonu değişir (<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>). <em lang="it">svegliarsi</em> ve <em lang="it">arrampicarsi</em> gibi fiiller <em lang="it">-si</em> ile biter: bunlar dönüşlü fiillerdir (<em lang="it">mi sveglio</em>, <em lang="it">si sveglia</em>). Bütün hayvanların yaptığı fiillerin (<em lang="it">nascere</em>, <em lang="it">mangiare</em>, <em lang="it">guardare</em>…) kartı vardır ama alıştırmalarda satırı yoktur.',
    },
    positive: {
      eyebrow: 'Sürükle-bırak alıştırması',
      title: 'Hangi hayvan bunu yapar?',
      intro:
        'Bir hayvanı yaptığı şeyi anlatan fiilin üzerine sürükleyin. Her fiil için <strong>en az bir hayvan</strong> bulmanız yeterlidir, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: hayvana, sonra fiile dokunun.',
    },
    negative: {
      eyebrow: 'Olumsuzla',
      title: 'Hangi hayvan bunu yapamaz?',
      intro:
        'Şimdi tersi: bu eylemi <strong>yapamayan</strong> bir hayvanı sürükleyin. Burada da bir tane yeterli. Tuzaklara dikkat: çubukta bunu yapabilen hayvanlar da var.',
    },
  },
  de: {
    note: {
      title: 'Wörter für den Alltag',
      body: 'Diese Verben gelten nicht nur für Tiere: Man benutzt sie jeden Tag mit Menschen (<em lang="it">Mio padre lavora in banca</em>, <em lang="it">Aspetto l’autobus</em>). Die Tiere sind nur eine lustige Merkhilfe. Im Italienischen endet der Infinitiv auf <em lang="it">-are</em>, <em lang="it">-ere</em> oder <em lang="it">-ire</em>; im Satz ändert das Verb seine Endung (<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>). Verben wie <em lang="it">svegliarsi</em> und <em lang="it">arrampicarsi</em> enden auf <em lang="it">-si</em>: Sie sind reflexiv (<em lang="it">mi sveglio</em>, <em lang="it">si sveglia</em>). Verben, die alle Tiere tun (<em lang="it">nascere</em>, <em lang="it">mangiare</em>, <em lang="it">guardare</em> …), haben eine Karte, aber keine Zeile in den Übungen.',
    },
    positive: {
      eyebrow: 'Drag-and-drop-Übung',
      title: 'Welches Tier macht das?',
      intro:
        'Ziehen Sie ein Tier auf das Verb, das beschreibt, was es tut. Für jedes Verb genügt es, <strong>mindestens ein Tier</strong> zu finden, aber Sie können so viele hinzufügen, wie Sie möchten. Auf dem Handy: das Tier antippen, dann das Verb antippen.',
    },
    negative: {
      eyebrow: 'Mit Verneinung',
      title: 'Welches Tier kann das nicht?',
      intro:
        'Jetzt umgekehrt: Ziehen Sie ein Tier, das diese Handlung <strong>nicht</strong> ausführen kann. Auch hier genügt eins. Vorsicht, Fallen: In der Leiste sind auch Tiere, die es können.',
    },
  },
  ja: {
    note: {
      title: '毎日使う言葉',
      body: 'これらの動詞は動物だけのものではありません。人についても毎日使います（<em lang="it">Mio padre lavora in banca</em>、<em lang="it">Aspetto l’autobus</em>）。動物は、覚えるための楽しい手がかりにすぎません。イタリア語の不定詞は <em lang="it">-are</em>、<em lang="it">-ere</em>、<em lang="it">-ire</em> で終わり、文の中では語尾が変わります（<em lang="it">lavorare</em> → <em lang="it">il papà lavora</em>）。<em lang="it">svegliarsi</em> や <em lang="it">arrampicarsi</em> のように <em lang="it">-si</em> で終わる動詞は再帰動詞です（<em lang="it">mi sveglio</em>、<em lang="it">si sveglia</em>）。すべての動物がすることを表す動詞（<em lang="it">nascere</em>、<em lang="it">mangiare</em>、<em lang="it">guardare</em> など）には、カードはありますが、練習に行はありません。',
    },
    positive: {
      eyebrow: 'ドラッグ＆ドロップの練習',
      title: 'どの動物がそれをしますか？',
      intro:
        '動物を、その行動を表す動詞の上にドラッグしてください。動詞ごとに<strong>少なくとも 1 匹</strong>見つければ大丈夫ですが、いくつでも追加できます。スマートフォンでは、動物をタップしてから動詞をタップします。',
    },
    negative: {
      eyebrow: '否定の形',
      title: 'どの動物がそれをできませんか？',
      intro:
        '今度は反対です。その行動が<strong>できない</strong>動物をドラッグしてください。ここでも 1 匹で十分です。罠に注意：バーには、それができる動物も入っています。',
    },
  },
};

// Le tre etichette dell'interfaccia che nominano gli «aggettivi» e vanno riscritte per i verbi.
export const verbUiOverrides = {
  it: {
    progressText: '{n} di {total} verbi associati',
    tray: 'Animali: trascinali sui verbi o toccali',
    wrongNegative: 'Questo animale può farlo. Cercane un altro.',
  },
  en: {
    progressText: '{n} of {total} verbs matched',
    tray: 'Animals: drag them onto the verbs or tap them',
    wrongNegative: 'This animal can do it. Look for another one.',
  },
  es: {
    progressText: '{n} de {total} verbos asociados',
    tray: 'Animales: arrástralos a los verbos o tócalos',
    wrongNegative: 'Este animal puede hacerlo. Busca otro.',
  },
  fr: {
    progressText: '{n} verbes associés sur {total}',
    tray: 'Animaux : glissez-les sur les verbes ou touchez-les',
    wrongNegative: 'Cet animal peut le faire. Cherchez-en un autre.',
  },
  cs: {
    progressText: '{n} z {total} sloves přiřazeno',
    tray: 'Zvířata: přetáhněte je na slovesa nebo na ně klepněte',
    wrongNegative: 'Toto zvíře to dělat může. Hledejte jiné.',
  },
  pl: {
    progressText: '{n} z {total} czasowników dopasowano',
    tray: 'Zwierzęta: przeciągnij je na czasowniki lub dotknij',
    wrongNegative: 'To zwierzę może to robić. Poszukaj innego.',
  },
  tr: {
    progressText: '{total} fiilden {n} tanesi eşleştirildi',
    tray: 'Hayvanlar: fiillerin üzerine sürükleyin ya da dokunun',
    wrongNegative: 'Bu hayvan bunu yapabilir. Başka birini arayın.',
  },
  de: {
    progressText: '{n} von {total} Verben zugeordnet',
    tray: 'Tiere: auf die Verben ziehen oder antippen',
    wrongNegative: 'Dieses Tier kann das. Suchen Sie ein anderes.',
  },
  ja: {
    progressText: '{total} 個中 {n} 個の動詞を組み合わせました',
    tray: '動物：動詞の上にドラッグするか、タップしてください',
    wrongNegative: 'この動物はそれができます。ほかの動物を探してください。',
  },
};
