# Lúmina Clínica Estética — Website Project Plan

Prepared: 27 October 2026.

Status: The personal-welcome preview was reviewed positively. This branch compares a clinic-introduction variant at [design/index.html](design/index.html), with the visual handoff in [DESIGN.md](DESIGN.md) and search strategy in [SEO.md](SEO.md). Review of this alternate layout, React implementation, and deployment remain ahead.

## 1. Objective and agreed constraints

Build a polished, responsive website for an aesthetic medicine doctor that introduces the practice, explains approved services, and makes contacting the clinic easy.

- Use React JS + Vite and JavaScript/JSX, building on the existing starter.
- Deploy the static build to **Netlify**.
- No backend, database, patient accounts, admin dashboard, or serverless functions.
- Use local JSON only where it simplifies maintaining small amounts of public content.
- Follow the supplied brand identity and use approved customer assets.
- Initial deliverable: this plan. Do not treat planning as authorization to purchase services or publish the site.

## 2. Source material and current project

| Source | Findings and intended use |
| --- | --- |
| `customer_files/Manual_Marca_Lumina_1.pdf` | Four-page brand manual; source for palette, typography, and color-combination rules. All pages rendered and visually reviewed in Phase 1. |
| `customer_files/servicios_ofrecidos.txt` | Ten supplied service entries; starting point for the service catalog. |
| `customer_files/content/` | Eleven JPGs and one MP4. Image inventory and candidate selection recorded in PHASE_1.md. Video metadata and sampled frames reviewed; audio content and reuse permissions remain unverified. |
| `docs/netlify_deployment_guide.md` | Selected deployment workflow, account ownership, domain, HTTPS, and maintenance guidance. |
| `docs/cloudflare_pages_guide.md` | Alternative reviewed for context; Cloudflare Pages deployment is outside the chosen scope. |
| Existing application | React + Vite starter with `dev`, `build`, `lint`, and `preview` scripts, plus a package lockfile. Replace template content during implementation rather than scaffolding again. |

The deployment guides call the project a dermatologist's website. The customer confirmed the title “Médico general con especialidad en medicina estética”. Use this wording rather than the deployment guides' specialty label.

## 3. Proposed first-release scope

Start with a single landing page using section anchors. Add separate pages only if approved content warrants them. The customer confirmed a Spanish-only site serving León, Nicaragua.

| Section | Content and behavior |
| --- | --- |
| Header | Approved logo, concise section navigation, prominent contact action, accessible mobile menu. |
| Hero | Clear clinic positioning, approved doctor photograph, brief introduction, primary consultation/contact action. |
| About the doctor | Confirmed name, credentials, approach to care, and a suitable portrait. |
| Services | All confirmed services with short doctor-reviewed descriptions; readable content rather than text embedded in promotional images. |
| Consultation process | Explain how to contact the clinic and what to expect, using confirmed practice procedures. |
| FAQ | Short approved answers about consultation logistics and common questions; no personalized medical advice. |
| Contact and location | Confirmed WhatsApp/phone, Instagram, address, hours, and external directions link. Add email only if supplied. |
| Footer | Brand, contact details, relevant privacy information, and copyright. |

Primary conversion: a contact or consultation inquiry through WhatsApp at +505 5881 1397, with telephone as an alternative. A link does not reserve an appointment; copy must not imply confirmed booking. Customer confirmed operating hours of Monday–Friday, 8:00 a. m.–5:00 p. m., with other hours by appointment. Instagram: `https://www.instagram.com/dra.steacey_maradiagaurbina/`.

Optional after content review: a small clinic gallery, genuine approved testimonials, or approved video. Before/after content is not required for the first release and needs explicit publication approval and relevant consent.

Excluded from the first release: online payments, booking availability, intake forms, patient records, live Instagram feeds, CMS, blog, multilingual switching, and analytics/tracking integrations. Reassess these separately if requested.

### Starting service catalog

Preserve the supplied scope while normalizing accents and capitalization in final copy:

1. Hydrafacial.
2. Limpieza superficial y profunda.
3. Microdermoabrasión.
4. Inductores de colágeno en rostro, cuello y manos.
5. Microneedling.
6. Mesoterapia facial y corporal.
7. Plasma rico en plaquetas.
8. Peeling químico.
9. Aplicación de toxina botulínica.
10. Fototerapia.

Confirm service names, descriptions, availability, and any pricing with the doctor. Some social posts discuss treatments beyond this list; do not automatically add them to the catalog.

## 4. Brand and design requirements

The supplied brand manual takes precedence over generic design recommendations.

| Color | Hex | Planned role |
| --- | --- | --- |
| Negro profundo | `#17181A` | Main text and dark sections. |
| Dorado | `#C9A66B` | Restrained accents, icons, fine lines, and logo treatment. |
| Marfil | `#F2EFE6` | Main light background. |
| Piedra | `#A89F91` | Dividers and alternate surfaces; text only on contrast-tested backgrounds. |
| Verde botella | `#2E4034` | Supporting accent or occasional alternate section background. |

- Use Playfair Display bold for headings and Montserrat regular for body text. Use light weight sparingly where legibility allows.
- Use ivory or deep black as principal surfaces. Avoid large gold fills, pink accents, pure black `#000000`, and pure white `#FFFFFF` in designed UI surfaces.
- Follow the manual's maximum of three colors per composition when designing individual sections.
- Gold or stone on ivory must not be assumed readable for small text; choose a contrast-tested pairing within the brand palette.
- Aim for calm, professional layouts, generous spacing, clear hierarchy, restrained decorative details, and authentic doctor imagery.
- Build semantic CSS variables for colors, typography, spacing, borders, and interaction states.
- Prepare mobile and desktop layouts before building the full page. Use subtle motion only when useful, with reduced-motion support.

### Asset preparation

- Inventory image dimensions, quality, intended placement, and publication approval; preserve originals in `customer_files/`.
- Request a clean logo file and original portrait files if available. Do not stretch social screenshots or enlarge low-resolution crops.
- Select photographs suitable for responsive crops. Recreate essential written content as accessible HTML rather than using a whole Instagram post as a website section.
- Optimize approved copies into WebP/AVIF where appropriate, with sensible fallbacks, responsive sizes, and descriptive filenames.
- Set image dimensions to reserve layout space; lazy-load below-the-fold images, but prioritize the hero image.
- Review the MP4 before inclusion. If used, provide a poster, controls, and captions for speech; avoid autoplay audio and large initial downloads.
- Confirm permission to reuse identifiable patient imagery and testimonials. Never invent reviews, credentials, results, or success statistics.

## 5. Technical structure

Proposed structure; create only what implementation needs:

```text
src/
  components/       # Shared navigation, buttons, service cards, footer
  sections/         # Hero, About, Services, FAQ, Contact
  data/            # Optional site.json, services.json, faqs.json
  assets/          # Approved, optimized images and font files
  styles/          # Tokens and shared styles if split from existing CSS
  App.jsx
  main.jsx
public/            # Favicon, robots.txt, sitemap.xml, social preview asset
netlify.toml       # Reproducible build and deployment configuration
```

- Keep dependencies small; use React state for menu and FAQ interactions. No global state library is expected.
- Use CSS with responsive layouts; select additional styling dependencies only when justified.
- Keep public clinic details in one place. JSON is bundled read-only content, not a writable database; updates require an edit and redeployment.
- Suggested service fields: `id`, `name`, `description`, and optional `image`/`imageAlt`. Keep prices absent unless approved.
- Do not put secrets or patient information in source, JSON, browser storage, or frontend environment variables.
- No client router is needed for anchor navigation. If routes are introduced, decide URL behavior and configure/test Netlify fallback rules and unknown-page handling.
- Preserve the lockfile and choose a Node version compatible with the installed tooling; document and align local and Netlify versions during implementation.

## 6. Quality requirements

### Accessibility and responsive behavior

- Target WCAG 2.2 AA: semantic landmarks, one meaningful H1, logical heading order, skip link, labeled controls, and appropriate image alternatives.
- Maintain at least 4.5:1 contrast for normal text and 3:1 for large text; test interactive component contrast as well.
- Support keyboard navigation, visible focus, Escape to close the mobile menu, and correct expanded state on toggles.
- Aim for comfortable touch controls of at least 44 by 44 CSS pixels; do not depend on hover.
- Test narrow screens from 320px, common phone/tablet sizes, and desktop widths; no horizontal overflow or obscured content under sticky UI.
- Support zoom, readable text sizing, and `prefers-reduced-motion`.

### Performance and discovery

- Optimize images and font loading; avoid unnecessary embeds, libraries, and scripts.
- Target mobile Lighthouse performance of at least 90 on the production preview as a project goal; investigate regressions rather than treating one score as a guarantee.
- Aim for LCP at or below 2.5 seconds and CLS at or below 0.1 in representative checks; assess INP when meaningful interaction/field data is available.
- Set Spanish language metadata, an approved title and description, favicon, and Open Graph/social preview metadata.
- Add canonical URL, sitemap, and robots configuration once the production domain is known. Keep preview deployments out of search indexing.
- Use structured data only for verified clinic details and the appropriate business type. Do not fabricate ratings or professional qualifications.
- Inspect rendered content and social sharing behavior; if separate service pages become important, evaluate static prerendering without adding a backend.

## 7. Work phases and completion criteria

### Phase 1 — Confirm content and assets

Source review, asset recommendations, the service catalog, draft copy, and customer questions are recorded in [PHASE_1.md](PHASE_1.md). The customer confirmed Spanish-only content, León/Nicaragua, professional title, WhatsApp, hours, Instagram, and portrait publication permission. Remaining publication dependencies stay open below.

- [x] Inventory supplied files, render/review the brand manual, measure images, and sample the video visually.
- [x] Record source-backed details, prepare the service catalog and draft copy, and identify missing assets/content.
- [x] Record supplied brand/doctor identity and confirmed title, city/country, and Spanish-only language.
- [x] Record confirmed WhatsApp, hours, Instagram, and portrait publication permission; propose WhatsApp as the main contact action.
- [x] Confirm operating days: Monday–Friday (lunes a viernes).
- [ ] Obtain street address/map pin; refine audience priorities if needed during design.
- [x] Review brand manual and asset quality; record remaining video/audio and patient-image limitations. These assets remain outside the baseline scope.
- [ ] Prepare the approved service catalog, biography, FAQ, and consultation process.
- [x] Identify missing logo/portrait files and final-copy dependencies. Customer will provide the clean logo later; use a typographic clinic-name treatment for provisional design.

**Complete when:** a content inventory distinguishes approved material from missing information, with no invented business details.

### Phase 2 — Design

- [x] Establish brand tokens and measured accessible color pairings.
- [x] Create mobile and desktop layouts using supplied content and the approved doctor portrait.
- [x] Define navigation, service presentation, contact placement, and interaction states.
- [x] Validate the browser preview at 320, 390, 768, 1024, and 1440 CSS pixels; check fonts, images, overflow, menu/FAQ keyboard behavior, and navigation without JavaScript. Lint passes.
- [x] Receive positive user review of the personal-welcome preview.
- [ ] Review the clinic-introduction alternative requested on `feature/optionb` before choosing the composition for React implementation.

Preview: run the existing Vite server and open `/design/`. See [design/README.md](design/README.md) for instructions and review scope. This is a local HTML/CSS/JavaScript prototype; `/` remains the original React starter and the default production build does not include the prototype. Draft copy and missing logo/address remain tracked dependencies.

**Complete when:** the layout and contact flow are agreed and the brand rules are reflected consistently.

### Phase 3 — Build

- [ ] Replace starter/demo content and assets with the clinic site.
- [ ] Implement sections, responsive styling, menu, FAQ, and confirmed contact links.
- [ ] Add local JSON only where useful and prepare optimized media.
- [ ] Add metadata, favicon, and relevant production configuration.
- [ ] Update README with local setup, content editing, build, and deployment instructions.

**Complete when:** the site works locally with approved content and no broken or placeholder interactions.

### Phase 4 — Validate

- [ ] Run `npm ci`, `npm run lint`, and `npm run build`; inspect the build using `npm run preview`.
- [ ] Test mobile/desktop layouts, keyboard navigation, menu/FAQ behavior, zoom, reduced motion, and focus visibility.
- [ ] Check contact destinations, external links, image loading, alt text, metadata, and console errors.
- [ ] Run accessibility and performance audits; manually verify issues automated tools cannot cover.
- [ ] Check current Chrome, Firefox, Edge, and Safari where available; record any unavailable coverage.
- [ ] Obtain final doctor review of medical descriptions, credentials, images, and contact details.

**Complete when:** relevant checks pass, material issues are resolved, and remaining limitations are documented.

### Phase 5 — Netlify deployment and launch

Follow `docs/netlify_deployment_guide.md`. Recheck current Netlify documentation, plan limits, and domain costs at deployment time; figures in the guide are not a fixed project quote.

- [ ] Confirm doctor-owned hosting/domain accounts, repository access, production branch, and maintenance responsibility.
- [ ] Configure root base directory, `npm run build`, and publish directory `dist`; record configuration in `netlify.toml` and align Node versions.
- [ ] Create a review deployment and test the actual hosted build, including direct navigation if routes exist.
- [ ] Confirm the final site and chosen domain before public launch or purchases.
- [ ] Connect the approved domain using Netlify's current DNS instructions; preserve existing email and other DNS records.
- [ ] Verify HTTPS, root and `www` behavior, preferred-domain redirects, canonical metadata, and sitemap URLs.
- [ ] Recheck mobile contact links and production assets after launch.
- [ ] Document usage monitoring, renewal responsibility, content updates, and rollback to a previous working deployment.

**Complete when:** the approved production site is reachable over HTTPS and the owner has the access and instructions needed to maintain it.

## 8. Open decisions to resolve during discovery

These do not block creating this plan. Unconfirmed items must be settled before publishing dependent content.

- Optional longer doctor display name and any additional credentials to include. The professional title is confirmed.
- Audience priorities beyond the confirmed Spanish-speaking audience in León, Nicaragua.
- Street address/map pin, optional email, and consultation policies. Phone/WhatsApp, Monday–Friday hours, and Instagram are confirmed.
- Clean logo delivery and any additional original photography. Supplied portraits are approved; patient-result imagery and video remain optional and uncleared.
- Final service descriptions, prices if desired, and whether optional gallery/testimonials/video belong in launch scope.
- Preferred domain, account owners, budget, and person responsible for content updates and hosting alerts.

## 9. Final handoff

Deliver the React + Vite source, optimized approved assets, optional content JSON, Netlify configuration, and an updated README covering setup and maintenance. Record the production URL, validation results, known limitations, account responsibilities, and rollback steps. A release is ready only when the content is approved, contact paths work, and the agreed quality and deployment checks are complete.
