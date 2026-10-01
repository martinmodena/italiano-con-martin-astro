// Stringhe di pagina della lezione «I verbi di influenza» (2026-10-01), kind 'match' con `photoRows`, come
// «I verbi del mare»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio arrivano da `relationUi` (relations-pages.mjs); qui ci sono la nota della
// pagina (qualcuno A fare / A qualcuno DI fare, i pronomi lo e gli, dare retta a, i riflessivi con essere,
// i due sensi di «influenza») e l'introduzione dell'esercizio.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { influenceVerbs } from './influence-verbs.mjs';
import { relationPages } from './relations-pages.mjs';

const V = influenceVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const rel = (lang) => linkTo(relationPages[lang]);

export const influenceVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-influenza',
    name: 'I verbi di influenza',
    title: 'Verbi di influenza in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani per influenzare gli altri — incoraggiare, convincere, consigliare, obbligare, permettere, vietare, impedire, ostacolare, collaborare, ingannare — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Sei scene: un papà che incoraggia la figlia in bicicletta, una dottoressa che sconsiglia una bibita a un paziente, un giocatore di basket che ostacola un avversario, una squadra che unisce le mani, una mamma che obbliga il figlio a mangiare i broccoli e una guardia di museo che vieta una foto',
    cardText: `${V} verbi per influenzare gli altri: incoraggiare, convincere, obbligare, impedire, collaborare…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-influence-verbs-vocabulary',
    name: 'Verbs of influence',
    title: 'Verbs of influence | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for influencing other people — to encourage, to convince, to advise, to force, to allow, to forbid, to prevent, to hinder, to collaborate, to deceive — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'Six scenes: a father encouraging his daughter on her bike, a doctor advising a patient against a fizzy drink, a basketball player blocking an opponent, a team stacking their hands, a mother making her son eat broccoli and a museum guard forbidding a photo',
    cardText: `${V} verbs for influencing others: to encourage, to convince, to force, to prevent, to collaborate…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-influencia-en-italiano',
    name: 'Los verbos de influencia',
    title: 'Los verbos de influencia | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos para influir en los demás — animar, convencer, aconsejar, obligar, permitir, prohibir, impedir, obstaculizar, colaborar, engañar — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Seis escenas: un padre que anima a su hija en bicicleta, una médica que desaconseja un refresco a un paciente, un jugador de baloncesto que obstaculiza a un rival, un equipo que junta las manos, una madre que obliga a su hijo a comer brócoli y una vigilante de museo que prohíbe una foto',
    cardText: `${V} verbos para influir en los demás: animar, convencer, obligar, impedir, colaborar…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-d-influence-en-italien',
    name: 'Les verbes d’influence',
    title: 'Les verbes d’influence | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens pour influencer les autres — encourager, convaincre, conseiller, obliger, permettre, interdire, empêcher, entraver, collaborer, tromper — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Six scènes : un père qui encourage sa fille à vélo, une médecin qui déconseille un soda à un patient, un basketteur qui gêne un adversaire, une équipe qui joint les mains, une mère qui oblige son fils à manger des brocolis et une gardienne de musée qui interdit une photo',
    cardText: `${V} verbes pour influencer les autres : encourager, convaincre, obliger, empêcher, collaborer…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-vlivu',
    name: 'Slovesa vlivu',
    title: 'Slovesa vlivu | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves, kterými ovlivňujeme druhé — povzbuzovat, přesvědčit, radit, nutit, dovolit, zakázat, zabránit, překážet, spolupracovat, oklamat — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Šest scén: táta povzbuzuje dceru na kole, lékařka pacientovi nedoporučuje limonádu, basketbalista brání soupeři, tým spojuje ruce, máma nutí syna jíst brokolici a hlídačka v muzeu zakazuje fotit',
    cardText: `${V} sloves, kterými ovlivňujeme druhé: povzbuzovat, přesvědčit, nutit, zabránit, spolupracovat…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-wplywu',
    name: 'Czasowniki wpływu',
    title: 'Czasowniki wpływu | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników, którymi wpływamy na innych — zachęcać, przekonać, radzić, zmuszać, pozwalać, zakazywać, uniemożliwić, przeszkadzać, współpracować, oszukiwać — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Sześć scen: tata zachęca córkę jadącą na rowerze, lekarka odradza pacjentowi słodki napój, koszykarz blokuje przeciwnika, drużyna łączy dłonie, mama zmusza syna do jedzenia brokułów, a strażniczka w muzeum zakazuje robienia zdjęć',
    cardText: `${V} czasowników, którymi wpływamy na innych: zachęcać, przekonać, zmuszać, uniemożliwić, współpracować…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-etki-fiilleri-kelimeleri',
    name: 'Etki fiilleri',
    title: 'Etki fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Başkalarını etkilemek için ${V} İtalyanca fiil öğrenin — cesaretlendirmek, ikna etmek, tavsiye etmek, zorlamak, izin vermek, yasaklamak, engel olmak, engellemek, iş birliği yapmak, kandırmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Altı sahne: bisiklet süren kızını cesaretlendiren bir baba, hastasına gazlı içeceği tavsiye etmeyen bir doktor, rakibini engelleyen bir basketbolcu, ellerini birleştiren bir takım, oğlunu brokoli yemeye zorlayan bir anne ve fotoğraf çekmeyi yasaklayan bir müze görevlisi',
    cardText: `Başkalarını etkilemek için ${V} fiil: cesaretlendirmek, ikna etmek, zorlamak, engel olmak, iş birliği yapmak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-einfluss',
    name: 'Verben des Einflusses',
    title: 'Verben des Einflusses | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben, mit denen wir andere beeinflussen — ermutigen, überzeugen, raten, zwingen, erlauben, verbieten, verhindern, behindern, zusammenarbeiten, täuschen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Sechs Szenen: ein Vater ermutigt seine Tochter auf dem Fahrrad, eine Ärztin rät einem Patienten von einer Limonade ab, ein Basketballspieler behindert einen Gegner, ein Team legt die Hände zusammen, eine Mutter zwingt ihren Sohn, Brokkoli zu essen, und eine Museumswärterin verbietet ein Foto',
    cardText: `${V} Verben, mit denen wir andere beeinflussen: ermutigen, überzeugen, zwingen, verhindern, zusammenarbeiten …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-influence-verbs-vocabulary',
    name: '人に働きかける動詞',
    title: '人に働きかける動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `励ます、説得する、勧める、強いる、許可する、禁止する、防ぐ、邪魔する、協力する、だますなど、人に働きかけるイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '6つの場面：自転車に乗る娘を励ます父親、患者に炭酸飲料をやめるよう言う医師、相手の選手を邪魔するバスケットボール選手、手を重ねるチーム、息子にブロッコリーを食べさせる母親、写真撮影を禁止する美術館の警備員',
    cardText: `人に働きかける動詞 ${V} 語：励ます、説得する、強いる、防ぐ、協力する…`,
  },
};

const notes = {
  it: {
    title: 'Convincere qualcuno <em>a</em>, consigliare a qualcuno <em>di</em>',
    body: `Questi verbi hanno spesso dopo un altro verbo all’infinito, e la parolina in mezzo cambia. Con <em>incoraggiare</em>, <em>convincere</em>, <em>obbligare</em>, <em>motivare</em> e <em>coinvolgere</em> si dice <em>qualcuno a fare</em>: <em>ho convinto Marco a venire</em>, cioè <em>l’ho convinto a venire</em>. Con <em>consigliare</em>, <em>sconsigliare</em>, <em>permettere</em> e <em>vietare</em> si dice <em>a qualcuno di fare</em>: <em>ho consigliato a Marco di partire</em>, cioè <em>gli ho consigliato di partire</em>. <em>Impedire</em> vuole sempre <em>di</em>: <em>la pioggia ci ha impedito di uscire</em>. <em>Dare retta</em> vuole <em>a</em>: <em>dai retta a tua madre</em>, <em>dalle retta</em>. <em>Opporsi</em> e <em>mettersi d’accordo</em> sono riflessivi e al passato prossimo vogliono <em>essere</em>: <em>mi sono opposta</em>, <em>ci siamo messi d’accordo</em>. Attenzione: <em>l’influenza</em> è anche la malattia d’inverno (<em>ho l’influenza</em>). Altri verbi per parlare con gli altri sono nella lezione ${rel('it')}.`,
  },
  en: {
    title: `${it('Convincere qualcuno a')}, ${it('consigliare a qualcuno di')}`,
    body: `These verbs are often followed by another verb in the infinitive, and the little word in between changes. With ${it('incoraggiare')}, ${it('convincere')}, ${it('obbligare')}, ${it('motivare')} and ${it('coinvolgere')} you say ${it('qualcuno a fare')}: ${it('ho convinto Marco a venire')} (I convinced Marco to come), that is ${it('l’ho convinto a venire')} (I convinced him to come). With ${it('consigliare')}, ${it('sconsigliare')}, ${it('permettere')} and ${it('vietare')} you say ${it('a qualcuno di fare')}: ${it('ho consigliato a Marco di partire')} (I advised Marco to leave), that is ${it('gli ho consigliato di partire')} (I advised him to leave). ${it('Impedire')} always takes ${it('di')}: ${it('la pioggia ci ha impedito di uscire')} (the rain stopped us from going out). ${it('Dare retta')} takes ${it('a')}: ${it('dai retta a tua madre')} (listen to your mother), ${it('dalle retta')} (listen to her). ${it('Opporsi')} and ${it('mettersi d’accordo')} are reflexive and take ${it('essere')} in the ${it('passato prossimo')}: ${it('mi sono opposta')} (I objected, said by a woman), ${it('ci siamo messi d’accordo')} (we agreed). Careful: ${it('l’influenza')} is also the winter illness, the flu (${it('ho l’influenza')}: I have the flu). More verbs for dealing with other people are in the lesson ${rel('en')}.`,
  },
  es: {
    title: `${it('Convincere qualcuno a')}, ${it('consigliare a qualcuno di')}`,
    body: `Estos verbos suelen ir seguidos de otro verbo en infinitivo, y la palabrita del medio cambia. Con ${it('incoraggiare')}, ${it('convincere')}, ${it('obbligare')}, ${it('motivare')} y ${it('coinvolgere')} se dice ${it('qualcuno a fare')}: ${it('ho convinto Marco a venire')} (convencí a Marco de que viniera), es decir, ${it('l’ho convinto a venire')} (lo convencí). Con ${it('consigliare')}, ${it('sconsigliare')}, ${it('permettere')} y ${it('vietare')} se dice ${it('a qualcuno di fare')}: ${it('ho consigliato a Marco di partire')} (le aconsejé a Marco que se fuera), es decir, ${it('gli ho consigliato di partire')} (le aconsejé). ${it('Impedire')} lleva siempre ${it('di')}: ${it('la pioggia ci ha impedito di uscire')} (la lluvia nos impidió salir). ${it('Dare retta')} lleva ${it('a')}: ${it('dai retta a tua madre')} (hazle caso a tu madre), ${it('dalle retta')} (hazle caso). ${it('Opporsi')} y ${it('mettersi d’accordo')} son reflexivos y en el ${it('passato prossimo')} llevan ${it('essere')}: ${it('mi sono opposta')} (me opuse, dicho por una mujer), ${it('ci siamo messi d’accordo')} (nos pusimos de acuerdo). Atención: ${it('l’influenza')} es también la enfermedad del invierno, la gripe (${it('ho l’influenza')}: tengo gripe). Más verbos para tratar con los demás en la lección ${rel('es')}.`,
  },
  fr: {
    title: `${it('Convincere qualcuno a')}, ${it('consigliare a qualcuno di')}`,
    body: `Ces verbes sont souvent suivis d’un autre verbe à l’infinitif, et le petit mot au milieu change. Avec ${it('incoraggiare')}, ${it('convincere')}, ${it('obbligare')}, ${it('motivare')} et ${it('coinvolgere')}, on dit ${it('qualcuno a fare')} : ${it('ho convinto Marco a venire')} (j’ai convaincu Marco de venir), c’est-à-dire ${it('l’ho convinto a venire')} (je l’ai convaincu). Avec ${it('consigliare')}, ${it('sconsigliare')}, ${it('permettere')} et ${it('vietare')}, on dit ${it('a qualcuno di fare')} : ${it('ho consigliato a Marco di partire')} (j’ai conseillé à Marco de partir), c’est-à-dire ${it('gli ho consigliato di partire')} (je lui ai conseillé). ${it('Impedire')} se construit toujours avec ${it('di')} : ${it('la pioggia ci ha impedito di uscire')} (la pluie nous a empêchés de sortir). ${it('Dare retta')} se construit avec ${it('a')} : ${it('dai retta a tua madre')} (écoute ta mère), ${it('dalle retta')} (écoute-la). ${it('Opporsi')} et ${it('mettersi d’accordo')} sont pronominaux et prennent ${it('essere')} au ${it('passato prossimo')} : ${it('mi sono opposta')} (je me suis opposée), ${it('ci siamo messi d’accordo')} (nous nous sommes mis d’accord). Attention : ${it('l’influenza')} est aussi la maladie de l’hiver, la grippe (${it('ho l’influenza')} : j’ai la grippe). D’autres verbes pour parler des relations avec les autres sont dans la leçon ${rel('fr')}.`,
  },
  cs: {
    title: `${it('Convincere qualcuno a')}, ${it('consigliare a qualcuno di')}`,
    body: `Po těchto slovesech často následuje další sloveso v infinitivu a slovíčko mezi nimi se mění. U ${it('incoraggiare')}, ${it('convincere')}, ${it('obbligare')}, ${it('motivare')} a ${it('coinvolgere')} se říká ${it('qualcuno a fare')}: ${it('ho convinto Marco a venire')} (přesvědčil jsem Marca, aby přišel), tedy ${it('l’ho convinto a venire')} (přesvědčil jsem ho). U ${it('consigliare')}, ${it('sconsigliare')}, ${it('permettere')} a ${it('vietare')} se říká ${it('a qualcuno di fare')}: ${it('ho consigliato a Marco di partire')} (poradil jsem Marcovi, aby odjel), tedy ${it('gli ho consigliato di partire')} (poradil jsem mu). ${it('Impedire')} má vždy ${it('di')}: ${it('la pioggia ci ha impedito di uscire')} (déšť nám zabránil jít ven). ${it('Dare retta')} má ${it('a')}: ${it('dai retta a tua madre')} (poslechni mámu), ${it('dalle retta')} (poslechni ji). ${it('Opporsi')} a ${it('mettersi d’accordo')} jsou zvratná a v ${it('passato prossimo')} mají ${it('essere')}: ${it('mi sono opposta')} (postavila jsem se proti), ${it('ci siamo messi d’accordo')} (dohodli jsme se). Pozor: ${it('l’influenza')} je také zimní nemoc, chřipka (${it('ho l’influenza')}: mám chřipku). Další slovesa o vztazích s druhými najdete v lekci ${rel('cs')}.`,
  },
  pl: {
    title: `${it('Convincere qualcuno a')}, ${it('consigliare a qualcuno di')}`,
    body: `Po tych czasownikach często stoi inny czasownik w bezokoliczniku, a małe słówko pomiędzy nimi się zmienia. Z ${it('incoraggiare')}, ${it('convincere')}, ${it('obbligare')}, ${it('motivare')} i ${it('coinvolgere')} mówi się ${it('qualcuno a fare')}: ${it('ho convinto Marco a venire')} (przekonałem Marca, żeby przyszedł), czyli ${it('l’ho convinto a venire')} (przekonałem go). Z ${it('consigliare')}, ${it('sconsigliare')}, ${it('permettere')} i ${it('vietare')} mówi się ${it('a qualcuno di fare')}: ${it('ho consigliato a Marco di partire')} (poradziłem Marcowi, żeby wyjechał), czyli ${it('gli ho consigliato di partire')} (poradziłem mu). ${it('Impedire')} zawsze łączy się z ${it('di')}: ${it('la pioggia ci ha impedito di uscire')} (deszcz nie pozwolił nam wyjść). ${it('Dare retta')} łączy się z ${it('a')}: ${it('dai retta a tua madre')} (posłuchaj mamy), ${it('dalle retta')} (posłuchaj jej). ${it('Opporsi')} i ${it('mettersi d’accordo')} są zwrotne i w ${it('passato prossimo')} łączą się z ${it('essere')}: ${it('mi sono opposta')} (sprzeciwiłam się), ${it('ci siamo messi d’accordo')} (dogadaliśmy się). Uwaga: ${it('l’influenza')} to także zimowa choroba, grypa (${it('ho l’influenza')}: mam grypę). Więcej czasowników o relacjach z innymi jest w lekcji ${rel('pl')}.`,
  },
  tr: {
    title: `${it('Convincere qualcuno a')}, ${it('consigliare a qualcuno di')}`,
    body: `Bu fiillerden sonra çoğu zaman mastar hâlinde başka bir fiil gelir ve aradaki küçük kelime değişir. ${it('Incoraggiare')}, ${it('convincere')}, ${it('obbligare')}, ${it('motivare')} ve ${it('coinvolgere')} ile ${it('qualcuno a fare')} denir: ${it('ho convinto Marco a venire')} (Marco’yu gelmeye ikna ettim), yani ${it('l’ho convinto a venire')} (onu ikna ettim). ${it('Consigliare')}, ${it('sconsigliare')}, ${it('permettere')} ve ${it('vietare')} ile ${it('a qualcuno di fare')} denir: ${it('ho consigliato a Marco di partire')} (Marco’ya gitmesini tavsiye ettim), yani ${it('gli ho consigliato di partire')} (ona tavsiye ettim). ${it('Impedire')} her zaman ${it('di')} alır: ${it('la pioggia ci ha impedito di uscire')} (yağmur dışarı çıkmamıza engel oldu). ${it('Dare retta')} ${it('a')} alır: ${it('dai retta a tua madre')} (annenin sözünü dinle), ${it('dalle retta')} (onu dinle). ${it('Opporsi')} ve ${it('mettersi d’accordo')} dönüşlüdür ve ${it('passato prossimo')} zamanında ${it('essere')} alır: ${it('mi sono opposta')} (karşı çıktım, bir kadın söylüyor), ${it('ci siamo messi d’accordo')} (anlaştık). Dikkat: ${it('l’influenza')} aynı zamanda kış hastalığı, yani gripdir (${it('ho l’influenza')}: grip oldum). Başkalarıyla ilişkiler için daha fazla fiil ${rel('tr')} dersinde.`,
  },
  de: {
    title: `${it('Convincere qualcuno a')}, ${it('consigliare a qualcuno di')}`,
    body: `Auf diese Verben folgt oft ein weiteres Verb im Infinitiv, und das kleine Wort dazwischen wechselt. Bei ${it('incoraggiare')}, ${it('convincere')}, ${it('obbligare')}, ${it('motivare')} und ${it('coinvolgere')} sagt man ${it('qualcuno a fare')}: ${it('ho convinto Marco a venire')} (ich habe Marco überzeugt zu kommen), also ${it('l’ho convinto a venire')} (ich habe ihn überzeugt). Bei ${it('consigliare')}, ${it('sconsigliare')}, ${it('permettere')} und ${it('vietare')} sagt man ${it('a qualcuno di fare')}: ${it('ho consigliato a Marco di partire')} (ich habe Marco geraten abzureisen), also ${it('gli ho consigliato di partire')} (ich habe ihm geraten). ${it('Impedire')} steht immer mit ${it('di')}: ${it('la pioggia ci ha impedito di uscire')} (der Regen hat uns daran gehindert hinauszugehen). ${it('Dare retta')} steht mit ${it('a')}: ${it('dai retta a tua madre')} (hör auf deine Mutter), ${it('dalle retta')} (hör auf sie). ${it('Opporsi')} und ${it('mettersi d’accordo')} sind reflexiv und bilden das ${it('passato prossimo')} mit ${it('essere')}: ${it('mi sono opposta')} (ich habe mich widersetzt, sagt eine Frau), ${it('ci siamo messi d’accordo')} (wir haben uns geeinigt). Vorsicht: ${it('l’influenza')} ist auch die Winterkrankheit, die Grippe (${it('ho l’influenza')}: ich habe die Grippe). Weitere Verben für den Umgang mit anderen stehen in der Lektion ${rel('de')}.`,
  },
  ja: {
    title: `${it('Convincere qualcuno a')}、${it('consigliare a qualcuno di')}`,
    body: `これらの動詞のあとには、よく別の動詞の不定詞が来ます。そのあいだに入る小さな言葉が動詞によって変わります。${it('incoraggiare')}、${it('convincere')}、${it('obbligare')}、${it('motivare')}、${it('coinvolgere')} は ${it('qualcuno a fare')} の形です：${it('ho convinto Marco a venire')}（マルコを説得して来させた）、代名詞なら ${it('l’ho convinto a venire')}（彼を説得した）。${it('consigliare')}、${it('sconsigliare')}、${it('permettere')}、${it('vietare')} は ${it('a qualcuno di fare')} の形です：${it('ho consigliato a Marco di partire')}（マルコに出発するよう勧めた）、代名詞なら ${it('gli ho consigliato di partire')}（彼に勧めた）。${it('impedire')} はいつも ${it('di')} をとります：${it('la pioggia ci ha impedito di uscire')}（雨のせいで外に出られなかった）。${it('dare retta')} は ${it('a')} をとります：${it('dai retta a tua madre')}（お母さんの言うことを聞きなさい）、${it('dalle retta')}（彼女の言うことを聞きなさい）。${it('opporsi')} と ${it('mettersi d’accordo')} は再帰動詞で、${it('passato prossimo')} では ${it('essere')} を使います：${it('mi sono opposta')}（女性が「反対した」）、${it('ci siamo messi d’accordo')}（話がまとまった）。注意：${it('l’influenza')} は冬の病気、インフルエンザの意味でもあります（${it('ho l’influenza')}：インフルエンザにかかった）。ほかの人との関係を表す動詞は、レッスン「${rel('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (un papà che corre accanto alla figlia in bicicletta la incoraggia, ma la motiva e la sostiene anche): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (a dad running beside his daughter on her bike is encouraging her, but he is also motivating and supporting her: <em lang="it">motivare</em>, <em lang="it">sostenere</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (un padre que corre al lado de su hija en bicicleta la anima, pero también la motiva y la apoya: <em lang="it">motivare</em>, <em lang="it">sostenere</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (un papa qui court à côté de sa fille à vélo l’encourage, mais il la motive et la soutient aussi : <em lang="it">motivare</em>, <em lang="it">sostenere</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (táta, který běží vedle dcery na kole, ji povzbuzuje, ale také motivuje a podporuje: <em lang="it">motivare</em>, <em lang="it">sostenere</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (tata, który biegnie obok córki na rowerze, zachęca ją, ale też motywuje i wspiera: <em lang="it">motivare</em>, <em lang="it">sostenere</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (bisikletli kızının yanında koşan bir baba onu cesaretlendirir, ama aynı zamanda motive eder ve destekler: <em lang="it">motivare</em>, <em lang="it">sostenere</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (ein Vater, der neben seiner Tochter auf dem Fahrrad herläuft, ermutigt sie, motiviert und unterstützt sie aber auch: <em lang="it">motivare</em>, <em lang="it">sostenere</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（自転車に乗る娘の横を走る父親は、娘を「励まして」いますが、「<em lang="it">motivare</em>」（やる気にさせる）、「<em lang="it">sostenere</em>」（支える）とも言えます）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const influenceVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
