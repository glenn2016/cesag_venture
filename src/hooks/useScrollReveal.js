import { useEffect, useRef, useState } from 'react'

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true,
    ...options,
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (defaultOptions.triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!defaultOptions.triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return [ref, isVisible]
}