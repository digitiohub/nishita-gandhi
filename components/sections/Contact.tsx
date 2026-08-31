"use client";

import { useState, type FormEvent } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CircleNotch,
  EnvelopeSimple,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CanvasBoundary } from "@/components/three/CanvasBoundary";
import { client } from "@/lib/tokens";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const ContactCanvas = dynamic(
  () => import("@/components/three/ContactCanvas").then((m) => m.ContactCanvas),
  { ssr: false }
);

const STAGES = ["Pre-revenue", "₹0-₹50L", "₹50L-₹2Cr", "₹2Cr+"];

const CHANNELS = [
  { icon: EnvelopeSimple, label: "Email", value: client.email, href: `mailto:${client.email}` },
  { icon: LinkedinLogo, label: "LinkedIn", value: "Professional profile", href: "https://www.linkedin.com" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("submitted"), 900);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-bg-dark px-6 py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute inset-0 z-0">
        <CanvasBoundary>
          <ContactCanvas />
        </CanvasBoundary>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative z-[1] mx-auto max-w-[1400px]"
      >
        <motion.div variants={fadeUp} className="mb-16 max-w-[620px]">
          <h2 className="font-serif text-4xl leading-[1.1] text-foreground-inv sm:text-5xl lg:text-6xl">
            Ready to stop worrying about compliance?
          </h2>
          <p className="mt-5 text-base leading-[1.6] text-muted-inv">
            Book a free 30-minute call. No commitment, no sales pitch, just
            clarity on where you stand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <motion.div variants={fadeUp}>
            {status === "submitted" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="max-w-[520px] border border-border-dark bg-surface-dark px-8 py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15"
                >
                  <Check className="h-6 w-6 text-accent" weight="bold" />
                </motion.div>
                <p className="mt-5 text-base text-foreground-inv">
                  We&rsquo;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex max-w-[520px] flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="stage">Business Stage</Label>
                  <Select name="stage">
                    <SelectTrigger id="stage">
                      <SelectValue placeholder="Select your stage" />
                    </SelectTrigger>
                    <SelectContent>
                      {STAGES.map((stage) => (
                        <SelectItem key={stage} value={stage}>
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Anything specific you're dealing with? (optional)"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full sm:w-fit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <CircleNotch className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-inv">
                Office
              </p>
              <div className="mt-3 flex items-start gap-2.5 text-foreground-inv">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-sm leading-[1.6]">{client.location}</p>
              </div>
            </div>

            <div className="space-y-3">
              {CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between border border-border-dark bg-surface-dark px-5 py-4 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center gap-3">
                    <channel.icon size={18} className="text-accent" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv">
                        {channel.label}
                      </p>
                      <p className="text-sm text-foreground-inv">{channel.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-inv transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              ))}
            </div>

            <p className="text-xs leading-[1.6] text-muted-inv">
              Office visits are by prior appointment so the right time is set
              aside for the conversation.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
