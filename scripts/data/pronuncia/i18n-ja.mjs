// «La pronuncia italiana»: pagina giapponese (です・ます, istruzioni in 〜ましょう). Trappole per chi parla
// giapponese: r e l, le vocali aggiunte (sport, strada), si / tu / di / fu, v e b, le vocali lunghe, la h.
// Buona notizia: le doppie esistono già (っ e ん: カッサ, ノンノ).
export default {
  h1: 'イタリア語の発音',
  lead: 'イタリア語はほとんどいつも書いてあるとおりに読みます。いくつかのルールを覚えれば、どんな単語も声に出して読めるようになります。このレッスンでは、聞きながら学びます。5つの母音、CとG、特別な音、二重子音（<em lang="it">casa</em> と <em lang="it">cassa</em>、どちら？）、アクセント、日本語話者がつまずきやすいポイント、そして練習用の早口言葉が4つあります。',
  description:
    '日本語話者のためのイタリア語の発音（音声つき）：母音、c と g、gn、gli、sc、z、r と l の区別、二重子音（casa / cassa、nono / nonno）、アクセント、早口言葉。リスニング練習44問と、自分の声を録音して比べられる機能つき。',
  card: '母音、CとG、二重子音（casa / cassa）、アクセント。音声とリスニング練習つき。',
  heroAlt: 'イタリアの町の屋根が見える窓の前、木のテーブルに置かれた古いマイク',
  nav: {
    vocali: '母音',
    cg: 'CとG',
    suoni: '特別な音',
    doppie: '二重子音',
    accento: 'アクセント',
    trappole: 'つまずきポイント',
    scioglilingua: '早口言葉',
  },
  ui: {
    play: '聞く',
    slow: 'ゆっくり',
    record: '録音する',
    stop: '止める',
    yours: 'あなたの声',
    micError: 'マイクが使えません。ブラウザの許可を確認してください。',
    correct: '正解です！',
    wrong: '残念、正解は：',
    listenFirst: 'まず聞いてから選びましょう。',
    score: '{t}問中{n}問',
    again: 'もう一回',
    total: 'あなたの結果',
    vs: 'または',
  },
  how: {
    h2: 'このレッスンの使い方',
    html: '<p><strong>▶</strong> を押すと単語が聞けます。<strong>🐢</strong> を押すとゆっくり聞けます。リスニング練習では、ページがランダムに単語を選びます。よく聞いて、聞こえた単語を選びましょう。<strong>🎙 録音する</strong> で自分の声を録音して、お手本と比べることができます。録音はブラウザの中だけに残り、どこにも送信されません。</p><p class="mini-note"><strong>イタリア語の秘密：</strong>ひらがなと同じように、それぞれの文字は（ほぼ）いつも同じ音です。読まない文字はひとつだけ、<em lang="it">h</em> です。このページのルールを覚えれば、初めて見る単語も読めるようになります。</p>',
  },
  vowels: {
    h2: '5つの母音：いつもはっきり、最後まで',
    intro:
      '<p>うれしいことに、イタリア語の母音は日本語と同じ「あ・い・う・え・お」の5つです。ただし <em lang="it">u</em> だけは唇を前に丸く突き出します。顔を見てください。口の形で半分は決まります。</p>',
    cues: {
      a: {
        cue: '病院で「あーんしてください」と言われたときのように、口を大きく開けます。',
        alt: '病院にいるように口を大きく開けるおばあさん',
      },
      e: { cue: '口を半分開けて、少し横に広げます。「え？なに？」', alt: '口を少し開けて「え？」と言う若い男性' },
      i: { cue: '写真の笑顔のように、唇を横に引きます。', alt: '写真を撮るときのように大きく笑う女の子' },
      o: { cue: '驚いたときの「おっ！」のように、唇を丸くします。', alt: '唇を丸くして「おっ！」と言う若い女性' },
      u: {
        cue: 'フクロウのように唇を前に突き出して「ウー」。日本語の「う」より唇を丸くします。',
        alt: 'フクロウのように「ウー」と言うひげのおじいさん',
      },
    },
    finalH3: '最後の母音もちゃんと聞こえる',
    final:
      '<p>イタリア語では、単語の最後の母音を弱くしたり消したりしません。<em lang="it">pizz<strong>a</strong></em>、<em lang="it">Rom<strong>a</strong></em>、<em lang="it">gelat<strong>o</strong></em>、<em lang="it">nott<strong>e</strong></em>。最後の母音が、ひとつか複数か（<em lang="it">la pizza</em>、<em lang="it">le pizze</em>）、男性か女性かを教えてくれることもよくあります。</p>',
    eoH3: 'おまけ：E と O には2つの声がある',
    eo: '<p><em lang="it">e</em> と <em lang="it">o</em> には、口を広く開ける音と狭く閉じる音があります。有名な例は <em lang="it">la pèsca</em>（桃）と <em lang="it">la pésca</em>（釣り）。書き方は同じです。でも安心してください。ミラノとローマとナポリでは、イタリア人同士でも意見が合いません。どちらで言っても通じます。</p>',
    peach: 'la pèsca：桃',
    fishing: 'la pésca：釣り',
  },
  cg: {
    h2: 'CとG：かたい音？やわらかい音？',
    intro:
      '<p><em lang="it">c</em> と <em lang="it">g</em> には2つの音があります。決めるのは次の文字です。<em lang="it">a</em>、<em lang="it">o</em>、<em lang="it">u</em> の前ではかたい音、<em lang="it">e</em> と <em lang="it">i</em> の前ではやわらかい音になります。</p>',
    cols: ['つづり', '音', '例'],
    sounds: {
      k: 'かたい音：「カ・コ・ク」の <strong>k</strong>',
      c: 'やわらかい音：「チャ・チェ・チ」の <strong>ch</strong>',
      g: 'かたい音：「ガ・ゴ・グ」の <strong>g</strong>',
      j: 'やわらかい音：「ジャ・ジェ・ジ」の <strong>j</strong>',
    },
    tricks:
      '<p class="mini-note"><strong>H は壁：</strong><em lang="it">c</em> と <em lang="it">e</em>・<em lang="it">i</em> のあいだに <em lang="it">h</em> が入ると、やわらかくなりません。だから <em lang="it">chiave</em>（キアーヴェ）や <em lang="it">spaghetti</em>（スパゲッティ）はかたい音のままです。</p><p class="mini-note"><strong>I は聞こえない橋：</strong><em lang="it">ciao</em>、<em lang="it">giallo</em>、<em lang="it">giorno</em> の <em lang="it">i</em> は、子音をやわらかくするためだけにあります。「チ・アオ」ではなく、ひとつの音節で「チャオ」です。</p>',
    exH3: '練習1 · かたい音？やわらかい音？',
    exP: '単語を読んで、音を選びましょう。答えると発音が聞こえます。',
    hard: 'かたい音（casa, gatto）',
    soft: 'やわらかい音（ciao, gelato）',
  },
  sounds: {
    h2: '特別な音',
    intro: '<p>覚えておきたい7つの文字の組み合わせです。単語を聞いて、声に出してまねしましょう。</p>',
    items: {
      gn: {
        title: '<em lang="it">gnocchi</em> の <em lang="it">gn</em>',
        text: '「ニャ・ニョ」のひとつの音です。<em lang="it">gnocchi</em> は「ニョッキ」、<em lang="it">bagno</em> は「バーニョ」。<em lang="it">g</em> は読みません。',
        alt: 'トマトソースとバジルのニョッキ',
      },
      gli: {
        title: '<em lang="it">aglio</em> の <em lang="it">gli</em>',
        text: 'やわらかい <strong>l</strong> で、「リャ・リョ」に近い音です。舌の真ん中を上あごにぴったりつけます。<em lang="it">aglio</em> は「アッリョ」、<em lang="it">figlio</em> は「フィッリョ」。<em lang="it">g</em> は読みません。',
        alt: 'にんにくひと玉',
      },
      sc: {
        title: '<em lang="it">sciarpa</em> の <em lang="it">sc</em>',
        text: '<em lang="it">e</em> と <em lang="it">i</em> の前では「シ・シェ」の音です。<em lang="it">scena</em> は「シェーナ」、<em lang="it">pesce</em> は「ペーシェ」。<em lang="it">a</em>、<em lang="it">o</em>、<em lang="it">u</em> の前と <em lang="it">h</em> がつくときは「スク」：<em lang="it">scuola</em>（スクオーラ）、<em lang="it">schiena</em>（スキエーナ）。',
        alt: '赤い毛糸のマフラー',
      },
      z: {
        title: '<em lang="it">pizza</em> と <em lang="it">zebra</em> の <em lang="it">z</em>',
        text: '2つの音があります。<em lang="it">pizza</em>、<em lang="it">grazie</em> は「ツ」の音（ピッツァ、グラーツィエ）、<em lang="it">zebra</em>、<em lang="it">zero</em> は「ヅ」の音です。間違えても誰も気づきません。地方によって変わるからです。',
        alt: 'トマトとにんにくとオレガノのピッツァ・マリナーラ',
      },
      s: {
        title: '<em lang="it">sole</em> と <em lang="it">rosa</em> の <em lang="it">s</em>',
        text: '単語の始めでは「サ・ス・セ・ソ」の <strong>s</strong> です。<em lang="it">sì</em>（はい）は「シ」ではなく、舌を歯に近づけた「スィ」。母音にはさまれると、北イタリアでは「ザ・ゾ」のように響きます。<em lang="it">rosa</em> は「ローザ」。',
        alt: 'ピンクのバラ',
      },
      r: {
        title: '<em lang="it">rana</em> の <em lang="it">r</em>',
        text: '日本語の「ら行」とよく似ています！舌先で上の歯の裏を一回はじきます（<em lang="it">caro</em>）。<em lang="it">rr</em> や単語の始めの <em lang="it">r</em> は、舌先を何回もふるわせる「巻き舌」です（<em lang="it">carro</em>、<em lang="it">Roma</em>）。',
        alt: '緑色のカエル',
      },
      h: {
        title: '<em lang="it">h</em>：はずかしがりやの文字',
        text: 'まったく音がありません。<em lang="it">ho</em>、<em lang="it">hai</em>、<em lang="it">ha</em>、<em lang="it">hanno</em> は「オ」「アイ」「ア」「アンノ」と読みます。書いた単語を区別したり、<em lang="it">c</em> と <em lang="it">g</em> をかたくしたりするためだけにあります。',
      },
    },
  },
  doubles: {
    h2: '二重子音：ネコのジャンプ',
    intro:
      '<p>二重子音は、ただ2回書くだけではありません。長く発音します。ジャンプする前のネコを思い浮かべてください。一瞬止まって、準備して……ジャンプ！<em lang="it">cassa</em> では <em lang="it">s</em> の所で声が一瞬止まりますが、<em lang="it">casa</em> では止まりません。</p>',
    catAlt: '段の端で身をかがめ、ジャンプしようとしているネコ',
    how: '<p class="mini-note"><strong>やり方：</strong>実は日本語にはもうあります！小さい「っ」と「ん」です。「きて」と「きって」の違いが、<em lang="it">casa</em>（カーサ）と <em lang="it">cassa</em>（カッサ）の違いです。<em lang="it">tutto</em> は「トゥット」、<em lang="it">pappa</em> は「パッパ」、<em lang="it">nonno</em> は「ノンノ」、<em lang="it">palla</em> は「パッラ」。カタカナで「ッ」や「ン」が入る所が、イタリア語の二重子音です。</p>',
    pairsH3: '1文字ですべてが変わる',
    anno: '<p class="mini-note"><strong>新年のあいさつに注意：</strong>大みそかには <em lang="it">Buon anno!</em>（あけましておめでとう）と、<em lang="it">n</em> を2つにして「ブオナンノ」と言います。<em lang="it">n</em> がひとつだけだと……食事中には口にしない体の部分に「おめでとう」と言うことになります。イタリア人は笑ってくれますが、「ン」はしっかり伸ばしましょう！</p>',
    exH3: '練習2 · 聞いて選ぶ',
    exP: '▶ を押して聞き、聞こえた単語を選びましょう。「もう一回」を押すと、ページが別の単語を選びます。',
  },
  stress: {
    h2: 'アクセント：声が強くなる所',
    intro:
      '<p>日本語は音の高さで区別しますが、イタリア語は強さと少しの長さで区別します。どの単語にも強い音節がひとつあり、たいていは後ろから2番目です。最後の母音にアクセントがあるときだけ、記号を書きます。</p>',
    groups: {
      penult: '後ろから2番目の音節：ほとんどの単語',
      last: '最後の音節：アクセント記号を書く',
      third: '後ろから3番目の音節：数は少ないが、よく使う単語',
    },
    anchorH3: 'アクセントひとつで、別の単語',
    anchor:
      '<p>文字は同じでもアクセントが違います。<em lang="it">l’àncora</em> は船のいかり、<em lang="it">ancóra</em> は「まだ・もう一度」という意味です。それから、お父さん（<em lang="it">papà</em>）を「<em lang="it">il papa</em>」と呼ばないように。それはバチカンに住むローマ教皇です！</p>',
    anchorShip: 'l’àncora：いかり',
    anchorMore: 'ancóra：もう一度、もっと',
    papa: 'il papà：お父さん',
    capito:
      '<p class="mini-note"><strong>チャンピオン：</strong><em lang="it">càpito</em>（たまたまある場所に行き着く）、<em lang="it">capìto</em>（わかった：<em lang="it">hai capito?</em>）、<em lang="it">capitò</em>（起こった）。文字は同じで、3つの別の単語です。</p>',
    exH3: '練習3 · 強い音節をタップ',
    exP: '単語を聞いて、声が強くなる音節をタップしましょう。',
  },
  traps: {
    h2: '日本語話者のつまずきポイント',
    intro:
      '<p>言語によって、つまずく場所は違います。日本語話者のアクセントが出やすい6つのくせと、その直し方を紹介します。</p>',
    easy: '<p class="mini-note"><strong>うれしいニュース：</strong>二重子音は、多くの学習者がいちばん苦労する所ですが、「っ」と「ん」がある日本語話者には簡単です。5つの母音も、ら行の <em lang="it">r</em> も、もう持っています。</p>',
    items: [
      {
        title: 'r と l を区別する',
        text: '<em lang="it">r</em> は「ら行」のように舌先で一回はじきます。<em lang="it">l</em> は舌先を上の歯の裏にぴったりつけたまま、舌の横から声を出します。「ン」の舌の位置のまま「ル」と言う感じです。<em lang="it">rana</em>（カエル）と <em lang="it">lana</em>（毛糸）、<em lang="it">mare</em>（海）と <em lang="it">male</em>（痛い）は別の単語です。',
        words: ['rana', 'lana', 'mare', 'male'],
      },
      {
        title: '子音のあとに母音を入れない',
        text: '<em lang="it">sport</em> は「スポーツ」ではなく、<em lang="it">strada</em> は「ストラーダ」ではありません。「ス」の「ウ」を言わずに、<em lang="it">s</em> から <em lang="it">t</em> へすぐ進みます。',
        words: ['sport', 'strada', 'grazie'],
      },
      {
        title: 'si、tu、di、fu に注意',
        text: '<em lang="it">sì</em> は「シ」ではなく「スィ」、<em lang="it">tutto</em> は「ツット」ではなく「トゥット」、<em lang="it">dire</em> は「ジレ」ではなく「ディーレ」。<em lang="it">f</em> は上の歯で下唇に軽くふれます：<em lang="it">fumo</em>。',
        words: ['sì', 'tutto', 'dire', 'fumo'],
      },
      {
        title: 'v と b は別の音',
        text: '<em lang="it">b</em> は両方の唇を閉じます。<em lang="it">v</em> は上の歯で下唇を軽くかんで、声を出します。<em lang="it">vino</em>（ワイン）は「ビーノ」ではありません。<em lang="it">bacca</em>（木の実）と <em lang="it">vacca</em>（牛）も別の単語です。',
        words: ['vino', 'bacca', 'vacca'],
      },
      {
        title: '母音を長くしない',
        text: 'カタカナでは「ローマ」「ミラノ」「ジェラート」と伸ばしますが、イタリア語には長い母音と短い母音の区別がありません。強い音節が少し長くなるだけです。長さが大事なのは、母音ではなく子音です。',
        words: ['Roma', 'Milano', 'gelato'],
      },
      {
        title: 'h は読まない',
        text: '<em lang="it">hotel</em> は「ホテル」ではなく「オテル」、<em lang="it">ho fame</em>（おなかがすいた）は「オ・ファーメ」です。',
        words: ['hotel', 'ho fame', 'hanno ragione'],
      },
    ],
    exH3: '練習4 · まぎらわしいペア',
    exP: 'r / l のペアが6つ、b / v のペアが2つ、一つの子音と二重子音のペアが2つです。聞いて選びましょう。',
  },
  twisters: {
    h2: '早口言葉：口のトレーニング',
    intro:
      '<p><em lang="it">Gli scioglilingua</em>（舌をほどくもの）は、「生麦生米生卵」のように、わざとつまずくように作られた文です。イタリアでは子どもに言わせて、みんなで笑います。聞いて、ゆっくりまねして、だんだん速くしましょう。録音して比べてみましょう！</p>',
    notes: [
      '「33人のトレント人がトレントに入った、33人みんなでトコトコと。」<em lang="it">r</em> と二重の <em lang="it">t</em> の練習：<em lang="it">tr</em> の連続です。',
      '「アポロンの息子アペレスは、鶏の皮でボールを作った。」二重子音（<em lang="it">palla</em>、<em lang="it">pelle</em>、<em lang="it">pollo</em>）と <em lang="it">gli</em> の音の練習です。',
      '「コックは台所で料理をして、いとこが料理をしないので、女のコックは横になって黙っていると言う。」かたい <em lang="it">c</em> とやわらかい <em lang="it">c</em> の練習：<em lang="it">cuoco</em>、<em lang="it">cuoce</em>、<em lang="it">cucina</em>、<em lang="it">giace</em>。',
      '「晴れている、晴れるだろう、晴れていなくても、晴れてくるだろう。」<em lang="it">s</em> と <em lang="it">r</em> の練習：<em lang="it">sereno</em>、<em lang="it">rasserenerà</em>。',
    ],
    challenge:
      '<p class="mini-note"><strong>チャレンジ：</strong>ひとつ目を3回続けて、速く、まちがえずに言えますか？ほとんどのイタリア人は言えません。</p>',
  },
  end: {
    h2: 'あなたの結果',
    text: 'リスニング練習は全部で44問です。何度でもやってみましょう。単語は毎回変わります。',
  },
  meanings: {
    casa: '家',
    cassa: 'レジ',
    nono: '9番目',
    nonno: 'おじいさん',
    pala: 'シャベル',
    palla: 'ボール',
    sete: 'のどの渇き',
    sette: '7',
    caro: '高い（値段）',
    carro: '荷車',
    capello: '髪の毛1本',
    cappello: '帽子',
    pena: 'かわいそう',
    penna: 'ペン',
    sono: '私は〜です',
    sonno: '眠気',
    rana: 'カエル',
    lana: '毛糸',
    mare: '海',
    male: '痛い',
    bacca: '木の実',
    vacca: '牛',
    vino: 'ワイン',
    voto: '投票',
    foto: '写真',
    alto: '背が高い',
    auto: '車',
    cane: '犬',
    cani: '犬（複数）',
    chiave: 'かぎ',
    chiavi: 'かぎ（複数）',
    pesche: '桃（複数）',
  },
};
