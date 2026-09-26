// Stringhe di pagina della lezione «I colori e le forme» (2026-09-26), kind 'words' con in piu' l'esercizio
// da trascinare «Descrivi l'animale» (`photoRows`: una foto per riga, le parole della lezione nella barra).
//
// `note` spiega l'accordo dei colori (rosso/rossa/rossi/rosse, verde/verdi, blu/rosa/viola invariabili,
// «verde chiaro» invariabile), azzurro e blu, e qualche modo di dire. `colorUi` sono i testi dell'esercizio;
// quelli comuni (Progresso, Serie, Suggerimento...) arrivano da `traitUi` in animals-pages.mjs.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { colorVocabulary } from './colors-vocabulary.mjs';

const N = colorVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const colorPages = {
  it: {
    dir: 'vocabolario',
    slug: 'colori-forme',
    name: 'I colori e le forme',
    title: 'I colori e le forme: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole italiane per colori, fantasie e forme — rosso, azzurro, a righe, a pois, il cerchio, la stella… — con foto di animali, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Un camaleonte verde su un ramo davanti a forme colorate: un cerchio, un quadrato, un triangolo, una stella, un cuore e un rettangolo',
    cardText: `${N} parole per colori, fantasie e forme, imparate con gli animali: il fenicottero rosa, la zebra a righe, la stella marina.`,
    note: {
      title: 'Il gatto nero, le rane verdi, i fenicotteri rosa',
      body: 'I colori si accordano con la parola che descrivono: <em>il gatto nero</em>, <em>la gatta nera</em>, <em>i gatti neri</em>, <em>le gatte nere</em>. Quelli in -e hanno due forme: <em>la rana verde</em>, <em>le rane verdi</em>; <em>l’orso marrone</em>, <em>gli orsi marroni</em>; <em>le zucche arancioni</em>. <em>Blu</em>, <em>rosa</em> e <em>viola</em> non cambiano mai: <em>le farfalle blu</em>, <em>i fenicotteri rosa</em>. Con <em>chiaro</em> e <em>scuro</em> il colore resta uguale: <em>una maglietta verde chiaro</em>, <em>le scarpe blu scuro</em>. <em>Azzurro</em> è il blu chiaro del cielo: per un italiano è un colore diverso dal <em>blu</em>. Qualche modo di dire: <em>diventare rosso come un peperone</em> (per la vergogna), <em>essere al verde</em> (senza soldi), <em>vedere tutto rosa</em> (essere ottimisti), <em>avere una fifa blu</em> (una grande paura); e <em>un giallo</em> è un romanzo poliziesco.',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-colors-and-shapes-vocabulary',
    name: 'Colours and shapes',
    title: 'Colours and shapes | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for colours, patterns and shapes — red, light blue, striped, polka-dot, circle, star… — with animal photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'A green chameleon on a branch in front of colourful shapes: a circle, a square, a triangle, a star, a heart and a rectangle',
    cardText: `${N} words for colours, patterns and shapes, learnt with animals: the pink flamingo, the striped zebra, the starfish.`,
    note: {
      title: `${it('Il gatto nero')}, ${it('le rane verdi')}, ${it('i fenicotteri rosa')}`,
      body: `Colours agree with the word they describe: ${it('il gatto nero')}, ${it('la gatta nera')}, ${it('i gatti neri')}, ${it('le gatte nere')}. Colours ending in -e have two forms: ${it('la rana verde')}, ${it('le rane verdi')}; ${it('l’orso marrone')}, ${it('gli orsi marroni')}; ${it('le zucche arancioni')}. ${it('Blu')}, ${it('rosa')} and ${it('viola')} never change: ${it('le farfalle blu')}, ${it('i fenicotteri rosa')}. With ${it('chiaro')} (light) and ${it('scuro')} (dark) the colour stays the same: ${it('una maglietta verde chiaro')}, ${it('le scarpe blu scuro')}. ${it('Azzurro')} is the light blue of the sky: for Italians it is a different colour from ${it('blu')}. Some idioms: ${it('diventare rosso come un peperone')} (to go red with embarrassment), ${it('essere al verde')} (to be broke), ${it('vedere tutto rosa')} (to see everything through rose-tinted glasses), ${it('avere una fifa blu')} (to be scared stiff); and ${it('un giallo')} is a crime novel.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-los-colores-y-las-formas-en-italiano',
    name: 'Los colores y las formas',
    title: 'Los colores y las formas | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras en italiano para colores, estampados y formas — rojo, celeste, a rayas, de lunares, el círculo, la estrella… — con fotos de animales, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Un camaleón verde en una rama delante de formas de colores: un círculo, un cuadrado, un triángulo, una estrella, un corazón y un rectángulo',
    cardText: `${N} palabras para colores, estampados y formas, aprendidas con animales: el flamenco rosa, la cebra a rayas, la estrella de mar.`,
    note: {
      title: `${it('Il gatto nero')}, ${it('le rane verdi')}, ${it('i fenicotteri rosa')}`,
      body: `Los colores concuerdan con la palabra que describen: ${it('il gatto nero')}, ${it('la gatta nera')}, ${it('i gatti neri')}, ${it('le gatte nere')}. Los que terminan en -e tienen dos formas: ${it('la rana verde')}, ${it('le rane verdi')}; ${it('l’orso marrone')}, ${it('gli orsi marroni')}; ${it('le zucche arancioni')}. ${it('Blu')}, ${it('rosa')} y ${it('viola')} no cambian nunca: ${it('le farfalle blu')}, ${it('i fenicotteri rosa')}. Con ${it('chiaro')} (claro) y ${it('scuro')} (oscuro) el color queda igual: ${it('una maglietta verde chiaro')}, ${it('le scarpe blu scuro')}. ${it('Azzurro')} es el azul claro del cielo: para un italiano es un color distinto del ${it('blu')}. Algunas expresiones: ${it('diventare rosso come un peperone')} (ponerse rojo como un tomate), ${it('essere al verde')} (estar sin blanca), ${it('vedere tutto rosa')} (verlo todo de color de rosa), ${it('avere una fifa blu')} (tener un miedo terrible); y ${it('un giallo')} es una novela policíaca.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-des-couleurs-et-des-formes-en-italien',
    name: 'Les couleurs et les formes',
    title: 'Les couleurs et les formes | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens pour les couleurs, les motifs et les formes — rouge, bleu ciel, à rayures, à pois, le cercle, l’étoile… — avec des photos d’animaux, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Un caméléon vert sur une branche devant des formes colorées : un cercle, un carré, un triangle, une étoile, un cœur et un rectangle',
    cardText: `${N} mots pour les couleurs, les motifs et les formes, appris avec les animaux : le flamant rose, le zèbre à rayures, l’étoile de mer.`,
    note: {
      title: `${it('Il gatto nero')}, ${it('le rane verdi')}, ${it('i fenicotteri rosa')}`,
      body: `Les couleurs s’accordent avec le mot qu’elles décrivent : ${it('il gatto nero')}, ${it('la gatta nera')}, ${it('i gatti neri')}, ${it('le gatte nere')}. Celles en -e ont deux formes : ${it('la rana verde')}, ${it('le rane verdi')} ; ${it('l’orso marrone')}, ${it('gli orsi marroni')} ; ${it('le zucche arancioni')}. ${it('Blu')}, ${it('rosa')} et ${it('viola')} ne changent jamais : ${it('le farfalle blu')}, ${it('i fenicotteri rosa')}. Avec ${it('chiaro')} (clair) et ${it('scuro')} (foncé), la couleur reste invariable : ${it('una maglietta verde chiaro')}, ${it('le scarpe blu scuro')}. ${it('Azzurro')} est le bleu clair du ciel : pour un Italien, c’est une autre couleur que le ${it('blu')}. Quelques expressions : ${it('diventare rosso come un peperone')} (rougir comme une tomate), ${it('essere al verde')} (être fauché), ${it('vedere tutto rosa')} (voir la vie en rose), ${it('avere una fifa blu')} (avoir une peur bleue) ; et ${it('un giallo')} est un roman policier.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-barvy-a-tvary',
    name: 'Barvy a tvary',
    title: 'Barvy a tvary | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov pro barvy, vzory a tvary — červená, blankytná, pruhovaný, puntíkovaný, kruh, hvězda… — s fotografiemi zvířat, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Zelený chameleon na větvi před barevnými tvary: kruh, čtverec, trojúhelník, hvězda, srdce a obdélník',
    cardText: `${N} slov pro barvy, vzory a tvary, naučených se zvířaty: růžový plameňák, pruhovaná zebra, mořská hvězdice.`,
    note: {
      title: `${it('Il gatto nero')}, ${it('le rane verdi')}, ${it('i fenicotteri rosa')}`,
      body: `Barvy se shodují se slovem, které popisují: ${it('il gatto nero')}, ${it('la gatta nera')}, ${it('i gatti neri')}, ${it('le gatte nere')}. Barvy zakončené na -e mají dva tvary: ${it('la rana verde')}, ${it('le rane verdi')}; ${it('l’orso marrone')}, ${it('gli orsi marroni')}; ${it('le zucche arancioni')}. ${it('Blu')}, ${it('rosa')} a ${it('viola')} se nemění nikdy: ${it('le farfalle blu')}, ${it('i fenicotteri rosa')}. S ${it('chiaro')} (světlý) a ${it('scuro')} (tmavý) zůstává barva beze změny: ${it('una maglietta verde chiaro')}, ${it('le scarpe blu scuro')}. ${it('Azzurro')} je světle modrá barva nebe: pro Italy je to jiná barva než ${it('blu')}. Několik rčení: ${it('diventare rosso come un peperone')} (zčervenat jako rak), ${it('essere al verde')} (být na mizině), ${it('vedere tutto rosa')} (vidět vše růžově), ${it('avere una fifa blu')} (mít strach jako trám); a ${it('un giallo')} je detektivka.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-kolory-i-ksztalty',
    name: 'Kolory i kształty',
    title: 'Kolory i kształty | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o kolorach, wzorach i kształtach — czerwony, błękitny, w paski, w groszki, koło, gwiazda… — ze zdjęciami zwierząt, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Zielony kameleon na gałęzi przed kolorowymi kształtami: koło, kwadrat, trójkąt, gwiazda, serce i prostokąt',
    cardText: `${N} słów o kolorach, wzorach i kształtach, poznanych ze zwierzętami: różowy flaming, zebra w paski, rozgwiazda.`,
    note: {
      title: `${it('Il gatto nero')}, ${it('le rane verdi')}, ${it('i fenicotteri rosa')}`,
      body: `Kolory zgadzają się ze słowem, które opisują: ${it('il gatto nero')}, ${it('la gatta nera')}, ${it('i gatti neri')}, ${it('le gatte nere')}. Kolory zakończone na -e mają dwie formy: ${it('la rana verde')}, ${it('le rane verdi')}; ${it('l’orso marrone')}, ${it('gli orsi marroni')}; ${it('le zucche arancioni')}. ${it('Blu')}, ${it('rosa')} i ${it('viola')} nie zmieniają się nigdy: ${it('le farfalle blu')}, ${it('i fenicotteri rosa')}. Z ${it('chiaro')} (jasny) i ${it('scuro')} (ciemny) kolor się nie zmienia: ${it('una maglietta verde chiaro')}, ${it('le scarpe blu scuro')}. ${it('Azzurro')} to jasnoniebieski kolor nieba: dla Włocha to inny kolor niż ${it('blu')}. Kilka wyrażeń: ${it('diventare rosso come un peperone')} (zaczerwienić się jak burak), ${it('essere al verde')} (być bez grosza), ${it('vedere tutto rosa')} (widzieć świat w różowych barwach), ${it('avere una fifa blu')} (strasznie się bać); a ${it('un giallo')} to kryminał.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-renkler-ve-sekiller-kelimeleri',
    name: 'Renkler ve şekiller',
    title: 'Renkler ve şekiller | İtalyanca kelimeler | Italiano con Martin',
    description: `Renkler, desenler ve şekiller için ${N} İtalyanca kelime öğrenin — kırmızı, açık mavi, çizgili, puantiyeli, daire, yıldız… — hayvan fotoğrafları, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Renkli şekillerin önünde bir dalda duran yeşil bir bukalemun: daire, kare, üçgen, yıldız, kalp ve dikdörtgen',
    cardText: `Hayvanlarla öğrenilen renkler, desenler ve şekiller için ${N} kelime: pembe flamingo, çizgili zebra, denizyıldızı.`,
    note: {
      title: `${it('Il gatto nero')}, ${it('le rane verdi')}, ${it('i fenicotteri rosa')}`,
      body: `Renkler, niteledikleri kelimeye uyum sağlar: ${it('il gatto nero')}, ${it('la gatta nera')}, ${it('i gatti neri')}, ${it('le gatte nere')}. -e ile bitenlerin iki biçimi vardır: ${it('la rana verde')}, ${it('le rane verdi')}; ${it('l’orso marrone')}, ${it('gli orsi marroni')}; ${it('le zucche arancioni')}. ${it('Blu')}, ${it('rosa')} ve ${it('viola')} hiç değişmez: ${it('le farfalle blu')}, ${it('i fenicotteri rosa')}. ${it('Chiaro')} (açık) ve ${it('scuro')} (koyu) ile renk aynı kalır: ${it('una maglietta verde chiaro')}, ${it('le scarpe blu scuro')}. ${it('Azzurro')} gökyüzünün açık mavisidir: bir İtalyan için ${it('blu')}dan farklı bir renktir. Birkaç deyim: ${it('diventare rosso come un peperone')} (utançtan kıpkırmızı olmak), ${it('essere al verde')} (meteliksiz olmak), ${it('vedere tutto rosa')} (her şeyi pembe görmek), ${it('avere una fifa blu')} (ödü kopmak); ve ${it('un giallo')} bir polisiye romandır.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-farben-und-formen',
    name: 'Farben und Formen',
    title: 'Farben und Formen | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für Farben, Muster und Formen — rot, hellblau, gestreift, gepunktet, der Kreis, der Stern … — mit Tierfotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Ein grünes Chamäleon auf einem Ast vor bunten Formen: ein Kreis, ein Quadrat, ein Dreieck, ein Stern, ein Herz und ein Rechteck',
    cardText: `${N} Wörter für Farben, Muster und Formen, gelernt mit Tieren: der rosa Flamingo, das gestreifte Zebra, der Seestern.`,
    note: {
      title: `${it('Il gatto nero')}, ${it('le rane verdi')}, ${it('i fenicotteri rosa')}`,
      body: `Farben richten sich nach dem Wort, das sie beschreiben: ${it('il gatto nero')}, ${it('la gatta nera')}, ${it('i gatti neri')}, ${it('le gatte nere')}. Farben auf -e haben zwei Formen: ${it('la rana verde')}, ${it('le rane verdi')}; ${it('l’orso marrone')}, ${it('gli orsi marroni')}; ${it('le zucche arancioni')}. ${it('Blu')}, ${it('rosa')} und ${it('viola')} ändern sich nie: ${it('le farfalle blu')}, ${it('i fenicotteri rosa')}. Mit ${it('chiaro')} (hell) und ${it('scuro')} (dunkel) bleibt die Farbe unverändert: ${it('una maglietta verde chiaro')}, ${it('le scarpe blu scuro')}. ${it('Azzurro')} ist das Hellblau des Himmels: Für Italiener ist es eine andere Farbe als ${it('blu')}. Ein paar Redewendungen: ${it('diventare rosso come un peperone')} (rot werden wie eine Tomate), ${it('essere al verde')} (pleite sein), ${it('vedere tutto rosa')} (alles durch die rosarote Brille sehen), ${it('avere una fifa blu')} (eine Heidenangst haben); und ${it('un giallo')} ist ein Krimi.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-colors-and-shapes-vocabulary',
    name: '色と形',
    title: '色と形 | イタリア語の語彙 | Italiano con Martin',
    description: `赤、水色、しま模様、水玉模様、円、星など、色・模様・形を表すイタリア語 ${N} 語を、動物の写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: 'カラフルな形（円、正方形、三角形、星、ハート、長方形）の前で枝にとまる緑色のカメレオン',
    cardText: `動物と一緒に覚える色・模様・形の ${N} 語。ピンクのフラミンゴ、しま模様のシマウマ、ヒトデ。`,
    note: {
      title: `${it('Il gatto nero')}、${it('le rane verdi')}、${it('i fenicotteri rosa')}`,
      body: `色の形容詞は、説明する名詞の性と数に合わせて変わります：${it('il gatto nero')}、${it('la gatta nera')}、${it('i gatti neri')}、${it('le gatte nere')}。-e で終わる色は 2 つの形です：${it('la rana verde')} → ${it('le rane verdi')}、${it('l’orso marrone')} → ${it('gli orsi marroni')}、${it('le zucche arancioni')}。${it('Blu')}、${it('rosa')}、${it('viola')} は決して変わりません：${it('le farfalle blu')}、${it('i fenicotteri rosa')}。${it('chiaro')}（明るい）や ${it('scuro')}（暗い）がつくと色は変化しません：${it('una maglietta verde chiaro')}、${it('le scarpe blu scuro')}。${it('Azzurro')} は空の水色で、イタリア人にとっては ${it('blu')} とは別の色です。慣用句もいくつか：${it('diventare rosso come un peperone')}（恥ずかしくて真っ赤になる）、${it('essere al verde')}（一文なしだ）、${it('vedere tutto rosa')}（何でも楽観的に見る）、${it('avere una fifa blu')}（ひどく怖がる）。そして ${it('un giallo')} は推理小説のことです。`,
    },
  },
};

// --- i testi dell'esercizio «Descrivi l'animale» --------------------------------------------

export const colorUi = {
  it: {
    positive: {
      eyebrow: 'Esercizio con trascinamento',
      title: 'Descrivi l’animale: di che colore è? Com’è?',
      intro:
        'Trascina sulla foto una parola che la descrive: un colore, una fantasia o una forma. Spesso ne vanno bene <strong>più di una</strong> (la tigre è arancione, nera e a righe): basta trovarne una, ma puoi aggiungerne quante vuoi. Sul telefono: tocca la parola, poi tocca la foto.',
    },
    ui: {
      progressText: '{n} di {total} animali descritti',
      tray: 'Parole: trascinale sulle foto o toccale',
      wrong: 'Non proprio. Guarda meglio l’animale e prova un’altra parola.',
      dropLabel: 'Parole per la foto {adj}',
    },
  },
  en: {
    positive: {
      eyebrow: 'Drag-and-drop exercise',
      title: 'Describe the animal: what colour is it? What is it like?',
      intro:
        'Drag a word that describes the photo onto it: a colour, a pattern or a shape. Often <strong>more than one</strong> fits (the tiger is <em lang="it">arancione</em>, <em lang="it">nera</em> and <em lang="it">a righe</em>): one is enough, but you can add as many as you like. On a phone: tap the word, then tap the photo.',
    },
    ui: {
      progressText: '{n} of {total} animals described',
      tray: 'Words: drag them onto the photos or tap them',
      wrong: 'Not quite. Look at the animal again and try another word.',
      dropLabel: 'Words for photo {adj}',
    },
  },
  es: {
    positive: {
      eyebrow: 'Ejercicio de arrastrar',
      title: 'Describe el animal: ¿de qué color es? ¿Cómo es?',
      intro:
        'Arrastra hasta la foto una palabra que la describa: un color, un estampado o una forma. A menudo sirve <strong>más de una</strong> (el tigre es <em lang="it">arancione</em>, <em lang="it">nera</em> y <em lang="it">a righe</em>): basta con una, pero puedes añadir todas las que quieras. En el móvil: toca la palabra y luego toca la foto.',
    },
    ui: {
      progressText: '{n} de {total} animales descritos',
      tray: 'Palabras: arrástralas a las fotos o tócalas',
      wrong: 'No exactamente. Mira bien el animal y prueba otra palabra.',
      dropLabel: 'Palabras para la foto {adj}',
    },
  },
  fr: {
    positive: {
      eyebrow: 'Exercice à glisser-déposer',
      title: 'Décris l’animal : de quelle couleur est-il ? Comment est-il ?',
      intro:
        'Fais glisser sur la photo un mot qui la décrit : une couleur, un motif ou une forme. Souvent, <strong>plusieurs mots</strong> conviennent (le tigre est <em lang="it">arancione</em>, <em lang="it">nera</em> et <em lang="it">a righe</em>) : un seul suffit, mais tu peux en ajouter autant que tu veux. Sur téléphone : touche le mot, puis touche la photo.',
    },
    ui: {
      progressText: '{n} animaux décrits sur {total}',
      tray: 'Mots : fais-les glisser sur les photos ou touche-les',
      wrong: 'Pas tout à fait. Regarde bien l’animal et essaie un autre mot.',
      dropLabel: 'Mots pour la photo {adj}',
    },
  },
  cs: {
    positive: {
      eyebrow: 'Cvičení s přetahováním',
      title: 'Popiš zvíře: jakou má barvu? Jaké je?',
      intro:
        'Přetáhni na fotku slovo, které ji popisuje: barvu, vzor nebo tvar. Často se hodí <strong>víc slov</strong> (tygr je <em lang="it">arancione</em>, <em lang="it">nera</em> i <em lang="it">a righe</em>): stačí najít jedno, ale můžeš jich přidat, kolik chceš. Na telefonu: klepni na slovo a pak na fotku.',
    },
    ui: {
      progressText: 'Popsáno {n} z {total} zvířat',
      tray: 'Slova: přetáhni je na fotky nebo na ně klepni',
      wrong: 'Ne tak docela. Podívej se na zvíře znovu a zkus jiné slovo.',
      dropLabel: 'Slova pro fotku {adj}',
    },
  },
  pl: {
    positive: {
      eyebrow: 'Ćwiczenie z przeciąganiem',
      title: 'Opisz zwierzę: jakiego jest koloru? Jakie jest?',
      intro:
        'Przeciągnij na zdjęcie słowo, które je opisuje: kolor, wzór albo kształt. Często pasuje <strong>kilka słów</strong> (tygrys jest <em lang="it">arancione</em>, <em lang="it">nera</em> i <em lang="it">a righe</em>): wystarczy jedno, ale możesz dodać ich tyle, ile chcesz. Na telefonie: dotknij słowa, a potem zdjęcia.',
    },
    ui: {
      progressText: 'Opisane zwierzęta: {n} z {total}',
      tray: 'Słowa: przeciągnij je na zdjęcia albo ich dotknij',
      wrong: 'Nie całkiem. Przyjrzyj się zwierzęciu i spróbuj innego słowa.',
      dropLabel: 'Słowa do zdjęcia {adj}',
    },
  },
  tr: {
    positive: {
      eyebrow: 'Sürükle-bırak alıştırması',
      title: 'Hayvanı tarif et: ne renk? Nasıl?',
      intro:
        'Fotoğrafı tarif eden bir kelimeyi üzerine sürükle: bir renk, bir desen ya da bir şekil. Çoğu zaman <strong>birden fazla kelime</strong> uyar (kaplan <em lang="it">arancione</em>, <em lang="it">nera</em> ve <em lang="it">a righe</em>): birini bulmak yeter, ama istediğin kadar ekleyebilirsin. Telefonda: önce kelimeye, sonra fotoğrafa dokun.',
    },
    ui: {
      progressText: '{total} hayvandan {n} tanesi tarif edildi',
      tray: 'Kelimeler: fotoğraflara sürükle ya da dokun',
      wrong: 'Tam değil. Hayvana tekrar bak ve başka bir kelime dene.',
      dropLabel: '{adj}. fotoğraf için kelimeler',
    },
  },
  de: {
    positive: {
      eyebrow: 'Übung mit Ziehen und Ablegen',
      title: 'Beschreibe das Tier: Welche Farbe hat es? Wie ist es?',
      intro:
        'Zieh ein Wort, das das Foto beschreibt, auf das Foto: eine Farbe, ein Muster oder eine Form. Oft passen <strong>mehrere Wörter</strong> (der Tiger ist <em lang="it">arancione</em>, <em lang="it">nera</em> und <em lang="it">a righe</em>): eines genügt, aber du kannst so viele hinzufügen, wie du willst. Auf dem Handy: erst das Wort antippen, dann das Foto.',
    },
    ui: {
      progressText: '{n} von {total} Tieren beschrieben',
      tray: 'Wörter: auf die Fotos ziehen oder antippen',
      wrong: 'Nicht ganz. Schau dir das Tier noch einmal an und probier ein anderes Wort.',
      dropLabel: 'Wörter für Foto {adj}',
    },
  },
  ja: {
    positive: {
      eyebrow: 'ドラッグ＆ドロップの練習',
      title: '動物を説明しよう：何色？どんな形？',
      intro:
        '写真を説明する言葉（色・模様・形）を写真の上にドラッグしてください。<strong>複数の言葉</strong>が合うことがよくあります（トラは <em lang="it">arancione</em>、<em lang="it">nera</em>、<em lang="it">a righe</em>）。1 つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、言葉をタップしてから写真をタップします。',
    },
    ui: {
      progressText: '{total} 匹中 {n} 匹を説明しました',
      tray: '言葉：写真にドラッグするか、タップしてください',
      wrong: '少し違います。動物をよく見て、別の言葉を試してください。',
      dropLabel: '写真 {adj} の言葉',
    },
  },
};
