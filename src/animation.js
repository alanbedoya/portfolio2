export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 400,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const fadeAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.75 },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1.1,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
};

export const lineAnimation = {
  hidden: { width: '0%' },
  show: {
    width: '100%',
    transition: { duration: 1 },
  },
};
