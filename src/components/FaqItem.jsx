import useMotionPreference from './useMotionPreference'
import { useId, useState } from 'react'
import { motion } from 'motion/react'
import { easeOut } from './motionSettings'

export default function FaqItem({ question, children, className = '' }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const reducedMotion = useMotionPreference()
  return (
    <div className={`faq-item ${className}`}>
      <button className="faq-question" id={`${id}-question`} aria-expanded={open} aria-controls={`${id}-answer`} onClick={() => setOpen(!open)}>
        {question}
        <motion.svg viewBox="0 0 24 24" aria-hidden="true" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}><path d="M5 12h14m-7-7v14" /></motion.svg>
      </button>
      <motion.div id={`${id}-answer`} className="faq-answer" role="region" aria-labelledby={`${id}-question`}
        aria-hidden={!open} inert={!open} initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.25, ease: easeOut }}>
        {children}
      </motion.div>
    </div>
  )
}
