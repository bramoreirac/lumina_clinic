import { ScrollRevealHeading, ScrollRevealCard } from '../components/ScrollRevealPrototype'
import { useState } from 'react'
import Hero from '../components/Hero'
import ContinuousCarousel from '../components/ContinuousCarousel'
import ServicesTree from '../components/ServicesTree'
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

const serviceCarouselOptions = {
  perPage: 3,
  gap: '1.25rem',
  padding: { right: '6%' },
  breakpoints: {
    1050: { perPage: 2, gap: '1rem', padding: { right: '8%' } },
    599: { perPage: 1, padding: { right: '15%' } },
  },
}

function ServiceCard({ image, name, alt, width, height, description }) {
  return (
    <figure className="service-card" id={serviceAnchor(name)}>
      <button type="button" className="service-image-toggle" aria-label={`Descripción de ${name}`}>
        <img src={image} alt={alt} width={width} height={height} loading="lazy" />
      </button>
      <figcaption>
        <details className="service-disclosure" name="service-treatments">
          <summary><span>{name}</span><span className="service-expand-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14m-7-7v14" /></svg></span></summary>
          <div className="service-description">
            <p>{description ?? services.find((service) => service.name === name)?.description}</p>
            <a className="service-card-contact" href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera información sobre ${name}.`)}`} aria-label={`Consultar por WhatsApp sobre ${name}`}>
              Consultar por WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </details>
      </figcaption>
    </figure>
  )
}

// Copies in the looping track use native disclosures, so all copies remain interactive.
const prepareServiceCopies = (splide) => {
  queueMicrotask(() => {
    splide.root.querySelectorAll('.splide__slide--clone .service-card[id]').forEach((card) => card.removeAttribute('id'))
  })
}

export default function ServicesPage() {
  const [serviceOpen, setServiceOpen] = useState(false)
  const toggleServiceImage = (event) => {
    const button = event.target.closest('.service-image-toggle')
    if (button) {
      const details = button.closest('.service-card').querySelector('details')
      details.open = !details.open
    }
  }
  const updateServiceOpen = (event) => {
    setServiceOpen(Boolean(event.currentTarget.querySelector('details[open]')))
  }
  return (
    <>
      <Hero image={heroImage} width={1200} height={1200} titleId="services-hero-title" className="approved-hero services-hero"
        title="Nuestros servicios"
        description="Medicina estética y dermatología clínica en León, Nicaragua. Conoce las opciones disponibles y consulta por una valoración profesional."
        actions={<>
          <a className="button button-primary" href="https://wa.me/50558811397">Consultar por WhatsApp</a>
        </>}
      />
      <section className="services-section container section-space" id="servicios" aria-labelledby="services-title">
        <div className="section-intro services-intro">
          <div><p className="eyebrow">Sabiduría en cada proceso</p><ScrollRevealHeading id="services-title">Encuentra el cuidado<br />que buscas.</ScrollRevealHeading></div>
          <p>Explora cada categoría y abre un tratamiento para conocer más. La doctora te orientará sobre las opciones adecuadas para ti.</p>
        </div>
        <section className="services-gallery" aria-labelledby="services-gallery-title">
          <ScrollRevealHeading id="services-gallery-title">Tratamientos en imágenes.</ScrollRevealHeading>
          <ContinuousCarousel id="services-carousel" label="Tratamientos en imágenes" className="service-images"
            options={serviceCarouselOptions} suspended={serviceOpen} pauseOnInteraction={false} showPauseButton={false} pauseOnPointerFocus={false}
            onClick={toggleServiceImage} onToggleCapture={updateServiceOpen} onMounted={prepareServiceCopies}>
            {serviceGallery.map((service) => <ServiceCard key={service.name} {...service} />)}
          </ContinuousCarousel>
        </section>
        <ScrollRevealHeading className="service-category-index-title" id="service-category-index-title">Más servicios por categoría.</ScrollRevealHeading>
        <ScrollRevealCard as="div" className="services-directory-reveal"><ServicesTree categories={categories} services={remainingServices} /></ScrollRevealCard>
        <a className="button services-results-link" href={`${import.meta.env.BASE_URL}#resultados`}>Explorar los resultados de tratamientos</a>
      </section>
    </>
  )
}
