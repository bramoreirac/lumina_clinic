import { useEffect, useRef } from 'react'
import ResultImage from './ResultImage'

export default function ResultsLightbox({ results, index, onClose, onNavigate, triggerRef }) {
  const dialogRef = useRef(null)
  const touchStart = useRef(null)
  const result = index === null ? null : results[index]
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return undefined
    const dialog = dialogRef.current
    const trigger = triggerRef.current
    const scrollY = window.scrollY
    const previousStyle = document.body.getAttribute('style')
    Object.assign(document.body.style, { position: 'fixed', top: `-${scrollY}px`, width: '100%', overflow: 'hidden' })
    dialog.showModal()
    dialog.querySelector('.lightbox-close')?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Tab') {
        const buttons = dialog.querySelectorAll('button:not(:disabled)')
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
      if (event.key === 'ArrowRight') { event.preventDefault(); onNavigate(1) }
      if (event.key === 'ArrowLeft') { event.preventDefault(); onNavigate(-1) }
    }
    dialog.addEventListener('keydown', onKeyDown)
    return () => {
      dialog.removeEventListener('keydown', onKeyDown)
      if (dialog.open) dialog.close()
      if (previousStyle === null) document.body.removeAttribute('style')
      else document.body.setAttribute('style', previousStyle)
      window.scrollTo({ top: scrollY, behavior: 'instant' })
      trigger?.focus({ preventScroll: true })
    }
  }, [isOpen, onNavigate, triggerRef])

  if (!result) return <dialog ref={dialogRef} className="results-lightbox" onClose={onClose} />

  const onTouchEnd = (event) => {
    if (!touchStart.current) return
    const dx = event.changedTouches[0].clientX - touchStart.current.x
    const dy = event.changedTouches[0].clientY - touchStart.current.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) onNavigate(dx < 0 ? 1 : -1)
    touchStart.current = null
  }

  return (
    <dialog ref={dialogRef} className="results-lightbox" aria-label={`Resultado ${index + 1} de ${results.length}: ${result.treatment}`}
      onClose={onClose} onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="lightbox-panel" onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }} onTouchEnd={onTouchEnd}>
        <div className="lightbox-topbar"><span>{result.treatment}</span><button type="button" className="lightbox-close" onClick={onClose} aria-label="Cerrar imagen">×</button></div>
        <div className="lightbox-image-wrap"><ResultImage key={result.id} result={result} /></div>
        <div className="lightbox-controls">
          <button type="button" onClick={() => onNavigate(-1)} aria-label="Imagen anterior">← <span>Anterior</span></button>
          <span role="status" aria-live="polite">{index + 1} de {results.length}</span>
          <button type="button" onClick={() => onNavigate(1)} aria-label="Imagen siguiente"><span>Siguiente</span> →</button>
        </div>
      </div>
    </dialog>
  )
}
