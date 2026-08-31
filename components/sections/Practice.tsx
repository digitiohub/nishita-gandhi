"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  animate,
} from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: 10, suffix: "+", label: "Years in Practice" },
  { value: 100, suffix: "+", label: "Founders Advised" },
  { value: 3, suffix: "", label: "Tax Domains" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => setDisplay(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className="font-serif text-[44px] leading-none text-foreground">
      {display}
      {suffix}
    </span>
  );
}

export function Practice() {
  return (
    <section id="about" className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
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
            className="font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl"
          >
            More than filings.
            <br />
            One point of contact.
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-5 self-end text-base leading-[1.7] text-muted">
            <p>
              I work with founders who are building real things and don&rsquo;t
              have time to become tax experts.
            </p>
            <p>
              Over a decade I&rsquo;ve helped businesses at every stage stay
              compliant, pass audits, and actually understand their numbers,
              without the jargon.
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <Separator className="my-14" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-x-16 gap-y-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
