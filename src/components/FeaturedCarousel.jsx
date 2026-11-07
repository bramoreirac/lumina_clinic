import { Children, useSyncExternalStore } from 'react'
import ContinuousCarousel from './ContinuousCarousel'

const mobileQuery = '(max-width: 599px)'
const subscribe = (callback) => {
  const media = window.matchMedia(mobileQuery)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}
const getMobile = () => window.matchMedia(mobileQuery).matches
export default function FeaturedCarousel({ children }) {
  const mobile = useSyncExternalStore(subscribe, getMobile, () => false)
  return mobile ? (
    <ContinuousCarousel id="featured-treatments" label="Tratamientos destacados" className="featured-carousel">
      {Children.map(children, (card) => <article className="featured-card">{card.props.children}</article>)}
    </ContinuousCarousel>
  ) : <div className="featured-grid">{children}</div>
}
