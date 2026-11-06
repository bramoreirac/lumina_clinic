# Lúmina Clínica Estética

React + Vite website for the clinic, in Spanish. The application is a static site and does not use a backend or database.

## Local development

Install dependencies with `npm ci`, then start the development server with `npm run dev`. On PowerShell, use `npm.cmd` if execution policy blocks `npm`.

Run `npm run lint` and `npm run build` to validate; use `npm run preview` to inspect the built site locally. The maintained pages are `/` and `/servicios/`.

## Netlify deployment

Connect the repository to Netlify and select the intended production branch. `netlify.toml` configures Node 24, `npm run build`, and the `dist` publish directory. Verify the homepage and `/servicios/` on the Netlify URL before connecting the final domain.

Both page entry points currently include `noindex, nofollow` for review. Remove those tags when the site is ready for search indexing. They discourage indexing but do not make a deployment private. Review Netlify's preview protection and indexing settings before sharing non-production deploys.

## Content and assets

The current site content lives in `src/App.jsx`, styling in `src/App.css`, and deployable media in `src/assets/clinic`. The logo is reconstructed from customer video and should be replaced with the clean master when available. Review treatment descriptions and the peeling image label with the doctor before launch; the street address is still pending. See `PHASE_1.md`, `PLAN.md`, `DESIGN.md`, and `SEO.md` for the project notes.
