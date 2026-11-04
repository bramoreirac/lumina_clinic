# Motion implementation

Implemented from `docs/site_motion_guidelines.md` after approval of the five-step plan. Brand colors, typography, content, and layouts are preserved.

## Behavior

- `Hero`: both page heroes use a brief photo fade followed by heading, description, and actions. Text moves 16px over 450ms, with delays of 80ms, 180ms, and 280ms. The image starts partially visible and fades over 400ms.
- `Reveal`: featured treatment cards, service gallery figures, and the doctor section's portrait and copy reveal once when 15% enters the viewport. Keyboard focus makes content visible immediately. The catalogue remains static for straightforward reading.
- The featured treatment photo uses the shared visible-state entrance: a 12px rise and subtle opacity change over 450ms, triggered once when 15% enters view. Reduced motion displays it immediately without travel.
- The consultation section retains its original square portrait. Its heading, introduction, three steps and portrait use the shared visible-state entrance, with short staggered delays for the copy and steps. The existing SVG icon sequence remains; reduced motion disables both travel and icon animation.
- The clinic introduction animates its heading, five principles, and faith content once as they enter view. The principles have a short stagger. The FAQ heading and question list enter separately; their existing accordion controls retain their own animation. These entrances begin from a visible state and use the shared 450ms easing and viewport threshold.
- `SiteHeader`: mobile navigation fades and moves 8px over 220ms. Closing makes its links inert immediately. Escape returns focus to the menu button; same-page links focus their destination. Resizing resets the mobile menu.
- `FaqItem`: answer height and opacity transition over 250ms. Buttons expose expanded state and answer relationships. Closed answers are inert and hidden from assistive technology, including during the closing animation. Rapid toggles use the current requested state.
- `PressLink`: primary buttons and map actions scale to 98% while pressed. Existing color feedback and visible focus outlines remain. Decorative card hover movement is restricted to a fine pointer that supports hover.
- The existing once-only process sequence is preserved and stops when reduced motion is enabled. The old competing hero-rule animation was removed.

## Accessibility and maintenance

`MotionConfig` respects user preferences globally. `useMotionPreference` combines Motion's initial preference with a live media-query subscription so changes apply to mounted components. Reduced motion uses immediate states; a CSS safeguard ensures hero and treatment content remains visible during preference changes.

Shared entrance timing is in `src/components/motionSettings.js`. Avoid adding repeated reveals to every catalogue row or using scroll event handlers for animation. The only layout animation is the user-requested expansion of FAQ answers.

## Verification

- Production build and ESLint passed.
- Both pages checked at 360px, 768px, and 1440px, with normal and reduced motion: 12 cases, no browser errors or horizontal overflow.
- Checked FAQ Enter/Space controls, rapid toggles, menu Escape/focus behavior, closed-state inertness, breakpoint changes, and live reduced-motion changes.
- Clinic and FAQ entrance triggers were checked at 360px, 768px, and 1440px, including keyboard accordion operation, closed-state inertness, and switching to reduced motion while the page is open.
- Phone portrait (360 × 780) and landscape (780 × 360) checks with 4× CPU throttling measured load CLS of approximately 0.010 and 0.0001 respectively. These are local emulation results, not measurements from physical Android hardware.
- Review screenshots and browser-check scripts are saved under the ignored `customer_files/_review/` folder.

The dependency installation audit reported six moderate findings in the existing ESLint/minimatch development-tool chain, with no Motion advisory reported. Resolving those development-tool findings is separate maintenance; no forced dependency changes were made.
