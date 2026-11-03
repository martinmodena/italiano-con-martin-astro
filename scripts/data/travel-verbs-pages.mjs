// Stringhe di pagina della lezione «I verbi del viaggio» (2026-11-03), kind 'match' con `photoRows`, come
// «I verbi della città»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// La nota NON e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// in italiano la casa si AFFITTA ma la macchina si NOLEGGIA, mentre quasi tutte le lingue degli studenti hanno
// un verbo solo (rent, alquilar, louer, pronajmout, wynająć, kiralamak, 借りる; il tedesco distingue
// meno di noi); poi fare la valigia, fare il biglietto, prendere l'aereo, dare un passaggio, e decollare e
// atterrare con essere. Ogni lingua ha in piu' le sue trappole.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { travelVerbs } from './travel-verbs.mjs';
import { travelPages } from './travel-pages.mjs';
import { cityVerbPages } from './city-verbs-pages.mjs';

const V = travelVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const travel = (lang) => linkTo(travelPages[lang]);
const city = (lang) => linkTo(cityVerbPages[lang]);

export const travelVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-viaggio',
    name: 'I verbi del viaggio',
    title: 'Verbi del viaggio in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani per viaggiare — fare la valigia, fare il check-in, decollare, atterrare, ritirare i bagagli, dare un passaggio, alloggiare — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt: 'Una ragazza chiude una valigia blu sul letto, davanti a una finestra aperta su un ulivo',
    cardText: `${V} verbi per viaggiare: fare la valigia, fare il check-in, decollare, atterrare, dare un passaggio, alloggiare…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-travel-verbs-vocabulary',
    name: 'Travel verbs',
    title: 'Travel verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for travelling — to pack, to check in, to take off, to land, to collect your luggage, to give someone a lift, to stay — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt: 'A young woman closing a blue suitcase on the bed, in front of an open window with an olive tree outside',
    cardText: `${V} verbs for travelling: to pack, to check in, to take off, to land, to give someone a lift, to stay…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-del-viaje-en-italiano',
    name: 'Los verbos del viaje',
    title: 'Los verbos del viaje | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos para viajar — hacer la maleta, facturar, despegar, aterrizar, recoger el equipaje, llevar a alguien en coche, alojarse — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt: 'Una chica cierra una maleta azul sobre la cama, delante de una ventana abierta con un olivo fuera',
    cardText: `${V} verbos para viajar: hacer la maleta, facturar, despegar, aterrizar, llevar a alguien, alojarse…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-du-voyage-en-italien',
    name: 'Les verbes du voyage',
    title: 'Les verbes du voyage | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens pour voyager — faire sa valise, s’enregistrer, décoller, atterrir, récupérer ses bagages, emmener quelqu’un en voiture, loger — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt: 'Une jeune femme ferme une valise bleue sur le lit, devant une fenêtre ouverte sur un olivier',
    cardText: `${V} verbes pour voyager : faire sa valise, s’enregistrer, décoller, atterrir, emmener quelqu’un, loger…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-cestovani',
    name: 'Slovesa cestování',
    title: 'Slovesa cestování | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves na cesty — balit si kufr, odbavit se, vzlétnout, přistát, vyzvednout si zavazadla, svézt někoho, ubytovat se — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt: 'Mladá žena zavírá modrý kufr na posteli před otevřeným oknem s olivovníkem',
    cardText: `${V} sloves na cesty: balit si kufr, odbavit se, vzlétnout, přistát, svézt někoho, ubytovat se…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-podrozy',
    name: 'Czasowniki podróży',
    title: 'Czasowniki podróży | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników na podróż — pakować walizkę, odprawić się, startować, lądować, odebrać bagaż, podwieźć kogoś, zatrzymać się w hotelu — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt: 'Młoda kobieta zamyka niebieską walizkę na łóżku, przed otwartym oknem z widokiem na drzewo oliwne',
    cardText: `${V} czasowników na podróż: pakować walizkę, odprawić się, startować, lądować, podwieźć kogoś, zatrzymać się w hotelu…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-seyahat-fiilleri-kelimeleri',
    name: 'Seyahat fiilleri',
    title: 'Seyahat fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Seyahat için ${V} İtalyanca fiil öğrenin — bavul hazırlamak, check-in yapmak, kalkmak, inmek, bagajları almak, birini arabayla bırakmak, otelde kalmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt: 'Genç bir kadın, dışarıda bir zeytin ağacı görünen açık pencerenin önünde, yatağın üstündeki mavi bavulu kapatıyor',
    cardText: `Seyahat için ${V} fiil: bavul hazırlamak, check-in yapmak, kalkmak, inmek, birini bırakmak, otelde kalmak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-reisen',
    name: 'Verben auf Reisen',
    title: 'Verben auf Reisen | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben für die Reise — den Koffer packen, einchecken, starten, landen, das Gepäck abholen, jemanden mitnehmen, übernachten — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt: 'Eine junge Frau schließt einen blauen Koffer auf dem Bett, vor einem offenen Fenster mit einem Olivenbaum draußen',
    cardText: `${V} Verben für die Reise: den Koffer packen, einchecken, starten, landen, jemanden mitnehmen, übernachten …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-travel-verbs-vocabulary',
    name: '旅行の動詞',
    title: '旅行の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `荷物を詰める、チェックインする、離陸する、着陸する、荷物を受け取る、車に乗せてあげる、泊まるなど、旅行で使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt: 'オリーブの木が見える開いた窓の前で、ベッドの上の青いスーツケースを閉める若い女性',
    cardText: `旅行で使う動詞 ${V} 語：荷物を詰める、チェックインする、離陸する、着陸する、車に乗せてあげる、泊まる…`,
  },
};

const notes = {
  it: {
    title: 'Affittare o noleggiare?',
    body: `La casa e l’appartamento si <em>affittano</em>; la macchina, la bici e la barca si <em>noleggiano</em>. Molti verbi del viaggio si fanno con <em>fare</em>: <em>fare la valigia</em> (e <em>disfarla</em> quando si arriva), <em>fare il biglietto</em> (comprarlo), <em>fare il check-in</em>, <em>fare l’autostop</em>. L’aereo, come il treno, si <em>prende</em>: <em>prendo l’aereo delle sette</em>. Chi ti porta in macchina ti <em>dà un passaggio</em>: <em>mi dai un passaggio?</em> <em>Decollare</em> e <em>atterrare</em> al passato prossimo di solito vogliono <em>essere</em> quando parli dell’aereo o di chi c’è sopra: <em>siamo atterrati a Bari</em>. <em>Godersi</em> e <em>farsi un selfie</em> si coniugano con il pronome: <em>goditi la vacanza!</em>, <em>ci siamo fatti un selfie</em>. Partire, arrivare, timbrare e prenotare sono nella lezione ${city('it')}; le parole del viaggio in ${travel('it')}.`,
  },
  en: {
    title: `${it('Affittare')} or ${it('noleggiare')}?`,
    body: `English “rent” is two verbs in Italian: a flat or a house ${it('si affitta')} (${it('affittiamo una casa al mare')}), while a car, a bike or a boat ${it('si noleggia')} (${it('noleggiamo una macchina')}). Watch out for ${it('fare')}: you ${it('fai la valigia')} (pack), ${it('fai il biglietto')} (buy the ticket, not “make” it), ${it('fai il check-in')} and ${it('fai l’autostop')}. You don’t “fly to Rome” with a verb of flying: you ${it('prendi l’aereo')}, just as you ${it('prendi il treno')}. A lift is ${it('un passaggio')}: ${it('mi dai un passaggio?')} (can you give me a lift?); nothing to do with a passage. ${it('Decollare')} and ${it('atterrare')} usually take ${it('essere')} when you talk about the plane or the passengers: ${it('siamo atterrati a Bari')} (we landed in Bari). And “to stay at a hotel” is ${it('alloggiare')}, not ${it('stare')}: ${it('alloggiamo in un piccolo albergo')}. To leave, arrive, validate and book are in ${city('en')}; the travel nouns in ${travel('en')}.`,
  },
  es: {
    title: `${it('Affittare')} o ${it('noleggiare')}?`,
    body: `«Alquilar» son dos verbos en italiano: el piso o la casa ${it('si affitta')} (${it('affittiamo una casa al mare')}), pero el coche, la bici o la barca ${it('si noleggia')} (${it('noleggiamo una macchina')}). «Llevar a alguien en coche» es ${it('dare un passaggio')}: ${it('mi dai un passaggio?')}. Cuidado con ${it('fare')}: «hacer la maleta» es igual, ${it('fare la valigia')}, pero «sacar el billete» es ${it('fare il biglietto')} y «facturar» es ${it('fare il check-in')}. El avión, como el tren, se ${it('prende')}: ${it('prendo l’aereo')} (cojo el avión). ${it('Atterrare')} se parece a «aterrizar», pero «despegar» es ${it('decollare')}; en el ${it('passato prossimo')} los dos suelen llevar ${it('essere')}: ${it('siamo atterrati a Bari')} (hemos aterrizado). «Disfrutar» es ${it('godersi')}: ${it('goditi la vacanza!')} Salir, llegar, validar y reservar están en ${city('es')}; las palabras del viaje, en ${travel('es')}.`,
  },
  fr: {
    title: `${it('Affittare')} ou ${it('noleggiare')} ?`,
    body: `« Louer » se dit de deux façons en italien : un appartement ou une maison ${it('si affitta')} (${it('affittiamo una casa al mare')}), mais une voiture, un vélo ou un bateau ${it('si noleggia')} (${it('noleggiamo una macchina')}). « Faire sa valise » est presque pareil : ${it('fare la valigia')}, sans possessif ; « prendre son billet » devient ${it('fare il biglietto')}, et « s’enregistrer » ${it('fare il check-in')}. « Faire du stop », c’est ${it('fare l’autostop')} ; « emmener quelqu’un en voiture », ${it('dare un passaggio')} : ${it('mi dai un passaggio?')}. ${it('Decollare')} et ${it('atterrare')} ressemblent au français, mais au ${it('passato prossimo')} ils prennent en général ${it('essere')} quand on parle de l’avion ou des passagers : ${it('siamo atterrati a Bari')} (nous avons atterri). Et « profiter de ses vacances » se dit ${it('godersi la vacanza')}, pas « profittare ». Partir, arriver, composter et réserver sont dans ${city('fr')} ; les mots du voyage dans ${travel('fr')}.`,
  },
  cs: {
    title: `${it('Affittare')}, nebo ${it('noleggiare')}?`,
    body: `České „pronajmout si“ jsou v italštině dvě slovesa: byt nebo dům ${it('si affitta')} (${it('affittiamo una casa al mare')}), ale auto, kolo nebo loď ${it('si noleggia')} (${it('noleggiamo una macchina')}). Hodně cestovních sloves se tvoří s ${it('fare')} (dělat): „balit si kufr“ je ${it('fare la valigia')}, „koupit si jízdenku“ ${it('fare il biglietto')}, „odbavit se“ ${it('fare il check-in')}, „stopovat“ ${it('fare l’autostop')}. Letadlo se „bere“ jako vlak: ${it('prendo l’aereo')} (letím letadlem). „Svézt někoho“ je ${it('dare un passaggio')} (doslova „dát průjezd“): ${it('mi dai un passaggio?')}. ${it('Decollare')} (vzlétnout) a ${it('atterrare')} (přistát) mají v ${it('passato prossimo')} obvykle ${it('essere')}, když mluvíte o letadle nebo o cestujících: ${it('siamo atterrati a Bari')}. A „ubytovat se v hotelu“ je ${it('alloggiare')}: ${it('alloggiamo in un piccolo albergo')}. Odjet, přijet, označit jízdenku a rezervovat najdete v lekci ${city('cs')}; slova cestování v lekci ${travel('cs')}.`,
  },
  pl: {
    title: `${it('Affittare')} czy ${it('noleggiare')}?`,
    body: `Polskie „wynająć” to po włosku dwa czasowniki: mieszkanie albo dom ${it('si affitta')} (${it('affittiamo una casa al mare')}), ale samochód, rower czy łódkę ${it('si noleggia')} (${it('noleggiamo una macchina')}). Wiele czasowników podróży tworzy się z ${it('fare')} (robić): „pakować walizkę” to ${it('fare la valigia')}, „kupić bilet” ${it('fare il biglietto')}, „odprawić się” ${it('fare il check-in')}, „jechać autostopem” ${it('fare l’autostop')}. Samolotem się nie „leci” tym samym czasownikiem co po polsku: samolot się „bierze”, jak pociąg, ${it('prendo l’aereo')}. „Podwieźć kogoś” to ${it('dare un passaggio')}: ${it('mi dai un passaggio?')}. ${it('Decollare')} (startować) i ${it('atterrare')} (lądować) w ${it('passato prossimo')} zwykle łączą się z ${it('essere')}, gdy mowa o samolocie albo pasażerach: ${it('siamo atterrati a Bari')}. A „zatrzymać się w hotelu” to ${it('alloggiare')}, nie ${it('fermarsi')}: ${it('alloggiamo in un piccolo albergo')}. Wyjeżdżać, przyjeżdżać, kasować bilet i rezerwować są w lekcji ${city('pl')}; słowa podróży w lekcji ${travel('pl')}.`,
  },
  tr: {
    title: `${it('Affittare')} mı, ${it('noleggiare')} mı?`,
    body: `Türkçedeki “kiralamak” İtalyancada iki fiildir: daire ya da ev ${it('si affitta')} (${it('affittiamo una casa al mare')}), araba, bisiklet ya da tekne ise ${it('si noleggia')} (${it('noleggiamo una macchina')}). Uçağa “binilmez”, uçak “alınır”: ${it('prendo l’aereo')}; trende de aynısı, ${it('prendo il treno')}. Pek çok seyahat fiili ${it('fare')} (yapmak) ile kurulur: “bavul hazırlamak” ${it('fare la valigia')}, “bilet almak” ${it('fare il biglietto')}, “check-in yapmak” ${it('fare il check-in')}, “otostop yapmak” ${it('fare l’autostop')}. “Birini arabayla bırakmak” ${it('dare un passaggio')}: ${it('mi dai un passaggio?')}. ${it('Decollare')} (kalkmak) ve ${it('atterrare')} (inmek), uçaktan ya da yolculardan söz ederken ${it('passato prossimo')} zamanında genellikle ${it('essere')} alır: ${it('siamo atterrati a Bari')}. “Otelde kalmak” ise ${it('alloggiare')}: ${it('alloggiamo in un piccolo albergo')}. Yola çıkmak, varmak, bileti onaylatmak ve rezervasyon yapmak ${city('tr')} dersinde; seyahat kelimeleri ${travel('tr')} dersinde.`,
  },
  de: {
    title: `${it('Affittare')} oder ${it('noleggiare')}?`,
    body: `Eine Wohnung oder ein Ferienhaus ${it('si affitta')} (${it('affittiamo una casa al mare')}), aber ein Auto, ein Fahrrad oder ein Boot ${it('si noleggia')} (${it('noleggiamo una macchina')}): Für „mieten“ gibt es also zwei Verben. „Fliegen“ heißt meist ${it('prendere l’aereo')}, das Flugzeug „nehmen“ wie den Zug: ${it('prendo l’aereo delle sette')}. Viele Reiseverben bildet man mit ${it('fare')}: ${it('fare la valigia')} (den Koffer packen), ${it('fare il biglietto')} (die Fahrkarte kaufen), ${it('fare il check-in')}, ${it('fare l’autostop')} (trampen). „Jemanden mitnehmen“ ist ${it('dare un passaggio')}: ${it('mi dai un passaggio?')} (nimmst du mich mit?). Gute Nachricht: ${it('atterrare')} und ${it('decollare')} bilden das ${it('passato prossimo')} meist wie im Deutschen mit „sein“: ${it('siamo atterrati a Bari')} (wir sind in Bari gelandet). „Im Hotel übernachten“ ist ${it('alloggiare')}: ${it('alloggiamo in un piccolo albergo')}. Abfahren, ankommen, entwerten und reservieren stehen in ${city('de')}; die Reisewörter in ${travel('de')}.`,
  },
  ja: {
    title: `${it('Affittare')} と ${it('noleggiare')}`,
    body: `日本語の「借りる」は、イタリア語では二つに分かれます。家やアパートは ${it('affittare')}（${it('affittiamo una casa al mare')}、海辺の家を借ります）、車や自転車やボートは ${it('noleggiare')}（${it('noleggiamo una macchina')}、レンタカーを借ります）です。飛行機には「乗る」ではなく「とる」${it('prendere')} を使います：${it('prendo l’aereo')}。電車も同じで ${it('prendo il treno')} です。旅行の動詞の多くは ${it('fare')}（する）で作ります：${it('fare la valigia')}（荷物を詰める）、${it('fare il biglietto')}（切符を買う）、${it('fare il check-in')}、${it('fare l’autostop')}（ヒッチハイクする）。「車に乗せてあげる」は ${it('dare un passaggio')}：${it('mi dai un passaggio?')}（乗せてくれる？）。${it('Decollare')}（離陸する）と ${it('atterrare')}（着陸する）は、飛行機や乗客について言うとき ${it('passato prossimo')} でふつう ${it('essere')} を使います：${it('siamo atterrati a Bari')}。「ホテルに泊まる」は ${it('alloggiare')} です。出発する・到着する・切符に刻印する・予約するはレッスン「${city('ja')}」に、旅行の単語は「${travel('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi trascina la valigia sta anche viaggiando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (someone pulling a suitcase is also travelling: <em lang="it">viaggiare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien arrastra la maleta también está viajando: <em lang="it">viaggiare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (qui traîne sa valise est aussi en train de voyager : <em lang="it">viaggiare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo táhne kufr, zároveň i cestuje: <em lang="it">viaggiare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (ktoś, kto ciągnie walizkę, też podróżuje: <em lang="it">viaggiare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (bavulunu çeken kişi aynı zamanda seyahat ediyordur: <em lang="it">viaggiare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer den Koffer zieht, reist auch: <em lang="it">viaggiare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（スーツケースを引いている人は「<em lang="it">viaggiare</em>」（旅行する）でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const travelVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
