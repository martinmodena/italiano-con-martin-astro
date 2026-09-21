# Immagine della lettura «Integratori per la palestra»

Testata della lettura su creatina, caffeina, proteine in polvere e pre-workout.

Stile di riferimento: le altre letture scientifiche (`reading-proteine.webp`,
`reading-insetto-ingranaggi.webp`, `reading-meraviglia-dna.webp`), cioè macro
fotorealistica, luce calda cinematografica, resa pittorica morbida e **nessun
contorno nero**. Il modello di default vira al cartone animato: lo stile va chiesto
esplicitamente.

**Vincolo di contenuto: nessuna carne, nessun pesce, nessun uovo.** Richiesta di
Martin, per rispetto di chi legge ed è vegano. Il testo cita anche le fonti animali,
l'immagine no.

**Nessuna etichetta e nessun marchio**: la lettura spiega come si legge un'etichetta e
perché le promesse in copertina non valgono niente; una confezione riconoscibile
sembrerebbe una pubblicità. I contenitori devono essere neutri: vetro, ceramica,
acciaio, un misurino di legno.

## Formati

| File                            | Dimensioni | Uso                            |
| ------------------------------- | ---------- | ------------------------------ |
| `reading-integratori.webp`      | 960×540    | figura in cima alla pagina     |
| `reading-integratori-card.webp` | 640×360    | tessera nell'indice `letture/` |

## Prompt

```
Cinematic 16:9 overhead still life, photorealistic product photography with soft
painterly rendering and no black outlines, warm golden afternoon light raking across
a weathered oak table. Arranged with calm geometric spacing: a small wooden scoop
heaped with fine white crystalline powder spilling slightly onto the wood, a plain
brushed stainless steel shaker bottle with no branding, a clear glass tumbler of deep
ruby beetroot juice, a small white espresso cup of black coffee with crema, a heap of
pale pressed tablets in a shallow unglazed ceramic dish, a scattering of dark green
raw beetroot leaves and one halved raw beetroot showing its concentric rings, a
knurled black cast-iron dumbbell resting at the edge of the frame, and a rolled white
cotton gym towel. Rich earthy palette of amber, deep crimson, charcoal, cream and warm
ochre, shallow depth of field, fine grain and texture on the powder crystals and the
metal, quiet and honest composition, nothing glamorous. No meat, no fish, no eggs, no
text, no words, no letters, no numbers, no logos, no brand names, no printed labels,
no plastic tubs, no packaging, no human hands, no human figures.
```

Vincoli: nessun testo o numero nell'immagine, nessuna confezione commerciale, nessuna
mano. Deve restare una scena fotografica reale, non un'illustrazione piatta.

Testo alternativo in pagina: «Un misurino di polvere bianca, uno shaker, un bicchiere
di succo di barbabietola, una tazzina di caffè e un manubrio su un tavolo di legno».

## Come rigenerarla

```
node scripts/generate-image.mjs --slug reading-integratori \
  --prompt-file docs/prompt-immagine-integratori.md
```
