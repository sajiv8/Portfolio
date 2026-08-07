import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      const scrollTop = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = totalHeight > 0 ? Math.min(scrollTop / totalHeight, 1) : 0
      setProgress(nextProgress)
      frame = 0
    }

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
