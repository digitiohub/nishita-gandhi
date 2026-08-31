import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const scaleSpring: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32, rotate: -4 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: -4,
    transition: { type: "spring", stiffness: 180, damping: 18 },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32, rotate: 3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 3,
    transition: { type: "spring", stiffness: 180, damping: 18 },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
