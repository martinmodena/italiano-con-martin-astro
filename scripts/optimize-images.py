"""Alleggerisce le immagini WebP di public/assets senza cambiare nomi né pagine.

Uso:
    python scripts/optimize-images.py            # ottimizza quelle nuove
    python scripts/optimize-images.py --dry-run  # dice solo quanto si risparmierebbe

Regole (2026-10-29):
- le foto delle parole del vocabolario e della pronuncia si vedono al massimo
  a ~260 px: si portano a 512 px di lato (abbastanza per gli schermi retina);
- le testate e le altre immagini restano al massimo a 1280 px di larghezza;
- tutto si ricodifica in WebP qualità 72 (method 6), trasparenza compresa;
- il file si sostituisce solo se diventa almeno il 10% più leggero.

Ogni file trattato finisce in scripts/data/optimized-images.json con la sua
impronta: rilanciato, lo script salta i file già fatti (ricomprimere due volte
peggiora la qualità). Un'immagine rigenerata ha un'impronta nuova e viene
ottimizzata al giro successivo.

Crea anche le versioni piccole dei ritratti (martin-portrait-cta.webp,
licia-portrait-cta.webp, 320 px) per i riquadri «Scegli con chi imparare
italiano» e le schede degli insegnanti, dove la foto è un cerchio di 76-150 px.
"""

import hashlib
import io
import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public" / "assets"
MANIFEST = ROOT / "scripts" / "data" / "optimized-images.json"

QUALITY = 72
WORD_MAX = 512
MAX_WIDTH = 1280
MIN_SAVING = 0.10
SMALL_DIRS = ("vocabolario/", "grammatica/pronuncia/")
PORTRAITS = {"martin-portrait.webp": "martin-portrait-cta.webp", "licia-portrait.webp": "licia-portrait-cta.webp"}
PORTRAIT_WIDTH = 320


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()[:16]


def is_word_image(rel: str) -> bool:
    name = rel.rsplit("/", 1)[-1]
    return rel.startswith(SMALL_DIRS) and "-hero" not in name and "-card" not in name


def encode(im: Image.Image) -> bytes:
    buf = io.BytesIO()
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        im.save(buf, "WEBP", quality=QUALITY, method=6, alpha_quality=90)
    else:
        im.convert("RGB").save(buf, "WEBP", quality=QUALITY, method=6)
    return buf.getvalue()


def resized(im: Image.Image, rel: str) -> Image.Image:
    w, h = im.size
    if is_word_image(rel) and max(w, h) > WORD_MAX:
        scale = WORD_MAX / max(w, h)
    elif w > MAX_WIDTH:
        scale = MAX_WIDTH / w
    else:
        return im
    return im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)


def main() -> None:
    dry = "--dry-run" in sys.argv
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8")) if MANIFEST.exists() else {}
    before = after = done = 0

    for src, dst in PORTRAITS.items():
        target = ASSETS / dst
        if not target.exists() and not dry:
            im = Image.open(ASSETS / src)
            w, h = im.size
            small = im.resize((PORTRAIT_WIDTH, round(h * PORTRAIT_WIDTH / w)), Image.LANCZOS)
            data = encode(small)
            target.write_bytes(data)
            manifest[dst] = sha(data)
            print(f"ritratto piccolo: {dst} ({len(data) // 1024} KB)")

    for path in sorted(ASSETS.rglob("*.webp")):
        rel = path.relative_to(ASSETS).as_posix()
        data = path.read_bytes()
        if manifest.get(rel) == sha(data):
            continue
        im = Image.open(io.BytesIO(data))
        im.load()
        new = encode(resized(im, rel))
        before += len(data)
        if len(new) <= len(data) * (1 - MIN_SAVING):
            after += len(new)
            done += 1
            if not dry:
                path.write_bytes(new)
                data = new
        else:
            after += len(data)
        if not dry:
            manifest[rel] = sha(data)

    if not dry:
        MANIFEST.write_text(json.dumps(dict(sorted(manifest.items())), indent=0) + "\n", encoding="utf-8")
    print(f"immagini alleggerite: {done}; {before / 1048576:.1f} MB -> {after / 1048576:.1f} MB")


if __name__ == "__main__":
    main()
