export const easeOut = [0.16, 1, 0.3, 1]
export const revealViewport = { once: true, amount: 0, margin: '0px 0px 48px 0px' }

// Start readable and fade in before entering view, without moving or dimming on entry.
export function sectionEntrance(reducedMotion, delay = 0) {
  return {
    initial: reducedMotion ? false : { opacity: 0.94 },
    whileInView: { opacity: 1 },
    viewport: revealViewport,
    transition: { duration: reducedMotion ? 0 : 0.3, delay: reducedMotion ? 0 : delay, ease: easeOut },
  }
}

export function entrance(reducedMotion, delay = 0) {
  return {
    initial: reducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : delay, ease: easeOut },
  }
}
