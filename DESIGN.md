---
name: Lúmina Clínica Estética
description: Proposed visual system extracted from the Phase 2 local responsive preview; awaiting user review.
colors:
  ink: "#17181a"
  gold: "#c9a66b"
  ivory: "#f2efe6"
  stone: "#a89f91"
  green: "#2e4034"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.6rem, 4.25vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.75
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  control: "4px"
  circle: "50%"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2rem"
  space-6: "3rem"
  space-8: "4rem"
  space-12: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.9rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
  button-primary-active:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
  button-light:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.green}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.9rem 1.5rem"
  button-light-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ivory}"
  button-light-active:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.green}"
  service-action:
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "44px"
  service-action-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
---

# Design System: Lúmina Clínica Estética

## Overview

**Creative North Star: "A personal welcome"**

This is a proposed prototype design system, awaiting user review. It records the implemented local preview in `design/index.html`, `design/preview.css`, and `design/preview.js`; it is not a final approved production system or an approved visual comp. The user chose a working browser preview with the doctor's introduction and personal welcome. The descriptive North Star names that implemented character rather than a new brand identity.

The supplied identity stays binding: warm ivory space, deep ink copy, restrained gold, stone separators, bottle-green surfaces, Playfair Display and Montserrat. Real approved portrait photography brings the human presence. Thin rules and open layouts keep information calm and readable, with no text laid over the doctor's face. The temporary typographic wordmark awaits the clean logo.

**Key Characteristics:**

- Supplied brand identity with restrained accents.
- Bold serif headings and regular sans-serif reading text.
- Open sections, thin separators, and simple outline controls.
- Natural portrait photography and direct contact actions.

## Colors

The palette follows the supplied brand manual; frontmatter records the exact CSS primitives.

### Primary

- **Deep ink:** principal text, primary controls, and dark section surfaces.
- **Warm gold:** limited heading emphasis, portrait-caption rule, and contact labels on dark backgrounds.

### Secondary

- **Bottle green:** alternate dark surface anchoring contact information; also the text on the light contact button.

### Neutral

- **Ivory:** principal canvas and readable foreground on dark surfaces.
- **Stone:** separators and circular control outlines; not small text on ivory.

**The Readable Pairing Rule.** Keep small text on verified contrasting pairs. Computed brand contrast ratios are ink/ivory (15.45:1), ink/gold (7.74:1), ink/stone (6.80:1), gold/green (4.82:1), and ivory/green (9.62:1). Gold/ivory (2.00:1) and ivory/stone (2.27:1) are unsuitable for small text; stone/green (4.23:1) also falls below the 4.5:1 threshold for normal text. Decorative rules do not establish safe text pairings.

## Typography

**Display Font:** Playfair Display, with Georgia and serif fallbacks.
**Body Font:** Montserrat, with Arial and sans-serif fallbacks.

The bold serif carries warm, personal statements; regular Montserrat carries services and logistics. Both families are locally served with OFL licenses. The preview uses upright emphasis, not an italic heading style. Body paragraphs are capped at (65ch); introduction copy narrows further by context.

### Hierarchy

- **Display:** the frontmatter display role is the desktop hero heading. At widths up to (799px), it becomes `clamp(2.45rem, 7.7vw, 3.7rem)`, with a (15ch) maximum rather than the desktop (11ch).
- **Headline:** section headings use the headline role, becoming `clamp(2rem, 6vw, 2.6rem)` on phones.
- **Title:** Montserrat semibold identifies consultation steps. Service names use (0.96rem), weight (500), line height (1.5).
- **Body:** the inherited body role is the baseline; rendered section copy uses context-specific sizes from (0.85rem) to (0.94rem), with inherited reading rhythm.
- **Label:** buttons use the label role. Navigation is (0.82rem) on desktop, (0.74rem) at the intermediate breakpoint, and (0.9rem) on mobile. Captions use (0.75rem). Contact labels use (0.73rem).

## Layout

The main desktop container is centered and capped at (1200px), with a width of `min(1200px, calc(100% - 6rem))`. At widths up to (1050px), the observed CSS switches to `calc(100% - 4rem)`. At (799px), it uses `calc(100% - 3rem)`; at (374px), `calc(100% - 2rem)`. The declared spacing scale is in frontmatter; actual component rules also use optical adjustments rather than a rigid multiple-only grid.

Desktop content uses open two-column arrangements: a near-equal introduction, equal doctor and section-introduction columns, two service columns, a narrower FAQ title beside its list, and a slightly wider contact introduction. Process steps form three columns. Sections generally use (6rem) vertical spacing; the dark doctor and green contact sections use their own spacing. At (1050px), column gaps tighten and contact details form one column. At (799px), main layouts, service rows, and process steps become single-column; contact details return to two columns until (374px), where they stack. Major mobile sections use (3.5rem) vertical padding.

The header is a normal-flow row, not sticky. Its mobile disclosure sits above the page content. The portrait remains after the introduction on mobile and never becomes a background behind copy. The preview has been checked at (320px), (390px), (768px), (1024px), and (1440px); this is prototype evidence, not a production browser certification.

## Elevation & Depth

No box shadows are implemented. Depth comes from alternating ivory, ink, and green section surfaces, fine borders, and the real photograph. Controls change foreground, background, and border on interaction. Their state transition lasts (180ms); the portrait has a restrained clip reveal lasting (850ms), enabled only from (800px) when reduced motion is not requested. Reduced motion disables animation and transitions and restores automatic scrolling.

**The Flat Surface Rule.** Use tonal separation and fine rules for this system's depth; do not add unsupported shadow tokens.

## Shapes

Controls have gently curved corners using the control radius. Service actions and process numerals are circular. Most content containers have no enclosing card or rounded panel. Separators use a single-pixel stone border. The portrait alone uses an architectural arch: desktop top corners (160px), then mobile top corners (130px), with square lower corners. Its crop is (510px) high on desktop, (460px) at the intermediate breakpoint, and an aspect ratio of (1 / 1.05) on mobile; mobile maximum width is (520px). Keep the face visible in any future crop.

## Components

### Buttons and text links

Buttons are quiet rectangular contact actions with an inline outline arrow. The primary and light variants are defined in frontmatter; both have a minimum height of (56px), a (1.75rem) icon gap, and a transparent single-pixel border at rest. Hover inverts the foreground and background with a contrasting border. Active states use stone for primary and gold for light. At the narrowest breakpoint, horizontal padding becomes (1.1rem) and the gap (1rem). Text links keep an underline, a minimum height of (44px), and a thicker underline on hover.

All links, buttons, FAQ summaries, and the main focus target use a visible current-color outline (3px) with an offset of (5px). A focus-revealed skip link precedes navigation.

### Navigation

Desktop navigation is an inline row with (44px) minimum-height links and an underlined contact action. The menu toggle appears up to (799px). With JavaScript, it controls navigation visibility through `aria-expanded`; Escape closes it and returns focus to the toggle. Choosing a section closes it and focuses the destination. Breakpoint changes reset the disclosure. Without JavaScript, mobile navigation remains visible. There is no active-section tracking or dialog overlay.

### Service directory

Services are ruled rows, not cards: names on the left, a circular inline SVG action on the right. Rows are at least (95px) high on desktop and (84px) on mobile. Actions retain a minimum (44px) target and invert to ink/ivory on hover. Each action is an accessible, service-specific WhatsApp inquiry link. The list contains ten supplied service names without invented descriptions.

### Consultation steps

Three unboxed, top-ruled items use circular number markers (40px), semibold titles, and concise body text. On mobile, the numeral sits beside the title and paragraph rather than above them.

### FAQ disclosure

Native `details` and `summary` provide keyboard-operable disclosure without custom JavaScript. Ruled summaries have a minimum height of (84px); the inline plus rotates (45deg) when open. Hover underlines the question; focus uses the shared outline. Answers retain normal links and reading text.

### Portrait and caption

The approved original portrait is referenced locally; `design/assets.json` records its source and hash. The image has explicit dimensions and descriptive Spanish alternative text. Name and title sit below it with a gold rule, in a responsive caption. Original files remain unchanged. Production asset copies, optimization, and final integration are deferred to Phase 3.

### Contact surface

The green section combines an ivory/gold heading, readable contact information, and the light action variant. Contact values use tabular numerals where applicable. No form, input, booking widget, chip, tooltip, or generic card is implemented; do not infer their styles from this prototype.

## Do's and Don'ts

### Do:

- **Do** preserve the supplied palette and Playfair Display/Montserrat pairing.
- **Do** use verified contrasting pairs for reading text and keep gold restrained.
- **Do** retain visible focus, native FAQ semantics, and reduced-motion behavior.
- **Do** preserve natural portrait colors and review the face crop at each layout width.
- **Do** treat this document as a proposed prototype handoff awaiting user review.

### Don't:

- **Don't** use gold on ivory, ivory on stone, or stone on green for small text.
- **Don't** introduce pink UI accents, pure black or white UI surfaces, or large gold-only areas; natural colors in approved photographs remain intact.
- **Don't** add shadows or generic enclosing cards to the open ruled layouts without a reviewed design change.
- **Don't** treat the temporary wordmark, draft copy, original-size assets, or local preview as production approval.
