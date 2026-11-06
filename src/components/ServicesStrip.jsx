import { useEffect, useRef, useState } from 'react'
import { services, serviceAnchor } from '../data/services'
import { serviceGallery } from '../data/serviceGallery'
import useMotionPreference from './useMotionPreference'

const names = [...new Set([...services, ...serviceGallery].map(({ name }) => name))]

const icons = [
  'M12 3c0 6-3 9-9 9 6 0 9 3 9 9 0-6 3-9 9-9-6 0-9-3-9-9Z',
  'M5 19C2 8 11 3 20 4c1 9-4 18-15 15Zm0 0L16 8',
  'M12 20 4 12C-2 5 7 1 12 7c5-6 14-2 8 5l-8 8Z',
]

export default function ServicesStrip() {
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pageVisible, setPageVisible] = useState(!document.hidden)
  const stripRef = useRef(null)
  const reducedMotion = useMotionPreference()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(stripRef.current)
    const onVisibility = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility) }
  }, [])

  const items = names.map((name, index) => (
    <li key={name}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[index % icons.length]} /></svg>
      <a href={`/servicios/#${serviceAnchor(name)}`}>{name}</a>
    </li>
  ))

  return (
    <div ref={stripRef} className="services-strip" data-paused={paused || !visible || !pageVisible}>
      <div className="services-strip-window" role="region" aria-label="Nuestros tratamientos" tabIndex={reducedMotion ? 0 : undefined}>
        <div className="services-strip-track">
          <ul>{items}</ul>
          {!reducedMotion && <ul aria-hidden="true" inert>{items}</ul>}
        </div>
      </div>
      {!reducedMotion && (
        <button className="services-strip-toggle" type="button" onClick={() => setPaused(!paused)}
          aria-label={paused ? 'Reanudar movimiento de tratamientos' : 'Pausar movimiento de tratamientos'} aria-pressed={paused}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={paused ? 'm9 5 10 7-10 7Z' : 'M8 5v14M16 5v14'} />
          </svg>
        </button>
      )}
    </div>
  )
}
