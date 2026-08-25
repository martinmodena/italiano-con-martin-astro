import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const files = execSync('grep -rl "resource-directory" src/html', { encoding: 'utf8' }).trim().split('\n');
let n = 0;
for (const f of files) {
  let html = readFileSync(f, 'utf8');
  const before = html;
  for (;;) {
    const i = html.indexOf('<nav class="resource-directory"');
    if (i < 0) break;
    const j = html.indexOf('</nav>', i);
    if (j < 0) { console.log('NAV NON CHIUSO', f); break; }
    html = html.slice(0, i) + html.slice(j + 6);
  }
  if (html !== before) { writeFileSync(f, html, 'utf8'); n++; console.log('pulito', f); }
}
console.log('file modificati:', n);
