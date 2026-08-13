import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { siteData } from '../utils/siteData'

export function Navbar({
  activeSection,
  scrolled,
  menuOpen,
  theme,
  onToggleMenu,
  onToggleTheme,
  onJumpToResume,
  onNavigate,
}) {
  const isDark = theme === 'dark'

  return (
    <motion.header
      className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner container">
        <a className="brand-mark" href="#home" aria-label={`${siteData.name} home`}>
          <span className="brand-mark-dot" />
          <span>{siteData.name}</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {siteData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.replace('#', '') ? 'is-active' : ''}`}
              onClick={onNavigate}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            aria-pressed={isDark}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb">{isDark ? <FiMoon /> : <FiSun />}</span>
            </span>
          </button>

          <button type="button" className="resume-button" onClick={onJumpToResume}>
            Resume <RiArrowRightUpLine />
          </button>
          <button type="button" className="menu-toggle" onClick={onToggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-menu container"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {siteData.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="mobile-link" onClick={onNavigate}>
                <span>{link.label}</span>
                <RiArrowRightUpLine />
              </a>
            ))}

            <button
              type="button"
              className={`theme-toggle theme-toggle-mobile ${isDark ? 'is-dark' : ''}`}
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              aria-pressed={isDark}
            >
              <span className="theme-toggle-track" aria-hidden="true">
                <span className="theme-toggle-thumb">{isDark ? <FiMoon /> : <FiSun />}</span>
              </span>
              <span>{isDark ? 'Dark theme' : 'Light theme'}</span>
            </button>

            <button type="button" className="resume-button mobile-resume" onClick={onJumpToResume}>
              Resume <RiArrowRightUpLine />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
