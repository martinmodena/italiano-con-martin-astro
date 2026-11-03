// I verbi della lezione «I verbi degli acquisti» (2026-11-03).
//
// Seguito di «Fare acquisti: soldi e negozi», chiesto da Martin. Qui, per la prima volta, alcuni verbi si
// RIPETONO apposta (Martin: «anche ripetere penso non sia un grave problema»): fare la spesa, scegliere,
// pesare, provare, fare la fila e comprare sono anche in «I verbi della citta'», ma qui hanno foto e frasi
// nuove, pensate per il negozio; *pagare* e' diviso in pagare in contanti e pagare con la carta. Nuovi: fare
// shopping, mettere nel carrello, dare il resto, costare, spendere, risparmiare, contare i soldi, tirare sul
// prezzo, fare uno sconto, incartare, fare un regalo, cambiare, restituire, ordinare online, ricevere un pacco.
//
// Esercizio come «I verbi della citta'» (`photoRows`): una foto per riga, i verbi nella barra, per ogni foto e'
// giusto il suo verbo piu' quelli di `fits`. Le coppie che una foto sola non distingue (comprare/pagare,
// cambiare/restituire, fare la spesa/mettere nel carrello/scegliere) si accettano a vicenda.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`,
// `generate-animal-images.mjs --set verbi-acquisti`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const sv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-acquisti/${slug}`,
    slug,
    word,
    bare: word,
    examples,
    subject: scene,
    matches: [slug, ...fits],
    never: [],
    noMatch: false,
    gloss: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, i === 0 ? def : glosses[i - 1]])),
  };
};

export const shoppingVerbs = [
  // --- al negozio e al supermercato ------------------------------------------------------------
  sv(
    'fare-la-spesa',
    'fare la spesa',
    'Comprare da mangiare e le cose per la casa.',
    ['to do the (grocery) shopping', 'hacer la compra', 'faire les courses', 'nakupovat (potraviny)', 'robić zakupy (spożywcze)', 'market alışverişi yapmak', 'einkaufen (Lebensmittel)', '（食料品の）買い物をする'],
    ['Il sabato mattina faccio la spesa.', 'Chi fa la spesa questa settimana?', 'Ho fatto la spesa al mercato sotto casa.'],
    'a woman pushing a supermarket trolley full of fruit and vegetables along a bright aisle, smiling',
    ['mettere-nel-carrello', 'scegliere']
  ),
  sv(
    'fare-shopping',
    'fare shopping',
    'Girare per i negozi e comprare vestiti o altre cose, per piacere.',
    ['to go shopping', 'ir de compras, ir de tiendas', 'faire du shopping, faire les magasins', 'jít na nákupy', 'chodzić po sklepach', 'alışverişe çıkmak', 'shoppen, bummeln gehen', 'ショッピングする'],
    ['Sabato andiamo a fare shopping in centro.', 'A mia sorella piace molto fare shopping.', 'Ho fatto shopping e ho speso troppo!'],
    'two smiling friends walking along a sunny Italian shopping street, each carrying several colourful paper shopping bags with no logos',
    ['comprare', 'spendere']
  ),
  sv(
    'scegliere',
    'scegliere',
    'Prendere una cosa tra tante.',
    ['to choose', 'elegir', 'choisir', 'vybrat', 'wybierać', 'seçmek', 'auswählen', '選ぶ'],
    ['Non so quale scegliere: la rossa o la blu?', 'Scegli tu il vino.', 'Ho scelto le pesche più mature.'],
    'a woman at a market stall carefully choosing a ripe peach from a crate of peaches, holding one in each hand and comparing them',
    ['fare-la-spesa']
  ),
  sv(
    'mettere-nel-carrello',
    'mettere nel carrello',
    'Mettere un prodotto nel carrello per comprarlo, anche nei negozi online.',
    ['to put in the trolley (cart)', 'echar al carro', 'mettre dans le chariot (le panier)', 'dát do košíku', 'włożyć do koszyka', 'sepete atmak', 'in den Einkaufswagen legen', 'カートに入れる'],
    ['Metti nel carrello anche il latte.', 'Ho messo le scarpe nel carrello, ma non le ho ancora comprate.', 'Il bambino mette nel carrello tutti i biscotti.'],
    'a man putting a packet of pasta into a supermarket trolley, the shelves behind him with plain packaging and no brands',
    ['fare-la-spesa']
  ),
  sv(
    'pesare',
    'pesare',
    'Mettere sulla bilancia per sapere quanto è pesante.',
    ['to weigh', 'pesar', 'peser', 'vážit', 'ważyć', 'tartmak', 'wiegen', '量る'],
    ['Al supermercato la frutta si pesa da soli.', 'Mi pesa due etti di olive?', 'Il fruttivendolo pesa le arance.'],
    'a greengrocer putting a paper bag of oranges on a white shop scale, the small display blank'
  ),
  sv(
    'provare',
    'provare',
    'Mettersi un vestito o le scarpe per vedere se vanno bene.',
    ['to try on', 'probarse', 'essayer', 'vyzkoušet si', 'przymierzyć', 'denemek', 'anprobieren', '試着する'],
    ['Posso provare questa giacca?', 'Prova una taglia più grande.', 'Ho provato le scarpe, ma sono strette.'],
    'a young woman in a shop trying on a loose wool coat in front of a full-length mirror, looking at herself'
  ),
  sv(
    'fare-la-fila',
    'fare la fila',
    'Aspettare il proprio turno dietro altre persone.',
    ['to queue, to stand in line', 'hacer cola', 'faire la queue', 'stát ve frontě', 'stać w kolejce', 'sıraya girmek', 'Schlange stehen', '列に並ぶ'],
    ['Alla cassa c’è da fare la fila.', 'Abbiamo fatto la fila per mezz’ora.', 'Non mi piace fare la fila.'],
    'four people with shopping baskets standing in a line at a supermarket checkout, waiting patiently'
  ),
  // --- pagare e i soldi -------------------------------------------------------------------------
  sv(
    'comprare',
    'comprare',
    'Prendere una cosa e pagarla.',
    ['to buy', 'comprar', 'acheter', 'koupit', 'kupować', 'satın almak', 'kaufen', '買う'],
    ['Ho comprato un regalo per la mamma.', 'Dove hai comprato quella borsa?', 'Compro il pane tutte le mattine.'],
    'a smiling customer receiving a paper bag with a new pair of shoes from a shop assistant across the counter',
    ['pagare-in-contanti', 'pagare-con-la-carta']
  ),
  sv(
    'pagare-in-contanti',
    'pagare in contanti',
    'Pagare con le banconote e le monete.',
    ['to pay (in) cash', 'pagar en efectivo', 'payer en espèces, payer en liquide', 'platit v hotovosti', 'płacić gotówką', 'nakit ödemek', 'bar bezahlen', '現金で払う'],
    ['Al mercato pago sempre in contanti.', 'Si può pagare solo in contanti?', 'Ho pagato il caffè in contanti.'],
    'a customer handing a banknote across a shop counter to a smiling shopkeeper, banknote with no readable numbers or words',
    ['comprare', 'dare-il-resto']
  ),
  sv(
    'pagare-con-la-carta',
    'pagare con la carta',
    'Pagare con la carta di credito o il bancomat.',
    ['to pay by card', 'pagar con tarjeta', 'payer par carte', 'platit kartou', 'płacić kartą', 'kartla ödemek', 'mit Karte zahlen', 'カードで払う'],
    ['Posso pagare con la carta?', 'Ormai pago tutto con la carta.', 'Il negozio non accetta di pagare con la carta sotto i cinque euro.'],
    'a customer holding a bank card against a small card machine held by a cashier at a shop till, no readable words',
    ['comprare']
  ),
  sv(
    'dare-il-resto',
    'dare il resto',
    'Ridare al cliente i soldi in più che ha pagato.',
    ['to give (someone) change', 'dar el cambio, dar la vuelta', 'rendre la monnaie', 'vrátit drobné', 'wydać resztę', 'para üstü vermek', 'Wechselgeld herausgeben', 'おつりを渡す'],
    ['Mi scusi, non mi ha dato il resto.', 'Il cassiere mi ha dato il resto in monete.', 'Non ho spiccioli per darle il resto.'],
    'a cashier counting coins into a customer’s open hand over the counter of a small shop',
    ['pagare-in-contanti']
  ),
  sv(
    'costare',
    'costare',
    'Avere un prezzo.',
    ['to cost', 'costar', 'coûter', 'stát (o ceně)', 'kosztować', 'tutmak, fiyatı olmak', 'kosten', '（値段が）かかる'],
    ['Quanto costa questo maglione?', 'Le fragole costano tre euro al chilo.', 'Il biglietto è costato pochissimo.'],
    'close view of a woman in a shop holding a red handbag in one hand and with the other turning over its large white paper price tag to look at it, a curious and slightly surprised face, the tag with only grey lines and no readable numbers'
  ),
  sv(
    'spendere',
    'spendere',
    'Usare i soldi per comprare qualcosa.',
    ['to spend', 'gastar', 'dépenser', 'utratit', 'wydawać (pieniądze)', 'harcamak', 'ausgeben', '使う（お金を）'],
    ['Quanto hai speso al supermercato?', 'Questo mese abbiamo speso troppo.', 'Non spendere tutti i soldi in vestiti!'],
    'a surprised man at a shop till looking at a very long paper receipt that the cashier is holding out, his eyebrows raised',
  ),
  sv(
    'risparmiare',
    'risparmiare',
    'Non spendere i soldi e metterli da parte.',
    ['to save (money)', 'ahorrar', 'économiser, épargner', 'šetřit', 'oszczędzać', 'para biriktirmek', 'sparen', '貯金する、節約する'],
    ['Risparmio per comprarmi una bici.', 'Al mercato si risparmia.', 'Abbiamo risparmiato per un anno per questo viaggio.'],
    'a girl dropping a coin into a big glass jar already half full of coins, smiling'
  ),
  sv(
    'contare-i-soldi',
    'contare i soldi',
    'Guardare quanti soldi si hanno, una banconota o una moneta alla volta.',
    ['to count (the) money', 'contar el dinero', 'compter l’argent', 'počítat peníze', 'liczyć pieniądze', 'parayı saymak', 'das Geld zählen', 'お金を数える'],
    ['Il cassiere conta i soldi alla fine della giornata.', 'Conta i soldi prima di uscire dal negozio.', 'Ho contato i soldi: mancano dieci euro.'],
    'close view of two hands counting a fan of colourful euro-style banknotes (blue, orange, green and red, not green dollars) over a white table, a few coins beside them, the notes with simple patterns and no readable words'
  ),
  sv(
    'tirare-sul-prezzo',
    'tirare sul prezzo',
    'Chiedere al venditore di abbassare il prezzo.',
    ['to haggle, to bargain', 'regatear', 'marchander', 'smlouvat', 'targować się', 'pazarlık yapmak', 'feilschen, handeln', '値切る'],
    ['Al mercatino dell’usato si può tirare sul prezzo.', 'Ho tirato sul prezzo e ho risparmiato venti euro.', 'Mio nonno tira sempre sul prezzo.'],
    'at an outdoor flea market stall, a customer and an elderly stallholder bargaining with friendly hand gestures over an old brass lamp'
  ),
  sv(
    'fare-uno-sconto',
    'fare uno sconto',
    'Abbassare il prezzo per un cliente.',
    ['to give a discount', 'hacer un descuento', 'faire une réduction', 'dát slevu', 'dać zniżkę, opuścić cenę', 'indirim yapmak', 'einen Rabatt geben', '値引きする'],
    ['Se ne prendo due, mi fa uno sconto?', 'Il negozio fa lo sconto agli studenti.', 'Mi hanno fatto il venti per cento di sconto.'],
    'a smiling shopkeeper attaching a bright red price tag with a big white percent sign % to a jacket on a hanger, nothing else written'
  ),
  // --- regali e acquisti online -----------------------------------------------------------------
  sv(
    'incartare',
    'incartare',
    'Avvolgere un regalo nella carta.',
    ['to gift-wrap', 'envolver (para regalo)', 'emballer (un cadeau)', 'zabalit (dárek)', 'zapakować (prezent)', 'paketlemek (hediye)', 'als Geschenk einpacken', '（プレゼントを）包む'],
    ['Me lo può incartare? È un regalo.', 'La commessa ha incartato il libro.', 'Sono bravissima a incartare i regali.'],
    'a shop assistant’s hands wrapping a box in red gift paper on the counter, a roll of paper and a golden ribbon beside it'
  ),
  sv(
    'fare-un-regalo',
    'fare un regalo',
    'Dare a qualcuno una cosa comprata per lui.',
    ['to give a present', 'hacer un regalo', 'faire un cadeau', 'dát dárek', 'dać prezent', 'hediye vermek', 'ein Geschenk machen', 'プレゼントをする'],
    ['Per il suo compleanno le faccio un regalo.', 'Mi hanno fatto un regalo bellissimo.', 'Che regalo facciamo alla nonna?'],
    'a girl giving a present wrapped in red paper to her smiling grandmother at home'
  ),
  sv(
    'cambiare',
    'cambiare',
    'Riportare un prodotto al negozio e prenderne un altro.',
    ['to exchange (a product)', 'cambiar (un producto)', 'échanger', 'vyměnit (zboží)', 'wymienić (towar)', 'değiştirmek (ürünü)', 'umtauschen', '交換する'],
    ['Posso cambiare questa maglia con una taglia più piccola?', 'Ho cambiato le scarpe: erano strette.', 'Senza lo scontrino non si può cambiare.'],
    'a customer at a shoe shop counter holding out one shoe box while the shop assistant hands her another shoe box of a different colour',
    ['restituire']
  ),
  sv(
    'restituire',
    'restituire',
    'Riportare un prodotto e farsi ridare i soldi.',
    ['to return (a product)', 'devolver', 'rendre, retourner', 'vrátit (zboží)', 'zwrócić, oddać', 'iade etmek', 'zurückgeben', '返品する'],
    ['Il maglione non mi va bene: lo restituisco.', 'Hai quattordici giorni per restituire un acquisto online.', 'Ho restituito il telefono perché non funzionava.'],
    'a customer handing back a folded sweater in a paper bag with a receipt to a shop assistant at the counter',
    ['cambiare']
  ),
  sv(
    'ordinare-online',
    'ordinare online',
    'Comprare su internet e farsi mandare la merce a casa.',
    ['to order online', 'pedir por internet', 'commander en ligne', 'objednat na internetu', 'zamówić przez internet', 'internetten sipariş vermek', 'online bestellen', 'ネットで注文する'],
    ['Ho ordinato online un libro.', 'Ordino online la spesa e me la portano a casa.', 'È più comodo ordinare online?'],
    'a young man sitting on a sofa with a laptop on his knees and a bank card in his hand, the laptop screen seen from behind, no readable words'
  ),
  sv(
    'ricevere-un-pacco',
    'ricevere un pacco',
    'Avere a casa un pacco mandato da un negozio o da qualcuno.',
    ['to receive a parcel', 'recibir un paquete', 'recevoir un colis', 'dostat balík', 'dostać paczkę', 'paket almak', 'ein Paket bekommen', '小包を受け取る'],
    ['Oggi dovrei ricevere un pacco.', 'Ho ricevuto il pacco, ma è rotto.', 'Quando ricevi il pacco, mandami un messaggio.'],
    'a smiling woman at home opening a cardboard parcel on the kitchen table, lifting the flaps, no logos, no words'
  ),
];

export const shoppingVerbTranslationExercises = [
  tr(
    'Quanto costa? Posso pagare con la carta?',
    'How much is it? Can I pay by card?',
    '¿Cuánto cuesta? ¿Puedo pagar con tarjeta?',
    'Combien ça coûte ? Je peux payer par carte ?',
    'Kolik to stojí? Můžu platit kartou?',
    'Ile to kosztuje? Mogę zapłacić kartą?',
    'Ne kadar? Kartla ödeyebilir miyim?',
    'Wie viel kostet das? Kann ich mit Karte zahlen?',
    'いくらですか？カードで払えますか？'
  ),
  tr(
    'Ho provato la giacca, ma è troppo grande.',
    'I tried the jacket on, but it’s too big.',
    'Me he probado la chaqueta, pero es demasiado grande.',
    'J’ai essayé la veste, mais elle est trop grande.',
    'Zkusila jsem si sako, ale je moc velké.',
    'Przymierzyłam kurtkę, ale jest za duża.',
    'Ceketi denedim ama çok büyük.',
    'Ich habe die Jacke anprobiert, aber sie ist zu groß.',
    'ジャケットを試着しましたが、大きすぎます。'
  ),
  tr(
    'Se ne prendo due, mi fa uno sconto?',
    'If I take two, will you give me a discount?',
    'Si me llevo dos, ¿me hace un descuento?',
    'Si j’en prends deux, vous me faites une réduction ?',
    'Když si vezmu dva, dáte mi slevu?',
    'Jeśli wezmę dwa, da mi pan zniżkę?',
    'İki tane alırsam indirim yapar mısınız?',
    'Wenn ich zwei nehme, geben Sie mir einen Rabatt?',
    '二つ買ったら、値引きしてもらえますか？'
  ),
  tr(
    'Me lo può incartare? È un regalo.',
    'Could you gift-wrap it? It’s a present.',
    '¿Me lo puede envolver? Es un regalo.',
    'Vous pouvez me faire un paquet cadeau ? C’est pour offrir.',
    'Můžete mi to zabalit? Je to dárek.',
    'Może pan to zapakować? To prezent.',
    'Paketleyebilir misiniz? Hediye.',
    'Können Sie es als Geschenk einpacken? Es ist ein Geschenk.',
    'プレゼント用に包んでもらえますか？'
  ),
  tr(
    'Vorrei cambiare queste scarpe: ecco lo scontrino.',
    'I’d like to exchange these shoes: here’s the receipt.',
    'Quería cambiar estos zapatos: aquí tiene el tique.',
    'Je voudrais échanger ces chaussures : voici le ticket.',
    'Chtěl bych vyměnit tyhle boty: tady je účtenka.',
    'Chciałbym wymienić te buty: oto paragon.',
    'Bu ayakkabıları değiştirmek istiyorum: işte fiş.',
    'Ich möchte diese Schuhe umtauschen: Hier ist der Kassenbon.',
    'この靴を交換したいです。これがレシートです。'
  ),
  tr(
    'Questo mese abbiamo speso troppo: dobbiamo risparmiare.',
    'We spent too much this month: we need to save.',
    'Este mes hemos gastado demasiado: tenemos que ahorrar.',
    'Ce mois-ci, nous avons trop dépensé : il faut économiser.',
    'Tento měsíc jsme utratili moc: musíme šetřit.',
    'W tym miesiącu wydaliśmy za dużo: musimy oszczędzać.',
    'Bu ay çok harcadık: para biriktirmemiz lazım.',
    'Diesen Monat haben wir zu viel ausgegeben: Wir müssen sparen.',
    '今月はお金を使いすぎました。節約しないと。'
  ),
  tr(
    'Ho ordinato online un libro e oggi ho ricevuto il pacco.',
    'I ordered a book online and today I received the parcel.',
    'Pedí un libro por internet y hoy he recibido el paquete.',
    'J’ai commandé un livre en ligne et aujourd’hui j’ai reçu le colis.',
    'Objednal jsem si knihu na internetu a dnes mi přišel balík.',
    'Zamówiłem książkę przez internet i dziś dostałem paczkę.',
    'İnternetten bir kitap sipariş ettim ve bugün paketi aldım.',
    'Ich habe online ein Buch bestellt und heute das Paket bekommen.',
    'ネットで本を注文して、今日小包を受け取りました。'
  ),
  tr(
    'Mi scusi, non mi ha dato il resto.',
    'Excuse me, you haven’t given me my change.',
    'Perdone, no me ha dado el cambio.',
    'Excusez-moi, vous ne m’avez pas rendu la monnaie.',
    'Promiňte, nevrátil jste mi drobné.',
    'Przepraszam, nie wydał mi pan reszty.',
    'Affedersiniz, para üstünü vermediniz.',
    'Entschuldigung, Sie haben mir kein Wechselgeld gegeben.',
    'すみません、おつりをもらっていません。'
  ),
];
