// Stringhe di pagina delle tre lezioni nate il 2026-09-24 dalla divisione e dall'ampliamento
// delle prime due (vedi animals-pages.mjs per «Gli animali»):
//
//   - «Le caratteristiche fisiche degli animali»  (physicalPages,    32 aggettivi)
//   - «La personalita' degli animali»             (personalityPages, 35 aggettivi)
//   - «I verbi degli animali»                     (verbPages,        91 verbi)
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
      'Impara 32 aggettivi italiani per descrivere il corpo, i movimenti e i suoni degli animali, con immagini, tre frasi d’esempio ed esercizi da trascinare.',
    heroAlt: 'Un prato con elefante, giraffa, topolino, zebra, riccio, pappagallo e pecora',
    cardText: '32 aggettivi per descrivere il corpo, i movimenti e i suoni degli animali, con esercizi da trascinare.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animal-physical-traits-vocabulary',
    name: 'Animal physical characteristics',
    title: 'Animal physical characteristics | Italian vocabulary | Italiano con Martin',
    description:
      'Learn 32 Italian adjectives to describe animals’ bodies, movements and sounds, with images, three example sentences and drag-and-drop exercises.',
    heroAlt: 'A meadow with an elephant, giraffe, tiny mouse, zebra, hedgehog, parrot and sheep',
    cardText: '32 adjectives for animals’ bodies, movements and sounds, with drag-and-drop exercises.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-caracteristicas-fisicas-animales-en-italiano',
    name: 'Las características físicas de los animales',
    title: 'Las características físicas de los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 32 adjetivos italianos para describir el cuerpo, los movimientos y los sonidos de los animales, con imágenes, tres frases de ejemplo y ejercicios de arrastrar.',
    heroAlt: 'Un prado con elefante, jirafa, ratoncito, cebra, erizo, loro y oveja',
    cardText:
      '32 adjetivos para el cuerpo, los movimientos y los sonidos de los animales, con ejercicios de arrastrar.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-caracteristiques-physiques-des-animaux-en-italien',
    name: 'Les caractéristiques physiques des animaux',
    title: 'Les caractéristiques physiques des animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 32 adjectifs italiens pour décrire le corps, les mouvements et les sons des animaux, avec des images, trois exemples de phrases et des exercices à glisser-déposer.',
    heroAlt: 'Une prairie avec éléphant, girafe, petite souris, zèbre, hérisson, perroquet et mouton',
    cardText:
      '32 adjectifs pour le corps, les mouvements et les sons des animaux, avec des exercices à glisser-déposer.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-fyzicke-vlastnosti-zvirat',
    name: 'Fyzické vlastnosti zvířat',
    title: 'Fyzické vlastnosti zvířat | italská slovní zásoba | Italiano con Martin',
    description:
      'Naučte se 32 italských přídavných jmen pro popis těla, pohybu a zvuků zvířat s obrázky, třemi příkladovými větami a cvičeními na přetahování.',
    heroAlt: 'Louka se slonem, žirafou, malou myškou, zebrou, ježkem, papouškem a ovcí',
    cardText: '32 přídavných jmen pro tělo, pohyb a zvuky zvířat, s cvičeními na přetahování.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-cechy-fizyczne-zwierzat',
    name: 'Cechy fizyczne zwierząt',
    title: 'Cechy fizyczne zwierząt | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 32 włoskich przymiotników opisujących ciało, ruchy i dźwięki zwierząt, z obrazkami, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.',
    heroAlt: 'Łąka ze słoniem, żyrafą, małą myszką, zebrą, jeżem, papugą i owcą',
    cardText: '32 przymiotniki opisujące ciało, ruchy i dźwięki zwierząt, z ćwiczeniami z przeciąganiem.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-fiziksel-ozellikleri-kelimeleri',
    name: 'Hayvanların fiziksel özellikleri',
    title: 'Hayvanların fiziksel özellikleri | İtalyanca kelimeler | Italiano con Martin',
    description:
      'Hayvanların vücudunu, hareketlerini ve seslerini anlatan 32 İtalyanca sıfatı resimler, üç örnek cümle ve sürükle-bırak alıştırmalarıyla öğrenin.',
    heroAlt: 'Fil, zürafa, küçük fare, zebra, kirpi, papağan ve koyunun olduğu bir çayır',
    cardText: 'Hayvanların vücudu, hareketleri ve sesleri için 32 sıfat, sürükle-bırak alıştırmalarıyla.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-koerperliche-eigenschaften-tiere',
    name: 'Die körperlichen Eigenschaften der Tiere',
    title: 'Die körperlichen Eigenschaften der Tiere | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 32 italienische Adjektive für Körper, Bewegungen und Geräusche der Tiere mit Bildern, drei Beispielsätzen und Drag-and-drop-Übungen.',
    heroAlt: 'Eine Wiese mit Elefant, Giraffe, kleiner Maus, Zebra, Igel, Papagei und Schaf',
    cardText: '32 Adjektive für Körper, Bewegungen und Geräusche der Tiere, mit Drag-and-drop-Übungen.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animal-physical-traits-vocabulary',
    name: '動物の身体的特徴',
    title: '動物の身体的特徴 | イタリア語の語彙 | Italiano con Martin',
    description:
      '動物の体、動き、音を表すイタリア語の形容詞 32 個を、画像、3 つの例文、ドラッグ＆ドロップの練習問題で学びます。',
    heroAlt: 'ゾウ、キリン、小さなネズミ、シマウマ、ハリネズミ、オウム、ヒツジのいる草原',
    cardText: '動物の体、動き、音を表す形容詞 32 個。ドラッグ＆ドロップの練習付き。',
  },
};

export const personalityPages = {
  it: {
    dir: 'vocabolario',
    slug: 'personalita-animali',
    name: 'La personalità degli animali',
    title: 'Aggettivi per descrivere la personalità degli animali | Italiano con Martin',
    description:
      'Impara 35 aggettivi italiani per descrivere il carattere di animali e persone, con immagini, tre frasi d’esempio ed esercizi da trascinare.',
    heroAlt: 'Un prato con ghepardo, lumaca, pavone, bradipo, gufo, volpe, coniglio e leoncino',
    cardText: '35 aggettivi per descrivere il carattere degli animali e delle persone, con esercizi da trascinare.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animal-personality-vocabulary',
    name: 'Animal personality',
    title: 'Animal personality | Italian vocabulary | Italiano con Martin',
    description:
      'Learn 35 Italian adjectives to describe the character of animals and people, with images, three example sentences and drag-and-drop exercises.',
    heroAlt: 'A meadow with a cheetah, snail, peacock, sloth, owl, fox, rabbit and lion cub',
    cardText: '35 adjectives to describe the character of animals and people, with drag-and-drop exercises.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-personalidad-animales-en-italiano',
    name: 'La personalidad de los animales',
    title: 'La personalidad de los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 35 adjetivos italianos para describir el carácter de animales y personas, con imágenes, tres frases de ejemplo y ejercicios de arrastrar.',
    heroAlt: 'Un prado con guepardo, caracol, pavo real, perezoso, búho, zorro, conejo y cachorro de león',
    cardText: '35 adjetivos para describir el carácter de animales y personas, con ejercicios de arrastrar.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-personnalite-des-animaux-en-italien',
    name: 'La personnalité des animaux',
    title: 'La personnalité des animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 35 adjectifs italiens pour décrire le caractère des animaux et des personnes, avec des images, trois exemples de phrases et des exercices à glisser-déposer.',
    heroAlt: 'Une prairie avec guépard, escargot, paon, paresseux, hibou, renard, lapin et lionceau',
    cardText:
      '35 adjectifs pour décrire le caractère des animaux et des personnes, avec des exercices à glisser-déposer.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-povaha-zvirat',
    name: 'Povaha zvířat',
    title: 'Povaha zvířat | italská slovní zásoba | Italiano con Martin',
    description:
      'Naučte se 35 italských přídavných jmen pro popis povahy zvířat i lidí s obrázky, třemi příkladovými větami a cvičeními na přetahování.',
    heroAlt: 'Louka s gepardem, hlemýžděm, pávem, lenochodem, sovou, liškou, králíkem a lvíčetem',
    cardText: '35 přídavných jmen pro popis povahy zvířat i lidí, s cvičeními na přetahování.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-charakter-zwierzat',
    name: 'Charakter zwierząt',
    title: 'Charakter zwierząt | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 35 włoskich przymiotników opisujących charakter zwierząt i ludzi, z obrazkami, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.',
    heroAlt: 'Łąka z gepardem, ślimakiem, pawiem, leniwcem, sową, lisem, królikiem i lwiątkiem',
    cardText: '35 przymiotników opisujących charakter zwierząt i ludzi, z ćwiczeniami z przeciąganiem.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-kisiligi-kelimeleri',
    name: 'Hayvanların kişiliği',
    title: 'Hayvanların kişiliği | İtalyanca kelimeler | Italiano con Martin',
    description:
      'Hayvanların ve insanların karakterini anlatan 35 İtalyanca sıfatı resimler, üç örnek cümle ve sürükle-bırak alıştırmalarıyla öğrenin.',
    heroAlt: 'Çita, salyangoz, tavus kuşu, tembel hayvan, baykuş, tilki, tavşan ve aslan yavrusunun olduğu bir çayır',
    cardText: 'Hayvanların ve insanların karakterini anlatan 35 sıfat, sürükle-bırak alıştırmalarıyla.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-persoenlichkeit-tiere',
    name: 'Die Persönlichkeit der Tiere',
    title: 'Die Persönlichkeit der Tiere | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 35 italienische Adjektive für den Charakter von Tieren und Menschen mit Bildern, drei Beispielsätzen und Drag-and-drop-Übungen.',
    heroAlt: 'Eine Wiese mit Gepard, Schnecke, Pfau, Faultier, Eule, Fuchs, Kaninchen und Löwenjunges',
    cardText: '35 Adjektive für den Charakter von Tieren und Menschen, mit Drag-and-drop-Übungen.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animal-personality-vocabulary',
    name: '動物の性格',
    title: '動物の性格 | イタリア語の語彙 | Italiano con Martin',
    description:
      '動物や人の性格を表すイタリア語の形容詞 35 個を、画像、3 つの例文、ドラッグ＆ドロップの練習問題で学びます。',
    heroAlt: 'チーター、カタツムリ、クジャク、ナマケモノ、フクロウ、キツネ、ウサギ、子ライオンのいる草原',
    cardText: '動物や人の性格を表す形容詞 35 個。ドラッグ＆ドロップの練習付き。',
  },
};

export const verbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-animali',
    name: 'I verbi degli animali',
    title: 'Verbi degli animali in italiano | Italiano con Martin',
    description:
      'Impara 91 verbi italiani per quello che fanno gli animali — volare, costruire, scavare, abbaiare — con immagini, tre frasi d’esempio ed esercizi da trascinare.',
    heroAlt: 'Un prato con ruscello: castoro, aquila, formica con una foglia, anatra, ragno, canguro e scimmia',
    cardText: '91 verbi per raccontare che cosa fanno gli animali: muoversi, costruire, difendersi e fare versi.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animal-verbs-vocabulary',
    name: 'Animal verbs',
    title: 'Animal verbs | Italian vocabulary | Italiano con Martin',
    description:
      'Learn 91 Italian verbs for what animals do — to fly, to build, to dig, to bark — with images, three example sentences and drag-and-drop exercises.',
    heroAlt: 'A meadow with a stream: beaver, eagle, ant with a leaf, duck, spider, kangaroo and monkey',
    cardText: '91 verbs for what animals do: moving, building, defending themselves and making sounds.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-animales-en-italiano',
    name: 'Los verbos de los animales',
    title: 'Los verbos de los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 91 verbos italianos para lo que hacen los animales — volar, construir, cavar, ladrar — con imágenes, tres frases de ejemplo y ejercicios de arrastrar.',
    heroAlt: 'Un prado con un arroyo: castor, águila, hormiga con una hoja, pato, araña, canguro y mono',
    cardText: '91 verbos para lo que hacen los animales: moverse, construir, defenderse y hacer sonidos.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-des-animaux-en-italien',
    name: 'Les verbes des animaux',
    title: 'Les verbes des animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 91 verbes italiens pour ce que font les animaux — voler, construire, creuser, aboyer — avec des images, trois exemples de phrases et des exercices à glisser-déposer.',
    heroAlt:
      'Une prairie avec un ruisseau : castor, aigle, fourmi avec une feuille, canard, araignée, kangourou et singe',
    cardText: '91 verbes pour ce que font les animaux : se déplacer, construire, se défendre et faire du bruit.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-zvirat',
    name: 'Slovesa zvířat',
    title: 'Slovesa zvířat | italská slovní zásoba | Italiano con Martin',
    description:
      'Naučte se 91 italských sloves pro to, co zvířata dělají — létat, stavět, hrabat, štěkat — s obrázky, třemi příkladovými větami a cvičeními na přetahování.',
    heroAlt: 'Louka s potokem: bobr, orel, mravenec s listem, kachna, pavouk, klokan a opice',
    cardText: '91 sloves pro to, co zvířata dělají: pohyb, stavění, obrana a zvuky.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-zwierzat',
    name: 'Czasowniki zwierząt',
    title: 'Czasowniki zwierząt | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 91 włoskich czasowników opisujących to, co robią zwierzęta — latać, budować, kopać, szczekać — z obrazkami, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.',
    heroAlt: 'Łąka z potokiem: bóbr, orzeł, mrówka z liściem, kaczka, pająk, kangur i małpa',
    cardText: '91 czasowników o tym, co robią zwierzęta: poruszanie się, budowanie, obrona i dźwięki.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-fiilleri-kelimeleri',
    name: 'Hayvanların fiilleri',
    title: 'Hayvanların fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description:
      'Hayvanların yaptıklarını anlatan 91 İtalyanca fiili — uçmak, inşa etmek, kazmak, havlamak — resimler, üç örnek cümle ve sürükle-bırak alıştırmalarıyla öğrenin.',
    heroAlt: 'Dereli bir çayır: kunduz, kartal, yaprak taşıyan karınca, ördek, örümcek, kanguru ve maymun',
    cardText: 'Hayvanların yaptıkları için 91 fiil: hareket etmek, inşa etmek, korunmak ve ses çıkarmak.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-tiere',
    name: 'Die Verben der Tiere',
    title: 'Die Verben der Tiere | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 91 italienische Verben für das, was Tiere tun — fliegen, bauen, graben, bellen — mit Bildern, drei Beispielsätzen und Drag-and-drop-Übungen.',
    heroAlt: 'Eine Wiese mit Bach: Biber, Adler, Ameise mit einem Blatt, Ente, Spinne, Känguru und Affe',
    cardText: '91 Verben für das, was Tiere tun: sich bewegen, bauen, sich verteidigen und Laute machen.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animal-verbs-vocabulary',
    name: '動物の動詞',
    title: '動物の動詞 | イタリア語の語彙 | Italiano con Martin',
    description:
      '動物のすることを表すイタリア語の動詞 91 個（飛ぶ、作る、掘る、吠える）を、画像、3 つの例文、ドラッグ＆ドロップの練習問題で学びます。',
    heroAlt: '小川のある草原：ビーバー、ワシ、葉っぱを運ぶアリ、アヒル、クモ、カンガルー、サル',
    cardText: '動物のすることを表す動詞 91 個：動く、作る、身を守る、鳴く。',
  },
};

// La nota sotto le schede della lezione fisica (sostituisce la nota sull'articolo).
export const physicalNote = {
  it: {
    title: 'Piccola osservazione',
    body: 'Molti aggettivi hanno due forme: <em>lungo</em> (maschile) e <em>lunga</em> (femminile). Quelli che finiscono in <em>-e</em>, come <em>veloce</em> e <em>forte</em>, ne hanno una sola. Molte caratteristiche sono relative: un gatto è piccolo rispetto a un cavallo, ma grande rispetto a una formica. Negli esercizi contano gli esempi più evidenti.',
  },
  en: {
    title: 'A small note',
    body: 'Many adjectives have two forms: <em lang="it">lungo</em> (masculine) and <em lang="it">lunga</em> (feminine). Those ending in <em lang="it">-e</em>, like <em lang="it">veloce</em> and <em lang="it">forte</em>, have only one. Many characteristics are relative: a cat is small compared to a horse, but big compared to an ant. In the exercises, the most obvious examples count.',
  },
  es: {
    title: 'Una pequeña observación',
    body: 'Muchos adjetivos tienen dos formas: <em lang="it">lungo</em> (masculino) y <em lang="it">lunga</em> (femenino). Los que terminan en <em lang="it">-e</em>, como <em lang="it">veloce</em> y <em lang="it">forte</em>, tienen una sola. Muchas características son relativas: un gato es pequeño comparado con un caballo, pero grande comparado con una hormiga. En los ejercicios cuentan los ejemplos más evidentes.',
  },
  fr: {
    title: 'Petite remarque',
    body: 'Beaucoup d’adjectifs ont deux formes : <em lang="it">lungo</em> (masculin) et <em lang="it">lunga</em> (féminin). Ceux qui finissent en <em lang="it">-e</em>, comme <em lang="it">veloce</em> et <em lang="it">forte</em>, n’en ont qu’une. Beaucoup de caractéristiques sont relatives : un chat est petit comparé à un cheval, mais grand comparé à une fourmi. Dans les exercices, ce sont les exemples les plus évidents qui comptent.',
  },
  cs: {
    title: 'Malá poznámka',
    body: 'Mnoho přídavných jmen má dva tvary: <em lang="it">lungo</em> (mužský rod) a <em lang="it">lunga</em> (ženský rod). Ta, která končí na <em lang="it">-e</em>, například <em lang="it">veloce</em> a <em lang="it">forte</em>, mají jen jeden. Mnoho vlastností je relativních: kočka je malá ve srovnání s koněm, ale velká ve srovnání s mravencem. V cvičeních se počítají nejzřejmější příklady.',
  },
  pl: {
    title: 'Drobna uwaga',
    body: 'Wiele przymiotników ma dwie formy: <em lang="it">lungo</em> (rodzaj męski) i <em lang="it">lunga</em> (rodzaj żeński). Te, które kończą się na <em lang="it">-e</em>, jak <em lang="it">veloce</em> i <em lang="it">forte</em>, mają tylko jedną. Wiele cech jest względnych: kot jest mały w porównaniu z koniem, ale duży w porównaniu z mrówką. W ćwiczeniach liczą się najbardziej oczywiste przykłady.',
  },
  tr: {
    title: 'Küçük bir not',
    body: 'Birçok sıfatın iki biçimi vardır: <em lang="it">lungo</em> (eril) ve <em lang="it">lunga</em> (dişil). <em lang="it">veloce</em> ve <em lang="it">forte</em> gibi <em lang="it">-e</em> ile biten sıfatların ise tek biçimi vardır. Birçok özellik görecelidir: bir kedi attan küçük, ama karıncadan büyüktür. Alıştırmalarda en belirgin örnekler geçerlidir.',
  },
  de: {
    title: 'Eine kleine Anmerkung',
    body: 'Viele Adjektive haben zwei Formen: <em lang="it">lungo</em> (maskulin) und <em lang="it">lunga</em> (feminin). Die auf <em lang="it">-e</em> enden, wie <em lang="it">veloce</em> und <em lang="it">forte</em>, haben nur eine. Viele Eigenschaften sind relativ: Eine Katze ist klein im Vergleich zu einem Pferd, aber groß im Vergleich zu einer Ameise. In den Übungen zählen die offensichtlichsten Beispiele.',
  },
  ja: {
    title: 'ひとこと',
    body: '形容詞の多くは 2 つの形を持ちます。<em lang="it">lungo</em>（男性形）と <em lang="it">lunga</em>（女性形）です。<em lang="it">veloce</em> や <em lang="it">forte</em> のように <em lang="it">-e</em> で終わる形容詞は、形が 1 つだけです。特徴の多くは相対的です。猫は馬に比べれば小さいですが、アリに比べれば大きいです。練習では、いちばんわかりやすい例が正解になります。',
  },
};

// Testi della lezione sui verbi (stessa forma di `traitUi`: note, positive, negative, ui).
// `ui` e `lessonLink` si prendono da `traitUi` e si cambiano solo le tre voci che nominano
// gli «aggettivi» (vedi verbUiOverrides).
export const verbUi = {
  it: {
    note: {
      title: 'Piccola osservazione',
      body: 'In italiano l’infinito finisce in <em>-are</em>, <em>-ere</em> o <em>-ire</em>; nelle frasi il verbo cambia la sua fine (<em>abbaiare</em> → <em>il cane abbaia</em>). I verbi come <em>arrotolarsi</em> e <em>arrampicarsi</em> finiscono in <em>-si</em>: sono riflessivi. Per i versi degli animali l’italiano ha un verbo speciale per ogni animale (<em>abbaiare</em>, <em>miagolare</em>, <em>muggire</em>…): conviene impararli insieme.',
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
      title: 'A small note',
      body: 'In Italian the infinitive ends in <em lang="it">-are</em>, <em lang="it">-ere</em> or <em lang="it">-ire</em>; in a sentence the verb changes its ending (<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>). Verbs like <em lang="it">arrotolarsi</em> and <em lang="it">arrampicarsi</em> end in <em lang="it">-si</em>: they are reflexive. For animal sounds Italian has a special verb for each animal (<em lang="it">abbaiare</em>, <em lang="it">miagolare</em>, <em lang="it">muggire</em>…): it is best to learn them together.',
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
      title: 'Una pequeña observación',
      body: 'En italiano el infinitivo termina en <em lang="it">-are</em>, <em lang="it">-ere</em> o <em lang="it">-ire</em>; en las frases el verbo cambia de terminación (<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>). Los verbos como <em lang="it">arrotolarsi</em> y <em lang="it">arrampicarsi</em> terminan en <em lang="it">-si</em>: son reflexivos. Para los sonidos de los animales el italiano tiene un verbo especial para cada uno (<em lang="it">abbaiare</em>, <em lang="it">miagolare</em>, <em lang="it">muggire</em>…): conviene aprenderlos juntos.',
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
      title: 'Petite remarque',
      body: 'En italien, l’infinitif se termine par <em lang="it">-are</em>, <em lang="it">-ere</em> ou <em lang="it">-ire</em> ; dans une phrase, le verbe change de terminaison (<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>). Les verbes comme <em lang="it">arrotolarsi</em> et <em lang="it">arrampicarsi</em> se terminent par <em lang="it">-si</em> : ils sont pronominaux. Pour les cris des animaux, l’italien a un verbe spécial pour chacun (<em lang="it">abbaiare</em>, <em lang="it">miagolare</em>, <em lang="it">muggire</em>…) : mieux vaut les apprendre ensemble.',
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
      title: 'Malá poznámka',
      body: 'V italštině končí infinitiv na <em lang="it">-are</em>, <em lang="it">-ere</em> nebo <em lang="it">-ire</em>; ve větě se konec slovesa mění (<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>). Slovesa jako <em lang="it">arrotolarsi</em> a <em lang="it">arrampicarsi</em> končí na <em lang="it">-si</em>: jsou zvratná. Pro zvuky zvířat má italština zvláštní sloveso pro každé zvíře (<em lang="it">abbaiare</em>, <em lang="it">miagolare</em>, <em lang="it">muggire</em>…): vyplatí se učit se je společně.',
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
      title: 'Drobna uwaga',
      body: 'We włoskim bezokolicznik kończy się na <em lang="it">-are</em>, <em lang="it">-ere</em> lub <em lang="it">-ire</em>; w zdaniu czasownik zmienia końcówkę (<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>). Czasowniki takie jak <em lang="it">arrotolarsi</em> i <em lang="it">arrampicarsi</em> kończą się na <em lang="it">-si</em>: są zwrotne. Dla dźwięków zwierząt włoski ma osobny czasownik dla każdego zwierzęcia (<em lang="it">abbaiare</em>, <em lang="it">miagolare</em>, <em lang="it">muggire</em>…): warto uczyć się ich razem.',
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
      title: 'Küçük bir not',
      body: 'İtalyancada mastar <em lang="it">-are</em>, <em lang="it">-ere</em> veya <em lang="it">-ire</em> ile biter; cümle içinde fiilin sonu değişir (<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>). <em lang="it">arrotolarsi</em> ve <em lang="it">arrampicarsi</em> gibi fiiller <em lang="it">-si</em> ile biter: bunlar dönüşlü fiillerdir. Hayvan sesleri için İtalyancada her hayvana özel bir fiil vardır (<em lang="it">abbaiare</em>, <em lang="it">miagolare</em>, <em lang="it">muggire</em>…): bunları birlikte öğrenmek iyi olur.',
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
      title: 'Eine kleine Anmerkung',
      body: 'Im Italienischen endet der Infinitiv auf <em lang="it">-are</em>, <em lang="it">-ere</em> oder <em lang="it">-ire</em>; im Satz ändert das Verb seine Endung (<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>). Verben wie <em lang="it">arrotolarsi</em> und <em lang="it">arrampicarsi</em> enden auf <em lang="it">-si</em>: Sie sind reflexiv. Für Tierlaute hat das Italienische für jedes Tier ein eigenes Verb (<em lang="it">abbaiare</em>, <em lang="it">miagolare</em>, <em lang="it">muggire</em> …): Man lernt sie am besten zusammen.',
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
      title: 'ひとこと',
      body: 'イタリア語の不定詞は <em lang="it">-are</em>、<em lang="it">-ere</em>、<em lang="it">-ire</em> で終わり、文の中では語尾が変わります（<em lang="it">abbaiare</em> → <em lang="it">il cane abbaia</em>）。<em lang="it">arrotolarsi</em> や <em lang="it">arrampicarsi</em> のように <em lang="it">-si</em> で終わる動詞は再帰動詞です。動物の鳴き声には、動物ごとに専用の動詞があります（<em lang="it">abbaiare</em>、<em lang="it">miagolare</em>、<em lang="it">muggire</em> など）。まとめて覚えると便利です。',
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
