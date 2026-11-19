# Lúmina Clínica Estética

<!-- impeccable:product-schema 1 -->

Updated: **18 November 2026**.

## Platform

web

## Users

Spanish-speaking people exploring aesthetic medicine and skin-care services in León, Nicaragua, on phones and desktops.

## Product Purpose

Introduce the clinic and doctor, explain available treatments, show approved treatment imagery, and help visitors request information or a consultation through WhatsApp or telephone. Opening a contact link does not reserve an appointment.

## Capabilities and Constraints

- React + Vite, JavaScript/JSX; static deployment with Netlify configured as the final host.
- Two maintained pages: `/` and `/servicios/`. Results are on the homepage at `/#resultados`.
- Featured treatments, doctor/principles/process sections, results carousel/lightbox, FAQ, Services image carousel and category tree, shared contact/map, and footer.
- Public content lives in JSX and local JavaScript data modules. Edits require a rebuild/redeployment.
- No backend, database, accounts, CMS, online payments, appointment availability, intake forms, analytics integration, or multilingual switcher.
- The project is complete and deployed. The canonical hostname is `www.lumina-clinica.com`.

## Clinic Details Currently Displayed

These describe the current implementation, not an independent verification of medical qualifications or operating details. Keep the clinic's final review distinct from code/design review.

| Field | Current copy or destination |
| --- | --- |
| Clinic | Lúmina Clínica Estética |
| Doctor | Dra. Steacey Maradiaga |
| Credentials | “Médico y Cirujano General / Médico Estético / Dermatología Clínica” |
| Location | León, Nicaragua · Reparto Mariana Sanson |
| Map pin | `12.433326721191406,-86.84996795654297` |
| Phone/WhatsApp | +505 5881 1397; `https://wa.me/50558811397` |
| Footer hours | Monday–Friday 9:00 am–6:00 pm; Saturday 9:00 am–5:00 pm; Sunday by appointment |
| FAQ hours | Same weekday/Saturday hours, with other times by appointment |
| Instagram | `https://www.instagram.com/clinica_estetica_lumina/` |
| Other social links | [Facebook](https://www.facebook.com/stacey.maradiagaurbina) and [TikTok](https://www.tiktok.com/@dra.steaceymaradiaga) |
| Email | `steaceymaradiaga@gmail.com` |

Update the FAQ and footer hours together in `src/App.jsx` when the clinic changes its schedule.

## Brand Commitments

Preserve the Lúmina identity, approved natural photography, and warm, respectful Spanish voice. The current implementation uses Playfair Display headings, Montserrat body text, dark photo heroes, cream surfaces, forest-green contact areas and gold actions. [DESIGN.md](DESIGN.md) records the current specification; original prototype styling is not binding where the user has changed it.

## Evidence on Hand

- Customer-supplied clinic content, portraits, treatment media, and brand manual; historical source review remains in [PHASE_1.md](PHASE_1.md).
- Customer confirmed permission to publish the real people shown in photos. Do not extend this statement to every third-party graphic or soundtrack license.
- The homepage shows nine before-and-after comparisons with their original collage composition and labels. Two additional localized-fat images are retained for possible future use.
- Optimized runtime copies live under `src/assets/clinic/`. Original flower artwork and preserved unused SVGs live under tracked `source-assets/` folders.
- The site uses reconstructed logo assets; an original master can replace them when provided.
- No verified review collection, outcome statistics, awards, prices, or experience totals have been established by this documentation update.

## Product Principles

- Make clinic information, treatment descriptions, and contact actions clear and useful.
- Preserve supplied facts; do not invent qualifications, medical outcomes, testimonials, or prices.
- Keep normal vertical scrolling stable and respect reduced-motion preferences.
- Keep carousels manually explorable and preserve keyboard focus and reduced-motion behavior. Featured and services continuous carousels currently have no persistent pause button; accessibility review remains open.
- Maintain a small static site without implying a contact request is a confirmed appointment.

See [PLAN.md](PLAN.md) for maintenance and release checks.
