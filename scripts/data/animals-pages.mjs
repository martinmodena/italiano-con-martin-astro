// Stringhe di pagina della lezione «Gli animali» (animalPages, 100 parole) e i testi degli
// esercizi da trascinare delle due lezioni sugli aggettivi (traitUi). Le pagine delle lezioni
// «caratteristiche fisiche», «personalita'» e «verbi» sono in animals-pages-more.mjs.
//
// Le etichette di servizio comuni a tutte le lezioni (Riconosci la parola, Frasi da tradurre,
// i bottoni, la barra di avanzamento) NON stanno qui: lo script le legge dalla pagina della
// cucina, gia' tradotta. Qui ci sono solo i testi nuovi.
//
// REGOLE_LINGUE.md: le parole italiane dentro i testi tradotti stanno in <em lang="it">.

export const animalPages = {
  it: {
    dir: 'vocabolario',
    slug: 'animali',
    name: 'Gli animali',
    title: 'Vocabolario degli animali in italiano | Italiano con Martin',
    description: 'Impara 100 nomi di animali in italiano con immagini, tre frasi d’esempio, pronuncia ed esercizi.',
    heroAlt: 'Un prato con elefante, giraffa, leoncino, panda, pinguino, volpe, coniglio e tartaruga',
    cardText: '100 parole per mammiferi, uccelli, rettili, pesci e insetti.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animals-vocabulary',
    name: 'Animals',
    title: 'Animals | Italian vocabulary | Italiano con Martin',
    description: 'Learn 100 Italian animal names with images, three example sentences, pronunciation and exercises.',
    heroAlt: 'A meadow with an elephant, giraffe, lion cub, panda, penguin, fox, rabbit and tortoise',
    cardText: '100 words for mammals, birds, reptiles, fish and insects.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-los-animales-en-italiano',
    name: 'Los animales',
    title: 'Los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 100 nombres de animales en italiano con imágenes, tres frases de ejemplo, pronunciación y ejercicios.',
    heroAlt: 'Un prado con elefante, jirafa, cachorro de león, panda, pingüino, zorro, conejo y tortuga',
    cardText: '100 palabras para mamíferos, aves, reptiles, peces e insectos.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-des-animaux-en-italien',
    name: 'Les animaux',
    title: 'Les animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 100 noms d’animaux en italien avec des images, trois exemples de phrases, la prononciation et des exercices.',
    heroAlt: 'Une prairie avec éléphant, girafe, lionceau, panda, manchot, renard, lapin et tortue',
    cardText: '100 mots pour les mammifères, oiseaux, reptiles, poissons et insectes.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-zvirata',
    name: 'Zvířata',
    title: 'Zvířata | italská slovní zásoba | Italiano con Martin',
    description: 'Naučte se 100 italských názvů zvířat s obrázky, třemi příkladovými větami, výslovností a cvičeními.',
    heroAlt: 'Louka se slonem, žirafou, lvíčetem, pandou, tučňákem, liškou, králíkem a želvou',
    cardText: '100 slov pro savce, ptáky, plazy, ryby a hmyz.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-zwierzeta',
    name: 'Zwierzęta',
    title: 'Zwierzęta | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 100 włoskich nazw zwierząt z obrazkami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.',
    heroAlt: 'Łąka ze słoniem, żyrafą, lwiątkiem, pandą, pingwinem, lisem, królikiem i żółwiem',
    cardText: '100 słów o ssakach, ptakach, gadach, rybach i owadach.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-kelimeleri',
    name: 'Hayvanlar',
    title: 'Hayvanlar | İtalyanca kelimeler | Italiano con Martin',
    description: 'Resimler, üç örnek cümle, telaffuz ve alıştırmalarla 100 İtalyanca hayvan adını öğrenin.',
    heroAlt: 'Fil, zürafa, aslan yavrusu, panda, penguen, tilki, tavşan ve kaplumbağanın olduğu bir çayır',
    cardText: 'Memeliler, kuşlar, sürüngenler, balıklar ve böcekler için 100 kelime.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-tiere',
    name: 'Die Tiere',
    title: 'Die Tiere | italienischer Wortschatz | Italiano con Martin',
    description: 'Lernen Sie 100 italienische Tiernamen mit Bildern, drei Beispielsätzen, Aussprache und Übungen.',
    heroAlt: 'Eine Wiese mit Elefant, Giraffe, Löwenjunges, Panda, Pinguin, Fuchs, Kaninchen und Schildkröte',
    cardText: '100 Wörter für Säugetiere, Vögel, Reptilien, Fische und Insekten.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animals-vocabulary',
    name: '動物',
    title: '動物 | イタリア語の語彙 | Italiano con Martin',
    description: '動物の名前 100 語を画像、3 つの例文、発音、練習問題で学びます。',
    heroAlt: 'ゾウ、キリン、子ライオン、パンダ、ペンギン、キツネ、ウサギ、カメのいる草原',
    cardText: '哺乳類、鳥、爬虫類、魚、昆虫を表す 100 語。',
  },
};

// La parola d'esempio citata nel testo dell'esercizio «Riconosci la parola» e nella nota finale.
export const animalExampleWord = { bare: 'gatto', withArticle: 'il gatto' };

// Pagina della prima versione della lezione sulle caratteristiche, poi divisa in due (2026-09-24):
// serve solo per i redirect degli URL vecchi. Le pagine nuove sono in animals-pages-more.mjs.
export const oldTraitPages = {
  it: {
    dir: 'vocabolario',
    slug: 'caratteristiche-animali',
    name: 'Le caratteristiche degli animali',
    title: 'Aggettivi per descrivere gli animali in italiano | Italiano con Martin',
    description:
      'Impara 50 aggettivi italiani per descrivere animali e persone, con immagini, tre frasi d’esempio ed esercizi da trascinare.',
    heroAlt: 'Un prato con ghepardo, lumaca, pavone, bradipo, gufo, volpe, coniglio e leoncino',
    cardText: '50 aggettivi per descrivere gli animali e le persone, con esercizi da trascinare.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-animal-traits-vocabulary',
    name: 'Animal characteristics',
    title: 'Animal characteristics | Italian vocabulary | Italiano con Martin',
    description:
      'Learn 50 Italian adjectives to describe animals and people, with images, three example sentences and drag-and-drop exercises.',
    heroAlt: 'A meadow with a cheetah, snail, peacock, sloth, owl, fox, rabbit and lion cub',
    cardText: '50 adjectives to describe animals and people, with drag-and-drop exercises.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-caracteristicas-animales-en-italiano',
    name: 'Las características de los animales',
    title: 'Las características de los animales | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 50 adjetivos italianos para describir animales y personas, con imágenes, tres frases de ejemplo y ejercicios de arrastrar.',
    heroAlt: 'Un prado con guepardo, caracol, pavo real, perezoso, búho, zorro, conejo y cachorro de león',
    cardText: '50 adjetivos para describir animales y personas, con ejercicios de arrastrar.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-caracteristiques-des-animaux-en-italien',
    name: 'Les caractéristiques des animaux',
    title: 'Les caractéristiques des animaux | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 50 adjectifs italiens pour décrire les animaux et les personnes, avec des images, trois exemples de phrases et des exercices à glisser-déposer.',
    heroAlt: 'Une prairie avec guépard, escargot, paon, paresseux, hibou, renard, lapin et lionceau',
    cardText: '50 adjectifs pour décrire les animaux et les personnes, avec des exercices à glisser-déposer.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-vlastnosti-zvirat',
    name: 'Vlastnosti zvířat',
    title: 'Vlastnosti zvířat | italská slovní zásoba | Italiano con Martin',
    description:
      'Naučte se 50 italských přídavných jmen pro popis zvířat i lidí s obrázky, třemi příkladovými větami a cvičeními na přetahování.',
    heroAlt: 'Louka s gepardem, hlemýžděm, pávem, lenochodem, sovou, liškou, králíkem a lvíčetem',
    cardText: '50 přídavných jmen pro popis zvířat i lidí, s cvičeními na přetahování.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-cechy-zwierzat',
    name: 'Cechy zwierząt',
    title: 'Cechy zwierząt | włoskie słownictwo | Italiano con Martin',
    description:
      'Naucz się 50 włoskich przymiotników opisujących zwierzęta i ludzi, z obrazkami, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.',
    heroAlt: 'Łąka z gepardem, ślimakiem, pawiem, leniwcem, sową, lisem, królikiem i lwiątkiem',
    cardText: '50 przymiotników opisujących zwierzęta i ludzi, z ćwiczeniami z przeciąganiem.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-hayvan-ozellikleri-kelimeleri',
    name: 'Hayvanların özellikleri',
    title: 'Hayvanların özellikleri | İtalyanca kelimeler | Italiano con Martin',
    description:
      'Hayvanları ve insanları anlatan 50 İtalyanca sıfatı resimler, üç örnek cümle ve sürükle-bırak alıştırmalarıyla öğrenin.',
    heroAlt: 'Çita, salyangoz, tavus kuşu, tembel hayvan, baykuş, tilki, tavşan ve aslan yavrusunun olduğu bir çayır',
    cardText: 'Hayvanları ve insanları anlatan 50 sıfat, sürükle-bırak alıştırmalarıyla.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-eigenschaften-tiere',
    name: 'Die Eigenschaften der Tiere',
    title: 'Die Eigenschaften der Tiere | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 50 italienische Adjektive für Tiere und Menschen mit Bildern, drei Beispielsätzen und Drag-and-drop-Übungen.',
    heroAlt: 'Eine Wiese mit Gepard, Schnecke, Pfau, Faultier, Eule, Fuchs, Kaninchen und Löwenjunges',
    cardText: '50 Adjektive für Tiere und Menschen, mit Drag-and-drop-Übungen.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-animal-traits-vocabulary',
    name: '動物の特徴',
    title: '動物の特徴 | イタリア語の語彙 | Italiano con Martin',
    description: '動物や人を表すイタリア語の形容詞 50 個を、画像、3 つの例文、ドラッグ＆ドロップの練習問題で学びます。',
    heroAlt: 'チーター、カタツムリ、クジャク、ナマケモノ、フクロウ、キツネ、ウサギ、子ライオンのいる草原',
    cardText: '動物や人を表す形容詞 50 個。ドラッグ＆ドロップの練習付き。',
  },
};

// Testi delle sezioni con trascinamento delle lezioni sugli aggettivi (lingua-veicolo). Le note sotto le schede delle tre lezioni (fisiche, personalita', verbi) sono in animals-pages-more.mjs.
//
//   lessonLink  invito a ripassare gli animali; {link} diventa il collegamento
//   positive    esercizio «quale animale e' cosi'?»   (eyebrow, title, intro)
//   negative    esercizio «quale animale NON e' cosi'?»
//   ui          etichette comuni; {n}, {total}, {adj} sono segnaposto
//
// `wrongNegative` e `progressNegative` servono alla forma con la negazione.
export const traitUi = {
  it: {
    lessonLink: 'Non ricordi un animale? Ripassa la lezione {link}.',
    positive: {
      eyebrow: 'Esercizio con trascinamento',
      title: 'Quale animale è così?',
      intro:
        'Trascina un animale sull’aggettivo che lo descrive. Per ogni aggettivo basta trovare <strong>almeno un animale</strong>, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca l’animale, poi tocca l’aggettivo.',
    },
    negative: {
      eyebrow: 'Con la negazione',
      title: 'Quale animale non è così?',
      intro:
        'Ora al contrario: trascina un animale che <strong>non</strong> ha quella caratteristica. Anche qui ne basta uno. Attenzione alle trappole: nella barra ci sono anche animali che ce l’hanno.',
    },
    ui: {
      progress: 'Progresso',
      progressText: '{n} di {total} aggettivi associati',
      set: 'Serie {n} di {total}',
      tray: 'Animali: trascinali sugli aggettivi o toccali',
      empty: 'Trascina qui',
      hint: 'Suggerimento',
      reset: 'Ricomincia',
      correct: 'Giusto!',
      wrong: 'Non proprio. Prova con un altro animale.',
      wrongNegative: 'Questo animale può essere così. Cercane un altro.',
      complete: 'Bravo! Hai completato questo esercizio.',
      dropLabel: 'Animali associati: {adj}',
    },
  },
  en: {
    lessonLink: 'Can’t remember an animal? Review the lesson {link}.',
    positive: {
      eyebrow: 'Drag-and-drop exercise',
      title: 'Which animal is like this?',
      intro:
        'Drag an animal onto the adjective that describes it. For each adjective you only need to find <strong>at least one animal</strong>, but you can add as many as you like. On a phone: tap the animal, then tap the adjective.',
    },
    negative: {
      eyebrow: 'With negation',
      title: 'Which animal is not like this?',
      intro:
        'Now the other way round: drag an animal that does <strong>not</strong> have that trait. Again, one is enough. Beware of traps: the tray also contains animals that do have it.',
    },
    ui: {
      progress: 'Progress',
      progressText: '{n} of {total} adjectives matched',
      set: 'Set {n} of {total}',
      tray: 'Animals: drag them onto the adjectives or tap them',
      empty: 'Drop here',
      hint: 'Hint',
      reset: 'Start again',
      correct: 'Correct!',
      wrong: 'Not quite. Try another animal.',
      wrongNegative: 'This animal can be like that. Look for another one.',
      complete: 'Well done! You have completed this exercise.',
      dropLabel: 'Matched animals: {adj}',
    },
  },
  es: {
    lessonLink: '¿No recuerdas un animal? Repasa la lección {link}.',
    positive: {
      eyebrow: 'Ejercicio de arrastrar',
      title: '¿Qué animal es así?',
      intro:
        'Arrastra un animal hasta el adjetivo que lo describe. Para cada adjetivo basta con encontrar <strong>al menos un animal</strong>, pero puedes añadir todos los que quieras. En el móvil: toca el animal y luego toca el adjetivo.',
    },
    negative: {
      eyebrow: 'Con negación',
      title: '¿Qué animal no es así?',
      intro:
        'Ahora al revés: arrastra un animal que <strong>no</strong> tenga esa característica. Aquí también basta con uno. Cuidado con las trampas: en la barra también hay animales que sí la tienen.',
    },
    ui: {
      progress: 'Progreso',
      progressText: '{n} de {total} adjetivos asociados',
      set: 'Serie {n} de {total}',
      tray: 'Animales: arrástralos a los adjetivos o tócalos',
      empty: 'Suelta aquí',
      hint: 'Pista',
      reset: 'Empezar de nuevo',
      correct: '¡Correcto!',
      wrong: 'No exactamente. Prueba con otro animal.',
      wrongNegative: 'Este animal puede ser así. Busca otro.',
      complete: '¡Muy bien! Has completado este ejercicio.',
      dropLabel: 'Animales asociados: {adj}',
    },
  },
  fr: {
    lessonLink: 'Vous ne vous souvenez pas d’un animal ? Révisez la leçon {link}.',
    positive: {
      eyebrow: 'Exercice à glisser-déposer',
      title: 'Quel animal est comme ça ?',
      intro:
        'Faites glisser un animal sur l’adjectif qui le décrit. Pour chaque adjectif, il suffit de trouver <strong>au moins un animal</strong>, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez l’animal, puis touchez l’adjectif.',
    },
    negative: {
      eyebrow: 'Avec la négation',
      title: 'Quel animal n’est pas comme ça ?',
      intro:
        'Maintenant, c’est l’inverse : faites glisser un animal qui n’a <strong>pas</strong> cette caractéristique. Là aussi, un seul suffit. Attention aux pièges : la barre contient aussi des animaux qui l’ont.',
    },
    ui: {
      progress: 'Progression',
      progressText: '{n} adjectifs associés sur {total}',
      set: 'Série {n} sur {total}',
      tray: 'Animaux : glissez-les sur les adjectifs ou touchez-les',
      empty: 'Déposez ici',
      hint: 'Indice',
      reset: 'Recommencer',
      correct: 'Correct !',
      wrong: 'Pas tout à fait. Essayez un autre animal.',
      wrongNegative: 'Cet animal peut être comme ça. Cherchez-en un autre.',
      complete: 'Bravo ! Vous avez terminé cet exercice.',
      dropLabel: 'Animaux associés : {adj}',
    },
  },
  cs: {
    lessonLink: 'Nepamatujete si nějaké zvíře? Zopakujte si lekci {link}.',
    positive: {
      eyebrow: 'Cvičení na přetahování',
      title: 'Které zvíře je takové?',
      intro:
        'Přetáhněte zvíře na přídavné jméno, které ho popisuje. U každého přídavného jména stačí najít <strong>alespoň jedno zvíře</strong>, ale můžete jich přidat, kolik chcete. V telefonu: klepněte na zvíře a potom na přídavné jméno.',
    },
    negative: {
      eyebrow: 'Se záporem',
      title: 'Které zvíře takové není?',
      intro:
        'Teď naopak: přetáhněte zvíře, které tuto vlastnost <strong>nemá</strong>. I tady stačí jedno. Pozor na pasti: v liště jsou i zvířata, která ji mají.',
    },
    ui: {
      progress: 'Postup',
      progressText: '{n} z {total} přídavných jmen přiřazeno',
      set: 'Série {n} z {total}',
      tray: 'Zvířata: přetáhněte je na přídavná jména nebo na ně klepněte',
      empty: 'Pusťte sem',
      hint: 'Nápověda',
      reset: 'Začít znovu',
      correct: 'Správně!',
      wrong: 'Ještě ne. Zkuste jiné zvíře.',
      wrongNegative: 'Toto zvíře takové být může. Hledejte jiné.',
      complete: 'Výborně! Dokončili jste toto cvičení.',
      dropLabel: 'Přiřazená zvířata: {adj}',
    },
  },
  pl: {
    lessonLink: 'Nie pamiętasz jakiegoś zwierzęcia? Powtórz lekcję {link}.',
    positive: {
      eyebrow: 'Ćwiczenie z przeciąganiem',
      title: 'Które zwierzę takie jest?',
      intro:
        'Przeciągnij zwierzę na przymiotnik, który je opisuje. Przy każdym przymiotniku wystarczy znaleźć <strong>przynajmniej jedno zwierzę</strong>, ale możesz dodać ich tyle, ile chcesz. Na telefonie: dotknij zwierzęcia, a potem przymiotnika.',
    },
    negative: {
      eyebrow: 'Z przeczeniem',
      title: 'Które zwierzę takie nie jest?',
      intro:
        'Teraz odwrotnie: przeciągnij zwierzę, które <strong>nie</strong> ma tej cechy. Tu też wystarczy jedno. Uważaj na pułapki: na pasku są też zwierzęta, które ją mają.',
    },
    ui: {
      progress: 'Postęp',
      progressText: '{n} z {total} przymiotników dopasowano',
      set: 'Seria {n} z {total}',
      tray: 'Zwierzęta: przeciągnij je na przymiotniki lub dotknij',
      empty: 'Upuść tutaj',
      hint: 'Podpowiedź',
      reset: 'Zacznij od nowa',
      correct: 'Dobrze!',
      wrong: 'Jeszcze nie. Spróbuj z innym zwierzęciem.',
      wrongNegative: 'To zwierzę może być takie. Poszukaj innego.',
      complete: 'Brawo! Ukończyłeś to ćwiczenie.',
      dropLabel: 'Dopasowane zwierzęta: {adj}',
    },
  },
  tr: {
    lessonLink: 'Bir hayvanı hatırlamıyor musunuz? {link} dersini tekrar edin.',
    positive: {
      eyebrow: 'Sürükle-bırak alıştırması',
      title: 'Hangi hayvan böyledir?',
      intro:
        'Bir hayvanı onu anlatan sıfatın üzerine sürükleyin. Her sıfat için <strong>en az bir hayvan</strong> bulmanız yeterlidir, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: hayvana, sonra sıfata dokunun.',
    },
    negative: {
      eyebrow: 'Olumsuzla',
      title: 'Hangi hayvan böyle değildir?',
      intro:
        'Şimdi tersi: bu özelliğe sahip <strong>olmayan</strong> bir hayvanı sürükleyin. Burada da bir tane yeterli. Tuzaklara dikkat: çubukta bu özelliğe sahip hayvanlar da var.',
    },
    ui: {
      progress: 'İlerleme',
      progressText: '{total} sıfattan {n} tanesi eşleştirildi',
      set: '{total} setten {n}. set',
      tray: 'Hayvanlar: sıfatların üzerine sürükleyin ya da dokunun',
      empty: 'Buraya bırakın',
      hint: 'İpucu',
      reset: 'Yeniden başla',
      correct: 'Doğru!',
      wrong: 'Pek değil. Başka bir hayvan deneyin.',
      wrongNegative: 'Bu hayvan böyle olabilir. Başka birini arayın.',
      complete: 'Aferin! Bu alıştırmayı tamamladınız.',
      dropLabel: 'Eşleştirilen hayvanlar: {adj}',
    },
  },
  de: {
    lessonLink: 'Sie erinnern sich nicht an ein Tier? Wiederholen Sie die Lektion {link}.',
    positive: {
      eyebrow: 'Drag-and-drop-Übung',
      title: 'Welches Tier ist so?',
      intro:
        'Ziehen Sie ein Tier auf das Adjektiv, das es beschreibt. Für jedes Adjektiv genügt es, <strong>mindestens ein Tier</strong> zu finden, aber Sie können so viele hinzufügen, wie Sie möchten. Auf dem Handy: das Tier antippen, dann das Adjektiv antippen.',
    },
    negative: {
      eyebrow: 'Mit Verneinung',
      title: 'Welches Tier ist nicht so?',
      intro:
        'Jetzt umgekehrt: Ziehen Sie ein Tier, das diese Eigenschaft <strong>nicht</strong> hat. Auch hier genügt eins. Vorsicht, Fallen: In der Leiste sind auch Tiere, die sie haben.',
    },
    ui: {
      progress: 'Fortschritt',
      progressText: '{n} von {total} Adjektiven zugeordnet',
      set: 'Serie {n} von {total}',
      tray: 'Tiere: auf die Adjektive ziehen oder antippen',
      empty: 'Hier ablegen',
      hint: 'Tipp',
      reset: 'Neu beginnen',
      correct: 'Richtig!',
      wrong: 'Nicht ganz. Versuchen Sie ein anderes Tier.',
      wrongNegative: 'Dieses Tier kann so sein. Suchen Sie ein anderes.',
      complete: 'Gut gemacht! Sie haben diese Übung abgeschlossen.',
      dropLabel: 'Zugeordnete Tiere: {adj}',
    },
  },
  ja: {
    lessonLink: '思い出せない動物がいますか？ レッスン{link}を復習しましょう。',
    positive: {
      eyebrow: 'ドラッグ＆ドロップの練習',
      title: 'どの動物がそうですか？',
      intro:
        '動物を、それを表す形容詞の上にドラッグしてください。形容詞ごとに<strong>少なくとも 1 匹</strong>見つければ大丈夫ですが、いくつでも追加できます。スマートフォンでは、動物をタップしてから形容詞をタップします。',
    },
    negative: {
      eyebrow: '否定の形',
      title: 'どの動物がそうではありませんか？',
      intro:
        '今度は反対です。その特徴を<strong>持たない</strong>動物をドラッグしてください。ここでも 1 匹で十分です。罠に注意：バーには、その特徴を持つ動物も入っています。',
    },
    ui: {
      progress: '進み具合',
      progressText: '{total} 個中 {n} 個の形容詞を組み合わせました',
      set: 'セット {n} / {total}',
      tray: '動物：形容詞の上にドラッグするか、タップしてください',
      empty: 'ここにドロップ',
      hint: 'ヒント',
      reset: 'やり直す',
      correct: '正解です！',
      wrong: '惜しい。ほかの動物を試してください。',
      wrongNegative: 'この動物はそうなることがあります。ほかの動物を探してください。',
      complete: 'よくできました！この練習を完了しました。',
      dropLabel: '組み合わせた動物：{adj}',
    },
  },
};
