import { useSyncExternalStore } from 'react'
import { useReducedMotion } from 'motion/react'

const query = '(prefers-reduced-motion: reduce)'
const subscribe = (onChange) => {
  const media = window.matchMedia(query)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}
const getSnapshot = () => window.matchMedia(query).matches

export default function useMotionPreference() {
  const initialPreference = useReducedMotion()
  // Keep already-mounted components in sync with OS preference changes too.
  return useSyncExternalStore(subscribe, getSnapshot, () => Boolean(initialPreference))
}
