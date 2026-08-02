import { useState } from 'react'
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
  CertificatesSection,
  ContactSection,
  FooterSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from './sections/index.jsx'
import { downloadResume } from './utils/resume'

const sectionIds = ['home', 'about', 'skills', 'projects','certificates', 'contact']

function App() {
  useLenisSmoothScroll()
  const activeSection = useActiveSection(sectionIds)
  const progress = useScrollProgress()
  const { scrolled } = useScrollState()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToTopAndResume = () => {
    downloadResume()
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
        onJumpToResume={scrollToTopAndResume}
        onNavigate={() => setMenuOpen(false)}
      />

      <main>
        <HeroSection onDownloadResume={scrollToTopAndResume} hideScrollIndicator={progress > 0.12} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <FooterSection onBackToTop={handleBackToTop} />
    </div>
  )
}

export default App
