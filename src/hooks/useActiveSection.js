import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (!visibleEntries.length) {
          return
        }

        const mostVisibleEntry = visibleEntries.reduce((current, next) =>
          next.intersectionRatio > current.intersectionRatio ? next : current,
        )

        if (mostVisibleEntry?.target?.id) {
          setActiveSection(mostVisibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.4, 0.6],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
