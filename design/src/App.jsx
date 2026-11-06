import Hero from './components/Hero'
import FeaturedTreatments from './components/FeaturedTreatments'
import SiteHeader from './components/SiteHeader'
import logoGold from './assets/clinic/lumina-logo-reconstructed.svg'
import heroImage from './assets/clinic/hero-treatment.webp'
import { featuredTreatments } from './data/featuredTreatments'
import './App.css'

const heroTreatmentNames = [featuredTreatments[1], featuredTreatments[0], ...featuredTreatments.slice(2)].map(({ name }) => name)

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <SiteHeader />
      <main id="contenido" tabIndex="-1">
        <Hero
          image={heroImage}
          width={1080}
          height={1920}
          titleId="hero-title"
          className="home-hero photo-hero"
          badge={logoGold}
          rotatingItems={heroTreatmentNames}
          eyebrow="Lúmina Clínica Estética"
          title="Medicina estética en León, Nicaragua."
          description="Tratamientos médico-estéticos y dermatológicos personalizados, guiados por una valoración profesional."
          byline={<>Con la <strong>Dra. Steacey Maradiaga</strong></>}
          actions={<>
            <a className="button button-primary" href="https://wa.me/50558811397">Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#destacados">Explorar los tratamientos <span aria-hidden="true">↗</span></a>
          </>}
        />
        <FeaturedTreatments />
      </main>
    </>
  )
}
