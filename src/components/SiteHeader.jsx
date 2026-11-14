import useMotionPreference from './useMotionPreference'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { easeOut } from './motionSettings'

export default function SiteHeader({ isServicesPage }) {
  const mobileQuery = '(max-width: 1000px)'
  const [mobile, setMobile] = useState(() => window.matchMedia(mobileQuery).matches)
  const [open, setOpen] = useState(false)
  const button = useRef(null)
  const nav = useRef(null)
  const reducedMotion = useMotionPreference()
  const visible = !mobile || open

  useEffect(() => {
    const media = window.matchMedia(mobileQuery)
    const onChange = (event) => {
      // Return focus before a resize can hide the desktop navigation.
      if (event.matches && nav.current?.contains(document.activeElement)) button.current?.focus()
      setMobile(event.matches)
      setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [mobileQuery])

  const closeOnEscape = (event) => {
    if (event.key === 'Escape' && mobile && open) {
      setOpen(false)
      button.current?.focus()
    }
  }
  const onNav = (event) => {
    const link = event.target.closest('a')
    if (!link || !mobile) return
    setOpen(false)
    if (link.hash && link.pathname === window.location.pathname) {
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)))
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }) }
    }
  }

  return (
    <header className="site-header approved-header" onKeyDown={closeOnEscape}>
      <div className="container header-inner">
        <a className="wordmark" href="/#inicio" aria-label="Lúmina Clínica Estética, inicio"><img src="/approved-nav-mark.svg" alt="" width="60" height="41" /></a>
        <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
          Menú <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg>
        </button>
        <motion.nav ref={nav} id="navigation" aria-label="Navegación principal" aria-hidden={!visible} inert={!visible} onClick={onNav}
          initial={false} animate={visible ? 'open' : 'closed'}
          variants={{ open: { display: 'flex', opacity: 1, y: 0 }, closed: { opacity: 0, y: reducedMotion ? 0 : -8, transitionEnd: { display: 'none' } } }}
          transition={{ duration: reducedMotion || !mobile ? 0 : 0.22, ease: easeOut }}>
          <a href="/#doctora">La doctora</a>
          <a href="/#clinica">La clínica</a>
          <a href="/servicios/" aria-current={isServicesPage ? 'page' : undefined}>Servicios</a>
          <a href="/#resultados">Resultados</a>
          <a href="/#preguntas">Preguntas frecuentes</a>
          <a className="button button-primary nav-contact" href={isServicesPage ? '/#contacto' : '#contacto'}>Conversemos</a>
        </motion.nav>
      </div>
    </header>
  )
}
