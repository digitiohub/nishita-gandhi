import Link from "next/link";

import { PageHeader } from "@/components/site/PageHeader";
import { knowledgeCentre, legalNav, pageMeta, serviceGroups, serviceHref } from "@/lib/content/site";

export const metadata = pageMeta("sitemap", "/sitemap");

const linkClass = "block py-1.5 text-[16px] text-foreground/85 underline-offset-4 transition-colors hover:text-accent-dark hover:underline";

export default function SitemapPage() {
  const columns = [
    {
      title: "Practice",
      links: [
        ["Home", "/"],
        ["About", "/about"],
        ["Who We Work With", "/who-we-work-with"],
        ["Chartered Accountant in Mulund", "/chartered-accountant-mulund"],
        ["Contact", "/contact"],
      ],
    },
    { title: "Knowledge Centre", links: [["Knowledge Centre", "/knowledge-centre"], ...knowledgeCentre.map((k) => [k.title, k.href])] },
    { title: "Legal", links: legalNav.map((l) => [l.label, l.href]) },
  ];

  return (
    <>
      <PageHeader crumbs={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} title="Sitemap" />
      <div className="bg-bg-light px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[1.6fr_1fr]">
          <section aria-labelledby="sm-services" data-reveal>
            <h2 id="sm-services" className="border-b-2 border-foreground/85 pb-3 font-serif text-[32px] text-foreground">
              <Link href="/services" className="hover:text-accent-dark">Services</Link>
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {serviceGroups.map((g) => (
                <div key={g.slug}>
                  <h3 className="font-serif-text text-[17px] italic text-foreground/80">{g.name}</h3>
                  <ul className="mt-1">
                    {g.services.map((s) => (
                      <li key={s.slug}>
                        <Link href={serviceHref(s)} className={linkClass}>
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <div className="space-y-12">
            {columns.map((c, i) => (
              <section key={c.title} aria-label={c.title} data-reveal style={{ "--i": i + 1 } as React.CSSProperties}>
                <h2 className="border-b-2 border-foreground/85 pb-3 font-serif text-[32px] text-foreground">{c.title}</h2>
                <ul className="mt-4">
                  {c.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className={linkClass}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
