#!/usr/bin/env python3
"""Audio della lezione «La pronuncia italiana» (2026-10-17).

Legge work/pronuncia-audio.json (lo scrive scripts/create-pronuncia-lesson.mjs) e crea gli mp3 che
mancano in public/assets/audio/pronuncia/ con le voci neurali italiane di Microsoft (pacchetto
edge-tts: pip install edge-tts). Voce femminile Isabella per parole e frasi brevi, maschile Diego
per gli scioglilingua; velocità -10% per le parole, così le doppie si sentono bene.

Uso:  python scripts/generate-pronuncia-audio.py [--force id1,id2]
"""
import asyncio, json, sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public/assets/audio/pronuncia"
VOICES = {"female": "it-IT-IsabellaNeural", "male": "it-IT-DiegoNeural"}


async def main():
    items = json.loads((ROOT / "work/pronuncia-audio.json").read_text(encoding="utf8"))
    force = set(sys.argv[sys.argv.index("--force") + 1].split(",")) if "--force" in sys.argv else set()
    OUT.mkdir(parents=True, exist_ok=True)
    todo = [i for i in items if i["id"] in force or not (OUT / f"{i['id']}.mp3").exists()]
    for item in todo:
        rate = "-10%" if len(item["text"].split()) <= 3 else "-5%"
        await edge_tts.Communicate(item["text"], VOICES[item["voice"]], rate=rate).save(str(OUT / f"{item['id']}.mp3"))
        print(item["id"], "ok")
    print(f"Audio creati: {len(todo)} su {len(items)}")


asyncio.run(main())
