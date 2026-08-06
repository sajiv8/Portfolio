export const fadeUp = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

export const cardHover = {
  rest: { y: 0, rotate: 0, scale: 1 },
  hover: {
    y: -10,
    rotate: 0,
    scale: 1.05,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
}
