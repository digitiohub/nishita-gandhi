"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg-dark pb-20 pt-28 lg:pb-28 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F6F3EC 1px, transparent 1px), linear-gradient(to bottom, #F6F3EC 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-inv">
              Chartered Accountant &middot; Mumbai
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl leading-[1.08] text-foreground-inv sm:text-6xl lg:text-[68px]"
          >
            Compliance,
            <br />
            handled.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[46ch] text-lg leading-[1.6] text-muted-inv"
          >
            Direct tax, GST, and audit, handled by one advisor who tells you
            what matters and then does it.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Book a Call</a>
            </Button>
            <Button size="lg" variant="outline-inverse" asChild>
              <a href="#services">Work</a>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-[380px]">
          <div className="pointer-events-none absolute -inset-4 border border-accent/25" aria-hidden="true" />

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[9/16] w-full overflow-hidden bg-surface-dark"
          >
            <Image
              src="/images/nishita-full.jpg"
              alt="Nishita Gandhi, Chartered Accountant"
              width={1080}
              height={1920}
              priority
              sizes="(max-width: 1024px) 320px, 380px"
              className="h-full w-full object-contain"
            />
          </motion.div>

          <motion.div
            variants={slideInLeft}
            className="absolute -left-6 bottom-10 z-[2] hidden max-w-[210px] sm:block"
          >
            <Card className="border border-border-dark bg-bg-dark px-4 py-3.5 shadow-[0_20px_44px_-16px_rgba(0,0,0,0.5)]">
              <p className="font-sans text-[13px] italic leading-snug text-foreground-inv">
                &ldquo;She cleared 3 years of GST backlog in weeks.&rdquo;
              </p>
              <p className="mt-2 text-[11px] text-muted-inv">Rohan M. &middot; SaaS Founder</p>
            </Card>
          </motion.div>

          <motion.div
            variants={slideInRight}
            className="absolute -right-6 -top-6 z-[2] hidden sm:block"
          >
            <Card className="border border-border-dark bg-bg-dark px-4 py-3.5 text-center shadow-[0_20px_44px_-16px_rgba(0,0,0,0.5)]">
              <div className="flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} weight="fill" className="text-accent" />
                ))}
              </div>
              <p className="mt-2 font-serif text-3xl leading-none text-foreground-inv">
                10 Years
              </p>
              <p className="mt-1 text-[11px] text-muted-inv">Experience</p>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
