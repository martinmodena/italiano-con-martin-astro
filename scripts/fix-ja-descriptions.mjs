// Descrizioni giapponesi riscritte a mano (2026-10-01): erano traduzioni automatiche
// goffe o sbagliate («ベリーダンス» = danza del ventre per la danza delle api, «評価»
// = valutazione per «lettura graduata», «仮説期間» per periodo ipotetico, «イタリア料理»
// per gli oggetti della cucina…). Imposta description, og:description e
// twitter:description; «og» vale per Open Graph e Twitter, se manca si usa «d».
// Idempotente. Uso: node scripts/fix-ja-descriptions.mjs [--dry-run]
import fs from 'fs';

const DRY = process.argv.includes('--dry-run');
const PAGES = {
  'dokkai/dna-no-fushigi': {
    d: '小さな細胞核に2メートルものDNAが収まっている。その長さと折りたたみ方、遺伝のしくみ、遺伝子のコピーと読み取りを、B2〜C1のイタリア語で読む読み物。単語、読解問題、無料PDF付き。',
    og: '小さな核の中に、2メートルのDNA。どうやって折りたたまれ、コピーされ、間違いを直され、読み取られるのか。',
  },
  'dokkai/イルカソナー': {
    d: 'イルカのソナーについてのイタリア語の読み物（A2〜B1）。音で「見る」反響定位のしくみと、その驚くほどの正確さ。単語、読解問題、無料PDF付き。',
    og: 'イルカにわかるのは、物の場所だけではない。音だけで、その形や材質、中の構造まで知ることができる。',
  },
  'dokkai/ヒ-サ-の作り方': {
    d: 'ピザの作り方についてのやさしいイタリア語の読み物（A1〜A2）。生地、発酵、ふくらんだ縁「コルニチョーネ」、そしてナポリの文化。単語、読解問題、無料PDF付き。',
    og: 'ピザを作るには、小麦粉、水、酵母、時間、オーブン、そして手の動きを知ることが大切。レシピが文化になる。',
  },
  'dokkai/ミツハ-チ-特徴と言語': {
    d: 'ミツバチについてのイタリア語の読み物（A2〜B1）。巣での暮らし、受粉、おしりを振って花の場所を伝える「8の字ダンス」、動物のコミュニケーション。単語、読解問題、無料PDF付き。',
    og: 'ミツバチはハチミツを作るだけではない。複雑な社会をつくり、ダンスで食べ物のある場所を仲間に伝える。',
  },
  'dokkai/人工知能の未来': {
    d: '人工知能の未来についてのイタリア語の読み物（B1〜C1）。メリットとリスク、学校と仕事、そして責任はだれにあるのか。単語、読解問題、無料PDF付き。',
    og: 'AIの未来を決めるのはプログラムだけではない。ルール、人の能力、データ、そして人間の判断だ。',
  },
  'dokkai/人間の記憶の仕組み': {
    d: '人間の記憶のしくみについてのイタリア語の読み物（B2〜C1）。注意、ワーキングメモリ、思い出、そして忘れること。単語、読解問題、無料PDF付き。',
    og: '記憶は思っているほど写真のようではない。よく覚えておくには、注意、つながり、そして思い出す練習が必要だ。',
  },
  'dokkai/記憶術': {
    d: '記憶術についてのイタリア語の読み物（A2〜B1）。新しい単語を覚えるための実践的なコツと、それが効く科学的な理由。単語、読解問題、無料PDF付き。',
    og: '覚えるとは、何度もくり返すことではない。つながりを作り、ちょうどいいときに思い出し、生きた場面で言葉を使うことだ。',
  },
  'dokkai/index': {
    og: '科学、文化、歴史の読み物と童話を、それぞれに合ったレベル（A1〜C1）のイタリア語で。',
  },
  'monogatari/hadaka-no-osama': {
    og: 'はだかの王様（皇帝の新しい服）：3つのレベル（A1〜B1）で書き直した、イタリア語の童話。',
  },
  'bunpo/a1/イタリア語の形容詞': {
    d: 'イタリア語の品質形容詞を学びましょう：名詞の性と数への一致、名詞の前に置くか後ろに置くか、例文、インタラクティブな練習問題つき。',
  },
  'bunpo/a1/イタリア語の所有形容詞と代名詞': {
    og: 'イタリア語の所有形容詞・所有代名詞（mio、tuo、suo、nostro、vostro、loro）を、表、例文、練習問題で学びます。',
  },
  'bunpo/b2/イタリア語の-periodo-ipotetico': {
    d: 'イタリア語の periodo ipotetico（仮定文）を学びましょう：現実・可能性・非現実の3つの型を、例文とインタラクティブな練習問題で。',
  },
  'goi/index': {
    og: 'テーマ別に整理したイタリア語の単語を、写真、例文、練習問題で。',
  },
  'goi/italian-clothing-vocabulary': {
    d: '服や身につけるものを表すイタリア語 57 語を、写真、例文 3 つ、発音、練習問題で学べます。',
  },
  'goi/italian-kitchen-vocabulary': {
    d: '冷蔵庫、オーブン、流し台、鍋、フライパン、まな板など、キッチンにあるものを表すイタリア語 20 語を、写真、例文 3 つ、発音、練習問題で学べます。',
  },
};

const META_RE = /const meta = (\{[^]*?\r?\n\s*\});\r?\n---/;
let changed = 0;
for (const [key, { d, og }] of Object.entries(PAGES)) {
  const p = `src/pages/ja/${key}${key.endsWith('index') ? '.astro' : '.html.astro'}`;
  const text = fs.readFileSync(p, 'utf8');
  const meta = JSON.parse(text.match(META_RE)[1]);
  const before = JSON.stringify(meta);
  if (d) meta.description = d;
  const social = og ?? d;
  meta.og = meta.og.map(([k, v]) => [k, /^(og|twitter):description$/.test(k) ? social : v]);
  if (JSON.stringify(meta) === before) continue;
  changed++;
  console.log(`${p}\n  D: ${meta.description}\n  O: ${social}`);
  if (!DRY)
    fs.writeFileSync(
      p,
      text.replace(META_RE, () => `const meta = ${JSON.stringify(meta, null, 2)};\n---`)
    );
}
console.log(`${changed} pagine${DRY ? ' (dry-run)' : ''}`);
