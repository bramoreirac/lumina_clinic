import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import FaqItem from './FaqItem'
import TreatmentIcon from './TreatmentIcon'
import useMotionPreference from './useMotionPreference'
import { easeOut } from './motionSettings'
import { serviceAnchor } from '../data/services'

export default function ServicesTree({ categories, services }) {
  const [category, setCategory] = useState('facial')
  const [treatment, setTreatment] = useState(null)
  const reducedMotion = useMotionPreference()

  useEffect(() => {
    let timer
    const revealHash = () => {
      const anchor = window.location.hash.slice(1)
      const service = services.find(({ name }) => serviceAnchor(name) === anchor)
      const group = categories.find(({ id }) => id === anchor)
      if (!service && !group) return
      setCategory(service?.category ?? group.id)
      setTreatment(service?.name ?? null)
      clearTimeout(timer)
      timer = setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ block: 'start' }), reducedMotion ? 0 : 300)
    }
    revealHash()
    window.addEventListener('hashchange', revealHash)
    return () => { clearTimeout(timer); window.removeEventListener('hashchange', revealHash) }
  }, [categories, services, reducedMotion])

  const toggleCategory = (id) => {
    setCategory(category === id ? null : id)
    setTreatment(null)
  }

  return (
    <div className="services-tree">
      {categories.map(({ id, name, icon, description }) => {
        const open = category === id
        return (
          <section className="service-category" id={id} key={id} aria-labelledby={`${id}-title`} data-open={open}>
            <h3 id={`${id}-title`} className="service-category-heading">
              <button type="button" className="service-category-toggle" aria-expanded={open}
                aria-controls={`${id}-services`} onClick={() => toggleCategory(id)}>
                <span className="service-category-label"><TreatmentIcon treatment={icon} /><span>{name}</span></span>
                <span className="service-category-description">{description}</span>
                <span className="service-category-expand" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14m-7-7v14" /></svg></span>
              </button>
            </h3>
            <motion.div id={`${id}-services`} className="service-category-panel" role="region" aria-labelledby={`${id}-title`}
              aria-hidden={!open} inert={!open} initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : .25, ease: easeOut }}>
              <div className="service-category-list">
                {services.filter((service) => service.category === id).map(({ name: title, description: detail }) => (
                  <FaqItem key={title} id={serviceAnchor(title)} question={title} className="service-details"
                    open={treatment === title} onOpenChange={(expanded) => setTreatment(expanded ? title : null)}>
                    <p>{detail}</p>
                    <a className="service-card-contact" href={`https://wa.me/50558811397?text=${encodeURIComponent(`Hola, quisiera información sobre ${title}.`)}`}
                      aria-label={`Consultar por WhatsApp sobre ${title}`}>
                      Consultar por WhatsApp <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
                    </a>
                  </FaqItem>
                ))}
              </div>
            </motion.div>
          </section>
        )
      })}
    </div>
  )
}
