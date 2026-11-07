---
name: Lúmina Clínica Estética
description: Current root React visual system, updated 7 November 2026 after user-reviewed refinements.
colors:
  coffee: "#49352c"
  beige: "#e9d8c4"
  ivory: "#faf8f2"
  warm-surface: "#f7ecdf"
  card: "#ffffff"
  cta: "#8c6b58"
  cta-hover: "#80604e"
  cta-text: "#faf8f2"
  green: "#2e4034"
  gold: "#c9a66b"
typography:
  display: "Montserrat, Arial, sans-serif"
  body: "Montserrat, Arial, sans-serif"
rounded:
  card: "16px"
  media: "24px"
  pill: "999px"
  shell: "0px"
---

# Current design system

Updated: **7 November 2026**. This replaces the early prototype specification. The source of implementation truth is `src/App.css`, component styles, and the running root application. User-approved changes supersede original brand-manual/prototype defaults where they differ.

## Direction and composition

Warm beige and ivory surfaces, brown typography, natural clinic photography, and direct consultation actions. Montserrat now carries headings and body text; Playfair Display is no longer used for the site's headings. Preserve the approved Spanish copy and natural photo colors.

The homepage presents hero → featured → doctor → clinic principles → before/after → process → FAQ → contact → footer. Services is a separate page with a matching hero, image carousel, expandable category directory, and shared contact/footer. Results remain a homepage anchor. The old standalone moving strip is not rendered.

The header stays in normal document flow. Desktop navigation is inline; the mobile menu is a disclosure. Main content uses a centered 1200px maximum-width container, responsive gutters, and stacked layouts on smaller screens. Existing component-specific breakpoints remain authoritative; featured switches to a carousel below 600px, while the header/hero layout changes below 800px.

## Color and typography

| Use | Current value |
| --- | --- |
| Headings and main brown text | `#49352C` |
| Header and hero background | `#E9D8C4` |
| Featured, doctor, and results section backgrounds | `#FAF8F2` |
| Process, contact, and footer section backgrounds | `#F7ECDF` |
| Featured/results cards and joined doctor/process content | `#FFFFFF` |
| Services image-card caption | `#EFDDC6` |
| Featured, doctor, Services-results, contact WhatsApp, and footer CTA | `#8C6B58` with `#FAF8F2` text |
| Those CTA hover states | `#80604E` with `#FAF8F2` text |
| Header/hero CTA | Coffee background with beige text |
| Supporting icons and restrained accents | Bottle green and gold, according to component rules |

The shared lighter CTA pair has a calculated normal-text contrast of approximately 4.54:1. Recheck contrast before further lightening its background or darkening its text.

Montserrat is locally served with `font-display: swap`. Roboto Condensed remains declared in CSS; original font files/licenses are retained. Headings use responsive sizes and component-specific weights, including the uppercase/italic hero treatment. Do not restore historical serif headings or make every label match the large hero typography.

## Shape and surface rules

- Header, hero, hero photo/actions, and footer action keep their sharp rectangular treatment. The round hero logo is an intentional exception.
- Featured photo: 24px corners. Featured and before/after card outer corners: 16px.
- Featured cards clip the upper icon panel to the outer curve. Its internal horizontal edge remains straight; the circular consultation arrow stays circular.
- Featured, doctor, Services-results, contact WhatsApp, and directions actions are pill-shaped. Footer action shares their lighter color but remains rectangular.
- Joined doctor/process compositions round their exposed outer corners and keep adjoining edges flush. They stack without a gap on mobile.
- Services image cards retain 24px outer corners and solid warm captions. Caption top edges remain straight. The moving Services cards do not use frosted glass.
- FAQ rows and support cards retain their component-specific rounded geometry. Fine borders and restrained shadows are already part of the implementation.

Use the declared `--radius-card`, `--radius-media`, and `--radius-pill` tokens for new matching treatments. Do not round every internal seam or apply one radius indiscriminately.

## Hero and imagery

Both pages use `Hero.jsx`, with separate approved photos and the shared beige/brown layout. On desktop the photo fills the right half; on mobile it sits below the text. The logo badge straddles the photo's top edge on mobile. The main mobile photo uses `center top`; Services retains its own crop. Services has only the WhatsApp hero CTA; the homepage also links to Services.

The clinic-intro background currently uses `pressed-flowers-pattern.jpg` at low opacity. The original AI/EPS/JPG sources are in `source-assets/pressed-flowers/`. Additional unused SVG sources are preserved outside the application bundle. Keep the distinction between permission to publish people in photos and licensing of third-party artwork.

## Interaction and motion

| Element | Current behavior |
| --- | --- |
| Section entrance | Once-only 300ms fade from 0.94 opacity to 1; starts 48px before entering view; no vertical translation or opacity reset on entry. Some elements retain short stagger delays. |
| Doctor/process joined card | One parent fade, with static photo/text children. |
| Hero introduction | Photo opacity animation over 400ms; text/actions use 450ms entrances with 16px movement and staggered delays. |
| Hero treatment names | CSS vertical rotation through a 16-second cycle. |
| Featured cards | Desktop grid; continuous mobile carousel. SVG face/icon hover movement remains. |
| Results and Services image cards | Continuous carousel on desktop/mobile, free dragging, no navigation arrows or pagination, pause/resume control. |
| Carousel playback | Auto Scroll speed 0.35; paused offscreen, in hidden tabs, on hover/focus, or under reduced motion. Opening result/service details suspends the appropriate carousel. |
| FAQ/service tree | 250ms height/opacity expansion; plus icon rotates. Mobile navigation animates over 220ms. |
| Reduced motion | Disables automatic CSS/carousel movement and section/hero entrance motion while keeping content readable and controls usable. |

The current pause-on-touch and mobile-anchor caveats are recorded in [PLAN.md](PLAN.md); they were not solved by the section-fade adjustment. Do not describe all scroll behavior as fully resolved.

## Accessibility and content

Preserve semantic headings, skip navigation, focus indicators, labeled controls, `aria-expanded`, collapsed-region `inert`, and keyboard-accessible disclosure/dialog behavior. The results dialog locks background scrolling and restores the prior position on close. Manual browser checks are not a claim of complete WCAG certification.

Keep treatment descriptions and patient collages intact unless the user requests changes. Do not add credentials, outcomes, statistics, prices, or testimonials. The footer contains a centered location description and the 2026 copyright notice, without a decorative-source credit line.

External template analysis is reference material, not the current site's specification or evidence that template assets are licensed. Use this document for current choices and [PLAN.md](PLAN.md) for pending release work.
