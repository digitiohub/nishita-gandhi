import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta, serviceByName, serviceHref } from "@/lib/content/site";

export const metadata = pageMeta("who-we-work-with", "/who-we-work-with");

// Copy from the live page; `services` points each audience at the pages that answer its usual questions
const AUDIENCES = [
  {
    title: "Individuals and families",
    body: "Income tax returns, capital gains on shares and property, advance tax, tax planning, HUFs, notices, and certificates for visas and loans.",
    services: ["Income Tax Returns & Tax Planning", "Income Tax Notices & Appeals", "CA Certificates"],
  },
  {
    title: "NRIs and people moving countries",
    body: "Indian returns, residential status, treaty relief, property sales and lower TDS certificates, Form 15CA/15CB and repatriation.",
    services: ["NRI & International Taxation", "TDS & TCS Compliance"],
  },
  {
    title: "Professionals",
    body: "Doctors, architects, consultants and freelancers: income tax, presumptive taxation, tax audit, GST and bookkeeping.",
    services: ["Income Tax Returns & Tax Planning", "Tax Audit", "GST Registration & Returns"],
  },
  {
    title: "Proprietors, traders and family businesses",
    body: "GST, TDS, accounting and finalisation, tax audit, income tax and CMA data for bank limits.",
    services: ["GST Registration & Returns", "Accounting, Finalisation & Payroll", "Project Finance & CMA Data"],
  },
  {
    title: "Private limited companies and LLPs",
    body: "Statutory audit under AS or Ind AS, CARO, tax audit, corporate tax, ROC compliance, GST, TDS and internal audit.",
    services: ["Statutory Audit", "Corporate Tax", "ROC / MCA Compliance"],
  },
  {
    title: "Contractors and project businesses",
    body: "Bill and sub-contractor verification, internal audit, finalisation of accounts, GST, TDS, and project reports for term loans.",
    services: ["Internal Audit & Stock Audit", "Project Finance & CMA Data"],
  },
  {
    title: "Businesses dealing with foreign parties",
    body: "Tax on payments to non-residents, treaty rates, Form 15CA/15CB, and GST on imports and exports of services.",
    services: ["NRI & International Taxation", "GST Advisory, Notices & Refunds"],
  },
  {
    title: "Startups",
    body: "Choosing a structure, incorporation, startup recognition, first-year compliance and books that are ready for investors.",
    services: ["Business Setup & Registrations", "ROC / MCA Compliance"],
  },
];

export default function WhoWeWorkWithPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Who We Work With" }]}
        title="Who We Work With"
        lede="Different clients, different obligations. Here's what we typically handle for each."
      />

      <div className="bg-bg-light px-6 py-20 lg:px-10 lg:py-28">
        <ol className="mx-auto max-w-[1400px] border-t-2 border-foreground/85">
          {AUDIENCES.map((a) => (
            <li
              key={a.title}
              id={a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              data-reveal
              className="scroll-mt-28 grid grid-cols-1 gap-4 border-b border-border-light py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,0.8fr)] lg:py-12"
            >
              <h2 className="font-serif text-[30px] leading-[1.1] text-foreground sm:text-[36px]">{a.title}</h2>
              <p className="max-w-[52ch] text-[16px] leading-[1.7] text-foreground/80">{a.body}</p>
              <ul className="flex flex-col gap-1 md:col-start-2 lg:col-start-auto" aria-label={`Services for ${a.title}`}>
                {a.services.map((name) => {
                  const s = serviceByName(name);
                  return s ? (
                    <li key={name}>
                      <Link
                        href={serviceHref(s)}
                        className="group inline-flex items-center gap-2 py-1 text-[15px] font-semibold text-accent-dark underline-offset-4 hover:underline"
                      >
                        {name}
                        <ArrowRight size={13} weight="bold" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <CtaBand
        title="Not sure which one you need?"
        body="Tell us what's going on and we'll point you to the right place."
      />
    </>
  );
}
