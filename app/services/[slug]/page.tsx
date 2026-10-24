import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getService, processSteps, serviceByName, serviceGroups, serviceHref, services } from "@/lib/content/site";
import { client } from "@/lib/tokens";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: serviceHref(s) },
  };
}

const reveal = (i = 0) => ({ "data-reveal": "", style: { "--i": i } as React.CSSProperties });

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-serif text-[34px] leading-[1.1] text-foreground sm:text-[40px]" {...reveal()}>
      {children}
    </h2>
  );
}

export default function ServicePage({ params }: Params) {
  const s = getService(params.slug);
  if (!s) notFound();
  const group = serviceGroups.find((g) => g.name === s.group)!;
  const related = s.related.map(serviceByName).filter((r) => r !== undefined);

  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: s.group, href: `/services#${group.slug}` },
          { label: s.name },
        ]}
        title={s.heading}
        lede={s.summary}
      />

      <div className="bg-bg-light px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20 xl:gap-28">
          <article className="min-w-0">
            <div className="max-w-[68ch] space-y-5 text-[17px] leading-[1.75] text-foreground/85">
              {s.intro.map((p, i) => (
                <p key={i} {...reveal(i)} className={i === 0 ? "text-[19px] leading-[1.7] text-foreground" : undefined}>
                  {p}
                </p>
              ))}
            </div>

            <section aria-labelledby="who" className="mt-20">
              <Heading id="who">Who this is for</Heading>
              <ul className="mt-8 max-w-[68ch] border-t border-border-light">
                {s.who.map((w, i) => (
                  <li key={w} {...reveal(i)} className="flex gap-4 border-b border-border-light py-4 text-[16px] leading-[1.6] text-foreground">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-5 shrink-0 bg-accent-dark" />
                    {w}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="covered" className="mt-20">
              <Heading id="covered">What&rsquo;s covered</Heading>
              <dl className="mt-8 border-t-2 border-foreground/85">
                {s.covered.map((c, i) => (
                  <div
                    key={c.title}
                    {...reveal(i % 3)}
                    className="grid grid-cols-1 gap-2 border-b border-border-light py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10"
                  >
                    <dt className="font-serif-text text-[19px] leading-snug text-foreground">{c.title}</dt>
                    <dd className="text-[15px] leading-[1.7] text-muted">{c.body}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="documents" className="mt-20">
              <Heading id="documents">Documents to keep ready</Heading>
              {/* Drawn as a ruled checklist slip: the thing you'd actually tick off at your desk */}
              <div
                {...reveal(1)}
                className="mt-8 max-w-[620px] -rotate-[0.4deg] rounded-[4px] border border-[#E3DDCE] bg-[#FBF9F4] px-7 pb-7 pt-6 shadow-[0_18px_40px_-24px_rgba(20,32,46,0.35),0_2px_6px_-2px_rgba(20,32,46,0.08)]"
              >
                <p className="border-b-2 border-foreground/70 pb-3 font-serif-text text-sm italic text-foreground/80">
                  Checklist &middot; {s.name}
                </p>
                <ul>
                  {s.documents.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-4 border-b border-dashed border-[#DDD5C2] py-3 text-[15px] text-foreground"
                    >
                      <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-[3px] border-[1.5px] border-foreground/50" />
                      {d}
                    </li>
                  ))}
                </ul>
                {s.documentsNote && <p className="mt-4 text-sm text-muted">{s.documentsNote}</p>}
              </div>
            </section>

            <section aria-labelledby="how" className="mt-24">
              <Heading id="how">How it works</Heading>
              <ol className="relative mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
                {processSteps.map((step, i) => (
                  <li key={step.title} {...reveal(i % 2)} className="relative border-t border-border-light pt-6">
                    <span className="tabular font-serif text-[44px] leading-none text-accent-dark/90">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-serif-text text-[19px] leading-snug text-foreground">{step.title}</h3>
                    <p className="mt-2 max-w-[42ch] text-[15px] leading-[1.65] text-muted">{step.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="faq" className="mt-24">
              <Heading id="faq">Questions people ask</Heading>
              <Accordion type="single" collapsible className="mt-6 border-t border-border-light" {...reveal(1)}>
                {s.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </article>

          <aside className="lg:pt-1">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg bg-bg-dark p-7 text-foreground-inv shadow-[0_24px_48px_-28px_rgba(14,26,43,0.6)]">
                <h2 className="font-serif text-[26px] leading-tight">What you get</h2>
                <ul className="mt-5 space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px] leading-[1.5] text-foreground-inv/90">
                      <Check size={16} weight="bold" className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-2.5 border-t border-border-dark pt-6">
                  <Button className="w-full" asChild>
                    <a href={`tel:${client.phoneHref}`}>
                      <Phone size={15} weight="bold" aria-hidden="true" />
                      {client.phone}
                    </a>
                  </Button>
                  <Button variant="outline-inverse" className="w-full" asChild>
                    <a href={`mailto:${client.email}?subject=${encodeURIComponent(s.name)}`}>
                      <EnvelopeSimple size={15} weight="bold" aria-hidden="true" />
                      Email Nishita
                    </a>
                  </Button>
                </div>
              </div>

              <nav aria-label="On this page" className="hidden px-1 lg:block">
                <p className="mb-2 text-[13px] font-semibold text-muted">On this page</p>
                {[
                  ["who", "Who this is for"],
                  ["covered", "What's covered"],
                  ["documents", "Documents to keep ready"],
                  ["how", "How it works"],
                  ["faq", "Questions people ask"],
                ].map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="block py-1 text-sm text-foreground/75 transition-colors hover:text-accent-dark">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related" className="mx-auto mt-24 max-w-[1400px] border-t-2 border-foreground/85 pt-10">
            <h2 id="related" className="font-serif-text text-[24px] italic text-foreground" {...reveal()}>
              Related services
            </h2>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r, i) => (
                <li key={r.slug} {...reveal(i)}>
                  <Link
                    href={serviceHref(r)}
                    className="group flex h-full items-center justify-between gap-4 border-b border-border-light py-5 pr-2 transition-colors hover:border-accent-dark/60 sm:pr-6"
                  >
                    <span className="font-serif text-[22px] leading-tight text-foreground transition-colors group-hover:text-accent-dark">
                      {r.name}
                    </span>
                    <ArrowRight
                      size={16}
                      weight="bold"
                      aria-hidden="true"
                      className="shrink-0 text-muted transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-accent-dark"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <CtaBand title={`Need help with ${s.name}?`} />
      <FaqJsonLd faqs={s.faqs} />
    </>
  );
}
