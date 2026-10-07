# Testate delle cinque letture di scienza sugli animali (2026-10-07)

Ragno (A1–B1–C1), colibrì (A1–A2), corvi (A2–B1), anguilla (A2–C1), rana dei boschi (A1–B1).
Testi in `scripts/data/scienza-it.mjs`, generatore `scripts/create-science-stories.mjs`.
Modello `google/gemini-3-pro-image`, 16:9, figura 960×540 e tessera 640×360, un tentativo
ciascuna, circa $0,67 in tutto. Ogni prompt comincia con
«Cinematic 16:9 science illustration, photorealistic with a soft painterly finish, no black outlines.»
e finisce con «No text, no words, no letters, no numbers, no labels, no logos, no people, no food.»

Comando: `node scripts/generate-image.mjs --slug <slug> --prompt "<inizio> <blocco> <fine>"`.

## `reading-ragno`

```
A large round orb spider web stretched between two branches in a garden at sunrise, every thread covered in tiny sparkling dew drops like a necklace of pearls, glowing in warm golden backlight. A small, delicate, non-threatening brown garden spider sits at the centre of the web, seen from a respectful distance, not scary. In the soft background, against a pale blue morning sky, a few tiny baby spiders float away on long fine silk threads that catch the light. Moss green, gold, cream and soft blue palette, shallow depth of field, sense of wonder and fragility.
```

## `reading-colibri`

```
A tiny iridescent emerald-green hummingbird hovers motionless in front of a bright red tubular flower, its long thin beak almost touching the flower, wings a soft blur of speed. Behind it, the misty slopes of the high Andes at dusk, with a few first stars and a cool blue evening light on one side and warm golden light on the bird. Fine detail on the shimmering feathers, a sense of tiny size, speed and fragility. Emerald, ruby red, deep blue and gold palette.
```

## `reading-corvi`

```
A clever black crow perched on a low branch on a green university campus in autumn, head tilted, staring intently with a shiny intelligent eye at a grotesque rubber caveman mask lying on a wooden park bench below it. Two more crows watch from the branches in the background. Soft overcast light, red and yellow autumn leaves, old brick buildings blurred in the distance. Slightly humorous and mysterious mood, not horror. Glossy blue-black feathers with fine detail.
```

## `reading-anguilla`

Le larve sono venute come pesciolini trasparenti più che come foglie: l'`alt` dice solo «piccole larve trasparenti».

```
A sleek silver European eel swims gracefully through the deep blue open ocean, its long body forming an elegant S-curve, big dark eye, faint light from above filtering through the water. Around it drift many tiny transparent leaf-shaped eel larvae (leptocephali), glassy and barely visible, catching glints of light like floating crystal leaves. Floating golden sargassum seaweed near the surface at the top of the frame. Deep ocean blue, teal, silver and gold palette, sense of mystery and a long journey. Living animals only.
```

## `reading-rana`

```
Macro view of a small brown wood frog with a dark eye mask, sitting perfectly still and frozen among dry fallen oak leaves on the forest floor in winter, its skin and the leaves covered in delicate white frost and tiny ice crystals, eyes slightly pale and glassy. Snow on the leaves around it, soft cold blue morning light, and a single warm golden ray of sunlight just touching the frog from one side, suggesting the coming spring. Cool blue, white and warm brown palette. Peaceful, magical, scientifically accurate.
```
