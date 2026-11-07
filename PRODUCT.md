# Lúmina Clínica Estética

<!-- impeccable:product-schema 1 -->

Updated: **7 November 2026**.

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
- Final public deployment and `.com` domain connection are pending; no live production URL has been verified in this status update.

## Clinic Details Currently Displayed

These describe the current implementation, not an independent verification of medical qualifications or operating details. Keep the clinic's final review distinct from code/design review.

| Field | Current copy or destination |
| --- | --- |
| Clinic | Lúmina Clínica Estética |
| Doctor | Dra. Steacey Maradiaga |
| Credentials | “Médico estético / Medicina y cirugía general.” and “Dermatología clínica / UAM & UCEM.” |
| Location | León, Nicaragua; Reparto Mariana Sanson, del cuerpo de bomberos 9 cuadras al norte |
| Map pin | `12.433326721191406,-86.84996795654297` |
| Phone/WhatsApp | +505 5881 1397; `https://wa.me/50558811397` |
| Contact hours | Monday–Friday 9:00 am–6:00 pm; Saturday 9:00 am–5:00 pm; Sunday by prior coordination |
| FAQ hours | Same weekday/Saturday hours, with other times by appointment |
| Instagram | `https://www.instagram.com/clinica_estetica_lumina/` |
| Email | `steaceymaradiaga@gmail.com` |

The doctor name/phone/city remain consistent with the earlier discovery. The displayed address, email, Instagram destination, hours, and credential lines supersede the early prototype's missing fields and older copy. `src/App.jsx` currently contains both FAQ and contact hours; update both together if they change.

## Brand Commitments

Preserve the Lúmina identity, approved natural photography, and warm, respectful Spanish voice. Later user-approved refinements use Montserrat throughout, warm beige/ivory surfaces, brown headings, rounded body content, and lighter brown CTAs. [DESIGN.md](DESIGN.md) records the current specification; original prototype styling is not binding where the user has changed it.

## Evidence on Hand

- Customer-supplied clinic content, portraits, treatment media, and brand manual; historical source review remains in [PHASE_1.md](PHASE_1.md).
- Customer confirmed permission to publish the real people shown in photos. Do not extend this statement to every third-party graphic or soundtrack license.
- Before/after images are implemented on the landing page; their complete original collage layout is preserved.
- Optimized runtime copies live under `src/assets/clinic/`. Original flower artwork and preserved unused SVGs live under tracked `source-assets/` folders.
- The site uses reconstructed logo assets; an original master can replace them when provided.
- No verified review collection, outcome statistics, awards, prices, or experience totals have been established by this documentation update.

## Product Principles

- Make clinic information, treatment descriptions, and contact actions clear and useful.
- Preserve supplied facts; do not invent qualifications, medical outcomes, testimonials, or prices.
- Keep normal vertical scrolling stable and respect reduced-motion preferences.
- Keep carousels manually explorable and retain visible pause/resume and keyboard focus behavior.
- Maintain a small static site without implying a contact request is a confirmed appointment.

## Open Decisions

Confirm final-domain/account ownership and release responsibility, final clinic content review, active third-party artwork licensing, hosted verification, and production indexing metadata. Known interaction follow-ups remain listed in [PLAN.md](PLAN.md). The address, email, and photo-publication permission are no longer blanket pending items.
