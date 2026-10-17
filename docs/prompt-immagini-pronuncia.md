# Prompt delle immagini: «La pronuncia italiana» (grammatica A1, 2026-10-17)

Foto delle coppie minime e dei suoni (casa / cassa, rana / lana…) con `openai/gpt-image-1-mini` a qualità **`high`** (Martin: «le immagini devono essere di buona qualità, non lesinare»), 1024×1024, con
`node scripts/generate-pronuncia-images.mjs <cartella> [--only casa,cassa]`. Poi `python scripts/remove-white-background.py <cartella> <pulite> --whiten=...` e la conversione in webp la fa `scripts/create-pronuncia-lesson.mjs --images <pulite>`.

Le cinque facce delle vocali e la testata sono fatte con `google/gemini-3-pro-image` (sezione in fondo).

Stile comune:

```
Bright, friendly, realistic photograph for a language-learning website. One clear subject only, centred, shown whole and fairly small in the frame with wide empty white margins on every side, on a plain pure white background. Soft natural light, gentle warm colours, cheerful mood. People are modest and family-friendly, fully clothed in loose clothes of thick opaque fabric. No text, no letters, no words, no logo, no watermark, no meat, no fish, no eggs, no cheese.
```

Soggetti:

- **casa** (casa): a charming small Italian country house with a terracotta tiled roof, warm ochre walls and green wooden shutters, a pot of red geraniums by the door
- **cassa** (cassa): a supermarket checkout counter with a modern cash register and a short conveyor belt carrying three red apples and a loaf of bread, nobody there
- **nono** (nono): a close-up of a single round lift button glowing warm yellow with only the numeral 9 on it, set in a brushed steel panel
- **nonno** (nonno): a smiling Italian grandfather with white hair, round glasses and a beige cardigan, waving his hand warmly, half body
- **pala** (pala): a garden spade with a wooden handle standing upright, its metal blade slightly dusty with soil
- **palla** (palla): a shiny colourful striped beach ball, red, yellow, blue and white
- **sete** (sete): a young woman in a loose tracksuit drinking a big glass of water with her eyes closed, very thirsty and relieved, half body
- **sette** (sette): a traditional Italian hand-painted ceramic house number tile with blue flowers around the border and only the numeral 7 in the middle
- **caro** (caro): a surprised young man holding up an extremely long supermarket receipt that unrolls down to the floor, eyebrows raised, the receipt has only blurry unreadable lines
- **carro** (carro): an old wooden farm cart with two big wooden wheels, loaded with golden hay
- **capello** (capello): an extreme close-up of a light wooden comb with one single long brown hair caught between its teeth
- **cappello** (cappello): a straw summer hat with a wide brim and a navy blue ribbon
- **pena** (pena): a small sad puppy with big wet eyes sitting alone in the rain, little raindrops falling around it, a pitiful and tender look
- **penna** (penna): an elegant fountain pen with a dark blue body and a golden nib, lying diagonally
- **sono** (sono): a cheerful young woman pointing at herself with both thumbs, as if saying "it's me!", big smile, half body
- **sonno** (sonno): a young man in loose pyjamas yawning widely with sleepy half-closed eyes, hugging a white pillow, half body
- **gatto-salto** (doppie): a tabby cat crouched and concentrating on the edge of a low wooden step, its back legs ready to spring, the moment just before a jump
- **ancora-nave** (àncora): a heavy old iron ship anchor with a short piece of thick rope
- **ancora-bis** (ancóra): a happy little girl holding up an empty bowl and a spoon with both hands, asking for more with big hopeful eyes, half body
- **papa** (papà): a laughing young father carrying his small daughter on his shoulders, both very happy, full body
- **gnocchi** (gn): a white plate of potato gnocchi with fresh tomato sauce and a few basil leaves, seen from slightly above
- **aglio** (gli): a whole bulb of garlic with two loose cloves next to it
- **sciarpa** (sc): a soft knitted red wool scarf loosely folded
- **pizza** (zz): a round Neapolitan pizza marinara with tomato sauce, garlic slices and oregano, no cheese, seen from slightly above
- **zebra** (z): a young zebra standing, full body, looking at the camera
- **rana** (r): a bright green tree frog sitting and smiling, full body
- **lana** (l): three balls of soft wool yarn, cream, coral and sage green, with two wooden knitting needles
- **rosa** (s): a single pink rose in full bloom with a short green stem and two leaves
- **chiave** (ch): one old-fashioned brass key
- **chiavi** (chiavi): a bunch of five different keys on one metal ring
- **ciliegie** (ci): a small bunch of shiny red cherries joined by their stems
- **girasole** (gi): one big sunflower head with a short stem and a leaf
- **ghiaccio** (gh): a few clear ice cubes, slightly melting, glistening
- **mare** (mare): a round photograph of a calm turquoise Mediterranean sea with a small white sailboat far away, inside a perfect circle on white
- **male** (male): a young man sitting and holding his knee with a pained face, as if saying "ouch, it hurts", loose tracksuit, full body
- **bacca** (bacca): a small sprig with bright red berries and green leaves
- **vacca** (vacca): a friendly brown and white cow standing in profile, full body
- **vino** (vino): a bottle of red wine without any label next to a bunch of dark grapes
- **voto** (voto): a hand putting a folded white paper ballot into the slot of a simple grey ballot box
- **foto** (foto): a vintage film camera with a printed holiday photograph of the sea leaning against it
- **alto** (alto): a tall giraffe standing, full body, looking down kindly
- **auto** (auto): a small round red Italian city car from the 1960s, side view
- **cane** (cane): one happy golden puppy sitting, full body
- **cani** (cani): three happy puppies of different breeds sitting side by side
- **pesche** (pèsca): three ripe peaches, one cut in half showing the stone, with a green leaf
- **pescare** (pésca): an old man in a straw hat sitting on a small wooden pier with a fishing rod, the line in calm lake water, seen from behind at three quarters, no fish visible

## Le facce delle vocali (gemini-3-pro-image, 1:1)

Cinque persone diverse, ognuna «dice» una vocale (Martin vuole una lezione simpatica: una famiglia di amici che fa le facce). Stile comune, poi il soggetto:

```
Warm, cheerful, photorealistic square portrait for a language-learning website: head and shoulders of one person, centred, on a plain soft cream background, soft daylight, natural skin, friendly and a little funny, the mouth clearly visible. Modest, fully clothed in a loose jumper. No text, no letters, no logo.
```

- **vocale-a**: an Italian grandmother with short grey hair opening her mouth very wide as if saying a long "aaah" at the doctor, eyebrows raised, the tongue resting low
- **vocale-e**: a young man with curly dark hair saying "eh?", mouth half open and lips slightly spread, a playful questioning look
- **vocale-i**: a girl of about ten with a ponytail smiling as wide as she can as if saying "cheese" for a photo, lips spread, teeth visible
- **vocale-o**: a young woman with long brown hair and big surprised eyes, lips rounded in a perfect open "oh!", as if she has just seen something amazing
- **vocale-u**: an old man with a white beard pushing his lips forward into a small round tube as if hooting like an owl "uuu", eyes smiling

## Testata `grammatica/pronuncia-hero` (gemini-3-pro-image, 16:9, 1280×720)

```
A minimal, elegant, photorealistic wide landscape-format photograph filling the whole frame: a single vintage silver radio microphone on a small stand on a light wooden table, warm soft morning light, shallow depth of field; behind it, softly blurred, an open window with green shutters and terracotta Italian rooftops. Calm, clean composition with lots of empty space, one subject only, no people, no text, no letters, no logo.
```
