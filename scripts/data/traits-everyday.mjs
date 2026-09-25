// Gli aggettivi «di tutti i giorni» aggiunti alle lezioni sugli animali il 2026-09-25.
//
// Richiesta di Martin: le lezioni sulle caratteristiche degli animali devono insegnare parole utili
// anche per le persone e per le cose di ogni giorno (peloso, stanco, generoso, triste...), non
// aggettivi che valgono solo per gli animali (squamoso, piumato...). Gli animali restano il mezzo
// simpatico per ricordarle. Per questo:
//   - ogni voce ha almeno una frase d'esempio su una persona o su una cosa;
//   - gli stati (stanco, malato, bagnato, caldo...) hanno la scheda ma non la riga negli esercizi
//     (`noMatch`): a tutti gli animali puo' capitare.
//
// Stesso formato di traits-base.mjs (vedi la' come si leggono `matches` e `never`).
// Le glosse sono nell'ordine en, es, fr, cs, pl, tr, de, ja.

import { trait } from './traits-base.mjs';

const NM = { noMatch: true };

export const everydayPhysical = [
  trait(
    'basso',
    'basso / bassa',
    'Ha poca altezza.',
    ['short', 'bajo', 'petit', 'nízký', 'niski', 'kısa boylu', 'klein', '背が低い'],
    ['Il bassotto ha le zampe molto basse.', 'Mia cugina è bassa, ma gioca a basket.', 'Questo tavolo è troppo basso.'],
    'a dachshund with very short legs standing in side view, whole body visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['riccio', 'tartaruga', 'talpa', 'criceto', 'marmotta', 'lucertola', 'maiale', 'koala', 'topo']
  ),
  trait(
    'largo',
    'largo / larga',
    'Ha molta distanza da un lato all’altro.',
    ['wide', 'ancho', 'large', 'široký', 'szeroki', 'geniş', 'breit', '幅が広い'],
    [
      'L’ippopotamo ha una bocca molto larga.',
      'La strada è larga e senza traffico.',
      'Questi pantaloni sono troppo larghi.',
    ],
    'a hippopotamus with its mouth opened extremely wide, three-quarter view, whole animal visible',
    ['ippopotamo', 'rinoceronte', 'elefante', 'pellicano', 'rana', 'balena', 'panda', 'maiale', 'tucano', 'coccodrillo']
  ),
  trait(
    'stretto',
    'stretto / stretta',
    'Ha poco spazio da un lato all’altro.',
    ['narrow', 'estrecho', 'étroit', 'úzký', 'wąski', 'dar', 'eng', '狭い'],
    [
      'La scatola è troppo stretta per il gatto grasso.',
      'La strada è stretta: passa una macchina sola.',
      'Queste scarpe sono strette.',
    ],
    'a chubby tabby cat squeezed into a small cardboard box that is too tight for it, fur bulging over the edges, funny stuck expression, the whole box and cat visible',
    ['gatto'],
    [],
    NM
  ),
  trait(
    'debole',
    'debole',
    'Ha poca forza.',
    ['weak', 'débil', 'faible', 'slabý', 'słaby', 'zayıf', 'schwach', '弱い'],
    ['Il cerbiatto appena nato è debole.', 'Mia nonna è malata e oggi è debole.', 'Questo caffè è debole.'],
    'a newborn baby fawn with thin wobbly legs trying to stand up in grass, whole body visible, on a plain pure white background with no ground, grass or sand, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [
      'cervo',
      'koala',
      'criceto',
      'coniglio',
      'topo',
      'farfalla',
      'lumaca',
      'pesce-rosso',
      'colibri',
      'bruco',
      'libellula',
      'rana',
    ]
  ),
  trait(
    'muscoloso',
    'muscoloso / muscolosa',
    'Ha muscoli grandi e forti.',
    ['muscular', 'musculoso', 'musclé', 'svalnatý', 'umięśniony', 'kaslı', 'muskulös', '筋肉質の'],
    ['Il gorilla è muscoloso.', 'Mio fratello è muscoloso perché va in palestra.', 'Il cavallo ha le gambe muscolose.'],
    'a muscular gorilla flexing both arms with chest out, front view, whole body visible',
    [
      'gorilla',
      'cavallo',
      'leone',
      'tigre',
      'orso',
      'rinoceronte',
      'ghepardo',
      'leopardo',
      'lupo',
      'cinghiale',
      'elefante',
      'canguro',
      'delfino',
      'squalo',
      'orca',
      'ippopotamo',
      'scimpanze',
    ]
  ),
  trait(
    'rotondo',
    'rotondo / rotonda',
    'Ha la forma di un cerchio o di una palla.',
    ['round', 'redondo', 'rond', 'kulatý', 'okrągły', 'yuvarlak', 'rund', '丸い'],
    ['Il criceto è piccolo e rotondo.', 'La luna è rotonda stasera.', 'Il tavolo rotondo è per sei persone.'],
    'a very round fluffy hamster sitting like a little ball, whole body visible',
    [
      'criceto',
      'riccio',
      'panda',
      'maiale',
      'koala',
      'pesce-rosso',
      'coccinella',
      'tartaruga',
      'pinguino',
      'ippopotamo',
      'lumaca',
    ],
    ['serpente', 'giraffa', 'formichiere', 'cobra', 'struzzo', 'cicogna', 'fenicottero']
  ),
  trait(
    'ruvido',
    'ruvido / ruvida',
    'Non è liscio: al tatto è aspro.',
    ['rough', 'áspero', 'rugueux', 'drsný', 'szorstki', 'pürüzlü', 'rau', 'ざらざらした'],
    ['La lingua del gatto è ruvida.', 'Le mani del contadino sono ruvide.', 'Questo muro è ruvido.'],
    'a rhinoceros with thick rough wrinkled grey skin, side view, whole body visible',
    [
      'rinoceronte',
      'elefante',
      'gatto',
      'coccodrillo',
      'cammello',
      'ippopotamo',
      'iguana',
      'drago-di-komodo',
      'rospo',
      'cinghiale',
      'riccio',
      'squalo',
    ]
  ),
  trait(
    'riccio',
    'riccio / riccia',
    'Ha i capelli o il pelo a forma di spirale.',
    ['curly', 'rizado', 'bouclé', 'kudrnatý', 'kręcony', 'kıvırcık', 'lockig', '巻き毛の'],
    ['Il barboncino ha il pelo riccio.', 'Mia sorella ha i capelli ricci.', 'La pecora ha la lana riccia.'],
    'a curly-haired brown poodle with tight curls sitting in side view, whole dog visible',
    ['pecora', 'capra', 'lama', 'koala', 'criceto', 'cane'],
    ['delfino', 'serpente', 'tartaruga', 'pesce-rosso', 'elefante', 'rana']
  ),
  trait(
    'giovane',
    'giovane',
    'Ha pochi anni.',
    ['young', 'joven', 'jeune', 'mladý', 'młody', 'genç', 'jung', '若い'],
    [
      'Il cucciolo è giovane e pieno di energia.',
      'Mia zia è giovane: ha venticinque anni.',
      'Sono giovane e voglio viaggiare.',
    ],
    'a young golden retriever puppy with big paws and playful bright eyes sitting, whole body visible',
    [],
    [],
    NM
  ),
  trait(
    'vecchio',
    'vecchio / vecchia',
    'Ha molti anni.',
    ['old', 'viejo', 'vieux', 'starý', 'stary', 'yaşlı', 'alt', '年老いた'],
    ['Il cane vecchio dorme tutto il giorno.', 'Mio nonno è vecchio, ma sta bene.', 'Questa casa è molto vecchia.'],
    'an old dog with a grey muzzle and gentle tired eyes lying calmly, whole body visible',
    [],
    [],
    NM
  ),
  trait(
    'bello',
    'bello / bella',
    'È piacevole da guardare.',
    ['beautiful', 'bonito', 'beau', 'krásný', 'piękny', 'güzel', 'schön', '美しい'],
    ['Il cervo con le corna grandi è bello.', 'Che bella giornata!', 'Mia madre è una donna bella e gentile.'],
    'a magnificent stag with large antlers standing proudly in profile with soft golden light, whole animal visible',
    [],
    [],
    NM
  ),
  trait(
    'buffo',
    'buffo / buffa',
    'Fa ridere per il suo aspetto o per come si muove.',
    ['funny', 'gracioso', 'drôle', 'legrační', 'śmieszny', 'komik', 'komisch', 'おかしな'],
    ['Il pinguino ha una camminata buffa.', 'Il mio amico ha un cappello buffo.', 'Che faccia buffa!'],
    'a funny-looking pelican tilting its head with an enormous beak and a comically surprised expression, whole bird visible',
    [
      'pinguino',
      'pellicano',
      'panda',
      'scimmia',
      'tucano',
      'bradipo',
      'canguro',
      'koala',
      'cammello',
      'lama',
      'ippopotamo',
      'foca',
      'maiale',
    ],
    []
  ),
  trait(
    'stanco',
    'stanco / stanca',
    'Ha bisogno di riposare.',
    ['tired', 'cansado', 'fatigué', 'unavený', 'zmęczony', 'yorgun', 'müde', '疲れた'],
    [
      'Il cane è stanco dopo la passeggiata.',
      'Sono stanco: ho lavorato tutto il giorno.',
      'I bambini sono stanchi e vanno a letto.',
    ],
    'a tired dog lying flat on the floor with drooping eyelids and tongue out, exhausted, whole body visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  trait(
    'affamato',
    'affamato / affamata',
    'Ha molta fame.',
    ['hungry', 'hambriento', 'affamé', 'hladový', 'głodny', 'aç', 'hungrig', '空腹の'],
    [
      'Il cucciolo è affamato e guarda la ciotola.',
      'Siamo affamati: ceniamo subito!',
      'Dopo la palestra sono sempre affamata.',
    ],
    'a hungry puppy sitting next to an empty food bowl, looking up with big pleading eyes, whole body visible',
    [],
    [],
    NM
  ),
  trait(
    'assetato',
    'assetato / assetata',
    'Ha molta sete.',
    ['thirsty', 'sediento', 'assoiffé', 'žíznivý', 'spragniony', 'susamış', 'durstig', '喉が渇いた'],
    [
      'Il cammello è assetato dopo il deserto.',
      'Dopo la corsa sono assetato.',
      'I bambini sono assetati e chiedono dell’acqua.',
    ],
    'a thirsty camel with its mouth open leaning eagerly toward a small pond of water, whole animal visible',
    [],
    [],
    NM
  ),
  trait(
    'bagnato',
    'bagnato / bagnata',
    'Ha acqua addosso.',
    ['wet', 'mojado', 'mouillé', 'mokrý', 'mokry', 'ıslak', 'nass', '濡れた'],
    ['Il cane è tutto bagnato.', 'Ho i capelli bagnati.', 'Il pavimento è bagnato: attenzione!'],
    'a soaking wet fluffy dog with dripping fur and water drops around it sitting with a sad look, whole body visible',
    [],
    [],
    NM
  ),
  trait(
    'asciutto',
    'asciutto / asciutta',
    'Non ha acqua addosso.',
    ['dry', 'seco', 'sec', 'suchý', 'suchy', 'kuru', 'trocken', '乾いた'],
    ['Il gatto sta asciutto sotto il tetto.', 'Ho i vestiti asciutti.', 'Oggi il terreno è asciutto.'],
    'a cat sitting dry and cosy under a small red umbrella while rain falls around it, whole cat visible',
    [],
    [],
    NM
  ),
  trait(
    'sano',
    'sano / sana',
    'Sta bene: non ha malattie.',
    ['healthy', 'sano', 'en bonne santé', 'zdravý', 'zdrowy', 'sağlıklı', 'gesund', '健康な'],
    ['Il mio cane è sano e mangia bene.', 'Mangio frutta per restare sano.', 'Una vita sana fa bene.'],
    'a healthy glossy golden retriever with bright eyes standing proudly beside a red apple, whole dog visible',
    [],
    [],
    NM
  ),
  trait(
    'malato',
    'malato / malata',
    'Non sta bene: ha una malattia.',
    ['sick', 'enfermo', 'malade', 'nemocný', 'chory', 'hasta', 'krank', '病気の'],
    ['Il gattino è malato e non mangia.', 'Mia madre è malata: ha la febbre.', 'Sono malato e resto a casa.'],
    'a sick kitten lying under a blanket with an ice pack on its head and a thermometer, sad eyes, whole kitten visible',
    [],
    [],
    NM
  ),
  trait(
    'freddo',
    'freddo / fredda',
    'Ha una temperatura molto bassa.',
    ['cold', 'frío', 'froid', 'studený', 'zimny', 'soğuk', 'kalt', '冷たい'],
    ['L’acqua del mare è fredda.', 'Ho le mani fredde.', 'Il cucciolo ha freddo nella neve.'],
    'a shivering puppy standing in falling snow wearing a red scarf, whole body visible',
    [],
    [],
    NM
  ),
  trait(
    'caldo',
    'caldo / calda',
    'Ha una temperatura alta.',
    ['hot', 'caliente', 'chaud', 'horký', 'gorący', 'sıcak', 'heiß', '熱い'],
    ['Il caffè è caldo.', 'In estate fa molto caldo.', 'La lucertola sta sulla pietra calda.'],
    'a small lizard basking on a sun-warmed rock under a bright sun, whole lizard visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  trait(
    'sveglio',
    'sveglio / sveglia',
    'Non dorme: ha gli occhi aperti.',
    ['awake', 'despierto', 'éveillé', 'vzhůru', 'rozbudzony', 'uyanık', 'wach', '起きている'],
    ['Il gufo è sveglio di notte.', 'Sono sveglio dalle sei.', 'I bambini sono già svegli.'],
    'a wide-awake owl with big round eyes fully open perched on a branch at night, whole bird visible',
    [],
    [],
    NM
  ),
  trait(
    'addormentato',
    'addormentato / addormentata',
    'Sta dormendo.',
    ['asleep', 'dormido', 'endormi', 'spící', 'śpiący', 'uyuyan', 'eingeschlafen', '眠っている'],
    ['Il gatto è addormentato sul divano.', 'Il bambino è addormentato.', 'Papà è addormentato davanti alla TV.'],
    'a tabby cat curled up fast asleep with closed eyes, peaceful, whole cat visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
];

export const everydayPersonality = [
  trait(
    'generoso',
    'generoso / generosa',
    'Dà volentieri agli altri quello che ha.',
    ['generous', 'generoso', 'généreux', 'štědrý', 'hojny', 'cömert', 'großzügig', '気前のよい'],
    [
      'La scimmia generosa divide la banana con l’amico.',
      'Mio zio è generoso: paga sempre la cena.',
      'Sei stata generosa con tutti.',
    ],
    'a monkey handing half of a banana to a smaller baby monkey with a kind expression, both fully visible',
    ['scimmia', 'scimpanze', 'cane', 'elefante', 'delfino', 'lupo', 'suricato']
  ),
  trait(
    'egoista',
    'egoista',
    'Pensa solo a se stesso.',
    ['selfish', 'egoísta', 'égoïste', 'sobecký', 'egoistyczny', 'bencil', 'egoistisch', '自己中心的な'],
    [
      'Il gatto egoista non divide mai il cuscino.',
      'Non essere egoista: dividi i giocattoli!',
      'Mio cugino è egoista e pensa solo a sé.',
    ],
    'a greedy hamster hoarding a big pile of seeds with both paws while turning its back on a smaller hamster, both fully visible',
    ['gatto', 'gabbiano', 'criceto', 'maiale', 'scoiattolo', 'cinghiale', 'pavone']
  ),
  trait(
    'simpatico',
    'simpatico / simpatica',
    'È piacevole e fa venire voglia di stare insieme.',
    ['nice', 'simpático', 'sympathique', 'sympatický', 'sympatyczny', 'sempatik', 'sympathisch', '感じのよい'],
    ['Il delfino è un animale molto simpatico.', 'La tua amica è simpatica.', 'Il nuovo collega è simpatico.'],
    'a smiling friendly dolphin peeking out of the water with a cheerful expression, whole head and body visible',
    ['delfino', 'cane', 'panda', 'scimmia', 'pinguino', 'koala', 'lontra', 'foca', 'suricato']
  ),
  trait(
    'antipatico',
    'antipatico / antipatica',
    'Non piace: sembra poco gentile.',
    [
      'unpleasant',
      'antipático',
      'antipathique',
      'nesympatický',
      'niesympatyczny',
      'antipatik',
      'unsympathisch',
      '感じの悪い',
    ],
    [
      'Il gatto antipatico mi guarda male.',
      'Il mio vicino è antipatico: non saluta mai.',
      'Non è cattivo, è solo un po’ antipatico.',
    ],
    'a grumpy-looking cat sitting with a frown, looking sideways with an annoyed unfriendly expression, whole cat visible',
    ['gatto', 'gallo', 'zanzara', 'corvo', 'iena', 'cammello', 'lama']
  ),
  trait(
    'divertente',
    'divertente',
    'Fa ridere e fa passare bene il tempo.',
    ['funny', 'divertido', 'amusant', 'zábavný', 'zabawny', 'eğlenceli', 'lustig', '面白い'],
    ['La scimmia è divertente quando fa le smorfie.', 'Il film è molto divertente.', 'Sei divertente: mi fai ridere!'],
    'a playful monkey sticking its tongue out and making a funny face, whole body visible',
    ['scimmia', 'pappagallo', 'pinguino', 'delfino', 'lontra', 'cane', 'scimpanze', 'koala', 'foca']
  ),
  trait(
    'felice',
    'felice',
    'Prova una grande gioia.',
    ['happy', 'feliz', 'heureux', 'šťastný', 'szczęśliwy', 'mutlu', 'glücklich', '幸せな'],
    [
      'Il cane è felice quando arriva il padrone.',
      'Sono felice: oggi è il mio compleanno!',
      'Mia figlia è felice a scuola.',
    ],
    'an ecstatic puppy jumping in the air with a huge open-mouth smile and flying ears, whole body visible',
    ['cane', 'delfino', 'panda', 'koala', 'lontra', 'scimmia', 'cavallo', 'gatto']
  ),
  trait(
    'triste',
    'triste',
    'Ha voglia di piangere e non ride.',
    ['sad', 'triste', 'triste', 'smutný', 'smutny', 'üzgün', 'traurig', '悲しい'],
    ['Il cane è triste quando resta solo.', 'Sono triste: il mio amico parte oggi.', 'È un film molto triste.'],
    'a sad basset hound with droopy eyes and a single tear rolling down its cheek, whole dog visible',
    ['cane', 'asino', 'elefante', 'gorilla', 'scimpanze', 'cavallo', 'mucca']
  ),
  trait(
    'arrabbiato',
    'arrabbiato / arrabbiata',
    'Prova rabbia contro qualcuno o qualcosa.',
    ['angry', 'enfadado', 'en colère', 'naštvaný', 'zły', 'kızgın', 'wütend', '怒った'],
    [
      'Il gatto arrabbiato soffia e alza il pelo.',
      'Papà è arrabbiato perché sono tornato tardi.',
      'Non essere arrabbiata con me!',
    ],
    'an angry cat with puffed-up fur, ears back, narrowed eyes and a scowl, whole cat visible',
    [
      'gatto',
      'cane',
      'leone',
      'tigre',
      'orso',
      'gallo',
      'cobra',
      'rinoceronte',
      'ippopotamo',
      'lupo',
      'cammello',
      'lama',
      'scimpanze',
    ]
  ),
  trait(
    'nervoso',
    'nervoso / nervosa',
    'È agitato e non riesce a stare calmo.',
    ['nervous', 'nervioso', 'nerveux', 'nervózní', 'zdenerwowany', 'gergin', 'nervös', '神経質な'],
    ['Il cavallo è nervoso prima della gara.', 'Sono nervosa: domani ho un esame.', 'Il gatto nervoso muove la coda.'],
    'a nervous squirrel clutching its paws to its chest with wide anxious eyes, whole body visible',
    ['cavallo', 'gatto', 'coniglio', 'scoiattolo', 'topo', 'criceto', 'cane', 'cervo', 'suricato']
  ),
  trait(
    'annoiato',
    'annoiato / annoiata',
    'Non trova niente di interessante da fare.',
    ['bored', 'aburrido', 'ennuyé', 'znudený', 'znudzony', 'sıkılmış', 'gelangweilt', '退屈した'],
    [
      'Il gatto è annoiato: nessuno gioca con lui.',
      'I bambini sono annoiati sotto la pioggia.',
      'Sono annoiata: non c’è niente in TV.',
    ],
    'a bored cat slumped with half-closed eyes staring at nothing and its chin resting on a paw, whole cat visible',
    ['gatto', 'cane', 'bradipo', 'leone', 'ippopotamo', 'maiale']
  ),
  trait(
    'sorpreso',
    'sorpreso / sorpresa',
    'Non se lo aspettava.',
    ['surprised', 'sorprendido', 'surpris', 'překvapený', 'zaskoczony', 'şaşırmış', 'überrascht', '驚いた'],
    ['Il suricato è sorpreso: c’è un rumore!', 'Sono sorpreso: non pensavo di vincere.', 'Anna è sorpresa dal regalo.'],
    'a surprised meerkat standing upright with wide eyes and mouth agape, whole body visible',
    ['suricato', 'gatto', 'coniglio', 'cane', 'pappagallo', 'scimmia', 'gufo', 'cavallo']
  ),
  trait(
    'permaloso',
    'permaloso / permalosa',
    'Si offende per cose da poco.',
    [
      'touchy',
      'susceptible',
      'susceptible',
      'přecitlivělý',
      'przewrażliwiony',
      'alıngan',
      'empfindlich',
      '傷つきやすい',
    ],
    [
      'Il gatto permaloso gira le spalle se lo prendi in giro.',
      'Sei permaloso: ti offendi per una battuta!',
      'Mia sorella è permalosa.',
    ],
    'an offended cat sitting with its back turned and head turned away, pouting, looking over its shoulder, whole cat visible',
    ['gatto', 'riccio', 'lama', 'cammello', 'asino', 'pavone', 'gallo', 'cigno']
  ),
  trait(
    'educato',
    'educato / educata',
    'Si comporta bene con gli altri e usa parole gentili.',
    ['polite', 'educado', 'poli', 'slušný', 'uprzejmy', 'kibar', 'höflich', '礼儀正しい'],
    [
      'Il cane educato aspetta prima di mangiare.',
      'Il bambino è educato: dice sempre «grazie».',
      'Sii educato con i vicini.',
    ],
    'a well-mannered penguin bowing slightly and politely, wearing a small bow tie, whole bird visible',
    ['cane', 'cavallo', 'cigno', 'pinguino', 'delfino', 'panda', 'elefante', 'giraffa']
  ),
  trait(
    'maleducato',
    'maleducato / maleducata',
    'Non rispetta gli altri: risponde male, non saluta.',
    ['rude', 'maleducado', 'impoli', 'nezdvořilý', 'niegrzeczny', 'terbiyesiz', 'unhöflich', '無作法な'],
    ['Il lama maleducato sputa ai visitatori.', 'È maleducato non salutare.', 'Non essere maleducato con la maestra!'],
    'a rude llama stretching its neck out and about to spit, lips pursed, with a naughty look, whole animal visible',
    ['lama', 'gabbiano', 'scimmia', 'iena', 'pappagallo', 'cammello', 'corvo', 'gatto']
  ),
  trait(
    'onesto',
    'onesto / onesta',
    'Dice la verità e non prende quello che non è suo.',
    ['honest', 'honesto', 'honnête', 'poctivý', 'uczciwy', 'dürüst', 'ehrlich', '正直な'],
    [
      'Il cane onesto riporta il portafoglio al padrone.',
      'Il commesso è onesto: mi ha dato il resto giusto.',
      'Sii onesto: hai rotto tu il vaso?',
    ],
    'a loyal-looking dog carrying a brown leather wallet in its mouth, sitting upright as if returning it, whole dog visible',
    ['cane', 'elefante', 'delfino', 'gufo', 'pinguino', 'cigno']
  ),
  trait(
    'avaro',
    'avaro / avara',
    'Non vuole spendere né dare niente agli altri.',
    ['stingy', 'tacaño', 'avare', 'lakomý', 'skąpy', 'cimri', 'geizig', 'けちな'],
    [
      'Lo scoiattolo avaro tiene tutte le nocciole per sé.',
      'Mio zio è avaro: non offre mai un caffè.',
      'Non essere avaro: dividi con gli amici!',
    ],
    'a suspicious squirrel hugging a huge pile of acorns and nuts protectively while glaring sideways, whole body visible',
    ['scoiattolo', 'criceto', 'corvo', 'gabbiano', 'castoro']
  ),
  trait(
    'ottimista',
    'ottimista',
    'Vede le cose in modo positivo.',
    ['optimistic', 'optimista', 'optimiste', 'optimistický', 'optymistyczny', 'iyimser', 'optimistisch', '楽観的な'],
    [
      'Il cucciolo è ottimista: aspetta sempre il gioco.',
      'Sono ottimista: andrà tutto bene.',
      'Mia madre è ottimista e sorride sempre.',
    ],
    'a cheerful dog looking up at a rising sun with a hopeful smile and wagging tail, sunrise behind it, whole dog visible',
    ['cane', 'delfino', 'koala', 'pappagallo', 'scimmia']
  ),
  trait(
    'pessimista',
    'pessimista',
    'Vede le cose in modo negativo.',
    [
      'pessimistic',
      'pesimista',
      'pessimiste',
      'pesimistický',
      'pesymistyczny',
      'karamsar',
      'pessimistisch',
      '悲観的な',
    ],
    [
      'L’asino sembra sempre pessimista.',
      'Non essere pessimista: andrà tutto bene!',
      'Mio zio è pessimista e vede tutto nero.',
    ],
    'a gloomy donkey with drooping ears standing under a small dark rain cloud, sad look, whole donkey visible',
    ['asino', 'cane', 'elefante', 'gufo', 'corvo', 'bradipo', 'cammello']
  ),
  trait(
    'sensibile',
    'sensibile',
    'Sente molto le emozioni degli altri.',
    ['sensitive', 'sensible', 'sensible', 'citlivý', 'wrażliwy', 'duygusal', 'sensibel', '繊細な'],
    [
      'Il cavallo è sensibile: capisce il tuo umore.',
      'Mia figlia è sensibile e piange davanti ai film tristi.',
      'Sei una persona sensibile.',
    ],
    'a gentle young deer with big soft eyes sniffing a small flower delicately, whole deer visible',
    ['cavallo', 'cane', 'cervo', 'elefante', 'delfino', 'gatto', 'gorilla', 'coniglio']
  ),
  trait(
    'chiacchierone',
    'chiacchierone / chiacchierona',
    'Parla molto, anche troppo.',
    ['chatty', 'hablador', 'bavard', 'upovídaný', 'gadatliwy', 'geveze', 'geschwätzig', 'おしゃべりな'],
    [
      'Il pappagallo è chiacchierone: parla tutto il giorno.',
      'Mia zia è chiacchierona al telefono.',
      'Sei troppo chiacchierone in classe!',
    ],
    'a talkative colourful parrot with its beak wide open mid-chatter, leaning forward, whole bird visible',
    ['pappagallo', 'gallo', 'gallina', 'anatra', 'corvo', 'usignolo', 'scimmia', 'gabbiano', 'tucano', 'delfino']
  ),
  trait(
    'ubbidiente',
    'ubbidiente',
    'Fa quello che gli dicono di fare.',
    ['obedient', 'obediente', 'obéissant', 'poslušný', 'posłuszny', 'itaatkar', 'gehorsam', '従順な'],
    [
      'Il cane ubbidiente si siede subito.',
      'Marco è un bambino ubbidiente.',
      'I miei figli non sono sempre ubbidienti.',
    ],
    'an attentive well-trained border collie sitting perfectly upright and looking up obediently, whole dog visible',
    ['cane', 'cavallo', 'delfino', 'elefante', 'pecora']
  ),
  trait(
    'ribelle',
    'ribelle',
    'Non vuole obbedire alle regole.',
    ['rebellious', 'rebelde', 'rebelle', 'vzpurný', 'buntowniczy', 'asi', 'rebellisch', '反抗的な'],
    [
      'La capra ribelle non segue il gregge.',
      'Mio figlio è un adolescente ribelle.',
      'Sei un po’ ribelle, ma ti voglio bene.',
    ],
    'a young goat kid rearing up with a defiant look and its head lifted, wild pose, whole body visible',
    ['capra', 'gatto', 'asino', 'lupo', 'cavallo', 'scimmia', 'cane', 'gallo']
  ),
  trait(
    'ordinato',
    'ordinato / ordinata',
    'Tiene tutto al suo posto.',
    ['tidy', 'ordenado', 'ordonné', 'uspořádaný', 'uporządkowany', 'düzenli', 'ordentlich', 'きちんとした'],
    [
      'Lo scoiattolo ordinato mette le ghiande in fila.',
      'Mia sorella è ordinata; io no.',
      'La tua scrivania è sempre ordinata.',
    ],
    'a squirrel sitting proudly at the left of a short neat row of five acorns lined up in a straight line, whole squirrel and all five acorns visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['formica', 'ape', 'criceto', 'scoiattolo', 'gatto', 'castoro', 'cigno']
  ),
  trait(
    'disordinato',
    'disordinato / disordinata',
    'Lascia le cose in giro, senza ordine.',
    ['messy', 'desordenado', 'désordonné', 'nepořádný', 'bałaganiarski', 'dağınık', 'unordentlich', 'だらしない'],
    [
      'Il cucciolo è disordinato: lascia le scarpe in giro.',
      'Mio fratello è disordinato: la sua camera è un caos.',
      'Che scrivania disordinata!',
    ],
    'a messy puppy sitting amid scattered socks, shoes and toys strewn around it, with a happy guilty expression, whole puppy visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['cane', 'maiale', 'scimmia', 'gatto', 'cinghiale', 'topo', 'ippopotamo']
  ),
  trait(
    'distratto',
    'distratto / distratta',
    'Non fa attenzione a quello che succede.',
    ['distracted', 'distraído', 'distrait', 'roztržitý', 'roztargniony', 'dalgın', 'zerstreut', 'ぼんやりした'],
    [
      'Il cane è distratto: guarda la farfalla.',
      'Sei distratto e dimentichi le chiavi.',
      'La mia amica è distratta: ha perso di nuovo il telefono.',
    ],
    'a dog dreamily watching a butterfly that landed on its nose, a ball ignored beside it, whole dog visible',
    ['cane', 'pesce-rosso', 'pecora', 'mucca', 'bradipo', 'panda', 'gatto', 'koala']
  ),
  trait(
    'attento',
    'attento / attenta',
    'Guarda e ascolta con concentrazione.',
    ['attentive', 'atento', 'attentif', 'pozorný', 'uważny', 'dikkatli', 'aufmerksam', '注意深い'],
    [
      'Il coniglio è attento: non perde un rumore.',
      'Gli studenti sono attenti alla lezione.',
      'Attento! La strada è pericolosa.',
    ],
    'a rabbit sitting upright with ears perked up alertly, focused, whole rabbit visible',
    ['coniglio', 'gufo', 'suricato', 'cervo', 'gatto', 'falco', 'aquila', 'cane', 'lupo', 'cicogna']
  ),
  trait(
    'buono',
    'buono / buona',
    'Ha un cuore gentile e non fa male a nessuno.',
    ['kind', 'bueno', 'bon', 'hodný', 'dobry', 'iyi kalpli', 'gut', '善良な'],
    ['Il cane grande è buono con i piccoli.', 'Mia nonna è buona: aiuta tutti.', 'Sei un ragazzo buono.'],
    'a big gentle Saint Bernard dog sitting calmly with a tiny tabby kitten snuggled against its front leg, tender expression, both fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side',
    ['cane', 'elefante', 'panda', 'mucca', 'pecora', 'cavallo', 'koala', 'delfino', 'gorilla']
  ),
  trait(
    'cattivo',
    'cattivo / cattiva',
    'Vuole fare del male agli altri.',
    ['mean', 'malo', 'méchant', 'zlý', 'zły', 'kötü', 'böse', '意地悪な'],
    [
      'Nelle favole il lupo è cattivo.',
      'Il ragazzo cattivo ruba i giocattoli.',
      'Non essere cattivo con tuo fratello!',
    ],
    'a mean scowling crow with a menacing glare and ruffled black feathers perched on a fence post, whole bird visible',
    ['lupo', 'volpe', 'serpente', 'iena', 'corvo', 'ragno', 'coccodrillo', 'squalo', 'scorpione', 'cobra', 'leopardo']
  ),
];
