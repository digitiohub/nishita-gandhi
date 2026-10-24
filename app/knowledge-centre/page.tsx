import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { knowledgeCentre, pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("knowledge-centre", "/knowledge-centre");

export default function KnowledgeCentrePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Knowledge Centre" }]}
        title="Knowledge Centre"
        lede="What's changed in income tax, GST and company law, explained in plain language. Plus a compliance calendar, answers to common questions and links to official portals. General information only."
      />
      <div className="bg-bg-light px-6 py-20 lg:px-10 lg:py-28">
        <ul className="mx-auto grid max-w-[1400px] grid-cols-1 border-t-2 border-foreground/85 md:grid-cols-2">
          {knowledgeCentre.map((k, i) => (
            <li key={k.href} data-reveal style={{ "--i": i % 2 } as React.CSSProperties} className="border-b border-border-light md:odd:border-r md:odd:pr-10 md:even:pl-10">
              <Link href={k.href} className="group flex h-full flex-col justify-between gap-10 py-10">
                <div>
                  <h2 className="font-serif text-[34px] leading-[1.1] text-foreground transition-colors duration-200 group-hover:text-accent-dark sm:text-[42px]">
                    {k.title}
                  </h2>
                  <p className="mt-4 max-w-[44ch] text-[16px] leading-[1.65] text-muted">{k.body}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-dark">
                  Open
                  <ArrowRight size={15} weight="bold" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CtaBand />
    </>
  );
}
