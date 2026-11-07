import { useCallback, useRef, useState } from 'react'
import { resultsGallery } from '../data/resultsGallery'
import ResultCard from './ResultCard'
import ResultsLightbox from './ResultsLightbox'
import ContinuousCarousel from './ContinuousCarousel'
import './ResultsGallery.css'

const carouselOptions = {
  fixedWidth: 'min(58%, 600px)',
  padding: 0,
  breakpoints: { 599: { fixedWidth: '82%' } },
}

export default function ResultsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const triggerRef = useRef(null)
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
          <div><p className="gallery-eyebrow">Lúmina · Casos reales</p><h2 id="results-title">Antes y <em>después.</em></h2></div>
          <p>Explora imágenes de tratamientos. Cada persona requiere una valoración individual y los resultados pueden variar.</p>
        </div>
        <ContinuousCarousel id="results-carousel" label="Antes y después" className="gallery-carousel"
          options={carouselOptions} suspended={lightboxIndex !== null} onClick={onCarouselClick}>
          {resultsGallery.map((result, index) => <ResultCard key={result.id} result={result} index={index} />)}
        </ContinuousCarousel>

      </div>
      <ResultsLightbox results={resultsGallery} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={navigateLightbox} triggerRef={triggerRef} />
    </section>
  )
}
