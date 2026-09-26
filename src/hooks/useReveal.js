import { useEffect, useRef } from 'react'

/**
 * Adds the `.is-visible` class to the element once it scrolls into view.
 * Pair with the `.reveal` CSS class for a fade/slide-up entrance.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
