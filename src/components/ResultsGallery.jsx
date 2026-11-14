import { useCallback, useEffect, useRef, useState } from 'react'
import { ScrollRevealHeading } from './ScrollRevealPrototype'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { resultsGallery } from '../data/resultsGallery'
import ResultCard from './ResultCard'
import ResultsLightbox from './ResultsLightbox'
import useMotionPreference from './useMotionPreference'
import '@splidejs/react-splide/css/core'
import './ResultsGallery.css'

const carouselOptions = {
  type: 'loop', perPage: 1, perMove: 1, gap: 0, speed: 700,
  arrows: true, pagination: true, autoplay: true, interval: 5000,
  pauseOnHover: true, pauseOnFocus: true, keyboard: 'focused',
  i18n: {
    carousel: 'Carrusel', slide: 'Resultado', slideLabel: '%s de %s',
    prev: 'Resultado anterior', next: 'Resultado siguiente',
    first: 'Primer resultado', last: 'Último resultado',
    select: 'Selecciona un resultado', slideX: 'Ver resultado %s', pageX: 'Ver resultado %s',
  },
}

export default function ResultsGallery() {
  const reducedMotion = useMotionPreference()
  const sliderRef = useRef(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const triggerRef = useRef(null)
  const lightboxOpen = lightboxIndex !== null

  useEffect(() => {
    const autoplay = sliderRef.current?.splide?.Components.Autoplay
    if (reducedMotion || lightboxOpen) autoplay?.pause()
    else autoplay?.play()
  }, [reducedMotion, lightboxOpen])

  const navigateLightbox = useCallback((direction) => {
    setLightboxIndex((current) => current === null ? null : (current + direction + resultsGallery.length) % resultsGallery.length)
  }, [])

  const openLightbox = (index, trigger) => {
    triggerRef.current = trigger
    setLightboxIndex(index)
  }
  // Splide loop copies are DOM clones; delegate clicks so every copy opens its case.
  const onCarouselClick = (event) => {
    const trigger = event.target.closest('button[data-result-index]')
    if (trigger) openLightbox(Number(trigger.dataset.resultIndex), trigger)
  }

  return (
    <section className="results-gallery" id="resultados" aria-labelledby="results-title">
      <div className="container section-space">
        <div className="gallery-heading">
          <div><p className="gallery-eyebrow">Lúmina · Casos reales</p><ScrollRevealHeading id="results-title">Antes y <em>después.</em></ScrollRevealHeading></div>
          <p>Explora imágenes de tratamientos. Cada persona requiere una valoración individual y los resultados pueden variar.</p>
        </div>
        <div className="gallery-carousel" onClick={onCarouselClick}>
          <Splide ref={sliderRef} id="results-carousel" aria-label="Antes y después"
            options={{ ...carouselOptions, speed: reducedMotion ? 0 : 700 }}>
            {resultsGallery.map((result, index) => (
              <SplideSlide key={result.id}><ResultCard result={result} index={index} /></SplideSlide>
            ))}
          </Splide>
        </div>

      </div>
      <ResultsLightbox results={resultsGallery} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={navigateLightbox} triggerRef={triggerRef} />
    </section>
  )
}
