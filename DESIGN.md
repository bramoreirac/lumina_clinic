---
name: Lumina Clinica Estetica
description: Current visual and interaction reference for the root React site.
---

# Current design system

Updated: **13 November 2026**. The running application and `src/App.css` are the implementation authority. This document records the current design, not the earlier prototype. Preserve approved Spanish copy, clinic details and photography.

## Composition

The homepage order is hero, featured treatments, clinic principles, doctor, before/after results, consultation process, FAQ, contact/map and footer. `/servicios/` has its own hero, introduction, image carousel, category directory, results link, and shared contact/footer. Results are at `/#resultados`.

Both pages use a dark full-bleed photo hero with a 70% ink overlay, centered light text and gold actions. The landing hero includes the clinic badge; the services hero has one WhatsApp action. A cream capsule header floats over the hero, 24px from the top. Navigation becomes a disclosure at 1000px and below. The header row remains stable when expanded.

Content generally uses a 1200px maximum width and responsive gutters. Featured treatments use a grid on desktop and a continuous carousel below 600px. At narrower sizes, content groups stack; the final two clinic values are centered below 800px. Doctor and process photo/text compositions join edge to edge, stretch together on tablet and stack on mobile.

## Visual language

- Ink `#17181a`, cream `#f2efe6`, forest `#2e4034`, gold `#c9a66b`, and near-white card surfaces define the current palette. The contact and footer form a continuous forest-green area.
- Playfair Display is the display serif; Montserrat is the body and control typeface. Both are locally hosted with `font-display: swap`.
- The header, buttons and contact actions use rounded capsule shapes. Featured cards use 16px corners; service imagery and joined compositions use 24px exposed corners. The green contact panel has rounded top corners.
- The principles section uses the botanical horizontal SVG, including a mirrored decoration. The pressed-flower image and its source files are retained; do not assume it is visible in the current landing presentation or that its license has been verified.
- Expanded vertical spacing on both pages supports scroll-linked reveals. The featured introduction uses an 88px gap to the cards at desktop/tablet and 70px on mobile. Services uses 80px between introduction and gallery and 96px between carousel and directory at desktop/tablet; mobile uses 64px and 80px respectively. See the responsive rules in `App.css` for exact section padding.

## Motion and interaction

| Element | Current behavior |
| --- | --- |
| Hero | Background photo fades in; heading, description and actions fade up with staggered 450ms entrances. |
| Section headings | `ScrollRevealPrototype.jsx` uses Motion scroll progress to reveal words through opacity and blur; accessible heading labels preserve complete text. Applied to landing and services headings. |
| Supporting groups | Featured cards/photo, joined doctor/process compositions, faith and FAQ support, and services directory use scroll-linked opacity. Focus within a reveal makes its content fully visible. |
| Doctor portraits | Each portrait fades upward 48px over 800ms once it enters view; reduced motion removes the entrance. |
| Contact/footer | Shared elements use hero-style staggered fade-up entrances when entering view on both pages. Focused links remain visible. |
| Featured carousel | Continuous looping mobile carousel; press/drag pauses temporarily and release resumes. No visible pause button. |
| Services carousel | Continuous looping image cards; opening a description suspends movement and closing it resumes when playback conditions permit. No visible pause button. |
| Results gallery | Slide-based autoplay every 5 seconds, with arrows and pagination; pauses on hover/focus and while the lightbox is open. |
| Disclosures and navigation | FAQ and category panels animate height/opacity; mobile navigation fades and shifts on open/close. |
| Reduced motion | Automatic carousel movement and spatial entrances are disabled; scroll reveal text is rendered without animation. Smooth anchor scrolling is disabled. |

Continuous carousels pause when offscreen or in a hidden tab and respond to focus/hover as configured. The lack of a persistent pause control on the featured and services carousels is an accessibility follow-up, despite temporary press/focus pauses. Do not describe the results gallery as continuous auto-scroll.

## Content and accessibility

Keep semantic headings, complete accessible labels for split text, image alternatives, keyboard focus, skip navigation and disclosure states. The results lightbox restores the previous scroll position on close. Browser checks are not a complete accessibility certification. Do not invent medical claims, credentials, prices, testimonials or outcomes. See [PRODUCT.md](PRODUCT.md) for content commitments and [PLAN.md](PLAN.md) for outstanding review and launch work.
