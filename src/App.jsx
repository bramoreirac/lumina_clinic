import Hero from './components/Hero'
import FeaturedCarousel from './components/FeaturedCarousel'
import TreatmentIcon from './components/TreatmentIcon'
import ResultsGallery from './components/ResultsGallery'
import FaqItem from './components/FaqItem'
import SiteHeader from './components/SiteHeader'
import logoGold from './assets/clinic/lumina-logo-reconstructed.svg'
import portrait from './assets/clinic/doctor.webp'
import heroImage from './assets/clinic/hero-treatment.webp'
import faqTreatment from './assets/clinic/faq-treatment.webp'
import featuredTreatment from './assets/clinic/featured-treatment.webp'
import consultationPortrait from './assets/clinic/consultation-portrait.webp'
import ServicesPage from './pages/ServicesPage'
import './App.css'


function App({ isServicesPage = false }) {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <SiteHeader isServicesPage={isServicesPage} />

      <main id="contenido" className={isServicesPage ? undefined : 'landing-main'} tabIndex="-1">
        {isServicesPage ? <ServicesPage /> : <>
          <Hero
            image={heroImage}
            width={1080}
            height={1920}
            titleId="hero-title"
            className="approved-hero"
            badge={logoGold}
            title={<>Medicina estética en<br />León, Nicaragua.</>}
            description="Tratamientos médicos-estéticos y dermatológicos personalizados, guiados por una valoración profesional y enfocados en tu bienestar."
            actions={<>
              <a className="button button-primary" href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20agendar%20una%20valoraci%C3%B3n.">Agendar valoración</a>
              <a className="button hero-secondary" href="/servicios/">Explorar los servicios</a>
            </>}
          />

          <section className="featured-section" id="destacados" aria-labelledby="featured-title">
            <div className="container section-space">
              <div className="featured-heading">
                <div><p className="featured-eyebrow">Nuestros tratamientos destacados</p><h2 id="featured-title">El cuidado de tu piel comienza con una valoración profesional.</h2></div>
                <p>Conoce algunos de nuestros tratamientos y evaluemos juntos cuál es la mejor opción para ti.</p>
              </div>
              <div className="featured-photo-layout">
                <figure className="featured-photo">
                  <img src={featuredTreatment} alt="La doctora realizando un tratamiento facial en la clínica" width="1200" height="1178" loading="lazy" />
                </figure>
                <div className="featured-cards">
                  <FeaturedCarousel>
                    <article className="featured-card"><div className="featured-visual"><TreatmentIcon treatment="microneedling" /><span className="featured-number" aria-hidden="true">01</span></div><h3>Microneedling facial</h3><p>Procedimiento que estimula la renovación de la piel y favorece la producción de colágeno, ayudando a mejorar su textura y apariencia.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20microneedling." aria-label="Consultar por WhatsApp sobre microneedling"><span>Consultar</span><span className="featured-card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12" /></svg></span></a></article>
                    <article className="featured-card"><div className="featured-visual"><TreatmentIcon treatment="cleansing" /><span className="featured-number" aria-hidden="true">02</span></div><h3>Higiene facial</h3><p>Limpieza personalizada que elimina impurezas, exceso de grasa y células muertas, ayudando a mantener una piel fresca y saludable.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20limpieza%20facial." aria-label="Consultar por WhatsApp sobre limpieza facial"><span>Consultar</span><span className="featured-card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12" /></svg></span></a></article>
                    <article className="featured-card"><div className="featured-visual"><TreatmentIcon treatment="body" /><span className="featured-number" aria-hidden="true">03</span></div><h3>Tratamiento de grasa localizada</h3><p>Alternativas médico-estéticas dirigidas a tratar depósitos de grasa en zonas específicas, previa valoración médica.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20lipoenzimas." aria-label="Consultar por WhatsApp sobre lipoenzimas"><span>Consultar</span><span className="featured-card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12" /></svg></span></a></article>
                    <article className="featured-card"><div className="featured-visual"><TreatmentIcon treatment="botulinum" /><span className="featured-number" aria-hidden="true">04</span></div><h3>Armonización con toxina botulínica</h3><p>Tratamiento que suaviza temporalmente las líneas de expresión mediante la relajación controlada de músculos específicos.</p><a href="https://wa.me/50558811397?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20toxina%20botul%C3%ADnica." aria-label="Consultar por WhatsApp sobre toxina botulínica"><span>Consultar</span><span className="featured-card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12" /></svg></span></a></article>
                  </FeaturedCarousel>
                </div>
              </div>
              <a className="button featured-all" href="/servicios/">Ver todos los servicios</a>
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
                <li><span className="clinic-value-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="15" cy="12" r="5" /><circle cx="33" cy="12" r="5" /><path d="M19 23c-3-5-9-5-12-1s-1 9 5 14l5 4m12-17c3-5 9-5 12-1s1 9-5 14l-5 4" /><path d="M24 39 16 31c-5-5 2-11 6-6l2 2 2-2c4-5 11 1 6 6l-8 8Z" /></svg></span><span>Empatía.</span></li>
                <li><span className="clinic-value-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7c6 4 11 5 16 6v9c0 10-6 16-16 20C14 38 8 32 8 22v-9c5-1 10-2 16-6Z" /><path d="m17 24 5 5 10-11" /></svg></span><span>Seguridad.</span></li>
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
                <img src={portrait} alt="Dra. Steacey Maradiaga sonriendo en su consultorio" width="1067" height="1600" loading="lazy" />
              </figure>
              <div className="doctor-copy">
                <h2 id="doctor-title">La doctora detrás<br />de <em>Lúmina.</em></h2>
                <div className="doctor-credentials">
                  <p className="doctor-name">Dra. Steacey Maradiaga</p>
                  <p>Médico y Cirujano General / Médico Estético / Dermatología Clínica</p>
                  <p>UNAN - UAM - UCEM</p>
                </div>
                <p><strong>Para mí, cada paciente es único. </strong>No creo en fórmulas universales.</p>
                <div className="doctor-belief">
                  <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="21" /><path d="M24 34 14.5 25c-6-6 2-13 7.5-7.5l2 2 2-2C31.5 12 39.5 19 33.5 25L24 34Z" /></svg>
                  <p>Creo en escuchar, valorar y comprender a cada persona para ofrecer un tratamiento personalizado, seguro y basado en ciencia.</p>
                </div>
                <a className="button button-primary" href="#contacto">Conversemos sobre tu valoración</a>
              </div>
            </div>
          </section>


          <ResultsGallery />

          <section className="process-section" aria-labelledby="process-title"><div className="container section-space"><div className="process-companion">
            <div className="process-copy"><div className="section-intro">
              <h2 id="process-title">Empecemos por<br /><em>una conversación.</em></h2>
              <p>Un primer contacto para compartir lo que buscas y consultar tus dudas con la doctora.</p>
            </div>
              <ol className="process-list">
                <li>
                  <div className="process-visual" aria-hidden="true">
                    <svg viewBox="0 0 80 80" aria-hidden="true">
                      <rect x="24" y="12" width="32" height="54" rx="5" />
                      <path d="M35 18h10M37 59h6" />
                      <path d="M30 31h20v14H38l-6 5v-5h-2z" />
                      <path d="M35 36h10m-10 4h7" />
                    </svg>
                  </div>
                  <span>1</span>
                  <h3>Contáctanos</h3>
                  <p>Escríbenos o llámanos para solicitar información.</p>
                </li>
                <li>
                  <div className="process-visual" aria-hidden="true">
                    <svg viewBox="0 0 80 80" aria-hidden="true">
                      <rect x="17" y="20" width="46" height="42" rx="4" />
                      <path d="M17 31h46M28 15v10m24-10v10M28 41h5m7 0h5m7 0h1M28 50h5m7 0h5" />
                      <path d="m50 51 3 3 6-7" />
                    </svg>
                  </div>
                  <span>2</span>
                  <h3>Coordina tu valoración</h3>
                  <p>Consulta la disponibilidad y los detalles de tu visita.</p>
                </li>
                <li>
                  <div className="process-visual" aria-hidden="true">
                    <svg viewBox="0 0 80 80" aria-hidden="true">
                      <path d="M16 42c0-11 9-19 20-19s20 8 20 19-9 19-20 19c-3 0-6-.5-9-1.8L18 63l2.5-8C17.6 51.5 16 47 16 42z" />
                      <path d="M47 23c2-5 7-8 13-8 8 0 14 6 14 14 0 3-1 6-3 8l2 6-7-2.5c-2 1-4 1.5-6 1.5h-4" />
                      <path d="M28 41h.1m8 0h.1m8 0h.1" strokeWidth="3" />
                    </svg>
                  </div>
                  <span>3</span>
                  <h3>Conversa con la doctora</h3>
                  <p>Comparte tus objetivos y resuelve tus dudas durante la valoración.</p>
                </li>
              </ol>
            </div>
            <figure className="process-photo"><img src={consultationPortrait} alt="Dra. Steacey Maradiaga en su escritorio de consulta" width="1000" height="1500" loading="lazy" /></figure>
          </div>
          </div>
          </section>

          <section className="faq-section container section-space" id="preguntas" aria-labelledby="faq-title"><div className="faq-heading"><h2 id="faq-title">Antes de<br /><em>tu visita.</em></h2>
            <div className="faq-support">
              <img src={faqTreatment} alt="" width="720" height="1280" loading="lazy" />
              <div className="faq-support-copy"><h3>¿Aún tienes preguntas?</h3><p>Conversemos sobre tus dudas antes de tu visita.</p></div>
              <a className="button faq-support-link" href="https://wa.me/50558811397">Contáctanos <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg></a>
            </div>
          </div><div className="faq-list">
              <FaqItem defaultOpen question={"\u00bfC\u00f3mo puedo solicitar una valoraci\u00f3n?"}><p>Puedes <a href="https://wa.me/50558811397">escribirnos por WhatsApp</a> o llamarnos al <a href="tel:+50558811397">+505 5881 1397</a> para consultar disponibilidad.</p></FaqItem>
              <FaqItem question={"\u00bfC\u00f3mo s\u00e9 qu\u00e9 opci\u00f3n es adecuada para m\u00ed?"}><p>Solicita una valoración para que conversemos sobre lo que buscas y aclarar tus dudas.</p></FaqItem>
              <FaqItem question={"\u00bfCu\u00e1l es el horario de atenci\u00f3n?"}><p>Atendemos de lunes a viernes, de 9:00 am a 6:00 pm. Sábados, de 9:00 am a 5:00 pm. También atendemos en otros horarios con cita previa.</p></FaqItem>
              <FaqItem question={"\u00bfEn qu\u00e9 ciudad est\u00e1 la cl\u00ednica?"}><p>Estamos en León, Nicaragua. <a href="https://wa.me/50558811397">Contáctanos por WhatsApp</a> para consultar cómo llegar.</p></FaqItem>
            </div></section>

        </>}

        <LandingContact />
      </main>
      <LandingFooter logo={logoGold} />
    </>
  )
}

function LandingContact() {
  return <section className="approved-contact" id="contacto" aria-labelledby="contact-title">
    <div className="approved-contact-inner container">
      <div className="approved-contact-copy">
        <h2 id="contact-title">Conversemos sobre<br /><em>tu valoración.</em></h2>
        <p>Contáctanos para consultar nuestros servicios<br className="desktop-break" /> y coordinar tu visita.</p>
        <a className="approved-contact-cta" href="https://wa.me/50558811397">Escribir por WhatsApp</a>
      </div>
      <div className="approved-map">
        <iframe title="Mapa de ubicación de la clínica en León, Nicaragua" src="https://maps.google.com/maps?q=12.433326721191406,-86.84996795654297&z=17&hl=es&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className="approved-map-meta"><span>León, Nicaragua · Reparto Mariana Sanson</span><div className="approved-map-links"><a href="https://waze.com/ul?ll=12.433326721191406,-86.84996795654297&navigate=yes" target="_blank" rel="noopener noreferrer"><span>Waze</span><svg className="approved-map-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a><a href="https://www.google.com/maps?q=12.433326721191406,-86.84996795654297&z=17&hl=es" target="_blank" rel="noopener noreferrer"><span>Google Maps</span><svg className="approved-map-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a></div></div>
      </div>
    </div>
  </section>
}

function LandingFooter({ logo }) {
  return <footer className="approved-footer"><div className="container approved-footer-inner">
    <div className="approved-footer-brand"><a href="/#inicio" aria-label="Lúmina Clínica Estética, volver al inicio"><img src={logo} alt="" /></a></div>
    <div className="approved-footer-column"><h2>Contacto</h2><a href="mailto:steaceymaradiaga@gmail.com">steaceymaradiaga@gmail.com</a><a href="tel:+50558811397">+505 5881 1397</a><span>León, Nicaragua</span></div>
    <div className="approved-footer-column"><h2>Horario</h2><span>Lun–Vie &nbsp;9AM – 6PM</span><span>Sáb &nbsp;9AM – 5PM</span><span>Dom &nbsp;con cita previa</span></div>
    <div className="approved-social"><a className="approved-social-item" href="https://www.instagram.com/clinica_estetica_lumina/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="approved-social-circle"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg></span></a><a className="approved-social-item" href="https://wa.me/50558811397" aria-label="WhatsApp"><span className="approved-social-circle"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg></span></a><a className="approved-social-item" href="https://www.facebook.com/stacey.maradiagaurbina?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="approved-social-circle"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg></span></a><a className="approved-social-item" href="https://www.tiktok.com/@dra.steaceymaradiaga?_r=1&_t=ZS-9BIEjuVK9Q8" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><span className="approved-social-circle"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg></span></a></div>
    <p className="approved-copyright">© 2026 Lúmina Clínica Estética. Todos los derechos reservados.</p>
  </div></footer>
}

export default App
