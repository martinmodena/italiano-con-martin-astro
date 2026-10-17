// «La pronuncia italiana» (grammatica A1, 2026-10-17): il materiale italiano comune a tutte le lingue.
// Le spiegazioni, diverse per ogni lingua (le «trappole» di chi parla giapponese non sono quelle di chi
// parla spagnolo), stanno in i18n-<lingua>.mjs. Ogni parola o frase con un file audio ha un id: l'audio è
// public/assets/audio/pronuncia/<id>.mp3, generato da scripts/generate-pronuncia-audio.py.

// Testo letto dalla voce per ogni id. Le parole semplici si leggono così come sono (id = parola senza accenti).
export const SPOKEN = {
  'ancora-nave': 'Getta l’àncora!',
  'ancora-bis': 'Ancora un po’!',
  'papa-frase': 'Ciao, papà!',
  'capito-frase': 'Hai capito?',
  'capito-passato': 'Capitò tutto in un giorno.',
  'buon-anno': 'Buon anno!',
  'ho-fame': 'Ho fame.',
  'hanno-ragione': 'Hanno ragione.',
  'cina-paese': 'Cina',
  'china-inchiostro': 'china',
  'tw-trentini': 'Trentatré trentini entrarono a Trento, tutti e trentatré trotterellando.',
  'tw-apelle': 'Apelle, figlio di Apollo, fece una palla di pelle di pollo.',
  'tw-cuoco': 'Il cuoco cuoce in cucina e dice che la cuoca giace e tace perché sua cugina non cucina.',
  'tw-sereno': 'Sereno è, sereno sarà, se non sarà sereno, si rasserenerà.',
};
// Le frasi lunghe le legge una voce maschile, per variare.
export const MALE_VOICE = new Set(['tw-trentini', 'tw-apelle', 'tw-cuoco', 'tw-sereno', 'hanno-ragione']);

// id dell'audio di una parola: minuscole e senza accenti. «Cina» e «china» hanno un id proprio,
// perché su Windows Cina.mp3 e china.mp3 sarebbero lo stesso file; «con» perché CON è un nome riservato di Windows.
const ID_OVERRIDE = { Cina: 'cina-paese', china: 'china-inchiostro', con: 'con-preposizione' };
export const audioId = (word) =>
  ID_OVERRIDE[word] ??
  word
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z]+/g, '-')
    .replace(/^-|-$/g, '');

// Le cinque vocali: immagine (gemini) e tre parole d'esempio.
export const VOWELS = [
  { v: 'a', img: 'vocale-a', words: ['amica', 'casa', 'banana'] },
  { v: 'e', img: 'vocale-e', words: ['bene', 'sera', 'mele'] },
  { v: 'i', img: 'vocale-i', words: ['vino', 'libri', 'bici'] },
  { v: 'o', img: 'vocale-o', words: ['sole', 'oro', 'molto'] },
  { v: 'u', img: 'vocale-u', words: ['uva', 'luna', 'tu'] },
];
export const FINAL_VOWELS = ['pizza', 'pasta', 'Roma', 'gelato', 'notte'];

// C e G: la tabella delle combinazioni. sound è la chiave del suono (k, c, g, j) spiegato in ogni lingua.
export const CG_ROWS = [
  { spell: 'ca · co · cu', sound: 'k', words: ['casa', 'cosa', 'cuore'] },
  { spell: 'che · chi', sound: 'k', words: ['perché', 'chiave'] },
  { spell: 'ce · ci', sound: 'c', words: ['cena', 'dieci'] },
  { spell: 'cia · cio · ciu', sound: 'c', words: ['ciao', 'cioccolato', 'ciuffo'] },
  { spell: 'ga · go · gu', sound: 'g', words: ['gatto', 'gonna', 'gusto'] },
  { spell: 'ghe · ghi', sound: 'g', words: ['spaghetti', 'ghiaccio'] },
  { spell: 'ge · gi', sound: 'j', words: ['gelato', 'girasole'] },
  { spell: 'gia · gio · giu', sound: 'j', words: ['giallo', 'giorno', 'giugno'] },
];
// Esercizio 1: dura (k / g di gatto) o morbida (c di ciao / g di gelato)?
export const CG_QUIZ = [
  ['cena', 'soft'],
  ['chiesa', 'hard'],
  ['cuoco', 'hard'],
  ['ciao', 'soft'],
  ['gelato', 'soft'],
  ['ghiaccio', 'hard'],
  ['gonna', 'hard'],
  ['giorno', 'soft'],
  ['anche', 'hard'],
  ['dieci', 'soft'],
  ['spaghetti', 'hard'],
  ['arancia', 'soft'],
];

// I suoni speciali: chiave → immagine (o null) e parole.
export const SOUNDS = [
  { key: 'gn', img: 'gnocchi', words: ['gnocchi', 'bagno', 'lasagne', 'Spagna'] },
  { key: 'gli', img: 'aglio', words: ['aglio', 'figlio', 'famiglia', 'moglie'] },
  { key: 'sc', img: 'sciarpa', words: ['sciarpa', 'pesce', 'scena', 'scuola', 'schiena'] },
  { key: 'z', img: 'pizza', words: ['pizza', 'grazie', 'zebra', 'zero'] },
  { key: 's', img: 'rosa', words: ['sole', 'sale', 'rosa', 'casa'] },
  { key: 'r', img: 'rana', words: ['rana', 'Roma', 'caro', 'carro'] },
  { key: 'h', img: null, words: ['ho', 'hai', 'ha', 'hanno'] },
];

// Le doppie con immagine: le coppie della sezione e i loro significati (tradotti in ogni lingua).
export const DOUBLE_PAIRS = [
  ['casa', 'cassa'],
  ['nono', 'nonno'],
  ['pala', 'palla'],
  ['sete', 'sette'],
  ['caro', 'carro'],
  ['capello', 'cappello'],
  ['pena', 'penna'],
  ['sono', 'sonno'],
];
// Esercizio 2: ascolta e scegli (la pagina sceglie a caso una delle due parole).
export const DOUBLE_QUIZ = [
  ...DOUBLE_PAIRS,
  ['fato', 'fatto'],
  ['copia', 'coppia'],
  ['note', 'notte'],
  ['tuta', 'tutta'],
];

// L'accento: tre gruppi di parole e l'esercizio «tocca la sillaba forte» (indice della sillaba tonica).
export const STRESS_GROUPS = [
  { key: 'penult', words: ['casa', 'amico', 'ragazza', 'parlare'] },
  { key: 'last', words: ['città', 'caffè', 'perché', 'papà'] },
  { key: 'third', words: ['telefono', 'macchina', 'sabato', 'zucchero'] },
];
export const STRESS_QUIZ = [
  ['te-le-fo-no', 1],
  ['mac-chi-na', 0],
  ['cit-tà', 1],
  ['a-mi-co', 1],
  ['sa-ba-to', 0],
  ['u-ni-ver-si-tà', 4],
  ['ta-vo-lo', 0],
  ['pa-ro-la', 1],
  ['per-ché', 1],
  ['zuc-che-ro', 0],
];

// Coppie per le trappole di ogni lingua (esercizio 4).
export const TRAP_PAIRS = {
  rl: [
    ['rana', 'lana'],
    ['mare', 'male'],
    ['caro', 'calo'],
    ['corto', 'colto'],
    ['gara', 'gala'],
    ['rotto', 'lotto'],
  ],
  bv: [
    ['bacca', 'vacca'],
    ['bene', 'vene'],
    ['bado', 'vado'],
  ],
  vf: [
    ['vino', 'fino'],
    ['voto', 'foto'],
    ['volta', 'folta'],
    ['vari', 'fari'],
  ],
  cch: [
    ['Cina', 'china'],
    ['ceci', 'cechi'],
    ['pesce', 'pesche'],
    ['ricci', 'ricchi'],
    ['scena', 'schiena'],
  ],
  ei: [
    ['cane', 'cani'],
    ['notte', 'notti'],
    ['chiave', 'chiavi'],
    ['pane', 'pani'],
  ],
  lu: [['alto', 'auto']],
  dd: [
    ['eco', 'ecco'],
    ['rosa', 'rossa'],
    ['polo', 'pollo'],
    ['camino', 'cammino'],
    ['papa', 'pappa'],
  ],
};
// Quali coppie allena ogni lingua (sempre 10).
export const TRAP_QUIZ = {
  it: [
    TRAP_PAIRS.rl[0],
    TRAP_PAIRS.rl[1],
    TRAP_PAIRS.bv[0],
    TRAP_PAIRS.vf[0],
    TRAP_PAIRS.vf[1],
    TRAP_PAIRS.cch[3],
    TRAP_PAIRS.cch[4],
    TRAP_PAIRS.ei[0],
    TRAP_PAIRS.lu[0],
    TRAP_PAIRS.dd[1],
  ],
  en: [...TRAP_PAIRS.cch, ...TRAP_PAIRS.dd],
  es: [...TRAP_PAIRS.bv, ...TRAP_PAIRS.dd, TRAP_PAIRS.cch[1], TRAP_PAIRS.cch[4]],
  pt: [
    ...TRAP_PAIRS.ei,
    ...TRAP_PAIRS.lu,
    TRAP_PAIRS.dd[0],
    TRAP_PAIRS.dd[1],
    TRAP_PAIRS.dd[3],
    TRAP_PAIRS.cch[1],
    TRAP_PAIRS.cch[4],
  ],
  fr: [...TRAP_PAIRS.cch, ...TRAP_PAIRS.dd],
  cs: [...TRAP_PAIRS.cch, ...TRAP_PAIRS.dd],
  pl: [...TRAP_PAIRS.cch, ...TRAP_PAIRS.dd],
  tr: [...TRAP_PAIRS.cch, ...TRAP_PAIRS.dd],
  de: [...TRAP_PAIRS.vf, ...TRAP_PAIRS.cch, TRAP_PAIRS.dd[0]],
  ja: [...TRAP_PAIRS.rl, TRAP_PAIRS.bv[0], TRAP_PAIRS.bv[1], TRAP_PAIRS.dd[0], TRAP_PAIRS.dd[1]],
};
// Immagini di alcune parole delle trappole (le altre coppie sono solo audio).
export const TRAP_IMAGES = {
  rana: 'rana',
  lana: 'lana',
  mare: 'mare',
  male: 'male',
  bacca: 'bacca',
  vacca: 'vacca',
  vino: 'vino',
  voto: 'voto',
  foto: 'foto',
  alto: 'alto',
  auto: 'auto',
  cane: 'cane',
  cani: 'cani',
  chiave: 'chiave',
  chiavi: 'chiavi',
  pesche: 'pesche',
};

export const TWISTERS = ['tw-trentini', 'tw-apelle', 'tw-cuoco', 'tw-sereno'];
