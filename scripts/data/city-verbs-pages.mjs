// Stringhe di pagina della lezione «I verbi della città» (2026-09-27), kind 'match' con `photoRows`, come
// «I verbi della casa»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio arrivano da `relationUi` (relations-pages.mjs); qui ci sono la nota della
// pagina (prendere l'autobus / un taxi / un caffe', girare a destra, andare dritto, perdere il treno e
// perdersi, pagare con la carta o in contanti, andare a + infinito, essere con partire e arrivare) e
// l'introduzione dell'esercizio con un esempio della citta'.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { cityVerbs } from './city-verbs.mjs';
import { cityPages } from './city-pages.mjs';
import { houseVerbPages } from './house-verbs-pages.mjs';

const V = cityVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const city = (lang) => linkTo(cityPages[lang]);
const house = (lang) => linkTo(houseVerbPages[lang]);

export const cityVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-citta',
    name: 'I verbi della città',
    title: 'Verbi della città in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani per muoverti in città — attraversare, girare, prendere l’autobus, parcheggiare, pagare, fare la fila, prenotare — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Scene di vita in città: gente che attraversa sulle strisce, una donna che sale sull’autobus, un uomo che paga al mercato, due turisti che fotografano, un ciclista e due amiche che si abbracciano',
    cardText: `${V} verbi per la città: attraversare, girare, prendere l’autobus, parcheggiare, pagare, fare la fila, prenotare…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-city-verbs-vocabulary',
    name: 'City verbs',
    title: 'City verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for getting around town — to cross, to turn, to take the bus, to park, to pay, to queue, to book — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'City life: people crossing at a zebra crossing, a woman getting on a bus, a man paying at the market, two tourists taking photos, a cyclist and two friends hugging',
    cardText: `${V} verbs for the city: to cross, to turn, to take the bus, to park, to pay, to queue, to book…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-la-ciudad-en-italiano',
    name: 'Los verbos de la ciudad',
    title: 'Los verbos de la ciudad | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos para moverte por la ciudad — cruzar, girar, coger el autobús, aparcar, pagar, hacer cola, reservar — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Escenas de la ciudad: gente cruzando por el paso de peatones, una mujer que sube al autobús, un hombre que paga en el mercado, dos turistas haciendo fotos, un ciclista y dos amigas que se abrazan',
    cardText: `${V} verbos para la ciudad: cruzar, girar, coger el autobús, aparcar, pagar, hacer cola, reservar…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-de-la-ville-en-italien',
    name: 'Les verbes de la ville',
    title: 'Les verbes de la ville | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens pour vous déplacer en ville — traverser, tourner, prendre le bus, se garer, payer, faire la queue, réserver — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Scènes de la vie en ville : des gens qui traversent au passage piéton, une femme qui monte dans le bus, un homme qui paie au marché, deux touristes qui prennent des photos, un cycliste et deux amies qui s’embrassent',
    cardText: `${V} verbes pour la ville : traverser, tourner, prendre le bus, se garer, payer, faire la queue, réserver…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-mesta',
    name: 'Slovesa města',
    title: 'Slovesa města | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves pro pohyb po městě — přejít, zahnout, jet autobusem, zaparkovat, zaplatit, stát ve frontě, rezervovat — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Scény z města: lidé přecházejí po přechodu, žena nastupuje do autobusu, muž platí na trhu, dva turisté fotografují, cyklista a dvě kamarádky se objímají',
    cardText: `${V} sloves pro město: přejít, zahnout, jet autobusem, zaparkovat, zaplatit, stát ve frontě, rezervovat…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-miasta',
    name: 'Czasowniki miasta',
    title: 'Czasowniki miasta | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników do poruszania się po mieście — przechodzić, skręcać, jechać autobusem, parkować, płacić, stać w kolejce, rezerwować — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Sceny z miasta: ludzie przechodzą po pasach, kobieta wsiada do autobusu, mężczyzna płaci na targu, dwoje turystów robi zdjęcia, rowerzysta i dwie przyjaciółki się przytulają',
    cardText: `${V} czasowników do miasta: przechodzić, skręcać, jechać autobusem, parkować, płacić, stać w kolejce, rezerwować…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-sehir-fiilleri-kelimeleri',
    name: 'Şehir fiilleri',
    title: 'Şehir fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Şehirde dolaşmak için ${V} İtalyanca fiil öğrenin — karşıdan karşıya geçmek, dönmek, otobüse binmek, park etmek, ödemek, sıraya girmek, rezervasyon yapmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Şehir hayatından sahneler: yaya geçidinden geçen insanlar, otobüse binen bir kadın, pazarda ödeme yapan bir adam, fotoğraf çeken iki turist, bir bisikletli ve sarılan iki arkadaş',
    cardText: `Şehir için ${V} fiil: karşıdan karşıya geçmek, dönmek, otobüse binmek, park etmek, ödemek, sıraya girmek, rezervasyon yapmak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-stadt',
    name: 'Verben in der Stadt',
    title: 'Verben in der Stadt | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben, um dich in der Stadt zurechtzufinden — überqueren, abbiegen, den Bus nehmen, parken, bezahlen, Schlange stehen, reservieren — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Szenen aus der Stadt: Menschen auf dem Zebrastreifen, eine Frau steigt in den Bus, ein Mann bezahlt auf dem Markt, zwei Touristen fotografieren, ein Radfahrer und zwei Freundinnen umarmen sich',
    cardText: `${V} Verben für die Stadt: überqueren, abbiegen, den Bus nehmen, parken, bezahlen, Schlange stehen, reservieren …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-city-verbs-vocabulary',
    name: '町の動詞',
    title: '町の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `渡る、曲がる、バスに乗る、駐車する、払う、列に並ぶ、予約するなど、町で使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '町の暮らし：横断歩道を渡る人々、バスに乗る女性、市場で支払う男性、写真を撮る観光客、自転車に乗る人、抱き合う友だち',
    cardText: `町で使う動詞 ${V} 語：渡る、曲がる、バスに乗る、駐車する、払う、列に並ぶ、予約する…`,
  },
};

const notes = {
  it: {
    title: 'Prendo l’autobus',
    body: `I mezzi si <em>prendono</em>: <em>prendo l’autobus</em>, <em>prendiamo un taxi</em>, <em>prendi la metropolitana</em>; e al bar si <em>prende un caffè</em>. Per le indicazioni: <em>gira a destra</em>, <em>gira a sinistra</em>, <em>vai (sempre) dritto</em>. <em>Perdere il treno</em> è arrivare tardi; <em>perdersi</em> è non trovare più la strada. Si paga <em>con la carta</em> o <em>in contanti</em>. Con <em>andare a</em> e l’infinito si dice dove si va a fare qualcosa: <em>vado a fare la spesa</em>, <em>andiamo a prelevare</em>. <em>Partire</em>, <em>arrivare</em>, <em>perdersi</em>, <em>fermarsi</em> e <em>incontrarsi</em> al passato prossimo vogliono <em>essere</em>: <em>siamo partiti alle otto</em>, <em>ci siamo persi</em>. Entrare, uscire, salire e scendere sono nella lezione ${house('it')}; i luoghi e i mezzi in ${city('it')}.`,
  },
  en: {
    title: it('Prendo l’autobus'),
    body: `In Italian you “take” transport with ${it('prendere')}: ${it('prendo l’autobus')}, ${it('prendiamo un taxi')}, ${it('prendi la metropolitana')}; and at the café you ${it('prendi un caffè')} (have a coffee). For directions: ${it('gira a destra')} (turn right), ${it('gira a sinistra')} (turn left), ${it('vai (sempre) dritto')} (go straight on). ${it('Perdere il treno')} is to miss the train; ${it('perdersi')} is to get lost. You pay ${it('con la carta')} (by card) or ${it('in contanti')} (in cash). ${it('Andare a')} plus the infinitive says where you are going to do something: ${it('vado a fare la spesa')}, ${it('andiamo a prelevare')}. ${it('Partire')}, ${it('arrivare')}, ${it('perdersi')}, ${it('fermarsi')} and ${it('incontrarsi')} take ${it('essere')} in the ${it('passato prossimo')}: ${it('siamo partiti alle otto')}, ${it('ci siamo persi')}. To go in, out, up and down are in the lesson ${house('en')}; places and transport in ${city('en')}.`,
  },
  es: {
    title: it('Prendo l’autobus'),
    body: `Los medios de transporte se «toman» con ${it('prendere')}: ${it('prendo l’autobus')}, ${it('prendiamo un taxi')}, ${it('prendi la metropolitana')}; y en el bar se ${it('prende un caffè')} (se toma un café). Para las indicaciones: ${it('gira a destra')} (gira a la derecha), ${it('gira a sinistra')} (gira a la izquierda), ${it('vai (sempre) dritto')} (sigue recto). ${it('Perdere il treno')} es perder el tren; ${it('perdersi')} es perderse. Se paga ${it('con la carta')} (con tarjeta) o ${it('in contanti')} (en efectivo). Con ${it('andare a')} y el infinitivo se dice adónde vas a hacer algo: ${it('vado a fare la spesa')}, ${it('andiamo a prelevare')}. ${it('Partire')}, ${it('arrivare')}, ${it('perdersi')}, ${it('fermarsi')} e ${it('incontrarsi')} llevan ${it('essere')} en el ${it('passato prossimo')}: ${it('siamo partiti alle otto')}, ${it('ci siamo persi')}. Entrar, salir, subir y bajar están en la lección ${house('es')}; los lugares y los medios de transporte, en ${city('es')}.`,
  },
  fr: {
    title: it('Prendo l’autobus'),
    body: `Les transports se « prennent » avec ${it('prendere')} : ${it('prendo l’autobus')}, ${it('prendiamo un taxi')}, ${it('prendi la metropolitana')} ; et au bar, on ${it('prende un caffè')} (on prend un café). Pour les indications : ${it('gira a destra')} (tourne à droite), ${it('gira a sinistra')} (tourne à gauche), ${it('vai (sempre) dritto')} (va tout droit). ${it('Perdere il treno')}, c’est rater le train ; ${it('perdersi')}, c’est se perdre. On paie ${it('con la carta')} (par carte) ou ${it('in contanti')} (en espèces). ${it('Andare a')} suivi de l’infinitif dit où l’on va faire quelque chose : ${it('vado a fare la spesa')}, ${it('andiamo a prelevare')}. ${it('Partire')}, ${it('arrivare')}, ${it('perdersi')}, ${it('fermarsi')} et ${it('incontrarsi')} prennent ${it('essere')} au ${it('passato prossimo')} : ${it('siamo partiti alle otto')}, ${it('ci siamo persi')}. Entrer, sortir, monter et descendre sont dans la leçon ${house('fr')} ; les lieux et les transports dans ${city('fr')}.`,
  },
  cs: {
    title: it('Prendo l’autobus'),
    body: `Dopravní prostředky se v italštině „berou“ slovesem ${it('prendere')}: ${it('prendo l’autobus')} (jedu autobusem), ${it('prendiamo un taxi')}, ${it('prendi la metropolitana')}; a v baru si ${it('prendi un caffè')} (dáš si kávu). Při popisu cesty: ${it('gira a destra')} (zahni doprava), ${it('gira a sinistra')} (zahni doleva), ${it('vai (sempre) dritto')} (jdi pořád rovně). ${it('Perdere il treno')} je zmeškat vlak; ${it('perdersi')} je ztratit se. Platí se ${it('con la carta')} (kartou) nebo ${it('in contanti')} (v hotovosti). ${it('Andare a')} s infinitivem říká, kam jdete něco udělat: ${it('vado a fare la spesa')}, ${it('andiamo a prelevare')}. ${it('Partire')}, ${it('arrivare')}, ${it('perdersi')}, ${it('fermarsi')} a ${it('incontrarsi')} mají v ${it('passato prossimo')} ${it('essere')}: ${it('siamo partiti alle otto')}, ${it('ci siamo persi')}. Vejít, vyjít, jít nahoru a dolů najdete v lekci ${house('cs')}; místa a dopravu v lekci ${city('cs')}.`,
  },
  pl: {
    title: it('Prendo l’autobus'),
    body: `Środki transportu po włosku się „bierze” czasownikiem ${it('prendere')}: ${it('prendo l’autobus')} (jadę autobusem), ${it('prendiamo un taxi')}, ${it('prendi la metropolitana')}; a w barze ${it('prendi un caffè')} (bierzesz kawę). Przy wskazówkach: ${it('gira a destra')} (skręć w prawo), ${it('gira a sinistra')} (skręć w lewo), ${it('vai (sempre) dritto')} (idź prosto). ${it('Perdere il treno')} to spóźnić się na pociąg; ${it('perdersi')} to zgubić się. Płaci się ${it('con la carta')} (kartą) albo ${it('in contanti')} (gotówką). ${it('Andare a')} z bezokolicznikiem mówi, dokąd idziesz coś zrobić: ${it('vado a fare la spesa')}, ${it('andiamo a prelevare')}. ${it('Partire')}, ${it('arrivare')}, ${it('perdersi')}, ${it('fermarsi')} i ${it('incontrarsi')} w ${it('passato prossimo')} łączą się z ${it('essere')}: ${it('siamo partiti alle otto')}, ${it('ci siamo persi')}. Wchodzić, wychodzić, wchodzić na górę i schodzić są w lekcji ${house('pl')}; miejsca i transport w lekcji ${city('pl')}.`,
  },
  tr: {
    title: it('Prendo l’autobus'),
    body: `İtalyancada ulaşım araçları ${it('prendere')} (almak) fiiliyle “alınır”: ${it('prendo l’autobus')} (otobüse biniyorum), ${it('prendiamo un taxi')}, ${it('prendi la metropolitana')}; barda da ${it('prendi un caffè')} (kahve içersin). Yol tarif ederken: ${it('gira a destra')} (sağa dön), ${it('gira a sinistra')} (sola dön), ${it('vai (sempre) dritto')} (dümdüz git). ${it('Perdere il treno')} treni kaçırmaktır; ${it('perdersi')} kaybolmaktır. ${it('Con la carta')} (kartla) ya da ${it('in contanti')} (nakit) ödenir. ${it('Andare a')} ve mastar, bir şey yapmaya nereye gittiğinizi söyler: ${it('vado a fare la spesa')}, ${it('andiamo a prelevare')}. ${it('Partire')}, ${it('arrivare')}, ${it('perdersi')}, ${it('fermarsi')} ve ${it('incontrarsi')}, ${it('passato prossimo')} zamanında ${it('essere')} alır: ${it('siamo partiti alle otto')}, ${it('ci siamo persi')}. Girmek, çıkmak, yukarı çıkmak ve inmek ${house('tr')} dersinde; yerler ve ulaşım ${city('tr')} dersinde.`,
  },
  de: {
    title: it('Prendo l’autobus'),
    body: `Verkehrsmittel „nimmt“ man im Italienischen mit ${it('prendere')}: ${it('prendo l’autobus')}, ${it('prendiamo un taxi')}, ${it('prendi la metropolitana')}; und in der Bar ${it('prendi un caffè')} (trinkst du einen Kaffee). Für Wegbeschreibungen: ${it('gira a destra')} (bieg rechts ab), ${it('gira a sinistra')} (bieg links ab), ${it('vai (sempre) dritto')} (geh geradeaus). ${it('Perdere il treno')} heißt den Zug verpassen; ${it('perdersi')} heißt sich verlaufen. Man zahlt ${it('con la carta')} (mit Karte) oder ${it('in contanti')} (bar). ${it('Andare a')} mit Infinitiv sagt, wohin man geht, um etwas zu tun: ${it('vado a fare la spesa')}, ${it('andiamo a prelevare')}. ${it('Partire')}, ${it('arrivare')}, ${it('perdersi')}, ${it('fermarsi')} und ${it('incontrarsi')} bilden das ${it('passato prossimo')} mit ${it('essere')}: ${it('siamo partiti alle otto')}, ${it('ci siamo persi')}. Hinein-, hinaus-, hinauf- und hinuntergehen stehen in der Lektion ${house('de')}; Orte und Verkehrsmittel in ${city('de')}.`,
  },
  ja: {
    title: it('Prendo l’autobus'),
    body: `イタリア語では乗り物に ${it('prendere')}（とる）を使います：${it('prendo l’autobus')}（バスに乗る）、${it('prendiamo un taxi')}、${it('prendi la metropolitana')}。バールでは ${it('prendi un caffè')}（コーヒーを飲む）と言います。道案内では ${it('gira a destra')}（右に曲がって）、${it('gira a sinistra')}（左に曲がって）、${it('vai (sempre) dritto')}（まっすぐ行って）。${it('Perdere il treno')} は「電車に乗り遅れる」、${it('perdersi')} は「道に迷う」です。支払いは ${it('con la carta')}（カードで）か ${it('in contanti')}（現金で）。${it('Andare a')} ＋不定詞で「〜しに行く」：${it('vado a fare la spesa')}、${it('andiamo a prelevare')}。${it('Partire')}、${it('arrivare')}、${it('perdersi')}、${it('fermarsi')}、${it('incontrarsi')} の ${it('passato prossimo')} は ${it('essere')} を使います：${it('siamo partiti alle otto')}、${it('ci siamo persi')}。入る・出る・上がる・下りるはレッスン「${house('ja')}」に、場所と乗り物は「${city('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi è alla cassa sta pagando, ma anche comprando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (someone at the till is paying, but also buying: <em lang="it">comprare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien está en la caja paga, pero también compra: <em lang="it">comprare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (à la caisse, on paie mais on achète aussi : <em lang="it">comprare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo platí u pokladny, zároveň i nakupuje: <em lang="it">comprare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (ktoś przy kasie płaci, ale też kupuje: <em lang="it">comprare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (kasada ödeme yapan kişi aynı zamanda satın alıyordur: <em lang="it">comprare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer an der Kasse bezahlt, kauft auch: <em lang="it">comprare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（レジで払っている人は「<em lang="it">comprare</em>」（買う）でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const cityVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
