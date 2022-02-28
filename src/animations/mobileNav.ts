export const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delay: 0.3 } },
};
export const childrenVariants = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1 },
};
