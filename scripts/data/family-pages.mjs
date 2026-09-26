// Stringhe di pagina della lezione «La famiglia» (2026-09-26), kind 'words'.
//
// Oltre ai campi delle altre lezioni (dir, slug, name, title, description, heroAlt, cardText) qui ci sono:
//   lead   il paragrafo sotto il titolo: spiega come si leggono le schede (stella = chi parla,
//          riquadro blu = la persona della parola). Sostituisce quello della cucina.
//   note   la nota sotto le schede: il possessivo con i nomi di parentela (mia madre / la mia mamma)
//          e i due sensi di «nipote», con il link alla lezione di grammatica sui possessivi.
//
// Le etichette di servizio comuni (Riconosci la parola, Frasi da tradurre, bottoni) arrivano dalla
// pagina della cucina gia' tradotta. REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in
// <em lang="it">; nelle meta description, che sono testo puro, gli esempi sono tradotti.

import { familyVocabulary } from './family-vocabulary.mjs';

const N = familyVocabulary.length;

/** La lezione di grammatica sui possessivi, in ogni lingua. */
const possessives = {
  it: ['/grammatica/a1/aggettivi-e-pronomi-possessivi.html', 'Aggettivi e pronomi possessivi'],
  en: ['/en/grammar/a1/italian-possessive-adjectives-and-pronouns.html', 'Italian possessive adjectives and pronouns'],
  es: [
    '/es/gramatica/a1/adjetivos-y-pronombres-posesivos-en-italiano.html',
    'Adjetivos y pronombres posesivos en italiano',
  ],
  fr: [
    '/fr/grammaire/a1/adjectifs-et-pronoms-possessifs-en-italien.html',
    'Adjectifs et pronoms possessifs en italien',
  ],
  cs: [
    '/cs/gramatika/a1/italska-privlastnovaci-pridavna-jmena-a-zajmena.html',
    'Italská přivlastňovací přídavná jména a zájmena',
  ],
  pl: ['/pl/gramatyka/a1/wloskie-przymiotniki-i-zaimki-dzierzawcze.html', 'Włoskie przymiotniki i zaimki dzierżawcze'],
  tr: ['/tr/dilbilgisi/a1/italyanca-iyelik-sifatlari-ve-zamirleri.html', 'İtalyanca iyelik sıfatları ve zamirleri'],
  de: [
    '/de/grammatik/a1/italienische-possessivadjektive-und-pronomen.html',
    'Italienische Possessivadjektive und Pronomen',
  ],
  ja: ['/ja/bunpo/a1/イタリア語の所有形容詞と代名詞.html', 'イタリア語の所有形容詞と代名詞'],
};
const link = (lang) => `<a href="${possessives[lang][0]}">${possessives[lang][1]}</a>`;
const it = (s) => `<em lang="it">${s}</em>`;

export const familyPages = {
  it: {
    dir: 'vocabolario',
    slug: 'famiglia',
    name: 'La famiglia',
    title: 'Vocabolario della famiglia in italiano | Italiano con Martin',
    description: `Impara ${N} parole della famiglia in italiano — genitori, nonni, zii, cugini, suoceri, cognati… — con l’albero della famiglia Rossi, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'L’albero della famiglia Rossi: i bisnonni Giorgio e Rosa, i figli Franco e Paolo con le mogli, i nipoti e i bambini',
    cardText: `${N} parole per parlare della famiglia: genitori, figli, nonni, zii, cugini, suoceri e cognati, con l’albero della famiglia Rossi.`,
    lead: 'Questa è la famiglia Rossi. In ogni scheda la <strong>stella arancione</strong> indica chi parla e il <strong>riquadro blu</strong> la persona di cui si parla: se la stella è su Marco e il riquadro su Franco, Franco è <em>lo zio</em> di Marco.',
    note: {
      title: 'Mia madre, ma la mia mamma',
      body: `Con i nomi di parentela al singolare il possessivo va senza articolo: <em>mia madre</em>, <em>mio fratello</em>, <em>sua moglie</em>. L’articolo torna al plurale (<em>i miei genitori</em>), con <em>loro</em> (<em>la loro figlia</em>), con le parole affettuose (<em>la mia mamma</em>, <em>il mio papà</em>) e quando c’è un aggettivo (<em>il mio fratello maggiore</em>). Attenzione a <em>nipote</em>: è il figlio di un figlio (il nipote dei nonni) e anche il figlio di un fratello o di una sorella (il nipote degli zii). Tutte le regole nella lezione ${link('it')}.`,
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-family-vocabulary',
    name: 'The family',
    title: 'The family | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian family words — parents, grandparents, uncles, cousins, in-laws… — with the Rossi family tree, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'The Rossi family tree: great-grandparents Giorgio and Rosa, their sons Franco and Paolo with their wives, the grandchildren and the children',
    cardText: `${N} words to talk about your family: parents, children, grandparents, uncles and aunts, cousins and in-laws, with the Rossi family tree.`,
    lead: `This is the Rossi family. On each card the <strong>orange star</strong> marks the person speaking and the <strong>blue frame</strong> the person being talked about: if the star is on Marco and the frame on Franco, Franco is Marco’s ${it('zio')}.`,
    note: {
      title: `${it('Mia madre')}, but ${it('la mia mamma')}`,
      body: `With family words in the singular, the possessive has no article: ${it('mia madre')}, ${it('mio fratello')}, ${it('sua moglie')}. The article comes back in the plural (${it('i miei genitori')}), with ${it('loro')} (${it('la loro figlia')}), with affectionate words (${it('la mia mamma')}, ${it('il mio papà')}) and when there is an adjective (${it('il mio fratello maggiore')}). Watch out for ${it('nipote')}: it means a grandchild (the grandparents’ ${it('nipote')}) and also a nephew or niece (the uncle’s ${it('nipote')}). All the rules are in the lesson ${link('en')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-la-familia-en-italiano',
    name: 'La familia',
    title: 'La familia | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de la familia en italiano — padres, abuelos, tíos, primos, suegros, cuñados… — con el árbol de la familia Rossi, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'El árbol de la familia Rossi: los bisabuelos Giorgio y Rosa, sus hijos Franco y Paolo con sus esposas, los nietos y los niños',
    cardText: `${N} palabras para hablar de la familia: padres, hijos, abuelos, tíos, primos, suegros y cuñados, con el árbol de la familia Rossi.`,
    lead: `Esta es la familia Rossi. En cada ficha, la <strong>estrella naranja</strong> indica quién habla y el <strong>recuadro azul</strong>, la persona de la que se habla: si la estrella está sobre Marco y el recuadro sobre Franco, Franco es el ${it('zio')} de Marco.`,
    note: {
      title: `${it('Mia madre')}, pero ${it('la mia mamma')}`,
      body: `Con los nombres de parentesco en singular, el posesivo va sin artículo: ${it('mia madre')}, ${it('mio fratello')}, ${it('sua moglie')}. El artículo vuelve en plural (${it('i miei genitori')}), con ${it('loro')} (${it('la loro figlia')}), con las palabras cariñosas (${it('la mia mamma')}, ${it('il mio papà')}) y cuando hay un adjetivo (${it('il mio fratello maggiore')}). Cuidado con ${it('nipote')}: significa «nieto» (el ${it('nipote')} de los abuelos) y también «sobrino» (el ${it('nipote')} de los tíos). Todas las reglas en la lección ${link('es')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-la-famille-en-italien',
    name: 'La famille',
    title: 'La famille | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots de la famille en italien — parents, grands-parents, oncles, cousins, beaux-parents… — avec l’arbre de la famille Rossi, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'L’arbre de la famille Rossi : les arrière-grands-parents Giorgio et Rosa, leurs fils Franco et Paolo avec leurs épouses, les petits-enfants et les enfants',
    cardText: `${N} mots pour parler de la famille : parents, enfants, grands-parents, oncles et tantes, cousins et beaux-parents, avec l’arbre de la famille Rossi.`,
    lead: `Voici la famille Rossi. Sur chaque fiche, l’<strong>étoile orange</strong> indique qui parle et le <strong>cadre bleu</strong> la personne dont on parle : si l’étoile est sur Marco et le cadre sur Franco, Franco est le ${it('zio')} de Marco.`,
    note: {
      title: `${it('Mia madre')}, mais ${it('la mia mamma')}`,
      body: `Avec les noms de parenté au singulier, le possessif s’emploie sans article : ${it('mia madre')}, ${it('mio fratello')}, ${it('sua moglie')}. L’article revient au pluriel (${it('i miei genitori')}), avec ${it('loro')} (${it('la loro figlia')}), avec les mots affectueux (${it('la mia mamma')}, ${it('il mio papà')}) et quand il y a un adjectif (${it('il mio fratello maggiore')}). Attention à ${it('nipote')} : c’est le petit-fils (le ${it('nipote')} des grands-parents) mais aussi le neveu (le ${it('nipote')} de l’oncle). Toutes les règles dans la leçon ${link('fr')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-rodina',
    name: 'Rodina',
    title: 'Rodina | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o rodině — rodiče, prarodiče, strýcové, bratranci, tchán a tchyně, švagři… — s rodokmenem rodiny Rossi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Rodokmen rodiny Rossi: praprarodiče Giorgio a Rosa, jejich synové Franco a Paolo s manželkami, vnoučata a děti',
    cardText: `${N} slov o rodině: rodiče, děti, prarodiče, strýcové a tety, bratranci, tchán, tchyně a švagři, s rodokmenem rodiny Rossi.`,
    lead: `Toto je rodina Rossi. Na každé kartičce <strong>oranžová hvězda</strong> označuje toho, kdo mluví, a <strong>modrý rámeček</strong> osobu, o které se mluví: když je hvězda u Marca a rámeček u Franca, Franco je Marcův ${it('zio')}.`,
    note: {
      title: `${it('Mia madre')}, ale ${it('la mia mamma')}`,
      body: `U příbuzenských jmen v jednotném čísle se přivlastňovací zájmeno používá bez členu: ${it('mia madre')}, ${it('mio fratello')}, ${it('sua moglie')}. Člen se vrací v množném čísle (${it('i miei genitori')}), s ${it('loro')} (${it('la loro figlia')}), u mazlivých slov (${it('la mia mamma')}, ${it('il mio papà')}) a když je tam přídavné jméno (${it('il mio fratello maggiore')}). Pozor na ${it('nipote')}: znamená vnuk (${it('nipote')} prarodičů) a také synovec (${it('nipote')} strýce). Všechna pravidla najdete v lekci ${link('cs')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-rodzina',
    name: 'Rodzina',
    title: 'Rodzina | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o rodzinie — rodzice, dziadkowie, wujkowie, kuzyni, teściowie, szwagrowie… — z drzewem genealogicznym rodziny Rossi, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Drzewo genealogiczne rodziny Rossi: pradziadkowie Giorgio i Rosa, ich synowie Franco i Paolo z żonami, wnuki i dzieci',
    cardText: `${N} słów o rodzinie: rodzice, dzieci, dziadkowie, wujkowie i ciocie, kuzyni, teściowie i szwagrowie, z drzewem rodziny Rossi.`,
    lead: `To jest rodzina Rossi. Na każdej fiszce <strong>pomarańczowa gwiazdka</strong> oznacza osobę, która mówi, a <strong>niebieska ramka</strong> osobę, o której mowa: jeśli gwiazdka jest przy Marcu, a ramka przy Francu, Franco to ${it('zio')} Marca.`,
    note: {
      title: `${it('Mia madre')}, ale ${it('la mia mamma')}`,
      body: `Przy nazwach członków rodziny w liczbie pojedynczej zaimek dzierżawczy występuje bez rodzajnika: ${it('mia madre')}, ${it('mio fratello')}, ${it('sua moglie')}. Rodzajnik wraca w liczbie mnogiej (${it('i miei genitori')}), z ${it('loro')} (${it('la loro figlia')}), przy słowach czułych (${it('la mia mamma')}, ${it('il mio papà')}) i gdy jest przymiotnik (${it('il mio fratello maggiore')}). Uwaga na ${it('nipote')}: to wnuk (${it('nipote')} dziadków), ale też bratanek lub siostrzeniec (${it('nipote')} wujka). Wszystkie zasady w lekcji ${link('pl')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-aile-kelimeleri',
    name: 'Aile',
    title: 'Aile | İtalyanca kelimeler | Italiano con Martin',
    description: `İtalyanca ${N} aile kelimesini öğrenin — anne baba, büyükanne ve büyükbaba, amca, kuzen, kayınpeder, enişte… — Rossi ailesinin soy ağacı, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Rossi ailesinin soy ağacı: büyük dede Giorgio ve büyük nine Rosa, oğulları Franco ve Paolo ile eşleri, torunlar ve çocuklar',
    cardText: `Aileden söz etmek için ${N} kelime: anne baba, çocuklar, büyükanne ve büyükbaba, amca ve teyze, kuzenler, kayınpeder ve enişte, Rossi ailesinin soy ağacıyla.`,
    lead: `Bu, Rossi ailesi. Her kartta <strong>turuncu yıldız</strong> konuşan kişiyi, <strong>mavi çerçeve</strong> ise sözü edilen kişiyi gösterir: yıldız Marco’nun, çerçeve Franco’nun üzerindeyse Franco, Marco’nun ${it('zio')}’sudur.`,
    note: {
      title: `${it('Mia madre')}, ama ${it('la mia mamma')}`,
      body: `Tekil akrabalık adlarıyla iyelik sıfatı artikelsiz kullanılır: ${it('mia madre')}, ${it('mio fratello')}, ${it('sua moglie')}. Artikel çoğulda (${it('i miei genitori')}), ${it('loro')} ile (${it('la loro figlia')}), sevgi dolu sözcüklerle (${it('la mia mamma')}, ${it('il mio papà')}) ve bir sıfat olduğunda (${it('il mio fratello maggiore')}) geri gelir. ${it('Nipote')} kelimesine dikkat: hem torun (büyükanne ve büyükbabanın ${it('nipote')}’si) hem de yeğen (amcanın ${it('nipote')}’si) anlamına gelir. Bütün kurallar ${link('tr')} dersinde.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-familie',
    name: 'Die Familie',
    title: 'Die Familie | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter zur Familie — Eltern, Großeltern, Onkel, Cousins, Schwiegereltern, Schwager … — mit dem Stammbaum der Familie Rossi, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Der Stammbaum der Familie Rossi: die Urgroßeltern Giorgio und Rosa, ihre Söhne Franco und Paolo mit ihren Frauen, die Enkel und die Kinder',
    cardText: `${N} Wörter, um über die Familie zu sprechen: Eltern, Kinder, Großeltern, Onkel und Tanten, Cousins, Schwiegereltern und Schwager, mit dem Stammbaum der Familie Rossi.`,
    lead: `Das ist die Familie Rossi. Auf jeder Karte zeigt der <strong>orange Stern</strong>, wer spricht, und der <strong>blaue Rahmen</strong>, über wen gesprochen wird: Ist der Stern bei Marco und der Rahmen bei Franco, dann ist Franco Marcos ${it('zio')}.`,
    note: {
      title: `${it('Mia madre')}, aber ${it('la mia mamma')}`,
      body: `Bei Verwandtschaftswörtern im Singular steht das Possessivum ohne Artikel: ${it('mia madre')}, ${it('mio fratello')}, ${it('sua moglie')}. Der Artikel kommt zurück im Plural (${it('i miei genitori')}), mit ${it('loro')} (${it('la loro figlia')}), bei Koseformen (${it('la mia mamma')}, ${it('il mio papà')}) und wenn ein Adjektiv dabei ist (${it('il mio fratello maggiore')}). Achtung bei ${it('nipote')}: Das ist der Enkel (der ${it('nipote')} der Großeltern) und auch der Neffe (der ${it('nipote')} des Onkels). Alle Regeln in der Lektion ${link('de')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-family-vocabulary',
    name: '家族',
    title: '家族 | イタリア語の語彙 | Italiano con Martin',
    description: `両親、祖父母、おじ、いとこ、義理の両親、義理の兄弟など、家族を表すイタリア語 ${N} 語を、ロッシ家の家系図、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: 'ロッシ家の家系図：曾祖父母のジョルジョとローザ、息子のフランコとパオロとその妻たち、孫たちと子どもたち',
    cardText: `家族について話すための ${N} 語。両親、子ども、祖父母、おじ・おば、いとこ、義理の家族。ロッシ家の家系図付き。`,
    lead: `これはロッシ家です。各カードの<strong>オレンジの星</strong>は話している人、<strong>青い枠</strong>は話題になっている人を示します。星がマルコに、枠がフランコにあれば、フランコはマルコの ${it('zio')}（おじ）です。`,
    note: {
      title: `${it('Mia madre')}、でも ${it('la mia mamma')}`,
      body: `家族を表す名詞が単数のとき、所有形容詞に冠詞はつけません：${it('mia madre')}、${it('mio fratello')}、${it('sua moglie')}。複数のとき（${it('i miei genitori')}）、${it('loro')} のとき（${it('la loro figlia')}）、愛情のこもった言い方（${it('la mia mamma')}、${it('il mio papà')}）、形容詞がつくとき（${it('il mio fratello maggiore')}）は冠詞が戻ります。${it('nipote')} に注意：「孫」（祖父母の ${it('nipote')}）と「甥・姪」（おじの ${it('nipote')}）の両方の意味があります。規則はすべてレッスン ${link('ja')} で。`,
    },
  },
};
