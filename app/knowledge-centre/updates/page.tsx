import Link from "next/link";
import { ArrowRight, Notebook } from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("knowledge-centre_updates", "/knowledge-centre/updates");

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Knowledge Centre", href: "/knowledge-centre" }, { label: "Updates & Articles" }]}
        title="Updates & Articles"
        lede="Short, practical explainers on new rules and what they mean for you."
      />
      <div className="bg-bg-light px-6 py-20 lg:px-10 lg:py-28">
        <div data-reveal className="mx-auto flex max-w-[760px] flex-col items-start gap-6 border-y-2 border-dashed border-border-light py-14 sm:flex-row sm:gap-10">
          <Notebook size={44} weight="light" className="shrink-0 text-accent-dark" aria-hidden="true" />
          <div>
            <h2 className="font-serif text-[32px] leading-tight text-foreground">No articles have been published yet.</h2>
            <p className="mt-3 text-[16px] leading-[1.65] text-muted">Meanwhile, see the Compliance Calendar and FAQs.</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {[
                ["Compliance Calendar", "/knowledge-centre/compliance-calendar"],
                ["Frequently Asked Questions", "/knowledge-centre/faqs"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent-dark">
                  {label}
                  <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
