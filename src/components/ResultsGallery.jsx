import { useCallback, useRef, useState } from 'react'
import { resultsGallery } from '../data/resultsGallery'
import ResultCard from './ResultCard'
import ResultsLightbox from './ResultsLightbox'
import useMotionPreference from './useMotionPreference'
import './ResultsGallery.css'

export default function ResultsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [filmIndex, setFilmIndex] = useState(0)
  const filmRef = useRef(null)
  const triggerRef = useRef(null)
  const reducedMotion = useMotionPreference()
  const navigateLightbox = useCallback((direction) => {
    setLightboxIndex((current) => current === null ? null : (current + direction + resultsGallery.length) % resultsGallery.length)
  }, [])

  const openLightbox = (index, trigger) => {
    triggerRef.current = trigger
    setLightboxIndex(index)
  }
  const moveFilm = (direction) => {
    const next = Math.max(0, Math.min(resultsGallery.length - 1, filmIndex + direction))
    setFilmIndex(next)
    filmRef.current?.children[next]?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', inline: 'center', block: 'nearest' })
  }
  const updateFilmIndex = () => {
    const track = filmRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    let nearest = 0
    let distance = Infinity
    Array.from(track.children).forEach((child, index) => {
      const delta = Math.abs(child.offsetLeft + child.clientWidth / 2 - track.offsetLeft - center)
      if (delta < distance) { distance = delta; nearest = index }
    })
    setFilmIndex(nearest)
  }

  return (
    <section className="results-gallery" id="resultados" aria-labelledby="results-title">
      <div className="container section-space">
        <div className="gallery-heading">
          <div><p className="gallery-eyebrow">Lúmina · Casos reales</p><h2 id="results-title">Antes y después</h2></div>
          <p>Explora imágenes de tratamientos. Cada persona requiere una valoración individual y los resultados pueden variar.</p>
        </div>
          <div className="gallery-filmstrip-shell">
            <div className="gallery-filmstrip" ref={filmRef} onScroll={updateFilmIndex} tabIndex="0"
              role="region" aria-label="Resultados, desliza para ver más imágenes"
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') { event.preventDefault(); moveFilm(1) }
                if (event.key === 'ArrowLeft') { event.preventDefault(); moveFilm(-1) }
              }}>
              {resultsGallery.map((result, index) => <ResultCard key={result.id} result={result} index={index} onOpen={openLightbox} />)}
            </div>
            <div className="gallery-filmstrip-controls">
              <div><button type="button" onClick={() => moveFilm(-1)} disabled={filmIndex === 0} aria-label="Resultado anterior">←</button>
                <button type="button" onClick={() => moveFilm(1)} disabled={filmIndex === resultsGallery.length - 1} aria-label="Resultado siguiente">→</button></div>
              <span aria-live="polite">{filmIndex + 1} / {resultsGallery.length}</span>
            </div>
          </div>

      </div>
      <ResultsLightbox results={resultsGallery} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={navigateLightbox} triggerRef={triggerRef} />
    </section>
  )
}
