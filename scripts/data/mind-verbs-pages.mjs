// Stringhe di pagina della lezione «I verbi della mente e della parola» (2026-11-05), kind 'match' con
// `photoRows`, come «I verbi della città»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// La nota NON e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// *sapere* (un fatto, saper fare) contro *conoscere* (persone e luoghi); *chiedere* vale sia per una domanda
// sia per una cosa che si vuole; *dire qualcosa a qualcuno*; *ricordarsi di*, *dimenticarsi di*, *accorgersi
// di*; *stare zitto* si accorda (zitta, zitti). Poi le trappole della lingua dello studente: know / wissen-
// kennen / bilmek-tanımak / 知っている; ask-ask for / preguntar-pedir / fragen-bitten; discuter = chiacchierare;
// discutere = anche litigare...
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { mindVerbs } from './mind-verbs.mjs';

const V = mindVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

export const mindVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-mente-parola',
    name: 'I verbi della mente e della parola',
    title: 'Verbi della mente e della parola in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani per pensare e parlare — sapere, conoscere, capire, ricordare, dimenticare, dire, chiedere, raccontare, scherzare — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt: 'Due amiche sedute a un tavolino all’aperto che parlano e ridono, una con la mano sul mento',
    cardText: `${V} verbi per pensare e parlare: sapere, conoscere, capire, ricordare, dire, chiedere, raccontare…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-mind-and-speech-verbs-vocabulary',
    name: 'Verbs for thinking and speaking',
    title: 'Verbs for thinking and speaking | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for thinking and speaking — to know, to understand, to remember, to forget, to say, to ask, to tell, to joke — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt: 'Two friends sitting at an outdoor café table talking and laughing, one with her hand on her chin',
    cardText: `${V} verbs for thinking and speaking: to know, to understand, to remember, to say, to ask, to tell…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-la-mente-y-la-palabra-en-italiano',
    name: 'Los verbos de la mente y la palabra',
    title: 'Los verbos de la mente y la palabra | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos para pensar y hablar — saber, conocer, entender, recordar, olvidar, decir, preguntar, contar, bromear — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt: 'Dos amigas sentadas en una terraza que hablan y se ríen, una con la mano en la barbilla',
    cardText: `${V} verbos para pensar y hablar: saber, conocer, entender, recordar, decir, preguntar, contar…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-de-la-pensee-et-de-la-parole-en-italien',
    name: 'Les verbes de la pensée et de la parole',
    title: 'Les verbes de la pensée et de la parole | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens pour penser et parler — savoir, connaître, comprendre, se souvenir, oublier, dire, demander, raconter, plaisanter — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt: 'Deux amies assises à une terrasse qui parlent et rient, l’une la main sous le menton',
    cardText: `${V} verbes pour penser et parler : savoir, connaître, comprendre, se souvenir, dire, demander, raconter…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-mysleni-a-reci',
    name: 'Slovesa myšlení a řeči',
    title: 'Slovesa myšlení a řeči | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves pro myšlení a mluvení — vědět, znát, rozumět, pamatovat si, zapomenout, říct, zeptat se, vyprávět, žertovat — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt: 'Dvě kamarádky sedí u stolku venku, povídají si a smějí se, jedna má ruku pod bradou',
    cardText: `${V} sloves pro myšlení a mluvení: vědět, znát, rozumět, pamatovat si, říct, zeptat se, vyprávět…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-myslenia-i-mowy',
    name: 'Czasowniki myślenia i mowy',
    title: 'Czasowniki myślenia i mowy | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników do myślenia i mówienia — wiedzieć, znać, rozumieć, pamiętać, zapominać, powiedzieć, pytać, opowiadać, żartować — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt: 'Dwie przyjaciółki siedzą przy stoliku na zewnątrz, rozmawiają i się śmieją, jedna z ręką pod brodą',
    cardText: `${V} czasowników do myślenia i mówienia: wiedzieć, znać, rozumieć, pamiętać, powiedzieć, pytać, opowiadać…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-dusunme-ve-konusma-fiilleri-kelimeleri',
    name: 'Düşünme ve konuşma fiilleri',
    title: 'Düşünme ve konuşma fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Düşünmek ve konuşmak için ${V} İtalyanca fiil öğrenin — bilmek, tanımak, anlamak, hatırlamak, unutmak, söylemek, sormak, anlatmak, şaka yapmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt: 'Dışarıda bir masada oturmuş, konuşup gülen iki arkadaş; biri elini çenesine koymuş',
    cardText: `Düşünmek ve konuşmak için ${V} fiil: bilmek, tanımak, anlamak, hatırlamak, söylemek, sormak, anlatmak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-denken-und-sprechen',
    name: 'Verben des Denkens und Sprechens',
    title: 'Verben des Denkens und Sprechens | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben zum Denken und Sprechen — wissen, kennen, verstehen, sich erinnern, vergessen, sagen, fragen, erzählen, scherzen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt: 'Zwei Freundinnen sitzen an einem Tisch im Freien, reden und lachen, eine hat die Hand am Kinn',
    cardText: `${V} Verben zum Denken und Sprechen: wissen, kennen, verstehen, sich erinnern, sagen, fragen, erzählen …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-mind-and-speech-verbs-vocabulary',
    name: '考える・話す動詞',
    title: '考える・話す動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `知っている、わかる、覚えている、忘れる、言う、尋ねる、語る、冗談を言うなど、考える・話すときのイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt: '屋外のテーブルで話して笑う二人の友人。一人はあごに手を当てている',
    cardText: `考える・話す動詞 ${V} 語：知っている、わかる、覚えている、言う、尋ねる、語る…`,
  },
};

const notes = {
  it: {
    title: 'Sapere o conoscere?',
    body: '<em>Sapere</em> si usa per un’informazione (<em>so dov’è la stazione</em>) e per una capacità (<em>so nuotare</em>); <em>conoscere</em> per le persone e i luoghi (<em>conosco Marco</em>, <em>conosco Roma</em>). Al passato prossimo <em>ci siamo conosciuti</em> vuol dire «ci siamo incontrati per la prima volta». <em>Chiedere</em> va bene sia per una domanda (<em>mi ha chiesto l’ora</em>) sia per una cosa che si vuole (<em>chiedo il conto</em>). Si dice qualcosa <em>a</em> qualcuno: <em>l’ho detto a mia madre</em>. Con il pronome si dice <em>ricordarsi di</em>, <em>dimenticarsi di</em>, <em>accorgersi di</em>: <em>mi sono dimenticato di chiamarti</em>. <em>Pensare a</em> qualcuno, ma <em>pensare di</em> fare qualcosa. E <em>stare zitto</em> cambia con chi tace: <em>sta’ zitta!</em>, <em>state zitti!</em>',
  },
  en: {
    title: `“To know” is two verbs: ${it('sapere')} and ${it('conoscere')}`,
    body: `Use ${it('sapere')} for facts and skills (${it('so dov’è')}, I know where it is; ${it('so nuotare')}, I can swim) and ${it('conoscere')} for people and places (${it('conosco Marco')}, ${it('conosco Roma')}). ${it('Ci siamo conosciuti a Roma')} means “we met in Rome”. “To ask” and “to ask for” are both ${it('chiedere')}, with no preposition for the thing: ${it('chiedo il conto')} (I ask for the bill). “Say” and “tell” are both ${it('dire')}, and the person takes ${it('a')}: ${it('l’ho detto a mia madre')}. “To tell a story” is ${it('raccontare')}. Careful: ${it('ricordare a qualcuno')} is “to remind”, ${it('ricordarsi di')} “to remember”. ${it('Discutere')} can also mean “to argue”. “To realise” is ${it('accorgersi')} or ${it('rendersi conto')}, not ${it('realizzare')} (which means to make real). And “to lie” is ${it('dire una bugia')} or ${it('mentire')}.`,
  },
  es: {
    title: `${it('Chiedere')}: preguntar y pedir`,
    body: `Buena noticia: ${it('sapere')} y ${it('conoscere')} funcionan como «saber» y «conocer»: ${it('so nuotare')}, ${it('conosco Roma')}. La trampa está en ${it('chiedere')}, que vale para «preguntar» y para «pedir»: ${it('mi ha chiesto l’ora')} (me preguntó la hora), ${it('chiedo il conto')} (pido la cuenta). «Pedir» por internet es ${it('ordinare')}. «Contestar» es ${it('rispondere')}, y «contar» una historia ${it('raccontare')}; ${it('contare')} es solo contar números. «Acordarse de» es ${it('ricordarsi di')}: ${it('ti ricordi di me?')}; «olvidarse de» ${it('dimenticarsi di')}. «Darse cuenta» es ${it('accorgersi')} o ${it('rendersi conto')}. «Esperar» tiene dos verbos: ${it('sperare')} (desear) y ${it('aspettare')} (esperar a alguien). Y «callarse» es ${it('stare zitto')}: ${it('sta’ zitta!')}, ${it('state zitti!')}`,
    },
  fr: {
    title: `${it('Discutere')} n’est pas « discuter »`,
    body: `${it('Sapere')} et ${it('conoscere')} fonctionnent comme « savoir » et « connaître » : ${it('so nuotare')}, ${it('conosco Roma')}. Mais attention : « discuter » avec des amis, c’est ${it('chiacchierare')} ou ${it('parlare')} ; ${it('discutere')} est plus sérieux, débattre ou même se disputer. « Demander », c’est ${it('chiedere')} (ou ${it('domandare')}), avec ${it('a')} pour la personne : ${it('chiedo a Luca')}. « Se souvenir de » est ${it('ricordarsi di')}, « oublier » ${it('dimenticare')} ou ${it('dimenticarsi di')}, « s’apercevoir » ${it('accorgersi')}. « Espérer » est ${it('sperare')} : ${it('spero di sì')} (j’espère que oui). « Plaisanter » se dit ${it('scherzare')}, « mentir » ${it('dire una bugia')} ou ${it('mentire')}, et « se taire » ${it('stare zitto')} : ${it('state zitti!')}`,
  },
  cs: {
    title: `${it('Sapere')} = vědět, ${it('conoscere')} = znát`,
    body: `Dobrá zpráva: italština rozlišuje jako čeština. ${it('Sapere')} je „vědět“ a také „umět“: ${it('so dov’è')} (vím, kde to je), ${it('so nuotare')} (umím plavat). ${it('Conoscere')} je „znát“ osoby a místa: ${it('conosco Marco')}, ${it('conosco Roma')}; ${it('ci siamo conosciuti')} je „seznámili jsme se“. Pozor na ${it('chiedere')}: znamená „zeptat se“ i „požádat“: ${it('mi ha chiesto l’ora')}, ${it('chiedo il conto')}. „Říct někomu“ je ${it('dire a qualcuno')}. „Pamatovat si“ je ${it('ricordarsi')} (${it('ti ricordi di me?')}), „zapomenout“ ${it('dimenticare')}, „všimnout si“ ${it('accorgersi di')}. „Vyprávět“ je ${it('raccontare')}, „žertovat“ ${it('scherzare')}, „lhát“ ${it('dire una bugia')}. A „mlčet“ je ${it('stare zitto')}, které se mění podle osoby: ${it('sta’ zitta!')}, ${it('state zitti!')}`,
  },
  pl: {
    title: `${it('Sapere')} = wiedzieć, ${it('conoscere')} = znać`,
    body: `Dobra wiadomość: włoski rozróżnia tak jak polski. ${it('Sapere')} to „wiedzieć” i „umieć”: ${it('so dov’è')} (wiem, gdzie to jest), ${it('so nuotare')} (umiem pływać). ${it('Conoscere')} to „znać” ludzi i miejsca: ${it('conosco Marco')}, ${it('conosco Roma')}; ${it('ci siamo conosciuti')} znaczy „poznaliśmy się”. Uwaga na ${it('chiedere')}: to i „pytać”, i „prosić”: ${it('mi ha chiesto l’ora')} (zapytał o godzinę), ${it('chiedo il conto')} (proszę o rachunek). „Powiedzieć komuś” to ${it('dire a qualcuno')}. „Pamiętać” to ${it('ricordare')} albo ${it('ricordarsi di')}, „zapomnieć” ${it('dimenticare')}, „zauważyć” ${it('accorgersi di')}. „Opowiadać” to ${it('raccontare')}, „żartować” ${it('scherzare')}, „kłamać” ${it('dire una bugia')}. A „milczeć” to ${it('stare zitto')}, które zmienia się z osobą: ${it('state zitti!')}`,
  },
  tr: {
    title: `“Bilmek” iki fiildir: ${it('sapere')} ve ${it('conoscere')}`,
    body: `Türkçede “bilmek” hem bilgi hem kişi için kullanılabilir; İtalyancada ayırmak gerekir. Bilgi ve beceri için ${it('sapere')}: ${it('so dov’è')} (nerede olduğunu biliyorum), ${it('so nuotare')} (yüzmeyi biliyorum). Kişi ve yerler için ${it('conoscere')}, Türkçedeki “tanımak” gibi: ${it('conosco Marco')} (Marco’yu tanıyorum), ${it('conosco Roma')}. ${it('Ci siamo conosciuti')} “tanıştık” demektir. ${it('Chiedere')} hem “sormak” hem “istemek”: ${it('mi ha chiesto l’ora')} (saati sordu), ${it('chiedo il conto')} (hesabı istiyorum). “Birine söylemek” ${it('dire a qualcuno')}. “Hatırlamak” ${it('ricordare')}, “unutmak” ${it('dimenticare')}, “fark etmek” ${it('accorgersi')}. “Yalan söylemek” Türkçedeki gibi kurulur: ${it('dire una bugia')} (söylemek = ${it('dire')}). “Susmak” ise ${it('stare zitto')}: ${it('state zitti!')}`,
  },
  de: {
    title: `${it('Chiedere')}: fragen und bitten`,
    body: `Gute Nachricht: ${it('sapere')} und ${it('conoscere')} funktionieren wie „wissen“ und „kennen“: ${it('so dov’è')} (ich weiß, wo es ist), ${it('conosco Roma')}. ${it('Sapere')} heißt außerdem „können“: ${it('so nuotare')} (ich kann schwimmen), und ${it('ci siamo conosciuti')} heißt „wir haben uns kennengelernt“. Die Falle ist ${it('chiedere')}: Es heißt „fragen“ und „bitten“: ${it('mi ha chiesto l’ora')}, ${it('chiedo il conto')} (ich bitte um die Rechnung). „Sagen“ und „erzählen“ sind ${it('dire')} und ${it('raccontare')}, „sich erinnern an“ ist ${it('ricordarsi di')}, „merken“ ${it('accorgersi di')}. Vorsicht: ${it('discutere')} kann auch „streiten“ heißen, und „lügen“ ist ${it('dire una bugia')} oder ${it('mentire')}. „Schweigen“ ist ${it('stare zitto')}: ${it('state zitti!')} (seid still!).`,
  },
  ja: {
    title: `「知っている」は二つ：${it('sapere')} と ${it('conoscere')}`,
    body: `日本語の「知っている」は、イタリア語では二つに分かれます。情報やできることは ${it('sapere')}：${it('so dov’è')}（どこにあるか知っている）、${it('so nuotare')}（泳げる）。人や場所は ${it('conoscere')}：${it('conosco Marco')}（マルコを知っている）、${it('conosco Roma')}。${it('ci siamo conosciuti')} は「知り合った」という意味です。もう一つの注意点は、日本語の「聞く」です。質問するのは ${it('chiedere')}（${it('mi ha chiesto l’ora')}、時間を聞かれた）、耳で聞くのは ${it('ascoltare')} です。${it('chiedere')} は「頼む」にもなります：${it('chiedo il conto')}（お会計をお願いする）。「言う」は ${it('dire')}、「話す」は ${it('parlare')}、「語る」は ${it('raccontare')}、「嘘をつく」は ${it('dire una bugia')}、「黙る」は ${it('stare zitto')}（${it('state zitti!')}、静かに！）。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi chiacchiera sta anche parlando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (people chatting are also talking: <em lang="it">parlare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien charla también está hablando: <em lang="it">parlare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (qui bavarde parle aussi : <em lang="it">parlare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo si povídá, zároveň i mluví: <em lang="it">parlare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (kto gawędzi, ten też mówi: <em lang="it">parlare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (sohbet eden kişi aynı zamanda konuşuyordur: <em lang="it">parlare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer plaudert, spricht auch: <em lang="it">parlare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（おしゃべりしている人は「<em lang="it">parlare</em>」（話す）でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const mindVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
