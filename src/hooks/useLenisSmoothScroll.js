import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

let lenisInstance = null

export function scrollToTopSmooth() {
  lenisInstance?.scrollTo(0)
}

export function useLenisSmoothScroll() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      return undefined
    }

    const lenis = new Lenis({
      lerp: 0.065,
      duration: 1.45,
      wheelMultiplier: 0.88,
      smoothWheel: true,
      smoothTouch: false,
    })

    lenisInstance = lenis

    let frameId = 0

    const raf = (time) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frameId)
      if (lenisInstance === lenis) {
        lenisInstance = null
      }
      lenis.destroy()
    }
  }, [reducedMotion])
}
