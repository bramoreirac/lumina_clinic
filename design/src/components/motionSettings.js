export const easeOut = [0.16, 1, 0.3, 1]
export const revealViewport = { once: true, amount: 0.15 }

// Keep content visible before it enters view.
export function sectionEntrance(reducedMotion, delay = 0) {
  return {
    initial: false,
    whileInView: reducedMotion ? { opacity: 1, y: 0 } : { opacity: [0.85, 1], y: [12, 0] },
    viewport: revealViewport,
    transition: { duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : delay, ease: easeOut },
  }
}

export function entrance(reducedMotion, delay = 0) {
  return {
    initial: reducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : delay, ease: easeOut },
  }
}
