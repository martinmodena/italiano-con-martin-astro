// Stringhe di pagina della lezione «Dov'è il gatto? Sopra, sotto, dentro, fuori» (2026-11-02), kind 'words'
// con in piu' l'esercizio da trascinare «Dov'e' il gattino?», come i colori.
//
// `note` non e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29: le pagine non sono
// traduzioni). In tutte: davanti a / vicino a / lontano da con la preposizione articolata (davanti alla
// porta), sopra e su; poi la trappola della lingua dello studente (in front of / opposite per l'inglese,
// i casi per cechi e polacchi, le posposizioni del turco e del giapponese...).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { placeVocabulary } from './places-vocabulary.mjs';

const N = placeVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const placePages = {
  it: {
    dir: 'vocabolario',
    slug: 'dove-si-trova',
    name: 'Dov’è il gatto? Sopra, sotto, dentro, fuori',
    title: 'Sopra, sotto, dentro, fuori: le parole del luogo in italiano | Italiano con Martin',
    description: `Impara ${N} parole italiane per dire dove si trova una cosa — sopra, sotto, dentro, davanti a, accanto a, tra, in fondo a… — con foto di animali, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt: 'Un gatto rosso che sbuca da una scatola di cartone sul pavimento di una cucina italiana',
    cardText: `${N} parole per dire dove si trova qualcosa, imparate con gli animali: il gatto sopra la scatola, il cane sotto il tavolo, la capra in cima alla roccia.`,
    note: {
      title: 'Davanti alla porta, vicino al mare, lontano dal centro',
      body: 'Molte di queste parole vogliono una preposizione: <em>davanti a</em>, <em>accanto a</em>, <em>vicino a</em>, <em>di fronte a</em>, <em>intorno a</em>, <em>in mezzo a</em>, <em>in cima a</em>, <em>in fondo a</em>, ma <em>lontano da</em>. Con l’articolo diventano <em>davanti alla porta</em>, <em>vicino al mare</em>, <em>lontano dal centro</em>. <em>Sopra</em>, <em>sotto</em>, <em>dentro</em> e <em>dietro</em> vanno anche da sole: <em>sopra il tavolo</em>, <em>sotto il letto</em>; con i pronomi si dice <em>dietro di me</em>, <em>sopra di noi</em>. <em>Su</em> e <em>in</em> sono le forme brevi e più comuni: <em>sul tavolo</em>, <em>nella borsa</em>. Il confronto con l’inglese: <em>di fronte a</em> non è <em>in front of</em> (che è <em>davanti a</em>), ma <em>opposite</em>: <em>la banca è di fronte alla posta</em>, cioè dall’altra parte della strada. E <em>in fondo</em> vuol dire sia <em>at the bottom</em> (<em>in fondo al mare</em>) sia <em>at the end</em> (<em>in fondo al corridoio</em>).',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-prepositions-of-place-vocabulary',
    name: 'Where is the cat? Prepositions of place',
    title: 'Prepositions of place in Italian: on, under, in, behind | Italiano con Martin',
    description: `Learn ${N} Italian words to say where things are — on, under, inside, in front of, next to, between, at the bottom of… — with animal photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'A ginger cat peeking out of a cardboard box on the floor of an Italian kitchen',
    cardText: `${N} words to say where something is, learnt with animals: the cat on the box, the dog under the table, the goat on top of the rock.`,
    note: {
      title: `${it('Davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}`,
      body: `Many of these words need a preposition after them: ${it('davanti a')} (in front of), ${it('accanto a')}, ${it('vicino a')}, ${it('di fronte a')}, ${it('intorno a')}, ${it('in mezzo a')}, ${it('in cima a')}, ${it('in fondo a')}, but ${it('lontano da')} (far from). With the article they merge: ${it('davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}. ${it('Sopra')}, ${it('sotto')}, ${it('dentro')} and ${it('dietro')} also work alone: ${it('sopra il tavolo')}, ${it('sotto il letto')}; with pronouns you say ${it('dietro di me')} (behind me). ${it('Su')} and ${it('in')} are the short, most common forms: ${it('sul tavolo')}, ${it('nella borsa')}. <strong>The trap for English speakers:</strong> ${it('di fronte a')} is not “in front of” (that is ${it('davanti a')}) but “opposite”: ${it('la banca è di fronte alla posta')} means the bank is across the street from the post office. And ${it('in fondo')} means both “at the bottom” (${it('in fondo al mare')}) and “at the end” (${it('in fondo al corridoio')}).`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'preposiciones-de-lugar-en-italiano',
    name: '¿Dónde está el gato? Las preposiciones de lugar',
    title: 'Preposiciones de lugar en italiano: encima, debajo, dentro, detrás | Italiano con Martin',
    description: `Aprende ${N} palabras en italiano para decir dónde está algo — encima, debajo, dentro, delante de, al lado de, entre, al fondo de… — con fotos de animales, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'Un gato naranja que asoma de una caja de cartón en el suelo de una cocina italiana',
    cardText: `${N} palabras para decir dónde está algo, aprendidas con animales: el gato encima de la caja, el perro debajo de la mesa, la cabra en lo alto de la roca.`,
    note: {
      title: `${it('Davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}`,
      body: `Muchas de estas palabras llevan una preposición: ${it('davanti a')}, ${it('accanto a')}, ${it('vicino a')}, ${it('di fronte a')}, ${it('intorno a')}, ${it('in mezzo a')}, ${it('in cima a')}, ${it('in fondo a')}, pero ${it('lontano da')}. <strong>La trampa para hispanohablantes:</strong> donde el español usa «de» (delante de, cerca de, al lado de, encima de), el italiano usa ${it('a')}: ${it('davanti alla porta')}, ${it('vicino al mare')}, ${it('accanto al bar')}. Solo «lejos de» se queda con ${it('da')}: ${it('lontano dal centro')}. ${it('Sopra')}, ${it('sotto')}, ${it('dentro')} y ${it('dietro')} van sin preposición: ${it('sopra il tavolo')} (encima de la mesa), ${it('sotto il letto')}. Ojo también con ${it('di fronte a')}: es «enfrente de», no «delante de» (${it('davanti a')}). Y ${it('in fondo al corridoio')} es «al fondo del pasillo», como en español.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'les-prepositions-de-lieu-en-italien',
    name: 'Où est le chat ? Les prépositions de lieu',
    title: 'Les prépositions de lieu en italien : sur, sous, dans, derrière | Italiano con Martin',
    description: `Apprenez ${N} mots italiens pour dire où se trouve une chose — sur, sous, dans, devant, à côté de, entre, au fond de… — avec des photos d’animaux, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Un chat roux qui sort la tête d’un carton sur le sol d’une cuisine italienne',
    cardText: `${N} mots pour dire où se trouve quelque chose, appris avec les animaux : le chat sur le carton, le chien sous la table, la chèvre en haut du rocher.`,
    note: {
      title: `${it('Davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}`,
      body: `Beaucoup de ces mots demandent une préposition : ${it('davanti a')}, ${it('accanto a')}, ${it('vicino a')}, ${it('di fronte a')}, ${it('intorno a')}, ${it('in mezzo a')}, ${it('in cima a')}, ${it('in fondo a')}, mais ${it('lontano da')}. <strong>Le piège pour un francophone :</strong> là où le français dit « de » (à côté de, près de, en face de, autour de), l’italien dit ${it('a')} : ${it('accanto al bar')}, ${it('vicino al mare')}, ${it('di fronte alla posta')}. Seul « loin de » garde ${it('da')} : ${it('lontano dal centro')}. Et « devant » prend aussi ${it('a')} : ${it('davanti alla porta')}. ${it('Sopra')}, ${it('sotto')}, ${it('dentro')} et ${it('dietro')} s’utilisent sans préposition : ${it('sopra il tavolo')}, ${it('sotto il letto')} ; avec un pronom on dit ${it('dietro di me')} (derrière moi). ${it('In fondo al corridoio')} se dit exactement comme « au fond du couloir ».`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-urceni-mista',
    name: 'Kde je kočka? Určení místa',
    title: 'Předložky místa v italštině: na, pod, v, za | Italiano con Martin',
    description: `Naučte se ${N} italských slov, kterými řeknete, kde něco je — na, pod, uvnitř, před, vedle, mezi, na dně… — s fotografiemi zvířat, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Zrzavá kočka vykukuje z kartonové krabice na podlaze italské kuchyně',
    cardText: `${N} slov, kterými řeknete, kde něco je, naučených se zvířaty: kočka na krabici, pes pod stolem, koza na vrcholu skály.`,
    note: {
      title: `${it('Davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}`,
      body: `Mnohá z těchto slov potřebují předložku: ${it('davanti a')}, ${it('accanto a')}, ${it('vicino a')}, ${it('di fronte a')}, ${it('intorno a')}, ${it('in mezzo a')}, ${it('in cima a')}, ${it('in fondo a')}, ale ${it('lontano da')}. Se členem se spojí: ${it('davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}. <strong>Co je pro Čechy jinak:</strong> čeština mění koncovku podstatného jména (pod stol<strong>em</strong>, před nádraž<strong>ím</strong>, vedle bank<strong>y</strong>), italština ne: podstatné jméno zůstává stejné a mění se jen předložka se členem. ${it('Sotto il tavolo')}, ${it('davanti alla stazione')}, ${it('accanto alla banca')}. A česká „na“ a „v“ nemají vždy stejný italský protějšek: ${it('sul tavolo')} (na stole), ${it('nella borsa')} (v tašce), ale ${it('in piazza')} (na náměstí). ${it('Di fronte a')} znamená „naproti“, ne „před“ (${it('davanti a')}).`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-okreslenia-miejsca',
    name: 'Gdzie jest kot? Określenia miejsca',
    title: 'Przyimki miejsca po włosku: na, pod, w, za | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów, którymi powiesz, gdzie coś jest — na, pod, w środku, przed, obok, między, na dnie… — ze zdjęciami zwierząt, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Rudy kot wygląda z kartonowego pudełka na podłodze włoskiej kuchni',
    cardText: `${N} słów, którymi powiesz, gdzie coś jest, poznanych ze zwierzętami: kot na pudełku, pies pod stołem, koza na szczycie skały.`,
    note: {
      title: `${it('Davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}`,
      body: `Wiele z tych słów wymaga przyimka: ${it('davanti a')}, ${it('accanto a')}, ${it('vicino a')}, ${it('di fronte a')}, ${it('intorno a')}, ${it('in mezzo a')}, ${it('in cima a')}, ${it('in fondo a')}, ale ${it('lontano da')}. Z rodzajnikiem łączą się w jedno: ${it('davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}. <strong>Co jest dla Polaka inaczej:</strong> polski zmienia końcówkę rzeczownika (pod stoł<strong>em</strong>, przed dworc<strong>em</strong>, obok bank<strong>u</strong>), włoski nie: rzeczownik zostaje taki sam, a zmienia się tylko przyimek z rodzajnikiem. ${it('Sotto il tavolo')}, ${it('davanti alla stazione')}, ${it('accanto alla banca')}. Polskie „na” i „w” nie zawsze mają ten sam odpowiednik: ${it('sul tavolo')} (na stole), ${it('nella borsa')} (w torbie), ale ${it('in piazza')} (na placu). ${it('Di fronte a')} znaczy „naprzeciwko”, nie „przed” (${it('davanti a')}).`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-yer-bildiren-kelimeler',
    name: 'Kedi nerede? Yer bildiren kelimeler',
    title: 'İtalyancada yer bildiren kelimeler: üstünde, altında, içinde | Italiano con Martin',
    description: `Bir şeyin nerede olduğunu söylemek için ${N} İtalyanca kelime öğrenin — üstünde, altında, içinde, önünde, yanında, arasında, dibinde… — hayvan fotoğrafları, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'İtalyan mutfağının zemininde karton bir kutudan başını çıkaran turuncu bir kedi',
    cardText: `Hayvanlarla öğrenilen, bir şeyin nerede olduğunu söyleyen ${N} kelime: kutunun üstündeki kedi, masanın altındaki köpek, kayanın tepesindeki keçi.`,
    note: {
      title: `${it('Davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}`,
      body: `<strong>Türkçeden en büyük fark sıradır:</strong> Türkçe yer bildiren kelimeyi ismin <strong>arkasına</strong> koyar (masanın altında, kapının önünde), İtalyanca ise <strong>önüne</strong>: ${it('sotto il tavolo')}, ${it('davanti alla porta')}. Yani İtalyancayı Türkçeye göre “tersten” kurarsınız: önce yer, sonra şey. Bu kelimelerin çoğu bir edat ister: ${it('davanti a')}, ${it('accanto a')}, ${it('vicino a')}, ${it('di fronte a')}, ${it('intorno a')}, ${it('in mezzo a')}, ${it('in cima a')}, ${it('in fondo a')}, ama ${it('lontano da')} (-den uzakta). Tanımlıkla birleşirler: ${it('davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}. ${it('Sopra')}, ${it('sotto')}, ${it('dentro')} ve ${it('dietro')} tek başına da kullanılır: ${it('sopra il tavolo')}, ${it('sotto il letto')}. ${it('Di fronte a')} “karşısında”, ${it('davanti a')} ise “önünde” demektir.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-ortsangaben',
    name: 'Wo ist die Katze? Ortsangaben',
    title: 'Ortsangaben auf Italienisch: auf, unter, in, hinter | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter, um zu sagen, wo etwas ist — auf, unter, in, vor, neben, zwischen, am Grund … — mit Tierfotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Eine rote Katze schaut auf dem Boden einer italienischen Küche aus einem Karton',
    cardText: `${N} Wörter, um zu sagen, wo etwas ist, gelernt mit Tieren: die Katze auf dem Karton, der Hund unter dem Tisch, die Ziege oben auf dem Felsen.`,
    note: {
      title: `${it('Davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}`,
      body: `Viele dieser Wörter brauchen eine Präposition: ${it('davanti a')}, ${it('accanto a')}, ${it('vicino a')}, ${it('di fronte a')}, ${it('intorno a')}, ${it('in mezzo a')}, ${it('in cima a')}, ${it('in fondo a')}, aber ${it('lontano da')}. Mit dem Artikel verschmelzen sie: ${it('davanti alla porta')}, ${it('vicino al mare')}, ${it('lontano dal centro')}. <strong>Was für Deutschsprachige einfacher ist:</strong> Es gibt keinen Unterschied zwischen „wo?“ und „wohin?“, keinen Dativ und Akkusativ: ${it('sotto il tavolo')} heißt „unter dem Tisch“ und „unter den Tisch“. Dafür braucht man das richtige ${it('a')} oder ${it('da')}. ${it('Sopra')}, ${it('sotto')}, ${it('dentro')} und ${it('dietro')} gehen auch allein: ${it('sopra il tavolo')}, ${it('sotto il letto')}; mit Pronomen ${it('dietro di me')} (hinter mir). ${it('Di fronte a')} heißt „gegenüber“, „vor“ ist ${it('davanti a')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-prepositions-of-place-vocabulary',
    name: '猫はどこ？場所を表す言葉',
    title: 'イタリア語の場所を表す言葉：上、下、中、後ろ | Italiano con Martin',
    description: `上、下、中、前、隣、間、底など、物がどこにあるかを表すイタリア語 ${N} 語を、動物の写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: 'イタリアの台所の床で、段ボール箱から顔を出す茶トラの猫',
    cardText: `動物と一緒に覚える、場所を表す ${N} 語。箱の上の猫、テーブルの下の犬、岩のてっぺんのヤギ。`,
    note: {
      title: `${it('Davanti alla porta')}、${it('vicino al mare')}、${it('lontano dal centro')}`,
      body: `<strong>日本語といちばん違うのは語順です。</strong>日本語は「テーブルの下に」「ドアの前に」と、場所を表す言葉が名詞の<strong>後ろ</strong>に来ますが、イタリア語は<strong>前</strong>に来ます：${it('sotto il tavolo')}（テーブルの下に）、${it('davanti alla porta')}（ドアの前に）。「の」の代わりに前置詞が入る言葉も多いです：${it('davanti a')}、${it('accanto a')}、${it('vicino a')}、${it('di fronte a')}、${it('intorno a')}、${it('in mezzo a')}、${it('in cima a')}、${it('in fondo a')}。ただし「〜から遠く」は ${it('lontano da')} です。冠詞と合わさると ${it('davanti alla porta')}、${it('vicino al mare')}、${it('lontano dal centro')} になります。${it('Sopra')}、${it('sotto')}、${it('dentro')}、${it('dietro')} は前置詞なしでも使えます：${it('sopra il tavolo')}、${it('sotto il letto')}。${it('Di fronte a')} は「向かいに」、「前に」は ${it('davanti a')} です。`,
    },
  },
};

// --- i testi dell'esercizio «Dov'e' il gattino?» ---------------------------------------------

export const placeUi = {
  it: {
    positive: {
      eyebrow: 'Esercizio con trascinamento',
      title: 'Dov’è il gattino?',
      intro:
        'Trascina sulla foto una parola che dice dove si trova il gattino. Spesso ne vanno bene <strong>più di una</strong> (sopra l’armadio è anche in alto e in cima): basta trovarne una, ma puoi aggiungerne quante vuoi. Sul telefono: tocca la parola, poi tocca la foto.',
    },
    ui: {
      progressText: '{n} di {total} foto descritte',
      tray: 'Parole: trascinale sulle foto o toccale',
      wrong: 'Non proprio. Guarda bene dov’è il gattino e prova un’altra parola.',
      dropLabel: 'Parole per la foto {adj}',
    },
  },
  en: {
    positive: {
      eyebrow: 'Drag-and-drop exercise',
      title: 'Where is the kitten?',
      intro:
        'Drag onto the photo a word that says where the kitten is. Often <strong>more than one</strong> fits (on top of the wardrobe is also <em lang="it">in alto</em> and <em lang="it">in cima</em>): one is enough, but you can add as many as you like. On a phone: tap the word, then tap the photo.',
    },
    ui: {
      progressText: '{n} of {total} photos described',
      tray: 'Words: drag them onto the photos or tap them',
      wrong: 'Not quite. Look carefully at where the kitten is and try another word.',
      dropLabel: 'Words for photo {adj}',
    },
  },
  es: {
    positive: {
      eyebrow: 'Ejercicio de arrastrar',
      title: '¿Dónde está el gatito?',
      intro:
        'Arrastra hasta la foto una palabra que diga dónde está el gatito. A menudo sirve <strong>más de una</strong> (encima del armario también es <em lang="it">in alto</em> e <em lang="it">in cima</em>): basta con una, pero puedes añadir todas las que quieras. En el móvil: toca la palabra y luego toca la foto.',
    },
    ui: {
      progressText: '{n} de {total} fotos descritas',
      tray: 'Palabras: arrástralas a las fotos o tócalas',
      wrong: 'No exactamente. Mira bien dónde está el gatito y prueba otra palabra.',
      dropLabel: 'Palabras para la foto {adj}',
    },
  },
  fr: {
    positive: {
      eyebrow: 'Exercice à glisser-déposer',
      title: 'Où est le chaton ?',
      intro:
        'Faites glisser sur la photo un mot qui dit où se trouve le chaton. Souvent, <strong>plusieurs mots</strong> conviennent (sur l’armoire, c’est aussi <em lang="it">in alto</em> et <em lang="it">in cima</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le mot, puis la photo.',
    },
    ui: {
      progressText: '{n} photos décrites sur {total}',
      tray: 'Mots : faites-les glisser sur les photos ou touchez-les',
      wrong: 'Pas tout à fait. Regardez bien où est le chaton et essayez un autre mot.',
      dropLabel: 'Mots pour la photo {adj}',
    },
  },
  cs: {
    positive: {
      eyebrow: 'Cvičení s přetahováním',
      title: 'Kde je koťátko?',
      intro:
        'Přetáhněte na fotku slovo, které říká, kde koťátko je. Často se hodí <strong>víc slov</strong> (na skříni je i <em lang="it">in alto</em> a <em lang="it">in cima</em>): stačí najít jedno, ale můžete jich přidat, kolik chcete. Na telefonu: klepněte na slovo a pak na fotku.',
    },
    ui: {
      progressText: 'Popsáno {n} z {total} fotek',
      tray: 'Slova: přetáhněte je na fotky nebo na ně klepněte',
      wrong: 'Ne tak docela. Podívejte se dobře, kde koťátko je, a zkuste jiné slovo.',
      dropLabel: 'Slova pro fotku {adj}',
    },
  },
  pl: {
    positive: {
      eyebrow: 'Ćwiczenie z przeciąganiem',
      title: 'Gdzie jest kotek?',
      intro:
        'Przeciągnij na zdjęcie słowo, które mówi, gdzie jest kotek. Często pasuje <strong>kilka słów</strong> (na szafie to też <em lang="it">in alto</em> i <em lang="it">in cima</em>): wystarczy jedno, ale możesz dodać ich tyle, ile chcesz. Na telefonie: dotknij słowa, a potem zdjęcia.',
    },
    ui: {
      progressText: 'Opisane zdjęcia: {n} z {total}',
      tray: 'Słowa: przeciągnij je na zdjęcia albo ich dotknij',
      wrong: 'Nie całkiem. Przyjrzyj się, gdzie jest kotek, i spróbuj innego słowa.',
      dropLabel: 'Słowa do zdjęcia {adj}',
    },
  },
  tr: {
    positive: {
      eyebrow: 'Sürükle-bırak alıştırması',
      title: 'Yavru kedi nerede?',
      intro:
        'Yavru kedinin nerede olduğunu söyleyen bir kelimeyi fotoğrafın üzerine sürükleyin. Çoğu zaman <strong>birden fazla kelime</strong> uyar (dolabın üstü aynı zamanda <em lang="it">in alto</em> ve <em lang="it">in cima</em>): birini bulmak yeter, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce kelimeye, sonra fotoğrafa dokunun.',
    },
    ui: {
      progressText: '{total} fotoğraftan {n} tanesi tarif edildi',
      tray: 'Kelimeler: fotoğraflara sürükleyin ya da dokunun',
      wrong: 'Tam değil. Yavru kedinin nerede olduğuna iyi bakın ve başka bir kelime deneyin.',
      dropLabel: '{adj}. fotoğraf için kelimeler',
    },
  },
  de: {
    positive: {
      eyebrow: 'Übung mit Ziehen und Ablegen',
      title: 'Wo ist das Kätzchen?',
      intro:
        'Zieh ein Wort, das sagt, wo das Kätzchen ist, auf das Foto. Oft passen <strong>mehrere Wörter</strong> (oben auf dem Schrank ist auch <em lang="it">in alto</em> und <em lang="it">in cima</em>): eines genügt, aber du kannst so viele hinzufügen, wie du willst. Auf dem Handy: erst das Wort antippen, dann das Foto.',
    },
    ui: {
      progressText: '{n} von {total} Fotos beschrieben',
      tray: 'Wörter: auf die Fotos ziehen oder antippen',
      wrong: 'Nicht ganz. Schau genau, wo das Kätzchen ist, und probier ein anderes Wort.',
      dropLabel: 'Wörter für Foto {adj}',
    },
  },
  ja: {
    positive: {
      eyebrow: 'ドラッグ＆ドロップの練習',
      title: '子猫はどこ？',
      intro:
        '子猫がどこにいるかを表す言葉を、写真の上にドラッグしてください。<strong>複数の言葉</strong>が合うことがよくあります（たんすの上なら <em lang="it">in alto</em> や <em lang="it">in cima</em> も正解）。1 つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、言葉をタップしてから写真をタップします。',
    },
    ui: {
      progressText: '{total} 枚中 {n} 枚を説明しました',
      tray: '言葉：写真にドラッグするか、タップしてください',
      wrong: '少し違います。子猫がどこにいるかよく見て、別の言葉を試してください。',
      dropLabel: '写真 {adj} の言葉',
    },
  },
};
