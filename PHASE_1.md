# Phase 1 — Content and asset discovery

Prepared: 27 October 2026. Status: discovery inventory prepared and core customer details confirmed; remaining publication dependencies are listed below.

This document is the content handoff for design. **Supplied** means explicitly present in customer files; **observed** means visible in an asset; **draft** means proposed website copy; **pending** means not established. Supplied or observed material is not automatically final publication approval.

**Confirmed** means explicitly confirmed by the customer in this conversation on 27 October 2026.

## 1. Clinic details and decisions

| Item | Finding | Status / source |
| --- | --- | --- |
| Public clinic name | Lúmina Clínica Estética | Supplied: `customer_files/servicios_ofrecidos.txt`; consistent with brand manual. |
| Doctor's display name | Dra. Steacey Maradiaga | Supplied: services file. Use this spelling as the working display name. |
| Longer name | Dra. Steacey Kareliz Maradiaga Urbina | Observed in `snapgram.io_2q0gb5dw5ek9.jpg`; confirm spelling and whether the longer version is wanted. |
| Professional title | Médico general con especialidad en medicina estética | Confirmed by customer. Preserve this wording; do not substitute “dermatóloga”. |
| Telephone | +505 5881 1397 | Supplied: services file; local number also appears in `snapgram.io_cj6psylj1nn8.jpg`. |
| Telephone link | `tel:+50558811397` | Derived from supplied number. Verify live during implementation. |
| WhatsApp | `https://wa.me/50558811397` | Customer confirmed that the supplied number accepts WhatsApp. Test link behavior during implementation. |
| Website language | Spanish only | Confirmed by customer. |
| Location / service area | León, Nicaragua | City and country confirmed. Street address, map pin, and directions link pending. |
| Hours | Monday–Friday, 8:00 a. m.–5:00 p. m.; other hours by appointment | Confirmed by customer. Spanish display: lunes a viernes. |
| Instagram | `https://www.instagram.com/dra.steacey_maradiagaurbina/` | Customer supplied the profile URL; query string removed for a clean link. Profile not independently browsed. |
| Email | Not supplied | Optional; omit unless supplied. |
| Primary action | WhatsApp inquiry to request a consultation, with telephone as an alternative | Proposed flow using the confirmed channel. No appointment is reserved by opening a link. |
| Audience | People exploring aesthetic medicine and skin-care services in León, Nicaragua | Geography confirmed; audience priorities proposed from supplied catalog. |
| Pricing / promotions | No approved price list | Omit prices, discounts, and session packages until supplied. |
| Reviews / credentials | No verified testimonial collection or credential details | Omit ratings, experience totals, awards, and certification claims until supplied. |

## 2. Brand brief

All four pages of `customer_files/Manual_Marca_Lumina_1.pdf` were rendered and visually reviewed. The manual establishes:

- Deep black `#17181A`, gold `#C9A66B`, ivory `#F2EFE6`, stone `#A89F91`, and supporting bottle green `#2E4034`.
- Playfair Display bold for headings and Montserrat light/regular for body text. Prefer regular for website legibility.
- Ivory or deep black principal surfaces; gold as an accent; stone for secondary treatments; bottle green for occasional alternate compositions.
- No large gold-only areas, pink UI accents, pure black/pure white UI surfaces, or more than three colors in one designed composition.
- The manual's sample gold/ivory and stone/ivory text must still undergo website contrast checks in Phase 2.

The logo is visible in the PDF cover and social artwork, but no standalone SVG or transparent logo file was found. Customer confirmed a clean logo will be provided later. Use a typographic clinic-name treatment for provisional designs; do not treat a social-post crop as the final logo master.

The existing portraits include pink clothing. The manual's no-pink rule applies to the designed palette; retaining natural colors in an approved photograph is a proposed interpretation to confirm during design. Do not recolor the doctor's clothing without a specific request.

## 3. Asset inventory

Paths below are relative to `customer_files/content/`. Dimensions are pixels, measured from the originals. File sizes are rounded decimal kB. All eleven JPGs were visually reviewed. Customer approved publication of the supplied portraits; patient before/after imagery and video/audio remain outside that confirmation.

| File | Dimensions | Size | Observed content | Recommendation |
| --- | --- | --- | --- | --- |
| `ax2e2o.jpg` | 1088 × 1344 | 142 kB | Branded body-contouring post; doctor with laptop. | Reference only; embedded text and limited crop area make it a weak hero asset. |
| `kv75y9.jpg` | 1088 × 1344 | 140 kB | Patient before/after body images and disclaimer. | Exclude from initial layout. Artwork states permission was obtained, but website reuse and context still need confirmation. |
| `pkgt2d.jpg` | 2400 × 3200 | 856 kB | Clean portrait holding a vial and syringe; black clothing. | Strong resolution for treatment context; supporting image candidate. Portrait publication approved by customer. |
| `snapgram.io_2q0gb5dw5ek9.jpg` | 1080 × 1350 | 179 kB | “Quién soy” post, longer doctor name, white outfit. | Biography reference; request the original unlettered portrait if this look is preferred. |
| `snapgram.io_9ya0uo4wtro4.jpg` | 1080 × 1350 | 148 kB | Values: ethics, honesty, continued preparation, empathy, safety; faith reference. | Source for voice/values. Religious wording on the website is a separate editorial choice, not assumed. |
| `snapgram.io_cj6psylj1nn8.jpg` | 1088 × 1344 | 50 kB | Logo, individualized-care message, phone number. | Contact/voice reference; not a standalone logo asset. |
| `snapgram.io_cj70oscefdan.jpg` | 2119 × 2825 | 559 kB | Clean smiling doctor portrait at desk, clinic background, pink jacket. | Preferred About/hero candidate. Keep the face visible in responsive crops; use text alongside rather than across the busy background. |
| `snapgram.io_fc2390dcv4ex.jpg` | 1080 × 1350 | 197 kB | Dark branded commitment statement and doctor name/title. | Voice and dark-section reference; recreate selected approved wording as HTML. |
| `snapgram.io_m7dyb3nhhuok.jpg` | 1080 × 1350 | 152 kB | Individualized-care statement and small seated portrait. | Biography/approach reference. Request the original seated portrait if needed. |
| `snapgram.io_vd3qjuml4aqr.jpg` | 1088 × 1344 | 125 kB | Body-contouring goals and line illustration. | Reference only; advertised outcomes are not approved website claims. |
| `xti794.jpg` | 1088 × 1344 | 180 kB | Educational lipoenzyme post with anatomical illustration. | Reference only. Lipoenzymes are not in the supplied ten-service catalog. |
| `snapgram.io_axzxmf9fcd2m.mp4` | 716 × 1272 | 168 kB | 4.15-second vertical portrait clip at the desk, pink jacket. | Optional About media, not needed for launch. Sampled at one frame per second across the clip; nearly static portrait framing. H.264, 30 fps, AAC stereo audio track present. Audio content was not listened to or transcribed; speech/music and audio rights remain unverified. |

### Asset decisions for design

- Use `snapgram.io_cj70oscefdan.jpg` as the provisional main portrait and `pkgt2d.jpg` as an optional supporting image. Customer approved publication of the supplied portraits.
- Prefer HTML copy and original photography to whole social-post screenshots.
- No separate clinic-interior photo set, clean logo master, or original portrait behind the “Quién soy” artwork was found.
- Keep before/after imagery and video out of the baseline layout; add only if their use is explicitly confirmed.
- Keep originals intact. Optimization and final cropping belong to implementation after selection.
- Review renders/contact sheets are in `customer_files/_review/` as local working evidence, not production assets. That folder inherits the existing customer-files ignore rule.

## 4. Service catalog for review

The supplied list establishes these ten entries as project input. IDs and display capitalization below are proposed for future local JSON. The editorial focus column is a prompt for the doctor's final description, not a clinical claim or publishable description. No prices, effectiveness claims, treatment duration, contraindications, or session counts have been inferred.

| Proposed ID | Spanish display name | Editorial focus to confirm |
| --- | --- | --- |
| `hydrafacial` | Hydrafacial | Confirm exact treatment/equipment naming and what the clinic includes. |
| `limpieza-facial` | Limpieza superficial y profunda | Confirm whether these are one service or two selectable options. |
| `microdermoabrasion` | Microdermoabrasión | Supply a short description and intended consultation context. |
| `inductores-colageno` | Inductores de colágeno | Supplied areas: rostro, cuello y manos; confirm final wording. |
| `microneedling` | Microneedling | Confirm preferred terminology and service description. |
| `mesoterapia` | Mesoterapia facial y corporal | Confirm whether facial/corporal should remain one listing. |
| `plasma-rico-plaquetas` | Plasma rico en plaquetas | Confirm final description and whether to use the abbreviation PRP. |
| `peeling-quimico` | Peeling químico | Supply clinic-specific introductory wording without implying suitability for everyone. |
| `toxina-botulinica` | Aplicación de toxina botulínica | Use supplied generic name; do not substitute a product brand by assumption. |
| `fototerapia` | Fototerapia | Confirm modality and clinic-specific introductory description. |

Proposed section introduction, draft for review:

> Conoce nuestros servicios de cuidado facial y medicina estética. Contáctanos para consultar por una valoración y recibir información sobre las opciones disponibles.

If descriptions remain unavailable for the design review, use service names alone with a clearly labeled contact link. Do not manufacture filler benefits. Lipoenzymes/body-contouring services seen in social posts remain outside this catalog unless added by the doctor.

## 5. Spanish copy deck — draft, not publication-approved

Voice: warm, clear, professional, and respectful. Source themes: listening, individualized attention, empathy, and honesty from the supplied social posts. Avoid promises of transformation, guaranteed results, invented statistics, or unverified specialty claims.

### Navigation and hero

- Navigation: Inicio · La doctora · Servicios · Preguntas frecuentes · Contacto.
- Brand: Lúmina Clínica Estética.
- Hero heading: “Un espacio para escucharte y cuidar de ti.”
- Supporting text: “Conoce a la Dra. Steacey Maradiaga y nuestros servicios de medicina estética y cuidado facial.”
- Primary action: “Escribir por WhatsApp”, using the confirmed number.
- Secondary action: “Conocer los servicios”.

### About the doctor

> Soy la Dra. Steacey Maradiaga, médico general con especialidad en medicina estética. En Lúmina, mi enfoque parte de escucharte y comprender lo que buscas. Creo en una atención cercana, con empatía, honestidad y respeto por cada persona.

This is proposed first-person copy adapted from social-post themes, not an attributed quotation. Obtain the doctor's review. The professional title is customer-confirmed; add further training details only if supplied and do not invent years of experience.

### Consultation process

Proposed flow to confirm with the clinic:

1. **Contáctanos.** Escríbenos o llámanos para solicitar información.
2. **Coordina tu valoración.** Consulta con la clínica la disponibilidad y los detalles de tu visita.
3. **Conversa con la doctora.** Comparte tus objetivos y consulta tus dudas durante la valoración.

Pending operational details: appointment requirements, response times, consultation fee, preparation instructions, and cancellation policy. Do not advertise immediate replies or a free consultation without confirmation.

### FAQ draft

| Question | Draft answer / dependency |
| --- | --- |
| ¿Cómo puedo solicitar una valoración? | “Puedes escribirnos por WhatsApp o llamarnos al +505 5881 1397 para consultar disponibilidad.” |
| ¿Qué servicios ofrecen? | “Ofrecemos servicios de cuidado facial y medicina estética. Puedes consultar la lista de servicios y contactarnos para obtener más información.” Doctor to review. |
| ¿Cómo sé qué opción es adecuada para mí? | “Solicita una valoración para conversar con la doctora sobre lo que buscas y resolver tus dudas.” Doctor to review. |
| ¿Dónde está ubicada la clínica? | “Estamos en León, Nicaragua.” Add street address and directions when supplied. |
| ¿Cuál es el horario de atención? | “Atendemos de lunes a viernes, de 8:00 a. m. a 5:00 p. m. También atendemos en otros horarios con cita previa.” |
| ¿Cuál es el costo de la valoración? | Pending price/policy; omit until supplied. |

### Contact

- Heading: “Conversemos sobre tu valoración.”
- Supporting text: “Contáctanos para consultar nuestros servicios y coordinar tu visita.”
- Phone: +505 5881 1397.
- WhatsApp: `https://wa.me/50558811397`.
- Optional WhatsApp prefilled message: “Hola, quisiera información para solicitar una valoración en Lúmina Clínica Estética.”
- City: León, Nicaragua.
- Hours: “Lunes a viernes, de 8:00 a. m. a 5:00 p. m. Otros horarios con cita previa.”
- Instagram: `https://www.instagram.com/dra.steacey_maradiagaurbina/`.
- Street address, map link, and optional email: pending. No placeholder values should appear in production.

## 6. Remaining customer confirmations

Reply to these in any order; unanswered items stay pending:

1. Supply the street address/map pin. Spanish-only content, León/Nicaragua, and Monday–Friday operating hours are already confirmed.
2. Confirm whether the short display name should remain “Dra. Steacey Maradiaga”; the longer name is optional. The professional title is already confirmed.
3. Provide an email only if one should be displayed. WhatsApp and Instagram are already confirmed.
4. Provide the clean logo when available. Portrait publication is approved. Keep before/after images and the MP4 optional unless explicitly requested and cleared for website use.
5. Review the ten service names and the draft biography/FAQ/process. Supply final service descriptions and confirm whether prices should be shown or omitted.

Domain choice and account/maintenance ownership can be settled before deployment; they do not prevent initial design.

## 7. Phase 1 outcome and handoff

- **Done:** source inventory, full PDF visual review, image measurements and selection, video metadata and visual sampling, source-backed clinic details, normalized service catalog, draft Spanish copy, and missing-content checklist.
- **Confirmed by customer:** Spanish-only site, León/Nicaragua, professional title, WhatsApp number, Monday–Friday 8:00 a. m.–5:00 p. m. hours with other hours by appointment, Instagram URL, and portrait publication permission. Clean logo will follow later.
- **Still pending:** street address/map pin, final copy/service descriptions, and eventual clean logo. Before/after and video/audio use remain outside approved baseline scope. Video audio has not been reviewed.
- **Ready for:** a provisional Phase 2 layout using the supplied brand and candidate portrait, with unknown details held out of production copy.
- **Discovery inventory complete:** confirmed facts and missing items are distinguished. Remaining dependencies stay open for publication; they do not block provisional design.

No application code or production media has been changed in this phase.
