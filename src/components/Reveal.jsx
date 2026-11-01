import useMotionPreference from './useMotionPreference'
import { useState } from 'react'
import { motion } from 'motion/react'
import { entrance, revealViewport } from './motionSettings'

const elements = { article: motion.article, figure: motion.figure }

export default function Reveal({ as = 'article', children, ...props }) {
  const Element = elements[as]
  const reducedMotion = useMotionPreference()
  const [focused, setFocused] = useState(false)
  const { initial, animate, transition } = entrance(reducedMotion)
  return (
    <Element {...props} initial={initial} animate={focused || reducedMotion ? animate : undefined}
      whileInView={animate} viewport={revealViewport} transition={focused ? { duration: 0 } : transition}
      onFocusCapture={() => setFocused(true)}>
      {children}
    </Element>
  )
}
