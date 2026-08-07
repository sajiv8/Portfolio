import { motion } from 'framer-motion'

export function ScrollIndicator({ hidden }) {
  return (
    <motion.a
      className="scroll-indicator"
      href="#about"
      aria-label="Scroll to about section"
      animate={hidden ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <span className="scroll-indicator-mouse">
        <span className="scroll-indicator-wheel" />
      </span>
      <span className="scroll-indicator-text">Scroll</span>
    </motion.a>
  )
}
