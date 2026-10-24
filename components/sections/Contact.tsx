"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
  Info,
  MapPin,
  Phone,
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
import { client } from "@/lib/tokens";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const TOPICS = [
  "Income Tax",
  "NRI & International Tax",
  "GST",
  "Audit & Assurance",
  "Company & Business Compliance",
  "Accounts, Payroll & Bank Finance",
  "Something else",
];

const CHANNELS = [
  { icon: MapPin, label: "Office", value: client.address, href: client.mapsHref },
  { icon: Phone, label: "Phone", value: client.phone, href: `tel:${client.phoneHref}` },
  { icon: EnvelopeSimple, label: "Email", value: client.email, href: `mailto:${client.email}` },
];

export function Contact() {
  const [opened, setOpened] = useState(false);

  // No backend: hand the message to the visitor's email app instead of pretending it was sent
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();
    const topic = field("topic");
    const subject = `Enquiry from ${field("name")}${topic ? `: ${topic}` : ""}`;
    const lines = [`Name: ${field("name")}`, `Email: ${field("email")}`];
    if (field("phone")) lines.push(`Phone: ${field("phone")}`);
    if (topic) lines.push(`Regarding: ${topic}`);
    const body = [...lines, "", field("message")].join("\n");
    window.location.href = `mailto:${client.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-bg-dark px-6 py-24 lg:px-10 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative mx-auto max-w-[1400px]"
      >
        <motion.div variants={fadeUp} className="mb-16 max-w-[640px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-inv">
              07 &middot; Contact
            </span>
          </div>
          <h2 className="font-serif text-[40px] leading-[1.1] text-foreground-inv sm:text-5xl lg:text-6xl">
            Let&rsquo;s talk about your file.
          </h2>
          <p className="mt-5 text-base leading-[1.6] text-muted-inv">
            Tell us what you need and when it&rsquo;s due. Meetings are by
            appointment, and most work can be done online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <motion.div variants={fadeUp}>
            <form onSubmit={handleSubmit} className="flex max-w-[560px] flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="topic">What do you need help with?</Label>
                  <Select name="topic">
                    <SelectTrigger id="topic">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {TOPICS.map((topic) => (
                        <SelectItem key={topic} value={topic}>
                          {topic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What do you need, what's already been filed, and what's the deadline?"
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="group mt-2 w-full sm:w-fit">
                Compose Email
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>

              <div role="status" aria-live="polite">
                <AnimatePresence>
                  {opened && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 px-5 py-4 text-sm leading-[1.6] text-foreground-inv"
                    >
                      <Info size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span>
                        Your email app should now be open with this message
                        ready. It&rsquo;s only sent once you press send there.
                        If nothing opened, email{" "}
                        <a href={`mailto:${client.email}`} className="text-accent underline underline-offset-4">
                          {client.email}
                        </a>{" "}
                        or call{" "}
                        <a href={`tel:${client.phoneHref}`} className="text-accent underline underline-offset-4">
                          {client.phone}
                        </a>
                        .
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-3"
          >
            {CHANNELS.map((channel) => (
              <motion.li key={channel.label} variants={fadeUp}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-border-dark bg-surface-dark px-5 py-4 transition-[border-color,transform] duration-200 active:scale-[0.985] hover:-translate-y-0.5 hover:border-accent/40 motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <channel.icon size={18} className="text-accent" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv">
                        {channel.label}
                      </p>
                      <p className="text-sm leading-[1.5] text-foreground-inv">{channel.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-inv transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </motion.li>
            ))}
            <motion.li variants={fadeUp} className="pt-3 text-xs leading-[1.6] text-muted-inv">
              Office visits are by prior appointment so the right time is set
              aside for the conversation.
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
