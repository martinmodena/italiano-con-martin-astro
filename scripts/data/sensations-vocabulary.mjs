// Le parole della lezione di vocabolario «Ho fame, ho sonno: le sensazioni con avere» (2026-11-02).
//
// Proposta del 2026-11-02 accettata da Martin («Sì, fai la prossima»), dopo «Dov'è il gatto?». Le
// espressioni con avere che in molte lingue si dicono con «essere» (I'm hungry, estou com fome, jestem
// głodny, mir ist kalt): avere fame, sete, sonno, caldo, freddo, paura, fretta, voglia, vergogna... e i
// piccoli malanni (mal di pancia, il raffreddore, la febbre). Stesso schema dei colori e del luogo:
// «Riconosci la parola» piu' l'esercizio da trascinare «Che cosa ha?» (`sensationDescribeRows`).
// Ragione e torto non hanno una foto chiara: stanno nella nota.
//
// Nel titolo della scheda c'e' l'espressione intera (avere fame); `answers` accetta anche il nome solo
// (fame) e la prima persona (ho fame). `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
// Foto con `generate-animal-images.mjs --set sensazioni` e `--set sensazioni-descrivi` (SENSATION_STYLE).

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const feel = (slug, word, answers, examples, alts, subject) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  const rest = word.replace(/^avere /, '');
  const forms = [word, rest, `ho ${rest}`, ...answers];
  return {
    image: `sensazioni/${slug}`,
    slug,
    word,
    bare: rest,
    examples,
    answers: [...new Set(forms.flatMap((f) => [f, f.replace('’', ' '), f.replace('’', "'")]))],
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const sensationVocabulary = [
  // --- il corpo chiede qualcosa ------------------------------------------------------------
  feel(
    'fame',
    'avere fame',
    [],
    ['Il cucciolo ha fame: guarda la ciotola vuota.', 'Ho una fame da lupi: andiamo a mangiare?', 'Hai fame? C’è ancora un po’ di pasta.'],
    '|To be hungry|Tener hambre|Avoir faim|Mít hlad|Być głodnym|Acıkmak|Hunger haben|お腹がすく',
    'a hungry puppy sitting next to an empty food bowl, licking its lips and looking up with big begging eyes'
  ),
  feel(
    'sete',
    'avere sete',
    [],
    ['Il cane ha sete e beve tutta l’acqua.', 'Dopo la corsa ho molta sete.', 'Hai sete? Vuoi un bicchiere d’acqua?'],
    '|To be thirsty|Tener sed|Avoir soif|Mít žízeň|Chcieć pić|Susamak|Durst haben|喉が渇く',
    'a thirsty dog eagerly drinking water from a blue bowl, tongue lapping and water splashing'
  ),
  feel(
    'sonno',
    'avere sonno',
    [],
    ['Il gattino ha sonno e sbadiglia.', 'Ho sonno: stanotte ho dormito poco.', 'I bambini hanno sonno: è ora di andare a letto.'],
    '|To be sleepy|Tener sueño|Avoir sommeil|Být ospalý|Chcieć spać|Uykusu gelmek|Müde sein|眠い',
    'a sleepy kitten with half-closed eyes yawning widely, sitting on a soft cushion'
  ),
  feel(
    'caldo',
    'avere caldo',
    [],
    ['Il cane ha caldo e cerca l’ombra.', 'Apri la finestra, per favore: ho caldo!', 'D’estate in città tutti hanno caldo.'],
    '|To be hot|Tener calor|Avoir chaud|Být horko (je mi horko)|Być gorąco (jest mi gorąco)|Sıcaklamak|Warm sein (mir ist heiß)|暑い',
    'a hot dog panting with its tongue out, lying in bright summer sunlight in front of a small electric fan'
  ),
  feel(
    'freddo',
    'avere freddo',
    [],
    ['Il gattino ha freddo e trema.', 'Ho freddo: mi presti la giacca?', 'Chiudi la porta, abbiamo tutti freddo!'],
    '|To be cold|Tener frío|Avoir froid|Být zima (je mi zima)|Być zimno (jest mi zimno)|Üşümek|Kalt sein (mir ist kalt)|寒い',
    'a shivering kitten wrapped in a small knitted woollen scarf, sitting on a little patch of snow'
  ),
  // --- la mente e il cuore ------------------------------------------------------------------
  feel(
    'paura',
    'avere paura',
    ['paura di'],
    ['Il gatto ha paura del cane.', 'Ho paura dei ragni.', 'Non avere paura: va tutto bene.'],
    '|To be afraid|Tener miedo|Avoir peur|Mít strach, bát se|Bać się|Korkmak|Angst haben|怖い',
    'a frightened cat with its back arched and fur puffed up, ears flat, looking at a small cucumber on the floor'
  ),
  feel(
    'fretta',
    'avere fretta',
    [],
    ['Il coniglio ha fretta e corre via.', 'Scusa, ho fretta: ci sentiamo dopo!', 'Non c’è fretta, abbiamo tempo.'],
    '|To be in a hurry|Tener prisa|Être pressé|Spěchat|Spieszyć się|Acelesi olmak|Es eilig haben|急いでいる',
    'a rabbit running fast, mid-leap with ears flying back, a small backpack on its back, clearly in a hurry'
  ),
  feel(
    'voglia',
    'avere voglia di',
    ['voglia', 'avere voglia', 'ho voglia'],
    ['Il cane ha voglia di giocare.', 'Ho voglia di un gelato.', 'Stasera non ho voglia di uscire.'],
    '|To feel like, to want|Tener ganas de|Avoir envie de|Mít chuť na|Mieć ochotę na|Canı istemek|Lust haben auf|〜したい気分',
    'an eager dog holding a ball in its mouth, tail wagging, looking up expectantly as if inviting to play'
  ),
  feel(
    'vergogna',
    'avere vergogna',
    ['vergogna di'],
    ['Il cane ha rotto il cuscino e adesso ha vergogna.', 'Ho vergogna a parlare in pubblico.', 'Non avere vergogna: tutti fanno errori!'],
    '|To be ashamed, to be embarrassed|Tener vergüenza|Avoir honte|Stydět se|Wstydzić się|Utanmak|Sich schämen|恥ずかしい',
    'a guilty dog lying with its head down and paws over its eyes next to a torn cushion with some stuffing around'
  ),
  feel(
    'pazienza',
    'avere pazienza',
    [],
    ['Il cane ha pazienza e aspetta il biscotto.', 'Abbi pazienza, arrivo tra cinque minuti!', 'Con i bambini bisogna avere pazienza.'],
    '|To be patient|Tener paciencia|Avoir de la patience|Mít trpělivost|Mieć cierpliwość|Sabırlı olmak|Geduld haben|辛抱強い',
    'a patient dog sitting perfectly still with a small round plain cookie balanced on its nose, calmly waiting'
  ),
  feel(
    'coraggio',
    'avere coraggio',
    [],
    ['Il gattino ha coraggio: non scappa davanti al cane grande.', 'Ci vuole coraggio per cambiare lavoro.', 'Hai avuto coraggio a dire la verità.'],
    '|To be brave|Tener valor, ser valiente|Avoir du courage|Mít odvahu|Mieć odwagę|Cesur olmak|Mut haben|勇気がある',
    'a tiny brave kitten standing firmly and looking up at a big friendly dog in front of it, without running away'
  ),
  feel(
    'fortuna',
    'avere fortuna',
    [],
    ['Il coniglio ha fortuna: ha trovato un quadrifoglio.', 'Ho avuto fortuna: il treno era in ritardo anche lui!', 'Buona fortuna per l’esame!'],
    '|To be lucky|Tener suerte|Avoir de la chance|Mít štěstí|Mieć szczęście|Şanslı olmak|Glück haben|運がいい',
    'a happy little rabbit holding a four-leaf clover in its mouth on a small patch of grass'
  ),
  feel(
    'da-fare',
    'avere da fare',
    ['da fare', 'ho da fare', 'molto da fare'],
    ['Lo scoiattolo ha da fare: deve nascondere le noci.', 'Oggi non posso, ho molto da fare.', 'Hai da fare stasera?'],
    '|To be busy|Tener cosas que hacer|Avoir à faire, être occupé|Mít hodně práce|Mieć dużo do zrobienia|İşi olmak|Viel zu tun haben|忙しい',
    'a busy squirrel carrying an acorn in its mouth, with a small pile of nuts beside it, clearly working hard'
  ),
  feel(
    'bisogno',
    'avere bisogno di',
    ['bisogno', 'bisogno di', 'avere bisogno', 'ho bisogno'],
    ['Il gattino è sull’albero e ha bisogno di aiuto.', 'Ho bisogno di un caffè!', 'Hai bisogno di qualcosa?'],
    '|To need|Necesitar|Avoir besoin de|Potřebovat|Potrzebować|İhtiyacı olmak|Brauchen|〜が必要だ',
    'a small kitten clinging to a high branch of a tree, meowing for help, the whole short tree visible'
  ),
  // --- i piccoli malanni ----------------------------------------------------------------------
  feel(
    'mal-di-pancia',
    'avere mal di pancia',
    ['mal di pancia'],
    ['Il cucciolo ha mangiato troppo e ha mal di pancia.', 'Ho mal di pancia: oggi niente pizza.', 'Quando sono nervoso ho mal di pancia.'],
    '|To have a stomach ache|Tener dolor de barriga|Avoir mal au ventre|Bolí mě břicho|Boli mnie brzuch|Karnı ağrımak|Bauchschmerzen haben|お腹が痛い',
    'a puppy lying on its back on a cushion with a sad face, a paw on its round full tummy, a hot-water bottle next to it'
  ),
  feel(
    'mal-di-testa',
    'avere mal di testa',
    ['mal di testa'],
    ['Il cane ha mal di testa e tiene il ghiaccio in testa.', 'Ho mal di testa: spegni la musica, per favore.', 'Hai mal di testa? Prendi un’aspirina.'],
    '|To have a headache|Tener dolor de cabeza|Avoir mal à la tête|Bolí mě hlava|Boli mnie głowa|Başı ağrımak|Kopfschmerzen haben|頭が痛い',
    'a dog lying down with a sad face and a blue ice pack balanced on top of its head'
  ),
  feel(
    'raffreddore',
    'avere il raffreddore',
    ['raffreddore', 'il raffreddore'],
    ['Il gatto ha il raffreddore e starnutisce.', 'Ho il raffreddore: non sento i sapori.', 'In inverno i bambini hanno sempre il raffreddore.'],
    '|To have a cold|Estar resfriado|Être enrhumé|Mít rýmu|Mieć katar|Nezle olmak|Schnupfen haben|風邪をひいている',
    'a cat sneezing with eyes squeezed shut, next to a box of paper tissues and a few crumpled tissues'
  ),
  feel(
    'febbre',
    'avere la febbre',
    ['febbre', 'la febbre'],
    ['Il cucciolo ha la febbre e resta sotto la coperta.', 'Ho la febbre: oggi non vado al lavoro.', 'Hai la febbre? Misuriamola.'],
    '|To have a temperature, a fever|Tener fiebre|Avoir de la fièvre|Mít horečku|Mieć gorączkę|Ateşi olmak|Fieber haben|熱がある',
    'a sick puppy lying under a small blanket with tired eyes, a digital thermometer in its mouth'
  ),
  feel(
    'prurito',
    'avere prurito',
    ['prurito'],
    ['Il cane ha prurito e si gratta l’orecchio.', 'Questo maglione mi dà prurito.', 'Ho prurito alla schiena: mi gratti?'],
    '|To be itchy|Tener picor|Avoir des démangeaisons|Svědí mě to|Swędzi mnie|Kaşınmak|Juckreiz haben|かゆい',
    'a dog sitting and scratching behind its ear with its back leg, eyes half closed'
  ),
  feel(
    'singhiozzo',
    'avere il singhiozzo',
    ['singhiozzo', 'il singhiozzo'],
    ['Il cucciolo ha il singhiozzo e salta a ogni «hic».', 'Ho il singhiozzo: spaventami!', 'Quando ride troppo, gli viene il singhiozzo.'],
    '|To have hiccups|Tener hipo|Avoir le hoquet|Mít škytavku|Mieć czkawkę|Hıçkırık tutmak|Schluckauf haben|しゃっくりが出る',
    'a surprised puppy in the middle of a hiccup, its whole small body jumping a little off the floor, eyes wide open'
  ),
];

// L'esercizio da trascinare «Che cosa ha?»: in ogni foto un animale che sente piu' cose insieme.
// `matches` elenca TUTTE le parole giuste (una giusta che manca diventa una risposta sbagliata).
const describe = (slug, subject, matches) => ({
  image: `sensazioni/${slug}`,
  slug,
  word: slug,
  bare: slug,
  subject,
  matches,
  never: [],
  noMatch: false,
});

export const sensationDescribeRows = [
  describe('che-cosa-ha-sole', 'a dog panting with its tongue out lying in strong sunlight next to an empty water bowl', [
    'caldo',
    'sete',
  ]),
  describe('che-cosa-ha-neve', 'a kitten wearing a small red knitted hat and scarf, shivering and yawning with sleepy half-closed eyes, sitting on a small round patch of snow with a few big snowflakes falling around it, its breath visible in the cold air', [
    'freddo',
    'sonno',
  ]),
  describe('che-cosa-ha-frigo', 'a puppy sitting in front of a closed refrigerator, licking its lips and staring at the door', [
    'fame',
    'voglia',
    'pazienza',
  ]),
  describe('che-cosa-ha-albero', 'a frightened kitten clinging to a high branch of a short tree, ears flat, crying for help', [
    'paura',
    'bisogno',
  ]),
  describe('che-cosa-ha-coperta', 'a sick dog under a blanket with a thermometer in its mouth and a box of tissues next to it', [
    'febbre',
    'raffreddore',
  ]),
  describe('che-cosa-ha-noci', 'a squirrel running fast while carrying a big acorn, a pile of nuts behind it', [
    'fretta',
    'da-fare',
  ]),
  describe('che-cosa-ha-pancia', 'a sleepy puppy lying on its back next to an empty bowl, its tummy round and full, a sad face', [
    'mal-di-pancia',
    'sonno',
  ]),
  describe('che-cosa-ha-palla', 'a happy rabbit next to a four-leaf clover, a ball beside it, looking eager to play', [
    'fortuna',
    'voglia',
  ]),
];

export const sensationExampleWord = { bare: 'fame', withArticle: 'avere fame' };

export const sensationTranslationExercises = [
  tr(
    'Ho fame e ho sete.',
    'I’m hungry and thirsty.',
    'Tengo hambre y sed.',
    'J’ai faim et soif.',
    'Mám hlad a žízeň.',
    'Jestem głodny i chce mi się pić.',
    'Acıktım ve susadım.',
    'Ich habe Hunger und Durst.',
    'お腹がすいて、喉も渇いています。'
  ),
  tr(
    'Hai freddo? Chiudo la finestra.',
    'Are you cold? I’ll close the window.',
    '¿Tienes frío? Cierro la ventana.',
    'Tu as froid ? Je ferme la fenêtre.',
    'Je ti zima? Zavřu okno.',
    'Zimno ci? Zamknę okno.',
    'Üşüdün mü? Pencereyi kapatıyorum.',
    'Ist dir kalt? Ich mache das Fenster zu.',
    '寒いですか？窓を閉めますね。'
  ),
  tr(
    'Mia figlia ha paura del buio.',
    'My daughter is afraid of the dark.',
    'Mi hija tiene miedo a la oscuridad.',
    'Ma fille a peur du noir.',
    'Moje dcera se bojí tmy.',
    'Moja córka boi się ciemności.',
    'Kızım karanlıktan korkuyor.',
    'Meine Tochter hat Angst vor der Dunkelheit.',
    '娘は暗闇を怖がっています。'
  ),
  tr(
    'Scusa, ho fretta: ti chiamo stasera.',
    'Sorry, I’m in a hurry: I’ll call you tonight.',
    'Perdona, tengo prisa: te llamo esta noche.',
    'Désolé, je suis pressé : je t’appelle ce soir.',
    'Promiň, spěchám: zavolám ti večer.',
    'Przepraszam, spieszę się: zadzwonię wieczorem.',
    'Kusura bakma, acelem var: akşam seni ararım.',
    'Entschuldige, ich habe es eilig: Ich rufe dich heute Abend an.',
    'ごめん、急いでいるので今夜電話するね。'
  ),
  tr(
    'Stasera ho voglia di una pizza.',
    'Tonight I feel like a pizza.',
    'Esta noche tengo ganas de una pizza.',
    'Ce soir, j’ai envie d’une pizza.',
    'Dnes večer mám chuť na pizzu.',
    'Dziś wieczorem mam ochotę na pizzę.',
    'Bu akşam canım pizza istiyor.',
    'Heute Abend habe ich Lust auf eine Pizza.',
    '今夜はピザが食べたい気分です。'
  ),
  tr(
    'Ho bisogno di aiuto.',
    'I need help.',
    'Necesito ayuda.',
    'J’ai besoin d’aide.',
    'Potřebuji pomoc.',
    'Potrzebuję pomocy.',
    'Yardıma ihtiyacım var.',
    'Ich brauche Hilfe.',
    '助けが必要です。'
  ),
  tr(
    'Non vengo: ho mal di testa e ho sonno.',
    'I’m not coming: I have a headache and I’m sleepy.',
    'No voy: me duele la cabeza y tengo sueño.',
    'Je ne viens pas : j’ai mal à la tête et j’ai sommeil.',
    'Nepřijdu: bolí mě hlava a jsem ospalý.',
    'Nie przyjdę: boli mnie głowa i chce mi się spać.',
    'Gelmiyorum: başım ağrıyor ve uykum var.',
    'Ich komme nicht: Ich habe Kopfschmerzen und bin müde.',
    '行きません。頭が痛くて眠いんです。'
  ),
  tr(
    'Hai ragione, scusa: avevo torto io.',
    'You’re right, sorry: I was wrong.',
    'Tienes razón, perdona: me equivocaba yo.',
    'Tu as raison, pardon : c’est moi qui avais tort.',
    'Máš pravdu, promiň: mýlil jsem se já.',
    'Masz rację, przepraszam: to ja się myliłem.',
    'Haklısın, kusura bakma: haksız olan bendim.',
    'Du hast recht, entschuldige: Ich hatte unrecht.',
    'あなたの言うとおりです。ごめんなさい、間違っていたのは私です。'
  ),
];
