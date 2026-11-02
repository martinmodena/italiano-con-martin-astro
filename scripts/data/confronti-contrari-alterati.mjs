// Confronto con la lingua dello studente ed errori tipici delle lezioni «I contrari» (A2) e
// «I nomi alterati» (B1), 2026-11-02. Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs,
// che li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;
const en = (s) => `<em lang="en">${s}</em>`;

export const NOTES_CONTRARI_ALTERATI = {
  'grammatica/a2/contrari.html': {
    after: 'prefissi',
    it: {
      h2: "I contrari: il confronto con l'inglese",
      intro: `L'inglese ha prefissi molto simili (${en('un-, dis-, in-, im-, il-, ir-')}), ma non sempre corrispondono: ${en('un-')}, il più comune in inglese, in italiano diventa quasi sempre <strong>in-</strong> o <strong>s-</strong>.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['unhappy', 'infelice'],
        ['uncomfortable', 'scomodo'],
        ['unknown', 'sconosciuto'],
        ['dishonest', 'disonesto'],
        ['impossible, illegal, irregular', 'impossibile, illegale, irregolare'],
        ['to unload, to unlock, to undo', 'scaricare, sbloccare, disfare'],
      ],
      points: [
        `${en('Im-, il-, ir-')} funzionano come in inglese: davanti a p, l, r. Ma l'italiano scrive sempre la doppia: ${i('illegale, irregolare')}.`,
        `${en('Uninteresting')} non ha un contrario con il prefisso: si dice ${b('noioso')}. ${i('Disinteressato')} vuol dire ${en('disinterested')}, senza interesse personale.`,
        `Falso amico: ${i('una disgrazia')} è un incidente grave o una grande sfortuna, non ${en('a disgrace')} (che è ${i('una vergogna')}).`,
      ],
    },
    en: {
      h2: 'Italian opposites compared with English',
      intro: `English has very similar prefixes (<em>un-, dis-, in-, im-, il-, ir-</em>), but they don’t always match: <em>un-</em>, the most common in English, almost always becomes <strong lang="it">in-</strong> or <strong lang="it">s-</strong> in Italian.`,
      th: ['English', 'Italian'],
      rows: [
        ['unhappy', 'infelice'],
        ['uncomfortable', 'scomodo'],
        ['unknown', 'sconosciuto'],
        ['dishonest', 'disonesto'],
        ['impossible, illegal, irregular', 'impossibile, illegale, irregolare'],
        ['to unload, to unlock, to undo', 'scaricare, sbloccare, disfare'],
      ],
      points: [
        `<em>Im-, il-, ir-</em> work as in English: before p, l, r. But Italian always writes the double consonant: ${i('illegale, irregolare')}.`,
        `<em>Uninteresting</em> has no opposite with a prefix: it is ${b('noioso')}. ${i('Disinteressato')} means “disinterested”, with no personal interest.`,
        `False friend: ${i('una disgrazia')} is a serious accident or great misfortune, not “a disgrace” (which is ${i('una vergogna')}).`,
      ],
    },
    es: {
      h2: 'Los contrarios comparados con el español',
      intro: `El español y el italiano comparten muchos prefijos (<em>in-, im-, i-</em>), pero el más frecuente en español, <em>des-</em>, no existe en italiano: se convierte en <strong lang="it">s-</strong> o en <strong lang="it">dis-</strong>.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['desventaja', 'svantaggio'],
        ['desconocido', 'sconosciuto'],
        ['deshonesto', 'disonesto'],
        ['desempleado', 'disoccupato'],
        ['descargar, desbloquear', 'scaricare, sbloccare'],
        ['ilegal, irregular', 'illegale, irregolare'],
      ],
      points: [
        `El italiano escribe doble la consonante después de <em>i-</em>: ${i('illegale, irregolare, immaturo')}, donde el español escribe «ilegal, irregular, inmaduro».`,
        `${i('Disgrazia')} es como «desgracia», pero ${i('disgraziato')} es sobre todo un insulto («sinvergüenza»).`,
        `«Desagradable» se dice ${b('sgradevole')} o ${b('spiacevole')}, nunca con <em>des-</em>.`,
      ],
    },
    pt: {
      h2: 'Os contrários comparados com o português',
      intro: `O português e o italiano têm muitos prefixos em comum (<em>in-, im-, i-</em>), mas o mais frequente em português, <em>des-</em>, não existe em italiano: vira <strong lang="it">s-</strong> ou <strong lang="it">dis-</strong>.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['desvantagem', 'svantaggio'],
        ['desconhecido', 'sconosciuto'],
        ['desonesto', 'disonesto'],
        ['desempregado', 'disoccupato'],
        ['descarregar, desbloquear', 'scaricare, sbloccare'],
        ['ilegal, irregular', 'illegale, irregolare'],
      ],
      points: [
        `O italiano escreve a consoante dobrada depois de <em>i-</em>: ${i('illegale, irregolare, immaturo')}, onde o português escreve «ilegal, irregular, imaturo».`,
        `«Desligar» a luz ou a TV é ${b('spegnere')}, sem prefixo; o contrário é ${i('accendere')}.`,
        `«Chato» é ${b('noioso')} (ou ${i('fastidioso')}, para uma pessoa que incomoda): ${i('disinteressante')} não existe.`,
      ],
    },
    fr: {
      h2: 'Les contraires comparés au français',
      intro: `Le français et l’italien partagent <em>in-, im-, il-, ir-</em>, mais les autres préfixes ne correspondent pas : « dé- / dés- » et « mal- » deviennent <strong lang="it">s-</strong> ou <strong lang="it">dis-</strong>, et même « in- » devient parfois <strong lang="it">s-</strong>.`,
      th: ['Français', 'Italien'],
      rows: [
        ['un désavantage', 'uno svantaggio'],
        ['inconnu', 'sconosciuto'],
        ['malhonnête', 'disonesto'],
        ['mécontent', 'scontento'],
        ['malheureux', 'infelice'],
        ['décharger, débloquer', 'scaricare, sbloccare'],
      ],
      points: [
        `« Mal- » n’existe presque pas en italien : malhonnête → ${b('disonesto')}, malheureux → ${b('infelice')} ou ${b('sfortunato')}. Exception : mal élevé → ${i('maleducato')}.`,
        `« Désagréable » se dit ${b('sgradevole')} ou ${b('spiacevole')}.`,
        `${i('Dispiacere')} n’est pas « déplaire » : ${i('mi dispiace')} = je suis désolé ; « ça ne me plaît pas » = ${i('non mi piace')}.`,
      ],
    },
    de: {
      h2: 'Gegenteile im Vergleich mit dem Deutschen',
      intro: `Das Deutsche bildet fast alle Gegenteile mit <strong>un-</strong> (oder mit „ent-“ bei Verben). Das Italienische hat dafür drei Vorsilben, <strong lang="it">in-</strong>, <strong lang="it">s-</strong> und <strong lang="it">dis-</strong>, und viele eigene Wörter.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['unglücklich', 'infelice'],
        ['unbequem', 'scomodo'],
        ['unbekannt', 'sconosciuto'],
        ['unehrlich', 'disonesto'],
        ['unmöglich', 'impossibile'],
        ['entladen, entsperren', 'scaricare, sbloccare'],
      ],
      points: [
        `Hinter „un-“ kann jede der drei italienischen Vorsilben stehen: Man lernt das Wort am besten gleich mit seinem Gegenteil.`,
        `Viele „un-“-Wörter haben im Italienischen ein eigenes Wort: uninteressant → ${b('noioso')}, unfreundlich → ${b('scortese')} oder ${b('antipatico')}.`,
        `Der Nachteil ist ${b('lo svantaggio')}, mit ${i('lo')}, weil das Wort mit s + Konsonant beginnt.`,
      ],
    },
    cs: {
      h2: 'Opaky ve srovnání s češtinou',
      intro: `Čeština tvoří skoro všechny opaky předponou <strong>ne-</strong>. Italština na to má tři předpony, <strong lang="it">in-</strong>, <strong lang="it">s-</strong> a <strong lang="it">dis-</strong>, a mnoho samostatných slov.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['nešťastný', 'infelice'],
        ['nepohodlný', 'scomodo'],
        ['neznámý', 'sconosciuto'],
        ['nepoctivý', 'disonesto'],
        ['nemožný', 'impossibile'],
        ['vyložit, odemknout (telefon)', 'scaricare, sbloccare'],
      ],
      points: [
        `Za českým „ne-“ se může skrývat kterákoli ze tří italských předpon: slovo se nejlépe učte rovnou i s jeho opakem.`,
        `U sloves čeština mění předponu (naložit → vyložit), italština přidá ${i('s-')} nebo ${i('dis-')}: ${i('caricare → scaricare')}.`,
        `„Nevýhoda“ je ${b('lo svantaggio')}, se členem ${i('lo')}, protože slovo začíná na s + souhlásku.`,
      ],
    },
    pl: {
      h2: 'Przeciwieństwa w porównaniu z polskim',
      intro: `Polski tworzy prawie wszystkie przeciwieństwa przedrostkiem <strong>nie-</strong>. Włoski ma do tego trzy przedrostki, <strong lang="it">in-</strong>, <strong lang="it">s-</strong> i <strong lang="it">dis-</strong>, i wiele osobnych słów.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['nieszczęśliwy', 'infelice'],
        ['niewygodny', 'scomodo'],
        ['nieznany', 'sconosciuto'],
        ['nieuczciwy', 'disonesto'],
        ['niemożliwy', 'impossibile'],
        ['rozładować, odblokować', 'scaricare, sbloccare'],
      ],
      points: [
        `Za polskim „nie-” może się kryć każdy z trzech włoskich przedrostków: najlepiej od razu ucz się słowa razem z jego przeciwieństwem.`,
        `Przy czasownikach polski zmienia przedrostek (załadować → rozładować), włoski dodaje ${i('s-')} albo ${i('dis-')}: ${i('caricare → scaricare')}.`,
        `„Wada, niekorzyść” to ${b('lo svantaggio')}, z rodzajnikiem ${i('lo')}, bo słowo zaczyna się od s + spółgłoska.`,
      ],
    },
    tr: {
      h2: 'Zıt anlamlılar: Türkçe ile karşılaştırma',
      intro: `Türkçe olumsuzluğu çoğu zaman kelimenin <strong>sonuna</strong> ekler (-sız, -siz, değil); İtalyanca ise <strong>başına</strong> bir önek koyar: <strong lang="it">in-</strong>, <strong lang="it">s-</strong> ya da <strong lang="it">dis-</strong>.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['mutsuz', 'infelice'],
        ['rahatsız', 'scomodo'],
        ['tanınmayan, yabancı', 'sconosciuto'],
        ['dürüst olmayan', 'disonesto'],
        ['imkânsız', 'impossibile'],
        ['yükü boşaltmak, kilidini açmak', 'scaricare, sbloccare'],
      ],
      points: [
        `Türkçedeki “-sız” bir ek, İtalyancadaki ${i('s-')} bir önektir: ikisi de olumsuzluk yapar, ama kelimenin farklı uçlarına gelir.`,
        `“Dezavantaj” İtalyancada ${b('lo svantaggio')}’dur: ${i('dis-')} değil ${i('s-')}, ve s + ünsüzle başladığı için tanımlık ${i('lo')}.`,
        `Türkçede ayrı bir fiil kullanılan yerde (yüklemek / boşaltmak) İtalyanca aynı fiile önek ekler: ${i('caricare / scaricare')}.`,
      ],
    },
    ja: {
      h2: '反対語：日本語との比較',
      intro: `日本語は「不・非・無・未」を前につけて反対語を作ります。イタリア語も前に接頭辞をつけますが、使うのは<strong lang="it">in-</strong>、<strong lang="it">s-</strong>、<strong lang="it">dis-</strong>の三つで、どれを使うかは単語ごとに決まっています。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['不幸な', 'infelice'],
        ['不便な、居心地が悪い', 'scomodo'],
        ['見知らぬ、無名の', 'sconosciuto'],
        ['不正直な', 'disonesto'],
        ['不可能な', 'impossibile'],
        ['荷物を降ろす、ロックを解除する', 'scaricare, sbloccare'],
      ],
      points: [
        `「不」がいつも${i('in-')}になるわけではありません：不便 → ${b('scomodo')}（s-）、不正直 → ${b('disonesto')}（dis-）。`,
        `日本語では別の動詞を使うところ（積む／降ろす）を、イタリア語は同じ動詞に接頭辞をつけて表します：${i('caricare / scaricare')}。`,
        `カタカナ語の「デメリット」は${b('lo svantaggio')}です。s＋子音で始まるので冠詞は${i('lo')}になります。`,
      ],
    },
  },
  'grammatica/b1/nomi-alterati.html': {
    after: 'peggiorativi',
    it: {
      h2: "I nomi alterati: il confronto con l'inglese",
      intro: `L'inglese ha pochi suffissi di questo tipo (${en('-ie')} in ${en('doggie')}, ${en('-let')} in ${en('booklet')}, ${en('-ette')} in ${en('kitchenette')}) e usa soprattutto aggettivi: ${en('little, big, nasty')}. L'italiano cambia la parola stessa.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['a kitten, a little cat', 'un gattino'],
        ['a little house', 'una casetta'],
        ['a huge book', 'un librone'],
        ['awful weather', 'un tempaccio'],
        ['just a sec!', 'un momentino!'],
        ['a half-brother, a stepbrother', 'un fratellastro'],
      ],
      points: [
        `Un parlante inglese tende a dire ${i('un piccolo gatto')}: è corretto, ma ${b('un gattino')} è molto più naturale.`,
        `${en('-ish')} con i colori corrisponde a ${b('-astro')}: ${en('yellowish')} → ${i('giallastro')}.`,
        `${en('Swear words')} sono ${b('le parolacce')}; ${i('i paroloni')} sono le parole difficili e pompose.`,
      ],
    },
    en: {
      h2: 'Italian altered nouns compared with English',
      intro: `English has few suffixes of this kind (<em>-ie</em> in <em>doggie</em>, <em>-let</em> in <em>booklet</em>, <em>-ette</em> in <em>kitchenette</em>) and mostly uses adjectives: <em>little, big, nasty</em>. Italian changes the word itself.`,
      th: ['English', 'Italian'],
      rows: [
        ['a kitten, a little cat', 'un gattino'],
        ['a little house', 'una casetta'],
        ['a huge book', 'un librone'],
        ['awful weather', 'un tempaccio'],
        ['just a sec!', 'un momentino!'],
        ['a half-brother, a stepbrother', 'un fratellastro'],
      ],
      points: [
        `English speakers tend to say ${i('un piccolo gatto')}: it is correct, but ${b('un gattino')} sounds much more natural.`,
        `<em>-ish</em> with colours is ${b('-astro')}: yellowish → ${i('giallastro')}.`,
        `Swear words are ${b('le parolacce')}; ${i('i paroloni')} are long, pompous words.`,
      ],
    },
    es: {
      h2: 'Los alterados comparados con el español',
      intro: `El español tiene un sistema muy parecido y aún más usado (<em>-ito, -illo, -ón, -azo, -ucho</em>). Pero ojo: algunos sufijos se parecen y significan otra cosa.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['un gatito', 'un gattino'],
        ['una casita', 'una casetta'],
        ['un portón', 'un portone'],
        ['un perrazo (grande)', 'un cagnone'],
        ['una casucha (fea)', 'una casaccia'],
        ['un hermanastro', 'un fratellastro'],
      ],
      points: [
        `<em>-azo</em> agranda, ${b('-accio')} empeora: un perrazo es ${i('un cagnone')}, ${i('un cagnaccio')} es un perro malo.`,
        `<em>-ucho</em> empeora, ${b('-uccio')} es cariñoso: ${i('una casuccia')} es una casita acogedora.`,
        `El italiano usa el diminutivo menos que el español de América: «un cafecito» es casi siempre ${i('un caffè')}.`,
      ],
    },
    pt: {
      h2: 'Os alterados comparados com o português',
      intro: `O português tem um sistema muito parecido e ainda mais usado (<em>-inho, -zinho, -ão, -aço</em>). Mas atenção: alguns sufixos se parecem e querem dizer outra coisa.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['um gatinho', 'un gattino'],
        ['uma casinha', 'una casetta'],
        ['um livrão', 'un librone'],
        ['um portão', 'un portone'],
        ['um cachorrão', 'un cagnone'],
        ['um cafezinho', 'un caffè'],
      ],
      points: [
        `<em>-aço</em> elogia (um golaço), ${b('-accio')} critica: ${i('un cagnaccio')} é um cachorro mau.`,
        `O brasileiro usa o diminutivo muito mais que o italiano: «um cafezinho», «um minutinho» são quase sempre ${i('un caffè')}, ${i('un attimo')}.`,
        `${i('Fratellastro')} é o meio-irmão (ou o filho do padrasto ou da madrasta), não um irmão ruim.`,
      ],
    },
    fr: {
      h2: 'Les mots altérés comparés au français',
      intro: `Le français a quelques suffixes semblables (<em>-et, -ette, -on, -âtre</em>), mais il préfère les adjectifs : « petit », « gros », « sale ». Et un suffixe joue un vilain tour.`,
      th: ['Français', 'Italien'],
      rows: [
        ['un chaton', 'un gattino'],
        ['une maisonnette', 'una casetta'],
        ['un gros livre', 'un librone'],
        ['un sale temps', 'un tempaccio'],
        ['rougeâtre', 'rossastro'],
        ['un demi-frère', 'un fratellastro'],
      ],
      points: [
        `En français « -on » rapetisse (chaton, ourson), en italien ${b('-one')} agrandit : ${i('un gattone')} est un gros chat.`,
        `« -âtre » correspond exactement à ${b('-astro')} : jaunâtre → ${i('giallastro')}.`,
        `« Un petit café » se dit simplement ${i('un caffè')} ; ${i('un caffettino')} existe, mais il est familier.`,
      ],
    },
    de: {
      h2: 'Veränderte Wörter im Vergleich mit dem Deutschen',
      intro: `Das Deutsche hat „-chen“ und „-lein“ für die Verkleinerung und Vorsilben wie „Riesen-“ oder „Mist-“ für Vergrößerung und Abwertung. Das Italienische arbeitet nur mit Endungen.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['das Kätzchen', 'il gattino'],
        ['das Häuschen', 'la casetta'],
        ['ein Riesenbuch', 'un librone'],
        ['ein Mistwetter', 'un tempaccio'],
        ['gelblich', 'giallastro'],
        ['der Halbbruder, der Stiefbruder', 'il fratellastro'],
      ],
      points: [
        `„-chen“ macht jedes Wort sächlich, die italienische Endung behält das Geschlecht: ${b('la casetta')}, nicht „il casetta“.`,
        `„Ein Käffchen“ oder „ein Momentchen“ geht auch auf Italienisch: ${i('un caffettino')}, ${i('un momentino')}. Meist sagt man aber einfach ${i('un caffè')}.`,
        `„-lich“ bei Farben entspricht ${b('-astro')}: ${i('giallastro, verdastro')}.`,
      ],
    },
    cs: {
      h2: 'Zdrobněliny ve srovnání s češtinou',
      intro: `Čeština je na zdrobněliny bohatší než italština a tvoří je i od sloves a příslovcí. Italština je používá hlavně u podstatných jmen a o něco méně často.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['koťátko', 'il gattino'],
        ['domeček', 'la casetta'],
        ['psisko (velký pes)', 'il cagnone'],
        ['počasí pod psa', 'il tempaccio'],
        ['nažloutlý', 'giallastro'],
        ['nevlastní bratr', 'il fratellastro'],
      ],
      points: [
        `Česká „-isko“ může zvětšovat i hanět; italština to rozlišuje: ${b('-one')} zvětšuje, ${b('-accio')} haní.`,
        `Řetězení funguje jako v češtině (dům → domek → domeček): ${i('casa → casetta → casettina')}.`,
        `„Pivečko“ nebo „kafíčko“ nepřekládejte zdrobnělinou: Ital řekne ${i('una birra')}, ${i('un caffè')}.`,
      ],
    },
    pl: {
      h2: 'Zdrobnienia w porównaniu z polskim',
      intro: `Polski jest na zdrobnienia bogatszy niż włoski i używa ich częściej. Włoski stosuje je głównie przy rzeczownikach, z dziećmi i w rodzinie.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['kotek', 'il gattino'],
        ['domek', 'la casetta'],
        ['psisko (duży pies)', 'il cagnone'],
        ['paskudna pogoda', 'il tempaccio'],
        ['żółtawy', 'giallastro'],
        ['brat przyrodni', 'il fratellastro'],
      ],
      points: [
        `Polskie „-isko” może powiększać albo deprecjonować; włoski to rozróżnia: ${b('-one')} powiększa, ${b('-accio')} deprecjonuje.`,
        `Podwójne zdrobnienie działa jak po polsku (kot → kotek → koteczek): ${i('casa → casetta → casettina')}.`,
        `„Piwko”, „kawusia” nie tłumacz zdrobnieniem: Włoch powie ${i('una birra')}, ${i('un caffè')}.`,
      ],
    },
    tr: {
      h2: 'Küçültme ve büyütme: Türkçe ile karşılaştırma',
      intro: `Türkçede de küçültme ekleri var (-cık, -cik, -cağız), ama büyüklük ve kötülük için çoğu zaman sıfat kullanılır: kocaman, berbat. İtalyanca bunları kelimenin sonuna eklenen bir ekle söyler.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['yavru kedi, kedicik', 'il gattino'],
        ['küçük ev, evcik', 'la casetta'],
        ['kocaman kitap', 'il librone'],
        ['berbat hava', 'il tempaccio'],
        ['sarımsı', 'giallastro'],
        ['üvey kardeş', 'il fratellastro'],
      ],
      points: [
        `Renklerdeki “-ımsı” tam olarak ${b('-astro')}’dur: sarımsı → ${i('giallastro')}, yeşilimsi → ${i('verdastro')}.`,
        `“-cağız” gibi, ${b('-uccio')} da sevgi ve şefkat anlatır: ${i('poveruccio')} = zavallıcık.`,
        `Ek, ismin cinsiyetini değiştirebilir: ${i('la porta')} → ${b('il portone')}.`,
      ],
    },
    ja: {
      h2: '縮小辞・増大辞：日本語との比較',
      intro: `日本語では「小〜」「大〜」を単語の前につけたり、「小さな」「ひどい」などの形容詞を使ったりします。イタリア語は単語の後ろに接尾辞をつけて表します。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['子猫', 'il gattino'],
        ['小さな家', 'la casetta'],
        ['大男', "l'omone"],
        ['ひどい天気', 'il tempaccio'],
        ['黄色っぽい', 'giallastro'],
        ['異母（異父）兄弟', 'il fratellastro'],
      ],
      points: [
        `名前につける${b('-ino / -etto')}は「〜ちゃん」に近い感覚です：${i('Paoletta')}（パオラちゃん）。`,
        `色につく${b('-astro')}は「〜っぽい」：${i('giallastro')}（黄色っぽい）、${i('verdastro')}（緑っぽい）。`,
        `接尾辞で性が変わることがあります：${i('la porta')}（ドア）→ ${b('il portone')}（大きな正面玄関）。`,
      ],
    },
  },
};

export const ERRORS_CONTRARI_ALTERATI = {
  'grammatica/a2/contrari.html': {
    it: [
      [
        'Questa sedia è incomoda.',
        'Questa sedia è scomoda.',
        `${en('Uncomfortable')} fa pensare a in-, ma il contrario di ${i('comodo')} è ${b('scomodo')}.`,
      ],
      [
        'Il film è disinteressante.',
        'Il film è noioso.',
        `${en('Uninteresting')} non si traduce con un prefisso: ${b('noioso')}.`,
      ],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${en('I dislike')} non è ${i('mi dispiace')} (= ${en("I'm sorry")}): ${b('non mi piace')}.`,
      ],
      [
        'Parcheggiare qui è ilegale.',
        'Parcheggiare qui è illegale.',
        `Come ${en('illegal')}, ma in italiano con la doppia: ${b('illegale')}.`,
      ],
    ],
    en: [
      [
        'Questa sedia è incomoda.',
        'Questa sedia è scomoda.',
        `<em>Uncomfortable</em> suggests in-, but the opposite of ${i('comodo')} is ${b('scomodo')}.`,
      ],
      [
        'Il film è disinteressante.',
        'Il film è noioso.',
        `<em>Uninteresting</em> has no prefix form in Italian: ${b('noioso')}.`,
      ],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `“I dislike” is not ${i('mi dispiace')} (= I’m sorry): ${b('non mi piace')}.`,
      ],
      [
        'Parcheggiare qui è ilegale.',
        'Parcheggiare qui è illegale.',
        `Like <em>illegal</em>, but Italian doubles the l: ${b('illegale')}.`,
      ],
    ],
    es: [
      ['Lui è desonesto.', 'Lui è disonesto.', `«Des-» no existe en italiano: ${b('disonesto')}.`],
      ['Un uomo desconosciuto.', 'Un uomo sconosciuto.', `Desconocido → ${b('sconosciuto')}, con s-.`],
      [
        'Parcheggiare qui è ilegale.',
        'Parcheggiare qui è illegale.',
        `Con doble <strong>l</strong>: ${i('illegale, irregolare')}.`,
      ],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${i('Mi dispiace')} es «lo siento»; «no me gusta» es ${b('non mi piace')}.`,
      ],
    ],
    pt: [
      ['Lui è desonesto.', 'Lui è disonesto.', `«Des-» não existe em italiano: ${b('disonesto')}.`],
      ['Un uomo desconosciuto.', 'Un uomo sconosciuto.', `Desconhecido → ${b('sconosciuto')}, com s-.`],
      [
        'Parcheggiare qui è ilegale.',
        'Parcheggiare qui è illegale.',
        `Com <strong>l</strong> dobrado: ${i('illegale, irregolare')}.`,
      ],
      [
        'Devo desligare la luce.',
        'Devo spegnere la luce.',
        `«Desligar» é ${b('spegnere')}; o contrário de ${i('accendere')} não tem prefixo.`,
      ],
    ],
    fr: [
      [
        'Lui è malonesto.',
        'Lui è disonesto.',
        `« Malhonnête » → ${b('disonesto')} : le préfixe mal- n’existe pas ici.`,
      ],
      ['Un uomo inconosciuto.', 'Un uomo sconosciuto.', `« Inconnu » → ${b('sconosciuto')}, avec s-.`],
      [
        'Devo decaricare la macchina.',
        'Devo scaricare la macchina.',
        `« Décharger » → ${b('scaricare')} : dé- devient s-.`,
      ],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${i('Dispiacere')} n’est pas « déplaire » : ${b('non mi piace')}.`,
      ],
    ],
    de: [
      [
        'Questa sedia è incomoda.',
        'Questa sedia è scomoda.',
        `„Unbequem“: Das Gegenteil von ${i('comodo')} ist ${b('scomodo')}, mit s-.`,
      ],
      [
        'Il film è disinteressante.',
        'Il film è noioso.',
        `„Uninteressant“ hat kein Gegenstück mit Vorsilbe: ${b('noioso')}.`,
      ],
      ['Ho un svantaggio.', 'Ho uno svantaggio.', `Vor s + Konsonant steht ${b('uno')}: ${i('uno svantaggio')}.`],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${i('Mi dispiace')} heißt „es tut mir leid“; „es gefällt mir nicht“ ist ${b('non mi piace')}.`,
      ],
    ],
    cs: [
      [
        'Questa sedia è incomoda.',
        'Questa sedia è scomoda.',
        `„Nepohodlný“: opak ${i('comodo')} je ${b('scomodo')}, s předponou s-.`,
      ],
      [
        'Il film è disinteressante.',
        'Il film è noioso.',
        `„Nezajímavý“ nemá v italštině tvar s předponou: ${b('noioso')}.`,
      ],
      ['Ho un svantaggio.', 'Ho uno svantaggio.', `Před s + souhláskou je člen ${b('uno')}: ${i('uno svantaggio')}.`],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${i('Mi dispiace')} znamená „je mi líto“; „nechutná mi“ je ${b('non mi piace')}.`,
      ],
    ],
    pl: [
      [
        'Questa sedia è incomoda.',
        'Questa sedia è scomoda.',
        `„Niewygodny”: przeciwieństwo ${i('comodo')} to ${b('scomodo')}, z s-.`,
      ],
      [
        'Il film è disinteressante.',
        'Il film è noioso.',
        `„Nieciekawy” nie ma po włosku formy z przedrostkiem: ${b('noioso')}.`,
      ],
      [
        'Ho un svantaggio.',
        'Ho uno svantaggio.',
        `Przed s + spółgłoska jest rodzajnik ${b('uno')}: ${i('uno svantaggio')}.`,
      ],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${i('Mi dispiace')} znaczy „przykro mi”; „nie lubię” to ${b('non mi piace')}.`,
      ],
    ],
    tr: [
      [
        'Ho un disvantaggio.',
        'Ho uno svantaggio.',
        `“Dezavantaj” gibi düşünmeyin: ${b('uno svantaggio')}, s- ile ve tanımlık ${i('uno')}.`,
      ],
      ['È inpossibile.', 'È impossibile.', `p’den önce ${i('in-')}, ${b('im-')} olur.`],
      [
        'Il film è disinteressante.',
        'Il film è noioso.',
        `“İlginç değil” için önekli bir kelime yoktur: ${b('noioso')}.`,
      ],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${i('Mi dispiace')} “üzgünüm” demektir; “sevmiyorum” ${b('non mi piace')}.`,
      ],
    ],
    ja: [
      ['È inpossibile.', 'È impossibile.', `p の前では ${i('in-')} が ${b('im-')} になります。`],
      ['Ho un svantaggio.', 'Ho uno svantaggio.', `s＋子音で始まる名詞の前では不定冠詞は ${b('uno')}。`],
      ['Il film è disinteressante.', 'Il film è noioso.', `「つまらない」は接頭辞では作れません：${b('noioso')}。`],
      [
        'Mi dispiace il caffè.',
        'Non mi piace il caffè.',
        `${i('Mi dispiace')} は「残念です」。「好きではない」は ${b('non mi piace')}。`,
      ],
    ],
  },
  'grammatica/b1/nomi-alterati.html': {
    it: [
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `Con ${i('-one')} molti nomi femminili diventano maschili: ${b('il portone')}.`,
      ],
      [
        'Non dire parolone!',
        'Non dire parolacce!',
        `${en('Swear words')} sono le ${b('parolacce')}; ${i('i paroloni')} sono le parole difficili.`,
      ],
      ['Quel signore è un uomone.', 'Quel signore è un omone.', `${i('Uomo')} + -one perde la u: ${b('omone')}.`],
    ],
    en: [
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `With ${i('-one')} many feminine nouns become masculine: ${b('il portone')}.`,
      ],
      [
        'Non dire parolone!',
        'Non dire parolacce!',
        `Swear words are ${b('parolacce')}; ${i('paroloni')} are pompous words.`,
      ],
      ['Quel signore è un uomone.', 'Quel signore è un omone.', `${i('Uomo')} + -one loses the u: ${b('omone')}.`],
    ],
    es: [
      ['Un gattito.', 'Un gattino.', `«-ito» no existe en italiano: ${b('-ino')}.`],
      [
        'Che cagnaccio grande e bello!',
        'Che cagnone grande e bello!',
        `Un «perrazo» es ${b('un cagnone')}; ${i('un cagnaccio')} es un perro malo.`,
      ],
      [
        'Vivono in una casuccia orribile.',
        'Vivono in una casaccia.',
        `«Casucha» es ${b('casaccia')}; ${i('una casuccia')} es una casita acogedora.`,
      ],
    ],
    pt: [
      ['Un gattinho.', 'Un gattino.', `«-inho» → ${b('-ino')}.`],
      [
        'Che cagnaccio grande e bello!',
        'Che cagnone grande e bello!',
        `O cachorrão é ${b('un cagnone')}; ${i('un cagnaccio')} é um cachorro mau.`,
      ],
      ['Prendiamo un caffezinho?', 'Prendiamo un caffè?', `O «cafezinho» brasileiro é simplesmente ${b('un caffè')}.`],
    ],
    fr: [
      [
        'Che bel gattone piccolo!',
        'Che bel gattino!',
        `« Chaton » : le diminutif est ${b('-ino')} ; ${i('-one')} agrandit.`,
      ],
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `Avec ${i('-one')}, le féminin devient souvent masculin : ${b('il portone')}.`,
      ],
      ['Quel signore è un uomone.', 'Quel signore è un omone.', `${i('Uomo')} + -one perd le u : ${b('omone')}.`],
    ],
    de: [
      [
        'Il casetta è bella.',
        'La casetta è bella.',
        `„Das Häuschen“ ist sächlich, aber das Italienische behält das Geschlecht: ${b('la casetta')}.`,
      ],
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `Mit ${i('-one')} wird das weibliche Wort oft männlich: ${b('il portone')}.`,
      ],
      ['Quel signore è un uomone.', 'Quel signore è un omone.', `${i('Uomo')} + -one: Das u fällt weg, ${b('omone')}.`],
    ],
    cs: [
      [
        'Che cagnaccio grande e bello!',
        'Che cagnone grande e bello!',
        `„Psisko“ ve smyslu velký pes je ${b('cagnone')}; ${i('cagnaccio')} je zlý pes.`,
      ],
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `S ${i('-one')} se ženský rod často mění na mužský: ${b('il portone')}.`,
      ],
      ['Quel signore è un uomone.', 'Quel signore è un omone.', `${i('Uomo')} + -one ztrácí u: ${b('omone')}.`],
    ],
    pl: [
      [
        'Che cagnaccio grande e bello!',
        'Che cagnone grande e bello!',
        `„Psisko” w znaczeniu duży pies to ${b('cagnone')}; ${i('cagnaccio')} to zły pies.`,
      ],
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `Z ${i('-one')} rodzaj żeński często zmienia się na męski: ${b('il portone')}.`,
      ],
      ['Quel signore è un uomone.', 'Quel signore è un omone.', `${i('Uomo')} + -one traci u: ${b('omone')}.`],
    ],
    tr: [
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `${i('-one')} ile pek çok dişil isim eril olur: ${b('il portone')}.`,
      ],
      [
        'Non dire parolone!',
        'Non dire parolacce!',
        `Küfür ${b('parolacce')}’dir; ${i('paroloni')} “büyük, süslü sözler” demektir.`,
      ],
      ['Quel signore è un uomone.', 'Quel signore è un omone.', `${i('Uomo')} + -one: u düşer, ${b('omone')}.`],
    ],
    ja: [
      [
        'La portona è chiusa.',
        'Il portone è chiuso.',
        `${i('-one')} がつくと女性名詞が男性名詞になることが多い：${b('il portone')}。`,
      ],
      [
        'Non dire parolone!',
        'Non dire parolacce!',
        `汚い言葉は ${b('parolacce')}。${i('paroloni')} は「大げさな言葉」です。`,
      ],
      [
        'Quel signore è un uomone.',
        'Quel signore è un omone.',
        `${i('Uomo')}＋-one では u が消えます：${b('omone')}。`,
      ],
    ],
  },
};
