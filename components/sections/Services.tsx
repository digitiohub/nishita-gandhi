import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

// The six practice areas as worded on the live homepage, each opening its part of the services index
const AREAS = [
  {
    title: "Income Tax",
    body: "Returns for individuals, firms and companies. Capital gains, advance tax and planning. Corporate tax. Notices, assessments and appeals.",
    href: "/services#income-tax",
  },
  {
    title: "NRI & International Tax",
    body: "NRI returns, property sales and lower TDS certificates, treaty relief, Form 15CA/15CB and payments to non-residents.",
    href: "/services/nri-international-taxation",
  },
  {
    title: "GST",
    body: "Registration, monthly and annual returns, credit reconciliation, notices, assessments, appeals and refunds.",
    href: "/services#gst",
  },
  {
    title: "Audit & Assurance",
    body: "Statutory audit of companies and LLPs, tax audit, internal audit and stock audit – under AS or Ind AS, with CARO reporting.",
    href: "/services#audit-assurance",
  },
  {
    title: "Company & Business Compliance",
    body: "Company, LLP and partnership registration, business registrations, and every annual and event-based ROC filing.",
    href: "/services#business-corporate",
  },
  {
    title: "Accounts, Payroll & Bank Finance",
    body: "Bookkeeping, finalisation of accounts, payroll, TDS, CMA data and project reports for bank proposals, and CA certificates.",
    href: "/services#accounting-advisory",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg-dark px-6 py-24 lg:px-10 lg:py-32">
      <div className="relative mx-auto max-w-[1400px]">
        <div data-reveal className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-serif text-[clamp(2.6rem,5.4vw,4.5rem)] leading-[1.04] text-foreground-inv">What we handle.</h2>
          <p className="max-w-[38ch] text-base leading-[1.6] text-muted-inv">
            Fifteen services across six areas. Start with whatever is on your desk today.
          </p>
        </div>

        <ul className="grid grid-cols-1 border-t border-border-dark md:grid-cols-2">
          {AREAS.map((a, i) => (
            <li
              key={a.title}
              data-reveal
              style={{ "--i": i % 2 } as React.CSSProperties}
              className="border-b border-border-dark md:odd:border-r md:odd:pr-10 md:even:pl-10"
            >
              <Link href={a.href} className="group flex h-full flex-col gap-4 py-9">
                <span className="flex items-start justify-between gap-6">
                  <h3 className="font-serif text-[30px] leading-[1.1] text-foreground-inv transition-colors duration-200 group-hover:text-accent sm:text-[34px]">
                    {a.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-dark text-foreground-inv transition-[background-color,border-color,color,transform] duration-200 group-hover:translate-x-1 group-hover:border-accent group-hover:bg-accent group-hover:text-bg-dark"
                  >
                    <ArrowRight size={16} weight="bold" />
                  </span>
                </span>
                <p className="max-w-[52ch] text-[15px] leading-[1.65] text-muted-inv">{a.body}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[15px] text-muted-inv">
            Filing your own return this year?{" "}
            <Link href="/services/income-tax-return-filing" className="font-semibold text-accent underline-offset-4 hover:underline">
              See what an income tax return involves
            </Link>
          </p>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground-inv underline-offset-4 hover:underline"
          >
            All fifteen services
            <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
