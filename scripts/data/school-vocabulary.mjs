// Le parole della lezione di vocabolario «La scuola» (2026-09-27).
//
// Quattro gruppi: i luoghi (8: l'aula, la classe, il cortile, la palestra, la mensa, il laboratorio,
// l'asilo, l'universita'), nell'aula (7: la lavagna, la cattedra, il banco, il gesso...), l'astuccio e la
// cartella (17: la penna, la matita, la gomma, il quaderno, il diario...) e la vita a scuola (10: la lezione,
// i compiti, la verifica, l'interrogazione, il voto, la ricreazione...).
//
// Non ripete le parole che hanno gia' una lezione: la scuola e la biblioteca (La città), lo zaino (La
// montagna), il maestro e il professore (I mestieri), lo studente e il compagno di classe (Le persone intorno
// a noi). La nota le collega.
//
// Struttura di ogni voce: come city-vocabulary.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set scuola`, stile `SCHOOL_STYLE` (oggetti ritagliati, ambienti come foto
// rotonde).

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Le forme della scheda, con e senza articolo e apostrofo, piu' quelle in `extra` (plurali, sinonimi). */
const answersFor = (word, extra) => {
  const list = [];
  for (const form of [...word.split(' / '), ...extra]) {
    list.push(form, form.replace(ARTICLE, ''));
    if (form.includes('’')) list.push(form.replace('’', ' '), form.replace('’', ''));
  }
  return [...new Set(list)];
};

const school = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `scuola/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

const ROUND = 'a photograph cropped into a perfect circle, centred on the white background, showing';

export const schoolVocabulary = [
  // --- i luoghi -----------------------------------------------------------------------------
  school(
    'aula',
    'l’aula',
    ['La nostra aula è al primo piano.', 'Nell’aula ci sono venti banchi.', 'Il professore entra in aula alle otto.'],
    '|The classroom|El aula|La salle de classe|Třída (místnost)|Sala lekcyjna|Sınıf (derslik)|Das Klassenzimmer|教室',
    `${ROUND} an empty bright Italian classroom with rows of wooden desks and chairs, a green blackboard and big windows`,
    ['aule', 'classe', 'la classe']
  ),
  school(
    'classe',
    'la classe',
    [
      'Nella mia classe siamo in ventidue.',
      'Tutta la classe va in gita a Firenze.',
      'Marco e io siamo in classe insieme.',
    ],
    '|The class (the pupils)|La clase (los alumnos)|La classe (les élèves)|Třída (žáci)|Klasa (uczniowie)|Sınıf (öğrenciler)|Die Klasse (die Schüler)|クラス',
    'a group photo of about fifteen smiling schoolchildren of ten years old standing together in two rows with their teacher',
    ['classi', 'aula', 'l’aula']
  ),
  school(
    'cortile',
    'il cortile',
    [
      'Durante la ricreazione giochiamo in cortile.',
      'Il cortile della scuola ha due alberi.',
      'I bambini aspettano i genitori in cortile.',
    ],
    '|The schoolyard|El patio|La cour de récréation|Školní dvůr|Szkolne podwórko|Okul bahçesi|Der Schulhof|校庭',
    `${ROUND} a sunny school courtyard with a few trees, benches and small children playing`,
    ['cortili']
  ),
  school(
    'palestra',
    'la palestra',
    [
      'Il martedì abbiamo educazione fisica in palestra.',
      'La palestra della scuola è molto grande.',
      'Porta le scarpe da ginnastica per la palestra.',
    ],
    '|The gym|El gimnasio|Le gymnase|Tělocvična|Sala gimnastyczna|Spor salonu|Die Turnhalle|体育館',
    `${ROUND} an empty school gymnasium with a wooden floor, a basketball hoop, wall bars and blue mats`,
    ['palestre']
  ),
  school(
    'mensa',
    'la mensa',
    ['A mezzogiorno mangiamo in mensa.', 'Oggi in mensa c’è la pasta al pomodoro.', 'La mensa è al piano terra.'],
    '|The school canteen|El comedor escolar|La cantine|Školní jídelna|Stołówka|Yemekhane|Die Mensa, die Kantine|給食室、食堂',
    `${ROUND} children sitting at long tables in a bright school canteen, eating pasta with tomato sauce and vegetables from trays`,
    ['mense']
  ),
  school(
    'laboratorio',
    'il laboratorio',
    [
      'Oggi facciamo un esperimento in laboratorio.',
      'Nel laboratorio ci sono i microscopi.',
      'Il laboratorio di scienze è in fondo al corridoio.',
    ],
    '|The laboratory|El laboratorio|Le laboratoire|Laboratoř|Pracownia, laboratorium|Laboratuvar|Das Labor|実験室',
    `${ROUND} a school science laboratory with white benches, microscopes, test tubes and two teenage students in safety glasses`,
    ['laboratori', 'lab']
  ),
  school(
    'asilo',
    'l’asilo',
    [
      'Mia figlia ha tre anni e va all’asilo.',
      'All’asilo i bambini giocano e cantano.',
      'Porto il bambino all’asilo alle otto e mezza.',
    ],
    '|The nursery school, kindergarten|La guardería, el jardín de infancia|L’école maternelle|Mateřská školka|Przedszkole|Anaokulu|Der Kindergarten|幼稚園',
    'three small children of four years old playing with big colourful building blocks on a soft play mat, with a smiling young teacher kneeling next to them',
    ['asili', 'scuola materna', 'la scuola materna', 'scuola dell’infanzia', 'la scuola dell’infanzia']
  ),
  school(
    'universita',
    'l’università',
    [
      'Mio fratello studia medicina all’università.',
      'L’università di Bologna è la più antica d’Europa.',
      'Dopo il liceo voglio andare all’università.',
    ],
    '|The university|La universidad|L’université|Univerzita|Uniwersytet|Üniversite|Die Universität|大学',
    `${ROUND} a large lecture hall at a university with rows of seats rising up, many young students with laptops and a professor at the front`,
    ['universita', 'l’universita', 'ateneo']
  ),

  // --- nell'aula -----------------------------------------------------------------------------
  school(
    'lavagna',
    'la lavagna',
    ['La maestra scrive la data alla lavagna.', 'Vieni alla lavagna, per favore.', 'Chi cancella la lavagna oggi?'],
    '|The blackboard|La pizarra|Le tableau|Tabule|Tablica|Kara tahta|Die Tafel|黒板',
    'a green school chalkboard in a wooden frame hanging on its own, with a simple sum 2 + 3 = 5 written in white chalk',
    ['lavagne']
  ),
  school(
    'cattedra',
    'la cattedra',
    ['Il professore è seduto alla cattedra.', 'Metti i quaderni sulla cattedra.', 'Sulla cattedra c’è il registro.'],
    '|The teacher’s desk|La mesa del profesor|Le bureau du professeur|Katedra, učitelský stůl|Biurko nauczyciela|Öğretmen masası|Das Lehrerpult|教卓',
    'a teacher’s wooden desk in a classroom with a chair behind it, a pile of exercise books, a pen pot and an apple on top',
    ['cattedre']
  ),
  school(
    'banco',
    'il banco',
    ['Siedo al banco con la mia amica Giulia.', 'Il mio banco è vicino alla finestra.', 'Non scrivete sui banchi!'],
    '|The school desk|El pupitre|Le pupitre|Školní lavice|Ławka szkolna|Sıra (okul sırası)|Die Schulbank|机（生徒の）',
    'a single wooden school desk with metal legs and a matching chair, with an open exercise book on it',
    ['banchi']
  ),
  school(
    'gesso',
    'il gesso',
    [
      'Il gesso è finito: ne prendo un altro.',
      'La maestra scrive con il gesso bianco.',
      'Ho le mani sporche di gesso.',
    ],
    '|The chalk|La tiza|La craie|Křída|Kreda|Tebeşir|Die Kreide|チョーク',
    'three sticks of chalk, white, yellow and pink, lying side by side',
    ['gessi', 'gessetto', 'il gessetto']
  ),
  school(
    'cancellino',
    'il cancellino',
    [
      'Passami il cancellino, per favore.',
      'Il cancellino è pieno di polvere di gesso.',
      'Cancello la lavagna con il cancellino.',
    ],
    '|The board eraser|El borrador|La brosse à tableau|Houba na tabuli|Gąbka do tablicy|Tahta silgisi|Der Tafelschwamm, der Tafellöscher|黒板消し',
    'a blackboard eraser with a wooden handle and a grey felt pad, lightly covered with white chalk dust',
    ['cancellini']
  ),
  school(
    'mappamondo',
    'il mappamondo',
    ['Cerchiamo l’Italia sul mappamondo.', 'Il mappamondo gira.', 'In classe abbiamo un mappamondo grande.'],
    '|The globe|El globo terráqueo|Le globe terrestre|Glóbus|Globus|Küre (dünya küresi)|Der Globus|地球儀',
    'a classic school world globe on a wooden stand with a metal arc, showing Europe and Africa',
    ['mappamondi', 'globo', 'il globo']
  ),
  school(
    'campanella',
    'la campanella',
    [
      'Suona la campanella: la lezione è finita.',
      'Alla campanella tutti escono in cortile.',
      'La campanella suona alle otto e dieci.',
    ],
    '|The school bell|El timbre (de la escuela)|La sonnerie, la cloche|Zvonek|Dzwonek|Okul zili|Die Schulglocke, die Klingel|チャイム、ベル',
    'an old-fashioned round metal school bell fixed on a small wooden board',
    ['campana', 'la campana']
  ),

  // --- l'astuccio e la cartella -------------------------------------------------------------
  school(
    'cartella',
    'la cartella',
    [
      'Prepara la cartella per domani.',
      'La mia cartella è pesante: ci sono tanti libri.',
      'Ho dimenticato la cartella a scuola!',
    ],
    '|The school bag|La mochila escolar, la cartera|Le cartable|Aktovka, školní taška|Tornister|Okul çantası|Der Schulranzen|ランドセル、通学かばん',
    'a colourful children’s school backpack in blue and orange standing upright, closed',
    ['cartelle', 'zaino', 'lo zaino']
  ),
  school(
    'astuccio',
    'l’astuccio',
    ['Nell’astuccio ho penne, matite e una gomma.', 'Il mio astuccio è rosso.', 'Chiudi l’astuccio, cadono le matite!'],
    '|The pencil case|El estuche|La trousse|Penál|Piórnik|Kalem kutusu|Das Mäppchen, das Federmäppchen|筆箱',
    'an open zipped fabric pencil case with pens, coloured pencils and a ruler inside',
    ['astucci']
  ),
  school(
    'penna',
    'la penna',
    ['Scrivo il compito con la penna blu.', 'Mi presti una penna?', 'La mia penna non scrive più.'],
    '|The pen|El bolígrafo|Le stylo|Pero|Długopis|Tükenmez kalem|Der Kuli, der Stift|ペン',
    'a blue ballpoint pen with its cap off, lying diagonally',
    ['penne', 'biro', 'la biro']
  ),
  school(
    'matita',
    'la matita',
    ['Disegno una casa con la matita.', 'La punta della matita si è rotta.', 'Scrivete a matita, non a penna.'],
    '|The pencil|El lápiz|Le crayon (à papier)|Tužka|Ołówek|Kurşun kalem|Der Bleistift|鉛筆',
    'a sharpened yellow graphite pencil with a pink eraser on the end, lying diagonally',
    ['matite']
  ),
  school(
    'gomma',
    'la gomma',
    ['Ho sbagliato: mi dai la gomma?', 'Cancello la parola con la gomma.', 'La gomma è nell’astuccio.'],
    '|The eraser, rubber|La goma de borrar|La gomme|Guma|Gumka|Silgi|Der Radiergummi|消しゴム',
    'a white and blue rectangular pencil eraser, slightly used on one corner',
    ['gomme', 'gomma da cancellare', 'la gomma da cancellare']
  ),
  school(
    'temperino',
    'il temperino',
    ['Temperi la matita con il temperino.', 'Il temperino è pieno di trucioli.', 'Hai un temperino?'],
    '|The pencil sharpener|El sacapuntas|Le taille-crayon|Ořezávátko|Temperówka|Kalemtıraş|Der Anspitzer, der Spitzer|鉛筆削り',
    'a small metal pencil sharpener next to a few curly pencil shavings',
    ['temperini', 'temperamatite', 'il temperamatite']
  ),
  school(
    'righello',
    'il righello',
    [
      'Traccia una linea con il righello.',
      'Il righello è lungo trenta centimetri.',
      'Misuro il foglio con il righello.',
    ],
    '|The ruler|La regla|La règle|Pravítko|Linijka|Cetvel|Das Lineal|定規',
    'a light wooden 30 cm school ruler with clear black measuring marks and numbers, lying diagonally',
    ['righelli', 'riga', 'la riga']
  ),
  school(
    'forbici',
    'le forbici',
    ['Taglio la carta con le forbici.', 'Queste forbici non tagliano bene.', 'Attenzione, le forbici sono appuntite!'],
    '|The scissors|Las tijeras|Les ciseaux|Nůžky|Nożyczki|Makas|Die Schere|はさみ',
    'a pair of children’s school scissors with round tips and green plastic handles, slightly open',
    ['forbice', 'forbicine']
  ),
  school(
    'colla',
    'la colla',
    ['Attacco la foto sul quaderno con la colla.', 'La colla stick è finita.', 'Ho le dita piene di colla.'],
    '|The glue|El pegamento|La colle|Lepidlo|Klej|Yapıştırıcı|Der Kleber|のり',
    'a glue stick with its cap off, standing next to a small white bottle of liquid school glue',
    ['colle', 'colla stick']
  ),
  school(
    'pennarello',
    'il pennarello',
    ['Coloro il disegno con i pennarelli.', 'Il pennarello rosso è secco.', 'Chiudi il tappo del pennarello!'],
    '|The felt-tip pen, marker|El rotulador|Le feutre|Fix, popisovač|Flamaster|Keçeli kalem|Der Filzstift|サインペン、マーカー',
    'five colourful felt-tip pens with their caps, lying side by side in a neat fan',
    ['pennarelli']
  ),
  school(
    'evidenziatore',
    'l’evidenziatore',
    [
      'Sottolineo le parole nuove con l’evidenziatore.',
      'Il mio evidenziatore è giallo.',
      'Uso l’evidenziatore per studiare.',
    ],
    '|The highlighter|El marcador fluorescente, el subrayador|Le surligneur|Zvýrazňovač|Zakreślacz|Fosforlu kalem|Der Textmarker|蛍光ペン',
    'two fluorescent highlighter pens, one yellow and one green, one with the cap off next to a sheet of text lines highlighted in yellow, the lines drawn as grey bars without readable letters',
    ['evidenziatori']
  ),
  school(
    'pastelli',
    'i pastelli',
    [
      'I bambini colorano con i pastelli.',
      'Nella scatola ci sono ventiquattro pastelli.',
      'Mi presti il pastello verde?',
    ],
    '|The coloured pencils|Los lápices de colores|Les crayons de couleur|Pastelky|Kredki|Boya kalemleri|Die Buntstifte|色鉛筆',
    'an open box of coloured pencils in rainbow order, with a few pencils lying in front of it',
    ['pastello', 'il pastello', 'matite colorate', 'le matite colorate', 'colori', 'i colori']
  ),
  school(
    'quaderno',
    'il quaderno',
    ['Prendo appunti sul quaderno.', 'Ho un quaderno a righe e uno a quadretti.', 'Scrivete il titolo sul quaderno.'],
    '|The exercise book, notebook|El cuaderno|Le cahier|Sešit|Zeszyt|Defter|Das Heft|ノート',
    'an open school exercise book with squared paper and a few lines of neat handwriting drawn as simple grey scribbles, a pencil on top',
    ['quaderni']
  ),
  school(
    'libro',
    'il libro',
    ['Aprite il libro a pagina venti.', 'Il libro di storia è molto pesante.', 'Ho dimenticato il libro a casa.'],
    '|The book, textbook|El libro|Le livre, le manuel|Kniha, učebnice|Książka, podręcznik|Kitap|Das Buch, das Schulbuch|本、教科書',
    'a stack of three colourful school textbooks with blank covers, and one open book in front showing pages with pictures',
    ['libri', 'libro di testo', 'il libro di testo']
  ),
  school(
    'diario',
    'il diario',
    ['Scrivo i compiti sul diario.', 'Il diario è pieno di adesivi.', 'La maestra ha scritto un avviso sul diario.'],
    '|The school diary, homework planner|La agenda escolar|L’agenda, le cahier de textes|Školní diář|Dzienniczek, terminarz szkolny|Okul ajandası|Das Hausaufgabenheft|連絡帳、スケジュール帳',
    'an open colourful school planner with days of the week and a few stickers, handwriting drawn as grey scribbles',
    ['diari', 'agenda', 'l’agenda']
  ),
  school(
    'dizionario',
    'il dizionario',
    [
      'Cerco la parola nel dizionario.',
      'Posso usare il dizionario durante la verifica?',
      'Il dizionario di italiano è sul mio banco.',
    ],
    '|The dictionary|El diccionario|Le dictionnaire|Slovník|Słownik|Sözlük|Das Wörterbuch|辞書',
    'a thick dictionary with a red cover and alphabet thumb tabs on the side, slightly open',
    ['dizionari', 'vocabolario', 'il vocabolario']
  ),
  school(
    'calcolatrice',
    'la calcolatrice',
    [
      'Faccio il calcolo con la calcolatrice.',
      'Durante la verifica di matematica non si usa la calcolatrice.',
      'La mia calcolatrice funziona con il sole.',
    ],
    '|The calculator|La calculadora|La calculatrice|Kalkulačka|Kalkulator|Hesap makinesi|Der Taschenrechner|電卓',
    'a grey pocket calculator with big buttons and the number 42 on the display',
    ['calcolatrici']
  ),
  school(
    'compasso',
    'il compasso',
    [
      'Disegno un cerchio con il compasso.',
      'Il compasso ha una punta: attento!',
      'Per geometria servono il righello e il compasso.',
    ],
    '|The compass (for drawing circles)|El compás|Le compas|Kružítko|Cyrkiel|Pergel|Der Zirkel|コンパス',
    'a metal drawing compass with a pencil lead, slightly open, next to a neat circle drawn in pencil on a white sheet',
    ['compassi']
  ),

  // --- la vita a scuola ---------------------------------------------------------------------
  school(
    'lezione',
    'la lezione',
    [
      'La lezione di storia comincia alle nove.',
      'Oggi abbiamo cinque ore di lezione.',
      'Durante la lezione non si usa il telefono.',
    ],
    '|The lesson|La clase, la lección|Le cours, la leçon|Hodina, vyučování|Lekcja|Ders|Der Unterricht, die Stunde|授業',
    `${ROUND} a friendly teacher explaining at the blackboard to a class of ten-year-old pupils sitting at their desks, seen from the back of the classroom`,
    ['lezioni']
  ),
  school(
    'compiti',
    'i compiti',
    ['Dopo pranzo faccio i compiti.', 'Oggi non abbiamo compiti!', 'Mia madre mi aiuta con i compiti di matematica.'],
    '|The homework|Los deberes|Les devoirs|Domácí úkoly|Praca domowa, zadanie domowe|Ödev|Die Hausaufgaben|宿題',
    'a boy of ten years old sitting at a small desk at home, writing in an exercise book with books open around him, a lamp on the desk',
    ['compito', 'il compito', 'compiti per casa', 'i compiti per casa']
  ),
  school(
    'verifica',
    'la verifica',
    [
      'Domani abbiamo la verifica di inglese.',
      'Com’è andata la verifica?',
      'Durante la verifica c’è silenzio in classe.',
    ],
    '|The test (written)|El examen, la prueba escrita|Le contrôle, l’interrogation écrite|Písemka, test|Sprawdzian, klasówka|Yazılı sınav|Die Klassenarbeit, der Test|テスト（筆記）',
    `${ROUND} teenage students writing in silence at separate desks in a classroom during a written test, a teacher walking between the rows`,
    ['verifiche', 'compito in classe', 'il compito in classe', 'test', 'il test', 'esame', 'l’esame']
  ),
  school(
    'interrogazione',
    'l’interrogazione',
    [
      'Oggi il professore mi fa l’interrogazione.',
      'Ho studiato tutto il pomeriggio per l’interrogazione.',
      'L’interrogazione di storia è andata bene.',
    ],
    '|The oral test|El examen oral|L’interrogation orale|Zkoušení (ústní)|Odpowiedź ustna, pytanie przy tablicy|Sözlü sınav|Die mündliche Prüfung, das Abfragen|口頭試問',
    'a teenage girl standing next to the teacher’s desk answering questions, a teacher sitting at the desk listening and taking notes, a blackboard behind them',
    ['interrogazioni', 'orale', 'l’orale']
  ),
  school(
    'voto',
    'il voto',
    [
      'Ho preso un bel voto in italiano!',
      'In Italia i voti vanno da uno a dieci.',
      'Che voto hai preso nella verifica?',
    ],
    '|The mark, grade|La nota|La note|Známka|Ocena|Not (okul notu)|Die Note|成績、点数',
    'a school test paper on a desk with the number 8 written large and circled in red pen at the top, the rest of the paper drawn as grey lines without readable text',
    ['voti']
  ),
  school(
    'ricreazione',
    'la ricreazione',
    [
      'Durante la ricreazione mangio la merenda.',
      'La ricreazione dura quindici minuti.',
      'Alla ricreazione giochiamo a pallone in cortile.',
    ],
    '|The break, recess|El recreo|La récréation|Přestávka|Przerwa|Teneffüs|Die Pause|休み時間',
    `${ROUND} cheerful schoolchildren playing and running in a school courtyard during break, two of them skipping rope`,
    ['ricreazioni', 'intervallo', 'l’intervallo', 'pausa', 'la pausa']
  ),
  school(
    'merenda',
    'la merenda',
    ['Per merenda ho una mela e un panino.', 'La mamma mi prepara la merenda.', 'Mangiamo la merenda alle dieci.'],
    '|The snack|La merienda|Le goûter|Svačina|Drugie śniadanie, przekąska|Ara öğün, atıştırmalık|Das Pausenbrot, der Snack|おやつ、軽食',
    'a child’s school snack on a napkin: a red apple, a jam sandwich and a small bottle of water',
    ['merende', 'spuntino', 'lo spuntino']
  ),
  school(
    'gita',
    'la gita scolastica',
    [
      'La settimana prossima andiamo in gita scolastica a Roma.',
      'La gita scolastica è il giorno più bello dell’anno.',
      'In gita abbiamo visitato un museo.',
    ],
    '|The school trip|La excursión escolar|La sortie scolaire, le voyage scolaire|Školní výlet|Wycieczka szkolna|Okul gezisi|Der Schulausflug, die Klassenfahrt|遠足、修学旅行',
    `${ROUND} a class of schoolchildren with small backpacks walking in a line behind their teacher in front of an old Italian monument on a sunny day`,
    ['gita', 'la gita', 'gite', 'gite scolastiche']
  ),
  school(
    'scuolabus',
    'lo scuolabus',
    ['Vado a scuola con lo scuolabus.', 'Lo scuolabus passa alle sette e mezza.', 'I bambini salgono sullo scuolabus.'],
    '|The school bus|El autobús escolar|Le bus scolaire|Školní autobus|Autobus szkolny|Okul servisi|Der Schulbus|スクールバス',
    'a small yellow Italian school bus seen from the side, clean and bright, with a few children’s faces at the windows, no writing on it',
    ['pulmino', 'il pulmino', 'autobus', 'l’autobus']
  ),
  school(
    'diploma',
    'il diploma',
    ['Ho preso il diploma a diciannove anni.', 'Dopo il diploma voglio viaggiare.', 'Il diploma è appeso in salotto.'],
    '|The diploma, school-leaving certificate|El título, el diploma|Le diplôme|Maturitní vysvědčení, diplom|Świadectwo, dyplom|Diploma|Das Abschlusszeugnis, das Diplom|卒業証書',
    'a young woman in a graduation gown and cap smiling and holding a rolled diploma tied with a red ribbon',
    ['diplomi', 'maturità', 'la maturità', 'laurea', 'la laurea']
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const schoolExampleWord = { bare: 'penna', withArticle: 'la penna' };

export const schoolTranslationExercises = [
  tr(
    'Apri il libro a pagina trenta e leggi il testo.',
    'Open the book at page thirty and read the text.',
    'Abre el libro en la página treinta y lee el texto.',
    'Ouvre le livre à la page trente et lis le texte.',
    'Otevři knihu na straně třicet a přečti text.',
    'Otwórz książkę na stronie trzydziestej i przeczytaj tekst.',
    'Kitabı otuzuncu sayfada aç ve metni oku.',
    'Schlag das Buch auf Seite dreißig auf und lies den Text.',
    '本の30ページを開いて、文章を読んでください。'
  ),
  tr(
    'Mi presti una penna? La mia non scrive più.',
    'Can you lend me a pen? Mine doesn’t write any more.',
    '¿Me prestas un bolígrafo? El mío ya no escribe.',
    'Tu me prêtes un stylo ? Le mien n’écrit plus.',
    'Půjčíš mi pero? Moje už nepíše.',
    'Pożyczysz mi długopis? Mój już nie pisze.',
    'Bana bir kalem ödünç verir misin? Benimki artık yazmıyor.',
    'Leihst du mir einen Kuli? Meiner schreibt nicht mehr.',
    'ペンを貸してくれる？私のはもう書けないの。'
  ),
  tr(
    'Durante la ricreazione mangiamo la merenda in cortile.',
    'During break we eat our snack in the schoolyard.',
    'Durante el recreo comemos la merienda en el patio.',
    'Pendant la récréation, nous mangeons notre goûter dans la cour.',
    'O přestávce jíme svačinu na dvoře.',
    'Na przerwie jemy drugie śniadanie na podwórku.',
    'Teneffüste atıştırmalığımızı bahçede yiyoruz.',
    'In der Pause essen wir unser Pausenbrot auf dem Schulhof.',
    '休み時間に校庭でおやつを食べます。'
  ),
  tr(
    'Domani abbiamo la verifica di matematica.',
    'Tomorrow we have the maths test.',
    'Mañana tenemos el examen de matemáticas.',
    'Demain, nous avons le contrôle de maths.',
    'Zítra píšeme písemku z matematiky.',
    'Jutro mamy sprawdzian z matematyki.',
    'Yarın matematik yazılımız var.',
    'Morgen schreiben wir die Mathearbeit.',
    '明日は数学のテストがあります。'
  ),
  tr(
    'Ho preso otto nell’interrogazione di storia.',
    'I got an eight in the history oral test.',
    'Saqué un ocho en el examen oral de historia.',
    'J’ai eu huit à l’interrogation orale d’histoire.',
    'Ze zkoušení z dějepisu jsem dostal osmičku.',
    'Dostałem ósemkę z odpowiedzi ustnej z historii.',
    'Tarih sözlüsünden sekiz aldım.',
    'In der mündlichen Prüfung in Geschichte habe ich eine Acht bekommen.',
    '歴史の口頭試問で8点を取りました。'
  ),
  tr(
    'Dopo pranzo faccio i compiti e poi esco con gli amici.',
    'After lunch I do my homework and then I go out with my friends.',
    'Después de comer hago los deberes y luego salgo con mis amigos.',
    'Après le déjeuner, je fais mes devoirs, puis je sors avec mes amis.',
    'Po obědě si udělám úkoly a pak jdu ven s kamarády.',
    'Po obiedzie odrabiam lekcje, a potem wychodzę z przyjaciółmi.',
    'Öğle yemeğinden sonra ödevimi yapıyorum, sonra arkadaşlarımla dışarı çıkıyorum.',
    'Nach dem Mittagessen mache ich die Hausaufgaben und dann gehe ich mit Freunden raus.',
    '昼ごはんの後に宿題をして、それから友だちと出かけます。'
  ),
  tr(
    'La maestra scrive le parole nuove alla lavagna.',
    'The teacher writes the new words on the board.',
    'La maestra escribe las palabras nuevas en la pizarra.',
    'La maîtresse écrit les nouveaux mots au tableau.',
    'Paní učitelka píše nová slova na tabuli.',
    'Pani nauczycielka pisze nowe słowa na tablicy.',
    'Öğretmen yeni kelimeleri tahtaya yazıyor.',
    'Die Lehrerin schreibt die neuen Wörter an die Tafel.',
    '先生は新しい単語を黒板に書きます。'
  ),
  tr(
    'Nel mio astuccio ci sono due matite, una gomma e un temperino.',
    'In my pencil case there are two pencils, an eraser and a sharpener.',
    'En mi estuche hay dos lápices, una goma y un sacapuntas.',
    'Dans ma trousse, il y a deux crayons, une gomme et un taille-crayon.',
    'V penálu mám dvě tužky, gumu a ořezávátko.',
    'W moim piórniku są dwa ołówki, gumka i temperówka.',
    'Kalem kutumda iki kurşun kalem, bir silgi ve bir kalemtıraş var.',
    'In meinem Mäppchen sind zwei Bleistifte, ein Radiergummi und ein Anspitzer.',
    '私の筆箱には鉛筆が2本、消しゴムと鉛筆削りが入っています。'
  ),
  tr(
    'Suona la campanella: tutti fuori!',
    'The bell is ringing: everybody out!',
    'Suena el timbre: ¡todos fuera!',
    'La sonnerie retentit : tout le monde dehors !',
    'Zvoní zvonek: všichni ven!',
    'Dzwoni dzwonek: wszyscy na zewnątrz!',
    'Zil çalıyor: herkes dışarı!',
    'Es klingelt: Alle raus!',
    'チャイムが鳴った。みんな外へ！'
  ),
  tr(
    'Mia sorella va all’asilo, io vado all’università.',
    'My sister goes to nursery school, I go to university.',
    'Mi hermana va a la guardería y yo voy a la universidad.',
    'Ma sœur va à l’école maternelle, moi je vais à l’université.',
    'Moje sestra chodí do školky, já chodím na univerzitu.',
    'Moja siostra chodzi do przedszkola, a ja na uniwersytet.',
    'Kız kardeşim anaokuluna gidiyor, ben üniversiteye gidiyorum.',
    'Meine Schwester geht in den Kindergarten, ich gehe zur Uni.',
    '妹は幼稚園に、私は大学に通っています。'
  ),
];
