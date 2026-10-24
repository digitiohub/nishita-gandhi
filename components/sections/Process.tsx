"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

import { ease, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Talk",
    body: "Tell us what you need, what's already been filed and what the deadline is.",
  },
  {
    title: "Review",
    body: "We map what's done, what's pending and what's at risk, before anything else.",
  },
  {
    title: "Fix",
    body: "Backlogs cleared, records organised, and a compliance calendar set for your year.",
  },
  {
    title: "Stay ahead",
    body: "Filings on schedule, a reminder before every due date, and one person to call.",
  },
];

const LINE_DURATION = 1.4;
const stepDelay = (i: number) => 0.2 + (i / (STEPS.length - 1)) * LINE_DURATION * 0.85;

const lineFill: Variants = {
  hidden: { scaleX: 0, scaleY: 0 },
  visible: { scaleX: 1, scaleY: 1, transition: { duration: LINE_DURATION, ease: "easeInOut", delay: 0.2 } },
};

// Each dot lights up as the line reaches it
const dot: Variants = {
  hidden: { scale: 0.5, opacity: 0.3 },
  visible: (i: number) => ({ scale: 1, opacity: 1, transition: { duration: 0.4, ease, delay: stepDelay(i) } }),
};

const step: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: stepDelay(i) } }),
};

export function Process() {
  return (
    <section id="process" className="bg-bg-dark px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-16 max-w-[640px]"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-[40px] leading-[1.1] text-foreground-inv sm:text-5xl lg:text-6xl">
            Four steps to a file you never worry about.
          </motion.h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8"
        >
          {/* Static track keeps the timeline readable with animation off */}
          <div aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-px bg-border-dark lg:left-3 lg:right-0 lg:top-[11px] lg:h-px lg:w-auto" />
          <motion.div
            aria-hidden="true"
            variants={lineFill}
            className="absolute bottom-3 left-[11px] top-3 w-px origin-top bg-accent lg:hidden"
          />
          <motion.div
            aria-hidden="true"
            variants={lineFill}
            className="absolute left-3 right-0 top-[11px] hidden h-px origin-left bg-accent lg:block"
          />

          {STEPS.map((s, i) => (
            <Step key={s.title} {...s} i={i} />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function Step({ title, body, i }: { title: string; body: string; i: number }) {
  const ref = useRef<HTMLLIElement>(null);
  // Stacked on mobile, the step crossing mid-screen is the active one; desktop shows all four, so hover only
  const active = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <li ref={ref} className="group relative pl-12 lg:pl-0 lg:pt-14">
      <motion.span
        aria-hidden="true"
        custom={i}
        variants={dot}
        className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-bg-dark"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </motion.span>
      <motion.div
        custom={i}
        variants={step}
        className="rounded-lg border border-transparent transition-colors duration-200 group-hover:border-accent/40 lg:-m-5 lg:p-5"
      >
        <h3
          className={cn(
            "font-serif text-3xl text-foreground-inv transition-colors duration-300 lg:group-hover:text-accent",
            active && "max-lg:text-accent"
          )}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-[34ch] text-sm leading-[1.65] text-muted-inv">{body}</p>
      </motion.div>
    </li>
  );
}
