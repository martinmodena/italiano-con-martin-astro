// Le parole della lezione di vocabolario «Il corpo umano» (2026-09-25).
//
// Struttura di ogni voce (la stessa di animals-vocabulary.mjs):
//   image     percorso in public/assets/vocabolario/ senza estensione (corpo/<slug>)
//   slug      identificatore, anche nome del file
//   word      la parola italiana con l'articolo: e' lingua-oggetto, resta in italiano ovunque
//   examples  tre frasi d'esempio in italiano (REGOLE_LINGUE.md: restano sempre in italiano)
//   answers   risposte accettate dall'esercizio «Riconosci la parola»
//   alt       testo alternativo dell'immagine, tradotto in ogni lingua (lingua-veicolo)
//   subject   soggetto in inglese per generare la foto
//
// L'ordine di questo elenco e' l'ordine in cui le parole compaiono nella pagina e nelle barre
// dell'esercizio della lezione «I verbi del corpo» (body-verbs.mjs), che usa le stesse foto.
//
// Foto REALISTICHE (richiesta di Martin, 2026-09-25). Regole del progetto: niente carne. Gli organi
// interni sono modelli anatomici di plastica da aula, mai tessuti veri; niente parti intime.
//
// `alt` e' scritto come stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja»: la versione italiana e' la parola
// con l'articolo, calcolata dal codice.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

/** Le risposte accettate: con e senza articolo, con e senza apostrofo. */
const answersFor = (word) => {
  const bare = word.replace(/^(il|lo|la|l’|i|gli|le)\s?/, '');
  const list = [bare, word];
  if (word.includes('’')) list.push(word.replace('’', ' '), word.replace('’', ''));
  return [...new Set(list)];
};

/**
 * I soggetti interi (non i primi piani) escono spesso tagliati ai bordi: si chiede esplicitamente di tenerli
 * piccoli al centro, con un ampio margine bianco.
 */
const WHOLE = new Set([
  'testa',
  'braccio',
  'gamba',
  'piede',
  'corpo',
  'osso',
  'scheletro',
  'cranio',
  'colonna',
  'costole',
  'cervello',
  'cuore',
  'polmoni',
  'stomaco',
  'fegato',
  'reni',
  'intestino',
]);
const KEEP_INSIDE = ', the whole subject small in the centre of the frame with wide empty white margins on every side';

const part = (slug, word, examples, alts, subject) => {
  if (WHOLE.has(slug)) subject += KEEP_INSIDE;
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `corpo/${slug}`,
    slug,
    word,
    bare: word.replace(/^(il|lo|la|l’|i|gli|le)\s?/, ''),
    examples,
    answers: answersFor(word),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const bodyVocabulary = [
  // --- la testa e il viso -----------------------------------------------------------
  part(
    'testa',
    'la testa',
    ['Ho mal di testa.', 'Il bambino porta un cappello sulla testa.', 'Muovo la testa a destra e a sinistra.'],
    'La testa|The head|La cabeza|La tête|Hlava|Głowa|Baş|Der Kopf|頭',
    'the head and neck of an adult woman with short brown hair, side view, cropped cleanly below the neck'
  ),
  part(
    'capelli',
    'i capelli',
    ['Marta ha i capelli lunghi e castani.', 'Mi lavo i capelli ogni due giorni.', 'Mio nonno ha i capelli bianchi.'],
    'I capelli|Hair|El pelo|Les cheveux|Vlasy|Włosy|Saç|Die Haare|髪',
    'long wavy chestnut brown hair of a woman seen from behind, falling over her shoulders, hair only, cropped at the shoulders'
  ),
  part(
    'viso',
    'il viso',
    ['Lavo il viso ogni mattina.', 'Il viso di Luca è tondo e sorridente.', 'Ho una crema per il viso.'],
    'El rostro|The face|La cara|Le visage|Obličej|Twarz|Yüz|Das Gesicht|顔',
    'a friendly smiling young man, front view portrait of the face, cropped at the neck'
  ),
  part(
    'fronte',
    'la fronte',
    ['Ha la fronte alta e liscia.', 'Il papà mi bacia sulla fronte.', 'Sulla fronte ho una piccola cicatrice.'],
    'La frente|The forehead|La frente|Le front|Čelo|Czoło|Alın|Die Stirn|額',
    'close-up of a woman’s forehead with a few strands of hair, cropped from the eyebrows up to the hairline'
  ),
  part(
    'sopracciglio',
    'il sopracciglio',
    [
      'Ha un sopracciglio più alto dell’altro.',
      'Le sue sopracciglia sono scure e folte.',
      'Alzo il sopracciglio quando sono sorpreso.',
    ],
    'La ceja|The eyebrow|La ceja|Le sourcil|Obočí|Brew|Kaş|Die Augenbraue|眉毛',
    'close-up of a human eye with a thick, well-defined dark eyebrow above it'
  ),
  part(
    'occhi',
    'gli occhi',
    ['Ho gli occhi verdi.', 'Chiudo gli occhi e dormo.', 'Marco ha gli occhi grandi e scuri.'],
    'Los ojos|The eyes|Los ojos|Les yeux|Oči|Oczy|Gözler|Die Augen|目',
    'close-up of a pair of open human eyes, blue-green, front view, cropped between eyebrows and cheekbones'
  ),
  part(
    'palpebra',
    'la palpebra',
    ['Ho una palpebra gonfia.', 'Le palpebre si chiudono quando ho sonno.', 'Sulla palpebra c’è un po’ di trucco.'],
    'El párpado|The eyelid|El párpado|La paupière|Oční víčko|Powieka|Göz kapağı|Das Augenlid|まぶた',
    'close-up of a closed human eye showing the eyelid with a light eyeshadow and lashes'
  ),
  part(
    'ciglia',
    'le ciglia',
    [
      'Le mie ciglia sono lunghe e nere.',
      'Mi è caduto un ciglio nell’occhio.',
      'Con il mascara le ciglia sembrano più lunghe.',
    ],
    'Las pestañas|The eyelashes|Les pestañas|Les cils|Řasy|Rzęsy|Kirpikler|Die Wimpern|まつ毛',
    'extreme close-up of a human eye with very long dark eyelashes'
  ),
  part(
    'naso',
    'il naso',
    [
      'Ho il naso rosso perché ho il raffreddore.',
      'Sento un buon profumo con il naso.',
      'Il suo naso è piccolo e dritto.',
    ],
    'La nariz|The nose|La nariz|Le nez|Nos|Nos|Burun|Die Nase|鼻',
    'close-up of a human nose in three-quarter view, from below the eyes to above the lips'
  ),
  part(
    'bocca',
    'la bocca',
    ['Apro la bocca dal dentista.', 'Mia sorella ha una bocca grande e allegra.', 'Non parlare con la bocca piena!'],
    'La boca|The mouth|La boca|La bouche|Ústa|Usta|Ağız|Der Mund|口',
    'close-up of a man’s wide open mouth saying “ah”, front view, teeth and tongue visible, lower face only'
  ),
  part(
    'labbra',
    'le labbra',
    ['Ho le labbra secche.', 'Sara si mette il rossetto sulle labbra.', 'Le labbra del bambino sono rosa.'],
    'Los labios|The lips|Los labios|Les lèvres|Rty|Wargi|Dudaklar|Die Lippen|唇',
    'close-up of closed pink lips of a woman with natural lip colour, front view, cropped above the nose and below the chin'
  ),
  part(
    'denti',
    'i denti',
    ['Mi lavo i denti tre volte al giorno.', 'La bambina ha due denti nuovi.', 'Ho mal di denti da ieri.'],
    'Los dientes|The teeth|Los dientes|Les dents|Zuby|Zęby|Dişler|Die Zähne|歯',
    'close-up of a broad natural smile showing healthy white teeth, lower face only'
  ),
  part(
    'lingua',
    'la lingua',
    [
      'Il dottore guarda la mia lingua.',
      'Il gelato è freddo sulla lingua.',
      'Il bambino fa la linguaccia e mostra la lingua.',
    ],
    'La lengua|The tongue|La lengua|La langue|Jazyk|Język|Dil|Die Zunge|舌',
    'a person sticking out their tongue playfully, close-up of the mouth and tongue, lower face only'
  ),
  part(
    'orecchio',
    'l’orecchio',
    [
      'Ho male all’orecchio destro.',
      'Mia madre mi sussurra una parola all’orecchio.',
      'Il nonno ha un orecchio più sensibile dell’altro.',
    ],
    'La oreja|The ear|La oreja|L’oreille|Ucho|Ucho|Kulak|Das Ohr|耳',
    'close-up side view of a human ear with a little hair around it'
  ),
  part(
    'guancia',
    'la guancia',
    ['La nonna mi dà un bacio sulla guancia.', 'Ha le guance rosse per il freddo.', 'Il neonato ha le guance morbide.'],
    'La mejilla|The cheek|La mejilla|La joue|Tvář|Policzek|Yanak|Die Wange|頬',
    'close-up of a smiling woman’s rosy cheek, side view of the face, cropped at the eye and the corner of the mouth'
  ),
  part(
    'mento',
    'il mento',
    ['Ha il mento a punta.', 'Mi sono tagliato sul mento.', 'Il nonno si appoggia una mano sotto il mento.'],
    'La barbilla|The chin|La barbilla|Le menton|Brada|Podbródek|Çene|Das Kinn|あご',
    'close-up of the chin and jawline of a man, lower face only, front view, clean shaven'
  ),
  part(
    'barba',
    'la barba',
    ['Mio zio ha la barba lunga.', 'Ogni mattina papà si fa la barba.', 'La barba di Paolo è nera e folta.'],
    'La barba|The beard|La barba|La barbe|Vousy|Broda|Sakal|Der Bart|あごひげ',
    'portrait of a man with a full, well-groomed dark beard, front view of the face'
  ),
  part(
    'baffi',
    'i baffi',
    ['Il nonno ha dei baffi bianchi.', 'I baffi di quel signore sono molto lunghi.', 'Si è tagliato i baffi ieri.'],
    'El bigote|The moustache|El bigote|La moustache|Knírek|Wąsy|Bıyık|Der Schnurrbart|口ひげ',
    'close-up of a man with a thick curled moustache, front view of the lower half of the face'
  ),
  part(
    'collo',
    'il collo',
    ['Porto una sciarpa intorno al collo.', 'Ho il collo rigido e mi fa male.', 'La giraffa ha un collo lunghissimo.'],
    'El cuello|The neck|El cuello|Le cou|Krk|Szyja|Boyun|Der Hals|首',
    'the neck and collarbone area of a person seen from the front, plain neckline, cropped at the chin and the shoulders'
  ),
  part(
    'nuca',
    'la nuca',
    ['Ho un dolore alla nuca.', 'Con il sole sulla nuca mi sento caldo.', 'Lei si lega i capelli sulla nuca.'],
    'La nuca|The back of the neck|La nuca|La nuque|Šíje|Kark|Ense|Der Nacken|うなじ',
    'the back of a woman’s neck seen from behind, hair tied up in a bun, cropped at the shoulders'
  ),

  // --- il tronco --------------------------------------------------------------------
  part(
    'spalla',
    'la spalla',
    ['Ho mal di spalla dopo la palestra.', 'Il bambino dorme sulla spalla del papà.', 'Porto la borsa sulla spalla.'],
    'El hombro|The shoulder|El hombro|L’épaule|Rameno|Bark|Omuz|Die Schulter|肩',
    'the shoulder of a person in a plain sleeveless top, side view, cropped at the neck and the upper arm'
  ),
  part(
    'petto',
    'il petto',
    [
      'Ho un peso sul petto.',
      'Il papà tiene il bambino sul petto.',
      'Quando corro, il mio petto si alza e si abbassa.',
    ],
    'El pecho|The chest|El pecho|La poitrine|Hrudník|Klatka piersiowa|Göğüs|Die Brust|胸',
    'the chest of a fit man in a plain fitted grey t-shirt, front view, cropped at the neck and the waist'
  ),
  part(
    'schiena',
    'la schiena',
    [
      'Ho mal di schiena.',
      'Si sdraia sulla schiena per guardare il cielo.',
      'Mia madre mi fa un massaggio alla schiena.',
    ],
    'La espalda|The back|La espalda|Le dos|Záda|Plecy|Sırt|Der Rücken|背中',
    'the back of a person in a plain fitted tank top, seen from behind, cropped at the neck and the waist'
  ),
  part(
    'pancia',
    'la pancia',
    ['Ho mal di pancia.', 'Dopo la cena ho la pancia piena.', 'Il gatto si fa accarezzare la pancia.'],
    'La barriga|The belly|La tripa|Le ventre|Břicho|Brzuch|Karın|Der Bauch|お腹',
    'an adult person patting their belly, wearing a plain t-shirt and jeans, torso only, front view'
  ),
  part(
    'ombelico',
    'l’ombelico',
    [
      'L’ombelico è al centro della pancia.',
      'Ha un piccolo anello all’ombelico.',
      'La maglietta corta lascia scoperto l’ombelico.',
    ],
    'El ombligo|The belly button|El ombligo|Le nombril|Pupek|Pępek|Göbek|Der Bauchnabel|へそ',
    'a woman’s midriff wearing a sports crop top and leggings, close-up on the belly button, front view'
  ),
  part(
    'ascella',
    'l’ascella',
    [
      'Quando fa caldo, sudo sotto le ascelle.',
      'Alza il braccio e mostra l’ascella.',
      'Metto il deodorante sotto l’ascella.',
    ],
    'La axila|The armpit|La axila|L’aisselle|Podpaží|Pacha|Koltuk altı|Die Achselhöhle|脇の下',
    'a woman raising one arm above her head in a plain sleeveless top, showing the armpit, side view of the upper body'
  ),

  // --- il braccio e la mano ---------------------------------------------------------
  part(
    'braccio',
    'il braccio',
    [
      'Ho un braccio rotto.',
      'Il bambino allunga il braccio per prendere il biscotto.',
      'Mia sorella porta un braccialetto al braccio.',
    ],
    'El brazo|The arm|El brazo|Le bras|Paže|Ramię|Kol|Der Arm|腕',
    'a whole human arm stretched out sideways from shoulder to fingertips, sleeveless top, cropped at the shoulder'
  ),
  part(
    'gomito',
    'il gomito',
    [
      'Mi sono battuto il gomito contro il tavolo.',
      'Appoggio il gomito sul tavolo.',
      'Il gomito è al centro del braccio.',
    ],
    'El codo|The elbow|El codo|Le coude|Loket|Łokieć|Dirsek|Der Ellbogen|ひじ',
    'close-up of a bent elbow of a person, arm folded, plain skin, cropped above and below the joint'
  ),
  part(
    'polso',
    'il polso',
    ['Porto l’orologio al polso sinistro.', 'Mi sono fatto male al polso.', 'Il dottore mi misura il polso.'],
    'La muñeca|The wrist|La muñeca|Le poignet|Zápěstí|Nadgarstek|Bilek|Das Handgelenk|手首',
    'close-up of a wrist wearing a plain wristwatch, hand relaxed, cropped at the forearm and the back of the hand'
  ),
  part(
    'mano',
    'la mano',
    ['Lavo le mani prima di mangiare.', 'Ho una mano fredda.', 'La bambina mi dà la mano.'],
    'La mano|The hand|La mano|La main|Ruka|Dłoń|El|Die Hand|手',
    'a whole open human hand seen from the back, fingers spread, wrist visible, isolated'
  ),
  part(
    'palmo',
    'il palmo',
    [
      'Nel palmo della mano tengo una moneta.',
      'Il dottore guarda il palmo della mano.',
      'Mostro il palmo alla telecamera.',
    ],
    'La palma|The palm|La palma|La paume|Dlaň|Wnętrze dłoni|Avuç içi|Die Handfläche|手のひら',
    'the palm of an open hand facing up, fingers together, showing the lines of the palm, wrist visible'
  ),
  part(
    'dito',
    'il dito',
    ['Ho un dito dolorante.', 'Tocco lo schermo con il dito.', 'Ho dieci dita, cinque per mano.'],
    'El dedo|The finger|El dedo|Le doigt|Prst|Palec|Parmak|Der Finger|指',
    'a hand touching a smartphone screen with one finger, close-up of the hand and the phone, top view'
  ),
  part(
    'pollice',
    'il pollice',
    [
      'Alzo il pollice per dire “va bene”.',
      'Il bambino si succhia il pollice.',
      'Il pollice è il dito più corto e più largo.',
    ],
    'El pulgar|The thumb|El pulgar|Le pouce|Palec|Kciuk|Başparmak|Der Daumen|親指',
    'a hand giving a thumbs up, close-up, other fingers closed, wrist visible'
  ),
  part(
    'indice',
    'l’indice',
    ['Con l’indice indico la strada.', 'Porto un anello sull’indice.', 'L’indice è il dito vicino al pollice.'],
    'El índice|The index finger|El índice|L’index|Ukazováček|Palec wskazujący|İşaret parmağı|Der Zeigefinger|人差し指',
    'a hand pointing forward with the index finger, other fingers folded, close-up, wrist visible'
  ),
  part(
    'anulare',
    'l’anulare',
    [
      'L’anulare porta l’anello di matrimonio.',
      'Ha un anello d’oro all’anulare.',
      'L’anulare è tra il medio e il mignolo.',
    ],
    'El anular|The ring finger|El anular|L’annulaire|Prsteníček|Palec serdeczny|Yüzük parmağı|Der Ringfinger|薬指',
    'a hand with a simple gold wedding ring on the ring finger, fingers gently spread, close-up, wrist visible'
  ),
  part(
    'mignolo',
    'il mignolo',
    ['Il mignolo è il dito più piccolo.', 'Mi sono fatto male al mignolo.', 'Alza il mignolo mentre beve il tè.'],
    'El meñique|The little finger|El meñique|L’auriculaire|Malíček|Mały palec|Serçe parmak|Der kleine Finger|小指',
    'a hand with the little finger extended and the other fingers folded, close-up, wrist visible'
  ),
  part(
    'unghia',
    'l’unghia',
    [
      'Ho le unghie lunghe e curate.',
      'Mi mordo le unghie quando sono nervoso.',
      'Sara mette lo smalto rosso sulle unghie.',
    ],
    'La uña|The fingernail|La uña|L’ongle|Nehet|Paznokieć|Tırnak|Der Fingernagel|爪',
    'close-up of the fingertips of a hand with neat natural short nails, cropped at the knuckles'
  ),
  part(
    'pugno',
    'il pugno',
    ['Chiudo la mano a pugno.', 'Il pugile alza il pugno.', 'Ho un pugno di monete in tasca.'],
    'El puño|The fist|El puño|Le poing|Pěst|Pięść|Yumruk|Die Faust|こぶし',
    'a clenched human fist seen from the front, close-up, wrist visible'
  ),

  // --- la gamba e il piede ----------------------------------------------------------
  part(
    'gamba',
    'la gamba',
    ['Ho una gamba stanca.', 'Il ragazzo incrocia le gambe.', 'Mia sorella ha le gambe lunghe.'],
    'La pierna|The leg|La pierna|La jambe|Noha|Noga|Bacak|Das Bein|脚',
    'a whole human leg from hip to foot, side view, wearing plain sports shorts, barefoot'
  ),
  part(
    'coscia',
    'la coscia',
    [
      'Dopo la corsa ho male alla coscia.',
      'La coscia va dal fianco al ginocchio.',
      'Il bambino si siede sulle cosce del nonno.',
    ],
    'El muslo|The thigh|El muslo|La cuisse|Stehno|Udo|Uyluk|Der Oberschenkel|太もも',
    'the thigh of an athletic person in plain sports shorts, side view, from the hip to the knee'
  ),
  part(
    'ginocchio',
    'il ginocchio',
    [
      'Sono caduto e mi sono sbucciato il ginocchio.',
      'Piego il ginocchio.',
      'Il bambino si siede sul ginocchio della mamma.',
    ],
    'La rodilla|The knee|La rodilla|Le genou|Koleno|Kolano|Diz|Das Knie|ひざ',
    'close-up of a bent knee of a person, side view, cropped above and below the joint'
  ),
  part(
    'polpaccio',
    'il polpaccio',
    [
      'Il corridore ha i polpacci forti.',
      'Ho un crampo al polpaccio.',
      'Il polpaccio è dietro la gamba, sotto il ginocchio.',
    ],
    'La pantorrilla|The calf|La pantorrilla|Le mollet|Lýtko|Łydka|Baldır|Die Wade|ふくらはぎ',
    'the calf muscle of a runner seen from behind, strong defined calf, cropped at the knee and the ankle'
  ),
  part(
    'caviglia',
    'la caviglia',
    ['Mi sono storto la caviglia.', 'Porto un braccialetto alla caviglia.', 'Ho la caviglia gonfia.'],
    'El tobillo|The ankle|El tobillo|La cheville|Kotník|Kostka|Ayak bileği|Der Knöchel|足首',
    'close-up of an ankle of a bare foot, side view, cropped above the ankle and at the heel'
  ),
  part(
    'piede',
    'il piede',
    ['Ho i piedi freddi.', 'Il bambino cammina a piedi nudi.', 'Porto il quaranta di scarpe: ho il piede grande.'],
    'El pie|The foot|El pie|Le pied|Chodidlo|Stopa|Ayak|Der Fuß|足',
    'a whole bare human foot seen from the side, resting on the floor, ankle visible'
  ),
  part(
    'pianta',
    'la pianta del piede',
    [
      'Ho un vetro nella pianta del piede.',
      'La pianta del piede è sensibile al solletico.',
      'Cammino sulla sabbia e sento la pianta calda.',
    ],
    'La planta del pie|The sole of the foot|La planta del pie|La plante du pied|Spodní část chodidla|Podeszwa stopy|Ayak tabanı|Die Fußsohle|足の裏',
    'the sole of a bare foot facing the camera, close-up, toes visible'
  ),
  part(
    'tallone',
    'il tallone',
    ['Ho una vescica sul tallone.', 'Il tallone è la parte dietro il piede.', 'Cammina sui talloni per gioco.'],
    'El talón|The heel|El talón|Le talon|Pata|Pięta|Topuk|Die Ferse|かかと',
    'the heel of a bare foot seen from behind, close-up, cropped at the calf'
  ),
  part(
    'dito-del-piede',
    'il dito del piede',
    [
      'Mi sono battuto il dito del piede contro il tavolo.',
      'Ho dieci dita dei piedi, cinque per piede.',
      'Il bimbo muove le dita dei piedi.',
    ],
    'El dedo del pie|The toe|El dedo del pie|L’orteil|Prst u nohy|Palec u nogi|Ayak parmağı|Der Zeh|足の指',
    'close-up of the bare toes of a foot, all five toes in a row, seen from the front'
  ),
  part(
    'alluce',
    'l’alluce',
    ['L’alluce è il dito del piede più grande.', 'Mi sono fatto male all’alluce.', 'Il calzino ha un buco all’alluce.'],
    'El dedo gordo del pie|The big toe|El dedo gordo del pie|Le gros orteil|Palec u nohy|Duży palec u nogi|Ayak başparmağı|Der große Zeh|足の親指',
    'close-up of the big toe of a bare foot, seen from above, the other toes out of focus'
  ),

  // --- il corpo, la pelle, le ossa --------------------------------------------------
  part(
    'corpo',
    'il corpo',
    [
      'Il corpo umano ha più di duecento ossa.',
      'Faccio sport per avere un corpo sano.',
      'Sento tutto il corpo stanco.',
    ],
    'El cuerpo|The body|El cuerpo|Le corps|Tělo|Ciało|Vücut|Der Körper|体',
    'a full-body photograph of an adult person standing straight with arms relaxed at the sides, front view, plain fitted grey sportswear, barefoot'
  ),
  part(
    'pelle',
    'la pelle',
    ['Ho la pelle chiara e sensibile.', 'Metto la crema sulla pelle.', 'Dopo il mare la pelle è abbronzata.'],
    'La piel|The skin|La piel|La peau|Kůže|Skóra|Cilt|Die Haut|皮膚',
    'close-up of smooth human skin on a forearm with fine natural texture and a few tiny hairs'
  ),
  part(
    'muscolo',
    'il muscolo',
    [
      'Con l’allenamento i muscoli diventano forti.',
      'Ho un muscolo dolorante.',
      'Il mio bicipite è un muscolo del braccio.',
    ],
    'El músculo|The muscle|El músculo|Le muscle|Sval|Mięsień|Kas|Der Muskel|筋肉',
    'a flexed biceps of an athletic person, arm bent in a muscle pose, plain sleeveless top, cropped at the shoulder and the wrist'
  ),
  part(
    'osso',
    'l’osso',
    [
      'Il femore è l’osso più lungo del corpo.',
      'Il dottore guarda l’osso nella radiografia.',
      'Mi sono rotto un osso della mano.',
    ],
    'El hueso|The bone|El hueso|L’os|Kost|Kość|Kemik|Der Knochen|骨',
    'a single human thigh bone (femur), a realistic anatomical teaching model made of ivory plastic, isolated'
  ),
  part(
    'scheletro',
    'lo scheletro',
    [
      'Lo scheletro sostiene tutto il corpo.',
      'A scuola abbiamo uno scheletro di plastica.',
      'Il museo ha lo scheletro di un dinosauro.',
    ],
    'El esqueleto|The skeleton|El esqueleto|Le squelette|Kostra|Szkielet|İskelet|Das Skelett|骨格',
    'a full human skeleton, a realistic anatomical teaching model made of ivory plastic on a stand, front view, whole model visible'
  ),
  part(
    'cranio',
    'il cranio',
    [
      'Il cranio protegge il cervello.',
      'Ho battuto la testa, ma il cranio non è rotto.',
      'Nel modello anatomico si vede bene il cranio.',
    ],
    'El cráneo|The skull|El cráneo|Le crâne|Lebka|Czaszka|Kafatası|Der Schädel|頭蓋骨',
    'a human skull, a realistic anatomical teaching model made of ivory plastic, three-quarter view'
  ),
  part(
    'colonna',
    'la colonna vertebrale',
    [
      'La colonna vertebrale va dal collo al bacino.',
      'Ho male alla colonna vertebrale.',
      'Sto seduto dritto per proteggere la colonna vertebrale.',
    ],
    'La columna vertebral|The spine|La columna vertebral|La colonne vertébrale|Páteř|Kręgosłup|Omurga|Die Wirbelsäule|背骨',
    'a human spine, a realistic anatomical teaching model made of ivory plastic, side view, standing on a small base'
  ),
  part(
    'costole',
    'le costole',
    [
      'Le costole proteggono il cuore e i polmoni.',
      'Mi sono rotto una costola cadendo.',
      'Quando respiro, le costole si muovono.',
    ],
    'Las costillas|The ribs|Las costillas|Les côtes|Žebra|Żebra|Kaburgalar|Die Rippen|あばら骨',
    'a human rib cage, a realistic anatomical teaching model made of ivory plastic, front view'
  ),

  // --- gli organi interni (modelli anatomici) ---------------------------------------
  part(
    'cervello',
    'il cervello',
    [
      'Il cervello controlla tutto il corpo.',
      'Uso il cervello per risolvere i problemi.',
      'Il cervello ha bisogno di sonno.',
    ],
    'El cerebro|The brain|El cerebro|Le cerveau|Mozek|Mózg|Beyin|Das Gehirn|脳',
    'a human brain, a realistic anatomical teaching model made of pinkish-grey plastic, clearly an artificial classroom model, side view'
  ),
  part(
    'cuore',
    'il cuore',
    [
      'Il cuore batte più forte quando corro.',
      'Il cuore pompa il sangue in tutto il corpo.',
      'Il dottore ascolta il mio cuore.',
    ],
    'El corazón|The heart|El corazón|Le cœur|Srdce|Serce|Kalp|Das Herz|心臓',
    'a human heart, a realistic anatomical teaching model made of glossy red and blue plastic, clearly an artificial classroom model, front view'
  ),
  part(
    'polmoni',
    'i polmoni',
    ['Respiro con i polmoni.', 'I polmoni si riempiono d’aria.', 'Il fumo fa male ai polmoni.'],
    'Los pulmones|The lungs|Los pulmones|Les poumons|Plíce|Płuca|Akciğerler|Die Lungen|肺',
    'a pair of human lungs, a realistic anatomical teaching model made of pink plastic, clearly an artificial classroom model, front view'
  ),
  part(
    'stomaco',
    'lo stomaco',
    ['Ho lo stomaco vuoto.', 'Lo stomaco digerisce il cibo.', 'Mi fa male lo stomaco.'],
    'El estómago|The stomach|El estómago|L’estomac|Žaludek|Żołądek|Mide|Der Magen|胃',
    'a human stomach, a realistic anatomical teaching model made of pinkish plastic, clearly an artificial classroom model, front view'
  ),
  part(
    'fegato',
    'il fegato',
    [
      'Il fegato pulisce il sangue.',
      'Il fegato è un organo grande e scuro.',
      'Il medico controlla il fegato con un’ecografia.',
    ],
    'El hígado|The liver|El hígado|Le foie|Játra|Wątroba|Karaciğer|Die Leber|肝臓',
    'a human liver, a realistic anatomical teaching model made of brown plastic on a small base, clearly an artificial classroom model'
  ),
  part(
    'reni',
    'i reni',
    ['I reni puliscono il sangue e producono l’urina.', 'Abbiamo due reni.', 'Bevo acqua per aiutare i reni.'],
    'Los riñones|The kidneys|Los riñones|Les reins|Ledviny|Nerki|Böbrekler|Die Nieren|腎臓',
    'a pair of human kidneys, a realistic anatomical teaching model made of dark red plastic, clearly an artificial classroom model'
  ),
  part(
    'intestino',
    'l’intestino',
    [
      'L’intestino è lungo e ha molte curve.',
      'Nell’intestino il corpo prende le cose buone del cibo.',
      'La frutta e la verdura fanno bene all’intestino.',
    ],
    'El intestino|The intestine|El intestino|L’intestin|Střevo|Jelita|Bağırsak|Der Darm|腸',
    'a human intestine, a realistic anatomical teaching model made of pinkish plastic, clearly an artificial classroom model, front view'
  ),
];

/** Esercizi «frasi da tradurre» della lezione: la lingua di partenza e' quella del visitatore. */

export const bodyTranslationExercises = [
  tr(
    'Ho mal di testa.',
    'I have a headache.',
    'Me duele la cabeza.',
    'J’ai mal à la tête.',
    'Bolí mě hlava.',
    'Boli mnie głowa.',
    'Başım ağrıyor.',
    'Ich habe Kopfschmerzen.',
    '頭が痛いです。'
  ),
  tr(
    'Mi lavo le mani prima di mangiare.',
    'I wash my hands before eating.',
    'Me lavo las manos antes de comer.',
    'Je me lave les mains avant de manger.',
    'Před jídlem si myji ruce.',
    'Myję ręce przed jedzeniem.',
    'Yemekten önce ellerimi yıkarım.',
    'Vor dem Essen wasche ich mir die Hände.',
    '食べる前に手を洗います。'
  ),
  tr(
    'Sara ha gli occhi verdi e i capelli lunghi.',
    'Sara has green eyes and long hair.',
    'Sara tiene los ojos verdes y el pelo largo.',
    'Sara a les yeux verts et les cheveux longs.',
    'Sara má zelené oči a dlouhé vlasy.',
    'Sara ma zielone oczy i długie włosy.',
    'Sara’nın yeşil gözleri ve uzun saçları var.',
    'Sara hat grüne Augen und lange Haare.',
    'サラは緑の目で、髪が長いです。'
  ),
  tr(
    'Il cuore batte più forte quando corro.',
    'My heart beats faster when I run.',
    'El corazón late más fuerte cuando corro.',
    'Mon cœur bat plus fort quand je cours.',
    'Když běžím, srdce mi bije rychleji.',
    'Kiedy biegnę, serce bije mi szybciej.',
    'Koştuğumda kalbim daha hızlı atar.',
    'Wenn ich renne, schlägt mein Herz schneller.',
    '走ると心臓がどきどきします。'
  ),
  tr(
    'Ho i piedi freddi e le mani calde.',
    'I have cold feet and warm hands.',
    'Tengo los pies fríos y las manos calientes.',
    'J’ai les pieds froids et les mains chaudes.',
    'Mám studené nohy a teplé ruce.',
    'Mam zimne stopy i ciepłe dłonie.',
    'Ayaklarım soğuk, ellerim sıcak.',
    'Ich habe kalte Füße und warme Hände.',
    '足が冷たくて、手が温かいです。'
  ),
  tr(
    'Il nonno ha i baffi bianchi.',
    'Grandpa has a white moustache.',
    'El abuelo tiene un bigote blanco.',
    'Grand-père a une moustache blanche.',
    'Dědeček má bílý knír.',
    'Dziadek ma białe wąsy.',
    'Dedemin beyaz bıyıkları var.',
    'Opa hat einen weißen Schnurrbart.',
    'おじいさんは白い口ひげがあります。'
  ),
  tr(
    'Mi sono battuto il gomito contro la porta.',
    'I hit my elbow on the door.',
    'Me golpeé el codo con la puerta.',
    'Je me suis cogné le coude contre la porte.',
    'Praštil jsem se loktem o dveře.',
    'Uderzyłem się łokciem w drzwi.',
    'Dirseğimi kapıya çarptım.',
    'Ich habe mir den Ellbogen an der Tür gestoßen.',
    'ドアにひじをぶつけました。'
  ),
  tr(
    'Ho male alla schiena e alla spalla destra.',
    'My back and my right shoulder hurt.',
    'Me duelen la espalda y el hombro derecho.',
    'J’ai mal au dos et à l’épaule droite.',
    'Bolí mě záda a pravé rameno.',
    'Bolą mnie plecy i prawe ramię.',
    'Sırtım ve sağ omzum ağrıyor.',
    'Mein Rücken und meine rechte Schulter tun weh.',
    '背中と右肩が痛いです。'
  ),
  tr(
    'Lo scheletro è fatto di ossa.',
    'The skeleton is made of bones.',
    'El esqueleto está hecho de huesos.',
    'Le squelette est fait d’os.',
    'Kostra se skládá z kostí.',
    'Szkielet składa się z kości.',
    'İskelet kemiklerden oluşur.',
    'Das Skelett besteht aus Knochen.',
    '骨格は骨でできています。'
  ),
  tr(
    'Il bambino mi dà un bacio sulla guancia.',
    'The child gives me a kiss on the cheek.',
    'El niño me da un beso en la mejilla.',
    'L’enfant me fait un bisou sur la joue.',
    'Dítě mě políbí na tvář.',
    'Dziecko całuje mnie w policzek.',
    'Çocuk beni yanağımdan öper.',
    'Das Kind gibt mir einen Kuss auf die Wange.',
    '子どもが私の頬にキスをします。'
  ),
];
