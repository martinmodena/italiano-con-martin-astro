# Immagine della lettura «Proteine: quante ne servono davvero»

Testata della lettura sulle proteine, il fabbisogno giornaliero e le fonti che
costano meno.

Stile di riferimento: le altre letture scientifiche (`reading-api-linguaggio.webp`,
`reading-meraviglia-dna.webp`, `reading-insetto-ingranaggi.webp`), cioè macro
fotorealistica, luce calda cinematografica, resa pittorica morbida e **nessun
contorno nero**. Il modello di default vira al cartone animato: lo stile va chiesto
esplicitamente.

**Vincolo di contenuto: nessuna carne, nessun pesce, nessun uovo, nessun latticino.**
Richiesta esplicita di Martin, per rispetto di chi legge ed è vegano. Il testo della
lettura cita anche le fonti animali, l'immagine no: mostra solo fonti vegetali, che
sono anche quelle economiche di cui parla la scheda «Mangiare bene spendendo poco».

## Formati

| File                         | Dimensioni | Uso                            |
| ---------------------------- | ---------- | ------------------------------ |
| `reading-proteine.webp`      | 960×540    | figura in cima alla pagina     |
| `reading-proteine-card.webp` | 640×360    | tessera nell'indice `letture/` |

## Prompt

```
Cinematic 16:9 overhead still life, photorealistic food photography with soft
painterly rendering and no black outlines, warm golden afternoon light raking across
a weathered oak table. Arranged in rustic ceramic bowls and small linen sacks: red
split lentils, brown lentils, chickpeas, black beans, white cannellini beans, pearl
quinoa, buckwheat groats, shelled hemp and pumpkin seeds, whole almonds and walnuts,
pale cubes of firm tofu, a block of tempeh, bright green edamame pods still in their
shells, and a torn loaf of dark wholegrain bread. A few dried lentils and seeds
scattered loose on the wood, a worn wooden spoon, a sprig of fresh parsley and a
small glass jar of soaking chickpeas in water catching the light. Rich earthy palette
of amber, terracotta, olive green, cream and warm ochre, shallow depth of field, fine
grain and texture on every seed, gentle steam-free calm composition. No meat, no
fish, no eggs, no dairy, no cheese, no milk, no yoghurt, no text, no words, no
letters, no numbers, no logos, no packaging, no labels, no human hands.
```

Vincoli: nessun testo o numero nell'immagine, nessuna confezione o etichetta, nessuna
mano. Deve restare una scena di cibo vero, non un'illustrazione piatta e non un
collage di ingredienti sospesi.

Testo alternativo in pagina: «Ciotole di lenticchie, ceci, fagioli, quinoa, mandorle e
cubetti di tofu su un tavolo di legno».

## Come rigenerarla

```
node scripts/generate-image.mjs --slug reading-proteine \
  --prompt-file docs/prompt-immagine-proteine.md
```
