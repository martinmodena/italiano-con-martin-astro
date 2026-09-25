// I verbi «di tutti i giorni» aggiunti alla lezione «I verbi degli animali» il 2026-09-25.
//
// Richiesta di Martin: la lezione deve insegnare verbi che si usano anche con le persone
// (nascere, morire, lavorare, aspettare, ridere, fare rumore...), non versi e mestieri che
// valgono solo per gli animali (gracidare, ruminare, razzolare...). Gli animali restano il mezzo
// simpatico: ogni foto mostra un animale che compie l'azione, e le frasi d'esempio mescolano
// animali e persone.
//
// Qui stanno l'attrezzo `verb` e i gruppi di animali (usati anche da verbs-vocabulary.mjs) e
// i verbi nuovi. Ogni voce:
//   image     nome del file in public/assets/vocabolario/verbi/ (senza estensione) e slug
//   word      il verbo all'infinito: e' lingua-oggetto e resta in italiano ovunque
//   gloss     l'infinito tradotto (ordine: en, es, fr, cs, pl, tr, de, ja); in italiano, una definizione
//   examples  tre frasi d'esempio, almeno una con una persona
//   subject   soggetto in inglese per la foto: un animale che compie l'azione
//   matches   gli animali (slug di animals-vocabulary.mjs) che compiono l'azione, o che le si
//             associano di solito: nella forma positiva basta trovarne UNO; nella forma negativa
//             e' giusto ogni animale che NON compare qui, quindi gli animali dubbi vanno messi qui
//   never     solo per la forma negativa: animali che chiaramente NON possono farlo
//   noMatch   verbi che fanno tutti gli animali (nascere, morire, guardare...): hanno la scheda
//             ma non la riga negli esercizi
//
// Regola delle immagini (2026-09-07): niente carne, niente prede, niente uova, niente miele.

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

export const verb = (image, word, def, glosses, examples, subject, matches, never = [], options = {}) => ({
  image: `verbi/${image}`,
  slug: image,
  word,
  bare: word,
  examples,
  subject,
  matches,
  never,
  noMatch: Boolean(options.noMatch),
  gloss: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, i === 0 ? def : glosses[i - 1]])),
});

export const BIRDS = [
  'aquila',
  'gufo',
  'pappagallo',
  'pinguino',
  'cigno',
  'pavone',
  'gallo',
  'corvo',
  'struzzo',
  'anatra',
  'gallina',
  'colomba',
  'rondine',
  'pellicano',
  'fenicottero',
  'cicogna',
  'gabbiano',
  'picchio',
  'colibri',
  'usignolo',
  'falco',
  'tucano',
];

export const MAMMALS = [
  'cane',
  'gatto',
  'cavallo',
  'mucca',
  'maiale',
  'pecora',
  'asino',
  'coniglio',
  'topo',
  'leone',
  'tigre',
  'ghepardo',
  'elefante',
  'giraffa',
  'ippopotamo',
  'scimmia',
  'gorilla',
  'orso',
  'panda',
  'lupo',
  'volpe',
  'scoiattolo',
  'bradipo',
  'canguro',
  'delfino',
  'balena',
  'castoro',
  'talpa',
  'riccio',
  'pipistrello',
  'zebra',
  'rinoceronte',
  'cammello',
  'lama',
  'koala',
  'marmotta',
  'criceto',
  'foca',
  'lontra',
  'cervo',
  'capra',
  'iena',
  'leopardo',
  'scimpanze',
  'formichiere',
  'suricato',
  'cinghiale',
  'orca',
];

// Animali senza polmoni o senza naso: per i verbi del corpo (sbadigliare, russare, starnutire...)
// sono le risposte «chiaramente no».
const NO_BREATH = [
  'medusa',
  'stella-marina',
  'formica',
  'ape',
  'ragno',
  'farfalla',
  'libellula',
  'zanzara',
  'coccinella',
  'lucciola',
  'cavalletta',
  'bruco',
  'scorpione',
  'polpo',
  'granchio',
  'lumaca',
];

const NM = { noMatch: true };

export const everydayVerbs = [
  // --- vita e corpo ------------------------------------------------------------------
  verb(
    'nascere',
    'nascere',
    'Venire al mondo.',
    ['to be born', 'nacer', 'naître', 'narodit se', 'urodzić się', 'doğmak', 'geboren werden', '生まれる'],
    ['Il cucciolo nasce in primavera.', 'Mio nipote è nato ieri.', 'Il piccolo della giraffa nasce in piedi.'],
    'a newborn baby giraffe standing on wobbly long legs in a meadow, tender scene, whole animal visible, on a plain pure white background with no ground, grass or sand, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'crescere',
    'crescere',
    'Diventare più grande.',
    ['to grow', 'crecer', 'grandir', 'růst', 'rosnąć', 'büyümek', 'wachsen', '成長する'],
    ['Il cucciolo cresce in fretta.', 'I bambini crescono molto in fretta.', 'Le piante crescono con la pioggia.'],
    'three stages of the same tabby cat side by side in a row: a tiny kitten, a young cat and a big adult cat, all three fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'vivere',
    'vivere',
    'Avere la vita; abitare in un posto.',
    ['to live', 'vivir', 'vivre', 'žít', 'żyć', 'yaşamak', 'leben', '生きる'],
    ['Il pinguino vive al Polo Sud.', 'Vivo in una piccola città.', 'Mia nonna vive con noi.'],
    'a family of meerkats sitting together at the entrance of their burrow in the desert, all fully visible, on a plain pure white background with no ground, grass or sand, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'morire',
    'morire',
    'Finire di vivere.',
    ['to die', 'morir', 'mourir', 'zemřít', 'umrzeć', 'ölmek', 'sterben', '死ぬ'],
    ['Il fiore muore senza acqua.', 'Mio nonno è morto molti anni fa.', 'La farfalla vive pochi giorni e poi muore.'],
    'a single butterfly with folded wings resting motionless on a fallen brown autumn leaf, gentle melancholy scene, whole butterfly visible',
    [],
    [],
    NM
  ),
  verb(
    'svegliarsi',
    'svegliarsi',
    'Smettere di dormire.',
    ['to wake up', 'despertarse', 'se réveiller', 'probudit se', 'obudzić się', 'uyanmak', 'aufwachen', '目を覚ます'],
    ['Il gatto si sveglia all’alba.', 'Mi sveglio alle sette.', 'I bambini si svegliano presto la domenica.'],
    'a sleepy dog waking up, lifting its head with one eye open and messy fur, lying in its bed, whole dog visible',
    [],
    [],
    NM
  ),
  verb(
    'addormentarsi',
    'addormentarsi',
    'Cominciare a dormire.',
    ['to fall asleep', 'dormirse', 's’endormir', 'usnout', 'zasnąć', 'uykuya dalmak', 'einschlafen', '眠りにつく'],
    [
      'Il cucciolo si addormenta in braccio a me.',
      'Mi addormento subito dopo cena.',
      'La bambina si addormenta con la musica.',
    ],
    'a puppy nodding off with heavy eyelids and its head drooping, almost asleep, sitting up, whole puppy visible',
    [],
    [],
    NM
  ),
  verb(
    'sognare',
    'sognare',
    'Vedere immagini nella mente mentre si dorme; desiderare qualcosa.',
    ['to dream', 'soñar', 'rêver', 'snít', 'śnić', 'rüya görmek', 'träumen', '夢を見る'],
    ['Il cane sogna e muove le zampe.', 'Stanotte ho sognato il mare.', 'Sogno di viaggiare in Giappone.'],
    'a sleeping dog with twitching paws smiling in its dream, a soft cloud-shaped dream bubble above it showing a red ball, whole dog visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'respirare',
    'respirare',
    'Prendere e mandare fuori l’aria.',
    ['to breathe', 'respirar', 'respirer', 'dýchat', 'oddychać', 'nefes almak', 'atmen', '呼吸する'],
    [
      'Il cavallo respira e fa nuvole di vapore.',
      'Respiro lentamente per calmarmi.',
      'In montagna l’aria è pulita e si respira bene.',
    ],
    'a horse breathing out a big cloud of steam on a cold winter morning, side view, whole horse visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'sbadigliare',
    'sbadigliare',
    'Aprire tanto la bocca perché si ha sonno o ci si annoia.',
    ['to yawn', 'bostezar', 'bâiller', 'zívat', 'ziewać', 'esnemek', 'gähnen', 'あくびをする'],
    [
      'L’ippopotamo sbadiglia con la bocca enorme.',
      'Sbadiglio: ho sonno.',
      'Il professore sbadiglia durante la riunione.',
    ],
    'a hippopotamus yawning with its mouth wide open and sleepy eyes, whole animal visible',
    [
      ...MAMMALS,
      ...BIRDS,
      'serpente',
      'cobra',
      'coccodrillo',
      'iguana',
      'tartaruga',
      'lucertola',
      'drago-di-komodo',
      'camaleonte',
      'pesce-rosso',
      'pesce-pagliaccio',
      'squalo',
      'rana',
      'rospo',
    ],
    NO_BREATH
  ),
  verb(
    'russare',
    'russare',
    'Fare rumore con il naso e con la gola mentre si dorme.',
    ['to snore', 'roncar', 'ronfler', 'chrápat', 'chrapać', 'horlamak', 'schnarchen', 'いびきをかく'],
    ['Il bulldog russa quando dorme.', 'Mio marito russa tutta la notte.', 'Se russi, non riesco a dormire.'],
    'a bulldog sleeping deeply on its back with its mouth slightly open, snoring, whole dog visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    MAMMALS,
    [
      'medusa',
      'stella-marina',
      'formica',
      'ape',
      'ragno',
      'farfalla',
      'pesce-rosso',
      'serpente',
      'rana',
      'gabbiano',
      'pinguino',
    ]
  ),
  verb(
    'starnutire',
    'starnutire',
    'Far uscire l’aria dal naso all’improvviso, con rumore.',
    ['to sneeze', 'estornudar', 'éternuer', 'kýchat', 'kichać', 'hapşırmak', 'niesen', 'くしゃみをする'],
    [
      'Il gattino starnutisce quando annusa il polline.',
      'Starnutisco perché ho il raffreddore.',
      'La nonna starnutisce forte.',
    ],
    'a kitten mid-sneeze with eyes squeezed shut and a tiny spray of droplets, funny, whole kitten visible',
    MAMMALS
  ),
  verb(
    'piangere',
    'piangere',
    'Avere le lacrime agli occhi perché si è tristi o si sente dolore.',
    ['to cry', 'llorar', 'pleurer', 'plakat', 'płakać', 'ağlamak', 'weinen', '泣く'],
    ['Il cucciolo piange quando resta solo.', 'Il bambino piange perché è caduto.', 'Ho pianto guardando quel film.'],
    'a baby elephant with a tear rolling down its cheek and a sad expression, whole elephant visible',
    [],
    [],
    NM
  ),
  verb(
    'sorridere',
    'sorridere',
    'Fare un sorriso con la bocca.',
    ['to smile', 'sonreír', 'sourire', 'usmívat se', 'uśmiechać się', 'gülümsemek', 'lächeln', '微笑む'],
    ['Il delfino sembra sorridere.', 'Mia madre sorride sempre.', 'Sorridi: ti faccio una foto!'],
    'a smiling dolphin jumping slightly out of the water with a wide friendly smile, whole dolphin visible',
    ['delfino', 'cane', 'scimmia', 'scimpanze', 'panda', 'koala', 'lontra', 'foca', 'cavallo']
  ),

  // --- movimento -----------------------------------------------------------------------
  verb(
    'sedersi',
    'sedersi',
    'Appoggiare il sedere su una sedia o per terra.',
    ['to sit down', 'sentarse', 's’asseoir', 'sednout si', 'usiąść', 'oturmak', 'sich setzen', '座る'],
    ['Il cane si siede quando glielo dico.', 'Mi siedo sul divano.', 'Si sieda, prego!'],
    'a dog in the middle of sitting down, hind legs bending, front legs straight, obedient look, whole dog visible',
    [
      'cane',
      'gatto',
      'scimmia',
      'gorilla',
      'scimpanze',
      'orso',
      'panda',
      'coniglio',
      'scoiattolo',
      'suricato',
      'koala',
      'criceto',
      'topo',
      'lupo',
      'volpe',
      'leone',
      'tigre',
      'canguro',
      'marmotta',
      'ghepardo',
      'leopardo',
      'bradipo',
      'iena',
      'castoro',
      'lontra',
      'formichiere',
      'rana',
      'rospo',
    ]
  ),
  verb(
    'alzarsi',
    'alzarsi',
    'Passare dalla posizione seduta o sdraiata a quella in piedi.',
    ['to get up', 'levantarse', 'se lever', 'vstát', 'wstać', 'ayağa kalkmak', 'aufstehen', '立ち上がる'],
    ['Il cavallo si alza dopo aver dormito.', 'Mi alzo alle sette ogni mattina.', 'Alzati, è tardi!'],
    'a horse getting up from lying down, front legs pushed forward, mid-motion, whole horse visible',
    [],
    [],
    NM
  ),
  verb(
    'sdraiarsi',
    'sdraiarsi',
    'Mettersi con il corpo disteso.',
    ['to lie down', 'tumbarse', 's’allonger', 'lehnout si', 'położyć się', 'uzanmak', 'sich hinlegen', '横になる'],
    ['Il gatto si sdraia al sole.', 'Mi sdraio sul divano dopo pranzo.', 'Il cane si sdraia ai miei piedi.'],
    'a cat lying stretched out on its side relaxing on a sunny patch of floor, whole cat visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'cadere',
    'cadere',
    'Andare giù da un punto alto senza volerlo.',
    ['to fall', 'caer', 'tomber', 'padat', 'spadać', 'düşmek', 'fallen', '落ちる'],
    ['Il gattino cade dal divano.', 'Le foglie cadono in autunno.', 'Sono caduto dalle scale.'],
    'a kitten falling upside down in mid-air with legs spread and startled eyes, above a soft pillow, whole kitten visible',
    [],
    [],
    NM
  ),
  verb(
    'inciampare',
    'inciampare',
    'Toccare qualcosa con il piede e perdere l’equilibrio.',
    ['to trip', 'tropezar', 'trébucher', 'zakopnout', 'potknąć się', 'tökezlemek', 'stolpern', 'つまずく'],
    ['Il cucciolo inciampa nelle sue zampe.', 'Sono inciampato nel tappeto.', 'Attenzione, non inciampare!'],
    'a clumsy puppy tripping over its own big paws in mid-stumble with comical surprise, whole puppy visible',
    [],
    [],
    NM
  ),
  verb(
    'dondolarsi',
    'dondolarsi',
    'Muoversi avanti e indietro, appesi o seduti.',
    ['to swing', 'columpiarse', 'se balancer', 'houpat se', 'huśtać się', 'sallanmak', 'schaukeln', '揺れる'],
    [
      'Lo scimpanzé si dondola da un ramo all’altro.',
      'I bambini si dondolano sull’altalena.',
      'Il bradipo si dondola piano sul ramo.',
    ],
    'a chimpanzee swinging from a jungle vine with one arm stretched out, mid-swing, whole animal visible',
    ['scimmia', 'scimpanze', 'gorilla', 'bradipo', 'koala', 'pipistrello']
  ),
  verb(
    'spingere',
    'spingere',
    'Fare forza per far muovere qualcosa.',
    ['to push', 'empujar', 'pousser', 'tlačit', 'pchać', 'itmek', 'schieben', '押す'],
    [
      'L’elefante spinge un tronco d’albero.',
      'Spingo il carrello del supermercato.',
      'Non spingere: c’è posto per tutti!',
    ],
    'an elephant pushing a large log forward with its forehead, side view, whole elephant visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['elefante', 'rinoceronte', 'cinghiale', 'ippopotamo', 'orso', 'capra', 'cane']
  ),
  verb(
    'tirare',
    'tirare',
    'Fare forza per portare qualcosa verso di sé.',
    ['to pull', 'tirar', 'tirer', 'táhnout', 'ciągnąć', 'çekmek', 'ziehen', '引く'],
    ['Il cavallo tira il carretto.', 'Tiro la corda con tutte e due le mani.', 'Il cane tira il guinzaglio.'],
    'a strong horse pulling a small wooden cart along a country path, side view, whole horse and cart visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['cavallo', 'asino', 'cane', 'elefante', 'mucca', 'formica', 'castoro', 'lama', 'cammello']
  ),
  verb(
    'lanciare',
    'lanciare',
    'Mandare qualcosa lontano con un movimento del braccio.',
    ['to throw', 'lanzar', 'lancer', 'hodit', 'rzucać', 'fırlatmak', 'werfen', '投げる'],
    ['Lo scimpanzé lancia una palla.', 'Il ragazzo lancia la palla al cane.', 'Lancio la moneta per decidere.'],
    'a chimpanzee winding up to throw a small red ball overhand, whole animal visible',
    ['scimmia', 'scimpanze', 'gorilla', 'elefante']
  ),
  verb(
    'afferrare',
    'afferrare',
    'Prendere qualcosa e tenerlo forte.',
    ['to grab', 'agarrar', 'saisir', 'chytit', 'chwycić', 'yakalamak', 'greifen', 'つかむ'],
    ['La scimmia afferra il ramo.', 'Afferro la maniglia e apro la porta.', 'Il cane afferra la palla al volo.'],
    'a monkey grabbing a hanging rope with both hands, mid-motion, whole animal visible',
    [
      'scimmia',
      'scimpanze',
      'gorilla',
      'cane',
      'koala',
      'bradipo',
      'camaleonte',
      'pappagallo',
      'aquila',
      'falco',
      'orso',
      'gatto',
    ]
  ),
  verb(
    'inseguire',
    'inseguire',
    'Correre dietro a qualcuno o a qualcosa per prenderlo.',
    ['to chase', 'perseguir', 'poursuivre', 'honit', 'gonić', 'kovalamak', 'jagen', '追いかける'],
    ['Il cucciolo insegue la farfalla.', 'I bambini inseguono il cane.', 'La polizia insegue il ladro.'],
    'a puppy chasing a butterfly across a meadow, running with joyful eyes, whole puppy and butterfly visible, on a plain pure white background with no ground, grass or sand, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['cane', 'gatto', 'ghepardo', 'leone', 'tigre', 'lupo', 'volpe', 'falco', 'aquila', 'leopardo', 'cavallo']
  ),
  verb(
    'seguire',
    'seguire',
    'Andare dietro a qualcuno.',
    ['to follow', 'seguir', 'suivre', 'následovat', 'podążać', 'takip etmek', 'folgen', 'ついていく'],
    ['I paperotti seguono la mamma.', 'Il cane segue il padrone dappertutto.', 'Seguimi: conosco la strada!'],
    'a mother duck walking with a line of five ducklings following her in single file, whole family visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['anatra', 'cane', 'pecora', 'pinguino', 'formica', 'elefante', 'gallina', 'cigno', 'lupo']
  ),
  verb(
    'fermarsi',
    'fermarsi',
    'Smettere di muoversi.',
    ['to stop', 'pararse', 's’arrêter', 'zastavit se', 'zatrzymać się', 'durmak', 'anhalten', '止まる'],
    ['Il cervo si ferma e ascolta.', 'Il treno si ferma in stazione.', 'Fermati! C’è il semaforo rosso!'],
    'a young deer freezing mid-step with one front hoof raised and ears alert, whole deer visible',
    [],
    [],
    NM
  ),
  verb(
    'partire',
    'partire',
    'Andare via da un luogo per andare in un altro.',
    ['to leave', 'partir', 'partir', 'odjet', 'wyjechać', 'yola çıkmak', 'abreisen', '出発する'],
    ['La rondine parte per l’Africa.', 'Domani parto per Napoli.', 'Il treno parte tra cinque minuti.'],
    'a swallow taking off from a branch with wings spread, ready to leave, whole bird visible',
    [],
    [],
    NM
  ),
  verb(
    'arrivare',
    'arrivare',
    'Raggiungere il posto dove si voleva andare.',
    ['to arrive', 'llegar', 'arriver', 'přijet', 'przybyć', 'varmak', 'ankommen', '到着する'],
    ['La lumaca arriva per ultima.', 'Il treno arriva alle otto.', 'Arrivo a casa tra dieci minuti.'],
    'a garden snail slowly crossing a plain red ribbon with no text or letters on it, victorious tiny snail, whole snail visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'tornare',
    'tornare',
    'Andare di nuovo nel posto da cui si era partiti.',
    ['to return', 'volver', 'revenir', 'vrátit se', 'wracać', 'geri dönmek', 'zurückkehren', '帰る'],
    ['Il cane torna a casa da solo.', 'Torno a casa alle sei.', 'Le rondini tornano in primavera.'],
    'a happy dog running back home toward a small wooden doghouse with a wagging tail, whole dog visible',
    [],
    [],
    NM
  ),
  verb(
    'entrare',
    'entrare',
    'Andare dentro un luogo.',
    ['to enter', 'entrar', 'entrer', 'vejít', 'wejść', 'girmek', 'eintreten', '入る'],
    ['Il gatto entra dalla finestra.', 'Entro in ufficio alle nove.', 'Posso entrare?'],
    'a cat entering through a small cat flap in a wooden door, half through, whole cat visible',
    [],
    [],
    NM
  ),
  verb(
    'uscire',
    'uscire',
    'Andare fuori da un luogo.',
    ['to go out', 'salir', 'sortir', 'vyjít', 'wyjść', 'çıkmak', 'hinausgehen', '出る'],
    ['Il coniglio esce dalla tana.', 'Esco di casa alle otto.', 'Stasera esco con gli amici.'],
    'a rabbit emerging from its burrow hole in the ground, head and front paws out, whole rabbit visible',
    [],
    [],
    NM
  ),
  verb(
    'salire',
    'salire',
    'Andare verso l’alto.',
    ['to go up', 'subir', 'monter', 'vystoupat', 'wchodzić', 'yukarı çıkmak', 'hinaufgehen', '上がる'],
    ['La capra sale sulla montagna.', 'Salgo le scale a piedi.', 'Il gatto sale sull’albero.'],
    'a goat walking up a set of wooden stairs, mid-step, whole goat visible',
    ['capra', 'cane', 'gatto', 'cavallo', 'scimmia', 'scoiattolo']
  ),
  verb(
    'scendere',
    'scendere',
    'Andare verso il basso.',
    ['to go down', 'bajar', 'descendre', 'sestoupit', 'schodzić', 'aşağı inmek', 'hinuntergehen', '降りる'],
    [
      'Lo scoiattolo scende dall’albero a testa in giù.',
      'Scendo dall’autobus alla prossima fermata.',
      'La temperatura scende di notte.',
    ],
    'a squirrel climbing down a tree trunk headfirst, gripping the bark, whole squirrel visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'attraversare',
    'attraversare',
    'Andare da una parte all’altra.',
    ['to cross', 'cruzar', 'traverser', 'přejít', 'przechodzić', 'karşıdan karşıya geçmek', 'überqueren', '渡る'],
    [
      'L’anatra attraversa la strada con i piccoli.',
      'Attraverso la strada sulle strisce.',
      'Il fiume attraversa la città.',
    ],
    'a mother duck and ducklings crossing a road on a zebra crossing, side view, whole family visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
  verb(
    'stiracchiarsi',
    'stiracchiarsi',
    'Allungare braccia e gambe, per esempio dopo aver dormito.',
    [
      'to stretch',
      'estirarse',
      's’étirer',
      'protahovat se',
      'przeciągać się',
      'gerinmek',
      'sich strecken',
      '伸びをする',
    ],
    ['Il gatto si stiracchia sul divano.', 'Mi stiracchio appena mi sveglio.', 'Il cane si stiracchia dopo il sonno.'],
    'a cat stretching with front legs extended forward and rear end up in a big stretch, whole cat visible',
    ['gatto', 'cane', 'leone', 'tigre', 'ghepardo', 'leopardo', 'orso', 'cavallo', 'scimmia', 'lupo', 'volpe']
  ),
  verb(
    'scuotersi',
    'scuotersi',
    'Muovere forte il corpo per togliere acqua o polvere.',
    [
      'to shake off',
      'sacudirse',
      'se secouer',
      'otřást se',
      'otrząsnąć się',
      'silkelenmek',
      'sich schütteln',
      '体を振る',
    ],
    ['Il cane si scuote dopo il bagno.', 'Mi scuoto la neve dal cappotto.', 'Il gatto si scuote e se ne va.'],
    'a wet dog shaking its whole body vigorously with water droplets flying in a circle around it, whole dog visible',
    ['cane', 'gatto', 'lupo', 'orso', 'cavallo', 'leone', 'tigre', 'volpe', 'coniglio', 'elefante', 'anatra']
  ),

  // --- sensi e mente ---------------------------------------------------------------------
  verb(
    'guardare',
    'guardare',
    'Rivolgere gli occhi verso qualcosa.',
    ['to look at', 'mirar', 'regarder', 'dívat se', 'patrzeć', 'bakmak', 'anschauen', '見る'],
    ['Il gatto guarda fuori dalla finestra.', 'Guardo la TV la sera.', 'Guarda che bel tramonto!'],
    'a cat sitting and looking upward intently at something above it, whole cat visible',
    [],
    [],
    NM
  ),
  verb(
    'osservare',
    'osservare',
    'Guardare con attenzione per capire.',
    ['to observe', 'observar', 'observer', 'pozorovat', 'obserwować', 'gözlemlemek', 'beobachten', '観察する'],
    [
      'Lo scimpanzé osserva una foglia da vicino.',
      'Il bambino osserva le formiche.',
      'Osservo il cielo con il telescopio.',
    ],
    'a chimpanzee peering closely at a small leaf held between its fingers with a curious expression, whole animal visible',
    [],
    [],
    NM
  ),
  verb(
    'ascoltare',
    'ascoltare',
    'Sentire con attenzione.',
    ['to listen', 'escuchar', 'écouter', 'poslouchat', 'słuchać', 'dinlemek', 'zuhören', '聞く'],
    [
      'Il coniglio ascolta con le orecchie dritte.',
      'Ascolto la musica in cuffia.',
      'Ascolta bene: ti spiego la regola.',
    ],
    'a rabbit sitting upright with both long ears pointing straight up, listening carefully, whole rabbit visible',
    ['coniglio', 'gufo', 'cervo', 'pipistrello', 'cane', 'gatto', 'elefante', 'volpe', 'suricato']
  ),
  verb(
    'cercare',
    'cercare',
    'Guardare in giro per trovare qualcosa.',
    ['to look for', 'buscar', 'chercher', 'hledat', 'szukać', 'aramak', 'suchen', '探す'],
    ['Il cane cerca la sua palla.', 'Cerco le chiavi di casa.', 'Il topo cerca un posto per nascondersi.'],
    'a puppy looking under a sofa searching, front half bent low, tail up, whole puppy visible',
    [],
    [],
    NM
  ),
  verb(
    'trovare',
    'trovare',
    'Scoprire qualcosa che si cercava.',
    ['to find', 'encontrar', 'trouver', 'najít', 'znaleźć', 'bulmak', 'finden', '見つける'],
    ['Il cane trova la palla sotto il divano.', 'Ho trovato le chiavi!', 'Non trovo il mio telefono.'],
    'a puppy proudly holding a found red ball in its mouth with triumphant eyes, whole puppy visible',
    [],
    [],
    NM
  ),
  verb(
    'pensare',
    'pensare',
    'Usare la mente per capire, ricordare o decidere.',
    ['to think', 'pensar', 'penser', 'myslet', 'myśleć', 'düşünmek', 'denken', '考える'],
    ['Lo scimpanzé pensa prima di scegliere.', 'Penso a te ogni giorno.', 'Cosa pensi del nuovo film?'],
    'a chimpanzee with one hand on its chin looking upward thoughtfully, whole animal visible',
    [],
    [],
    NM
  ),
  verb(
    'imparare',
    'imparare',
    'Conoscere una cosa nuova.',
    ['to learn', 'aprender', 'apprendre', 'učit se', 'uczyć się', 'öğrenmek', 'lernen', '学ぶ'],
    ['Il cucciolo impara a stare seduto.', 'Imparo l’italiano da due anni.', 'Il pappagallo impara parole nuove.'],
    'a young owlet looking at an open picture book with wide curious eyes, whole owlet and book visible',
    ['cane', 'pappagallo', 'delfino', 'corvo', 'scimmia', 'scimpanze', 'elefante', 'gatto', 'cavallo', 'topo']
  ),

  // --- stare con gli altri ---------------------------------------------------------------
  verb(
    'aiutare',
    'aiutare',
    'Fare qualcosa per rendere la vita più facile a un altro.',
    ['to help', 'ayudar', 'aider', 'pomáhat', 'pomagać', 'yardım etmek', 'helfen', '助ける'],
    ['L’elefante aiuta il piccolo a uscire dal fango.', 'Aiuto mia madre in cucina.', 'Puoi aiutarmi, per favore?'],
    'an adult elephant helping a baby elephant climb out of a muddy bank with its trunk, both fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['elefante', 'delfino', 'cane', 'formica', 'ape', 'scimmia', 'lupo', 'suricato', 'scimpanze']
  ),
  verb(
    'proteggere',
    'proteggere',
    'Difendere qualcuno dal pericolo.',
    ['to protect', 'proteger', 'protéger', 'chránit', 'chronić', 'korumak', 'beschützen', '守る'],
    ['L’orsa protegge i suoi cuccioli.', 'Il cane protegge la casa.', 'Il casco protegge la testa.'],
    'a mother bear standing protectively in front of two cubs, alert and calm, whole bears visible',
    ['orso', 'cane', 'elefante', 'gallina', 'cigno', 'canguro', 'lupo', 'gorilla', 'leone', 'pinguino', 'mucca']
  ),
  verb(
    'condividere',
    'condividere',
    'Dare una parte agli altri, o usare qualcosa insieme.',
    ['to share', 'compartir', 'partager', 'sdílet', 'dzielić się', 'paylaşmak', 'teilen', '分かち合う'],
    [
      'Lo scoiattolo condivide una nocciola con l’amico.',
      'Condivido l’appartamento con due amici.',
      'Ho condiviso la foto sui social.',
    ],
    'two squirrels sitting side by side each holding half of a nut, sharing, both fully visible',
    ['scoiattolo', 'scimmia', 'scimpanze', 'lupo', 'suricato', 'pipistrello', 'formica', 'ape', 'elefante']
  ),
  verb(
    'litigare',
    'litigare',
    'Discutere con rabbia con un’altra persona.',
    ['to argue', 'discutir', 'se disputer', 'hádat se', 'kłócić się', 'tartışmak', 'streiten', 'けんかする'],
    ['I due gatti litigano per il cuscino.', 'Ho litigato con mio fratello.', 'I vicini litigano ogni giorno.'],
    'two cats facing each other hissing with puffed-up fur and arched backs, both fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [
      'gatto',
      'cane',
      'gallo',
      'scimmia',
      'pappagallo',
      'gabbiano',
      'cigno',
      'cavallo',
      'leone',
      'lupo',
      'ippopotamo',
      'gorilla',
    ]
  ),
  verb(
    'fare-pace',
    'fare pace',
    'Tornare amici dopo una lite.',
    [
      'to make up',
      'hacer las paces',
      'faire la paix',
      'udělat mír',
      'pogodzić się',
      'barışmak',
      'sich versöhnen',
      '仲直りする',
    ],
    ['I due cani fanno pace e giocano di nuovo.', 'Facciamo pace: mi dispiace!', 'Marco e Luca hanno fatto pace.'],
    'two dogs touching noses with one paw resting on the other, a reconciled friendly moment, both fully visible',
    [],
    [],
    NM
  ),
  verb(
    'baciare',
    'baciare',
    'Toccare con le labbra per affetto.',
    ['to kiss', 'besar', 'embrasser', 'líbat', 'całować', 'öpmek', 'küssen', 'キスする'],
    ['I due cigni si baciano con il becco.', 'Bacio mia figlia sulla guancia.', 'Si sono baciati sotto la pioggia.'],
    'two swans facing each other with their necks curved forming a heart shape and beaks touching, both fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['cigno', 'colomba', 'pinguino', 'giraffa', 'delfino', 'cane', 'scimpanze', 'elefante']
  ),
  verb(
    'salutare',
    'salutare',
    'Dire ciao con la voce o con la mano.',
    ['to greet', 'saludar', 'saluer', 'zdravit', 'witać się', 'selamlamak', 'begrüßen', '挨拶する'],
    ['Il pinguino saluta con la pinna.', 'Saluto sempre i vicini.', 'Il commesso ci saluta con un sorriso.'],
    'a penguin waving one flipper cheerfully as if saying hello, whole penguin visible',
    ['pinguino', 'scimmia', 'scimpanze', 'cane', 'elefante', 'foca', 'pappagallo', 'delfino']
  ),
  verb(
    'innamorarsi',
    'innamorarsi',
    'Cominciare a voler bene a qualcuno in modo romantico.',
    [
      'to fall in love',
      'enamorarse',
      'tomber amoureux',
      'zamilovat se',
      'zakochać się',
      'aşık olmak',
      'sich verlieben',
      '恋に落ちる',
    ],
    [
      'I due pinguini si innamorano e restano insieme.',
      'Mi sono innamorato di Roma.',
      'Marta si è innamorata di un collega.',
    ],
    'two penguins standing close facing each other with small red hearts floating above them, both fully visible',
    [],
    [],
    NM
  ),
  verb(
    'divertirsi',
    'divertirsi',
    'Passare un bel momento.',
    ['to have fun', 'divertirse', 's’amuser', 'bavit se', 'bawić się', 'eğlenmek', 'Spaß haben', '楽しむ'],
    ['Le lontre si divertono a scivolare.', 'Ci divertiamo al parco giochi.', 'Buon divertimento: divertiti!'],
    'two otters sliding down a muddy riverbank slide having fun, both fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['lontra', 'delfino', 'cane', 'scimmia', 'pinguino', 'foca', 'elefante', 'scoiattolo']
  ),

  // --- la voce ---------------------------------------------------------------------------
  verb(
    'chiamare',
    'chiamare',
    'Dire il nome di qualcuno per farlo venire; telefonare.',
    ['to call', 'llamar', 'appeler', 'volat', 'wołać', 'çağırmak', 'rufen', '呼ぶ'],
    ['Il lupo chiama il branco.', 'Chiamo mia madre ogni domenica.', 'Ti chiamo appena arrivo.'],
    'a wolf howling with its head raised toward the sky as if calling its pack, whole wolf visible',
    ['lupo', 'elefante', 'balena', 'delfino', 'gallo', 'pappagallo', 'gatto', 'cane', 'usignolo', 'pinguino']
  ),
  verb(
    'urlare',
    'urlare',
    'Parlare o gridare a voce molto alta.',
    ['to shout', 'gritar', 'crier', 'křičet', 'krzyczeć', 'bağırmak', 'schreien', '叫ぶ'],
    ['La scimmia urla sull’albero.', 'Non urlare: il bambino dorme!', 'Il tifoso urla per la sua squadra.'],
    'a howler monkey shouting with its mouth wide open on a branch, whole monkey visible',
    [
      'scimmia',
      'scimpanze',
      'gorilla',
      'lupo',
      'gallo',
      'pappagallo',
      'leone',
      'gabbiano',
      'corvo',
      'iena',
      'maiale',
      'cane',
    ]
  ),
  verb(
    'sussurrare',
    'sussurrare',
    'Parlare a voce molto bassa.',
    ['to whisper', 'susurrar', 'chuchoter', 'šeptat', 'szeptać', 'fısıldamak', 'flüstern', 'ささやく'],
    [
      'Il topolino sussurra qualcosa all’orecchio del coniglio.',
      'Mia figlia mi sussurra un segreto.',
      'Sussurra, per favore: il bambino dorme.',
    ],
    'a small mouse whispering into the long ear of a rabbit, a secret, both fully visible',
    [],
    [],
    NM
  ),
  verb(
    'fare-rumore',
    'fare rumore',
    'Produrre un suono forte e fastidioso.',
    [
      'to make noise',
      'hacer ruido',
      'faire du bruit',
      'dělat hluk',
      'hałasować',
      'gürültü yapmak',
      'Lärm machen',
      '音を立てる',
    ],
    ['Il pappagallo fa rumore tutto il giorno.', 'I vicini fanno rumore di notte.', 'Non fare rumore: papà dorme!'],
    'a monkey banging two brass cymbals together loudly, whole monkey visible',
    [
      'pappagallo',
      'gallo',
      'scimmia',
      'picchio',
      'cane',
      'rana',
      'asino',
      'maiale',
      'gabbiano',
      'elefante',
      'cavalletta',
    ]
  ),

  // --- cura di sé, cibo -------------------------------------------------------------------
  verb(
    'lavarsi',
    'lavarsi',
    'Pulirsi con acqua e sapone.',
    ['to wash', 'lavarse', 'se laver', 'mýt se', 'myć się', 'yıkanmak', 'sich waschen', '体を洗う'],
    ['Il gatto si lava con la lingua.', 'Mi lavo le mani prima di mangiare.', 'La papera si lava nello stagno.'],
    'a duck taking a bubble bath in a small wooden tub covered with soap bubbles, whole duck visible',
    ['gatto', 'anatra', 'elefante', 'cane', 'castoro', 'lontra', 'ippopotamo', 'maiale', 'pappagallo', 'scoiattolo']
  ),
  verb(
    'pulire',
    'pulire',
    'Togliere lo sporco.',
    ['to clean', 'limpiar', 'nettoyer', 'uklízet', 'sprzątać', 'temizlemek', 'putzen', '掃除する'],
    [
      'Il topolino pulisce il pavimento con la scopa.',
      'Pulisco la cucina ogni sera.',
      'Il gatto pulisce il pelo con la lingua.',
    ],
    'a cute mouse sweeping the floor with a small broom, cheerful, whole mouse visible',
    [],
    [],
    NM
  ),
  verb(
    'grattarsi',
    'grattarsi',
    'Passare le unghie sulla pelle quando prude.',
    ['to scratch oneself', 'rascarse', 'se gratter', 'škrábat se', 'drapać się', 'kaşınmak', 'sich kratzen', 'かく'],
    ['Il cane si gratta l’orecchio con la zampa.', 'Mi gratto la testa quando penso.', 'Non grattarti: peggiora!'],
    'a dog sitting and scratching behind its ear with a hind leg, eyes half-closed with pleasure, whole dog visible',
    ['cane', 'gatto', 'scimmia', 'orso', 'gorilla', 'scimpanze', 'cavallo', 'maiale', 'koala', 'lupo']
  ),
  verb(
    'spaventarsi',
    'spaventarsi',
    'Provare paura all’improvviso.',
    ['to get scared', 'asustarse', 'avoir peur', 'lekat se', 'przestraszyć się', 'korkmak', 'erschrecken', '怖がる'],
    ['Il gatto si spaventa per un cetriolo.', 'Mi spavento con i tuoni.', 'I bambini si sono spaventati al buio.'],
    'a cat with fur standing on end jumping backwards in fright from a green cucumber on the floor, whole cat and cucumber visible',
    ['gatto', 'cavallo', 'cane', 'coniglio', 'topo', 'cervo', 'gallina', 'pecora']
  ),
  verb(
    'vergognarsi',
    'vergognarsi',
    'Sentirsi a disagio per qualcosa che si è fatto.',
    [
      'to be ashamed',
      'avergonzarse',
      'avoir honte',
      'stydět se',
      'wstydzić się',
      'utanmak',
      'sich schämen',
      '恥ずかしがる',
    ],
    [
      'Il cane si vergogna e nasconde la faccia.',
      'Mi vergogno: ho dimenticato il tuo nome.',
      'Non vergognarti: sbagliare è normale.',
    ],
    'a guilty dog hiding its face behind its front paws, ashamed, whole dog visible',
    [],
    [],
    NM
  ),
  verb(
    'riposarsi',
    'riposarsi',
    'Fermarsi per recuperare le forze.',
    ['to rest', 'descansar', 'se reposer', 'odpočívat si', 'odpoczywać', 'dinlenmek', 'sich ausruhen', '休む'],
    ['Il leone si riposa all’ombra.', 'Mi riposo un po’ dopo il lavoro.', 'Riposati: sei stanco!'],
    'a lion resting relaxed in the shade of a tree with eyes half closed, whole lion visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['leone', 'gatto', 'cane', 'tigre', 'ippopotamo', 'leopardo', 'orso', 'lupo']
  ),
  verb(
    'bere',
    'bere',
    'Mandare giù un liquido dalla bocca.',
    ['to drink', 'beber', 'boire', 'pít', 'pić', 'içmek', 'trinken', '飲む'],
    ['La giraffa si piega per bere.', 'Bevo un caffè la mattina.', 'Beviamo acqua a ogni pasto.'],
    'a giraffe bending its long neck and front legs down to drink from a waterhole, whole giraffe visible',
    [],
    [],
    NM
  ),
  verb(
    'dare-da-mangiare',
    'dare da mangiare',
    'Offrire cibo a qualcuno.',
    ['to feed', 'dar de comer', 'donner à manger', 'krmit', 'karmić', 'beslemek', 'füttern', '餌をやる'],
    [
      'La mamma uccello dà da mangiare ai piccoli.',
      'Do da mangiare al gatto due volte al giorno.',
      'Non dare da mangiare agli animali dello zoo!',
    ],
    'a mother bird feeding a red berry to a chick in a nest, both fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['rondine', 'colomba', 'cicogna', 'pellicano', 'pinguino', 'aquila', 'usignolo', 'picchio', 'tucano']
  ),

  // --- attività ------------------------------------------------------------------------------
  verb(
    'leggere',
    'leggere',
    'Guardare le parole scritte e capirle.',
    ['to read', 'leer', 'lire', 'číst', 'czytać', 'okumak', 'lesen', '読む'],
    ['Il gufo legge un libro grande.', 'Leggo il giornale ogni mattina.', 'Mia figlia legge prima di dormire.'],
    'a wise owl wearing small round glasses reading an open book, whole owl visible',
    [],
    [],
    NM
  ),
  verb(
    'dipingere',
    'dipingere',
    'Fare un disegno con i colori.',
    ['to paint', 'pintar', 'peindre', 'malovat', 'malować', 'boyamak', 'malen', '描く'],
    ['L’elefante dipinge con la proboscide.', 'Mio zio dipinge quadri di paesaggi.', 'Dipingo la parete di bianco.'],
    'an elephant holding a paintbrush with its trunk painting colourful strokes on a canvas on an easel, whole elephant visible',
    ['elefante', 'scimpanze']
  ),
  verb(
    'ballare',
    'ballare',
    'Muovere il corpo a tempo di musica.',
    ['to dance', 'bailar', 'danser', 'tančit', 'tańczyć', 'dans etmek', 'tanzen', '踊る'],
    [
      'I fenicotteri ballano tutti insieme.',
      'Ballo con i miei amici il sabato sera.',
      'Il pavone balla per conquistare la femmina.',
    ],
    'three pink flamingos dancing in synchrony in shallow water, necks raised and wings slightly open, all fully visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    ['fenicottero', 'pavone', 'pappagallo', 'pinguino', 'gallo', 'cicogna']
  ),
  verb(
    'vincere',
    'vincere',
    'Arrivare primo in una gara.',
    ['to win', 'ganar', 'gagner', 'vyhrát', 'wygrywać', 'kazanmak', 'gewinnen', '勝つ'],
    ['La tartaruga vince la gara.', 'La nostra squadra vince sempre.', 'Ho vinto un premio!'],
    'a tortoise wearing a gold medal around its neck crossing a finish line, proud, whole tortoise visible, the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges',
    [],
    [],
    NM
  ),
];
