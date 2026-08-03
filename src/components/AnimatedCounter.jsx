import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1200 }) {
  const reducedMotion = usePrefersReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  useEffect(() => {
    if (!inView || reducedMotion) {
      return undefined
    }

    let frame = 0
    const start = performance.now()

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setDisplayValue(Math.round(value * progress))

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [duration, inView, reducedMotion, value])

  return (
    <span ref={ref}>
      {prefix}
      {reducedMotion ? value : displayValue}
      {suffix}
    </span>
  )
}
