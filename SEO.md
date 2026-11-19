# Search visibility and social sharing

Updated **18 November 2026**.

## Production configuration

| Item | Repository configuration |
| --- | --- |
| HTML and metadata | `index.html` and `servicios/index.html` declare Spanish, distinct page titles and descriptions, and absolute canonicals on `https://www.lumina-clinica.com`. |
| Open Graph | Page-specific URL, title, and description. Both pages share `/social-preview.png`, a 1200 × 630 branded image. |
| Favicon | Both pages use `/lumina-icon.svg`. |
| Crawling and indexing | Both HTML entries omit the earlier review-only `noindex, nofollow`. `public/robots.txt` allows crawling and points to the sitemap. |
| Sitemap | `public/sitemap.xml` lists the homepage and `/servicios/`. Results are a section of the homepage. |
| Rendering | React fills `#root` in the browser. Metadata is in the initial HTML. |
| Structured data | Neither entry currently includes structured data. |

## Preview images

`og:image` declares the branded image for social sharing. Google chooses the larger search-result thumbnail automatically and may use an image from the page. The favicon is the small icon beside the result. [Google Search image guidance](https://developers.google.com/search/docs/appearance/google-images#specify-a-preferred-image-with-metadata) · [Google favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search)

If the clinic chooses to suppress the homepage image preview, use a page-level `max-image-preview:none` directive. The current homepage has no such directive. [Google preview controls](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#max-image-preview)

## Maintenance

- Keep the canonical, `og:url`, and sitemap aligned when changing a route or hostname. Keep the favicon and social preview URLs accessible.
- When changing metadata, check the deployed HTML and verify that the image and sitemap load from the canonical hostname.
- If the site owner uses Search Console, inspect the canonical URL there and request indexing when an update needs recrawling. Publishing metadata or requesting a crawl provides no guarantee of a particular thumbnail or ranking. [Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
