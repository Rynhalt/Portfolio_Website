export const bobbingKeyframes = {
  initial: { y: 0 },
  animate: {
    y: [-4, 0, -4],
    transition: { duration: 2.4, ease: "easeInOut", repeat: Infinity },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
