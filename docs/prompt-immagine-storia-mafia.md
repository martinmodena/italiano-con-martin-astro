# Immagine della lettura «La storia della mafia in Italia»

Stato al 2026-09-02: l'immagine definitiva **non è ancora stata generata**, perché la quota
giornaliera gratuita del generatore (ZeroGPU su Hugging Face) era esaurita. Fino ad allora
`public/assets/reading-storia-mafia-italia.webp` e `-card.webp` sono **provvisorie**
(fondo di carta invecchiata generato via script, senza testo). Vanno sostituite con
l'illustrazione definitiva, nello stesso stile di `reading-storia-caffe-italia.webp`:
collage seppia, oggetti fotorealistici fusi con un'incisione ottocentesca, carta macchiata.

## Formati

| File                                    | Dimensioni | Uso                            |
| --------------------------------------- | ---------- | ------------------------------ |
| `reading-storia-mafia-italia.webp`      | 960×540    | figura in cima alla pagina     |
| `reading-storia-mafia-italia-card.webp` | 640×360    | tessera nell'indice `letture/` |

Si genera una sola immagine 16:9 (per esempio 1536×864) e la si riduce ai due formati.

## Prompt

```
Warm sepia historical collage illustration, aged parchment texture with faded ink
stains, cinematic 16:9. Foreground on a dark wooden table: a wooden crate of ripe
Sicilian lemons with leaves, an open 19th-century leather ledger with handwritten
columns, a heavy iron key, a folded old newspaper, a black flat cap. Middle ground:
the aged paper wall shows a faded 19th-century engraving of Sicilian peasants and a
landowner on horseback beside a stone country estate, blending into the paper.
Right side: an open window revealing a sunlit old Palermo street with baroque stone
buildings and a wrought-iron lamp. Muted brown, ochre and amber palette, soft warm
light, photorealistic objects blended with vintage engraving, no text, no words, no
letters, no logos, no weapons, no modern objects.
```

Vincoli da rispettare: nessun testo, nessuna arma, nessun volto riconoscibile di
persone reali, nessun riferimento a persone o clan esistenti. L'immagine racconta il
contesto storico (terra, agrumi, contratti, città), non la criminalità.

Testo alternativo già in pagina: «Limoni, registri e vecchie stampe della Sicilia
dell'Ottocento». Se l'immagine definitiva mostra soggetti diversi, va aggiornato
l'attributo `alt` in tutte e 9 le lingue.

## Come sostituirle

1. Salva l'immagine definitiva con i due nomi e le due dimensioni indicate sopra,
   in `public/assets/`.
2. Ricostruisci: `npm run build`.
3. Rigenera i PDF della lettura: `python scripts/generate-pdfs.py --only storia-della-mafia-in-italia`.
