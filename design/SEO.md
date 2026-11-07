# Search visibility strategy

Scope: planning for the final Spanish-language React + Vite website on Netlify. This is not a ranking report or keyword-volume study. The local design preview intentionally remains `noindex, nofollow`.

## How the three openings compare

These are content/visitor-intent judgments, not claims that Google prefers one visual layout:

| Opening | Useful emphasis | SEO implication |
| --- | --- | --- |
| Doctor introduction | Professional identity, approach, and searches for the doctor's name. | Retain a descriptive service/location heading and useful clinic/service content. A portrait-first arrangement is not inherently a ranking benefit. |
| Services first | Visitors looking for a particular treatment. | Makes treatment information easy to find. It still needs substantive approved content; a list of treatment names is not a complete service-content strategy. |
| Clinic introduction | Lúmina's brand and local practice identity. | A good fit for a clinic homepage if the opening also says what it offers and where. The doctor and services remain important further down. |

Recommended direction for this branch: **clinic introduction with clear service/location wording**, retaining the doctor introduction and all supplied services. This balances brand clarity and local relevance without claiming a ranking advantage over an equally useful doctor-led page.

## Applied to the branch preview

- Title: “Lúmina | Medicina estética en León, Nicaragua”.
- One visible H1 combining “Lúmina” and “Medicina estética en León, Nicaragua”.
- A descriptive Spanish meta description.
- Visible clinic approach, doctor identity/title, ten services, contact details, and confirmed hours.
- Navigation and content remain real HTML with working anchors; important content is not hidden in promotional images.
- Preview stays out of indexing. The default React production entry is still the starter; these prototype changes do not implement production SEO.

## Priorities for the production implementation

1. **Useful approved content.** Complete clinic-specific service descriptions and doctor-reviewed copy. Do not invent qualifications, results, reviews, prices, or treatment claims. Use readable names and headings naturally rather than repeating keywords.
2. **Clear clinic details.** Use the confirmed business name, phone, city, and Monday–Friday hours consistently. Add the precise address/map pin once supplied.
3. **Google Business Profile.** Confirm whether the clinic already has a profile. With the owner's authorization, verify/update its address, category, hours, website, and genuine photos. Profile access/changes are a separate task; none have been made here. Google identifies relevance, distance, and prominence as main local-ranking factors, not homepage layout.
4. **Crawlable React output.** During implementation, evaluate static prerendering for primary marketing content and metadata while retaining React + Vite and static Netlify hosting. Google can render JavaScript, but prerendering can make content available without waiting for client rendering. Verify the final HTML and Search Console rendering rather than assuming the development preview represents the production build.
5. **Appropriate technical metadata.** Add final-domain canonical URLs, sitemap, robots policy, meaningful titles/descriptions, social preview metadata, and suitable business structured data containing only verified information. Structured data is not a ranking guarantee. Do not generate an incomplete local-business address or fabricated reviews.
6. **Performance and accessibility.** Optimize imagery and fonts, preserve readable contrast and mobile behavior, and check actual production loading. A design preference alone is not evidence of SEO performance.
7. **Indexing and measurement.** Keep staging/previews excluded; make intended production pages indexable at launch. Connect Search Console with authorization, submit the sitemap, and monitor actual queries, indexing, and clicks before judging search outcomes.

If treatment-specific searches become a priority, consider separate static service pages with useful original, doctor-reviewed information. This is a potential scope extension, not a requirement to create ten thin pages. No search volume, competition, or position estimates have been established.

## Primary references

- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — clear content, titles, crawling, indexing, and site structure; no guaranteed first-place ranking.
- [Google Business Profile: local ranking guidance](https://support.google.com/business/answer/7091?hl=en) — accurate profile information and relevance, distance, prominence.
- [Google Search Central: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) — JavaScript rendering, indexable content, and server-side/prerendered output.
- [Google Search Central: local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — supported business data and feature requirements.
