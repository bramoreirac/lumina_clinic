import { Children, cloneElement, isValidElement, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import useMotionPreference from './useMotionPreference'

function RevealWord({ word, index, count, progress }) {
  const start = (index / count) * 0.55
  const opacity = useTransform(progress, [start, start + 0.45], [0.35, 1])
  const filter = useTransform(progress, [start, start + 0.45], ['blur(3px)', 'blur(0px)'])
  return <motion.span style={{ opacity, filter }}>{word}</motion.span>
}

function textOf(nodes) {
  return Children.toArray(nodes).map(node => typeof node === 'string' || typeof node === 'number' ? String(node) : isValidElement(node) ? node.type === 'br' ? ' ' : textOf(node.props.children) : '').join('')
}

export function ScrollRevealHeading({ id, text, children, className, end = 'end 45%' }) {
  const ref = useRef(null)
  const reducedMotion = useMotionPreference()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', end] })
  const content = text ?? children
  const label = textOf(content).replace(/\s+/g, ' ').trim()
  const count = label.split(' ').length
  let index = 0
  function render(nodes) {
    return Children.map(nodes, node => {
      if (typeof node === 'string') return node.split(/(\s+)/).map((part, i) => /\s+/.test(part) ? part : part ? <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}><RevealWord word={part} index={index++} count={count} progress={scrollYProgress} /></span> : null)
      if (isValidElement(node) && node.type !== 'br') return cloneElement(node, {}, render(node.props.children))
      return node
    })
  }
  return <h2 id={id} className={className} ref={ref} aria-label={label}>{reducedMotion ? content : <span aria-hidden="true">{render(content)}</span>}</h2>
}

export function ScrollRevealCard({ children, as = 'article', className = 'featured-card' }) {
  const ref = useRef(null)
  const reducedMotion = useMotionPreference()
  const [focused, setFocused] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 65%'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const Element = motion[as]
  return <Element ref={ref} className={className} style={{ opacity: reducedMotion || focused ? 1 : opacity }} onFocusCapture={() => setFocused(true)}>{children}</Element>
}
