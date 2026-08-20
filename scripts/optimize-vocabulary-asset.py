#!/usr/bin/env python3
"""Optimize generated vocabulary illustrations for the static site."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageOps


def remove_small_alpha_components(image: Image.Image) -> Image.Image:
    """Remove detached generation artifacts while preserving the object."""
    alpha = image.getchannel("A")
    mask = alpha.point(lambda value: 255 if value > 8 else 0)
    components: list[tuple[int, int, int, int]] = []
    parents: list[int] = []
    areas: list[int] = []
    previous: list[int] = []

    def find(index: int) -> int:
        while parents[index] != index:
            parents[index] = parents[parents[index]]
            index = parents[index]
        return index

    def union(left: int, right: int) -> None:
        left_root, right_root = find(left), find(right)
        if left_root != right_root:
            parents[right_root] = left_root

    pixels = mask.load()
    for y in range(mask.height):
        current: list[int] = []
        x = 0
        while x < mask.width:
            while x < mask.width and not pixels[x, y]:
                x += 1
            start = x
            while x < mask.width and pixels[x, y]:
                x += 1
            if start == x:
                continue
            index = len(components)
            components.append((y, start, x - 1, index))
            parents.append(index)
            areas.append(x - start)
            current.append(index)
            for previous_index in previous:
                _, previous_start, previous_end, _ = components[previous_index]
                if previous_end + 1 >= start and previous_start - 1 <= x - 1:
                    union(index, previous_index)
        previous = current

    totals: dict[int, int] = {}
    for index, area in enumerate(areas):
        root = find(index)
        totals[root] = totals.get(root, 0) + area
    if not totals:
        return image
    minimum_area = max(80, int(max(totals.values()) * 0.004))
    kept_roots = {root for root, area in totals.items() if area >= minimum_area}
    cleaned_alpha = Image.new("L", image.size, 0)
    cleaned_pixels = cleaned_alpha.load()
    source_pixels = alpha.load()
    for y, start, end, index in components:
        if find(index) not in kept_roots:
            continue
        for x in range(start, end + 1):
            cleaned_pixels[x, y] = source_pixels[x, y]
    image.putalpha(cleaned_alpha)
    return image


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--hero", action="store_true")
    args = parser.parse_args()

    args.output.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(args.input) as source:
        if args.hero:
            result = ImageOps.fit(
                source.convert("RGB"),
                (1280, 853),
                method=Image.Resampling.LANCZOS,
                centering=(0.5, 0.5),
            )
        else:
            source = remove_small_alpha_components(source.convert("RGBA"))
            source.thumbnail((460, 460), Image.Resampling.LANCZOS)
            result = Image.new("RGBA", (512, 512), (255, 255, 255, 0))
            result.alpha_composite(
                source,
                ((result.width - source.width) // 2, (result.height - source.height) // 2),
            )

        result.save(args.output, "WEBP", quality=84, method=6)


if __name__ == "__main__":
    main()
