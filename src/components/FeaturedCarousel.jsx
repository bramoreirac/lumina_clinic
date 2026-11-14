import { Children, useSyncExternalStore } from 'react'
import ContinuousCarousel from './ContinuousCarousel'
import { ScrollRevealCard } from './ScrollRevealPrototype'

const mobileQuery = '(max-width: 599px)'
const subscribe = (callback) => {
  const media = window.matchMedia(mobileQuery)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}
const getMobile = () => window.matchMedia(mobileQuery).matches
export default function FeaturedCarousel({ children }) {
  const mobile = useSyncExternalStore(subscribe, getMobile, () => false)
  const cards = Children.map(children, (card) => <ScrollRevealCard>{card.props.children}</ScrollRevealCard>)
  return mobile ? (
    <ContinuousCarousel id="featured-treatments" label="Tratamientos destacados" className="featured-carousel" showPauseButton={false} resumeOnRelease>
      {cards}
    </ContinuousCarousel>
  ) : <div className="featured-grid">{cards}</div>
}
