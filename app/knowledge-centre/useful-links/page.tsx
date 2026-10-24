import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("knowledge-centre_useful-links", "/knowledge-centre/useful-links");

const LINKS = [
  ["Income Tax e-Filing Portal", "www.incometax.gov.in"],
  ["GST Portal", "www.gst.gov.in"],
  ["Maharashtra GST Department", "www.mahagst.gov.in"],
  ["Ministry of Corporate Affairs", "www.mca.gov.in"],
  ["TRACES (TDS)", "www.tdscpc.gov.in"],
  ["Udyam Registration", "udyamregistration.gov.in"],
  ["Reserve Bank of India", "www.rbi.org.in"],
  ["ICAI", "www.icai.org"],
  ["ICAI UDIN Verification", "udin.icai.org"],
];

export default function UsefulLinksPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Knowledge Centre", href: "/knowledge-centre" }, { label: "Useful Links" }]}
        title="Useful Links"
        lede="Official government, regulator and ICAI portals for income tax, GST, company law and UDIN verification."
      />
      <div className="bg-bg-light px-6 py-16 lg:px-10 lg:py-24">
        <ul className="mx-auto max-w-[980px] border-t-2 border-foreground/85">
          {LINKS.map(([name, domain], i) => (
            <li key={domain} data-reveal style={{ "--i": i % 3 } as React.CSSProperties}>
              <a
                href={`https://${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-border-light py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
              >
                <span className="font-serif text-[24px] leading-tight text-foreground transition-colors duration-200 group-hover:text-accent-dark sm:text-[28px]">
                  {name}
                </span>
                <span className="col-start-1 row-start-2 text-[14px] text-muted sm:col-start-2 sm:row-start-1">{domain}</span>
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  aria-hidden="true"
                  className="row-span-2 text-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-dark sm:row-span-1"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <CtaBand />
    </>
  );
}
