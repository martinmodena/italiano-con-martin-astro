#!/usr/bin/env node
// Foto della lezione «La pronuncia italiana» (2026-10-17). Prompt e stile in docs/prompt-immagini-pronuncia.md.
// Uso: node scripts/generate-pronuncia-images.mjs <cartella-di-uscita> [--only casa,cassa] [--quality high]
// Le facce delle vocali e la testata non passano da qui: si fanno con generate-image.mjs (gemini).
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

for (const line of existsSync('.env') ? readFileSync('.env', 'utf8').split('\n') : []) {
  const m = /^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
  if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const arg = (name) => (process.argv.indexOf(name) > 0 ? process.argv[process.argv.indexOf(name) + 1] : null);
const doc = readFileSync('docs/prompt-immagini-pronuncia.md', 'utf8');
const STYLE = /```\n([\s\S]*?)\n```/.exec(doc)[1].trim();
// Solo la prima sezione: le facce delle vocali hanno un altro modello.
const firstPart = doc.split('\n## ')[0];
const subjects = [...firstPart.matchAll(/^- \*\*([^*]+)\*\* \([^)]*\): (.+)$/gm)].map((m) => ({
  slug: m[1],
  subject: m[2],
}));
const outDir = process.argv[2];
const only = arg('--only') ? new Set(arg('--only').split(',')) : null;
const quality = arg('--quality') || 'high';
if (!outDir || outDir.startsWith('--')) throw new Error('Serve la cartella di uscita');
mkdirSync(outDir, { recursive: true });

let total = 0;
const todo = subjects.filter((s) => (!only || only.has(s.slug)) && !existsSync(path.join(outDir, `${s.slug}.png`)));
// A gruppi di 6, per non farsi limitare da OpenRouter.
for (let i = 0; i < todo.length; i += 6) {
  await Promise.all(
    todo.slice(i, i + 6).map(async ({ slug, subject }) => {
      const res = await fetch('https://openrouter.ai/api/v1/images', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'openai/gpt-image-1-mini',
          prompt: `${STYLE} Subject: ${subject}.`,
          size: '1024x1024',
          quality,
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
}
console.log(`Immagini: ${todo.length}. Costo: $${total.toFixed(4)}`);
