import { readFileSync, writeFileSync } from 'node:fs';

const H = 'src/html/';
const pairs = [
  ['favole', 'letture', 'i-vestiti-nuovi-dellimperatore.html'],
  ['en/stories', 'en/readings', 'the-emperors-new-clothes.html'],
  ['es/cuentos', 'es/lecturas', 'los-vestidos-nuevos-del-emperador.html'],
  ['fr/histoires', 'fr/lectures', 'les-habits-neufs-de-lempereur.html'],
  ['cs/pribehy', 'cs/cteni', 'cisarovy-nove-saty.html'],
  ['de/geschichten', 'de/lesetexte', 'des-kaisers-neue-kleider.html'],
  ['ja/monogatari', 'ja/dokkai', 'hadaka-no-osama.html'],
  ['pl/historie', 'pl/czytanki', 'nowe-szaty-cesarza.html'],
  ['tr/hikayeler', 'tr/okumalar', 'imparatorun-yeni-giysileri.html'],
];

for (const [storiesDir, readingsDir, file] of pairs) {
  const srcPath = `${H}${storiesDir}/index.html`;
  const dstPath = `${H}${readingsDir}/index.html`;
  const src = readFileSync(srcPath, 'utf8');

  const re = new RegExp(`<a class="story-tile" href="([^"]*${file.replace(/\./g, '\.')})"`);
  const m = re.exec(src);
  if (!m) { console.log('TILE MANCANTE', srcPath); continue; }
  const start = m.index;
  const end = src.indexOf('</a>', start);
  let tile = src.slice(start, end + 4);
  if (tile.includes('<div')) { console.log('TILE CON DIV ANNIDATO', srcPath); continue; }
  const href = m[1];
  if (!href.startsWith('/')) {
    const dir = storiesDir.includes('/') ? storiesDir.split('/')[1] : storiesDir;
    tile = tile.replace(`href="${href}"`, `href="../${dir}/${href}"`);
  }

  let dst = readFileSync(dstPath, 'utf8');
  if (dst.includes(`story-tile" href="${href.startsWith('/') ? href : ''}`) && dst.includes(file)) {
    const already = new RegExp(`<a class="story-tile"[^>]*${file.replace(/\./g, '\.')}`).test(dst);
    if (already) { console.log('GIA PRESENTE', dstPath); continue; }
  }
  const fav = dst.indexOf('id="favole"');
  if (fav < 0) { console.log('SEZIONE FAVOLE MANCANTE', dstPath); continue; }
  const listOpen = dst.indexOf('<div class="story-list">', fav);
  const openEnd = listOpen + '<div class="story-list">'.length;
  const listClose = dst.indexOf('</div>', openEnd);
  if (listOpen < 0 || listClose < 0) { console.log('LISTA MANCANTE', dstPath); continue; }
  if (dst.slice(openEnd, listClose).includes('<div')) { console.log('DIV ANNIDATO NELLA LISTA', dstPath); continue; }
  dst = dst.slice(0, listClose) + tile + dst.slice(listClose);
  writeFileSync(dstPath, dst, 'utf8');
  console.log('OK ->', dstPath);
}
