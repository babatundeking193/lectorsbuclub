#!/usr/bin/env python3
"""Rename LectorBuClub -> LectorsBuClub everywhere in src/.
Also rename standalone 'Lector' -> 'Lectors' in the philosophy Latin etymology line.
Also update LECTOR -> LECTORS in the navbar brand text."""
import re
from pathlib import Path

SRC = Path("/home/z/my-project/src")

# Files to update
files = list(SRC.rglob("*.tsx")) + list(SRC.rglob("*.ts")) + list(SRC.rglob("*.css"))

total_replacements = 0
for f in files:
    text = f.read_text()
    original = text
    # 1. Replace the brand "LectorBuClub" -> "LectorsBuClub"
    text = text.replace("LectorBuClub", "LectorsBuClub")
    # 2. Replace the navbar brand "LECTOR" -> "LECTORS" (uppercase, in the brand text)
    # The navbar has "LECTOR<span>BU</span>CLUB" — we want "LECTORS<span>BU</span>CLUB"
    text = text.replace("LECTOR<span", "LECTORS<span")
    # 3. In philosophy.tsx, the Latin etymology has "Lector" (standalone, with a closing </span> after).
    # The exact pattern is: <span className="text-[#5b7e69] font-semibold">Lector</span>
    # We want to change "Lector</span>" to "Lectors</span>" but ONLY in the etymology, not other places.
    # Since other places use "LectorBuClub" (already replaced), the only remaining "Lector</span>"
    # is the etymology one.
    text = text.replace(">Lector</span>", ">Lectors</span>")
    if text != original:
        f.write_text(text)
        n = sum(1 for o, n in [("LectorBuClub", "LectorsBuClub"), ("LECTOR<span", "LECTORS<span"), (">Lector</span>", ">Lectors</span>")] if o in original)
        print(f"{f.relative_to(SRC)}: updated")
        total_replacements += n

print(f"\nTotal files updated: {total_replacements}")
