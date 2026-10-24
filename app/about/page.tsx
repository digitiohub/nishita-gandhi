import Image from "next/image";

import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("about", "/about");

const EXPERIENCE = [
  "Statutory audits, tax audits and internal audits for companies and firms",
  "Finalisation of financial statements, notes to accounts and CARO disclosures – under Accounting Standards and Ind AS",
  "Income tax returns, tax planning and advance tax for individuals, partnership firms and companies",
  "Corporate taxation, including review of company tax returns and tax processes",
  "International taxation and related filings",
  "Representation in assessment proceedings before income tax and GST authorities",
  "Quarterly TDS returns – salary and non-salary",
  "ROC filings",
  "CMA data and bank information for working capital and term loan proposals",
  "Monthly internal audit reports, statutory compliance reports and audit committee / board agenda papers",
  "Verification of purchase bills, cash vouchers and sub-contractor work; bank reconciliations; debtor and creditor reviews",
];

const QUALIFICATIONS = [
  { title: "Chartered Accountant", body: "Institute of Chartered Accountants of India", year: "2015" },
  { title: "Bachelor of Commerce", body: "K.J. Somaiya College of Arts and Commerce, University of Mumbai", year: "2014" },
];

const DETAILS = [
  ["Languages", "English, Hindi, Gujarati"],
  ["Software", "Tally (ERP 9 / Prime), SAP, MS Excel"],
  ["Office", "1720, The Gateway, Mulund West, Mumbai – 400080"],
  ["Hours", "By appointment"],
];

const reveal = (i = 0) => ({ "data-reveal": "", style: { "--i": i } as React.CSSProperties });

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About Nishita Gandhi, Chartered Accountant in Mulund, Mumbai"
        lede="A decade of audit and tax practice – now in a practice of her own."
      >
        <div className="relative w-[220px] sm:w-[260px]">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[12px] border border-accent/25" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-dark">
            <Image
              src="/images/nishita-full.jpg"
              alt="Nishita Gandhi"
              fill
              priority
              sizes="260px"
              className="object-cover object-[50%_22%]"
            />
          </div>
        </div>
      </PageHeader>

      <div className="bg-bg-light px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <div {...reveal()}>
              <h2 className="font-serif text-[40px] leading-[1.05] text-foreground">Profile</h2>
              <p className="mt-3 text-[15px] text-muted">10+ years in audit &amp; tax practice</p>
            </div>
            <div className="max-w-[68ch] space-y-6 text-[18px] leading-[1.75] text-foreground/85">
              <p {...reveal()} className="text-[21px] leading-[1.6] text-foreground">
                Nishita Gandhi completed her B.Com at K.J. Somaiya College of Arts and Commerce, University
                of Mumbai, in 2014, and qualified as a Chartered Accountant in 2015. She is a member of the
                Institute of Chartered Accountants of India.
              </p>
              <p {...reveal(1)}>
                She has spent the years since in practice as a partner, working on the full range of a CA&rsquo;s
                work: statutory, tax and internal audits; income tax for individuals, partnership firms and
                private and public companies; GST; TDS; company filings; and the finalisation of accounts for
                corporate and non-corporate businesses.
              </p>
              <p {...reveal(2)}>
                She has now set up her own practice in Mulund, to work directly with a focused group of clients
                – and to give each of them the attention of the person actually signing off on their work.
              </p>
            </div>
          </div>

          <section aria-labelledby="experience" className="mt-28 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="experience" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">
              Experience
            </h2>
            <ul className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {EXPERIENCE.map((e, i) => (
                <li key={e} {...reveal(i % 2)} className="border-b border-border-light py-4 text-[15px] leading-[1.65] text-foreground/85">
                  {e}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="qualifications" className="mt-24 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="qualifications" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">
              Qualifications
            </h2>
            <ul>
              {QUALIFICATIONS.map((q, i) => (
                <li
                  key={q.title}
                  {...reveal(i)}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-border-light py-6 first:pt-0"
                >
                  <div>
                    <p className="font-serif-text text-[22px] leading-snug text-foreground">{q.title}</p>
                    <p className="mt-1 text-[15px] text-muted">{q.body}</p>
                  </div>
                  <time className="font-serif text-[36px] leading-none text-accent-dark">{q.year}</time>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="how-she-works" className="mt-24 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="how-she-works" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">
              How she works
            </h2>
            <div className="max-w-[68ch] space-y-6 text-[17px] leading-[1.75] text-foreground/85">
              <p {...reveal()} className="font-serif-text text-[23px] leading-[1.5] text-foreground">
                Every engagement starts with the facts and your obligations under each law – not a template.
              </p>
              <p {...reveal(1)}>
                Work is planned around statutory due dates, documented as it goes, and walked through with you
                before anything is filed or signed.
              </p>
              <p {...reveal(2)}>
                Independence rules are followed strictly: the practice does not keep the books of any company it
                audits. Every certificate and audit report carries a UDIN you can verify on the ICAI portal.
                Client information stays confidential.
              </p>
            </div>
          </section>

          <section aria-labelledby="details" className="mt-24 grid grid-cols-1 gap-8 border-t-2 border-foreground/85 pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h2 id="details" {...reveal()} className="font-serif text-[40px] leading-[1.05] text-foreground">
              Languages, software and office
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2">
              {DETAILS.map(([k, v], i) => (
                <div key={k} {...reveal(i % 2)} className="border-b border-border-light py-5 sm:pr-8">
                  <dt className="text-[13px] font-semibold text-muted">{k}</dt>
                  <dd className="mt-1.5 text-[17px] leading-snug text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      <CtaBand title="To discuss your requirement, call the office or write in." />
    </>
  );
}
