import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import TreatmentIcon from './TreatmentIcon'
import useMotionPreference from './useMotionPreference'
import { sectionEntrance } from './motionSettings'
import treatmentPhoto from '../assets/clinic/hero-treatment.webp'
import { featuredTreatments as treatments } from '../data/featuredTreatments'

export default function FeaturedTreatments() {
  const reducedMotion = useMotionPreference()
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)

  const moveTo = (index) => {
    const next = Math.max(0, Math.min(treatments.length - 1, index))
    const track = trackRef.current
    const card = track?.children[next]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - track.firstElementChild.offsetLeft, behavior: reducedMotion ? 'instant' : 'smooth' })
  }
  const onScroll = () => {
    const track = trackRef.current
    const trackLeft = track.getBoundingClientRect().left
    let nearest = 0
    let distance = Infinity
    Array.from(track.children).forEach((card, index) => {
      const delta = Math.abs(card.getBoundingClientRect().left - trackLeft)
      if (delta < distance) { nearest = index; distance = delta }
    })
    setCurrent(nearest)
  }

  return (
    <section className="featured-section" id="destacados" aria-labelledby="featured-title">
      <div className="container section-space">
        <div className="featured-heading">
          <h2 id="featured-title">Tratamientos para el cuidado de tu piel.</h2>
          <p>Conoce nuestras opciones. La valoración médica es el primer paso para elegir el tratamiento adecuado para ti.</p>
        </div>
        <div className="featured-photo-layout">
          <motion.figure className="featured-photo section-entrance" {...sectionEntrance(reducedMotion)}>
            <img src={treatmentPhoto} alt="Aplicación de un tratamiento facial en la clínica" width="1080" height="1920" loading="lazy" />
          </motion.figure>
          <div className="featured-cards">
            <div className="featured-grid" ref={trackRef} id="featured-treatments" role="region" aria-label="Tratamientos destacados" tabIndex="0" onScroll={onScroll}
              onKeyDown={(event) => {
                if (!window.matchMedia('(max-width: 599px)').matches) return
                if (event.key === 'ArrowRight') { event.preventDefault(); moveTo(current + 1) }
                if (event.key === 'ArrowLeft') { event.preventDefault(); moveTo(current - 1) }
              }}>
              {treatments.map(({ name, icon, inquiry, description }) => (
                <article className="featured-card" key={name}>
                  <a className="featured-card-open" href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera información sobre ${inquiry}.`)}`} aria-label={`Consultar por WhatsApp sobre ${name}`}>
                    <div className="featured-visual"><TreatmentIcon treatment={icon} /></div>
                    <div className="featured-card-body">
                      <h3>{name}</h3><p>{description}</p>
                      <span className="featured-card-action">Consultar <span className="featured-card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12" /></svg></span></span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
            <div className="featured-navigation">
              <span role="status" aria-live="polite">{current + 1} de {treatments.length} <span className="featured-swipe-hint">· Desliza para explorar</span></span>
              <div>
                <button type="button" aria-label="Tratamiento destacado anterior" aria-controls="featured-treatments" disabled={current === 0} onClick={() => moveTo(current - 1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg></button>
                <button type="button" aria-label="Tratamiento destacado siguiente" aria-controls="featured-treatments" disabled={current === treatments.length - 1} onClick={() => moveTo(current + 1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
