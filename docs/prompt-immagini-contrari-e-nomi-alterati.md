# Testate delle lezioni «I contrari» (A2) e «I nomi alterati» (B1) (2026-11-02)

Testate 1280×720, senza tessera, come le altre lezioni di grammatica.

## «I contrari: s-, dis-, in-» — `public/assets/grammatica/contrari-hero.webp`

Idea: la stessa finestra e il suo contrario, aperta al sole e chiusa all'ombra. Modello `google/gemini-3-pro-image` ($0,13), accettata al primo colpo.

```
node scripts/generate-image.mjs --slug grammatica/contrari-hero --hero-width 1280 --hero-height 720 --no-card --prompt "<il blocco qui sotto>"
```

```
A soft, painterly editorial illustration in gouache and watercolour, warm and luminous, with no black outlines and no cartoon look. Minimal and elegant, one subject only, lots of empty space. A warm ochre wall of an old Italian house with two identical green wooden window shutters side by side. The left window is wide open, bathed in golden sunlight, with a small pot of red geraniums on the sill. The right window is tightly closed, in cool blue evening shade. The feeling: the same thing and its opposite. Colours: ochre, terracotta, olive green, sky blue, warm cream. No people. Absolutely no text, letters or numbers anywhere.
```

## «I nomi alterati: -ino, -one, -accio» — `public/assets/grammatica/nomi-alterati-hero.webp`

Idea: tre vasi di basilico, piccolo, normale e grande: la stessa cosa resa piccola o grande. Con gemini la richiesta è fallita (crediti OpenRouter finiti, errore 402): l'immagine è stata generata gratis con Hugging Face, Space `mcp-tools/Z-Image-Turbo` (`gr1_z_image_turbo_generate`, risoluzione `1280x720 ( 16:9 )`, seme 33835), poi salvata in webp qualità 82 con sharp.

```
A soft, painterly editorial illustration in gouache and watercolour, warm and luminous, with no black outlines and no cartoon look. Minimal and elegant, lots of empty space. On a sunny stone windowsill of an Italian house, three terracotta pots of fresh green basil in a row: a tiny pot, a medium pot and a very big pot, like a family from small to big. Behind them, softly blurred, terracotta rooftops and a bell tower in warm morning light. Colours: terracotta, olive green, sky blue, warm cream. No people. Absolutely no text, letters or numbers anywhere.
```
