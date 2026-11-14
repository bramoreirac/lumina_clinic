# Lúmina Clínica Estética — Project status and release plan

Updated: **13 November 2026**. Initial discovery began on 27 October 2026.

## Current status

The root React application is the sole maintained implementation. The user considers the design substantially complete; public Netlify deployment and the approved `.com` address remain pending. No production deployment status or domain ownership has been verified during this documentation update.

The project uses React + Vite, JavaScript/JSX, Motion, and Splide with its Auto Scroll extension. It remains a Spanish-language static site with no backend, database, accounts, payments, online booking availability, CMS, analytics integration, or intake form.

## Implemented scope

- [x] Landing page: hero, featured treatments, clinic principles, doctor, results gallery/lightbox, consultation process, FAQ and shared contact/footer.
- [x] Separate `/servicios/` page with photo hero, image carousel, expandable category directory and results link.
- [x] Dark photo heroes, floating cream capsule navigation, gold actions and responsive layouts for desktop, tablet and mobile.
- [x] Scroll-linked word reveals on section headings on both pages and coordinated opacity reveals on selected content groups. Expanded spacing gives the effects more room.
- [x] Fade-up entrances for both doctor portraits and shared contact/footer content. Reduced-motion paths remain implemented.
- [x] Featured mobile carousel pauses on press and resumes on release; services image carousel suspends for an open description and resumes on close when playback conditions permit.
- [x] Results use slide-based autoplay with arrows, pagination and an image lightbox.
- [x] Removed unreferenced `PressLink` and `ServicesStrip` components and related obsolete CSS.
- [x] Root Netlify build configuration and two Vite HTML entry points; basic review-only metadata and favicon.

## Validation record

Recent local `npm run lint` and `npm run build` checks passed during the implementation. Targeted Playwright checks covered 1440px, 768px and 375px layouts, selected reveal and reduced-motion states, category interaction, carousel pause/resume, and footer/portrait alignment. The latest documentation update alone is not a fresh hosted or full accessibility audit. No automated test suite, physical-device coverage or performance score is claimed.

### Interaction follow-ups

- [ ] Review the accessibility of automatically moving featured and services carousels: neither currently has a persistent pause control. Press/focus pauses are not equivalent to a persistent control.
- [ ] Retest mobile header anchor navigation while its expanded menu closes; an earlier review observed possible overshoot.
- [ ] Check vertical touch gestures on carousel areas on physical devices and confirm they do not unexpectedly leave playback paused.
- [ ] Review abrupt height changes when a services image disclosure opens.
- [ ] Replace or validate the 300ms services deep-link positioning delay against the category expansion behavior.
- [ ] Test the scroll-linked reveals, portrait entrances and focus visibility across supported browsers, reduced-motion settings, zoom and slow devices.

## Content and assets

Current displayed clinic details and their source locations are recorded in [PRODUCT.md](PRODUCT.md). Earlier missing-address/email notes are obsolete: the implementation now includes both. The customer confirmed permission to publish the people shown in photos. Third-party artwork licenses and photographer rights are separate from that confirmation.

The retained pressed-flower source license is not documented in the repository; verify it before using the artwork. Keep existing font licenses. The reconstructed logo is still used; replacing it with a supplied master is an optional asset follow-up. Final medical copy/credential sign-off has not been separately recorded here. Do not invent prices, medical outcomes, testimonials, or qualifications.

## Remaining release tasks

### Content and release verification

- [ ] Confirm final clinic review of descriptions, credentials, current contact details/hours, and all published imagery. Record the decision without assuming a design approval certifies medical statements.
- [ ] Resolve the documented interaction follow-ups or explicitly accept the remaining behavior for release.
- [ ] Test the final build on representative physical mobile devices and available browsers, including keyboard navigation, reduced motion, lightbox, service disclosures, and header links.
- [ ] Inspect production asset loading, external contact/directions links, console errors, accessibility, and performance. Historical checks are not a production Lighthouse score.
- [ ] Verify licenses for third-party artwork in use and preserve required notices.

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
