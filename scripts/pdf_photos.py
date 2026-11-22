"""Foto rotonde dei PDF leggere: colori in JPEG, trasparenza intatta.

ReportLab salva le immagini con trasparenza senza perdita (circa 580 KB per le due foto
di Martin e Licia, in ogni PDF) e non sa unire JPEG e maschera: se gli si passa un JPEG
butta la maschera e tornano i quadratini grigi. Perciò si ricomprime dopo la creazione.
Lo chiama generate-pdfs.py a ogni PDF. Vedi DECISIONI_SITO.md, 2026-11-22.

Uso a mano (idempotente): python scripts/pdf_photos.py [cartella, di norma public/pdf]
"""
import os
import sys
from functools import lru_cache
from io import BytesIO
from pathlib import Path

from PIL import Image
from pypdf import PdfWriter
from pypdf.generic import NameObject, StreamObject

SIZE = 360  # lato delle foto di circular_photo() in generate-pdfs.py
QUALITY = 90


@lru_cache(maxsize=16)
def to_jpeg(pixels):
    output = BytesIO()
    Image.frombytes("RGB", (SIZE, SIZE), pixels).save(output, format="JPEG", quality=QUALITY, optimize=True)
    return output.getvalue()


def compress_photos(path):
    """Riscrive il PDF se contiene foto rotonde non compresse; restituisce quante erano."""
    path = Path(path)
    writer = PdfWriter(clone_from=str(path))
    done = 0
    for item in writer._objects:
        if not isinstance(item, StreamObject) or item.get("/Subtype") != "/Image":
            continue
        if item.get("/Width") != SIZE or item.get("/Height") != SIZE or "/SMask" not in item:
            continue
        if "DCTDecode" in str(item.get("/Filter")):
            continue
        pixels = item.get_data()
        item._data = to_jpeg(pixels)  # dati già codificati: pypdf li scrive così come sono
        item.decoded_self = None
        item[NameObject("/Filter")] = NameObject("/DCTDecode")
        for key in ("/DecodeParms", "/Length"):
            item.pop(NameObject(key), None)
        done += 1
    if done:
        temporary = path.with_name(path.name + ".tmp")
        with open(temporary, "wb") as handle:
            writer.write(handle)
        os.replace(temporary, path)
    return done


if __name__ == "__main__":
    from multiprocessing import Pool

    folder = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / "public" / "pdf"
    files = sorted(folder.rglob("*.pdf"))
    if not files:
        raise SystemExit(f"Nessun PDF in {folder}")
    before = sum(file.stat().st_size for file in files)
    with Pool() as pool:
        changed = sum(1 for count in pool.map(compress_photos, files, 20) if count)
    after = sum(file.stat().st_size for file in files)
    print(f"{len(files)} PDF, {changed} alleggeriti: {before / 1e6:.0f} MB -> {after / 1e6:.0f} MB")
