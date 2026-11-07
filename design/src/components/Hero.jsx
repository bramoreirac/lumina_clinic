import useMotionPreference from './useMotionPreference'
import { motion } from 'motion/react'
import { entrance } from './motionSettings'

export default function Hero({ image, width, height, title, titleId, eyebrow, byline, description, actions, badge, rotatingItems, className = '' }) {
  const reducedMotion = useMotionPreference()
  return (
    <section className={`clinic-hero ${className}`} id="inicio" aria-labelledby={titleId}>
      {image && <motion.img className="hero-photo" src={image} alt="" width={width} height={height} fetchPriority="high"
        initial={reducedMotion ? false : { opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.4 }} />}
      <div className="container clinic-hero-inner">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <motion.h1 id={titleId} {...entrance(reducedMotion, 0.08)}>{title}</motion.h1>
        <div className="hero-rule" aria-hidden="true"></div>
        <motion.p {...entrance(reducedMotion, 0.18)}>{description}</motion.p>
        {byline && <p className="hero-byline">{byline}</p>}
        <motion.div className="hero-actions" {...entrance(reducedMotion, 0.28)}>{actions}</motion.div>
        {rotatingItems?.length > 0 && <div className="hero-treatment-rotator" role="group" aria-label={`Tratamientos destacados: ${rotatingItems.join(', ')}`}>
          <div className="hero-treatment-viewport" aria-hidden="true">
            <div className="hero-treatment-track">
              {[...rotatingItems, rotatingItems[0]].map((item, index) => <span className="hero-treatment-name" key={`${item}-${index}`}>{item}</span>)}
            </div>
          </div>
        </div>}
      </div>
      {badge && <div className="hero-badge" aria-hidden="true"><img src={badge} alt="" /></div>}
    </section>
  )
}
