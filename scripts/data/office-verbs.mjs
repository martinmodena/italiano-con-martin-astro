// I verbi della lezione «I verbi dell'ufficio» (2026-09-27).
//
// Seguito di «L'ufficio», chiesto da Martin insieme ai verbi della scuola: tre gruppi, al computer e con le
// carte (14: digitare, cliccare, salvare, stampare, allegare, mandare un'email, compilare un modulo, firmare,
// archiviare...), la giornata di lavoro (9: timbrare il cartellino, lavorare da casa, fissare un appuntamento,
// partecipare a una riunione, fare gli straordinari...) e la carriera (11: cercare lavoro, candidarsi, fare un
// colloquio, assumere, licenziare, dimettersi, chiedere un aumento, andare in pensione...).
// Non ripete accendere e spegnere («I verbi della casa»), telefonare e presentare («I verbi delle relazioni»),
// spedire e consegnare («I verbi della città»), scrivere («I verbi del corpo»).
//
// Esercizio come «I verbi della città» (`photoRows`). Le coppie che una foto sola non distingue
// (stampare/fotocopiare, mandare un'email/allegare, cercare lavoro/candidarsi, assumere/fare un colloquio,
// licenziare/dimettersi) si accettano a vicenda.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-ufficio`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const ov = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-ufficio/${slug}`,
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

export const officeVerbs = [
  // --- al computer e con le carte ----------------------------------------------------------------
  ov(
    'digitare',
    'digitare',
    'Scrivere con la tastiera.',
    [
      'to type',
      'teclear',
      'taper (au clavier)',
      'psát na klávesnici',
      'pisać na klawiaturze',
      'klavyeyle yazmak',
      'tippen',
      '入力する、タイプする',
    ],
    ['Digita la password.', 'Digito veloce con dieci dita.', 'Ho digitato male l’indirizzo.'],
    'a woman in an office sitting at a desk typing quickly on a computer keyboard, her eyes on the monitor',
    ['cliccare']
  ),
  ov(
    'cliccare',
    'cliccare',
    'Premere il tasto del mouse.',
    ['to click', 'hacer clic', 'cliquer', 'kliknout', 'klikać', 'tıklamak', 'klicken', 'クリックする'],
    ['Clicca qui per scaricare il file.', 'Ho cliccato sul link sbagliato.', 'Clicca due volte sull’icona.'],
    'a close-up of a man’s hand on a computer mouse on a desk, his index finger clicking the left button, a monitor blurred behind',
    ['digitare']
  ),
  ov(
    'salvare',
    'salvare',
    'Conservare un file nel computer per non perderlo.',
    [
      'to save (a file)',
      'guardar (un archivo)',
      'enregistrer, sauvegarder',
      'uložit',
      'zapisać (plik)',
      'kaydetmek',
      'speichern',
      '保存する',
    ],
    [
      'Salva il documento prima di chiudere!',
      'Ho salvato il file sulla chiavetta.',
      'Non ho salvato e ho perso tutto.',
    ],
    'a young man at his desk plugging a USB stick into a laptop and smiling with relief',
    ['cliccare']
  ),
  ov(
    'stampare',
    'stampare',
    'Mettere su carta un documento del computer.',
    ['to print', 'imprimir', 'imprimer', 'tisknout', 'drukować', 'yazdırmak', 'drucken', '印刷する'],
    ['Stampo il biglietto del treno.', 'Mi stampi due copie, per favore?', 'La stampante non stampa.'],
    'a woman standing next to an office printer picking up the pages coming out of it',
    ['fotocopiare']
  ),
  ov(
    'fotocopiare',
    'fotocopiare',
    'Fare una copia di un foglio con la fotocopiatrice.',
    ['to photocopy', 'fotocopiar', 'photocopier', 'kopírovat', 'kserować', 'fotokopi çekmek', 'kopieren', 'コピーする'],
    ['Fotocopio il contratto.', 'Devi fotocopiare il documento d’identità.', 'Ho fotocopiato venti pagine.'],
    'a man in a shirt placing a sheet of paper on the glass of a large office photocopier and pressing the green button',
    ['stampare']
  ),
  ov(
    'scansionare',
    'scansionare',
    'Fare con uno scanner una copia di un foglio nel computer.',
    ['to scan', 'escanear', 'scanner', 'naskenovat', 'skanować', 'taramak (tarayıcıyla)', 'scannen', 'スキャンする'],
    ['Scansiono la ricevuta e te la mando.', 'Puoi scansionare questo documento?', 'Ho scansionato il passaporto.'],
    'a woman using her smartphone to scan a paper document lying flat on her desk, the phone screen showing the document',
    ['fotocopiare']
  ),
  ov(
    'mandare-unemail',
    'mandare un’email',
    'Scrivere e spedire un messaggio con il computer o il telefono.',
    [
      'to send an email',
      'enviar un correo electrónico',
      'envoyer un e-mail',
      'poslat e-mail',
      'wysłać e-mail',
      'e-posta göndermek',
      'eine E-Mail schicken',
      'メールを送る',
    ],
    ['Ti mando un’email con i dettagli.', 'Ho mandato l’email al cliente.', 'Mandami un’email, non un messaggio.'],
    'a young man at a laptop pressing the send key with a satisfied smile, the screen showing an email window made of grey lines',
    ['allegare', 'rispondere-al-telefono']
  ),
  ov(
    'allegare',
    'allegare',
    'Aggiungere un file a un’email.',
    ['to attach', 'adjuntar', 'joindre', 'přiložit', 'załączyć', 'eklemek (dosya)', 'anhängen', '添付する'],
    ['Allego il documento all’email.', 'Hai dimenticato di allegare il file!', 'In allegato trovi il contratto.'],
    'a woman at her laptop dragging a file icon into an open email, a big paper-clip icon visible on the screen, no readable text',
    ['mandare-unemail']
  ),
  ov(
    'rispondere-al-telefono',
    'rispondere al telefono',
    'Prendere il telefono quando suona e parlare.',
    [
      'to answer the phone',
      'contestar al teléfono',
      'répondre au téléphone',
      'vzít telefon',
      'odebrać telefon',
      'telefona cevap vermek',
      'ans Telefon gehen',
      '電話に出る',
    ],
    [
      'Rispondi al telefono, per favore!',
      'Non rispondo al telefono durante le riunioni.',
      'Ha risposto al telefono la segretaria.',
    ],
    'a smiling receptionist at her desk picking up the handset of an office desk phone and holding it to her ear'
  ),
  ov(
    'compilare',
    'compilare un modulo',
    'Scrivere i propri dati negli spazi di un foglio.',
    [
      'to fill in a form',
      'rellenar un formulario',
      'remplir un formulaire',
      'vyplnit formulář',
      'wypełnić formularz',
      'form doldurmak',
      'ein Formular ausfüllen',
      '書類に記入する',
    ],
    [
      'Compili questo modulo, per favore.',
      'Ho compilato il modulo online.',
      'Per compilare il modulo serve il codice fiscale.',
    ],
    'a man sitting at a counter filling in a paper form with a pen, the form showing boxes and grey lines without readable text',
    ['firmare']
  ),
  ov(
    'firmare',
    'firmare',
    'Scrivere il proprio nome a mano su un documento.',
    ['to sign', 'firmar', 'signer', 'podepsat', 'podpisać', 'imzalamak', 'unterschreiben', '署名する、サインする'],
    ['Firmi qui, per favore.', 'Ho firmato il contratto ieri.', 'Il direttore deve firmare tutte le lettere.'],
    'a businesswoman at a desk signing a document with a fountain pen, a colleague across the desk watching and smiling',
    ['compilare']
  ),
  ov(
    'archiviare',
    'archiviare',
    'Mettere in ordine i documenti per ritrovarli.',
    [
      'to file, to archive',
      'archivar',
      'classer, archiver',
      'archivovat, založit',
      'archiwizować',
      'dosyalamak, arşivlemek',
      'ablegen, archivieren',
      'ファイルする、保管する',
    ],
    ['Archivio le fatture in questo raccoglitore.', 'Hai archiviato la pratica?', 'Ogni venerdì archiviamo le email.'],
    'a man putting a thick folder into a row of ring binders on an office shelf, one binder pulled out'
  ),
  ov(
    'controllare',
    'controllare',
    'Guardare bene una cosa per vedere se è giusta.',
    [
      'to check',
      'comprobar, revisar',
      'vérifier',
      'zkontrolovat',
      'sprawdzać',
      'kontrol etmek',
      'kontrollieren, prüfen',
      '確認する、チェックする',
    ],
    ['Controllo le email ogni mattina.', 'Puoi controllare i numeri?', 'Ho controllato tutto: è giusto.'],
    'a woman in glasses carefully checking a printed spreadsheet with a pen, running her finger along the rows, a laptop next to her'
  ),
  ov(
    'organizzare',
    'organizzare',
    'Preparare e mettere in ordine le cose da fare.',
    [
      'to organise',
      'organizar',
      'organiser',
      'organizovat',
      'organizować',
      'düzenlemek, organize etmek',
      'organisieren',
      '計画する、準備する',
    ],
    ['Organizzo la riunione di lunedì.', 'Chi organizza la festa di Natale?', 'Devo organizzare meglio il mio tempo.'],
    'a young woman arranging colourful sticky notes in columns on a glass wall of an office, planning a project',
    ['fissare-un-appuntamento']
  ),

  // --- la giornata di lavoro ----------------------------------------------------------------------
  ov(
    'timbrare-il-cartellino',
    'timbrare il cartellino',
    'Segnare con il badge l’ora in cui si entra e si esce dal lavoro.',
    [
      'to clock in (or out)',
      'fichar',
      'pointer',
      'píchat (příchod, odchod)',
      'odbijać kartę',
      'kart basmak (giriş-çıkış)',
      'stempeln',
      'タイムカードを押す',
    ],
    [
      'Timbro il cartellino alle otto e mezza.',
      'Hai timbrato il cartellino?',
      'Ho dimenticato di timbrare all’uscita.',
    ],
    'an office worker holding an ID badge on a lanyard against a small wall-mounted time clock reader at the office entrance'
  ),
  ov(
    'lavorare-da-casa',
    'lavorare da casa',
    'Fare il proprio lavoro a casa, con il computer, senza andare in ufficio.',
    [
      'to work from home',
      'trabajar desde casa, teletrabajar',
      'travailler à domicile, télétravailler',
      'pracovat z domu',
      'pracować z domu',
      'evden çalışmak',
      'von zu Hause arbeiten',
      '在宅勤務をする',
    ],
    [
      'Il venerdì lavoro da casa.',
      'Da quando lavoro da casa non prendo più il treno.',
      'Oggi lavori da casa o in ufficio?',
    ],
    'a relaxed man in a sweater working on a laptop at his kitchen table at home, a cup of coffee and a cat next to him',
    ['fare-una-videochiamata']
  ),
  ov(
    'fissare-un-appuntamento',
    'fissare un appuntamento',
    'Decidere il giorno e l’ora per vedersi con qualcuno.',
    [
      'to make an appointment',
      'concertar una cita',
      'fixer un rendez-vous',
      'domluvit si schůzku',
      'umówić spotkanie',
      'randevu almak',
      'einen Termin vereinbaren',
      'アポを取る、約束をする',
    ],
    [
      'Fissiamo un appuntamento per giovedì?',
      'Ho fissato un appuntamento con il cliente.',
      'Per parlare con il direttore bisogna fissare un appuntamento.',
    ],
    'a woman on the phone writing an appointment in an open paper planner on her desk, smiling',
    ['organizzare', 'rispondere-al-telefono']
  ),
  ov(
    'partecipare-a-una-riunione',
    'partecipare a una riunione',
    'Essere presenti a un incontro di lavoro.',
    [
      'to attend a meeting',
      'asistir a una reunión',
      'participer à une réunion',
      'zúčastnit se porady',
      'uczestniczyć w zebraniu',
      'toplantıya katılmak',
      'an einer Besprechung teilnehmen',
      '会議に出る',
    ],
    [
      'Domani partecipo a una riunione a Milano.',
      'Tutti devono partecipare alla riunione.',
      'Non posso partecipare: sono malato.',
    ],
    'six colleagues sitting around a meeting table with notebooks and laptops, listening to a colleague who is talking',
    ['fare-una-presentazione']
  ),
  ov(
    'fare-una-presentazione',
    'fare una presentazione',
    'Parlare davanti ad altre persone per spiegare un progetto.',
    [
      'to give a presentation',
      'hacer una presentación',
      'faire une présentation',
      'mít prezentaci',
      'zrobić prezentację',
      'sunum yapmak',
      'eine Präsentation halten',
      'プレゼンをする',
    ],
    [
      'Domani faccio una presentazione al cliente.',
      'Ha fatto una presentazione bellissima.',
      'Sono nervoso: devo fare una presentazione.',
    ],
    'a young woman standing in front of a big screen showing a colourful chart, presenting to colleagues sitting at a table',
    ['partecipare-a-una-riunione']
  ),
  ov(
    'fare-una-videochiamata',
    'fare una videochiamata',
    'Parlare con qualcuno vedendolo sullo schermo.',
    [
      'to make a video call',
      'hacer una videollamada',
      'faire un appel vidéo',
      'mít videohovor',
      'prowadzić wideorozmowę',
      'görüntülü görüşme yapmak',
      'einen Videoanruf machen',
      'ビデオ通話をする',
    ],
    [
      'Alle tre facciamo una videochiamata con Londra.',
      'Ho fatto una videochiamata con i colleghi.',
      'Durante la videochiamata si è bloccato tutto.',
    ],
    'a man with a headset at his desk talking and gesturing to a laptop screen showing four colleagues in a grid',
    ['lavorare-da-casa', 'partecipare-a-una-riunione']
  ),
  ov(
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
    ['Collaboro con un’agenzia di Roma.', 'Se collaboriamo, finiamo prima.', 'Grazie a tutti per aver collaborato.'],
    'three colleagues leaning over one laptop together at a desk, one pointing at the screen, all engaged and smiling',
    ['partecipare-a-una-riunione']
  ),
  ov(
    'fare-una-pausa',
    'fare una pausa',
    'Smettere di lavorare per qualche minuto per riposarsi.',
    [
      'to take a break',
      'hacer una pausa, tomarse un descanso',
      'faire une pause',
      'udělat si přestávku',
      'zrobić przerwę',
      'mola vermek',
      'eine Pause machen',
      '休憩する',
    ],
    ['Facciamo una pausa di dieci minuti?', 'A mezzogiorno faccio una pausa.', 'Sei stanco: fai una pausa!'],
    'two colleagues standing by an office window relaxing with small cups of espresso, chatting and laughing'
  ),
  ov(
    'fare-gli-straordinari',
    'fare gli straordinari',
    'Lavorare più ore del normale, di solito la sera.',
    [
      'to work overtime',
      'hacer horas extra',
      'faire des heures supplémentaires',
      'pracovat přesčas',
      'pracować po godzinach, robić nadgodziny',
      'fazla mesai yapmak',
      'Überstunden machen',
      '残業する',
    ],
    [
      'Questa settimana faccio gli straordinari.',
      'Gli straordinari sono pagati bene?',
      'Non voglio fare gli straordinari anche il sabato.',
    ],
    'a tired man in a shirt yawning at his desk in front of a laptop, a desk lamp switched on, a round wall clock behind him showing ten o’clock, an empty coffee cup'
  ),

  // --- la carriera ---------------------------------------------------------------------------
  ov(
    'cercare-lavoro',
    'cercare lavoro',
    'Guardare gli annunci per trovare un lavoro.',
    [
      'to look for a job',
      'buscar trabajo',
      'chercher du travail',
      'hledat práci',
      'szukać pracy',
      'iş aramak',
      'Arbeit suchen',
      '仕事を探す',
    ],
    ['Cerco lavoro da tre mesi.', 'Dopo la laurea ho cercato lavoro all’estero.', 'Stai ancora cercando lavoro?'],
    'a young woman on a sofa scrolling job adverts on her laptop, a notepad with a list next to her, hopeful expression',
    ['candidarsi']
  ),
  ov(
    'candidarsi',
    'candidarsi',
    'Mandare il curriculum per chiedere un lavoro.',
    [
      'to apply (for a job)',
      'presentar una candidatura, postularse',
      'postuler',
      'ucházet se (o místo)',
      'aplikować, ubiegać się (o pracę)',
      'başvurmak (işe)',
      'sich bewerben',
      '応募する',
    ],
    ['Mi sono candidato per un posto in banca.', 'Perché non ti candidi?', 'Si sono candidate cento persone.'],
    'a young man handing a printed CV in a folder to a smiling woman at an office reception desk',
    ['cercare-lavoro', 'fare-un-colloquio']
  ),
  ov(
    'fare-un-colloquio',
    'fare un colloquio',
    'Parlare con chi offre un lavoro per farsi conoscere.',
    [
      'to have a job interview',
      'hacer una entrevista',
      'passer un entretien',
      'jít na pohovor',
      'mieć rozmowę kwalifikacyjną',
      'iş görüşmesine girmek',
      'ein Vorstellungsgespräch haben',
      '面接を受ける',
    ],
    [
      'Domani faccio un colloquio in un’agenzia.',
      'Com’è andato il colloquio?',
      'Ho fatto tre colloqui questa settimana.',
    ],
    'a young woman in a blazer sitting at a desk facing two interviewers, a man and a woman, who hold her CV and listen to her, all seen from the side and fully inside the frame',
    ['candidarsi', 'assumere']
  ),
  ov(
    'assumere',
    'assumere',
    'Dare un lavoro a qualcuno con un contratto.',
    [
      'to hire, to take on',
      'contratar',
      'embaucher',
      'přijmout (do práce)',
      'zatrudnić',
      'işe almak',
      'einstellen',
      '雇う、採用する',
    ],
    ['L’azienda assume dieci persone.', 'Mi hanno assunto! Comincio lunedì.', 'Cercano qualcuno da assumere subito.'],
    'a manager warmly shaking hands with a happy new employee over a desk with a signed contract on it',
    ['fare-un-colloquio', 'firmare']
  ),
  ov(
    'licenziare',
    'licenziare',
    'Mandare via un lavoratore: il lavoro finisce.',
    [
      'to fire, to dismiss',
      'despedir',
      'licencier',
      'propustit, dát výpověď',
      'zwolnić (z pracy)',
      'işten çıkarmak',
      'entlassen, kündigen',
      '解雇する、クビにする',
    ],
    [
      'Hanno licenziato venti operai.',
      'Se arrivi sempre in ritardo, ti licenziano.',
      'L’hanno licenziato senza motivo.',
    ],
    'a sad man leaving an office carrying a cardboard box with his things, a plant sticking out of it, colleagues watching',
    ['dimettersi']
  ),
  ov(
    'dimettersi',
    'dimettersi',
    'Decidere di lasciare il proprio lavoro.',
    [
      'to resign, to quit',
      'dimitir',
      'démissionner',
      'dát výpověď (sám), odejít z práce',
      'złożyć wypowiedzenie, zrezygnować',
      'istifa etmek',
      'kündigen (selbst)',
      '辞職する、辞める',
    ],
    ['Mi sono dimesso: cambio lavoro.', 'Il direttore si è dimesso ieri.', 'Perché ti sei dimessa?'],
    'a smiling woman placing a sealed plain white envelope on her manager’s desk, the manager sitting at the desk looking surprised, no text anywhere',
    ['licenziare']
  ),
  ov(
    'guadagnare',
    'guadagnare',
    'Ricevere soldi per il proprio lavoro.',
    [
      'to earn',
      'ganar (dinero)',
      'gagner (de l’argent)',
      'vydělávat',
      'zarabiać',
      'kazanmak (para)',
      'verdienen',
      '稼ぐ',
    ],
    ['Quanto guadagni al mese?', 'In questo lavoro si guadagna bene.', 'Guadagno poco, ma il lavoro mi piace.'],
    'a young woman at home smiling at her smartphone showing a bank app with a large green incoming amount, holding a cup of coffee',
    ['chiedere-un-aumento']
  ),
  ov(
    'chiedere-un-aumento',
    'chiedere un aumento',
    'Domandare al capo uno stipendio più alto.',
    [
      'to ask for a pay rise',
      'pedir un aumento',
      'demander une augmentation',
      'požádat o zvýšení platu',
      'poprosić o podwyżkę',
      'zam istemek',
      'um eine Gehaltserhöhung bitten',
      '昇給を頼む',
    ],
    [
      'Domani chiedo un aumento al capo.',
      'Hai chiesto un aumento?',
      'Lavoro qui da cinque anni: è ora di chiedere un aumento.',
    ],
    'a young man sitting in his manager’s office confidently talking and gesturing, the manager listening thoughtfully with a pen',
    ['guadagnare']
  ),
  ov(
    'fare-carriera',
    'fare carriera',
    'Salire a un posto di lavoro più importante.',
    [
      'to make a career, to get ahead',
      'hacer carrera',
      'faire carrière',
      'udělat kariéru',
      'robić karierę',
      'kariyer yapmak',
      'Karriere machen',
      '出世する',
    ],
    [
      'Ha fatto carriera in pochi anni.',
      'Voglio fare carriera in questa azienda.',
      'Per fare carriera bisogna studiare.',
    ],
    'colleagues applauding and congratulating a smiling woman who has just been promoted, a manager shaking her hand',
    ['chiedere-un-aumento']
  ),
  ov(
    'andare-in-ferie',
    'andare in ferie',
    'Smettere di lavorare per un periodo di vacanza.',
    [
      'to go on holiday (from work)',
      'irse de vacaciones',
      'partir en congés',
      'jet na dovolenou',
      'iść na urlop',
      'izne çıkmak',
      'in Urlaub gehen',
      '休暇を取る',
    ],
    ['Ad agosto vado in ferie.', 'Quando vai in ferie?', 'Il capo è andato in ferie per due settimane.'],
    'a happy woman leaving the office with a small suitcase and sunglasses on her head, waving goodbye to her colleagues'
  ),
  ov(
    'andare-in-pensione',
    'andare in pensione',
    'Smettere di lavorare per sempre perché si è anziani.',
    [
      'to retire',
      'jubilarse',
      'prendre sa retraite',
      'odejít do důchodu',
      'przejść na emeryturę',
      'emekli olmak',
      'in Rente gehen',
      '退職する、定年になる',
    ],
    [
      'Mio padre va in pensione a sessantasette anni.',
      'Quando andrò in pensione, viaggerò.',
      'La collega è andata in pensione ieri.',
    ],
    'an older man with grey hair smiling and holding a bunch of flowers and a gift at his office farewell party, colleagues clapping around him'
  ),
];

export const officeVerbTranslationExercises = [
  tr(
    'Ti mando un’email e allego il contratto.',
    'I’ll send you an email and attach the contract.',
    'Te mando un correo y adjunto el contrato.',
    'Je t’envoie un e-mail et je joins le contrat.',
    'Pošlu ti e-mail a přiložím smlouvu.',
    'Wyślę ci e-mail i załączę umowę.',
    'Sana bir e-posta gönderip sözleşmeyi ekliyorum.',
    'Ich schicke dir eine E-Mail und hänge den Vertrag an.',
    'メールを送って、契約書を添付します。'
  ),
  tr(
    'Salva il file prima di spegnere il computer!',
    'Save the file before you switch off the computer!',
    '¡Guarda el archivo antes de apagar el ordenador!',
    'Enregistre le fichier avant d’éteindre l’ordinateur !',
    'Než vypneš počítač, ulož ten soubor!',
    'Zapisz plik, zanim wyłączysz komputer!',
    'Bilgisayarı kapatmadan önce dosyayı kaydet!',
    'Speichere die Datei, bevor du den Computer ausschaltest!',
    'パソコンを切る前にファイルを保存して！'
  ),
  tr(
    'Compili il modulo e firmi in fondo, per favore.',
    'Please fill in the form and sign at the bottom.',
    'Rellene el formulario y firme abajo, por favor.',
    'Remplissez le formulaire et signez en bas, s’il vous plaît.',
    'Vyplňte prosím formulář a podepište se dole.',
    'Proszę wypełnić formularz i podpisać się na dole.',
    'Lütfen formu doldurun ve en alta imza atın.',
    'Füllen Sie bitte das Formular aus und unterschreiben Sie unten.',
    'この用紙に記入して、一番下にサインしてください。'
  ),
  tr(
    'Il lunedì lavoro in ufficio, il venerdì lavoro da casa.',
    'On Mondays I work at the office, on Fridays I work from home.',
    'Los lunes trabajo en la oficina y los viernes trabajo desde casa.',
    'Le lundi, je travaille au bureau ; le vendredi, je travaille de chez moi.',
    'V pondělí pracuji v kanceláři, v pátek z domu.',
    'W poniedziałki pracuję w biurze, w piątki z domu.',
    'Pazartesileri ofiste, cumaları evden çalışıyorum.',
    'Montags arbeite ich im Büro, freitags von zu Hause.',
    '月曜日はオフィスで、金曜日は家で働きます。'
  ),
  tr(
    'Fissiamo un appuntamento per la settimana prossima?',
    'Shall we make an appointment for next week?',
    '¿Concertamos una cita para la semana que viene?',
    'On fixe un rendez-vous pour la semaine prochaine ?',
    'Domluvíme si schůzku na příští týden?',
    'Umówimy się na spotkanie w przyszłym tygodniu?',
    'Gelecek hafta için bir randevu ayarlayalım mı?',
    'Vereinbaren wir einen Termin für nächste Woche?',
    '来週、アポを取りましょうか？'
  ),
  tr(
    'Questa settimana ho fatto gli straordinari tutte le sere.',
    'This week I worked overtime every evening.',
    'Esta semana he hecho horas extra todas las tardes.',
    'Cette semaine, j’ai fait des heures supplémentaires tous les soirs.',
    'Tento týden jsem každý večer pracoval přesčas.',
    'W tym tygodniu co wieczór pracowałem po godzinach.',
    'Bu hafta her akşam fazla mesai yaptım.',
    'Diese Woche habe ich jeden Abend Überstunden gemacht.',
    '今週は毎晩残業しました。'
  ),
  tr(
    'Mi sono candidata e la settimana prossima faccio il colloquio.',
    'I applied and next week I’m having the interview.',
    'Me he postulado y la semana que viene hago la entrevista.',
    'J’ai postulé et la semaine prochaine je passe l’entretien.',
    'Přihlásila jsem se a příští týden jdu na pohovor.',
    'Złożyłam aplikację i w przyszłym tygodniu mam rozmowę kwalifikacyjną.',
    'Başvurdum ve gelecek hafta iş görüşmem var.',
    'Ich habe mich beworben und habe nächste Woche das Vorstellungsgespräch.',
    '応募して、来週面接を受けます。'
  ),
  tr(
    'Mi hanno assunto con un contratto a tempo indeterminato!',
    'They’ve hired me on a permanent contract!',
    '¡Me han contratado con un contrato indefinido!',
    'On m’a embauché en CDI !',
    'Přijali mě na smlouvu na dobu neurčitou!',
    'Zatrudnili mnie na umowę na czas nieokreślony!',
    'Beni süresiz sözleşmeyle işe aldılar!',
    'Sie haben mich unbefristet eingestellt!',
    '無期契約で採用されました！'
  ),
  tr(
    'Guadagno poco: domani chiedo un aumento.',
    'I earn little: tomorrow I’m asking for a pay rise.',
    'Gano poco: mañana pido un aumento.',
    'Je gagne peu : demain, je demande une augmentation.',
    'Vydělávám málo: zítra požádám o zvýšení platu.',
    'Mało zarabiam: jutro poproszę o podwyżkę.',
    'Az kazanıyorum: yarın zam isteyeceğim.',
    'Ich verdiene wenig: Morgen bitte ich um eine Gehaltserhöhung.',
    '給料が少ないので、明日昇給を頼みます。'
  ),
  tr(
    'Mio nonno è andato in pensione e adesso va in ferie quando vuole.',
    'My grandfather has retired and now he goes on holiday whenever he wants.',
    'Mi abuelo se ha jubilado y ahora se va de vacaciones cuando quiere.',
    'Mon grand-père a pris sa retraite et maintenant il part en vacances quand il veut.',
    'Můj děda odešel do důchodu a teď jezdí na dovolenou, kdy chce.',
    'Mój dziadek przeszedł na emeryturę i teraz jeździ na urlop, kiedy chce.',
    'Dedem emekli oldu ve artık istediği zaman tatile gidiyor.',
    'Mein Opa ist in Rente gegangen und fährt jetzt in Urlaub, wann er will.',
    '祖父は退職して、今は好きなときに休暇に出かけます。'
  ),
];
