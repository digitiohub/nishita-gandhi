"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeUp, viewportOnce } from "@/lib/motion";

const TESTIMONIALS = [
  {
    id: "rohan",
    name: "Rohan M.",
    role: "SaaS Founder",
    quote:
      "Three years of GST backlog, cleared in weeks. Now I get a five-minute update once a month and haven't thought about compliance since.",
  },
  {
    id: "priya",
    name: "Priya S.",
    role: "D2C Brand Owner",
    quote:
      "Most CAs I'd worked with sent me a list and disappeared. Nishita explained why each thing mattered. I finally understand my own P&L.",
  },
  {
    id: "karan",
    name: "Karan D.",
    role: "Agency Founder",
    quote:
      "She caught a TDS mismatch that would have been a serious problem at our Series A. One of the best decisions we made early on.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(TESTIMONIALS[0].id);
  const current = TESTIMONIALS.find((t) => t.id === active) ?? TESTIMONIALS[0];

  return (
    <section id="testimonials" className="bg-bg-dark px-6 py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-serif text-4xl text-foreground-inv sm:text-5xl">
          From founders I&rsquo;ve worked with
        </h2>

        <Tabs value={active} onValueChange={setActive} className="mt-12 flex flex-col items-center">
          <TabsList>
            {TESTIMONIALS.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>
                {t.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-4 min-h-[220px] max-w-[640px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-serif text-xl italic leading-[1.5] text-foreground-inv sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm text-muted-inv">
                  {current.name} &middot; {current.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </motion.div>
    </section>
  );
}
