// Le parole della lezione di vocabolario «Dov'è il gatto? Sopra, sotto, dentro, fuori» (2026-11-02).
//
// Martin il 2026-11-02 ha scelto questa lezione fra le proposte («Dov'è il gatto?»): le parole del luogo
// (sopra, sotto, dentro, davanti, accanto a, in cima a...) mostrate con gli animali, come «I colori e le
// forme», che e' il modello: «Riconosci la parola» piu' l'esercizio da trascinare «Dov'e' il gattino?»
// (`placeDescribeRows`, foto proprie, piu' parole giuste per foto). Gli animali sono il mezzo: le frasi
// d'esempio parlano di chiavi, libri, case e persone.
//
// Nel titolo della scheda c'e' la forma con la preposizione che la segue (davanti a, vicino a, lontano da);
// `answers` accetta anche la forma senza. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
// Foto con `generate-animal-images.mjs --set luogo` e `--set luogo-descrivi` (stile PLACE_STYLE, qualita'
// `medium` come i colori: la posizione deve leggersi bene).

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const place = (slug, word, answers, examples, alts, subject) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  const forms = [...word.split(' / '), ...answers];
  return {
    image: `luogo/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0],
    examples,
    answers: [...new Set(forms.flatMap((f) => [f, f.replace('’', ' '), f.replace('’', "'")]))],
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const placeVocabulary = [
  // --- sopra e sotto, dentro e fuori --------------------------------------------------------
  place(
    'sopra',
    'sopra',
    ['su'],
    ['Il gatto dorme sopra la scatola.', 'Le chiavi sono sopra il tavolo.', 'Abito sopra un bar: la mattina sento l’odore del caffè.'],
    '|On, on top of|Encima de, sobre|Sur, au-dessus de|Na, nad|Na, nad|Üstünde|Auf, über|〜の上に',
    'a cute tabby cat sitting on top of a closed cardboard box'
  ),
  place(
    'sotto',
    'sotto',
    [],
    ['Il cane dorme sotto il tavolo.', 'Ho trovato il telefono sotto il cuscino.', 'Quando piove, aspettiamo sotto il portico.'],
    '|Under|Debajo de|Sous|Pod|Pod|Altında|Unter|〜の下に',
    'a friendly beagle dog lying under a small wooden table, the whole table visible'
  ),
  place(
    'dentro',
    'dentro',
    ['in'],
    ['Il gattino è dentro la scatola.', 'Il portafoglio è dentro la borsa.', 'Fa freddo: restiamo dentro.'],
    '|Inside|Dentro de|Dans, dedans|Uvnitř|W środku|İçinde|In, drinnen|〜の中に',
    'a cute kitten inside an open cardboard box, only its head and front paws peeking over the edge'
  ),
  place(
    'fuori',
    'fuori',
    ['fuori da'],
    ['Il criceto è uscito: adesso è fuori dalla scatola.', 'Oggi c’è il sole: mangiamo fuori.', 'Ti aspetto fuori dal cinema.'],
    '|Outside, out of|Fuera de|Dehors, hors de|Venku, ven z|Na zewnątrz|Dışında|Draußen, außerhalb|〜の外に',
    'a cute hamster that has just climbed out of an open cardboard box and now sits on the floor outside the box, the empty box behind it'
  ),
  // --- davanti e dietro, accanto e di fronte ------------------------------------------------
  place(
    'davanti',
    'davanti a',
    ['davanti'],
    ['Il cane aspetta davanti alla porta.', 'Ci vediamo davanti alla stazione.', 'Al cinema c’è sempre uno alto davanti a me!'],
    '|In front of|Delante de|Devant|Před|Przed|Önünde|Vor|〜の前に',
    'a friendly golden retriever sitting in front of a closed green wooden front door, waiting'
  ),
  place(
    'dietro',
    'dietro',
    ['dietro a', 'dietro di'],
    ['Il gatto si nasconde dietro il vaso.', 'Il parcheggio è dietro la chiesa.', 'Chi è quel ragazzo dietro di te?'],
    '|Behind|Detrás de|Derrière|Za|Za|Arkasında|Hinter|〜の後ろに',
    'a cat hiding behind a large terracotta flower pot with a green plant, only its ears, eyes and tail visible around the pot'
  ),
  place(
    'accanto',
    'accanto a',
    ['accanto', 'vicino', 'vicino a'],
    ['I due pinguini stanno uno accanto all’altro.', 'Siediti accanto a me!', 'La farmacia è accanto al supermercato.'],
    '|Next to|Al lado de|À côté de|Vedle|Obok|Yanında|Neben|〜の隣に',
    'two penguins standing side by side, shoulder to shoulder, both facing the camera'
  ),
  place(
    'di-fronte',
    'di fronte a',
    ['di fronte'],
    ['I due gatti sono seduti uno di fronte all’altro.', 'La banca è di fronte alla posta.', 'Al ristorante mi siedo di fronte a te.'],
    '|Opposite, facing|Enfrente de, frente a|En face de|Naproti|Naprzeciwko|Karşısında|Gegenüber|〜の向かいに',
    'two cats sitting face to face at a short distance, looking at each other, seen from the side'
  ),
  // --- vicino e lontano ---------------------------------------------------------------------
  place(
    'vicino',
    'vicino a',
    ['vicino', 'accanto', 'accanto a'],
    ['Il cucciolo dorme vicino alla sua ciotola.', 'Abito vicino al mare.', 'C’è un bar qui vicino?'],
    '|Near, close to|Cerca de|Près de|Blízko, u|Blisko, koło|Yakınında|In der Nähe von|〜の近くに',
    'a puppy lying on the floor near its blue water bowl, a little space between them'
  ),
  place(
    'lontano',
    'lontano da',
    ['lontano'],
    ['La palla è qui, ma il cane è lontano.', 'Abito lontano dal centro.', 'La stazione è lontana da qui?'],
    '|Far from|Lejos de|Loin de|Daleko od|Daleko od|Uzağında|Weit weg von|〜から遠くに',
    'a long narrow strip of green lawn seen in deep perspective: a big red ball very close in the bottom left foreground, and a tiny dog very far away at the opposite end of the long lawn near the top right, so small it looks like a dot, with a lot of empty grass between them'
  ),
  // --- tra, in mezzo, intorno, attraverso ----------------------------------------------------
  place(
    'tra',
    'tra / fra',
    ['fra', 'tra'],
    ['Il gattino è seduto tra due cani.', 'La farmacia è tra la banca e il bar.', 'Arrivo tra le sei e le sette.'],
    '|Between|Entre|Entre|Mezi|Między|Arasında|Zwischen|〜の間に',
    'a small kitten sitting between two big friendly dogs, one dog on each side'
  ),
  place(
    'in-mezzo',
    'in mezzo a',
    ['in mezzo', 'al centro', 'al centro di'],
    ['Il cucciolo è seduto in mezzo al tappeto.', 'In mezzo alla piazza c’è una fontana.', 'Non lasciare la borsa in mezzo alla strada!'],
    '|In the middle of|En medio de|Au milieu de|Uprostřed|Pośrodku|Ortasında|Mitten in|〜の真ん中に',
    'a puppy sitting alone in the exact centre of a large round rug, seen from slightly above'
  ),
  place(
    'intorno',
    'intorno a',
    ['intorno'],
    ['I pulcini corrono intorno alla mamma.', 'Ci sediamo intorno al tavolo.', 'Intorno alla casa c’è un giardino.'],
    '|Around|Alrededor de|Autour de|Kolem|Wokół|Etrafında|Um … herum|〜の周りに',
    'seen from above at a high angle: a mother duck sitting in the centre and eight fluffy yellow ducklings forming a complete closed ring all around her, evenly spaced on every side, in front, behind, left and right'
  ),
  place(
    'attraverso',
    'attraverso',
    [],
    ['Il gatto passa attraverso la porticina.', 'Il sole entra attraverso la finestra.', 'Per arrivare al lago passiamo attraverso il bosco.'],
    '|Through|A través de|À travers|Skrz, přes|Przez|İçinden|Durch|〜を通り抜けて',
    'a cat walking through a small cat flap in a white door, half of its body on each side of the door'
  ),
  // --- in alto e in basso, in cima e in fondo -----------------------------------------------
  place(
    'in-cima',
    'in cima a',
    ['in cima'],
    ['La capra è in cima alla roccia.', 'Abito in cima alla collina.', 'Il tuo nome è in cima alla lista.'],
    '|On top of, at the top of|En lo alto de, en la cima de|En haut de, au sommet de|Na vrcholu, nahoře na|Na szczycie|Tepesinde|Oben auf, ganz oben|〜のてっぺんに',
    'a mountain goat standing proudly on the very top of a tall pointed rock'
  ),
  place(
    'in-fondo',
    'in fondo a',
    ['in fondo'],
    ['La tartaruga è in fondo all’acquario.', 'Il bagno è in fondo al corridoio.', 'Ho trovato le chiavi in fondo alla borsa.'],
    '|At the bottom of, at the end of|En el fondo de, al final de|Au fond de|Na dně, na konci|Na dnie, na końcu|Dibinde, sonunda|Ganz unten, am Ende|〜の底に、〜の奥に',
    'a small turtle resting at the bottom of a clear glass aquarium full of water, the whole aquarium visible'
  ),
  place(
    'in-alto',
    'in alto',
    [],
    ['Lo scoiattolo è in alto, sull’albero.', 'Metti i bicchieri in alto, nell’armadio.', 'Guarda in alto: c’è un aereo!'],
    '|High up, up there|Arriba|En haut|Nahoře|Wysoko, na górze|Yukarıda|Oben|高いところに',
    'a tall bare tree trunk, a red squirrel high up near the top of the trunk, the whole trunk visible from the ground'
  ),
  place(
    'in-basso',
    'in basso',
    [],
    ['Il cucciolo è in basso, sull’ultimo ripiano.', 'I libri dei bambini sono in basso.', 'La firma va in basso, a destra.'],
    '|Low down, down there|Abajo|En bas|Dole|Nisko, na dole|Aşağıda|Unten|低いところに',
    'a tall empty wooden bookcase with five shelves, a small puppy sitting on the lowest shelf at the bottom'
  ),
  // --- a destra e a sinistra, l'angolo e il bordo -------------------------------------------
  place(
    'a-destra',
    'a destra',
    ['a destra di'],
    ['Il coniglio è a destra, la carota è a sinistra.', 'Al semaforo gira a destra.', 'Il bagno è la seconda porta a destra.'],
    '|On the right|A la derecha|À droite|Vpravo|Po prawej, w prawo|Sağda|Rechts|右に',
    'an orange carrot on the left side of the picture and a white rabbit on the right side of the picture, with clear empty space between them'
  ),
  place(
    'a-sinistra',
    'a sinistra',
    ['a sinistra di'],
    ['Il riccio è a sinistra, la mela è a destra.', 'Prendi la prima strada a sinistra.', 'In Inghilterra si guida a sinistra.'],
    '|On the left|A la izquierda|À gauche|Vlevo|Po lewej, w lewo|Solda|Links|左に',
    'a hedgehog on the left side of the picture and a red apple on the right side of the picture, with clear empty space between them'
  ),
  place(
    'angolo',
    'nell’angolo',
    ['angolo', 'l’angolo', 'in un angolo'],
    ['Il cane si è messo nell’angolo.', 'Nell’angolo del salotto c’è una pianta.', 'Il bar è all’angolo della strada.'],
    '|In the corner|En el rincón, en la esquina|Dans le coin|V rohu|W rogu|Köşede|In der Ecke|隅に',
    'a small dog sitting in the corner where two plain white walls meet the floor, seen from inside the room'
  ),
  place(
    'bordo',
    'sul bordo',
    ['bordo', 'sul bordo di', 'il bordo'],
    ['Il gatto è seduto sul bordo del tavolo.', 'Non mettere il bicchiere sul bordo!', 'Ci sediamo sul bordo della piscina.'],
    '|On the edge|En el borde|Au bord|Na okraji|Na krawędzi|Kenarında|Am Rand|〜の端に',
    'a cat sitting on the very edge of a wooden table, looking down at the floor, the whole table visible'
  ),
];

// L'esercizio da trascinare «Dov'e' il gattino?»: in ogni foto lo stesso gattino rosso tigrato, in un posto
// che si descrive con piu' parole. `matches` elenca TUTTE le parole giuste (una giusta che manca diventa
// una risposta sbagliata), quindi e' generoso.
const KITTEN = 'the same small orange tabby kitten';
const describe = (slug, subject, matches) => ({
  image: `luogo/${slug}`,
  slug,
  word: slug,
  bare: slug,
  subject: `${KITTEN} ${subject}`,
  matches,
  never: [],
  noMatch: false,
});

export const placeDescribeRows = [
  describe('dov-e-armadio', 'sitting on the very top of a tall wooden wardrobe, the whole wardrobe visible', [
    'sopra',
    'in-cima',
    'in-alto',
  ]),
  describe('dov-e-letto', 'inside a small cardboard box that is under a bed, the whole bed visible', [
    'dentro',
    'sotto',
    'in-basso',
  ]),
  describe('dov-e-cani', 'sitting between two big friendly dogs, one on each side, touching them', [
    'tra',
    'in-mezzo',
    'accanto',
    'vicino',
  ]),
  describe('dov-e-tenda', 'peeking out from behind a long light curtain, only its head and one paw visible', [
    'dietro',
  ]),
  describe('dov-e-tavolo', 'sitting on the very edge of a wooden table, looking down at the floor', [
    'bordo',
    'sopra',
    'in-alto',
  ]),
  describe('dov-e-porta', 'sitting outside in front of a closed wooden door, waiting to come in', [
    'davanti',
    'fuori',
    'vicino',
  ]),
  describe('dov-e-cesto', 'inside a wicker basket on the left side of the picture, a ball of red yarn on the right side', [
    'dentro',
    'a-sinistra',
    'vicino',
  ]),
  describe('dov-e-tappeto', 'sitting in the centre of a round rug, surrounded by a circle of small toys', [
    'in-mezzo',
    'tra',
    'sopra',
  ]),
];

export const placeExampleWord = { bare: 'davanti', withArticle: 'davanti a' };

export const placeTranslationExercises = [
  tr(
    'Il gatto è sotto il letto.',
    'The cat is under the bed.',
    'El gato está debajo de la cama.',
    'Le chat est sous le lit.',
    'Kočka je pod postelí.',
    'Kot jest pod łóżkiem.',
    'Kedi yatağın altında.',
    'Die Katze ist unter dem Bett.',
    '猫はベッドの下にいます。'
  ),
  tr(
    'Le chiavi sono dentro la borsa.',
    'The keys are in the bag.',
    'Las llaves están dentro del bolso.',
    'Les clés sont dans le sac.',
    'Klíče jsou v tašce.',
    'Klucze są w torbie.',
    'Anahtarlar çantanın içinde.',
    'Die Schlüssel sind in der Tasche.',
    '鍵はかばんの中にあります。'
  ),
  tr(
    'Ci vediamo davanti alla stazione.',
    'See you in front of the station.',
    'Nos vemos delante de la estación.',
    'On se retrouve devant la gare.',
    'Uvidíme se před nádražím.',
    'Widzimy się przed dworcem.',
    'İstasyonun önünde görüşürüz.',
    'Wir sehen uns vor dem Bahnhof.',
    '駅の前で会いましょう。'
  ),
  tr(
    'La farmacia è accanto alla banca.',
    'The pharmacy is next to the bank.',
    'La farmacia está al lado del banco.',
    'La pharmacie est à côté de la banque.',
    'Lékárna je vedle banky.',
    'Apteka jest obok banku.',
    'Eczane bankanın yanında.',
    'Die Apotheke ist neben der Bank.',
    '薬局は銀行の隣にあります。'
  ),
  tr(
    'Abito lontano dal centro.',
    'I live far from the centre.',
    'Vivo lejos del centro.',
    'J’habite loin du centre.',
    'Bydlím daleko od centra.',
    'Mieszkam daleko od centrum.',
    'Merkezden uzakta oturuyorum.',
    'Ich wohne weit weg vom Zentrum.',
    '私は中心街から遠くに住んでいます。'
  ),
  tr(
    'Il bagno è in fondo al corridoio, a destra.',
    'The bathroom is at the end of the corridor, on the right.',
    'El baño está al fondo del pasillo, a la derecha.',
    'Les toilettes sont au fond du couloir, à droite.',
    'Koupelna je na konci chodby, vpravo.',
    'Łazienka jest na końcu korytarza, po prawej.',
    'Banyo koridorun sonunda, sağda.',
    'Das Bad ist am Ende des Flurs, rechts.',
    'トイレは廊下の奥の右側です。'
  ),
  tr(
    'In mezzo alla piazza c’è una fontana.',
    'There is a fountain in the middle of the square.',
    'En medio de la plaza hay una fuente.',
    'Il y a une fontaine au milieu de la place.',
    'Uprostřed náměstí je kašna.',
    'Na środku placu jest fontanna.',
    'Meydanın ortasında bir çeşme var.',
    'Mitten auf dem Platz steht ein Brunnen.',
    '広場の真ん中に噴水があります。'
  ),
  tr(
    'Siediti accanto a me!',
    'Sit next to me!',
    '¡Siéntate a mi lado!',
    'Assieds-toi à côté de moi !',
    'Sedni si vedle mě!',
    'Usiądź obok mnie!',
    'Yanıma otur!',
    'Setz dich neben mich!',
    '私の隣に座って！'
  ),
];
