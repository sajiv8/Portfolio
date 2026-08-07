import { useEffect, useState } from 'react'

export function useScrollState() {
  const [scrollState, setScrollState] = useState({ scrolled: false, direction: 1 })

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      setScrollState({
        scrolled: currentY > 16,
        direction: currentY > lastY ? 1 : -1,
      })
      lastY = currentY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollState
}
