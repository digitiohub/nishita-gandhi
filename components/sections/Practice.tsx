"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: 10, suffix: "+", label: "Years in audit & tax practice" },
  { value: 15, suffix: "", label: "Services across six practice areas" },
  { value: 3, suffix: "", label: "Languages: English, Hindi, Gujarati" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  // Start at the real value so server-rendered HTML never shows 0
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(value);

  useMotionValueEvent(rounded, "change", (latest) => setDisplay(latest));

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(motionValue, [0, value], {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, motionValue, reduceMotion]);

  return (
    <span ref={ref} className="font-serif text-[44px] leading-none sm:text-[56px] text-foreground tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Practice() {
  return (
    <section id="practice" className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-[1400px]"
      >
        <motion.div variants={fadeUp} className="mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-accent-dark" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            01 &middot; The Practice
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[40px] leading-[1.1] text-foreground sm:text-5xl lg:text-6xl"
          >
            One Chartered Accountant.
            <br />
            <span className="italic text-accent-dark">Your whole file.</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-5 self-end text-base leading-[1.7] text-muted">
            <p>
              Income tax, GST, audit and company compliance, handled by one
              Chartered Accountant who personally reviews and signs off every
              engagement.
            </p>
            <p>
              Based in Mulund West, working with clients across Mumbai, Thane
              and Navi Mumbai, and with NRIs abroad through online document
              sharing and video calls.
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <Separator className="my-14" />
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l border-border-light pl-6">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 max-w-[22ch] text-sm leading-[1.5] text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
