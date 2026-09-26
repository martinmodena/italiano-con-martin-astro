// Le parole della lezione di vocabolario «Le persone intorno a noi» (2026-09-26).
//
// Le persone per eta' (il bambino, l'anziano...), i rapporti (l'amico, il vicino di casa, il collega...) e i
// ruoli di tutti i giorni (il cliente, il passeggero, il paziente...). Dove esistono, le due forme sono nel
// titolo della scheda (il vicino / la vicina di casa); `answers` accetta tutte e due, piu' i sinonimi.
//
// Struttura di ogni voce: come jobs-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
// Foto REALISTICHE con gpt-image-1-mini a qualita' `low` (Martin, 2026-09-26: spendere poco). Nelle foto
// con piu' persone la persona della parola e' descritta per prima.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Tutte le forme («il vicino / la vicina di casa»), con e senza articolo e apostrofo, piu' i sinonimi. */
const answersFor = (word, extra) => {
  // «il vicino / la vicina di casa»: il complemento finale vale per tutte e due le forme.
  const [first, ...rest] = word.split(' / ');
  const tail = rest.length ? (/ (di|del|della) .+$/.exec(rest[rest.length - 1])?.[0] ?? '') : '';
  const forms = [tail && !first.endsWith(tail) ? first + tail : first, ...rest];
  const list = [];
  for (const form of [...forms, ...extra]) {
    list.push(form, form.replace(ARTICLE, ''));
    if (tail) list.push(form.replace(tail, ''), form.replace(tail, '').replace(ARTICLE, ''));
    if (form.includes('’')) list.push(form.replace('’', ' '), form.replace('’', ''));
  }
  return [...new Set(list)];
};

const person = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `persone/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const peopleVocabulary = [
  // --- le eta' della vita --------------------------------------------------------------
  person(
    'neonato',
    'il neonato / la neonata',
    [
      'Il neonato dorme quasi tutto il giorno.',
      'Mia sorella ha una neonata di due settimane.',
      'I neonati piangono quando hanno fame.',
    ],
    '|The newborn baby|El recién nacido / la recién nacida|Le nouveau-né / la nouveau-née|Novorozeně|Noworodek|Yenidoğan bebek|Das Neugeborene|新生児、赤ちゃん',
    'a newborn baby sleeping peacefully, wrapped in a soft light blue blanket, lying on a white surface',
    ['bebè', 'il bebè', 'il bambino', 'bambino']
  ),
  person(
    'bambino',
    'il bambino / la bambina',
    ['Il bambino gioca con la palla.', 'Quando ero bambina abitavo a Napoli.', 'I bambini vanno a scuola alle otto.'],
    '|The child (boy / girl)|El niño / la niña|L’enfant, le petit garçon / la petite fille|Dítě (chlapec / holčička)|Dziecko (chłopiec / dziewczynka)|Çocuk|Das Kind (Junge / Mädchen)|子ども（男の子・女の子）',
    'a girl of about 6 with pigtails laughing and holding a red ball',
    ['bimbo', 'il bimbo', 'bimba', 'la bimba']
  ),
  person(
    'ragazzo',
    'il ragazzo / la ragazza',
    [
      'Il ragazzo va a scuola in bicicletta.',
      'Chi è quella ragazza con i capelli rossi?',
      'Luca è il ragazzo di Anna.',
    ],
    '|The boy / the girl, the young man / the young woman (also: boyfriend / girlfriend)|El chico / la chica (también: novio / novia)|Le garçon / la fille, le jeune homme / la jeune femme (aussi : petit ami / petite amie)|Kluk / holka, mladík / mladá žena (také: přítel / přítelkyně)|Chłopak / dziewczyna|Genç erkek / genç kız (ayrıca: erkek arkadaş / kız arkadaş)|Der Junge / das Mädchen, junger Mann / junge Frau (auch: Freund / Freundin)|若い男性・女性（恋人の意味も）',
    'a young man of about 20 with a backpack on one shoulder walking and smiling',
    ['giovane', 'il giovane', 'la giovane']
  ),
  person(
    'adolescente',
    'l’adolescente',
    [
      'Gli adolescenti passano molto tempo al telefono.',
      'Mio figlio è un adolescente: ha quindici anni.',
      'Da adolescente ero molto timida.',
    ],
    '|The teenager|El / la adolescente|L’adolescent / l’adolescente|Teenager, dospívající|Nastolatek / nastolatka|Ergen|Der / die Jugendliche|10代の若者',
    'a teenage girl of about 15 with headphones around her neck looking at her smartphone, sneakers and hoodie',
    ['ragazzo', 'ragazza', 'il ragazzo', 'la ragazza', 'teenager']
  ),
  person(
    'uomo',
    'l’uomo',
    ['Quell’uomo con la barba è mio zio.', 'Gli uomini e le donne della squadra.', 'Un uomo mi ha chiesto la strada.'],
    '|The man (plural: gli uomini)|El hombre|L’homme|Muž|Mężczyzna|Adam|Der Mann|男性',
    'a man of about 40 with a short beard in a casual shirt and jeans standing with hands in pockets, shown small with his whole head and face and his shoes fully visible, lots of white space above his head',
    ['signore', 'il signore', 'uomini', 'gli uomini']
  ),
  person(
    'donna',
    'la donna',
    [
      'La donna con il cappotto verde è la mia professoressa.',
      'In questa azienda lavorano molte donne.',
      'È una donna molto simpatica.',
    ],
    '|The woman|La mujer|La femme|Žena|Kobieta|Kadın|Die Frau|女性',
    'a woman of about 40 with shoulder-length brown hair in a green coat standing and smiling',
    ['signora', 'la signora']
  ),
  person(
    'anziano',
    'l’anziano / l’anziana',
    [
      'L’anziana signora dà da mangiare ai piccioni.',
      'Aiuto un anziano ad attraversare la strada.',
      'Gli anziani giocano a carte al bar.',
    ],
    '|The elderly person|El anciano / la anciana|La personne âgée|Starší člověk, senior|Starszy pan / starsza pani|Yaşlı|Der alte Mann / die alte Frau, der Senior|高齢者、お年寄り',
    'an elderly man of about 80 with white hair and a flat cap walking with a wooden cane',
    ['vecchio', 'il vecchio', 'vecchia', 'la vecchia']
  ),
  person(
    'pensionato',
    'il pensionato / la pensionata',
    [
      'Mio nonno è pensionato: non lavora più.',
      'La pensionata fa volontariato in biblioteca.',
      'I pensionati hanno più tempo libero.',
    ],
    '|The pensioner (retired person)|El jubilado / la jubilada|Le retraité / la retraitée|Důchodce / důchodkyně|Emeryt / emerytka|Emekli|Der Rentner / die Rentnerin|年金生活者、退職者',
    'a retired woman of about 68 with short grey hair watering flowers in a garden with a green watering can, relaxed and happy'
  ),
  person(
    'gemelli',
    'i gemelli / le gemelle',
    ['Marco e Matteo sono gemelli.', 'Le gemelle si vestono sempre uguali.', 'Non riesco a distinguere i due gemelli.'],
    '|The twins|Los gemelos / las gemelas|Les jumeaux / les jumelles|Dvojčata|Bliźnięta, bliźniacy / bliźniaczki|İkizler|Die Zwillinge|双子',
    'two identical twin girls of about 8 with the same haircut and the same yellow t-shirt standing side by side, smiling',
    ['gemello', 'il gemello', 'gemella', 'la gemella']
  ),

  // --- tante persone insieme --------------------------------------------------------------
  person(
    'persona',
    'la persona',
    ['Luca è una persona gentile.', 'Al tavolo ci sono sei persone.', 'Quante persone vengono alla festa?'],
    '|The person (plural: the people)|La persona|La personne|Osoba, člověk|Osoba|Kişi, insan|Die Person, der Mensch|人',
    'one single ordinary smiling person of about 30 in casual clothes standing in the middle of the frame, shown small with the whole head and face and the shoes fully visible, lots of white space above the head',
    ['persone', 'le persone']
  ),
  person(
    'gente',
    'la gente',
    ['La gente aspetta l’autobus.', 'In centro c’è tanta gente.', 'Alla gente piace la pizza.'],
    '|People (always singular in Italian)|La gente|Les gens|Lidé|Ludzie|İnsanlar, halk|Die Leute|人々',
    'six ordinary people of different ages standing in a relaxed line waiting at a bus stop sign, full bodies',
    ['folla', 'la folla', 'persone', 'le persone']
  ),
  person(
    'folla',
    'la folla',
    [
      'C’è una grande folla davanti al teatro.',
      'La folla applaude il cantante.',
      'Non mi piace stare in mezzo alla folla.',
    ],
    '|The crowd|La multitud|La foule|Dav|Tłum|Kalabalık|Die Menschenmenge|群衆、人混み',
    'a big dense crowd of many small people seen from above in a square, cheering with hands in the air, the whole crowd small in the centre',
    ['gente', 'la gente']
  ),
  person(
    'gruppo-di-amici',
    'il gruppo di amici',
    [
      'Esco con un gruppo di amici.',
      'Il gruppo di amici fa un picnic al parco.',
      'Nel mio gruppo di amici siamo in sette.',
    ],
    '|The group of friends|El grupo de amigos|Le groupe d’amis|Parta přátel|Grupa przyjaciół|Arkadaş grubu|Die Freundesgruppe|友だちのグループ',
    'a group of five young friends sitting close together on a picnic blanket, laughing, full bodies',
    ['gruppo', 'il gruppo', 'amici', 'gli amici']
  ),

  // --- amici, amore, casa ------------------------------------------------------------------
  person(
    'amico',
    'l’amico / l’amica',
    ['Sara è la mia amica del cuore.', 'Stasera ceno con un amico.', 'Ho tanti amici in Italia.'],
    '|The friend|El amigo / la amiga|L’ami / l’amie|Kamarád / kamarádka, přítel|Przyjaciel / przyjaciółka, kolega / koleżanka|Arkadaş|Der Freund / die Freundin|友だち',
    'two women friends of about 30 laughing together, one with her arm around the shoulders of the other',
    ['amici', 'gli amici']
  ),
  person(
    'migliore-amico',
    'il migliore amico / la migliore amica',
    [
      'Giulia è la mia migliore amica da quando avevamo sei anni.',
      'Il mio migliore amico vive a Milano.',
      'Racconto tutto alla mia migliore amica.',
    ],
    '|The best friend|El mejor amigo / la mejor amiga|Le meilleur ami / la meilleure amie|Nejlepší kamarád / nejlepší kamarádka|Najlepszy przyjaciel / najlepsza przyjaciółka|En iyi arkadaş|Der beste Freund / die beste Freundin|親友',
    'two boys of about 10 as best friends doing a special handshake, both laughing, wearing matching friendship bracelets',
    ['amico del cuore', 'l’amico del cuore', 'amica del cuore', 'l’amica del cuore']
  ),
  person(
    'fidanzato',
    'il fidanzato / la fidanzata',
    [
      'Il fidanzato di Marta si chiama Luca.',
      'La mia fidanzata è spagnola.',
      'Si sono fidanzati e l’anno prossimo si sposano.',
    ],
    '|The boyfriend / the girlfriend, the fiancé / the fiancée|El novio / la novia|Le fiancé / la fiancée, le copain / la copine|Snoubenec / snoubenka, přítel / přítelkyně|Narzeczony / narzeczona|Nişanlı, sevgili|Der Verlobte / die Verlobte, der Freund / die Freundin|婚約者、恋人',
    'a young romantic couple, a man and a woman, holding hands and looking lovingly into each other’s eyes, a small red heart-shaped balloon floating above them',
    ['ragazzo', 'il ragazzo', 'ragazza', 'la ragazza']
  ),
  person(
    'vicino-di-casa',
    'il vicino / la vicina di casa',
    [
      'La mia vicina di casa ha tre gatti.',
      'Il vicino mi saluta dal balcone.',
      'I vicini del piano di sopra fanno rumore.',
    ],
    '|The neighbour|El vecino / la vecina|Le voisin / la voisine|Soused / sousedka|Sąsiad / sąsiadka|Komşu|Der Nachbar / die Nachbarin|隣人、近所の人',
    'a friendly woman neighbour leaning over a low garden fence and waving hello, a small house behind her'
  ),
  person(
    'coinquilino',
    'il coinquilino / la coinquilina',
    [
      'Vivo con due coinquilini a Bologna.',
      'La mia coinquilina cucina benissimo.',
      'Il coinquilino non lava mai i piatti!',
    ],
    '|The flatmate, the roommate|El compañero / la compañera de piso|Le colocataire / la colocataire|Spolubydlící|Współlokator / współlokatorka|Ev arkadaşı|Der Mitbewohner / die Mitbewohnerin|ルームメイト',
    'two young flatmates in a small shared kitchen, one washing dishes and the other drying them with a towel, both smiling',
    ['compagno di stanza', 'il compagno di stanza']
  ),

  // --- scuola, lavoro, sport ------------------------------------------------------------------
  person(
    'compagno-di-classe',
    'il compagno / la compagna di classe',
    [
      'La mia compagna di classe mi presta la penna.',
      'Il compagno di classe di Tommaso si chiama Leo.',
      'Faccio i compiti con i compagni di classe.',
    ],
    '|The classmate|El compañero / la compañera de clase|Le / la camarade de classe|Spolužák / spolužačka|Kolega / koleżanka z klasy|Sınıf arkadaşı|Der Klassenkamerad / die Klassenkameradin|クラスメート',
    'two school children of about 10 sitting side by side at the same school desk, one lending a pencil to the other',
    ['compagno', 'il compagno', 'compagna', 'la compagna']
  ),
  person(
    'studente',
    'lo studente / la studentessa',
    ['La studentessa studia in biblioteca.', 'Gli studenti hanno l’esame domani.', 'Sono uno studente di ingegneria.'],
    '|The student|El / la estudiante|L’étudiant / l’étudiante|Student / studentka|Student / studentka|Öğrenci|Der Student / die Studentin|学生',
    'a young female university student carrying a folder and books, a backpack on her shoulders'
  ),
  person(
    'collega',
    'il collega / la collega',
    ['Pranzo con i miei colleghi.', 'La mia collega mi aiuta con il progetto.', 'Il collega di Marco è in ferie.'],
    '|The colleague|El / la colega, el compañero de trabajo|Le / la collègue|Kolega / kolegyně|Kolega / koleżanka z pracy|İş arkadaşı|Der Kollege / die Kollegin|同僚',
    'two office colleagues, a man and a woman, standing and looking at a laptop together, discussing work',
    ['colleghi', 'i colleghi', 'colleghe', 'le colleghe']
  ),
  person(
    'capo',
    'il capo',
    [
      'Il mio capo è molto esigente.',
      'La capa di mia sorella è molto gentile.',
      'Il capo ha organizzato una riunione.',
    ],
    '|The boss|El jefe / la jefa|Le chef, le patron|Šéf / šéfová|Szef / szefowa|Patron|Der Chef / die Chefin|上司',
    'a confident female boss in a smart blazer standing at the head of a meeting table and pointing at a chart on a flip board, two employees listening',
    ['capa', 'la capa', 'direttore', 'il direttore', 'direttrice', 'la direttrice']
  ),
  person(
    'compagno-di-squadra',
    'il compagno / la compagna di squadra',
    [
      'Il mio compagno di squadra ha fatto gol.',
      'Festeggio con le compagne di squadra.',
      'Passo la palla al compagno di squadra.',
    ],
    '|The teammate|El compañero / la compañera de equipo|Le coéquipier / la coéquipière|Spoluhráč / spoluhráčka|Kolega / koleżanka z drużyny|Takım arkadaşı|Der Mannschaftskamerad / die Mannschaftskameradin|チームメイト',
    'two young football players in the same red jersey giving each other a high five on grass, one holding a ball',
    ['compagno', 'il compagno', 'compagna', 'la compagna']
  ),
  person(
    'tifoso',
    'il tifoso / la tifosa',
    ['I tifosi cantano allo stadio.', 'Mia madre è una grande tifosa della Roma.', 'Sei tifoso di calcio?'],
    '|The fan (sports supporter)|El / la hincha, el aficionado|Le supporter, le fan|Fanoušek / fanynka|Kibic / kibicka|Taraftar|Der Fan|サポーター、ファン',
    'an excited male sports fan with face paint and a plain blue and white scarf without any writing, cheering with both arms raised'
  ),

  // --- ospiti e sconosciuti ------------------------------------------------------------------
  person(
    'ospite',
    'l’ospite',
    ['Stasera abbiamo ospiti a cena.', 'L’ospite porta un mazzo di fiori.', 'Sei il benvenuto: sei nostro ospite!'],
    '|The guest|El / la invitado/a, el huésped|L’invité(e), l’hôte|Host|Gość|Misafir|Der Gast|客、ゲスト',
    'a smiling guest standing at an open front door holding a bouquet of flowers and a small gift box, the host opening the door',
    ['invitato', 'l’invitato', 'invitata', 'l’invitata', 'ospiti', 'gli ospiti']
  ),
  person(
    'sconosciuto',
    'lo sconosciuto / la sconosciuta',
    [
      'Non parlare con gli sconosciuti!',
      'Uno sconosciuto mi ha chiesto l’ora.',
      'Sul treno parlo con una sconosciuta.',
    ],
    '|The stranger|El desconocido / la desconocida|L’inconnu / l’inconnue|Cizí člověk, neznámý|Nieznajomy / nieznajoma|Yabancı (tanımadık kişi)|Der / die Fremde, der Unbekannte|知らない人',
    'a man in a raincoat stopping a woman on the street to ask for directions, holding a paper map, the woman looking at him politely but unsure',
    ['estraneo', 'l’estraneo']
  ),

  // --- ruoli di tutti i giorni ---------------------------------------------------------------
  person(
    'cliente',
    'il cliente / la cliente',
    ['Il cliente paga con la carta.', 'La cliente prova un paio di scarpe.', 'In negozio ci sono molti clienti.'],
    '|The customer, the client|El / la cliente|Le client / la cliente|Zákazník / zákaznice|Klient / klientka|Müşteri|Der Kunde / die Kundin|客、顧客',
    'a female customer paying with a card at a shop counter, holding a paper shopping bag, a smiling shop assistant behind the counter'
  ),
  person(
    'turista',
    'il turista / la turista',
    [
      'I turisti fotografano il Colosseo.',
      'Una turista mi chiede dov’è la stazione.',
      'D’estate Venezia è piena di turisti.',
    ],
    '|The tourist|El / la turista|Le / la touriste|Turista / turistka|Turysta / turystka|Turist|Der Tourist / die Touristin|観光客',
    'a male tourist with a sun hat, a camera around his neck, a backpack and a folded city map, looking up amazed'
  ),
  person(
    'passeggero',
    'il passeggero / la passeggera',
    ['I passeggeri salgono sul treno.', 'La passeggera cerca il suo posto.', 'Il passeggero ha perso la valigia.'],
    '|The passenger|El pasajero / la pasajera|Le passager / la passagère|Cestující|Pasażer / pasażerka|Yolcu|Der Passagier / die Passagierin, der / die Reisende|乗客',
    'a female passenger pulling a small suitcase and holding a boarding pass in an airport, a departure gate sign without text in the background'
  ),
  person(
    'pedone',
    'il pedone',
    [
      'Il pedone attraversa sulle strisce.',
      'Le macchine devono fermarsi per i pedoni.',
      'In centro ci sono strade solo per i pedoni.',
    ],
    '|The pedestrian|El peatón|Le piéton / la piétonne|Chodec|Pieszy / piesza|Yaya|Der Fußgänger / die Fußgängerin|歩行者',
    'a man walking across a black and white zebra crossing on a street, seen from the side, full body'
  ),
  person(
    'paziente',
    'il paziente / la paziente',
    ['Il paziente aspetta il dottore.', 'La paziente sta meglio oggi.', 'In sala d’attesa ci sono tre pazienti.'],
    '|The patient|El / la paciente|Le / la patient(e)|Pacient / pacientka|Pacjent / pacjentka|Hasta|Der Patient / die Patientin|患者',
    'an elderly male patient sitting on a hospital bed in a light blue gown, a female nurse in scrubs checking his blood pressure'
  ),
  person(
    'volontario',
    'il volontario / la volontaria',
    [
      'I volontari puliscono la spiaggia.',
      'Faccio la volontaria in un canile.',
      'Cercano volontari per la festa del paese.',
    ],
    '|The volunteer|El voluntario / la voluntaria|Le / la bénévole|Dobrovolník / dobrovolnice|Wolontariusz / wolontariuszka|Gönüllü|Der / die Freiwillige, der Ehrenamtliche|ボランティア',
    'a young female volunteer in a plain green t-shirt without writing and work gloves picking up plastic litter on a beach and putting it into a bag'
  ),
];

/** La parola usata come esempio nei testi dell'esercizio e nella nota. */
export const peopleExampleWord = { bare: 'amico', withArticle: 'l’amico' };

export const peopleTranslationExercises = [
  tr(
    'La mia migliore amica abita vicino a me.',
    'My best friend lives near me.',
    'Mi mejor amiga vive cerca de mí.',
    'Ma meilleure amie habite près de chez moi.',
    'Moje nejlepší kamarádka bydlí blízko mě.',
    'Moja najlepsza przyjaciółka mieszka niedaleko mnie.',
    'En iyi arkadaşım bana yakın oturuyor.',
    'Meine beste Freundin wohnt in meiner Nähe.',
    '親友は私の近くに住んでいます。'
  ),
  tr(
    'In piazza c’è molta gente.',
    'There are a lot of people in the square.',
    'En la plaza hay mucha gente.',
    'Il y a beaucoup de monde sur la place.',
    'Na náměstí je spousta lidí.',
    'Na placu jest dużo ludzi.',
    'Meydanda çok insan var.',
    'Auf dem Platz sind viele Leute.',
    '広場には人がたくさんいます。'
  ),
  tr(
    'Il mio vicino di casa ha un cane.',
    'My neighbour has a dog.',
    'Mi vecino tiene un perro.',
    'Mon voisin a un chien.',
    'Můj soused má psa.',
    'Mój sąsiad ma psa.',
    'Komşumun bir köpeği var.',
    'Mein Nachbar hat einen Hund.',
    '隣の人は犬を飼っています。'
  ),
  tr(
    'Pranzo sempre con i miei colleghi.',
    'I always have lunch with my colleagues.',
    'Siempre como con mis compañeros de trabajo.',
    'Je déjeune toujours avec mes collègues.',
    'Obědvám vždycky s kolegy.',
    'Zawsze jem obiad z kolegami z pracy.',
    'Öğle yemeğini hep iş arkadaşlarımla yerim.',
    'Ich esse immer mit meinen Kollegen zu Mittag.',
    'いつも同僚と昼ご飯を食べます。'
  ),
  tr(
    'Stasera abbiamo tre ospiti a cena.',
    'Tonight we have three guests for dinner.',
    'Esta noche tenemos tres invitados a cenar.',
    'Ce soir, nous avons trois invités à dîner.',
    'Dnes večer máme na večeři tři hosty.',
    'Dziś wieczorem mamy trzech gości na kolacji.',
    'Bu akşam yemeğe üç misafirimiz var.',
    'Heute Abend haben wir drei Gäste zum Abendessen.',
    '今夜は夕食にお客さんが3人来ます。'
  ),
  tr(
    'Non aprire la porta agli sconosciuti.',
    'Don’t open the door to strangers.',
    'No abras la puerta a desconocidos.',
    'N’ouvre pas la porte aux inconnus.',
    'Neotvírej dveře cizím lidem.',
    'Nie otwieraj drzwi nieznajomym.',
    'Kapıyı yabancılara açma.',
    'Mach Fremden nicht die Tür auf.',
    '知らない人にドアを開けてはいけません。'
  ),
  tr(
    'Mia nonna è in pensione da dieci anni.',
    'My grandmother has been retired for ten years.',
    'Mi abuela está jubilada desde hace diez años.',
    'Ma grand-mère est à la retraite depuis dix ans.',
    'Moje babička je v důchodu deset let.',
    'Moja babcia jest na emeryturze od dziesięciu lat.',
    'Büyükannem on yıldır emekli.',
    'Meine Oma ist seit zehn Jahren in Rente.',
    '祖母は10年前から年金生活をしています。'
  ),
  tr(
    'I passeggeri aspettano il treno.',
    'The passengers are waiting for the train.',
    'Los pasajeros esperan el tren.',
    'Les passagers attendent le train.',
    'Cestující čekají na vlak.',
    'Pasażerowie czekają na pociąg.',
    'Yolcular treni bekliyor.',
    'Die Fahrgäste warten auf den Zug.',
    '乗客は電車を待っています。'
  ),
  tr(
    'Il mio compagno di classe è simpatico.',
    'My classmate is nice.',
    'Mi compañero de clase es simpático.',
    'Mon camarade de classe est sympathique.',
    'Můj spolužák je milý.',
    'Mój kolega z klasy jest sympatyczny.',
    'Sınıf arkadaşım çok sevimli.',
    'Mein Klassenkamerad ist nett.',
    'クラスメートは感じがいいです。'
  ),
  tr(
    'Luca è una persona molto gentile.',
    'Luca is a very kind person.',
    'Luca es una persona muy amable.',
    'Luca est une personne très gentille.',
    'Luca je velmi laskavý člověk.',
    'Luca jest bardzo miłą osobą.',
    'Luca çok nazik biri.',
    'Luca ist ein sehr freundlicher Mensch.',
    'ルカはとても親切な人です。'
  ),
];
