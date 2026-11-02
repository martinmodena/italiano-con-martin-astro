// Stringhe di pagina della lezione «Ho fame, ho sonno: le sensazioni con avere» (2026-11-02), kind 'words'
// con in piu' l'esercizio da trascinare «Che cosa ha?», come i colori e il luogo.
//
// `note` non e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// in italiano queste sensazioni si «hanno» (ho fame, ho freddo), e si rinforzano con molta / molto
// (ho molta fame, ho molto freddo), non con «molto» davanti a un aggettivo; ho caldo / fa caldo / e' caldo;
// ragione e torto. Poi la trappola della lingua dello studente.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { sensationVocabulary } from './sensations-vocabulary.mjs';

const N = sensationVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const sensationPages = {
  it: {
    dir: 'vocabolario',
    slug: 'ho-fame-ho-sonno',
    name: 'Ho fame, ho sonno: le sensazioni con avere',
    title: 'Ho fame, ho sonno: le espressioni con avere | Italiano con Martin',
    description: `Impara ${N} espressioni italiane con avere — avere fame, sete, sonno, caldo, freddo, paura, fretta, voglia, il raffreddore… — con foto di animali, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt: 'Un cucciolo che sbadiglia accanto a una ciotola vuota sul pavimento di una cucina italiana',
    cardText: `${N} espressioni con avere per dire come ti senti, imparate con gli animali: il cucciolo che ha fame, il gattino che ha sonno, il cane che ha caldo.`,
    note: {
      title: 'Ho fame, ho molta fame, ho fame da lupi',
      body: 'In italiano queste sensazioni si <em>hanno</em>: <em>ho fame</em>, <em>ho freddo</em>, <em>ho paura</em>. Dopo <em>avere</em> c’è un nome, perciò per rinforzarle si usa <em>molta</em> o <em>molto</em> accordato al nome: <em>ho molta fame</em>, <em>ho molta sete</em>, <em>ho molto freddo</em>, <em>ho molto sonno</em>. Attenzione a tre frasi diverse: <em>ho caldo</em> (la persona sente caldo), <em>fa caldo</em> (il tempo), <em>il tè è caldo</em> (la cosa). Due espressioni senza foto ma utilissime: <em>avere ragione</em> e <em>avere torto</em> (<em>hai ragione tu</em>). Il confronto con l’inglese: dove l’inglese dice <em>I am hungry, I am cold, I am afraid, I am right</em>, l’italiano dice <em>ho fame, ho freddo, ho paura, ho ragione</em>; <em>sono affamato</em> esiste, ma vuol dire «muoio di fame». E <em>ho bisogno di</em> è il solo modo comune di dire <em>I need</em>.',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-expressions-with-avere-hungry-cold',
    name: 'I’m hungry, I’m sleepy: expressions with avere',
    title: 'I’m hungry, I’m cold: Italian expressions with avere | Italiano con Martin',
    description: `Learn ${N} Italian expressions with avere — to be hungry, thirsty, sleepy, hot, cold, afraid, in a hurry, to have a cold… — with animal photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'A puppy yawning next to an empty bowl on the floor of an Italian kitchen',
    cardText: `${N} expressions with avere to say how you feel, learnt with animals: the hungry puppy, the sleepy kitten, the dog who is hot.`,
    note: {
      title: `${it('Ho fame')}, not “I am hungry”`,
      body: `<strong>The big trap for English speakers:</strong> where English uses “to be”, Italian uses ${it('avere')}, “to have”. “I am hungry” is ${it('ho fame')} (I have hunger), “I am cold” is ${it('ho freddo')}, “I am afraid” is ${it('ho paura')}, “I am in a hurry” is ${it('ho fretta')}, and “you are right” is ${it('hai ragione')}, “I was wrong” ${it('avevo torto')}. ${it('Sono affamato')} exists, but it means “I’m starving”. Because what follows ${it('avere')} is a noun, “very” is ${it('molta')} or ${it('molto')}, agreeing with it: ${it('ho molta fame')}, ${it('ho molto freddo')}. And keep three sentences apart: ${it('ho caldo')} (I feel hot), ${it('fa caldo')} (it’s hot weather), ${it('il tè è caldo')} (the tea is hot). “I need” is ${it('ho bisogno di')}: ${it('ho bisogno di aiuto')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'expresiones-con-avere-tener-hambre-en-italiano',
    name: 'Tengo hambre, tengo sueño: las expresiones con avere',
    title: 'Tengo hambre, tengo frío: expresiones con avere en italiano | Italiano con Martin',
    description: `Aprende ${N} expresiones italianas con avere — tener hambre, sed, sueño, calor, frío, miedo, prisa, ganas, estar resfriado… — con fotos de animales, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'Un cachorro que bosteza junto a un cuenco vacío en el suelo de una cocina italiana',
    cardText: `${N} expresiones con avere para decir cómo te sientes, aprendidas con animales: el cachorro que tiene hambre, el gatito que tiene sueño, el perro que tiene calor.`,
    note: {
      title: `${it('Ho fame')} = tengo hambre`,
      body: `<strong>Buena noticia para hispanohablantes:</strong> el italiano funciona casi como el español, con ${it('avere')} donde usas «tener»: ${it('ho fame')}, ${it('ho sete')}, ${it('ho sonno')}, ${it('ho freddo')}, ${it('ho paura')}, ${it('ho fretta')}, ${it('hai ragione')}. Las diferencias: «tener ganas de» es ${it('avere voglia di')}; «necesitar» se dice casi siempre ${it('avere bisogno di')} (${it('ho bisogno di aiuto')}); «me da vergüenza» es ${it('ho vergogna')}; «me duele la cabeza» es ${it('ho mal di testa')}; «estoy resfriado» es ${it('ho il raffreddore')}. Y el refuerzo concuerda con el sustantivo, como en español: ${it('ho molta fame')} (mucha hambre), ${it('ho molto freddo')} (mucho frío). ${it('Avere torto')} es «no tener razón, equivocarse»: ${it('avevo torto io')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'expressions-avec-avere-avoir-faim-en-italien',
    name: 'J’ai faim, j’ai sommeil : les expressions avec avere',
    title: 'J’ai faim, j’ai froid : les expressions avec avere en italien | Italiano con Martin',
    description: `Apprenez ${N} expressions italiennes avec avere — avoir faim, soif, sommeil, chaud, froid, peur, être pressé, avoir envie, être enrhumé… — avec des photos d’animaux, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Un chiot qui bâille à côté d’une gamelle vide sur le sol d’une cuisine italienne',
    cardText: `${N} expressions avec avere pour dire ce que vous ressentez, apprises avec les animaux : le chiot qui a faim, le chaton qui a sommeil, le chien qui a chaud.`,
    note: {
      title: `${it('Ho fame')} = j’ai faim`,
      body: `<strong>Bonne nouvelle pour les francophones :</strong> l’italien fonctionne presque comme le français, avec ${it('avere')} là où vous dites « avoir » : ${it('ho fame')}, ${it('ho sete')}, ${it('ho sonno')}, ${it('ho caldo')}, ${it('ho freddo')}, ${it('ho paura')}, ${it('ho bisogno di')}, ${it('ho voglia di')}, ${it('hai ragione')}, ${it('ho torto')}. Les pièges : « je suis pressé » se dit ${it('ho fretta')} ; « je suis enrhumé » ${it('ho il raffreddore')} ; « j’ai honte » ${it('ho vergogna')}. Et pour renforcer, l’italien accorde avec le nom au lieu de dire « très » : ${it('ho molta fame')} (j’ai très faim), ${it('ho molto freddo')}. Distinguez aussi ${it('ho caldo')} (j’ai chaud), ${it('fa caldo')} (il fait chaud) et ${it('il tè è caldo')} (le thé est chaud).`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-mam-hlad',
    name: 'Mám hlad, jsem ospalý: výrazy s avere',
    title: 'Mám hlad, je mi zima: výrazy s avere v italštině | Italiano con Martin',
    description: `Naučte se ${N} italských výrazů s avere — mít hlad, žízeň, být ospalý, je mi horko, je mi zima, mít strach, spěchat, mít chuť, mít rýmu… — s fotografiemi zvířat, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Štěně zívá vedle prázdné misky na podlaze italské kuchyně',
    cardText: `${N} výrazů s avere, kterými řeknete, jak se cítíte, naučených se zvířaty: štěně, které má hlad, koťátko, které je ospalé, pes, kterému je horko.`,
    note: {
      title: `${it('Ho freddo')} = je mi zima`,
      body: `Některé výrazy jsou stejné jako v češtině: ${it('ho fame')} (mám hlad), ${it('ho sete')} (mám žízeň), ${it('ho paura')} (mám strach), ${it('ho la febbre')} (mám horečku). <strong>Pozor ale na ty ostatní:</strong> „je mi zima“ a „je mi horko“ jsou v italštině ${it('ho freddo')} a ${it('ho caldo')} – žádné „mi“; „jsem ospalý“ je ${it('ho sonno')}; „spěchám“ je ${it('ho fretta')}; „stydím se“ je ${it('ho vergogna')}; „potřebuji“ je ${it('ho bisogno di')}; „bolí mě hlava“ je ${it('ho mal di testa')}; „máš pravdu“ je ${it('hai ragione')}. Zesílení se shoduje s podstatným jménem: ${it('ho molta fame')} (mám velký hlad), ${it('ho molto freddo')} (je mi velká zima). A rozlišujte ${it('ho caldo')} (je mi horko), ${it('fa caldo')} (je horko venku) a ${it('il tè è caldo')} (čaj je horký).`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-jestem-glodny',
    name: 'Jestem głodny, chce mi się spać: wyrażenia z avere',
    title: 'Jestem głodny, zimno mi: wyrażenia z avere po włosku | Italiano con Martin',
    description: `Poznaj ${N} włoskich wyrażeń z avere — być głodnym, chcieć pić, chcieć spać, gorąco mi, zimno mi, bać się, spieszyć się, mieć ochotę, mieć katar… — ze zdjęciami zwierząt, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Szczeniak ziewa obok pustej miski na podłodze włoskiej kuchni',
    cardText: `${N} wyrażeń z avere, którymi powiesz, jak się czujesz, poznanych ze zwierzętami: głodny szczeniak, śpiący kotek, pies, któremu jest gorąco.`,
    note: {
      title: `${it('Ho fame')} = jestem głodny`,
      body: `<strong>Największa pułapka dla Polaka:</strong> tam, gdzie polski mówi „jestem” albo „mi”, włoski mówi „mam” (${it('avere')}). „Jestem głodny” to ${it('ho fame')} (mam głód), „chce mi się pić” to ${it('ho sete')}, „chce mi się spać” to ${it('ho sonno')}, „zimno mi” to ${it('ho freddo')}, „gorąco mi” to ${it('ho caldo')}, „boję się” to ${it('ho paura')}, „spieszę się” to ${it('ho fretta')}, „wstydzę się” to ${it('ho vergogna')}, „potrzebuję” to ${it('ho bisogno di')}, „masz rację” to ${it('hai ragione')}. Tak jak polskie „mam ochotę”, „mam katar”, „mam gorączkę”: ${it('ho voglia')}, ${it('ho il raffreddore')}, ${it('ho la febbre')}. Wzmocnienie zgadza się z rzeczownikiem: ${it('ho molta fame')} (jestem bardzo głodny), ${it('ho molto freddo')}. I rozróżniaj ${it('ho caldo')} (gorąco mi), ${it('fa caldo')} (jest gorąco na dworze) i ${it('il tè è caldo')} (herbata jest gorąca).`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-ac-ve-uykulu-olmak',
    name: 'Acıktım, uykum var: avere ile ifadeler',
    title: 'Acıktım, üşüdüm: İtalyancada avere ile ifadeler | Italiano con Martin',
    description: `avere ile ${N} İtalyanca ifade öğrenin — acıkmak, susamak, uykusu gelmek, sıcaklamak, üşümek, korkmak, acelesi olmak, canı istemek, nezle olmak… — hayvan fotoğrafları, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'İtalyan mutfağının zemininde boş bir kabın yanında esneyen bir köpek yavrusu',
    cardText: `Nasıl hissettiğinizi söylemek için avere ile ${N} ifade, hayvanlarla: acıkan yavru köpek, uykusu gelen yavru kedi, sıcaklayan köpek.`,
    note: {
      title: `${it('Ho fame')} = acıktım`,
      body: `<strong>Türkçeden en büyük fark:</strong> Türkçe bu duyguları çoğu zaman bir fiille söyler (acıktım, susadım, üşüdüm, korkuyorum), İtalyanca ise ${it('avere')} (sahip olmak) + bir isimle: ${it('ho fame')} (açlığım var), ${it('ho sete')}, ${it('ho freddo')}, ${it('ho paura')}. Türkçedeki “var” kalıbına benzeyenler size tanıdık gelecek: “uykum var” → ${it('ho sonno')}, “acelem var” → ${it('ho fretta')}, “ihtiyacım var” → ${it('ho bisogno di')}, “ateşim var” → ${it('ho la febbre')}. “Haklısın” ise ${it('hai ragione')}, “haksızdım” ${it('avevo torto')}. Pekiştirmek için isme uyan ${it('molta')} / ${it('molto')} kullanılır: ${it('ho molta fame')} (çok acıktım), ${it('ho molto freddo')}. Ve şu üçünü karıştırmayın: ${it('ho caldo')} (sıcakladım), ${it('fa caldo')} (hava sıcak), ${it('il tè è caldo')} (çay sıcak).`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-hunger-und-durst',
    name: 'Ich habe Hunger, ich bin müde: Ausdrücke mit avere',
    title: 'Hunger, Durst, mir ist kalt: Ausdrücke mit avere auf Italienisch | Italiano con Martin',
    description: `Lerne ${N} italienische Ausdrücke mit avere — Hunger, Durst, müde sein, mir ist heiß, mir ist kalt, Angst haben, es eilig haben, Lust haben, Schnupfen… — mit Tierfotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Ein Welpe gähnt neben einem leeren Napf auf dem Boden einer italienischen Küche',
    cardText: `${N} Ausdrücke mit avere, um zu sagen, wie es dir geht, gelernt mit Tieren: der hungrige Welpe, das müde Kätzchen, der Hund, dem heiß ist.`,
    note: {
      title: `${it('Ho freddo')} = mir ist kalt`,
      body: `Vieles ist wie im Deutschen: ${it('ho fame')} (ich habe Hunger), ${it('ho sete')} (Durst), ${it('ho paura')} (Angst), ${it('ho voglia di')} (Lust auf), ${it('ho la febbre')} (Fieber), ${it('ho il raffreddore')} (Schnupfen), ${it('hai ragione')} (du hast recht). <strong>Die Fallen:</strong> „mir ist kalt / mir ist heiß“ heißt ${it('ho freddo')} / ${it('ho caldo')}, ohne „mir“; „ich bin müde, ich bin schläfrig“ ist ${it('ho sonno')}; „ich habe es eilig“ ${it('ho fretta')}; „ich schäme mich“ ${it('ho vergogna')}; „ich brauche“ ${it('ho bisogno di')}. Verstärkt wird mit ${it('molta')} / ${it('molto')}, passend zum Nomen: ${it('ho molta fame')} (großen Hunger), ${it('ho molto freddo')}. Und unterscheide ${it('ho caldo')} (mir ist heiß), ${it('fa caldo')} (es ist heiß, das Wetter) und ${it('il tè è caldo')} (der Tee ist heiß).`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-expressions-with-avere-vocabulary',
    name: 'お腹がすいた、眠い：avere を使う表現',
    title: 'お腹がすいた、寒い：イタリア語の avere を使う表現 | Italiano con Martin',
    description: `お腹がすく、喉が渇く、眠い、暑い、寒い、怖い、急いでいる、〜したい、風邪をひいているなど、avere を使うイタリア語の表現 ${N} 個を、動物の写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: 'イタリアの台所の床で、空のお皿の横であくびをする子犬',
    cardText: `動物と一緒に覚える、気持ちや体の状態を表す avere の表現 ${N} 個。お腹がすいた子犬、眠い子猫、暑がる犬。`,
    note: {
      title: `${it('Ho fame')}：「空腹を持っている」`,
      body: `<strong>日本語といちばん違うところ：</strong>日本語では「お腹がすいた」「寒い」「眠い」「怖い」のように動詞や形容詞で言いますが、イタリア語では ${it('avere')}（持つ）＋名詞で言います。${it('ho fame')}（空腹を持っている＝お腹がすいた）、${it('ho sete')}（喉が渇いた）、${it('ho sonno')}（眠い）、${it('ho freddo')}（寒い）、${it('ho caldo')}（暑い）、${it('ho paura')}（怖い）、${it('ho fretta')}（急いでいる）。「あなたの言うとおり」は ${it('hai ragione')}、「必要だ」は ${it('ho bisogno di')} です。名詞なので「とても」は名詞に合わせて ${it('molta')} / ${it('molto')} を使います：${it('ho molta fame')}、${it('ho molto freddo')}。また、${it('ho caldo')}（私が暑い）、${it('fa caldo')}（天気が暑い）、${it('il tè è caldo')}（お茶が熱い）を区別しましょう。`,
    },
  },
};

// --- i testi dell'esercizio «Che cosa ha?» ----------------------------------------------------

export const sensationUi = {
  it: {
    positive: {
      eyebrow: 'Esercizio con trascinamento',
      title: 'Che cosa ha?',
      intro:
        'Trascina sulla foto un’espressione che dice che cosa sente l’animale. Spesso ne vanno bene <strong>più di una</strong> (il cane al sole ha caldo e ha sete): basta trovarne una, ma puoi aggiungerne quante vuoi. Sul telefono: tocca l’espressione, poi tocca la foto.',
    },
    ui: {
      progressText: '{n} di {total} foto descritte',
      tray: 'Espressioni: trascinale sulle foto o toccale',
      wrong: 'Non proprio. Guarda bene l’animale e prova un’altra espressione.',
      dropLabel: 'Espressioni per la foto {adj}',
    },
  },
  en: {
    positive: {
      eyebrow: 'Drag-and-drop exercise',
      title: 'What’s the matter with it?',
      intro:
        'Drag onto the photo an expression that says what the animal is feeling. Often <strong>more than one</strong> fits (the dog in the sun <em lang="it">ha caldo</em> and <em lang="it">ha sete</em>): one is enough, but you can add as many as you like. On a phone: tap the expression, then tap the photo.',
    },
    ui: {
      progressText: '{n} of {total} photos described',
      tray: 'Expressions: drag them onto the photos or tap them',
      wrong: 'Not quite. Look at the animal again and try another expression.',
      dropLabel: 'Expressions for photo {adj}',
    },
  },
  es: {
    positive: {
      eyebrow: 'Ejercicio de arrastrar',
      title: '¿Qué le pasa?',
      intro:
        'Arrastra hasta la foto una expresión que diga qué siente el animal. A menudo sirve <strong>más de una</strong> (el perro al sol <em lang="it">ha caldo</em> y <em lang="it">ha sete</em>): basta con una, pero puedes añadir todas las que quieras. En el móvil: toca la expresión y luego toca la foto.',
    },
    ui: {
      progressText: '{n} de {total} fotos descritas',
      tray: 'Expresiones: arrástralas a las fotos o tócalas',
      wrong: 'No exactamente. Mira bien el animal y prueba otra expresión.',
      dropLabel: 'Expresiones para la foto {adj}',
    },
  },
  fr: {
    positive: {
      eyebrow: 'Exercice à glisser-déposer',
      title: 'Qu’est-ce qu’il a ?',
      intro:
        'Faites glisser sur la photo une expression qui dit ce que ressent l’animal. Souvent, <strong>plusieurs</strong> conviennent (le chien au soleil <em lang="it">ha caldo</em> et <em lang="it">ha sete</em>) : une seule suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez l’expression, puis la photo.',
    },
    ui: {
      progressText: '{n} photos décrites sur {total}',
      tray: 'Expressions : faites-les glisser sur les photos ou touchez-les',
      wrong: 'Pas tout à fait. Regardez bien l’animal et essayez une autre expression.',
      dropLabel: 'Expressions pour la photo {adj}',
    },
  },
  cs: {
    positive: {
      eyebrow: 'Cvičení s přetahováním',
      title: 'Co mu je?',
      intro:
        'Přetáhněte na fotku výraz, který říká, co zvíře cítí. Často se hodí <strong>víc výrazů</strong> (pes na slunci <em lang="it">ha caldo</em> i <em lang="it">ha sete</em>): stačí najít jeden, ale můžete jich přidat, kolik chcete. Na telefonu: klepněte na výraz a pak na fotku.',
    },
    ui: {
      progressText: 'Popsáno {n} z {total} fotek',
      tray: 'Výrazy: přetáhněte je na fotky nebo na ně klepněte',
      wrong: 'Ne tak docela. Podívejte se na zvíře znovu a zkuste jiný výraz.',
      dropLabel: 'Výrazy pro fotku {adj}',
    },
  },
  pl: {
    positive: {
      eyebrow: 'Ćwiczenie z przeciąganiem',
      title: 'Co mu jest?',
      intro:
        'Przeciągnij na zdjęcie wyrażenie, które mówi, co czuje zwierzę. Często pasuje <strong>kilka wyrażeń</strong> (pies na słońcu <em lang="it">ha caldo</em> i <em lang="it">ha sete</em>): wystarczy jedno, ale możesz dodać ich tyle, ile chcesz. Na telefonie: dotknij wyrażenia, a potem zdjęcia.',
    },
    ui: {
      progressText: 'Opisane zdjęcia: {n} z {total}',
      tray: 'Wyrażenia: przeciągnij je na zdjęcia albo ich dotknij',
      wrong: 'Nie całkiem. Przyjrzyj się zwierzęciu i spróbuj innego wyrażenia.',
      dropLabel: 'Wyrażenia do zdjęcia {adj}',
    },
  },
  tr: {
    positive: {
      eyebrow: 'Sürükle-bırak alıştırması',
      title: 'Neyi var?',
      intro:
        'Hayvanın ne hissettiğini söyleyen bir ifadeyi fotoğrafın üzerine sürükleyin. Çoğu zaman <strong>birden fazla ifade</strong> uyar (güneşteki köpek <em lang="it">ha caldo</em> ve <em lang="it">ha sete</em>): birini bulmak yeter, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce ifadeye, sonra fotoğrafa dokunun.',
    },
    ui: {
      progressText: '{total} fotoğraftan {n} tanesi tarif edildi',
      tray: 'İfadeler: fotoğraflara sürükleyin ya da dokunun',
      wrong: 'Tam değil. Hayvana tekrar bakın ve başka bir ifade deneyin.',
      dropLabel: '{adj}. fotoğraf için ifadeler',
    },
  },
  de: {
    positive: {
      eyebrow: 'Übung mit Ziehen und Ablegen',
      title: 'Was hat es?',
      intro:
        'Zieh einen Ausdruck, der sagt, was das Tier fühlt, auf das Foto. Oft passen <strong>mehrere Ausdrücke</strong> (der Hund in der Sonne <em lang="it">ha caldo</em> und <em lang="it">ha sete</em>): einer genügt, aber du kannst so viele hinzufügen, wie du willst. Auf dem Handy: erst den Ausdruck antippen, dann das Foto.',
    },
    ui: {
      progressText: '{n} von {total} Fotos beschrieben',
      tray: 'Ausdrücke: auf die Fotos ziehen oder antippen',
      wrong: 'Nicht ganz. Schau dir das Tier noch einmal an und probier einen anderen Ausdruck.',
      dropLabel: 'Ausdrücke für Foto {adj}',
    },
  },
  ja: {
    positive: {
      eyebrow: 'ドラッグ＆ドロップの練習',
      title: 'どうしたのかな？',
      intro:
        '動物が何を感じているかを表す表現を、写真の上にドラッグしてください。<strong>複数の表現</strong>が合うことがよくあります（日なたの犬は <em lang="it">ha caldo</em> も <em lang="it">ha sete</em> も正解）。1 つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、表現をタップしてから写真をタップします。',
    },
    ui: {
      progressText: '{total} 枚中 {n} 枚を説明しました',
      tray: '表現：写真にドラッグするか、タップしてください',
      wrong: '少し違います。動物をよく見て、別の表現を試してください。',
      dropLabel: '写真 {adj} の表現',
    },
  },
};
