> **Historical migration record:** The status, measurements and pending tasks below describe an earlier implementation and are not current. Use [DESIGN.md](DESIGN.md), [README.md](README.md) and [PLAN.md](PLAN.md) for the current site.

---
name: Lúmina — Penpot → React Migration Plan
description: Migration of Penpot `final-landing` / `final-services` designs into this React + Vite project. Compiled 12 November 2026 from live Penpot MCP inspection and codebase analysis.
sources:
  penpot-pages: [final-landing, final-services]
  verified-against: running site at localhost (playwright-cli baseline screenshots)
status: approved for implementation
---

# Penpot → React Migration Plan

Compiled from a live Penpot MCP inspection of `final-landing` (1440×6123) and
`final-services` (1440×3295), plus inspection of this codebase and baseline
screenshots of the running site.

## 1. Current status

| Page | Penpot design | Implementation status |
|---|---|---|
| `/` (landing) | `final-landing` | ✅ **Already migrated** — dark hero, cream capsule header, gold CTAs, featured cards, values, results carousel, process, FAQ, green contact panel + footer all match (visually verified) |
| `/servicios/` | `final-services` | ⏳ **Pending** — still runs the old design (beige hero, in-flow header, coffee CTAs, old contact block + footer) |

The remaining work is a **restyle + component swap on the existing Services page**,
not a rebuild. Content structure already maps 1:1 with the Penpot design.

## 2. Locked decisions

1. **Images are local** — everything needed is in `src/assets/clinic/`; no Penpot image extraction.
2. **Map = existing Google Maps embed** (`maps.google.com/maps?q=12.4333,-86.8499…&output=embed`), already live in `LandingContact` / services contact block. The Penpot "Mapa de Lúmina" rect (560×260) represents this iframe.
3. **Inter is dropped** — unify on Montserrat (body/UI) + Playfair Display (display headings). Both font files are local (`src/assets/fonts/`). Roboto Condensed is unused → remove its declaration.
4. **UI icons come from an icon set / the internet**, not Penpot extraction. Most already exist as inline SVGs (`featured-card-arrow`, process icons, contact icons, `TreatmentIcon`, plus/expand). Only social icons (Instagram/WhatsApp/Facebook/TikTok circles) are missing.
5. **Results content confirmed** — `src/assets/clinic/results/` holds exactly 11 before/after images, matching the 11 carousel dots in the design.

## 3. Design inventory (extracted from Penpot)

### 3.1 Sections — `final-landing`

| # | Section | Height | Background |
|---|---|---|---|
| 1 | `Inicio` (hero) | 760 | `#17181A` + full-bleed photo + 70% ink overlay |
| 2 | `destacados` | 1241 | `#F2EFE6` |
| 3 | `La clínica` (values + faith) | ~600 | cream |
| 4 | `doctora` | 674 | `#F2EFE6` |
| 5 | `resultados` (carousel) | 745 | `#F2EFE6` |
| 6 | `process section` | 799 | `#F2EFE6` |
| 7 | `preguntas` (FAQ) | ~590 | cream |
| 8 | `Contacto y mapa` | 390 panel | `#2E4034` panel, inset 50px, top radius 48 |
| 9 | `Footer` | 300 panel | same green panel treatment |

### 3.2 Sections — `final-services`

`Inicio` (576h hero) → `servicios` (intro + 4 image cards + 3 category accordions
+ 5-row facial service list + results CTA) → shared `Contacto y mapa` → shared `Footer`.

### 3.3 Colors (deduplicated, by usage)

| Value | Uses | Role |
|---|---|---|
| `#17181A` | 130 | Ink: primary text, hero bg, text on gold buttons |
| `#F2EFE6` | 58 | Cream: section bg, text on dark, pills |
| `#FFFDF9` | 24 | Paper: cards (featured, FAQ, process copy) |
| `#2E4034` | 23 | Forest: contact/footer panels, card numbers, labels on cream buttons |
| `#C9A66B` | 14 (+5 @16%) | Gold: CTAs, FAQ expanded item, figcaptions, icon washes |
| `#C9A76A` | 6 | Near-duplicate gold (footer headings) → merge into `#C9A66B` |
| `#49352C` @9–18% | 25 | Brown alpha: card/panel borders |
| `#986A3E` | 25 | Bronze: icon strokes on services page |
| `#795D32` | 2 | Bronze text: eyebrows, scripture reference |
| `#B48F2D` | 5 | Dark gold (SVG icon strokes) |
| `#F7ECDF` | 2 | Peach: secondary button, expanded category card |
| `#FAF8F2` | 2 | Off-white: collapsed category cards |
| `#789083` | 2 | Muted green: footer divider |
| `#A89F91` | 2+1 | Taupe: faith divider |
| `#E3CDAB` | gradient | Light gold — end of gold gradient |
| `#C4CFC6`, `#EDE6D7`, `#A47C3C`, `#312016`@65% | 1–4 | One-off; classify visually before tokenizing |

**Gradients (2, each reused ×4):**
gold linear `#C9A66B → #E3CDAB` (featured card headers) ·
cream fade `#F2EFE6@45% → @19%` (featured-visual overlay).
⚠ Gradient angles not captured via MCP — record at implementation time.

### 3.4 Typography (46 raw combos → consolidated)

- **Playfair Display** — display: 61.2/700/ls −2.14 (services H1), 48/700/ls −1.68
  (section H1 ×17), 48/700/lh 1.2 (contact), 27.2/400 italic (blockquote), 19.2/400 (faith body)
- **Montserrat** — 36/600, 29.6/600 (category titles), 23.04/700 (card titles),
  16–17.6 (lead, FAQ Q, steps; weights 400–700), 11.2–15.2 (body, buttons,
  eyebrows with tracking 0.56–1.44)
- Fractional sizes (13.76, 14.4, 15.04, 15.2, 16.8, 23.04, 61.2) are 0.8×-scaled
  artifacts → **normalize to the integer scale below**.
- `line-height: 1` everywhere in design → **normalize in CSS** (≈1.1 headings, ≈1.5 body) to avoid descender clipping.

### 3.5 Radii / shadows / spacing

- **Radii:** 16 (cards) · 20 (FAQ) · 24 (process, service cards) · 28 (category) ·
  48 top-only (green panels) · pill = h/2 (buttons 21/22/26/28, header 36, social 18)
- **Shadow:** a single one — `0 6px 18px rgb(23 24 26 / 0.12)` on featured cards only
- **Spacing:** grid gaps 20 (services, FAQ, categories) and 24 (featured 2×2);
  section padding ≈84–100 vertical; content margins 120 (main) / 157 (service list rows)
  / 50 (green panel inset); process step pitch 106 (58 circle + 48 gap)
- **Blur:** none used

## 4. Token system

Canonical CSS variables. Existing `App.css` tokens (`--color-ink`, `--color-gold`,
`--color-ivory`, `--color-green`, `--color-stone`, radii, motion) are promoted to
canonical; old aliases (`--home-beige`, `--home-coffee`, `--hero-*`, the `#8C6B58`
CTA pair) are retired.

### 4.1 Primitives

```css
/* color */
--color-ink:    #17181A;
--color-cream:  #F2EFE6;
--color-paper:  #FFFDF9;
--color-forest: #2E4034;
--color-gold:   #C9A66B;   /* absorbs #C9A76A */
--color-gold-deep: #986A3E;
--color-gold-dark: #B48F2D;
--color-bronze: #795D32;
--color-peach:  #F7ECDF;
--color-sage:   #789083;
--color-taupe:  #A89F91;
--color-border-brown: #49352C;  /* always at 9–18% alpha */

/* CSS-only (Penpot has no gradient token type) */
--gradient-gold: linear-gradient(<angle TBD>, #C9A66B, #E3CDAB);

/* spacing */
--space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
--space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
--space-12: 48px; --space-16: 64px;
--layout-margin: 120px;
--layout-panel-inset: 50px;

/* radius */
--radius-card-sm: 16px; --radius-card: 20px; --radius-card-lg: 24px;
--radius-panel: 28px; --radius-section: 48px; --radius-pill: 999px;

/* shadow */
--shadow-card: 0 6px 18px rgb(23 24 26 / 0.12);

/* typography */
--font-display: "Playfair Display", serif;
--font-body: "Montserrat", Arial, sans-serif;
--text-xs: 12px; --text-sm: 14px; --text-base: 16px; --text-md: 18px;
--text-lg: 20px; --text-xl: 24px; --text-2xl: 30px; --text-3xl: 36px;
--text-4xl: 48px; --text-5xl: 61px;
--tracking-tight: -0.035em; --tracking-wide: 0.05em; --tracking-wider: 0.12em;
```

### 4.2 Semantic tokens → referencing layers

| Token | Value | Referenced by |
|---|---|---|
| `--surface-page` | cream | destacados / doctora / resultados / process / servicios bgs |
| `--surface-card` | paper | featured-card, faq-item (collapsed), process-copy |
| `--surface-inverse` | ink | hero bg |
| `--surface-brand` | forest | contact + footer green panels |
| `--surface-accent-subtle` | gold @16% | clinic-value-icon |
| `--surface-selected` | gold | faq-item expanded, service FIGCAPTION strips |
| `--surface-muted` | peach | secondary button, category card expanded |
| `--text-primary` | ink | body, headings, FAQ, card titles (on light) |
| `--text-inverse` | cream | hero, contact, footer text (on dark) |
| `--text-accent` | bronze | eyebrows ("LO QUE ME GUÍA"), "Colosenses 3:23" |
| `--text-on-brand-accent` | gold | footer column headings |
| `--text-on-interactive` | ink | gold button labels |
| `--text-on-brand` | forest | WhatsApp / Maps button labels |
| `--border-subtle` | border-brown @10% | service cards, carousel, category cards |
| `--border-strong` | forest/ink @1.5–1.7px | icon strokes |
| `--interactive-primary` | gold | button-gold, header CTA, section buttons |
| `--interactive-on-brand` | cream | WhatsApp CTA, Google Maps button, social circles |
| `--overlay-hero` | ink @70% | `inicio ::after` |

### 4.3 Component tokens (examples)

`--button-height-md: 52px` · `--button-height-lg: 56px` ·
`--card-featured-header-h: 128px` · `--header-h: 72px` ·
`--icon-circle-lg: 64px` / `md: 58px` / `sm: 36px`.

## 5. Work items — `final-services` → `/servicios/`

| Penpot element | Existing code | Work |
|---|---|---|
| Header capsule (912×72, r36, cream, gold CTA) | `SiteHeader` `approved-header` variant (already on home) | Make universal on `/servicios/`; unify logo mark; remove old `home-header` path + CSS |
| Dark hero 576h, Playfair 61.2 "Nuestros servicios", gold rule, subcopy, gold CTA | `Hero` (old beige variant, rotating names, byline) | Use approved hero variant; **copy change**: new title/subcopy; drop rotating items + byline |
| "Sabiduría en cada proceso" / "Encuentra el cuidado que buscas." | `services-intro` — copy identical ✅ | Restyle only (bronze eyebrow, Playfair H2) |
| "Tratamientos en imágenes." 4 cards + peek | `ContinuousCarousel` + `ServiceCard`; Splide peek (padding-right 6%) already configured ✅ | Restyle: r24 cards, gold figcaption (r bottom 24), expand icon |
| Category accordions: facial expanded (peach, 523h) / corporal, dermatologia collapsed (`#FAF8F2`, 150h), r28 | `ServicesTree` + `.service-category` (already r28, `#FAF8F2`) ✅ | Restyle + expanded-state color; service list rows 73px with `#49352C@12%` separators |
| "Explorar los resultados de tratamientos" | `.services-results-link` ✅ | Restyle to gold pill |
| Green contact panel + WhatsApp CTA + map | `LandingContact` (new) vs old services contact block | **Swap to shared `LandingContact`**; delete old block. Done: both pages render the shared panel. CSS un-scoped from `.landing-main` and now uses `:root` tokens (`--color-cream/gold/forest`); h2 font/weight/tracking + `em` font-style added for the services-page context. Old `.contact-section`/`.contact-details`/`.contact-map-*`/`.button-map` CSS and the unused `PressLink` import removed |
| Green footer + social circles | `LandingFooter` (new) vs old services footer | **Swap to shared `LandingFooter`**; add 4 real social-icon SVGs. Done on landing: all 4 icons are inline-SVG brand marks; Facebook and TikTok converted to real links (user-supplied URLs, supersedes the earlier non-link span decision) — Facebook `facebook.com/stacey.maradiagaurbina`, TikTok `tiktok.com/@dra.steaceymaradiaga`, both `target="_blank" rel="noopener noreferrer"`. Footer swapped onto `/servicios/` too: old `.site-footer` JSX + CSS (`.site-footer*`, `.footer-back-link`) and the unused `logoInk` import removed |

## 6. Responsive concerns

- Only a 1440 desktop design exists. Apply the existing site's breakpoint strategy:
  featured switches to carousel below 600px; header/hero change below 800–1000px
  (unify services to the capsule header's rule — currently 799px vs 1000px mismatch).
- Fluid type via `clamp()` on the §4.1 scale; hero uses `min-height` instead of fixed 760/576.
- 2×2 featured grid and 4-card service row collapse to single column / touch-scroll on mobile.
- Preserve all existing a11y behavior (skip link, `aria-expanded`, `inert`, focus
  restore, reduced-motion) while restyling.

## 7. Risks and open flags

1. ✅ **Services hero copy change** — resolved: exact copy extracted live from Penpot `final-services` and implemented (see step 3). Design typos ("Whatsapp", card title "Toxin") corrected to "WhatsApp" / "Toxina botulínica".
2. ✅ **Old services contact block contained a Waze button + 5-item contact details list** — resolved: removed with the swap to the shared `LandingContact` (user approved the migration). The details survive in the shared footer (Contacto column: email/phone/city; Horario column) and socials; only the Waze deep link is gone from the site — re-add on request.
3. `DESIGN.md` documents the *old* system as truth, including rules the new design deliberately breaks ("header in normal flow", "no serif headings", "brown CTAs"). It **must be updated** as part of implementation; user-approved new design supersedes it.
4. Fractional font sizes are normalized to integers — small visual deltas possible.
5. Near-duplicate colors merged (`#C9A76A`→`#C9A66B`; `#FFFFFF`/`#FAF8F2`→ paper/cream) — minimal but non-zero visual diff.
6. Featured card row heights differ in Penpot (326 vs 355) — implement equal-height rows.
7. One-off colors (`#C4CFC6`, `#EDE6D7`, `#A47C3C`, `#312016@65%`) — classify visually during implementation; keep as local values if no pattern emerges.
8. Gradient angles and hover/focus/transition specs are not extractable via MCP — define at implementation using existing motion tokens (`--duration-ui: 180ms`, `--ease-out`).
9. Cleanup candidates: `src/assets/react.svg`, `src/assets/vite.svg`, root `src/assets/hero.png` (13 KB, unused), Roboto Condensed font files/declarations.
10. Landing page parity spot-check against `final-landing` is worthwhile but expected to be near-zero delta.

## 8. Implementation sequence

0. ✅ **Landing hero parity (done):** overlay is exactly `--overlay-hero` (`#17181A` @70%) over a `--color-ink` base; hero photo is cropped from the top (`object-position: center top`); centered hero logo badge is **246.4 × 171.6** (224 × 156 +10%) at top 176 (mobile 170 × 130). CTA states are context-aware: the header CTA on the cream capsule darkens to `--interactive-primary-hover` (`#BB985C`), while the hero CTA on the dark photo **lifts** to `--interactive-primary-hover-on-dark` (`#E3CDAB`) and presses to `--interactive-primary-active-on-dark` (`#D8B87F`) so it never drops below 3:1 against the photo. Hover is guarded by `@media (hover: hover)`, and the hero CTA focus ring is cream so it reads on the dark photo.
0.1 ✅ **Principles botanicals (done):** `.clinic-intro-section` paints `botanical-horizontal.svg` at the page's left top edge as a section background and repeats the same asset at the right bottom edge in a `::after` layer rotated **180°**, so both are flush with the full-bleed section (`clamp(360px, 40vw, 560px)` wide, `no-repeat`, `pointer-events: none`) and render behind every child. The old botanical background on the inner `.clinic-intro` container was removed to avoid a duplicate.
1. ✅ **Tokens (done):** consolidated CSS variables in `App.css` — canonical primitives/typography/spacing/shape/semantic layers added, legacy aliases retained for the pending restyle; Playfair `@font-face` moved to `App.css` and registered as `--font-display`; `--font-body` pinned for card/row titles that stay sans; Roboto Condensed removed; `.landing-*` variables mapped to canonical tokens.
2. ✅ **Header (done):** the capsule header was already universal — `SiteHeader` renders `approved-header` unconditionally, so `/servicios/` inherits it; no dead old-header CSS existed. Verified at 1440/768/390: capsule 912×72 (mobile 64) at top 24 over the dark hero, gold CTA intact.
3. ✅ **Services hero (done):** `Hero` now takes `className="approved-hero services-hero"` — 576px dark photo hero (70% `--overlay-hero`), Playfair 61px "Nuestros servicios" at top 166, gold rule 80×1, 3-line 15px subcopy, gold pill CTA "Consultar por WhatsApp" → `wa.me/50558811397`, no badge/eyebrow/rotator/byline. Copy extracted live from Penpot (`final-services`): subcopy "Medicina estética y dermatología clínica en León, Nicaragua. Conoce las opciones disponibles y consulta por una valoración profesional." (design's "Whatsapp"/"Toxin" typos corrected). The shared `.approved-hero` rules were un-scoped from `.landing-main` (with `.landing-main .approved-hero` kept for badge/title-offset), dead old-hero CSS (`.home-hero*`, `.hero-treatment-*`, `.hero-eyebrow/byline`, old 799/599/1050 media blocks) deleted, and `Hero.jsx` dropped its `eyebrow`/`byline`/`rotatingItems` props. Mobile: 640px stage, fluid title `clamp(34px, 9vw, 46px)`.
   - **CSS consolidated to one file (user decision):** `Landing.css` was merged into `App.css` (landing layer appended verbatim in original cascade order, hero block restructured as above) and deleted; `App.jsx` no longer imports it. Landing verified pixel-identical (8-point pixel sample + computed-style diff): the only delta is the hero paragraph now rendering the design-intended **15px/1.6/470px** instead of the accidental 15.2px/1.7/44ch that a since-deleted old rule used to win.
4. **Services sections, top→bottom:** intro → image gallery cards → category tree/rows → results CTA.
5. **Shared Contact + Footer** on `/servicios/`; add 4 social icon SVGs.
6. **Cleanup:** scaffold leftovers, dead old-variant CSS, unused props/data.
7. **Verify:** playwright-cli screenshots at 1440 / 768 / 390 vs Penpot exports; `npm run lint`; `npm run build`.
8. **Docs:** update `DESIGN.md` (new system as truth) and check off this plan.
