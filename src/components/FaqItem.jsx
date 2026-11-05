import useMotionPreference from './useMotionPreference'
import { useId, useState } from 'react'
import { motion } from 'motion/react'
import { easeOut } from './motionSettings'

export default function FaqItem({ question, children, className = '', open: controlledOpen, onOpenChange, answerId }) {
  const [internalOpen, setInternalOpen] = useState(false)
  const open = controlledOpen ?? internalOpen
  const toggle = () => {
    if (controlledOpen === undefined) setInternalOpen(!open)
    onOpenChange?.(!open)
  }
  const id = useId()
  const regionId = answerId ?? `${id}-answer`
  const reducedMotion = useMotionPreference()
  return (
    <div className={`faq-item ${className}`}>
      <button className="faq-question" id={`${id}-question`} aria-expanded={open} aria-controls={regionId} onClick={toggle}>
        {question}
        <motion.svg viewBox="0 0 24 24" aria-hidden="true" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}><path d="M5 12h14m-7-7v14" /></motion.svg>
      </button>
      <motion.div id={regionId} className="faq-answer" role="region" aria-labelledby={`${id}-question`}
        aria-hidden={!open} inert={!open} initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.25, ease: easeOut }}>
        {children}
      </motion.div>
    </div>
  )
}
