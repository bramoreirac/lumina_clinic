import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import SiteHeader from '../src/components/SiteHeader'
import ServicesPage from '../src/pages/ServicesPage'
import treatment from '../src/assets/clinic/featured-treatment.webp'
import microneedling from '../src/assets/clinic/service-01.webp'
import cleansing from '../src/assets/clinic/service-higiene-facial.webp'
import peeling from '../src/assets/clinic/service-peelings-quimicos.webp'
import '../src/App.css'
import './services-heroes.css'

const description = 'Medicina estética y dermatología clínica en León, Nicaragua. Conoce las opciones disponibles y consulta por una valoración profesional.'
const photographs = [
  { image: microneedling, name: 'Microneedling facial', alt: 'Aplicación de microneedling facial' },
  { image: cleansing, name: 'Higiene facial', alt: 'Limpieza facial con espátula ultrasónica' },
  { image: peeling, name: 'Peelings químicos', alt: 'Aplicación de peeling químico facial con pincel' },
]

function Arrow({ down = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={down ? 'M12 4v16m-6-6 6 6 6-6' : 'M5 12h14m-6-6 6 6-6 6'} /></svg>
}

function Actions() {
  return <div className="concept-actions"><a className="concept-action" href="https://wa.me/50558811397">Consultar por WhatsApp <Arrow /></a><a className="concept-explore" href="#servicios">Ver tratamientos <Arrow down /></a></div>
}

function EditorialHero() {
  return <section className="concept-hero editorial-hero" aria-labelledby="concept-title">
    <div className="editorial-copy">
      <h1 id="concept-title">Nuestros<br />servicios</h1>
      <p>{description}</p>
      <Actions />
    </div>
    <figure className="editorial-photo"><img src={treatment} width="1200" height="1178" alt="La doctora realizando un tratamiento facial en la clínica" fetchPriority="high" /><figcaption>El cuidado comienza con una valoración.</figcaption></figure>
  </section>
}

function AtlasHero() {
  const [selected, setSelected] = useState(0)
  return <section className="concept-hero atlas-hero" aria-labelledby="concept-title">
    <div className="atlas-heading"><h1 id="concept-title">Nuestros servicios</h1><a className="atlas-down" href="#servicios" aria-label="Ver tratamientos"><Arrow down /></a></div>
    <div className="atlas-body">
      <div className="atlas-copy"><p>{description}</p><Actions /></div>
      <div className="atlas-gallery" aria-label="Tratamientos destacados">
        {photographs.map((photo, index) => <button type="button" className="atlas-photo" key={photo.name} aria-pressed={selected === index} onClick={() => setSelected(index)}>
          <img src={photo.image} width="1080" height="1080" alt={photo.alt} fetchPriority={index === 0 ? 'high' : 'auto'} />
          <span>{photo.name}</span>
        </button>)}
        <a className="atlas-inquiry" href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera información sobre ${photographs[selected].name}.`)}`}><span aria-live="polite">Consultar: {photographs[selected].name}</span><Arrow /></a>
      </div>
    </div>
  </section>
}

export default function Preview() {
  const option = new URLSearchParams(window.location.search).get('option') === 'b' ? 'b' : 'a'
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <SiteHeader isServicesPage />
    <main id="contenido" tabIndex="-1">
      {option === 'a' ? <EditorialHero /> : <AtlasHero />}
      <div className="concept-following"><ServicesPage /></div>
      <section className="concept-contact" id="contacto"><h2>Conversemos</h2><a className="concept-action" href="https://wa.me/50558811397">Consultar por WhatsApp <Arrow /></a></section>
    </main>
    <nav className="concept-switch" aria-label="Comparar propuestas"><a href="?option=a" aria-current={option === 'a' ? 'page' : undefined}>Editorial en marfil</a><a href="?option=b" aria-current={option === 'b' ? 'page' : undefined}>Atlas en verde</a><a href="/servicios/">Diseño actual</a></nav>
  </>
}

createRoot(document.getElementById('root')).render(<Preview />)
