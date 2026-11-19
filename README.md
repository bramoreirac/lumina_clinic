# Lúmina Clínica Estética

Spanish-language website for Lúmina Clínica Estética in León, Nicaragua. The project is complete and deployed. The repository declares [www.lumina-clinica.com](https://www.lumina-clinica.com/) as the canonical production hostname.

| Page | Content |
| --- | --- |
| `/` | Featured treatments, clinic principles, doctor profile, before-and-after carousel and lightbox, consultation process, FAQ, and contact information. |
| `/servicios/` | Treatment image carousel, expandable service directory, and shared contact and footer. |

The results gallery is at `/#resultados`. Both pages are built by Vite and rendered in the browser with React. Motion and Splide handle animation and carousels. WhatsApp and phone links let visitors inquire about appointments. There is no backend or booking system.

## Local development

Use Node.js 24 to match the hosting configuration.

```sh
npm ci
npm run dev
```

Open the URL Vite prints and visit both routes. On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

| Command | Purpose |
| --- | --- |
| `npm run lint` | Run repository-wide ESLint. |
| `npm exec -- eslint src` | Lint the application source. Useful when locally ignored video assets trigger repository-wide lint errors. |
| `npm run build` | Build both HTML entry points and assets into `dist/`. |
| `npm run preview` | Serve the production build locally after building. |

Use the release smoke checks in [PLAN.md](PLAN.md) after making changes. The project has no automated test script.

## Editing the site

| Location | What to edit |
| --- | --- |
| `src/App.jsx` | Homepage, shared contact and footer, and FAQ. Keep FAQ and footer hours aligned. |
| `src/pages/ServicesPage.jsx`, `src/data/services.js`, `src/data/serviceGallery.js` | Services page, categories, treatment descriptions, and eight image cards. |
| `src/data/treatmentResults.js` | Active before-and-after entries. The carousel and lightbox use the same nine results through `src/data/resultsGallery.js`. |
| `src/components/`, `src/App.css`, `src/index.css` | Shared components, layout, responsive styling, and motion. Results also have a dedicated stylesheet. |
| `src/assets/clinic/`, `src/assets/fonts/` | Runtime imagery, fonts, and font notices. |
| `public/` | Files copied to the build, including the favicon, social preview, robots.txt, and sitemap. |
| `source-assets/` | Tracked flower artwork and SVG references retained outside the published build. |

The two inactive localized-fat WebP files remain in `src/assets/clinic/results/`. Restore an import and image entry in `treatmentResults.js` to re-enable either comparison in both views. Preserve each image's full composition and original labels. Keep customer originals, scratch output, local guides, and video drafts in their existing Git-ignored folders.

## Hosting and documentation

`netlify.toml` configures Node 24, `npm run build`, and `dist/` as the publish directory. Vite emits `dist/index.html` and `dist/servicios/index.html`. Netlify's build command runs independently of lint.

- [PLAN.md](PLAN.md) covers the maintenance handoff, release smoke checks, and rollback.
- [PRODUCT.md](PRODUCT.md) records the published scope and displayed clinic details.
- [DESIGN.md](DESIGN.md) describes the visual system and interactions.
- [SEO.md](SEO.md) explains indexing, social previews, and Google thumbnails.
- [PHASE_1.md](PHASE_1.md) and [MIGRATION.md](MIGRATION.md) preserve the discovery and Penpot migration history.
