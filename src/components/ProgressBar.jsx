import { motion } from 'framer-motion'

export function ProgressBar({ progress }) {
  return <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
}
