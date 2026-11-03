// Le parole della lezione di vocabolario «Fare acquisti: soldi e negozi» (2026-11-03).
//
// Terzo dei temi pratici proposti il 2026-11-02 (Martin: «Sì, gli acquisti»), dopo la salute e i viaggi.
// Due gruppi: i soldi (12: la banconota, il portafoglio, il bancomat, il POS, il resto, lo scontrino, il
// conto, la mancia...) e al negozio e al mercato (18: la vetrina, il carrello, la cassa, il camerino, i saldi,
// la bancarella, la spesa...). Le parole gia' nella citta' (il negozio, il supermercato, il mercato, la banca),
// nei mestieri (il commesso, il cassiere) e nelle persone (il cliente) non si ripetono.
//
// Struttura di ogni voce: come travel-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`, `generate-animal-images.mjs --set acquisti`
// (SHOPPING_STYLE): oggetti ritagliati sul bianco, luoghi come foto rotonde, cartellini e insegne senza
// scritte (al massimo il simbolo %), niente marchi, niente carne sui banchi.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Le forme della scheda, con e senza articolo e apostrofo, piu' quelle in `extra` (plurali, sinonimi). */
const answersFor = (word, extra) => {
  const list = [];
  for (const full of [...word.split(' / '), ...extra]) {
    for (const form of [full, full.replace(ARTICLE, '')]) {
      list.push(form);
      if (form.includes('’')) list.push(form.replace(/’/g, ' '), form.replace(/’/g, ''), form.replace(/’/g, "'"));
    }
  }
  return [...new Set(list)];
};

const shop = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `acquisti/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const shoppingVocabulary = [
  // --- i soldi ----------------------------------------------------------------------------------
  shop(
    'soldi',
    'i soldi',
    ['Non ho soldi con me.', 'Quanti soldi hai speso?', 'I soldi non fanno la felicità.'],
    '|Money|El dinero|L’argent|Peníze|Pieniądze|Para|Das Geld|お金',
    'a small pile of colourful euro-style banknotes and a few coins on a white surface, product photo, no readable numbers or words',
    ['denaro', 'il denaro', 'soldo']
  ),
  shop(
    'moneta',
    'la moneta',
    ['Hai una moneta da un euro per il carrello?', 'Il bambino mette le monete nel salvadanaio.', 'Questa macchinetta non accetta monete.'],
    '|The coin|La moneda|La pièce (de monnaie)|Mince|Moneta|Madeni para|Die Münze|硬貨',
    'three shiny gold and silver coins standing and lying on a white surface, close product photo, the faces of the coins with simple plain patterns and no readable numbers or words',
    ['monete', 'la monetina', 'monetina', 'monetine']
  ),
  shop(
    'banconota',
    'la banconota',
    ['Ho solo una banconota da cinquanta.', 'Le banconote sono nel portafoglio.', 'Il cassiere controlla la banconota alla luce.'],
    '|The banknote, bill|El billete|Le billet (de banque)|Bankovka|Banknot|Banknot, kâğıt para|Der Geldschein|紙幣',
    'a hand holding up a single colourful banknote with a simple abstract pattern and no readable numbers or words, against the white background',
    ['banconote']
  ),
  shop(
    'portafoglio',
    'il portafoglio',
    ['Ho perso il portafoglio!', 'Nel portafoglio ho la carta d’identità.', 'Il portafoglio di mio padre è sempre pieno di scontrini.'],
    '|The wallet|La cartera, la billetera|Le portefeuille|Peněženka|Portfel|Cüzdan|Die Geldbörse, der Geldbeutel|財布',
    'an open brown fabric wallet with a few banknotes and cards sticking out, product photo, no logo, no readable words',
    ['portafogli', 'il portamonete', 'portamonete']
  ),
  shop(
    'carta-di-credito',
    'la carta di credito',
    ['Posso pagare con la carta di credito?', 'Ho dimenticato il codice della carta di credito.', 'Accettate carte di credito?'],
    '|The credit card|La tarjeta de crédito|La carte de crédit|Kreditní karta|Karta kredytowa|Kredi kartı|Die Kreditkarte|クレジットカード',
    'a hand holding a dark blue plastic credit card with a gold chip and no logo, no readable numbers or words',
    ['carte di credito', 'la carta', 'carta']
  ),
  shop(
    'bancomat',
    'il bancomat',
    ['C’è un bancomat qui vicino?', 'Il bancomat non mi ha dato i soldi.', 'Vado al bancomat a prelevare.'],
    '|The cash machine, ATM|El cajero automático|Le distributeur de billets|Bankomat|Bankomat|ATM, bankamatik|Der Geldautomat|ATM',
    'a person withdrawing banknotes from a cash machine in the stone wall of a bank, the screen blank, no logo, no readable words, isolated cut-out with a small patch of pavement',
    ['lo sportello automatico', 'sportello automatico', 'lo sportello', 'sportello']
  ),
  shop(
    'pos',
    'il POS',
    ['Mi dispiace, il POS non funziona.', 'Avvicini la carta al POS.', 'Anche il fruttivendolo ha il POS.'],
    '|The card machine, card reader|El datáfono, el TPV|Le terminal de paiement|Platební terminál|Terminal płatniczy|POS cihazı|Das Kartenlesegerät|カード決済端末',
    'a hand holding a contactless bank card close to a small black card payment terminal held by a shopkeeper, the terminal screen blank, no readable words',
    ['pos', 'Pos', 'il Pos', 'il terminale', 'la macchinetta', 'macchinetta']
  ),
  shop(
    'salvadanaio',
    'il salvadanaio',
    ['Il bambino mette da parte i soldi nel salvadanaio.', 'Ho rotto il salvadanaio per comprare la bici.', 'Il salvadanaio è pieno di monete.'],
    '|The piggy bank, money box|La hucha, la alcancía|La tirelire|Pokladnička|Skarbonka|Kumbara|Das Sparschwein|貯金箱',
    'a pink ceramic piggy bank with a coin being dropped into the slot on its back by a child’s hand',
    ['salvadanai']
  ),
  shop(
    'resto',
    'il resto',
    ['Ecco il resto.', 'Tenga pure il resto!', 'Mi ha dato il resto sbagliato.'],
    '|The change|El cambio, la vuelta|La monnaie (rendue)|Drobné (vrácené peníze)|Reszta|Para üstü|Das Wechselgeld|おつり',
    'a cashier’s hand giving a few coins of change into a customer’s open palm over a shop counter',
    ['spiccioli', 'gli spiccioli']
  ),
  shop(
    'scontrino',
    'lo scontrino',
    ['Conservi lo scontrino per il cambio.', 'Mi fa lo scontrino, per favore?', 'Ho buttato lo scontrino!'],
    '|The receipt|El tique, el recibo|Le ticket de caisse|Účtenka|Paragon|Fiş|Der Kassenbon|レシート',
    'a hand holding a long curled paper till receipt clearly printed with many dark grey lines, next to a small black card machine and two coins, the receipt standing out well from the white background, no readable numbers or words',
    ['scontrini', 'la ricevuta', 'ricevuta']
  ),
  shop(
    'conto',
    'il conto',
    ['Il conto, per favore!', 'Paghiamo il conto alla romana.', 'Il conto era più caro del previsto.'],
    '|The bill, check (at a restaurant)|La cuenta|L’addition|Účet|Rachunek|Hesap|Die Rechnung|お会計',
    'an open black leather restaurant bill folder lying on a wooden table, holding a white paper bill printed with dark grey lines, a pen and two coffee cups beside it, no tablet, no screen, no readable numbers or words',
    ['conti']
  ),
  shop(
    'mancia',
    'la mancia',
    ['In Italia la mancia non è obbligatoria.', 'Abbiamo lasciato una mancia al cameriere.', 'Quanto si lascia di mancia?'],
    '|The tip|La propina|Le pourboire|Spropitné|Napiwek|Bahşiş|Das Trinkgeld|チップ',
    'a hand leaving a few coins on a small saucer beside an empty espresso cup on a café table, as a tip',
    ['mance']
  ),
  // --- al negozio e al mercato ------------------------------------------------------------------
  shop(
    'spesa',
    'la spesa',
    ['Oggi faccio la spesa al mercato.', 'Mi aiuti a portare la spesa?', 'La spesa costa sempre di più.'],
    '|The shopping, groceries|La compra|Les courses|Nákup|Zakupy|Alışveriş (market)|Der Einkauf|買い物（食料品）',
    'two full reusable shopping bags on a kitchen table with fresh vegetables, bread, fruit and a bottle of milk sticking out, no meat, no fish, no logos',
    ['le spese', 'spese']
  ),
  shop(
    'lista-della-spesa',
    'la lista della spesa',
    ['Non dimenticare la lista della spesa!', 'Scrivo il latte sulla lista della spesa.', 'La lista della spesa è sul frigo.'],
    '|The shopping list|La lista de la compra|La liste de courses|Nákupní seznam|Lista zakupów|Alışveriş listesi|Der Einkaufszettel|買い物リスト',
    'a hand holding a small sheet of paper with a short handwritten list shown only as wavy grey lines, a pen beside it, no readable words',
    ['lista', 'la lista']
  ),
  shop(
    'centro-commerciale',
    'il centro commerciale',
    ['Sabato andiamo al centro commerciale.', 'Il centro commerciale apre alle nove.', 'Nel centro commerciale c’è anche un cinema.'],
    '|The shopping centre, mall|El centro comercial|Le centre commercial|Obchodní centrum|Centrum handlowe|Alışveriş merkezi|Das Einkaufszentrum|ショッピングモール',
    'the bright interior of a shopping centre with two floors of shop windows, escalators and a few people with bags, cropped into a perfect circle, shop signs completely blank with no letters',
    ['centri commerciali']
  ),
  shop(
    'vetrina',
    'la vetrina',
    ['Che bella giacca in vetrina!', 'Guardiamo le vetrine?', 'La vetrina del negozio è tutta rossa per Natale.'],
    '|The shop window|El escaparate, la vidriera|La vitrine|Výloha|Witryna, wystawa sklepowa|Vitrin|Das Schaufenster|ショーウィンドウ',
    'the front of a small Italian clothes shop with a large window displaying two mannequins in coats and a few handbags, isolated cut-out with a small patch of pavement, no signs, no letters',
    ['vetrine']
  ),
  shop(
    'scaffale',
    'lo scaffale',
    ['La pasta è sull’ultimo scaffale.', 'Il commesso riempie gli scaffali.', 'Lo scaffale dei biscotti è vuoto.'],
    '|The shelf|La estantería|Le rayon, l’étagère|Regál|Półka (sklepowa)|Raf|Das Regal|商品棚',
    'a supermarket shelf unit full of neatly arranged packets of pasta, jars of tomato sauce and bottles of olive oil, plain packaging with no brands and no readable words',
    ['scaffali']
  ),
  shop(
    'carrello',
    'il carrello',
    ['Prendi un carrello o un cestino?', 'Il carrello è già pieno.', 'Per il carrello serve una moneta.'],
    '|The (shopping) trolley, cart|El carro, el carrito|Le chariot, le caddie|Nákupní vozík|Wózek sklepowy|Alışveriş arabası|Der Einkaufswagen|ショッピングカート',
    'a metal supermarket trolley half full of fruit, vegetables and bread, seen from the side, no logos',
    ['carrelli']
  ),
  shop(
    'sacchetto',
    'il sacchetto',
    ['Le serve un sacchetto?', 'Il sacchetto costa dieci centesimi.', 'Porto sempre i miei sacchetti di stoffa.'],
    '|The (shopping) bag|La bolsa|Le sac (de courses)|Taška, sáček|Torba, reklamówka|Poşet|Die Tüte|買い物袋',
    'a few plain paper and cloth shopping bags of different colours standing in a row, no logos, no words',
    ['sacchetti', 'la busta', 'busta', 'la borsa', 'borsa']
  ),
  shop(
    'cassa',
    'la cassa',
    ['Si paga alla cassa.', 'C’è una fila lunghissima alla cassa.', 'La cassa numero tre è aperta?'],
    '|The till, checkout|La caja|La caisse|Pokladna|Kasa|Kasa|Die Kasse|レジ',
    'a supermarket checkout with a moving belt carrying vegetables, a friendly cashier and a customer packing her bag, cropped into a perfect circle, no readable words',
    ['casse']
  ),
  shop(
    'prezzo',
    'il prezzo',
    ['Qual è il prezzo di queste scarpe?', 'I prezzi sono aumentati.', 'Non c’è il prezzo su questa borsa.'],
    '|The price (tag)|El precio|Le prix|Cena|Cena|Fiyat|Der Preis|値段',
    'a small white paper price tag hanging by a string from a folded sweater, the tag with only simple grey lines, no readable numbers or words',
    ['prezzi', 'il cartellino', 'cartellino', 'il cartellino del prezzo']
  ),
  shop(
    'sconto',
    'lo sconto',
    ['Mi fa uno sconto?', 'Con la tessera hai il dieci per cento di sconto.', 'Queste scarpe sono in sconto.'],
    '|The discount|El descuento|La réduction, la remise|Sleva|Zniżka, rabat|İndirim|Der Rabatt|割引',
    'a bright red price tag with a big white percent sign % on a pair of shoes, nothing else written, no numbers, no words',
    ['sconti', 'l’offerta', 'offerta']
  ),
  shop(
    'saldi',
    'i saldi',
    ['A gennaio cominciano i saldi.', 'Ho comprato questo cappotto ai saldi.', 'Durante i saldi i negozi sono pieni.'],
    '|The sales|Las rebajas|Les soldes|Výprodej|Wyprzedaż|İndirim sezonu|Der Schlussverkauf|セール',
    'a cheerful woman carrying several shopping bags walking out of a clothes shop whose window is covered with big red banners showing only percent signs %, no numbers, no words',
    ['saldo']
  ),
  shop(
    'camerino',
    'il camerino',
    ['Posso provare questi pantaloni? Dov’è il camerino?', 'I camerini sono in fondo a destra.', 'C’è la fila per il camerino.'],
    '|The fitting room, changing room|El probador|La cabine d’essayage|Zkušební kabinka|Przymierzalnia|Deneme kabini|Die Umkleidekabine|試着室',
    'a shop fitting room with a curtain half open, a full-length mirror inside and a few clothes on a hook, a young woman dressed modestly holding a sweater, cropped into a perfect circle',
    ['camerini']
  ),
  shop(
    'bancarella',
    'la bancarella',
    ['Al mercato compro la frutta da questa bancarella.', 'La domenica in piazza ci sono le bancarelle.', 'Ho trovato un libro vecchio su una bancarella.'],
    '|The (market) stall|El puesto (del mercado)|L’étal, le stand|Stánek|Stragan|Tezgâh|Der Marktstand|屋台、露店',
    'an Italian outdoor market stall with a striped awning and crates full of colourful fruit and vegetables, a smiling stallholder behind it, isolated cut-out with a small patch of pavement, no meat, no fish, no words',
    ['bancarelle', 'il banco', 'banco']
  ),
  shop(
    'bilancia',
    'la bilancia',
    ['Il fruttivendolo mette le mele sulla bilancia.', 'Pesa la frutta sulla bilancia, poi stampa l’etichetta.', 'Questa bilancia non è precisa.'],
    '|The scales|La balanza|La balance|Váha|Waga|Terazi|Die Waage|はかり',
    'a white electronic shop scale with a few red apples on its metal plate, the small display blank, product photo',
    ['bilance']
  ),
  shop(
    'tessera-fedelta',
    'la tessera fedeltà',
    ['Ha la tessera fedeltà?', 'Con la tessera fedeltà accumulo i punti.', 'Ho troppe tessere fedeltà nel portafoglio.'],
    '|The loyalty card|La tarjeta de cliente|La carte de fidélité|Věrnostní karta|Karta lojalnościowa|Sadakat kartı|Die Kundenkarte|ポイントカード',
    'a hand holding a bright green plastic loyalty card with a simple white star pattern, no chip, no logo, no readable words',
    ['tessere fedeltà', 'la tessera', 'tessera', 'la carta fedeltà', 'carta fedeltà']
  ),
  shop(
    'buono-regalo',
    'il buono regalo',
    ['Per il compleanno le regaliamo un buono regalo.', 'Posso usare il buono regalo online?', 'Il buono regalo scade a dicembre.'],
    '|The gift voucher, gift card|El cheque regalo, la tarjeta regalo|Le bon d’achat, la carte cadeau|Dárkový poukaz|Bon podarunkowy|Hediye çeki|Der Gutschein|ギフト券',
    'a small card with a red ribbon tied around it like a present, coming out of a white envelope, no readable words',
    ['buoni regalo', 'il buono', 'buono', 'la gift card']
  ),
  shop(
    'regalo',
    'il regalo',
    ['Che bel regalo, grazie!', 'Mi fa un pacchetto regalo?', 'Devo ancora comprare il regalo per la nonna.'],
    '|The present, gift|El regalo|Le cadeau|Dárek|Prezent|Hediye|Das Geschenk|プレゼント',
    'a box wrapped in red paper with a golden ribbon and a bow, product photo',
    ['regali', 'il pacchetto regalo', 'pacchetto regalo']
  ),
  shop(
    'pacco',
    'il pacco',
    ['È arrivato il pacco che ho ordinato online.', 'Il corriere ha lasciato il pacco al vicino.', 'Il pacco è troppo pesante.'],
    '|The parcel, package|El paquete|Le colis|Balík|Paczka|Kargo paketi, koli|Das Paket|小包',
    'a delivery courier in a plain uniform handing a cardboard parcel to a smiling woman at her front door, no logos, no words',
    ['pacchi', 'il pacchetto', 'pacchetto']
  ),
];

export const shoppingExampleWord = { bare: 'cassa', withArticle: 'la cassa' };

export const shoppingTranslationExercises = [
  tr(
    'Quanto costa questa borsa?',
    'How much is this bag?',
    '¿Cuánto cuesta este bolso?',
    'Combien coûte ce sac ?',
    'Kolik stojí tahle kabelka?',
    'Ile kosztuje ta torebka?',
    'Bu çanta ne kadar?',
    'Wie viel kostet diese Tasche?',
    'このバッグはいくらですか？'
  ),
  tr(
    'Posso pagare con la carta?',
    'Can I pay by card?',
    '¿Puedo pagar con tarjeta?',
    'Je peux payer par carte ?',
    'Můžu platit kartou?',
    'Mogę zapłacić kartą?',
    'Kartla ödeyebilir miyim?',
    'Kann ich mit Karte zahlen?',
    'カードで払えますか？'
  ),
  tr(
    'Non ho spiccioli: ha il resto di cinquanta euro?',
    'I haven’t got any change: do you have change for fifty euros?',
    'No tengo suelto: ¿tiene cambio de cincuenta euros?',
    'Je n’ai pas de monnaie : vous avez la monnaie sur cinquante euros ?',
    'Nemám drobné: můžete mi vrátit z padesáti eur?',
    'Nie mam drobnych: ma pan resztę z pięćdziesięciu euro?',
    'Bozuk param yok: elli avronun üstünü verebilir misiniz?',
    'Ich habe kein Kleingeld: Können Sie auf fünfzig Euro herausgeben?',
    '小銭がありません。50ユーロでおつりはありますか？'
  ),
  tr(
    'Il conto, per favore.',
    'The bill, please.',
    'La cuenta, por favor.',
    'L’addition, s’il vous plaît.',
    'Zaplatím, prosím. (Účet, prosím.)',
    'Poproszę rachunek.',
    'Hesap, lütfen.',
    'Die Rechnung, bitte.',
    'お会計をお願いします。'
  ),
  tr(
    'Posso provarlo? Dov’è il camerino?',
    'Can I try it on? Where is the fitting room?',
    '¿Puedo probármelo? ¿Dónde está el probador?',
    'Je peux l’essayer ? Où est la cabine d’essayage ?',
    'Můžu si to vyzkoušet? Kde je zkušební kabinka?',
    'Mogę to przymierzyć? Gdzie jest przymierzalnia?',
    'Deneyebilir miyim? Deneme kabini nerede?',
    'Kann ich das anprobieren? Wo ist die Umkleidekabine?',
    '試着してもいいですか？試着室はどこですか？'
  ),
  tr(
    'Ho comprato questo cappotto ai saldi: era scontato del cinquanta per cento.',
    'I bought this coat in the sales: it was fifty per cent off.',
    'Compré este abrigo en las rebajas: tenía un cincuenta por ciento de descuento.',
    'J’ai acheté ce manteau pendant les soldes : il était à moins cinquante pour cent.',
    'Tenhle kabát jsem koupil ve výprodeji: byl zlevněný o padesát procent.',
    'Kupiłem ten płaszcz na wyprzedaży: był przeceniony o pięćdziesiąt procent.',
    'Bu paltoyu indirim sezonunda aldım: yüzde elli indirimliydi.',
    'Ich habe diesen Mantel im Schlussverkauf gekauft: Er war um fünfzig Prozent reduziert.',
    'このコートはセールで買いました。50パーセント引きでした。'
  ),
  tr(
    'Conservi lo scontrino, se vuole cambiarlo.',
    'Keep the receipt if you want to exchange it.',
    'Guarde el tique si quiere cambiarlo.',
    'Gardez le ticket si vous voulez l’échanger.',
    'Schovejte si účtenku, jestli to budete chtít vyměnit.',
    'Proszę zachować paragon, jeśli chce pan to wymienić.',
    'Değiştirmek isterseniz fişi saklayın.',
    'Bewahren Sie den Kassenbon auf, wenn Sie es umtauschen möchten.',
    '交換したい場合は、レシートを保管しておいてください。'
  ),
  tr(
    'Oggi faccio la spesa: hai scritto la lista?',
    'I’m doing the shopping today: have you written the list?',
    'Hoy hago la compra: ¿has escrito la lista?',
    'Aujourd’hui je fais les courses : tu as écrit la liste ?',
    'Dnes jdu nakoupit: napsal jsi seznam?',
    'Dziś robię zakupy: napisałeś listę?',
    'Bugün market alışverişi yapıyorum: listeyi yazdın mı?',
    'Heute kaufe ich ein: Hast du den Einkaufszettel geschrieben?',
    '今日は買い物に行きます。リストは書いた？'
  ),
];
