import { motion } from 'framer-motion'

const drift = {
  animate: {
    y: [0, -18, 0],
    x: [0, 12, 0],
    transition: { duration: 30, repeat: Infinity, ease: 'easeInOut' },
  },
}

export function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="background-grid" />
      <div className="background-noise" />
      <motion.div className="background-glow glow-one" variants={drift} animate="animate" />
      <motion.div className="background-glow glow-two" variants={drift} animate="animate" />
      <motion.div className="background-glow glow-three" variants={drift} animate="animate" />
      <div className="background-radial" />
    </div>
  )
}
