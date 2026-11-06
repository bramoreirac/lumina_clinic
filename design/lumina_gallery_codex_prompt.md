# Lumina — Before & After Results Gallery: Codex Implementation Brief

## Objective
Implement **two alternative image-viewer designs** for the existing Lumina aesthetic clinic React website, allowing the client to compare them before choosing. Photos are already-combined before/after collages, mixed portrait (9:16) and landscape (16:9), often low resolution. Do not split, crop, retouch, upscale, or synthesize treatment-result photos.

## First: inspect the project
1. Inspect existing React components, routing, styles, design tokens, typography, and image assets.
2. Reuse existing visual language, color palette, breakpoints, and animation patterns.
3. Find the existing Results/Before & After section if any; do not replace unrelated homepage sections.
4. If actual photos are unavailable, use neutral **clearly labeled placeholders** with both aspect ratios, not fake patient results.
5. Build both alternatives behind a local variant toggle or separate preview routes; keep one shared photo dataset. Do not introduce backend functionality.

## Shared data model
Use a typed array (TypeScript if the project uses it):
`{ id, src, alt, treatment, orientation?: 'portrait' | 'landscape', caption?: string }`.
Provide meaningful alt text; avoid identifying patients. Display only approved, consented photos. Avoid unverified efficacy claims.

## Variant A — Editorial Grid + Adaptive Lightbox (recommended)
- Homepage: a compact, calm teaser (one or two previews) and a “Ver resultados” CTA to the gallery.
- Gallery page/section: responsive grid with consistent preview tile frames; 2–3 columns desktop, 1–2 mobile depending on viewport.
- Each preview uses `object-fit: contain`, centered on a subtle neutral surface; **never crop** the original collage.
- Treatment label under the image. Do not stretch portrait assets to fill landscape slots.
- Clicking opens a lightbox sized to the actual image ratio, with previous/next, close, counter, optional caption.
- On mobile: swipe navigation, clear close button, no accidental background scrolling; images fit viewport without forced enlargement.

## Variant B — Horizontal Filmstrip + Focused Viewer
- Homepage: a restrained horizontal carousel/filmstrip with one prominent result and adjacent-card peeks.
- Keep fixed card geometry but use `object-fit: contain` with subtle padding for mixed orientations.
- On desktop: arrows and keyboard controls; on mobile: swipe, scroll-snap or accessible carousel.
- Clicking opens the same adaptive lightbox, preserving the original image ratio.
- Add understated motion only: 180–280ms transitions, respecting `prefers-reduced-motion`.
- Avoid autoplay and exaggerated zoom/3D effects.

## Shared lightbox requirements
- `max-width: min(92vw, 1100px)` and `max-height` constrained to viewport; use CSS `object-fit: contain` and `max-width/max-height: 100%`.
- Never upscale small photos beyond intrinsic pixel dimensions where feasible; show them at natural size on large screens.
- ESC closes; left/right arrows navigate; focus trap and focus return to triggering thumbnail; labeled controls.
- Accessible buttons (44px tap targets), descriptive labels, keyboard navigation, and touch gestures.
- Optional image loading states, graceful broken-image fallback, lazy thumbnails; prioritize the visible lightbox image.
- Do not use a draggable before/after reveal slider: photos are already combined collages.
- Preserve the original image pixels and any existing before/after labels.

## Design quality and medical integrity
- Follow Lumina's premium, quiet visual language; avoid visual clutter and aggressive animation.
- No AI enhancement, beauty filters, or changes to patient appearance.
- Ensure explicit patient consent for publication and appropriate privacy safeguards.
- If required by the client, display a restrained note that results vary by individual; do not invent medical claims.

## Implementation expectations
1. Build reusable `ResultsGallery`, `ResultCard`, `ResultsLightbox`, and `GalleryVariantSwitcher` (preview-only).
2. Reuse existing libraries when possible. If new dependencies are justified, propose them first; possible choices: Embla Carousel and yet-another-react-lightbox.
3. Keep photo data separate from presentation.
4. Support portrait 9:16 and landscape 16:9; test also square and unusually narrow collages.
5. Verify at 320px, 375px, 768px, 1024px, and desktop widths.
6. Check keyboard, touch, loading, image integrity, and reduced-motion behavior.
7. Provide a short comparison of Variant A and B, and list files changed and any dependencies added.

## Acceptance criteria
- Both variants can be reviewed side-by-side or via an obvious preview switch.
- No photo is cropped, distorted, altered, or silently replaced.
- Homepage remains concise; detailed gallery lives outside the main landing content.
- Lightbox handles mixed ratios gracefully on desktop and mobile.
- Existing website design and unrelated features remain intact.

## Workflow
Inspect → explain intended component integration briefly → implement both alternatives → run available checks/build → summarize tradeoffs. Do not deploy or remove the preview switch until explicitly asked.
