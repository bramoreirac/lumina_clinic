import { Children, useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import useMotionPreference from './useMotionPreference'
import '@splidejs/react-splide/css/core'

const extensions = { AutoScroll }
const baseOptions = {
  type: 'loop', perPage: 1, gap: '1rem', padding: { right: '12%' },
  arrows: false, pagination: false, drag: 'free', snap: false,
  keyboard: 'focused', live: false,
  autoScroll: { speed: 0.35, autoStart: false, pauseOnHover: true, pauseOnFocus: true },
  i18n: { carousel: 'Carrusel', slide: 'Elemento', slideLabel: '%s de %s' },
}

export default function ContinuousCarousel({ children, id, label, className = '', options, suspended = false, onClick, onToggleCapture, onMounted, pauseOnInteraction = true }) {
  const slider = useRef(null)
  const container = useRef(null)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const reducedMotion = useMotionPreference()

  useEffect(() => {
    let inView = false
    const update = () => setVisible(inView && !document.hidden)
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update() }, { threshold: 0.2 })
    observer.observe(container.current)
    document.addEventListener('visibilitychange', update)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update) }
  }, [])

  useEffect(() => {
    const autoScroll = slider.current?.splide?.Components.AutoScroll
    if (visible && !paused && !reducedMotion && !suspended) autoScroll?.play()
    else autoScroll?.pause()
  }, [visible, paused, reducedMotion, suspended])

  return (
    <div className={`continuous-carousel ${className}`} ref={container}>
      <div onPointerDown={() => { if (pauseOnInteraction) setPaused(true) }} onTouchStart={() => { if (pauseOnInteraction) setPaused(true) }} onClick={onClick} onToggleCapture={onToggleCapture}>
        <Splide ref={slider} id={id} aria-label={label} options={{ ...baseOptions, ...options }} extensions={extensions}
          onDrag={() => setPaused(true)} onMounted={onMounted} onRefresh={onMounted}>
          {Children.map(children, (child) => <SplideSlide>{child}</SplideSlide>)}
        </Splide>
      </div>
      <div className="continuous-carousel-controls">
        <span>Desliza para explorar</span>
        {!reducedMotion && <button type="button" aria-controls={id} disabled={suspended} onClick={() => setPaused(!paused)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{paused && !suspended ? <path d="m9 5 10 7-10 7Z" /> : <path d="M9 5v14M15 5v14" />}</svg>
          {suspended ? 'En pausa' : paused ? 'Reanudar' : 'Pausar'}
        </button>}
      </div>
    </div>
  )
}
