// I verbi della lezione «I verbi della mente e della parola» (2026-11-05).
//
// Ultimo dei temi proposti il 2026-11-02 (Martin: «Sì, i verbi»). Due gruppi: la mente (14: pensare, credere,
// sapere, conoscere, capire, ricordare, dimenticare, immaginare, decidere, sperare, preoccuparsi, accorgersi,
// indovinare, essere d'accordo) e la parola (13: parlare, dire, raccontare, chiedere, rispondere, spiegare,
// discutere, chiacchierare, scherzare, lamentarsi, dire una bugia, stare zitto, sussurrare). Come per gli
// acquisti alcuni verbi si RIPETONO apposta perche' sono il cuore del tema (pensare, ricordare, parlare,
// sussurrare negli animali e nel corpo; capire, rispondere, spiegare nella scuola; chiacchierare nelle
// relazioni), con foto e frasi nuove.
//
// Esercizio come «I verbi della citta'» (`photoRows`): una foto per riga, i verbi nella barra, per ogni foto e'
// giusto il suo verbo piu' quelli di `fits`. Le coppie che una foto sola non distingue (parlare/chiacchierare/
// dire, capire/spiegare, rispondere/sapere) si accettano a vicenda.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`,
// `generate-animal-images.mjs --set verbi-mente`, stile PEOPLE_STYLE: verbi astratti, quindi scene con un
// gesto o un'espressione molto chiari.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const mv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-mente/${slug}`,
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

export const mindVerbs = [
  // --- la mente ---------------------------------------------------------------------------------
  mv(
    'pensare',
    'pensare',
    'Usare la testa per avere idee o per riflettere su qualcosa.',
    ['to think', 'pensar', 'penser', 'myslet', 'myśleć', 'düşünmek', 'denken', '考える'],
    ['Penso spesso alla mia infanzia.', 'Che cosa ne pensi?', 'Ho pensato di cambiare lavoro.'],
    'a young woman sitting at a table with her chin resting on her hand, looking up thoughtfully, a cup of tea in front of her',
    ['immaginare']
  ),
  mv(
    'credere',
    'credere',
    'Pensare che una cosa sia vera, o fidarsi di quello che dice qualcuno.',
    ['to believe', 'creer', 'croire', 'věřit', 'wierzyć', 'inanmak', 'glauben', '信じる'],
    ['Non ci credo!', 'Credo che domani pioverà.', 'Il bambino crede a tutto quello che gli dice il nonno.'],
    'a little girl looking up with complete trust and wonder at her father, who is kneeling and telling her something important',
    ['dire']
  ),
  mv(
    'sapere',
    'sapere',
    'Avere un’informazione in testa, o essere capaci di fare qualcosa.',
    ['to know (a fact), to know how to', 'saber', 'savoir', 'vědět, umět', 'wiedzieć, umieć', 'bilmek', 'wissen, können', '知っている、できる'],
    ['Sai dov’è la stazione?', 'Non so nuotare.', 'Lo sapevo!'],
    'a smiling girl in a classroom raising her hand high and eagerly, sure of the answer, while other pupils think',
    ['rispondere']
  ),
  mv(
    'conoscere',
    'conoscere',
    'Avere già incontrato una persona o visto un luogo.',
    ['to know (a person, a place), to meet', 'conocer', 'connaître', 'znát', 'znać', 'tanımak, bilmek', 'kennen, kennenlernen', '知っている（人・場所）'],
    ['Conosci Marco?', 'Ci siamo conosciuti all’università.', 'Conosco bene Roma.'],
    'two old friends meeting by chance on a street, recognising each other with big surprised smiles and open arms'
  ),
  mv(
    'capire',
    'capire',
    'Riuscire a sapere che cosa vuol dire una cosa.',
    ['to understand', 'entender, comprender', 'comprendre', 'rozumět, pochopit', 'rozumieć', 'anlamak', 'verstehen', 'わかる、理解する'],
    ['Scusa, non ho capito.', 'Capisci l’italiano?', 'Finalmente ho capito l’esercizio!'],
    'a young man at a desk with a book, his face lighting up with sudden understanding, one finger raised as if saying aha',
    ['spiegare']
  ),
  mv(
    'ricordare',
    'ricordare / ricordarsi',
    'Avere ancora in testa una cosa del passato.',
    ['to remember, to remind', 'recordar, acordarse', 'se souvenir, se rappeler', 'pamatovat si', 'pamiętać', 'hatırlamak', 'sich erinnern', '覚えている、思い出す'],
    ['Ti ricordi di me?', 'Ricordo bene quel giorno.', 'Ricordami di comprare il pane.'],
    'an elderly woman sitting on a sofa smiling tenderly at old photographs in an open family album on her lap'
  ),
  mv(
    'dimenticare',
    'dimenticare / dimenticarsi',
    'Non avere più in testa una cosa, non ricordarla.',
    ['to forget', 'olvidar', 'oublier', 'zapomenout', 'zapomnieć', 'unutmak', 'vergessen', '忘れる'],
    ['Ho dimenticato le chiavi!', 'Non dimenticarti di chiamarmi.', 'Dimentico sempre i nomi.'],
    'a dismayed man at the open front door of his flat turning his empty trouser pockets inside out, a big bunch of keys clearly visible on a small table right behind him'
  ),
  mv(
    'immaginare',
    'immaginare',
    'Vedere con la mente una cosa che non c’è.',
    ['to imagine', 'imaginar', 'imaginer', 'představit si', 'wyobrażać sobie', 'hayal etmek', 'sich vorstellen', '想像する'],
    ['Immagina di essere su un’isola.', 'Non riesco a immaginare la mia vita senza di te.', 'Me lo immaginavo più alto.'],
    'a child lying on his back on the grass with hands behind his head, smiling and dreaming while looking at the white clouds',
    ['pensare']
  ),
  mv(
    'decidere',
    'decidere',
    'Scegliere che cosa fare, dopo averci pensato.',
    ['to decide', 'decidir', 'décider', 'rozhodnout se', 'decydować', 'karar vermek', 'entscheiden, sich entscheiden', '決める'],
    ['Hai deciso dove andare in vacanza?', 'Decidi tu!', 'Abbiamo deciso di sposarci.'],
    'a young woman with a backpack standing at a fork in a country path, looking from one path to the other, about to decide'
  ),
  mv(
    'sperare',
    'sperare',
    'Volere che una cosa succeda, senza sapere se succederà.',
    ['to hope', 'esperar (desear)', 'espérer', 'doufat', 'mieć nadzieję', 'ummak', 'hoffen', '望む、期待する'],
    ['Spero di vederti presto.', 'Speriamo che non piova!', 'Spero di sì.'],
    'a girl with her eyes closed and both hands showing crossed fingers held up near her face, hoping'
  ),
  mv(
    'preoccuparsi',
    'preoccuparsi',
    'Avere paura che succeda qualcosa di brutto.',
    ['to worry', 'preocuparse', 's’inquiéter', 'dělat si starosti', 'martwić się', 'endişelenmek', 'sich Sorgen machen', '心配する'],
    ['Non preoccuparti, va tutto bene.', 'Mia madre si preoccupa sempre.', 'Mi sono preoccupato perché non rispondevi.'],
    'a mother standing at a window at night holding her phone, with a worried face, waiting'
  ),
  mv(
    'accorgersi',
    'accorgersi',
    'Vedere o capire all’improvviso una cosa.',
    ['to notice, to realise', 'darse cuenta', 's’apercevoir, se rendre compte', 'všimnout si', 'zauważyć', 'fark etmek', 'bemerken, merken', '気づく'],
    ['Non mi sono accorto di niente.', 'Ti sei accorto che piove?', 'Mi sono accorta dell’errore troppo tardi.'],
    'a young woman in a white shirt suddenly noticing a big coffee stain on it, looking down at it with surprise, a cup in her hand'
  ),
  mv(
    'indovinare',
    'indovinare',
    'Dire la risposta giusta senza saperla.',
    ['to guess', 'adivinar', 'deviner', 'uhodnout', 'zgadnąć', 'tahmin etmek', 'raten', '当てる'],
    ['Indovina chi ho incontrato!', 'Hai indovinato!', 'Prova a indovinare quanti anni ho.'],
    'a smiling blindfolded child touching an apple held out by her mother, trying to guess what it is'
  ),
  mv(
    'essere-d-accordo',
    'essere d’accordo',
    'Pensare la stessa cosa di un’altra persona.',
    ['to agree', 'estar de acuerdo', 'être d’accord', 'souhlasit', 'zgadzać się', 'aynı fikirde olmak', 'einverstanden sein, zustimmen', '賛成する'],
    ['Sono d’accordo con te.', 'Non siamo d’accordo su niente!', 'Siete d’accordo?'],
    'two colleagues at a meeting table smiling, nodding and shaking hands, clearly agreeing, papers with grey lines in front of them'
  ),
  // --- la parola --------------------------------------------------------------------------------
  mv(
    'parlare',
    'parlare',
    'Usare la voce per dire delle cose.',
    ['to speak, to talk', 'hablar', 'parler', 'mluvit', 'mówić, rozmawiać', 'konuşmak', 'sprechen, reden', '話す'],
    ['Parli italiano?', 'Ne parliamo domani.', 'Mio figlio parla tantissimo.'],
    'two women sitting face to face at a café table, one speaking with open hand gestures while the other listens',
    ['chiacchierare', 'dire']
  ),
  mv(
    'dire',
    'dire',
    'Usare le parole per far sapere qualcosa.',
    ['to say, to tell', 'decir', 'dire', 'říct', 'powiedzieć', 'söylemek, demek', 'sagen', '言う'],
    ['Che cosa hai detto?', 'Dimmi la verità.', 'Mi ha detto che arriva alle otto.'],
    'a smiling woman leaning out of an open window of an old building and saying something to her neighbour standing in the street below, her hand cupped by her mouth',
    ['parlare']
  ),
  mv(
    'raccontare',
    'raccontare',
    'Dire con parole una storia o un fatto successo.',
    ['to tell (a story)', 'contar', 'raconter', 'vyprávět', 'opowiadać', 'anlatmak', 'erzählen', '話して聞かせる、語る'],
    ['Il nonno racconta sempre le stesse storie.', 'Raccontami com’è andata!', 'Ti racconto una cosa incredibile.'],
    'a grandfather in an armchair telling a story with wide gestures to two grandchildren sitting on the floor, listening fascinated'
  ),
  mv(
    'chiedere',
    'chiedere',
    'Fare una domanda, o dire a qualcuno che si vuole una cosa.',
    ['to ask', 'preguntar, pedir', 'demander', 'zeptat se, požádat', 'pytać, prosić', 'sormak, istemek', 'fragen, bitten', '尋ねる、頼む'],
    ['Posso chiederti una cosa?', 'Chiedi al cameriere il conto.', 'Mi ha chiesto come stavo.'],
    'a tourist with a small map asking a smiling passer-by for directions on a street, one hand open in a questioning gesture'
  ),
  mv(
    'rispondere',
    'rispondere',
    'Dire qualcosa dopo una domanda.',
    ['to answer, to reply', 'responder, contestar', 'répondre', 'odpovědět', 'odpowiadać', 'cevap vermek', 'antworten', '答える'],
    ['Non mi ha ancora risposto.', 'Rispondi alla domanda!', 'Ho risposto subito al messaggio.'],
    'a young man in a job interview answering a question with confidence, gesturing calmly, the interviewer nodding',
    ['parlare']
  ),
  mv(
    'spiegare',
    'spiegare',
    'Dire una cosa in modo che un altro la capisca.',
    ['to explain', 'explicar', 'expliquer', 'vysvětlit', 'wyjaśniać, tłumaczyć', 'açıklamak', 'erklären', '説明する'],
    ['Mi spieghi come funziona?', 'Il professore spiega benissimo.', 'Ti spiego tutto dopo.'],
    'a woman pointing at a simple diagram of circles and arrows on a whiteboard and explaining it to two attentive adults, no words on the board',
    ['capire']
  ),
  mv(
    'discutere',
    'discutere',
    'Parlare di un argomento con idee diverse, a volte alzando la voce.',
    ['to discuss, to argue', 'discutir', 'discuter, débattre', 'diskutovat, hádat se', 'dyskutować, kłócić się', 'tartışmak', 'diskutieren, streiten', '議論する、言い争う'],
    ['Abbiamo discusso di politica tutta la sera.', 'Non voglio discutere con te.', 'In riunione hanno discusso il nuovo progetto.'],
    'a couple sitting across a kitchen table having a heated but calm discussion, both gesturing with open hands, serious faces'
  ),
  mv(
    'chiacchierare',
    'chiacchierare',
    'Parlare in modo leggero e piacevole, di cose di tutti i giorni.',
    ['to chat', 'charlar', 'bavarder, papoter', 'povídat si, klábosit', 'gawędzić, plotkować', 'sohbet etmek', 'plaudern, quatschen', 'おしゃべりする'],
    ['Abbiamo chiacchierato per ore.', 'Le vicine chiacchierano sul balcone.', 'Smettete di chiacchierare!'],
    'three cheerful neighbours of different ages chatting and laughing on the doorstep of an old building',
    ['parlare']
  ),
  mv(
    'scherzare',
    'scherzare',
    'Dire cose non serie per far ridere.',
    ['to joke, to kid', 'bromear', 'plaisanter, blaguer', 'žertovat', 'żartować', 'şaka yapmak', 'scherzen, Spaß machen', '冗談を言う'],
    ['Stai scherzando?', 'Dai, scherzavo!', 'Con lui si scherza sempre.'],
    'a man telling a joke at a dinner table with a big grin while his friends burst out laughing'
  ),
  mv(
    'lamentarsi',
    'lamentarsi',
    'Dire che una cosa non va bene, che non si è contenti.',
    ['to complain', 'quejarse', 'se plaindre', 'stěžovat si', 'narzekać, skarżyć się', 'şikâyet etmek', 'sich beschweren, klagen', '文句を言う'],
    ['Ti lamenti sempre del tempo!', 'Mi sono lamentato con il direttore.', 'Di che cosa ti lamenti?'],
    'a grumpy elderly man at a restaurant table complaining to a waiter and pointing at his bowl of soup, the waiter listening patiently'
  ),
  mv(
    'dire-una-bugia',
    'dire una bugia',
    'Dire una cosa che non è vera.',
    ['to tell a lie', 'decir una mentira, mentir', 'dire un mensonge, mentir', 'lhát, říct lež', 'kłamać, skłamać', 'yalan söylemek', 'lügen, eine Lüge erzählen', '嘘をつく'],
    ['Non dire bugie!', 'Ho detto una bugia a mia madre.', 'Si vede che stai dicendo una bugia.'],
    'a small boy with chocolate smeared around his mouth shaking his head and saying no, an empty biscuit jar beside him and his mother looking at him with raised eyebrows',
  ),
  mv(
    'stare-zitto',
    'stare zitto',
    'Non parlare, non fare rumore con la voce.',
    ['to be quiet, to keep quiet', 'callarse, estar callado', 'se taire', 'mlčet, být zticha', 'milczeć, być cicho', 'susmak', 'still sein, schweigen', '黙る'],
    ['State zitti, per favore!', 'Sono stato zitto tutta la riunione.', 'Stai zitto e ascolta.'],
    'a kind librarian between bookshelves holding her finger to her lips to ask for silence'
  ),
  mv(
    'sussurrare',
    'sussurrare',
    'Parlare a voce bassissima, all’orecchio.',
    ['to whisper', 'susurrar', 'chuchoter', 'šeptat', 'szeptać', 'fısıldamak', 'flüstern', 'ささやく'],
    ['Mi ha sussurrato un segreto.', 'Al cinema sussurriamo.', 'Perché sussurri?'],
    'a girl cupping her hand to whisper a secret into her friend’s ear, the friend smiling with wide eyes'
  ),
];

export const mindVerbTranslationExercises = [
  tr(
    'Non so dov’è, ma conosco bene il quartiere.',
    'I don’t know where it is, but I know the area well.',
    'No sé dónde está, pero conozco bien el barrio.',
    'Je ne sais pas où c’est, mais je connais bien le quartier.',
    'Nevím, kde to je, ale tu čtvrť znám dobře.',
    'Nie wiem, gdzie to jest, ale dobrze znam okolicę.',
    'Nerede olduğunu bilmiyorum ama mahalleyi iyi tanıyorum.',
    'Ich weiß nicht, wo es ist, aber ich kenne das Viertel gut.',
    'どこにあるかは知りませんが、この辺りはよく知っています。'
  ),
  tr(
    'Scusa, non ho capito: puoi ripetere?',
    'Sorry, I didn’t understand: can you repeat that?',
    'Perdona, no lo he entendido: ¿puedes repetir?',
    'Pardon, je n’ai pas compris : tu peux répéter ?',
    'Promiň, nerozuměl jsem: můžeš to zopakovat?',
    'Przepraszam, nie zrozumiałem: możesz powtórzyć?',
    'Pardon, anlamadım: tekrar eder misin?',
    'Entschuldigung, ich habe es nicht verstanden: Kannst du das wiederholen?',
    'すみません、わかりませんでした。もう一度言ってもらえますか？'
  ),
  tr(
    'Ti ricordi di me? Ci siamo conosciuti a Roma.',
    'Do you remember me? We met in Rome.',
    '¿Te acuerdas de mí? Nos conocimos en Roma.',
    'Tu te souviens de moi ? On s’est rencontrés à Rome.',
    'Pamatuješ si mě? Seznámili jsme se v Římě.',
    'Pamiętasz mnie? Poznaliśmy się w Rzymie.',
    'Beni hatırlıyor musun? Roma’da tanışmıştık.',
    'Erinnerst du dich an mich? Wir haben uns in Rom kennengelernt.',
    '私のことを覚えていますか？ローマで知り合いましたよね。'
  ),
  tr(
    'Ho dimenticato le chiavi a casa.',
    'I’ve left my keys at home.',
    'Me he olvidado las llaves en casa.',
    'J’ai oublié mes clés à la maison.',
    'Zapomněl jsem klíče doma.',
    'Zapomniałem kluczy z domu.',
    'Anahtarlarımı evde unuttum.',
    'Ich habe die Schlüssel zu Hause vergessen.',
    '鍵を家に忘れました。'
  ),
  tr(
    'Mi ha chiesto il numero e gli ho detto di no.',
    'He asked me for my number and I said no.',
    'Me pidió el número y le dije que no.',
    'Il m’a demandé mon numéro et je lui ai dit non.',
    'Požádal mě o číslo a já jsem řekla ne.',
    'Poprosił mnie o numer, a ja powiedziałam, że nie.',
    'Numaramı istedi, ben de hayır dedim.',
    'Er hat mich nach meiner Nummer gefragt, und ich habe Nein gesagt.',
    '彼に番号を聞かれましたが、断りました。'
  ),
  tr(
    'Il nonno ci racconta sempre la stessa storia.',
    'Grandpa always tells us the same story.',
    'El abuelo siempre nos cuenta la misma historia.',
    'Le grand-père nous raconte toujours la même histoire.',
    'Děda nám pořád vypráví ten samý příběh.',
    'Dziadek zawsze opowiada nam tę samą historię.',
    'Dedem bize hep aynı hikâyeyi anlatıyor.',
    'Opa erzählt uns immer dieselbe Geschichte.',
    'おじいさんはいつも同じ話をしてくれます。'
  ),
  tr(
    'Non preoccuparti: stavo scherzando!',
    'Don’t worry: I was joking!',
    'No te preocupes: ¡estaba bromeando!',
    'Ne t’inquiète pas : je plaisantais !',
    'Neboj se: dělal jsem si legraci!',
    'Nie martw się: żartowałem!',
    'Merak etme: şaka yapıyordum!',
    'Keine Sorge: Ich habe nur Spaß gemacht!',
    '心配しないで。冗談だよ！'
  ),
  tr(
    'Sono d’accordo con te, ma non dirlo a nessuno.',
    'I agree with you, but don’t tell anyone.',
    'Estoy de acuerdo contigo, pero no se lo digas a nadie.',
    'Je suis d’accord avec toi, mais ne le dis à personne.',
    'Souhlasím s tebou, ale nikomu to neříkej.',
    'Zgadzam się z tobą, ale nikomu nie mów.',
    'Sana katılıyorum ama kimseye söyleme.',
    'Ich bin deiner Meinung, aber sag es niemandem.',
    'あなたに賛成ですが、誰にも言わないでください。'
  ),
];
