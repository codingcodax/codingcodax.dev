export const transition = {
  type: 'spring',
  stiffness: 200,
  damping: 10,
};

export const whileTap = {
  scale: 0.95,
  rotate: 15,
};

export const moonVariants = {
  initial: { scale: 0.6, rotate: 90 },
  animate: { scale: 1, rotate: 0, transition },
  whileTap,
};

export const raysVariants = {
  initial: { rotate: 45 },
  animate: { rotate: 0, transition },
};

export const coreVariants = {
  initial: { scale: 1.5 },
  animate: { scale: 1, transition },
};
