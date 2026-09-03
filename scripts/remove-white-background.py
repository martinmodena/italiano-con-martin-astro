#!/usr/bin/env python3
"""Toglie lo sfondo quasi bianco dalle immagini grezze del vocabolario e lo
rende trasparente, con un bordo sfumato per l'antialiasing.

Perche' serve: i modelli di generazione immagini non producono mai un bianco
perfetto (#FFFFFF), ma qualcosa come #F9F7F7, spesso con una leggera
vignettatura verso i bordi. Le schede del sito hanno sfondo bianco vero
(`.word-card img { background: #fff }`): un'immagine opaca con uno sfondo
quasi-bianco ma non identico crea un rettangolo visibile, con i bordi netti
del ritaglio 512x512. Il fix e' togliere davvero lo sfondo (flood fill dai
bordi) invece di sperare che il colore combaci: cosi' non conta piu' quale
sfumatura di bianco genera il modello.

L'algoritmo stima un colore di sfondo unico (mediana dei pixel sul bordo
dell'immagine) e riempie per contiguita' dai bordi verso l'interno tutti i
pixel entro una soglia di distanza da QUEL colore fisso. Un riferimento
unico, non il colore del vicino via via incontrato: altrimenti il
riempimento "scivola" lungo i gradienti morbidi (il riflesso lucido di una
torta, per esempio) e finisce per mangiare parte del soggetto.

Uso:
  python scripts/remove-white-background.py <cartella-input> <cartella-output>

Elabora ogni .png/.jpg/.webp della cartella di input e salva un .png con
canale alfa nella cartella di output, stesso nome, pronto per
`node scripts/expand-food-vocabulary.mjs --images <cartella-output>`.
"""

import sys
from collections import deque
from pathlib import Path

from PIL import Image

THRESH2 = 42 * 42 * 3  # distanza euclidea al quadrato dal colore di sfondo stimato
MASK_SIZE = 320  # risoluzione di lavoro per il flood fill: veloce, poi si scala su


def estimate_background(px, w, h):
    """Mediana dei pixel sul perimetro: robusta a un angolo anomalo."""
    border = []
    for x in range(w):
        border.append(px[x, 0][:3])
        border.append(px[x, h - 1][:3])
    for y in range(h):
        border.append(px[0, y][:3])
        border.append(px[w - 1, y][:3])
    border.sort(key=lambda c: c[0] + c[1] + c[2])
    return border[len(border) // 2]


def flood_mask(small: Image.Image) -> Image.Image:
    """Maschera L (255 = soggetto, 0 = sfondo): BFS connesso al bordo,
    confrontato sempre con un unico colore di sfondo di riferimento."""
    w, h = small.size
    px = small.load()
    bg = estimate_background(px, w, h)

    def close(x, y):
        r, g, b = px[x, y][:3]
        return (r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2 <= THRESH2

    visited = bytearray(w * h)
    dq = deque()

    def maybe_seed(x, y):
        i = y * w + x
        if not visited[i] and close(x, y):
            visited[i] = 1
            dq.append((x, y))

    for x in range(w):
        maybe_seed(x, 0)
        maybe_seed(x, h - 1)
    for y in range(h):
        maybe_seed(0, y)
        maybe_seed(w - 1, y)

    while dq:
        x, y = dq.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h:
                ni = ny * w + nx
                if not visited[ni] and close(nx, ny):
                    visited[ni] = 1
                    dq.append((nx, ny))

    mask = Image.new("L", (w, h))
    mask.putdata([0 if v else 255 for v in visited])
    return mask


def whiten_background(image: Image.Image) -> Image.Image:
    """Alternativa al ritaglio: non toglie lo sfondo, lo corregge verso il
    bianco vero con una scala lineare per canale. Serve per i soggetti quasi
    bianchi anche loro (farina, sale, mozzarella, un bicchiere di latte o
    d'acqua): la' il flood fill non distingue soggetto e sfondo e mangia
    pezzi veri (un bordo di ciotola, meta' di una mozzarella). La correzione
    lineare non puo' creare buchi: sposta tutti i pixel di poco, non decide
    cosa e' sfondo e cosa no.
    """
    rgb = image.convert("RGB")
    w, h = rgb.size
    bg = estimate_background(rgb.load(), w, h)
    scale = tuple(255 / c if c > 0 else 1 for c in bg)
    lut = []
    for s in scale:
        lut.extend(min(255, round(v * s)) for v in range(256))
    corrected = rgb.point(lut)  # 768 valori: applicati a R poi G poi B, in ordine
    return corrected.convert("RGBA")


def remove_background(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    w, h = rgba.size

    small = rgba.convert("RGB").resize((MASK_SIZE, MASK_SIZE), Image.Resampling.BILINEAR)
    mask_small = flood_mask(small)
    # Lo scaling in su con BILINEAR sfuma da solo il bordo tagliato: e' il
    # nostro antialiasing, niente bisogno di un blur separato.
    mask = mask_small.resize((w, h), Image.Resampling.BILINEAR)

    result = rgba.copy()
    result.putalpha(mask)
    return result


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    whiten_slugs = set()
    for a in sys.argv[1:]:
        if a.startswith("--whiten="):
            whiten_slugs = set(a.split("=", 1)[1].split(","))

    if len(args) != 2:
        print(
            "Uso: python scripts/remove-white-background.py <input> <output> "
            "[--whiten=slug1,slug2,...]"
        )
        raise SystemExit(1)
    src_dir, dst_dir = Path(args[0]), Path(args[1])
    dst_dir.mkdir(parents=True, exist_ok=True)

    files = sorted(
        p for p in src_dir.iterdir() if p.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp")
    )
    if not files:
        print(f"Nessuna immagine trovata in {src_dir}")
        raise SystemExit(1)

    suspicious = []
    for path in files:
        with Image.open(path) as im:
            if path.stem in whiten_slugs:
                out = whiten_background(im)
                print(f"{path.stem}: solo correzione colore (sfondo quasi-bianco troppo simile al soggetto)")
            else:
                out = remove_background(im)
                alpha = out.getchannel("A")
                coverage = sum(1 for v in alpha.getdata() if v > 128) / (alpha.width * alpha.height)
                flag = " <-- da controllare (soggetto troppo piccolo?)" if coverage < 0.12 else ""
                if flag:
                    suspicious.append(path.stem)
                print(f"{path.stem}: {coverage:.0%} soggetto{flag}")
        out.save(dst_dir / f"{path.stem}.png")

    print(f"\nFatte: {len(files)}. Salvate in {dst_dir}")
    if suspicious:
        print(f"Da controllare a occhio: {', '.join(suspicious)}")


if __name__ == "__main__":
    main()
