"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, SealCheck } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { client } from "@/lib/tokens";
import { ease, fadeIn, fadeUp, staggerContainer, wordReveal } from "@/lib/motion";

const HEADLINE = ["Compliance,", "handled."];

export function Hero() {
  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${pointerX}px ${pointerY}px, rgba(94,196,182,0.09), transparent 45%)`;

  return (
    <section
      id="top"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        pointerX.set(e.clientX - rect.left);
        pointerY.set(e.clientY - rect.top);
      }}
      className="relative overflow-hidden bg-bg-dark pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F6F3EC 1px, transparent 1px), linear-gradient(to bottom, #F6F3EC 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
        aria-hidden="true"
      />
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 hidden motion-safe:[@media(hover:hover)_and_(pointer:fine)]:block"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-10"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-inv">
              Chartered Accountant &middot; {client.location}
            </span>
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            className="font-serif text-[clamp(2.5rem,13.5vw,6rem)] leading-[1.02] text-foreground-inv"
          >
            {HEADLINE.map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={wordReveal} className={i === 1 ? "block italic text-accent" : "block"}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[52ch] text-base leading-[1.65] sm:text-lg text-muted-inv"
          >
            Nishita Gandhi qualified as a Chartered Accountant in 2015 and has
            spent the decade since signing audits, finalising accounts and
            handling income tax, GST and company compliance for individuals and
            businesses.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <a href="#contact">
                Get in Touch
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                />
              </a>
            </Button>
            <Button size="lg" variant="outline-inverse" className="w-full sm:w-auto" asChild>
              <a href="#services">See Services</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease, delay: 0.25 } },
          }}
          className="relative mx-auto w-full max-w-[400px]"
        >
          <div
            className="pointer-events-none absolute -inset-3 rounded-[14px] border border-accent/25 sm:-inset-4"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-dark">
            <Image
              src="/images/nishita-full.jpg"
              alt="Nishita Gandhi, Chartered Accountant"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover object-[50%_22%]"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-dark/70 to-transparent"
              aria-hidden="true"
            />
          </div>

          <motion.div
            variants={fadeIn}
            className="absolute -left-4 bottom-8 z-[2] sm:-left-10"
          >
            <div className="flex items-center gap-3 rounded-lg border border-border-dark bg-bg-dark/90 px-4 py-3 shadow-[0_20px_44px_-16px_rgba(0,0,0,0.6)] backdrop-blur">
              <SealCheck size={22} weight="fill" className="shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-foreground-inv">ACA &middot; Member, ICAI</p>
                <p className="text-xs text-muted-inv">Chartered Accountant since {client.qualifiedYear}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
