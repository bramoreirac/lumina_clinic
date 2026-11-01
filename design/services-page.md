# Services page

The approved layout is a compact photographic hero, a square-photo gallery with gold captions, and the complete treatment catalogue. It inherits the homepage palette, fonts, header, contact section, and footer. The homepage retains its four featured treatments.

## Routes

- `/`: homepage.
- `/servicios/`: Services page. Vite builds `servicios/index.html` as a separate HTML entry, allowing direct visits and refreshes on static hosting without a client-side router or catch-all rewrite.
- Preview indexing restrictions remain in place.

## Adding customer photos

1. Save the approved, optimized image in `src/assets/clinic/`.
2. Import it in `src/data/serviceGallery.js` and append an entry with `image`, a unique `name`, descriptive Spanish `alt`, and actual `width` and `height`.
3. Array order determines display order. The gallery uses one column on phones, two from 600px, and four from 1051px.
4. Check the square framing on mobile and desktop; preserve important details and embedded captions.

The hero photo is selected separately in `src/pages/ServicesPage.jsx`. Treatment names and descriptions are in `src/data/services.js`.

Run `npm run lint` and `npm run build` after updates. Preview the built site and check navigation between both pages before deployment.
