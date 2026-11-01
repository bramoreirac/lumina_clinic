document.documentElement.classList.add('js')

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#navigation')
const mobileQuery = window.matchMedia('(max-width: 799px)')

function setMenu(open, returnFocus = false) {
  menuButton.setAttribute('aria-expanded', String(open))
  navigation.classList.toggle('is-open', open)
  if (returnFocus) menuButton.focus()
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true')
})

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a')
  if (!link || !mobileQuery.matches) return
  setMenu(false)
  const target = document.querySelector(link.hash)
  if (target) {
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileQuery.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false, true)
  }
})

mobileQuery.addEventListener('change', () => setMenu(false))

const processList = document.querySelector('.process-list')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

if (processList && !reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      processList.classList.add('is-animated')
      observer.disconnect()
    }
  }, { threshold: 0.2 })
  observer.observe(processList)
}
