# Testate delle letture sulla natura (2026-10-10)

Letture «La medusa che torna bambina», «L’axolotl che rifà le zampe», «La farfalla monarca: un viaggio lungo quattro generazioni» e «Il rondone: dieci mesi in volo», testi in `scripts/data/scienza-it.mjs`.
Modello `google/gemini-3-pro-image`, 16:9, figura 960×540 e tessera 640×360, circa $0,13 l’una.
Regola delle testate semplici del 2026-10-08: una foto sola, un soggetto, tanto spazio vuoto.

Comando: `node scripts/generate-image.mjs --slug <slug> --prompt "<prompt>"`.

## `reading-medusa`

```
Realistic underwater macro photograph, 16:9, minimal and elegant. One subject only: a single tiny transparent jellyfish (Turritopsis dohrnii), bell-shaped like a small glass umbrella with a bright red-orange stomach visible in the centre and many fine white tentacles around the rim, floating in clear deep blue Mediterranean water. Soft light rays from above, dark blue gradient background, lots of empty space, shallow depth of field, calm natural mood. No text, no words, no letters, no numbers, no labels, no logos, no people, no other animals.
```

## `reading-axolotl`

```
Realistic nature photograph, 16:9, minimal and elegant. One subject only: a single pink-white axolotl (Ambystoma mexicanum) resting on fine sand at the bottom of clear fresh water, seen from the front and slightly from the side, with its gentle "smiling" mouth, small dark eyes, three pairs of feathery pink external gills on each side of the head and four small legs with tiny fingers. Softly blurred green water plants far behind, lots of empty space, shallow depth of field, soft natural light, friendly and charming mood. No text, no words, no letters, no numbers, no labels, no logos, no people, no food.
```

## `reading-monarca`

```
Realistic nature photograph, 16:9, minimal and elegant. One subject only: a single monarch butterfly with open orange and black wings with white dots, resting on a pink milkweed flower, seen from above at a slight angle. Behind it, softly blurred, a green mountain fir forest in warm morning light. Clean, uncluttered composition with lots of empty space, shallow depth of field, gentle light, calm mood. No text, no words, no letters, no numbers, no labels, no logos, no people.
```

## `reading-rondone`

```
Realistic nature photograph, 16:9, minimal and elegant. One subject only: a single common swift (Apus apus) in flight, dark brown-black, with long narrow sickle-shaped wings fully spread and a short forked tail, sharp and in focus against a clear soft blue summer evening sky. Far below, softly blurred, a few terracotta roof tiles and a bell tower of an Italian town at the bottom edge. Lots of empty sky, shallow depth of field, warm golden light. No text, no words, no letters, no numbers, no labels, no logos, no people.
```
