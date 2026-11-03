// Stringhe di pagina della lezione «I verbi degli acquisti» (2026-11-03), kind 'match' con `photoRows`, come
// «I verbi della città»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// La nota NON e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// *costare* si accorda con la cosa (quanto costa? quanto costano?); *spendere* e' per i soldi, il tempo si
// *passa*; *provare* un vestito senza pronome; *cambiare* (un altro prodotto) e *restituire* (i soldi indietro);
// *tirare sul prezzo* si fa solo ai mercatini. Poi le trappole della lingua dello studente (spenden, commander,
// wydawać, save / salvare, probarse...). Rimanda a «Fare acquisti» (le parole) e ai verbi della citta'.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { shoppingVerbs } from './shopping-verbs.mjs';
import { shoppingPages } from './shopping-pages.mjs';
import { cityVerbPages } from './city-verbs-pages.mjs';

const V = shoppingVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const shop = (lang) => linkTo(shoppingPages[lang]);
const city = (lang) => linkTo(cityVerbPages[lang]);

export const shoppingVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-acquisti',
    name: 'I verbi degli acquisti',
    title: 'Verbi degli acquisti in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani per fare acquisti — costare, spendere, risparmiare, provare, pagare con la carta, tirare sul prezzo, cambiare, restituire — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt: 'Una mano avvicina una carta al lettore del POS alla cassa di un piccolo negozio italiano',
    cardText: `${V} verbi per fare acquisti: costare, spendere, risparmiare, provare, pagare con la carta, cambiare, restituire…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-shopping-verbs-vocabulary',
    name: 'Shopping verbs',
    title: 'Shopping verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for shopping — to cost, to spend, to save, to try on, to pay by card, to haggle, to exchange, to return — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt: 'A hand holding a card to the card reader at the till of a small Italian shop',
    cardText: `${V} verbs for shopping: to cost, to spend, to save, to try on, to pay by card, to exchange, to return…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-las-compras-en-italiano',
    name: 'Los verbos de las compras',
    title: 'Los verbos de las compras | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos para ir de compras — costar, gastar, ahorrar, probarse, pagar con tarjeta, regatear, cambiar, devolver — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt: 'Una mano acerca una tarjeta al datáfono en la caja de una pequeña tienda italiana',
    cardText: `${V} verbos para ir de compras: costar, gastar, ahorrar, probarse, pagar con tarjeta, cambiar, devolver…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-des-achats-en-italien',
    name: 'Les verbes des achats',
    title: 'Les verbes des achats | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens pour faire des achats — coûter, dépenser, économiser, essayer, payer par carte, marchander, échanger, rendre — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt: 'Une main approche une carte du terminal de paiement à la caisse d’une petite boutique italienne',
    cardText: `${V} verbes pour faire des achats : coûter, dépenser, économiser, essayer, payer par carte, échanger, rendre…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-nakupovani',
    name: 'Slovesa nakupování',
    title: 'Slovesa nakupování | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves na nakupování — stát, utratit, šetřit, vyzkoušet si, platit kartou, smlouvat, vyměnit, vrátit — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt: 'Ruka přikládá kartu k platebnímu terminálu u pokladny malého italského obchodu',
    cardText: `${V} sloves na nakupování: stát, utratit, šetřit, vyzkoušet si, platit kartou, vyměnit, vrátit…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-zakupow',
    name: 'Czasowniki zakupów',
    title: 'Czasowniki zakupów | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników na zakupy — kosztować, wydawać, oszczędzać, przymierzać, płacić kartą, targować się, wymienić, zwrócić — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt: 'Ręka przykłada kartę do terminala płatniczego przy kasie małego włoskiego sklepu',
    cardText: `${V} czasowników na zakupy: kosztować, wydawać, oszczędzać, przymierzać, płacić kartą, wymienić, zwrócić…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-alisveris-fiilleri-kelimeleri',
    name: 'Alışveriş fiilleri',
    title: 'Alışveriş fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Alışveriş için ${V} İtalyanca fiil öğrenin — fiyatı olmak, harcamak, para biriktirmek, denemek, kartla ödemek, pazarlık yapmak, değiştirmek, iade etmek — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt: 'Küçük bir İtalyan dükkânının kasasında bir el, kartı POS cihazına yaklaştırıyor',
    cardText: `Alışveriş için ${V} fiil: fiyatı olmak, harcamak, para biriktirmek, denemek, kartla ödemek, değiştirmek, iade etmek…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-einkaufen',
    name: 'Verben beim Einkaufen',
    title: 'Verben beim Einkaufen | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben zum Einkaufen — kosten, ausgeben, sparen, anprobieren, mit Karte zahlen, feilschen, umtauschen, zurückgeben — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt: 'Eine Hand hält eine Karte an das Kartenlesegerät an der Kasse eines kleinen italienischen Geschäfts',
    cardText: `${V} Verben zum Einkaufen: kosten, ausgeben, sparen, anprobieren, mit Karte zahlen, umtauschen, zurückgeben …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-shopping-verbs-vocabulary',
    name: '買い物の動詞',
    title: '買い物の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `値段がかかる、お金を使う、貯金する、試着する、カードで払う、値切る、交換する、返品するなど、買い物で使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt: 'イタリアの小さなお店のレジで、カード決済端末にカードをかざす手',
    cardText: `買い物で使う動詞 ${V} 語：値段がかかる、お金を使う、貯金する、試着する、カードで払う、交換する、返品する…`,
  },
};

const notes = {
  it: {
    title: 'Quanto costa? Quanto costano?',
    body: `Il soggetto di <em>costare</em> è la cosa, quindi il verbo cambia con lei: <em>quanto costa la borsa?</em>, <em>quanto costano le scarpe?</em> Al passato prossimo vuole <em>essere</em>: <em>il biglietto è costato poco</em>. I soldi si <em>spendono</em>, ma il tempo si <em>passa</em>: <em>ho passato la giornata in centro</em>. Un vestito si <em>prova</em>, senza pronome: <em>provo la giacca</em>. Se riporti un prodotto e ne prendi un altro lo <em>cambi</em>; se vuoi indietro i soldi lo <em>restituisci</em>. E <em>tirare sul prezzo</em> si fa ai mercatini e alle bancarelle, quasi mai nei negozi. Si paga <em>in contanti</em> o <em>con la carta</em>; il cassiere <em>dà il resto</em>. Le parole dei negozi sono nella lezione ${shop('it')}; altri verbi della strada e dei servizi in ${city('it')}.`,
  },
  en: {
    title: `${it('Spendere')} is only for money`,
    body: `You ${it('spendi')} money, but you ${it('passi')} time: ${it('ho passato la giornata in centro')} (I spent the day in town). “To save” money is ${it('risparmiare')}: ${it('salvare')} is to save a life or a file. ${it('Costare')} agrees with the thing: ${it('quanto costa la borsa?')}, ${it('quanto costano le scarpe?')}, and in the past it takes ${it('essere')}: ${it('è costato poco')}. “To try on” is just ${it('provare')}: ${it('posso provare questa giacca?')} “To pay for” has no preposition: ${it('ho pagato il caffè')}, not “per il caffè”. “To exchange” a product is ${it('cambiare')}, “to return” it for a refund ${it('restituire')}. Haggling, ${it('tirare sul prezzo')}, only happens at markets. You pay ${it('in contanti')} or ${it('con la carta')}, and the cashier ${it('ti dà il resto')}. Shop nouns are in ${shop('en')}; more town verbs in ${city('en')}.`,
  },
  es: {
    title: `${it('Provo la giacca')}, sin «me»`,
    body: `«Probarse» no es reflexivo en italiano: ${it('provo la giacca')}, ${it('posso provarla?')}. «Gastar» es ${it('spendere')}, pero solo con el dinero: el tiempo se ${it('passa')} (${it('ho passato la giornata in centro')}). «Ahorrar» es ${it('risparmiare')} y «regatear» ${it('tirare sul prezzo')}, que en Italia solo se hace en los mercadillos. «Pedir» por internet es ${it('ordinare online')}, y «devolver» es ${it('restituire')}; ${it('cambiare')} es cambiarlo por otro. ${it('Costare')} concuerda con la cosa, como en español: ${it('quanto costano le scarpe?')}, y en pasado lleva ${it('essere')}: ${it('è costato poco')}. «Hacer cola» es ${it('fare la fila')} (también ${it('fare la coda')}), «envolver para regalo» es ${it('incartare')} y «dar el cambio» ${it('dare il resto')}. Se paga ${it('in contanti')} (en efectivo) o ${it('con la carta')}. Las palabras de las tiendas están en ${shop('es')}; más verbos en ${city('es')}.`,
  },
  fr: {
    title: `${it('Ordinare')}, pas « comandare »`,
    body: `« Commander » sur internet se dit ${it('ordinare')} (${it('ho ordinato online un libro')}) : ${it('comandare')} veut dire donner des ordres. « Dépenser » est ${it('spendere')}, seulement pour l’argent ; le temps se ${it('passa')} (${it('ho passato la giornata in centro')}). « Économiser » est ${it('risparmiare')}, « essayer » un vêtement ${it('provare')}, « marchander » ${it('tirare sul prezzo')} (seulement au marché). « Échanger » un article est ${it('cambiare')}, le « rendre » pour être remboursé ${it('restituire')}, et « rendre la monnaie » ${it('dare il resto')}. ${it('Costare')} s’accorde avec la chose et prend ${it('essere')} au passé : ${it('il biglietto è costato poco')}. « Faire la queue » se dit ${it('fare la fila')} ou ${it('fare la coda')}, et « faire un paquet cadeau » ${it('incartare')}. On paie ${it('in contanti')} (en espèces) ou ${it('con la carta')}. Les mots des magasins sont dans ${shop('fr')} ; d’autres verbes dans ${city('fr')}.`,
  },
  cs: {
    title: `${it('Quanto costa?')} Kolik to stojí?`,
    body: `„Kolik to stojí?“ je ${it('quanto costa?')}, a když jde o více věcí, i sloveso je v množném čísle: ${it('quanto costano le scarpe?')} V minulém čase má ${it('costare')} ${it('essere')}: ${it('il biglietto è costato poco')}. „Utratit“ je ${it('spendere')}, jen o penězích; čas se ${it('passa')} (${it('ho passato la giornata in centro')}). „Šetřit“ je ${it('risparmiare')}, „smlouvat“ ${it('tirare sul prezzo')} (jen na trzích). „Vyzkoušet si“ oblečení je ${it('provare')}, bez zvratného zájmena: ${it('provo la giacca')}. Vyměnit zboží za jiné je ${it('cambiare')}, vrátit ho a dostat peníze ${it('restituire')}. „Objednat na internetu“ je ${it('ordinare online')}. Platí se ${it('in contanti')} (v hotovosti) nebo ${it('con la carta')} a pokladní ${it('dà il resto')} (vrací drobné). Slova obchodů najdete v lekci ${shop('cs')}; další slovesa v lekci ${city('cs')}.`,
  },
  pl: {
    title: `„Wydawać” to dwa czasowniki`,
    body: `Polskie „wydawać” po włosku się dzieli: pieniądze się ${it('spendono')} (${it('ho speso troppo')}, wydałem za dużo), a resztę się ${it('dà')}: ${it('mi ha dato il resto')} (wydał mi resztę). Czas się ${it('passa')}: ${it('ho passato la giornata in centro')}. „Oszczędzać” to ${it('risparmiare')}, „targować się” ${it('tirare sul prezzo')} (tylko na targu). „Przymierzyć” to ${it('provare')}, bez „się”: ${it('provo la giacca')}. Wymienić towar na inny to ${it('cambiare')}, zwrócić go i odzyskać pieniądze ${it('restituire')}. ${it('Costare')} zgadza się z rzeczą: ${it('quanto costano le scarpe?')}, a w czasie przeszłym ma ${it('essere')}: ${it('è costato poco')}. „Zamówić przez internet” to ${it('ordinare online')}. Płaci się ${it('in contanti')} (gotówką) albo ${it('con la carta')}. Słowa sklepów są w lekcji ${shop('pl')}; inne czasowniki w lekcji ${city('pl')}.`,
  },
  tr: {
    title: `${it('Quanto costa?')} Ne kadar?`,
    body: `Türkçede “Ne kadar?” demek yeter, İtalyancada ise fiil gerekir ve fiil şeye uyar: ${it('quanto costa la borsa?')} (çanta ne kadar?), ${it('quanto costano le scarpe?')} (ayakkabılar ne kadar?). Geçmiş zamanda ${it('essere')} alır: ${it('il biglietto è costato poco')}. “Harcamak” ${it('spendere')}, ama sadece para için; zaman ${it('passa')} fiiliyle geçirilir: ${it('ho passato la giornata in centro')}. “Para biriktirmek” ${it('risparmiare')}, “pazarlık yapmak” ${it('tirare sul prezzo')}: İtalya’da bunu sadece pazarlarda ve bitpazarlarında yaparsınız, dükkânlarda değil. “Denemek” ${it('provare')}, “değiştirmek” ${it('cambiare')}, “iade etmek” ${it('restituire')}, “sipariş vermek” ${it('ordinare online')}. ${it('In contanti')} (nakit) ya da ${it('con la carta')} (kartla) ödenir, kasiyer de ${it('dà il resto')} (para üstünü verir). Dükkân kelimeleri ${shop('tr')} dersinde; başka fiiller ${city('tr')} dersinde.`,
  },
  de: {
    title: `${it('Spendere')} ist nicht „spenden“`,
    body: `Vorsicht, falscher Freund: ${it('spendere')} heißt „ausgeben“ (${it('ho speso troppo')}, ich habe zu viel ausgegeben); „spenden“ ist ${it('donare')} oder ${it('fare una donazione')}. Zeit gibt man nicht aus, man „verbringt“ sie: ${it('ho passato la giornata in centro')}. „Sparen“ ist ${it('risparmiare')}, „anprobieren“ einfach ${it('provare')}: ${it('posso provare questa giacca?')} „Umtauschen“ ist ${it('cambiare')}, „zurückgeben“ und das Geld zurückbekommen ${it('restituire')}. ${it('Costare')} richtet sich nach der Sache und bildet das ${it('passato prossimo')} mit ${it('essere')}: ${it('è costato poco')}. Feilschen, ${it('tirare sul prezzo')}, macht man nur auf dem Markt. „Online bestellen“ ist ${it('ordinare online')}, „als Geschenk einpacken“ ${it('incartare')}. Man zahlt ${it('in contanti')} (bar) oder ${it('con la carta')}, und die Kassiererin ${it('dà il resto')} (gibt das Wechselgeld heraus). Die Wörter der Geschäfte stehen in ${shop('de')}; weitere Verben in ${city('de')}.`,
  },
  ja: {
    title: `${it('Quanto costa?')}（いくら？）`,
    body: `値段を聞くときは ${it('costare')}（値段がかかる）を使い、主語は「物」なので、物が複数なら動詞も変わります：${it('quanto costa la borsa?')}（このバッグはいくら？）、${it('quanto costano le scarpe?')}（この靴はいくら？）。過去形は ${it('essere')} を使います：${it('il biglietto è costato poco')}。「お金を使う」は ${it('spendere')} ですが、時間には使わず ${it('passare')} を使います：${it('ho passato la giornata in centro')}（町で一日過ごした）。「貯金する・節約する」は ${it('risparmiare')}、「値切る」は ${it('tirare sul prezzo')} で、イタリアでも値切るのは市場やのみの市だけです。「試着する」は ${it('provare')}、「交換する」は ${it('cambiare')}、「返品する」は ${it('restituire')}、「プレゼント用に包む」は ${it('incartare')}。支払いは ${it('in contanti')}（現金で）か ${it('con la carta')}（カードで）、レジの人は ${it('dà il resto')}（おつりを渡す）。お店の単語はレッスン「${shop('ja')}」に、ほかの動詞は「${city('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi paga alla cassa sta anche comprando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (someone paying at the till is also buying: <em lang="it">comprare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien paga en la caja también está comprando: <em lang="it">comprare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (à la caisse, on paie mais on achète aussi : <em lang="it">comprare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo platí u pokladny, zároveň i nakupuje: <em lang="it">comprare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (ktoś przy kasie płaci, ale też kupuje: <em lang="it">comprare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (kasada ödeme yapan kişi aynı zamanda satın alıyordur: <em lang="it">comprare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer an der Kasse bezahlt, kauft auch: <em lang="it">comprare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（レジで払っている人は「<em lang="it">comprare</em>」（買う）でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const shoppingVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
