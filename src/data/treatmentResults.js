import alopecia01 from '../assets/clinic/results/before_after_alopecia_01.webp'
import alopecia02 from '../assets/clinic/results/before_after_alopecia_02.webp'
import alopecia03 from '../assets/clinic/results/before_after_alopecia_03.webp'
import alopecia04 from '../assets/clinic/results/before_after_alopecia_04.webp'
import pigmentation01 from '../assets/clinic/results/before_after_despig_corp_01.webp'
import pigmentation02 from '../assets/clinic/results/before_after_despig_corp_02.webp'
import body01 from '../assets/clinic/results/before_after_grasa_local_01.webp'
import body02 from '../assets/clinic/results/before_after_grasa_local_02.webp'
import body03 from '../assets/clinic/results/before_after_grasa_local_03.webp'
import toxin01 from '../assets/clinic/results/before_after_tox_bot_01.webp'
import toxin02 from '../assets/clinic/results/before_after_tox_bot_02.webp'

// Preserve each supplied comparison's complete composition and original labels.
export const treatmentResults = [
  { id: 'alopecia', name: 'Alopecia', images: [
    { src: alopecia01, width: 977, height: 572, alt: 'Antes y después de alopecia: vista superior del cabello' },
    { src: alopecia02, width: 1118, height: 548, alt: 'Antes y después de alopecia: vista frontal del cabello' },
    { src: alopecia03, width: 976, height: 579, alt: 'Antes y después de alopecia: comparación de la coronilla' },
    { src: alopecia04, width: 974, height: 572, alt: 'Antes y después de alopecia: otra vista superior del cabello' },
  ] },
  { id: 'despig_corp', name: 'Despigmentación corporal', images: [
    { src: pigmentation01, width: 1080, height: 1224, alt: 'Antes y después de despigmentación corporal: comparación de una rodilla' },
    { src: pigmentation02, width: 1080, height: 1169, alt: 'Antes y después de despigmentación corporal: comparación de una axila' },
  ] },
  { id: 'grasa_local', name: 'Tratamiento de grasa localizada', images: [
    { src: body01, width: 877, height: 481, alt: 'Antes y después del tratamiento de grasa localizada en el abdomen' },
    { src: body02, width: 1280, height: 1810, alt: 'Comparación frontal y lateral del abdomen antes y después del tratamiento de grasa localizada' },
    { src: body03, width: 1280, height: 2275, alt: 'Evolución del abdomen en los días 0, 15 y 22, según las etiquetas de la imagen' },
  ] },
  { id: 'tox_bot', name: 'Toxina botulínica', images: [
    { src: toxin01, width: 1209, height: 1371, alt: 'Antes y después de toxina botulínica: comparación del contorno de los ojos' },
    { src: toxin02, width: 1280, height: 1619, alt: 'Antes y después de toxina botulínica: comparación de la frente' },
  ] },
]
