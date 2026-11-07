# Frontend refinement — 5 November 2026

The current React website uses one visual system: ivory for the primary canvas, a light stone surface for supporting sections, bottle green for primary actions, and gold for small accents. Playfair Display carries headings; Montserrat carries body copy and interface labels. Main descriptions now use 16px text.

## Changes

- Composed the homepage hero with separate text and real clinic photography, a smaller brand label, the doctor's name and consistent contact actions.
- Restored the animated treatment strip below the hero at the user's request. It links to service categories and pauses manually, on hover/focus, offscreen, or while the page is hidden. Reduced motion presents one static, horizontally scrollable list.
- Featured treatments retain the user-selected gold illustration panels and ivory card bodies. Desktop/tablet use a two-by-two grid; phones use scroll-snap cards with peeks, previous/next controls, keyboard arrows and swipe. Full cards link to treatment-specific WhatsApp inquiries. Hover/focus feedback highlights the action. The real treatment photograph remains in a smaller frame.
- Moved the doctor introduction directly after featured treatments, followed by the personal values and faith content.
- Simplified backgrounds, separators, icons, portrait framing and contact controls across the homepage.
- Grouped all 20 existing services into facial care, body treatments and clinical dermatology. Service details open through labeled disclosures. Product photographs and result collages are no longer used as service thumbnails; the services hero uses real clinic photography.
- Preserved selected Variant B. Fixed preview containment using explicit image insets and dimensions, avoiding intrinsic image size expanding the frame. Original result images remain untouched.

## Source files

`src/App.jsx`, `src/App.css`, `src/components/Hero.jsx`, `src/components/SiteHeader.jsx`, `src/components/TreatmentIcon.jsx`, `src/components/FeaturedTreatments.jsx`, `src/components/ServicesStrip.jsx`, `src/components/ResultsGallery.css`, `src/pages/ServicesPage.jsx`, and `src/data/services.js`.

The active catalog, including the three services previously defined only in the photo gallery, is now in `src/data/services.js`. `src/data/serviceGallery.js` remains a historical photo inventory. The `design/` directory remains the older prototype.

## Verification

Chromium / Playwright CLI: homepage, services and results at 320, 375, 768, 1024 and 1440px. All 15 layouts have no horizontal page overflow and one H1. All 20 services remain present. Every results preview image stays within its frame at each width. Checked service disclosures, mobile menu and Escape, lightbox arrows, focus containment/return, and normal/reduced-motion layouts. Visually inspected desktop and mobile screenshots. No new dependencies or image edits. Real-device Safari and Firefox were not tested.

Run `npm run dev -- --host` for a local network preview. This change does not publish the site or change the existing indexing policy.

## Featured cards follow-up

Checked 320, 375, 390, 768, 1024 and 1440px without page overflow. Verified card navigation, keyboard focus, touch swipe, strip pause/resume, offscreen suspension and reduced-motion behavior. Lint and build pass. Impeccable was installed globally and used for refinement guidance. Its mechanical scan flagged the existing brand font and differences from the older prototype design specification; the requested card colors and brand typography are intentional. No project dependencies were added.

## Final hero selection

The user selected the light ivory hero with a clean image/text division. The blending masks, dark colors, gold button override and mobile image overlap were removed. The photo returns to 47% width on desktop and a separate image below the content on phones.

## Hero pattern

Applied Hero Patterns Topography behind the homepage hero text, gold #C9A66B at 8% opacity over ivory. The pattern is served locally from `src/assets/clinic/topography.svg`. Original photographs remain unmodified. Footer attribution identifies Steve Schoger / Hero Patterns, links CC BY 4.0, and notes the color/opacity adaptation.
