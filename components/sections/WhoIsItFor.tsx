"use client";

import { motion } from "framer-motion";
import {
  AirplaneTilt,
  Buildings,
  HardHat,
  RocketLaunch,
  Storefront,
  UsersThree,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const AUDIENCES = [
  { icon: UsersThree, label: "Salaried professionals, investors and families" },
  { icon: AirplaneTilt, label: "NRIs and people moving to or from India" },
  { icon: Storefront, label: "Proprietors, traders and family businesses" },
  { icon: Buildings, label: "Private limited companies and LLPs" },
  { icon: HardHat, label: "Contractors and project-based businesses" },
  { icon: RocketLaunch, label: "Startups setting up for the first time" },
];

export function WhoIsItFor() {
  return (
    <section id="clients" className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <motion.div variants={fadeUp} className="lg:sticky lg:top-32 lg:self-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent-dark" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              03 &middot; Who We Work With
            </span>
          </div>
          <h2 className="font-serif text-[40px] leading-[1.1] text-foreground sm:text-5xl">
            Individuals, families and businesses at every stage.
          </h2>
          <p className="mt-6 max-w-[42ch] text-base leading-[1.7] text-muted">
            Whether it&rsquo;s a single return or a full year of company
            compliance, you get the same direct attention.
          </p>
          <p className="mt-8 font-serif text-xl italic text-accent-dark">
            If that&rsquo;s you, let&rsquo;s talk.
          </p>
          <Button variant="outline" className="mt-6" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {AUDIENCES.map(({ icon: Icon, label }) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="group flex items-start gap-4 rounded-lg border border-border-light bg-white/50 p-5 transition-colors duration-200 sm:p-6 hover:border-accent-dark/40 hover:bg-white"
            >
              <Icon
                size={28}
                weight="light"
                className="shrink-0 text-accent-dark transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              <p className="text-base leading-[1.5] text-foreground">{label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
