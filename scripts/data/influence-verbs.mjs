// I verbi della lezione «Influenzare gli altri» (2026-10-01).
//
// Dal 2026-10-06 l'ordine della pagina e' quello di `influenceVerbGroups` (in fondo al file): una scala da
// «costringere» a «proibire», voluta da Martin, con i titoli dei gruppi; aggiunti costringere e proibire (35 verbi).
// I gruppi descritti qui sotto sono quelli della prima versione.
//
// Chiesta da Martin («verbi di influenza come obbligare, collaborare, incoraggiare, ostacolare, impedire:
// mi sembrano molto importanti»). Sei gruppi: spingere a fare (8: influenzare, incoraggiare, convincere,
// consigliare, motivare, ispirare, dare il buon esempio, insistere), imporre (7: obbligare, comandare,
// permettere, vietare, minacciare, punire, fare pressione), frenare (7: impedire, ostacolare, scoraggiare,
// sconsigliare, interrompere, distrarre, trattenere), insieme (5: collaborare, sostenere, difendere,
// coinvolgere, mettersi d'accordo), rispondere (3: dare retta, cedere, opporsi) e di nascosto (3:
// ingannare, manipolare, corrompere).
// Non ripete aiutare, proteggere, condividere, seguire, spingere («I verbi degli animali»), invitare,
// obbedire, sgridare, rispettare, fidarsi, prendere in giro («I verbi delle relazioni»), premiare («I verbi
// dello sport»). Unica eccezione voluta: «collaborare» c'è già nei verbi dell'ufficio, ma Martin l'ha
// chiesto per nome; la foto è la stessa (`verbi-ufficio/collaborare`).
//
// Esercizio come «I verbi della città» (`photoRows`). I verbi che una foto sola non distingue
// (incoraggiare/motivare/sostenere, impedire/ostacolare/trattenere, ingannare/manipolare…) si accettano a
// vicenda in `fits`.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-influenza`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const iv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  const reuse = scene.startsWith('verbi-ufficio/');
  return {
    image: reuse ? scene : `verbi-influenza/${slug}`,
    slug,
    word,
    bare: word,
    examples,
    subject: reuse ? null : scene,
    matches: [slug, ...fits],
    never: [],
    noMatch: false,
    gloss: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, i === 0 ? def : glosses[i - 1]])),
  };
};

export const influenceVerbs = [
  // --- imporre -------------------------------------------------------------------------------
  iv(
    'costringere',
    'costringere',
    'Obbligare qualcuno con la forza, o perché non ha altra scelta.',
    [
      'to force, to compel',
      'forzar, obligar',
      'contraindre, forcer',
      'donutit',
      'zmusić',
      'zorla yaptırmak',
      'zwingen',
      '無理やり〜させる',
    ],
    [
      'Lo sciopero dei treni mi ha costretto a prendere un taxi.',
      'Nessuno ti costringe a restare.',
      'La febbre l’ha costretta a stare a letto tutta la settimana.',
    ],
    'a father firmly leading his reluctant little son by the hand into a dentist’s office, the boy leaning back and dragging his feet, a dentist chair in the background',
    ['obbligare']
  ),
  iv(
    'obbligare',
    'obbligare',
    'Far fare a qualcuno una cosa che non vuole fare.',
    ['to force, to oblige', 'obligar', 'obliger', 'nutit', 'zmuszać', 'zorlamak', 'zwingen', '強いる'],
    [
      'Nessuno ti obbliga a venire.',
      'Da piccolo mia madre mi obbligava a mangiare le verdure.',
      'La legge obbliga a mettere la cintura in macchina.',
    ],
    'a mother pointing firmly at a plate of broccoli while her reluctant young son sits at the kitchen table with his arms crossed, pouting',
    ['comandare', 'costringere']
  ),
  iv(
    'comandare',
    'comandare',
    'Dire agli altri che cosa devono fare, perché si ha il potere di farlo.',
    [
      'to give orders, to be in charge',
      'mandar',
      'commander',
      'velet, rozkazovat',
      'rozkazywać',
      'emir vermek',
      'befehlen',
      '命令する',
    ],
    ['In questa casa comando io!', 'Il capitano comanda la nave.', 'Non mi piace chi vuole sempre comandare.'],
    'a firefighter chief in a helmet pointing ahead and giving orders to three firefighters who listen and get ready to move, a red fire truck behind them',
    ['obbligare']
  ),
  iv(
    'fare-pressione',
    'fare pressione',
    'Spingere qualcuno con insistenza a decidere in fretta.',
    [
      'to put pressure on',
      'presionar',
      'faire pression',
      'vyvíjet nátlak',
      'wywierać presję',
      'baskı yapmak',
      'Druck machen',
      '圧力をかける',
    ],
    [
      'Il venditore mi faceva pressione per firmare subito.',
      'Non farmi pressione: ho bisogno di tempo.',
      'I suoi amici gli fanno pressione per uscire ogni sera.',
    ],
    'a pushy salesman in a suit leaning over a table towards an uneasy woman, holding out a pen to her and tapping his wristwatch, a completely blank white sheet of paper on the table, no letters and no words anywhere',
    ['insistere', 'convincere']
  ),
  iv(
    'minacciare',
    'minacciare',
    'Dire a qualcuno che gli succederà qualcosa di brutto.',
    ['to threaten', 'amenazar', 'menacer', 'vyhrožovat', 'grozić', 'tehdit etmek', 'drohen', '脅す'],
    [
      'Il vicino ci ha minacciato di chiamare la polizia.',
      'Mi minacci? Non ho paura!',
      'Il cielo minaccia pioggia: prendi l’ombrello.',
    ],
    'an angry elderly neighbour standing in a doorway wagging his finger threateningly at a worried young man who is holding a big loudspeaker',
    ['fare-pressione']
  ),
  iv(
    'insistere',
    'insistere',
    'Chiedere o dire una cosa molte volte, senza arrendersi.',
    ['to insist', 'insistir', 'insister', 'naléhat', 'nalegać', 'ısrar etmek', 'darauf bestehen', 'しつこく頼む'],
    [
      'Se insisti, vengo alla festa.',
      'Il bambino insiste: vuole il gelato.',
      'Ho insistito tanto e alla fine ha detto di sì.',
    ],
    'a little boy in a toy shop pulling his mother’s sleeve and pointing at a big toy dinosaur on a shelf, pleading, while the mother sighs',
    ['convincere', 'fare-pressione']
  ),
  // --- convincere ----------------------------------------------------------------------------
  iv(
    'convincere',
    'convincere',
    'Far cambiare idea a qualcuno con buone ragioni.',
    ['to convince', 'convencer', 'convaincre', 'přesvědčit', 'przekonać', 'ikna etmek', 'überzeugen', '説得する'],
    [
      'Mi hai convinto: vengo anch’io!',
      'Ho convinto mio fratello a smettere di fumare.',
      'Non sono convinta: ci devo pensare.',
    ],
    'a young man explaining something with open hands to a doubtful friend at a café table, the friend starting to nod and smile',
    ['influenzare', 'insistere']
  ),
  iv(
    'influenzare',
    'influenzare',
    'Avere un effetto sulle idee o sulle scelte di qualcuno.',
    [
      'to influence',
      'influir en',
      'influencer',
      'ovlivňovat',
      'wpływać na',
      'etkilemek',
      'beeinflussen',
      '影響を与える',
    ],
    [
      'Gli amici influenzano molto le nostre scelte.',
      'Non lasciarti influenzare dalla pubblicità!',
      'Mia nonna mi ha influenzato tanto: grazie a lei amo leggere.',
    ],
    'a teenage girl sitting on a sofa looking at her phone, where a smiling young woman shows a pair of white sneakers, and the girl is wearing exactly the same white sneakers',
    ['ispirare']
  ),
  // --- incoraggiare --------------------------------------------------------------------------
  iv(
    'incoraggiare',
    'incoraggiare',
    'Dare coraggio e fiducia a qualcuno perché faccia qualcosa.',
    ['to encourage', 'animar', 'encourager', 'povzbuzovat', 'zachęcać', 'cesaretlendirmek', 'ermutigen', '励ます'],
    [
      'La maestra incoraggia i bambini a fare domande.',
      'Mio padre mi ha incoraggiato a cambiare lavoro.',
      '«Dai, ce la fai!» mi incoraggiava mia sorella.',
    ],
    'a smiling father running beside his little daughter who rides a bicycle without training wheels for the first time, cheering her on with his fist raised',
    ['motivare', 'sostenere']
  ),
  iv(
    'motivare',
    'motivare',
    'Dare a qualcuno la voglia e l’energia di fare qualcosa.',
    ['to motivate', 'motivar', 'motiver', 'motivovat', 'motywować', 'motive etmek', 'motivieren', 'やる気にさせる'],
    [
      'Un buon capo sa motivare la squadra.',
      'La musica mi motiva quando corro.',
      'Che cosa ti motiva a studiare l’italiano?',
    ],
    'an energetic coach in a plain tracksuit talking with passion to a circle of teenage players who listen with determined faces, their hands stacked together in the middle',
    ['incoraggiare', 'coinvolgere']
  ),
  iv(
    'ispirare',
    'ispirare',
    'Dare a qualcuno un’idea o un modello da seguire.',
    [
      'to inspire',
      'inspirar',
      'inspirer',
      'inspirovat',
      'inspirować',
      'ilham vermek',
      'inspirieren',
      'インスピレーションを与える',
    ],
    [
      'Questo viaggio mi ha ispirato un romanzo.',
      'Mia madre mi ispira: non si arrende mai.',
      'Il pittore si è ispirato al mare della Sicilia.',
    ],
    'a little girl watching with wonder an older woman painting a colourful landscape at an easel, the girl holding her own small paintbrush',
    ['influenzare', 'dare-il-buon-esempio']
  ),
  iv(
    'dare-il-buon-esempio',
    'dare il buon esempio',
    'Comportarsi bene perché gli altri facciano lo stesso.',
    [
      'to set a good example',
      'dar buen ejemplo',
      'montrer l’exemple',
      'jít příkladem',
      'dawać dobry przykład',
      'iyi örnek olmak',
      'mit gutem Beispiel vorangehen',
      '良い手本を示す',
    ],
    [
      'I genitori devono dare il buon esempio.',
      'Il capitano dà il buon esempio: arriva sempre per primo.',
      'A cena ho dato il buon esempio e ho spento il telefono.',
    ],
    'a father in a park picking up a plastic bottle from the grass and dropping it into a bin, while his young son watches him and picks up another bottle to do the same',
    ['ispirare']
  ),
  iv(
    'consigliare',
    'consigliare',
    'Dire a qualcuno che cosa è meglio fare.',
    [
      'to advise, to recommend',
      'aconsejar',
      'conseiller',
      'radit',
      'radzić',
      'tavsiye etmek',
      'raten, empfehlen',
      '勧める',
    ],
    [
      'Il medico mi ha consigliato di camminare di più.',
      'Che libro mi consigli?',
      'Ti consiglio di partire presto: c’è traffico.',
    ],
    'a friendly bookshop assistant handing a book to a young woman customer and pointing at it, recommending it, shelves of books with plain covers behind them'
  ),
  iv(
    'permettere',
    'permettere',
    'Dire di sì, lasciare che qualcuno faccia una cosa.',
    ['to allow, to let', 'permitir', 'permettre', 'dovolit', 'pozwalać', 'izin vermek', 'erlauben', '許可する'],
    [
      'I miei genitori mi permettono di uscire fino a mezzanotte.',
      'Mi permetti di dire una cosa?',
      'Il medico non mi permette di fare sport per un mese.',
    ],
    'a smiling father handing the car keys to his happy teenage son in front of a small car parked in the driveway'
  ),
  // --- insieme -------------------------------------------------------------------------------
  iv(
    'collaborare',
    'collaborare',
    'Lavorare insieme ad altri per lo stesso obiettivo.',
    [
      'to collaborate, to work together',
      'colaborar',
      'collaborer',
      'spolupracovat',
      'współpracować',
      'iş birliği yapmak',
      'zusammenarbeiten',
      '協力する',
    ],
    [
      'Per vincere dobbiamo collaborare.',
      'Collaboro con un’associazione che aiuta gli anziani.',
      'I vicini hanno collaborato per pulire il cortile.',
    ],
    'verbi-ufficio/collaborare',
    ['coinvolgere', 'mettersi-daccordo']
  ),
  iv(
    'mettersi-daccordo',
    'mettersi d’accordo',
    'Trovare insieme una soluzione che va bene a tutti.',
    [
      'to agree, to come to an agreement',
      'ponerse de acuerdo',
      'se mettre d’accord',
      'dohodnout se',
      'dogadać się',
      'anlaşmak',
      'sich einigen',
      '話をまとめる',
    ],
    [
      'Ci mettiamo d’accordo per sabato?',
      'Alla fine ci siamo messi d’accordo sul prezzo.',
      'I fratelli non riescono a mettersi d’accordo sul film.',
    ],
    'two smiling neighbours shaking hands over a low garden fence, one of them holding a small wall calendar, as if they have just agreed on something',
    ['collaborare']
  ),
  iv(
    'coinvolgere',
    'coinvolgere',
    'Far partecipare qualcuno a un’attività.',
    [
      'to involve, to get someone involved',
      'involucrar',
      'impliquer',
      'zapojit',
      'angażować',
      'dahil etmek',
      'einbeziehen',
      '仲間に入れる',
    ],
    [
      'La maestra coinvolge anche i bambini più timidi.',
      'Mi hanno coinvolto nell’organizzazione della festa.',
      'Non coinvolgermi nei tuoi problemi!',
    ],
    'a cheerful young teacher taking the hand of a shy boy and leading him into a circle of children playing a game in a schoolyard',
    ['incoraggiare']
  ),
  iv(
    'sostenere',
    'sostenere',
    'Stare vicino a qualcuno e aiutarlo, soprattutto nei momenti difficili.',
    ['to support', 'apoyar', 'soutenir', 'podporovat', 'wspierać', 'desteklemek', 'unterstützen', '支える'],
    [
      'La mia famiglia mi sostiene sempre.',
      'Ti sosterrò sempre, anche se sbagli.',
      'Molti cittadini sostengono il progetto del nuovo parco.',
    ],
    'an older woman with her hand on the shoulder of a nervous young woman in a corridor before a job interview, giving her a thumbs up and a warm smile',
    ['incoraggiare']
  ),
  iv(
    'difendere',
    'difendere',
    'Proteggere qualcuno da un attacco o da un’ingiustizia.',
    ['to defend, to stand up for', 'defender', 'défendre', 'bránit', 'bronić', 'savunmak', 'verteidigen', 'かばう'],
    ['Mia sorella mi difende sempre.', 'L’avvocato difende il suo cliente.', 'Devi difendere le tue idee.'],
    'a brave girl in a schoolyard standing with her arms spread in front of a smaller boy, facing a taller boy who was teasing him',
    ['opporsi']
  ),
  // --- scoraggiare ---------------------------------------------------------------------------
  iv(
    'sconsigliare',
    'sconsigliare',
    'Dire a qualcuno che è meglio non fare una cosa.',
    [
      'to advise against',
      'desaconsejar',
      'déconseiller',
      'nedoporučovat',
      'odradzać',
      'tavsiye etmemek',
      'abraten',
      'やめたほうがいいと言う',
    ],
    [
      'Il medico mi ha sconsigliato di correre.',
      'Ti sconsiglio quel ristorante: è carissimo.',
      'Me l’hanno sconsigliato, ma l’ho fatto lo stesso.',
    ],
    'a doctor in a white coat gently shaking her head and raising one finger at a patient who is holding a big bottle of sugary fizzy drink',
    ['consigliare', 'vietare']
  ),
  iv(
    'scoraggiare',
    'scoraggiare',
    'Togliere il coraggio o la voglia di fare qualcosa.',
    [
      'to discourage',
      'desanimar',
      'décourager',
      'odrazovat',
      'zniechęcać',
      'cesaretini kırmak',
      'entmutigen',
      'やる気をなくさせる',
    ],
    ['Non scoraggiarti: tutti sbagliano!', 'Le critiche lo hanno scoraggiato.', 'Il prezzo alto scoraggia i turisti.'],
    'a young man showing his drawing to a friend who shrugs and shakes his head with a bored face, the young man looking sad and disappointed'
  ),
  iv(
    'distrarre',
    'distrarre',
    'Portare l’attenzione di qualcuno lontano da quello che fa.',
    [
      'to distract',
      'distraer',
      'distraire',
      'rozptylovat',
      'rozpraszać',
      'dikkatini dağıtmak',
      'ablenken',
      '気を散らす',
    ],
    [
      'Non distrarmi, sto studiando!',
      'Il telefono mi distrae sempre.',
      'Ho distratto il bambino con una canzone e ha smesso di piangere.',
    ],
    'a young woman trying to study at a desk with open books while her friend leans in and waves a phone with a funny video in front of her face',
    ['interrompere']
  ),
  iv(
    'interrompere',
    'interrompere',
    'Parlare mentre un altro parla e fermarlo; fermare una cosa a metà.',
    [
      'to interrupt',
      'interrumpir',
      'interrompre',
      'přerušit',
      'przerywać',
      'sözünü kesmek',
      'unterbrechen',
      'さえぎる',
    ],
    [
      'Scusa se ti interrompo, ma è urgente.',
      'Non interrompermi, fammi finire!',
      'Abbiamo interrotto la riunione per il pranzo.',
    ],
    'in a meeting room a man raising his hand and talking over a woman colleague who is speaking; she stops mid-sentence with an annoyed face'
  ),
  // --- ostacolare ----------------------------------------------------------------------------
  iv(
    'trattenere',
    'trattenere',
    'Tenere fermo qualcuno che vuole andare via o fare qualcosa.',
    ['to hold back', 'retener', 'retenir', 'zadržet', 'powstrzymać', 'tutmak', 'zurückhalten', '引き止める'],
    [
      'Volevo andare via, ma i miei amici mi hanno trattenuto.',
      'Non ti trattengo: so che hai fretta.',
      'Ho trattenuto mio fratello prima che litigasse con il vicino.',
    ],
    'a young woman holding the arm of her angry friend to stop him from walking towards an argument, the friend leaning forward',
    ['impedire']
  ),
  iv(
    'ostacolare',
    'ostacolare',
    'Mettersi in mezzo e rendere difficile quello che fa un altro.',
    [
      'to hinder, to get in the way',
      'obstaculizar',
      'entraver',
      'překážet',
      'przeszkadzać',
      'engellemek',
      'behindern',
      '邪魔する',
    ],
    [
      'Il difensore ostacola l’attaccante.',
      'La burocrazia ostacola chi vuole aprire un’attività.',
      'Non voglio ostacolarti: fai come credi.',
    ],
    'a basketball defender with both arms raised blocking a player who is trying to pass the ball, on an outdoor court, plain jerseys without numbers',
    ['impedire']
  ),
  // --- proibire ------------------------------------------------------------------------------
  iv(
    'impedire',
    'impedire',
    'Fare in modo che una cosa non succeda o che qualcuno non possa farla.',
    ['to prevent, to stop', 'impedir', 'empêcher', 'zabránit', 'uniemożliwić', 'engel olmak', 'verhindern', '防ぐ'],
    ['La pioggia ci ha impedito di uscire.', 'Il rumore mi impedisce di dormire.', 'Nessuno può impedirti di sognare.'],
    'a toddler at home trying to climb the stairs but stopped by a closed white safety gate, the mother smiling behind',
    ['ostacolare', 'trattenere']
  ),
  iv(
    'vietare',
    'vietare',
    'Dire che una cosa non si può fare.',
    ['to forbid, to ban', 'prohibir', 'interdire', 'zakázat', 'zakazywać', 'yasaklamak', 'verbieten', '禁止する'],
    [
      'Qui è vietato fumare.',
      'Il medico mi ha vietato il caffè.',
      'I genitori di Luca gli vietano di usare il telefono a tavola.',
    ],
    'a museum guard in uniform raising her open hand to stop a tourist who is about to take a photo of a painting, the tourist lowering his camera',
    ['impedire', 'proibire']
  ),
  iv(
    'proibire',
    'proibire',
    'Dire con autorità che una cosa non si deve fare.',
    [
      'to prohibit, to forbid',
      'prohibir',
      'interdire, défendre',
      'zakázat',
      'zabronić',
      'yasaklamak',
      'verbieten',
      '禁じる',
    ],
    [
      'Il medico gli ha proibito di fumare.',
      'In questa scuola è proibito usare il telefono in classe.',
      'Da ragazza mio padre mi proibiva di uscire la sera.',
    ],
    'a strict father standing in front of the front door with his arm stretched across it, blocking his teenage daughter who holds her jacket and wants to go out, a dark evening window behind',
    ['vietare', 'impedire']
  ),
  iv(
    'punire',
    'punire',
    'Dare una conseguenza negativa a chi ha fatto qualcosa di sbagliato.',
    ['to punish', 'castigar', 'punir', 'trestat', 'karać', 'cezalandırmak', 'bestrafen', '罰する'],
    [
      'I miei genitori mi hanno punito: niente televisione per una settimana.',
      'La legge punisce chi guida dopo aver bevuto.',
      'Non punire il cane: non ha capito.',
    ],
    'a mother holding a confiscated video game controller high in her raised hand, out of reach, while her sulky teenage son sits on the sofa with his arms crossed and a switched-off television behind',
    ['vietare']
  ),
  // --- di-nascosto ---------------------------------------------------------------------------
  iv(
    'ingannare',
    'ingannare',
    'Far credere a qualcuno una cosa falsa.',
    ['to deceive, to trick', 'engañar', 'tromper', 'oklamat', 'oszukiwać', 'kandırmak', 'täuschen', 'だます'],
    [
      'Le apparenze ingannano.',
      'Il venditore mi ha ingannato: la borsa era falsa.',
      'Non farti ingannare dalle offerte troppo belle.',
    ],
    'a street trickster playing the three-cup game on a small folding table, a surprised tourist lifting an empty cup while the trickster smiles slyly',
    ['manipolare']
  ),
  iv(
    'manipolare',
    'manipolare',
    'Controllare qualcuno di nascosto, per fargli fare quello che si vuole.',
    ['to manipulate', 'manipular', 'manipuler', 'manipulovat', 'manipulować', 'manipüle etmek', 'manipulieren', '操る'],
    [
      'Certe pubblicità cercano di manipolarci.',
      'Non mi piace: manipola tutti i suoi amici.',
      'Si è accorta che il suo capo la manipolava.',
    ],
    'the hands of a man in a dark suit holding the wooden control bar and strings of a marionette dressed like a little office worker',
    ['ingannare', 'influenzare']
  ),
  iv(
    'corrompere',
    'corrompere',
    'Dare soldi o regali a qualcuno perché faccia una cosa disonesta.',
    ['to bribe', 'sobornar', 'soudoyer', 'uplácet', 'przekupić', 'rüşvet vermek', 'bestechen', '買収する'],
    [
      'Ha cercato di corrompere il vigile con cento euro.',
      'Un giudice onesto non si fa corrompere.',
      'Il politico è stato arrestato perché corrompeva i funzionari.',
    ],
    'under a table, the hand of a man in a suit secretly passing a thick envelope full of banknotes to the hand of another man in a suit'
  ),
  // --- rispondere ----------------------------------------------------------------------------
  iv(
    'dare-retta',
    'dare retta (a)',
    'Ascoltare un consiglio e fare come dice.',
    [
      'to listen to, to take advice',
      'hacer caso',
      'écouter (un conseil)',
      'poslechnout',
      'posłuchać',
      'söz dinlemek',
      'auf jemanden hören',
      '言うことを聞く',
    ],
    ['Dammi retta: porta il cappotto.', 'Non mi dai mai retta!', 'Ho dato retta al medico e adesso sto meglio.'],
    'a teenage boy at the front door putting on a warm scarf while his grandmother points at the snowy window, both smiling',
    ['cedere']
  ),
  iv(
    'cedere',
    'cedere',
    'Smettere di opporsi e fare come vuole un altro.',
    ['to give in', 'ceder', 'céder', 'ustoupit', 'ustąpić', 'boyun eğmek', 'nachgeben', '折れる'],
    ['Alla fine ho ceduto e gli ho comprato il gelato.', 'Non cedere alle minacce!', 'Lui insisteva e lei ha ceduto.'],
    'a tired father in a supermarket aisle handing a lollipop to a little girl who has stopped crying and smiles triumphantly',
    ['dare-retta']
  ),
  iv(
    'opporsi',
    'opporsi',
    'Dire di no con decisione, non accettare.',
    [
      'to oppose, to object',
      'oponerse',
      's’opposer',
      'postavit se proti',
      'sprzeciwiać się',
      'karşı çıkmak',
      'sich widersetzen',
      '反対する',
    ],
    [
      'Mi oppongo a questa decisione.',
      'I genitori si sono opposti al matrimonio.',
      'Molti cittadini si oppongono alla nuova strada.',
    ],
    'a calm woman with her arms crossed, firmly shaking her head and refusing a blank document that a man in a suit is holding out to her',
    ['difendere']
  ),
];

// I gruppi della pagina, in ordine: una scala da «costringere» a «proibire», con «insieme» al centro, e in
// fondo i due gruppi fuori scala. Le etichette nelle 9 lingue sono in influence-verbs-pages.mjs.
export const influenceVerbGroups = [
  { id: 'imporre', slugs: ['costringere', 'obbligare', 'comandare', 'fare-pressione', 'minacciare', 'insistere'] },
  { id: 'convincere', slugs: ['convincere', 'influenzare'] },
  {
    id: 'incoraggiare',
    slugs: ['incoraggiare', 'motivare', 'ispirare', 'dare-il-buon-esempio', 'consigliare', 'permettere'],
  },
  { id: 'insieme', slugs: ['collaborare', 'mettersi-daccordo', 'coinvolgere', 'sostenere', 'difendere'] },
  { id: 'scoraggiare', slugs: ['sconsigliare', 'scoraggiare', 'distrarre', 'interrompere'] },
  { id: 'ostacolare', slugs: ['trattenere', 'ostacolare'] },
  { id: 'proibire', slugs: ['impedire', 'vietare', 'proibire', 'punire'] },
  { id: 'di-nascosto', slugs: ['ingannare', 'manipolare', 'corrompere'] },
  { id: 'rispondere', slugs: ['dare-retta', 'cedere', 'opporsi'] },
];

export const influenceVerbTranslationExercises = [
  tr(
    'Mia sorella mi ha incoraggiato a imparare il cinese.',
    'My sister encouraged me to learn Chinese.',
    'Mi hermana me animó a aprender chino.',
    'Ma sœur m’a encouragé à apprendre le chinois.',
    'Sestra mě povzbudila, abych se naučil čínsky.',
    'Siostra zachęciła mnie do nauki chińskiego.',
    'Kız kardeşim beni Çince öğrenmeye cesaretlendirdi.',
    'Meine Schwester hat mich ermutigt, Chinesisch zu lernen.',
    '姉が中国語を勉強するように励ましてくれました。'
  ),
  tr(
    'Il medico mi ha consigliato di dormire di più.',
    'The doctor advised me to sleep more.',
    'El médico me aconsejó dormir más.',
    'Le médecin m’a conseillé de dormir plus.',
    'Lékař mi poradil, abych víc spal.',
    'Lekarz poradził mi, żebym więcej spał.',
    'Doktor bana daha çok uyumamı tavsiye etti.',
    'Der Arzt hat mir geraten, mehr zu schlafen.',
    '医者にもっと寝るように勧められました。'
  ),
  tr(
    'Nessuno ti obbliga a venire.',
    'Nobody is forcing you to come.',
    'Nadie te obliga a venir.',
    'Personne ne t’oblige à venir.',
    'Nikdo tě nenutí přijít.',
    'Nikt cię nie zmusza, żebyś przyszedł.',
    'Kimse seni gelmeye zorlamıyor.',
    'Niemand zwingt dich zu kommen.',
    'だれも無理に来いとは言っていません。'
  ),
  tr(
    'La pioggia ci ha impedito di andare al mare.',
    'The rain stopped us from going to the seaside.',
    'La lluvia nos impidió ir a la playa.',
    'La pluie nous a empêchés d’aller à la mer.',
    'Déšť nám zabránil jet k moři.',
    'Deszcz nie pozwolił nam pojechać nad morze.',
    'Yağmur denize gitmemize engel oldu.',
    'Der Regen hat uns daran gehindert, ans Meer zu fahren.',
    '雨のせいで海に行けませんでした。'
  ),
  tr(
    'I miei genitori non mi permettono di uscire la sera.',
    'My parents don’t let me go out in the evening.',
    'Mis padres no me permiten salir por la noche.',
    'Mes parents ne me permettent pas de sortir le soir.',
    'Rodiče mi nedovolí chodit večer ven.',
    'Rodzice nie pozwalają mi wychodzić wieczorem.',
    'Ailem akşamları dışarı çıkmama izin vermiyor.',
    'Meine Eltern erlauben mir nicht, abends auszugehen.',
    '両親は夜の外出を許してくれません。'
  ),
  tr(
    'Non interrompermi, fammi finire!',
    'Don’t interrupt me, let me finish!',
    '¡No me interrumpas, déjame terminar!',
    'Ne m’interromps pas, laisse-moi finir !',
    'Nepřerušuj mě, nech mě domluvit!',
    'Nie przerywaj mi, daj mi skończyć!',
    'Sözümü kesme, bitirmeme izin ver!',
    'Unterbrich mich nicht, lass mich ausreden!',
    '話をさえぎらないで、最後まで言わせて！'
  ),
  tr(
    'Alla fine ci siamo messi d’accordo sul prezzo.',
    'In the end we agreed on the price.',
    'Al final nos pusimos de acuerdo en el precio.',
    'Finalement, nous nous sommes mis d’accord sur le prix.',
    'Nakonec jsme se dohodli na ceně.',
    'W końcu dogadaliśmy się co do ceny.',
    'Sonunda fiyatta anlaştık.',
    'Am Ende haben wir uns auf den Preis geeinigt.',
    '最後には値段について話がまとまりました。'
  ),
  tr(
    'Dammi retta: porta l’ombrello.',
    'Listen to me: take an umbrella.',
    'Hazme caso: lleva el paraguas.',
    'Écoute-moi : prends ton parapluie.',
    'Poslechni mě: vezmi si deštník.',
    'Posłuchaj mnie: weź parasol.',
    'Beni dinle: şemsiyeni al.',
    'Hör auf mich: Nimm den Regenschirm mit.',
    '私の言うことを聞いて、傘を持っていって。'
  ),
  tr(
    'Il bambino insisteva e alla fine la mamma ha ceduto.',
    'The child kept insisting and in the end his mum gave in.',
    'El niño insistía y al final su madre cedió.',
    'L’enfant insistait et finalement sa mère a cédé.',
    'Dítě naléhalo a máma nakonec ustoupila.',
    'Dziecko nalegało i w końcu mama ustąpiła.',
    'Çocuk ısrar ediyordu ve sonunda annesi boyun eğdi.',
    'Das Kind hat nicht lockergelassen, und am Ende hat die Mutter nachgegeben.',
    '子どもがしつこくねだるので、最後にはお母さんが折れました。'
  ),
  tr(
    'Non farti ingannare dalle offerte troppo belle.',
    'Don’t be fooled by offers that are too good to be true.',
    'No te dejes engañar por ofertas demasiado buenas.',
    'Ne te laisse pas tromper par les offres trop belles.',
    'Nenech se oklamat příliš výhodnými nabídkami.',
    'Nie daj się oszukać zbyt pięknym ofertom.',
    'Gerçek olamayacak kadar iyi tekliflere kanma.',
    'Lass dich nicht von zu guten Angeboten täuschen.',
    'うますぎる話にだまされないで。'
  ),
];
