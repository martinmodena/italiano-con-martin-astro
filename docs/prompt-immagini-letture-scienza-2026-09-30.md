# Testate delle letture di scienza del 2026-09-30

Tre letture nuove: «Il polpo: tre cuori, nove cervelli e il sangue blu» (A1–A2),
«L’orsetto d’acqua: l’animale che resiste (quasi) a tutto» (A2–B1) e «Il Wood Wide
Web: gli alberi si parlano sottoterra?» (B2–C1). Testi in `scripts/data/scienza-it.mjs`,
generatore `scripts/create-science-stories.mjs`.

Stile di riferimento: le altre letture scientifiche (`reading-insetto-ingranaggi.webp`,
`reading-meraviglia-dna.webp`): illustrazione fotorealistica morbida, luce calda,
nessun contorno nero. Modello `google/gemini-3-pro-image` (circa $0,13 l'una), formato
16:9: figura 960×540 e tessera 640×360 in `public/assets/`.

Vincoli di sempre: niente testo nell'immagine, niente carne né pesce da mangiare
(regola del 2026-09-07), niente persone reali.

Comando usato per ogni immagine:

```
node scripts/generate-image.mjs --slug <slug> --prompt "<blocco>"
```

## 1. `reading-polpo` — il polpo

La scena richiama l'A2 (la fuga di Inky) senza ricostruire l'acquario vero: un polpo
esce dal bordo di una vasca e allunga un braccio verso un tubo.

```
Cinematic 16:9 science illustration, photorealistic with a soft painterly finish, no black outlines. A curious red-orange common octopus is climbing out over the rim of a glass aquarium tank at night, its soft boneless body flowing over the edge, one long arm with pale suckers stretching across a wet tiled floor towards the round opening of a drain pipe in the corner. Shiny wet trail on the floor, water drops, gentle blue-green light from the tank, warm amber light from a small lamp. The octopus's big intelligent eye looks towards the pipe. Playful, mysterious, sense of wonder. Rich detail, shallow depth of field. No text, no words, no letters, no numbers, no logos, no people, no food.
```

## 2. `reading-tardigrado` — l'orsetto d'acqua

```
Cinematic 16:9 macro science illustration, photorealistic with a soft painterly finish, warm golden light, no black outlines. A chubby translucent tardigrade (water bear) with eight short stubby clawed legs and a round snout walks slowly along a strand of bright green moss glistening with tiny water droplets, seen as if through a microscope. On the right, in the same scene, a second tardigrade curled up into a dry wrinkled barrel shape (tun state) resting on a dry brown moss leaf. Soft bokeh of green moss forest and droplets in the background, cute but scientifically accurate, cream, moss green and amber palette. No text, no words, no letters, no numbers, no logos, no people.
```

## 3. `reading-wood-wide-web` — la rete di funghi sotto il bosco

```
Cinematic 16:9 science illustration, photorealistic with a soft painterly finish, no black outlines. Cross-section of a forest: above ground, the trunks of a tall old tree and a small young sapling in soft morning light with ferns and fallen leaves; below ground, in a cutaway of dark rich soil, their roots are connected by a delicate network of fine glowing white fungal threads (mycelium), like a subtle web, with a few small brown mushrooms sprouting at the surface. The threads glow faintly, suggesting exchange, but the scene stays natural and believable, not science fiction. Earthy browns, moss green, soft white and warm gold palette. No text, no words, no letters, no numbers, no logos, no people, no animals.
```
