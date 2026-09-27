// Le parole della lezione di vocabolario «Lo sport» (2026-09-27).
//
// Quattro gruppi: gli sport (16: il calcio, la pallavolo, il nuoto, la scherma...), i luoghi (6: lo stadio,
// il campo da calcio, la piscina, la pista, lo spogliatoio, la tribuna), l'attrezzatura (14: il pallone, la
// racchetta, il canestro, il casco, la cuffia, il fischietto, la medaglia...) e la gara (9: la partita, la
// squadra, il giocatore, l'arbitro, il gol, il traguardo, il podio...).
//
// Non ripete le parole che hanno gia' una lezione: la palestra (La scuola), l'allenatore (I mestieri), il
// tifoso e il compagno di squadra (Le persone intorno a noi), la bicicletta (La città), gli sci e lo
// snowboard (La montagna), la tuta e i pantaloncini (L'abbigliamento), la rete (Il mare). La nota le collega.
//
// Pubblicata a meta' il 2026-09-27 (18 foto, poi i crediti di OpenRouter sono finiti), completata il
// 2026-09-28 con tutte le 45 parole. `sportWordsAll` e' l'elenco completo (lo usa generate-animal-images.mjs);
// `sportVocabulary`, che fa la pagina, tiene solo le parole con la foto gia' in public/assets/vocabolario/sport/.
//
// Struttura di ogni voce: come school-vocabulary.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set sport`, stile `SPORT_STYLE` (oggetti ritagliati, luoghi e scene come foto
// rotonde).

import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tr } from './traits-base.mjs';

const assetsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../public/assets/vocabolario');

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

const sport = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `sport/${slug}`,
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

export const sportWordsAll = [
  // --- gli sport ----------------------------------------------------------------------------
  sport(
    'calcio',
    'il calcio',
    [
      'Il calcio è lo sport più seguito in Italia.',
      'Il sabato gioco a calcio con i colleghi.',
      'Mio figlio va a calcio due volte alla settimana.',
    ],
    '|Football, soccer|El fútbol|Le football|Fotbal|Piłka nożna|Futbol|Der Fußball|サッカー',
    `${ROUND} a young man kicking a classic black and white football on green grass, mid-kick, in a plain sports shirt and shorts`,
    ['pallone', 'football']
  ),
  sport(
    'pallavolo',
    'la pallavolo',
    [
      'A scuola giochiamo spesso a pallavolo.',
      'La nazionale italiana di pallavolo è molto forte.',
      'D’estate facciamo una partita di pallavolo sulla spiaggia.',
    ],
    '|Volleyball|El voleibol|Le volley-ball|Volejbal|Siatkówka|Voleybol|Der Volleyball|バレーボール',
    `${ROUND} a young woman jumping at the net to hit a white and blue volleyball in an indoor sports hall`,
    ['volley', 'il volley', 'volley-ball']
  ),
  sport(
    'pallacanestro',
    'la pallacanestro',
    [
      'Mio fratello è alto e gioca a pallacanestro.',
      'La pallacanestro in Italia si chiama anche basket.',
      'Stasera in televisione c’è una partita di pallacanestro.',
    ],
    '|Basketball|El baloncesto|Le basket-ball|Basketbal|Koszykówka|Basketbol|Der Basketball|バスケットボール',
    'a young man jumping to throw an orange basketball towards a basketball hoop with a white net, full body visible',
    ['basket', 'il basket']
  ),
  sport(
    'tennis',
    'il tennis',
    [
      'Il tennis è uno sport per due o per quattro persone.',
      'Gioco a tennis con mia sorella la domenica mattina.',
      'Guardi il torneo di tennis a Roma?',
    ],
    '|Tennis|El tenis|Le tennis|Tenis|Tenis|Tenis|Das Tennis|テニス',
    'a woman in white sports clothes hitting a yellow tennis ball with a tennis racket, full body, dynamic pose',
    []
  ),
  sport(
    'nuoto',
    'il nuoto',
    ['Il nuoto fa bene alla schiena.', 'Faccio nuoto il martedì e il giovedì.', 'Il mio sport preferito è il nuoto.'],
    '|Swimming|La natación|La natation|Plavání|Pływanie|Yüzme|Das Schwimmen|水泳',
    `${ROUND} a swimmer with a blue swimming cap and goggles doing front crawl in a clear blue swimming pool lane`,
    ['nuotare']
  ),
  sport(
    'ciclismo',
    'il ciclismo',
    [
      'Il Giro d’Italia è la gara di ciclismo più famosa del paese.',
      'Mio nonno ha fatto ciclismo per trent’anni.',
      'Il ciclismo è faticoso in salita.',
    ],
    '|Cycling|El ciclismo|Le cyclisme|Cyklistika|Kolarstwo|Bisiklet sporu|Der Radsport|自転車競技',
    'a cyclist in a helmet and cycling clothes riding a racing bike, seen from the side, full body and full bike visible',
    ['bici', 'la bici']
  ),
  sport(
    'corsa',
    'la corsa',
    [
      'La mattina presto vado a fare una corsa nel parco.',
      'Dopo la corsa bevo tanta acqua.',
      'La corsa è lo sport più semplice: bastano le scarpe.',
    ],
    '|Running|Correr, el running|La course à pied|Běh|Bieganie|Koşu|Das Laufen|ランニング',
    'a smiling woman jogging in running clothes and running shoes, full body, one foot in the air, seen from the side',
    ['correre', 'running', 'il running', 'jogging', 'il jogging']
  ),
  sport(
    'ginnastica',
    'la ginnastica',
    [
      'Ogni mattina faccio dieci minuti di ginnastica.',
      'A scuola abbiamo due ore di ginnastica alla settimana.',
      'La ginnastica artistica è molto difficile.',
    ],
    '|Gymnastics, exercise|La gimnasia|La gymnastique|Gymnastika, cvičení|Gimnastyka|Jimnastik|Die Gymnastik, das Turnen|体操',
    'a young female gymnast in a leotard doing a graceful split leap in the air, full body, arms stretched out',
    ['ginnastica artistica', 'educazione fisica', 'l’educazione fisica']
  ),
  sport(
    'pugilato',
    'il pugilato',
    [
      'Il pugilato è uno sport di combattimento.',
      'In palestra c’è un corso di pugilato per principianti.',
      'Il pugilato insegna la disciplina.',
    ],
    '|Boxing|El boxeo|La boxe|Box|Boks|Boks|Das Boxen|ボクシング',
    'a woman in red boxing gloves training with a hanging punching bag, full body, concentrated face',
    ['boxe', 'la boxe']
  ),
  sport(
    'yoga',
    'lo yoga',
    [
      'Lo yoga mi aiuta a rilassarmi.',
      'Faccio yoga in soggiorno con un video.',
      'Il corso di yoga comincia alle sette di sera.',
    ],
    '|Yoga|El yoga|Le yoga|Jóga|Joga|Yoga|Das Yoga|ヨガ',
    'a calm woman doing a yoga tree pose, standing on one leg on a purple yoga mat, hands joined above her head, full body',
    []
  ),
  sport(
    'scherma',
    'la scherma',
    [
      'L’Italia ha vinto tante medaglie nella scherma.',
      'Nella scherma si usa la spada.',
      'Mia figlia fa scherma da tre anni.',
    ],
    '|Fencing|La esgrima|L’escrime|Šerm|Szermierka|Eskrim|Das Fechten|フェンシング',
    'two fencers in white fencing suits and mesh masks facing each other with their foils touching, full body, side view',
    []
  ),
  sport(
    'rugby',
    'il rugby',
    [
      'Il pallone da rugby non è rotondo.',
      'Nel rugby si passa la palla all’indietro.',
      'Il Sei Nazioni è un torneo di rugby.',
    ],
    '|Rugby|El rugby|Le rugby|Ragby|Rugby|Ragbi|Das Rugby|ラグビー',
    'a rugby player in a striped jersey running with an oval rugby ball held under his arm on grass, full body',
    []
  ),
  sport(
    'golf',
    'il golf',
    [
      'Mio zio gioca a golf in pensione.',
      'Il golf si gioca su un grande prato.',
      'A golf bisogna essere molto precisi.',
    ],
    '|Golf|El golf|Le golf|Golf|Golf|Golf|Das Golf|ゴルフ',
    'an older man swinging a golf club on a green golf course, full body, a white golf ball on the grass',
    []
  ),
  sport(
    'equitazione',
    'l’equitazione',
    [
      'L’equitazione è uno sport con il cavallo.',
      'Faccio equitazione in campagna.',
      'Per l’equitazione serve un casco.',
    ],
    '|Horse riding|La equitación|L’équitation|Jezdectví|Jeździectwo|Binicilik|Das Reiten|乗馬',
    'a young woman in a riding helmet riding a brown horse at a gentle trot, side view, full horse and rider visible',
    ['cavallo', 'andare a cavallo']
  ),
  sport(
    'pattinaggio',
    'il pattinaggio',
    [
      'D’inverno facciamo pattinaggio sul ghiaccio in piazza.',
      'Il pattinaggio artistico è elegante.',
      'Per il pattinaggio servono i pattini.',
    ],
    '|Skating|El patinaje|Le patinage|Bruslení|Łyżwiarstwo|Paten kayma|Das Eislaufen|スケート',
    'a figure skater in a light blue dress gliding on one skate on white ice, arms open, full body',
    ['pattinaggio sul ghiaccio', 'pattini', 'i pattini', 'pattinare']
  ),
  sport(
    'ping-pong',
    'il ping pong',
    [
      'In oratorio c’è un tavolo da ping pong.',
      'Il ping pong si chiama anche tennis da tavolo.',
      'Facciamo una partita a ping pong?',
    ],
    '|Table tennis, ping-pong|El ping-pong, el tenis de mesa|Le ping-pong|Stolní tenis|Tenis stołowy|Masa tenisi|Das Tischtennis|卓球',
    'a green table tennis table with a white net in the middle, two red paddles and a small white ball on it',
    ['ping-pong', 'pingpong', 'tennis da tavolo', 'il tennis da tavolo', 'tennistavolo']
  ),

  // --- i luoghi -----------------------------------------------------------------------------
  sport(
    'stadio',
    'lo stadio',
    [
      'Domenica andiamo allo stadio a vedere la partita.',
      'Lo stadio di Milano si chiama San Siro.',
      'Lo stadio era pieno: sessantamila persone.',
    ],
    '|The stadium|El estadio|Le stade|Stadion|Stadion|Stadyum|Das Stadion|スタジアム',
    `${ROUND} a large football stadium seen from above, the green pitch in the middle and full colourful stands all around`,
    ['stadi']
  ),
  sport(
    'campo',
    'il campo da calcio',
    [
      'Il campo da calcio è dietro la scuola.',
      'I giocatori entrano in campo.',
      'Dopo la pioggia il campo è pieno di fango.',
    ],
    '|The football pitch|El campo de fútbol|Le terrain de football|Fotbalové hřiště|Boisko piłkarskie|Futbol sahası|Der Fußballplatz|サッカー場',
    `${ROUND} an empty green football pitch seen from above with white lines, the centre circle and the two goals`,
    ['campo', 'il campo', 'campo sportivo', 'il campo sportivo', 'campetto']
  ),
  sport(
    'piscina',
    'la piscina',
    [
      'La piscina comunale apre alle otto.',
      'In piscina bisogna mettere la cuffia.',
      'L’albergo ha una piscina all’aperto.',
    ],
    '|The swimming pool|La piscina|La piscine|Bazén|Basen|Yüzme havuzu|Das Schwimmbad|プール',
    `${ROUND} an empty indoor swimming pool with clear blue water, lane ropes and a starting block`,
    ['piscine']
  ),
  sport(
    'pista',
    'la pista',
    [
      'Gli atleti corrono sulla pista.',
      'La pista di atletica è lunga quattrocento metri.',
      'Faccio dieci giri di pista.',
    ],
    '|The running track|La pista|La piste|Běžecká dráha|Bieżnia|Koşu pisti|Die Laufbahn|陸上トラック',
    `${ROUND} a red athletics running track with white lane lines curving around a green field, no people`,
    ['pista di atletica', 'la pista di atletica', 'pista d’atletica', 'piste']
  ),
  sport(
    'spogliatoio',
    'lo spogliatoio',
    [
      'Ci cambiamo nello spogliatoio.',
      'Ho lasciato l’asciugamano nello spogliatoio.',
      'Alla fine del primo tempo la squadra torna nello spogliatoio.',
    ],
    '|The changing room|El vestuario|Le vestiaire|Šatna|Szatnia|Soyunma odası|Die Umkleidekabine|更衣室',
    `${ROUND} a clean sports changing room with a long wooden bench, grey lockers and a few sports bags, no people`,
    ['spogliatoi']
  ),
  sport(
    'tribuna',
    'la tribuna',
    [
      'I genitori guardano la gara dalla tribuna.',
      'Abbiamo i biglietti per la tribuna centrale.',
      'In tribuna fa freddo: porta una sciarpa.',
    ],
    '|The stand, the grandstand|La tribuna, las gradas|La tribune, les gradins|Tribuna|Trybuna|Tribün|Die Tribüne|観客席',
    `${ROUND} a stand of a small stadium with rows of seats and cheering spectators waving scarves`,
    ['spalti', 'gli spalti', 'gradinata', 'la gradinata', 'tribune']
  ),

  // --- l'attrezzatura -----------------------------------------------------------------------
  sport(
    'pallone',
    'il pallone',
    [
      'I bambini giocano con il pallone in cortile.',
      'Il pallone è finito nel giardino dei vicini.',
      'Per giocare a calcio basta un pallone.',
    ],
    '|The ball (football)|El balón|Le ballon|Míč|Piłka|Top|Der Ball|ボール',
    'a classic black and white football on a white background',
    ['palla', 'la palla', 'palloni']
  ),
  sport(
    'racchetta',
    'la racchetta',
    [
      'Mi hanno regalato una racchetta nuova.',
      'La racchetta da tennis ha le corde.',
      'Tieni la racchetta con la mano destra.',
    ],
    '|The racket|La raqueta|La raquette|Raketa|Rakieta|Raket|Der Schläger|ラケット',
    'a tennis racket with a blue frame and white strings, lying diagonally, with a yellow tennis ball next to it',
    ['racchette']
  ),
  sport(
    'canestro',
    'il canestro',
    ['Il canestro è a tre metri da terra.', 'Ha fatto canestro all’ultimo secondo!', 'Nel cortile c’è un canestro.'],
    '|The basket, the hoop|La canasta, el aro|Le panier|Koš|Kosz|Pota|Der Korb|バスケットゴール',
    'a basketball hoop with an orange ring, a white net and a white backboard, with an orange basketball going in',
    ['canestri']
  ),
  sport(
    'casco',
    'il casco',
    ['In bicicletta metto sempre il casco.', 'Il casco protegge la testa.', 'Il bambino ha un casco rosso.'],
    '|The helmet|El casco|Le casque|Helma, přilba|Kask|Kask|Der Helm|ヘルメット',
    'a light blue bicycle helmet with air vents, seen from the side',
    ['caschi']
  ),
  sport(
    'cuffia',
    'la cuffia',
    ['In piscina è obbligatoria la cuffia.', 'La mia cuffia è gialla.', 'Senza cuffia non puoi entrare in acqua.'],
    '|The swimming cap|El gorro de natación|Le bonnet de bain|Koupací čepice|Czepek pływacki|Bone (yüzücü bonesi)|Die Badekappe|水泳帽',
    'a bright yellow silicone swimming cap on a white background, seen from the side',
    ['cuffia da piscina', 'cuffie']
  ),
  sport(
    'occhialini',
    'gli occhialini',
    [
      'Con gli occhialini vedo bene sott’acqua.',
      'Ho dimenticato gli occhialini a casa.',
      'Gli occhialini mi lasciano il segno sul viso.',
    ],
    '|The swimming goggles|Las gafas de natación|Les lunettes de natation|Plavecké brýle|Okularki pływackie|Yüzücü gözlüğü|Die Schwimmbrille|ゴーグル',
    'a pair of blue swimming goggles with a black strap',
    ['occhialini da nuoto', 'occhiali', 'occhialino']
  ),
  sport(
    'scarpe-da-ginnastica',
    'le scarpe da ginnastica',
    [
      'Per correre servono buone scarpe da ginnastica.',
      'Mi metto le scarpe da ginnastica ed esco.',
      'Le mie scarpe da ginnastica sono bianche.',
    ],
    '|The trainers, sneakers|Las zapatillas de deporte|Les baskets, les chaussures de sport|Tenisky, sportovní boty|Buty sportowe|Spor ayakkabısı|Die Turnschuhe|スニーカー、運動靴',
    'a pair of white and grey running shoes without any logo',
    ['scarpe sportive', 'le scarpe sportive', 'scarpe', 'le scarpe', 'scarpe da corsa', 'sneakers']
  ),
  sport(
    'fischietto',
    'il fischietto',
    [
      'L’arbitro ha un fischietto.',
      'Al suono del fischietto la partita comincia.',
      'L’allenatore usa il fischietto durante l’allenamento.',
    ],
    '|The whistle|El silbato|Le sifflet|Píšťalka|Gwizdek|Düdük|Die Pfeife|ホイッスル',
    'a shiny silver metal sports whistle with a red cord',
    ['fischio', 'fischietti']
  ),
  sport(
    'cronometro',
    'il cronometro',
    [
      'L’allenatore guarda il cronometro.',
      'Con il cronometro misuro quanto tempo ci metto.',
      'Ha fatto i cento metri in dodici secondi: l’ho visto sul cronometro.',
    ],
    '|The stopwatch|El cronómetro|Le chronomètre|Stopky|Stoper|Kronometre|Die Stoppuhr|ストップウォッチ',
    'a round silver sports stopwatch with a black dial, seen from the front',
    ['cronometri']
  ),
  sport(
    'pesi',
    'i pesi',
    [
      'In palestra alzo i pesi.',
      'Questi pesi sono troppo pesanti per me.',
      'Ho comprato due pesi da tre chili per casa.',
    ],
    '|The weights, dumbbells|Las pesas, las mancuernas|Les haltères, les poids|Činky|Ciężarki, hantle|Ağırlıklar, dambıl|Die Hanteln, die Gewichte|ダンベル、ウエイト',
    'a pair of black dumbbells lying on the floor, side by side',
    ['peso', 'il peso', 'manubri', 'i manubri', 'manubrio', 'il manubrio']
  ),
  sport(
    'tappetino',
    'il tappetino',
    [
      'Srotolo il tappetino e comincio gli esercizi.',
      'Il tappetino da yoga è viola.',
      'Porta il tuo tappetino al corso.',
    ],
    '|The mat (exercise mat)|La esterilla|Le tapis (de sol)|Podložka na cvičení|Mata do ćwiczeń|Egzersiz matı|Die Gymnastikmatte|ヨガマット',
    'a rolled-up purple yoga mat, partly unrolled on the floor',
    ['tappetino da yoga', 'tappetini', 'materassino', 'il materassino']
  ),
  sport(
    'guantoni',
    'i guantoni',
    ['Prima dell’allenamento metto i guantoni.', 'I guantoni da boxe sono imbottiti.', 'Mi presti i tuoi guantoni?'],
    '|The boxing gloves|Los guantes de boxeo|Les gants de boxe|Boxerské rukavice|Rękawice bokserskie|Boks eldiveni|Die Boxhandschuhe|ボクシンググローブ',
    'a pair of red boxing gloves tied together by their white laces',
    ['guantoni da boxe', 'guantone', 'guanti', 'i guanti']
  ),
  sport(
    'medaglia',
    'la medaglia',
    [
      'Ha vinto la medaglia d’oro alle Olimpiadi.',
      'Tutti i bambini della gara ricevono una medaglia.',
      'Tengo le mie medaglie in un cassetto.',
    ],
    '|The medal|La medalla|La médaille|Medaile|Medal|Madalya|Die Medaille|メダル',
    'a shiny gold medal with a red, white and green ribbon, without any writing',
    ['medaglie', 'medaglia d’oro']
  ),
  sport(
    'coppa',
    'la coppa',
    ['La squadra alza la coppa.', 'La coppa è sulla mensola del bar.', 'Quest’anno vogliamo vincere la coppa.'],
    '|The cup, the trophy|La copa, el trofeo|La coupe, le trophée|Pohár|Puchar|Kupa|Der Pokal|トロフィー、優勝カップ',
    'a shiny golden trophy cup with two handles on a small black base, without any writing',
    ['trofeo', 'il trofeo', 'coppe']
  ),

  // --- la gara ------------------------------------------------------------------------------
  sport(
    'partita',
    'la partita',
    [
      'La partita comincia alle otto e mezza.',
      'Abbiamo vinto la partita tre a uno.',
      'Guardiamo la partita insieme al bar?',
    ],
    '|The match, the game|El partido|Le match|Zápas|Mecz|Maç|Das Spiel|試合',
    `${ROUND} a football match between a team in red shirts and a team in blue shirts, players running after the ball on the pitch`,
    ['partite', 'match']
  ),
  sport(
    'squadra',
    'la squadra',
    ['La nostra squadra ha undici giocatori.', 'Per che squadra tifi?', 'Lavorare in squadra è più facile.'],
    '|The team|El equipo|L’équipe|Tým, mužstvo|Drużyna|Takım|Die Mannschaft|チーム',
    `${ROUND} a happy amateur football team of young women and men in matching green shirts posing together in two rows on a pitch`,
    ['squadre', 'team']
  ),
  sport(
    'giocatore',
    'il giocatore / la giocatrice',
    [
      'È il giocatore più veloce della squadra.',
      'La giocatrice numero dieci ha segnato due gol.',
      'Ogni squadra di pallavolo ha sei giocatori in campo.',
    ],
    '|The player|El jugador, la jugadora|Le joueur, la joueuse|Hráč, hráčka|Zawodnik, zawodniczka|Oyuncu|Der Spieler, die Spielerin|選手',
    'a smiling young female football player in a yellow shirt with the number 10, holding a football under her arm, full body',
    ['giocatori', 'giocatrici']
  ),
  sport(
    'arbitro',
    'l’arbitro / l’arbitra',
    [
      'L’arbitro fischia la fine della partita.',
      'Non è colpa dell’arbitro se abbiamo perso!',
      'L’arbitra mostra il cartellino giallo.',
    ],
    '|The referee|El árbitro, la árbitra|L’arbitre|Rozhodčí|Sędzia|Hakem|Der Schiedsrichter, die Schiedsrichterin|審判',
    'a smiling football referee in a black shirt holding up a yellow card, a whistle hanging on a cord around the neck, upper body',
    ['arbitri', 'arbitra']
  ),
  sport(
    'atleta',
    'l’atleta',
    [
      'L’atleta si allena ogni giorno.',
      'Gli atleti entrano nello stadio con la bandiera.',
      'Lei è un’atleta molto conosciuta.',
    ],
    '|The athlete|El/la atleta|L’athlète|Sportovec, sportovkyně|Sportowiec, sportsmenka|Sporcu|Der Athlet, die Athletin|アスリート、選手',
    'a young female athlete in running kit on a running track, crouching in the starting position for a sprint, full body',
    ['atleti', 'atlete', 'sportivo', 'lo sportivo']
  ),
  sport(
    'gol',
    'il gol',
    ['Che gol! La palla è entrata nell’angolo.', 'Ha segnato un gol di testa.', 'Abbiamo perso per un gol.'],
    '|The goal (the score)|El gol|Le but|Gól|Gol, bramka|Gol|Das Tor|ゴール、得点',
    `${ROUND} a football hitting the back of the net inside a goal, the goalkeeper diving in vain`,
    ['goal', 'rete', 'la rete', 'porta', 'la porta']
  ),
  sport(
    'gara',
    'la gara',
    [
      'Domenica c’è una gara di corsa in città.',
      'Mia sorella ha vinto la gara di nuoto.',
      'Prima della gara sono sempre nervoso.',
    ],
    '|The race, the competition|La carrera, la competición|La course, la compétition|Závod|Wyścig, zawody|Yarış|Das Rennen, der Wettkampf|レース、競技',
    `${ROUND} a group of runners in a city road race, running together along a street, seen from the front`,
    ['gare', 'competizione', 'la competizione', 'corsa', 'la corsa']
  ),
  sport(
    'traguardo',
    'il traguardo',
    [
      'Mancano cento metri al traguardo.',
      'È arrivato primo al traguardo.',
      'Al traguardo c’è tanta gente che applaude.',
    ],
    '|The finish line|La meta, la línea de llegada|La ligne d’arrivée|Cíl|Meta|Bitiş çizgisi|Das Ziel|ゴール（決勝線）',
    `${ROUND} a happy runner crossing the finish line of a road race with arms raised, breaking a finish tape`,
    ['arrivo', 'l’arrivo', 'traguardi']
  ),
  sport(
    'podio',
    'il podio',
    [
      'I tre migliori salgono sul podio.',
      'Sul podio c’erano due italiani.',
      'Quest’anno non siamo arrivati sul podio.',
    ],
    '|The podium|El podio|Le podium|Stupně vítězů|Podium|Podyum, kürsü|Das Siegerpodest|表彰台',
    'three smiling athletes on a white winners’ podium with steps of three heights, wearing gold, silver and bronze medals, full body',
    ['podi']
  ),
];

/** Le parole che hanno gia' la foto: sono quelle che vanno in pagina. */
export const sportVocabulary = sportWordsAll.filter((w) => existsSync(path.join(assetsDir, `${w.image}.webp`)));

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const sportExampleWord = { bare: 'tennis', withArticle: 'il tennis' };

export const sportTranslationExercises = [
  tr(
    'Il sabato gioco a calcio con i miei amici.',
    'On Saturdays I play football with my friends.',
    'Los sábados juego al fútbol con mis amigos.',
    'Le samedi, je joue au foot avec mes amis.',
    'V sobotu hraju fotbal s kamarády.',
    'W soboty gram w piłkę z przyjaciółmi.',
    'Cumartesileri arkadaşlarımla futbol oynuyorum.',
    'Samstags spiele ich mit meinen Freunden Fußball.',
    '土曜日は友だちとサッカーをします。'
  ),
  tr(
    'Faccio nuoto due volte alla settimana.',
    'I go swimming twice a week.',
    'Hago natación dos veces por semana.',
    'Je fais de la natation deux fois par semaine.',
    'Chodím plavat dvakrát týdně.',
    'Pływam dwa razy w tygodniu.',
    'Haftada iki kez yüzmeye gidiyorum.',
    'Ich gehe zweimal pro Woche schwimmen.',
    '週に2回水泳をしています。'
  ),
  tr(
    'In piscina bisogna mettere la cuffia.',
    'At the pool you have to wear a swimming cap.',
    'En la piscina hay que ponerse el gorro.',
    'À la piscine, il faut mettre un bonnet de bain.',
    'V bazénu se musí nosit koupací čepice.',
    'Na basenie trzeba założyć czepek.',
    'Havuzda bone takmak zorunlu.',
    'Im Schwimmbad muss man eine Badekappe tragen.',
    'プールでは水泳帽をかぶらなければなりません。'
  ),
  tr(
    'Per che squadra tifi?',
    'Which team do you support?',
    '¿De qué equipo eres?',
    'Tu es supporter de quelle équipe ?',
    'Kterému týmu fandíš?',
    'Komu kibicujesz?',
    'Hangi takımı tutuyorsun?',
    'Für welche Mannschaft bist du?',
    'どのチームを応援していますか？'
  ),
  tr(
    'Abbiamo vinto la partita tre a uno.',
    'We won the match three–one.',
    'Ganamos el partido tres a uno.',
    'Nous avons gagné le match trois à un.',
    'Vyhráli jsme zápas tři jedna.',
    'Wygraliśmy mecz trzy do jednego.',
    'Maçı üç bir kazandık.',
    'Wir haben das Spiel drei zu eins gewonnen.',
    '試合は3対1で勝ちました。'
  ),
  tr(
    'L’arbitro fischia e la partita finisce.',
    'The referee blows the whistle and the match ends.',
    'El árbitro pita y el partido termina.',
    'L’arbitre siffle et le match se termine.',
    'Rozhodčí píská a zápas končí.',
    'Sędzia gwiżdże i mecz się kończy.',
    'Hakem düdüğü çalıyor ve maç bitiyor.',
    'Der Schiedsrichter pfeift, und das Spiel ist aus.',
    '審判が笛を吹いて、試合が終わります。'
  ),
  tr(
    'Mia sorella ha vinto la medaglia d’oro nella gara di nuoto.',
    'My sister won the gold medal in the swimming race.',
    'Mi hermana ganó la medalla de oro en la carrera de natación.',
    'Ma sœur a gagné la médaille d’or à la course de natation.',
    'Moje sestra vyhrála zlatou medaili v plaveckém závodě.',
    'Moja siostra zdobyła złoty medal w zawodach pływackich.',
    'Kız kardeşim yüzme yarışında altın madalya kazandı.',
    'Meine Schwester hat beim Schwimmwettkampf die Goldmedaille gewonnen.',
    '姉は水泳の大会で金メダルを取りました。'
  ),
  tr(
    'Ci cambiamo nello spogliatoio prima dell’allenamento.',
    'We get changed in the changing room before training.',
    'Nos cambiamos en el vestuario antes del entrenamiento.',
    'Nous nous changeons au vestiaire avant l’entraînement.',
    'Před tréninkem se převlékáme v šatně.',
    'Przed treningiem przebieramy się w szatni.',
    'Antrenmandan önce soyunma odasında üstümüzü değiştiriyoruz.',
    'Vor dem Training ziehen wir uns in der Umkleide um.',
    '練習の前に更衣室で着替えます。'
  ),
  tr(
    'Domenica andiamo allo stadio a vedere la partita.',
    'On Sunday we are going to the stadium to watch the match.',
    'El domingo vamos al estadio a ver el partido.',
    'Dimanche, nous allons au stade voir le match.',
    'V neděli jdeme na stadion na zápas.',
    'W niedzielę idziemy na stadion obejrzeć mecz.',
    'Pazar günü maçı izlemek için stadyuma gidiyoruz.',
    'Am Sonntag gehen wir ins Stadion und schauen uns das Spiel an.',
    '日曜日にスタジアムへ試合を見に行きます。'
  ),
  tr(
    'Per correre mi servono delle scarpe da ginnastica nuove.',
    'I need new trainers for running.',
    'Para correr necesito unas zapatillas nuevas.',
    'Pour courir, j’ai besoin de nouvelles baskets.',
    'Na běhání potřebuju nové tenisky.',
    'Do biegania potrzebuję nowych butów sportowych.',
    'Koşmak için yeni spor ayakkabılara ihtiyacım var.',
    'Zum Laufen brauche ich neue Turnschuhe.',
    '走るために新しいスニーカーが必要です。'
  ),
];
