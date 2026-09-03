# Immagine della lettura «La storia della mafia in Italia»

Stato al 2026-09-03: **immagine definitiva generata e pubblicata**, con
`scripts/generate-image.mjs` via OpenRouter (`google/gemini-3-pro-image`), costo $0.13.
`public/assets/reading-storia-mafia-italia.webp` e `-card.webp` sono nello stesso stile di
`reading-storia-caffe-italia.webp`: collage seppia, oggetti fotorealistici in primo piano
(cassetta di limoni, registro aperto, chiave, coppola, giornale) fusi con un'incisione
ottocentesca sul muro (contadini e proprietario a cavallo) e una finestra su una via di
Palermo. Il prompt sotto resta come riferimento, per rigenerare o per le prossime letture
storiche.

## Formati

| File                                    | Dimensioni | Uso                            |
| --------------------------------------- | ---------- | ------------------------------ |
| `reading-storia-mafia-italia.webp`      | 960×540    | figura in cima alla pagina     |
| `reading-storia-mafia-italia-card.webp` | 640×360    | tessera nell'indice `letture/` |

Si genera una sola immagine 16:9 (per esempio 1536×864) e la si riduce ai due formati.

## Prompt

```
Warm sepia historical collage illustration, aged parchment texture with faded ink
stains, cinematic 16:9. Foreground on a dark wooden table: a wooden crate of ripe
Sicilian lemons with leaves, an open 19th-century leather ledger with handwritten
columns, a heavy iron key, a folded old newspaper, a black flat cap. Middle ground:
the aged paper wall shows a faded 19th-century engraving of Sicilian peasants and a
landowner on horseback beside a stone country estate, blending into the paper.
Right side: an open window revealing a sunlit old Palermo street with baroque stone
buildings and a wrought-iron lamp. Muted brown, ochre and amber palette, soft warm
light, photorealistic objects blended with vintage engraving, no text, no words, no
letters, no logos, no weapons, no modern objects.
```

Vincoli da rispettare: nessun testo, nessuna arma, nessun volto riconoscibile di
persone reali, nessun riferimento a persone o clan esistenti. L'immagine racconta il
contesto storico (terra, agrumi, contratti, città), non la criminalità.

Testo alternativo già in pagina: «Limoni, registri e vecchie stampe della Sicilia
dell'Ottocento». Se l'immagine definitiva mostra soggetti diversi, va aggiornato
l'attributo `alt` in tutte e 9 le lingue.

## Come rigenerarla (o farne una nuova simile)

```
node scripts/generate-image.mjs --slug reading-storia-mafia-italia \
  --prompt-file docs/prompt-immagine-storia-mafia.md
npm run build
python scripts/generate-pdfs.py --only storia-della-mafia-in-italia
```

`generate-image.mjs` chiama OpenRouter (chiave in `.env`, mai in questo repo),
estrae automaticamente il prompt dal blocco di codice qui sopra e salva già le
due misure in `public/assets/`. Vedi `scripts/generate-image.mjs --help`-style
commenti in cima al file per le altre opzioni (`--model`, `--prompt` diretto).
