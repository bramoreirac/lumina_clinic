import { treatmentResults } from './treatmentResults'

// Each source image is an existing, complete collage. Keep its original pixels and labels.
/** @type {Array<{id: string, src: string, alt: string, treatment: string, orientation: 'portrait' | 'landscape', width: number, height: number, caption?: string}>} */
export const resultsGallery = treatmentResults.flatMap((treatment) =>
  treatment.images.map((image, index) => ({
    id: `${treatment.id}-${index + 1}`,
    src: image.src,
    alt: image.alt,
    treatment: treatment.name,
    orientation: image.height > image.width ? 'portrait' : 'landscape',
    width: image.width,
    height: image.height,
  })),
)
