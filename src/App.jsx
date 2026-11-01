import { useEffect } from 'react'
import logoInk from './assets/clinic/lumina-logo-ink.svg'
import logoGold from './assets/clinic/lumina-logo-reconstructed.svg'
import portrait from './assets/clinic/doctor.webp'
import microneedlingImage from './assets/clinic/microneedling-video.webp'
import peelingImage from './assets/clinic/peeling-video.webp'
import './App.css'

const services = [
  {
    "name": "Microneedling facial",
    "description": "Estimula la renovación de la piel y la producción de colágeno, ayudando a mejorar su textura, apariencia y luminosidad."
  },
  {
    "name": "Higiene facial",
    "description": "Limpieza personalizada que elimina impurezas, exceso de grasa y células muertas para mantener una piel limpia y saludable."
  },
  {
    "name": "Tratamiento de grasa localizada",
    "description": "Alternativas médico-estéticas dirigidas a tratar depósitos de grasa en zonas específicas del cuerpo, previa valoración médica."
  },
  {
    "name": "Toxina botulínica",
    "description": "Tratamiento que suaviza temporalmente las líneas de expresión mediante la relajación controlada de músculos específicos."
  },
  {
    "name": "Bioestimulación con PRP",
    "description": "Utiliza el plasma rico en plaquetas del propio paciente para favorecer los procesos naturales de regeneración de la piel."
  },
  {
    "name": "Peelings químicos",
    "description": "Favorecen la renovación cutánea y ayudan a mejorar manchas, textura irregular y otras alteraciones superficiales de la piel."
  },
  {
    "name": "Inductores de colágeno",
    "description": "Estimulan la producción natural de colágeno, contribuyendo progresivamente a mejorar la firmeza y calidad de la piel."
  },
  {
    "name": "Mesoterapia facial",
    "description": "Aplicación de activos seleccionados según las necesidades de la piel para complementar su hidratación y mejorar su apariencia."
  },
  {
    "name": "Hydrafacial",
    "description": "Limpieza facial avanzada que combina exfoliación, extracción de impurezas e hidratación para una piel de aspecto más fresco y luminoso."
  },
  {
    "name": "Microdermoabrasión",
    "description": "Exfoliación mecánica que ayuda a retirar células superficiales y mejorar la suavidad y textura de la piel."
  },
  {
    "name": "Tratamiento de melasma y manchas",
    "description": "Protocolos personalizados orientados a mejorar las alteraciones de pigmentación y favorecer un tono de piel más uniforme."
  },
  {
    "name": "Tratamiento dermatológico del acné",
    "description": "Evaluación y manejo personalizado del acné, enfocado en controlar las lesiones y mejorar la salud de la piel."
  }
]

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
          <p>Tratamientos médicos-estéticos y dermatológicos personalizados, guiados por una valoración profesional y enfocados en tu bienestar.</p>
          <div className="hero-actions">
          <a className="text-link" href="#servicios">Explorar los servicios <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14m-6-6 6 6 6-6" /></svg></a>
          </div>
        </div>
      </section>

      <section className="featured-section" id="destacados" aria-labelledby="featured-title">
        <div className="container section-space">
          <div className="featured-heading">
            <div><p className="featured-eyebrow">Nuestros tratamientos destacados</p><h2 id="featured-title">El cuidado de tu piel comienza con una valoración profesional.</h2></div>
            <p>Conoce algunos nuestros tratamientos y evaluemos juntos cuál es la mejor opción para ti.</p>
          </div>
          <div className="featured-grid">
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><g className="visual-mark"><path d="M50 19c0-6 4-10 10-10s10 4 10 10M42 43c0-16 7-25 18-25s18 9 18 25v10c0 15-9 25-18 25S42 68 42 53V43Z"/><path d="M42 42c9-1 16-5 21-14 3 7 8 11 15 13M47 53c2 2 5 2 7 0m12 0c2 2 5 2 7 0M56 65c2 2 6 2 8 0M53 76v5c-3 3-7 4-11 5m25-10v5c3 3 7 4 11 5"/><path className="visual-accent" d="M26 75 42 59m-13 8 5 5m-9-3 5 5m-6 0 3 3M37 54l5 5M31 53v-6m-3 3h6"/></g></svg><span className="featured-number" aria-hidden="true">01</span></div><h3>Microneedling facial</h3><p>Procedimiento que estimula la renovación de la piel y favorece la producción de colágeno, ayudando a mejorar su textura y apariencia.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20microneedling." aria-label="Consultar por WhatsApp sobre microneedling">Consultar <span aria-hidden="true">↗</span></a></article>
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><g className="visual-mark"><path d="M50 19c0-6 4-10 10-10s10 4 10 10M42 43c0-16 7-25 18-25s18 9 18 25v10c0 15-9 25-18 25S42 68 42 53V43Z"/><path d="M42 42c9-1 16-5 21-14 3 7 8 11 15 13M47 53c2 2 5 2 7 0m12 0c2 2 5 2 7 0M56 65c2 2 6 2 8 0M53 76v5c-3 3-7 4-11 5m25-10v5c3 3 7 4 11 5"/><path className="visual-accent" d="M26 43c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7Zm57 17c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5ZM29 58v-8m-4 4h8M86 33v-8m-4 4h8"/></g></svg><span className="featured-number" aria-hidden="true">02</span></div><h3>Higiene facial</h3><p>Limpieza personalizada que elimina impurezas, exceso de grasa y células muertas, ayudando a mantener una piel fresca y saludable.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20limpieza%20facial." aria-label="Consultar por WhatsApp sobre limpieza facial">Consultar <span aria-hidden="true">↗</span></a></article>
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><g className="visual-mark"><path d="M46 15c2 8 3 15 1 22-1 5-5 10-7 16-3 10-1 20 2 30m32-68c-2 8-3 15-1 22 1 5 5 10 7 16 3 10 1 20-2 30"/><path d="M44 52c9 4 23 4 32 0M52 70c5 2 11 2 16 0"/><path className="visual-accent" d="M21 53h14m-5-5 5 5-5 5m69-5H85m5-5-5 5 5 5"/></g></svg><span className="featured-number" aria-hidden="true">03</span></div><h3>Tratamiento de grasa localizada</h3><p>Alternativas médico-estéticas dirigidas a tratar depósitos de grasa en zonas específicas, previa valoración médica.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20lipoenzimas." aria-label="Consultar por WhatsApp sobre lipoenzimas">Consultar <span aria-hidden="true">↗</span></a></article>
            <article className="featured-card"><div className="featured-visual"><svg viewBox="0 0 120 100" aria-hidden="true"><g className="visual-mark"><path d="M50 19c0-6 4-10 10-10s10 4 10 10M42 43c0-16 7-25 18-25s18 9 18 25v10c0 15-9 25-18 25S42 68 42 53V43Z"/><path d="M42 42c9-1 16-5 21-14 3 7 8 11 15 13M47 53c2 2 5 2 7 0m12 0c2 2 5 2 7 0M56 65c2 2 6 2 8 0M53 76v5c-3 3-7 4-11 5m25-10v5c3 3 7 4 11 5"/><path className="visual-accent" d="M84 27 69 42m11-19 8 8m-5-3 3 3m-12 7 3 3m-8 1-2 5 5-2M34 31v-8m-4 4h8"/></g></svg><span className="featured-number" aria-hidden="true">04</span></div><h3>Armonización con toxina botulínica</h3><p>Tratamiento que suaviza temporalmente las líneas de expresión mediante la relajación controlada de músculos específicos.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20toxina%20botul%C3%ADnica." aria-label="Consultar por WhatsApp sobre toxina botulínica">Consultar <span aria-hidden="true">↗</span></a></article>
          </div>
          <a className="text-link featured-all" href="#servicios">Ver todos los servicios <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14m-6-6 6 6 6-6" /></svg></a>
        </div>
      </section>

      <section className="clinic-intro-section" id="clinica" aria-labelledby="clinic-title">
        <div className="clinic-intro container">
          <div className="clinic-principles-heading">
            <p className="clinic-eyebrow">Lo que me guía</p>
            <h2 id="clinic-title">Mi profesión tiene principios. Mi vida también.</h2>
          </div>
          <ul className="clinic-values" aria-label="Principios de atención">
            <li><span className="clinic-value-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7v32M14 40h20M10 14h28M14 14 7 27h14l-7-13Zm20 0-7 13h14l-7-13ZM7 27c1 6 13 6 14 0m6 0c1 6 13 6 14 0" /></svg></span><span>Ética.</span></li>
            <li><span className="clinic-value-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 39 9 25C-1 15 12 5 21 14l3 3 3-3C36 5 49 15 39 25L24 39Z" /></svg></span><span>Honestidad.</span></li>
            <li><span className="clinic-value-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="m4 18 20-9 20 9-20 9L4 18Zm8 4v10c7 6 17 6 24 0V22m6-2v12" /></svg></span><span>Preparación constante.</span></li>
            <li><span className="clinic-value-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="15" cy="12" r="5"/><circle cx="33" cy="12" r="5"/><path d="M19 23c-3-5-9-5-12-1s-1 9 5 14l5 4m12-17c3-5 9-5 12-1s1 9-5 14l-5 4"/><path d="M24 39 16 31c-5-5 2-11 6-6l2 2 2-2c4-5 11 1 6 6l-8 8Z" /></svg></span><span>Empatía.</span></li>
            <li><span className="clinic-value-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7c6 4 11 5 16 6v9c0 10-6 16-16 20C14 38 8 32 8 22v-9c5-1 10-2 16-6Z"/><path d="m17 24 5 5 10-11" /></svg></span><span>Seguridad.</span></li>
          </ul>
          <div className="clinic-faith">
            <div className="clinic-faith-message"><span className="clinic-faith-ornament" aria-hidden="true">✦</span><p>Y una fe que me recuerda que Dios me ha permitido caminar por este camino con un propósito.</p></div>
            <blockquote><p>“Todo lo que hagan, háganlo de corazón.”</p><cite>Colosenses 3:23</cite></blockquote>
          </div>
        </div>
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
        <div className="section-intro"><h2 id="services-title">Medicina estética.<br />Dermatología clínica.</h2><div className="services-intro-copy"><p>Conoce nuestros servicios. Contáctanos para consultar por una valoración y recibir información sobre las opciones disponibles.</p><p className="services-tagline">CLÍNICA ESTÉTICA LÚMINA - SABIDURÍA EN CADA PROCESO</p></div></div>
        <div className="service-images">
          <figure><img src={microneedlingImage} alt="Tratamiento de microneedling en el rostro" width="900" height="1600" loading="lazy" /><figcaption>Microneedling</figcaption></figure>
          <figure><img src={peelingImage} alt="Aplicación de un tratamiento facial con brocha" width="900" height="1600" loading="lazy" /><figcaption>Peeling químico</figcaption></figure>
        </div>
        <ul className="service-list">
          {services.map(({ name, description }) => (
            <li key={name}>
              <div className="service-copy"><h3>{name}</h3><p>{description}</p></div>
              <a href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera informaci?n sobre ${name}.`)}`} aria-label={`Consultar por WhatsApp sobre ${name}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="process-section" aria-labelledby="process-title"><div className="container section-space"><div className="section-intro"><h2 id="process-title">Empecemos por<br /><em>una conversación.</em></h2><p>Un primer contacto para compartir lo que buscas y consultar tus dudas con la doctora.</p></div><ol className="process-list"><li><div className="process-visual" aria-hidden="true"><svg viewBox="0 0 80 80" aria-hidden="true"><rect x="24" y="12" width="32" height="54" rx="5"/><path d="M35 18h10M37 59h6"/><path d="M30 31h20v14H38l-6 5v-5h-2z"/><path d="M35 36h10m-10 4h7"/></svg></div><span>1</span><h3>Contáctanos</h3><p>Escríbenos o llámanos para solicitar información.</p></li><li><div className="process-visual" aria-hidden="true"><svg viewBox="0 0 80 80" aria-hidden="true"><rect x="17" y="20" width="46" height="42" rx="4"/><path d="M17 31h46M28 15v10m24-10v10M28 41h5m7 0h5m7 0h1M28 50h5m7 0h5"/><path d="m50 51 3 3 6-7"/></svg></div><span>2</span><h3>Coordina tu valoración</h3><p>Consulta la disponibilidad y los detalles de tu visita.</p></li><li><div className="process-visual" aria-hidden="true"><svg viewBox="0 0 80 80" aria-hidden="true"><path d="M16 42c0-11 9-19 20-19s20 8 20 19-9 19-20 19c-3 0-6-.5-9-1.8L18 63l2.5-8C17.6 51.5 16 47 16 42z"/><path d="M47 23c2-5 7-8 13-8 8 0 14 6 14 14 0 3-1 6-3 8l2 6-7-2.5c-2 1-4 1.5-6 1.5h-4"/><path d="M28 41h.1m8 0h.1m8 0h.1" strokeWidth="3"/></svg></div><span>3</span><h3>Conversa con la doctora</h3><p>Comparte tus objetivos y resuelve tus dudas durante la valoración.</p></li></ol></div></section>

      <section className="faq-section container section-space" id="preguntas" aria-labelledby="faq-title"><h2 id="faq-title">Antes de<br /><em>tu visita.</em></h2><div className="faq-list">
        <details><summary>¿Cómo puedo solicitar una valoración?<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7v14" /></svg></summary><p>Puedes <a href="https://wa.me/50558811397">escribirnos por WhatsApp</a> o llamarnos al <a href="tel:+50558811397">+505 5881 1397</a> para consultar disponibilidad.</p></details>
        <details><summary>¿Cómo sé qué opción es adecuada para mí?<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7v14" /></svg></summary><p>Solicita una valoración para que conversemos sobre lo que buscas y aclarar tus dudas.</p></details>
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
                <a href="https://www.google.com/maps?q=12.433326721191406,-86.84996795654297&z=17&hl=es" target="_blank" rel="noopener noreferrer">
                  León, Nicaragua <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
                </a>
                <small>Reparto Mariana Sampson, del cuerpo de bomberos 9 cuadras al norte</small>
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
              <dd>Lunes a viernes:<br />9:00 am – 6:00 pm<br />Sábados:<br />9:00 am – 5:00 pm<small>Domingos atención disponible bajo previa coordinación</small></dd>
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
                <a href="https://www.instagram.com/clinica_estetica_lumina/">
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
                href="https://www.google.com/maps?q=12.433326721191406,-86.84996795654297&z=17&hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Google Maps</span>
                <svg className="map-external-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
              </a>
              <a
                className="button-map"
                href="https://waze.com/ul?ll=12.433326721191406,-86.84996795654297&navigate=yes"
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
              src="https://maps.google.com/maps?q=12.433326721191406,-86.84996795654297&z=17&hl=es&output=embed"
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
