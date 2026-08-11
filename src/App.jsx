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

  return (
    <div className="app-shell">

      <BackgroundEffects />

      <ProgressBar progress={progress} />

      <CursorFollower />

      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((current) => !current)}
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