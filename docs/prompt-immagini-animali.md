# Immagini delle lezioni «Gli animali» e «Le caratteristiche degli animali»

Due lezioni di vocabolario del 2026-09-24: 50 animali e 50 aggettivi per descriverli. Ogni parola ha una foto, più una testata per lezione.

## Regole (Martin, 2026-09-24)

- **Foto delle parole**: modello economico, `openai/gpt-image-1-mini` a `quality: "low"` (circa $0,0025 l'una). Stile **simpatico ma realistico**: cuccioli e animali con espressione amichevole, ma anatomia, pelo, piume, squame e colori veri. Niente cartoni, niente peluche, niente rendering 3D.
- **Testate**: sempre un'immagine di qualità, `google/gemini-3-pro-image`, in stile illustrativo morbido come le altre testate del vocabolario (pastelli, guazzo, **nessun contorno nero**). Formato 1280×853.
- **Nessuna carne** (decisione del 2026-09-07): niente prede, niente sangue, niente carne in scena, nemmeno per leoni e squali. Niente miele nelle immagini (lo evitano molti vegani): l'orso goloso tiene una fragola.
- Sfondo sempre ritagliato davvero con `remove-white-background.py` (regola del 2026-09-03). Attenzione ai soggetti bianchi: cigno, pecora, pinguino, panda, colomba, gatto bianco.

## Come si rigenerano

```bash
node scripts/generate-animal-images.mjs --set animali --out-dir <grezze>
node scripts/generate-animal-images.mjs --set caratteristiche --out-dir <grezze>
python scripts/remove-white-background.py <grezze> <pulite>
```

Poi si copiano in `public/assets/vocabolario/animali/` e `public/assets/vocabolario/caratteristiche/` convertendole in webp 512×512 (`scripts/convert-vocabulary-images.mjs`, che usa la sottocartella indicata nello slug).

Il prompt di stile comune sta in `scripts/generate-animal-images.mjs` (costante `STYLE`); il soggetto di ogni immagine sta nel campo `subject` di `scripts/data/animals-vocabulary.mjs` e `scripts/data/traits-vocabulary.mjs`.

## Testata «Gli animali» (`animali-hero.webp`)

```
A charming soft storybook illustration in warm pastel gouache and watercolor, painterly
rendering with NO black outlines, gentle airy colours. A sunny green meadow with rolling
hills and a few trees, and a cheerful gathering of animals from around the world: a young
elephant, a giraffe, a lion cub, a giant panda, a penguin, a colourful parrot on a branch,
a red fox, a rabbit, a tortoise and a few butterflies. Realistic anatomy with endearing
proportions and friendly expressions. Soft blue sky with light clouds. No text, no people,
no meat, no food, no eggs. 3:2 landscape composition.
```

## Testata «Le caratteristiche degli animali» (`caratteristiche-animali-hero.webp`)

```
A charming soft storybook illustration in warm pastel gouache and watercolor, painterly
rendering with NO black outlines, gentle airy colours. A sunny meadow scene where each
animal shows a different personality: a cheetah sprinting along a path past a tiny slow
snail, a peacock proudly fanning its tail, a sloth hanging lazily from a branch, a wise
owl on a tree, a sly fox peeking from behind a bush, a shy rabbit hiding behind a big
flower and a brave lion cub standing tall on a rock. Realistic anatomy with endearing
proportions and expressive faces. Soft blue sky with light clouds. No text, no people,
no meat, no food, no eggs. 3:2 landscape composition.
```
