import { services } from '../data/services'
import { serviceGallery } from '../data/serviceGallery'
import heroImage from '../assets/clinic/service-01.webp'

export default function ServicesPage() {
  return (
    <>
      <section className="clinic-hero services-hero" id="inicio" aria-labelledby="services-hero-title">
        <img className="hero-photo" src={heroImage} alt="" width="1200" height="1200" fetchPriority="high" />
        <div className="container clinic-hero-inner">
          <h1 id="services-hero-title">Nuestros servicios</h1>
          <div className="hero-rule" aria-hidden="true"></div>
          <p>Medicina estética y dermatología clínica en León, Nicaragua. Conoce las opciones disponibles y consulta por una valoración profesional.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#catalogo">Explorar tratamientos</a>
            <a className="text-link" href="https://wa.me/50558811397">Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section className="services-section container section-space" id="servicios" aria-labelledby="services-title">
        <div className="section-intro"><h2 id="services-title">Medicina estética.<br />Dermatología clínica.</h2><div className="services-intro-copy"><p>Conoce nuestros servicios. Contáctanos para consultar por una valoración y recibir información sobre las opciones disponibles.</p><p className="services-tagline">CLÍNICA ESTÉTICA LÚMINA - SABIDURÍA EN CADA PROCESO</p></div></div>
        <div className="service-images">
          {serviceGallery.map(({ image, name, alt, width, height }) => (
            <figure key={name}><img src={image} alt={alt} width={width} height={height} loading="lazy" /><figcaption>{name}</figcaption></figure>
          ))}
        </div>
        <h2 className="catalogue-title" id="catalogo">Todos los tratamientos</h2>
        <ul className="service-list" aria-labelledby="catalogo">
          {services.map(({ name, description }) => (
            <li key={name}>
              <div className="service-copy"><h3>{name}</h3><p>{description}</p></div>
              <a href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera información sobre ${name}.`)}`} aria-label={`Consultar por WhatsApp sobre ${name}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

    </>
  )
}
