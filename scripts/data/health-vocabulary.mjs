// Le parole della lezione di vocabolario «Dal medico e in farmacia» (2026-11-02).
//
// Primo dei temi pratici proposti il 2026-11-02 (Martin: «Sì, la salute»). Tre gruppi: dal medico (11:
// il medico di famiglia, l'ambulatorio, la ricetta, l'appuntamento, la tessera sanitaria...), i malanni
// (9: la tosse, il mal di gola, l'influenza, la frattura, il livido...) e in farmacia (14: la medicina,
// la compressa, lo sciroppo, il cerotto, il termometro, le stampelle...). Le sensazioni con avere (ho la
// febbre, ho il raffreddore) stanno in «Ho fame, ho sonno»: qui non si ripetono.
//
// Struttura di ogni voce: come city-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`, `generate-animal-images.mjs --set salute`
// (HEALTH_STYLE): oggetti ritagliati sul bianco, persone vestite in modo sobrio, ambienti in un cerchio.
// Niente sangue: la ferita e' un graffio leggero, l'iniezione si vede senza ago nella pelle in primo piano.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Le forme della scheda, con e senza articolo e apostrofo, piu' quelle in `extra` (plurali, sinonimi). */
const answersFor = (word, extra) => {
  const list = [];
  for (const full of [...word.split(' / '), ...extra]) {
    for (const form of [full, full.replace(ARTICLE, '')]) {
      list.push(form);
      if (form.includes('’')) list.push(form.replace(/’/g, ' '), form.replace(/’/g, ''), form.replace(/’/g, "'"));
    }
  }
  return [...new Set(list)];
};

const health = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `salute/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const healthVocabulary = [
  // --- dal medico -----------------------------------------------------------------------------
  health(
    'medico-di-famiglia',
    'il medico di famiglia',
    ['Domani vado dal medico di famiglia.', 'Il mio medico riceve la mattina, dalle nove a mezzogiorno.', 'Se la febbre non passa, chiama il medico di famiglia.'],
    '|The family doctor, the GP|El médico de cabecera|Le médecin traitant, le généraliste|Praktický lékař|Lekarz rodzinny|Aile hekimi|Der Hausarzt / die Hausärztin|かかりつけ医',
    'a friendly middle-aged female doctor in a white coat with a stethoscope around her neck, sitting at a simple desk with a computer, smiling, full figure with the desk and chair',
    ['il medico', 'medico', 'la dottoressa', 'il dottore', 'dottore', 'dottoressa']
  ),
  health(
    'ambulatorio',
    'l’ambulatorio',
    ['L’ambulatorio apre alle otto e mezza.', 'Il medico mi ha visitato nel suo ambulatorio.', 'L’ambulatorio è al primo piano, a destra.'],
    '|The doctor’s surgery, the clinic|El consultorio|Le cabinet médical|Ordinace|Gabinet lekarski|Muayenehane|Die Arztpraxis|診療所、診察室',
    'a tidy doctor’s examination room with an examination couch covered with white paper, a desk, a small sink and a cabinet, no people, cropped into a circle',
    ['lo studio medico', 'studio medico', 'ambulatori']
  ),
  health(
    'sala-d-attesa',
    'la sala d’attesa',
    ['In sala d’attesa ci sono già cinque persone.', 'Si accomodi in sala d’attesa, la chiamo io.', 'Ho letto una rivista in sala d’attesa.'],
    '|The waiting room|La sala de espera|La salle d’attente|Čekárna|Poczekalnia|Bekleme salonu|Das Wartezimmer|待合室',
    'a small bright waiting room with a row of chairs, two patients sitting and waiting, a green plant and a low table with magazines, cropped into a circle',
    ['la sala d’aspetto', 'sala d’aspetto']
  ),
  health(
    'pronto-soccorso',
    'il pronto soccorso',
    ['Si è fatto male al braccio: lo portiamo al pronto soccorso.', 'Al pronto soccorso abbiamo aspettato tre ore.', 'Il pronto soccorso è aperto giorno e notte.'],
    '|The emergency room, A&E|Urgencias|Les urgences|Pohotovost, urgentní příjem|Szpitalny oddział ratunkowy (SOR)|Acil servis|Die Notaufnahme|救急外来',
    'the entrance of a hospital emergency department with wide automatic glass doors, a big red cross sign above the doors with no words, an ambulance parked in front, isolated cut-out with a small patch of ground'
  ),
  health(
    'ambulanza',
    'l’ambulanza',
    ['Presto, chiamate un’ambulanza!', 'L’ambulanza è arrivata in dieci minuti.', 'Senti la sirena? Passa un’ambulanza.'],
    '|The ambulance|La ambulancia|L’ambulance|Sanitka, záchranka|Karetka|Ambulans|Der Krankenwagen|救急車',
    'a white Italian ambulance van with orange and red stripes and blue lights on the roof, seen from the front at an angle, no text',
    ['ambulanze', 'le ambulanze']
  ),
  health(
    'paziente',
    'il paziente / la paziente',
    ['Il medico visita un paziente ogni quindici minuti.', 'La paziente aspetta il suo turno.', 'Bisogna essere pazienti con i pazienti!'],
    '|The patient|El / la paciente|Le patient / la patiente|Pacient / pacientka|Pacjent / pacjentka|Hasta|Der Patient / die Patientin|患者',
    'an elderly man in pyjamas sitting up in a hospital bed, smiling, a glass of water on the bedside table',
    ['pazienti', 'i pazienti']
  ),
  health(
    'visita',
    'la visita',
    ['Giovedì ho una visita dal dentista.', 'Il medico mi ha fatto una visita completa.', 'Quanto costa la visita?'],
    '|The (medical) examination, the check-up|La consulta, la revisión médica|La consultation, l’examen médical|Lékařská prohlídka, vyšetření|Badanie lekarskie|Muayene|Die Untersuchung|診察',
    'a doctor in a white coat listening with a stethoscope to the back of a seated woman in a long-sleeved top during a check-up',
    ['visite', 'la visita medica', 'visita medica']
  ),
  health(
    'stetoscopio',
    'lo stetoscopio',
    ['Il medico appoggia lo stetoscopio sul petto.', 'Lo stetoscopio è freddo!', 'Con lo stetoscopio si sente il cuore.'],
    '|The stethoscope|El estetoscopio, el fonendo|Le stéthoscope|Stetoskop, fonendoskop|Stetoskop|Stetoskop|Das Stethoskop|聴診器',
    'a classic stethoscope lying in a loose curve, product photo'
  ),
  health(
    'ricetta',
    'la ricetta',
    ['Per questo antibiotico serve la ricetta.', 'Il medico mi ha fatto la ricetta.', 'Senza ricetta il farmacista non può darmelo.'],
    '|The prescription|La receta (médica)|L’ordonnance|Recept|Recepta|Reçete|Das Rezept|処方箋',
    'a doctor’s hand signing a prescription sheet on a desk with a pen, the paper showing simple grey lines instead of text',
    ['ricette', 'le ricette']
  ),
  health(
    'appuntamento',
    'l’appuntamento',
    ['Ho preso un appuntamento dal medico per lunedì.', 'Vorrei un appuntamento, per favore.', 'Scusi, sono in ritardo per l’appuntamento.'],
    '|The appointment|La cita|Le rendez-vous|Objednání (k lékaři), termín|Wizyta, termin|Randevu|Der Termin|予約',
    'a woman sitting at a table, holding a smartphone to her ear and writing in a small open paper diary, booking an appointment, the diary pages with simple grey lines',
    ['appuntamenti', 'gli appuntamenti']
  ),
  health(
    'tessera-sanitaria',
    'la tessera sanitaria',
    ['In farmacia ti chiedono la tessera sanitaria.', 'Ho dimenticato la tessera sanitaria a casa.', 'Sulla tessera sanitaria c’è anche il codice fiscale.'],
    '|The health insurance card|La tarjeta sanitaria|La carte d’assurance maladie (la carte Vitale)|Kartička pojištěnce|Karta ubezpieczenia zdrowotnego|Sağlık sigortası kartı|Die Krankenversicherungskarte|健康保険証',
    'a hand holding a plastic card with a blue and white design, a small chip and simple grey lines instead of text',
    ['tessere sanitarie']
  ),
  // --- i malanni --------------------------------------------------------------------------------
  health(
    'tosse',
    'la tosse',
    ['Ho la tosse da una settimana.', 'Per la tosse prendi questo sciroppo.', 'Di notte la tosse non mi fa dormire.'],
    '|The cough|La tos|La toux|Kašel|Kaszel|Öksürük|Der Husten|咳',
    'a young man in a warm sweater coughing into the crook of his elbow, upper body'
  ),
  health(
    'mal-di-gola',
    'il mal di gola',
    ['Ho mal di gola e non riesco a parlare.', 'Il tè caldo fa bene al mal di gola.', 'Hai ancora mal di gola?'],
    '|The sore throat|El dolor de garganta|Le mal de gorge|Bolest v krku|Ból gardła|Boğaz ağrısı|Die Halsschmerzen|喉の痛み',
    'a woman with a woollen scarf around her neck touching her throat with a pained expression, holding a cup of tea in the other hand, upper body',
    ['mal di gola', 'ho mal di gola', 'avere mal di gola']
  ),
  health(
    'influenza',
    'l’influenza',
    ['Mio figlio ha l’influenza e resta a casa.', 'Quest’anno l’influenza è arrivata presto.', 'Ti sei vaccinato contro l’influenza?'],
    '|The flu|La gripe|La grippe|Chřipka|Grypa|Grip|Die Grippe|インフルエンザ',
    'a tired pale man lying on a sofa under a blanket, a box of tissues and a thermometer on a small table next to him',
    ['ho l’influenza']
  ),
  health(
    'allergia',
    'l’allergia',
    ['In primavera ho l’allergia al polline.', 'Sono allergico ai gatti.', 'Ha qualche allergia ai farmaci?'],
    '|The allergy|La alergia|L’allergie|Alergie|Alergia|Alerji|Die Allergie|アレルギー',
    'a woman sneezing into a paper tissue with watery red eyes, next to a vase of blooming flowers, upper body',
    ['allergie', 'le allergie', 'allergico', 'allergica']
  ),
  health(
    'ferita',
    'la ferita',
    ['Lava bene la ferita con acqua e sapone.', 'È una piccola ferita, non è niente.', 'La ferita guarisce in pochi giorni.'],
    '|The wound, the cut|La herida|La blessure, la plaie|Rána, zranění|Rana|Yara|Die Wunde|傷',
    'a close view of a child’s knee with a small light pink scrape, an adult hand gently cleaning it with a white cotton pad, no blood',
    ['ferite', 'le ferite']
  ),
  health(
    'frattura',
    'la frattura',
    ['La radiografia mostra una frattura.', 'Ha una frattura alla gamba e cammina con le stampelle.', 'Per fortuna non c’è nessuna frattura.'],
    '|The fracture|La fractura|La fracture|Zlomenina|Złamanie|Kırık|Der Bruch, die Fraktur|骨折',
    'a smiling boy with his forearm in a white plaster cast and a blue sling around his neck, upper body',
    ['fratture', 'il braccio rotto', 'braccio rotto']
  ),
  health(
    'livido',
    'il livido',
    ['Ho sbattuto contro il tavolo e ora ho un livido.', 'Dopo qualche giorno il livido diventa giallo.', 'Da dove viene questo livido?'],
    '|The bruise|El moratón, el cardenal|Le bleu, l’hématome|Modřina|Siniak|Morluk|Der blaue Fleck|あざ',
    'a close view of a forearm with a round purple-blue bruise, the sleeve rolled up, a finger of the other hand pointing at the bruise',
    ['lividi', 'i lividi']
  ),
  health(
    'scottatura',
    'la scottatura',
    ['Ho preso una scottatura in spiaggia.', 'Metti la crema solare, così eviti le scottature.', 'Mi sono fatto una scottatura con il ferro da stiro.'],
    '|The sunburn, the burn|La quemadura|Le coup de soleil, la brûlure|Spálení od slunce, popálenina|Oparzenie słoneczne, oparzenie|Güneş yanığı, yanık|Der Sonnenbrand, die Verbrennung|日焼け、やけど',
    'a man in a white t-shirt with clearly sunburned bright red neck and arms, touching his arm and wincing, upper body',
    ['scottature', 'le scottature']
  ),
  health(
    'pressione',
    'la pressione',
    ['Il farmacista mi ha misurato la pressione.', 'Mio nonno ha la pressione alta.', 'Hai la pressione un po’ bassa: siediti.'],
    '|Blood pressure|La tensión, la presión arterial|La tension (artérielle)|Krevní tlak|Ciśnienie (krwi)|Tansiyon|Der Blutdruck|血圧',
    'an elderly woman sitting at a table with a blood pressure cuff around her upper arm, connected to a small digital monitor on the table whose screen shows only simple shapes, no numbers',
    ['la pressione del sangue', 'pressione del sangue']
  ),
  // --- in farmacia ------------------------------------------------------------------------------
  health(
    'farmacia',
    'la farmacia',
    ['La farmacia di turno è aperta anche di notte.', 'Passo in farmacia a prendere lo sciroppo.', 'La croce verde indica una farmacia.'],
    '|The pharmacy, the chemist’s|La farmacia|La pharmacie|Lékárna|Apteka|Eczane|Die Apotheke|薬局',
    'the front of a small Italian pharmacy on the ground floor of an old building, a glowing green cross sign above the door and a shop window with boxes, isolated cut-out with a small patch of pavement, no words',
    ['farmacie', 'le farmacie']
  ),
  health(
    'medicina',
    'la medicina',
    ['Prendi la medicina dopo i pasti.', 'Hai preso le medicine oggi?', 'Tieni le medicine lontano dai bambini.'],
    '|The medicine, the medication|El medicamento, la medicina|Le médicament|Lék|Lek, lekarstwo|İlaç|Das Medikament|薬',
    'a few medicine boxes, a blister pack of tablets and a small brown bottle on a white surface, product photo, the boxes with simple grey lines instead of text',
    ['medicine', 'le medicine', 'il farmaco', 'farmaco', 'i farmaci', 'farmaci', 'la medicina']
  ),
  health(
    'compressa',
    'la compressa / la pastiglia',
    ['Prenda una compressa tre volte al giorno.', 'Ho preso una pastiglia per il mal di testa.', 'Le compresse si prendono con un bicchiere d’acqua.'],
    '|The tablet, the pill|La pastilla, el comprimido|Le comprimé|Tableta, prášek|Tabletka|Hap, tablet|Die Tablette|錠剤',
    'a few round white tablets and a blister pack on a white surface, one tablet held between two fingers',
    ['compresse', 'pastiglie', 'la pillola', 'pillola']
  ),
  health(
    'sciroppo',
    'lo sciroppo',
    ['Lo sciroppo per la tosse è dolce.', 'Ai bambini si dà lo sciroppo con il cucchiaino.', 'Un cucchiaio di sciroppo prima di dormire.'],
    '|The (cough) syrup|El jarabe|Le sirop|Sirup|Syrop|Şurup|Der Hustensaft, der Sirup|シロップ（薬）',
    'a small brown glass bottle of cough syrup without label text next to a plastic measuring spoon filled with dark red syrup',
    ['sciroppi']
  ),
  health(
    'gocce',
    'le gocce',
    ['Metti due gocce in ogni occhio.', 'Queste gocce sono per il naso.', 'Quante gocce devo prendere?'],
    '|The drops|Las gotas|Les gouttes|Kapky|Krople|Damla|Die Tropfen|点眼薬、点鼻薬（しずく）',
    'a woman tilting her head back and putting drops into her eye from a small dropper bottle, upper body',
    ['la goccia', 'goccia']
  ),
  health(
    'pomata',
    'la pomata',
    ['Metti questa pomata sul livido.', 'La pomata va messa due volte al giorno.', 'Ho comprato una pomata per le punture di zanzara.'],
    '|The ointment, the cream|La pomada|La pommade|Mast|Maść|Merhem|Die Salbe|軟膏',
    'a small tube of ointment without text, with a little white cream squeezed onto a fingertip',
    ['pomate', 'le pomate']
  ),
  health(
    'cerotto',
    'il cerotto',
    ['Mi sono tagliato: hai un cerotto?', 'Il bambino vuole il cerotto colorato.', 'Cambia il cerotto ogni giorno.'],
    '|The plaster, the Band-Aid|La tirita, la curita|Le pansement (adhésif)|Náplast|Plaster|Yara bandı|Das Pflaster|絆創膏',
    'a fingertip with a beige adhesive plaster wrapped around it, three more plasters lying beside it',
    ['cerotti', 'i cerotti']
  ),
  health(
    'benda',
    'la benda',
    ['L’infermiere mi ha messo una benda sulla caviglia.', 'Stringi bene la benda, ma non troppo.', 'Nella cassetta del pronto soccorso ci sono garze e bende.'],
    '|The bandage|La venda|Le bandage, la bande|Obvaz|Bandaż|Sargı bezi|Der Verband, die Binde|包帯',
    'a wrist wrapped in a white elastic bandage, a partly unrolled roll of bandage beside it',
    ['bende', 'le bende', 'la fascia', 'fascia']
  ),
  health(
    'termometro',
    'il termometro',
    ['Il termometro segna trentotto e mezzo.', 'Dov’è il termometro? Credo di avere la febbre.', 'Tieni il termometro sotto il braccio per un minuto.'],
    '|The thermometer|El termómetro|Le thermomètre|Teploměr|Termometr|Termometre, derece|Das Fieberthermometer|体温計',
    'a white digital clinical thermometer with a blank small display, product photo',
    ['termometri']
  ),
  health(
    'iniezione',
    'l’iniezione',
    ['L’infermiera mi fa un’iniezione nel braccio.', 'Ho paura delle iniezioni.', 'Non fa male: è solo una puntura.'],
    '|The injection, the shot|La inyección|La piqûre, l’injection|Injekce|Zastrzyk|İğne, enjeksiyon|Die Spritze|注射',
    'a nurse in blue scrubs and gloves giving an injection in the upper arm of a calm seated man in a t-shirt, no blood',
    ['iniezioni', 'le iniezioni', 'la puntura', 'puntura']
  ),
  health(
    'vaccino',
    'il vaccino',
    ['Prima del viaggio devo fare un vaccino.', 'Il vaccino contro l’influenza si fa in autunno.', 'Il bambino ha fatto tutti i vaccini.'],
    '|The vaccine, the vaccination|La vacuna|Le vaccin|Očkování, vakcína|Szczepionka|Aşı|Die Impfung, der Impfstoff|ワクチン、予防接種',
    'a small glass vaccine vial without label text and a capped syringe lying beside it on a small white tray',
    ['vaccini', 'i vaccini', 'la vaccinazione', 'vaccinazione']
  ),
  health(
    'mascherina',
    'la mascherina',
    ['In ospedale bisogna mettere la mascherina.', 'Ho il raffreddore: metto la mascherina per non contagiare nessuno.', 'Le mascherine si comprano in farmacia.'],
    '|The face mask|La mascarilla|Le masque|Rouška, respirátor|Maseczka|Maske|Die Maske|マスク',
    'a woman wearing a light blue surgical face mask, upper body, friendly eyes',
    ['mascherine', 'le mascherine']
  ),
  health(
    'stampelle',
    'le stampelle',
    ['Con la gamba ingessata cammino con le stampelle.', 'Per un mese ha usato le stampelle.', 'Ti porto io la borsa: tu hai le stampelle.'],
    '|The crutches|Las muletas|Les béquilles|Berle|Kule|Koltuk değneği|Die Krücken|松葉杖',
    'a young man in long trousers walking with two forearm crutches, one foot in a white plaster cast, full body',
    ['stampella', 'la stampella']
  ),
  health(
    'sedia-a-rotelle',
    'la sedia a rotelle',
    ['L’entrata ha una rampa per la sedia a rotelle.', 'Mia zia gioca a basket in sedia a rotelle.', 'In aeroporto c’è assistenza per chi usa la sedia a rotelle.'],
    '|The wheelchair|La silla de ruedas|Le fauteuil roulant|Invalidní vozík|Wózek inwalidzki|Tekerlekli sandalye|Der Rollstuhl|車椅子',
    'a smiling woman sitting in a modern wheelchair, full body, seen from the side at an angle',
    ['sedie a rotelle', 'la carrozzina', 'carrozzina']
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const healthExampleWord = { bare: 'farmacia', withArticle: 'la farmacia' };

export const healthTranslationExercises = [
  tr(
    'Vado dal medico perché ho la tosse da una settimana.',
    'I’m going to the doctor because I’ve had a cough for a week.',
    'Voy al médico porque tengo tos desde hace una semana.',
    'Je vais chez le médecin parce que je tousse depuis une semaine.',
    'Jdu k lékaři, protože už týden kašlu.',
    'Idę do lekarza, bo od tygodnia mam kaszel.',
    'Doktora gidiyorum çünkü bir haftadır öksürüyorum.',
    'Ich gehe zum Arzt, weil ich seit einer Woche Husten habe.',
    '一週間前から咳が出るので、医者に行きます。'
  ),
  tr(
    'Mi fa male la gola: hai una pastiglia?',
    'My throat hurts: do you have a lozenge?',
    'Me duele la garganta: ¿tienes una pastilla?',
    'J’ai mal à la gorge : tu as une pastille ?',
    'Bolí mě v krku: nemáš pastilku?',
    'Boli mnie gardło: masz tabletkę do ssania?',
    'Boğazım ağrıyor: pastilin var mı?',
    'Mir tut der Hals weh: Hast du eine Lutschtablette?',
    '喉が痛いです。のど飴、ありますか？'
  ),
  tr(
    'Scusi, dov’è la farmacia di turno?',
    'Excuse me, where is the pharmacy on duty?',
    'Perdone, ¿dónde está la farmacia de guardia?',
    'Excusez-moi, où est la pharmacie de garde ?',
    'Promiňte, kde je pohotovostní lékárna?',
    'Przepraszam, gdzie jest apteka dyżurna?',
    'Affedersiniz, nöbetçi eczane nerede?',
    'Entschuldigung, wo ist die Notdienstapotheke?',
    'すみません、当番薬局はどこですか？'
  ),
  tr(
    'Per questa medicina serve la ricetta.',
    'You need a prescription for this medicine.',
    'Para este medicamento hace falta receta.',
    'Pour ce médicament, il faut une ordonnance.',
    'Na tento lék je potřeba recept.',
    'Na ten lek potrzebna jest recepta.',
    'Bu ilaç için reçete gerekiyor.',
    'Für dieses Medikament braucht man ein Rezept.',
    'この薬には処方箋が必要です。'
  ),
  tr(
    'Prenda una compressa due volte al giorno, dopo i pasti.',
    'Take one tablet twice a day, after meals.',
    'Tome una pastilla dos veces al día, después de las comidas.',
    'Prenez un comprimé deux fois par jour, après les repas.',
    'Berte jednu tabletu dvakrát denně po jídle.',
    'Proszę brać jedną tabletkę dwa razy dziennie, po posiłku.',
    'Günde iki kez, yemeklerden sonra bir tablet alın.',
    'Nehmen Sie zweimal täglich eine Tablette nach dem Essen.',
    '1日2回、食後に1錠飲んでください。'
  ),
  tr(
    'Vorrei un appuntamento con il medico per domani.',
    'I’d like an appointment with the doctor for tomorrow.',
    'Quería una cita con el médico para mañana.',
    'Je voudrais un rendez-vous chez le médecin pour demain.',
    'Chtěl bych se objednat k lékaři na zítra.',
    'Chciałbym umówić się na wizytę u lekarza na jutro.',
    'Yarın için doktordan randevu almak istiyorum.',
    'Ich hätte gern einen Termin beim Arzt für morgen.',
    '明日、医者の予約をお願いしたいのですが。'
  ),
  tr(
    'Si è rotto la gamba e cammina con le stampelle.',
    'He broke his leg and walks with crutches.',
    'Se ha roto la pierna y camina con muletas.',
    'Il s’est cassé la jambe et marche avec des béquilles.',
    'Zlomil si nohu a chodí o berlích.',
    'Złamał nogę i chodzi o kulach.',
    'Bacağını kırdı ve koltuk değnekleriyle yürüyor.',
    'Er hat sich das Bein gebrochen und geht an Krücken.',
    '彼は足を骨折して、松葉杖で歩いています。'
  ),
  tr(
    'Presto, chiamate un’ambulanza!',
    'Quick, call an ambulance!',
    '¡Rápido, llamad a una ambulancia!',
    'Vite, appelez une ambulance !',
    'Rychle, zavolejte sanitku!',
    'Szybko, wezwijcie karetkę!',
    'Çabuk, ambulans çağırın!',
    'Schnell, ruft einen Krankenwagen!',
    '早く、救急車を呼んで！'
  ),
];
