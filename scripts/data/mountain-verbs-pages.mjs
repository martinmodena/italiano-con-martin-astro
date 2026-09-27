// Stringhe di pagina della lezione «I verbi della montagna» (2026-09-27), kind 'match' con `photoRows`, come
// «I verbi della città»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio arrivano da `relationUi` (relations-pages.mjs); qui ci sono la nota della
// pagina (andare a sciare, le espressioni con fare, salire e scendere con essere, nevicare senza soggetto con
// essere o avere, i riflessivi) e l'introduzione dell'esercizio con un esempio della montagna.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { mountainVerbs } from './mountain-verbs.mjs';
import { mountainPages } from './mountain-pages.mjs';

const V = mountainVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const mountain = (lang) => linkTo(mountainPages[lang]);

export const mountainVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-montagna',
    name: 'I verbi della montagna',
    title: 'Verbi della montagna in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani della montagna — fare un’escursione, salire in cima, fare una sosta, montare la tenda, accendere un falò, sciare, andare in slittino, spalare la neve — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Sei scene di montagna: escursionisti su un sentiero, una scalatrice su una parete di roccia, una tenda montata su un prato, amici intorno a un falò, uno sciatore sulla neve e bambini che vanno in slittino',
    cardText: `${V} verbi per la montagna: fare un’escursione, salire in cima, montare la tenda, sciare, andare in slittino…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-mountain-verbs-vocabulary',
    name: 'Mountain verbs',
    title: 'Mountain verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for the mountains — to go hiking, to climb to the top, to stop for a rest, to put up the tent, to light a campfire, to ski, to go sledging, to shovel snow — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'Six mountain scenes: hikers on a trail, a climber on a rock face, a tent on a meadow, friends around a campfire, a skier on the snow and children sledging',
    cardText: `${V} verbs for the mountains: to go hiking, to climb to the top, to put up the tent, to ski, to go sledging…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-la-montana-en-italiano',
    name: 'Los verbos de la montaña',
    title: 'Los verbos de la montaña | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos de la montaña — hacer una excursión, subir a la cima, hacer una parada, montar la tienda, encender una hoguera, esquiar, ir en trineo, quitar la nieve — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Seis escenas de montaña: excursionistas en un sendero, una escaladora en una pared de roca, una tienda en un prado, amigos alrededor de una hoguera, un esquiador en la nieve y niños en trineo',
    cardText: `${V} verbos para la montaña: hacer una excursión, subir a la cima, montar la tienda, esquiar, ir en trineo…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-de-la-montagne-en-italien',
    name: 'Les verbes de la montagne',
    title: 'Les verbes de la montagne | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens de la montagne — faire une randonnée, monter au sommet, faire une halte, monter la tente, allumer un feu de camp, skier, faire de la luge, déneiger — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Six scènes de montagne : des randonneurs sur un sentier, une grimpeuse sur une paroi rocheuse, une tente sur un pré, des amis autour d’un feu de camp, un skieur sur la neige et des enfants qui font de la luge',
    cardText: `${V} verbes pour la montagne : faire une randonnée, monter au sommet, monter la tente, skier, faire de la luge…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-hor',
    name: 'Slovesa na horách',
    title: 'Slovesa na horách | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves z hor — jít na túru, vystoupat na vrchol, udělat si zastávku, postavit stan, rozdělat táborák, lyžovat, sáňkovat, odhazovat sníh — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Šest horských scén: turisté na stezce, horolezkyně na skalní stěně, stan na louce, přátelé u táboráku, lyžař na sněhu a děti na sáňkách',
    cardText: `${V} sloves pro hory: jít na túru, vystoupat na vrchol, postavit stan, lyžovat, sáňkovat…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-gor',
    name: 'Czasowniki w górach',
    title: 'Czasowniki w górach | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników z gór — pójść na wędrówkę, wejść na szczyt, zrobić postój, rozbić namiot, rozpalić ognisko, jeździć na nartach, zjeżdżać na sankach, odśnieżać — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Sześć górskich scen: turyści na szlaku, wspinaczka na skalnej ścianie, namiot na łące, przyjaciele przy ognisku, narciarz na śniegu i dzieci na sankach',
    cardText: `${V} czasowników w górach: pójść na wędrówkę, wejść na szczyt, rozbić namiot, jeździć na nartach, zjeżdżać na sankach…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-dag-fiilleri-kelimeleri',
    name: 'Dağ fiilleri',
    title: 'Dağ fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Dağ için ${V} İtalyanca fiil öğrenin — doğa yürüyüşü yapmak, zirveye çıkmak, mola vermek, çadır kurmak, kamp ateşi yakmak, kayak yapmak, kızak kaymak, kar küremek — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Altı dağ sahnesi: patikada yürüyüşçüler, kaya duvarına tırmanan bir kadın, çayırda kurulu bir çadır, kamp ateşinin başında arkadaşlar, karda bir kayakçı ve kızak kayan çocuklar',
    cardText: `Dağ için ${V} fiil: doğa yürüyüşü yapmak, zirveye çıkmak, çadır kurmak, kayak yapmak, kızak kaymak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-berge',
    name: 'Verben in den Bergen',
    title: 'Verben in den Bergen | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben für die Berge — eine Wanderung machen, auf den Gipfel steigen, eine Rast machen, das Zelt aufbauen, ein Lagerfeuer machen, Ski fahren, Schlitten fahren, Schnee schippen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Sechs Bergszenen: Wanderer auf einem Pfad, eine Kletterin an einer Felswand, ein Zelt auf einer Wiese, Freunde am Lagerfeuer, ein Skifahrer im Schnee und Kinder beim Schlittenfahren',
    cardText: `${V} Verben für die Berge: wandern, auf den Gipfel steigen, das Zelt aufbauen, Ski fahren, Schlitten fahren …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-mountain-verbs-vocabulary',
    name: '山の動詞',
    title: '山の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `ハイキングをする、頂上に登る、ひと休みする、テントを張る、たき火をする、スキーをする、そりで滑る、雪かきをするなど、山で使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '山の6つの場面：山道を歩くハイカー、岩壁を登る女性、草原に張ったテント、たき火を囲む友だち、雪の上のスキーヤー、そりで滑る子どもたち',
    cardText: `山で使う動詞 ${V} 語：ハイキングをする、頂上に登る、テントを張る、スキーをする、そりで滑る…`,
  },
};

const notes = {
  it: {
    title: 'Andiamo a sciare',
    body: `Con <em>andare a</em> e l’infinito si dice che cosa si va a fare: <em>andiamo a sciare</em>, <em>vado a raccogliere funghi</em>. Tante attività si fanno con <em>fare</em>: <em>fare un’escursione</em>, <em>una sosta</em>, <em>un picnic</em>, <em>snowboard</em>, <em>un pupazzo di neve</em>, <em>a palle di neve</em>. <em>Salire</em> e <em>scendere</em> al passato prossimo vogliono <em>essere</em>: <em>siamo saliti in cima</em>, <em>siamo scesi a valle</em>; anche i riflessivi: <em>mi sono fatto male</em>, <em>la neve si è sciolta</em>. <em>Nevicare</em> non ha soggetto, e al passato va bene sia <em>è nevicato</em> sia <em>ha nevicato</em>. Le parole della montagna (la cima, il sentiero, il rifugio, gli sci…) sono nella lezione ${mountain('it')}.`,
  },
  en: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} plus the infinitive says what you are going to do: ${it('andiamo a sciare')} (let’s go skiing), ${it('vado a raccogliere funghi')} (I’m going mushroom picking). Many activities use ${it('fare')}: ${it('fare un’escursione')} (to go hiking), ${it('una sosta')} (a rest stop), ${it('un picnic')}, ${it('snowboard')}, ${it('un pupazzo di neve')} (a snowman), ${it('a palle di neve')} (a snowball fight). ${it('Salire')} and ${it('scendere')} take ${it('essere')} in the ${it('passato prossimo')}: ${it('siamo saliti in cima')}, ${it('siamo scesi a valle')}; so do reflexive verbs: ${it('mi sono fatto male')} (I hurt myself), ${it('la neve si è sciolta')} (the snow has melted). ${it('Nevicare')} (to snow) has no subject, and in the past both ${it('è nevicato')} and ${it('ha nevicato')} are correct. Mountain words (summit, trail, hut, skis…) are in the lesson ${mountain('en')}.`,
  },
  es: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} con el infinitivo dice qué se va a hacer: ${it('andiamo a sciare')} (vamos a esquiar), ${it('vado a raccogliere funghi')} (voy a recoger setas). Muchas actividades se dicen con ${it('fare')} (hacer): ${it('fare un’escursione')}, ${it('una sosta')} (una parada), ${it('un picnic')}, ${it('snowboard')}, ${it('un pupazzo di neve')} (un muñeco de nieve), ${it('a palle di neve')} (una guerra de bolas de nieve). ${it('Salire')} y ${it('scendere')} llevan ${it('essere')} en el ${it('passato prossimo')}: ${it('siamo saliti in cima')}, ${it('siamo scesi a valle')}; también los reflexivos: ${it('mi sono fatto male')} (me hice daño), ${it('la neve si è sciolta')} (la nieve se derritió). ${it('Nevicare')} (nevar) no tiene sujeto, y en pasado valen tanto ${it('è nevicato')} como ${it('ha nevicato')}. Las palabras de la montaña (la cima, el sendero, el refugio, los esquís…) están en la lección ${mountain('es')}.`,
  },
  fr: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} suivi de l’infinitif dit ce qu’on va faire : ${it('andiamo a sciare')} (allons skier), ${it('vado a raccogliere funghi')} (je vais cueillir des champignons). Beaucoup d’activités se disent avec ${it('fare')} (faire) : ${it('fare un’escursione')}, ${it('una sosta')} (une halte), ${it('un picnic')}, ${it('snowboard')}, ${it('un pupazzo di neve')} (un bonhomme de neige), ${it('a palle di neve')} (une bataille de boules de neige). ${it('Salire')} et ${it('scendere')} prennent ${it('essere')} au ${it('passato prossimo')} : ${it('siamo saliti in cima')}, ${it('siamo scesi a valle')} ; les verbes pronominaux aussi : ${it('mi sono fatto male')} (je me suis fait mal), ${it('la neve si è sciolta')} (la neige a fondu). ${it('Nevicare')} (neiger) n’a pas de sujet, et au passé on dit aussi bien ${it('è nevicato')} que ${it('ha nevicato')}. Les mots de la montagne (le sommet, le sentier, le refuge, les skis…) sont dans la leçon ${mountain('fr')}.`,
  },
  cs: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} s infinitivem říká, co jdete dělat: ${it('andiamo a sciare')} (jdeme lyžovat), ${it('vado a raccogliere funghi')} (jdu na houby). Mnoho činností se vyjadřuje slovesem ${it('fare')} (dělat): ${it('fare un’escursione')} (jít na túru), ${it('una sosta')} (zastávku), ${it('un picnic')}, ${it('snowboard')}, ${it('un pupazzo di neve')} (sněhuláka), ${it('a palle di neve')} (koulovačku). ${it('Salire')} a ${it('scendere')} mají v ${it('passato prossimo')} ${it('essere')}: ${it('siamo saliti in cima')}, ${it('siamo scesi a valle')}; stejně tak zvratná slovesa: ${it('mi sono fatto male')} (ublížil jsem si), ${it('la neve si è sciolta')} (sníh roztál). ${it('Nevicare')} (sněžit) nemá podmět a v minulém čase je správně ${it('è nevicato')} i ${it('ha nevicato')}. Slova o horách (vrchol, stezka, chata, lyže…) najdete v lekci ${mountain('cs')}.`,
  },
  pl: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} z bezokolicznikiem mówi, co idziesz robić: ${it('andiamo a sciare')} (jedziemy na narty), ${it('vado a raccogliere funghi')} (idę na grzyby). Wiele czynności wyraża się czasownikiem ${it('fare')} (robić): ${it('fare un’escursione')} (pójść na wędrówkę), ${it('una sosta')} (postój), ${it('un picnic')}, ${it('snowboard')}, ${it('un pupazzo di neve')} (bałwana), ${it('a palle di neve')} (bitwę na śnieżki). ${it('Salire')} i ${it('scendere')} w ${it('passato prossimo')} łączą się z ${it('essere')}: ${it('siamo saliti in cima')}, ${it('siamo scesi a valle')}; tak samo czasowniki zwrotne: ${it('mi sono fatto male')} (zrobiłem sobie krzywdę), ${it('la neve si è sciolta')} (śnieg stopniał). ${it('Nevicare')} (padać o śniegu) nie ma podmiotu, a w przeszłości poprawne są zarówno ${it('è nevicato')}, jak i ${it('ha nevicato')}. Słowa o górach (szczyt, szlak, schronisko, narty…) są w lekcji ${mountain('pl')}.`,
  },
  tr: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} ve mastar, ne yapmaya gittiğinizi söyler: ${it('andiamo a sciare')} (kayağa gidiyoruz), ${it('vado a raccogliere funghi')} (mantar toplamaya gidiyorum). Pek çok etkinlik ${it('fare')} (yapmak) ile söylenir: ${it('fare un’escursione')} (doğa yürüyüşü), ${it('una sosta')} (mola), ${it('un picnic')}, ${it('snowboard')}, ${it('un pupazzo di neve')} (kardan adam), ${it('a palle di neve')} (kartopu savaşı). ${it('Salire')} ve ${it('scendere')}, ${it('passato prossimo')} zamanında ${it('essere')} alır: ${it('siamo saliti in cima')}, ${it('siamo scesi a valle')}; dönüşlü fiiller de öyle: ${it('mi sono fatto male')} (bir yerimi incittim), ${it('la neve si è sciolta')} (kar eridi). ${it('Nevicare')} (kar yağmak) öznesizdir ve geçmişte hem ${it('è nevicato')} hem ${it('ha nevicato')} doğrudur. Dağ kelimeleri (zirve, patika, dağ evi, kayaklar…) ${mountain('tr')} dersinde.`,
  },
  de: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} mit Infinitiv sagt, was man vorhat: ${it('andiamo a sciare')} (wir gehen Ski fahren), ${it('vado a raccogliere funghi')} (ich gehe Pilze sammeln). Viele Tätigkeiten bildet man mit ${it('fare')} (machen): ${it('fare un’escursione')} (wandern), ${it('una sosta')} (eine Rast), ${it('un picnic')}, ${it('snowboard')}, ${it('un pupazzo di neve')} (einen Schneemann), ${it('a palle di neve')} (eine Schneeballschlacht). ${it('Salire')} und ${it('scendere')} bilden das ${it('passato prossimo')} mit ${it('essere')}: ${it('siamo saliti in cima')}, ${it('siamo scesi a valle')}; ebenso die reflexiven Verben: ${it('mi sono fatto male')} (ich habe mir wehgetan), ${it('la neve si è sciolta')} (der Schnee ist geschmolzen). ${it('Nevicare')} (schneien) hat kein Subjekt, und in der Vergangenheit sind ${it('è nevicato')} und ${it('ha nevicato')} beide richtig. Die Wörter für die Berge (Gipfel, Wanderweg, Hütte, Skier …) stehen in der Lektion ${mountain('de')}.`,
  },
  ja: {
    title: it('Andiamo a sciare'),
    body: `${it('Andare a')} ＋不定詞で「〜しに行く」：${it('andiamo a sciare')}（スキーに行こう）、${it('vado a raccogliere funghi')}（キノコ採りに行く）。多くの活動は ${it('fare')}（する）で表します：${it('fare un’escursione')}（ハイキング）、${it('una sosta')}（ひと休み）、${it('un picnic')}、${it('snowboard')}、${it('un pupazzo di neve')}（雪だるま）、${it('a palle di neve')}（雪合戦）。${it('Salire')} と ${it('scendere')} の ${it('passato prossimo')} は ${it('essere')} を使います：${it('siamo saliti in cima')}、${it('siamo scesi a valle')}。再帰動詞も同じです：${it('mi sono fatto male')}（けがをした）、${it('la neve si è sciolta')}（雪が溶けた）。${it('Nevicare')}（雪が降る）には主語がなく、過去形は ${it('è nevicato')} も ${it('ha nevicato')} も正しいです。山の単語（頂上、山道、山小屋、スキー板など）はレッスン「${mountain('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi arriva sulla vetta sta salendo in cima, ma forse sta anche scalando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (someone reaching the summit is climbing to the top, but may also be rock climbing: <em lang="it">scalare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien llega a la cumbre sube a la cima, pero quizá también escala: <em lang="it">scalare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (qui arrive au sommet y monte, mais escalade peut-être aussi : <em lang="it">scalare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo dorazí na vrchol, vystoupal na něj, ale možná i lezl po skále: <em lang="it">scalare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (ktoś, kto dotarł na szczyt, wszedł na niego, ale może też się wspinał: <em lang="it">scalare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (zirveye varan kişi zirveye çıkmıştır, ama belki kayaya da tırmanmıştır: <em lang="it">scalare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer den Gipfel erreicht, ist hinaufgestiegen, vielleicht aber auch geklettert: <em lang="it">scalare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（頂上に着いた人は「頂上に登った」のですが、「<em lang="it">scalare</em>」（岩を登る）かもしれません）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const mountainVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
