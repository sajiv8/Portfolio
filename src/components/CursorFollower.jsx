import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function CursorFollower() {
  const reducedMotion = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.4 })

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(media.matches && !reducedMotion)

    update()
    media.addEventListener('change', update)

    const onMove = (event) => {
      x.set(event.clientX - 16)
      y.set(event.clientY - 16)
    }

    if (media.matches && !reducedMotion) {
      window.addEventListener('pointermove', onMove)
    }

    return () => {
      media.removeEventListener('change', update)
      window.removeEventListener('pointermove', onMove)
    }
  }, [reducedMotion, x, y])

  if (!enabled) {
    return null
  }

  return (
    <motion.div
      className="cursor-follower"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  )
}
