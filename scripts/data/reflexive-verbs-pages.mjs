// Stringhe di pagina della lezione «I verbi riflessivi di tutti i giorni» (2026-11-12), kind 'match' con
// `photoRows` e gruppi con un titolo, come «I verbi di influenza».
//
// La nota NON e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// il pronome cambia con la persona (mi, ti, si, ci, vi, si), al passato prossimo c'e' sempre «essere» con
// l'accordo (mi sono alzato / alzata), all'imperativo con «tu» e all'infinito il pronome si attacca (alzati!,
// devo alzarmi). Poi le trappole della lingua dello studente: inglese senza pronome (get up, get dressed, get
// lost); spagnolo «quedarse», «reírse», «caerse» che in italiano non sono riflessivi; francese «se coucher»,
// «se promener», «se taire»; ceco e polacco con «se/się» uguale per tutte le persone; turco con i suffissi
// -(I)n- e -(I)ş-; tedesco con il perfetto con «haben»; giapponese senza pronome e con «～合う».
// Ogni nota finisce con il link alla lezione di grammatica A1 «I verbi riflessivi» nella stessa lingua.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { reflexiveVerbs } from './reflexive-verbs.mjs';

const V = reflexiveVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const s = (...labels) => Object.fromEntries(LANGS.map((lang, i) => [lang, labels[i]]));

/** La lezione di grammatica A1 «I verbi riflessivi» in ogni lingua (dagli hreflang della pagina italiana). */
const grammar = {
  it: ['/grammatica/a1/verbi-riflessivi.html', 'I verbi riflessivi'],
  en: ['/en/grammar/a1/italian-reflexive-verbs.html', 'Italian reflexive verbs'],
  es: ['/es/gramatica/a1/verbos-reflexivos-en-italiano.html', 'Los verbos reflexivos en italiano'],
  fr: ['/fr/grammaire/a1/verbes-pronominaux-en-italien.html', 'Les verbes pronominaux en italien'],
  cs: ['/cs/gramatika/a1/zvratna-slovesa-v-italstine.html', 'Zvratná slovesa v italštině'],
  pl: ['/pl/gramatyka/a1/czasowniki-zwrotne-po-wlosku.html', 'Czasowniki zwrotne po włosku'],
  tr: ['/tr/dilbilgisi/a1/italyancada-donuslu-fiiller.html', 'İtalyancada dönüşlü fiiller'],
  de: ['/de/grammatik/a1/reflexive-verben-im-italienischen.html', 'Reflexive Verben im Italienischen'],
  ja: ['/ja/bunpo/a1/イタリア語の再帰動詞.html', 'イタリア語の再帰動詞'],
};
const link = (lang) => `<a href="${grammar[lang][0]}">${grammar[lang][1]}</a>`;

export const reflexiveVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-riflessivi',
    name: 'I verbi riflessivi di tutti i giorni',
    title: 'Verbi riflessivi di tutti i giorni: vocabolario | Italiano con Martin',
    description: `Impara ${V} verbi riflessivi italiani di tutti i giorni — svegliarsi, alzarsi, vestirsi, arrabbiarsi, divertirsi, conoscersi, ricordarsi, sentirsi, trovarsi — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt: 'Una giovane donna seduta sul letto al mattino che si stiracchia vicino alla finestra',
    cardText: `${V} verbi con il «si»: svegliarsi, alzarsi, vestirsi, arrabbiarsi, conoscersi, sentirsi, trovarsi…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-reflexive-verbs-vocabulary',
    name: 'Everyday reflexive verbs',
    title: 'Everyday reflexive verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} everyday Italian reflexive verbs — to wake up, to get up, to get dressed, to get angry, to have fun, to meet, to remember, to feel, to get lost — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt: 'A young woman sitting on her bed in the morning, stretching next to the window',
    cardText: `${V} verbs with “si”: to wake up, to get up, to get dressed, to get angry, to meet, to feel…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-reflexivos-en-italiano',
    name: 'Los verbos reflexivos de cada día',
    title: 'Los verbos reflexivos de cada día | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos reflexivos italianos de cada día — despertarse, levantarse, vestirse, enfadarse, divertirse, conocerse, acordarse, sentirse, perderse — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt: 'Una joven sentada en la cama por la mañana que se estira junto a la ventana',
    cardText: `${V} verbos con «si»: despertarse, levantarse, vestirse, enfadarse, conocerse, sentirse…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-pronominaux-en-italien',
    name: 'Les verbes pronominaux du quotidien',
    title: 'Les verbes pronominaux du quotidien | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes pronominaux italiens du quotidien — se réveiller, se lever, s’habiller, se fâcher, s’amuser, se rencontrer, se souvenir, se sentir, se perdre — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt: 'Une jeune femme assise sur son lit le matin qui s’étire près de la fenêtre',
    cardText: `${V} verbes avec « si » : se réveiller, se lever, s’habiller, se fâcher, se rencontrer, se sentir…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-zvratna-slovesa',
    name: 'Zvratná slovesa na každý den',
    title: 'Zvratná slovesa na každý den | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských zvratných sloves na každý den — probudit se, vstát, obléknout se, rozzlobit se, bavit se, seznámit se, vzpomenout si, cítit se, ztratit se — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt: 'Mladá žena sedí ráno na posteli u okna a protahuje se',
    cardText: `${V} sloves se „si“: probudit se, vstát, obléknout se, rozzlobit se, seznámit se, cítit se…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-zwrotne',
    name: 'Czasowniki zwrotne na co dzień',
    title: 'Czasowniki zwrotne na co dzień | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników zwrotnych na co dzień — obudzić się, wstać, ubrać się, zdenerwować się, dobrze się bawić, poznać się, pamiętać, czuć się, zgubić się — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt: 'Młoda kobieta siedzi rano na łóżku przy oknie i się przeciąga',
    cardText: `${V} czasowników z „si”: obudzić się, wstać, ubrać się, zdenerwować się, poznać się, czuć się…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-donuslu-fiiller-kelimeleri',
    name: 'Günlük dönüşlü fiiller',
    title: 'Günlük dönüşlü fiiller | İtalyanca kelimeler | Italiano con Martin',
    description: `Her gün kullanılan ${V} İtalyanca dönüşlü fiil öğrenin — uyanmak, kalkmak, giyinmek, kızmak, eğlenmek, tanışmak, hatırlamak, kendini iyi hissetmek, kaybolmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt: 'Sabah pencerenin yanında yatağında oturup gerinen genç bir kadın',
    cardText: `“si” ile ${V} fiil: uyanmak, kalkmak, giyinmek, kızmak, tanışmak, hissetmek…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-reflexive-verben',
    name: 'Reflexive Verben für jeden Tag',
    title: 'Reflexive Verben für jeden Tag | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische reflexive Verben für jeden Tag — aufwachen, aufstehen, sich anziehen, sich ärgern, Spaß haben, sich kennenlernen, sich erinnern, sich fühlen, sich verlaufen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt: 'Eine junge Frau sitzt morgens auf dem Bett am Fenster und streckt sich',
    cardText: `${V} Verben mit „si“: aufwachen, aufstehen, sich anziehen, sich ärgern, sich kennenlernen, sich fühlen …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-reflexive-verbs-vocabulary',
    name: '毎日使う再帰動詞',
    title: '毎日使う再帰動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `目を覚ます、起きる、服を着る、怒る、楽しむ、知り合う、思い出す、気分が～だ、道に迷うなど、毎日使うイタリア語の再帰動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt: '朝、窓のそばのベッドに座って伸びをする若い女性',
    cardText: `「si」のつく動詞 ${V} 語：目を覚ます、起きる、服を着る、怒る、知り合う、気分が～だ…`,
  },
};

const notes = {
  it: {
    title: 'Con il «si» o senza?',
    body: `Il pronome cambia con la persona: <em>mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano</em>. Al passato prossimo questi verbi vogliono tutti <em>essere</em>, e il participio si accorda: <em>mi sono alzato</em>, <em>mi sono alzata</em>, <em>ci siamo persi</em>. Il pronome sta prima del verbo, ma si attacca all’imperativo con <em>tu</em> (<em>alzati!</em>, <em>sbrigati!</em>) e all’infinito (<em>devo alzarmi</em>). Con le parti del corpo non serve il possessivo: <em>mi lavo le mani</em>. Attenzione ai verbi che con il <em>si</em> cambiano significato: <em>sento la musica</em> ma <em>mi sento bene</em>; <em>trovo le chiavi</em> ma <em>mi trovo bene a Bologna</em> (e <em>ci troviamo alle otto</em> vuol dire «ci vediamo»); <em>chiamo Luca</em> ma <em>mi chiamo Luca</em>; <em>perdo il treno</em> ma <em>mi perdo in città</em>. In inglese molti di questi verbi non hanno pronome (<em>I get up</em>, <em>we met</em>): in italiano il <em>si</em> non si dimentica. Tutte le forme sono nella lezione ${link('it')}.`,
  },
  en: {
    title: 'No pronoun in English, a pronoun in Italian',
    body: `Many of these verbs are reflexive only in Italian: ${it('mi alzo')} (I get up), ${it('mi sveglio')} (I wake up), ${it('mi sbrigo')} (I hurry), ${it('ci siamo conosciuti')} (we met). A useful clue: English often uses “get”: get dressed = ${it('vestirsi')}, get angry = ${it('arrabbiarsi')}, get bored = ${it('annoiarsi')}, get lost = ${it('perdersi')}, get married = ${it('sposarsi')}, get used to = ${it('abituarsi a')}. The pronoun changes with the person: ${it('mi, ti, si, ci, vi, si')}. In the past these verbs always take ${it('essere')}, and the ending agrees: ${it('mi sono alzato')} (a man), ${it('mi sono alzata')} (a woman). With ${it('tu')} commands the pronoun goes at the end: ${it('alzati!')}, ${it('sbrigati!')}. For body parts Italian says “the”, not “my”: ${it('mi lavo le mani')} (I wash my hands). And some verbs change meaning with ${it('si')}: ${it('sentire')} is to hear, ${it('sentirsi')} to feel; ${it('trovare')} is to find, ${it('trovarsi bene')} to like it somewhere, and ${it('ci troviamo alle otto')} means “let’s meet at eight”; ${it('chiamare')} is to call, ${it('chiamarsi')} to be called. All the forms are in ${link('en')}.`,
  },
  es: {
    title: `${it('Ridere')}, ${it('cadere')}, ${it('restare')}: sin «se»`,
    body: `Buena noticia: el español también tiene verbos reflexivos y casi siempre coinciden: ${it('mi alzo')} (me levanto), ${it('ci siamo conosciuti')} (nos conocimos), ${it('mi sono perso')} (me perdí). Las trampas son tres. La primera: en el pasado se usa ${it('essere')}, no ${it('avere')}, y el participio concuerda: «me he levantado» es ${it('mi sono alzato')} o ${it('mi sono alzata')}. La segunda: algunos verbos reflexivos en español no lo son en italiano: «reírse» es ${it('ridere')} (${it('ride sempre')}), «caerse» es ${it('cadere')} (${it('sono caduto')}), «quedarse» es ${it('restare')} (${it('resto a casa')}), «morirse» es ${it('morire')}. La tercera: «irse» es ${it('andarsene')}, con ${it('ne')}: ${it('me ne vado')} (me voy), ${it('se ne sono andati')} (se fueron). «Darse prisa» es ${it('sbrigarsi')}, «equivocarse» ${it('sbagliarsi')}, «ducharse» ${it('farsi la doccia')}, «pasarlo bien» ${it('divertirsi')}. Como en español, ${it('mi lavo le mani')} va sin posesivo. Todas las formas están en ${link('es')}.`,
  },
  fr: {
    title: `${it('Andare a letto')}, pas « se coucher »`,
    body: `Bonne nouvelle : l’italien fonctionne comme les verbes pronominaux français, avec ${it('essere')} au passé et l’accord : ${it('mi sono alzata')} (je me suis levée), ${it('ci siamo conosciuti')} (on s’est rencontrés). Comme en français, ${it('mi lavo le mani')} se dit sans possessif. À l’impératif, le pronom se colle au verbe, sans trait d’union : ${it('alzati!')} (lève-toi !), ${it('sbrigati!')} (dépêche-toi !). Les pièges : certains verbes pronominaux en français ne le sont pas en italien. « Se coucher » se dit ${it('andare a letto')}, « se promener » ${it('fare una passeggiata')}, « se taire » ${it('stare zitto')}, « se moquer de » ${it('prendere in giro')}. À l’inverse, « tomber amoureux » est ${it('innamorarsi')}, « avoir peur » ${it('spaventarsi')}. « S’en aller » existe aussi : ${it('andarsene')}, ${it('me ne vado')} (je m’en vais). Et ${it('trovarsi')} veut dire « se trouver », mais aussi « se plaire » (${it('mi trovo bene qui')}) et « se retrouver » (${it('ci troviamo alle otto')}). Toutes les formes sont dans ${link('fr')}.`,
  },
  cs: {
    title: `„Se“ se v italštině mění: ${it('mi, ti, si')}`,
    body: `Čeština má zvratná slovesa taky, ale „se“ je stejné pro všechny osoby. V italštině se zájmeno mění: ${it('mi alzo')} (vstávám), ${it('ti alzi')}, ${it('si alza')}, ${it('ci alziamo')}, ${it('vi alzate')}, ${it('si alzano')}. A stojí vždy přímo před slovesem, ne na druhém místě ve větě: ${it('domani mi alzo presto')}. V minulém čase je vždy ${it('essere')} a příčestí se shoduje: ${it('mi sono alzato')}, ${it('mi sono alzata')}. Pozor na rozdíly: „vstávat“, „usnout“, „zabloudit“ nemají v češtině „se“, ale v italštině ano: ${it('alzarsi')}, ${it('addormentarsi')}, ${it('perdersi')}. Naopak „smát se“ je ${it('ridere')}, „bát se“ ${it('avere paura')}, „učit se“ ${it('studiare')}, „dívat se“ ${it('guardare')}, bez zájmena. „Jmenuji se“ je ${it('mi chiamo')}, „cítím se dobře“ ${it('mi sento bene')}. A ${it('trovarsi')} znamená „nacházet se“, ale i „cítit se někde dobře“ (${it('mi trovo bene qui')}) a „sejít se“ (${it('ci troviamo alle otto')}). Všechny tvary najdete v lekci ${link('cs')}.`,
  },
  pl: {
    title: `„Się” po włosku się zmienia: ${it('mi, ti, si')}`,
    body: `Polski ma czasowniki zwrotne, ale „się” jest takie samo dla wszystkich osób. Po włosku zaimek się zmienia: ${it('mi alzo')} (wstaję), ${it('ti alzi')}, ${it('si alza')}, ${it('ci alziamo')}, ${it('vi alzate')}, ${it('si alzano')}. I stoi zawsze tuż przed czasownikiem: ${it('domani mi alzo presto')}. W czasie przeszłym jest zawsze ${it('essere')}, a imiesłów zgadza się z osobą: ${it('mi sono alzato')} (wstałem), ${it('mi sono alzata')} (wstałam). Uwaga na różnice: „wstawać” i „zasnąć” nie mają w polskim „się”, a po włosku tak: ${it('alzarsi')}, ${it('addormentarsi')}. Odwrotnie: „śmiać się” to ${it('ridere')}, „bać się” ${it('avere paura')}, „uczyć się” ${it('studiare')}, „podobać się” ${it('piacere')}, bez zaimka. „Nazywam się” to ${it('mi chiamo')}, „czuję się dobrze” ${it('mi sento bene')}. A ${it('trovarsi')} to „znajdować się”, ale też „dobrze się gdzieś czuć” (${it('mi trovo bene qui')}) i „spotkać się” (${it('ci troviamo alle otto')}). Wszystkie formy są w lekcji ${link('pl')}.`,
  },
  tr: {
    title: `Ek yerine küçük bir kelime: ${it('mi, ti, si')}`,
    body: `Türkçede dönüşlülük ve işteşlik eklerle yapılır: yıka-n-mak = ${it('lavarsi')}, giy-in-mek = ${it('vestirsi')}, tanı-ş-mak = ${it('conoscersi')}, selamla-ş-mak = ${it('salutarsi')}. İtalyancada ek yok, fiilin önünde kişiye göre değişen küçük bir kelime var: ${it('mi lavo')} (yıkanıyorum), ${it('ti lavi')}, ${it('si lava')}, ${it('ci laviamo')}, ${it('vi lavate')}, ${it('si lavano')}. ${it('Ci salutiamo')} “selamlaşıyoruz” demektir. Dikkat: Türkçede ek almayan birçok fiil İtalyancada dönüşlüdür: kalkmak = ${it('alzarsi')}, uyanmak = ${it('svegliarsi')}, kızmak = ${it('arrabbiarsi')}, acele etmek = ${it('sbrigarsi')}, evlenmek = ${it('sposarsi')}. Geçmiş zamanda hep ${it('essere')} kullanılır ve fiil cinsiyete göre değişir (Türkçede olmayan bir şey): ${it('Marco si è alzato')}, ${it('Giulia si è alzata')}. Vücut bölümlerinde iyelik yok: ${it('mi lavo le mani')} (ellerimi yıkıyorum). Bütün biçimler ${link('tr')} dersinde.`,
  },
  de: {
    title: `${it('Mi sono lavato')}: mit ${it('essere')}, nicht mit „haben“`,
    body: `Das Prinzip kennst du: ${it('mi lavo')} = ich wasche mich, ${it('mi lavo le mani')} = ich wasche mir die Hände (auch ohne Possessiv). Die große Falle ist das Perfekt: „ich habe mich gewaschen“ heißt ${it('mi sono lavato')}, mit ${it('essere')}, und das Partizip richtet sich nach der Person: ${it('mi sono lavata')} (eine Frau), ${it('ci siamo lavati')}. Viele Verben sind nur im Italienischen reflexiv: aufstehen = ${it('alzarsi')}, aufwachen = ${it('svegliarsi')}, einschlafen = ${it('addormentarsi')}, duschen = ${it('farsi la doccia')}, heiraten = ${it('sposarsi')}, stehen bleiben = ${it('fermarsi')}. Umgekehrt ist „sich freuen“ ${it('essere contento')}, ohne Pronomen. ${it('Trovarsi')} heißt „sich befinden“, aber auch „sich wohlfühlen“ (${it('mi trovo bene qui')}) und „sich treffen“ (${it('ci troviamo alle otto')}). Beim Imperativ mit ${it('tu')} hängt das Pronomen hinten dran: ${it('alzati!')} (steh auf!), ${it('sbrigati!')} (beeil dich!). Alle Formen findest du in ${link('de')}.`,
  },
  ja: {
    title: `「自分を」の小さなことば：${it('mi, ti, si')}`,
    body: `日本語の「起きる」「座る」「怒る」はふつうの動詞ですが、イタリア語では動詞の前に人によって変わる小さなことばがつきます：${it('mi alzo')}（私は起きる）、${it('ti alzi')}、${it('si alza')}、${it('ci alziamo')}、${it('vi alzate')}、${it('si alzano')}。お互いにすることも同じ形で言います。日本語の「～合う」にあたります：${it('ci aiutiamo')}（助け合う）、${it('si abbracciano')}（抱き合う）。過去の形（近過去）ではいつも ${it('essere')} を使い、男性か女性かで語尾が変わります：${it('Marco si è alzato')}、${it('Giulia si è alzata')}。「起きて！」のような命令では後ろにつきます：${it('alzati!')}、${it('sbrigati!')}（急いで！）。体の部分には「私の」をつけません：${it('mi lavo le mani')}（手を洗う）。また、${it('si')} がつくと意味が変わる動詞もあります：${it('sentire')} は「聞こえる」、${it('sentirsi')} は「気分が～だ」。すべての形はレッスン「${link('ja')}」で。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi si abbraccia si sta anche salutando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (people hugging are also greeting each other: <em lang="it">salutarsi</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien se abraza también se saluda: <em lang="it">salutarsi</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (ceux qui se serrent dans les bras se saluent aussi : <em lang="it">salutarsi</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo se objímá, zároveň se i zdraví: <em lang="it">salutarsi</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (kto się przytula, ten też się wita: <em lang="it">salutarsi</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (sarılanlar aynı zamanda selamlaşıyordur: <em lang="it">salutarsi</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer sich umarmt, begrüßt sich auch: <em lang="it">salutarsi</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（抱き合っている人は「<em lang="it">salutarsi</em>」（あいさつを交わす）でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const reflexiveVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);

// --- i gruppi con un titolo ---------------------------------------------------------------------

const order = {
  it: `I verbi sono in ordine: prima la giornata, dalla sveglia al letto, poi il corpo, le emozioni, i verbi che si fanno <strong>insieme</strong> (<em>ci salutiamo</em>: io saluto te e tu saluti me) e quelli della mente. In fondo ci sono i verbi che con il <em>si</em> <strong>cambiano significato</strong>: <em>sentire</em> e <em>sentirsi</em> non sono la stessa cosa.`,
  en: `The verbs are in order: first the day, from waking up to falling asleep, then the body, feelings, the verbs you do <strong>together</strong> (${it('ci salutiamo')}: I greet you and you greet me) and the verbs of the mind. At the end come the verbs whose <strong>meaning changes</strong> with ${it('si')}: ${it('sentire')} (to hear) and ${it('sentirsi')} (to feel) are not the same.`,
  es: `Los verbos están en orden: primero el día, del despertador a la cama, después el cuerpo, las emociones, lo que se hace <strong>juntos</strong> (${it('ci salutiamo')}: yo te saludo y tú me saludas) y los verbos de la mente. Al final están los verbos que con ${it('si')} <strong>cambian de significado</strong>: ${it('sentire')} (oír) y ${it('sentirsi')} (sentirse) no son lo mismo.`,
  fr: `Les verbes sont dans l’ordre : d’abord la journée, du réveil au coucher, puis le corps, les émotions, ce qu’on fait <strong>ensemble</strong> (${it('ci salutiamo')} : je te salue et tu me salues) et les verbes de l’esprit. À la fin viennent les verbes qui <strong>changent de sens</strong> avec ${it('si')} : ${it('sentire')} (entendre) et ${it('sentirsi')} (se sentir), ce n’est pas pareil.`,
  cs: `Slovesa jsou seřazená: nejdřív den od probuzení po spánek, potom tělo, emoce, slovesa, která se dělají <strong>spolu</strong> (${it('ci salutiamo')}: já zdravím tebe a ty mě), a slovesa mysli. Na konci jsou slovesa, která se zájmenem ${it('si')} <strong>mění význam</strong>: ${it('sentire')} (slyšet) a ${it('sentirsi')} (cítit se) není totéž.`,
  pl: `Czasowniki są ułożone po kolei: najpierw dzień, od budzika do snu, potem ciało, emocje, to, co robi się <strong>razem</strong> (${it('ci salutiamo')}: ja witam ciebie, a ty mnie), i czasowniki umysłu. Na końcu są czasowniki, które z ${it('si')} <strong>zmieniają znaczenie</strong>: ${it('sentire')} (słyszeć) i ${it('sentirsi')} (czuć się) to nie to samo.`,
  tr: `Fiiller sıralı: önce uyanmaktan uyumaya kadar gün, sonra beden, duygular, <strong>birlikte</strong> yapılanlar (${it('ci salutiamo')}: ben seni selamlıyorum, sen de beni) ve zihin fiilleri. En sonda ${it('si')} ile <strong>anlamı değişen</strong> fiiller var: ${it('sentire')} (duymak) ile ${it('sentirsi')} (kendini … hissetmek) aynı şey değil.`,
  de: `Die Verben sind geordnet: zuerst der Tag, vom Wecker bis ins Bett, dann der Körper, die Gefühle, was man <strong>zusammen</strong> macht (${it('ci salutiamo')}: ich grüße dich und du grüßt mich) und die Verben des Denkens. Am Ende stehen die Verben, die mit ${it('si')} ihre <strong>Bedeutung ändern</strong>: ${it('sentire')} (hören) und ${it('sentirsi')} (sich fühlen) sind nicht dasselbe.`,
  ja: `動詞は順番に並んでいます。まず朝起きてから寝るまでの一日、次に体、気持ち、<strong>お互いに</strong>すること（${it('ci salutiamo')}：私があなたに、あなたが私にあいさつする）、頭の中のこと。最後は ${it('si')} がつくと<strong>意味が変わる</strong>動詞です：${it('sentire')}（聞こえる）と ${it('sentirsi')}（気分が～だ）は別の意味です。`,
};

const groupLabels = {
  giornata: s('La giornata', 'The day', 'El día', 'La journée', 'Den', 'Dzień', 'Gün', 'Der Tag', '一日'),
  corpo: s(
    'Il corpo e il movimento',
    'The body and movement',
    'El cuerpo y el movimiento',
    'Le corps et le mouvement',
    'Tělo a pohyb',
    'Ciało i ruch',
    'Beden ve hareket',
    'Körper und Bewegung',
    '体と動き'
  ),
  emozioni: s(
    'Le emozioni',
    'Feelings',
    'Las emociones',
    'Les émotions',
    'Emoce',
    'Emocje',
    'Duygular',
    'Gefühle',
    '気持ち'
  ),
  insieme: s(
    'Insieme, l’uno con l’altro',
    'Together, each other',
    'Juntos, el uno al otro',
    'Ensemble, l’un l’autre',
    'Spolu, navzájem',
    'Razem, nawzajem',
    'Birlikte, birbirine',
    'Zusammen, einander',
    'いっしょに、お互いに'
  ),
  mente: s('La mente', 'The mind', 'La mente', 'L’esprit', 'Mysl', 'Umysł', 'Zihin', 'Der Kopf', '頭の中'),
  significato: s(
    'Con il «si» cambia il significato',
    'With “si” the meaning changes',
    'Con «si» cambia el significado',
    'Avec « si », le sens change',
    'Se „si“ se mění význam',
    'Z „si” zmienia się znaczenie',
    '“si” ile anlam değişir',
    'Mit „si“ ändert sich die Bedeutung',
    '「si」で意味が変わる'
  ),
};
const kickers = ['1', '2', '3', '4', '5', '6'];

export const reflexiveVerbGroupUi = Object.fromEntries(
  LANGS.map((lang) => [
    lang,
    {
      intro: order[lang],
      labels: Object.fromEntries(
        Object.entries(groupLabels).map(([id, title], i) => [id, { kicker: kickers[i], title: title[lang] }])
      ),
    },
  ])
);
