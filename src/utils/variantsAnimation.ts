export const fadeInUpVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

export const variantsChild = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const sidebar = {
  open: {
    width: '60vw',
    transition: {
      type: 'tween',
      stiffness: 400,
      restDelta: 2,
    },
  },
  closed: {
    width: 0,
    transition: {
      delay: 0.5,
      type: 'tween',
      stiffness: 400,
      damping: 40,
    },
  },
};
