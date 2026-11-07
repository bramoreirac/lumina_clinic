# Search visibility and launch status

Updated: **7 November 2026**. This records the current local implementation and remaining production work, not search rankings or a hosted audit.

## Current implementation

| Item | Status |
| --- | --- |
| Language | Both HTML entry points declare `lang="es"`. |
| Homepage title | Lúmina \| Medicina estética en León, Nicaragua |
| Services title | Servicios \| Lúmina Clínica Estética en León, Nicaragua |
| Descriptions | Separate Spanish meta descriptions in `index.html` and `servicios/index.html`. |
| Basic metadata | Viewport, UTF-8, theme color, and SVG favicon are present. |
| Robots meta | Both pages still specify `noindex, nofollow` for review. |
| Routes | `/` and `/servicios/` have Vite HTML entry points. Results use `/#resultados`, not a standalone page. |
| Main content | Rendered client-side by React into an initially empty `#root`; no static prerendering is configured. |
| Local details | Visible address/map, phone, email, Instagram, and current hours are implemented; see [PRODUCT.md](PRODUCT.md). |
| Canonical, Open Graph, social image metadata | Not implemented. |
| Sitemap and robots.txt | Not present in `public/`. |
| Structured data | Not implemented. |
| Production `.com` domain, Search Console, rankings | Not verified or configured by this documentation update. |

`noindex` is an indexing instruction, not access protection. Removing it does not guarantee indexing, and retaining it would prevent the intended production pages from being eligible for normal indexing by compliant search engines.

## Launch checklist

- [ ] Confirm the final HTTPS domain and preferred root/`www` hostname, then verify redirects.
- [ ] Remove review-only `noindex, nofollow` from both authorized production entry points. Keep preview protection/indexing controls separate so review deployments do not become competing public copies.
- [ ] Add absolute, page-specific canonical URLs and social sharing metadata using the final domain and approved imagery.
- [ ] Add `sitemap.xml` for the actual maintained public pages and an intentional `robots.txt` policy. Do not add a removed results page to the sitemap.
- [ ] Verify page titles/descriptions, meaningful rendered headings, image alternatives, direct `/servicios/` loads, and contact destinations on the hosted build.
- [ ] Consider appropriate business structured data only after confirming the clinic details. Do not fabricate ratings, reviews, credentials, opening hours, or medical claims.
- [ ] Evaluate static prerendering if discoverability/rendering checks justify it; React remains client-rendered today.
- [ ] Measure hosted performance/accessibility and inspect rendered output. No current Lighthouse/Core Web Vitals score is claimed.
- [ ] With owner authorization, verify Search Console, submit the sitemap, inspect indexing, and review any existing Google Business Profile details and website link. None of those account actions is implied by this checklist.

## Content maintenance

Use readable, original Spanish treatment information and natural service/location headings. The current directory combines eight image cards with twelve additional categorized entries; the old ten-item discovery list is not the current directory. Treatment descriptions and professional wording require clinic review, without promises of universal suitability or guaranteed results.

Keep contact/FAQ hours and externally maintained clinic profiles aligned. Do not treat a visual layout, carousel, corner radius, or structured-data addition as evidence of ranking improvement. Additional treatment-specific pages would need useful original content and are outside the current two-page scope.

## Reference documents

These are reference links retained for implementation-time verification, not a claim they were rechecked during this documentation-only update.

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Business Profile local ranking guidance](https://support.google.com/business/answer/7091?hl=en)
