import { useEffect } from 'react'
import logoInk from './assets/clinic/lumina-logo-ink.svg'
import logoGold from './assets/clinic/lumina-logo-reconstructed.svg'
import portrait from './assets/clinic/doctor.webp'
import microneedlingImage from './assets/clinic/microneedling-video.webp'
import peelingImage from './assets/clinic/peeling-video.webp'
import './App.css'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('js')
    const button = document.querySelector('.menu-toggle')
    const nav = document.querySelector('#navigation')
    const mobile = window.matchMedia('(max-width: 799px)')
    const setMenu = (open, returnFocus = false) => {
      button.setAttribute('aria-expanded', String(open))
      nav.classList.toggle('is-open', open)
      if (returnFocus) button.focus()
    }
    const onClick = () => setMenu(button.getAttribute('aria-expanded') !== 'true')
    const onNav = (event) => {
      const link = event.target.closest('a')
      if (!link || !mobile.matches) return
      setMenu(false)
      const target = document.querySelector(link.hash)
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }) }
    }
    const onKey = (event) => {
      if (event.key === 'Escape' && mobile.matches && button.getAttribute('aria-expanded') === 'true') setMenu(false, true)
    }
    const onChange = () => setMenu(false)
    button.addEventListener('click', onClick)
    nav.addEventListener('click', onNav)
    document.addEventListener('keydown', onKey)
    mobile.addEventListener('change', onChange)
    let observer
    const process = document.querySelector('.process-list')
    if (process && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) { process.classList.add('is-animated'); observer.disconnect() }
      }, { threshold: 0.2 })
      observer.observe(process)
    }
    return () => {
      document.documentElement.classList.remove('js')
      button.removeEventListener('click', onClick)
      nav.removeEventListener('click', onNav)
      document.removeEventListener('keydown', onKey)
      mobile.removeEventListener('change', onChange)
      observer?.disconnect()
    }
  }, [])
  return (
    <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#inicio" aria-label="Lúmina Clínica Estética, inicio">
          <img src={logoInk} alt="" width="750" height="521" />
        </a>
        <button className="menu-toggle" aria-expanded="false" aria-controls="navigation">Menú <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg></button>
        <nav id="navigation" aria-label="Navegación principal">
          <a href="#clinica">La clínica</a>
          <a href="#doctora">La doctora</a>
          <a href="#servicios">Servicios</a>
          <a href="#preguntas">Preguntas frecuentes</a>
          <a className="nav-contact" href="#contacto">Conversemos <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></a>
        </nav>
      </div>
    </header>

    <main id="contenido" tabIndex="-1">
      <section className="clinic-hero" id="inicio" aria-labelledby="hero-title">
        <div className="container clinic-hero-inner">
          <h1 id="hero-title"><img className="clinic-logo" src={logoGold} alt="Lúmina Clínica Estética" width="750" height="521" /><span className="clinic-description">Medicina estética en<br />León, Nicaragua.</span></h1>
          <div className="hero-rule" aria-hidden="true"></div>
          <p>Un espacio para el cuidado facial y la medicina estética, donde el primer paso es escucharte.</p>
          <div className="hero-actions">
          <a className="text-link" href="#servicios">Explorar los servicios <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14m-6-6 6 6 6-6" /></svg></a>
          </div>
        </div>
      </section>

      <section className="featured-section" id="destacados" aria-labelledby="featured-title">
        <div className="container section-space">
          <div className="featured-heading">
            <div><p className="featured-eyebrow">Nuestros tratamientos destacados</p><h2 id="featured-title">Opciones para cuidar<br /><em>de ti.</em></h2></div>
            <p>Conoce algunos de los tratamientos que ofrecemos y consulta con la doctora cuál puede ser adecuado para ti.</p>
          </div>
          <div className="featured-grid">
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><circle className="visual-halo" cx="60" cy="50" r="37"/><g className="visual-mark"><path d="M32 68c13-8 24-8 35 0s18 8 23 6M32 77c13-8 24-8 35 0s18 8 23 6"/><path d="M45 22l21 13-15 24-21-13zM50 18l21 13-5 4-21-13zM31 47l-4 9m9-6-4 9m9-6-4 9"/><path d="M75 26v-8m-4 4h8M87 40v-6m-3 3h6"/></g></svg><span className="featured-number" aria-hidden="true">01</span></div><h3>Microneedling</h3><p>Tratamiento con microagujas para el cuidado de la piel, con opciones para ojeras y tratamientos vitamínicos según valoración.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20microneedling." aria-label="Consultar por WhatsApp sobre microneedling">Consultar <span aria-hidden="true">↗</span></a></article>
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><circle className="visual-halo" cx="60" cy="50" r="37"/><g className="visual-mark"><path d="M42 37c0-13 7-21 18-21s18 8 18 21v13c0 16-9 27-18 27S42 66 42 50z"/><path d="M49 49c2 2 5 2 7 0m8 0c2 2 5 2 7 0M55 62c3 2 7 2 10 0"/><path d="M27 28v-10m-5 5h10M91 45v-12m-6 6h12M35 68v-6m-3 3h6"/></g></svg><span className="featured-number" aria-hidden="true">02</span></div><h3>Limpieza facial</h3><p>Cuidado de la piel mediante limpieza superficial o profunda, según las necesidades de cada persona.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20limpieza%20facial." aria-label="Consultar por WhatsApp sobre limpieza facial">Consultar <span aria-hidden="true">↗</span></a></article>
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><circle className="visual-halo" cx="60" cy="50" r="37"/><g className="visual-mark"><path d="M45 20c3 12 3 19-1 28-5 11-3 24 1 32m30-60c-3 12-3 19 1 28 5 11 3 24-1 32"/><path d="M44 52c10 5 22 5 32 0M52 68c5 2 11 2 16 0"/><path d="M26 47h11m-4-4 4 4-4 4m61-4H83m4-4-4 4 4 4"/></g></svg><span className="featured-number" aria-hidden="true">03</span></div><h3>Lipoenzimas</h3><p>Tratamiento corporal dirigido a zonas de grasa localizada. La doctora podrá explicarte las opciones durante una valoración.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20lipoenzimas." aria-label="Consultar por WhatsApp sobre lipoenzimas">Consultar <span aria-hidden="true">↗</span></a></article>
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><circle className="visual-halo" cx="60" cy="50" r="37"/><g className="visual-mark"><path d="M42 40c0-14 7-23 18-23s18 9 18 23v12c0 16-9 27-18 27S42 68 42 52z"/><path d="M49 49c2 2 5 2 7 0m8 0c2 2 5 2 7 0M55 63c3 2 7 2 10 0"/><path d="M48 32c3-2 5-2 8-2m8 0c3 0 5 0 8 2M59 25v6m-3-3h6"/></g></svg><span className="featured-number" aria-hidden="true">04</span></div><h3>Toxina botulínica</h3><p>Tratamiento que ayuda a suavizar líneas de expresión mediante la relajación temporal de músculos específicos.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20toxina%20botul%C3%ADnica." aria-label="Consultar por WhatsApp sobre toxina botulínica">Consultar <span aria-hidden="true">↗</span></a></article>
          </div>
          <a className="text-link featured-all" href="#servicios">Ver todos los servicios <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14m-6-6 6 6 6-6" /></svg></a>
        </div>
      </section>

      <section className="clinic-intro container" id="clinica" aria-labelledby="clinic-title">
        <h2 id="clinic-title">Cuidado que empieza<br />por <em>escucharte.</em></h2>
        <div><p>En Lúmina Clínica Estética, creemos en una atención cercana, con empatía, honestidad y respeto por cada persona.</p><p>Conoce nuestros servicios de cuidado facial y medicina estética. Podemos orientarte sobre cómo coordinar una valoración con la Dra. Steacey Maradiaga.</p><a className="text-link" href="#doctora">Conoce a la doctora <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></a></div>
      </section>

      <section className="doctor-section" id="doctora" aria-labelledby="doctor-title">
        <div className="container doctor-layout">
          <figure className="doctor-portrait">
            <img src={portrait} alt="Dra. Steacey Maradiaga sonriendo en su consultorio" width="1200" height="1600" loading="lazy" />
            <figcaption>Dra. Steacey Maradiaga, Lúmina Clínica Estética.</figcaption>
          </figure>
          <div className="doctor-copy">
            <h2 id="doctor-title">La doctora detrás<br />de <em>Lúmina.</em></h2>
            <p className="doctor-name">Dra. Steacey Maradiaga</p>
            <p>Médico estético / Dermatología clínica.</p>
            <p>Mi enfoque parte de escucharte y comprender lo que buscas. Creo en una atención cercana, con empatía, honestidad y respeto por cada persona.</p>
            <a className="text-link" href="#contacto">Conversemos sobre tu valoración <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></a>
          </div>
        </div>
      </section>

      <section className="services-section container section-space" id="servicios" aria-labelledby="services-title">
        <div className="section-intro"><h2 id="services-title">Cuidado facial.<br /><em>Medicina estética.</em></h2><p>Conoce nuestros servicios. Contáctanos para consultar por una valoración y recibir información sobre las opciones disponibles.</p></div>
        <div className="service-images">
          <figure><img src={microneedlingImage} alt="Tratamiento de microneedling en el rostro" width="900" height="1600" loading="lazy" /><figcaption>Microneedling</figcaption></figure>
          <figure><img src={peelingImage} alt="Aplicación de un tratamiento facial con brocha" width="900" height="1600" loading="lazy" /><figcaption>Peeling químico</figcaption></figure>
        </div>
        <ul className="service-list">
          <li><span>Hydrafacial</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20Hydrafacial." aria-label="Consultar por WhatsApp sobre Hydrafacial"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Limpieza superficial y profunda</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20limpieza%20superficial%20y%20profunda." aria-label="Consultar por WhatsApp sobre limpieza superficial y profunda"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Microdermoabrasión</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20microdermoabrasi%C3%B3n." aria-label="Consultar por WhatsApp sobre microdermoabrasión"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Inductores de colágeno<small>Rostro, cuello y manos</small></span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20inductores%20de%20col%C3%A1geno." aria-label="Consultar por WhatsApp sobre inductores de colágeno"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Microneedling</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20microneedling." aria-label="Consultar por WhatsApp sobre microneedling"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Mesoterapia facial y corporal</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20mesoterapia%20facial%20y%20corporal." aria-label="Consultar por WhatsApp sobre mesoterapia facial y corporal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Plasma rico en plaquetas</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20plasma%20rico%20en%20plaquetas." aria-label="Consultar por WhatsApp sobre plasma rico en plaquetas"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Peeling químico</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20peeling%20qu%C3%ADmico." aria-label="Consultar por WhatsApp sobre peeling químico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Aplicación de toxina botulínica</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20toxina%20botul%C3%ADnica." aria-label="Consultar por WhatsApp sobre aplicación de toxina botulínica"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Fototerapia</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20fototerapia." aria-label="Consultar por WhatsApp sobre fototerapia"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
          <li><span>Lipoenzimas</span><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20lipoenzimas." aria-label="Consultar por WhatsApp sobre lipoenzimas"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></li>
        </ul>
      </section>

      <section className="process-section" aria-labelledby="process-title"><div className="container section-space"><div className="section-intro"><h2 id="process-title">Empecemos por<br /><em>una conversación.</em></h2><p>Un primer contacto para compartir lo que buscas y consultar tus dudas con la doctora.</p></div><ol className="process-list"><li><div className="process-visual" aria-hidden="true"><svg viewBox="0 0 80 80" aria-hidden="true"><rect x="24" y="12" width="32" height="54" rx="5"/><path d="M35 18h10M37 59h6"/><path d="M30 31h20v14H38l-6 5v-5h-2z"/><path d="M35 36h10m-10 4h7"/></svg></div><span>1</span><h3>Contáctanos</h3><p>Escríbenos o llámanos para solicitar información.</p></li><li><div className="process-visual" aria-hidden="true"><svg viewBox="0 0 80 80" aria-hidden="true"><rect x="17" y="20" width="46" height="42" rx="4"/><path d="M17 31h46M28 15v10m24-10v10M28 41h5m7 0h5m7 0h1M28 50h5m7 0h5"/><path d="m50 51 3 3 6-7"/></svg></div><span>2</span><h3>Coordina tu valoración</h3><p>Consulta la disponibilidad y los detalles de tu visita.</p></li><li><div className="process-visual" aria-hidden="true"><svg viewBox="0 0 80 80" aria-hidden="true"><path d="M16 42c0-11 9-19 20-19s20 8 20 19-9 19-20 19c-3 0-6-.5-9-1.8L18 63l2.5-8C17.6 51.5 16 47 16 42z"/><path d="M47 23c2-5 7-8 13-8 8 0 14 6 14 14 0 3-1 6-3 8l2 6-7-2.5c-2 1-4 1.5-6 1.5h-4"/><path d="M28 41h.1m8 0h.1m8 0h.1" strokeWidth="3"/></svg></div><span>3</span><h3>Conversa con la doctora</h3><p>Comparte tus objetivos y resuelve tus dudas durante la valoración.</p></li></ol></div></section>

      <section className="faq-section container section-space" id="preguntas" aria-labelledby="faq-title"><h2 id="faq-title">Antes de<br /><em>tu visita.</em></h2><div className="faq-list">
        <details><summary>¿Cómo puedo solicitar una valoración?<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7v14" /></svg></summary><p>Puedes <a href="https://wa.me/50558811397">escribirnos por WhatsApp</a> o llamarnos al <a href="tel:+50558811397">+505 5881 1397</a> para consultar disponibilidad.</p></details>
        <details><summary>¿Cómo sé qué opción es adecuada para mí?<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7v14" /></svg></summary><p>Solicita una valoración para conversar con la doctora sobre lo que buscas y resolver tus dudas.</p></details>
        <details><summary>¿Cuál es el horario de atención?<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7v14" /></svg></summary><p>Atendemos de lunes a viernes, de 8:00 a. m. a 5:00 p. m. También atendemos en otros horarios con cita previa.</p></details>
        <details><summary>¿En qué ciudad está la clínica?<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7v14" /></svg></summary><p>Estamos en León, Nicaragua. <a href="https://wa.me/50558811397">Contáctanos por WhatsApp</a> para consultar cómo llegar.</p></details>
      </div></section>

      <section className="contact-section" id="contacto" aria-labelledby="contact-title">
        <div className="container contact-layout">
          <div>
            <h2 id="contact-title">Conversemos sobre<br /><em>tu valoración.</em></h2>
            <p>Contáctanos para consultar nuestros servicios y coordinar tu visita.</p>
            <a className="button button-light" href="https://wa.me/50558811397">
              Escribir por WhatsApp <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </a>
          </div>
          <dl className="contact-details">
            <div>
              <dt>
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
                  <circle cx="12" cy="10" r="2.5"/>
                </svg>
                <span>Encuéntranos</span>
              </dt>
              <dd>
                <a href="https://maps.google.com/?q=Leon,+Nicaragua" target="_blank" rel="noopener noreferrer">
                  León, Nicaragua <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
                </a>
              </dd>
            </div>
            <div>
              <dt>
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3.5 2"/>
                </svg>
                <span>Horario de atención</span>
              </dt>
              <dd>Lunes a viernes<br />8:00 a. m. – 5:00 p. m.<small>Otros horarios con cita previa.</small></dd>
            </div>
            <div>
              <dt>
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.5 3.5 8.8 3l2.1 4.4-2 1.8a14.5 14.5 0 0 0 5.9 5.9l1.8-2L21 15.2l-.5 3.3c-.2 1.2-1.3 2-2.5 1.8C10.5 19.3 4.7 13.5 3.7 6c-.2-1.2.6-2.3 1.8-2.5Z"/>
                </svg>
                <span>Teléfono</span>
              </dt>
              <dd><a href="tel:+50558811397">+505 5881 1397</a></dd>
            </div>
            <div>
              <dt>
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r=".7"/>
                </svg>
                <span>Instagram</span>
              </dt>
              <dd>
                <a href="https://www.instagram.com/dra.steacey_maradiagaurbina/">
                  Conoce nuestro perfil <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
                </a>
              </dd>
            </div>
            <div className="contact-email-group">
              <dt>
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="m4 7 8 6 8-6"/>
                </svg>
                <span>Correo</span>
              </dt>
              <dd><a className="contact-email" href="mailto:steaceymaradiaga@gmail.com">steaceymaradiaga@gmail.com</a></dd>
            </div>
          </dl>
        </div>

        <div className="container contact-map-card">
          <div className="contact-map-header">
            <div className="contact-map-heading">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>
              <div>
                <h3>Cómo llegar</h3>
                <p>Abre la ubicación en tu aplicación preferida para iniciar la ruta en tiempo real.</p>
              </div>
            </div>
            <div className="contact-map-actions">
              <a
                className="button-map"
                href="https://maps.google.com/?q=Leon,+Nicaragua"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Google Maps</span>
                <svg className="map-external-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
              </a>
              <a
                className="button-map"
                href="https://waze.com/ul?q=Leon%2C+Nicaragua&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Waze</span>
                <svg className="map-external-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
              </a>
            </div>
          </div>
          <div className="contact-map-frame-wrap">
            <iframe
              title="Mapa de ubicación de la clínica en León, Nicaragua"
              src="https://maps.google.com/maps?q=Leon%2C+Nicaragua&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
    <footer className="container site-footer"><a className="wordmark" href="#inicio" aria-label="Lúmina Clínica Estética, volver al inicio"><img src={logoInk} alt="" width="750" height="521" /></a><p>Medicina estética en León, Nicaragua.</p><a className="text-link" href="#inicio">Volver al inicio <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg></a></footer>
    </>
  )
}

export default App
