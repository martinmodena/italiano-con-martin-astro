// I verbi della lezione «I verbi della montagna» (2026-09-27).
//
// Seguito di «La montagna», chiesto da Martin: quattro gruppi, l'escursione (13: fare un'escursione, preparare
// lo zaino, salire in cima, scalare, fare una sosta, riprendere fiato, ammirare il panorama, raccogliere
// funghi...), il campeggio e il rifugio (8: montare la tenda, campeggiare, accendere un falo', guardare le
// stelle...), la neve (10: nevicare, sciare, andare in slittino, fare un pupazzo di neve, spalare la neve...) e
// la sicurezza (3: coprirsi, farsi male, soccorrere).
// Non ripete salire, scendere, arrampicarsi, scivolare, cadere («I verbi degli animali»), camminare, sudare,
// tremare («I verbi del corpo»), passeggiare, fotografare, noleggiare, perdersi («I verbi della città»): quando
// servono compaiono in un'espressione piu' precisa (salire in cima, scendere a valle).
//
// Esercizio come «I verbi della città» (`photoRows`). Le coppie che una foto sola non distingue (salire in
// cima/scalare, montare/smontare la tenda, sciare/prendere la seggiovia, nevicare/spalare) si accettano a
// vicenda.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-montagna`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const mv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-montagna/${slug}`,
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

export const mountainVerbs = [
  // --- l'escursione ---------------------------------------------------------------------------
  mv(
    'fare-unescursione',
    'fare un’escursione',
    'Camminare per qualche ora in montagna o nella natura.',
    [
      'to go hiking',
      'hacer una excursión, hacer senderismo',
      'faire une randonnée',
      'jít na túru',
      'pójść na wędrówkę',
      'doğa yürüyüşü yapmak',
      'eine Wanderung machen',
      'ハイキングをする',
    ],
    [
      'Domenica facciamo un’escursione al lago.',
      'Ho fatto un’escursione di sei ore.',
      'Ti va di fare un’escursione con noi?',
    ],
    'two hikers with backpacks and hiking poles walking along a narrow mountain trail on a grassy slope, seen from the side',
    ['ammirare-il-panorama', 'salire-in-cima']
  ),
  mv(
    'preparare-lo-zaino',
    'preparare lo zaino',
    'Mettere nello zaino tutto quello che serve per partire.',
    [
      'to pack your backpack',
      'preparar la mochila',
      'préparer son sac à dos',
      'sbalit si batoh',
      'spakować plecak',
      'sırt çantasını hazırlamak',
      'den Rucksack packen',
      'リュックの準備をする',
    ],
    [
      'Stasera preparo lo zaino per domani.',
      'Hai preparato lo zaino?',
      'Prepara lo zaino: acqua, panini e una giacca.',
    ],
    'a young woman kneeling on the floor packing a hiking backpack, a water bottle, a rain jacket, a map and sandwiches around her'
  ),
  mv(
    'allacciare-gli-scarponi',
    'allacciare gli scarponi',
    'Chiudere con i lacci le scarpe da montagna.',
    [
      'to lace up your boots',
      'atarse las botas',
      'lacer ses chaussures de randonnée',
      'zavázat si pohorky',
      'zasznurować buty (trekkingowe)',
      'botlarının bağcıklarını bağlamak',
      'die Wanderschuhe schnüren',
      '登山靴のひもを結ぶ',
    ],
    [
      'Allaccia bene gli scarponi prima di partire.',
      'Mi fermo un attimo ad allacciare gli scarponi.',
      'Il bambino non sa ancora allacciare gli scarponi.',
    ],
    'a hiker sitting on a rock tying the laces of his brown leather hiking boots, backpack next to him'
  ),
  mv(
    'salire-in-cima',
    'salire in cima',
    'Arrivare fino al punto più alto della montagna.',
    [
      'to climb to the top',
      'subir a la cima',
      'monter au sommet',
      'vystoupat na vrchol',
      'wejść na szczyt',
      'zirveye çıkmak',
      'auf den Gipfel steigen',
      '頂上に登る',
    ],
    [
      'Siamo saliti in cima in tre ore.',
      'Da qui si sale in cima in un’ora.',
      'Voglio salire in cima prima del tramonto.',
    ],
    'two hikers raising their arms in joy next to a wooden summit cross on a rocky mountain top',
    ['scalare', 'fare-unescursione']
  ),
  mv(
    'scalare',
    'scalare',
    'Salire su una parete di roccia con le mani, i piedi e la corda.',
    [
      'to climb (a rock face)',
      'escalar',
      'escalader, grimper',
      'lézt (po skále)',
      'wspinać się',
      'tırmanmak (kaya)',
      'klettern',
      '岩を登る、クライミングする',
    ],
    [
      'Mio fratello scala da dieci anni.',
      'Abbiamo scalato una parete di cento metri.',
      'Per scalare serve l’imbragatura.',
    ],
    'a climber with a helmet and harness climbing a vertical grey rock face, holding on with hands and feet, a rope going up',
    ['salire-in-cima']
  ),
  mv(
    'scendere-a-valle',
    'scendere a valle',
    'Tornare giù dalla montagna fino al paese.',
    [
      'to go back down to the valley',
      'bajar al valle',
      'redescendre dans la vallée',
      'sejít do údolí',
      'zejść w dolinę',
      'vadiye inmek',
      'ins Tal absteigen',
      '谷へ下りる',
    ],
    [
      'Alle quattro scendiamo a valle.',
      'Siamo scesi a valle con la funivia.',
      'Prima del temporale è meglio scendere a valle.',
    ],
    'two hikers walking downhill on a zigzag path, a village with a church in the green valley far below them'
  ),
  mv(
    'fare-una-sosta',
    'fare una sosta',
    'Fermarsi un po’ durante il cammino per riposare.',
    [
      'to stop for a rest',
      'hacer una parada',
      'faire une pause, faire une halte',
      'udělat si zastávku',
      'zrobić postój',
      'mola vermek (yolda)',
      'eine Rast machen',
      'ひと休みする',
    ],
    [
      'Facciamo una sosta vicino al ruscello.',
      'Dopo due ore abbiamo fatto una sosta.',
      'Al rifugio facciamo una sosta per bere.',
    ],
    'three hikers sitting on rocks beside a mountain path taking a rest, backpacks off, one drinking from a water bottle',
    ['riprendere-fiato', 'fare-un-picnic']
  ),
  mv(
    'riprendere-fiato',
    'riprendere fiato',
    'Fermarsi a respirare dopo una fatica.',
    [
      'to catch your breath',
      'recuperar el aliento',
      'reprendre son souffle',
      'popadnout dech',
      'złapać oddech',
      'soluklanmak',
      'verschnaufen',
      '息を整える',
    ],
    [
      'Aspetta, riprendo fiato!',
      'In cima alla salita abbiamo ripreso fiato.',
      'Fermiamoci un attimo a riprendere fiato.',
    ],
    'a tired hiker on a steep mountain path bending forward with his hands on his knees, catching his breath',
    ['faticare', 'fare-una-sosta']
  ),
  mv(
    'faticare',
    'faticare',
    'Fare qualcosa di molto difficile per il corpo.',
    [
      'to struggle, to toil',
      'cansarse, costar esfuerzo',
      'peiner',
      'namáhat se, dřít',
      'męczyć się, trudzić się',
      'zorlanmak',
      'sich abmühen',
      '苦労する、骨が折れる',
    ],
    [
      'Ho faticato tanto sull’ultima salita.',
      'Con lo zaino pesante si fatica di più.',
      'Non ti preoccupare: tutti faticano all’inizio.',
    ],
    'a hiker with a big heavy backpack pushing hard up a very steep rocky slope with hiking poles, face showing effort',
    ['riprendere-fiato']
  ),
  mv(
    'ammirare-il-panorama',
    'ammirare il panorama',
    'Guardare con gioia un paesaggio bello e ampio.',
    [
      'to admire the view',
      'admirar el paisaje',
      'admirer le panorama',
      'kochat se výhledem',
      'podziwiać widok',
      'manzarayı seyretmek',
      'die Aussicht genießen',
      '景色を眺める',
    ],
    [
      'Dalla cima abbiamo ammirato il panorama.',
      'Fermiamoci ad ammirare il panorama.',
      'Da qui si ammira il panorama su tutta la valle.',
    ],
    'a couple of hikers seen from behind standing on a rocky viewpoint looking out over a wide range of mountains',
    ['fare-unescursione', 'salire-in-cima']
  ),
  mv(
    'leggere-la-cartina',
    'leggere la cartina',
    'Guardare la mappa per capire dove si è e dove andare.',
    [
      'to read the map',
      'leer el mapa',
      'lire la carte',
      'číst mapu',
      'czytać mapę',
      'haritayı okumak',
      'die Karte lesen',
      '地図を読む',
    ],
    [
      'Sai leggere la cartina?',
      'Leggo la cartina: il rifugio è a destra.',
      'Senza telefono dobbiamo leggere la cartina.',
    ],
    'two hikers standing together holding open a large paper hiking map, one pointing at it, a compass in the other’s hand'
  ),
  mv(
    'fare-un-picnic',
    'fare un picnic',
    'Mangiare all’aperto, seduti sul prato.',
    [
      'to have a picnic',
      'hacer un pícnic',
      'pique-niquer, faire un pique-nique',
      'udělat si piknik',
      'urządzić piknik',
      'piknik yapmak',
      'ein Picknick machen',
      'ピクニックをする',
    ],
    [
      'A mezzogiorno facciamo un picnic sul prato.',
      'Abbiamo fatto un picnic vicino al lago.',
      'Porta la coperta per il picnic!',
    ],
    'a family sitting on a checked blanket on a mountain meadow eating sandwiches, fruit and cheese, backpacks beside them',
    ['fare-una-sosta']
  ),
  mv(
    'raccogliere-funghi',
    'raccogliere funghi',
    'Cercare e prendere i funghi nel bosco.',
    [
      'to pick mushrooms',
      'recoger setas',
      'cueillir des champignons',
      'sbírat houby',
      'zbierać grzyby',
      'mantar toplamak',
      'Pilze sammeln',
      'キノコを採る',
    ],
    [
      'In autunno andiamo a raccogliere funghi.',
      'Il nonno raccoglie funghi da quando era bambino.',
      'Non raccogliere funghi che non conosci!',
    ],
    'an older man with a wicker basket kneeling in a pine forest picking a brown mushroom from the ground'
  ),

  // --- il campeggio e il rifugio -----------------------------------------------------------------
  mv(
    'montare-la-tenda',
    'montare la tenda',
    'Mettere in piedi la tenda per dormirci.',
    [
      'to put up the tent',
      'montar la tienda',
      'monter la tente',
      'postavit stan',
      'rozbić namiot',
      'çadır kurmak',
      'das Zelt aufbauen',
      'テントを張る',
    ],
    [
      'Montiamo la tenda prima che faccia buio.',
      'Ci vogliono dieci minuti per montare la tenda.',
      'Mi aiuti a montare la tenda?',
    ],
    'two young people setting up a green dome tent on a grassy mountain meadow, one holding a pole, the other pushing a peg into the ground',
    ['smontare-la-tenda', 'campeggiare']
  ),
  mv(
    'smontare-la-tenda',
    'smontare la tenda',
    'Togliere la tenda e rimetterla nella sacca.',
    [
      'to take down the tent',
      'desmontar la tienda',
      'démonter la tente',
      'složit stan',
      'zwinąć namiot',
      'çadırı sökmek',
      'das Zelt abbauen',
      'テントをたたむ',
    ],
    [
      'La mattina smontiamo la tenda e partiamo.',
      'Smontare la tenda è più facile che montarla.',
      'Ha smontato la tenda sotto la pioggia.',
    ],
    'a young woman folding a collapsed green tent on the grass and rolling it up to put it in its bag, the poles lying next to it',
    ['montare-la-tenda']
  ),
  mv(
    'campeggiare',
    'campeggiare',
    'Dormire in tenda, all’aperto, per qualche notte.',
    [
      'to camp',
      'acampar',
      'camper, faire du camping',
      'kempovat, stanovat',
      'biwakować, nocować pod namiotem',
      'kamp yapmak',
      'zelten',
      'キャンプする',
    ],
    ['D’estate campeggiamo vicino al lago.', 'È vietato campeggiare qui.', 'Non ho mai campeggiato in montagna.'],
    'a small camp on a mountain meadow at dusk: a tent with its door open, two people sitting on camping chairs in front of it with mugs',
    ['montare-la-tenda', 'guardare-le-stelle']
  ),
  mv(
    'accendere-un-falo',
    'accendere un falò',
    'Fare un fuoco all’aperto con la legna.',
    [
      'to light a campfire',
      'encender una hoguera',
      'allumer un feu de camp',
      'rozdělat táborák',
      'rozpalić ognisko',
      'kamp ateşi yakmak',
      'ein Lagerfeuer machen',
      'たき火をする',
    ],
    [
      'La sera accendiamo un falò.',
      'Qui non si può accendere un falò: c’è pericolo.',
      'Abbiamo acceso un falò e cantato tutta la notte.',
    ],
    'a man kneeling and blowing gently on a small new campfire in a ring of stones, holding a lit match, small flames starting',
    ['raccogliere-la-legna']
  ),
  mv(
    'raccogliere-la-legna',
    'raccogliere la legna',
    'Prendere i rami secchi nel bosco per fare il fuoco.',
    [
      'to gather firewood',
      'recoger leña',
      'ramasser du bois',
      'sbírat dřevo',
      'zbierać drewno (na opał)',
      'odun toplamak',
      'Holz sammeln',
      '薪を集める',
    ],
    [
      'I bambini raccolgono la legna per il falò.',
      'Andiamo a raccogliere la legna prima che faccia buio.',
      'Ho raccolto la legna secca.',
    ],
    'two children carrying armfuls of dry branches out of a forest, walking towards a campsite',
    ['accendere-un-falo']
  ),
  mv(
    'pernottare',
    'pernottare in rifugio',
    'Passare la notte in un rifugio di montagna.',
    [
      'to stay overnight in a mountain hut',
      'pasar la noche en un refugio',
      'passer la nuit dans un refuge',
      'přespat na horské chatě',
      'nocować w schronisku',
      'dağ evinde geceyi geçirmek',
      'auf der Hütte übernachten',
      '山小屋に泊まる',
    ],
    [
      'Stanotte pernottiamo in rifugio.',
      'Per pernottare in rifugio bisogna prenotare.',
      'Abbiamo pernottato in un rifugio a 2500 metri.',
    ],
    'two hikers in a cosy wooden mountain hut dormitory arranging their sleeping bags on wooden bunk beds, smiling'
  ),
  mv(
    'guardare-le-stelle',
    'guardare le stelle',
    'Stare fuori di notte e osservare il cielo stellato.',
    [
      'to stargaze',
      'mirar las estrellas',
      'regarder les étoiles',
      'dívat se na hvězdy',
      'patrzeć w gwiazdy',
      'yıldızları seyretmek',
      'die Sterne anschauen',
      '星を眺める',
    ],
    [
      'In montagna guardiamo le stelle.',
      'Hai mai guardato le stelle con il telescopio?',
      'Stanotte guardiamo le stelle cadenti.',
    ],
    'a photograph cropped into a perfect circle, centred on the white background, showing two friends seen from behind sitting on a blanket in front of a glowing tent at night, looking up at a dark blue sky full of bright stars and the Milky Way',
    ['campeggiare']
  ),
  mv(
    'rinfrescarsi',
    'rinfrescarsi',
    'Bagnarsi con l’acqua fresca quando fa caldo.',
    [
      'to cool off, to freshen up',
      'refrescarse',
      'se rafraîchir',
      'osvěžit se',
      'odświeżyć się, ochłodzić się',
      'serinlemek',
      'sich erfrischen',
      '涼む、さっぱりする',
    ],
    [
      'Ci rinfreschiamo al torrente.',
      'Mi sono rinfrescato con l’acqua della fontana.',
      'Fa caldo: andiamo a rinfrescarci al lago.',
    ],
    'a photograph cropped into a perfect circle, centred on the white background, showing a hiker kneeling on the stones at the edge of a clear rushing mountain stream, scooping cold water with both hands and splashing it on his smiling face, water drops flying'
  ),

  // --- la neve --------------------------------------------------------------------------------
  mv(
    'nevicare',
    'nevicare',
    'Cadere la neve dal cielo.',
    ['to snow', 'nevar', 'neiger', 'sněžit', 'padać (o śniegu)', 'kar yağmak', 'schneien', '雪が降る'],
    ['Nevica da stamattina!', 'In montagna è nevicato tutta la notte.', 'Speriamo che nevichi per Natale.'],
    'a photograph cropped into a perfect circle, centred on the white background, showing a girl in a red winter coat and woolly hat in a dark green fir forest, big white snowflakes falling all around her, her face turned up and her tongue out to catch them',
    ['spalare-la-neve']
  ),
  mv(
    'sciare',
    'sciare',
    'Scendere sulla neve con gli sci ai piedi.',
    [
      'to ski',
      'esquiar',
      'skier, faire du ski',
      'lyžovat',
      'jeździć na nartach',
      'kayak yapmak',
      'Ski fahren',
      'スキーをする',
    ],
    ['Scio da quando avevo cinque anni.', 'Sai sciare?', 'Quest’inverno andiamo a sciare sulle Dolomiti.'],
    'a skier in a colourful ski suit and helmet skiing down a snowy slope, spraying snow in a turn',
    ['prendere-la-seggiovia']
  ),
  mv(
    'fare-snowboard',
    'fare snowboard',
    'Scendere sulla neve in piedi su una tavola.',
    [
      'to snowboard',
      'hacer snowboard',
      'faire du snowboard',
      'jezdit na snowboardu',
      'jeździć na snowboardzie',
      'snowboard yapmak',
      'Snowboard fahren',
      'スノーボードをする',
    ],
    [
      'Mio figlio fa snowboard, io scio.',
      'È difficile imparare a fare snowboard?',
      'Abbiamo fatto snowboard tutto il giorno.',
    ],
    'a young snowboarder in a bright jacket and helmet riding a snowboard down a snowy slope, arms out for balance'
  ),
  mv(
    'andare-in-slittino',
    'andare in slittino',
    'Scendere da una collina di neve seduti su uno slittino.',
    [
      'to go sledging',
      'ir en trineo',
      'faire de la luge',
      'sáňkovat',
      'zjeżdżać na sankach',
      'kızak kaymak',
      'Schlitten fahren',
      'そりで滑る',
    ],
    [
      'I bambini vanno in slittino tutto il pomeriggio.',
      'Andiamo in slittino sulla collina!',
      'Da piccolo andavo in slittino con il nonno.',
    ],
    'two laughing children in winter clothes sliding down a snowy hill together on a red plastic sled'
  ),
  mv(
    'pattinare',
    'pattinare sul ghiaccio',
    'Muoversi sul ghiaccio con i pattini ai piedi.',
    [
      'to ice-skate',
      'patinar sobre hielo',
      'faire du patin à glace',
      'bruslit',
      'jeździć na łyżwach',
      'buz pateni yapmak',
      'Schlittschuh laufen',
      'アイススケートをする',
    ],
    [
      'D’inverno pattiniamo sul lago ghiacciato.',
      'Non so pattinare sul ghiaccio: cado sempre!',
      'In piazza c’è una pista per pattinare sul ghiaccio.',
    ],
    'a photograph cropped into a perfect circle, centred on the white background, showing a young couple holding hands ice-skating on a frozen blue-grey mountain lake, white ice skates clearly visible on their feet, scarves and woolly hats, snowy mountains behind'
  ),
  mv(
    'fare-un-pupazzo-di-neve',
    'fare un pupazzo di neve',
    'Fare una figura con palle di neve, con il naso di carota.',
    [
      'to build a snowman',
      'hacer un muñeco de nieve',
      'faire un bonhomme de neige',
      'postavit sněhuláka',
      'ulepić bałwana',
      'kardan adam yapmak',
      'einen Schneemann bauen',
      '雪だるまを作る',
    ],
    [
      'Facciamo un pupazzo di neve in giardino!',
      'Il nostro pupazzo di neve ha una sciarpa rossa.',
      'Abbiamo fatto un pupazzo di neve enorme.',
    ],
    'a father and a little girl putting a carrot nose on a big snowman with a red scarf and stone buttons'
  ),
  mv(
    'fare-a-palle-di-neve',
    'fare a palle di neve',
    'Giocare tirandosi palle di neve.',
    [
      'to have a snowball fight',
      'jugar a tirarse bolas de nieve',
      'faire une bataille de boules de neige',
      'koulovat se',
      'rzucać się śnieżkami',
      'kartopu oynamak',
      'eine Schneeballschlacht machen',
      '雪合戦をする',
    ],
    [
      'Dopo la scuola facciamo a palle di neve.',
      'I ragazzi fanno a palle di neve in cortile.',
      'Non fare a palle di neve vicino alle finestre!',
    ],
    'a group of laughing children and teenagers in a snowy field throwing snowballs at each other, one ducking'
  ),
  mv(
    'prendere-la-seggiovia',
    'prendere la seggiovia',
    'Salire sulla montagna seduti su una seggiovia.',
    [
      'to take the chairlift',
      'tomar el telesilla',
      'prendre le télésiège',
      'jet lanovkou (sedačkovou)',
      'wjechać wyciągiem krzesełkowym',
      'telesiyejle çıkmak',
      'mit dem Sessellift fahren',
      'リフトに乗る',
    ],
    [
      'Prendiamo la seggiovia fino al rifugio.',
      'Ho paura di prendere la seggiovia!',
      'La seggiovia è chiusa per il vento.',
    ],
    'two skiers sitting on a chairlift going up above a snowy slope, skis hanging down, the safety bar lowered',
    ['sciare']
  ),
  mv(
    'spalare-la-neve',
    'spalare la neve',
    'Togliere la neve con la pala.',
    [
      'to shovel snow',
      'quitar la nieve con la pala',
      'déneiger, pelleter la neige',
      'odhazovat sníh',
      'odśnieżać',
      'kar küremek',
      'Schnee schippen',
      '雪かきをする',
    ],
    [
      'Stamattina ho spalato la neve davanti a casa.',
      'Mi aiuti a spalare la neve?',
      'Dopo la nevicata tutti spalano la neve.',
    ],
    'a man in a winter jacket shovelling deep snow from the path in front of a wooden chalet, snow still falling lightly',
    ['nevicare']
  ),
  mv(
    'sciogliersi',
    'sciogliersi',
    'Diventare acqua con il caldo, come la neve e il ghiaccio.',
    ['to melt', 'derretirse', 'fondre', 'tát, roztát', 'topnieć', 'erimek', 'schmelzen', '溶ける'],
    [
      'In primavera la neve si scioglie.',
      'Il pupazzo di neve si è sciolto al sole.',
      'Il ghiaccio si scioglie nel bicchiere.',
    ],
    'a half-melted snowman leaning to one side on a patch of green grass in the spring sun, its carrot nose and scarf slipping, water pooling around it'
  ),

  // --- la sicurezza ---------------------------------------------------------------------------
  mv(
    'coprirsi',
    'coprirsi',
    'Mettersi vestiti pesanti per non avere freddo.',
    [
      'to wrap up warm',
      'abrigarse',
      'se couvrir',
      'teple se obléct',
      'ubrać się ciepło',
      'sıkı giyinmek',
      'sich warm anziehen',
      '暖かい服を着る',
    ],
    ['Copriti bene: in cima fa freddo!', 'Mi copro con il piumino e il cappello.', 'Il bambino non vuole coprirsi.'],
    'a mother zipping up the thick winter jacket of her small son and pulling a woolly hat over his ears, snowy mountains behind'
  ),
  mv(
    'farsi-male',
    'farsi male',
    'Ferirsi, per esempio cadendo.',
    [
      'to hurt yourself',
      'hacerse daño',
      'se faire mal',
      'ublížit si, zranit se',
      'zrobić sobie krzywdę',
      'bir yerini incitmek',
      'sich wehtun, sich verletzen',
      'けがをする',
    ],
    ['Attento a non farti male!', 'Sono caduto e mi sono fatto male al ginocchio.', 'Ti sei fatta male?'],
    'a hiker sitting on a rocky path holding his ankle with a pained face, his friend kneeling beside him',
    ['soccorrere']
  ),
  mv(
    'soccorrere',
    'soccorrere',
    'Aiutare subito una persona in pericolo o ferita.',
    [
      'to rescue, to give first aid',
      'socorrer, auxiliar',
      'secourir',
      'poskytnout pomoc, zachraňovat',
      'udzielić pomocy, ratować',
      'yardım etmek (acil), kurtarmak',
      'retten, Erste Hilfe leisten',
      '救助する、手当てする',
    ],
    [
      'Il soccorso alpino ha soccorso due escursionisti.',
      'Bisogna soccorrere subito chi si fa male.',
      'Un medico ci ha soccorso sul sentiero.',
    ],
    'two mountain rescuers in red jackets and helmets helping an injured hiker onto a stretcher on a mountain path',
    ['farsi-male']
  ),
];

export const mountainVerbTranslationExercises = [
  tr(
    'Domenica facciamo un’escursione e saliamo in cima.',
    'On Sunday we’re going hiking and climbing to the top.',
    'El domingo hacemos una excursión y subimos a la cima.',
    'Dimanche, nous faisons une randonnée et nous montons au sommet.',
    'V neděli jdeme na túru a vystoupáme na vrchol.',
    'W niedzielę idziemy na wędrówkę i wchodzimy na szczyt.',
    'Pazar günü doğa yürüyüşü yapıp zirveye çıkıyoruz.',
    'Am Sonntag machen wir eine Wanderung und steigen auf den Gipfel.',
    '日曜日はハイキングをして頂上に登ります。'
  ),
  tr(
    'Stasera preparo lo zaino: acqua, panini e una giacca.',
    'Tonight I’m packing my backpack: water, sandwiches and a jacket.',
    'Esta noche preparo la mochila: agua, bocadillos y una chaqueta.',
    'Ce soir, je prépare mon sac à dos : de l’eau, des sandwichs et une veste.',
    'Dnes večer si sbalím batoh: vodu, chleby a bundu.',
    'Dziś wieczorem pakuję plecak: woda, kanapki i kurtka.',
    'Bu akşam sırt çantamı hazırlıyorum: su, sandviç ve bir ceket.',
    'Heute Abend packe ich den Rucksack: Wasser, Brote und eine Jacke.',
    '今夜リュックの準備をします。水とサンドイッチと上着です。'
  ),
  tr(
    'Facciamo una sosta: devo riprendere fiato.',
    'Let’s stop for a rest: I need to catch my breath.',
    'Hagamos una parada: tengo que recuperar el aliento.',
    'Faisons une pause : je dois reprendre mon souffle.',
    'Udělejme si zastávku: musím popadnout dech.',
    'Zróbmy postój: muszę złapać oddech.',
    'Biraz mola verelim: soluklanmam lazım.',
    'Machen wir eine Rast: Ich muss verschnaufen.',
    'ひと休みしよう。息を整えないと。'
  ),
  tr(
    'Dalla cima abbiamo ammirato il panorama per mezz’ora.',
    'From the top we admired the view for half an hour.',
    'Desde la cima admiramos el paisaje durante media hora.',
    'Du sommet, nous avons admiré le panorama pendant une demi-heure.',
    'Z vrcholu jsme se půl hodiny kochali výhledem.',
    'Ze szczytu przez pół godziny podziwialiśmy widok.',
    'Zirveden yarım saat manzarayı seyrettik.',
    'Vom Gipfel aus haben wir eine halbe Stunde die Aussicht genossen.',
    '頂上から30分間、景色を眺めました。'
  ),
  tr(
    'Montiamo la tenda prima che faccia buio.',
    'Let’s put up the tent before it gets dark.',
    'Montemos la tienda antes de que oscurezca.',
    'Montons la tente avant qu’il fasse nuit.',
    'Postavme stan, než se setmí.',
    'Rozbijmy namiot, zanim się ściemni.',
    'Hava kararmadan çadırı kuralım.',
    'Lass uns das Zelt aufbauen, bevor es dunkel wird.',
    '暗くなる前にテントを張ろう。'
  ),
  tr(
    'La sera accendiamo un falò e guardiamo le stelle.',
    'In the evening we light a campfire and look at the stars.',
    'Por la noche encendemos una hoguera y miramos las estrellas.',
    'Le soir, nous allumons un feu de camp et nous regardons les étoiles.',
    'Večer rozděláme táborák a díváme se na hvězdy.',
    'Wieczorem rozpalamy ognisko i patrzymy w gwiazdy.',
    'Akşam kamp ateşi yakıp yıldızları seyrediyoruz.',
    'Am Abend machen wir ein Lagerfeuer und schauen die Sterne an.',
    '夜はたき火をして星を眺めます。'
  ),
  tr(
    'È nevicato tutta la notte: domani andiamo a sciare!',
    'It snowed all night: tomorrow we’re going skiing!',
    'Ha nevado toda la noche: ¡mañana vamos a esquiar!',
    'Il a neigé toute la nuit : demain, on va skier !',
    'Celou noc sněžilo: zítra jedeme lyžovat!',
    'Całą noc padał śnieg: jutro jedziemy na narty!',
    'Bütün gece kar yağdı: yarın kayağa gidiyoruz!',
    'Es hat die ganze Nacht geschneit: Morgen gehen wir Ski fahren!',
    '一晩中雪が降った。明日はスキーに行こう！'
  ),
  tr(
    'I bambini vanno in slittino e fanno un pupazzo di neve.',
    'The children go sledging and build a snowman.',
    'Los niños van en trineo y hacen un muñeco de nieve.',
    'Les enfants font de la luge et un bonhomme de neige.',
    'Děti sáňkují a staví sněhuláka.',
    'Dzieci zjeżdżają na sankach i lepią bałwana.',
    'Çocuklar kızak kayıyor ve kardan adam yapıyor.',
    'Die Kinder fahren Schlitten und bauen einen Schneemann.',
    '子どもたちはそりで滑って、雪だるまを作ります。'
  ),
  tr(
    'Copriti bene: in cima fa molto freddo.',
    'Wrap up warm: it’s very cold at the top.',
    'Abrígate bien: en la cima hace mucho frío.',
    'Couvre-toi bien : il fait très froid au sommet.',
    'Obleč se teple: na vrcholu je velká zima.',
    'Ubierz się ciepło: na szczycie jest bardzo zimno.',
    'Sıkı giyin: zirvede hava çok soğuk.',
    'Zieh dich warm an: Oben auf dem Gipfel ist es sehr kalt.',
    '暖かくしてね。頂上はとても寒いよ。'
  ),
  tr(
    'Mi sono fatto male alla caviglia e mi hanno soccorso.',
    'I hurt my ankle and they came to help me.',
    'Me hice daño en el tobillo y me socorrieron.',
    'Je me suis fait mal à la cheville et on m’a secouru.',
    'Poranil jsem si kotník a poskytli mi pomoc.',
    'Zraniłem się w kostkę i udzielono mi pomocy.',
    'Bileğimi incittim ve bana yardım ettiler.',
    'Ich habe mir den Knöchel verletzt, und man hat mir geholfen.',
    '足首をけがして、助けてもらいました。'
  ),
];
