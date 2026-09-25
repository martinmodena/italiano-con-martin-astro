# Immagini delle lezioni sugli animali

Quattro lezioni di vocabolario del 2026-09-24: «Gli animali» (100 animali), «Le caratteristiche fisiche degli animali» (50 aggettivi), «La personalità degli animali» (62 aggettivi) e «I verbi degli animali» (119 verbi). Ogni parola ha una foto, più una testata per lezione (la personalità riusa quella della prima versione, «caratteristiche-animali-hero.webp»). Per i verbi la foto è un animale che compie l'azione.

## Regole (Martin, 2026-09-24)

- **Foto delle parole**: modello economico, `openai/gpt-image-1-mini` a `quality: "low"` (circa $0,0025 l'una). Stile **simpatico ma realistico**: cuccioli e animali con espressione amichevole, ma anatomia, pelo, piume, squame e colori veri. Niente cartoni, niente peluche, niente rendering 3D.
- **Testate**: sempre un'immagine di qualità, `google/gemini-3-pro-image`, in stile illustrativo morbido come le altre testate del vocabolario (pastelli, guazzo, **nessun contorno nero**). Formato 1280×853.
- **Nessuna carne** (decisione del 2026-09-07): niente prede, niente sangue, niente carne in scena, nemmeno per leoni e squali. Niente miele nelle immagini (lo evitano molti vegani): l'orso goloso tiene una fragola.
- Sfondo sempre ritagliato davvero con `remove-white-background.py` (regola del 2026-09-03). Attenzione ai soggetti bianchi: cigno, pecora, pinguino, panda, colomba, gatto bianco.

## Come si rigenerano

```bash
node scripts/generate-animal-images.mjs --set animali --out-dir <grezze>
node scripts/generate-animal-images.mjs --set caratteristiche --out-dir <grezze>
node scripts/generate-animal-images.mjs --set verbi --out-dir <grezze>
python scripts/remove-white-background.py <grezze> <pulite> --whiten=<soggetti-bianchi>
node scripts/convert-vocabulary-images.mjs <pulite> --subdir animali|caratteristiche|verbi
```

Lo script salta le immagini che esistono già in `public/assets/vocabolario/<sottocartella>/`, quindi rilanciarlo genera solo quelle che mancano. Il prompt di stile comune sta in `scripts/generate-animal-images.mjs` (costante `STYLE`); il soggetto di ogni immagine sta nel campo `subject` di `scripts/data/animals-vocabulary.mjs`, `traits-vocabulary.mjs` (aggettivi fisici della seconda versione), `traits-everyday.mjs` (aggiunti il 2026-09-25), `traits-base.mjs`, `verbs-vocabulary.mjs` e `verbs-everyday.mjs`.

**Soggetti bianchi o trasparenti** (cigno, pecora, colomba, pellicano, cicogna, gabbiano, capra, lama, medusa; per i verbi «tubare», «tuffarsi», «librarsi») vanno con `--whiten=slug1,slug2`, altrimenti il ritaglio a colore si mangia il soggetto. Le foto vanno guardate a occhio con un foglio di contatto: alcune escono tagliate ai bordi (leopardo, drago di Komodo, libellula, orca, zanzara sono state rifatte aggiungendo «the whole animal small in the centre of the frame with wide empty white margins» al soggetto).

**Verbi e regola «niente carne»:** «cacciare» è una leonessa acquattata nell'erba senza preda; «tuffarsi» un pellicano senza pesce; «covare» una gallina sul nido senza uova in vista; «brillare» una lucciola; «allattare» una gatta con i gattini (non una mucca: i latticini).

**Revisione del 2026-09-25 («parole di tutti i giorni»).** Le tre lezioni di aggettivi e verbi sono state rifatte perché insegnino parole valide anche per le persone; 119 foto nuove (circa $0,30). Cose imparate: le scene con più soggetti (anatra con i piccoli, gatti che litigano, cigni) escono tagliate ai bordi se il prompt non dice «the whole scene small in the centre of the frame with wide empty white margins on every side and nothing touching the edges»; lo sfondo (erba, sabbia) va escluso con «on a plain pure white background with no ground, grass or sand»; un nastro del traguardo esce con la scritta «FINISH» se non si scrive «plain red ribbon with no text or letters on it». Soggetti bianchi o crema da passare con `--whiten`: cigni, pellicano, pinguini, capretto bianco, bulldog crema, cuscino, tela bianca, nuvoletta del sogno.

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

## Testata «Le caratteristiche fisiche degli animali» (`caratteristiche-fisiche-hero.webp`)

```
A charming soft storybook illustration in warm pastel gouache and watercolor, painterly
rendering with NO black outlines, gentle airy colours. A sunny green meadow with rolling
hills where animals show off their bodies: a very tall giraffe standing next to a big grey
elephant, a tiny mouse sitting beside a large flower, a black and white striped zebra, a
small spiny hedgehog, a colourful parrot on a branch and a fluffy woolly sheep. Realistic
anatomy with endearing proportions and friendly expressions. Soft blue sky with light
clouds. No text, no people, no meat, no food, no eggs. 3:2 landscape composition.
```

Generata con `--slug vocabolario/caratteristiche-fisiche-hero --hero-width 1280 --hero-height 853 --aspect-ratio 3:2 --no-card --prompt "..."` ($0,13).

## Testata «I verbi degli animali» (`verbi-animali-hero.webp`)

```
A charming soft storybook illustration in warm pastel gouache and watercolor, painterly
rendering with NO black outlines, gentle airy colours. A sunny green meadow with a small
stream and a pond where animals are busy doing things: a beaver building a small dam of
sticks at the edge of the stream, an eagle soaring high in the sky, a line of ants carrying
big green leaves, a kangaroo hopping across the grass, a monkey climbing a tree, a spider on
its web between two branches and a duck swimming on the pond. Realistic anatomy with
endearing proportions and lively expressions. Soft blue sky with light clouds. No text, no
people, no meat, no food, no eggs. 3:2 landscape composition.
```

Stessa riga di comando ($0,13). Nel testo alternativo della testata c'è l'anatra, non il delfino: nello stagno un delfino non ci sta.
