// Le parole della lezione di vocabolario «Il tempo libero» (2026-11-05).
//
// Quinto dei temi pratici proposti il 2026-11-02 (Martin: «Sì, il tempo libero»), dopo la salute, i viaggi,
// gli acquisti e il telefono. Quattro gruppi: musica e spettacoli (8: il concerto, la chitarra, la batteria, il
// karaoke, la mostra, la sagra...), giochi (8: gli scacchi, le carte, il cruciverba, il calcio balilla, le
// bocce...), in casa (7: il romanzo, il fumetto, la serie, il fai da te, il giardinaggio...) e fuori casa (6: la
// passeggiata, il giro in bici, il picnic, le giostre, l'aperitivo, il parco giochi). Le parole gia' nella citta'
// (il cinema, il teatro, il museo, il parco), nello sport (le gare, la palestra, la piscina) e nella scuola (il
// libro, la gita) non si ripetono.
//
// Struttura di ogni voce: come phone-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`, `generate-animal-images.mjs --set tempo-libero`
// (LEISURE_STYLE): oggetti ritagliati sul bianco, luoghi come foto rotonde, niente scritte, niente marchi,
// niente chiese o simboli religiosi sugli sfondi, quadri astratti nelle mostre, niente carne nei piatti.

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

const free = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `tempo-libero/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const leisureVocabulary = [
  // --- musica e spettacoli ----------------------------------------------------------------------
  free(
    'concerto',
    'il concerto',
    ['Sabato andiamo a un concerto in piazza.', 'Il concerto comincia alle nove.', 'È stato il concerto più bello della mia vita!'],
    '|The concert|El concierto|Le concert|Koncert|Koncert|Konser|Das Konzert|コンサート',
    'a small band playing on an outdoor stage at night with warm stage lights and a happy crowd seen from behind, cropped into a perfect circle, no words, no logos',
    ['concerti']
  ),
  free(
    'chitarra',
    'la chitarra',
    ['Mio fratello suona la chitarra.', 'Ho imparato a suonare la chitarra da solo.', 'Porta la chitarra alla festa!'],
    '|The guitar|La guitarra|La guitare|Kytara|Gitara|Gitar|Die Gitarre|ギター',
    'a classical wooden acoustic guitar standing upright, product photo, no logo',
    ['chitarre']
  ),
  free(
    'pianoforte',
    'il pianoforte',
    ['Mia figlia studia pianoforte da tre anni.', 'In salotto c’è un vecchio pianoforte.', 'Sai suonare il pianoforte?'],
    '|The piano|El piano|Le piano|Klavír|Pianino, fortepian|Piyano|Das Klavier|ピアノ',
    'a black upright piano with the lid open over the white and black keys, product photo, no logo, no words',
    ['il piano', 'piano', 'pianoforti']
  ),
  free(
    'violino',
    'il violino',
    ['Il violino è uno strumento difficile.', 'Suona il violino in un’orchestra.', 'Il violino è nella sua custodia.'],
    '|The violin|El violín|Le violon|Housle|Skrzypce|Keman|Die Geige|バイオリン',
    'a wooden violin lying with its bow beside it, product photo',
    ['violini']
  ),
  free(
    'batteria',
    'la batteria',
    ['Mio figlio suona la batteria in garage.', 'La batteria fa un rumore incredibile!', 'Chi suona la batteria nel vostro gruppo?'],
    '|The drums, drum kit|La batería|La batterie|Bicí souprava, bicí|Perkusja|Bateri (davul seti)|Das Schlagzeug|ドラム',
    'a complete red drum kit with cymbals and two drumsticks resting on the snare drum, product photo, no logo, no words',
    ['batterie']
  ),
  free(
    'karaoke',
    'il karaoke',
    ['Al karaoke canto sempre la stessa canzone.', 'Facciamo una serata karaoke?', 'Al karaoke mia zia è una star.'],
    '|Karaoke|El karaoke|Le karaoké|Karaoke|Karaoke|Karaoke|Das Karaoke|カラオケ',
    'two laughing friends singing together into microphones at a karaoke evening, dressed modestly, soft coloured lights behind them, no screen text',
    ['karaoke']
  ),
  free(
    'mostra',
    'la mostra',
    ['Al museo c’è una mostra sugli impressionisti.', 'La mostra chiude domenica.', 'Siamo andati a vedere una mostra di fotografia.'],
    '|The exhibition|La exposición|L’exposition|Výstava|Wystawa|Sergi|Die Ausstellung|展覧会',
    'two visitors in a bright white art gallery looking at large colourful modern abstract paintings on the wall, no figures in the paintings, no religious art, no words',
    ['mostre', 'l’esposizione', 'esposizione']
  ),
  free(
    'sagra',
    'la sagra',
    ['In estate ogni paese ha la sua sagra.', 'Andiamo alla sagra del fungo porcino?', 'Alla sagra si mangia sui tavoli lunghi in piazza.'],
    '|The village food festival|La fiesta gastronómica del pueblo|La fête de village (gastronomique)|Vesnická slavnost s jídlem|Wiejski festyn kulinarny|Köy yemek festivali|Das Dorffest (mit Essen)|村の食の祭り',
    'a summer evening food festival in a small Italian village square with long wooden tables full of people eating pasta and vegetables, strings of light bulbs above, cropped into a perfect circle, no church, no bell tower, no religious symbols, no meat, no words',
    ['sagre', 'la festa di paese', 'festa di paese']
  ),
  // --- giochi -----------------------------------------------------------------------------------
  free(
    'scacchi',
    'gli scacchi',
    ['Il nonno mi ha insegnato a giocare a scacchi.', 'Facciamo una partita a scacchi?', 'Gli scacchi sono un gioco antico.'],
    '|Chess|El ajedrez|Les échecs|Šachy|Szachy|Satranç|Das Schach|チェス',
    'a wooden chessboard with a game in progress, the pieces in black and natural wood, seen from a slight angle, product photo',
    ['scacchi', 'la scacchiera', 'scacchiera']
  ),
  free(
    'carte',
    'le carte',
    ['La sera giochiamo a carte con i nonni.', 'Chi mescola le carte?', 'Ho perso a carte, come sempre.'],
    '|(Playing) cards|Las cartas, la baraja|Les cartes (à jouer)|Karty|Karty|İskambil kâğıtları|Die Spielkarten|トランプ',
    'a hand holding a fan of five playing cards, each card showing only one big red heart or black spade or club or diamond symbol in the middle and nothing in the corners, no letters, no numbers, the closed deck beside them, isolated on the white background',
    ['carte', 'le carte da gioco', 'carte da gioco', 'il mazzo', 'mazzo', 'la carta', 'carta']
  ),
  free(
    'gioco-da-tavolo',
    'il gioco da tavolo',
    ['Il sabato sera facciamo un gioco da tavolo.', 'A Natale abbiamo ricevuto un gioco da tavolo nuovo.', 'Questo gioco da tavolo dura tre ore!'],
    '|The board game|El juego de mesa|Le jeu de société|Desková hra|Gra planszowa|Kutu oyunu|Das Brettspiel|ボードゲーム',
    'a family of three laughing around a kitchen table playing a colourful board game with dice and small wooden pieces, no letters on the board',
    ['giochi da tavolo', 'il gioco di società', 'gioco di società']
  ),
  free(
    'puzzle',
    'il puzzle',
    ['Abbiamo finito un puzzle di mille pezzi.', 'Manca un pezzo del puzzle!', 'Ai bambini piacciono i puzzle.'],
    '|The jigsaw puzzle|El puzle, el rompecabezas|Le puzzle|Puzzle, skládačka|Puzzle|Yapboz|Das Puzzle|ジグソーパズル',
    'an almost finished jigsaw puzzle of a sunny landscape with a few loose pieces beside it and a hand placing one piece',
    ['puzzle', 'i puzzle']
  ),
  free(
    'cruciverba',
    'il cruciverba',
    ['Mio padre fa il cruciverba ogni domenica.', 'Non riesco a finire questo cruciverba.', 'Il cruciverba è sull’ultima pagina del giornale.'],
    '|The crossword|El crucigrama|Les mots croisés|Křížovka|Krzyżówka|Bulmaca|Das Kreuzworträtsel|クロスワード',
    'a hand holding a pencil over a printed black and white crossword grid on a folded newspaper page, the squares empty, no letters, no words',
    ['cruciverba', 'i cruciverba', 'le parole crociate', 'parole crociate']
  ),
  free(
    'videogioco',
    'il videogioco',
    ['Mio figlio gioca troppo ai videogiochi.', 'Questo videogioco è bellissimo.', 'Facciamo una partita al videogioco?'],
    '|The video game|El videojuego|Le jeu vidéo|Videohra|Gra wideo|Video oyunu|Das Videospiel|テレビゲーム',
    'two teenage friends on a sofa holding game controllers and laughing, looking at a screen out of the picture, no logos',
    ['videogiochi', 'la console', 'console', 'il gioco', 'gioco']
  ),
  free(
    'calcio-balilla',
    'il calcio balilla',
    ['Al bar c’è il calcio balilla.', 'Facciamo una partita a calcio balilla?', 'Sono imbattibile a calcio balilla!'],
    '|Table football, foosball|El futbolín|Le baby-foot|Stolní fotbal|Piłkarzyki|Langırt|Der Tischkicker|テーブルサッカー',
    'a wooden table football game with red and blue players on metal rods and a small white ball, seen from a slight angle, product photo, no logo, no words',
    ['calciobalilla', 'il biliardino', 'biliardino']
  ),
  free(
    'bocce',
    'le bocce',
    ['I pensionati giocano a bocce nel parco.', 'Le bocce sono un gioco tradizionale italiano.', 'Mio nonno è il campione di bocce del paese.'],
    '|Bocce, bowls|Las bochas, la petanca|Les boules, la pétanque|Boccia, petanque|Bule, gra w bule|Bocce (top oyunu)|Das Boccia|ボッチャ（ボッチェ）',
    'two elderly men smiling and playing bocce on a sandy court in a park, one throwing a ball towards the small target ball, dressed in everyday clothes',
    ['bocce', 'la boccia', 'boccia']
  ),
  // --- in casa ----------------------------------------------------------------------------------
  free(
    'romanzo',
    'il romanzo',
    ['Sto leggendo un romanzo giallo.', 'Il suo primo romanzo è stato un successo.', 'In vacanza leggo almeno tre romanzi.'],
    '|The novel|La novela|Le roman|Román|Powieść|Roman|Der Roman|小説',
    'a young woman curled up in an armchair by a window reading a thick paperback book, a blanket on her legs, the book cover with no words',
    ['romanzi', 'il libro', 'libro']
  ),
  free(
    'fumetto',
    'il fumetto',
    ['Da bambino leggevo i fumetti di Topolino.', 'Questo fumetto è per adulti.', 'Mi presti il tuo fumetto?'],
    '|The comic (book)|El cómic, el tebeo|La bande dessinée, la BD|Komiks|Komiks|Çizgi roman|Der Comic|漫画',
    'an open comic book lying on a table, showing colourful drawn panels with empty white speech balloons and no letters',
    ['fumetti']
  ),
  free(
    'serie',
    'la serie',
    ['Stasera guardiamo una nuova serie.', 'Ho visto tutta la serie in un fine settimana!', 'Qual è la tua serie preferita?'],
    '|The (TV) series, show|La serie|La série|Seriál|Serial|Dizi|Die Serie|ドラマシリーズ',
    'a couple on a sofa in a cosy living room in the evening with a bowl of popcorn, watching a television seen from behind, the screen glowing with no image, no words',
    ['le serie', 'la serie tv', 'serie tv', 'il telefilm', 'telefilm']
  ),
  free(
    'disegno',
    'il disegno',
    ['Il disegno è il mio passatempo preferito.', 'Che bel disegno!', 'Frequento un corso di disegno.'],
    '|Drawing|El dibujo|Le dessin|Kreslení, kresba|Rysunek|Resim çizme|Das Zeichnen, die Zeichnung|絵を描くこと',
    'close view of a hand drawing a pencil sketch of a flower in a sketchbook, a few pencils beside it',
    ['disegni']
  ),
  free(
    'fotografia',
    'la fotografia',
    ['La fotografia è la mia passione.', 'Faccio un corso di fotografia.', 'Ho una mostra di fotografia a maggio.'],
    '|Photography|La fotografía|La photographie|Fotografování|Fotografia|Fotoğrafçılık|Die Fotografie|写真（趣味）',
    'a young man in a park looking through a camera on a tripod, photographing trees, dressed in everyday clothes, no logos',
    ['la foto', 'foto', 'fotografie']
  ),
  free(
    'fai-da-te',
    'il fai da te',
    ['Mio padre è bravissimo nel fai da te.', 'Ho montato la libreria con il fai da te.', 'Nel fine settimana mi dedico al fai da te.'],
    '|DIY, do-it-yourself|El bricolaje|Le bricolage|Kutilství|Majsterkowanie|Kendin yap|Das Heimwerken|日曜大工',
    'a smiling woman in a workshop using a hand drill to put together a small wooden shelf, tools on the workbench beside her, safety glasses on',
    ['fai-da-te', 'il bricolage', 'bricolage']
  ),
  free(
    'giardinaggio',
    'il giardinaggio',
    ['Mia madre adora il giardinaggio.', 'Il giardinaggio mi rilassa.', 'Ho comprato gli attrezzi da giardinaggio.'],
    '|Gardening|La jardinería|Le jardinage|Zahradničení|Ogrodnictwo|Bahçecilik|Die Gartenarbeit|ガーデニング',
    'an older woman kneeling in a sunny garden planting colourful flowers with a small trowel, wearing gardening gloves',
    []
  ),
  // --- fuori casa -------------------------------------------------------------------------------
  free(
    'passeggiata',
    'la passeggiata',
    ['Dopo cena facciamo una passeggiata.', 'La passeggiata sul lungomare è bellissima.', 'Ho bisogno di una passeggiata per rilassarmi.'],
    '|The walk, stroll|El paseo|La promenade|Procházka|Spacer|Yürüyüş|Der Spaziergang|散歩',
    'an elderly couple walking arm in arm along a seaside promenade at sunset, seen from behind, cropped into a perfect circle',
    ['passeggiate', 'il giro', 'giro']
  ),
  free(
    'giro-in-bici',
    'il giro in bici',
    ['Domenica facciamo un giro in bici lungo il fiume.', 'Il giro in bici è durato tre ore.', 'Ti va un giro in bici?'],
    '|The bike ride|El paseo en bici|La balade à vélo|Výlet na kole|Przejażdżka rowerowa|Bisiklet turu|Die Radtour|サイクリング',
    'a family of three riding bicycles along a country path among green fields, wearing helmets, cropped into a perfect circle',
    ['giri in bici', 'il giro in bicicletta', 'giro in bicicletta', 'la gita in bici', 'gita in bici']
  ),
  free(
    'picnic',
    'il picnic',
    ['Facciamo un picnic al lago?', 'Ho preparato i panini per il picnic.', 'Il picnic è saltato per la pioggia.'],
    '|The picnic|El pícnic|Le pique-nique|Piknik|Piknik|Piknik|Das Picknick|ピクニック',
    'a checked picnic blanket on the grass with a wicker basket, fruit, bread, tomatoes and a bottle of water, no meat, no fish, product photo cut-out',
    ['picnic', 'il pic-nic', 'pic-nic']
  ),
  free(
    'giostre',
    'le giostre',
    ['Al luna park andiamo sulle giostre.', 'I bambini vogliono salire su tutte le giostre.', 'La ruota panoramica è la mia giostra preferita.'],
    '|The rides, funfair|Las atracciones, los cacharritos|Les manèges|Kolotoče, pouť|Karuzele, wesołe miasteczko|Lunapark|Das Karussell, der Jahrmarkt|遊園地の乗り物',
    'a colourful carousel with horses and a ferris wheel behind it at an evening funfair with warm lights, cropped into a perfect circle, no words',
    ['la giostra', 'giostra', 'il luna park', 'luna park', 'il lunapark', 'lunapark']
  ),
  free(
    'aperitivo',
    'l’aperitivo',
    ['Ci vediamo per l’aperitivo alle sette?', 'Con l’aperitivo portano olive e patatine.', 'Il venerdì facciamo sempre l’aperitivo con i colleghi.'],
    '|The aperitif, pre-dinner drinks|El aperitivo|L’apéritif, l’apéro|Aperitiv|Aperitif|Aperatif (yemek öncesi içki)|Der Aperitif|アペリティーボ（食前の一杯）',
    'a café table at sunset with two glasses of bright orange non-alcoholic drink with ice and a slice of orange, small bowls of green olives, crisps and tiny tomato bruschette, no meat, no fish, no logos',
    ['aperitivi', 'l’aperitivo', 'aperitivo', 'l’apericena', 'apericena']
  ),
  free(
    'parco-giochi',
    'il parco giochi',
    ['Il pomeriggio porto i bambini al parco giochi.', 'Al parco giochi c’è un nuovo scivolo.', 'Il parco giochi è pieno di bambini.'],
    '|The playground|El parque infantil|L’aire de jeux|Dětské hřiště|Plac zabaw|Çocuk parkı, oyun parkı|Der Spielplatz|公園の遊び場',
    'a colourful playground with a slide, swings and a climbing frame and two children playing, cropped into a perfect circle, no words',
    ['parchi giochi', 'i giardinetti', 'giardinetti']
  ),
];

export const leisureExampleWord = { bare: 'chitarra', withArticle: 'la chitarra' };

export const leisureTranslationExercises = [
  tr(
    'Che cosa fai nel tempo libero?',
    'What do you do in your free time?',
    '¿Qué haces en tu tiempo libre?',
    'Qu’est-ce que tu fais pendant ton temps libre ?',
    'Co děláš ve volném čase?',
    'Co robisz w wolnym czasie?',
    'Boş zamanlarında ne yaparsın?',
    'Was machst du in deiner Freizeit?',
    '暇なときは何をしていますか？'
  ),
  tr(
    'Suono la chitarra e gioco a scacchi.',
    'I play the guitar and I play chess.',
    'Toco la guitarra y juego al ajedrez.',
    'Je joue de la guitare et je joue aux échecs.',
    'Hraju na kytaru a hraju šachy.',
    'Gram na gitarze i gram w szachy.',
    'Gitar çalıyorum ve satranç oynuyorum.',
    'Ich spiele Gitarre und ich spiele Schach.',
    'ギターを弾いて、チェスをします。'
  ),
  tr(
    'Dopo cena facciamo una passeggiata?',
    'Shall we go for a walk after dinner?',
    '¿Damos un paseo después de cenar?',
    'On fait une promenade après le dîner ?',
    'Půjdeme se po večeři projít?',
    'Pójdziemy na spacer po kolacji?',
    'Akşam yemeğinden sonra yürüyüş yapalım mı?',
    'Gehen wir nach dem Abendessen spazieren?',
    '夕食のあと、散歩しませんか？'
  ),
  tr(
    'Ci vediamo per l’aperitivo alle sette.',
    'Let’s meet for an aperitif at seven.',
    'Quedamos para el aperitivo a las siete.',
    'On se retrouve pour l’apéro à sept heures.',
    'Uvidíme se na aperitiv v sedm.',
    'Spotkajmy się na aperitif o siódmej.',
    'Saat yedide aperatif için buluşalım.',
    'Wir treffen uns um sieben zum Aperitif.',
    '7時にアペリティーボで会いましょう。'
  ),
  tr(
    'Stasera c’è un concerto in piazza.',
    'There’s a concert in the square tonight.',
    'Esta noche hay un concierto en la plaza.',
    'Ce soir, il y a un concert sur la place.',
    'Dnes večer je na náměstí koncert.',
    'Dziś wieczorem jest koncert na rynku.',
    'Bu akşam meydanda konser var.',
    'Heute Abend gibt es ein Konzert auf dem Platz.',
    '今夜、広場でコンサートがあります。'
  ),
  tr(
    'Ho visto tutta la serie in un fine settimana.',
    'I watched the whole series in one weekend.',
    'Me vi toda la serie en un fin de semana.',
    'J’ai regardé toute la série en un week-end.',
    'Viděl jsem celý seriál za jeden víkend.',
    'Obejrzałem cały serial w jeden weekend.',
    'Bütün diziyi bir hafta sonunda izledim.',
    'Ich habe die ganze Serie an einem Wochenende geschaut.',
    '週末だけでドラマを全部見ました。'
  ),
  tr(
    'In estate andiamo alla sagra del paese.',
    'In summer we go to the village food festival.',
    'En verano vamos a la fiesta del pueblo.',
    'En été, nous allons à la fête du village.',
    'V létě chodíme na vesnickou slavnost.',
    'Latem chodzimy na festyn we wsi.',
    'Yazın köyün yemek festivaline gidiyoruz.',
    'Im Sommer gehen wir zum Dorffest.',
    '夏は村の祭りに行きます。'
  ),
  tr(
    'Il nonno gioca a bocce con gli amici.',
    'Grandpa plays bocce with his friends.',
    'El abuelo juega a las bochas con sus amigos.',
    'Le grand-père joue aux boules avec ses amis.',
    'Děda hraje s kamarády boccu.',
    'Dziadek gra w bule z przyjaciółmi.',
    'Dede arkadaşlarıyla bocce oynuyor.',
    'Opa spielt mit seinen Freunden Boccia.',
    'おじいさんは友だちとボッチェをします。'
  ),
];
