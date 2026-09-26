// Le parole della lezione di vocabolario «Il tempo e le stagioni» (2026-09-26).
//
// Quattro gruppi: il cielo e i fenomeni del tempo (16: il sole, la pioggia, il temporale, l'arcobaleno...),
// com'e' il tempo (6: il caldo, il freddo, soleggiato, nuvoloso, piovoso, ventoso), le quattro stagioni e le
// cose che servono con il tempo (8: l'ombrello, il termometro, il termosifone...). I giorni e i mesi non ci
// sono: li insegna la lezione di grammatica A1 «Giorni, mesi e date», citata nella nota della pagina.
//
// Struttura di ogni voce: come colors-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
// Gli aggettivi (piovoso) e i nomi da cui vengono (la pioggia) si somigliano anche in foto: in «Riconosci la
// parola» ognuno accetta anche l'altro.
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `low` (Martin, 2026-09-26: spendere poco),
// `generate-animal-images.mjs --set tempo`. I paesaggi (cielo, alba, stagioni) sono foto rotonde su fondo
// bianco: il ritaglio li lascia intatti e le schede restano omogenee.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Le forme della scheda, con e senza articolo e apostrofo, piu' quelle in `extra` (plurali, parole vicine). */
const answersFor = (word, extra) => {
  const list = [];
  for (const form of [...word.split(' / '), ...extra]) {
    list.push(form, form.replace(ARTICLE, ''));
    if (form.includes('’')) list.push(form.replace('’', ' '), form.replace('’', ''));
  }
  return [...new Set(list)];
};

const weather = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `tempo/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

const ROUND = 'a landscape photograph cropped into a perfect circle, centred on the white background, showing';

export const weatherVocabulary = [
  // --- il cielo e i fenomeni del tempo ---------------------------------------------------
  weather(
    'sole',
    'il sole',
    ['Oggi c’è il sole.', 'Non guardare il sole: fa male agli occhi.', 'Il sole sorge a est e tramonta a ovest.'],
    '|The sun|El sol|Le soleil|Slunce|Słońce|Güneş|Die Sonne|太陽',
    'the bright yellow sun glowing with soft rays, isolated, like a cut-out, nothing else',
    ['soleggiato', 'soleggiata']
  ),
  weather(
    'nuvola',
    'la nuvola',
    ['Quella nuvola sembra un coniglio.', 'Il cielo è pieno di nuvole grigie.', 'Il sole è dietro una nuvola.'],
    '|The cloud|La nube|Le nuage|Mrak|Chmura|Bulut|Die Wolke|雲',
    'one single fluffy grey-and-white cumulus cloud floating, isolated, like a cut-out',
    ['nuvole', 'le nuvole', 'nuvoloso', 'nuvolosa']
  ),
  weather(
    'pioggia',
    'la pioggia',
    [
      'La pioggia cade da stamattina.',
      'Sotto la pioggia i bambini saltano nelle pozzanghere.',
      'Domani è prevista pioggia al nord.',
    ],
    '|The rain|La lluvia|La pluie|Déšť|Deszcz|Yağmur|Der Regen|雨',
    'a dark grey rain cloud with many rain drops and streaks of rain falling from it onto a small patch of wet green grass, isolated',
    ['piovoso', 'piovosa', 'piove']
  ),
  weather(
    'neve',
    'la neve',
    ['Stanotte è caduta molta neve.', 'I bambini giocano con la neve.', 'In montagna c’è la neve fino a maggio.'],
    '|The snow|La nieve|La neige|Sníh|Śnieg|Kar|Der Schnee|雪',
    'two hands in red woollen mittens holding a big heap of fresh white snow, snowflakes falling around',
    ['nevica']
  ),
  weather(
    'vento',
    'il vento',
    [
      'C’è un vento fortissimo: attenzione al cappello!',
      'Il vento muove le foglie degli alberi.',
      'Il vento del nord porta il freddo.',
    ],
    '|The wind|El viento|Le vent|Vítr|Wiatr|Rüzgâr|Der Wind|風',
    'a small tree on a patch of grass bending strongly in the wind, leaves blowing away from it through the air',
    ['ventoso', 'ventosa', 'tira vento']
  ),
  weather(
    'nebbia',
    'la nebbia',
    [
      'In pianura, d’inverno, c’è spesso la nebbia.',
      'Con la nebbia non si vede niente.',
      'Guida piano: c’è nebbia sulla strada.',
    ],
    '|The fog|La niebla|Le brouillard|Mlha|Mgła|Sis|Der Nebel|霧',
    `${ROUND} a country road with a row of trees and a street lamp disappearing into thick grey fog`
  ),
  weather(
    'temporale',
    'il temporale',
    [
      'Ieri sera c’è stato un temporale fortissimo.',
      'Durante il temporale è meglio restare in casa.',
      'D’estate i temporali arrivano all’improvviso.',
    ],
    '|The thunderstorm|La tormenta, el temporal|L’orage|Bouřka|Burza|Fırtına, sağanak|Das Gewitter|雷雨',
    `${ROUND} a dark stormy sky over a field with heavy rain and a bolt of lightning`,
    ['tempesta', 'la tempesta']
  ),
  weather(
    'fulmine',
    'il fulmine',
    [
      'Un fulmine ha colpito il campanile.',
      'Prima vedi il fulmine, poi senti il tuono.',
      'Durante un temporale non stare sotto un albero: attira i fulmini.',
    ],
    '|The lightning (bolt)|El rayo|La foudre, l’éclair|Blesk|Piorun, błyskawica|Şimşek, yıldırım|Der Blitz|稲妻、雷',
    'a small very dark grey storm cloud with one thick, bright, clearly visible branching bolt of lightning, glowing white and violet, striking down to a small patch of grass',
    ['lampo', 'il lampo', 'saetta']
  ),
  weather(
    'grandine',
    'la grandine',
    [
      'La grandine ha rovinato l’uva.',
      'Chicchi di grandine grandi come noci!',
      'Metti la macchina in garage: arriva la grandine.',
    ],
    '|The hail|El granizo|La grêle|Kroupy|Grad|Dolu|Der Hagel|雹（ひょう）',
    'a small heap of round white hailstones of different sizes on a patch of green grass, a few more bouncing',
    ['grandina']
  ),
  weather(
    'arcobaleno',
    'l’arcobaleno',
    [
      'Dopo la pioggia è uscito l’arcobaleno.',
      'L’arcobaleno ha sette colori.',
      'Guarda, c’è un arcobaleno sopra il lago!',
    ],
    '|The rainbow|El arcoíris|L’arc-en-ciel|Duha|Tęcza|Gökkuşağı|Der Regenbogen|虹',
    'a bright complete rainbow arc rising from a small green hill, isolated on white',
    ['arcobaleni']
  ),
  weather(
    'ghiaccio',
    'il ghiaccio',
    ['D’inverno sulla strada c’è il ghiaccio.', 'Vuoi il ghiaccio nella limonata?', 'Il lago è coperto di ghiaccio.'],
    '|The ice|El hielo|La glace|Led|Lód|Buz|Das Eis|氷',
    'a row of long clear icicles hanging from the edge of a small wooden roof, dripping, isolated',
    ['ghiacciolo']
  ),
  weather(
    'fiocco-di-neve',
    'il fiocco di neve',
    [
      'Ogni fiocco di neve è diverso dagli altri.',
      'Un fiocco di neve si è posato sul mio naso.',
      'Cadono grossi fiocchi di neve.',
    ],
    '|The snowflake|El copo de nieve|Le flocon de neige|Sněhová vločka|Płatek śniegu|Kar tanesi|Die Schneeflocke|雪の結晶、雪片',
    'one single big detailed ice-crystal snowflake, pale blue and white, macro photograph, isolated',
    ['fiocco', 'fiocchi di neve', 'i fiocchi di neve']
  ),
  weather(
    'pozzanghera',
    'la pozzanghera',
    [
      'Il bambino salta nella pozzanghera con gli stivali.',
      'Dopo il temporale la strada è piena di pozzanghere.',
      'Attenzione, c’è una pozzanghera!',
    ],
    '|The puddle|El charco|La flaque (d’eau)|Kaluž|Kałuża|Su birikintisi|Die Pfütze|水たまり',
    'a child of about 5 in a yellow raincoat and yellow rubber boots jumping into a puddle on a small patch of asphalt, water splashing',
    ['pozzanghere']
  ),
  weather(
    'cielo',
    'il cielo',
    [
      'Oggi il cielo è azzurro e senza nuvole.',
      'Di notte nel cielo si vedono le stelle.',
      'Il cielo è grigio: forse piove.',
    ],
    '|The sky|El cielo|Le ciel|Obloha|Niebo|Gökyüzü|Der Himmel|空',
    `${ROUND} a wide clear blue sky with two small white clouds above a thin line of green hills at the bottom`,
    ['sereno']
  ),
  weather(
    'alba',
    'l’alba',
    [
      'All’alba il cielo diventa rosa.',
      'Mi sono svegliato all’alba per partire presto.',
      'L’alba sul mare è bellissima.',
    ],
    '|The dawn, the sunrise|El amanecer, el alba|L’aube, le lever du soleil|Svítání, východ slunce|Świt, wschód słońca|Şafak, gün doğumu|Die Morgendämmerung, der Sonnenaufgang|夜明け、日の出',
    `${ROUND} a soft pink and pale orange sunrise with the sun just rising over quiet green hills and morning mist`
  ),
  weather(
    'tramonto',
    'il tramonto',
    [
      'Guardiamo il tramonto dalla spiaggia.',
      'Al tramonto il cielo diventa arancione.',
      'D’estate il tramonto è verso le nove di sera.',
    ],
    '|The sunset|La puesta de sol, el atardecer|Le coucher du soleil|Západ slunce|Zachód słońca|Gün batımı|Der Sonnenuntergang|夕日、日没',
    `${ROUND} a big orange sun setting into the sea, deep orange and red sky reflected on the water`
  ),

  // --- com'e' il tempo --------------------------------------------------------------------
  weather(
    'caldo',
    'il caldo',
    ['Che caldo oggi!', 'D’estate a Roma fa molto caldo.', 'Ho caldo: apro la finestra.'],
    '|The heat (fa caldo: it’s hot)|El calor (fa caldo: hace calor)|La chaleur (fa caldo : il fait chaud)|Horko (fa caldo: je horko)|Upał, gorąco (fa caldo: jest gorąco)|Sıcak (fa caldo: hava sıcak)|Die Hitze (fa caldo: es ist heiß)|暑さ（fa caldo：暑い）',
    'a whole woman shown small from sun hat to sandals, in a light summer dress and sun hat, visibly hot and sweating, fanning her red face with a paper fan, a bright sun above her',
    ['caldi', 'fa caldo', 'calda', 'afa', 'l’afa']
  ),
  weather(
    'freddo',
    'il freddo',
    ['Che freddo! Chiudi la porta.', 'A gennaio fa molto freddo.', 'Ho freddo alle mani: dove sono i guanti?'],
    '|The cold (fa freddo: it’s cold)|El frío (fa freddo: hace frío)|Le froid (fa freddo : il fait froid)|Zima, chlad (fa freddo: je zima)|Zimno (fa freddo: jest zimno)|Soğuk (fa freddo: hava soğuk)|Die Kälte (fa freddo: es ist kalt)|寒さ（fa freddo：寒い）',
    'a man standing on a small patch of snow, shown small and complete from woolly hat to snow boots, in a thick winter coat and scarf, clearly freezing: shivering, teeth chattering, unhappy face, arms wrapped around himself, a few snowflakes falling',
    ['fa freddo', 'fredda']
  ),
  weather(
    'soleggiato',
    'soleggiato / soleggiata',
    [
      'Domani sarà una giornata soleggiata.',
      'Abbiamo un balcone molto soleggiato.',
      'Il tempo è soleggiato su tutta l’Italia.',
    ],
    '|Sunny|Soleado / soleada|Ensoleillé / ensoleillée|Slunečný / slunečná|Słoneczny / słoneczna|Güneşli|Sonnig|晴れた、日当たりのよい',
    `${ROUND} a sunny summer meadow with bright sunshine, a clear blue sky and a single tree casting a sharp shadow`,
    ['soleggiati', 'soleggiate', 'sole', 'il sole', 'c’è il sole', 'bel tempo', 'sereno']
  ),
  weather(
    'nuvoloso',
    'nuvoloso / nuvolosa',
    ['Oggi il cielo è nuvoloso.', 'È una giornata nuvolosa ma non piove.', 'Al mattino nuvoloso, al pomeriggio sole.'],
    '|Cloudy|Nublado / nublada|Nuageux / nuageuse|Oblačný, zatažený|Pochmurny, zachmurzony|Bulutlu|Bewölkt|曇りの',
    `${ROUND} a grey overcast sky completely covered with thick grey clouds above a small town with red roofs`,
    ['nuvolosi', 'nuvolose', 'nuvola', 'la nuvola', 'nuvole', 'le nuvole', 'coperto']
  ),
  weather(
    'piovoso',
    'piovoso / piovosa',
    [
      'Novembre è un mese piovoso.',
      'È stata una primavera molto piovosa.',
      'Nelle giornate piovose resto a casa a leggere.',
    ],
    '|Rainy|Lluvioso / lluviosa|Pluvieux / pluvieuse|Deštivý / deštivá|Deszczowy / deszczowa|Yağmurlu|Regnerisch|雨の多い、雨模様の',
    'two people walking on a small patch of wet street under colourful umbrellas in steady rain, rain drops bouncing on the ground',
    ['piovosi', 'piovose', 'pioggia', 'la pioggia', 'piove']
  ),
  weather(
    'ventoso',
    'ventoso / ventosa',
    [
      'Trieste è una città molto ventosa.',
      'È una giornata ventosa: prendi la giacca.',
      'Sulla spiaggia ventosa volano gli aquiloni.',
    ],
    '|Windy|Ventoso / ventosa|Venteux / venteuse|Větrný / větrná|Wietrzny / wietrzna|Rüzgârlı|Windig|風の強い',
    'a woman on a small patch of grass holding on to her hat, her hair and scarf blown sideways by strong wind, an umbrella turned inside out in her other hand',
    ['ventosi', 'ventose', 'vento', 'il vento', 'tira vento']
  ),

  // --- le stagioni ------------------------------------------------------------------------
  weather(
    'primavera',
    'la primavera',
    [
      'In primavera gli alberi sono in fiore.',
      'La primavera comincia il 21 marzo.',
      'La mia stagione preferita è la primavera.',
    ],
    '|Spring|La primavera|Le printemps|Jaro|Wiosna|İlkbahar|Der Frühling|春',
    `${ROUND} a green spring meadow full of small flowers with a blossoming pink cherry tree`
  ),
  weather(
    'estate',
    'l’estate',
    ['D’estate andiamo al mare.', 'L’estate in Sicilia è molto calda.', 'Quest’estate faccio un viaggio in Grecia.'],
    '|Summer|El verano|L’été|Léto|Lato|Yaz|Der Sommer|夏',
    `${ROUND} a golden summer field of sunflowers under a hot bright sun and a deep blue sky`
  ),
  weather(
    'autunno',
    'l’autunno',
    [
      'In autunno le foglie cadono dagli alberi.',
      'L’autunno è la stagione dei funghi e delle castagne.',
      'A ottobre, in pieno autunno, piove spesso.',
    ],
    '|Autumn, fall|El otoño|L’automne|Podzim|Jesień|Sonbahar|Der Herbst|秋',
    `${ROUND} a park path covered with fallen orange, red and yellow leaves under trees in autumn colours`
  ),
  weather(
    'inverno',
    'l’inverno',
    ['D’inverno andiamo a sciare.', 'L’inverno a Milano è freddo e umido.', 'In inverno le giornate sono corte.'],
    '|Winter|El invierno|L’hiver|Zima|Zima|Kış|Der Winter|冬',
    `${ROUND} a snowy winter landscape with snow-covered pine trees and a small wooden cabin`
  ),

  // --- le cose del tempo ------------------------------------------------------------------
  weather(
    'ombrello',
    'l’ombrello',
    [
      'Prendi l’ombrello: sta per piovere.',
      'Ho dimenticato l’ombrello in treno.',
      'Apriamo l’ombrello, comincia a piovere.',
    ],
    '|The umbrella|El paraguas|Le parapluie|Deštník|Parasol|Şemsiye|Der Regenschirm|傘',
    'an open dark blue umbrella with a curved wooden handle, standing on its own, a few rain drops on it',
    ['ombrelli', 'gli ombrelli']
  ),
  weather(
    'termometro',
    'il termometro',
    [
      'Il termometro segna trenta gradi.',
      'Guarda il termometro: fuori ci sono zero gradi.',
      'Stamattina il termometro è sceso sotto lo zero.',
    ],
    '|The thermometer|El termómetro|Le thermomètre|Teploměr|Termometr|Termometre|Das Thermometer|温度計',
    'a classic outdoor wall thermometer with a red liquid column and a scale of degrees, no readable text, isolated'
  ),
  weather(
    'stivali-di-gomma',
    'gli stivali di gomma',
    [
      'Con la pioggia metto gli stivali di gomma.',
      'I bambini hanno gli stivali di gomma rossi.',
      'Nell’orto porto sempre gli stivali di gomma.',
    ],
    '|The rubber boots, wellies|Las botas de agua|Les bottes en caoutchouc|Gumáky, gumové holínky|Kalosze, gumowce|Lastik çizmeler|Die Gummistiefel|長靴（ゴム長）',
    'a pair of shiny green rubber rain boots standing side by side, a little mud and water drops on them',
    ['stivali', 'gli stivali', 'stivale di gomma', 'lo stivale di gomma']
  ),
  weather(
    'pupazzo-di-neve',
    'il pupazzo di neve',
    [
      'Facciamo un pupazzo di neve in giardino!',
      'Il pupazzo di neve ha una carota per naso.',
      'Con il sole il pupazzo di neve si scioglie.',
    ],
    '|The snowman|El muñeco de nieve|Le bonhomme de neige|Sněhulák|Bałwan|Kardan adam|Der Schneemann|雪だるま',
    'a classic snowman made of three snowballs with a carrot nose, two dark stone eyes, a red scarf and two stick arms, standing on a small patch of snow',
    ['pupazzo', 'pupazzi di neve']
  ),
  weather(
    'foglia',
    'la foglia',
    [
      'In autunno le foglie diventano gialle e rosse.',
      'Una foglia è caduta sul tavolo.',
      'Il vento porta via le foglie secche.',
    ],
    '|The leaf|La hoja|La feuille|List|Liść|Yaprak|Das Blatt|葉',
    'three fallen autumn leaves, one red, one orange and one yellow, lying next to each other, isolated',
    ['foglie', 'le foglie']
  ),
  weather(
    'ventilatore',
    'il ventilatore',
    [
      'Senza aria condizionata accendo il ventilatore.',
      'Il ventilatore fa un po’ di rumore.',
      'D’estate il ventilatore resta acceso tutta la notte.',
    ],
    '|The (electric) fan|El ventilador|Le ventilateur|Ventilátor|Wentylator|Vantilatör|Der Ventilator|扇風機',
    'a white standing electric fan with a round grille, seen from the front at a slight angle, isolated',
    ['ventilatori']
  ),
  weather(
    'termosifone',
    'il termosifone',
    [
      'Quando fa freddo accendiamo i termosifoni.',
      'Metto i calzini ad asciugare sul termosifone.',
      'Il termosifone della camera è freddo: forse è rotto.',
    ],
    '|The radiator (heating)|El radiador (calefacción)|Le radiateur (chauffage)|Radiátor, topení|Kaloryfer|Kalorifer, radyatör|Der Heizkörper|暖房用ラジエーター',
    'a white wall-mounted heating radiator with vertical ribs and a small valve, with a pair of colourful woollen socks drying on top',
    ['termosifoni', 'il riscaldamento', 'riscaldamento', 'radiatore', 'il radiatore']
  ),
  weather(
    'previsioni-del-tempo',
    'le previsioni del tempo',
    [
      'Hai sentito le previsioni del tempo per domani?',
      'Secondo le previsioni del tempo nevicherà.',
      'Guardo le previsioni del tempo prima di partire.',
    ],
    '|The weather forecast|El pronóstico del tiempo|La météo, les prévisions météo|Předpověď počasí|Prognoza pogody|Hava durumu tahmini|Die Wettervorhersage|天気予報',
    'a friendly weather presenter woman standing next to a large screen with a map of Italy covered with simple sun, cloud and rain symbols, no text, no letters, no numbers',
    ['previsioni', 'meteo', 'il meteo', 'previsione del tempo', 'la previsione del tempo']
  ),
];

/** La parola citata nel testo dell'esercizio «Riconosci la parola» e nella nota sull'articolo. */
export const weatherExampleWord = { bare: 'ombrello', withArticle: 'l’ombrello' };

export const weatherTranslationExercises = [
  tr(
    'Che tempo fa oggi? Fa bel tempo.',
    'What’s the weather like today? It’s nice weather.',
    '¿Qué tiempo hace hoy? Hace buen tiempo.',
    'Quel temps fait-il aujourd’hui ? Il fait beau.',
    'Jaké je dnes počasí? Je hezky.',
    'Jaka jest dzisiaj pogoda? Jest ładna pogoda.',
    'Bugün hava nasıl? Hava güzel.',
    'Wie ist das Wetter heute? Es ist schönes Wetter.',
    '今日の天気はどうですか？いい天気です。'
  ),
  tr(
    'Piove: prendi l’ombrello.',
    'It’s raining: take the umbrella.',
    'Llueve: coge el paraguas.',
    'Il pleut : prends le parapluie.',
    'Prší: vezmi si deštník.',
    'Pada deszcz: weź parasol.',
    'Yağmur yağıyor: şemsiyeyi al.',
    'Es regnet: Nimm den Regenschirm mit.',
    '雨が降っています。傘を持って行って。'
  ),
  tr(
    'D’inverno fa freddo e a volte nevica.',
    'In winter it’s cold and sometimes it snows.',
    'En invierno hace frío y a veces nieva.',
    'En hiver, il fait froid et parfois il neige.',
    'V zimě je zima a někdy sněží.',
    'Zimą jest zimno i czasem pada śnieg.',
    'Kışın hava soğuk ve bazen kar yağar.',
    'Im Winter ist es kalt und manchmal schneit es.',
    '冬は寒くて、ときどき雪が降ります。'
  ),
  tr(
    'Ho caldo: accendi il ventilatore, per favore.',
    'I’m hot: turn on the fan, please.',
    'Tengo calor: enciende el ventilador, por favor.',
    'J’ai chaud : allume le ventilateur, s’il te plaît.',
    'Je mi horko: zapni prosím ventilátor.',
    'Jest mi gorąco: włącz wentylator, proszę.',
    'Sıcakladım: vantilatörü açar mısın lütfen?',
    'Mir ist heiß: Mach bitte den Ventilator an.',
    '暑いです。扇風機をつけてください。'
  ),
  tr(
    'C’è molto vento e il cielo è nuvoloso.',
    'It’s very windy and the sky is cloudy.',
    'Hace mucho viento y el cielo está nublado.',
    'Il y a beaucoup de vent et le ciel est nuageux.',
    'Hodně fouká a obloha je zatažená.',
    'Mocno wieje i niebo jest zachmurzone.',
    'Çok rüzgâr var ve gökyüzü bulutlu.',
    'Es ist sehr windig und der Himmel ist bewölkt.',
    '風がとても強くて、空は曇っています。'
  ),
  tr(
    'La mia stagione preferita è l’autunno.',
    'My favourite season is autumn.',
    'Mi estación favorita es el otoño.',
    'Ma saison préférée est l’automne.',
    'Moje oblíbené roční období je podzim.',
    'Moja ulubiona pora roku to jesień.',
    'En sevdiğim mevsim sonbahar.',
    'Meine Lieblingsjahreszeit ist der Herbst.',
    '私の好きな季節は秋です。'
  ),
  tr(
    'Dopo il temporale è uscito l’arcobaleno.',
    'After the storm, the rainbow came out.',
    'Después de la tormenta salió el arcoíris.',
    'Après l’orage, l’arc-en-ciel est apparu.',
    'Po bouřce vyšla duha.',
    'Po burzy pojawiła się tęcza.',
    'Fırtınadan sonra gökkuşağı çıktı.',
    'Nach dem Gewitter kam der Regenbogen heraus.',
    '雷雨のあと、虹が出ました。'
  ),
  tr(
    'Secondo le previsioni del tempo, domani ci sarà il sole.',
    'According to the weather forecast, it will be sunny tomorrow.',
    'Según el pronóstico del tiempo, mañana hará sol.',
    'D’après la météo, demain il y aura du soleil.',
    'Podle předpovědi počasí bude zítra svítit slunce.',
    'Według prognozy pogody jutro będzie słonecznie.',
    'Hava durumuna göre yarın güneşli olacak.',
    'Laut Wettervorhersage scheint morgen die Sonne.',
    '天気予報によると、明日は晴れます。'
  ),
  tr(
    'In primavera le giornate diventano più lunghe.',
    'In spring the days get longer.',
    'En primavera los días se hacen más largos.',
    'Au printemps, les journées deviennent plus longues.',
    'Na jaře jsou dny delší.',
    'Wiosną dni stają się dłuższe.',
    'İlkbaharda günler uzar.',
    'Im Frühling werden die Tage länger.',
    '春になると日が長くなります。'
  ),
  tr(
    'C’è nebbia: guida piano.',
    'It’s foggy: drive slowly.',
    'Hay niebla: conduce despacio.',
    'Il y a du brouillard : conduis doucement.',
    'Je mlha: jeď pomalu.',
    'Jest mgła: jedź powoli.',
    'Sis var: yavaş sür.',
    'Es ist neblig: Fahr langsam.',
    '霧が出ています。ゆっくり運転してください。'
  ),
];
