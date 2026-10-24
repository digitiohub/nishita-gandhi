import type { Variants } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Word rises from behind an overflow-hidden mask
export const wordReveal: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.7, ease } },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
