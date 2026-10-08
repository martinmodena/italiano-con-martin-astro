// Stringhe di pagina della lezione «La scuola» (2026-09-27), kind 'words'.
//
// Campi come in mountain-pages.mjs; `note` spiega «a scuola» senza articolo (all'asilo, all'universita'),
// l'aula contro la classe, i gradi della scuola italiana (elementare, media, liceo, maturita'), i voti da 1 a
// 10, fare i compiti, maestro e professore; rimanda a «La città» (la scuola, la biblioteca), «I mestieri»
// (il maestro, il professore) e «Le persone intorno a noi» (lo studente, il compagno di classe).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { schoolVocabulary } from './school-vocabulary.mjs';
import { cityPages } from './city-pages.mjs';
import { jobPages } from './jobs-pages.mjs';
import { peoplePages } from './people-pages.mjs';

const N = schoolVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;
const link = (pages, lang) => `<a href="/${pages[lang].dir}/${pages[lang].slug}.html">${pages[lang].name}</a>`;
const city = (lang) => link(cityPages, lang);
const jobs = (lang) => link(jobPages, lang);
const people = (lang) => link(peoplePages, lang);

export const schoolPages = {
  it: {
    dir: 'vocabolario',
    slug: 'scuola',
    name: 'La scuola',
    title: 'La scuola: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole della scuola in italiano — l’aula, la lavagna, il banco, l’astuccio, la penna, la gomma, il quaderno, i compiti, la verifica, il voto… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Un banco di scuola in legno con un quaderno aperto, matite colorate e una gomma, davanti a una lavagna verde',
    cardText: `${N} parole per la scuola: l’aula, l’astuccio, la cartella, le lezioni e i voti.`,
    note: {
      title: 'A scuola',
      body: `Si va <em>a scuola</em>, senza articolo, ma <em>all’asilo</em> e <em>all’università</em>. <em>L’aula</em> è la stanza, <em>la classe</em> sono gli alunni: <em>tutta la classe va in gita</em>; <em>la classe</em> è anche l’anno: <em>faccio la terza</em>. In Italia ci sono <em>la scuola elementare</em> (5 anni), <em>la scuola media</em> (3 anni) e <em>le superiori</em>, cioè <em>il liceo</em> o <em>l’istituto</em> (5 anni), che finiscono con <em>la maturità</em>. I voti vanno da 1 a 10 e il 6 è la sufficienza. Si <em>fanno i compiti</em>, si <em>prende un voto</em>, si <em>fa una verifica</em>. All’elementare insegna <em>il maestro</em> o <em>la maestra</em>, dopo <em>il professore</em> o <em>la professoressa</em>. La scuola e la biblioteca sono in ${city('it')}, gli insegnanti in ${jobs('it')}, lo studente e il compagno di classe in ${people('it')}.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-school-vocabulary',
    name: 'School',
    title: 'School | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for school — the classroom, the blackboard, the desk, the pencil case, the pen, the eraser, the exercise book, homework, the test, the mark… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'A wooden school desk with an open notebook, coloured pencils and an eraser, in front of a green chalkboard',
    cardText: `${N} words for school: the classroom, the pencil case, the school bag, lessons and marks.`,
    note: {
      title: it('A scuola'),
      body: `You go ${it('a scuola')} (to school) with no article, but ${it('all’asilo')} (to nursery school) and ${it('all’università')}. ${it('L’aula')} is the room, ${it('la classe')} is the pupils: ${it('tutta la classe va in gita')} (the whole class is going on a trip); ${it('la classe')} is also the year: ${it('faccio la terza')} (I’m in the third year). In Italy there is ${it('la scuola elementare')} (primary school, 5 years), ${it('la scuola media')} (middle school, 3 years) and ${it('le superiori')}, that is ${it('il liceo')} or ${it('l’istituto')} (5 years), which end with ${it('la maturità')}, the final exam. Marks go from 1 to 10, and 6 is a pass. You ${it('fai i compiti')} (do your homework), ${it('prendi un voto')} (get a mark), ${it('fai una verifica')} (take a test). In primary school the teacher is ${it('il maestro')} or ${it('la maestra')}; later, ${it('il professore')} or ${it('la professoressa')}. The school and the library are in ${city('en')}, teachers in ${jobs('en')}, the student and the classmate in ${people('en')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-la-escuela-en-italiano',
    name: 'La escuela',
    title: 'La escuela | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de la escuela en italiano — el aula, la pizarra, el pupitre, el estuche, el bolígrafo, la goma, el cuaderno, los deberes, el examen, la nota… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Un pupitre de madera con un cuaderno abierto, lápices de colores y una goma, delante de una pizarra verde',
    cardText: `${N} palabras para la escuela: el aula, el estuche, la mochila, las clases y las notas.`,
    note: {
      title: it('A scuola'),
      body: `Se va ${it('a scuola')} (a la escuela) sin artículo, pero ${it('all’asilo')} (a la guardería) y ${it('all’università')}. ${it('L’aula')} es la sala, ${it('la classe')} son los alumnos: ${it('tutta la classe va in gita')} (toda la clase va de excursión); ${it('la classe')} es también el curso: ${it('faccio la terza')} (estoy en tercero). En Italia hay ${it('la scuola elementare')} (primaria, 5 años), ${it('la scuola media')} (secundaria inferior, 3 años) y ${it('le superiori')}, es decir ${it('il liceo')} o ${it('l’istituto')} (5 años), que terminan con ${it('la maturità')}, el examen final. Las notas van del 1 al 10, y el 6 es el aprobado. Se ${it('fanno i compiti')} (se hacen los deberes), se ${it('prende un voto')} (se saca una nota), se ${it('fa una verifica')} (se hace un examen). En primaria enseña ${it('il maestro')} o ${it('la maestra')}; después, ${it('il professore')} o ${it('la professoressa')}. La escuela y la biblioteca están en ${city('es')}, los profesores en ${jobs('es')}, el estudiante y el compañero de clase en ${people('es')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-l-ecole-en-italien',
    name: 'L’école',
    title: 'L’école | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens de l’école — la salle de classe, le tableau, le pupitre, la trousse, le stylo, la gomme, le cahier, les devoirs, le contrôle, la note… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Un pupitre en bois avec un cahier ouvert, des crayons de couleur et une gomme, devant un tableau vert',
    cardText: `${N} mots pour l’école : la salle de classe, la trousse, le cartable, les cours et les notes.`,
    note: {
      title: it('A scuola'),
      body: `On va ${it('a scuola')} (à l’école) sans article, mais ${it('all’asilo')} (à l’école maternelle) et ${it('all’università')}. ${it('L’aula')} est la salle, ${it('la classe')} ce sont les élèves : ${it('tutta la classe va in gita')} (toute la classe part en sortie) ; ${it('la classe')} est aussi l’année : ${it('faccio la terza')} (je suis en troisième année). En Italie, il y a ${it('la scuola elementare')} (l’école primaire, 5 ans), ${it('la scuola media')} (le collège, 3 ans) et ${it('le superiori')}, c’est-à-dire ${it('il liceo')} ou ${it('l’istituto')} (5 ans), qui se terminent par ${it('la maturità')}, l’examen final. Les notes vont de 1 à 10, et 6 est la moyenne. On ${it('fa i compiti')} (fait ses devoirs), on ${it('prende un voto')} (a une note), on ${it('fa una verifica')} (passe un contrôle). À l’école primaire enseigne ${it('il maestro')} ou ${it('la maestra')} ; ensuite, ${it('il professore')} ou ${it('la professoressa')}. L’école et la bibliothèque sont dans ${city('fr')}, les enseignants dans ${jobs('fr')}, l’étudiant et le camarade de classe dans ${people('fr')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-skola',
    name: 'Škola',
    title: 'Škola | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o škole — třída, tabule, lavice, penál, pero, guma, sešit, domácí úkoly, písemka, známka… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Dřevěná školní lavice s otevřeným sešitem, pastelkami a gumou před zelenou tabulí',
    cardText: `${N} slov o škole: třída, penál, aktovka, vyučování a známky.`,
    note: {
      title: it('A scuola'),
      body: `Do školy se jde ${it('a scuola')} bez členu, ale do školky ${it('all’asilo')} a na univerzitu ${it('all’università')}. ${it('L’aula')} je místnost, ${it('la classe')} jsou žáci: ${it('tutta la classe va in gita')} (celá třída jede na výlet); ${it('la classe')} je i ročník: ${it('faccio la terza')} (chodím do třetí třídy). V Itálii je ${it('la scuola elementare')} (první stupeň, 5 let), ${it('la scuola media')} (druhý stupeň, 3 roky) a ${it('le superiori')}, tedy ${it('il liceo')} (gymnázium) nebo ${it('l’istituto')} (odborná škola, 5 let), které končí zkouškou ${it('la maturità')}. Známky jsou od 1 do 10 a 6 znamená prospěl. ${it('Si fanno i compiti')} (dělají se úkoly), ${it('si prende un voto')} (dostane se známka), ${it('si fa una verifica')} (píše se písemka). Na prvním stupni učí ${it('il maestro')} nebo ${it('la maestra')}, potom ${it('il professore')} nebo ${it('la professoressa')}. Škola a knihovna jsou v lekci ${city('cs')}, učitelé v lekci ${jobs('cs')}, student a spolužák v lekci ${people('cs')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-szkola',
    name: 'Szkoła',
    title: 'Szkoła | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o szkole — sala lekcyjna, tablica, ławka, piórnik, długopis, gumka, zeszyt, praca domowa, sprawdzian, ocena… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Drewniana ławka szkolna z otwartym zeszytem, kredkami i gumką przed zieloną tablicą',
    cardText: `${N} słów o szkole: sala lekcyjna, piórnik, tornister, lekcje i oceny.`,
    note: {
      title: it('A scuola'),
      body: `Do szkoły idzie się ${it('a scuola')} bez rodzajnika, ale do przedszkola ${it('all’asilo')}, a na uniwersytet ${it('all’università')}. ${it('L’aula')} to sala, ${it('la classe')} to uczniowie: ${it('tutta la classe va in gita')} (cała klasa jedzie na wycieczkę); ${it('la classe')} to też rok nauki: ${it('faccio la terza')} (chodzę do trzeciej klasy). We Włoszech jest ${it('la scuola elementare')} (szkoła podstawowa, 5 lat), ${it('la scuola media')} (szkoła średnia pierwszego stopnia, 3 lata) i ${it('le superiori')}, czyli ${it('il liceo')} albo ${it('l’istituto')} (5 lat), zakończone egzaminem ${it('la maturità')}. Oceny są od 1 do 10, a 6 to ocena dostateczna. ${it('Si fanno i compiti')} (odrabia się lekcje), ${it('si prende un voto')} (dostaje się ocenę), ${it('si fa una verifica')} (pisze się sprawdzian). W szkole podstawowej uczy ${it('il maestro')} albo ${it('la maestra')}, potem ${it('il professore')} albo ${it('la professoressa')}. Szkoła i biblioteka są w lekcji ${city('pl')}, nauczyciele w lekcji ${jobs('pl')}, student i kolega z klasy w lekcji ${people('pl')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-okul-kelimeleri',
    name: 'Okul',
    title: 'Okul | İtalyanca kelimeler | Italiano con Martin',
    description: `Okul için ${N} İtalyanca kelime öğrenin — sınıf, kara tahta, sıra, kalem kutusu, tükenmez kalem, silgi, defter, ödev, yazılı sınav, not… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Yeşil bir kara tahtanın önünde, üzerinde açık bir defter, renkli kalemler ve bir silgi olan ahşap bir okul sırası',
    cardText: `Okul için ${N} kelime: sınıf, kalem kutusu, okul çantası, dersler ve notlar.`,
    note: {
      title: it('A scuola'),
      body: `Okula ${it('a scuola')} diye, artikelsiz gidilir; ama anaokuluna ${it('all’asilo')}, üniversiteye ${it('all’università')} denir. ${it('L’aula')} derslik, yani odadır; ${it('la classe')} ise öğrencilerdir: ${it('tutta la classe va in gita')} (bütün sınıf geziye gidiyor). ${it('La classe')} aynı zamanda sınıf düzeyidir: ${it('faccio la terza')} (üçüncü sınıftayım). İtalya’da ${it('la scuola elementare')} (ilkokul, 5 yıl), ${it('la scuola media')} (ortaokul, 3 yıl) ve ${it('le superiori')}, yani ${it('il liceo')} ya da ${it('l’istituto')} (lise, 5 yıl) vardır; lise ${it('la maturità')} sınavıyla biter. Notlar 1’den 10’a kadardır ve 6 geçer nottur. ${it('Si fanno i compiti')} (ödev yapılır), ${it('si prende un voto')} (not alınır), ${it('si fa una verifica')} (yazılı olunur). İlkokulda ${it('il maestro')} ya da ${it('la maestra')}, sonra ${it('il professore')} ya da ${it('la professoressa')} ders verir. Okul ve kütüphane ${city('tr')} dersinde, öğretmenler ${jobs('tr')} dersinde, öğrenci ve sınıf arkadaşı ${people('tr')} dersinde.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-schule',
    name: 'Die Schule',
    title: 'Die Schule | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für die Schule — das Klassenzimmer, die Tafel, die Schulbank, das Mäppchen, der Kuli, der Radiergummi, das Heft, die Hausaufgaben, die Klassenarbeit, die Note … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Eine hölzerne Schulbank mit einem offenen Heft, Buntstiften und einem Radiergummi vor einer grünen Tafel',
    cardText: `${N} Wörter für die Schule: das Klassenzimmer, das Mäppchen, der Schulranzen, der Unterricht und die Noten.`,
    note: {
      title: it('A scuola'),
      body: `Man geht ${it('a scuola')} (in die Schule) ohne Artikel, aber ${it('all’asilo')} (in den Kindergarten) und ${it('all’università')}. ${it('L’aula')} ist der Raum, ${it('la classe')} sind die Schüler: ${it('tutta la classe va in gita')} (die ganze Klasse macht einen Ausflug); ${it('la classe')} ist auch die Jahrgangsstufe: ${it('faccio la terza')} (ich bin in der dritten Klasse). In Italien gibt es ${it('la scuola elementare')} (Grundschule, 5 Jahre), ${it('la scuola media')} (Mittelschule, 3 Jahre) und ${it('le superiori')}, also ${it('il liceo')} oder ${it('l’istituto')} (5 Jahre), die mit ${it('la maturità')} enden, dem Abitur. Die Noten gehen von 1 bis 10, und die 6 ist „bestanden“ – also umgekehrt als in Deutschland. Man ${it('fa i compiti')} (macht die Hausaufgaben), ${it('prende un voto')} (bekommt eine Note), ${it('fa una verifica')} (schreibt eine Klassenarbeit). In der Grundschule unterrichtet ${it('il maestro')} oder ${it('la maestra')}, danach ${it('il professore')} oder ${it('la professoressa')}. Die Schule und die Bibliothek stehen in ${city('de')}, die Lehrer in ${jobs('de')}, der Student und der Mitschüler in ${people('de')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-school-vocabulary',
    name: '学校',
    title: '学校 | イタリア語の語彙 | Italiano con Martin',
    description: `教室、黒板、机、筆箱、ペン、消しゴム、ノート、宿題、テスト、成績など、学校に関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '緑の黒板の前の木の机。開いたノート、色鉛筆、消しゴムが置いてある',
    cardText: `学校に関する ${N} 語。教室、筆箱、通学かばん、授業、そして成績。`,
    note: {
      title: it('A scuola'),
      body: `学校へは冠詞なしで ${it('a scuola')} と言いますが、幼稚園は ${it('all’asilo')}、大学は ${it('all’università')} です。${it('L’aula')} は部屋としての教室、${it('la classe')} は生徒たちのことです：${it('tutta la classe va in gita')}（クラス全員で遠足に行く）。${it('la classe')} は学年の意味にもなります：${it('faccio la terza')}（3年生です）。イタリアには ${it('la scuola elementare')}（小学校、5年）、${it('la scuola media')}（中学校、3年）、そして ${it('le superiori')}、つまり ${it('il liceo')} または ${it('l’istituto')}（高校、5年）があり、最後に ${it('la maturità')}（卒業試験）があります。成績は1から10までで、6が合格点です。${it('fare i compiti')}（宿題をする）、${it('prendere un voto')}（成績をもらう）、${it('fare una verifica')}（テストを受ける）と言います。小学校で教えるのは ${it('il maestro')} / ${it('la maestra')}、その後は ${it('il professore')} / ${it('la professoressa')} です。学校と図書館はレッスン「${city('ja')}」に、先生は「${jobs('ja')}」に、学生とクラスメートは「${people('ja')}」にあります。`,
    },
  },
};
