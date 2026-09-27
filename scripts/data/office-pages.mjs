// Stringhe di pagina della lezione «L'ufficio», rifatta il 2026-09-27 (kind 'words').
//
// Gli slug sono quelli della prima versione (8 parole illustrate): gli URL sono gia' indicizzati.
// `note` spiega «in ufficio» senza articolo, lavorare da casa, essere in riunione, l'email femminile, il
// contratto a tempo indeterminato e il falso amico «firma» (= la firma sul foglio, non l'azienda: la ditta);
// rimanda a «Le persone intorno a noi» (il collega, il capo) e a «I mestieri» (l'impiegato).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { officeVocabulary } from './office-vocabulary.mjs';
import { jobPages } from './jobs-pages.mjs';
import { peoplePages } from './people-pages.mjs';

const N = officeVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;
const link = (pages, lang) => `<a href="/${pages[lang].dir}/${pages[lang].slug}.html">${pages[lang].name}</a>`;
const jobs = (lang) => link(jobPages, lang);
const people = (lang) => link(peoplePages, lang);

export const officePages = {
  it: {
    dir: 'vocabolario',
    slug: 'ufficio',
    name: 'L’ufficio',
    title: 'L’ufficio: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole dell’ufficio in italiano — la scrivania, il computer, la stampante, la cartellina, la riunione, il contratto, lo stipendio, la pausa caffè… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Un ufficio moderno e luminoso in una città italiana: colleghi alle scrivanie con il computer, una piccola riunione intorno a un tavolo, due persone che chiacchierano alla macchinetta del caffè e i tetti rossi fuori dalle finestre',
    cardText: `${N} parole per l’ufficio: la scrivania, la cancelleria, le riunioni e il lavoro.`,
    note: {
      title: 'In ufficio',
      body: `Si va e si è <em>in ufficio</em>, senza articolo; chi non ci va <em>lavora da casa</em> (si dice anche <em>in smart working</em>). Si <em>fa una riunione</em> e si <em>è in riunione</em>, si <em>fa una pausa</em>. <em>L’email</em> è femminile: <em>un’email</em>, <em>la mail</em>, <em>mandare una mail</em>. Un <em>contratto a tempo indeterminato</em> non ha una fine, uno <em>a tempo determinato</em> sì. Attenzione a <em>la firma</em>: è il nome scritto a mano in fondo al foglio, non l’azienda, che si chiama <em>la ditta</em> o <em>l’azienda</em>. Il collega e il capo sono in ${people('it')}, l’impiegato in ${jobs('it')}.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-office-vocabulary',
    name: 'The office',
    title: 'The office | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian words for the office — the desk, the computer, the printer, the folder, the meeting, the contract, the salary, the coffee break… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'A bright modern office in an Italian city: colleagues at desks with computers, a small meeting around a table, two people chatting at the coffee machine and red rooftops outside the windows',
    cardText: `${N} words for the office: the desk, stationery, meetings and work.`,
    note: {
      title: it('In ufficio'),
      body: `You go to and are ${it('in ufficio')} (at the office), with no article; if you don’t go, you ${it('lavori da casa')} (work from home; Italians also say ${it('in smart working')}). You ${it('fai una riunione')} (have a meeting) and you ${it('sei in riunione')} (are in a meeting), you ${it('fai una pausa')} (take a break). ${it('L’email')} is feminine: ${it('un’email')}, ${it('la mail')}, ${it('mandare una mail')}. A ${it('contratto a tempo indeterminato')} is a permanent contract, one ${it('a tempo determinato')} is fixed-term. Careful with ${it('la firma')}: it is the signature, not the company, which is ${it('la ditta')} or ${it('l’azienda')}. The colleague and the boss are in ${people('en')}, the office worker in ${jobs('en')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-la-oficina-en-italiano',
    name: 'La oficina',
    title: 'La oficina | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de la oficina en italiano — el escritorio, el ordenador, la impresora, la carpeta, la reunión, el contrato, el sueldo, la pausa para el café… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Una oficina moderna y luminosa en una ciudad italiana: compañeros en sus escritorios con el ordenador, una pequeña reunión alrededor de una mesa, dos personas charlando junto a la máquina de café y tejados rojos al otro lado de las ventanas',
    cardText: `${N} palabras para la oficina: el escritorio, el material de oficina, las reuniones y el trabajo.`,
    note: {
      title: it('In ufficio'),
      body: `Se va y se está ${it('in ufficio')} (en la oficina), sin artículo; quien no va ${it('lavora da casa')} (trabaja desde casa; también se dice ${it('in smart working')}). Se ${it('fa una riunione')} (se hace una reunión) y se ${it('è in riunione')} (se está reunido), se ${it('fa una pausa')} (se hace una pausa). ${it('L’email')} es femenino: ${it('un’email')}, ${it('la mail')}, ${it('mandare una mail')}. Un ${it('contratto a tempo indeterminato')} es un contrato indefinido; uno ${it('a tempo determinato')}, temporal. En italiano ${it('la firma')} es la firma escrita a mano, como en español; la empresa es ${it('la ditta')} o ${it('l’azienda')}. El compañero de trabajo y el jefe están en ${people('es')}, el empleado en ${jobs('es')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-du-bureau-en-italien',
    name: 'Le bureau',
    title: 'Le bureau | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens du bureau — le bureau (le meuble), l’ordinateur, l’imprimante, la chemise, la réunion, le contrat, le salaire, la pause café… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Un bureau moderne et lumineux dans une ville italienne : des collègues à leur poste avec un ordinateur, une petite réunion autour d’une table, deux personnes qui discutent à la machine à café et des toits rouges derrière les fenêtres',
    cardText: `${N} mots pour le bureau : le poste de travail, les fournitures, les réunions et le travail.`,
    note: {
      title: it('In ufficio'),
      body: `On va et on est ${it('in ufficio')} (au bureau), sans article ; qui n’y va pas ${it('lavora da casa')} (travaille de chez soi ; on dit aussi ${it('in smart working')}). On ${it('fa una riunione')} (fait une réunion) et on ${it('è in riunione')} (est en réunion), on ${it('fa una pausa')} (fait une pause). Attention : le meuble est ${it('la scrivania')}, la pièce est ${it('l’ufficio')}. ${it('L’email')} est féminin : ${it('un’email')}, ${it('la mail')}, ${it('mandare una mail')}. Un ${it('contratto a tempo indeterminato')} est un CDI, un ${it('contratto a tempo determinato')} un CDD. ${it('La firma')} est la signature, pas la firme, qui se dit ${it('la ditta')} ou ${it('l’azienda')}. Le collègue et le chef sont dans ${people('fr')}, l’employé dans ${jobs('fr')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-kancelar',
    name: 'Kancelář',
    title: 'Kancelář | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o kanceláři — psací stůl, počítač, tiskárna, složka, porada, smlouva, plat, přestávka na kávu… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Moderní světlá kancelář v italském městě: kolegové u stolů s počítači, malá porada kolem stolu, dva lidé si povídají u kávovaru a za okny červené střechy',
    cardText: `${N} slov o kanceláři: psací stůl, kancelářské potřeby, porady a práce.`,
    note: {
      title: it('In ufficio'),
      body: `Do kanceláře se chodí a v kanceláři se je ${it('in ufficio')}, bez členu; kdo tam nejde, ${it('lavora da casa')} (pracuje z domu; říká se i ${it('in smart working')}). ${it('Si fa una riunione')} (koná se porada) a ${it('si è in riunione')} (je se na poradě), ${it('si fa una pausa')} (dělá se přestávka). ${it('L’email')} je ženského rodu: ${it('un’email')}, ${it('la mail')}, ${it('mandare una mail')}. ${it('Contratto a tempo indeterminato')} je smlouva na dobu neurčitou, ${it('a tempo determinato')} na dobu určitou. Pozor na ${it('la firma')}: je to podpis, ne firma, která se řekne ${it('la ditta')} nebo ${it('l’azienda')}. Kolega a šéf jsou v lekci ${people('cs')}, úředník v lekci ${jobs('cs')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-biuro',
    name: 'Biuro',
    title: 'Biuro | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o biurze — biurko, komputer, drukarka, teczka, zebranie, umowa, pensja, przerwa na kawę… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Nowoczesne, jasne biuro we włoskim mieście: koledzy przy biurkach z komputerami, małe zebranie przy stole, dwie osoby rozmawiają przy ekspresie do kawy, a za oknami czerwone dachy',
    cardText: `${N} słów o biurze: biurko, artykuły biurowe, zebrania i praca.`,
    note: {
      title: it('In ufficio'),
      body: `Do biura idzie się i w biurze jest się ${it('in ufficio')}, bez rodzajnika; kto nie idzie, ${it('lavora da casa')} (pracuje z domu; mówi się też ${it('in smart working')}). ${it('Si fa una riunione')} (robi się zebranie) i ${it('si è in riunione')} (jest się na zebraniu), ${it('si fa una pausa')} (robi się przerwę). ${it('L’email')} jest rodzaju żeńskiego: ${it('un’email')}, ${it('la mail')}, ${it('mandare una mail')}. ${it('Contratto a tempo indeterminato')} to umowa na czas nieokreślony, ${it('a tempo determinato')} na czas określony. Uwaga na ${it('la firma')}: to podpis, a nie firma, która po włosku to ${it('la ditta')} albo ${it('l’azienda')}. Kolega z pracy i szef są w lekcji ${people('pl')}, urzędnik w lekcji ${jobs('pl')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-ofis-kelimeleri',
    name: 'Ofis',
    title: 'Ofis | İtalyanca kelimeler | Italiano con Martin',
    description: `Ofis için ${N} İtalyanca kelime öğrenin — çalışma masası, bilgisayar, yazıcı, dosya, toplantı, sözleşme, maaş, kahve molası… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Bir İtalyan şehrinde modern ve aydınlık bir ofis: bilgisayarlı masalarında çalışan iş arkadaşları, bir masanın etrafında küçük bir toplantı, kahve makinesinin yanında sohbet eden iki kişi ve pencerelerin ardında kırmızı çatılar',
    cardText: `Ofis için ${N} kelime: çalışma masası, kırtasiye, toplantılar ve iş.`,
    note: {
      title: it('In ufficio'),
      body: `Ofise gitmek de ofiste olmak da ${it('in ufficio')} diye, artikelsiz söylenir; gitmeyen ${it('lavora da casa')} (evden çalışır; ${it('in smart working')} da denir). ${it('Si fa una riunione')} (toplantı yapılır), ${it('si è in riunione')} (toplantıda olunur), ${it('si fa una pausa')} (mola verilir). ${it('L’email')} dişildir: ${it('un’email')}, ${it('la mail')}, ${it('mandare una mail')}. ${it('Contratto a tempo indeterminato')} süresiz, ${it('a tempo determinato')} süreli sözleşmedir. ${it('La firma')} kelimesine dikkat: imza demektir, şirket değil; şirket ${it('la ditta')} ya da ${it('l’azienda')} olur. İş arkadaşı ve patron ${people('tr')} dersinde, memur ${jobs('tr')} dersinde.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-buero',
    name: 'Das Büro',
    title: 'Das Büro | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter für das Büro — der Schreibtisch, der Computer, der Drucker, die Mappe, die Besprechung, der Vertrag, das Gehalt, die Kaffeepause … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Ein helles, modernes Büro in einer italienischen Stadt: Kollegen an Schreibtischen mit Computern, eine kleine Besprechung an einem Tisch, zwei Leute plaudern an der Kaffeemaschine, draußen rote Dächer',
    cardText: `${N} Wörter für das Büro: der Schreibtisch, Büromaterial, Besprechungen und die Arbeit.`,
    note: {
      title: it('In ufficio'),
      body: `Man geht und ist ${it('in ufficio')} (im Büro), ohne Artikel; wer nicht hingeht, ${it('lavora da casa')} (arbeitet von zu Hause; man sagt auch ${it('in smart working')}). Man ${it('fa una riunione')} (hält eine Besprechung ab) und ${it('è in riunione')} (ist in einer Besprechung), man ${it('fa una pausa')} (macht Pause). ${it('L’email')} ist weiblich: ${it('un’email')}, ${it('la mail')}, ${it('mandare una mail')}. Ein ${it('contratto a tempo indeterminato')} ist unbefristet, einer ${it('a tempo determinato')} befristet. Vorsicht, falscher Freund: ${it('la firma')} ist die Unterschrift, nicht die Firma – die heißt ${it('la ditta')} oder ${it('l’azienda')}. Der Kollege und der Chef stehen in ${people('de')}, der Angestellte in ${jobs('de')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-office-vocabulary',
    name: 'オフィス',
    title: 'オフィス | イタリア語の語彙 | Italiano con Martin',
    description: `机、パソコン、プリンター、書類ばさみ、会議、契約書、給料、コーヒーブレイクなど、オフィスに関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt:
      'イタリアの街にある明るくモダンなオフィス：パソコンに向かう同僚たち、テーブルを囲む小さな会議、コーヒーマシンのそばで話す2人、窓の外には赤い屋根',
    cardText: `オフィスに関する ${N} 語。机、文房具、会議、そして仕事。`,
    note: {
      title: it('In ufficio'),
      body: `「オフィスへ行く」も「オフィスにいる」も冠詞なしで ${it('in ufficio')} と言います。行かない人は ${it('lavora da casa')}（在宅勤務する。${it('in smart working')} とも言います）。${it('fare una riunione')}（会議をする）、${it('essere in riunione')}（会議中である）、${it('fare una pausa')}（休憩する）と言います。${it('L’email')} は女性名詞です：${it('un’email')}、${it('la mail')}、${it('mandare una mail')}。${it('contratto a tempo indeterminato')} は無期雇用契約、${it('a tempo determinato')} は有期雇用契約です。${it('la firma')} は署名のことで、会社は ${it('la ditta')} または ${it('l’azienda')} と言います。同僚と上司はレッスン「${people('ja')}」に、会社員は「${jobs('ja')}」にあります。`,
    },
  },
};
