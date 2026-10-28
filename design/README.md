# Phase 2 design preview

Start the existing Vite server from the repository root:

```sh
npm run dev
```

On Windows PowerShell, use `npm.cmd run dev` if execution policy blocks `npm.ps1`.

Open **http://localhost:5173/design/** (use the port shown by Vite if different). The local review server may also be available at **http://127.0.0.1:5173/design/**.

This is a responsive HTML/CSS/JavaScript design prototype for review before React implementation. The root Vite starter is still at `/`; the default production build does not include this prototype as an entry point.

## What to review

- Clinic-led opening: Lúmina identity, medicine/service location heading, and direct WhatsApp action.
- Clinic approach followed by the doctor's introduction and approved portrait.
- Services presented as ten readable entries, each with a WhatsApp inquiry link.
- Mobile menu, FAQ expansion, section navigation, and contact placement.
- Monday–Friday, 8:00 a. m.–5:00 p. m. hours and other hours by appointment.
- Mobile and desktop spacing and hierarchy.

The name treatment is temporary until the clean logo arrives. Medical and first-person copy are draft text from `PHASE_1.md`, awaiting final review. No exact address, price, map, reviews, or appointment availability has been invented.

## Files and assets

- `index.html`: proposed structure and Spanish copy.
- `preview.css`: brand tokens, responsive rules, and component styling.
- `preview.js`: progressive mobile navigation behavior.
- `fonts/`: locally served brand fonts and their OFL licenses.
- `assets.json`: source/provenance references. The portrait is read directly from `customer_files/content/` for this local prototype. That source folder is currently ignored by Git, so a fresh checkout needs the supplied customer files. Production asset copies and optimization belong to Phase 3.
- `../DESIGN.md`: visual-system handoff.
- `../PRODUCT.md`: confirmed product facts.

External WhatsApp, telephone, and Instagram links are real destinations. No message is sent automatically. No backend, forms, tracking, or remote font calls are included.

## Validation boundary

Chrome preview checks cover 320, 390, 768, 1024, and 1440 CSS pixels, loaded imagery/fonts, overflow, anchor targets, menu behavior, keyboard FAQ operation, and navigation without JavaScript. Reduced motion is respected. Brand foreground/background contrast was calculated separately.

This is not a production accessibility certification or browser-compatibility signoff. Final React integration, optimized media/fonts, SEO, full browser checks, and Netlify release remain in later phases.
