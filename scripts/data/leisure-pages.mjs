// Stringhe di pagina della lezione «Il tempo libero» (2026-11-05), kind 'words'.
//
// `note` non e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// si GIOCA a carte, a scacchi, a calcio balilla (giocare a + gioco), ma si SUONA la chitarra (suonare + lo
// strumento, senza preposizione); fare una passeggiata, fare un giro, fare giardinaggio; gli scacchi e le carte
// sono plurali; nel tempo libero. Poi le trappole della lingua dello studente: play / spielen / jouer / hrát /
// grać hanno un verbo solo; tocar = toccare; çalmak e 弾く distinguono gia' come l'italiano...
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { leisureVocabulary } from './leisure-vocabulary.mjs';

const N = leisureVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const leisurePages = {
  it: {
    dir: 'vocabolario',
    slug: 'tempo-libero',
    name: 'Il tempo libero',
    title: 'Il tempo libero: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole del tempo libero in italiano — il concerto, la chitarra, gli scacchi, le carte, il cruciverba, il fumetto, la passeggiata, l’aperitivo… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt: 'Una chitarra appoggiata a una sedia di legno su un terrazzo, al sole del pomeriggio',
    cardText: `${N} parole del tempo libero: la musica, i giochi, gli hobby in casa e le uscite.`,
    note: {
      title: 'Giocare o suonare?',
      body: 'Si <em>gioca</em> a un gioco, con <em>a</em>: <em>gioco a carte</em>, <em>giochiamo a scacchi</em>, <em>giocano a bocce</em>. Uno strumento invece si <em>suona</em>, senza preposizione: <em>suono la chitarra</em>, <em>suona il pianoforte</em>. Molte attività si fanno con <em>fare</em>: <em>fare una passeggiata</em>, <em>fare un giro in bici</em>, <em>fare un picnic</em>, <em>fare giardinaggio</em>, <em>fare il cruciverba</em>. <em>Gli scacchi</em> e <em>le carte</em> sono plurali. Un film o una serie si <em>guarda</em> (o si <em>vede</em>): <em>stasera guardiamo una serie</em>. Si dice <em>nel tempo libero</em>: <em>nel tempo libero leggo</em>. E in Italia due abitudini molto amate: <em>l’aperitivo</em> prima di cena e, d’estate, <em>la sagra</em> del paese.',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-free-time-vocabulary',
    name: 'Free time',
    title: 'Free time | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for free time — the concert, the guitar, chess, cards, the crossword, the comic, the walk, the aperitif… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'A guitar leaning against a wooden chair on a sunny terrace in the afternoon',
    cardText: `${N} free-time words: music, games, hobbies at home and going out.`,
    note: {
      title: `“Play” is two verbs: ${it('giocare')} and ${it('suonare')}`,
      body: `English uses “play” for everything, Italian doesn’t. You ${it('giochi')} a game, with ${it('a')}: ${it('gioco a carte')}, ${it('giochiamo a scacchi')}. You ${it('suoni')} an instrument, with no preposition: ${it('suono la chitarra')}, ${it('suona il pianoforte')}. “Go for a walk” is ${it('fare una passeggiata')}, a bike ride ${it('fare un giro in bici')}, and gardening ${it('fare giardinaggio')}. ${it('Gli scacchi')} (chess) and ${it('le carte')} (cards) are plural. You ${it('guardi')} (or ${it('vedi')}) a series: ${it('stasera guardiamo una serie')}. “In my free time” is ${it('nel tempo libero')}. English words like ${it('il puzzle')}, ${it('il karaoke')} and ${it('il picnic')} are used in Italian, but they get an article and are pronounced the Italian way. And two Italian habits to try: ${it('l’aperitivo')} before dinner and, in summer, ${it('la sagra')}, the village food festival.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-del-tiempo-libre-en-italiano',
    name: 'El tiempo libre',
    title: 'El tiempo libre | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras italianas del tiempo libre — el concierto, la guitarra, el ajedrez, las cartas, el crucigrama, el cómic, el paseo, el aperitivo… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'Una guitarra apoyada en una silla de madera en una terraza, al sol de la tarde',
    cardText: `${N} palabras del tiempo libre: la música, los juegos, las aficiones en casa y las salidas.`,
    note: {
      title: `La guitarra no se ${it('tocca')}: si ${it('suona')}`,
      body: `La trampa más traicionera: «tocar» un instrumento es ${it('suonare')} (${it('suono la chitarra')}), mientras que ${it('toccare')} es solo tocar con la mano. «Jugar» es ${it('giocare')}, con ${it('a')} y casi siempre sin artículo: ${it('gioco a carte')}, ${it('giochiamo a scacchi')}. «El ajedrez» es plural en italiano: ${it('gli scacchi')}; también ${it('le carte')}. «Dar un paseo» es ${it('fare una passeggiata')} y «dar una vuelta en bici» ${it('fare un giro in bici')}. El cómic o el tebeo es ${it('il fumetto')} y el crucigrama ${it('il cruciverba')}, invariable: ${it('i cruciverba')}. El futbolín es ${it('il calcio balilla')} y las bochas ${it('le bocce')}. Una serie se ${it('guarda')}: ${it('stasera guardiamo una serie')}. Y «en mi tiempo libre» es ${it('nel tempo libero')}. Dos costumbres muy italianas: ${it('l’aperitivo')} antes de cenar y, en verano, ${it('la sagra')}, la fiesta gastronómica del pueblo.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-des-loisirs-en-italien',
    name: 'Les loisirs',
    title: 'Les loisirs | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens des loisirs — le concert, la guitare, les échecs, les cartes, les mots croisés, la BD, la promenade, l’apéritif… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Une guitare appuyée contre une chaise en bois sur une terrasse, au soleil de l’après-midi',
    cardText: `${N} mots des loisirs : la musique, les jeux, les passe-temps à la maison et les sorties.`,
    note: {
      title: `« Jouer de » se dit ${it('suonare')}`,
      body: `En français, on « joue à » un jeu et on « joue de » un instrument ; en italien, ce sont deux verbes. On ${it('gioca a')} un jeu : ${it('gioco a carte')}, ${it('giochiamo a scacchi')}. Mais on ${it('suona')} un instrument, sans préposition : ${it('suono la chitarra')} (et non « gioco di chitarra »). Comme en français, ${it('gli scacchi')} (les échecs) et ${it('le carte')} sont au pluriel. « Faire une promenade » se dit ${it('fare una passeggiata')}, une balade à vélo ${it('un giro in bici')}. La BD est ${it('il fumetto')}, les mots croisés ${it('il cruciverba')} (au singulier !), le bricolage ${it('il fai da te')} et le baby-foot ${it('il calcio balilla')}. Une série se ${it('guarda')} et « pendant mon temps libre » se dit ${it('nel tempo libero')}. Deux habitudes italiennes : ${it('l’aperitivo')}, cousin de l’apéro, et en été ${it('la sagra')}, la fête gastronomique du village.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-volny-cas',
    name: 'Volný čas',
    title: 'Volný čas | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o volném čase — koncert, kytara, šachy, karty, křížovka, komiks, procházka, aperitiv… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Kytara opřená o dřevěnou židli na terase v odpoledním slunci',
    cardText: `${N} slov o volném čase: hudba, hry, koníčky doma a výlety ven.`,
    note: {
      title: `„Hrát“ jsou dvě slovesa: ${it('giocare')} a ${it('suonare')}`,
      body: `Česky „hrajete“ šachy i na kytaru, italsky ne. Hry se ${it('giocano')}, s předložkou ${it('a')}: ${it('gioco a carte')}, ${it('giochiamo a scacchi')}. Na hudební nástroj se ${it('suona')}, bez předložky: ${it('suono la chitarra')}, ${it('suona il pianoforte')}. Jako česky jsou ${it('gli scacchi')} (šachy) v množném čísle, stejně jako ${it('le carte')}. „Jít na procházku“ je ${it('fare una passeggiata')} (doslova „udělat procházku“), výlet na kole ${it('fare un giro in bici')}. Křížovka je ${it('il cruciverba')}, komiks ${it('il fumetto')}, kutilství ${it('il fai da te')} a stolní fotbal ${it('il calcio balilla')}. Seriál se ${it('guarda')}: ${it('stasera guardiamo una serie')}. „Ve volném čase“ je ${it('nel tempo libero')}. A dva italské zvyky: ${it('l’aperitivo')} před večeří a v létě ${it('la sagra')}, vesnická slavnost s jídlem.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czas-wolny',
    name: 'Czas wolny',
    title: 'Czas wolny | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o czasie wolnym — koncert, gitara, szachy, karty, krzyżówka, komiks, spacer, aperitif… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Gitara oparta o drewniane krzesło na tarasie w popołudniowym słońcu',
    cardText: `${N} słów o czasie wolnym: muzyka, gry, hobby w domu i wyjścia.`,
    note: {
      title: `„Grać” to dwa czasowniki: ${it('giocare')} i ${it('suonare')}`,
      body: `Po polsku „gra się” w karty i na gitarze, po włosku to dwa czasowniki. W gry się ${it('gioca')}, z przyimkiem ${it('a')} (jak polskie „w”): ${it('gioco a carte')}, ${it('giochiamo a scacchi')}. Na instrumencie się ${it('suona')}, bez przyimka: ${it('suono la chitarra')}, ${it('suona il pianoforte')}. Jak po polsku, ${it('gli scacchi')} (szachy) i ${it('le carte')} są w liczbie mnogiej. „Iść na spacer” to ${it('fare una passeggiata')} („zrobić spacer”), przejażdżka rowerowa ${it('un giro in bici')}. Krzyżówka to ${it('il cruciverba')} (w liczbie mnogiej bez zmian: ${it('i cruciverba')}), komiks ${it('il fumetto')}, majsterkowanie ${it('il fai da te')}, piłkarzyki ${it('il calcio balilla')}. Serial się ${it('guarda')}, a „w wolnym czasie” to ${it('nel tempo libero')}. Dwa włoskie zwyczaje: ${it('l’aperitivo')} przed kolacją i latem ${it('la sagra')}, wiejski festyn z jedzeniem.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-bos-zaman-kelimeleri',
    name: 'Boş zaman',
    title: 'Boş zaman | İtalyanca kelimeler | Italiano con Martin',
    description: `Boş zamanla ilgili ${N} İtalyanca kelime öğrenin — konser, gitar, satranç, iskambil, bulmaca, çizgi roman, yürüyüş, aperatif… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'Öğleden sonra güneşinde bir terasta tahta sandalyeye dayanmış bir gitar',
    cardText: `Boş zaman için ${N} kelime: müzik, oyunlar, evdeki hobiler ve dışarıdaki etkinlikler.`,
    note: {
      title: `Oynamak ${it('giocare')}, çalmak ${it('suonare')}`,
      body: `İyi haber: Türkçe de İtalyanca gibi ayırır. Oyun “oynanır”, ${it('giocare')} + ${it('a')}: ${it('gioco a carte')} (iskambil oynuyorum), ${it('giochiamo a scacchi')}. Çalgı “çalınır”, ${it('suonare')} ve edatsız: ${it('suono la chitarra')} (gitar çalıyorum). Dikkat: “satranç” Türkçede tekil, İtalyancada çoğuldur: ${it('gli scacchi')}; iskambil de ${it('le carte')}. “Yürüyüş yapmak” tıpkı Türkçedeki gibi ${it('fare')} (yapmak) ile kurulur: ${it('fare una passeggiata')}; bisiklet turu ${it('fare un giro in bici')}, bahçecilik ${it('fare giardinaggio')}. Bulmaca ${it('il cruciverba')}, çizgi roman ${it('il fumetto')}, langırt ${it('il calcio balilla')}. Dizi ${it('guardare')} ile izlenir, “boş zamanlarımda” ise ${it('nel tempo libero')}. İki İtalyan alışkanlığı: akşam yemeğinden önce ${it('l’aperitivo')} ve yazın köylerdeki yemek festivali ${it('la sagra')}.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-freizeit',
    name: 'Freizeit',
    title: 'Freizeit | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für die Freizeit — das Konzert, die Gitarre, Schach, Karten, das Kreuzworträtsel, der Comic, der Spaziergang, der Aperitif… — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Eine Gitarre lehnt an einem Holzstuhl auf einer Terrasse in der Nachmittagssonne',
    cardText: `${N} Wörter für die Freizeit: Musik, Spiele, Hobbys zu Hause und Ausflüge.`,
    note: {
      title: `„Spielen“ sind zwei Verben: ${it('giocare')} und ${it('suonare')}`,
      body: `Auf Deutsch „spielt“ man Schach und Gitarre, auf Italienisch nicht. Spiele ${it('si giocano')}, mit ${it('a')}: ${it('gioco a carte')}, ${it('giochiamo a scacchi')}. Ein Instrument ${it('si suona')}, ohne Präposition: ${it('suono la chitarra')}, ${it('suona il pianoforte')}. „Schach“ ist im Italienischen Plural: ${it('gli scacchi')}; ebenso ${it('le carte')}. „Spazieren gehen“ heißt ${it('fare una passeggiata')} (einen Spaziergang „machen“), eine Radtour ${it('un giro in bici')}. Das Kreuzworträtsel ist ${it('il cruciverba')} (im Plural unverändert), der Comic ${it('il fumetto')}, das Heimwerken ${it('il fai da te')} und der Tischkicker ${it('il calcio balilla')}. Eine Serie ${it('si guarda')}, und „in meiner Freizeit“ ist ${it('nel tempo libero')}. Zwei italienische Gewohnheiten: ${it('l’aperitivo')} vor dem Abendessen und im Sommer ${it('la sagra')}, das Dorffest mit Essen.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-free-time-vocabulary',
    name: '余暇',
    title: '余暇 | イタリア語の語彙 | Italiano con Martin',
    description: `コンサート、ギター、チェス、トランプ、クロスワード、漫画、散歩、アペリティーボなど、余暇のイタリア語の単語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '午後の日差しの中、テラスの木の椅子に立てかけられたギター',
    cardText: `余暇の単語 ${N} 語：音楽、ゲーム、家での趣味、お出かけ。`,
    note: {
      title: `「する」は ${it('giocare')}、「弾く」は ${it('suonare')}`,
      body: `日本語と同じように、イタリア語もゲームと楽器で動詞を使い分けます。ゲームは ${it('giocare')} に ${it('a')} をつけて：${it('gioco a carte')}（トランプをする）、${it('giochiamo a scacchi')}（チェスをする）。楽器は「弾く」にあたる ${it('suonare')} で、前置詞はいりません：${it('suono la chitarra')}（ギターを弾く）、${it('suona il pianoforte')}。${it('gli scacchi')}（チェス）と ${it('le carte')}（トランプ）は複数形です。「散歩する」は ${it('fare una passeggiata')}、サイクリングは ${it('fare un giro in bici')}、ガーデニングは ${it('fare giardinaggio')} と、${it('fare')}（する）を使います。クロスワードは ${it('il cruciverba')}、漫画は ${it('il fumetto')}、日曜大工は ${it('il fai da te')}。ドラマは ${it('guardare')}（見る）で、「暇なときに」は ${it('nel tempo libero')}。イタリアらしい習慣として、夕食前の ${it('l’aperitivo')} と、夏の村祭り ${it('la sagra')} があります。`,
    },
  },
};
