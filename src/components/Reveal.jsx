import useMotionPreference from './useMotionPreference'
import { useState } from 'react'
import { motion } from 'motion/react'
import { sectionEntrance } from './motionSettings'

const elements = { article: motion.article, div: motion.div, figure: motion.figure }

export default function Reveal({ as = 'article', children, className = '', ...props }) {
  const Element = elements[as]
  const reducedMotion = useMotionPreference()
  const [focused, setFocused] = useState(false)
  const { initial, whileInView, viewport, transition } = sectionEntrance(reducedMotion)
  return (
    <Element {...props} className={`${className} section-entrance`} initial={initial} animate={focused || reducedMotion ? whileInView : undefined}
      whileInView={whileInView} viewport={viewport} transition={focused ? { duration: 0 } : transition}
      onFocusCapture={() => setFocused(true)}>
      {children}
    </Element>
  )
}
