# Lúmina Clínica Estética — Project status and release plan

Updated: **7 November 2026**. Initial discovery began on 27 October 2026.

## Current status

The root React application is the sole maintained implementation. The user considers the design substantially complete; public Netlify deployment and the approved `.com` address remain pending. No production deployment status or domain ownership has been verified during this documentation update.

The project uses React + Vite, JavaScript/JSX, Motion, and Splide with its Auto Scroll extension. It remains a Spanish-language static site with no backend, database, accounts, payments, online booking availability, CMS, analytics integration, or intake form.

## Implemented scope

- [x] Homepage: header, hero, featured treatments, doctor, clinic principles, before/after, process, FAQ, contact/map, and footer.
- [x] Separate `/servicios/` entry point with a matching hero and its existing treatment photo; the redundant hero services link has been removed.
- [x] Four featured cards: static desktop grid and continuous mobile carousel.
- [x] Eight image cards in the Services carousel on desktop/mobile, followed by twelve additional treatments in three expandable categories. The underlying catalog has seventeen entries; three gallery-specific services bring the combined directory to twenty distinct names.
- [x] Before/after gallery on the homepage with continuous scrolling and an accessible image dialog. Header navigation points to `/#resultados`; a separate results page is not maintained.
- [x] Shared WhatsApp, telephone, Instagram, email, address, Google Maps/Waze links, and embedded map.
- [x] Current visual direction: Montserrat, warm beige/ivory surfaces, brown headings and CTAs, rounded content cards, and sharp header/hero/footer treatments.
- [x] Featured photo corners: 24px; featured/results card corners: 16px; content CTAs: pill-shaped. Footer CTA remains rectangular.
- [x] Featured, doctor, Services-results, contact WhatsApp, and footer CTAs use `#8C6B58` with `#FAF8F2` text and `#80604E` hover backgrounds. Header/hero CTAs retain their darker treatment.
- [x] Section entrance jumps replaced by once-only, position-stable fades. Joined doctor and process photo/text compositions fade as single units. Hero and horizontal carousel animation remain.
- [x] Centered footer description and copyright: © 2026 Lúmina Clínica Estética. Todos los derechos reservados.
- [x] Removed obsolete standalone application copies and their active references. Preserved twelve distinct SVGs in tracked `source-assets/` folders; identical root assets were retained and verified by hash.
- [x] Root Netlify configuration: Node 24, `npm run build`, publish `dist`.
- [x] Basic Spanish titles/descriptions, favicon, language, viewport, and review-only robots metadata in both HTML entry points.

The old moving services strip component is not rendered. The hero's vertical treatment-name rotator remains active.

## Content and assets

Current displayed clinic details and their source locations are recorded in [PRODUCT.md](PRODUCT.md). Earlier missing-address/email notes are obsolete: the implementation now includes both. The customer confirmed permission to publish the people shown in photos. Third-party artwork licenses and photographer rights are separate from that confirmation.

The active pressed-flower background license is not documented in the repository and should be verified. Keep existing font licenses. The reconstructed logo is still used; replacing it with a supplied master is an optional asset follow-up. Final medical copy/credential sign-off has not been separately recorded here. Do not invent prices, medical outcomes, testimonials, or qualifications.

## Validation record

Latest recorded `npm run lint`, `npm run build`, and whitespace checks passed after removal of the obsolete application. This documentation-only update does not represent another browser certification or hosted deployment test.

Recent Chromium checks at 1440px desktop and 390px mobile verified:

- No horizontal page overflow in the checked layouts.
- Position-stable section entrances with opacity increasing from 0.94 to 1, no downward reset, and no page-height change during the fades.
- Joined doctor/process compositions and readable reduced-motion output.
- Rounded featured/results cards, appropriate keyboard focus, retained SVG hover movement, and continuous carousel behavior.
- Lightbox closing restores the prior vertical scroll position.

Earlier iterations included additional viewport and keyboard checks, but these do not establish current physical-device, Firefox, Edge, or Safari coverage. No automated test suite or performance score is claimed.

### Documented interaction follow-ups

These were identified during the motion review and were **not** included in the approved section-fade fix:

- [ ] Mobile header anchor navigation can overshoot while the expanded menu collapses. Coordinate navigation with menu closure.
- [ ] A vertical touch starting on featured/results cards can persistently pause autoplay because pointer/touch start is treated as interaction. Distinguish vertical page scrolling from intentional horizontal dragging.
- [ ] Native disclosure inside Services image cards changes the carousel's height abruptly when opened.
- [ ] Services deep links use a 300ms timeout after expansion. Replace the timing assumption with completion-aware positioning when refining this behavior.

## Remaining release tasks

### Content and release verification

- [ ] Confirm final clinic review of descriptions, credentials, current contact details/hours, and all published imagery. Record the decision without assuming a design approval certifies medical statements.
- [ ] Resolve the documented interaction follow-ups or explicitly accept the remaining behavior for release.
- [ ] Test the final build on representative physical mobile devices and available browsers, including keyboard navigation, reduced motion, lightbox, service disclosures, and header links.
- [ ] Inspect production asset loading, external contact/directions links, console errors, accessibility, and performance. Historical checks are not a production Lighthouse score.
- [ ] Verify the active third-party background license and preserve required notices.

### Netlify and the `.com` domain

- [ ] Confirm account ownership, repository access, production branch, domain choice, and renewal/maintenance responsibility.
- [x] Store root build settings in `netlify.toml` and configure both Vite HTML entry points.
- [ ] Verify the actual Netlify project settings and successful hosted deployment. Lint is currently a separate command, not part of Netlify's build command.
- [ ] Test `/` and direct navigation/refresh at `/servicios/`; confirm unknown-path behavior rather than assuming a client-router fallback is required.
- [ ] Connect the approved domain, preserve unrelated DNS/email records, verify HTTPS, and choose root or `www` as canonical.
- [ ] Make the authorized production build indexable while keeping review deployments excluded.
- [ ] Add canonical/social metadata, sitemap, robots policy, and appropriate verified structured data; see [SEO.md](SEO.md).
- [ ] Record the production URL, domain/hosting ownership, update workflow, and rollback instructions in the handoff.

No purchase, public publication, account changes, or DNS changes are authorized merely by this plan. Any historical review deployment is separate from confirming the final Netlify launch.

## Maintenance map

See [README.md](README.md) for commands and file ownership, [DESIGN.md](DESIGN.md) for the visual system, and [PHASE_1.md](PHASE_1.md) for the archived discovery evidence. Keep current status here rather than treating early prototype assumptions as active requirements.
