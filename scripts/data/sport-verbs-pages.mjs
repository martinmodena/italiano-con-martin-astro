// Stringhe di pagina della lezione «I verbi dello sport» (2026-09-28), kind 'match' con `photoRows`, come
// «I verbi della montagna»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio arrivano da `relationUi` (relations-pages.mjs); qui ci sono la nota della
// pagina (giocare a / fare / andare, allenarsi e allenare, i passati con essere e l'accordo, segnare un gol) e
// l'introduzione dell'esercizio con un esempio dello sport.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { sportVerbs } from './sport-verbs.mjs';
import { sportPages } from './sport-pages.mjs';

const V = sportVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const sport = (lang) => linkTo(sportPages[lang]);

export const sportVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-sport',
    name: 'I verbi dello sport',
    title: 'Verbi dello sport in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani dello sport — allenarsi, riscaldarsi, fare pesi, giocare a calcio, passare la palla, segnare, parare, tifare, arrivare primo, battere il record — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Sei scene di sport: un portiere che para un pallone, una pallavolista che schiaccia sopra la rete, una donna che fa yoga, un corridore che taglia il traguardo, tifosi che esultano in tribuna e una ragazza a cavallo',
    cardText: `${V} verbi per lo sport: allenarsi, giocare a calcio, segnare, parare, tifare, arrivare primo…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-sports-verbs-vocabulary',
    name: 'Sports verbs',
    title: 'Sports verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian sports verbs — to train, to warm up, to lift weights, to play football, to pass the ball, to score, to save, to cheer, to come first, to break the record — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'Six sports scenes: a goalkeeper saving a ball, a volleyball player spiking over the net, a woman doing yoga, a runner crossing the finish line, fans cheering in the stands and a girl riding a horse',
    cardText: `${V} verbs for sport: to train, to play football, to score, to save, to cheer, to come first…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-del-deporte-en-italiano',
    name: 'Los verbos del deporte',
    title: 'Los verbos del deporte | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos del deporte — entrenar, calentar, hacer pesas, jugar al fútbol, pasar el balón, marcar, parar, animar, llegar el primero, batir el récord — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Seis escenas de deporte: un portero que para un balón, una jugadora de voleibol que remata sobre la red, una mujer que hace yoga, un corredor que cruza la meta, aficionados que celebran en la grada y una chica a caballo',
    cardText: `${V} verbos para el deporte: entrenar, jugar al fútbol, marcar, parar, animar, llegar el primero…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-du-sport-en-italien',
    name: 'Les verbes du sport',
    title: 'Les verbes du sport | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens du sport — s’entraîner, s’échauffer, faire de la musculation, jouer au foot, faire une passe, marquer, arrêter le ballon, supporter, arriver premier, battre le record — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Six scènes de sport : un gardien qui arrête un ballon, une volleyeuse qui smashe au-dessus du filet, une femme qui fait du yoga, un coureur qui franchit la ligne d’arrivée, des supporters qui exultent dans la tribune et une jeune fille à cheval',
    cardText: `${V} verbes pour le sport : s’entraîner, jouer au foot, marquer, arrêter le ballon, supporter, arriver premier…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-sportu',
    name: 'Slovesa ve sportu',
    title: 'Slovesa ve sportu | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves ze sportu — trénovat, rozcvičit se, posilovat, hrát fotbal, přihrát míč, dát gól, chytit střelu, fandit, doběhnout první, překonat rekord — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Šest sportovních scén: brankář chytá míč, volejbalistka smečuje přes síť, žena cvičí jógu, běžec probíhá cílem, fanoušci jásají na tribuně a dívka jede na koni',
    cardText: `${V} sloves pro sport: trénovat, hrát fotbal, dát gól, chytit střelu, fandit, doběhnout první…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-sportowe',
    name: 'Czasowniki sportowe',
    title: 'Czasowniki sportowe | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników sportowych — trenować, rozgrzewać się, podnosić ciężary, grać w piłkę nożną, podać piłkę, strzelić gola, obronić strzał, kibicować, przybiec pierwszy, pobić rekord — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Sześć sportowych scen: bramkarz broniący piłkę, siatkarka atakująca nad siatką, kobieta ćwicząca jogę, biegacz przekraczający linię mety, kibice wiwatujący na trybunie i dziewczyna na koniu',
    cardText: `${V} czasowników sportowych: trenować, grać w piłkę nożną, strzelić gola, obronić strzał, kibicować, przybiec pierwszy…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-spor-fiilleri-kelimeleri',
    name: 'Spor fiilleri',
    title: 'Spor fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Spor için ${V} İtalyanca fiil öğrenin — antrenman yapmak, ısınmak, ağırlık çalışmak, futbol oynamak, pas vermek, gol atmak, kurtarmak, bir takımı tutmak, birinci gelmek, rekor kırmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Altı spor sahnesi: topu kurtaran bir kaleci, filenin üzerinden smaç vuran bir voleybolcu, yoga yapan bir kadın, bitiş çizgisini geçen bir koşucu, tribünde sevinen taraftarlar ve ata binen bir kız',
    cardText: `Spor için ${V} fiil: antrenman yapmak, futbol oynamak, gol atmak, kurtarmak, takım tutmak, birinci gelmek…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-sport',
    name: 'Verben im Sport',
    title: 'Verben im Sport | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben für den Sport — trainieren, sich aufwärmen, Gewichte heben, Fußball spielen, den Ball abgeben, ein Tor schießen, halten, anfeuern, als Erster ankommen, den Rekord brechen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Sechs Sportszenen: ein Torwart, der einen Ball hält, eine Volleyballerin, die über dem Netz schmettert, eine Frau beim Yoga, ein Läufer, der die Ziellinie überquert, jubelnde Fans auf der Tribüne und ein Mädchen auf einem Pferd',
    cardText: `${V} Verben für den Sport: trainieren, Fußball spielen, ein Tor schießen, halten, anfeuern, als Erster ankommen …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-sports-verbs-vocabulary',
    name: 'スポーツの動詞',
    title: 'スポーツの動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `練習する、ウォーミングアップする、ウエイトトレーニングをする、サッカーをする、パスする、ゴールを決める、セーブする、応援する、一位になる、記録を破るなど、スポーツで使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      'スポーツの6つの場面：ボールを止めるゴールキーパー、ネットの上でスパイクを打つバレーボール選手、ヨガをする女性、ゴールラインを越えるランナー、スタンドで大喜びするファン、馬に乗る女の子',
    cardText: `スポーツで使う動詞 ${V} 語：練習する、サッカーをする、ゴールを決める、セーブする、応援する、一位になる…`,
  },
};

const notes = {
  it: {
    title: 'Giocare a calcio, fare yoga',
    body: `Gli sport con la palla si <em>giocano</em>, con la preposizione <em>a</em> e senza articolo: <em>gioco a calcio</em>, <em>a tennis</em>, <em>a pallavolo</em>. Quasi tutti gli altri si <em>fanno</em>: <em>fare yoga</em>, <em>fare surf</em>, <em>fare pesi</em>, <em>fare jogging</em>; qualcuno vuole <em>andare</em>: <em>andare a cavallo</em>, <em>andare in palestra</em>. <em>Allenarsi</em> è riflessivo (<em>mi alleno</em>: faccio allenamento io), <em>allenare</em> no (<em>l’allenatore allena la squadra</em>). Al passato prossimo <em>arrivare</em> e i riflessivi vogliono <em>essere</em>, e il participio si accorda: <em>Giulia è arrivata prima</em>, <em>mi sono infortunata</em>, <em>ci siamo allenati</em>. <em>Segnare</em> si usa da solo o con <em>un gol</em>, <em>un punto</em>, <em>un canestro</em>. Le parole dello sport (il pallone, l’arbitro, il traguardo, la medaglia…) sono nella lezione ${sport('it')}.`,
  },
  en: {
    title: it('Giocare a calcio, fare yoga'),
    body: `Ball sports are “played” with ${it('giocare a')} and no article: ${it('gioco a calcio')} (I play football), ${it('a tennis')}, ${it('a pallavolo')} (volleyball). Most other sports are “done” with ${it('fare')}: ${it('fare yoga')}, ${it('fare surf')}, ${it('fare pesi')} (to lift weights), ${it('fare jogging')}; a few take ${it('andare')}: ${it('andare a cavallo')} (to ride a horse), ${it('andare in palestra')} (to go to the gym). ${it('Allenarsi')} is reflexive (${it('mi alleno')}: I train myself), ${it('allenare')} is not (${it('l’allenatore allena la squadra')}: the coach trains the team). In the ${it('passato prossimo')}, ${it('arrivare')} and reflexive verbs take ${it('essere')}, and the participle agrees: ${it('Giulia è arrivata prima')} (Giulia came first), ${it('mi sono infortunata')} (I got injured, said by a woman), ${it('ci siamo allenati')} (we trained). ${it('Segnare')} (to score) is used on its own or with ${it('un gol')}, ${it('un punto')}, ${it('un canestro')}. Sports words (the ball, the referee, the finish line, the medal…) are in the lesson ${sport('en')}.`,
  },
  es: {
    title: it('Giocare a calcio, fare yoga'),
    body: `Los deportes de pelota se “juegan” con ${it('giocare a')} y sin artículo: ${it('gioco a calcio')} (juego al fútbol), ${it('a tennis')}, ${it('a pallavolo')} (al voleibol). Casi todos los demás se “hacen” con ${it('fare')}: ${it('fare yoga')}, ${it('fare surf')}, ${it('fare pesi')} (hacer pesas), ${it('fare jogging')}; algunos llevan ${it('andare')}: ${it('andare a cavallo')} (montar a caballo), ${it('andare in palestra')} (ir al gimnasio). ${it('Allenarsi')} es reflexivo (${it('mi alleno')}: entreno yo), ${it('allenare')} no (${it('l’allenatore allena la squadra')}: el entrenador entrena al equipo). En el ${it('passato prossimo')}, ${it('arrivare')} y los reflexivos llevan ${it('essere')}, y el participio concuerda: ${it('Giulia è arrivata prima')} (Giulia llegó la primera), ${it('mi sono infortunata')} (me lesioné, dicho por una mujer), ${it('ci siamo allenati')} (entrenamos). ${it('Segnare')} (marcar) se usa solo o con ${it('un gol')}, ${it('un punto')}, ${it('un canestro')}. Las palabras del deporte (el balón, el árbitro, la meta, la medalla…) están en la lección ${sport('es')}.`,
  },
  fr: {
    title: it('Giocare a calcio, fare yoga'),
    body: `Les sports de ballon se « jouent » avec ${it('giocare a')} et sans article : ${it('gioco a calcio')} (je joue au foot), ${it('a tennis')}, ${it('a pallavolo')} (au volley). Presque tous les autres se « font » avec ${it('fare')} : ${it('fare yoga')}, ${it('fare surf')}, ${it('fare pesi')} (faire de la musculation), ${it('fare jogging')} ; quelques-uns prennent ${it('andare')} : ${it('andare a cavallo')} (faire du cheval), ${it('andare in palestra')} (aller à la salle de sport). ${it('Allenarsi')} est pronominal (${it('mi alleno')} : je m’entraîne), ${it('allenare')} ne l’est pas (${it('l’allenatore allena la squadra')} : l’entraîneur entraîne l’équipe). Au ${it('passato prossimo')}, ${it('arrivare')} et les verbes pronominaux prennent ${it('essere')}, et le participe s’accorde : ${it('Giulia è arrivata prima')} (Giulia est arrivée première), ${it('mi sono infortunata')} (je me suis blessée), ${it('ci siamo allenati')} (nous nous sommes entraînés). ${it('Segnare')} (marquer) s’emploie seul ou avec ${it('un gol')}, ${it('un punto')}, ${it('un canestro')}. Les mots du sport (le ballon, l’arbitre, la ligne d’arrivée, la médaille…) sont dans la leçon ${sport('fr')}.`,
  },
  cs: {
    title: it('Giocare a calcio, fare yoga'),
    body: `Míčové sporty se „hrají“ s ${it('giocare a')} a bez členu: ${it('gioco a calcio')} (hraju fotbal), ${it('a tennis')}, ${it('a pallavolo')} (volejbal). Skoro všechny ostatní se „dělají“ s ${it('fare')}: ${it('fare yoga')}, ${it('fare surf')}, ${it('fare pesi')} (posilovat), ${it('fare jogging')}; některé mají ${it('andare')}: ${it('andare a cavallo')} (jezdit na koni), ${it('andare in palestra')} (chodit do posilovny). ${it('Allenarsi')} je zvratné (${it('mi alleno')}: trénuju sám), ${it('allenare')} ne (${it('l’allenatore allena la squadra')}: trenér trénuje tým). V ${it('passato prossimo')} mají ${it('arrivare')} a zvratná slovesa ${it('essere')} a příčestí se shoduje: ${it('Giulia è arrivata prima')} (Giulia doběhla první), ${it('mi sono infortunata')} (zranila jsem se), ${it('ci siamo allenati')} (trénovali jsme). ${it('Segnare')} (skórovat) se používá samo nebo s ${it('un gol')}, ${it('un punto')}, ${it('un canestro')}. Slova ze sportu (míč, rozhodčí, cíl, medaile…) najdete v lekci ${sport('cs')}.`,
  },
  pl: {
    title: it('Giocare a calcio, fare yoga'),
    body: `W sporty z piłką się „gra”: ${it('giocare a')} bez rodzajnika: ${it('gioco a calcio')} (gram w piłkę nożną), ${it('a tennis')}, ${it('a pallavolo')} (w siatkówkę). Prawie wszystkie inne się „robi” z ${it('fare')}: ${it('fare yoga')}, ${it('fare surf')}, ${it('fare pesi')} (podnosić ciężary), ${it('fare jogging')}; niektóre łączą się z ${it('andare')}: ${it('andare a cavallo')} (jeździć konno), ${it('andare in palestra')} (chodzić na siłownię). ${it('Allenarsi')} jest zwrotne (${it('mi alleno')}: sam trenuję), ${it('allenare')} nie (${it('l’allenatore allena la squadra')}: trener trenuje drużynę). W ${it('passato prossimo')} ${it('arrivare')} i czasowniki zwrotne łączą się z ${it('essere')}, a imiesłów się uzgadnia: ${it('Giulia è arrivata prima')} (Giulia przybiegła pierwsza), ${it('mi sono infortunata')} (doznałam kontuzji), ${it('ci siamo allenati')} (trenowaliśmy). ${it('Segnare')} (zdobyć punkt, strzelić) używa się samo albo z ${it('un gol')}, ${it('un punto')}, ${it('un canestro')}. Słowa ze sportu (piłka, sędzia, meta, medal…) są w lekcji ${sport('pl')}.`,
  },
  tr: {
    title: it('Giocare a calcio, fare yoga'),
    body: `Top sporları ${it('giocare a')} ile ve artikelsiz “oynanır”: ${it('gioco a calcio')} (futbol oynuyorum), ${it('a tennis')}, ${it('a pallavolo')} (voleybol). Diğerlerinin çoğu ${it('fare')} ile “yapılır”: ${it('fare yoga')}, ${it('fare surf')}, ${it('fare pesi')} (ağırlık çalışmak), ${it('fare jogging')}; bazıları ${it('andare')} alır: ${it('andare a cavallo')} (ata binmek), ${it('andare in palestra')} (spor salonuna gitmek). ${it('Allenarsi')} dönüşlüdür (${it('mi alleno')}: ben antrenman yapıyorum), ${it('allenare')} değildir (${it('l’allenatore allena la squadra')}: antrenör takımı çalıştırıyor). ${it('Passato prossimo')} zamanında ${it('arrivare')} ve dönüşlü fiiller ${it('essere')} alır ve ortaç uyum gösterir: ${it('Giulia è arrivata prima')} (Giulia birinci geldi), ${it('mi sono infortunata')} (sakatlandım, bir kadın söylüyor), ${it('ci siamo allenati')} (antrenman yaptık). ${it('Segnare')} (sayı yapmak) tek başına ya da ${it('un gol')}, ${it('un punto')}, ${it('un canestro')} ile kullanılır. Spor kelimeleri (top, hakem, bitiş çizgisi, madalya…) ${sport('tr')} dersinde.`,
  },
  de: {
    title: it('Giocare a calcio, fare yoga'),
    body: `Ballsportarten „spielt“ man mit ${it('giocare a')} und ohne Artikel: ${it('gioco a calcio')} (ich spiele Fußball), ${it('a tennis')}, ${it('a pallavolo')} (Volleyball). Fast alle anderen „macht“ man mit ${it('fare')}: ${it('fare yoga')}, ${it('fare surf')}, ${it('fare pesi')} (Gewichte heben), ${it('fare jogging')}; einige brauchen ${it('andare')}: ${it('andare a cavallo')} (reiten), ${it('andare in palestra')} (ins Fitnessstudio gehen). ${it('Allenarsi')} ist reflexiv (${it('mi alleno')}: ich trainiere selbst), ${it('allenare')} nicht (${it('l’allenatore allena la squadra')}: der Trainer trainiert die Mannschaft). Im ${it('passato prossimo')} bilden ${it('arrivare')} und die reflexiven Verben das Perfekt mit ${it('essere')}, und das Partizip wird angeglichen: ${it('Giulia è arrivata prima')} (Giulia ist als Erste angekommen), ${it('mi sono infortunata')} (ich habe mich verletzt, sagt eine Frau), ${it('ci siamo allenati')} (wir haben trainiert). ${it('Segnare')} (treffen, punkten) steht allein oder mit ${it('un gol')}, ${it('un punto')}, ${it('un canestro')}. Die Wörter für den Sport (Ball, Schiedsrichter, Ziellinie, Medaille …) stehen in der Lektion ${sport('de')}.`,
  },
  ja: {
    title: it('Giocare a calcio, fare yoga'),
    body: `球技は ${it('giocare a')} ＋冠詞なしで「する」：${it('gioco a calcio')}（サッカーをする）、${it('a tennis')}、${it('a pallavolo')}（バレーボール）。ほかのスポーツはたいてい ${it('fare')} を使います：${it('fare yoga')}、${it('fare surf')}、${it('fare pesi')}（ウエイトトレーニング）、${it('fare jogging')}。${it('andare')} を使うものもあります：${it('andare a cavallo')}（乗馬をする）、${it('andare in palestra')}（ジムに行く）。${it('Allenarsi')} は再帰動詞（${it('mi alleno')}：自分が練習する）、${it('allenare')} は違います（${it('l’allenatore allena la squadra')}：コーチがチームを指導する）。${it('passato prossimo')} では ${it('arrivare')} と再帰動詞は ${it('essere')} を使い、過去分詞が一致します：${it('Giulia è arrivata prima')}（ジュリアは一位になった）、${it('mi sono infortunata')}（女性が「けがをした」）、${it('ci siamo allenati')}（私たちは練習した）。${it('Segnare')}（点を入れる）は単独でも、${it('un gol')}、${it('un punto')}、${it('un canestro')} と一緒にも使います。スポーツの単語（ボール、審判、ゴールライン、メダルなど）はレッスン「${sport('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi calcia la palla verso la porta sta tirando in porta, ma forse sta anche segnando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (someone kicking the ball at the goal is shooting, but may also be scoring: <em lang="it">segnare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien chuta el balón hacia la portería tira a puerta, pero quizá también marca: <em lang="it">segnare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (qui frappe le ballon vers le but tire au but, mais marque peut-être aussi : <em lang="it">segnare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo kope míč na bránu, střílí, ale možná i dává gól: <em lang="it">segnare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (ktoś, kto kopie piłkę w stronę bramki, strzela, ale może też zdobywa gola: <em lang="it">segnare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (topu kaleye vuran kişi şut çekiyordur, ama belki gol de atıyordur: <em lang="it">segnare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer den Ball aufs Tor schießt, trifft vielleicht auch: <em lang="it">segnare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（ゴールに向かってボールをける人は「シュートする」のですが、「<em lang="it">segnare</em>」（ゴールを決める）かもしれません）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const sportVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);
