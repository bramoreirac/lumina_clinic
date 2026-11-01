import useMotionPreference from './useMotionPreference'
import { motion } from 'motion/react'
import { entrance } from './motionSettings'

export default function Hero({ image, width, height, title, titleId, description, actions, className = '' }) {
  const reducedMotion = useMotionPreference()
  return (
    <section className={`clinic-hero ${className}`} id="inicio" aria-labelledby={titleId}>
      <motion.img className="hero-photo" src={image} alt="" width={width} height={height} fetchPriority="high"
        initial={reducedMotion ? false : { opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.4 }} />
      <div className="container clinic-hero-inner">
        <motion.h1 id={titleId} {...entrance(reducedMotion, 0.08)}>{title}</motion.h1>
        <div className="hero-rule" aria-hidden="true"></div>
        <motion.p {...entrance(reducedMotion, 0.18)}>{description}</motion.p>
        <motion.div className="hero-actions" {...entrance(reducedMotion, 0.28)}>{actions}</motion.div>
      </div>
    </section>
  )
}
