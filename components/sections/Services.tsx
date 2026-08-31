"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SERVICES = [
  {
    title: "Direct Tax Compliance",
    body: "Income tax returns, TDS and advance tax, filed on time, every time.",
  },
  {
    title: "GST & Indirect Tax",
    body: "Registration to monthly filings, notices handled, reconciliation kept clean.",
  },
  {
    title: "Audit & Assurance",
    body: "Statutory and internal audits done right, audit-ready all year.",
  },
  {
    title: "Financial Advisory",
    body: "CFO-level thinking without the full-time hire. Cash flow and budgets that fit your stage.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg-dark px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative mx-auto max-w-[1400px]"
      >
        <motion.div variants={fadeUp} className="mb-16 flex items-end justify-between gap-6">
          <h2 className="font-serif text-4xl leading-[1.1] text-foreground-inv sm:text-5xl lg:text-6xl">
            What I handle.
          </h2>
          <p className="hidden max-w-[26ch] text-sm text-muted-inv lg:block">
            Four disciplines. One advisor, start to finish.
          </p>
        </motion.div>

        <div>
          {SERVICES.map((service, i) => (
            <motion.a
              key={service.title}
              href="#contact"
              variants={fadeUp}
              className="group grid grid-cols-1 items-center gap-3 border-t border-border-dark py-8 transition-colors last:border-b hover:bg-white/[0.02] sm:grid-cols-[48px_1.4fr_1.6fr_32px] sm:gap-8 sm:px-2"
            >
              <span className="text-sm text-muted-inv">{`0${i + 1}`}</span>
              <h3 className="font-serif text-2xl text-foreground-inv sm:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-[48ch] text-sm leading-[1.6] text-muted-inv">
                {service.body}
              </p>
              <ArrowUpRight
                size={20}
                className="hidden shrink-0 text-muted-inv transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent sm:block"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
