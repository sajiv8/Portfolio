import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal className={`section-heading section-heading-${align}`}>
      <motion.p className="section-eyebrow">{eyebrow}</motion.p>
      <motion.h2>{title}</motion.h2>
      {description ? <motion.p className="section-description">{description}</motion.p> : null}
    </Reveal>
  )
}
