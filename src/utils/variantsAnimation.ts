import { Variants } from 'framer-motion';

export const fadeInUpVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.3,
    },
  },
};

export const variantsChild: Variants = {
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

export const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: (linkClicked: boolean) => ({
    transition: { staggerChildren: linkClicked ? 0 : 0.05, staggerDirection: -1 },
  }),
};

export const sidebar: Variants = {
  open: {
    width: '60vw',
    transition: {
      type: 'tween',
      stiffness: 400,
      restDelta: 2,
    },
  },
  closed: (linkClicked: boolean) => ({
    width: 0,
    transition: {
      delay: linkClicked ? 0.1 : 0.5,
      type: 'tween',
      stiffness: 400,
      damping: 40,
    },
  }),
};
