import type { Variants } from "framer-motion";

export const bobbingKeyframes = {
  initial: { y: 0 },
  animate: {
    y: [-4, 0, -4],
    transition: { duration: 2.4, ease: "easeInOut", repeat: Infinity },
  },
};

export const heroContainer: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const heroCta: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.4 },
  },
};

export const projectCard: Variants = {
  hidden: { opacity: 0, y: 24, rotateX: -6 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const questCta: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
