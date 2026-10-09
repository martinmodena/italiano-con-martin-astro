import { readFileSync, globSync } from 'node:fs';
import * as cheerio from 'cheerio';
const re = /\b(los|las|está|también|cuento|niveles|Lee|Repasa|Prueba tú|Palabras útiles|lectura|preguntas|ejercicios|aprende|nuestro|usted|¿|¡)/g;
for (const f of globSync('dist/pt/**/*.html')) {
  const $ = cheerio.load(readFileSync(f, 'utf8'));
  $('[lang="it"],script,style,.story-text').remove();
  const t = $('body').text().replace(/\s+/g, ' ') + ' ' + $('title').text() + ' ' + ($('meta[name=description]').attr('content') || '');
  const m = [...t.matchAll(re)].map((x) => t.slice(Math.max(0, x.index - 30), x.index + 30));
  if (m.length) console.log(f, m.slice(0, 3));
}
