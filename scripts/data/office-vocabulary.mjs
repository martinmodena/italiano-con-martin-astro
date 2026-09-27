// Le parole della lezione di vocabolario «L'ufficio», rifatta il 2026-09-27.
//
// La prima versione (una delle prime lezioni del sito) aveva 8 parole illustrate: la scrivania, il computer,
// la tastiera, il mouse, la stampante, il documento, il quaderno e il cestino. Gli URL restano quelli (sono
// indicizzati); le parole sono ora 40 con foto realistiche, e il quaderno e' passato a «La scuola».
//
// Quattro gruppi: la scrivania (14: il computer, il portatile, lo schermo, le cuffie, l'agenda, il post-it...),
// carta e cancelleria (11: il documento, la cartellina, la busta, la spillatrice, il timbro, la stampante...),
// i luoghi (4: la reception, la sala riunioni, la macchinetta del caffe', il distributore automatico) e il
// lavoro (11: la riunione, la videochiamata, il colloquio di lavoro, il contratto, lo stipendio...).
//
// Non ripete le persone (il collega, il capo, l'impiegato: «Le persone intorno a noi» e «I mestieri»):
// la nota le collega.
//
// Struttura di ogni voce: come city-vocabulary.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set ufficio`, stile `OFFICE_STYLE`.

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

const office = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `ufficio/${slug}`,
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

export const officeVocabulary = [
  // --- la scrivania --------------------------------------------------------------------------
  office(
    'scrivania',
    'la scrivania',
    [
      'Lavoro alla scrivania tutto il giorno.',
      'La scrivania ha due cassetti.',
      'Sulla mia scrivania c’è sempre disordine.',
    ],
    '|The desk|El escritorio|Le bureau (meuble)|Psací stůl|Biurko|Çalışma masası|Der Schreibtisch|机、デスク',
    'a simple modern office desk in light wood with two drawers, empty except for a small plant',
    ['scrivanie']
  ),
  office(
    'sedia',
    'la sedia da ufficio',
    ['La sedia da ufficio ha le ruote.', 'Alzo un po’ la sedia da ufficio.', 'Questa sedia da ufficio è molto comoda.'],
    '|The office chair|La silla de oficina|La chaise de bureau|Kancelářská židle|Krzesło biurowe|Ofis sandalyesi|Der Bürostuhl|オフィスチェア',
    'a black ergonomic swivel office chair on five wheels with armrests',
    ['sedia', 'la sedia', 'sedie', 'sedia girevole', 'la sedia girevole', 'poltrona', 'la poltrona']
  ),
  office(
    'computer',
    'il computer',
    ['Accendo il computer alle nove.', 'Il computer è lento oggi.', 'Scrivo un’email al computer.'],
    '|The computer|El ordenador, la computadora|L’ordinateur|Počítač|Komputer|Bilgisayar|Der Computer|コンピューター、パソコン',
    'a desktop computer with a monitor showing a plain blue screen, a keyboard and a mouse in front of it',
    ['pc', 'il pc', 'portatile', 'il portatile']
  ),
  office(
    'portatile',
    'il portatile',
    [
      'Porto il portatile alla riunione.',
      'Il mio portatile ha la batteria scarica.',
      'Lavoro da casa con il portatile.',
    ],
    '|The laptop|El portátil|L’ordinateur portable|Notebook, laptop|Laptop|Dizüstü bilgisayar|Der Laptop|ノートパソコン',
    'an open silver laptop seen from the front at a slight angle, the screen showing a simple spreadsheet made of coloured blocks without readable text',
    ['portatili', 'computer portatile', 'il computer portatile', 'laptop', 'il laptop', 'computer', 'il computer']
  ),
  office(
    'schermo',
    'lo schermo',
    ['Lo schermo è troppo luminoso.', 'Ho due schermi sulla scrivania.', 'Guarda lo schermo: c’è un messaggio.'],
    '|The screen, monitor|La pantalla, el monitor|L’écran|Obrazovka, monitor|Ekran, monitor|Ekran, monitör|Der Bildschirm|画面、モニター',
    'a flat black computer monitor on a stand, the screen showing a calm blue landscape wallpaper',
    ['schermi', 'monitor', 'il monitor']
  ),
  office(
    'tastiera',
    'la tastiera',
    ['Scrivo con la tastiera.', 'La tastiera è davanti al computer.', 'Sulla tastiera italiana c’è la lettera «è».'],
    '|The keyboard|El teclado|Le clavier|Klávesnice|Klawiatura|Klavye|Die Tastatur|キーボード',
    'a slim white computer keyboard seen from above at a slight angle',
    ['tastiere']
  ),
  office(
    'mouse',
    'il mouse',
    ['Clicco con il mouse.', 'Il mouse è accanto alla tastiera.', 'Il mouse non funziona: cambio le pile.'],
    '|The mouse (computer)|El ratón|La souris|Myš (počítačová)|Myszka|Fare (bilgisayar)|Die Maus|マウス',
    'a black wireless computer mouse on a grey mouse pad',
    ['topo', 'il topo']
  ),
  office(
    'cuffie',
    'le cuffie',
    [
      'Metto le cuffie per la videochiamata.',
      'Con le cuffie non sento i colleghi.',
      'Le cuffie hanno anche il microfono.',
    ],
    '|The headphones, headset|Los auriculares, los cascos|Le casque (audio)|Sluchátka|Słuchawki|Kulaklık|Die Kopfhörer, das Headset|ヘッドホン、ヘッドセット',
    'a black over-ear headset with a small microphone arm, standing on its own',
    ['cuffia', 'la cuffia', 'auricolari', 'gli auricolari']
  ),
  office(
    'telefono',
    'il telefono',
    [
      'Squilla il telefono: rispondi tu?',
      'Il telefono dell’ufficio è sulla scrivania.',
      'Sono al telefono con un cliente.',
    ],
    '|The telephone|El teléfono|Le téléphone|Telefon|Telefon|Telefon|Das Telefon|電話',
    'a modern grey office desk phone with a handset and a small display',
    ['telefoni', 'cellulare', 'il cellulare']
  ),
  office(
    'chiavetta',
    'la chiavetta USB',
    ['Salvo il file sulla chiavetta USB.', 'Mi presti la chiavetta USB?', 'La chiavetta USB è nel computer.'],
    '|The USB stick|El pendrive, la memoria USB|La clé USB|Flash disk|Pendrive|USB bellek|Der USB-Stick|USBメモリ',
    'a small blue USB flash drive with its cap off, lying on its own',
    ['chiavetta', 'la chiavetta', 'chiavette', 'pennetta', 'la pennetta', 'chiavetta usb']
  ),
  office(
    'agenda',
    'l’agenda',
    [
      'Scrivo l’appuntamento in agenda.',
      'Controllo l’agenda: giovedì sono libero.',
      'La mia agenda è piena di impegni.',
    ],
    '|The diary, planner|La agenda|L’agenda|Diář|Kalendarz, terminarz|Ajanda|Der Terminkalender, der Kalender|手帳',
    'an open leather-bound weekly planner with a pen, a few appointments written as grey scribbles without readable text',
    ['agende', 'diario', 'il diario']
  ),
  office(
    'calendario',
    'il calendario',
    ['Il calendario è appeso al muro.', 'Segno la riunione sul calendario.', 'Guardo il calendario: domani è festa.'],
    '|The calendar|El calendario|Le calendrier|Kalendář|Kalendarz (ścienny)|Takvim|Der Kalender (an der Wand)|カレンダー',
    'a wall calendar showing a month grid of numbered days, with one day circled in red, hanging on a nail, no month name',
    ['calendari']
  ),
  office(
    'post-it',
    'il post-it',
    [
      'Lascio un post-it sul computer del collega.',
      'Lo schermo è pieno di post-it.',
      'Scrivo il numero su un post-it.',
    ],
    '|The sticky note|La nota adhesiva, el pósit|Le post-it, le pense-bête|Lepicí papírek|Karteczka samoprzylepna|Yapışkan not kağıdı|Der Klebezettel, das Post-it|付箋',
    'a small stack of square yellow sticky notes with one pink and one green note stuck next to it, blank',
    ['postit', 'post it', 'foglietto adesivo', 'il foglietto adesivo', 'foglietto', 'il foglietto']
  ),
  office(
    'cestino',
    'il cestino',
    ['Butto la carta nel cestino.', 'Il cestino è sotto la scrivania.', 'Svuoto il cestino ogni sera.'],
    '|The wastepaper basket|La papelera|La corbeille à papier|Koš na papír|Kosz na śmieci|Çöp kutusu|Der Papierkorb|くずかご、ごみ箱',
    'a black mesh office wastepaper basket with a few crumpled balls of paper inside',
    ['cestini', 'cestino della carta', 'il cestino della carta']
  ),

  // --- carta e cancelleria ---------------------------------------------------------------
  office(
    'documento',
    'il documento',
    ['Leggo il documento prima della riunione.', 'Il documento è sulla scrivania.', 'Ti mando il documento per email.'],
    '|The document|El documento|Le document|Dokument|Dokument|Belge|Das Dokument|書類',
    'a few printed A4 pages held together with a paper clip, the text drawn as neat grey lines without readable letters',
    ['documenti', 'foglio', 'il foglio']
  ),
  office(
    'foglio',
    'il foglio',
    ['Mi dai un foglio bianco?', 'Nella stampante non ci sono più fogli.', 'Scrivo il mio nome in cima al foglio.'],
    '|The sheet of paper|La hoja (de papel)|La feuille (de papier)|List papíru|Kartka|Kağıt (yaprak)|Das Blatt (Papier)|紙、用紙',
    'a neat ream of white A4 printer paper with the top sheet slightly lifted',
    ['fogli', 'foglio di carta', 'carta', 'la carta']
  ),
  office(
    'cartellina',
    'la cartellina',
    [
      'Metti i fogli nella cartellina blu.',
      'La cartellina del cliente è nel cassetto.',
      'Ho una cartellina per ogni progetto.',
    ],
    '|The folder|La carpeta|La chemise, le dossier|Složka, desky|Teczka|Dosya (klasör)|Die Mappe|フォルダー、書類ばさみ',
    'three thin cardboard document folders in blue, red and yellow, slightly fanned, one with a few sheets sticking out',
    ['cartelline', 'cartella', 'la cartella']
  ),
  office(
    'raccoglitore',
    'il raccoglitore',
    [
      'Le fatture sono nel raccoglitore.',
      'Sullo scaffale ci sono dieci raccoglitori.',
      'Apro il raccoglitore e cerco il contratto.',
    ],
    '|The ring binder, file|El archivador|Le classeur|Pořadač, šanon|Segregator|Klasör|Der Ordner, der Aktenordner|バインダー、ファイル',
    'three thick lever-arch ring binders standing side by side in grey, blue and black, with blank white labels on the spines',
    ['raccoglitori', 'classificatore', 'il classificatore']
  ),
  office(
    'busta',
    'la busta',
    ['Metto la lettera nella busta.', 'Scrivi l’indirizzo sulla busta.', 'È arrivata una busta per te.'],
    '|The envelope|El sobre|L’enveloppe|Obálka|Koperta|Zarf|Der Briefumschlag|封筒',
    'a closed white paper envelope with a small stamp in the corner, no writing, and a brown envelope behind it',
    ['buste']
  ),
  office(
    'spillatrice',
    'la spillatrice',
    ['Unisco i fogli con la spillatrice.', 'La spillatrice è vuota: dove sono i punti?', 'Mi passi la spillatrice?'],
    '|The stapler|La grapadora|L’agrafeuse|Sešívačka|Zszywacz|Zımba|Der Tacker, der Hefter|ホッチキス',
    'a black and silver office stapler, closed, lying on its own',
    ['spillatrici', 'pinzatrice', 'la pinzatrice', 'cucitrice', 'la cucitrice']
  ),
  office(
    'graffetta',
    'la graffetta',
    [
      'Tengo insieme i fogli con una graffetta.',
      'Nel cassetto c’è una scatola di graffette.',
      'Ho perso la graffetta e i fogli sono caduti.',
    ],
    '|The paper clip|El clip|Le trombone|Kancelářská sponka|Spinacz|Ataş|Die Büroklammer|クリップ',
    'a small pile of silver and colourful metal paper clips',
    ['graffette', 'fermaglio', 'il fermaglio', 'clip', 'la clip']
  ),
  office(
    'timbro',
    'il timbro',
    ['Metto il timbro sul documento.', 'Senza timbro il modulo non vale.', 'Il timbro dell’ufficio è nel cassetto.'],
    '|The rubber stamp|El sello|Le tampon|Razítko|Pieczątka|Kaşe, mühür|Der Stempel|スタンプ、はんこ',
    'a wooden rubber stamp with a round handle next to a small red ink pad, and a sheet with a round red stamp mark without readable letters',
    ['timbri']
  ),
  office(
    'biglietto',
    'il biglietto da visita',
    [
      'Ecco il mio biglietto da visita.',
      'Sul biglietto da visita c’è il mio numero.',
      'Ho finito i biglietti da visita.',
    ],
    '|The business card|La tarjeta de visita|La carte de visite|Vizitka|Wizytówka|Kartvizit|Die Visitenkarte|名刺',
    'a small stack of plain white business cards with a simple blue logo shape and grey lines instead of text, one card fanned out',
    ['biglietti da visita', 'biglietto', 'il biglietto', 'bigliettino', 'il bigliettino']
  ),
  office(
    'stampante',
    'la stampante',
    ['Stampo il documento.', 'La stampante è vicino alla finestra.', 'Nella stampante non c’è più carta.'],
    '|The printer|La impresora|L’imprimante|Tiskárna|Drukarka|Yazıcı|Der Drucker|プリンター',
    'a white desktop inkjet printer with a sheet of paper coming out of the front',
    ['stampanti', 'fotocopiatrice', 'la fotocopiatrice']
  ),
  office(
    'fotocopiatrice',
    'la fotocopiatrice',
    [
      'La fotocopiatrice è in fondo al corridoio.',
      'Faccio dieci fotocopie alla fotocopiatrice.',
      'La fotocopiatrice si è bloccata di nuovo!',
    ],
    '|The photocopier|La fotocopiadora|La photocopieuse|Kopírka|Kserokopiarka|Fotokopi makinesi|Der Kopierer|コピー機',
    'a large floor-standing office photocopier in white and grey with paper trays and a control panel',
    ['fotocopiatrici', 'fotocopiatore', 'il fotocopiatore', 'stampante', 'la stampante']
  ),

  // --- i luoghi -------------------------------------------------------------------------------
  office(
    'reception',
    'la reception',
    ['Chieda alla reception, per favore.', 'Alla reception mi danno il badge.', 'Il pacco è arrivato alla reception.'],
    '|The reception (desk)|La recepción|L’accueil, la réception|Recepce|Recepcja|Resepsiyon|Der Empfang|受付',
    `${ROUND} a bright modern office reception desk with a smiling receptionist behind it and a plant, no writing on the wall`,
    ['ingresso', 'l’ingresso', 'accoglienza']
  ),
  office(
    'sala-riunioni',
    'la sala riunioni',
    [
      'La riunione è nella sala riunioni al terzo piano.',
      'La sala riunioni è occupata fino alle undici.',
      'Nella sala riunioni c’è un grande tavolo.',
    ],
    '|The meeting room|La sala de reuniones|La salle de réunion|Zasedací místnost|Sala konferencyjna|Toplantı odası|Der Besprechungsraum|会議室',
    `${ROUND} an empty modern meeting room with a long table, office chairs around it and a big screen on the wall`,
    ['sala riunione', 'sala delle riunioni', 'la sala delle riunioni', 'sala', 'la sala']
  ),
  office(
    'macchinetta',
    'la macchinetta del caffè',
    [
      'Ci vediamo alla macchinetta del caffè?',
      'La macchinetta del caffè è rotta!',
      'Alla macchinetta del caffè si parla di tutto.',
    ],
    '|The coffee machine|La máquina de café|La machine à café|Kávovar|Ekspres do kawy|Kahve makinesi|Die Kaffeemaschine|コーヒーマシン',
    'a compact espresso capsule coffee machine with a small cup of espresso under the spout',
    ['macchinetta', 'la macchinetta', 'macchina del caffè', 'la macchina del caffè', 'macchinetta del caffe']
  ),
  office(
    'distributore',
    'il distributore automatico',
    [
      'Prendo una bottiglia d’acqua al distributore automatico.',
      'Il distributore automatico è vicino all’ascensore.',
      'Il distributore automatico accetta solo monete.',
    ],
    '|The vending machine|La máquina expendedora|Le distributeur automatique|Automat (na jídlo a pití)|Automat z napojami i przekąskami|Otomat|Der Automat, der Snackautomat|自動販売機',
    'a snack and drinks vending machine with a glass front full of bottles of water, fruit juices and packets of crackers, no brand logos',
    ['distributore', 'il distributore', 'distributori', 'macchinetta', 'la macchinetta']
  ),

  // --- il lavoro -------------------------------------------------------------------------------
  office(
    'riunione',
    'la riunione',
    ['Ho una riunione alle dieci.', 'La riunione è durata due ore.', 'Il capo è in riunione.'],
    '|The meeting|La reunión|La réunion|Porada, schůze|Zebranie, spotkanie|Toplantı|Die Besprechung, das Meeting|会議、ミーティング',
    `${ROUND} five colleagues in smart casual clothes sitting around a table in a meeting, one of them talking and pointing at a chart on a screen`,
    ['riunioni', 'incontro', 'l’incontro', 'meeting', 'il meeting']
  ),
  office(
    'videochiamata',
    'la videochiamata',
    [
      'Facciamo una videochiamata domani mattina?',
      'Durante la videochiamata la connessione è caduta.',
      'Accendi la telecamera per la videochiamata.',
    ],
    '|The video call|La videollamada|L’appel vidéo, la visio|Videohovor|Wideorozmowa|Görüntülü görüşme|Der Videoanruf, die Videokonferenz|ビデオ通話',
    'a woman with a headset at a desk smiling and waving at a laptop whose screen shows a grid of four colleagues on a video call',
    ['videochiamate', 'videoconferenza', 'la videoconferenza', 'call', 'la call']
  ),
  office(
    'presentazione',
    'la presentazione',
    [
      'Preparo la presentazione per il cliente.',
      'La presentazione dura venti minuti.',
      'Durante la presentazione tutti fanno domande.',
    ],
    '|The presentation|La presentación|La présentation|Prezentace|Prezentacja|Sunum|Die Präsentation|プレゼンテーション',
    'a young man in a shirt standing next to a big screen with a colourful bar chart, presenting and gesturing with one hand, a small audience seen from behind',
    ['presentazioni']
  ),
  office(
    'colloquio',
    'il colloquio di lavoro',
    [
      'Domani ho un colloquio di lavoro.',
      'Il colloquio di lavoro è andato bene.',
      'Per il colloquio di lavoro metto la giacca.',
    ],
    '|The job interview|La entrevista de trabajo|L’entretien d’embauche|Pracovní pohovor|Rozmowa kwalifikacyjna|İş görüşmesi|Das Vorstellungsgespräch|面接',
    'a young woman in a smart jacket shaking hands across a desk with an interviewer, a CV sheet on the desk, both smiling',
    ['colloquio', 'il colloquio', 'colloqui', 'colloqui di lavoro']
  ),
  office(
    'contratto',
    'il contratto',
    [
      'Leggo bene il contratto prima di firmare.',
      'Ho un contratto a tempo indeterminato.',
      'Il contratto scade a dicembre.',
    ],
    '|The contract|El contrato|Le contrat|Smlouva|Umowa|Sözleşme|Der Vertrag|契約書',
    'a multi-page contract on a desk with a fountain pen lying on it, the text drawn as grey lines without readable letters, a signature line at the bottom',
    ['contratti', 'contratto di lavoro', 'il contratto di lavoro']
  ),
  office(
    'firma',
    'la firma',
    [
      'Manca la tua firma in fondo alla pagina.',
      'Metti una firma qui, per favore.',
      'La firma del direttore è difficile da leggere.',
    ],
    '|The signature|La firma|La signature|Podpis|Podpis|İmza|Die Unterschrift|署名、サイン',
    'a close-up of a hand holding a pen signing a flowing signature on a line at the bottom of a sheet of paper',
    ['firme', 'firmare']
  ),
  office(
    'stipendio',
    'lo stipendio',
    [
      'Lo stipendio arriva il ventisette del mese.',
      'Con questo stipendio non posso comprare casa.',
      'Mi hanno aumentato lo stipendio!',
    ],
    '|The salary, wages|El sueldo, el salario|Le salaire|Plat, mzda|Pensja, wynagrodzenie|Maaş|Das Gehalt|給料',
    'a brown pay envelope with several euro banknotes coming out of it, lying next to a few euro coins',
    ['stipendi', 'paga', 'la paga', 'salario', 'il salario']
  ),
  office(
    'pausa',
    'la pausa caffè',
    ['Facciamo una pausa caffè?', 'Durante la pausa caffè parlo con i colleghi.', 'La pausa caffè dura dieci minuti.'],
    '|The coffee break|La pausa para el café|La pause café|Přestávka na kávu|Przerwa na kawę|Kahve molası|Die Kaffeepause|コーヒーブレイク',
    'three colleagues standing and chatting cheerfully with small cups of espresso in their hands, in a relaxed coffee break',
    ['pausa', 'la pausa', 'pause caffè', 'pausa caffe', 'pausa pranzo', 'la pausa pranzo']
  ),
  office(
    'badge',
    'il badge',
    ['Senza badge non si entra.', 'Passo il badge all’ingresso.', 'Ho dimenticato il badge a casa.'],
    '|The ID badge, pass|La tarjeta de identificación|Le badge|Průkaz, čipová karta|Identyfikator|Kartlı giriş kartı|Der Ausweis, der Mitarbeiterausweis|社員証、入館証',
    'a plastic employee ID badge on a blue lanyard, with a small photo of a smiling person and grey lines instead of text',
    ['badges', 'tesserino', 'il tesserino', 'cartellino', 'il cartellino']
  ),
  office(
    'email',
    'l’email',
    ['Ho ricevuto un’email dal cliente.', 'Rispondo alle email la mattina.', 'Mandami un’email con i dettagli.'],
    '|The email|El correo electrónico|L’e-mail, le courriel|E-mail|E-mail|E-posta|Die E-Mail|メール',
    'a smartphone standing upright, its screen showing a big white envelope icon with a small red notification dot, no text',
    ['email', 'e-mail', 'l’e-mail', 'mail', 'la mail', 'posta elettronica', 'la posta elettronica']
  ),
  office(
    'scadenza',
    'la scadenza',
    [
      'La scadenza è venerdì: dobbiamo finire.',
      'Non posso uscire: ho una scadenza.',
      'Abbiamo rispettato la scadenza.',
    ],
    '|The deadline|La fecha límite, el plazo|La date limite, l’échéance|Termín, uzávěrka|Termin (ostateczny)|Son teslim tarihi|Die Frist, die Deadline|締め切り',
    'a desk calendar page with one day circled in thick red marker, and a red alarm clock next to it',
    ['scadenze', 'termine', 'il termine', 'deadline']
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const officeExampleWord = { bare: 'scrivania', withArticle: 'la scrivania' };

export const officeTranslationExercises = [
  tr(
    'Ho una riunione alle dieci nella sala riunioni.',
    'I have a meeting at ten in the meeting room.',
    'Tengo una reunión a las diez en la sala de reuniones.',
    'J’ai une réunion à dix heures dans la salle de réunion.',
    'V deset mám poradu v zasedací místnosti.',
    'O dziesiątej mam zebranie w sali konferencyjnej.',
    'Saat onda toplantı odasında bir toplantım var.',
    'Ich habe um zehn eine Besprechung im Besprechungsraum.',
    '10時に会議室で会議があります。'
  ),
  tr(
    'La stampante non funziona: non c’è più carta.',
    'The printer isn’t working: there’s no more paper.',
    'La impresora no funciona: no queda papel.',
    'L’imprimante ne marche pas : il n’y a plus de papier.',
    'Tiskárna nefunguje: došel papír.',
    'Drukarka nie działa: skończył się papier.',
    'Yazıcı çalışmıyor: kağıt kalmadı.',
    'Der Drucker geht nicht: Es ist kein Papier mehr da.',
    'プリンターが動きません。紙がもうありません。'
  ),
  tr(
    'Ti mando il documento per email.',
    'I’ll send you the document by email.',
    'Te mando el documento por correo electrónico.',
    'Je t’envoie le document par e-mail.',
    'Pošlu ti ten dokument e-mailem.',
    'Wyślę ci dokument mailem.',
    'Belgeyi sana e-postayla gönderiyorum.',
    'Ich schicke dir das Dokument per E-Mail.',
    '書類をメールで送ります。'
  ),
  tr(
    'Facciamo una pausa caffè? Sono stanco.',
    'Shall we have a coffee break? I’m tired.',
    '¿Hacemos una pausa para el café? Estoy cansado.',
    'On fait une pause café ? Je suis fatigué.',
    'Dáme si přestávku na kávu? Jsem unavený.',
    'Zrobimy przerwę na kawę? Jestem zmęczony.',
    'Kahve molası verelim mi? Yorgunum.',
    'Machen wir eine Kaffeepause? Ich bin müde.',
    'コーヒーブレイクにしない？疲れちゃった。'
  ),
  tr(
    'Domani ho un colloquio di lavoro in una banca.',
    'Tomorrow I have a job interview at a bank.',
    'Mañana tengo una entrevista de trabajo en un banco.',
    'Demain, j’ai un entretien d’embauche dans une banque.',
    'Zítra mám pracovní pohovor v bance.',
    'Jutro mam rozmowę kwalifikacyjną w banku.',
    'Yarın bir bankada iş görüşmem var.',
    'Morgen habe ich ein Vorstellungsgespräch bei einer Bank.',
    '明日、銀行で面接があります。'
  ),
  tr(
    'Leggi bene il contratto prima di mettere la firma.',
    'Read the contract carefully before you sign it.',
    'Lee bien el contrato antes de firmar.',
    'Lis bien le contrat avant de signer.',
    'Než se podepíšeš, přečti si pořádně smlouvu.',
    'Przeczytaj dokładnie umowę, zanim ją podpiszesz.',
    'İmzalamadan önce sözleşmeyi iyice oku.',
    'Lies den Vertrag gut durch, bevor du unterschreibst.',
    'サインする前に契約書をよく読んでください。'
  ),
  tr(
    'Il mio portatile è lento: posso usare il tuo computer?',
    'My laptop is slow: can I use your computer?',
    'Mi portátil va lento: ¿puedo usar tu ordenador?',
    'Mon ordinateur portable est lent : je peux utiliser ton ordinateur ?',
    'Můj notebook je pomalý: můžu použít tvůj počítač?',
    'Mój laptop jest wolny: mogę skorzystać z twojego komputera?',
    'Dizüstü bilgisayarım yavaş: senin bilgisayarını kullanabilir miyim?',
    'Mein Laptop ist langsam: Darf ich deinen Computer benutzen?',
    '私のノートパソコンが遅いので、あなたのパソコンを使ってもいいですか？'
  ),
  tr(
    'Lo stipendio arriva alla fine del mese.',
    'The salary comes at the end of the month.',
    'El sueldo llega a final de mes.',
    'Le salaire arrive à la fin du mois.',
    'Výplata přichází na konci měsíce.',
    'Pensja przychodzi pod koniec miesiąca.',
    'Maaş ayın sonunda yatıyor.',
    'Das Gehalt kommt am Ende des Monats.',
    '給料は月末に振り込まれます。'
  ),
  tr(
    'Senza badge non posso entrare in ufficio.',
    'Without my badge I can’t get into the office.',
    'Sin la tarjeta no puedo entrar en la oficina.',
    'Sans mon badge, je ne peux pas entrer au bureau.',
    'Bez průkazu se do kanceláře nedostanu.',
    'Bez identyfikatora nie mogę wejść do biura.',
    'Kartım olmadan ofise giremiyorum.',
    'Ohne Ausweis komme ich nicht ins Büro.',
    '社員証がないとオフィスに入れません。'
  ),
  tr(
    'La scadenza è venerdì, quindi oggi resto in ufficio fino a tardi.',
    'The deadline is Friday, so today I’m staying late at the office.',
    'La fecha límite es el viernes, así que hoy me quedo en la oficina hasta tarde.',
    'La date limite est vendredi, donc aujourd’hui je reste tard au bureau.',
    'Termín je v pátek, takže dnes zůstanu v kanceláři dlouho.',
    'Termin mija w piątek, więc dziś zostaję w biurze do późna.',
    'Son teslim tarihi cuma, bu yüzden bugün ofiste geç saate kadar kalıyorum.',
    'Die Frist ist am Freitag, deshalb bleibe ich heute lange im Büro.',
    '締め切りは金曜日なので、今日は遅くまでオフィスに残ります。'
  ),
];
