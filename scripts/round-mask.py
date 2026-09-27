"""Ritaglia in un cerchio su fondo bianco le foto che il modello ha generato con una sfumatura scura ai bordi.

Con edifici, interni e viste dall'alto `gpt-image-1-mini` mette spesso una vignettatura scura al posto del fondo
bianco, anche a qualita' `medium`; `remove-white-background.py` non la toglie. Invece di rigenerare, la foto
diventa una foto rotonda (come i paesaggi della lezione sul tempo). Si usa sulle immagini GREZZE, prima di
`remove-white-background.py`, e modifica i file sul posto.

Uso:
  python scripts/round-mask.py <cartella-grezze> slug1,slug2 [--radius 0.44]

`--radius` e' il raggio in proporzione al lato corto (0.44 per la citta', 0.46 per «andare dritto»).
Elenco delle foto trattate in docs/prompt-testate-e-immagini-2026-09-27.md.
"""

import argparse
from pathlib import Path

from PIL import Image, ImageDraw

parser = argparse.ArgumentParser()
parser.add_argument('folder')
parser.add_argument('slugs')
parser.add_argument('--radius', type=float, default=0.44)
args = parser.parse_args()

SUPERSAMPLE = 4
for slug in args.slugs.split(','):
    path = Path(args.folder) / f'{slug}.png'
    image = Image.open(path).convert('RGB')
    width, height = image.size
    r = int(min(width, height) * args.radius)
    cx, cy = width // 2, height // 2
    mask = Image.new('L', (width * SUPERSAMPLE, height * SUPERSAMPLE), 0)
    ImageDraw.Draw(mask).ellipse(
        [(cx - r) * SUPERSAMPLE, (cy - r) * SUPERSAMPLE, (cx + r) * SUPERSAMPLE, (cy + r) * SUPERSAMPLE], fill=255
    )
    mask = mask.resize((width, height), Image.LANCZOS)
    Image.composite(image, Image.new('RGB', (width, height), 'white'), mask).save(path)
    print(f'{slug}: rotonda')
