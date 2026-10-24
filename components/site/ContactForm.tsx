"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Info } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/content/site";
import { client } from "@/lib/tokens";

const ROLES = ["Individual", "NRI", "Business owner", "Company or LLP", "Other"];
const TOPICS = [...services.map((s) => s.name), "Not sure"];

// Field set mirrors the live site's form; styled for the navy ground
export function ContactForm({ defaultTopic }: { defaultTopic?: string }) {
  const [opened, setOpened] = useState(false);

  // No backend: hand the message to the visitor's email app instead of pretending it was sent
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();
    const topic = field("topic");
    const subject = `Enquiry from ${field("name")}${topic ? `: ${topic}` : ""}`;
    const lines = [`Name: ${field("name")}`, `Phone: ${field("phone")}`, `Email: ${field("email")}`];
    if (field("role")) lines.push(`I am: ${field("role")}`);
    if (topic) lines.push(`Regarding: ${topic}`);
    if (field("time")) lines.push(`Preferred time to call: ${field("time")}`);
    const body = [...lines, "", field("message")].join("\n");
    window.location.href = `mailto:${client.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="role">I am</Label>
          <Select name="role">
            <SelectTrigger id="role">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {ROLES.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="topic">What do you need help with?</Label>
          <Select name="topic" defaultValue={defaultTopic}>
            <SelectTrigger id="topic">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {TOPICS.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
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
          required
          rows={4}
          placeholder="What do you need, what's already been filed, and what's the deadline?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="time">Preferred time to call</Label>
        <Input id="time" name="time" placeholder="e.g. weekday evenings" />
      </div>

      <label className="flex items-start gap-3 text-sm leading-[1.6] text-muted-inv">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-[#5EC4B6]" />
        <span>
          I agree that my details will be used to respond to this enquiry, as set out in the{" "}
          <a href="/privacy-policy" className="text-foreground-inv underline underline-offset-4 hover:text-accent">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <p className="text-xs leading-[1.6] text-muted-inv">
        Please don&rsquo;t send passwords or confidential documents through this form. We&rsquo;ll share a secure way
        to send documents once we&rsquo;re in touch.
      </p>

      <Button type="submit" size="lg" className="group w-full sm:w-fit">
        Compose email
        <ArrowRight size={16} weight="bold" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
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
              <Info size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Your email app should now be open with this message ready. It&rsquo;s only sent once you press send
                there. If nothing opened, email{" "}
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
  );
}
