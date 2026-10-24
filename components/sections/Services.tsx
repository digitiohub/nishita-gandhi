"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  GlobeHemisphereWest,
  ListChecks,
  Percent,
  Receipt,
  Stamp,
} from "@phosphor-icons/react";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SERVICES = [
  {
    icon: Receipt,
    title: "Income Tax",
    body: "Returns for individuals, firms and companies. Capital gains, advance tax and planning, notices and appeals.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "NRI & International Tax",
    body: "NRI returns, property sales and lower TDS certificates, treaty relief, Form 15CA/15CB and payments to non-residents.",
  },
  {
    icon: Percent,
    title: "GST",
    body: "Registration, monthly and annual returns, credit reconciliation, notices, assessments, appeals and refunds.",
  },
  {
    icon: ListChecks,
    title: "Audit & Assurance",
    body: "Statutory audit of companies and LLPs, tax audit, internal audit and stock audit, under AS or Ind AS with CARO reporting.",
  },
  {
    icon: Stamp,
    title: "Company & Business Compliance",
    body: "Company, LLP and partnership registration, business registrations, and every annual and event-based ROC filing.",
  },
  {
    icon: Calculator,
    title: "Accounts, Payroll & Bank Finance",
    body: "Bookkeeping, finalisation of accounts, payroll, TDS, CMA data and project reports for bank proposals, and CA certificates.",
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
        <motion.div variants={fadeUp} className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-inv">
                02 &middot; Services
              </span>
            </div>
            <h2 className="font-serif text-[40px] leading-[1.1] text-foreground-inv sm:text-5xl lg:text-6xl">
              What we handle.
            </h2>
          </div>
          <p className="max-w-[36ch] text-base leading-[1.6] text-muted-inv">
            Fifteen services across six practice areas, with one Chartered
            Accountant accountable from start to finish.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <motion.li key={title} variants={fadeUp}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-lg border border-border-dark bg-surface-dark/60 p-6 transition-[transform,border-color,box-shadow,background-color] active:scale-[0.985] sm:p-7 duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-dark hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] focus-visible:-translate-y-1 focus-visible:border-accent/40 motion-reduce:hover:translate-y-0 lg:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent transition-transform duration-200 group-hover:-translate-y-[3px] group-focus-visible:-translate-y-[3px]">
                  <Icon size={22} weight="light" />
                </span>
                <h3 className="mt-6 font-serif text-[22px] leading-tight sm:mt-8 sm:text-2xl text-foreground-inv">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-[1.65] text-muted-inv">{body}</p>
                <span className="mt-6 inline-flex items-center gap-2 sm:mt-8 text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv transition-colors group-hover:text-accent group-focus-visible:text-accent">
                  Enquire
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
