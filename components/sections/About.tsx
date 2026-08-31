"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SealCheck } from "@phosphor-icons/react";

import { Separator } from "@/components/ui/separator";
import { client } from "@/lib/tokens";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CREDENTIALS = ["ICAI Registered", "GST Practitioner", "Statutory Auditor"];

const FOCUS_LEFT = client.specializations.slice(0, 2);
const FOCUS_RIGHT = client.specializations.slice(2);

export function About() {
  return (
    <section id="founder" className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-[1400px]"
      >
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div variants={fadeUp} className="relative aspect-[9/16] w-full max-w-[440px] overflow-hidden bg-surface-dark">
            <Image
              src="/images/nishita-full.jpg"
              alt="Nishita Gandhi, Chartered Accountant"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-contain"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
              Nishita Gandhi
            </h2>

            <Separator className="my-8" />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <p className="text-base leading-[1.7] text-muted">
                Founding practitioner specialising in direct and indirect tax,
                statutory audit, and founder-friendly financial advisory.
                ICAI registered, ten years in practice.
              </p>
              <p className="text-base leading-[1.7] text-muted">
                Works directly with founders through every stage, from
                incorporation and early compliance to audits, notices, and
                fundraising diligence.
              </p>
            </div>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Areas of Focus
            </p>
            <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
              {[...FOCUS_LEFT, ...FOCUS_RIGHT].map((item) => (
                <div key={item} className="flex items-start gap-2.5 border-t border-border-light py-3 text-sm text-foreground">
                  <SealCheck size={16} weight="fill" className="mt-0.5 shrink-0 text-accent-dark" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {CREDENTIALS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border-light px-4 py-1.5 text-xs font-medium text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
