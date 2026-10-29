// Avvisa Bing (e Yandex, Seznam, Naver…) delle pagine nuove o cambiate con
// IndexNow, così le vede in pochi minuti invece di aspettare il crawler.
// Bing porta al sito più visite di Google (Cloudflare, ottobre 2026).
//
// Uso:
//   node scripts/indexnow.mjs --since <commit>   pagine cambiate dopo quel commit
//   node scripts/indexnow.mjs --all              tutte le pagine della sitemap
//   aggiungere --dry-run per vedere l'elenco senza inviarlo
//
// Le pagine cambiate si ricavano da `git diff` su src/html e src/pages e si
// tengono solo quelle presenti in public/sitemap.xml. La chiave è il file
// public/<chiave>.txt, pubblicato con il sito. Lo lancia il workflow di deploy
// dopo la pubblicazione.

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const HOST = 'italianoconmartin.com';
const KEY = '56ed333318307916e33e31522f2f4313';
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const sinceIndex = args.indexOf('--since');

const decodeEntities = (text) => text.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16))).replace(/&amp;/g, '&');

const sitemapUrls = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeURI(decodeEntities(match[1])));
const inSitemap = new Set(sitemapUrls);

function pathToUrl(file) {
  const match = file.match(/^src\/(?:html|pages)\/(.+?)(?:\.astro)?$/);
  if (!match) return null;
  let route = match[1];
  if (route === 'index.html' || route === 'index') return `https://${HOST}/`;
  route = route.replace(/\/index(?:\.html)?$/, '/');
  if (!route.endsWith('/') && !route.endsWith('.html')) route += '/';
  return `https://${HOST}/${route}`;
}

let urls;
if (args.includes('--all')) {
  urls = sitemapUrls;
} else if (sinceIndex !== -1 && args[sinceIndex + 1]) {
  const since = args[sinceIndex + 1];
  let changed = '';
  try {
    changed = execFileSync('git', ['-c', 'core.quotepath=off', 'diff', '--name-only', since, 'HEAD', '--', 'src/html', 'src/pages'], { encoding: 'utf8' });
  } catch {
    console.log(`IndexNow: commit ${since} non trovato, non invio niente.`);
    process.exit(0);
  }
  urls = [...new Set(changed.split('\n').filter(Boolean).map(pathToUrl).filter((url) => url && inSitemap.has(url)))];
} else {
  console.error('Uso: node scripts/indexnow.mjs --since <commit> | --all [--dry-run]');
  process.exit(1);
}

if (urls.length === 0) {
  console.log('IndexNow: nessuna pagina cambiata.');
  process.exit(0);
}

console.log(`IndexNow: ${urls.length} pagine`);
if (dryRun) {
  for (const url of urls) console.log(`  ${url}`);
  process.exit(0);
}

// IndexNow accetta fino a 10.000 indirizzi per richiesta.
for (let start = 0; start < urls.length; start += 10000) {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(start, start + 10000).map((url) => encodeURI(url)) }),
  });
  console.log(`IndexNow: risposta ${response.status} ${response.statusText}`);
  // 200 e 202 vanno bene; un errore non deve bloccare la pubblicazione.
}
