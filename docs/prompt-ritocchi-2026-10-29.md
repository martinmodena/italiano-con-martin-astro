# Ritocchi alle immagini del 2026-10-29

Nessun prompt nuovo: solo ricompressione, per alleggerire le pagine.

- `python scripts/optimize-images.py`: tutte le WebP di `public/assets` ricodificate a qualità 72 (method 6, trasparenza con `alpha_quality` 90). Foto delle parole di `vocabolario/` e `grammatica/pronuncia/` (non testate né tessere) ridotte a 512 px di lato; le altre al massimo a 1280 px di larghezza. Un file è stato sostituito solo se diventava almeno il 10% più leggero. Elenco e impronte in `scripts/data/optimized-images.json`.
- `martin-portrait-cta.webp` e `licia-portrait-cta.webp`: i ritratti ridotti a 320 px di larghezza, stesso taglio, per i cerchi dei riquadri degli insegnanti.
