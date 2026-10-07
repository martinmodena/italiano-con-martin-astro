# Testata della lettura «Il picchio» (2026-10-07)

Lettura «Il picchio: venti colpi al secondo e niente mal di testa» (A1–A2–B2), testo in
`scripts/data/scienza-it.mjs`, generatore `scripts/create-science-stories.mjs`.
Stile e vincoli come le altre letture di scienza (`docs/prompt-immagini-letture-scienza-2026-09-30.md`):
modello `google/gemini-3-pro-image`, formato 16:9, figura 960×540 e tessera 640×360.

Due tentativi, circa $0,27 in tutto. Il primo (scartato) aveva il disegno della lingua che usciva
dalla testa come un tubo di vetro; il secondo, tenuto, lo chiede **dentro il contorno della testa**.

## Tentativo 1 (scartato)

```
node scripts/generate-image.mjs --slug reading-picchio --prompt "Cinematic 16:9 science illustration, photorealistic with a soft painterly finish, no black outlines. A great spotted woodpecker (black and white plumage, bright red patch under the tail and on the nape) clings with its claws to the mossy trunk of an old oak in a sunlit forest, caught in the instant its beak strikes the bark: tiny wood chips and dust fly from the hole, a faint motion blur on the head. Over its head, a delicate translucent anatomical overlay, like a soft glowing X-ray, reveals the skull and the long thin curved tongue bone (hyoid) looping from the throat around the back of the skull and over the top of the head towards the base of the beak, drawn in pale luminous cream lines, elegant and scientifically accurate. Warm golden morning light, soft green bokeh background, moss green, warm brown, cream and touches of red palette. Sense of wonder and precision. No text, no words, no letters, no numbers, no labels, no arrows, no logos, no people, no food."
```

## Tentativo 2 (pubblicato come `reading-picchio`)

Generato con `--slug reading-picchio-v2` e poi rinominato in `reading-picchio.webp` / `reading-picchio-card.webp`.

```
node scripts/generate-image.mjs --slug reading-picchio-v2 --prompt "Cinematic 16:9 science illustration, photorealistic with a soft painterly finish, no black outlines. A great spotted woodpecker (black and white plumage, red patch on the nape and under the tail) clings with its claws to the mossy trunk of an old oak in a sunlit forest, caught in the instant its beak strikes the bark: tiny wood chips fly from the hole. The head is shown slightly larger and in sharp focus, with a subtle semi-transparent anatomical cutaway INSIDE the outline of the head only, like a delicate museum illustration: the small round braincase, and the thin tongue bone (hyoid) that runs from the throat, curves tightly around the back of the skull close to the bone, passes over the top of the head and ends at the base of the beak, drawn as a fine glowing pale cream line hugging the skull. Nothing sticks out of the head. Warm golden morning light, soft green bokeh, moss green, warm brown, cream and red palette. Sense of wonder. No text, no words, no letters, no numbers, no labels, no arrows, no logos, no people, no food."
```
