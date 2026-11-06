import { useId, useState } from 'react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import FaqItem from '../components/FaqItem'
import TreatmentIcon from '../components/TreatmentIcon'
import { services, serviceAnchor } from '../data/services'
import { serviceGallery } from '../data/serviceGallery'
import heroImage from '../assets/clinic/service-01.webp'

const galleryTreatmentNames = new Set(serviceGallery.map(({ name }) => name))
const remainingServices = services.filter(({ name }) => !galleryTreatmentNames.has(name))
const categories = [
  { id: 'facial', name: 'Cuidado facial', icon: 'cleansing', description: 'Opciones para el cuidado, la textura y la apariencia de tu piel.' },
  { id: 'corporal', name: 'Tratamientos corporales', icon: 'body', description: 'Atención de zonas específicas del cuerpo, según tu valoración médica.' },
  { id: 'dermatologia', name: 'Dermatología clínica', icon: 'microneedling', description: 'Valoración de la salud de la piel y del cuero cabelludo.' },
]

function ServiceCard({ image, name, alt, width, height, description }) {
  const [open, setOpen] = useState(false)
  const answerId = useId()

  return (
    <Reveal as="figure" id={serviceAnchor(name)}>
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
      <Hero image={heroImage} width={1200} height={1200} titleId="services-hero-title" className="home-hero services-hero"
        eyebrow="Lúmina · Nuestros servicios"
        title="Un cuidado que comienza por conocerte."
        description="Medicina estética y dermatología clínica en León, Nicaragua. Conoce nuestras opciones y consulta por una valoración profesional."
        actions={<a className="button button-primary" href="https://wa.me/50558811397">Consultar por WhatsApp</a>}
      />
      <section className="services-section container section-space" id="servicios" aria-labelledby="services-title">
        <div className="section-intro services-intro">
          <div><p className="eyebrow">Sabiduría en cada proceso</p><h2 id="services-title">Encuentra el cuidado<br />que buscas.</h2></div>
          <p>Explora cada categoría y abre un tratamiento para conocer más. La doctora te orientará sobre las opciones adecuadas para ti.</p>
        </div>
        <section className="services-gallery" aria-labelledby="services-gallery-title">
          <h2 id="services-gallery-title">Tratamientos en imágenes.</h2>
          <div className="service-images">
            {serviceGallery.map((service) => <ServiceCard key={service.name} {...service} />)}
          </div>
        </section>
        <h2 className="service-category-index-title" id="service-category-index-title">Más servicios por categoría.</h2>
        <nav className="service-category-nav" aria-labelledby="service-category-index-title">
          {categories.map(({ id, name }) => <a key={id} href={`#${id}`}>{name} <span aria-hidden="true">↓</span></a>)}
        </nav>
        {categories.map(({ id, name, icon, description }, index) => (
          <section className="service-category" id={id} key={id} aria-labelledby={`${id}-title`}>
            <div className="service-category-heading">
              <span className="service-category-number" aria-hidden="true">0{index + 1}</span>
              <TreatmentIcon treatment={icon} />
              <h2 id={`${id}-title`}>{name}</h2>
              <p>{description}</p>
            </div>
            <div className="service-category-list">
              {remainingServices.filter((service) => service.category === id).map(({ name: treatment, description: detail }) => (
                <FaqItem key={treatment} id={serviceAnchor(treatment)} question={treatment} className="service-details">
                  <p>{detail}</p>
                  <a className="service-card-contact" href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera información sobre ${treatment}.`)}`} aria-label={`Consultar por WhatsApp sobre ${treatment}`}>
                    Consultar por WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                </FaqItem>
              ))}
            </div>
          </section>
        ))}
        <a className="text-link services-results-link" href={`${import.meta.env.BASE_URL}#resultados`}>Explorar los resultados de tratamientos <span aria-hidden="true">↗</span></a>
      </section>
    </>
  )
}
