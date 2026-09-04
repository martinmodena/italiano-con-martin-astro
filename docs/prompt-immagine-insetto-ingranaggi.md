# Immagine della lettura «L'insetto con gli ingranaggi»

Testata della lettura su _Issus coleoptratus_, la cicalina la cui ninfa ha due
ingranaggi dentati alla base delle zampe posteriori.

Stile di riferimento: le altre letture scientifiche (`reading-api-linguaggio.webp`,
`reading-meraviglia-dna.webp`), cioè macro fotorealistica, luce calda cinematografica,
nessun contorno nero, con un dettaglio ingrandito fuso nella stessa scena. Qui il
dettaglio ingrandito **deve** esserci: l'immagine mostra insieme l'insetto e i suoi
ingranaggi, come chiesto nel testo della pagina.

## Formati

| File                                   | Dimensioni | Uso                            |
| -------------------------------------- | ---------- | ------------------------------ |
| `reading-insetto-ingranaggi.webp`      | 960×540    | figura in cima alla pagina     |
| `reading-insetto-ingranaggi-card.webp` | 640×360    | tessera nell'indice `letture/` |

## Prompt

```
Cinematic 16:9 macro science illustration, photorealistic, warm golden light, soft
painterly rendering with no black outlines. Left side: an extreme close-up of a tiny
green-brown planthopper nymph (Issus coleoptratus juvenile) crouched on a glossy ivy
leaf, ready to jump, its powerful hind legs folded, dew drops and blurred green
foliage bokeh behind it. Right side: a large magnified inset of the same insect's hind
leg joint, shown as a glowing amber scientific cutaway floating in the air, revealing
two curved strips of interlocking toothed gears meshing together like brass cogwheels,
each strip with ten to twelve tapered teeth with rounded filleted bases, rendered in
honey-amber and translucent chitin tones with fine microscopic texture. A faint
circular magnifier ring and delicate light streaks connect the leg to the enlarged
gear detail. Rich detail, shallow depth of field, amber, olive green and warm ivory
palette, no text, no words, no letters, no numbers, no logos, no human hands,
no metal machinery.
```

Vincoli: nessun testo o numero nell'immagine, nessun macchinario industriale, nessuna
mano umana. Gli ingranaggi devono sembrare parte dell'insetto (chitina ambrata), non
pezzi di metallo incollati sopra.

Testo alternativo in pagina: «Una piccola cicalina su una foglia e, ingrandita, la
coppia di ingranaggi dentati alla base delle zampe posteriori».

## Come rigenerarla

```
node scripts/generate-image.mjs --slug reading-insetto-ingranaggi \
  --prompt-file docs/prompt-immagine-insetto-ingranaggi.md
```
