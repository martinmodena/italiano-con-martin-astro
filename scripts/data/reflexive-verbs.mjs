// I verbi della lezione «I verbi riflessivi di tutti i giorni» (2026-11-12).
//
// Proposta a Martin («sarebbe bene fare una scheda di vocabolario con i verbi riflessivi, che pensi?»): sul sito
// c'era la lezione di grammatica A1 «I verbi riflessivi» (la forma) e circa 80 verbi riflessivi sparsi nelle
// altre lezioni di verbi, ma nessuna scheda che li raccogliesse. Questa li mette in sei gruppi con un titolo, in
// ordine logico (`reflexiveVerbGroups` in fondo): la giornata, il corpo e il movimento, le emozioni, insieme
// (i reciproci), la mente e i verbi che con il «si» cambiano significato (sentirsi, trovarsi, chiamarsi,
// perdersi, mettersi a, andarsene), che non c'erano da nessuna parte. Alcuni verbi si RIPETONO apposta
// (svegliarsi, alzarsi, vestirsi, lavarsi, sedersi, salutarsi, perdersi, farsi male...): sono il cuore del tema.
// Non ripete preoccuparsi e accorgersi, gia' nei verbi della mente.
//
// Esercizio come «I verbi della citta'» (`photoRows`): una foto per riga, i verbi nella barra; le coppie che una
// foto sola non distingue si accettano a vicenda in `fits`.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-riflessivi`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const rv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-riflessivi/${slug}`,
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

export const reflexiveVerbs = [
  // --- la giornata ------------------------------------------------------------------------------
  rv(
    'svegliarsi',
    'svegliarsi',
    'Smettere di dormire e aprire gli occhi.',
    ['to wake up', 'despertarse', 'se réveiller', 'probudit se', 'obudzić się', 'uyanmak', 'aufwachen', '目を覚ます'],
    ['Mi sveglio alle sette.', 'Stamattina mi sono svegliata tardi.', 'Svegliati, è ora di andare!'],
    'a young woman in long pyjamas sitting up in bed, just woken up, stretching her arms and yawning, an alarm clock on the bedside table',
    ['alzarsi']
  ),
  rv(
    'alzarsi',
    'alzarsi',
    'Uscire dal letto, o mettersi in piedi.',
    [
      'to get up, to stand up',
      'levantarse',
      'se lever',
      'vstát',
      'wstać',
      'kalkmak',
      'aufstehen',
      '起きる、立ち上がる',
    ],
    ['A che ora ti alzi?', 'Ci alziamo presto anche la domenica.', 'Si è alzato e ha aperto la finestra.'],
    'a man in long pyjamas getting out of bed in the morning, standing up from the edge of the bed and putting his feet into slippers',
    ['svegliarsi']
  ),
  rv(
    'lavarsi',
    'lavarsi',
    'Pulirsi con l’acqua e il sapone.',
    [
      'to wash (oneself)',
      'lavarse',
      'se laver',
      'umýt se',
      'umyć się',
      'yıkanmak',
      'sich waschen',
      '（体・手・顔を）洗う',
    ],
    ['Mi lavo le mani prima di mangiare.', 'Lavati la faccia!', 'I bambini si sono lavati i denti.'],
    'a boy washing his hands with lots of soap foam at a small bathroom sink, standing on a little stool',
    ['farsi-la-doccia']
  ),
  rv(
    'farsi-la-doccia',
    'farsi la doccia',
    'Lavarsi sotto l’acqua della doccia.',
    [
      'to have a shower',
      'ducharse',
      'se doucher, prendre une douche',
      'osprchovat se',
      'wziąć prysznic',
      'duş almak',
      'duschen',
      'シャワーを浴びる',
    ],
    ['Mi faccio la doccia la sera.', 'Si è fatta la doccia e si è vestita.', 'Faccio una doccia veloce e arrivo.'],
    'a woman in a long thick bathrobe with a towel wrapped around her hair, standing next to a shower cubicle with the water still running and steam',
    ['lavarsi']
  ),
  rv(
    'vestirsi',
    'vestirsi',
    'Mettersi i vestiti.',
    ['to get dressed', 'vestirse', 's’habiller', 'obléknout se', 'ubrać się', 'giyinmek', 'sich anziehen', '服を着る'],
    ['Mi vesto in cinque minuti.', 'Oggi si è vestita di blu.', 'Vestiti, usciamo!'],
    'a little boy sitting on his bed pulling a sweater over his head, his head just coming out of the collar, trousers and socks already on',
    ['prepararsi']
  ),
  rv(
    'prepararsi',
    'prepararsi',
    'Fare tutto quello che serve prima di uscire o prima di una cosa importante.',
    [
      'to get ready',
      'prepararse, arreglarse',
      'se préparer',
      'připravit se, nachystat se',
      'przygotować się, szykować się',
      'hazırlanmak',
      'sich fertig machen, sich vorbereiten',
      '支度をする、準備する',
    ],
    ['Mi preparo ed esco.', 'Ti sei preparato per l’esame?', 'Preparatevi: il treno parte tra dieci minuti!'],
    'a woman in a hallway in front of a mirror putting on her coat, her handbag and keys ready on a small table by the front door',
    ['vestirsi', 'sbrigarsi']
  ),
  rv(
    'sbrigarsi',
    'sbrigarsi',
    'Fare in fretta.',
    [
      'to hurry (up)',
      'darse prisa, apurarse',
      'se dépêcher',
      'pospíšit si',
      'pospieszyć się',
      'acele etmek',
      'sich beeilen',
      '急ぐ',
    ],
    ['Sbrigati, è tardi!', 'Ci siamo sbrigati e abbiamo preso il treno.', 'Se non ti sbrighi, perdiamo l’autobus.'],
    'a man in a suit walking very fast with a briefcase, looking anxiously at his wristwatch',
    ['prepararsi']
  ),
  rv(
    'addormentarsi',
    'addormentarsi',
    'Cominciare a dormire.',
    [
      'to fall asleep',
      'dormirse',
      's’endormir',
      'usnout',
      'zasnąć',
      'uykuya dalmak',
      'einschlafen',
      '寝つく、眠り込む',
    ],
    ['La sera mi addormento subito.', 'Il bambino si è addormentato sul divano.', 'Non riesco ad addormentarmi.'],
    'a small child fallen asleep on a sofa with an open picture book on his chest, eyes closed, a cushion under his head',
    ['sdraiarsi']
  ),
  // --- il corpo e il movimento ------------------------------------------------------------------
  rv(
    'sedersi',
    'sedersi',
    'Mettersi su una sedia, su una panchina o per terra.',
    ['to sit down', 'sentarse', 's’asseoir', 'sednout si', 'usiąść', 'oturmak', 'sich setzen, sich hinsetzen', '座る'],
    ['Si sieda, prego.', 'Mi siedo vicino alla finestra.', 'Ci siamo seduti su una panchina.'],
    'an elderly man with a walking stick in the act of sitting down on a park bench, one hand on the armrest',
    ['rilassarsi']
  ),
  rv(
    'sdraiarsi',
    'sdraiarsi',
    'Mettersi lunghi e distesi su un letto, su un divano o per terra.',
    [
      'to lie down',
      'tumbarse, acostarse',
      's’allonger',
      'lehnout si',
      'położyć się',
      'uzanmak',
      'sich hinlegen',
      '横になる',
    ],
    ['Mi sdraio un attimo sul divano.', 'Si è sdraiata sull’erba.', 'Sdraiati e respira piano.'],
    'a woman in a long-sleeved tracksuit lying on her back on a blanket on a small patch of grass, arms relaxed, looking at the sky',
    ['rilassarsi', 'addormentarsi']
  ),
  rv(
    'girarsi',
    'girarsi',
    'Muovere il corpo o la testa per guardare dietro o di lato.',
    [
      'to turn (around)',
      'girarse, darse la vuelta',
      'se retourner',
      'otočit se',
      'odwrócić się',
      'dönmek, arkasına bakmak',
      'sich umdrehen',
      '振り向く',
    ],
    ['Mi sono girato e l’ho visto.', 'Girati, c’è qualcuno dietro di te!', 'Quando la chiamo, non si gira.'],
    'a woman in a long loose knee-length coat walking away from the camera, her whole upper body twisted round to look back over her shoulder towards the viewer, her face visible in profile'
  ),
  rv(
    'fermarsi',
    'fermarsi',
    'Smettere di muoversi, di camminare o di andare avanti.',
    [
      'to stop',
      'pararse, detenerse',
      's’arrêter',
      'zastavit se',
      'zatrzymać się',
      'durmak',
      'stehen bleiben, anhalten',
      '止まる',
    ],
    ['Ci fermiamo a mangiare qualcosa?', 'Il treno si è fermato in galleria.', 'Fermati! Il semaforo è rosso.'],
    'a cyclist with a helmet braking and stopping with one foot on the ground just before a zebra crossing, while a woman crosses the street'
  ),
  rv(
    'avvicinarsi',
    'avvicinarsi',
    'Andare più vicino a qualcuno o a qualcosa.',
    [
      'to come closer, to approach',
      'acercarse',
      's’approcher',
      'přiblížit se',
      'zbliżyć się',
      'yaklaşmak',
      'sich nähern, näher kommen',
      '近づく',
    ],
    ['Avvicinati, così ti sento meglio.', 'Il gatto si è avvicinato piano piano.', 'Ci avviciniamo alla stazione.'],
    'a little girl crouching and moving slowly towards a cat sitting on the ground, reaching out her hand gently'
  ),
  rv(
    'nascondersi',
    'nascondersi',
    'Mettersi dove gli altri non ti vedono.',
    ['to hide', 'esconderse', 'se cacher', 'schovat se', 'schować się', 'saklanmak', 'sich verstecken', '隠れる'],
    ['Il bambino si nasconde dietro la porta.', 'Dove ti sei nascosto?', 'Il gatto si nasconde sotto il letto.'],
    'two children playing hide and seek: a girl hiding behind a big tree trunk, peeking out and smiling, while a boy in the distance covers his eyes and counts'
  ),
  rv(
    'farsi-male',
    'farsi male',
    'Sentire dolore dopo un colpo o una caduta.',
    [
      'to hurt oneself',
      'hacerse daño',
      'se faire mal',
      'udělat si bolest, zranit se',
      'zrobić sobie krzywdę',
      'bir yerini incitmek',
      'sich wehtun, sich verletzen',
      'けがをする',
    ],
    ['Ti sei fatto male?', 'Mi sono fatta male al ginocchio.', 'Attenzione, ti fai male!'],
    'a boy sitting on the pavement holding his knee with a pained face after falling off his scooter, his mother kneeling beside him to comfort him'
  ),
  // --- le emozioni ------------------------------------------------------------------------------
  rv(
    'arrabbiarsi',
    'arrabbiarsi',
    'Diventare nervosi e scontenti per qualcosa.',
    [
      'to get angry',
      'enfadarse, enojarse',
      'se fâcher, se mettre en colère',
      'rozzlobit se',
      'zdenerwować się, rozzłościć się',
      'sinirlenmek, kızmak',
      'sich ärgern, wütend werden',
      '怒る',
    ],
    [
      'Non arrabbiarti, era uno scherzo.',
      'Mio padre si è arrabbiato molto.',
      'Mi arrabbio quando qualcuno arriva tardi.',
    ],
    'a man red in the face with fury, eyebrows pulled down in a deep frown, teeth clenched, not smiling at all, pointing angrily at a muddy dog sitting on his clean white sofa'
  ),
  rv(
    'offendersi',
    'offendersi',
    'Sentirsi trattati male per quello che qualcuno ha detto o fatto.',
    [
      'to take offence, to get offended',
      'ofenderse',
      'se vexer',
      'urazit se',
      'obrazić się',
      'alınmak, gücenmek',
      'beleidigt sein, gekränkt sein',
      '気を悪くする、むっとする',
    ],
    ['Non offenderti, era solo una battuta.', 'Si è offesa perché non l’ho invitata.', 'Ti offendi per niente!'],
    'a woman with crossed arms turning her back and lifting her chin, offended and sulking, while a friend behind her tries to explain with open hands',
    ['arrabbiarsi']
  ),
  rv(
    'spaventarsi',
    'spaventarsi',
    'Avere paura all’improvviso.',
    [
      'to get a fright, to get scared',
      'asustarse',
      'avoir peur, prendre peur',
      'leknout se',
      'przestraszyć się',
      'korkmak',
      'erschrecken',
      'びっくりする、怖がる',
    ],
    ['Non spaventarti, sono io!', 'Il cane si è spaventato per i fuochi d’artificio.', 'Mi spavento facilmente.'],
    'a frightened woman jumping backwards with a terrified face, eyes wide open and mouth open in a scream, hands pressed to her cheeks, because a big spider has dropped down in front of her on a thread'
  ),
  rv(
    'vergognarsi',
    'vergognarsi',
    'Sentirsi a disagio per un errore o perché tutti ti guardano.',
    [
      'to be ashamed, to be embarrassed',
      'avergonzarse, darle vergüenza a uno',
      'avoir honte',
      'stydět se',
      'wstydzić się',
      'utanmak',
      'sich schämen',
      '恥ずかしがる',
    ],
    [
      'Mi vergogno di parlare in pubblico.',
      'Non vergognarti, sbagliano tutti!',
      'Si è vergognato ed è diventato rosso.',
    ],
    'a shy little boy hiding half behind his mother’s legs with blushing cheeks, covering part of his face with his hand, while a smiling lady greets him'
  ),
  rv(
    'annoiarsi',
    'annoiarsi',
    'Non trovare niente di interessante da fare.',
    ['to get bored', 'aburrirse', 's’ennuyer', 'nudit se', 'nudzić się', 'sıkılmak', 'sich langweilen', '退屈する'],
    ['Mi annoio a casa da solo.', 'Ci siamo annoiati alla conferenza.', 'I bambini si annoiano in macchina.'],
    'a teenager slumped on a chair at a table, head resting heavily on one hand, yawning and bored, staring at nothing'
  ),
  rv(
    'stancarsi',
    'stancarsi',
    'Perdere le forze dopo uno sforzo.',
    [
      'to get tired',
      'cansarse',
      'se fatiguer',
      'unavit se',
      'zmęczyć się',
      'yorulmak',
      'müde werden, ermüden',
      '疲れる',
    ],
    ['Mi stanco subito in salita.', 'Ci siamo stancati a camminare.', 'Non stancarti troppo!'],
    'a hiker with a backpack sitting on a rock, exhausted, out of breath, wiping his forehead, a water bottle in his hand',
    ['sedersi']
  ),
  rv(
    'divertirsi',
    'divertirsi',
    'Passare un momento allegro e piacevole.',
    [
      'to have fun, to enjoy oneself',
      'divertirse, pasarlo bien',
      's’amuser',
      'bavit se, užít si',
      'dobrze się bawić',
      'eğlenmek',
      'Spaß haben, sich amüsieren',
      '楽しむ',
    ],
    ['Ci siamo divertiti molto alla festa.', 'Divertiti!', 'I bambini si divertono al parco.'],
    'two children laughing loudly on a playground swing and a slide, having great fun',
    ['trovarsi']
  ),
  rv(
    'rilassarsi',
    'rilassarsi',
    'Riposarsi e non pensare ai problemi.',
    [
      'to relax',
      'relajarse',
      'se détendre',
      'odpočinout si, uvolnit se',
      'odprężyć się, zrelaksować się',
      'rahatlamak, dinlenmek',
      'sich entspannen',
      'リラックスする、くつろぐ',
    ],
    ['La sera mi rilasso con un libro.', 'Rilassati, va tutto bene.', 'In vacanza ci siamo rilassati.'],
    'a man sitting in a comfortable armchair with his eyes closed and a calm smile, headphones on, his feet up on a stool, a cup of tea beside him',
    ['sedersi', 'sdraiarsi']
  ),
  // --- insieme: l'uno con l'altro -----------------------------------------------------------------
  rv(
    'conoscersi',
    'conoscersi',
    'Incontrarsi per la prima volta e dirsi il nome.',
    [
      'to meet (for the first time), to get to know each other',
      'conocerse',
      'se rencontrer, faire connaissance',
      'seznámit se',
      'poznać się',
      'tanışmak',
      'sich kennenlernen',
      '知り合う',
    ],
    ['Ci siamo conosciuti a Roma.', 'Vi conoscete?', 'Dove vi siete conosciuti?'],
    'a young man and a young woman shaking hands and smiling as they meet for the first time at a party, a friend standing between them introducing them',
    ['salutarsi', 'chiamarsi']
  ),
  rv(
    'salutarsi',
    'salutarsi',
    'Dirsi «ciao» quando ci si incontra o quando si va via.',
    [
      'to greet each other, to say goodbye',
      'saludarse, despedirse',
      'se saluer, se dire au revoir',
      'pozdravit se, rozloučit se',
      'przywitać się, pożegnać się',
      'selamlaşmak, vedalaşmak',
      'sich begrüßen, sich verabschieden',
      'あいさつを交わす',
    ],
    ['Ci salutiamo sempre sulle scale.', 'Si sono salutati con un bacio.', 'Ci salutiamo alla stazione.'],
    'two neighbours waving to each other and smiling across a low garden fence',
    ['conoscersi', 'abbracciarsi']
  ),
  rv(
    'abbracciarsi',
    'abbracciarsi',
    'Stringersi forte con le braccia, per affetto.',
    [
      'to hug (each other)',
      'abrazarse',
      'se serrer dans les bras',
      'obejmout se',
      'przytulić się',
      'sarılmak, kucaklaşmak',
      'sich umarmen',
      '抱き合う',
    ],
    ['Ci siamo abbracciati all’aeroporto.', 'Le due amiche si abbracciano.', 'Abbracciatevi e fate pace!'],
    'a grandmother and her grown-up grandson hugging each other tightly and happily, a suitcase beside them',
    ['salutarsi']
  ),
  rv(
    'aiutarsi',
    'aiutarsi',
    'Aiutare l’altro e farsi aiutare da lui.',
    [
      'to help each other',
      'ayudarse',
      's’entraider',
      'pomáhat si',
      'pomagać sobie',
      'birbirine yardım etmek',
      'sich gegenseitig helfen',
      '助け合う',
    ],
    ['In famiglia ci aiutiamo sempre.', 'I vicini si aiutano.', 'Ci siamo aiutati con i compiti.'],
    'two neighbours carrying a big heavy cardboard box together, one at each end, smiling at each other'
  ),
  rv(
    'innamorarsi',
    'innamorarsi',
    'Cominciare ad amare una persona.',
    [
      'to fall in love',
      'enamorarse',
      'tomber amoureux',
      'zamilovat se',
      'zakochać się',
      'aşık olmak',
      'sich verlieben',
      '恋に落ちる、好きになる',
    ],
    ['Si sono innamorati in vacanza.', 'Mi sono innamorata di Napoli.', 'Si innamora sempre della persona sbagliata.'],
    'a young couple sitting on a bench holding hands and gazing into each other’s eyes with shy happy smiles'
  ),
  rv(
    'sposarsi',
    'sposarsi',
    'Unirsi in matrimonio.',
    ['to get married', 'casarse', 'se marier', 'vzít se', 'pobrać się, wziąć ślub', 'evlenmek', 'heiraten', '結婚する'],
    ['Ci sposiamo a giugno.', 'Si sono sposati in comune.', 'Mia sorella si è sposata con un ragazzo spagnolo.'],
    'a smiling bride in a simple long-sleeved white dress and a groom in a dark suit walking down the steps of a plain town hall, holding hands, while a few guests throw rice',
    ['innamorarsi']
  ),
  rv(
    'lasciarsi',
    'lasciarsi',
    'Smettere di stare insieme, per una coppia.',
    [
      'to break up, to split up',
      'dejarlo, separarse',
      'se séparer, rompre',
      'rozejít se',
      'rozstać się',
      'ayrılmak',
      'sich trennen, Schluss machen',
      '別れる',
    ],
    ['Marco e Giulia si sono lasciati.', 'Ci siamo lasciati da amici.', 'Perché vi siete lasciati?'],
    'a young couple sitting at opposite ends of a park bench, turned away from each other, both looking sad and serious'
  ),
  // --- la mente ---------------------------------------------------------------------------------
  rv(
    'ricordarsi',
    'ricordarsi',
    'Avere ancora in mente una persona o una cosa; non dimenticare.',
    [
      'to remember',
      'acordarse',
      'se souvenir, se rappeler',
      'vzpomenout si, pamatovat si',
      'pamiętać, przypomnieć sobie',
      'hatırlamak',
      'sich erinnern',
      '覚えている、思い出す',
    ],
    ['Ti ricordi di me?', 'Ricordati di comprare il pane!', 'Non mi ricordo come si chiama.'],
    'an elderly woman sitting in an armchair smiling tenderly at an old photo album open on her lap'
  ),
  rv(
    'dimenticarsi',
    'dimenticarsi',
    'Non avere più in mente una cosa.',
    ['to forget', 'olvidarse', 'oublier', 'zapomenout', 'zapomnieć', 'unutmak', 'vergessen', '忘れる'],
    [
      'Mi sono dimenticato l’ombrello.',
      'Non dimenticarti di chiamare la nonna!',
      'Si dimentica sempre il mio compleanno.',
    ],
    'a woman standing outside under heavy rain falling from a dark grey cloud, completely wet hair and clothes, slapping her forehead with her hand because she has forgotten her umbrella, no signs and no text'
  ),
  rv(
    'sbagliarsi',
    'sbagliarsi',
    'Avere torto, fare un errore.',
    [
      'to be wrong, to make a mistake',
      'equivocarse',
      'se tromper',
      'splést se, mýlit se',
      'pomylić się',
      'yanılmak',
      'sich irren, sich vertun',
      '間違える、勘違いする',
    ],
    ['Scusi, mi sono sbagliato.', 'Ti sbagli: oggi è martedì.', 'Ci siamo sbagliati di strada.'],
    'a man in an apartment doorway raising his hands in apology with an embarrassed smile, because he has knocked on the wrong door and a surprised woman has opened it'
  ),
  rv(
    'concentrarsi',
    'concentrarsi',
    'Pensare solo a una cosa, senza distrarsi.',
    [
      'to concentrate',
      'concentrarse',
      'se concentrer',
      'soustředit se',
      'skupić się, skoncentrować się',
      'konsantre olmak',
      'sich konzentrieren',
      '集中する',
    ],
    [
      'Non riesco a concentrarmi con questo rumore.',
      'Concentrati sulla strada!',
      'Si è concentrata e ha finito il compito.',
    ],
    'a teenage girl at a desk studying with a very focused face, fingers pressed to her temples, eyes fixed on an open book'
  ),
  rv(
    'abituarsi',
    'abituarsi',
    'Trovare normale una cosa nuova, dopo un po’ di tempo.',
    [
      'to get used to',
      'acostumbrarse',
      's’habituer',
      'zvyknout si',
      'przyzwyczaić się',
      'alışmak',
      'sich gewöhnen',
      '慣れる',
    ],
    ['Mi sono abituato al caffè italiano.', 'Non mi abituo al freddo.', 'All’inizio è difficile, ma ci si abitua.'],
    'a young man in a new flat full of half-unpacked cardboard boxes, calmly hanging a picture on the wall with a relaxed contented smile, at home already',
    ['trovarsi']
  ),
  // --- con il «si» cambia il significato ---------------------------------------------------------
  rv(
    'chiamarsi',
    'chiamarsi',
    'Avere un nome. (Chiamare qualcuno è dire il suo nome perché venga, o telefonargli.)',
    [
      'to be called, one’s name is',
      'llamarse',
      's’appeler',
      'jmenovat se',
      'nazywać się, mieć na imię',
      'adı … olmak',
      'heißen',
      '～という名前だ',
    ],
    ['Come ti chiami?', 'Mi chiamo Luca, e tu?', 'Il mio cane si chiama Rocco.'],
    'a little boy on his first school day shaking hands with a smiling teacher who is bending down to him, introducing himself',
    ['conoscersi']
  ),
  rv(
    'sentirsi',
    'sentirsi',
    'Avere una sensazione dentro di sé: bene, male, stanchi, felici. (Sentire è usare le orecchie.)',
    [
      'to feel',
      'sentirse',
      'se sentir',
      'cítit se',
      'czuć się',
      'kendini … hissetmek',
      'sich fühlen',
      '気分が～だ、～と感じる',
    ],
    ['Come ti senti oggi?', 'Non mi sento bene.', 'Qui mi sento a casa.'],
    'a woman on a sofa wrapped in a blanket, feeling ill, holding a thermometer and a tissue, with a pale tired face',
    ['stancarsi']
  ),
  rv(
    'trovarsi',
    'trovarsi',
    'Stare bene o male in un posto; essere in un posto; vedersi con qualcuno. (Trovare è scoprire dov’è una cosa.)',
    [
      'to like it (somewhere), to be located, to meet up',
      'encontrarse, estar a gusto',
      'se trouver, se plaire',
      'nacházet se, cítit se (někde dobře), sejít se',
      'znajdować się, czuć się (dobrze), spotkać się',
      'bulunmak, (bir yerde) rahat etmek, buluşmak',
      'sich befinden, sich wohlfühlen, sich treffen',
      'ある・いる、居心地がいい、待ち合わせる',
    ],
    ['Mi trovo bene a Bologna.', 'Il museo si trova in centro.', 'Ci troviamo davanti al bar alle otto.'],
    'a young woman with a backpack sitting at an outdoor café table in a sunny square with two new friends, laughing and completely at ease',
    ['divertirsi', 'abituarsi']
  ),
  rv(
    'perdersi',
    'perdersi',
    'Non sapere più dove si è e non trovare la strada. (Perdere è non avere più una cosa.)',
    [
      'to get lost',
      'perderse',
      'se perdre',
      'ztratit se, zabloudit',
      'zgubić się',
      'kaybolmak',
      'sich verlaufen, sich verirren',
      '道に迷う',
    ],
    ['Mi sono perso in centro.', 'Prendi la mappa, così non ti perdi.', 'A Venezia ci perdiamo sempre.'],
    'a confused tourist with a backpack standing at a street corner holding a big unfolded paper map, looking around in two directions'
  ),
  rv(
    'mettersi-a',
    'mettersi a',
    'Cominciare a fare qualcosa, spesso all’improvviso. (Mettere è posare una cosa.)',
    [
      'to start (doing), to burst into',
      'ponerse a',
      'se mettre à',
      'dát se do, začít',
      'zacząć, zabrać się do',
      '-meye başlamak',
      'anfangen zu, beginnen zu',
      '～し始める',
    ],
    ['Si è messo a piovere.', 'Il bambino si è messo a piangere.', 'Dopo cena mi metto a studiare.'],
    'a baby in a high chair who has suddenly burst into tears, mouth wide open crying, because his toy has fallen on the floor, his father turning round surprised'
  ),
  rv(
    'andarsene',
    'andarsene',
    'Andare via da un posto. (Andare è muoversi verso un posto.)',
    [
      'to leave, to go away',
      'irse, marcharse',
      's’en aller',
      'odejít',
      'pójść sobie, wyjść',
      'gitmek, ayrılmak',
      'weggehen, gehen',
      '立ち去る、帰る',
    ],
    ['È tardi: me ne vado.', 'Te ne vai già?', 'Se ne sono andati senza salutare.'],
    'a man in a coat and scarf walking out through an open front door, turning briefly to wave goodbye to the friends inside'
  ),
];

/** Le schede divise in gruppi con un titolo, in ordine logico: dalla mattina alla sera, poi gli altri. */
export const reflexiveVerbGroups = [
  {
    id: 'giornata',
    slugs: [
      'svegliarsi',
      'alzarsi',
      'lavarsi',
      'farsi-la-doccia',
      'vestirsi',
      'prepararsi',
      'sbrigarsi',
      'addormentarsi',
    ],
  },
  { id: 'corpo', slugs: ['sedersi', 'sdraiarsi', 'girarsi', 'fermarsi', 'avvicinarsi', 'nascondersi', 'farsi-male'] },
  {
    id: 'emozioni',
    slugs: [
      'arrabbiarsi',
      'offendersi',
      'spaventarsi',
      'vergognarsi',
      'annoiarsi',
      'stancarsi',
      'divertirsi',
      'rilassarsi',
    ],
  },
  {
    id: 'insieme',
    slugs: ['conoscersi', 'salutarsi', 'abbracciarsi', 'aiutarsi', 'innamorarsi', 'sposarsi', 'lasciarsi'],
  },
  { id: 'mente', slugs: ['ricordarsi', 'dimenticarsi', 'sbagliarsi', 'concentrarsi', 'abituarsi'] },
  { id: 'significato', slugs: ['chiamarsi', 'sentirsi', 'trovarsi', 'perdersi', 'mettersi-a', 'andarsene'] },
];

export const reflexiveVerbTranslationExercises = [
  tr(
    'Mi sveglio alle sette, ma mi alzo alle sette e mezza.',
    'I wake up at seven, but I get up at half past seven.',
    'Me despierto a las siete, pero me levanto a las siete y media.',
    'Je me réveille à sept heures, mais je me lève à sept heures et demie.',
    'Budím se v sedm, ale vstávám v půl osmé.',
    'Budzę się o siódmej, ale wstaję o wpół do ósmej.',
    'Saat yedide uyanıyorum ama yedi buçukta kalkıyorum.',
    'Ich wache um sieben auf, aber ich stehe um halb acht auf.',
    '7時に目が覚めますが、起きるのは7時半です。'
  ),
  tr(
    'Ci siamo conosciuti in vacanza e ci siamo sposati dopo un anno.',
    'We met on holiday and got married a year later.',
    'Nos conocimos de vacaciones y nos casamos un año después.',
    'On s’est rencontrés en vacances et on s’est mariés un an plus tard.',
    'Seznámili jsme se na dovolené a o rok později jsme se vzali.',
    'Poznaliśmy się na wakacjach i rok później wzięliśmy ślub.',
    'Tatilde tanıştık ve bir yıl sonra evlendik.',
    'Wir haben uns im Urlaub kennengelernt und ein Jahr später geheiratet.',
    '私たちは旅行先で知り合って、1年後に結婚しました。'
  ),
  tr(
    'Come ti senti? Ti sei fatto male?',
    'How do you feel? Have you hurt yourself?',
    '¿Cómo te sientes? ¿Te has hecho daño?',
    'Comment tu te sens ? Tu t’es fait mal ?',
    'Jak se cítíš? Neudělal sis něco?',
    'Jak się czujesz? Zrobiłeś sobie krzywdę?',
    'Nasıl hissediyorsun? Bir yerini incittin mi?',
    'Wie fühlst du dich? Hast du dir wehgetan?',
    '気分はどう？けがをした？'
  ),
  tr(
    'Sbrigati, il treno parte tra cinque minuti!',
    'Hurry up, the train leaves in five minutes!',
    '¡Date prisa, el tren sale dentro de cinco minutos!',
    'Dépêche-toi, le train part dans cinq minutes !',
    'Pospěš si, vlak jede za pět minut!',
    'Pospiesz się, pociąg odjeżdża za pięć minut!',
    'Acele et, tren beş dakika sonra kalkıyor!',
    'Beeil dich, der Zug fährt in fünf Minuten ab!',
    '急いで、電車はあと5分で出るよ！'
  ),
  tr(
    'Non mi ricordo come si chiama il tuo amico.',
    'I can’t remember what your friend is called.',
    'No me acuerdo de cómo se llama tu amigo.',
    'Je ne me souviens pas comment s’appelle ton ami.',
    'Nevzpomenu si, jak se jmenuje tvůj kamarád.',
    'Nie pamiętam, jak ma na imię twój kolega.',
    'Arkadaşının adını hatırlamıyorum.',
    'Ich weiß nicht mehr, wie dein Freund heißt.',
    'あなたの友だちの名前が思い出せません。'
  ),
  tr(
    'I bambini si annoiano e si mettono a litigare.',
    'The children get bored and start arguing.',
    'Los niños se aburren y se ponen a discutir.',
    'Les enfants s’ennuient et se mettent à se disputer.',
    'Děti se nudí a začnou se hádat.',
    'Dzieci się nudzą i zaczynają się kłócić.',
    'Çocuklar sıkılıyor ve kavga etmeye başlıyor.',
    'Die Kinder langweilen sich und fangen an zu streiten.',
    '子どもたちは退屈して、けんかを始めます。'
  ),
  tr(
    'Mi trovo bene qui, ma non mi abituo al freddo.',
    'I like it here, but I can’t get used to the cold.',
    'Aquí estoy a gusto, pero no me acostumbro al frío.',
    'Je me plais ici, mais je ne m’habitue pas au froid.',
    'Líbí se mi tady, ale na zimu si nezvyknu.',
    'Dobrze mi tutaj, ale nie mogę przyzwyczaić się do zimna.',
    'Burada rahat ediyorum ama soğuğa alışamıyorum.',
    'Ich fühle mich hier wohl, aber an die Kälte gewöhne ich mich nicht.',
    'ここは居心地がいいけれど、寒さには慣れません。'
  ),
  tr(
    'Ci siamo persi e ci siamo fermati a chiedere la strada.',
    'We got lost and stopped to ask the way.',
    'Nos perdimos y nos paramos a preguntar el camino.',
    'On s’est perdus et on s’est arrêtés pour demander le chemin.',
    'Zabloudili jsme a zastavili jsme se zeptat na cestu.',
    'Zgubiliśmy się i zatrzymaliśmy się, żeby zapytać o drogę.',
    'Kaybolduk ve yol sormak için durduk.',
    'Wir haben uns verlaufen und sind stehen geblieben, um nach dem Weg zu fragen.',
    '道に迷ったので、立ち止まって道を聞きました。'
  ),
];
