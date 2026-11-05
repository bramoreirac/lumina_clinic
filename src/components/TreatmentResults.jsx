import { useId, useState } from 'react'
import { motion } from 'motion/react'
import { treatmentResults } from '../data/treatmentResults'
import useMotionPreference from './useMotionPreference'
import { sectionEntrance } from './motionSettings'
import PressLink from './PressLink'
import './TreatmentResults.css'

function Arrow({ previous = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={previous ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} /></svg>
}

export default function TreatmentResults() {
  const [selection, setSelection] = useState({ treatment: 0, image: 0 })
  const reducedMotion = useMotionPreference()
  const viewerId = useId()
  const treatment = treatmentResults[selection.treatment]
  const image = treatment.images[selection.image]
  const changeImage = (direction) => setSelection((current) => ({
    ...current,
    image: (current.image + direction + treatmentResults[current.treatment].images.length) % treatmentResults[current.treatment].images.length,
  }))

  return (
    <section className="results-section" id="resultados" aria-labelledby="results-title">
      <div className="container section-space">
        <div className="results-intro">
          <motion.h2 id="results-title" className="section-entrance" {...sectionEntrance(reducedMotion)}>Antes y después</motion.h2>
          <motion.p className="section-entrance" {...sectionEntrance(reducedMotion, 0.08)}>Explora las comparaciones de nuestros tratamientos. Cada persona requiere una valoración individual.</motion.p>
        </div>
        <div className="results-layout">
          <motion.div className="results-treatments section-entrance" role="group" aria-label="Elegir tratamiento" {...sectionEntrance(reducedMotion, 0.08)}>
            {treatmentResults.map((item, index) => (
              <button type="button" key={item.id} className="results-treatment" aria-pressed={selection.treatment === index}
                aria-controls={viewerId} onClick={() => setSelection({ treatment: index, image: 0 })}>
                <img src={item.images[0].src} alt="" width="96" height="72" loading="lazy" />
                <span><span className="results-treatment-name">{item.name}</span><span className="results-treatment-count">{item.images.length} imágenes</span></span>
              </button>
            ))}
          </motion.div>
          <motion.div id={viewerId} className="results-viewer section-entrance" {...sectionEntrance(reducedMotion)}>
            <figure className="results-comparison">
              <div className="results-image-stage">
                <motion.img key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height}
                  loading="lazy" initial={false} animate={{ opacity: reducedMotion ? 1 : [0.65, 1] }} transition={{ duration: reducedMotion ? 0 : 0.2 }} />
              </div>
              <figcaption>
                <p className="results-caption">{treatment.name}</p>
                <div className="results-pagination">
                  <button type="button" onClick={() => changeImage(-1)} aria-label="Imagen anterior"><Arrow previous /></button>
                  <span role="status" aria-live="polite" aria-atomic="true"><span className="results-sr-only">{treatment.name}. </span>Imagen {selection.image + 1} de {treatment.images.length}</span>
                  <button type="button" onClick={() => changeImage(1)} aria-label="Imagen siguiente"><Arrow /></button>
                </div>
              </figcaption>
            </figure>
            <div className="results-thumbnails" role="group" aria-label={`Imágenes de ${treatment.name}`}>
              {treatment.images.map((item, index) => (
                <button type="button" key={item.src} aria-label={`Ver imagen ${index + 1} de ${treatment.name}`}
                  aria-pressed={selection.image === index} aria-controls={viewerId}
                  onClick={() => setSelection((current) => ({ ...current, image: index }))}>
                  <img src={item.src} alt="" width={item.width} height={item.height} loading="lazy" />
                </button>
              ))}
            </div>
            <a className="results-enlarge button button-gold" href={image.src} target="_blank" rel="noopener noreferrer">Ampliar imagen<span className="results-sr-only"> (nueva pestaña)</span></a>
          </motion.div>
        </div>
        <div className="results-footer">
          <p>Conversemos sobre el tratamiento que te interesa.</p>
          <PressLink className="button button-gold" href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera consultar por una valoración sobre ${treatment.name}.`)}`}>Consultar por WhatsApp</PressLink>
        </div>
      </div>
    </section>
  )
}
