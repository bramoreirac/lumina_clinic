import { useId, useState } from 'react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import FaqItem from '../components/FaqItem'
import { services } from '../data/services'
import { serviceGallery } from '../data/serviceGallery'
import heroImage from '../assets/clinic/service-01.webp'

const galleryTreatmentNames = new Set(serviceGallery.map(({ name }) => name))
const remainingServices = services.filter(({ name }) => !galleryTreatmentNames.has(name))

function ServiceCard({ image, name, alt, width, height, description }) {
  const [open, setOpen] = useState(false)
  const answerId = useId()

  return (
    <Reveal as="figure">
      <button type="button" className="service-image-toggle" aria-label={`Descripción de ${name}`}
        aria-expanded={open} aria-controls={answerId} onClick={() => setOpen((value) => !value)}>
        <img src={image} alt={alt} width={width} height={height} loading="lazy" />
      </button>
      <figcaption>
        <FaqItem question={name} className="service-card-details" open={open} onOpenChange={setOpen} answerId={answerId}>
          <p>{description ?? services.find((service) => service.name === name)?.description}</p>
          <a className="service-card-contact" href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera información sobre ${name}.`)}`} aria-label={`Consultar por WhatsApp sobre ${name}`}>
            Consultar por WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </FaqItem>
      </figcaption>
    </Reveal>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Hero image={heroImage} width={1200} height={1200} titleId="services-hero-title" className="services-hero"
        title={<>Nuestros servicios</>}
        description={"Medicina est\u00e9tica y dermatolog\u00eda cl\u00ednica en Le\u00f3n, Nicaragua. Conoce las opciones disponibles y consulta por una valoraci\u00f3n profesional."}
        actions={<a className="button button-gold" href="https://wa.me/50558811397">Consultar por WhatsApp <span aria-hidden="true">↗</span></a>}
      />
      <section className="services-section container section-space" id="servicios" aria-labelledby="services-title">
        <div className="section-intro"><h2 id="services-title">Medicina estética.<br />Dermatología clínica.</h2><div className="services-intro-copy"><p>Conoce nuestros servicios. Contáctanos para consultar por una valoración y recibir información sobre las opciones disponibles.</p><p className="services-tagline">CLÍNICA ESTÉTICA LÚMINA - SABIDURÍA EN CADA PROCESO</p></div></div>
        <div className="service-images">
          {serviceGallery.map((service) => <ServiceCard key={service.name} {...service} />)}
        </div>
        <h2 className="catalogue-title" id="catalogo">Más Tratamientos</h2>
        <ul className="service-list" aria-labelledby="catalogo">
          {remainingServices.map(({ name, description }) => (
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
