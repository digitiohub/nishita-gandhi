import { ArrowUpRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";

import { ContactForm } from "@/components/site/ContactForm";
import { client } from "@/lib/tokens";

const CHANNELS = [
  { icon: Phone, label: "Phone", value: client.phone, href: `tel:${client.phoneHref}` },
  { icon: EnvelopeSimple, label: "Email", value: client.email, href: `mailto:${client.email}` },
  { icon: MapPin, label: "Office · by appointment", value: client.address, href: client.mapsHref },
];

export function ContactChannels() {
  return (
    <ul className="space-y-3">
      {CHANNELS.map((channel, i) => (
        <li key={channel.label} data-reveal style={{ "--i": i } as React.CSSProperties}>
          <a
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between gap-4 rounded-lg border border-border-dark bg-surface-dark px-5 py-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/40 active:scale-[0.985] motion-reduce:hover:translate-y-0"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <channel.icon size={18} className="text-accent" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[13px] font-semibold text-muted-inv">{channel.label}</span>
                <span className="block text-[15px] leading-[1.5] text-foreground-inv">{channel.value}</span>
              </span>
            </span>
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="shrink-0 text-muted-inv transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </a>
        </li>
      ))}
      <li className="pt-3 text-[13px] leading-[1.6] text-muted-inv">Languages: English, Hindi, Gujarati.</li>
    </ul>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg-dark px-6 py-24 lg:px-10 lg:py-32">
      <div className="relative mx-auto max-w-[1400px]">
        <div data-reveal className="mb-16 max-w-[680px]">
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] text-foreground-inv">
            Let&rsquo;s talk about your file.
          </h2>
          <p className="mt-5 text-base leading-[1.65] text-muted-inv">
            Tell us what you need and when it&rsquo;s due. Meetings are by appointment, and most work can be done
            online.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div data-reveal className="max-w-[620px]">
            <ContactForm />
          </div>
          <ContactChannels />
        </div>
      </div>
    </section>
  );
}
