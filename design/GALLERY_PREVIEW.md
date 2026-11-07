# Results gallery

Variant B was selected: a horizontal filmstrip on the homepage and `/resultados/`, with adjacent previews, arrows, keyboard controls and native touch scrolling. The A/B preview switch and grid alternative were removed. Existing `vista` query parameters no longer select a design.

The original eleven collages share an adaptive lightbox with Escape/arrow navigation, focus containment/return, mobile swipe navigation, background scroll locking and image error messaging. No runtime dependencies were added.

Implementation: `ResultsGallery`, `ResultCard`, `ResultImage`, `ResultsLightbox`, `ResultsGallery.css`, and `data/resultsGallery.js`. `App`, `main`, `SiteHeader`, Vite build inputs and `resultados/index.html` integrate the static route.

Browser verification covered 320, 375, 768, 1024 and 1440px; image containment and natural dimensions; portrait, landscape, square and narrow aspect ratios; touch navigation; Escape/arrows; focus return; scroll locking; error fallback; and reduced motion. Square/narrow checks used neutral labeled placeholders in browser memory. Source photos were not edited. Browser coverage was Chromium.

The pages retain `noindex, nofollow`. Existing project notes require confirming publication permission for before/after images. No deployment was performed.

## Preview containment correction

The desktop image overflow discovered in the design review is fixed. Preview images now use explicit inset bounds inside the fixed frame, retaining `object-fit: contain`. The correction was checked for all eleven images on the homepage and gallery at 320, 375, 768, 1024 and 1440px. See `FRONTEND_REFINEMENT.md` for the broader design pass.
