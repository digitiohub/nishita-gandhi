"use client";

import { motion } from "framer-motion";
import { Certificate, ChartLineUp, ListChecks, Translate } from "@phosphor-icons/react";

import { client } from "@/lib/tokens";
import { fadeUp } from "@/lib/motion";

const ITEMS = [
  { icon: Certificate, label: `Chartered Accountant since ${client.qualifiedYear}` },
  { icon: ChartLineUp, label: `${client.experienceYears}+ years in audit & tax practice` },
  { icon: ListChecks, label: "Ind AS · CARO · GST" },
  { icon: Translate, label: client.languages.join(" · ") },
];

export function TrustBar() {
  return (
    <div className="border-t border-border-dark bg-bg-dark px-6 py-8 lg:px-10">
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } } }}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border-dark"
      >
        {ITEMS.map(({ icon: Icon, label }) => (
          <motion.li
            key={label}
            variants={fadeUp}
            className="flex items-center gap-3 text-sm text-muted-inv lg:justify-center lg:px-4 lg:first:justify-start lg:first:pl-0 lg:last:justify-end lg:last:pr-0"
          >
            <Icon size={20} weight="light" className="shrink-0 text-accent" />
            {label}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
