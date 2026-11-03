// Stringhe di pagina della lezione «Fare acquisti: soldi e negozi» (2026-11-03), kind 'words'.
//
// `note` non e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// i soldi sono sempre plurali; il resto non e' la moneta; lo scontrino si tiene; il conto al ristorante;
// la mancia non e' obbligatoria; fare la spesa (il cibo) e fare shopping / fare spese (il resto); i saldi;
// pagare con la carta o in contanti; Quanto costa? Poi le trappole della lingua dello studente (billete /
// billet / biglietto, cuento / conto, Konto, Saldo, monnaie, para tekil...).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { shoppingVocabulary } from './shopping-vocabulary.mjs';

const N = shoppingVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const shoppingPages = {
  it: {
    dir: 'vocabolario',
    slug: 'acquisti',
    name: 'Fare acquisti: soldi e negozi',
    title: 'Fare acquisti: soldi e negozi | vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole per fare acquisti in italiano — i soldi, il portafoglio, il bancomat, il resto, lo scontrino, il carrello, la cassa, i saldi… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt: 'Una mano regge alcuni sacchetti di carta colorati in una via di negozi italiana, sullo sfondo sfocato',
    cardText: `${N} parole per fare acquisti: i soldi, il resto, lo scontrino, il carrello, la cassa, i saldi…`,
    note: {
      title: 'I soldi sono sempre tanti',
      body: '<em>I soldi</em> si usano sempre al plurale: <em>non ho soldi</em>, <em>quanti soldi hai?</em> (in un registro più formale si dice <em>il denaro</em>). <em>Il resto</em> sono i soldi che ti ridanno alla cassa; <em>gli spiccioli</em> sono le monete piccole. <em>Lo scontrino</em> si tiene: serve per cambiare un prodotto. Al ristorante si chiede <em>il conto</em>, e <em>la mancia</em> in Italia non è obbligatoria. Si paga <em>con la carta</em> o <em>in contanti</em>, e il bancomat è sia lo sportello sia la carta: <em>pago col bancomat</em>. <em>Fare la spesa</em> è comprare da mangiare; <em>fare shopping</em> o <em>fare spese</em> è comprare vestiti e altre cose. <em>I saldi</em> cominciano a gennaio e a luglio, in date fissate dalle regioni. E per sapere il prezzo: <em>Quanto costa?</em>, oppure, al mercato, <em>Quanto viene?</em>',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-shopping-vocabulary',
    name: 'Shopping and money',
    title: 'Shopping and money | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for shopping — money, the wallet, the cash machine, the change, the receipt, the trolley, the till, the sales… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'A hand holding a few colourful paper shopping bags in a street of Italian shops, blurred in the background',
    cardText: `${N} words for shopping: money, the change, the receipt, the trolley, the till, the sales…`,
    note: {
      title: `Money is plural: ${it('i soldi')}`,
      body: `English “money” is singular, but Italian ${it('soldi')} is always plural: ${it('i soldi sono nel portafoglio')}, ${it('quanti soldi hai?')} “Change” has two translations: the money you get back is ${it('il resto')} (${it('tenga il resto')}, keep the change), small coins are ${it('gli spiccioli')}; ${it('la moneta')} is just a coin. Careful with ${it('il biglietto')}: it’s a ticket, while a banknote is ${it('la banconota')}. ${it('Il conto')} is the bill in a restaurant (${it('il conto, per favore')}), and also a bank account. The receipt is ${it('lo scontrino')}, a cash machine and a debit card are both ${it('il bancomat')}, and the card reader is ${it('il POS')}. “To do the shopping” for food is ${it('fare la spesa')}; for clothes and fun it’s ${it('fare shopping')}. The sales are ${it('i saldi')}, in January and July. And to ask the price: ${it('Quanto costa?')}`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-las-compras-en-italiano',
    name: 'De compras: dinero y tiendas',
    title: 'De compras: dinero y tiendas | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras italianas para ir de compras — el dinero, la cartera, el cajero, el cambio, el tique, el carro, la caja, las rebajas… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'Una mano sujeta unas bolsas de papel de colores en una calle de tiendas italiana, con el fondo desenfocado',
    cardText: `${N} palabras para ir de compras: el dinero, el cambio, el tique, el carro, la caja, las rebajas…`,
    note: {
      title: `El billete no es ${it('il biglietto')}`,
      body: `La trampa más frecuente: ${it('il biglietto')} es el billete de tren o de cine; el billete de dinero es ${it('la banconota')}. Otra: ${it('il conto')} no es un cuento (eso es ${it('il racconto')}), sino la cuenta del restaurante: ${it('il conto, per favore')}. El dinero, ${it('i soldi')}, va siempre en plural: ${it('non ho soldi')}. ${it('La moneta')} es la moneda, pero «el cambio» o «la vuelta» es ${it('il resto')}, y el suelto son ${it('gli spiccioli')}. Ojo con ${it('la mancia')}: no es una mancha, es la propina. El tique es ${it('lo scontrino')}, el probador ${it('il camerino')} y las rebajas ${it('i saldi')}. «Hacer la compra» es ${it('fare la spesa')} (atención: no es «el gasto»), e ir de tiendas es ${it('fare shopping')}. El cajero automático y la tarjeta de débito se llaman los dos ${it('il bancomat')}. Y para preguntar el precio: ${it('Quanto costa?')}`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-des-achats-en-italien',
    name: 'Faire des achats : argent et magasins',
    title: 'Faire des achats : argent et magasins | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens pour faire des achats — l’argent, le portefeuille, le distributeur, la monnaie, le ticket de caisse, le chariot, la caisse, les soldes… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Une main tient quelques sacs en papier colorés dans une rue commerçante italienne, à l’arrière-plan flou',
    cardText: `${N} mots pour faire des achats : l’argent, la monnaie, le ticket de caisse, le chariot, la caisse, les soldes…`,
    note: {
      title: `La monnaie, c’est ${it('il resto')}`,
      body: `Attention à « monnaie » : la monnaie qu’on vous rend, c’est ${it('il resto')} (${it('tenga il resto')}, gardez la monnaie), les petites pièces ${it('gli spiccioli')}, et ${it('la moneta')} est seulement une pièce. Le billet de banque est ${it('la banconota')} : ${it('il biglietto')} est un billet de train ou de cinéma. L’argent, ${it('i soldi')}, est toujours au pluriel : ${it('non ho soldi')}. L’addition, c’est ${it('il conto')}, le pourboire ${it('la mancia')} et le ticket de caisse ${it('lo scontrino')}. Bonne nouvelle : les soldes sont ${it('i saldi')} et la caisse ${it('la cassa')}. « Faire les courses » se dit ${it('fare la spesa')} et « faire du shopping » ${it('fare shopping')}. Le distributeur et la carte bancaire s’appellent tous les deux ${it('il bancomat')}. Et pour le prix : ${it('Quanto costa?')}`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-nakupovani',
    name: 'Nakupování: peníze a obchody',
    title: 'Nakupování: peníze a obchody | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov na nakupování — peníze, peněženka, bankomat, drobné, účtenka, nákupní vozík, pokladna, výprodej… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Ruka drží několik barevných papírových tašek v italské obchodní ulici s rozmazaným pozadím',
    cardText: `${N} slov na nakupování: peníze, drobné, účtenka, nákupní vozík, pokladna, výprodej…`,
    note: {
      title: `${it('Il conto')} v restauraci`,
      body: `Stejně jako české „peníze“ jsou i italské ${it('soldi')} vždy v množném čísle: ${it('i soldi sono nel portafoglio')}. ${it('Il conto')} je účet v restauraci (${it('il conto, per favore')}) i účet v bance; konto je tedy podobné. Peníze, které vám vrátí, jsou ${it('il resto')}, drobné ${it('gli spiccioli')}; ${it('la moneta')} je jen mince. Pozor na ${it('il biglietto')}: to je jízdenka nebo vstupenka, bankovka je ${it('la banconota')}. Účtenka je ${it('lo scontrino')} a spropitné ${it('la mancia')}, které v Itálii není povinné. Bankomat i platební karta se jmenují ${it('il bancomat')}, platební terminál ${it('il POS')}. „Nakoupit jídlo“ je ${it('fare la spesa')}, nakupovat oblečení ${it('fare shopping')}. Výprodej jsou ${it('i saldi')}, v lednu a v červenci. A cena: ${it('Quanto costa?')}`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-zakupy',
    name: 'Zakupy: pieniądze i sklepy',
    title: 'Zakupy: pieniądze i sklepy | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów na zakupy — pieniądze, portfel, bankomat, reszta, paragon, wózek, kasa, wyprzedaż… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Ręka trzyma kilka kolorowych papierowych toreb na włoskiej ulicy ze sklepami, z rozmytym tłem',
    cardText: `${N} słów na zakupy: pieniądze, reszta, paragon, wózek, kasa, wyprzedaż…`,
    note: {
      title: `${it('Il resto')} to reszta`,
      body: `Dobra wiadomość: ${it('il resto')} to po prostu reszta (${it('tenga il resto')}, reszty nie trzeba), a ${it('la cassa')} to kasa. Jak polskie „pieniądze”, włoskie ${it('soldi')} są zawsze w liczbie mnogiej: ${it('non ho soldi')}. Uwaga na ${it('il conto')}: to rachunek w restauracji (${it('il conto, per favore')}), choć znaczy też konto w banku. ${it('Il biglietto')} to bilet, banknot to ${it('la banconota')}, a ${it('la moneta')} to moneta, drobne to ${it('gli spiccioli')}. Paragon to ${it('lo scontrino')}, napiwek ${it('la mancia')} (we Włoszech nieobowiązkowy). Bankomat i karta debetowa to oba ${it('il bancomat')}, terminal płatniczy ${it('il POS')}. „Zrobić zakupy” spożywcze to ${it('fare la spesa')}, a na mieście ${it('fare shopping')}. Wyprzedaże to ${it('i saldi')}, w styczniu i lipcu. A cena: ${it('Quanto costa?')}`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-alisveris-kelimeleri',
    name: 'Alışveriş: para ve dükkânlar',
    title: 'Alışveriş: para ve dükkânlar | İtalyanca kelimeler | Italiano con Martin',
    description: `Alışveriş için ${N} İtalyanca kelime öğrenin — para, cüzdan, ATM, para üstü, fiş, alışveriş arabası, kasa, indirim sezonu… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'Bir el, arka planı bulanık bir İtalyan alışveriş caddesinde birkaç renkli kâğıt alışveriş torbası tutuyor',
    cardText: `Alışveriş için ${N} kelime: para, para üstü, fiş, alışveriş arabası, kasa, indirim sezonu…`,
    note: {
      title: `Para çoğuldur: ${it('i soldi')}`,
      body: `Türkçede “para” tekildir, İtalyancada ${it('soldi')} her zaman çoğuldur: ${it('i soldi sono nel portafoglio')} (para cüzdanda), ${it('non ho soldi')}. Para üstü ${it('il resto')}dur (${it('tenga il resto')}, üstü kalsın), bozuk para ${it('gli spiccioli')}. ${it('La cassa')} kasa, ${it('lo scontrino')} fiş, ${it('il conto')} restorandaki hesaptır: ${it('il conto, per favore')}. ${it('Il biglietto')} bilettir, kâğıt para ise ${it('la banconota')}. Bahşiş ${it('la mancia')}: İtalya’da zorunlu değildir. ATM ve banka kartı ikisi de ${it('il bancomat')}, kart cihazı ${it('il POS')}. Market alışverişi ${it('fare la spesa')}, kıyafet alışverişi ${it('fare shopping')}. İndirim sezonu ${it('i saldi')}: ocak ve temmuzda başlar. Fiyatı sormak için: ${it('Quanto costa?')}`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-einkaufen',
    name: 'Einkaufen: Geld und Geschäfte',
    title: 'Einkaufen: Geld und Geschäfte | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter zum Einkaufen — das Geld, die Geldbörse, der Geldautomat, das Wechselgeld, der Kassenbon, der Einkaufswagen, die Kasse, der Schlussverkauf… — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Eine Hand hält ein paar bunte Papiertüten in einer italienischen Einkaufsstraße, der Hintergrund unscharf',
    cardText: `${N} Wörter zum Einkaufen: das Geld, das Wechselgeld, der Kassenbon, der Einkaufswagen, die Kasse, der Schlussverkauf …`,
    note: {
      title: `${it('I saldi')} sind kein Saldo`,
      body: `Drei falsche Freunde: ${it('i saldi')} ist der Schlussverkauf (im Januar und im Juli), nicht der Kontostand; ${it('il conto')} ist vor allem die Rechnung im Restaurant (${it('il conto, per favore')}), auch wenn es das Konto ebenfalls bedeutet; und ${it('il biglietto')} ist eine Fahr- oder Eintrittskarte, der Geldschein heißt ${it('la banconota')}. „Geld“ ist Singular, ${it('i soldi')} immer Plural: ${it('non ho soldi')}. Das Wechselgeld ist ${it('il resto')} (${it('tenga il resto')}, stimmt so), das Kleingeld ${it('gli spiccioli')}. Der Kassenbon ist ${it('lo scontrino')}, das Trinkgeld ${it('la mancia')}, in Italien keine Pflicht. Wie in Österreich heißt der Geldautomat ${it('il bancomat')}, und so heißt auch die Bankkarte; das Kartenlesegerät ist ${it('il POS')}. Lebensmittel einkaufen ist ${it('fare la spesa')}, bummeln und Kleidung kaufen ${it('fare shopping')}. Und nach dem Preis fragt man: ${it('Quanto costa?')}`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-shopping-vocabulary',
    name: '買い物：お金とお店',
    title: '買い物：お金とお店 | イタリア語の語彙 | Italiano con Martin',
    description: `お金、財布、ATM、おつり、レシート、ショッピングカート、レジ、セールなど、買い物で使うイタリア語の単語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: 'イタリアの商店街で、色とりどりの紙の買い物袋を持つ手。背景はぼかしてある',
    cardText: `買い物の単語 ${N} 語：お金、おつり、レシート、ショッピングカート、レジ、セール…`,
    note: {
      title: `お金はいつも複数形：${it('i soldi')}`,
      body: `日本語の「お金」には単数・複数がありませんが、イタリア語の ${it('soldi')} はいつも複数形です：${it('i soldi sono nel portafoglio')}（お金は財布の中）、${it('non ho soldi')}（お金がない）。おつりは ${it('il resto')}（${it('tenga il resto')}、おつりはけっこうです）、小銭は ${it('gli spiccioli')}、${it('la moneta')} は硬貨です。紙幣は ${it('la banconota')} で、${it('il biglietto')} は切符やチケットのことです。レシートは ${it('lo scontrino')}、レストランのお会計は ${it('il conto')}：${it('il conto, per favore')}。チップ ${it('la mancia')} はイタリアでも義務ではありません。ATM とデビットカードはどちらも ${it('il bancomat')}、カード決済端末は ${it('il POS')} と言います。食料品の買い物は ${it('fare la spesa')}、服などの買い物は ${it('fare shopping')}。セール ${it('i saldi')} は1月と7月に始まります。値段を聞くときは ${it('Quanto costa?')}`,
    },
  },
};
