"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const ITEMS = [
  "You're a founder doing everything, compliance shouldn't be one of them.",
  "Your business is growing and your books need to keep up.",
  "You've had a notice, a filing miss, or an audit scare.",
  "You want one trusted advisor, not a rotating cast of juniors.",
];

export function WhoIsItFor() {
  return (
    <section className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
      >
        <motion.div variants={fadeUp} className="order-2 lg:order-1">
          <div className="relative h-[340px] w-full overflow-hidden bg-surface-dark lg:h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="A small founding team collaborating in their office"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="order-1 lg:order-2">
          <h2 className="font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Built for businesses that are moving.
          </h2>

          <motion.div variants={staggerContainer} className="mt-8">
            {ITEMS.map((item, i) => (
              <motion.div key={item} variants={fadeUp}>
                <p className="py-4 text-base text-foreground">{item}</p>
                {i < ITEMS.length - 1 && <Separator className="bg-border-light" />}
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 font-serif text-xl italic text-accent-dark">
            If that&rsquo;s you, let&rsquo;s talk.
          </p>

          <Button variant="outline" className="mt-6" asChild>
            <a href="#contact">Book a Call</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
