// Stringhe di pagina della lezione «Lo sport» (2026-09-27), kind 'words'.
//
// Campi come in school-pages.mjs; `note` spiega «giocare a» (sport con la palla, senza articolo) contro
// «fare» (nuoto, yoga, sport), in palestra / in piscina / allo stadio, la partita contro la gara, vincere /
// perdere / pareggiare, tifare per, gli Azzurri, il pallone contro la palla; rimanda a «La scuola» (la
// palestra), «I mestieri» (l'allenatore), «Le persone intorno a noi» (il tifoso, il compagno di squadra) e
// «La montagna» (gli sci).
//
// Pubblicata con le sole 18 foto degli sport (vedi sport-vocabulary.mjs): descrizione, tessera e testata a
// collage nominano solo quelle. Quando arrivano le altre foto vanno riscritti `description`, `cardText` e,
// se si fa la testata di qualita', `heroAlt` (e l'alt della tessera negli indici).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { sportVocabulary } from './sport-vocabulary.mjs';
import { schoolPages } from './school-pages.mjs';
import { jobPages } from './jobs-pages.mjs';
import { peoplePages } from './people-pages.mjs';
import { mountainPages } from './mountain-pages.mjs';

const N = sportVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;
const link = (pages, lang) => `<a href="/${pages[lang].dir}/${pages[lang].slug}.html">${pages[lang].name}</a>`;
const school = (lang) => link(schoolPages, lang);
const jobs = (lang) => link(jobPages, lang);
const people = (lang) => link(peoplePages, lang);
const mountain = (lang) => link(mountainPages, lang);

export const sportPages = {
  it: {
    dir: 'vocabolario',
    slug: 'sport',
    name: 'Lo sport',
    title: 'Lo sport: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole dello sport in italiano — il calcio, la pallavolo, il nuoto, il tennis, il ciclismo, la scherma, lo yoga, lo stadio, il campo da calcio… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Un collage di foto sportive: un calciatore, una nuotatrice, un ciclista, una ginnasta, una partita di tennis, un’amazzone a cavallo, due schermidori e una donna che fa yoga',
    cardText: `${N} parole per lo sport: gli sport più praticati, lo stadio e il campo.`,
    note: {
      title: 'Giocare a calcio, fare nuoto',
      body: `Con gli sport con la palla si dice <em>giocare a</em>, senza articolo: <em>gioco a calcio</em>, <em>a tennis</em>, <em>a pallavolo</em>. Con gli altri si dice <em>fare</em>: <em>faccio nuoto</em>, <em>faccio yoga</em>, <em>fa scherma</em>; e in generale <em>fare sport</em>. Si va <em>in palestra</em>, <em>in piscina</em>, ma <em>allo stadio</em>. <em>La partita</em> è fra due squadre o due giocatori (calcio, tennis); <em>la gara</em> è una competizione con tanti atleti (corsa, nuoto, ciclismo). Una partita si <em>vince</em>, si <em>perde</em> o si <em>pareggia</em>: <em>abbiamo vinto tre a uno</em>. Chi guarda <em>tifa per</em> una squadra: <em>per che squadra tifi?</em> La nazionale italiana si chiama anche <em>gli Azzurri</em>, dal colore della maglia. <em>Il pallone</em> è la palla grande del calcio; <em>la palla</em> va bene per tutti gli sport. La palestra è in ${school('it')}, l’allenatore in ${jobs('it')}, il tifoso e il compagno di squadra in ${people('it')}, gli sci e lo snowboard in ${mountain('it')}.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-sports-vocabulary',
    name: 'Sports',
    title: 'Sports | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for sports — football, volleyball, swimming, tennis, cycling, fencing, yoga, the stadium, the football pitch… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'A collage of sports photos: a football player, a swimmer, a cyclist, a gymnast, a tennis player, a horse rider, two fencers and a woman doing yoga',
    cardText: `${N} words for sports: the most popular sports, the stadium and the pitch.`,
    note: {
      title: `${it('Giocare a calcio')}, ${it('fare nuoto')}`,
      body: `With ball sports you say ${it('giocare a')}, with no article: ${it('gioco a calcio')} (I play football), ${it('a tennis')}, ${it('a pallavolo')}. With the others you say ${it('fare')}: ${it('faccio nuoto')} (I swim), ${it('faccio yoga')}, ${it('fa scherma')} (she fences); and in general ${it('fare sport')} (to do sport). You go ${it('in palestra')} (to the gym), ${it('in piscina')} (to the pool), but ${it('allo stadio')} (to the stadium). ${it('La partita')} is between two teams or two players (football, tennis); ${it('la gara')} is a competition with many athletes (running, swimming, cycling). You ${it('vinci')} (win), ${it('perdi')} (lose) or ${it('pareggi')} (draw) a match: ${it('abbiamo vinto tre a uno')} (we won three–one). If you watch, you ${it('tifi per')} a team (support it): ${it('per che squadra tifi?')} (which team do you support?). The Italian national team is also called ${it('gli Azzurri')}, from the colour of the shirt. ${it('Il pallone')} is the big football; ${it('la palla')} works for every sport. The gym is in ${school('en')}, the coach in ${jobs('en')}, the fan and the teammate in ${people('en')}, skis and snowboards in ${mountain('en')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-del-deporte-en-italiano',
    name: 'El deporte',
    title: 'El deporte | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras del deporte en italiano — el fútbol, el voleibol, la natación, el tenis, el ciclismo, la esgrima, el yoga, el estadio, el campo de fútbol… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Un collage de fotos deportivas: un futbolista, una nadadora, un ciclista, una gimnasta, una tenista, una amazona a caballo, dos esgrimistas y una mujer haciendo yoga',
    cardText: `${N} palabras para el deporte: los deportes más practicados, el estadio y el campo.`,
    note: {
      title: `${it('Giocare a calcio')}, ${it('fare nuoto')}`,
      body: `Con los deportes de pelota se dice ${it('giocare a')}, sin artículo: ${it('gioco a calcio')} (juego al fútbol), ${it('a tennis')}, ${it('a pallavolo')}. Con los demás se dice ${it('fare')}: ${it('faccio nuoto')} (hago natación), ${it('faccio yoga')}, ${it('fa scherma')} (hace esgrima); y en general ${it('fare sport')} (hacer deporte). Se va ${it('in palestra')} (al gimnasio), ${it('in piscina')} (a la piscina), pero ${it('allo stadio')} (al estadio). ${it('La partita')} es entre dos equipos o dos jugadores (fútbol, tenis); ${it('la gara')} es una competición con muchos atletas (carrera, natación, ciclismo). Un partido se ${it('vince')} (se gana), se ${it('perde')} (se pierde) o se ${it('pareggia')} (se empata): ${it('abbiamo vinto tre a uno')} (ganamos tres a uno). Quien mira ${it('tifa per')} un equipo (es hincha de él): ${it('per che squadra tifi?')} (¿de qué equipo eres?). La selección italiana también se llama ${it('gli Azzurri')}, por el color de la camiseta. ${it('Il pallone')} es el balón grande del fútbol; ${it('la palla')} sirve para todos los deportes. El gimnasio está en ${school('es')}, el entrenador en ${jobs('es')}, el hincha y el compañero de equipo en ${people('es')}, los esquís y el snowboard en ${mountain('es')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-du-sport-en-italien',
    name: 'Le sport',
    title: 'Le sport | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens du sport — le football, le volley, la natation, le tennis, le cyclisme, l’escrime, le yoga, le stade, le terrain de football… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Un collage de photos de sport : un footballeur, une nageuse, un cycliste, une gymnaste, une joueuse de tennis, une cavalière, deux escrimeurs et une femme qui fait du yoga',
    cardText: `${N} mots pour le sport : les sports les plus pratiqués, le stade et le terrain.`,
    note: {
      title: `${it('Giocare a calcio')}, ${it('fare nuoto')}`,
      body: `Pour les sports de balle, on dit ${it('giocare a')}, sans article : ${it('gioco a calcio')} (je joue au foot), ${it('a tennis')}, ${it('a pallavolo')}. Pour les autres, on dit ${it('fare')} : ${it('faccio nuoto')} (je fais de la natation), ${it('faccio yoga')}, ${it('fa scherma')} (elle fait de l’escrime) ; et en général ${it('fare sport')} (faire du sport). On va ${it('in palestra')} (à la salle de sport), ${it('in piscina')} (à la piscine), mais ${it('allo stadio')} (au stade). ${it('La partita')} oppose deux équipes ou deux joueurs (football, tennis) ; ${it('la gara')} est une compétition avec beaucoup d’athlètes (course, natation, cyclisme). Un match, on le ${it('vince')} (gagne), on le ${it('perde')} (perd) ou on fait match nul : ${it('si pareggia')}. ${it('Abbiamo vinto tre a uno')} (nous avons gagné trois à un). Le spectateur ${it('tifa per')} une équipe (la soutient) : ${it('per che squadra tifi?')} (tu es supporter de quelle équipe ?). L’équipe nationale italienne s’appelle aussi ${it('gli Azzurri')}, d’après la couleur du maillot. ${it('Il pallone')} est le gros ballon du football ; ${it('la palla')} convient à tous les sports. La salle de sport est dans ${school('fr')}, l’entraîneur dans ${jobs('fr')}, le supporter et le coéquipier dans ${people('fr')}, les skis et le snowboard dans ${mountain('fr')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-sport',
    name: 'Sport',
    title: 'Sport | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o sportu — fotbal, volejbal, plavání, tenis, cyklistika, šerm, jóga, stadion, fotbalové hřiště… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Koláž sportovních fotografií: fotbalista, plavkyně, cyklista, gymnastka, tenistka, jezdkyně na koni, dva šermíři a žena cvičící jógu',
    cardText: `${N} slov o sportu: nejoblíbenější sporty, stadion a hřiště.`,
    note: {
      title: `${it('Giocare a calcio')}, ${it('fare nuoto')}`,
      body: `U sportů s míčem se říká ${it('giocare a')}, bez členu: ${it('gioco a calcio')} (hraju fotbal), ${it('a tennis')}, ${it('a pallavolo')}. U ostatních se říká ${it('fare')}: ${it('faccio nuoto')} (plavu), ${it('faccio yoga')}, ${it('fa scherma')} (dělá šerm); a obecně ${it('fare sport')} (sportovat). Chodí se ${it('in palestra')} (do posilovny), ${it('in piscina')} (do bazénu), ale ${it('allo stadio')} (na stadion). ${it('La partita')} se hraje mezi dvěma týmy nebo dvěma hráči (fotbal, tenis); ${it('la gara')} je závod s mnoha sportovci (běh, plavání, cyklistika). Zápas se ${it('vince')} (vyhraje), ${it('perde')} (prohraje) nebo ${it('pareggia')} (remizuje): ${it('abbiamo vinto tre a uno')} (vyhráli jsme tři jedna). Divák ${it('tifa per')} nějaký tým (fandí mu): ${it('per che squadra tifi?')} (kterému týmu fandíš?). Italské reprezentaci se říká i ${it('gli Azzurri')}, podle barvy dresu. ${it('Il pallone')} je velký fotbalový míč; ${it('la palla')} se hodí pro všechny sporty. Tělocvična je v lekci ${school('cs')}, trenér v lekci ${jobs('cs')}, fanoušek a spoluhráč v lekci ${people('cs')}, lyže a snowboard v lekci ${mountain('cs')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-sport',
    name: 'Sport',
    title: 'Sport | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o sporcie — piłka nożna, siatkówka, pływanie, tenis, kolarstwo, szermierka, joga, stadion, boisko piłkarskie… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Kolaż zdjęć sportowych: piłkarz, pływaczka, kolarz, gimnastyczka, tenisistka, amazonka na koniu, dwóch szermierzy i kobieta ćwicząca jogę',
    cardText: `${N} słów o sporcie: najpopularniejsze dyscypliny, stadion i boisko.`,
    note: {
      title: `${it('Giocare a calcio')}, ${it('fare nuoto')}`,
      body: `Przy sportach z piłką mówi się ${it('giocare a')}, bez rodzajnika: ${it('gioco a calcio')} (gram w piłkę nożną), ${it('a tennis')}, ${it('a pallavolo')}. Przy pozostałych mówi się ${it('fare')}: ${it('faccio nuoto')} (pływam), ${it('faccio yoga')}, ${it('fa scherma')} (uprawia szermierkę); a ogólnie ${it('fare sport')} (uprawiać sport). Idzie się ${it('in palestra')} (na siłownię), ${it('in piscina')} (na basen), ale ${it('allo stadio')} (na stadion). ${it('La partita')} to mecz dwóch drużyn albo dwóch zawodników (piłka nożna, tenis); ${it('la gara')} to zawody z wieloma sportowcami (bieg, pływanie, kolarstwo). Mecz się ${it('vince')} (wygrywa), ${it('perde')} (przegrywa) albo ${it('pareggia')} (remisuje): ${it('abbiamo vinto tre a uno')} (wygraliśmy trzy do jednego). Kibic ${it('tifa per')} jakąś drużynę: ${it('per che squadra tifi?')} (komu kibicujesz?). Reprezentację Włoch nazywa się też ${it('gli Azzurri')}, od koloru koszulki. ${it('Il pallone')} to duża piłka do piłki nożnej; ${it('la palla')} pasuje do każdego sportu. Sala gimnastyczna jest w lekcji ${school('pl')}, trener w lekcji ${jobs('pl')}, kibic i kolega z drużyny w lekcji ${people('pl')}, narty i snowboard w lekcji ${mountain('pl')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-spor-kelimeleri',
    name: 'Spor',
    title: 'Spor | İtalyanca kelimeler | Italiano con Martin',
    description: `Spor için ${N} İtalyanca kelime öğrenin — futbol, voleybol, yüzme, tenis, bisiklet, eskrim, yoga, stadyum, futbol sahası… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Spor fotoğraflarından bir kolaj: bir futbolcu, bir yüzücü, bir bisikletçi, bir jimnastikçi, bir tenisçi, at binen bir kadın, iki eskrimci ve yoga yapan bir kadın',
    cardText: `Spor için ${N} kelime: en sevilen sporlar, stadyum ve saha.`,
    note: {
      title: `${it('Giocare a calcio')}, ${it('fare nuoto')}`,
      body: `Topla oynanan sporlar için artikelsiz ${it('giocare a')} denir: ${it('gioco a calcio')} (futbol oynuyorum), ${it('a tennis')}, ${it('a pallavolo')}. Diğerleri için ${it('fare')} kullanılır: ${it('faccio nuoto')} (yüzüyorum), ${it('faccio yoga')}, ${it('fa scherma')} (eskrim yapıyor); genel olarak da ${it('fare sport')} (spor yapmak). ${it('In palestra')} (spor salonuna), ${it('in piscina')} (havuza) gidilir, ama ${it('allo stadio')} (stadyuma) denir. ${it('La partita')} iki takım ya da iki oyuncu arasındaki maçtır (futbol, tenis); ${it('la gara')} birçok sporcunun katıldığı yarıştır (koşu, yüzme, bisiklet). Maç ${it('si vince')} (kazanılır), ${it('si perde')} (kaybedilir) ya da ${it('si pareggia')} (berabere biter): ${it('abbiamo vinto tre a uno')} (üç bir kazandık). İzleyen kişi bir takımı ${it('tifa per')} ile tutar: ${it('per che squadra tifi?')} (hangi takımı tutuyorsun?). İtalya milli takımına formasının renginden dolayı ${it('gli Azzurri')} da denir. ${it('Il pallone')} futbolun büyük topudur; ${it('la palla')} her spor için kullanılır. Spor salonu ${school('tr')} dersinde, antrenör ${jobs('tr')} dersinde, taraftar ve takım arkadaşı ${people('tr')} dersinde, kayaklar ve snowboard ${mountain('tr')} dersinde.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-sport',
    name: 'Der Sport',
    title: 'Der Sport | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für den Sport — Fußball, Volleyball, Schwimmen, Tennis, Radsport, Fechten, Yoga, das Stadion, der Fußballplatz … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Eine Collage aus Sportfotos: ein Fußballspieler, eine Schwimmerin, ein Radfahrer, eine Turnerin, eine Tennisspielerin, eine Reiterin, zwei Fechter und eine Frau beim Yoga',
    cardText: `${N} Wörter für den Sport: die beliebtesten Sportarten, das Stadion und der Platz.`,
    note: {
      title: `${it('Giocare a calcio')}, ${it('fare nuoto')}`,
      body: `Bei Ballsportarten sagt man ${it('giocare a')}, ohne Artikel: ${it('gioco a calcio')} (ich spiele Fußball), ${it('a tennis')}, ${it('a pallavolo')}. Bei den anderen sagt man ${it('fare')}: ${it('faccio nuoto')} (ich schwimme), ${it('faccio yoga')}, ${it('fa scherma')} (sie ficht); und allgemein ${it('fare sport')} (Sport treiben). Man geht ${it('in palestra')} (ins Fitnessstudio), ${it('in piscina')} (ins Schwimmbad), aber ${it('allo stadio')} (ins Stadion). ${it('La partita')} ist ein Spiel zwischen zwei Mannschaften oder zwei Spielern (Fußball, Tennis); ${it('la gara')} ist ein Wettkampf mit vielen Athleten (Laufen, Schwimmen, Radsport). Ein Spiel ${it('si vince')} (gewinnt man), ${it('si perde')} (verliert man) oder ${it('si pareggia')} (endet unentschieden): ${it('abbiamo vinto tre a uno')} (wir haben drei zu eins gewonnen). Wer zuschaut, ${it('tifa per')} eine Mannschaft (ist Fan von ihr): ${it('per che squadra tifi?')} (für welche Mannschaft bist du?). Die italienische Nationalmannschaft heißt auch ${it('gli Azzurri')}, nach der Farbe des Trikots. ${it('Il pallone')} ist der große Fußball; ${it('la palla')} passt zu jeder Sportart. Die Turnhalle steht in ${school('de')}, der Trainer in ${jobs('de')}, der Fan und der Mitspieler in ${people('de')}, die Skier und das Snowboard in ${mountain('de')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-sports-vocabulary',
    name: 'スポーツ',
    title: 'スポーツ | イタリア語の語彙 | Italiano con Martin',
    description: `サッカー、バレーボール、水泳、テニス、自転車競技、フェンシング、ヨガ、スタジアム、サッカー場など、スポーツに関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt:
      'スポーツ写真のコラージュ：サッカー選手、泳ぐ女性、自転車選手、体操選手、テニス選手、馬に乗る女性、二人のフェンシング選手、ヨガをする女性',
    cardText: `スポーツに関する ${N} 語。人気の競技、スタジアム、そしてグラウンド。`,
    note: {
      title: `${it('Giocare a calcio')}、${it('fare nuoto')}`,
      body: `ボールを使うスポーツには冠詞なしで ${it('giocare a')} を使います：${it('gioco a calcio')}（サッカーをする）、${it('a tennis')}、${it('a pallavolo')}。それ以外には ${it('fare')} を使います：${it('faccio nuoto')}（水泳をする）、${it('faccio yoga')}、${it('fa scherma')}（フェンシングをしている）。一般的には ${it('fare sport')}（スポーツをする）と言います。${it('in palestra')}（ジムへ）、${it('in piscina')}（プールへ）と言いますが、スタジアムは ${it('allo stadio')} です。${it('La partita')} は2つのチームや2人の選手の試合（サッカー、テニス）、${it('la gara')} は多くの選手が参加する競技（ランニング、水泳、自転車）です。試合は ${it('si vince')}（勝つ）、${it('si perde')}（負ける）、${it('si pareggia')}（引き分ける）：${it('abbiamo vinto tre a uno')}（3対1で勝った）。観る人はチームを ${it('tifa per')}（応援する）：${it('per che squadra tifi?')}（どのチームを応援しているの？）。イタリア代表はユニフォームの色から ${it('gli Azzurri')} とも呼ばれます。${it('Il pallone')} はサッカーの大きなボール、${it('la palla')} はどのスポーツにも使えます。ジムは「${school('ja')}」、コーチは「${jobs('ja')}」、サポーターとチームメートは「${people('ja')}」、スキーとスノーボードは「${mountain('ja')}」にあります。`,
    },
  },
};
