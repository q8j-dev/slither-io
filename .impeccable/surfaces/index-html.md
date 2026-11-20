---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["js/game.js","css/style.css"]
---

Scope: the whole game surface (menu overlay, HUD, arena rendering). Mode: Experience; the arena is the work and the UI recedes around it.

## Direction contract

THESIS: The menu floats over a living arena: bots keep roaming while you pick a name, and Play drops your snake into that same world. Refuses the default of a static splash screen over a black void.

OWN-WORLD: Deep indigo floor (#14113a) tiled with faint snake-scale arcs; snakes and food are head-to-tail gradient ramps (marigold #ffb23e to flamingo #ff4d8d, aqua #2fe0c8 to violet #8a5cff, and siblings). UI is solid indigo panels (#1e1a4a) with 1px lighter edges (#3a3478), off-white text (#f4f1ff), Unbounded for display numerals and headings, Figtree for UI text. The primary button is a fat pill filled with the marigold-to-flamingo ramp.

STORY: The player sees snakes already alive, types a name, presses Play, and is in the round in the same frame. On death the camera stays in the arena and the menu fades back over it.

FIRST VIEWPORT: Full-bleed live arena, dimmed by a radial scrim. Centered column: gradient snake-letter logo, last length line, name field, Play pill; skin and quality controls as quiet icon buttons in the corners.

FORM: Code-led canvas game skin, form 1 of 1 (category standard for modern arena games, played straight). seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
