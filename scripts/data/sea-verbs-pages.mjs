// Stringhe di pagina della lezione «I verbi del mare» (2026-09-28), kind 'match' con `photoRows`, come
// «I verbi della montagna»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio arrivano da `relationUi` (relations-pages.mjs); qui ci sono la nota della
// pagina (andare al mare, fare il bagno, i riflessivi con essere, affondare con essere, fare il morto) e
// l'introduzione dell'esercizio con un esempio del mare.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { seaVerbs } from './sea-verbs.mjs';
import { seaPages } from './sea-vocabulary-pages.mjs';

const V = seaVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const sea = (lang) => linkTo(seaPages[lang]);

export const seaVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-mare',
    name: 'I verbi del mare',
    title: 'Verbi del mare in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani del mare — andare al mare, aprire l’ombrellone, abbronzarsi, fare un castello di sabbia, fare il morto, saltare le onde, salpare, pescare, avere il mal di mare — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Una donna nuota a rana nel mare trasparente e turchese, con la costa rocciosa italiana sullo sfondo',
    cardText: `${V} verbi per il mare: andare al mare, abbronzarsi, fare il morto, saltare le onde, salpare, pescare…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-sea-verbs-vocabulary',
    name: 'Sea verbs',
    title: 'Sea verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for the sea — to go to the seaside, to open the beach umbrella, to get a tan, to build a sandcastle, to float on your back, to jump over the waves, to set sail, to fish, to be seasick — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'A woman swims breaststroke in the clear turquoise sea, with the rocky Italian coast in the background',
    cardText: `${V} verbs for the sea: to go to the seaside, to get a tan, to float on your back, to set sail, to fish…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-del-mar-en-italiano',
    name: 'Los verbos del mar',
    title: 'Los verbos del mar | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos del mar — ir a la playa, abrir la sombrilla, broncearse, hacer un castillo de arena, hacer el muerto, saltar las olas, zarpar, pescar, marearse — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Una mujer nada a braza en el mar transparente y turquesa, con la costa rocosa italiana al fondo',
    cardText: `${V} verbos para el mar: ir a la playa, broncearse, hacer el muerto, zarpar, pescar…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-de-la-mer-en-italien',
    name: 'Les verbes de la mer',
    title: 'Les verbes de la mer | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens de la mer — aller à la mer, ouvrir le parasol, bronzer, faire un château de sable, faire la planche, sauter dans les vagues, appareiller, pêcher, avoir le mal de mer — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Une femme nage la brasse dans la mer transparente et turquoise, avec la côte rocheuse italienne à l’arrière-plan',
    cardText: `${V} verbes pour la mer : aller à la mer, bronzer, faire la planche, appareiller, pêcher…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-more',
    name: 'Slovesa u moře',
    title: 'Slovesa u moře | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves od moře — jet k moři, otevřít slunečník, opálit se, postavit hrad z písku, splývat na zádech, skákat přes vlny, vyplout, rybařit, mít mořskou nemoc — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Žena plave prsa v průzračném tyrkysovém moři, v pozadí skalnaté italské pobřeží',
    cardText: `${V} sloves pro moře: jet k moři, opálit se, splývat na zádech, vyplout, rybařit…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-morza',
    name: 'Czasowniki nad morzem',
    title: 'Czasowniki nad morzem | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników znad morza — jechać nad morze, rozłożyć parasol, opalać się, zbudować zamek z piasku, unosić się na plecach, skakać przez fale, wypłynąć, łowić ryby, mieć chorobę morską — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Kobieta pływa żabką w przejrzystym turkusowym morzu, w tle skaliste włoskie wybrzeże',
    cardText: `${V} czasowników nad morzem: jechać nad morze, opalać się, unosić się na plecach, wypłynąć, łowić ryby…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-deniz-fiilleri-kelimeleri',
    name: 'Deniz fiilleri',
    title: 'Deniz fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Deniz için ${V} İtalyanca fiil öğrenin — denize gitmek, şemsiyeyi açmak, bronzlaşmak, kumdan kale yapmak, sırtüstü suda durmak, dalgaların üstünden atlamak, demir almak, balık tutmak, deniz tutmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Bir kadın berrak, turkuaz denizde kurbağalama yüzüyor, arka planda kayalık İtalyan kıyısı',
    cardText: `Deniz için ${V} fiil: denize gitmek, bronzlaşmak, sırtüstü suda durmak, demir almak, balık tutmak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-meer',
    name: 'Verben am Meer',
    title: 'Verben am Meer | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben für das Meer — ans Meer fahren, den Sonnenschirm aufspannen, braun werden, eine Sandburg bauen, toter Mann spielen, über die Wellen springen, auslaufen, angeln, seekrank sein — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Eine Frau schwimmt Brust im klaren, türkisfarbenen Meer, im Hintergrund die felsige italienische Küste',
    cardText: `${V} Verben für das Meer: ans Meer fahren, braun werden, toter Mann spielen, auslaufen, angeln …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-sea-verbs-vocabulary',
    name: '海の動詞',
    title: '海の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `海に行く、ビーチパラソルを開く、日焼けする、砂のお城を作る、背浮きをする、波を飛び越える、出航する、釣りをする、船酔いするなど、海で使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '澄んだターコイズ色の海を平泳ぎで泳ぐ女性。背景にはイタリアの岩の多い海岸',
    cardText: `海で使う動詞 ${V} 語：海に行く、日焼けする、背浮きをする、出航する、釣りをする…`,
  },
};

const notes = {
  it: {
    title: 'Andiamo al mare',
    body: `Si dice <em>andare al mare</em>, come <em>andare in montagna</em>; sulla sabbia si sta <em>in spiaggia</em>. In mare <em>fare il bagno</em> vuol dire entrare in acqua e nuotare, non lavarsi. Tanti verbi del mare sono riflessivi e al passato prossimo vogliono <em>essere</em>: <em>mi sono abbronzata</em>, <em>ti sei scottato</em>, <em>ci siamo bagnati i piedi</em>, <em>le onde si infrangono</em>. Anche <em>salpare</em>, <em>sbarcare</em> e <em>affondare</em>, quando nessuno fa niente alla barca, vogliono <em>essere</em>: <em>siamo salpati all’alba</em>, <em>la nave è affondata</em>. <em>Fare il morto</em> non fa paura: vuol dire solo galleggiare sulla schiena. Le parole del mare (la spiaggia, l’ombrellone, la barca, l’ancora…) sono nella lezione ${sea('it')}.`,
  },
  en: {
    title: it('Andiamo al mare'),
    body: `You say ${it('andare al mare')} (to go to the seaside), like ${it('andare in montagna')}; on the sand you are ${it('in spiaggia')} (on the beach). At the sea ${it('fare il bagno')} means going in the water for a swim, not having a bath. Many sea verbs are reflexive and take ${it('essere')} in the ${it('passato prossimo')}: ${it('mi sono abbronzata')} (I got a tan, said by a woman), ${it('ti sei scottato')} (you got burnt), ${it('ci siamo bagnati i piedi')} (we got our feet wet), ${it('le onde si infrangono')} (the waves break). ${it('Salpare')}, ${it('sbarcare')} and ${it('affondare')} also take ${it('essere')} when nobody does anything to the boat: ${it('siamo salpati all’alba')} (we set sail at dawn), ${it('la nave è affondata')} (the ship sank). ${it('Fare il morto')} (literally “to play dead”) is nothing scary: it just means floating on your back. Sea words (beach, umbrella, boat, anchor…) are in the lesson ${sea('en')}.`,
  },
  es: {
    title: it('Andiamo al mare'),
    body: `Se dice ${it('andare al mare')} (ir a la playa), como ${it('andare in montagna')}; sobre la arena se está ${it('in spiaggia')} (en la playa). En el mar, ${it('fare il bagno')} significa meterse en el agua y nadar, no lavarse. Muchos verbos del mar son reflexivos y en el ${it('passato prossimo')} llevan ${it('essere')}: ${it('mi sono abbronzata')} (me bronceé, dicho por una mujer), ${it('ti sei scottato')} (te quemaste), ${it('ci siamo bagnati i piedi')} (nos mojamos los pies), ${it('le onde si infrangono')} (las olas rompen). También ${it('salpare')}, ${it('sbarcare')} y ${it('affondare')} llevan ${it('essere')} cuando nadie actúa sobre el barco: ${it('siamo salpati all’alba')} (zarpamos al amanecer), ${it('la nave è affondata')} (el barco se hundió). ${it('Fare il morto')} es como «hacer el muerto» en español: flotar boca arriba. Las palabras del mar (la playa, la sombrilla, el barco, el ancla…) están en la lección ${sea('es')}.`,
  },
  fr: {
    title: it('Andiamo al mare'),
    body: `On dit ${it('andare al mare')} (aller à la mer), comme ${it('andare in montagna')} ; sur le sable, on est ${it('in spiaggia')} (à la plage). À la mer, ${it('fare il bagno')} veut dire se baigner, pas prendre un bain. Beaucoup de verbes de la mer sont pronominaux et prennent ${it('essere')} au ${it('passato prossimo')} : ${it('mi sono abbronzata')} (j’ai bronzé, dit par une femme), ${it('ti sei scottato')} (tu as pris un coup de soleil), ${it('ci siamo bagnati i piedi')} (nous nous sommes mouillé les pieds), ${it('le onde si infrangono')} (les vagues se brisent). ${it('Salpare')}, ${it('sbarcare')} et ${it('affondare')} prennent aussi ${it('essere')} quand personne n’agit sur le bateau : ${it('siamo salpati all’alba')} (nous avons appareillé à l’aube), ${it('la nave è affondata')} (le navire a coulé). ${it('Fare il morto')} (littéralement « faire le mort ») n’a rien d’inquiétant : c’est faire la planche. Les mots de la mer (la plage, le parasol, le bateau, l’ancre…) sont dans la leçon ${sea('fr')}.`,
  },
  cs: {
    title: it('Andiamo al mare'),
    body: `Říká se ${it('andare al mare')} (jet k moři), stejně jako ${it('andare in montagna')}; na písku jste ${it('in spiaggia')} (na pláži). U moře ${it('fare il bagno')} znamená jít do vody a plavat, ne se koupat ve vaně. Mnoho sloves od moře je zvratných a v ${it('passato prossimo')} mají ${it('essere')}: ${it('mi sono abbronzata')} (opálila jsem se), ${it('ti sei scottato')} (spálil ses), ${it('ci siamo bagnati i piedi')} (namočili jsme si nohy), ${it('le onde si infrangono')} (vlny se tříští). Také ${it('salpare')}, ${it('sbarcare')} a ${it('affondare')} mají ${it('essere')}, když s lodí nikdo nic nedělá: ${it('siamo salpati all’alba')} (vypluli jsme za úsvitu), ${it('la nave è affondata')} (loď se potopila). ${it('Fare il morto')} (doslova „dělat mrtvého“) není nic strašného: znamená to jen splývat na zádech. Slova o moři (pláž, slunečník, loď, kotva…) najdete v lekci ${sea('cs')}.`,
  },
  pl: {
    title: it('Andiamo al mare'),
    body: `Mówi się ${it('andare al mare')} (jechać nad morze), tak jak ${it('andare in montagna')}; na piasku jest się ${it('in spiaggia')} (na plaży). Nad morzem ${it('fare il bagno')} znaczy wejść do wody i popływać, a nie brać kąpiel w wannie. Wiele czasowników morskich jest zwrotnych i w ${it('passato prossimo')} łączy się z ${it('essere')}: ${it('mi sono abbronzata')} (opaliłam się), ${it('ti sei scottato')} (spaliłeś się), ${it('ci siamo bagnati i piedi')} (zamoczyliśmy stopy), ${it('le onde si infrangono')} (fale się rozbijają). Także ${it('salpare')}, ${it('sbarcare')} i ${it('affondare')} łączą się z ${it('essere')}, gdy nikt nic nie robi z łodzią: ${it('siamo salpati all’alba')} (wypłynęliśmy o świcie), ${it('la nave è affondata')} (statek zatonął). ${it('Fare il morto')} (dosłownie „udawać trupa”) to nic strasznego: znaczy tylko unosić się na plecach. Słowa o morzu (plaża, parasol, łódź, kotwica…) są w lekcji ${sea('pl')}.`,
  },
  tr: {
    title: it('Andiamo al mare'),
    body: `${it('andare in montagna')} gibi ${it('andare al mare')} (denize gitmek) denir; kumun üstündeyken ${it('in spiaggia')} (plajda) olunur. Denizde ${it('fare il bagno')} banyo yapmak değil, suya girip yüzmek demektir. Denizle ilgili pek çok fiil dönüşlüdür ve ${it('passato prossimo')} zamanında ${it('essere')} alır: ${it('mi sono abbronzata')} (bronzlaştım, bir kadın söylüyor), ${it('ti sei scottato')} (güneşte yandın), ${it('ci siamo bagnati i piedi')} (ayaklarımızı ıslattık), ${it('le onde si infrangono')} (dalgalar kırılıyor). ${it('Salpare')}, ${it('sbarcare')} ve ${it('affondare')} da tekneye kimse bir şey yapmadığında ${it('essere')} alır: ${it('siamo salpati all’alba')} (şafakta demir aldık), ${it('la nave è affondata')} (gemi battı). ${it('Fare il morto')} (kelimesi kelimesine “ölüyü oynamak”) korkutucu değildir: sadece sırtüstü suda durmak demektir. Deniz kelimeleri (plaj, şemsiye, tekne, çapa…) ${sea('tr')} dersinde.`,
  },
  de: {
    title: it('Andiamo al mare'),
    body: `Man sagt ${it('andare al mare')} (ans Meer fahren), wie ${it('andare in montagna')}; auf dem Sand ist man ${it('in spiaggia')} (am Strand). Am Meer heißt ${it('fare il bagno')} ins Wasser gehen und schwimmen, nicht baden in der Wanne. Viele Verben am Meer sind reflexiv und bilden das ${it('passato prossimo')} mit ${it('essere')}: ${it('mi sono abbronzata')} (ich bin braun geworden, sagt eine Frau), ${it('ti sei scottato')} (du hast einen Sonnenbrand bekommen), ${it('ci siamo bagnati i piedi')} (wir haben uns die Füße nass gemacht), ${it('le onde si infrangono')} (die Wellen brechen sich). Auch ${it('salpare')}, ${it('sbarcare')} und ${it('affondare')} nehmen ${it('essere')}, wenn niemand etwas mit dem Boot macht: ${it('siamo salpati all’alba')} (wir sind bei Sonnenaufgang ausgelaufen), ${it('la nave è affondata')} (das Schiff ist gesunken). ${it('Fare il morto')} (wörtlich „den Toten spielen“) ist harmlos: Es heißt nur, sich auf dem Rücken treiben zu lassen. Die Wörter für das Meer (Strand, Sonnenschirm, Boot, Anker …) stehen in der Lektion ${sea('de')}.`,
  },
  ja: {
    title: it('Andiamo al mare'),
    body: `${it('andare in montagna')} と同じく ${it('andare al mare')}（海に行く）と言います。砂浜にいるときは ${it('in spiaggia')}（ビーチで）です。海での ${it('fare il bagno')} はお風呂ではなく、水に入って泳ぐことです。海の動詞には再帰動詞が多く、${it('passato prossimo')} では ${it('essere')} を使います：${it('mi sono abbronzata')}（女性が「日焼けした」）、${it('ti sei scottato')}（日焼けで赤くなったね）、${it('ci siamo bagnati i piedi')}（足をぬらした）、${it('le onde si infrangono')}（波が砕ける）。${it('Salpare')}、${it('sbarcare')}、${it('affondare')} も、だれかが船に何かをするのでなければ ${it('essere')} を使います：${it('siamo salpati all’alba')}（夜明けに出航した）、${it('la nave è affondata')}（船が沈んだ）。${it('Fare il morto')}（直訳は「死んだふりをする」）はこわい意味ではなく、背浮きをすることです。海の単語（ビーチ、パラソル、船、いかりなど）はレッスン「${sea('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (una barca che lascia il porto sta salpando, ma sta anche navigando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (a boat leaving the harbour is setting sail, but it is also sailing: <em lang="it">navigare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (un barco que sale del puerto zarpa, pero también navega: <em lang="it">navigare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (un bateau qui quitte le port appareille, mais il navigue aussi : <em lang="it">navigare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (loď, která opouští přístav, vyplouvá, ale zároveň pluje: <em lang="it">navigare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (statek, który opuszcza port, wypływa, ale też płynie: <em lang="it">navigare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (limandan ayrılan bir tekne demir alıyordur, ama aynı zamanda seyrediyordur: <em lang="it">navigare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (ein Boot, das den Hafen verlässt, läuft aus, fährt aber auch schon übers Meer: <em lang="it">navigare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（港を出る船は「出航する」のですが、「<em lang="it">navigare</em>」（航海する）でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const seaVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
