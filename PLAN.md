# Release handoff and maintenance

Updated **18 November 2026**.

The two-page Lúmina site is complete and deployed as reported by the project owner. The repository configures Netlify and declares `https://www.lumina-clinica.com/` as canonical. Hosting account settings, the production branch, and the deployed build were outside this verification.

## Publishing updates

1. Edit the maintained React app at the repository root. See [README.md](README.md) for content and asset locations.
2. Run `npm run lint` and `npm run build`, then serve `dist/` with `npm run preview` for a local smoke check. On this workspace, locally ignored video files cause lint errors in vendored GSAP. `npm exec -- eslint src` passes, as does the production build.
3. Use the repository and production branch connected to the existing Netlify site. After publishing, repeat the smoke checks on the canonical hostname.
4. If a release needs reverting, restore the previous known-good Netlify deploy and revert the source change through the normal Git workflow so the next deploy keeps the fix.

## Release smoke checks

- Open the homepage and load and refresh `/servicios/` directly. Check layout, images, and navigation at desktop and mobile widths.
- Check carousel controls, lightbox opening and dismissal, service and FAQ disclosures, keyboard focus, and reduced-motion behavior.
- Check clinic contact, social, and map links after any content change. Keep FAQ and footer hours aligned.
- Check the deployed canonical URLs, favicon, social preview, robots.txt, and sitemap after SEO changes. See [SEO.md](SEO.md).

Earlier Playwright reviews covered 1440px, 768px, and 375px layouts, selected motion and reduced-motion states, and carousel and disclosure interactions. The featured and Services continuous carousels rely on temporary pauses and reduced-motion behavior. They currently have no persistent pause control.

## Content and assets

Keep the clinic's published details aligned with [PRODUCT.md](PRODUCT.md). Preserve the supplied before-and-after collages and existing font notices. The customer confirmed permission to publish the people shown. The repository does not record a license for the pressed-flower artwork.
