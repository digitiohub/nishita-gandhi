"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";

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

// Steps whose dot the line has reached at scroll progress p (0..1)
const stepsReached = (p: number) => STEPS.filter((_, i) => p >= i / (STEPS.length - 1) - 0.02).length;

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  // The line fills as the timeline travels from the lower edge of the screen to just past the middle
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  // Server render and no-JS show every step lit; scrolling takes over once hydrated
  const [reached, setReached] = useState(STEPS.length);
  useMotionValueEvent(scrollYProgress, "change", (p) => setReached(stepsReached(p)));

  const lit = reduceMotion ? STEPS.length : reached;
  const line = reduceMotion ? 1 : fill;

  return (
    <section id="process" className="bg-bg-dark px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <h2
          data-reveal
          className="mb-16 max-w-[640px] font-serif text-[40px] leading-[1.1] text-foreground-inv sm:text-5xl lg:text-6xl"
        >
          Four steps to a file you never worry about.
        </h2>

        <ol ref={ref} className="relative grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Static track keeps the timeline readable with animation off */}
          <div aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-px bg-border-dark lg:left-3 lg:right-0 lg:top-[11px] lg:h-px lg:w-auto" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: line }}
            className="absolute bottom-3 left-[11px] top-3 w-px origin-top bg-accent lg:hidden"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleX: line }}
            className="absolute left-3 right-0 top-[11px] hidden h-px origin-left bg-accent lg:block"
          />

          {STEPS.map((s, i) => {
            const on = i < lit;
            return (
              <li key={s.title} className="group relative pl-12 lg:pl-0 lg:pt-14">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border bg-bg-dark transition-[border-color,box-shadow,transform] duration-500",
                    on ? "scale-100 border-accent shadow-[0_0_0_6px_rgba(94,196,182,0.12)]" : "scale-90 border-border-dark"
                  )}
                >
                  <span className={cn("h-2 w-2 rounded-full transition-colors duration-500", on ? "bg-accent" : "bg-border-dark")} />
                </span>
                <div
                  className={cn(
                    "rounded-lg border border-transparent transition-[opacity,translate,border-color] duration-500 ease-out group-hover:border-accent/40 lg:-m-5 lg:p-5",
                    on ? "opacity-100" : "translate-y-2 opacity-40"
                  )}
                >
                  <h3 className="font-serif text-3xl text-foreground-inv">{s.title}</h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-[1.65] text-muted-inv">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
