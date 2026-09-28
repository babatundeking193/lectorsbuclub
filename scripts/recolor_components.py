#!/usr/bin/env python3
"""Replace old navy palette with pure-black palette across all site components."""
import re
from pathlib import Path

SITE_DIR = Path("/home/z/my-project/src/components/site")

# Old -> new color mapping (case-insensitive hex replacement)
COLOR_MAP = {
    "#040c1b": "#000000",   # deep navy bg -> pure black
    "#0a1830": "#0a0a0a",   # mid navy -> near-black
    "#0f2139": "#0a0a0a",   # navy card -> near-black card
    "#f0f0f0": "#e4e4e4",   # off-white text -> inspected okunade value
    "#a8b3c4": "#9aa3b0",   # muted text -> cooler muted
}

def replace_file(path: Path) -> int:
    text = path.read_text()
    original = text
    for old, new in COLOR_MAP.items():
        # case-insensitive replacement that preserves nothing — both are lowercase hex
        text = text.replace(old.lower(), new)
        text = text.replace(old.upper(), new)
    if text != original:
        path.write_text(text)
        return sum(1 for o, n in COLOR_MAP.items() if o.lower() in original.lower() or o.upper() in original)
    return 0

files = sorted(SITE_DIR.glob("*.tsx"))
total = 0
for f in files:
    n = replace_file(f)
    print(f"{f.name}: {n} colors replaced")
    total += n
print(f"\nTotal files updated: {len(files)}, total replacements made: {total}")
