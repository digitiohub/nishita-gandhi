import Link from "next/link";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pageMeta, serviceHref, services } from "@/lib/content/site";
import { client } from "@/lib/tokens";

export const metadata = pageMeta("chartered-accountant-mulund", "/chartered-accountant-mulund");

const AREAS = ["Mulund West", "Mulund East", "Nahur", "Bhandup", "Vikhroli", "Ghatkopar", "Thane", "Airoli"];

const USUALLY = [
  "Income tax returns for salaried families and senior citizens",
  "Capital gains when a flat is sold, or when a building is redeveloped",
  "GST registration and monthly returns for local businesses",
  "Tax audits for traders and professionals crossing the turnover limit",
  "Statutory audits and ROC filings for private companies",
  "NRI returns for families with members abroad",
];

const FAQS = [
  { q: "Can I drop off documents in person?", a: "Yes – by appointment during office hours." },
  { q: "Can we talk in Gujarati or Hindi?", a: "Yes. Nishita works in English, Hindi and Gujarati." },
];

const reveal = (i = 0) => ({ "data-reveal": "", style: { "--i": i } as React.CSSProperties });

export default function MulundPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Chartered Accountant in Mulund" }]}
        title="Chartered Accountant in Mulund, Mumbai"
        lede="Income tax, GST, audit and company compliance – from an office in Mulund West."
      >
        <a
          href={client.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-[320px] rounded-lg border border-border-dark bg-surface-dark p-6 transition-colors hover:border-accent/50"
        >
          <MapPin size={26} className="text-accent" aria-hidden="true" />
          <p className="mt-4 text-[15px] leading-[1.6] text-foreground-inv">1720, The Gateway, Mulund West, Mumbai – 400080</p>
          <p className="mt-1 text-[13px] text-muted-inv">By appointment.</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Open in Google Maps
            <ArrowUpRight size={14} weight="bold" aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </PageHeader>

      <div className="bg-bg-light px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p {...reveal()} className="max-w-[60ch] font-serif-text text-[22px] leading-[1.6] text-foreground sm:text-[25px]">
            CA Nishita Gandhi is a practising Chartered Accountant with an office in Mulund. Clients can meet in person
            by appointment, or work entirely online. Nishita works in English, Hindi and Gujarati.
          </p>

          <section aria-labelledby="areas" className="mt-24 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="areas" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">Areas served</h2>
            <div {...reveal(1)}>
              <ul className="flex flex-wrap gap-2.5" aria-label="Areas">
                {AREAS.map((a) => (
                  <li key={a} className="rounded-full border border-border-light bg-white/50 px-4 py-2 text-[15px] text-foreground">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.7] text-muted">
                Clients come to the office from Mulund West and East, Nahur, Bhandup, Vikhroli, Ghatkopar, Thane and
                Airoli. Clients elsewhere in India and abroad work with us online.
              </p>
            </div>
          </section>

          <section aria-labelledby="usually" className="mt-24 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="usually" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">
              What Mulund clients usually come in for
            </h2>
            <div>
              <p {...reveal()} className="max-w-[64ch] text-[17px] leading-[1.75] text-foreground/85">
                Mulund is a mix of salaried families, retired residents, traders and small manufacturers, and companies
                with offices along LBS Marg and the eastern suburbs. Most of the work that comes in reflects that:
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-x-12 md:grid-cols-2">
                {USUALLY.map((u, i) => (
                  <li key={u} {...reveal(i % 2)} className="border-b border-border-light py-4 text-[16px] leading-[1.6] text-foreground">
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="available" className="mt-24 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="available" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">Services available</h2>
            <ul {...reveal(1)} className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s)} className="block border-b border-border-light py-3 text-[16px] text-foreground transition-colors hover:text-accent-dark">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="questions" className="mt-24 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="questions" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">Questions</h2>
            <Accordion type="single" collapsible {...reveal(1)}>
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>

      <CtaBand title="Call or write to schedule a meeting." />
      <FaqJsonLd faqs={FAQS} />
    </>
  );
}
