import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Reveal({ children, className = '', delay = 0, y = 26 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.18 })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.985 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}
