"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "@/lib/tokens";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FAQS = [
  {
    q: "Where is the office?",
    a: "Mulund West, Mumbai. Meetings are by appointment, and most work can be done online.",
  },
  {
    q: "Do you work outside Mulund?",
    a: "Yes, across Mumbai, Thane and Navi Mumbai, and with NRIs abroad through online document sharing and video calls.",
  },
  {
    q: "Will I deal with Nishita directly?",
    a: "Yes. Nishita personally reviews and signs off every engagement.",
  },
  {
    q: "Can you take over from my current CA?",
    a: "Yes. We review past filings and collect your records. For audits, we write to the previous auditor first, as the ICAI Code of Ethics requires.",
  },
  {
    q: "Which languages do you work in?",
    a: "English, Hindi and Gujarati.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border-light bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"
      >
        <motion.div variants={fadeUp}>
          <h2 className="font-serif text-[40px] leading-[1.1] text-foreground sm:text-5xl">
            Common questions.
          </h2>
          <p className="mt-6 max-w-[38ch] text-base leading-[1.7] text-muted">
            Something else on your mind? Call{" "}
            <a href={`tel:${client.phoneHref}`} className="text-accent-dark underline-offset-4 hover:underline">
              {client.phone}
            </a>{" "}
            or{" "}
            <a href="#contact" className="text-accent-dark underline-offset-4 hover:underline">
              send a message
            </a>
            .
          </p>
          <Link
            href="/knowledge-centre/faqs"
            className="mt-6 inline-block text-[15px] font-semibold text-accent-dark underline-offset-4 hover:underline"
          >
            All 49 questions, by topic
          </Link>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Accordion type="single" collapsible className="border-t border-border-light">
            {FAQS.map(({ q, a }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
