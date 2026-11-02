# Immagini della lezione «Ho fame, ho sonno: le sensazioni con avere» (2026-11-02)

## Le foto delle schede e dell’esercizio «Che cosa ha?»

I soggetti stanno nel campo `subject` di `scripts/data/sensations-vocabulary.mjs` (20 schede in `sensationVocabulary`, 8 foto dell’esercizio in `sensationDescribeRows`). Lo stile è `SENSATION_STYLE` in `scripts/generate-animal-images.mjs`: l’animale mostra con la posa e l’espressione che cosa sente, pochi oggetti, fondo bianco. Modello `openai/gpt-image-1-mini`, qualità `medium`.

```
node scripts/generate-animal-images.mjs --set sensazioni --out-dir <cartella-grezza>
node scripts/generate-animal-images.mjs --set sensazioni-descrivi --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=che-cosa-ha-coperta,febbre,raffreddore,vergogna,sonno,che-cosa-ha-pancia,che-cosa-ha-neve,freddo,mal-di-pancia,che-cosa-ha-palla
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir sensazioni
```

Costo: $0,25 per 28 foto più $0,01 per una rifatta. «Che cosa ha? (neve)» è stata rifatta: sul fondo bianco la neve non si vedeva e il freddo non si capiva; ora il gattino ha berretto e sciarpa rossi e fiocchi di neve intorno. `--whiten` per coperte, fazzoletti, cuscini, la neve e il pallone bianco e rosso, che il ritaglio normale tagliava.

## La testata — `public/assets/vocabolario/ho-fame-ho-sonno-hero.webp`

Fatta gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 797066), perché `gemini-3-pro-image` su OpenRouter risponde 402 con il credito attuale; portata a 1280×853 in webp qualità 82 con sharp.

```
Realistic, bright, elegant photograph. Minimal and simple, one subject only, lots of empty space. A cute sleepy golden puppy yawning widely while sitting next to an empty ceramic food bowl on the warm terracotta tile floor of a sunny Italian kitchen. The kitchen behind is softly blurred: a window with green wooden shutters and a pot of basil in warm morning light. Natural colours: terracotta, cream, olive green. No people. Absolutely no text, letters or numbers anywhere.
```
