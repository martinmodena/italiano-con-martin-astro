# Testate delle lezioni A2 sul passato prossimo (2026-10-06)

Le prime lezioni di grammatica con una testata. Martin: «per la testata puoi spendere un po' di più, deve essere di qualità». Modello `google/gemini-3-pro-image` (circa $0,13 l'una), 16:9, 1280×720, senza tessera (le tessere della grammatica non hanno immagini). Il prompt si passa con `--prompt`: con `--prompt-file` lo script prenderebbe il primo blocco di questo file, cioè il comando.

La prima generazione è andata persa perché lo script non creava la cartella `assets/grammatica/` (corretto lo stesso giorno); le immagini pubblicate sono la seconda generazione, accettate al primo colpo. Costo totale $0,54, di cui $0,27 perse.

## «Il passato prossimo» — `public/assets/grammatica/passato-prossimo-hero.webp`

Idea: le tracce di cose appena fatte (un viaggio appena finito), cioè azioni concluse.

```
node scripts/generate-image.mjs --slug grammatica/passato-prossimo-hero --hero-width 1280 --hero-height 720 --no-card --prompt "<il blocco qui sotto>"
```

```
A soft, painterly editorial illustration in gouache and watercolour, warm and luminous, with no black outlines and no cartoon look. A sunny wooden table by an open window in an Italian home, late afternoon after a trip: an open travel journal with a pressed flower and only wavy decorative lines instead of writing, a few printed photos of a seaside trip spread on the table (a colourful Ligurian village, a beach with umbrellas, a mountain lake), an empty espresso cup, a used train ticket with no readable text, a pair of sunglasses, a small open suitcase just unpacked on a chair, a pot of basil on the windowsill, and through the window terracotta rooftops and a bell tower in golden light. The feeling: memories of things just done, finished actions. Colours: terracotta, olive green, sky blue, warm cream. No people. Absolutely no text, letters or numbers anywhere. No meat, no fish.
```

## «I participi passati irregolari» — `public/assets/grammatica/participi-irregolari-hero.webp`

Idea: un puzzle quasi finito in cui alcuni pezzi hanno forme strane: le regole valgono per quasi tutti, alcuni pezzi vanno imparati uno per uno.

```
node scripts/generate-image.mjs --slug grammatica/participi-irregolari-hero --hero-width 1280 --hero-height 720 --no-card --prompt "<il blocco qui sotto>"
```

```
A soft, painterly editorial illustration in gouache and watercolour, warm and luminous, with no black outlines and no cartoon look. A study desk by a big window with a view of Florence rooftops and the cathedral dome in soft morning light. On the desk a large wooden jigsaw puzzle almost complete, showing a colourful Italian coastal village by the sea. Most pieces are ordinary, but a few loose pieces next to the puzzle have unusual, clearly irregular shapes (stars, spirals, zigzags), painted in brighter colours, as if they need special attention. Also on the desk: an open notebook with only wavy decorative lines instead of writing, a pencil, a cup of tea, a small pot of basil. Colours: terracotta, olive green, sky blue, warm cream. No people. Absolutely no text, letters or numbers anywhere. No meat, no fish.
```
