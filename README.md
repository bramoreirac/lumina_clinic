# Lúmina Clínica Estética

Spanish-language clinic website built with React, Vite, JavaScript/JSX, Motion, and Splide. It is a static application with no backend, database, patient accounts, booking system, or payments.

## Project status

Updated: **7 November 2026**.

The root application is the only maintained version. The design and content implementation are substantially complete after desktop/mobile review. Final Netlify deployment and connection of the approved `.com` domain remain pending; no production URL or current Netlify deployment status has been verified in this repository review.

| Page | Current implementation |
| --- | --- |
| `/` | Hero, featured treatments, doctor, clinic principles, before/after gallery, consultation process, FAQ, contact/map, and footer. |
| `/servicios/` | Matching hero with its own photo, eight image-based treatment cards, expandable service categories, results link, and shared contact/footer. |

Results live at `/#resultados`; there is no separate results page. Both HTML entry points still contain `noindex, nofollow` for review. The earlier standalone site copies have been removed, with distinct SVG assets preserved under `source-assets/`.

## Local development

Use Node.js 24 to match `netlify.toml`.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. Visit `/` and `/servicios/`. On PowerShell, use `npm.cmd` if execution policy blocks `npm`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Generate both static page entry points and bundled assets in `dist/`. |
| `npm run preview` | Serve the production build locally after building. |

There is no automated test script configured. Latest recorded lint/build checks passed after the obsolete project cleanup. Browser checks covered desktop/mobile layouts, section fades, rounded featured/results cards, keyboard focus, hover effects, and carousel movement. Physical-device and cross-browser release checks remain separate from those Chromium checks.

## Editing and assets

| Location | Responsibility |
| --- | --- |
| `src/App.jsx` | Homepage content and shared contact/footer. |
| `src/App.css` | Shared visual styles, responsive rules, colors, and shapes. |
| `src/pages/ServicesPage.jsx` | Services page composition and category definitions. |
| `src/data/services.js` | Treatment descriptions and service anchors. |
| `src/data/serviceGallery.js` | Eight Services image cards and gallery-specific descriptions. |
| `src/data/treatmentResults.js`, `src/data/resultsGallery.js` | Before/after images and gallery data. |
| `src/components/` | Shared hero/header, carousels, service tree, FAQ, lightbox, and motion helpers. |
| `src/assets/clinic/`, `src/assets/fonts/` | Application media and local font files/licenses. |
| `public/` | Files copied to the build without bundling, including the favicon. |
| `source-assets/pressed-flowers/` | Original flower artwork: AI, EPS, and JPG files. |
| `source-assets/svg-patterns/`, `source-assets/icons/` | Preserved additional SVGs and variants; not imported by the current site. |

`customer_files/`, `docs/`, and local agent/browser records are ignored by Git. Preserved files under `source-assets/` are tracked and are not published by the current build. Runtime images must stay in the application assets or `public/` and be referenced appropriately.

The customer confirmed permission to publish photos of the real people shown. This does not document ownership or licensing of every third-party asset. The active pressed-flower background's original license remains to be verified. Existing font license files are retained. The reconstructed logo remains in use; a supplied master can replace it later.

## Netlify and launch

`netlify.toml` sets Node **24**, build command **`npm run build`**, and publish directory **`dist`**. Vite emits `dist/index.html` and `dist/servicios/index.html`; the app does not use a client router. Netlify's configured build does **not** run lint automatically.

Before launch:

- Confirm the production branch, hosting/domain ownership, approved `.com` address, and maintenance responsibility.
- Verify a hosted build, including direct loading and refreshing `/servicios/`, image loading, contact links, and mobile behavior.
- Connect the domain, verify HTTPS and the preferred root/`www` hostname, and preserve any existing email DNS records.
- Remove review-only `noindex, nofollow` from both production entry points when publication is authorized; keep previews excluded from indexing.
- Add final-domain canonicals, social sharing metadata, sitemap/robots configuration, and verified structured data as appropriate. These are not implemented yet.
- Complete final clinic content review and the remaining browser/interaction checks in [PLAN.md](PLAN.md).

Do not treat a successful build as visual, medical-content, SEO, or licensing clearance. Current live hosting settings must be checked in the hosting account at deployment time.

## Documentation

- [PLAN.md](PLAN.md): completed work, validation record, known follow-ups, and launch checklist.
- [DESIGN.md](DESIGN.md): current visual and motion specification.
- [PRODUCT.md](PRODUCT.md): scope, clinic details currently displayed, and content commitments.
- [SEO.md](SEO.md): current metadata and outstanding launch SEO work.
- [PHASE_1.md](PHASE_1.md): historical discovery inventory; its original assumptions are superseded by the current documents and implementation.
