// I verbi della lezione «I verbi del corpo» (2026-09-25).
//
// Richiesta di Martin: una scheda con i verbi legati al corpo (pettinarsi i capelli, lavarsi le mani,
// accarezzare, pulirsi le unghie, sentire con le orecchie, sentire il gusto di un cibo con la lingua,
// toccare, mordere, arrossire...), sul modello delle schede dei verbi degli animali.
//
// Ogni voce:
//   image     percorso in public/assets/vocabolario/ senza estensione (verbi-corpo/<slug>)
//   slug      identificatore, anche nome del file
//   word      il verbo, con l'oggetto quando serve (lavarsi le mani): e' lingua-oggetto, resta in italiano
//   gloss     il verbo tradotto (in italiano: una breve definizione)
//   examples  tre frasi d'esempio in italiano, con il verbo coniugato
//   subject   soggetto in inglese per la foto: una persona che compie l'azione (foto REALISTICA)
//   matches   le parti del corpo (slug di body-vocabulary.mjs) che servono per l'azione; per l'esercizio
//             positivo basta trovarne UNA. E' generoso di proposito: nella forma negativa e' giusta ogni
//             parte che non compare qui
//   never     nella forma negativa: le parti che chiaramente NON servono. E' calcolato: tutte le parti
//             tranne `matches` e quelle «neutre» (NEUTRAL: corpo, pelle, cuore, cervello... servono un
//             po' a tutto, quindi non entrano mai nella forma negativa)
//   neg       true = il verbo ha anche la riga «quale parte del corpo NON serve?»
//   noMatch   verbi che riguardano tutto il corpo (crescere, invecchiare, guarire...): hanno la scheda ma
//             non la riga negli esercizi
//
// Regole delle foto: realistiche; niente carne; niente parti intime. Le foto dei verbi mostrano una
// persona (o solo le sue mani) che compie l'azione.

import { tr } from './traits-base.mjs';
import { bodyVocabulary } from './body-vocabulary.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

// --- gruppi di parti del corpo (usati solo per scrivere `matches` piu' in fretta) ---------------
const HAND = ['mano', 'palmo', 'dito', 'pollice', 'indice', 'anulare', 'mignolo', 'unghia', 'pugno', 'polso'];
const LEG = [
  'gamba',
  'coscia',
  'ginocchio',
  'polpaccio',
  'caviglia',
  'piede',
  'pianta',
  'tallone',
  'dito-del-piede',
  'alluce',
];

/** Parti che servono un po' a tutto: non entrano mai fra le risposte della forma negativa. */
export const NEUTRAL = [
  'corpo',
  'pelle',
  'muscolo',
  'osso',
  'scheletro',
  'cranio',
  'colonna',
  'costole',
  'cervello',
  'cuore',
];

const ALL_PARTS = bodyVocabulary.map((p) => p.slug);
const knownParts = new Set(ALL_PARTS);

const v = (slug, word, def, glosses, examples, subject, matches, options = {}) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  const list = [...new Set(matches)];
  for (const m of list) if (!knownParts.has(m)) throw new Error(`«${slug}»: parte del corpo sconosciuta «${m}»`);
  const never =
    options.neg && NEG_KEEP.has(slug) ? ALL_PARTS.filter((p) => !list.includes(p) && !NEUTRAL.includes(p)) : [];
  return {
    image: `verbi-corpo/${slug}`,
    slug,
    word,
    bare: word,
    examples,
    subject,
    matches: list,
    never,
    noMatch: Boolean(options.noMatch),
    gloss: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, i === 0 ? def : glosses[i - 1]])),
  };
};

/**
 * La forma negativa («quale parte del corpo NON serve?») ha solo i verbi con il contrasto piu' chiaro:
 * con 90 righe sarebbe interminabile. Gli altri verbi con `NEG` hanno solo la riga positiva.
 */
const NEG_KEEP = new Set([
  'guardare',
  'ascoltare',
  'annusare',
  'mangiare',
  'bere',
  'mordere',
  'baciare',
  'cantare',
  'respirare',
  'ridere',
  'piangere',
  'sorridere',
  'afferrare',
  'salutare-con-la-mano',
  'scrivere',
  'sollevare',
  'lanciare',
  'grattarsi',
  'lavarsi-le-mani',
  'lavarsi-i-denti',
  'pettinarsi-i-capelli',
  'radersi-la-barba',
  'mettersi-un-anello',
  'camminare',
  'correre',
  'saltare',
  'calciare',
  'alzarsi',
  'zoppicare',
  'ballare',
  'voltarsi',
  'scuotere-la-testa',
  'sudare',
  'pensare',
]);
const NEG = { neg: true };
const NO = { noMatch: true };

export const bodyVerbs = [
  // --- gli occhi ------------------------------------------------------------------------------
  v(
    'guardare',
    'guardare',
    'Dirigere gli occhi verso qualcosa.',
    ['to look at', 'mirar', 'regarder', 'dívat se', 'patrzeć', 'bakmak', 'anschauen', '見る'],
    ['Guardo la televisione la sera.', 'Guardo il mare dalla finestra.', 'Guarda! Che bel tramonto!'],
    'a woman looking attentively to the side with her eyes wide open, upper body, plain t-shirt',
    ['occhi', 'palpebra', 'ciglia', 'sopracciglio', 'viso', 'testa', 'collo', 'nuca'],
    NEG
  ),
  v(
    'vedere',
    'vedere',
    'Percepire qualcosa con gli occhi.',
    ['to see', 'ver', 'voir', 'vidět', 'widzieć', 'görmek', 'sehen', '見える'],
    ['Vedo una montagna in lontananza.', 'Senza occhiali non vedo bene.', 'Ieri ho visto Marco al supermercato.'],
    'a man with a delighted surprised expression pointing at something far away with wide open eyes, upper body',
    ['occhi', 'palpebra', 'ciglia', 'sopracciglio', 'viso', 'testa'],
    NEG
  ),
  v(
    'strizzare-locchio',
    'strizzare l’occhio',
    'Chiudere un occhio per un attimo, come segno d’intesa.',
    [
      'to wink',
      'guiñar el ojo',
      'faire un clin d’œil',
      'mrknout',
      'mrugnąć',
      'göz kırpmak',
      'zwinkern',
      'ウインクする',
    ],
    [
      'Mi strizza l’occhio per dire “è un segreto”.',
      'Il nonno strizza l’occhio al nipote.',
      'Strizzo l’occhio e sorrido.',
    ],
    'a smiling young woman winking with one eye, front view portrait',
    ['occhi', 'palpebra', 'viso', 'sopracciglio', 'ciglia', 'guancia'],
    NEG
  ),
  v(
    'sbattere-le-palpebre',
    'sbattere le palpebre',
    'Chiudere e aprire gli occhi molto velocemente.',
    ['to blink', 'parpadear', 'cligner des yeux', 'mrkat', 'mrugać', 'göz kırpıştırmak', 'blinzeln', 'まばたきする'],
    [
      'Sbatto le palpebre quando c’è troppa luce.',
      'Il bambino sbatte le palpebre e si sveglia.',
      'Non riesco a smettere di sbattere le palpebre.',
    ],
    'close-up of a woman’s eyes half-closed in mid-blink, front view',
    ['palpebra', 'occhi', 'ciglia', 'sopracciglio', 'viso'],
    NEG
  ),
  v(
    'piangere',
    'piangere',
    'Versare lacrime dagli occhi.',
    ['to cry', 'llorar', 'pleurer', 'plakat', 'płakać', 'ağlamak', 'weinen', '泣く'],
    [
      'Il bambino piange perché ha perso il pallone.',
      'Guardo un film triste e piango.',
      'Mia sorella piange di gioia.',
    ],
    'a woman with tears on her cheeks wiping her eyes with a paper tissue, upper body, gentle emotional expression',
    ['occhi', 'guancia', 'viso', 'ciglia', 'palpebra', 'naso', 'mano'],
    NEG
  ),
  v(
    'arrossire',
    'arrossire',
    'Diventare rosso in viso, per la vergogna o per l’emozione.',
    ['to blush', 'sonrojarse', 'rougir', 'červenat se', 'rumienić się', 'kızarmak', 'erröten', '赤くなる'],
    [
      'Arrossisco quando mi fanno un complimento.',
      'Marta arrossisce e abbassa gli occhi.',
      'Il bambino arrossisce davanti a tutta la classe.',
    ],
    'a shy young man with clearly flushed red cheeks looking down and smiling, head and shoulders portrait, the whole head fully inside the frame with white space above it',
    ['guancia', 'viso', 'pelle', 'orecchio', 'fronte'],
    NEG
  ),

  // --- gli altri sensi ------------------------------------------------------------------------
  v(
    'ascoltare',
    'ascoltare',
    'Sentire con attenzione, per capire.',
    ['to listen', 'escuchar', 'écouter', 'poslouchat', 'słuchać', 'dinlemek', 'zuhören', '聞く'],
    ['Ascolto la musica in cuffia.', 'Ascolta bene: parlo una volta sola!', 'Il nonno ascolta la radio ogni mattina.'],
    'a woman wearing headphones with her eyes closed, listening to music and smiling, upper body',
    ['orecchio', 'testa'],
    NEG
  ),
  v(
    'sentire-con-le-orecchie',
    'sentire con le orecchie',
    'Percepire i suoni con le orecchie.',
    ['to hear', 'oír', 'entendre', 'slyšet', 'słyszeć', 'duymak', 'hören', '聞こえる'],
    ['Sento il rumore della pioggia.', 'Non sento niente: parla più forte!', 'Con le orecchie sentiamo i suoni.'],
    'a man cupping his hand behind his ear as if straining to hear a faint sound, upper body',
    ['orecchio', 'testa', 'mano'],
    NEG
  ),
  v(
    'annusare',
    'annusare',
    'Sentire un odore con il naso.',
    ['to smell, to sniff', 'oler', 'sentir, renifler', 'čichat', 'wąchać', 'koklamak', 'riechen', 'においをかぐ'],
    ['Annuso i fiori del giardino.', 'Annuso la torta calda e ho fame.', 'Il bambino annusa il pane appena fatto.'],
    'a woman with closed eyes smelling a bunch of fresh flowers held near her nose, upper body',
    ['naso', 'viso', 'testa'],
    NEG
  ),
  v(
    'sentire-il-sapore',
    'sentire il gusto di un cibo',
    'Percepire il sapore di un cibo con la lingua.',
    ['to taste', 'saborear', 'sentir le goût', 'cítit chuť', 'czuć smak', 'tadını almak', 'schmecken', '味わう'],
    [
      'Con la lingua sento il sapore dolce.',
      'Ho il raffreddore e non sento il gusto del cibo.',
      'Sento il gusto del limone: è acido!',
    ],
    'a man tasting a spoonful of tomato soup with a pleased expression, the spoon at his mouth, upper body',
    ['lingua', 'bocca', 'naso', 'labbra'],
    NEG
  ),
  v(
    'assaggiare',
    'assaggiare',
    'Mangiare o bere un pochino per sentirne il sapore.',
    ['to taste (a little), to try', 'probar', 'goûter', 'ochutnat', 'skosztować', 'tatmak', 'probieren', '味見する'],
    [
      'Assaggio la salsa con il cucchiaio.',
      'Vuoi assaggiare un pezzo di torta?',
      'Il cuoco assaggia il sugo prima di servirlo.',
    ],
    'a woman tasting a sauce from a wooden spoon in a kitchen, curious face, upper body',
    ['lingua', 'bocca', 'labbra', 'denti', 'mano', 'dito', 'naso']
  ),
  v(
    'toccare',
    'toccare',
    'Mettere la mano, o un’altra parte del corpo, su qualcosa.',
    ['to touch', 'tocar', 'toucher', 'dotýkat se', 'dotykać', 'dokunmak', 'berühren', '触る'],
    [
      'Non toccare il forno: è caldo!',
      'Tocco la stoffa per capire se è morbida.',
      'Il bambino tocca la neve con le dita.',
    ],
    'close-up of a hand gently touching the smooth surface of a grey stone, hand and wrist only',
    [...HAND, 'braccio', 'gomito', 'piede', 'pianta', 'dito-del-piede', 'labbra', 'lingua']
  ),
  v(
    'accarezzare',
    'accarezzare',
    'Toccare con dolcezza, passando la mano.',
    ['to stroke, to pet', 'acariciar', 'caresser', 'hladit', 'głaskać', 'okşamak', 'streicheln', 'なでる'],
    [
      'Accarezzo il gatto sulla schiena.',
      'La mamma accarezza il viso del bambino.',
      'Mi piace accarezzare i capelli lunghi.',
    ],
    'a woman gently stroking the head of a golden retriever with her hand, upper body of the woman and the dog',
    ['mano', 'palmo', 'dito', 'pollice', 'polso', 'braccio'],
    NEG
  ),
  v(
    'solleticare',
    'solleticare',
    'Toccare leggermente una persona per farla ridere.',
    ['to tickle', 'hacer cosquillas', 'chatouiller', 'lechtat', 'łaskotać', 'gıdıklamak', 'kitzeln', 'くすぐる'],
    [
      'La mamma solletica la pancia del bambino.',
      'Mi solletica la pianta del piede!',
      'Non solleticarmi, ho il solletico!',
    ],
    'two adult friends, one tickling the other’s side, both laughing, upper bodies',
    ['dito', 'mano', 'indice', 'palmo', 'unghia']
  ),

  // --- la bocca ---------------------------------------------------------------------------------
  v(
    'mangiare',
    'mangiare',
    'Mettere il cibo in bocca, masticarlo e mandarlo giù.',
    ['to eat', 'comer', 'manger', 'jíst', 'jeść', 'yemek', 'essen', '食べる'],
    ['Mangio una mela ogni giorno.', 'Non parlare mentre mangi!', 'A pranzo mangiamo la pasta.'],
    'a young man eating a vegetable salad with a fork, happy, upper body, at a table',
    ['bocca', 'denti', 'lingua', 'labbra', 'mano', 'dito', 'braccio', 'guancia', 'stomaco', 'intestino', 'fegato'],
    NEG
  ),
  v(
    'bere',
    'bere',
    'Prendere un liquido in bocca e mandarlo giù.',
    ['to drink', 'beber', 'boire', 'pít', 'pić', 'içmek', 'trinken', '飲む'],
    ['Bevo un bicchiere d’acqua.', 'Il bambino beve il latte con la cannuccia.', 'Quando ho sete, bevo tanto.'],
    'a woman drinking a glass of water, head slightly tilted back, upper body',
    ['bocca', 'labbra', 'lingua', 'mano', 'dito', 'braccio', 'stomaco', 'intestino', 'reni'],
    NEG
  ),
  v(
    'masticare',
    'masticare',
    'Muovere i denti per rompere il cibo.',
    ['to chew', 'masticar', 'mâcher', 'žvýkat', 'żuć', 'çiğnemek', 'kauen', '噛んで食べる'],
    ['Mastico bene prima di ingoiare.', 'Il nonno mastica lentamente.', 'Il bambino mastica una gomma.'],
    'a man chewing with his mouth closed and cheeks slightly puffed, holding a bread roll, upper body',
    ['bocca', 'denti', 'lingua', 'guancia', 'labbra', 'mento'],
    NEG
  ),
  v(
    'mordere',
    'mordere',
    'Stringere qualcosa tra i denti.',
    ['to bite', 'morder', 'mordre', 'kousat', 'gryźć', 'ısırmak', 'beißen', 'かむ'],
    ['Mordo un panino.', 'Non mordere le unghie!', 'Mordo una mela rossa.'],
    'a woman biting into a red apple, close-up of her mouth with her teeth on the apple',
    ['denti', 'bocca', 'labbra', 'lingua'],
    NEG
  ),
  v(
    'leccare',
    'leccare',
    'Passare la lingua su qualcosa.',
    ['to lick', 'lamer', 'lécher', 'olizovat', 'lizać', 'yalamak', 'lecken', 'なめる'],
    ['Lecco un lecca-lecca.', 'Mi lecco le labbra: che fame!', 'Lecco il francobollo prima di attaccarlo.'],
    'a smiling young woman enjoying a red fruit ice pop on a stick, licking it, upper body',
    ['lingua', 'bocca', 'labbra'],
    NEG
  ),
  v(
    'baciare',
    'baciare',
    'Toccare con le labbra una persona o una cosa, per affetto.',
    ['to kiss', 'besar', 'embrasser', 'líbat', 'całować', 'öpmek', 'küssen', 'キスする'],
    ['Bacio la nonna sulla guancia.', 'Si baciano sotto l’ombrello.', 'La mamma bacia il bambino sulla fronte.'],
    'a young woman kissing an elderly woman on the cheek, affectionate, side view of both faces',
    ['labbra', 'bocca', 'guancia', 'viso', 'fronte', 'mano', 'naso'],
    NEG
  ),
  v(
    'soffiare',
    'soffiare',
    'Mandare fuori l’aria dalla bocca.',
    ['to blow', 'soplar', 'souffler', 'foukat', 'dmuchać', 'üflemek', 'pusten', '吹く'],
    [
      'Soffio sulla candelina per spegnerla.',
      'Soffio sul tè: è troppo caldo!',
      'Il bambino soffia sulle bolle di sapone.',
    ],
    'a young man blowing out a single small lit candle, cheeks puffed, no cake, portrait',
    ['bocca', 'labbra', 'polmoni', 'guancia', 'naso', 'petto'],
    NEG
  ),
  v(
    'fischiare',
    'fischiare',
    'Fare un suono acuto soffiando tra le labbra.',
    ['to whistle', 'silbar', 'siffler', 'pískat', 'gwizdać', 'ıslık çalmak', 'pfeifen', '口笛を吹く'],
    ['Fischio una canzone mentre cammino.', 'L’arbitro fischia la fine della partita.', 'Sai fischiare con due dita?'],
    'a man whistling with pursed lips, relaxed portrait',
    ['labbra', 'bocca', 'lingua', 'polmoni', 'dito'],
    NEG
  ),
  v(
    'cantare',
    'cantare',
    'Fare musica con la voce.',
    ['to sing', 'cantar', 'chanter', 'zpívat', 'śpiewać', 'şarkı söylemek', 'singen', '歌う'],
    ['Canto sotto la doccia.', 'Marta canta in un coro.', 'I bambini cantano una canzone di compleanno.'],
    'a woman singing with her mouth open and eyes closed, holding a microphone near her mouth, upper body',
    ['bocca', 'labbra', 'lingua', 'polmoni', 'denti', 'viso', 'petto'],
    NEG
  ),
  v(
    'parlare',
    'parlare',
    'Dire parole con la voce.',
    ['to speak, to talk', 'hablar', 'parler', 'mluvit', 'mówić', 'konuşmak', 'sprechen', '話す'],
    ['Parlo italiano con Licia.', 'Sara parla con la sua amica al telefono.', 'Il professore parla lentamente.'],
    'a man talking animatedly with his mouth open and a hand gesture, upper body',
    ['bocca', 'labbra', 'lingua', 'denti', 'polmoni', 'viso'],
    NEG
  ),
  v(
    'gridare',
    'gridare',
    'Parlare a voce molto alta.',
    ['to shout', 'gritar', 'crier', 'křičet', 'krzyczeć', 'bağırmak', 'schreien', '叫ぶ'],
    [
      'Gridiamo di gioia quando segna la squadra.',
      'Non gridare: sono qui vicino!',
      'Il bambino grida per chiamare la mamma.',
    ],
    'a woman shouting with both hands cupped around her mouth, cheering, upper body',
    ['bocca', 'labbra', 'lingua', 'polmoni', 'viso', 'denti', 'mano', 'petto'],
    NEG
  ),
  v(
    'sussurrare',
    'sussurrare',
    'Parlare molto piano, vicino all’orecchio.',
    ['to whisper', 'susurrar', 'chuchoter', 'šeptat', 'szeptać', 'fısıldamak', 'flüstern', 'ささやく'],
    ['Ti sussurro un segreto.', 'Sussurra all’orecchio di Luca.', 'In biblioteca si sussurra.'],
    'a woman whispering into a man’s ear with a hand beside her mouth, side view of two people, upper bodies',
    ['bocca', 'labbra', 'orecchio', 'lingua', 'mano'],
    NEG
  ),
  v(
    'sbadigliare',
    'sbadigliare',
    'Aprire molto la bocca perché si ha sonno o noia.',
    ['to yawn', 'bostezar', 'bâiller', 'zívat', 'ziewać', 'esnemek', 'gähnen', 'あくびをする'],
    ['Sbadiglio perché ho sonno.', 'Lo studente sbadiglia durante la lezione.', 'Anche tu sbadigli? È contagioso!'],
    'a man yawning widely with his eyes closed, one hand covering part of his mouth, upper body',
    ['bocca', 'labbra', 'viso', 'polmoni', 'mano', 'lingua', 'denti'],
    NEG
  ),
  v(
    'ridere',
    'ridere',
    'Fare rumori con la bocca perché qualcosa è divertente.',
    ['to laugh', 'reír', 'rire', 'smát se', 'śmiać się', 'gülmek', 'lachen', '笑う'],
    ['Rido quando guardo un film comico.', 'I bambini ridono a squarciagola.', 'Ridiamo tanto con Sara!'],
    'a woman laughing heartily with her head slightly tilted back, a big smile showing teeth, upper body',
    ['bocca', 'denti', 'labbra', 'viso', 'pancia', 'guancia', 'occhi', 'petto', 'polmoni'],
    NEG
  ),
  v(
    'sorridere',
    'sorridere',
    'Allargare le labbra in un’espressione allegra, senza fare rumore.',
    ['to smile', 'sonreír', 'sourire', 'usmívat se', 'uśmiechać się', 'gülümsemek', 'lächeln', '微笑む'],
    ['La commessa mi sorride.', 'Sorrido quando vedo un amico.', 'Il bimbo sorride nel sonno.'],
    'a friendly man with a gentle warm smile looking at the camera, portrait',
    ['labbra', 'bocca', 'denti', 'viso', 'guancia', 'occhi'],
    NEG
  ),
  v(
    'respirare',
    'respirare',
    'Prendere e mandare fuori l’aria dal corpo.',
    ['to breathe', 'respirar', 'respirer', 'dýchat', 'oddychać', 'nefes almak', 'atmen', '呼吸する'],
    ['Respiro profondamente.', 'In montagna si respira aria pulita.', 'Il nuotatore respira dalla bocca.'],
    'a woman with closed eyes taking a deep breath, one hand on her chest, upper body',
    ['naso', 'bocca', 'polmoni', 'petto', 'pancia', 'viso'],
    NEG
  ),
  v(
    'starnutire',
    'starnutire',
    'Mandare fuori l’aria dal naso e dalla bocca all’improvviso.',
    ['to sneeze', 'estornudar', 'éternuer', 'kýchat', 'kichać', 'hapşırmak', 'niesen', 'くしゃみをする'],
    [
      'Starnutisco perché ho l’allergia.',
      'Il nonno starnutisce tre volte di fila.',
      '“Salute!” si dice quando qualcuno starnutisce.',
    ],
    'a man sneezing into a paper tissue held to his nose, eyes closed, upper body',
    ['naso', 'bocca', 'polmoni', 'viso', 'mano', 'occhi', 'petto'],
    NEG
  ),
  v(
    'tossire',
    'tossire',
    'Mandare fuori l’aria con forza dalla gola.',
    ['to cough', 'toser', 'tousser', 'kašlat', 'kaszleć', 'öksürmek', 'husten', '咳をする'],
    ['Ho il raffreddore e tossisco molto.', 'Il bambino tossisce di notte.', 'Tossisco perché ho la gola secca.'],
    'a woman coughing into her fist held in front of her mouth, upper body',
    ['bocca', 'polmoni', 'petto', 'mano', 'pugno', 'viso', 'naso'],
    NEG
  ),
  v(
    'russare',
    'russare',
    'Fare rumore con il naso e la bocca mentre si dorme.',
    ['to snore', 'roncar', 'ronfler', 'chrápat', 'chrapać', 'horlamak', 'schnarchen', 'いびきをかく'],
    ['Mio marito russa tutta la notte.', 'Non riesco a dormire: russi troppo!', 'Russo quando ho il naso chiuso.'],
    'a man asleep on his back in bed with his mouth slightly open, under a light blue duvet, head and shoulders',
    ['naso', 'bocca', 'polmoni', 'testa']
  ),

  // --- le mani e le braccia --------------------------------------------------------------------
  v(
    'afferrare',
    'afferrare',
    'Prendere qualcosa con forza e in fretta.',
    ['to grab', 'agarrar', 'attraper', 'popadnout', 'chwycić', 'kapmak', 'greifen', 'つかむ'],
    ['Afferro la borsa e corro fuori.', 'Il portiere afferra il pallone.', 'Afferra la mia mano e non lasciarla!'],
    'a hand quickly grabbing a red rubber ball, close-up of the hand and wrist',
    [...HAND, 'braccio'],
    NEG
  ),
  v(
    'stringere-la-mano',
    'stringere la mano',
    'Dare la mano a qualcuno per salutare o per fare un accordo.',
    [
      'to shake hands',
      'dar la mano',
      'serrer la main',
      'podat si ruce',
      'uścisnąć dłoń',
      'el sıkışmak',
      'die Hand geben',
      '握手する',
    ],
    [
      'Stringo la mano al nuovo collega.',
      'Ci stringiamo la mano: siamo d’accordo.',
      'Il sindaco stringe la mano a tutti.',
    ],
    'two adults shaking hands, close-up of the hands and forearms, friendly handshake',
    [...HAND, 'braccio', 'gomito'],
    NEG
  ),
  v(
    'salutare-con-la-mano',
    'salutare con la mano',
    'Muovere la mano per dire ciao.',
    ['to wave', 'saludar con la mano', 'saluer de la main', 'mávat', 'machać', 'el sallamak', 'winken', '手を振る'],
    ['Saluto i vicini con la mano.', 'Il bambino saluta il treno che parte.', 'Ti saluto con la mano dal finestrino.'],
    'a friendly woman waving her hand hello and smiling, upper body',
    ['mano', 'braccio', 'palmo', 'dito', 'polso', 'gomito', 'spalla'],
    NEG
  ),
  v(
    'applaudire',
    'applaudire',
    'Battere le mani per dire bravo.',
    ['to clap', 'aplaudir', 'applaudir', 'tleskat', 'klaskać', 'alkışlamak', 'klatschen', '拍手する'],
    [
      'Applaudiamo alla fine dello spettacolo.',
      'Il pubblico applaude i musicisti.',
      'Tutti applaudono la squadra vincitrice.',
    ],
    'a woman clapping her hands in front of her chest, joyful, upper body',
    ['mano', 'palmo', 'dito', 'polso', 'braccio', 'gomito'],
    NEG
  ),
  v(
    'indicare',
    'indicare',
    'Mostrare qualcosa con il dito.',
    ['to point', 'señalar', 'montrer du doigt', 'ukazovat', 'wskazywać', 'işaret etmek', 'zeigen', '指さす'],
    ['Indico la strada al turista.', 'Il bambino indica il gelato.', 'Con il dito indico la luna.'],
    'a woman pointing to the right with her arm extended and her index finger, upper body',
    ['dito', 'indice', 'mano', 'braccio', 'polso', 'gomito', 'spalla'],
    NEG
  ),
  v(
    'scrivere',
    'scrivere',
    'Fare segni sulla carta o sullo schermo per esprimere parole.',
    ['to write', 'escribir', 'écrire', 'psát', 'pisać', 'yazmak', 'schreiben', '書く'],
    ['Scrivo un messaggio a mia madre.', 'Il bambino scrive il suo nome.', 'Scrivo una lista della spesa.'],
    'close-up of a right hand writing with a pen on a sheet of lined paper, hand and wrist only',
    [...HAND, 'braccio', 'gomito', 'occhi'],
    NEG
  ),
  v(
    'spingere',
    'spingere',
    'Fare forza su qualcosa per farla andare avanti.',
    ['to push', 'empujar', 'pousser', 'tlačit', 'pchać', 'itmek', 'schieben, drücken', '押す'],
    ['Spingo la porta ed entro.', 'Spingiamo la macchina fuori dal fango.', 'Non spingere! Aspetta il tuo turno.'],
    'a man pushing a large heavy wooden crate with both hands, leaning forward, side view, full body, plain white background with no walls or doors',
    ['mano', 'palmo', 'braccio', 'spalla', 'gomito', 'gamba', 'piede', 'schiena', 'petto']
  ),
  v(
    'tirare',
    'tirare',
    'Fare forza per portare qualcosa verso di sé.',
    ['to pull', 'tirar', 'tirer', 'táhnout', 'ciągnąć', 'çekmek', 'ziehen', '引く'],
    ['Tiro la porta per aprirla.', 'Tiriamo la corda tutti insieme.', 'Non tirare i capelli a tua sorella!'],
    'a man pulling a rope with both hands, leaning back, side view, upper body',
    ['mano', 'braccio', 'dito', 'spalla', 'schiena', 'gomito', 'gamba', 'piede', 'pugno', 'palmo']
  ),
  v(
    'sollevare',
    'sollevare',
    'Portare qualcosa più in alto.',
    ['to lift', 'levantar', 'soulever', 'zvedat', 'podnosić', 'kaldırmak', 'heben', '持ち上げる'],
    ['Sollevo la valigia sul treno.', 'Marco solleva il bambino in aria.', 'Solleviamo insieme il tavolo.'],
    'a man lifting a heavy cardboard box with both arms, knees bent, side view, upper and lower body visible',
    ['braccio', 'mano', 'schiena', 'gamba', 'spalla', 'ginocchio', 'coscia', 'polso', 'gomito', 'petto', ...HAND],
    NEG
  ),
  v(
    'lanciare',
    'lanciare',
    'Mandare qualcosa lontano con un movimento del braccio.',
    ['to throw', 'lanzar', 'lancer', 'házet', 'rzucać', 'fırlatmak', 'werfen', '投げる'],
    ['Lancio la palla al cane.', 'Il bambino lancia un sasso nell’acqua.', 'Lanciamo il frisbee nel parco.'],
    'a man throwing a ball with his arm extended forward, mid-motion, side view, upper body',
    ['braccio', 'mano', 'spalla', 'gomito', 'polso', 'dito', 'schiena', 'gamba', 'piede', 'petto', 'pugno', 'palmo'],
    NEG
  ),
  v(
    'pizzicare',
    'pizzicare',
    'Stringere la pelle o un oggetto tra due dita.',
    ['to pinch', 'pellizcar', 'pincer', 'štípat', 'szczypać', 'çimdiklemek', 'kneifen', 'つねる'],
    [
      'Mi pizzico la guancia per svegliarmi.',
      'La nonna pizzica le guance del bambino.',
      'Pizzico un po’ di sale e lo metto nella pentola.',
    ],
    'a hand holding a pinch of salt between thumb and index finger above a wooden bowl, close-up of the hand',
    ['dito', 'pollice', 'indice', 'mano', 'unghia', 'guancia', 'polso']
  ),
  v(
    'grattarsi',
    'grattarsi',
    'Passare le unghie sulla pelle quando prude.',
    ['to scratch oneself', 'rascarse', 'se gratter', 'škrábat se', 'drapać się', 'kaşınmak', 'sich kratzen', 'かく'],
    ['Mi gratto la testa quando penso.', 'Il bambino si gratta il braccio.', 'Non grattarti: la puntura peggiora!'],
    'a man scratching his head with one hand, puzzled expression, upper body',
    ['unghia', 'dito', 'mano', 'testa', 'braccio', 'schiena', 'gamba', 'piede', 'polso', 'gomito', 'nuca', 'spalla'],
    NEG
  ),
  v(
    'pulirsi-le-unghie',
    'pulirsi le unghie',
    'Togliere lo sporco da sotto le unghie.',
    [
      'to clean one’s nails',
      'limpiarse las uñas',
      'se nettoyer les ongles',
      'čistit si nehty',
      'czyścić paznokcie',
      'tırnaklarını temizlemek',
      'sich die Nägel reinigen',
      '爪をきれいにする',
    ],
    [
      'Mi pulisco le unghie con lo spazzolino.',
      'Dopo il giardinaggio mi pulisco le unghie.',
      'Pulisciti le unghie prima di mangiare!',
    ],
    'close-up of hands cleaning fingernails with a small nail brush over a sink, top view',
    ['unghia', 'dito', 'mano', 'pollice', 'indice', 'palmo', 'polso', 'mignolo', 'anulare', 'pugno'],
    NEG
  ),
  v(
    'tagliarsi-le-unghie',
    'tagliarsi le unghie',
    'Accorciare le unghie con le forbicine o con il tagliaunghie.',
    [
      'to cut one’s nails',
      'cortarse las uñas',
      'se couper les ongles',
      'ostříhat si nehty',
      'obcinać paznokcie',
      'tırnaklarını kesmek',
      'sich die Nägel schneiden',
      '爪を切る',
    ],
    ['Mi taglio le unghie ogni settimana.', 'Il papà si taglia le unghie dei piedi.', 'Mi serve il tagliaunghie!'],
    'close-up of a hand having a fingernail trimmed with a metal nail clipper, top view',
    ['unghia', 'dito', 'mano', 'pollice', 'indice', 'dito-del-piede', 'piede', 'alluce', 'polso', 'mignolo', 'anulare'],
    NEG
  ),
  v(
    'lavarsi-le-mani',
    'lavarsi le mani',
    'Pulire le mani con acqua e sapone.',
    [
      'to wash one’s hands',
      'lavarse las manos',
      'se laver les mains',
      'mýt si ruce',
      'myć ręce',
      'ellerini yıkamak',
      'sich die Hände waschen',
      '手を洗う',
    ],
    ['Mi lavo le mani con il sapone.', 'Dopo il giardino mi lavo bene le mani.', 'Lavatevi le mani: la cena è pronta!'],
    'a pair of hands being washed under a running kitchen tap with soap lather, close-up of hands and wrists',
    [...HAND, 'braccio'],
    NEG
  ),
  v(
    'lavarsi-i-denti',
    'lavarsi i denti',
    'Pulire i denti con lo spazzolino e il dentifricio.',
    [
      'to brush one’s teeth',
      'lavarse los dientes',
      'se brosser les dents',
      'čistit si zuby',
      'myć zęby',
      'dişlerini fırçalamak',
      'sich die Zähne putzen',
      '歯を磨く',
    ],
    [
      'Mi lavo i denti dopo cena.',
      'Il bambino si lava i denti con il dentifricio alla fragola.',
      'Ci laviamo i denti la mattina e la sera.',
    ],
    'a woman brushing her teeth with a toothbrush, a little foam at her mouth, upper body facing the camera',
    ['denti', 'bocca', 'labbra', 'lingua', 'mano', 'dito', 'braccio', 'polso', 'guancia', 'gomito', 'pollice', 'palmo'],
    NEG
  ),
  v(
    'pettinarsi-i-capelli',
    'pettinarsi i capelli',
    'Sistemare i capelli con il pettine.',
    [
      'to comb one’s hair',
      'peinarse',
      'se peigner',
      'česat se',
      'czesać włosy',
      'saçını taramak',
      'sich die Haare kämmen',
      '髪をとかす',
    ],
    [
      'Mi pettino i capelli davanti allo specchio.',
      'La nonna si pettina i capelli bianchi.',
      'Pettinati i capelli: dobbiamo uscire!',
    ],
    'a woman combing her long hair with a comb, one arm raised, side view, upper body',
    ['capelli', 'testa', 'mano', 'braccio', 'dito', 'polso', 'gomito', 'nuca', 'pollice', 'palmo'],
    NEG
  ),
  v(
    'legarsi-i-capelli',
    'legarsi i capelli',
    'Raccogliere i capelli con un elastico o con un nastro.',
    [
      'to tie one’s hair',
      'atarse el pelo',
      's’attacher les cheveux',
      'svazovat si vlasy',
      'związywać włosy',
      'saçını toplamak',
      'sich die Haare zusammenbinden',
      '髪を結ぶ',
    ],
    ['Mi lego i capelli in una coda.', 'Sara si lega i capelli per fare sport.', 'Ti leghi i capelli con l’elastico?'],
    'a woman tying her hair into a ponytail with both hands raised behind her head, seen from behind, upper body',
    ['capelli', 'mano', 'dito', 'braccio', 'testa', 'nuca', 'gomito', 'polso', 'spalla', 'pollice', 'palmo', 'indice'],
    NEG
  ),
  v(
    'asciugarsi',
    'asciugarsi',
    'Togliere l’acqua dal corpo con un asciugamano o con il phon.',
    [
      'to dry oneself',
      'secarse',
      'se sécher',
      'osušit se',
      'wycierać się',
      'kurulanmak',
      'sich abtrocknen',
      '体をふく',
    ],
    ['Mi asciugo con l’asciugamano.', 'Dopo la doccia mi asciugo i capelli.', 'Il bambino si asciuga le mani.'],
    'a woman drying her hair with a blue towel, upper body, smiling',
    ['capelli', 'mano', 'braccio', 'testa', 'viso', 'collo', 'nuca', 'spalla', 'gomito', ...HAND]
  ),
  v(
    'radersi-la-barba',
    'radersi la barba',
    'Togliere la barba con il rasoio.',
    ['to shave', 'afeitarse', 'se raser', 'holit se', 'golić się', 'tıraş olmak', 'sich rasieren', 'ひげを剃る'],
    ['Mi rado la barba ogni mattina.', 'Papà si rade davanti allo specchio.', 'Mi sono rasato i baffi per scherzo.'],
    'a man shaving his cheek with a razor, shaving foam on his face, upper body facing the camera',
    [
      'barba',
      'viso',
      'guancia',
      'mento',
      'collo',
      'baffi',
      'mano',
      'labbra',
      'braccio',
      'polso',
      'dito',
      'pollice',
      'gomito',
    ],
    NEG
  ),
  v(
    'truccarsi',
    'truccarsi',
    'Mettere il trucco sul viso.',
    [
      'to put on makeup',
      'maquillarse',
      'se maquiller',
      'malovat se',
      'malować się',
      'makyaj yapmak',
      'sich schminken',
      '化粧をする',
    ],
    ['Mi trucco prima di uscire.', 'Sara si trucca gli occhi con l’ombretto.', 'Non mi trucco mai per andare al mare.'],
    'a woman applying mascara to her eyelashes with a small brush while looking into a small hand mirror, upper body',
    [
      'viso',
      'occhi',
      'labbra',
      'palpebra',
      'ciglia',
      'guancia',
      'mano',
      'dito',
      'sopracciglio',
      'braccio',
      'polso',
      'gomito',
      'pollice',
      'indice',
    ],
    NEG
  ),
  v(
    'mettersi-la-crema',
    'mettersi la crema',
    'Spalmare una crema sulla pelle.',
    [
      'to put on cream',
      'ponerse crema',
      'mettre de la crème',
      'natírat se krémem',
      'smarować się kremem',
      'krem sürmek',
      'sich eincremen',
      'クリームを塗る',
    ],
    ['Mi metto la crema sulle mani.', 'D’estate mi metto la crema solare.', 'La nonna si mette la crema sul viso.'],
    'a woman rubbing moisturiser cream onto her forearm with her other hand, close-up of the arms',
    ['mano', 'palmo', 'dito', 'braccio', 'viso', 'gamba', 'polso', 'gomito', 'spalla', 'pollice', 'indice'],
    NEG
  ),
  v(
    'mettersi-un-anello',
    'mettersi un anello',
    'Infilare un anello in un dito.',
    [
      'to put on a ring',
      'ponerse un anillo',
      'mettre une bague',
      'nasadit si prsten',
      'zakładać pierścionek',
      'yüzük takmak',
      'einen Ring anziehen',
      '指輪をはめる',
    ],
    [
      'Mi metto l’anello di mia nonna.',
      'Lui si mette l’anello all’anulare.',
      'Il giorno del matrimonio si mettono l’anello.',
    ],
    'a hand sliding a gold ring onto the ring finger of the other hand, close-up of both hands',
    [...HAND],
    NEG
  ),
  v(
    'contare-sulle-dita',
    'contare sulle dita',
    'Usare le dita per contare i numeri.',
    [
      'to count on one’s fingers',
      'contar con los dedos',
      'compter sur ses doigts',
      'počítat na prstech',
      'liczyć na palcach',
      'parmakla saymak',
      'an den Fingern abzählen',
      '指で数える',
    ],
    [
      'Conto sulle dita: uno, due, tre.',
      'Il bambino conta fino a dieci sulle dita.',
      'Conto i giorni della vacanza con le dita.',
    ],
    'a hand holding up three fingers (index, middle and ring) to show the number three, close-up, wrist visible',
    [...HAND, 'occhi', 'testa', 'braccio'],
    NEG
  ),
  v(
    'schioccare-le-dita',
    'schioccare le dita',
    'Far uscire un rumore secco con due dita.',
    [
      'to snap one’s fingers',
      'chasquear los dedos',
      'claquer des doigts',
      'luskat prsty',
      'pstrykać palcami',
      'parmak şıklatmak',
      'mit den Fingern schnippen',
      '指を鳴らす',
    ],
    [
      'Schiocco le dita a tempo di musica.',
      'Il mago schiocca le dita ed ecco la magia!',
      'Schiocca le dita per chiamare il cameriere.',
    ],
    'a hand snapping its fingers, thumb and middle finger together mid-snap, close-up, wrist visible',
    ['dito', 'pollice', 'indice', 'mano', 'polso', 'palmo', 'anulare', 'mignolo']
  ),
  v(
    'chiudere-il-pugno',
    'chiudere il pugno',
    'Chiudere forte la mano con le dita contro il palmo.',
    [
      'to clench one’s fist',
      'cerrar el puño',
      'serrer le poing',
      'zatnout pěst',
      'zaciskać pięść',
      'yumruk yapmak',
      'die Faust ballen',
      'こぶしを握る',
    ],
    [
      'Chiudo il pugno per fare forza.',
      'Il bambino chiude il pugno e nasconde la moneta.',
      'Quando sono arrabbiato, chiudo i pugni.',
    ],
    'a hand slowly closing into a fist, mid-motion with fingers curling, close-up, wrist visible',
    [...HAND, 'braccio'],
    NEG
  ),
  v(
    'abbracciare',
    'abbracciare',
    'Stringere qualcuno tra le braccia, per affetto.',
    ['to hug', 'abrazar', 'serrer dans ses bras', 'objímat', 'przytulać', 'sarılmak', 'umarmen', '抱きしめる'],
    ['Abbraccio mia madre.', 'I due amici si abbracciano forte.', 'Abbraccia il nonno: è contento!'],
    'two adult friends hugging warmly, seen from the side, upper bodies',
    ['braccio', 'mano', 'petto', 'spalla', 'schiena', 'gomito', 'guancia', 'testa', 'palmo', 'polso'],
    NEG
  ),
  v(
    'incrociare-le-braccia',
    'incrociare le braccia',
    'Mettere un braccio sopra l’altro sul petto.',
    [
      'to cross one’s arms',
      'cruzar los brazos',
      'croiser les bras',
      'zkřížit ruce',
      'krzyżować ręce',
      'kollarını kavuşturmak',
      'die Arme verschränken',
      '腕を組む',
    ],
    [
      'Incrocio le braccia quando ho freddo.',
      'Il professore incrocia le braccia e aspetta.',
      'Non incrociare le braccia: aiutami!',
    ],
    'a man standing with his arms crossed on his chest, front view, upper body, plain shirt',
    ['braccio', 'gomito', 'mano', 'petto', 'polso', 'spalla', 'dito', 'pugno', 'palmo'],
    NEG
  ),
  v(
    'stirarsi',
    'stirarsi',
    'Allungare braccia e gambe per sciogliere i muscoli.',
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
    [
      'La mattina mi stiro nel letto.',
      'Dopo il lavoro mi stiro le braccia.',
      'Il corridore si stira le gambe prima della gara.',
    ],
    'a woman stretching with both arms raised high above her head, eyes closed, smiling, standing, front view, upper body, the whole head and both hands fully inside the frame',
    [
      'braccio',
      'schiena',
      'gamba',
      'spalla',
      'collo',
      'mano',
      'polso',
      'gomito',
      'coscia',
      'polpaccio',
      'dito',
      'ascella',
      'petto',
      'pancia',
    ],
    NEG
  ),

  // --- le gambe e i piedi ---------------------------------------------------------------------
  v(
    'camminare',
    'camminare',
    'Andare a piedi, un passo dopo l’altro.',
    ['to walk', 'caminar', 'marcher', 'chodit', 'chodzić', 'yürümek', 'gehen', '歩く'],
    ['Cammino nel parco ogni mattina.', 'Il bambino cammina per la prima volta.', 'Camminiamo fino al lago.'],
    'a person walking on a path in sneakers and casual clothes, full body, side view, mid-step',
    [...LEG, 'braccio', 'spalla', 'schiena'],
    NEG
  ),
  v(
    'correre',
    'correre',
    'Andare molto veloce con le gambe.',
    ['to run', 'correr', 'courir', 'běžet', 'biegać', 'koşmak', 'rennen', '走る'],
    ['Corro nel parco ogni domenica.', 'Il bambino corre dietro al pallone.', 'Corriamo per prendere l’autobus!'],
    'a person running in running shoes and sportswear, full body, side view, mid-stride',
    [...LEG, 'braccio', 'polmoni', 'petto', 'spalla', 'schiena', 'gomito', 'pugno'],
    NEG
  ),
  v(
    'saltare',
    'saltare',
    'Alzarsi da terra con la forza delle gambe.',
    ['to jump', 'saltar', 'sauter', 'skákat', 'skakać', 'zıplamak', 'springen', '跳ぶ'],
    ['Salto la corda in cortile.', 'Il bambino salta nella pozzanghera.', 'Salto per prendere la palla.'],
    'a young woman jumping in the air with both arms raised, full body, sportswear, side view',
    [...LEG, 'braccio', 'schiena', 'spalla', 'gomito'],
    NEG
  ),
  v(
    'calciare',
    'calciare',
    'Colpire qualcosa con il piede.',
    ['to kick', 'patear', 'donner un coup de pied', 'kopat', 'kopać', 'tekmelemek', 'treten', '蹴る'],
    [
      'Calcio il pallone nel campo.',
      'Il bambino calcia un sasso lungo la strada.',
      'Il portiere calcia il pallone lontano.',
    ],
    'a young man kicking a football, full body, side view, mid-kick',
    [...LEG, 'braccio', 'schiena'],
    NEG
  ),
  v(
    'pestare',
    'pestare',
    'Mettere il piede con forza su qualcosa.',
    ['to stamp, to step on', 'pisar', 'marcher sur', 'šlápnout', 'deptać', 'ezmek, çiğnemek', 'treten auf', '踏む'],
    ['Scusa, ti ho pestato un piede!', 'Il bambino pesta le foglie secche.', 'Attenzione a non pestare le aiuole.'],
    'a person stamping a rubber boot into a small puddle, close-up of the foot and the lower leg',
    [...LEG],
    NEG
  ),
  v(
    'stare-in-punta-di-piedi',
    'stare in punta di piedi',
    'Alzare il corpo sulle dita dei piedi.',
    [
      'to stand on tiptoe',
      'ponerse de puntillas',
      'se mettre sur la pointe des pieds',
      'stát na špičkách',
      'stać na palcach',
      'parmak uçlarında durmak',
      'auf Zehenspitzen stehen',
      'つま先立ちをする',
    ],
    [
      'Sto in punta di piedi per prendere il libro.',
      'La bambina sta in punta di piedi per vedere il tavolo.',
      'Cammino in punta di piedi per non svegliare nessuno.',
    ],
    'a woman standing on tiptoe reaching up, barefoot, full body, side view, plain leggings and top',
    [...LEG, 'braccio']
  ),
  v(
    'inginocchiarsi',
    'inginocchiarsi',
    'Mettersi con le ginocchia per terra.',
    ['to kneel', 'arrodillarse', 's’agenouiller', 'klekat si', 'klękać', 'diz çökmek', 'sich hinknien', 'ひざまずく'],
    [
      'Mi inginocchio per allacciare la scarpa del bambino.',
      'Si inginocchia e chiede scusa.',
      'Ci inginocchiamo sul tappeto per giocare.',
    ],
    'a man kneeling on one knee to tie his shoelace, full body, side view',
    ['ginocchio', 'gamba', 'coscia', 'polpaccio', 'caviglia', 'piede', 'schiena', 'pianta', 'tallone'],
    NEG
  ),
  v(
    'sedersi',
    'sedersi',
    'Mettere il corpo su una sedia o per terra.',
    ['to sit down', 'sentarse', 's’asseoir', 'sednout si', 'siadać', 'oturmak', 'sich setzen', '座る'],
    ['Mi siedo sul divano.', 'La nonna si siede vicino alla finestra.', 'Vi siete già seduti a tavola?'],
    'a woman sitting down on a chair, mid-motion, full body, side view',
    [
      'gamba',
      'coscia',
      'ginocchio',
      'schiena',
      'polpaccio',
      'caviglia',
      'piede',
      'pianta',
      'tallone',
      'mano',
      'braccio',
    ],
    NEG
  ),
  v(
    'alzarsi',
    'alzarsi',
    'Mettersi in piedi.',
    ['to stand up', 'levantarse', 'se lever', 'vstát', 'wstawać', 'ayağa kalkmak', 'aufstehen', '立ち上がる'],
    ['Mi alzo alle sette.', 'Il nonno si alza dalla poltrona con fatica.', 'Alzati, è tardi!'],
    'a man standing up from a chair with his hands on his knees, mid-motion, full body, side view',
    [...LEG, 'schiena', 'braccio', 'mano', 'gomito'],
    NEG
  ),
  v(
    'sdraiarsi',
    'sdraiarsi',
    'Mettersi lungo su un letto o per terra.',
    ['to lie down', 'tumbarse', 's’allonger', 'lehnout si', 'kłaść się', 'uzanmak', 'sich hinlegen', '横になる'],
    [
      'Mi sdraio sul letto per riposare.',
      'Ci sdraiamo sull’erba a guardare il cielo.',
      'Il bambino si sdraia sul tappeto.',
    ],
    'a woman lying on her back on a coloured yoga mat, relaxed, seen from a high angle so that her whole body fills the frame diagonally',
    ['schiena', 'testa', 'nuca', 'gamba', 'braccio', 'spalla', 'gomito', 'coscia', 'polpaccio', 'piede'],
    NEG
  ),
  v(
    'inciampare',
    'inciampare',
    'Mettere male un piede e quasi cadere.',
    ['to trip', 'tropezar', 'trébucher', 'zakopnout', 'potknąć się', 'tökezlemek', 'stolpern', 'つまずく'],
    ['Inciampo nel gradino e quasi cado.', 'Il bambino inciampa nei lacci delle scarpe.', 'Attento a non inciampare!'],
    'a man tripping over a small obstacle and stumbling forward with his arms out, full body, side view',
    [...LEG, 'braccio', 'mano']
  ),
  v(
    'zoppicare',
    'zoppicare',
    'Camminare male perché si ha male a una gamba o a un piede.',
    ['to limp', 'cojear', 'boiter', 'kulhat', 'kuleć', 'topallamak', 'hinken', '足を引きずる'],
    [
      'Zoppico perché mi fa male la caviglia.',
      'Dopo la caduta il ragazzo zoppica.',
      'Il nonno zoppica, ma cammina ogni giorno.',
    ],
    'a man limping with an elastic bandage around his ankle, one hand on his thigh, full body, side view',
    [...LEG],
    NEG
  ),
  v(
    'ballare',
    'ballare',
    'Muovere il corpo a tempo di musica.',
    ['to dance', 'bailar', 'danser', 'tančit', 'tańczyć', 'dans etmek', 'tanzen', '踊る'],
    ['Ballo con il mio ragazzo.', 'La nonna balla il valzer.', 'Tutti ballano alla festa.'],
    'a woman dancing joyfully with her arms out and one leg lifted, full body, sportswear, side view',
    [...LEG, 'braccio', 'spalla', 'schiena', 'mano', 'gomito', 'petto', 'pancia'],
    NEG
  ),
  v(
    'incrociare-le-gambe',
    'incrociare le gambe',
    'Mettere una gamba sopra l’altra.',
    [
      'to cross one’s legs',
      'cruzar las piernas',
      'croiser les jambes',
      'zkřížit nohy',
      'krzyżować nogi',
      'bacak bacak üstüne atmak',
      'die Beine übereinanderschlagen',
      '脚を組む',
    ],
    ['Mi siedo e incrocio le gambe.', 'Lei incrocia le gambe mentre legge.', 'Si incrociano le gambe per meditare.'],
    'a woman sitting on a chair with her legs crossed, side view, full body, casual clothes',
    [...LEG],
    NEG
  ),
  v(
    'chinarsi',
    'chinarsi',
    'Piegare il corpo in avanti.',
    ['to bend down', 'agacharse', 'se pencher', 'sehnout se', 'pochylać się', 'eğilmek', 'sich bücken', 'かがむ'],
    ['Mi chino per raccogliere la penna.', 'Il giardiniere si china sulle rose.', 'Ti chini a salutare il bambino.'],
    'a woman bending forward at the waist to pick up a small object from the floor, full body, side view',
    [
      'schiena',
      'ginocchio',
      'gamba',
      'collo',
      'testa',
      'spalla',
      'coscia',
      'mano',
      'braccio',
      'polpaccio',
      'nuca',
      'pancia',
    ],
    NEG
  ),

  // --- la testa e il collo ---------------------------------------------------------------------
  v(
    'annuire',
    'annuire',
    'Muovere la testa su e giù per dire di sì.',
    [
      'to nod',
      'asentir con la cabeza',
      'hocher la tête',
      'přikývnout',
      'kiwać głową',
      'başını sallamak',
      'nicken',
      'うなずく',
    ],
    ['Annuisco quando sono d’accordo.', 'Il professore annuisce e sorride.', 'Lei annuisce per dire “sì”.'],
    'a man nodding with a gentle approving smile, head tilted slightly down, portrait',
    ['testa', 'collo', 'nuca', 'viso', 'mento'],
    NEG
  ),
  v(
    'scuotere-la-testa',
    'scuotere la testa',
    'Muovere la testa a destra e a sinistra per dire di no.',
    [
      'to shake one’s head',
      'negar con la cabeza',
      'secouer la tête',
      'zavrtět hlavou',
      'kręcić głową',
      'başını iki yana sallamak',
      'den Kopf schütteln',
      '首を横に振る',
    ],
    [
      'Scuoto la testa: non sono d’accordo.',
      'Il bambino scuote la testa e non vuole la minestra.',
      'Lei scuote la testa e sorride.',
    ],
    'a woman shaking her head “no” with a slight smile, hair swinging, portrait',
    ['testa', 'collo', 'nuca', 'capelli', 'viso', 'mento', 'orecchio'],
    NEG
  ),
  v(
    'voltarsi',
    'voltarsi',
    'Girare il corpo o la testa dalla parte opposta.',
    [
      'to turn around',
      'darse la vuelta',
      'se retourner',
      'otočit se',
      'odwracać się',
      'dönmek',
      'sich umdrehen',
      '振り向く',
    ],
    ['Mi volto e vedo Marco.', 'Il bambino si volta quando lo chiamo.', 'Ti sei voltata per salutarmi?'],
    'a woman turning her head and shoulders to look back over her shoulder, three-quarter view from behind, upper body',
    ['testa', 'collo', 'nuca', 'spalla', 'schiena', 'piede', 'gamba', 'occhi', 'caviglia'],
    NEG
  ),
  v(
    'aggrottare-la-fronte',
    'aggrottare la fronte',
    'Tirare le sopracciglia verso il basso, per rabbia o per dubbio.',
    [
      'to frown',
      'fruncir el ceño',
      'froncer les sourcils',
      'mračit se',
      'marszczyć czoło',
      'kaşlarını çatmak',
      'die Stirn runzeln',
      '眉をひそめる',
    ],
    ['Aggrotto la fronte quando non capisco.', 'Il maestro aggrotta la fronte.', 'Perché aggrotti la fronte? Che c’è?'],
    'a man frowning with lowered eyebrows and a wrinkled forehead, puzzled look, portrait',
    ['fronte', 'sopracciglio', 'viso', 'occhi', 'testa'],
    NEG
  ),

  // --- le reazioni del corpo -------------------------------------------------------------------
  v(
    'sudare',
    'sudare',
    'Produrre goccioline d’acqua sulla pelle, per il caldo o la fatica.',
    ['to sweat', 'sudar', 'transpirer', 'potit se', 'pocić się', 'terlemek', 'schwitzen', '汗をかく'],
    ['Sudo molto quando corro.', 'D’estate sudo anche di notte.', 'Il ragazzo suda dopo la partita.'],
    'a man wiping sweat from his forehead with the back of his hand after exercise, sports t-shirt, upper body',
    [
      'fronte',
      'ascella',
      'schiena',
      'viso',
      'mano',
      'palmo',
      'testa',
      'collo',
      'nuca',
      'pianta',
      'petto',
      'braccio',
      'pancia',
    ],
    NEG
  ),
  v(
    'tremare',
    'tremare',
    'Muoversi in modo veloce e piccolo, per il freddo o per la paura.',
    ['to tremble, to shiver', 'temblar', 'trembler', 'třást se', 'drżeć', 'titremek', 'zittern', '震える'],
    ['Tremo di freddo.', 'Le mani mi tremano per la paura.', 'La bambina trema sotto la pioggia.'],
    'a woman shivering with her arms wrapped around herself in the cold, wearing a light sweater, upper body',
    [
      ...HAND,
      'braccio',
      'gamba',
      'labbra',
      'ginocchio',
      'mento',
      'denti',
      'spalla',
      'coscia',
      'polpaccio',
      'piede',
      'petto',
      'schiena',
    ],
    NEG
  ),
  v(
    'rabbrividire',
    'rabbrividire',
    'Sentire un brivido freddo sulla pelle.',
    [
      'to shudder, to get goosebumps',
      'estremecerse',
      'frissonner',
      'mít husí kůži',
      'wzdrygać się',
      'ürpermek',
      'erschaudern',
      '身震いする',
    ],
    [
      'Rabbrividisco quando sento un rumore strano.',
      'Il film mi fa rabbrividire.',
      'Con il vento freddo rabbrividisco.',
    ],
    'a woman with goosebumps on her arm rubbing her upper arm, close-up of the arm and shoulder',
    ['schiena', 'braccio', 'nuca', 'spalla', 'collo', 'gamba', 'mano', 'petto'],
    NEG
  ),
  v(
    'battere',
    'battere',
    'Muoversi con ritmo, come fa il cuore.',
    ['to beat', 'latir', 'battre', 'tlouci', 'bić', 'atmak', 'schlagen', '脈打つ'],
    [
      'Il mio cuore batte forte per l’emozione.',
      'Con lo stetoscopio sento il cuore che batte.',
      'Metti la mano sul petto: senti il cuore battere?',
    ],
    'a woman placing her hand on her chest feeling her heartbeat, eyes closed, upper body',
    ['petto', 'polso', 'costole', 'mano', 'braccio', 'collo'],
    NEG
  ),
  v(
    'pensare',
    'pensare',
    'Usare la mente per capire, ricordare o decidere.',
    ['to think', 'pensar', 'penser', 'myslet', 'myśleć', 'düşünmek', 'denken', '考える'],
    ['Penso a cosa cucinare stasera.', 'Il ragazzo pensa e si tocca il mento.', 'Ci penso e ti rispondo domani.'],
    'a man in a thoughtful pose with his hand on his chin, looking up, upper body',
    ['testa', 'fronte'],
    NEG
  ),
  v(
    'sognare',
    'sognare',
    'Vedere immagini e storie nella mente mentre si dorme.',
    ['to dream', 'soñar', 'rêver', 'snít', 'śnić', 'rüya görmek', 'träumen', '夢を見る'],
    ['Stanotte ho sognato il mare.', 'Il bambino sogna i dinosauri.', 'Sogni mai di volare?'],
    'a woman sleeping peacefully on a light blue pillow with a slight smile, head and shoulders',
    ['testa', 'occhi', 'palpebra'],
    NEG
  ),
  v(
    'digerire',
    'digerire',
    'Trasformare il cibo dentro il corpo.',
    ['to digest', 'digerir', 'digérer', 'trávit', 'trawić', 'sindirmek', 'verdauen', '消化する'],
    [
      'Dopo una cena pesante digerisco male.',
      'Camminare aiuta a digerire.',
      'Lo stomaco digerisce il cibo in alcune ore.',
    ],
    'a man sitting with his hands on his stomach after a big meal looking content, upper body',
    ['stomaco', 'intestino', 'pancia', 'fegato'],
    NEG
  ),
  v(
    'fare-male',
    'fare male',
    'Dare dolore, o sentire dolore.',
    ['to hurt, to ache', 'doler', 'faire mal', 'bolet', 'boleć', 'ağrımak', 'wehtun', '痛い'],
    ['Mi fa male la testa.', 'Ti fanno male i piedi?', 'Mi fanno male le gambe dopo la corsa.'],
    'a woman holding her lower back with one hand and wincing, side view, upper body',
    [],
    NO
  ),
  v(
    'crescere',
    'crescere',
    'Diventare più grande o più alto.',
    ['to grow', 'crecer', 'grandir', 'růst', 'rosnąć', 'büyümek', 'wachsen', '成長する'],
    [
      'Il bambino cresce in fretta.',
      'Mia figlia è cresciuta di cinque centimetri.',
      'I miei capelli crescono lentamente.',
    ],
    'a teenage boy standing straight against a wall marked with height lines while a parent marks his height with a pencil, full body',
    [],
    NO
  ),
  v(
    'invecchiare',
    'invecchiare',
    'Diventare vecchio.',
    ['to grow old', 'envejecer', 'vieillir', 'stárnout', 'starzeć się', 'yaşlanmak', 'altern', '年を取る'],
    ['Mio nonno invecchia, ma resta allegro.', 'Con gli anni la pelle invecchia.', 'Non voglio invecchiare da solo.'],
    'an elderly smiling man with white hair and glasses, portrait, kind face',
    [],
    NO
  ),
  v(
    'dimagrire',
    'dimagrire',
    'Perdere peso e diventare più magro.',
    ['to lose weight', 'adelgazar', 'maigrir', 'zhubnout', 'chudnąć', 'zayıflamak', 'abnehmen', '痩せる'],
    ['Faccio sport per dimagrire.', 'Dimagrisco quando sono stressato.', 'Il medico dice che devo dimagrire un po’.'],
    'a woman stepping on a bathroom scale and smiling, full body, side view',
    [],
    NO
  ),
  v(
    'guarire',
    'guarire',
    'Diventare di nuovo sano dopo una malattia.',
    ['to recover', 'curarse', 'guérir', 'uzdravit se', 'wyzdrowieć', 'iyileşmek', 'genesen', '治る'],
    ['Dopo una settimana guarisco dall’influenza.', 'La ferita guarisce piano piano.', 'Guarisci presto!'],
    'a smiling woman removing a small bandage from her arm and looking at the healed skin, upper body',
    [],
    NO
  ),
  v(
    'addormentarsi',
    'addormentarsi',
    'Cominciare a dormire.',
    ['to fall asleep', 'dormirse', 's’endormir', 'usnout', 'zasypiać', 'uykuya dalmak', 'einschlafen', '眠りにつく'],
    [
      'Mi addormento subito dopo cena.',
      'Il bambino si addormenta in braccio alla mamma.',
      'Non riesco ad addormentarmi.',
    ],
    'a man asleep on a sofa with an open book on his chest, full body, casual clothes',
    [],
    NO
  ),
];

{
  const slugs = bodyVerbs.map((x) => x.slug);
  const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  if (dupes.length) throw new Error(`verbi con lo stesso slug: ${dupes.join(', ')}`);
}

/** Le frasi da tradurre; la lingua di partenza e' quella del visitatore (in italiano: l'inglese). */
export const bodyVerbTranslationExercises = [
  tr(
    'Mi lavo i denti tre volte al giorno.',
    'I brush my teeth three times a day.',
    'Me lavo los dientes tres veces al día.',
    'Je me brosse les dents trois fois par jour.',
    'Čistím si zuby třikrát denně.',
    'Myję zęby trzy razy dziennie.',
    'Günde üç kez dişlerimi fırçalarım.',
    'Ich putze mir dreimal am Tag die Zähne.',
    '私は一日に三回歯を磨きます。'
  ),
  tr(
    'Ogni mattina mi pettino i capelli davanti allo specchio.',
    'Every morning I comb my hair in front of the mirror.',
    'Todas las mañanas me peino delante del espejo.',
    'Chaque matin, je me peigne devant le miroir.',
    'Každé ráno se češu před zrcadlem.',
    'Codziennie rano czeszę się przed lustrem.',
    'Her sabah aynanın önünde saçımı tararım.',
    'Jeden Morgen kämme ich mir vor dem Spiegel die Haare.',
    '毎朝、鏡の前で髪をとかします。'
  ),
  tr(
    'Arrossisco quando mi fanno un complimento.',
    'I blush when someone pays me a compliment.',
    'Me sonrojo cuando me hacen un cumplido.',
    'Je rougis quand on me fait un compliment.',
    'Červenám se, když mě někdo pochválí.',
    'Rumienię się, gdy ktoś mi prawi komplement.',
    'Biri beni övünce kızarırım.',
    'Ich werde rot, wenn mir jemand ein Kompliment macht.',
    'ほめられると赤くなります。'
  ),
  tr(
    'Con le orecchie sentiamo i suoni e con la lingua il sapore.',
    'With our ears we hear sounds and with our tongue we taste flavours.',
    'Con las orejas oímos los sonidos y con la lengua sentimos el sabor.',
    'Avec les oreilles, nous entendons les sons et, avec la langue, nous sentons le goût.',
    'Ušima slyšíme zvuky a jazykem cítíme chuť.',
    'Uszami słyszymy dźwięki, a językiem czujemy smak.',
    'Kulaklarımızla sesleri duyar, dilimizle tadı alırız.',
    'Mit den Ohren hören wir Geräusche und mit der Zunge schmecken wir.',
    '耳で音を聞き、舌で味を感じます。'
  ),
  tr(
    'La nonna accarezza il gatto sulla schiena.',
    'Grandma strokes the cat on its back.',
    'La abuela acaricia al gato en el lomo.',
    'Grand-mère caresse le chat sur le dos.',
    'Babička hladí kočku po zádech.',
    'Babcia głaszcze kota po grzbiecie.',
    'Babaanne kediyi sırtından okşar.',
    'Oma streichelt die Katze am Rücken.',
    'おばあさんは猫の背中をなでます。'
  ),
  tr(
    'Non mordere le unghie: è un brutto vizio!',
    'Don’t bite your nails: it’s a bad habit!',
    '¡No te muerdas las uñas: es una mala costumbre!',
    'Ne te ronge pas les ongles : c’est une mauvaise habitude !',
    'Nekousej si nehty: je to špatný zvyk!',
    'Nie obgryzaj paznokci: to zły nawyk!',
    'Tırnaklarını yeme: kötü bir alışkanlık!',
    'Beiß nicht an den Nägeln: das ist eine schlechte Angewohnheit!',
    '爪をかまないで。悪い癖です！'
  ),
  tr(
    'Il bambino piange e si asciuga gli occhi.',
    'The child cries and dries his eyes.',
    'El niño llora y se seca los ojos.',
    'L’enfant pleure et s’essuie les yeux.',
    'Dítě pláče a utírá si oči.',
    'Dziecko płacze i wyciera oczy.',
    'Çocuk ağlar ve gözlerini siler.',
    'Das Kind weint und trocknet sich die Augen.',
    '子どもは泣いて、目をふきます。'
  ),
  tr(
    'Tocco il tavolo con le dita per sentire se è caldo.',
    'I touch the table with my fingers to feel if it is warm.',
    'Toco la mesa con los dedos para sentir si está caliente.',
    'Je touche la table avec les doigts pour sentir si elle est chaude.',
    'Dotknu se stolu prsty, abych zjistil, jestli je teplý.',
    'Dotykam stołu palcami, żeby sprawdzić, czy jest ciepły.',
    'Sıcak mı diye masaya parmaklarımla dokunurum.',
    'Ich berühre den Tisch mit den Fingern, um zu fühlen, ob er warm ist.',
    'テーブルが温かいか、指でさわってみます。'
  ),
  tr(
    'Dopo la corsa sudo e mi fanno male le gambe.',
    'After the run I sweat and my legs hurt.',
    'Después de correr sudo y me duelen las piernas.',
    'Après la course, je transpire et j’ai mal aux jambes.',
    'Po běhu se potím a bolí mě nohy.',
    'Po biegu się pocę i bolą mnie nogi.',
    'Koştuktan sonra terlerim ve bacaklarım ağrır.',
    'Nach dem Lauf schwitze ich und meine Beine tun weh.',
    '走ったあと、汗をかいて足が痛いです。'
  ),
  tr(
    'Mio nonno si siede, incrocia le braccia e si addormenta.',
    'My grandfather sits down, crosses his arms and falls asleep.',
    'Mi abuelo se sienta, cruza los brazos y se duerme.',
    'Mon grand-père s’assoit, croise les bras et s’endort.',
    'Můj dědeček si sedne, zkříží ruce a usne.',
    'Mój dziadek siada, krzyżuje ręce i zasypia.',
    'Dedem oturur, kollarını kavuşturur ve uyuyakalır.',
    'Mein Opa setzt sich, verschränkt die Arme und schläft ein.',
    '祖父は座って腕を組み、眠ってしまいます。'
  ),
];
