"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    body: "30 minutes. You explain the business. I listen for the gaps.",
  },
  {
    number: "02",
    title: "Compliance Review",
    body: "I map what's filed, what's missing, and what's at risk. Full picture.",
  },
  {
    number: "03",
    title: "Clean-Up & Setup",
    body: "Backlogs cleared, systems set, team briefed if needed.",
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    body: "Monthly cadence. Proactive nudges. One contact. Always.",
  },
];

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="flex h-[340px] w-[82vw] shrink-0 flex-col justify-between border border-border-dark bg-surface-dark p-8 sm:w-[380px]">
      <span className="font-serif text-5xl text-accent">{step.number}</span>
      <div>
        <h3 className="font-serif text-2xl text-foreground-inv">{step.title}</h3>
        <p className="mt-3 text-sm leading-[1.6] text-muted-inv">{step.body}</p>
      </div>
    </div>
  );
}

export function Process() {
  const shouldReduceMotion = useReducedMotion();
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackDistance, setTrackDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -trackDistance]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setTrackDistance(Math.max(el.scrollWidth - window.innerWidth, 0));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  if (shouldReduceMotion) {
    return (
      <section id="process" className="bg-bg-dark px-6 py-24 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-[1400px]"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl text-foreground-inv sm:text-5xl">
            How we work together.
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={fadeUp}>
                <StepCard step={step} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="process" ref={targetRef} className="relative bg-bg-dark" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20">
        <div className="mx-auto mb-12 w-full max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-serif text-4xl text-foreground-inv sm:text-5xl">
            How we work together.
          </h2>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 pl-6 lg:pl-10">
          {STEPS.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
          <div className="w-6 shrink-0 lg:w-10" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
