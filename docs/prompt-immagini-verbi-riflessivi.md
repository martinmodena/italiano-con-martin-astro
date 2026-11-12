# Immagini della lezione «I verbi riflessivi di tutti i giorni» (2026-11-12)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/reflexive-verbs.mjs` (41 verbi in `reflexiveVerbs`). Lo stile è `PEOPLE_STYLE` in `scripts/generate-animal-images.mjs`, a qualità `low` (quella predefinita del set, come promesso a Martin). Modello `openai/gpt-image-1-mini`.

```
node scripts/generate-animal-images.mjs --set verbi-riflessivi --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=<tutti i 41 slug>
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir verbi-riflessivi
```

**Tutte con `--whiten`**: `--whiten` è l'opzione che NON ritaglia (corregge solo lo sfondo verso il bianco). Al primo giro l'avevo usata al contrario e il ritaglio aveva cancellato letti, lavandino, doccia e divano bianchi.

Controllate tutte in un foglio di provini. Rifatte con `--only`:

- **arrabbiarsi** (due volte): prima l'uomo sorrideva e il vaso rotto non si vedeva, poi sembrava esultare; ora indica arrabbiato un cane seduto sul divano bianco.
- **dimenticarsi**: non si vedevano pioggia né ombrello e c'era un cartello con scritte inventate; ora una donna bagnata sotto la pioggia che si batte la fronte («no signs and no text»).
- **girarsi** (due volte): prima la donna non si girava, poi i jeans attillati vista da dietro; ora con un cappotto lungo e largo.
- **spaventarsi**: sembrava allegra; ora un ragno che scende da un filo.
- **farsi male**: fallita al primo giro (errore del servizio), rifatta uguale.

Costo: circa 0,13 $.

## La testata — `public/assets/vocabolario/verbi-riflessivi-hero.webp`

Gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 814877), portata a 1280×853 in webp qualità 82 con sharp.

```
Minimal, elegant photorealistic photograph: a young woman in long-sleeved modest cotton pyjamas sitting up on a neatly made bed in the early morning, stretching her arms up and smiling, soft warm sunlight coming through a window with light linen curtains beside her, a small wooden bedside table with an alarm clock and a glass of water, calm bright bedroom with pale walls and a green plant, shallow depth of field, lots of empty space, no buildings, no text, no logos
```
