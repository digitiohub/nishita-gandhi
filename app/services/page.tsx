import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta, serviceGroups, serviceHref } from "@/lib/content/site";

export const metadata = pageMeta("services", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title="Chartered Accountant Services in Mulund, Mumbai"
        lede="Tax, GST, audit, company compliance and accounts, for individuals, NRIs and businesses. Pick a service to see what it covers, who it's for, what you'll get and what documents to keep ready."
      >
        <nav aria-label="Service areas" className="flex flex-wrap gap-2 lg:max-w-[340px] lg:justify-end">
          {serviceGroups.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="rounded-full border border-border-dark px-4 py-2 text-[13px] font-semibold text-muted-inv transition-colors duration-200 hover:border-accent/50 hover:text-foreground-inv"
            >
              {g.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="bg-bg-light px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          {serviceGroups.map((group) => (
            <section
              key={group.slug}
              id={group.slug}
              aria-labelledby={`${group.slug}-title`}
              className="grid scroll-mt-28 grid-cols-1 gap-6 border-t-2 border-foreground/85 py-10 first:pt-10 lg:grid-cols-[300px_1fr] lg:gap-16 lg:py-14"
            >
              <div data-reveal>
                <h2
                  id={`${group.slug}-title`}
                  className="font-serif-text text-[28px] italic leading-tight text-foreground lg:sticky lg:top-28"
                >
                  {group.name}
                </h2>
              </div>
              <ul>
                {group.services.map((s, i) => (
                  <li key={s.slug} data-reveal style={{ "--i": i } as React.CSSProperties}>
                    <Link
                      href={serviceHref(s)}
                      className="group grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-2 border-b border-border-light py-7 transition-colors duration-200 first:pt-0 hover:border-accent-dark/50 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_auto] lg:items-baseline lg:gap-x-10"
                    >
                      <h3 className="font-serif text-[26px] leading-[1.15] text-foreground transition-colors duration-200 group-hover:text-accent-dark sm:text-[30px]">
                        {s.name}
                      </h3>
                      <p className="col-span-2 row-start-2 max-w-[60ch] text-[15px] leading-[1.65] text-muted lg:col-span-1 lg:row-start-auto">
                        {s.summary}
                      </p>
                      <span
                        aria-hidden="true"
                        className="col-start-2 row-start-1 mt-2 flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-foreground transition-[background-color,border-color,color,transform] duration-200 group-hover:translate-x-1 group-hover:border-accent-dark group-hover:bg-accent-dark group-hover:text-bg-light lg:col-start-3 lg:mt-0 lg:self-center"
                      >
                        <ArrowRight size={16} weight="bold" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <CtaBand
        title="Not sure which one you need?"
        body="Tell us what's going on and we'll point you to the right place."
      />
    </>
  );
}
