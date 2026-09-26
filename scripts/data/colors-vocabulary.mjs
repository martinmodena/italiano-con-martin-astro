// Le parole della lezione di vocabolario «I colori e le forme» (2026-09-26).
//
// Richiesta di Martin: colori e forme, resi divertenti con gli animali. Gli animali sono il mezzo
// (il fenicottero e' rosa, la zebra e' a righe, la stella marina ha la forma di una stella): le parole
// sono quelle di tutti i giorni, che servono per i vestiti, la casa, gli oggetti.
//
// Quattro gruppi: i colori (13), le fantasie (6: a righe, a pois...), le forme (8) e tre aggettivi di
// forma. Nel titolo della scheda ci sono le due forme quando esistono (rosso / rossa); `answers` accetta
// anche il plurale. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Poi l'esercizio con trascinamento «Descrivi l'animale» (`colorDescribeRows`): una foto per riga, nella
// barra le parole della lezione, e per ogni foto vanno bene piu' parole (la tigre e' arancione, nera e a
// righe). Stesso meccanismo della lezione sui verbi delle relazioni (`photoRows`).
//
// Foto REALISTICHE (Martin, 2026-09-26: niente disegni SVG, immagini di qualita' ma non troppo care):
// gpt-image-1-mini a qualita' `medium`, `generate-animal-images.mjs --set colori` e `--set colori-descrivi`.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Le forme della scheda, con e senza articolo e apostrofo, piu' quelle in `extra` (plurali, sinonimi). */
const answersFor = (word, extra) => {
  const list = [];
  for (const form of [...word.split(' / '), ...extra]) {
    list.push(form, form.replace(ARTICLE, ''));
    if (form.includes('’')) list.push(form.replace('’', ' '), form.replace('’', ''));
  }
  return [...new Set(list)];
};

const color = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `colori/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const colorVocabulary = [
  // --- i colori ------------------------------------------------------------------------
  color(
    'rosso',
    'rosso / rossa',
    ['Il cardinale è un uccello rosso.', 'Ho comprato una giacca rossa.', 'Al semaforo rosso ci si ferma.'],
    '|Red|Rojo / roja|Rouge|Červený / červená|Czerwony / czerwona|Kırmızı|Rot|赤、赤い',
    'a bright red northern cardinal bird perched on a short bare twig',
    ['rossi', 'rosse']
  ),
  color(
    'arancione',
    'arancione',
    ['Il pesce pagliaccio è arancione e bianco.', 'Le zucche sono arancioni.', 'Mi presti la matita arancione?'],
    '|Orange|Naranja|Orange|Oranžový|Pomarańczowy|Turuncu|Orange|オレンジ色',
    'a bright orange clownfish with white stripes, seen from the side, swimming',
    ['arancioni', 'arancio']
  ),
  color(
    'giallo',
    'giallo / gialla',
    ['Il canarino è giallo.', 'I taxi di New York sono gialli.', 'In primavera il prato è pieno di fiori gialli.'],
    '|Yellow|Amarillo / amarilla|Jaune|Žlutý / žlutá|Żółty / żółta|Sarı|Gelb|黄色、黄色い',
    'a bright yellow canary bird perched on a short twig',
    ['gialli', 'gialle']
  ),
  color(
    'verde',
    'verde',
    ['La rana è verde.', 'Le foglie sono verdi.', 'Quando il semaforo è verde puoi passare.'],
    '|Green|Verde|Vert / verte|Zelený / zelená|Zielony / zielona|Yeşil|Grün|緑、緑色',
    'a bright green tree frog sitting and smiling',
    ['verdi']
  ),
  color(
    'azzurro',
    'azzurro / azzurra',
    [
      'Il cielo oggi è azzurro.',
      'Il pappagallino di mia nonna è azzurro.',
      'I giocatori della nazionale italiana si chiamano «gli Azzurri».',
    ],
    '|Light blue, sky blue|Azul claro, celeste|Bleu clair, bleu ciel|Světle modrý, blankytný|Błękitny|Açık mavi, gök mavisi|Hellblau, himmelblau|水色、空色',
    'a light sky-blue budgerigar parakeet perched on a short twig',
    ['azzurri', 'azzurre', 'celeste']
  ),
  color(
    'blu',
    'blu',
    ['Questa farfalla ha le ali blu.', 'Mi metto i jeans blu.', 'Di notte il mare è blu scuro.'],
    '|Blue, dark blue|Azul|Bleu|Modrý|Niebieski, granatowy|Mavi, lacivert|Blau|青、紺色',
    'a big blue morpho butterfly with open wings seen from above, deep shiny blue',
    ['blù']
  ),
  color(
    'viola',
    'viola',
    ['Questo pesce ha una lunga coda viola.', 'Le melanzane sono viola.', 'Mia sorella ha i capelli viola!'],
    '|Purple, violet|Morado, violeta|Violet|Fialový|Fioletowy|Mor|Lila, violett|紫、紫色',
    'a purple betta fish with long flowing violet fins and tail, seen from the side',
    ['violetto', 'violetta']
  ),
  color(
    'rosa',
    'rosa',
    ['Il fenicottero è rosa.', 'La bambina ha un vestito rosa.', 'Le guance dei neonati sono rosa.'],
    '|Pink|Rosa|Rose|Růžový|Różowy|Pembe|Rosa|ピンク',
    'a pink flamingo standing on one leg',
    []
  ),
  color(
    'marrone',
    'marrone',
    ['L’orso bruno è marrone.', 'Ho gli occhi marroni.', 'Dove sono le mie scarpe marroni?'],
    '|Brown|Marrón|Marron|Hnědý|Brązowy|Kahverengi|Braun|茶色',
    'a brown bear sitting and looking friendly',
    ['marroni', 'bruno', 'castano']
  ),
  color(
    'grigio',
    'grigio / grigia',
    ['L’elefante è grigio.', 'Oggi il cielo è grigio: forse piove.', 'Mio nonno ha i capelli grigi.'],
    '|Grey|Gris|Gris / grise|Šedý / šedá|Szary / szara|Gri|Grau|灰色',
    'a grey baby elephant standing, whole body visible',
    ['grigi', 'grigie']
  ),
  color(
    'nero',
    'nero / nera',
    [
      'Il gatto nero dorme sul divano.',
      'Per il colloquio metto il vestito nero.',
      'Bevo il caffè nero, senza zucchero.',
    ],
    '|Black|Negro / negra|Noir / noire|Černý / černá|Czarny / czarna|Siyah|Schwarz|黒、黒い',
    'a black cat with yellow eyes sitting upright',
    ['neri', 'nere']
  ),
  color(
    'bianco',
    'bianco / bianca',
    ['Il coniglio è tutto bianco.', 'D’inverno le montagne sono bianche.', 'Mi piacciono le pareti bianche.'],
    '|White|Blanco / blanca|Blanc / blanche|Bílý / bílá|Biały / biała|Beyaz|Weiß|白、白い',
    'a fluffy white rabbit sitting, with pink inner ears',
    ['bianchi', 'bianche']
  ),
  color(
    'colorato',
    'colorato / colorata',
    [
      'Il pappagallo è molto colorato.',
      'I bambini disegnano con le matite colorate.',
      'Burano è famosa per le sue case colorate.',
    ],
    '|Colourful|De colores, colorido|Coloré / colorée|Barevný / barevná|Kolorowy / kolorowa|Renkli|Bunt|カラフルな',
    'a scarlet macaw parrot with red, yellow, blue and green feathers, perched on a short branch',
    ['colorati', 'colorate', 'variopinto', 'multicolore']
  ),

  // --- le fantasie -----------------------------------------------------------------------
  color(
    'a-righe',
    'a righe',
    [
      'La zebra è a righe bianche e nere.',
      'Ho una maglietta a righe blu e bianche.',
      'I marinai portano la maglia a righe.',
    ],
    '|Striped|A rayas|À rayures|Pruhovaný|W paski|Çizgili|Gestreift|しま模様の、ストライプの',
    'a zebra standing, whole body visible, with clear black and white stripes',
    ['righe', 'a strisce', 'strisce', 'rigato', 'rigata', 'a righine']
  ),
  color(
    'a-pois',
    'a pois',
    ['La coccinella è rossa a pois neri.', 'La nonna ha un vestito a pois.', 'Mi piace questa tazza a pois bianchi.'],
    '|Polka-dot, spotted|De lunares|À pois|Puntíkovaný|W groszki|Puantiyeli|Gepunktet, mit Punkten|水玉模様の',
    'a red ladybird with round black spots sitting on a small green leaf, seen from above, big in the frame',
    ['pois', 'a puntini', 'a palline', 'a pallini']
  ),
  color(
    'a-macchie',
    'a macchie',
    ['Il dalmata è bianco a macchie nere.', 'Le mucche sono spesso a macchie.', 'Ho un gatto bianco a macchie grigie.'],
    '|Spotted, patched|Con manchas|Tacheté, à taches|Strakatý, skvrnitý|W łaty, w plamy|Benekli, alacalı|Gefleckt, scheckig|ぶちの、まだら模様の',
    'a dalmatian dog standing, white with black spots',
    ['macchie', 'macchiato', 'macchiata', 'pezzato', 'pezzata', 'a chiazze']
  ),
  color(
    'maculato',
    'maculato / maculata',
    ['Il leopardo ha il pelo maculato.', 'Ho comprato una borsa maculata.', 'Le giraffe hanno il pelo maculato.'],
    '|Spotted (like a leopard), leopard print|Moteado, estampado de leopardo|Tacheté, léopard (motif)|Skvrnitý, leopardí vzor|Cętkowany, w panterkę|Benekli, leopar desenli|Gefleckt, Leopardenmuster|ヒョウ柄の、斑点のある',
    'a leopard standing, whole body visible, with its spotted golden coat',
    ['maculati', 'maculate', 'leopardato', 'leopardata']
  ),
  color(
    'a-quadri',
    'a quadri',
    [
      'Il gattino dorme su una coperta a quadri.',
      'Per il picnic portiamo la tovaglia a quadri.',
      'Mio padre porta sempre camicie a quadri.',
    ],
    '|Checked, plaid|A cuadros|À carreaux|Kostkovaný|W kratkę|Kareli|Kariert|チェック柄の',
    'a small tabby kitten sleeping curled up on a folded red-and-white checked blanket',
    ['quadri', 'a quadretti', 'quadretti', 'scozzese']
  ),
  color(
    'tinta-unita',
    'in tinta unita',
    [
      'La pantera nera è tutta in tinta unita.',
      'Preferisco le magliette in tinta unita.',
      'Con una gonna a fiori metto una camicia in tinta unita.',
    ],
    '|Plain, single-colour|Liso, de un solo color|Uni, d’une seule couleur|Jednobarevný|Jednolity, gładki|Düz, tek renk|Einfarbig, uni|無地の',
    'a black panther standing, whole body visible, uniformly black coat',
    ['tinta unita', 'a tinta unita']
  ),

  // --- le forme --------------------------------------------------------------------------
  color(
    'cerchio',
    'il cerchio',
    [
      'Il gatto è seduto dentro un cerchio.',
      'I bambini si mettono in cerchio.',
      'Disegna un cerchio intorno alla risposta giusta.',
    ],
    '|The circle (also: the hoop)|El círculo (también: el aro)|Le cercle (aussi : le cerceau)|Kruh (také: obruč)|Koło (też: obręcz)|Daire, çember|Der Kreis (auch: der Reifen)|円、輪',
    'a cute cat sitting inside a red plastic hula hoop lying flat on the floor, the whole hoop visible, seen slightly from above',
    ['cerchi', 'il tondo']
  ),
  color(
    'quadrato',
    'il quadrato',
    [
      'Il gatto dorme in una scatola quadrata.',
      'Il quadrato ha quattro lati uguali.',
      'La piazza del paese è un grande quadrato.',
    ],
    '|The square|El cuadrado|Le carré|Čtverec|Kwadrat|Kare|Das Quadrat|正方形',
    'a cute cat sitting inside an open square cardboard box, seen from the front, the box clearly square',
    ['quadrati', 'quadrata']
  ),
  color(
    'triangolo',
    'il triangolo',
    ['Il criceto mangia un triangolo di anguria.', 'Il triangolo ha tre lati.', 'Taglio il panino a triangoli.'],
    '|The triangle|El triángulo|Le triangle|Trojúhelník|Trójkąt|Üçgen|Das Dreieck|三角形',
    'a cute hamster holding and nibbling a triangular slice of red watermelon, the triangle shape clearly visible',
    ['triangoli', 'triangolare']
  ),
  color(
    'rettangolo',
    'il rettangolo',
    [
      'Il cane dorme su un tappeto a forma di rettangolo.',
      'Il foglio di carta è un rettangolo.',
      'La porta di casa è un rettangolo.',
    ],
    '|The rectangle|El rectángulo|Le rectangle|Obdélník|Prostokąt|Dikdörtgen|Das Rechteck|長方形',
    'a cute dachshund dog lying on a plain blue rectangular doormat, seen from above, the whole rectangle visible',
    ['rettangoli', 'rettangolare']
  ),
  color(
    'cuore',
    'il cuore',
    [
      'I due cigni formano un cuore con il collo.',
      'Ti ho disegnato un cuore sul biglietto.',
      'Mi piacciono i biscotti a forma di cuore.',
    ],
    '|The heart (shape)|El corazón|Le cœur|Srdce|Serce|Kalp|Das Herz|ハート',
    'two white swans facing each other, their curved necks and beaks touching so that together they form a clear heart shape, floating on a thin strip of calm blue water',
    ['cuori', 'a forma di cuore']
  ),
  color(
    'stella',
    'la stella',
    [
      'La stella marina ha cinque punte.',
      'Stanotte si vedono tante stelle.',
      'Sull’albero di Natale mettiamo una stella.',
    ],
    '|The star|La estrella|L’étoile|Hvězda|Gwiazda|Yıldız|Der Stern|星、星形',
    'an orange starfish with five arms seen from above, the star shape clearly visible',
    ['stelle', 'stella marina', 'la stella marina']
  ),
  color(
    'spirale',
    'la spirale',
    [
      'Il guscio della chiocciola è a spirale.',
      'La scala della torre sale a spirale.',
      'Il camaleonte arrotola la coda a spirale.',
    ],
    '|The spiral|La espiral|La spirale|Spirála|Spirala|Sarmal, spiral|Die Spirale|らせん、渦巻き',
    'a garden snail crawling, seen from the side, its shell with a clear brown spiral pattern',
    ['spirali', 'a spirale']
  ),
  color(
    'sfera',
    'la sfera / la palla',
    [
      'Quando ha paura, il riccio diventa una palla.',
      'La Terra è quasi una sfera.',
      'I bambini giocano a palla in cortile.',
    ],
    '|The sphere / the ball|La esfera / la pelota|La sphère / la boule|Koule / míč|Kula / piłka|Küre / top|Die Kugel / der Ball|球、ボール',
    'a hedgehog curled up into a tight round ball with its spines out, only its little nose peeking out',
    ['sfere', 'palle', 'a palla']
  ),

  // --- gli aggettivi di forma ------------------------------------------------------------
  color(
    'rotondo',
    'rotondo / rotonda',
    [
      'Il pesce palla gonfio è tutto rotondo.',
      'Ci sediamo al tavolo rotondo.',
      'Mia figlia ha la faccia rotonda come la mamma.',
    ],
    '|Round|Redondo / redonda|Rond / ronde|Kulatý / kulatá|Okrągły / okrągła|Yuvarlak|Rund|丸い',
    'an inflated pufferfish, perfectly round like a ball with small spines, cute face, seen from the side',
    ['rotondi', 'rotonde', 'tondo', 'tonda']
  ),
  color(
    'appuntito',
    'appuntito / appuntita',
    [
      'Gli aculei del porcospino sono appuntiti.',
      'Attenzione, il coltello è appuntito!',
      'Mi serve una matita più appuntita.',
    ],
    '|Pointed, sharp (with a point)|Puntiagudo / puntiaguda|Pointu / pointue|Špičatý / špičatá|Spiczasty, ostro zakończony|Sivri|Spitz|とがった',
    'an African crested porcupine standing, with long pointed black and white quills raised',
    ['appuntiti', 'appuntite', 'a punta', 'aguzzo']
  ),
  color(
    'piatto',
    'piatto / piatta',
    [
      'La razza è un pesce piatto.',
      'In Olanda il paesaggio è tutto piatto.',
      'Metti le scarpe piatte, dobbiamo camminare tanto.',
    ],
    '|Flat|Plano / plana|Plat / plate|Plochý / plochá|Płaski / płaska|Düz, yassı|Flach|平らな',
    'a spotted stingray gliding, seen from above, very flat body with wide wings',
    ['piatti', 'piatte']
  ),
];

/** La parola citata nel testo dell'esercizio «Riconosci la parola» e nella nota sull'articolo. */
export const colorExampleWord = { bare: 'cerchio', withArticle: 'il cerchio' };

// --- l'esercizio «Descrivi l'animale» --------------------------------------------------------
//
// Ogni riga e' una foto nuova (non quella di una scheda) con un animale che ha piu' colori, fantasie o
// forme; `matches` elenca TUTTE le parole della lezione che lo descrivono: una parola che va bene e non e'
// in `matches` diventerebbe una risposta sbagliata. Si scrive generoso.

const describe = (slug, subject, matches) => ({
  image: `colori/${slug}`,
  slug,
  word: slug,
  bare: slug,
  subject,
  matches,
  never: [],
  noMatch: false,
});

export const colorDescribeRows = [
  describe('descrivi-tigre', 'a tiger standing, whole body visible, orange with black stripes and white belly', [
    'arancione',
    'nero',
    'bianco',
    'a-righe',
  ]),
  describe('descrivi-pinguino', 'an Adelie penguin standing, black back and head and pure white belly', [
    'nero',
    'bianco',
  ]),
  describe('descrivi-giraffa', 'a giraffe standing, whole body visible, with its brown patches on a yellowish coat', [
    'a-macchie',
    'maculato',
    'marrone',
    'giallo',
  ]),
  describe('descrivi-panda', 'a chubby giant panda sitting, black and white', [
    'bianco',
    'nero',
    'a-macchie',
    'rotondo',
  ]),
  describe(
    'descrivi-tucano',
    'a toucan perched on a short branch, black body, white throat and a big bright orange and yellow beak',
    ['nero', 'arancione', 'giallo', 'bianco', 'colorato']
  ),
  describe('descrivi-farfalla', 'a plain bright yellow brimstone butterfly with open wings, seen from above', [
    'giallo',
    'tinta-unita',
  ]),
  describe('descrivi-mucca', 'a black and white Holstein cow standing, whole body visible, with big black patches', [
    'bianco',
    'nero',
    'a-macchie',
  ]),
  describe('descrivi-camaleonte', 'a bright green chameleon on a short branch, its tail curled into a tight spiral', [
    'verde',
    'spirale',
  ]),
  describe('descrivi-volpe', 'a red fox standing, whole body visible, orange-red coat, white chest and tail tip', [
    'arancione',
    'rosso',
    'bianco',
    'nero',
  ]),
  describe('descrivi-ghepardo', 'a cheetah standing, whole body visible, golden coat with small round black spots', [
    'maculato',
    'a-macchie',
    'a-pois',
    'giallo',
    'nero',
  ]),
  describe('descrivi-gatto', 'a grey tabby cat sitting, grey fur with clear dark stripes', [
    'grigio',
    'a-righe',
    'nero',
  ]),
  describe(
    'descrivi-pavone',
    'a peacock standing with its tail fully open like a fan, shiny blue neck and green and blue eye-spot feathers',
    ['blu', 'azzurro', 'verde', 'colorato', 'a-pois']
  ),
];

export const colorTranslationExercises = [
  tr(
    'Il fenicottero è rosa.',
    'The flamingo is pink.',
    'El flamenco es rosa.',
    'Le flamant est rose.',
    'Plameňák je růžový.',
    'Flaming jest różowy.',
    'Flamingo pembedir.',
    'Der Flamingo ist rosa.',
    'フラミンゴはピンク色です。'
  ),
  tr(
    'Ho due gatti neri.',
    'I have two black cats.',
    'Tengo dos gatos negros.',
    'J’ai deux chats noirs.',
    'Mám dvě černé kočky.',
    'Mam dwa czarne koty.',
    'İki siyah kedim var.',
    'Ich habe zwei schwarze Katzen.',
    '黒い猫を2匹飼っています。'
  ),
  tr(
    'La zebra è a righe bianche e nere.',
    'The zebra has black and white stripes.',
    'La cebra tiene rayas blancas y negras.',
    'Le zèbre a des rayures blanches et noires.',
    'Zebra má bílé a černé pruhy.',
    'Zebra jest w białe i czarne paski.',
    'Zebra siyah beyaz çizgilidir.',
    'Das Zebra ist schwarz-weiß gestreift.',
    'シマウマは白と黒のしま模様です。'
  ),
  tr(
    'Mi piace la tua camicia a quadri.',
    'I like your checked shirt.',
    'Me gusta tu camisa de cuadros.',
    'J’aime bien ta chemise à carreaux.',
    'Líbí se mi tvoje kostkovaná košile.',
    'Podoba mi się twoja koszula w kratkę.',
    'Kareli gömleğini beğendim.',
    'Mir gefällt dein kariertes Hemd.',
    'あなたのチェックのシャツ、いいですね。'
  ),
  tr(
    'Le foglie in autunno sono gialle e arancioni.',
    'In autumn the leaves are yellow and orange.',
    'En otoño las hojas son amarillas y naranjas.',
    'En automne, les feuilles sont jaunes et orange.',
    'Na podzim je listí žluté a oranžové.',
    'Jesienią liście są żółte i pomarańczowe.',
    'Sonbaharda yapraklar sarı ve turuncudur.',
    'Im Herbst sind die Blätter gelb und orange.',
    '秋には葉が黄色やオレンジ色になります。'
  ),
  tr(
    'Il tavolo della cucina è rotondo.',
    'The kitchen table is round.',
    'La mesa de la cocina es redonda.',
    'La table de la cuisine est ronde.',
    'Kuchyňský stůl je kulatý.',
    'Stół w kuchni jest okrągły.',
    'Mutfak masası yuvarlak.',
    'Der Küchentisch ist rund.',
    '台所のテーブルは丸いです。'
  ),
  tr(
    'Disegna una stella e un cuore.',
    'Draw a star and a heart.',
    'Dibuja una estrella y un corazón.',
    'Dessine une étoile et un cœur.',
    'Nakresli hvězdu a srdce.',
    'Narysuj gwiazdę i serce.',
    'Bir yıldız ve bir kalp çiz.',
    'Zeichne einen Stern und ein Herz.',
    '星とハートを描いてください。'
  ),
  tr(
    'Il cielo è azzurro e il mare è blu.',
    'The sky is light blue and the sea is dark blue.',
    'El cielo es celeste y el mar es azul.',
    'Le ciel est bleu clair et la mer est bleu foncé.',
    'Nebe je blankytné a moře je tmavě modré.',
    'Niebo jest błękitne, a morze granatowe.',
    'Gökyüzü açık mavi, deniz ise lacivert.',
    'Der Himmel ist hellblau und das Meer ist dunkelblau.',
    '空は水色で、海は青です。'
  ),
];
