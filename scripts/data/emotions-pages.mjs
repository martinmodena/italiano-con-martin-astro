// Stringhe di pagina della lezione «Le emozioni» (2026-09-27), kind 'words'.
//
// Campi come in city-pages.mjs; `note` spiega come si dice come ci si sente (sono / mi sento + aggettivo
// accordato; felice e triste invariabili nel genere), le emozioni con «avere» (avere paura, avere vergogna),
// il falso amico «eccitato» (si dice emozionato), «solo» (da solo / mi sento solo), la differenza fra stato
// d'animo e carattere (oggi sono nervoso / e' una persona nervosa) con il link a «La personalita' degli
// animali», e che in «Riconosci la parola» vale anche il nome dell'emozione.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { emotionVocabulary } from './emotions-vocabulary.mjs';
import { personalityPages } from './animals-pages-more.mjs';

const N = emotionVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;
const character = (lang) =>
  `<a href="/${personalityPages[lang].dir}/${personalityPages[lang].slug}.html">${personalityPages[lang].name}</a>`;

export const emotionPages = {
  it: {
    dir: 'vocabolario',
    slug: 'emozioni',
    name: 'Le emozioni',
    title: 'Le emozioni: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole per dire come ti senti in italiano — felice, contento, emozionato, triste, arrabbiato, preoccupato, deluso, imbarazzato… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Dodici volti che mostrano un’emozione: felice, sorpreso, innamorato, entusiasta, triste, arrabbiato, spaventato, annoiato, stanco, confuso e altri',
    cardText: `${N} parole per dire come ti senti: felice, emozionato, orgoglioso, triste, arrabbiato, preoccupato, deluso…`,
    note: {
      title: 'Come ti senti?',
      body: `Per dire come stai si usa <em>essere</em> o <em>sentirsi</em> con l’aggettivo accordato: <em>sono contento</em>, <em>sono contenta</em>, <em>mi sento stanca</em>; <em>felice</em>, <em>triste</em>, <em>entusiasta</em> e <em>impaziente</em> hanno una sola forma per il maschile e il femminile. Alcune emozioni vogliono <em>avere</em>: <em>ho paura</em>, <em>ho vergogna</em> (o <em>mi vergogno</em>). Attenzione al falso amico: prima di un viaggio o di un esame si è <em>emozionati</em>, non «eccitati», che ha un senso sessuale. <em>Solo</em> vuol dire senza nessuno (<em>vivo da solo</em>) e anche triste perché si è senza nessuno (<em>mi sento solo</em>). Un’emozione passa, il carattere resta: <em>oggi sono nervoso</em> non è come <em>è una persona nervosa</em>; gli aggettivi del carattere sono nella lezione ${character('it')}. In «Riconosci la parola» puoi scrivere anche il nome dell’emozione: <em>la felicità</em>, <em>la paura</em>, <em>la rabbia</em>.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-emotions-vocabulary',
    name: 'Emotions',
    title: 'Emotions | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words to say how you feel — happy, pleased, excited, sad, angry, worried, disappointed, embarrassed… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'Twelve faces showing an emotion: happy, surprised, in love, enthusiastic, sad, angry, scared, bored, tired, confused and others',
    cardText: `${N} words to say how you feel: happy, excited, proud, sad, angry, worried, disappointed…`,
    note: {
      title: it('Come ti senti?'),
      body: `To say how you feel, use ${it('essere')} or ${it('sentirsi')} with the adjective agreeing with you: ${it('sono contento')} (a man), ${it('sono contenta')} (a woman), ${it('mi sento stanca')}; ${it('felice')}, ${it('triste')}, ${it('entusiasta')} and ${it('impaziente')} have one form for both. Some emotions take ${it('avere')}: ${it('ho paura')} (I’m afraid), ${it('ho vergogna')} or ${it('mi vergogno')} (I’m ashamed). Careful with a false friend: before a trip or an exam you are ${it('emozionato')}, not ${it('eccitato')}, which has a sexual meaning. ${it('Solo')} means alone (${it('vivo da solo')}) and also lonely (${it('mi sento solo')}). A mood passes, character stays: ${it('oggi sono nervoso')} (I’m nervous today) is not ${it('è una persona nervosa')} (he’s a nervous person); character adjectives are in the lesson ${character('en')}. In the exercise you can also write the noun: ${it('la felicità')}, ${it('la paura')}, ${it('la rabbia')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-las-emociones-en-italiano',
    name: 'Las emociones',
    title: 'Las emociones | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras en italiano para decir cómo te sientes — feliz, contento, emocionado, triste, enfadado, preocupado, decepcionado, avergonzado… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Doce caras que muestran una emoción: feliz, sorprendido, enamorado, entusiasmado, triste, enfadado, asustado, aburrido, cansado, confundido y otras',
    cardText: `${N} palabras para decir cómo te sientes: feliz, emocionado, orgulloso, triste, enfadado, preocupado, decepcionado…`,
    note: {
      title: it('Come ti senti?'),
      body: `Para decir cómo estás se usa ${it('essere')} o ${it('sentirsi')} con el adjetivo concordado: ${it('sono contento')}, ${it('sono contenta')}, ${it('mi sento stanca')}; ${it('felice')}, ${it('triste')}, ${it('entusiasta')} e ${it('impaziente')} tienen una sola forma. Algunas emociones llevan ${it('avere')}, como en español «tener»: ${it('ho paura')} (tengo miedo), ${it('ho vergogna')} o ${it('mi vergogno')} (me da vergüenza). Cuidado con el falso amigo: antes de un viaje o de un examen se está ${it('emozionato')}, no ${it('eccitato')}, que tiene un sentido sexual. ${it('Solo')} significa sin nadie (${it('vivo da solo')}) y también que te sientes solo (${it('mi sento solo')}). Una emoción pasa, el carácter queda: ${it('oggi sono nervoso')} (hoy estoy nervioso) no es ${it('è una persona nervosa')} (es una persona nerviosa); los adjetivos del carácter están en la lección ${character('es')}. En el ejercicio también puedes escribir el sustantivo: ${it('la felicità')}, ${it('la paura')}, ${it('la rabbia')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-des-emotions-en-italien',
    name: 'Les émotions',
    title: 'Les émotions | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens pour dire ce que vous ressentez — heureux, content, ému, triste, en colère, inquiet, déçu, gêné… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Douze visages qui montrent une émotion : heureux, surpris, amoureux, enthousiaste, triste, en colère, effrayé, qui s’ennuie, fatigué, perplexe et d’autres',
    cardText: `${N} mots pour dire ce que vous ressentez : heureux, ému, fier, triste, en colère, inquiet, déçu…`,
    note: {
      title: it('Come ti senti?'),
      body: `Pour dire comment on va, on utilise ${it('essere')} ou ${it('sentirsi')} avec l’adjectif accordé : ${it('sono contento')}, ${it('sono contenta')}, ${it('mi sento stanca')} ; ${it('felice')}, ${it('triste')}, ${it('entusiasta')} et ${it('impaziente')} n’ont qu’une forme. Certaines émotions se disent avec ${it('avere')}, comme en français : ${it('ho paura')} (j’ai peur), ${it('ho vergogna')} ou ${it('mi vergogno')} (j’ai honte). Attention au faux ami : avant un voyage ou un examen, on est ${it('emozionato')}, pas ${it('eccitato')}, qui a un sens sexuel. ${it('Solo')} veut dire sans personne (${it('vivo da solo')}) et aussi qui se sent seul (${it('mi sento solo')}). Une émotion passe, le caractère reste : ${it('oggi sono nervoso')} (aujourd’hui je suis nerveux) n’est pas ${it('è una persona nervosa')} (c’est une personne nerveuse) ; les adjectifs du caractère sont dans la leçon ${character('fr')}. Dans l’exercice, vous pouvez aussi écrire le nom : ${it('la felicità')}, ${it('la paura')}, ${it('la rabbia')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-emoce',
    name: 'Emoce',
    title: 'Emoce | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov, jak říct, jak se cítíte — šťastný, spokojený, nadšený, smutný, naštvaný, ustaraný, zklamaný, v rozpacích… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Dvanáct tváří, které ukazují emoci: šťastná, překvapená, zamilovaný, nadšený, smutný, naštvaná, vystrašená, znuděná, unavená, zmatený a další',
    cardText: `${N} slov o tom, jak se cítíte: šťastný, nadšený, hrdý, smutný, naštvaný, ustaraný, zklamaný…`,
    note: {
      title: it('Come ti senti?'),
      body: `Jak se cítíte, řeknete slovesem ${it('essere')} nebo ${it('sentirsi')} a přídavným jménem ve správném rodě: ${it('sono contento')} (muž), ${it('sono contenta')} (žena), ${it('mi sento stanca')}; ${it('felice')}, ${it('triste')}, ${it('entusiasta')} a ${it('impaziente')} mají jen jeden tvar. Některé emoce se říkají s ${it('avere')} (mít): ${it('ho paura')} (bojím se), ${it('ho vergogna')} nebo ${it('mi vergogno')} (stydím se). Pozor na falešného přítele: před cestou nebo zkouškou jste ${it('emozionato')}, ne ${it('eccitato')}, které má sexuální význam. ${it('Solo')} znamená sám (${it('vivo da solo')}) i osamělý (${it('mi sento solo')}). Emoce přejde, povaha zůstává: ${it('oggi sono nervoso')} (dnes jsem nervózní) není totéž co ${it('è una persona nervosa')} (je to nervózní člověk); přídavná jména pro povahu najdete v lekci ${character('cs')}. Ve cvičení můžete napsat i podstatné jméno: ${it('la felicità')}, ${it('la paura')}, ${it('la rabbia')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-emocje',
    name: 'Emocje',
    title: 'Emocje | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów, żeby powiedzieć, jak się czujesz — szczęśliwy, zadowolony, podekscytowany, smutny, zły, zmartwiony, rozczarowany, zawstydzony… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Dwanaście twarzy pokazujących emocję: szczęśliwa, zaskoczona, zakochany, podekscytowany, smutny, zła, przestraszona, znudzona, zmęczona, zdezorientowany i inne',
    cardText: `${N} słów o tym, jak się czujesz: szczęśliwy, podekscytowany, dumny, smutny, zły, zmartwiony, rozczarowany…`,
    note: {
      title: it('Come ti senti?'),
      body: `Żeby powiedzieć, jak się czujesz, używa się ${it('essere')} albo ${it('sentirsi')} z przymiotnikiem w odpowiednim rodzaju: ${it('sono contento')} (mężczyzna), ${it('sono contenta')} (kobieta), ${it('mi sento stanca')}; ${it('felice')}, ${it('triste')}, ${it('entusiasta')} i ${it('impaziente')} mają jedną formę. Niektóre emocje łączą się z ${it('avere')} (mieć): ${it('ho paura')} (boję się), ${it('ho vergogna')} albo ${it('mi vergogno')} (wstydzę się). Uwaga na fałszywego przyjaciela: przed podróżą albo egzaminem jest się ${it('emozionato')}, a nie ${it('eccitato')}, które ma znaczenie seksualne. ${it('Solo')} znaczy sam (${it('vivo da solo')}) i samotny (${it('mi sento solo')}). Emocja mija, charakter zostaje: ${it('oggi sono nervoso')} (dziś jestem zdenerwowany) to nie ${it('è una persona nervosa')} (to nerwowa osoba); przymiotniki charakteru są w lekcji ${character('pl')}. W ćwiczeniu możesz też napisać rzeczownik: ${it('la felicità')}, ${it('la paura')}, ${it('la rabbia')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-duygular-kelimeleri',
    name: 'Duygular',
    title: 'Duygular | İtalyanca kelimeler | Italiano con Martin',
    description: `Nasıl hissettiğinizi söylemek için ${N} İtalyanca kelime öğrenin — mutlu, memnun, heyecanlı, üzgün, kızgın, endişeli, hayal kırıklığına uğramış, mahcup… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Bir duyguyu gösteren on iki yüz: mutlu, şaşırmış, âşık, coşkulu, üzgün, kızgın, korkmuş, sıkılmış, yorgun, kafası karışmış ve diğerleri',
    cardText: `Nasıl hissettiğinizi söylemek için ${N} kelime: mutlu, heyecanlı, gururlu, üzgün, kızgın, endişeli, hayal kırıklığına uğramış…`,
    note: {
      title: it('Come ti senti?'),
      body: `Nasıl hissettiğinizi söylemek için ${it('essere')} ya da ${it('sentirsi')} ve size uyan sıfat kullanılır: ${it('sono contento')} (erkek), ${it('sono contenta')} (kadın), ${it('mi sento stanca')}; ${it('felice')}, ${it('triste')}, ${it('entusiasta')} ve ${it('impaziente')} tek biçimlidir. Bazı duygular ${it('avere')} (sahip olmak) ile söylenir: ${it('ho paura')} (korkuyorum), ${it('ho vergogna')} ya da ${it('mi vergogno')} (utanıyorum). Yalancı eş anlamlıya dikkat: bir yolculuk ya da sınav öncesi ${it('emozionato')} olunur, ${it('eccitato')} değil; bu kelimenin cinsel bir anlamı var. ${it('Solo')} hem yalnız başına (${it('vivo da solo')}) hem de yalnızlık hisseden (${it('mi sento solo')}) demektir. Duygu geçer, karakter kalır: ${it('oggi sono nervoso')} (bugün gerginim) ile ${it('è una persona nervosa')} (gergin bir insan) aynı şey değildir; karakter sıfatları ${character('tr')} dersinde. Alıştırmada ismi de yazabilirsiniz: ${it('la felicità')}, ${it('la paura')}, ${it('la rabbia')}.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-gefuehle',
    name: 'Gefühle',
    title: 'Gefühle | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter, um zu sagen, wie du dich fühlst — glücklich, zufrieden, aufgeregt, traurig, wütend, besorgt, enttäuscht, verlegen … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Zwölf Gesichter, die ein Gefühl zeigen: glücklich, überrascht, verliebt, begeistert, traurig, wütend, erschrocken, gelangweilt, müde, verwirrt und andere',
    cardText: `${N} Wörter, um zu sagen, wie du dich fühlst: glücklich, aufgeregt, stolz, traurig, wütend, besorgt, enttäuscht …`,
    note: {
      title: it('Come ti senti?'),
      body: `Wie es dir geht, sagst du mit ${it('essere')} oder ${it('sentirsi')} und dem angeglichenen Adjektiv: ${it('sono contento')} (ein Mann), ${it('sono contenta')} (eine Frau), ${it('mi sento stanca')}; ${it('felice')}, ${it('triste')}, ${it('entusiasta')} und ${it('impaziente')} haben nur eine Form. Manche Gefühle stehen mit ${it('avere')} (haben): ${it('ho paura')} (ich habe Angst), ${it('ho vergogna')} oder ${it('mi vergogno')} (ich schäme mich). Achtung, falscher Freund: Vor einer Reise oder einer Prüfung ist man ${it('emozionato')}, nicht ${it('eccitato')}, das eine sexuelle Bedeutung hat. ${it('Solo')} heißt allein (${it('vivo da solo')}) und auch einsam (${it('mi sento solo')}). Ein Gefühl geht vorbei, der Charakter bleibt: ${it('oggi sono nervoso')} (heute bin ich nervös) ist nicht ${it('è una persona nervosa')} (er ist ein nervöser Mensch); die Adjektive für den Charakter stehen in der Lektion ${character('de')}. In der Übung kannst du auch das Nomen schreiben: ${it('la felicità')}, ${it('la paura')}, ${it('la rabbia')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-emotions-vocabulary',
    name: '感情',
    title: '感情 | イタリア語の語彙 | Italiano con Martin',
    description: `幸せな、満足した、ドキドキした、悲しい、怒っている、心配している、がっかりした、恥ずかしいなど、気持ちを伝えるイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '感情を表す12の顔：幸せ、驚き、恋、わくわく、悲しみ、怒り、恐怖、退屈、疲れ、戸惑いなど',
    cardText: `気持ちを伝える ${N} 語：幸せな、ドキドキした、誇らしい、悲しい、怒っている、心配している、がっかりした…`,
    note: {
      title: it('Come ti senti?'),
      body: `気持ちを言うときは ${it('essere')} か ${it('sentirsi')} に、性に合わせた形容詞を続けます：${it('sono contento')}（男性）、${it('sono contenta')}（女性）、${it('mi sento stanca')}。${it('felice')}、${it('triste')}、${it('entusiasta')}、${it('impaziente')} は男女同形です。${it('avere')}（持つ）を使う感情もあります：${it('ho paura')}（怖い）、${it('ho vergogna')} または ${it('mi vergogno')}（恥ずかしい）。注意：旅行や試験の前のドキドキは ${it('emozionato')} で、${it('eccitato')} は性的な意味になるので使いません。${it('Solo')} は「ひとりで」（${it('vivo da solo')}）と「さびしい」（${it('mi sento solo')}）の両方の意味があります。感情は過ぎ去り、性格は残ります：${it('oggi sono nervoso')}（今日は緊張している）と ${it('è una persona nervosa')}（神経質な人だ）は違います。性格の形容詞はレッスン「${character('ja')}」にあります。練習問題では名詞で書いても正解です：${it('la felicità')}、${it('la paura')}、${it('la rabbia')}。`,
    },
  },
};
