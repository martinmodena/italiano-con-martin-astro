// Stringhe di pagina della lezione «Il telefono e internet» (2026-11-03), kind 'words'.
//
// `note` non e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// al telefono si risponde *Pronto?*; *chiamare qualcuno* (senza preposizione) ma *telefonare a qualcuno*;
// il telefono *e' scarico* e si *carica*, mentre le app si *scaricano*; *non c'e' campo*; *mandare un vocale*.
// Poi le trappole della lingua dello studente: *il mobile* e' un armadio (mobile, móvil, mobil), *il
// portatile* e' il computer (le portable), Handy, zadzwonić DO, ligar PARA...
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { phoneVocabulary } from './phone-vocabulary.mjs';

const N = phoneVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const phonePages = {
  it: {
    dir: 'vocabolario',
    slug: 'telefono-internet',
    name: 'Il telefono e internet',
    title: 'Il telefono e internet: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole del telefono e di internet in italiano — il cellulare, il caricabatterie, la cover, gli auricolari, il campo, il wi-fi, l’app, il messaggio vocale… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt: 'Un cellulare appoggiato sul tavolino di un bar italiano, accanto a una tazzina di caffè',
    cardText: `${N} parole del telefono e di internet: il cellulare, il caricabatterie, il campo, il wi-fi, l’app, il vocale…`,
    note: {
      title: 'Pronto? Non c’è campo!',
      body: 'Al telefono si risponde <em>Pronto?</em> Si <em>chiama qualcuno</em>, senza preposizione (<em>chiamo mia madre</em>), ma si <em>telefona a qualcuno</em> (<em>telefono a mia madre</em>). Quando la batteria finisce il telefono <em>è scarico</em> e si <em>mette in carica</em>; le app invece si <em>scaricano</em>: lo stesso verbo vuol dire «togliere la carica» e «prendere da internet». Se il telefono non prende, <em>non c’è campo</em>. Si <em>manda un messaggio</em> o, sempre più spesso, <em>un vocale</em>. Attenzione: <em>il mobile</em> in italiano è un armadio o una cassettiera, e <em>il portatile</em> è il computer; il telefono è <em>il cellulare</em> o <em>il telefonino</em>. Il <em>wi-fi</em> si pronuncia quasi sempre «uài fai». E prima di chiudere: <em>ci sentiamo!</em>',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-phone-and-internet-vocabulary',
    name: 'Phone and internet',
    title: 'Phone and internet | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for phones and the internet — the mobile, the charger, the phone case, the earbuds, the signal, the Wi-Fi, the app, the voice message… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'A mobile phone on the table of an Italian café, next to a small cup of coffee',
    cardText: `${N} words for phones and the internet: the mobile, the charger, the signal, the Wi-Fi, the app, the voice message…`,
    note: {
      title: `A ${it('mobile')} is a cupboard!`,
      body: `False friend number one: ${it('il mobile')} is a piece of furniture; your mobile phone is ${it('il cellulare')} or ${it('il telefonino')}. Italians answer the phone with ${it('Pronto?')}, not “hello”. You ${it('chiami qualcuno')} with no preposition (${it('chiamo mia madre')}), but you ${it('telefoni a qualcuno')}. A dead phone ${it('è scarico')} and you ${it('lo metti in carica')}; careful, the same verb means “to download”: ${it('scarico un’app')}. “No signal” is ${it('non c’è campo')}, a voice note ${it('un vocale')}, a phone case ${it('la cover')} and speakerphone ${it('il vivavoce')}. Many English words are used as they are (${it('il tablet')}, ${it('il router')}, ${it('la password')}, ${it('la chat')}), but they get an article and a gender. And to end a call: ${it('ci sentiamo!')} (talk soon!).`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-del-telefono-e-internet-en-italiano',
    name: 'El teléfono e internet',
    title: 'El teléfono e internet | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras italianas del teléfono e internet — el móvil, el cargador, la funda, los auriculares, la cobertura, el wifi, la aplicación, el audio… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'Un móvil sobre la mesa de un bar italiano, junto a una tacita de café',
    cardText: `${N} palabras del teléfono e internet: el móvil, el cargador, la cobertura, el wifi, la aplicación, el audio…`,
    note: {
      title: `El móvil no es ${it('il mobile')}`,
      body: `La trampa más fuerte: ${it('il mobile')} es un mueble; el móvil es ${it('il cellulare')} o ${it('il telefonino')}. Al teléfono no se dice «¿Diga?» sino ${it('Pronto?')}. «Llamar a alguien» es ${it('chiamare qualcuno')}, sin ${it('a')}: ${it('chiamo mia madre')}; en cambio ${it('telefonare')} sí la lleva: ${it('telefono a mia madre')}. Si no hay cobertura, ${it('non c’è campo')}. El móvil sin batería ${it('è scarico')}, y «descargar» una aplicación es ${it('scaricare')}: es el mismo verbo. La funda es ${it('la cover')}, el cargador ${it('il caricabatterie')} y el altavoz ${it('il vivavoce')}. Un audio de WhatsApp es ${it('un vocale')} o ${it('un messaggio vocale')}. Ojo a la pronunciación: ${it('wi-fi')} se dice casi siempre «uái fai», a la inglesa. Y para despedirse: ${it('ci sentiamo!')} (¡hablamos!).`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-du-telephone-et-internet-en-italien',
    name: 'Le téléphone et internet',
    title: 'Le téléphone et internet | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens du téléphone et d’internet — le portable, le chargeur, la coque, les écouteurs, le réseau, le wifi, l’appli, le message vocal… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Un portable posé sur la table d’un café italien, à côté d’une petite tasse de café',
    cardText: `${N} mots du téléphone et d’internet : le portable, le chargeur, le réseau, le wifi, l’appli, le vocal…`,
    note: {
      title: `Votre portable n’est pas ${it('il portatile')}`,
      body: `Attention : ${it('il portatile')} est l’ordinateur portable ; le téléphone portable, c’est ${it('il cellulare')} ou ${it('il telefonino')}. Et ${it('il mobile')} est un meuble. Au téléphone, on ne dit pas « Allô » mais ${it('Pronto?')}. Comme en français, on ${it('chiama qualcuno')} (${it('chiamo mia madre')}) et on ${it('telefona a qualcuno')}. « Il n’y a pas de réseau » se dit ${it('non c’è campo')}. Un téléphone déchargé ${it('è scarico')}, et « télécharger » une appli se dit aussi ${it('scaricare')}. La coque est ${it('la cover')}, le haut-parleur ${it('il vivavoce')}, le message vocal ${it('il vocale')}. ${it('Wi-fi')} se prononce à l’anglaise, « ouaï faï ». Et pour finir l’appel : ${it('ci sentiamo!')} (on se rappelle !).`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-telefon-a-internet',
    name: 'Telefon a internet',
    title: 'Telefon a internet | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o telefonu a internetu — mobil, nabíječka, kryt, sluchátka, signál, wi-fi, aplikace, hlasová zpráva… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Mobil na stolku italské kavárny vedle šálku kávy',
    cardText: `${N} slov o telefonu a internetu: mobil, nabíječka, signál, wi-fi, aplikace, hlasová zpráva…`,
    note: {
      title: `Mobil není ${it('il mobile')}`,
      body: `Pozor: ${it('il mobile')} je v italštině kus nábytku; mobil je ${it('il cellulare')} nebo ${it('il telefonino')}. Do telefonu se neříká „Haló“, ale ${it('Pronto?')}. „Zavolat někomu“ je ${it('chiamare qualcuno')}, bez předložky a se 4. pádem (${it('chiamo mia madre')}); se slovesem ${it('telefonare')} je ale ${it('a')}: ${it('telefono a mia madre')}. Když není signál, ${it('non c’è campo')}. Vybitý telefon ${it('è scarico')} a „stáhnout“ aplikaci je také ${it('scaricare')}: stejné sloveso. Kryt je ${it('la cover')}, nabíječka ${it('il caricabatterie')}, hlasitý odposlech ${it('il vivavoce')} a hlasovka ${it('il vocale')}. ${it('Wi-fi')} se vyslovuje anglicky, „uaj faj“. A na rozloučenou: ${it('ci sentiamo!')} (ozveme se!).`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-telefon-i-internet',
    name: 'Telefon i internet',
    title: 'Telefon i internet | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o telefonie i internecie — komórka, ładowarka, etui, słuchawki, zasięg, wi-fi, aplikacja, wiadomość głosowa… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Komórka na stoliku włoskiej kawiarni, obok filiżanki kawy',
    cardText: `${N} słów o telefonie i internecie: komórka, ładowarka, zasięg, wi-fi, aplikacja, wiadomość głosowa…`,
    note: {
      title: `${it('Chiamo mia madre')}, bez „do”`,
      body: `Po polsku dzwoni się „do kogoś”, po włosku ${it('chiamare')} łączy się bezpośrednio: ${it('chiamo mia madre')} (dzwonię do mamy). Z czasownikiem ${it('telefonare')} jest ${it('a')}: ${it('telefono a mia madre')}. Odbierając telefon, mówi się ${it('Pronto?')}, nie „Halo”. Brak zasięgu to ${it('non c’è campo')}. Rozładowany telefon ${it('è scarico')}, a „pobrać” aplikację to też ${it('scaricare')}: ten sam czasownik. Komórka to ${it('il cellulare')} albo ${it('il telefonino')} (uwaga: ${it('il mobile')} to mebel), etui ${it('la cover')}, ładowarka ${it('il caricabatterie')}, tryb głośnomówiący ${it('il vivavoce')}, a „głosówka” ${it('il vocale')}. ${it('Wi-fi')} wymawia się po angielsku, „łaj faj”. Na pożegnanie: ${it('ci sentiamo!')} (zdzwonimy się!).`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-telefon-ve-internet-kelimeleri',
    name: 'Telefon ve internet',
    title: 'Telefon ve internet | İtalyanca kelimeler | Italiano con Martin',
    description: `Telefon ve internetle ilgili ${N} İtalyanca kelime öğrenin — cep telefonu, şarj aleti, kılıf, kulaklık, çekim, wi-fi, uygulama, sesli mesaj… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'Bir İtalyan kafesinin masasında, küçük bir kahve fincanının yanında duran cep telefonu',
    cardText: `Telefon ve internet için ${N} kelime: cep telefonu, şarj aleti, çekim, wi-fi, uygulama, sesli mesaj…`,
    note: {
      title: `${it('Pronto?')}: İtalyanca “Alo”`,
      body: `Telefonu açınca “Alo” değil ${it('Pronto?')} denir. “Birini aramak” Türkçedeki gibi doğrudan: ${it('chiamo mia madre')} (annemi arıyorum); ama ${it('telefonare')} fiili ${it('a')} ister: ${it('telefono a mia madre')}. Telefon çekmiyorsa ${it('non c’è campo')}. Şarjı bitmiş telefon ${it('è scarico')}; bir uygulamayı “indirmek” de ${it('scaricare')}: aynı fiil. Cep telefonu ${it('il cellulare')} ya da ${it('il telefonino')} (dikkat: ${it('il mobile')} mobilyadır), kılıf ${it('la cover')}, şarj aleti ${it('il caricabatterie')}, hoparlör ${it('il vivavoce')}, sesli mesaj ${it('il vocale')}. İngilizceden gelen kelimeler (${it('il tablet')}, ${it('la password')}, ${it('la chat')}) İtalyancada artikel ve cinsiyet alır. ${it('Wi-fi')} İngilizce gibi “uay fay” okunur. Kapatırken: ${it('ci sentiamo!')} (konuşuruz!).`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-telefon-und-internet',
    name: 'Telefon und Internet',
    title: 'Telefon und Internet | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter rund um Telefon und Internet — das Handy, das Ladegerät, die Hülle, die Ohrhörer, der Empfang, das WLAN, die App, die Sprachnachricht… — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Ein Handy auf dem Tisch eines italienischen Cafés, neben einer kleinen Kaffeetasse',
    cardText: `${N} Wörter rund um Telefon und Internet: das Handy, das Ladegerät, der Empfang, das WLAN, die App, die Sprachnachricht …`,
    note: {
      title: `Das Handy heißt ${it('il cellulare')}`,
      body: `Das Wort „Handy“ kennt in Italien niemand: Man sagt ${it('il cellulare')} oder ${it('il telefonino')}. Und ${it('il mobile')} ist ein Möbelstück. Am Telefon meldet man sich mit ${it('Pronto?')}. Wie im Deutschen ruft man jemanden direkt an: ${it('chiamo mia madre')} (ich rufe meine Mutter an); mit ${it('telefonare')} braucht man aber ${it('a')}: ${it('telefono a mia madre')}. Kein Empfang heißt ${it('non c’è campo')}. Ein leerer Akku: ${it('il telefono è scarico')}; und „herunterladen“ ist dasselbe Verb, ${it('scaricare')}. Das WLAN heißt ${it('il wi-fi')} (gesprochen „uai fai“), die Hülle ${it('la cover')}, der Lautsprecher ${it('il vivavoce')}, die Sprachnachricht ${it('il vocale')}. Und zum Abschied: ${it('ci sentiamo!')} (wir hören uns!).`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-phone-and-internet-vocabulary',
    name: '電話とインターネット',
    title: '電話とインターネット | イタリア語の語彙 | Italiano con Martin',
    description: `携帯電話、充電器、スマホケース、イヤホン、電波、Wi-Fi、アプリ、ボイスメッセージなど、電話とインターネットのイタリア語の単語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: 'イタリアのカフェのテーブルに、小さなコーヒーカップと並んで置かれた携帯電話',
    cardText: `電話とインターネットの単語 ${N} 語：携帯電話、充電器、電波、Wi-Fi、アプリ、ボイスメッセージ…`,
    note: {
      title: `もしもし＝${it('Pronto?')}`,
      body: `電話に出るときは「もしもし」の代わりに ${it('Pronto?')} と言います。「〜に電話する」は二通りあり、${it('chiamare')} は前置詞なしで ${it('chiamo mia madre')}（母に電話する）、${it('telefonare')} は ${it('a')} を使って ${it('telefono a mia madre')} です。「圏外」は ${it('non c’è campo')}。充電が切れた携帯は ${it('è scarico')}、アプリを「ダウンロードする」も同じ動詞 ${it('scaricare')} です。携帯電話は ${it('il cellulare')} か ${it('il telefonino')}（${it('il mobile')} は「家具」なので注意）、スマホケースは ${it('la cover')}、スピーカーフォンは ${it('il vivavoce')}、ボイスメッセージは ${it('il vocale')}。${it('il tablet')}、${it('la password')} のような英語由来の単語にも、イタリア語では冠詞と性があります。${it('Wi-fi')} は英語風に「ウアイファイ」と発音します。電話を切るときは ${it('ci sentiamo!')}（またね！）。`,
    },
  },
};
