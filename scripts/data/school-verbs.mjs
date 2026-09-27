// I verbi della lezione «I verbi della scuola» (2026-09-27).
//
// Seguito di «La scuola», chiesto da Martin insieme ai verbi dell'ufficio: tre gruppi, studiare (16: studiare,
// imparare, ripassare, sottolineare, prendere appunti, copiare, incollare, misurare...), in classe (12: alzare la
// mano, fare una domanda, rispondere, spiegare, capire, sbagliare, correggere, interrogare...) e la vita a scuola
// (8: fare i compiti, fare merenda, marinare la scuola, superare un esame, essere bocciato, laurearsi...).
// Non ripete scrivere e ascoltare («I verbi del corpo»), insegnare e chiacchierare («I verbi delle relazioni»),
// tagliare («I verbi della casa»), consegnare («I verbi della città»).
//
// Esercizio come «I verbi della città» (`photoRows`): una foto per riga, i verbi nella barra, per ogni foto e'
// giusto il suo verbo piu' quelli di `fits`. Le coppie che una foto sola non distingue (studiare/ripassare,
// sbagliare/cancellare, disegnare/colorare) si accettano a vicenda.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-scuola`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const sv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-scuola/${slug}`,
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

export const schoolVerbs = [
  // --- studiare ------------------------------------------------------------------------------
  sv(
    'andare-a-scuola',
    'andare a scuola',
    'Andare ogni mattina nel posto dove si studia.',
    [
      'to go to school',
      'ir a la escuela',
      'aller à l’école',
      'chodit do školy',
      'chodzić do szkoły',
      'okula gitmek',
      'zur Schule gehen',
      '学校に行く',
    ],
    ['Vado a scuola a piedi.', 'A che ora vai a scuola?', 'Mio figlio va a scuola da settembre.'],
    'two children of about eight with colourful school backpacks walking together on a pavement in the morning, holding hands and smiling'
  ),
  sv(
    'studiare',
    'studiare',
    'Leggere e lavorare sui libri per imparare.',
    [
      'to study',
      'estudiar',
      'étudier',
      'studovat, učit se',
      'uczyć się',
      'ders çalışmak',
      'lernen, studieren',
      '勉強する',
    ],
    ['Stasera studio storia.', 'Studio l’italiano da un anno.', 'Mia sorella studia medicina a Padova.'],
    'a teenage girl sitting at a desk with open books and notes, concentrating, reading and holding a pen',
    ['ripassare', 'imparare', 'leggere']
  ),
  sv(
    'imparare',
    'imparare',
    'Arrivare a sapere o a saper fare una cosa nuova.',
    ['to learn', 'aprender', 'apprendre', 'naučit se', 'nauczyć się', 'öğrenmek', 'lernen', '学ぶ、覚える'],
    ['Ho imparato a nuotare a sei anni.', 'Oggi abbiamo imparato le frazioni.', 'Si impara sbagliando.'],
    'a young girl proudly riding a bicycle for the first time while her father lets go of the saddle, both smiling',
    ['studiare']
  ),
  sv(
    'imparare-a-memoria',
    'imparare a memoria',
    'Ripetere un testo finché si sa dire senza leggerlo.',
    [
      'to learn by heart',
      'aprender de memoria',
      'apprendre par cœur',
      'naučit se nazpaměť',
      'nauczyć się na pamięć',
      'ezberlemek',
      'auswendig lernen',
      '暗記する',
    ],
    [
      'Devo imparare a memoria una poesia.',
      'Hai imparato a memoria le tabelline?',
      'Non imparare a memoria: cerca di capire.',
    ],
    'a boy standing alone with his eyes closed and one finger raised, reciting a poem from memory, a closed book held against his chest, concentrating',
    ['ripetere', 'studiare']
  ),
  sv(
    'ripassare',
    'ripassare',
    'Studiare di nuovo una cosa già studiata, prima di una verifica.',
    [
      'to revise, to review',
      'repasar',
      'réviser',
      'opakovat si (učivo)',
      'powtarzać (materiał)',
      'tekrar etmek (dersi)',
      'wiederholen (den Stoff)',
      '復習する',
    ],
    ['Stasera ripasso per la verifica.', 'Ripassiamo insieme i verbi?', 'Ho ripassato tutto il capitolo.'],
    'two teenage friends sitting on a sofa going over their notes and flashcards together before an exam',
    ['studiare']
  ),
  sv(
    'leggere',
    'leggere',
    'Guardare le parole scritte e capirle.',
    ['to read', 'leer', 'lire', 'číst', 'czytać', 'okumak', 'lesen', '読む'],
    [
      'Leggi ad alta voce, per favore.',
      'Sto leggendo un libro bellissimo.',
      'Leggete il testo e rispondete alle domande.',
    ],
    'a girl of about nine sitting in a classroom reading aloud from an open book, her finger following the lines',
    ['studiare']
  ),
  sv(
    'sottolineare',
    'sottolineare',
    'Tracciare una linea sotto le parole importanti.',
    [
      'to underline',
      'subrayar',
      'souligner',
      'podtrhnout',
      'podkreślać',
      'altını çizmek',
      'unterstreichen',
      '下線を引く',
    ],
    [
      'Sottolinea i verbi in rosso.',
      'Ho sottolineato le frasi importanti.',
      'Non sottolineare il libro della biblioteca!',
    ],
    'a close-up of a student’s hand underlining a line of a printed textbook page with a ruler and a yellow highlighter',
    ['studiare']
  ),
  sv(
    'prendere-appunti',
    'prendere appunti',
    'Scrivere velocemente le cose importanti che si sentono.',
    [
      'to take notes',
      'tomar apuntes',
      'prendre des notes',
      'dělat si poznámky',
      'robić notatki',
      'not almak',
      'mitschreiben, Notizen machen',
      'メモを取る、ノートを取る',
    ],
    ['Durante la lezione prendo appunti.', 'Mi presti i tuoi appunti?', 'Prendete appunti: è importante.'],
    'a university student in a lecture hall writing notes quickly in a notebook while looking up at the professor',
    ['studiare']
  ),
  sv(
    'copiare',
    'copiare',
    'Scrivere quello che ha scritto un altro, anche durante una verifica.',
    [
      'to copy, to cheat',
      'copiar',
      'copier',
      'opisovat',
      'ściągać, odpisywać',
      'kopya çekmek',
      'abschreiben',
      '写す、カンニングする',
    ],
    ['Non copiare dal compagno!', 'Ho copiato l’esercizio dalla lavagna.', 'Il professore ha visto che copiava.'],
    'during a written test, a boy at his school desk leaning sideways with a sneaky look to read the answers on the paper of the girl at the next desk, who is writing and does not notice'
  ),
  sv(
    'cancellare',
    'cancellare',
    'Togliere quello che si è scritto, con la gomma o il cancellino.',
    [
      'to erase, to rub out',
      'borrar',
      'effacer, gommer',
      'smazat, vygumovat',
      'wymazywać, ścierać',
      'silmek',
      'radieren, löschen',
      '消す',
    ],
    ['Cancella la lavagna, per favore.', 'Ho sbagliato: cancello con la gomma.', 'Non cancellare, correggi.'],
    'a girl wiping a green chalkboard with a board eraser, half of the chalk writing already wiped away',
    ['sbagliare', 'correggere']
  ),
  sv(
    'disegnare',
    'disegnare',
    'Fare un’immagine con la matita o la penna.',
    ['to draw', 'dibujar', 'dessiner', 'kreslit', 'rysować', 'resim çizmek', 'zeichnen', '絵を描く'],
    ['Disegno un gatto.', 'Mio fratello disegna benissimo.', 'Disegnate la vostra casa.'],
    'a small boy at a school desk drawing a house and a tree with a pencil on a sheet of paper',
    ['colorare']
  ),
  sv(
    'colorare',
    'colorare',
    'Dare i colori a un disegno.',
    ['to colour in', 'colorear', 'colorier', 'vybarvovat', 'kolorować', 'boyamak', 'ausmalen', '色を塗る'],
    ['Coloro il sole di giallo.', 'I bambini colorano con i pastelli.', 'Hai colorato fuori dai bordi!'],
    'a little girl colouring a picture of a flower with coloured pencils, a box of coloured pencils open next to her',
    ['disegnare']
  ),
  sv(
    'incollare',
    'incollare',
    'Attaccare una cosa con la colla.',
    ['to glue, to stick', 'pegar', 'coller', 'lepit', 'kleić', 'yapıştırmak', 'kleben', '貼る、のりづけする'],
    ['Incolla la foto sul quaderno.', 'Ho incollato le figure sul cartellone.', 'Taglia e poi incolla.'],
    'a child at a table sticking a paper cut-out of a star onto a sheet of coloured card with a glue stick'
  ),
  sv(
    'calcolare',
    'calcolare',
    'Trovare un risultato con i numeri.',
    [
      'to calculate',
      'calcular',
      'calculer',
      'počítat, vypočítat',
      'obliczać',
      'hesaplamak',
      'rechnen, berechnen',
      '計算する',
    ],
    ['Calcola quanto fa dodici per sette.', 'Ho calcolato male il resto.', 'Sai calcolare la percentuale?'],
    'a teenage boy at his desk working out a maths problem with a calculator and a pencil, an exercise book full of numbers in front of him'
  ),
  sv(
    'misurare',
    'misurare',
    'Trovare quanto è lunga, alta o grande una cosa.',
    ['to measure', 'medir', 'mesurer', 'měřit', 'mierzyć', 'ölçmek', 'messen', '測る'],
    [
      'Misura la linea con il righello.',
      'Il dottore mi ha misurato l’altezza.',
      'Abbiamo misurato l’aula: è lunga otto metri.',
    ],
    'a close-up of a girl at a desk holding a wooden ruler against the edge of a book to measure it, the ruler clearly visible, her eyes on the numbers'
  ),
  sv(
    'fare-un-esperimento',
    'fare un esperimento',
    'Provare qualcosa per vedere che cosa succede, come in laboratorio.',
    [
      'to do an experiment',
      'hacer un experimento',
      'faire une expérience',
      'dělat pokus',
      'robić doświadczenie',
      'deney yapmak',
      'ein Experiment machen',
      '実験をする',
    ],
    [
      'Oggi facciamo un esperimento con l’acqua.',
      'Abbiamo fatto un esperimento sulle piante.',
      'In laboratorio si fanno esperimenti.',
    ],
    'two teenage students in lab coats and safety glasses pouring a blue liquid into a test tube in a school laboratory'
  ),

  // --- in classe -----------------------------------------------------------------------------
  sv(
    'alzare-la-mano',
    'alzare la mano',
    'Tenere il braccio in alto per chiedere di parlare.',
    [
      'to raise your hand',
      'levantar la mano',
      'lever la main',
      'hlásit se, zvednout ruku',
      'podnieść rękę',
      'parmak kaldırmak',
      'sich melden',
      '手を挙げる',
    ],
    [
      'Se vuoi parlare, alza la mano.',
      'Chi sa la risposta alza la mano.',
      'Ho alzato la mano, ma la maestra non mi ha visto.',
    ],
    'a smiling schoolgirl at her desk eagerly raising her hand high, classmates around her',
    ['fare-una-domanda', 'rispondere']
  ),
  sv(
    'fare-una-domanda',
    'fare una domanda',
    'Chiedere qualcosa per sapere o capire.',
    [
      'to ask a question',
      'hacer una pregunta',
      'poser une question',
      'položit otázku',
      'zadać pytanie',
      'soru sormak',
      'eine Frage stellen',
      '質問する',
    ],
    [
      'Posso fare una domanda?',
      'Il bambino fa sempre tante domande.',
      'Alla fine della lezione faccio una domanda al professore.',
    ],
    'a teenage student standing at the teacher’s desk with an open book, pointing at a page and asking the teacher, who listens',
    ['alzare-la-mano']
  ),
  sv(
    'rispondere',
    'rispondere',
    'Dire o scrivere qualcosa dopo una domanda.',
    ['to answer', 'responder, contestar', 'répondre', 'odpovědět', 'odpowiadać', 'cevap vermek', 'antworten', '答える'],
    ['Rispondi alla domanda, per favore.', 'Ho risposto bene a tutte le domande.', 'Nessuno sa rispondere.'],
    'a boy standing up next to his desk answering confidently, while the teacher nods and smiles',
    ['alzare-la-mano']
  ),
  sv(
    'spiegare',
    'spiegare',
    'Dire una cosa in modo che gli altri la capiscano.',
    [
      'to explain',
      'explicar',
      'expliquer',
      'vysvětlit',
      'wyjaśniać, tłumaczyć',
      'açıklamak, anlatmak',
      'erklären',
      '説明する',
    ],
    ['La professoressa spiega la lezione.', 'Mi spieghi questo esercizio?', 'Te lo spiego un’altra volta.'],
    'a teacher standing at a whiteboard drawing a simple diagram and explaining it to a small group of attentive pupils'
  ),
  sv(
    'capire',
    'capire',
    'Riuscire a sapere che cosa vuol dire una cosa.',
    [
      'to understand',
      'entender, comprender',
      'comprendre',
      'rozumět, pochopit',
      'rozumieć',
      'anlamak',
      'verstehen',
      '分かる、理解する',
    ],
    ['Non ho capito: puoi ripetere?', 'Adesso capisco!', 'Capisci l’italiano?'],
    'a girl at her desk with a sudden happy expression of understanding, pointing a finger up, her friend beside her showing her an exercise book'
  ),
  sv(
    'sbagliare',
    'sbagliare',
    'Fare un errore.',
    [
      'to make a mistake',
      'equivocarse',
      'se tromper',
      'udělat chybu',
      'pomylić się',
      'hata yapmak',
      'sich irren, einen Fehler machen',
      '間違える',
    ],
    ['Ho sbagliato l’esercizio.', 'Scusa, ho sbagliato numero.', 'Tutti sbagliano, non preoccuparti.'],
    'a boy at his desk looking at his test paper with a big red cross on it, holding his head with an embarrassed expression',
    ['correggere', 'cancellare']
  ),
  sv(
    'correggere',
    'correggere',
    'Trovare gli errori e scrivere la forma giusta.',
    [
      'to correct, to mark',
      'corregir',
      'corriger',
      'opravit',
      'poprawiać',
      'düzeltmek',
      'korrigieren',
      '直す、添削する',
    ],
    ['La maestra corregge i compiti.', 'Correggi gli errori in rosso.', 'Ho corretto la frase.'],
    'a teacher at her desk marking a pile of exercise books with a red pen, ticking and circling',
    ['sbagliare']
  ),
  sv(
    'ripetere',
    'ripetere',
    'Dire o fare di nuovo la stessa cosa.',
    ['to repeat', 'repetir', 'répéter', 'opakovat', 'powtarzać', 'tekrarlamak', 'wiederholen', '繰り返す'],
    [
      'Può ripetere, per favore?',
      'Ripetete tutti insieme: «buongiorno»!',
      'Ti ho già ripetuto tre volte di fare i compiti.',
    ],
    'a class of young children with their mouths open repeating a word all together, looking at their teacher who holds up a picture card',
    ['imparare-a-memoria']
  ),
  sv(
    'dettare',
    'dettare',
    'Leggere un testo ad alta voce perché gli altri lo scrivano.',
    ['to dictate', 'dictar', 'dicter', 'diktovat', 'dyktować', 'dikte ettirmek', 'diktieren', '書き取らせる、口述する'],
    ['La maestra detta e noi scriviamo.', 'Oggi facciamo un dettato.', 'Ti detto il numero di telefono.'],
    'a teacher walking between the desks reading slowly from a book while the children write in their exercise books'
  ),
  sv(
    'stare-attento',
    'stare attento',
    'Ascoltare e guardare con la mente sulla lezione.',
    [
      'to pay attention',
      'prestar atención, estar atento',
      'faire attention',
      'dávat pozor',
      'uważać',
      'dikkat etmek',
      'aufpassen',
      '集中する、注意して聞く',
    ],
    ['Stai attento alla lezione!', 'Se stai attento, capisci tutto.', 'State attenti: questo è importante.'],
    'a row of pupils sitting up straight at their desks, all looking forward with focused, attentive faces',
    ['capire']
  ),
  sv(
    'distrarsi',
    'distrarsi',
    'Pensare ad altro e non seguire più.',
    [
      'to get distracted',
      'distraerse',
      'se distraire, être distrait',
      'rozptýlit se, nedávat pozor',
      'rozpraszać się',
      'dikkati dağılmak',
      'sich ablenken lassen, abschweifen',
      '気が散る',
    ],
    [
      'Mi distraggo sempre quando guardo fuori.',
      'Non distrarti, stiamo lavorando.',
      'Con il telefono ci si distrae facilmente.',
    ],
    'a boy at his school desk ignoring his open book, resting his chin on his hand and dreamily looking out of the window'
  ),
  sv(
    'interrogare',
    'interrogare',
    'Fare domande a uno studente per dargli un voto.',
    [
      'to test orally, to quiz',
      'preguntar la lección, examinar oralmente',
      'interroger',
      'zkoušet (ústně)',
      'pytać (przy tablicy)',
      'sözlüye kaldırmak',
      'abfragen, mündlich prüfen',
      '口頭試問をする、当てる',
    ],
    ['Domani la prof mi interroga.', 'Il professore interroga tre studenti.', 'Speriamo che oggi non interroghi!'],
    'a teacher sitting at her desk asking questions to a teenage boy standing in front of the blackboard, the rest of the class watching',
    ['rispondere']
  ),

  // --- la vita a scuola ------------------------------------------------------------------------
  sv(
    'fare-i-compiti',
    'fare i compiti',
    'Fare a casa gli esercizi dati a scuola.',
    [
      'to do your homework',
      'hacer los deberes',
      'faire ses devoirs',
      'dělat úkoly',
      'odrabiać lekcje',
      'ödev yapmak',
      'Hausaufgaben machen',
      '宿題をする',
    ],
    ['Faccio i compiti dopo pranzo.', 'Hai fatto i compiti?', 'Mia madre mi aiuta a fare i compiti.'],
    'a girl of about ten doing homework at the kitchen table at home, exercise books open, her mother helping her',
    ['studiare']
  ),
  sv(
    'fare-merenda',
    'fare merenda',
    'Mangiare qualcosa di piccolo a metà mattina o nel pomeriggio.',
    [
      'to have a snack',
      'merendar',
      'goûter, prendre le goûter',
      'svačit',
      'jeść przekąskę, podwieczorek',
      'atıştırmak, ara öğün yapmak',
      'eine Zwischenmahlzeit essen',
      'おやつを食べる',
    ],
    ['Alle dieci facciamo merenda.', 'Oggi faccio merenda con una mela.', 'I bambini fanno merenda in cortile.'],
    'three schoolchildren sitting on a bench in a school courtyard eating apples and sandwiches during break'
  ),
  sv(
    'marinare-la-scuola',
    'marinare la scuola',
    'Non andare a scuola senza dirlo ai genitori.',
    [
      'to skip school, to play truant',
      'hacer novillos, faltar a clase',
      'sécher les cours',
      'chodit za školu',
      'wagarować',
      'okulu asmak, okulu kırmak',
      'die Schule schwänzen',
      '学校をサボる',
    ],
    [
      'Ieri Marco ha marinato la scuola.',
      'Non marinare la scuola!',
      'Una volta ho marinato la scuola per andare al mare.',
    ],
    'two teenagers with school backpacks sneaking away from a school gate with guilty grins, one looking back over his shoulder'
  ),
  sv(
    'superare-un-esame',
    'superare un esame',
    'Fare bene un esame e riuscire ad andare avanti.',
    [
      'to pass an exam',
      'aprobar un examen',
      'réussir un examen',
      'udělat zkoušku',
      'zdać egzamin',
      'sınavı geçmek',
      'eine Prüfung bestehen',
      '試験に合格する',
    ],
    ['Ho superato l’esame di guida!', 'Per superare l’esame bisogna studiare.', 'Complimenti, hai superato l’esame!'],
    'a young woman jumping with joy holding up an exam paper with a big green tick, her friends cheering around her',
    ['essere-promosso']
  ),
  sv(
    'essere-promosso',
    'essere promosso',
    'Finire bene l’anno e passare a quello dopo.',
    [
      'to pass (the school year), to move up',
      'aprobar el curso, pasar de curso',
      'passer dans la classe supérieure',
      'postoupit do dalšího ročníku',
      'zdać do następnej klasy',
      'sınıfı geçmek',
      'versetzt werden',
      '進級する',
    ],
    ['Sono stato promosso con otto!', 'Speriamo che Luca sia promosso.', 'Tutta la classe è stata promossa.'],
    'a happy boy showing his school report card to his proud parents at home, the parents hugging him',
    ['superare-un-esame']
  ),
  sv(
    'essere-bocciato',
    'essere bocciato',
    'Non superare l’anno o un esame e doverlo rifare.',
    [
      'to fail (an exam, a school year)',
      'suspender, repetir curso',
      'échouer, redoubler',
      'propadnout',
      'nie zdać, oblać',
      'sınıfta kalmak, sınavdan kalmak',
      'durchfallen, sitzen bleiben',
      '落第する、試験に落ちる',
    ],
    [
      'Mi hanno bocciato all’esame di guida.',
      'Se non studi, rischi di essere bocciato.',
      'È stato bocciato e ha ripetuto l’anno.',
    ],
    'a disappointed young adult student sitting on the steps outside a university building looking at an exam paper marked with a big red cross, a friend next to him patting his shoulder to cheer him up'
  ),
  sv(
    'iscriversi',
    'iscriversi',
    'Mettere il proprio nome per entrare in una scuola o in un corso.',
    [
      'to enrol, to sign up',
      'matricularse, inscribirse',
      's’inscrire',
      'zapsat se',
      'zapisać się',
      'kaydolmak',
      'sich anmelden, sich einschreiben',
      '入学手続きをする、申し込む',
    ],
    [
      'Mi sono iscritto a un corso di italiano.',
      'Quando ti iscrivi all’università?',
      'Per iscriversi serve un documento.',
    ],
    'a young man at a university office counter filling in an enrolment form, a smiling clerk behind the counter handing him a pen'
  ),
  sv(
    'laurearsi',
    'laurearsi',
    'Finire l’università e prendere il titolo.',
    [
      'to graduate (from university)',
      'licenciarse, graduarse',
      'obtenir son diplôme (universitaire)',
      'dostudovat, absolvovat vysokou školu',
      'skończyć studia, obronić dyplom',
      'üniversiteden mezun olmak',
      'den Abschluss machen (an der Uni)',
      '大学を卒業する',
    ],
    ['Mi sono laureata in economia.', 'Mio figlio si laurea a luglio.', 'Dopo essersi laureato, ha trovato lavoro.'],
    'a smiling young woman wearing a traditional Italian laurel wreath on her head, holding a bouquet of flowers, hugged by her parents outside a university building',
    ['superare-un-esame']
  ),
];

export const schoolVerbTranslationExercises = [
  tr(
    'Se non capisci, alza la mano e fai una domanda.',
    'If you don’t understand, raise your hand and ask a question.',
    'Si no entiendes, levanta la mano y haz una pregunta.',
    'Si tu ne comprends pas, lève la main et pose une question.',
    'Když nerozumíš, přihlas se a zeptej se.',
    'Jeśli nie rozumiesz, podnieś rękę i zadaj pytanie.',
    'Anlamıyorsan parmak kaldır ve soru sor.',
    'Wenn du etwas nicht verstehst, melde dich und stell eine Frage.',
    '分からなかったら、手を挙げて質問してください。'
  ),
  tr(
    'Stasera ripasso per la verifica di domani.',
    'Tonight I’m revising for tomorrow’s test.',
    'Esta noche repaso para el examen de mañana.',
    'Ce soir, je révise pour le contrôle de demain.',
    'Dnes večer se učím na zítřejší písemku.',
    'Dziś wieczorem powtarzam materiał do jutrzejszego sprawdzianu.',
    'Bu akşam yarınki yazılı için tekrar yapıyorum.',
    'Heute Abend lerne ich für die Klassenarbeit morgen.',
    '今夜は明日のテストのために復習します。'
  ),
  tr(
    'La maestra spiega e i bambini prendono appunti.',
    'The teacher explains and the children take notes.',
    'La maestra explica y los niños toman apuntes.',
    'La maîtresse explique et les enfants prennent des notes.',
    'Paní učitelka vysvětluje a děti si dělají poznámky.',
    'Nauczycielka tłumaczy, a dzieci robią notatki.',
    'Öğretmen anlatıyor, çocuklar not alıyor.',
    'Die Lehrerin erklärt, und die Kinder schreiben mit.',
    '先生が説明して、子どもたちはノートを取ります。'
  ),
  tr(
    'Ho sbagliato tre esercizi, ma adesso li correggo.',
    'I got three exercises wrong, but now I’m correcting them.',
    'Me he equivocado en tres ejercicios, pero ahora los corrijo.',
    'Je me suis trompé dans trois exercices, mais maintenant je les corrige.',
    'Udělal jsem chybu ve třech cvičeních, ale teď je opravím.',
    'Pomyliłem się w trzech ćwiczeniach, ale teraz je poprawiam.',
    'Üç alıştırmada hata yaptım ama şimdi düzeltiyorum.',
    'Ich habe drei Übungen falsch gemacht, aber jetzt korrigiere ich sie.',
    '3つの問題を間違えたけど、今直しています。'
  ),
  tr(
    'Domani il professore mi interroga in storia.',
    'Tomorrow the teacher is testing me orally in history.',
    'Mañana el profesor me pregunta la lección de historia.',
    'Demain, le professeur m’interroge en histoire.',
    'Zítra mě pan učitel bude zkoušet z dějepisu.',
    'Jutro nauczyciel będzie mnie pytał z historii.',
    'Yarın öğretmen beni tarihten sözlüye kaldıracak.',
    'Morgen fragt mich der Lehrer in Geschichte ab.',
    '明日、先生に歴史の口頭試問をされます。'
  ),
  tr(
    'Devo imparare a memoria una poesia per lunedì.',
    'I have to learn a poem by heart for Monday.',
    'Tengo que aprenderme un poema de memoria para el lunes.',
    'Je dois apprendre un poème par cœur pour lundi.',
    'Do pondělí se musím naučit nazpaměť básničku.',
    'Na poniedziałek muszę nauczyć się wiersza na pamięć.',
    'Pazartesiye kadar bir şiir ezberlemem gerekiyor.',
    'Bis Montag muss ich ein Gedicht auswendig lernen.',
    '月曜日までに詩を一つ暗記しなければなりません。'
  ),
  tr(
    'Non copiare dal tuo compagno: fai da solo!',
    'Don’t copy from your classmate: do it yourself!',
    'No copies de tu compañero: ¡hazlo tú solo!',
    'Ne copie pas sur ton voisin : fais-le tout seul !',
    'Neopisuj od spolužáka: udělej to sám!',
    'Nie ściągaj od kolegi: zrób to sam!',
    'Arkadaşından kopya çekme: kendin yap!',
    'Schreib nicht von deinem Nachbarn ab: Mach es allein!',
    '隣の子のを写さないで。自分でやりなさい！'
  ),
  tr(
    'Mi distraggo sempre quando guardo fuori dalla finestra.',
    'I always get distracted when I look out of the window.',
    'Siempre me distraigo cuando miro por la ventana.',
    'Je suis toujours distrait quand je regarde par la fenêtre.',
    'Vždycky se rozptýlím, když se dívám z okna.',
    'Zawsze się rozpraszam, kiedy patrzę przez okno.',
    'Pencereden dışarı baktığımda hep dikkatim dağılıyor.',
    'Ich lasse mich immer ablenken, wenn ich aus dem Fenster schaue.',
    '窓の外を見ると、いつも気が散ってしまいます。'
  ),
  tr(
    'Mia sorella si è laureata e adesso cerca lavoro.',
    'My sister has graduated and now she’s looking for a job.',
    'Mi hermana se ha licenciado y ahora busca trabajo.',
    'Ma sœur a obtenu son diplôme et maintenant elle cherche du travail.',
    'Moje sestra dostudovala a teď hledá práci.',
    'Moja siostra skończyła studia i teraz szuka pracy.',
    'Kız kardeşim üniversiteden mezun oldu ve şimdi iş arıyor.',
    'Meine Schwester hat ihren Abschluss gemacht und sucht jetzt Arbeit.',
    '姉は大学を卒業して、今は仕事を探しています。'
  ),
  tr(
    'Ho studiato tanto e ho superato l’esame!',
    'I studied a lot and I passed the exam!',
    '¡He estudiado mucho y he aprobado el examen!',
    'J’ai beaucoup étudié et j’ai réussi l’examen !',
    'Hodně jsem se učil a zkoušku jsem udělal!',
    'Dużo się uczyłem i zdałem egzamin!',
    'Çok çalıştım ve sınavı geçtim!',
    'Ich habe viel gelernt und die Prüfung bestanden!',
    'たくさん勉強して、試験に合格しました！'
  ),
];
