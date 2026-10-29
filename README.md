# Lúmina Clínica Estética

React + Vite website for the clinic, in Spanish. The application is a static site and does not use a backend or database.

## Local development

Install dependencies with `npm ci`, then start the development server with `npm run dev`. On PowerShell, use `npm.cmd` if execution policy blocks `npm`.

Run `npm run lint` and `npm run build` to validate; use `npm run preview` to inspect the built site locally. The earlier design prototype is still available at `/design/` in the development server.

## Preliminary review on Vercel

The current build is for preliminary review and is marked `noindex, nofollow` in both the HTML and `vercel.json`. This discourages indexing; it does not make a deployment private. Check the Vercel project's deployment protection and share access with the doctor as appropriate. A protected preview may require a shareable link or an invitation.

After authenticating to Vercel and linking the project, run `vercel deploy` from the project root for a preview deployment. Do not use `--prod` for this review. Vite uses `npm run build` and the `dist` output directory. The final hosting target remains Netlify unless the customer chooses otherwise. Remove the preview indexing restrictions only when preparing the final public launch.

## Content and assets

The current site content lives in `src/App.jsx`, styling in `src/App.css`, and deployable media in `src/assets/clinic`. The logo is reconstructed from customer video and should be replaced with the clean master when available. Review treatment descriptions and the peeling image label with the doctor before launch; the street address is still pending. See `PHASE_1.md`, `PLAN.md`, `DESIGN.md`, and `SEO.md` for the project notes.
