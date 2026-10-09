# Prompt delle immagini: falsi amici italiano-portoghese

Pagina solo portoghese (2026-10-10), stesso schema delle altre lingue (vedi `prompt-immagini-falsi-amici.md`).
Modello `openai/gpt-image-1-mini` a qualità `medium`, 1024×1024, con `scripts/try-false-friends.mjs <cartella> --doc docs/prompt-immagini-falsi-amici-pt.md`.

Tredici vignette sono riusate da altre lingue, perché la parola portoghese inganna allo stesso modo e l'immagine non ha bandiere:
_burro_, _caldo_ (versione spagnola, il brodo), _camino_, _primo_, _aceto_ (spagnolo); _cantina_, _confetti_, _fame_, _casino_, _morbido_, _camera_ (inglese); _conto_ (francese); _chef_ (tedesco).
_Tassa_ (_taça_) è stata scartata: la vignetta tedesca mostra una tazza da caffè, e in Brasile la _taça_ è il calice.

Stile comune:

```
Funny gentle cartoon vignette for a language-learning website, soft warm watercolour-like illustration with clean shapes, no black outlines, friendly expressions, bright but soft colours, the whole scene small in the centre with wide empty white margins on every side, plain pure white background. No text, no letters, no words, no speech bubbles, no logo, no watermark, no meat.
```

Le immagini divise in due hanno la bandiera italiana a sinistra e quella brasiliana a destra.

Soggetti nuovi:

- **squisito** (pt. _esquisito_ = strano): a smiling woman at a café table tasting a very weird-looking dessert, a wobbly bright purple and green jelly shaped like a spiky star, with closed eyes and a blissful expression of pure delight, a fork in her hand
- **palestra** (pt. _palestra_ = conferenza): in a gym with dumbbells and exercise bikes, a row of people in loose tracksuits sit on exercise bikes listening seriously to a professor in a jacket and glasses who gives a lecture pointing at a blank projection screen with no writing on it
- **prego** (pt. _prego_ = chiodo): a smiling polite host holding his front door wide open and inviting a guest in with a welcoming gesture of his hand, while in the other hand he holds a hammer and a giant shiny nail as big as his arm
- **salsa** (pt. _salsa_ = prezzemolo): a confused cook holding a big bunch of fresh green parsley over a plate of spaghetti, while next to the plate there is a small pot of red tomato sauce he has not noticed
- **cena** (pt. _cena_ = scena): a family of three having dinner at a small table with plates of pasta and a salad, but the table is on a theatre stage with red velvet curtains and a bright spotlight, and the audience in the seats watches them
- **prendere** (pt. _prender_ = arrestare): at a bar counter, a man happily takes a cup of coffee from the barista, while a friendly police officer next to him gently holds out a pair of handcuffs towards his other wrist, the man looking surprised
- **pasta** (pt. _pasta_ = cartellina): in an office, a businessman in a suit opens a blue document folder at his desk and finds a big portion of spaghetti with tomato sauce inside it instead of papers, looking surprised
- **guardare** (pt. _guardar_ = mettere via): two side-by-side panels separated by a thin vertical gap; left panel with a small Italian flag in its top corner: a woman on a sofa watching television; right panel with a small Brazilian flag in its top corner: the same woman putting folded clothes away in a wardrobe

## Testata `falsi-amici-pt-hero` (2026-10-10)

Comando delle testate del vocabolario (`gemini-3-pro-image`): un oggetto tipico del Brasile accanto al suo «cugino» italiano.

```
A minimal, elegant, photorealistic wide landscape-format photograph filling the whole frame: a Brazilian pandeiro frame drum and an Italian tamburello tambourine with small coloured ribbons lying side by side on a plain light wooden table, as if facing each other, soft natural light, shallow depth of field; the background is a plain, softly blurred cream wall. Calm, clean composition with lots of empty space, no people, no borders, no brand logos, no text.
```
