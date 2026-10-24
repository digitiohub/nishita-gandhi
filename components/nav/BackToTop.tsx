"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setVisible(latest > 1200));

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border-dark bg-bg-dark/90 text-foreground-inv shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
        >
          <ArrowUp size={18} weight="bold" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
