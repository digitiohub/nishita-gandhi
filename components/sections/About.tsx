"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { client } from "@/lib/tokens";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FACTS = [
  { label: "Qualified", value: `Chartered Accountant, ${client.qualifiedYear}` },
  { label: "Education", value: "B.Com, University of Mumbai" },
  { label: "Membership", value: "ACA, Member of ICAI" },
  { label: "Languages", value: client.languages.join(", ") },
  { label: "Software", value: "Tally, SAP and whatever your accounts run on" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="about" className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-[1400px]"
      >
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div variants={fadeUp} ref={ref} className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border border-accent-dark/30"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-surface-dark">
              <motion.div style={{ y: reduceMotion ? 0 : y }} className="absolute -inset-y-6 inset-x-0 max-lg:!transform-none">
                <Image
                  src="/images/nishita-full.jpg"
                  alt="Nishita Gandhi"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-[50%_30%]"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="font-serif text-[40px] leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Meet Nishita Gandhi.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-[1.7] text-muted lg:text-lg">
              <p>
                Nishita is a Chartered Accountant ({client.qualifiedYear}) and a
                commerce graduate of the University of Mumbai. She has worked as
                a partner in practice, signing audits, finalising accounts,
                preparing CMA data and attending assessments.
              </p>
              <p>
                She speaks English, Hindi and Gujarati, and personally reviews
                and signs off every engagement.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-1 border-t border-border-light sm:grid-cols-2 sm:gap-x-10">
              {FACTS.map((fact) => (
                <div key={fact.label} className="border-b border-border-light py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-accent-dark underline-offset-4 hover:underline"
            >
              Read the full profile
              <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
