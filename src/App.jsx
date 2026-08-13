import { useState, useEffect } from 'react'
import { BackgroundEffects } from './components/BackgroundEffects'
import { CursorFollower } from './components/CursorFollower'
import { Navbar } from './components/Navbar'
import { ProgressBar } from './components/ProgressBar'
import { useActiveSection } from './hooks/useActiveSection'
import { useLenisSmoothScroll } from './hooks/useLenisSmoothScroll'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useScrollState } from './hooks/useScrollState'
import { scrollToTopSmooth } from './hooks/useLenisSmoothScroll'

import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from './sections/index.jsx'

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'certificates',
  'contact'
]

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  // Always start from the top when the page loads/reloads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useLenisSmoothScroll()

  const activeSection = useActiveSection(sectionIds)
  const progress = useScrollProgress()
  const { scrolled } = useScrollState()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Sajiv_Rajh.pdf'
    link.download = 'Sajiv_Rajh.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleBackToTop = () => {
    scrollToTopSmooth()
  }

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-shell">

      <BackgroundEffects />

      <ProgressBar progress={progress} />

      <CursorFollower />

      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        theme={theme}
        onToggleMenu={() => setMenuOpen((current) => !current)}
        onToggleTheme={handleToggleTheme}
        onJumpToResume={handleDownloadResume}
        onNavigate={() => setMenuOpen(false)}
      />

      <main>
        <HeroSection 
          onDownloadResume={handleDownloadResume} 
          hideScrollIndicator={progress > 0.12} 
        />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ContactSection />
      </main>

      <FooterSection onBackToTop={handleBackToTop} />

    </div>
  )
}

export default App