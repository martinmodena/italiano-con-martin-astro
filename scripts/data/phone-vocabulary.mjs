// Le parole della lezione di vocabolario «Il telefono e internet» (2026-11-03).
//
// Quarto dei temi pratici proposti il 2026-11-02 (Martin: «Sì, il telefono»), dopo la salute, i viaggi e gli
// acquisti. Due gruppi: il telefono (14: il cellulare, il caricabatterie, la batteria esterna, la cover, la SIM,
// gli auricolari, il vivavoce, la chiamata, il campo...) e internet (10: il wi-fi, il router, il tablet, l'app,
// la chat, il messaggio vocale, l'emoji, la notifica, il codice QR, la password...). Le parole gia' nell'ufficio
// (il telefono, il computer, il portatile, lo schermo, la tastiera, le cuffie, l'email, la videochiamata) non
// si ripetono.
//
// Struttura di ogni voce: come shopping-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`, `generate-animal-images.mjs --set telefono`
// (PHONE_STYLE): oggetti ritagliati sul bianco, schermi vuoti o con semplici icone e fumetti senza scritte,
// nessun marchio (niente mele morsicate ne' loghi di app).

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

const tel = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `telefono/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

const SCREEN = 'the screen showing only a plain soft colour, no icons, no words, no logo on the phone';

export const phoneVocabulary = [
  // --- il telefono ------------------------------------------------------------------------------
  tel(
    'cellulare',
    'il cellulare',
    ['Ho dimenticato il cellulare a casa.', 'Spegnete i cellulari, per favore.', 'Mi ha chiamato sul cellulare.'],
    '|The mobile (phone), cell phone|El móvil, el celular|Le (téléphone) portable|Mobil|Komórka|Cep telefonu|Das Handy|携帯電話、スマホ',
    `a hand holding a modern smartphone, seen from the front, ${SCREEN}`,
    ['cellulari', 'il telefonino', 'telefonino', 'lo smartphone', 'smartphone', 'il telefono', 'telefono']
  ),
  tel(
    'caricabatterie',
    'il caricabatterie',
    ['Mi presti il caricabatterie?', 'Ho perso il caricabatterie in albergo.', 'Il caricabatterie è nella borsa.'],
    '|The charger|El cargador|Le chargeur|Nabíječka|Ładowarka|Şarj aleti|Das Ladegerät|充電器',
    'a black wall plug charger with a black cable coiled beside it, product photo, clearly standing out from the white background, no logo',
    ['caricabatteria', 'il caricatore', 'caricatore']
  ),
  tel(
    'batteria',
    'la batteria',
    ['La batteria è quasi scarica.', 'Questo telefono ha una batteria che dura due giorni.', 'Ho il telefono al dieci per cento di batteria.'],
    '|The battery|La batería|La batterie|Baterie|Bateria|Pil, batarya|Der Akku|バッテリー',
    'a smartphone lying on a white surface, its screen showing only a big simple red battery symbol almost empty, no numbers, no words, no logo',
    ['batterie']
  ),
  tel(
    'presa',
    'la presa',
    ['C’è una presa vicino al letto?', 'Attacca il caricabatterie alla presa.', 'In treno ci sono le prese sotto il sedile.'],
    '|The socket, power outlet|El enchufe|La prise (de courant)|Zásuvka|Gniazdko|Priz|Die Steckdose|コンセント',
    'a white Italian wall power socket on a small square piece of warm terracotta-coloured painted wall, with a black phone charger plugged in and a black cable hanging down, close view, the piece of wall isolated on the white background',
    ['prese', 'la presa di corrente', 'presa di corrente', 'la spina', 'spina']
  ),
  tel(
    'cavo',
    'il cavo',
    ['Il cavo è troppo corto.', 'Hai un cavo per questo telefono?', 'Ho comprato un cavo nuovo.'],
    '|The cable|El cable|Le câble|Kabel|Kabel|Kablo|Das Kabel|ケーブル',
    'a neatly coiled black charging cable with a small connector at each end, product photo, no logo',
    ['cavi', 'il filo', 'filo']
  ),
  tel(
    'batteria-esterna',
    'la batteria esterna',
    ['In viaggio porto sempre la batteria esterna.', 'La batteria esterna è carica?', 'Ho ricaricato il telefono con la batteria esterna.'],
    '|The power bank|La batería externa|La batterie externe|Powerbanka|Powerbank|Taşınabilir şarj cihazı, powerbank|Die Powerbank|モバイルバッテリー',
    'a small dark blue power bank connected by a short cable to a smartphone lying beside it, product photo, no logo, no words',
    ['batterie esterne', 'il power bank', 'power bank', 'la powerbank', 'powerbank']
  ),
  tel(
    'cover',
    'la cover',
    ['Che bella cover!', 'Ho messo una cover per non rompere il telefono.', 'Mia figlia cambia cover ogni mese.'],
    '|The phone case|La funda|La coque|Kryt (na mobil)|Etui|Telefon kılıfı|Die Handyhülle|スマホケース',
    'an empty bright yellow silicone phone case next to a smartphone lying face down, product photo, no logo',
    ['cover', 'la custodia', 'custodia']
  ),
  tel(
    'sim',
    'la SIM',
    ['Ho comprato una SIM italiana.', 'Devo cambiare la SIM.', 'La SIM è dentro il telefono.'],
    '|The SIM card|La tarjeta SIM|La carte SIM|SIM karta|Karta SIM|SIM kart|Die SIM-Karte|SIMカード',
    'a hand holding a tiny SIM card with a gold chip above an open phone SIM tray, close product photo, no logo, no words',
    ['sim', 'Sim', 'la Sim', 'la scheda SIM', 'scheda SIM', 'la scheda', 'scheda']
  ),
  tel(
    'auricolari',
    'gli auricolari',
    ['In metro ascolto la musica con gli auricolari.', 'Ho perso un auricolare!', 'Togli gli auricolari quando ti parlo.'],
    '|The earphones, earbuds|Los auriculares|Les écouteurs|Sluchátka (do uší)|Słuchawki douszne|Kulaklık|Die Ohrhörer|イヤホン',
    'a pair of small black wireless earbuds next to their open black charging case, product photo, clearly standing out from the white background, no logo',
    ['l’auricolare', 'auricolare', 'gli auricolari wireless']
  ),
  tel(
    'fotocamera',
    'la fotocamera',
    ['La fotocamera di questo telefono è ottima.', 'Apri la fotocamera e fai una foto.', 'La fotocamera è rotta.'],
    '|The (phone) camera|La cámara|L’appareil photo (du téléphone)|Fotoaparát (v mobilu)|Aparat (w telefonie)|Kamera (telefon)|Die Kamera|カメラ',
    'close view of the back of a dark smartphone showing its round camera lenses, no logo',
    ['fotocamere', 'la fotocamera del telefono']
  ),
  tel(
    'vivavoce',
    'il vivavoce',
    ['Metto il vivavoce, così sentite tutti.', 'In macchina telefono solo con il vivavoce.', 'Togli il vivavoce, per favore!'],
    '|The speakerphone|El manos libres, el altavoz|Le haut-parleur, le mains libres|Hlasitý odposlech|Tryb głośnomówiący|Hoparlör|Die Freisprechfunktion, der Lautsprecher|スピーカーフォン',
    'a smartphone lying on a kitchen table between two smiling people who lean towards it, talking to it together, the screen blank',
    []
  ),
  tel(
    'chiamata',
    'la chiamata',
    ['Ho tre chiamate perse.', 'Scusa, ho una chiamata.', 'La chiamata è caduta.'],
    '|The (phone) call|La llamada|L’appel|Hovor|Połączenie, rozmowa telefoniczna|Arama, telefon|Der Anruf|電話（通話）',
    'a smiling young woman talking on a smartphone held to her ear, standing, dressed modestly in a sweater',
    ['chiamate', 'la telefonata', 'telefonata', 'telefonate']
  ),
  tel(
    'messaggio',
    'il messaggio',
    ['Ti mando un messaggio quando arrivo.', 'Hai letto il mio messaggio?', 'Ho ricevuto un messaggio da mia madre.'],
    '|The (text) message|El mensaje|Le message, le texto|Zpráva, SMS|Wiadomość, SMS|Mesaj|Die Nachricht, die SMS|メッセージ',
    'two thumbs typing on a smartphone held in both hands, the screen showing only coloured message bubbles with no letters',
    ['messaggi', 'l’sms', 'sms', 'il messaggino', 'messaggino']
  ),
  tel(
    'campo',
    'il campo',
    ['Qui non c’è campo.', 'In montagna il telefono non prende: non c’è campo.', 'Vado fuori, dentro non ho campo.'],
    '|The signal, reception|La cobertura|Le réseau|Signál|Zasięg|Çekim (sinyal)|Der Empfang, das Netz|電波',
    'a man in a field holding his smartphone high above his head, looking up at it with a puzzled face, trying to get a signal',
    ['il segnale', 'segnale', 'la linea', 'linea']
  ),
  // --- internet ---------------------------------------------------------------------------------
  tel(
    'wi-fi',
    'il wi-fi',
    ['Qual è la password del wi-fi?', 'In albergo il wi-fi è gratis.', 'Il wi-fi non funziona.'],
    '|The Wi-Fi|El wifi|Le wifi|Wi-fi|Wi-fi|Wi-fi|Das WLAN|Wi-Fi',
    'a small white sign standing on a café table showing only the curved wi-fi signal symbol, no words, next to a cup of coffee',
    ['wifi', 'il wifi', 'wi fi', 'la rete', 'rete', 'la wi-fi']
  ),
  tel(
    'router',
    'il router',
    ['Spegni e riaccendi il router.', 'Il router è in salotto.', 'Le lucine del router sono rosse.'],
    '|The router|El router|La box internet, le routeur|Router|Router|Modem, router|Der Router|ルーター',
    'a black home wi-fi router with two black antennas and a row of small blue lights, product photo, clearly standing out from the white background, no logo, no words',
    ['il modem', 'modem', 'router']
  ),
  tel(
    'tablet',
    'il tablet',
    ['Il nonno legge il giornale sul tablet.', 'Il bambino guarda i cartoni sul tablet.', 'Ho lasciato il tablet in treno.'],
    '|The tablet|La tableta|La tablette|Tablet|Tablet|Tablet|Das Tablet|タブレット',
    'a grandfather sitting in an armchair reading on a tablet held in both hands, smiling, the screen not visible',
    ['tablet', 'la tavoletta']
  ),
  tel(
    'app',
    'l’app',
    ['Scarica l’app del museo.', 'Con questa app compro i biglietti del treno.', 'Ho troppe app sul telefono.'],
    '|The app|La aplicación, la app|L’appli, l’application|Aplikace|Aplikacja|Uygulama|Die App|アプリ',
    'a hand holding a smartphone whose screen shows only a neat grid of plain coloured rounded squares like app icons, no symbols, no letters, no logos',
    ['app', 'le app', 'l’applicazione', 'applicazione', 'applicazioni']
  ),
  tel(
    'chat',
    'la chat',
    ['Ne parliamo nella chat di famiglia.', 'La chat della classe ha cento messaggi!', 'Ti scrivo in chat.'],
    '|The chat, group chat|El chat, el grupo|La discussion, le groupe (de messagerie)|Chat, skupina|Czat, grupa|Sohbet, grup|Der Chat, die Gruppe|チャット',
    'a smiling woman sitting on a sofa reading her smartphone, the screen showing only a column of green and white message bubbles with no letters',
    ['chat', 'il gruppo', 'gruppo', 'la chat di gruppo']
  ),
  tel(
    'messaggio-vocale',
    'il messaggio vocale',
    ['Ti mando un messaggio vocale.', 'Non ho tempo di ascoltare i tuoi vocali!', 'Mi ha lasciato un messaggio vocale di cinque minuti.'],
    '|The voice message, voice note|El audio, el mensaje de voz|Le message vocal, le vocal|Hlasová zpráva|Wiadomość głosowa|Sesli mesaj|Die Sprachnachricht|ボイスメッセージ',
    'a young man holding his smartphone flat in front of his mouth, recording a voice message, the screen blank',
    ['messaggi vocali', 'il vocale', 'vocale', 'i vocali', 'vocali']
  ),
  tel(
    'emoji',
    'l’emoji',
    ['Mi ha risposto solo con un’emoji.', 'Quale emoji usi di più?', 'Metti tante emoji nei messaggi!'],
    '|The emoji|El emoji|L’émoji|Emoji|Emoji|Emoji|Das Emoji|絵文字',
    'five round yellow emoji faces (smiling, laughing, winking, surprised and sad) arranged in two neat rows, small in the centre of the picture with wide empty white margins on every side, none of them touching the edges, 3D style',
    ['emoji', 'le emoji', 'gli emoji', 'l’emoticon', 'emoticon', 'la faccina', 'faccina', 'faccine']
  ),
  tel(
    'notifica',
    'la notifica',
    ['Ho disattivato le notifiche.', 'Mi arriva una notifica ogni cinque minuti.', 'Hai visto la notifica?'],
    '|The notification|La notificación|La notification|Upozornění, notifikace|Powiadomienie|Bildirim|Die Benachrichtigung|通知',
    'a smartphone held in a hand, its screen dark blue and showing only a big bright white bell symbol with a red dot at its corner, strong contrast, no numbers, no words, no logo',
    ['notifiche']
  ),
  tel(
    'codice-qr',
    'il codice QR',
    ['Inquadra il codice QR per vedere il menù.', 'Il biglietto ha un codice QR.', 'Il codice QR non funziona.'],
    '|The QR code|El código QR|Le QR code, le code QR|QR kód|Kod QR|QR kod|Der QR-Code|QRコード',
    'a hand holding a smartphone up to scan a black and white QR code printed on a small card standing on a restaurant table, no words',
    ['codice qr', 'il QR', 'qr', 'QR', 'il qr code', 'qr code', 'codici QR']
  ),
  tel(
    'password',
    'la password',
    ['Ho dimenticato la password.', 'Non dire a nessuno la tua password!', 'La password deve avere almeno otto caratteri.'],
    '|The password|La contraseña|Le mot de passe|Heslo|Hasło|Şifre, parola|Das Passwort|パスワード',
    'a smartphone screen in close view showing only a big closed padlock symbol and a row of round dots underneath, no letters, no numbers, no logo',
    ['password', 'la parola d’ordine', 'parola d’ordine', 'il codice', 'codice']
  ),
];

export const phoneExampleWord = { bare: 'cellulare', withArticle: 'il cellulare' };

export const phoneTranslationExercises = [
  tr(
    'Pronto? Chi parla?',
    'Hello? Who’s speaking?',
    '¿Diga? ¿Quién es?',
    'Allô ? Qui est à l’appareil ?',
    'Haló? Kdo volá?',
    'Halo? Kto mówi?',
    'Alo? Kim arıyor?',
    'Hallo? Wer spricht da?',
    'もしもし、どちら様ですか？'
  ),
  tr(
    'Ho il telefono scarico: mi presti il caricabatterie?',
    'My phone is dead: can I borrow your charger?',
    'Tengo el móvil sin batería: ¿me prestas el cargador?',
    'Mon portable est déchargé : tu me prêtes ton chargeur ?',
    'Mám vybitý mobil: půjčíš mi nabíječku?',
    'Rozładował mi się telefon: pożyczysz mi ładowarkę?',
    'Telefonumun şarjı bitti: şarj aletini ödünç verir misin?',
    'Mein Handy ist leer: Leihst du mir dein Ladegerät?',
    '携帯の充電が切れました。充電器を貸してくれる？'
  ),
  tr(
    'Qual è la password del wi-fi?',
    'What’s the Wi-Fi password?',
    '¿Cuál es la contraseña del wifi?',
    'Quel est le mot de passe du wifi ?',
    'Jaké je heslo k wi-fi?',
    'Jakie jest hasło do wi-fi?',
    'Wi-fi şifresi ne?',
    'Wie lautet das WLAN-Passwort?',
    'Wi-Fiのパスワードは何ですか？'
  ),
  tr(
    'Qui non c’è campo: ti richiamo dopo.',
    'There’s no signal here: I’ll call you back later.',
    'Aquí no hay cobertura: te llamo luego.',
    'Ici il n’y a pas de réseau : je te rappelle plus tard.',
    'Tady není signál: zavolám ti pak.',
    'Tu nie ma zasięgu: oddzwonię później.',
    'Burada çekmiyor: seni sonra ararım.',
    'Hier gibt es keinen Empfang: Ich rufe dich später zurück.',
    'ここは電波がないので、あとでかけ直すね。'
  ),
  tr(
    'Ti mando un messaggio vocale.',
    'I’ll send you a voice message.',
    'Te mando un audio.',
    'Je t’envoie un message vocal.',
    'Pošlu ti hlasovou zprávu.',
    'Wyślę ci wiadomość głosową.',
    'Sana sesli mesaj atarım.',
    'Ich schicke dir eine Sprachnachricht.',
    'ボイスメッセージを送るね。'
  ),
  tr(
    'Ho tre chiamate perse di mia madre.',
    'I’ve got three missed calls from my mother.',
    'Tengo tres llamadas perdidas de mi madre.',
    'J’ai trois appels manqués de ma mère.',
    'Mám tři zmeškané hovory od mámy.',
    'Mam trzy nieodebrane połączenia od mamy.',
    'Annemden üç cevapsız arama var.',
    'Ich habe drei verpasste Anrufe von meiner Mutter.',
    '母から不在着信が3件あります。'
  ),
  tr(
    'Scarica l’app e inquadra il codice QR.',
    'Download the app and scan the QR code.',
    'Descarga la aplicación y escanea el código QR.',
    'Télécharge l’appli et scanne le QR code.',
    'Stáhni si aplikaci a naskenuj QR kód.',
    'Pobierz aplikację i zeskanuj kod QR.',
    'Uygulamayı indir ve QR kodu okut.',
    'Lade die App herunter und scanne den QR-Code.',
    'アプリをダウンロードして、QRコードを読み取ってください。'
  ),
  tr(
    'Metto il vivavoce, così sentite anche voi.',
    'I’ll put it on speaker so you can hear too.',
    'Pongo el altavoz, así lo oís vosotros también.',
    'Je mets le haut-parleur, comme ça vous entendez aussi.',
    'Dám to nahlas, ať to slyšíte i vy.',
    'Włączę głośnik, żebyście też słyszeli.',
    'Hoparlörü açıyorum, siz de duyun.',
    'Ich stelle auf Lautsprecher, dann hört ihr auch mit.',
    'スピーカーにするから、みんなも聞いてね。'
  ),
];
