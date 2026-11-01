import useMotionPreference from './useMotionPreference'
import { motion } from 'motion/react'

export default function PressLink({ children, ...props }) {
  const reducedMotion = useMotionPreference()
  return <motion.a {...props} whileTap={reducedMotion ? undefined : { scale: 0.98 }} transition={{ duration: 0.15 }}>{children}</motion.a>
}
