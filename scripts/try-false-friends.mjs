#!/usr/bin/env node
// Prova delle vignette dei falsi amici (2026-10-06). Prompt e stile in docs/prompt-immagini-falsi-amici.md.
// Uso: node scripts/try-false-friends.mjs <cartella-di-uscita> [--only burro,caldo] [--doc <file dei prompt>]
// Il file dei prompt di default è quello spagnolo; per l'inglese --doc docs/prompt-immagini-falsi-amici-en.md.
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

for (const line of existsSync('.env') ? readFileSync('.env', 'utf8').split('\n') : []) {
  const m = /^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
  if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const docArg = process.argv.indexOf('--doc');
const doc = readFileSync(docArg > 0 ? process.argv[docArg + 1] : 'docs/prompt-immagini-falsi-amici.md', 'utf8');
const STYLE = /```\n([\s\S]*?)\n```/.exec(doc)[1].trim();
const subjects = [...doc.matchAll(/^- \*\*([^*]+)\*\* \([^)]*\): (.+)$/gm)].map((m) => ({ slug: m[1], subject: m[2] }));
const outDir = process.argv[2];
const onlyArg = process.argv.indexOf('--only');
const only = onlyArg > 0 ? new Set(process.argv[onlyArg + 1].split(',')) : null;
if (!outDir) throw new Error('Serve la cartella di uscita');
mkdirSync(outDir, { recursive: true });

let total = 0;
await Promise.all(
  subjects
    .filter((s) => !only || only.has(s.slug))
    .map(async ({ slug, subject }) => {
      const res = await fetch('https://openrouter.ai/api/v1/images', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'openai/gpt-image-1-mini',
          prompt: `${STYLE} Subject: ${subject}.`,
          size: '1024x1024',
          quality: 'medium',
          output_format: 'png',
          n: 1,
        }),
      });
      const json = await res.json();
      const item = json.data?.[0];
      if (!res.ok || !item?.b64_json) return console.log(`${slug}: ERRORE ${JSON.stringify(json).slice(0, 200)}`);
      writeFileSync(path.join(outDir, `${slug}.png`), Buffer.from(item.b64_json, 'base64'));
      total += json.usage?.cost || 0;
      console.log(`${slug}: ok`);
    })
);
console.log(`Costo: $${total.toFixed(4)}`);
