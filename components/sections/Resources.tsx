import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const RESOURCES = [
  {
    title: "Compliance Calendar",
    body: "Income tax, GST, TDS and ROC due dates for the month, in one place.",
    href: "/knowledge-centre/compliance-calendar",
  },
  {
    title: "FAQs",
    body: "Straight answers to what clients ask most, sorted by service.",
    href: "/knowledge-centre/faqs",
  },
  {
    title: "Updates & Articles",
    body: "Short notes on recent rule changes and what they mean for your filings.",
    href: "/knowledge-centre/updates",
  },
];

export function Resources() {
  return (
    <section id="resources" className="border-t border-border-light bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div data-reveal className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-serif text-[clamp(2.4rem,4.6vw,3.75rem)] leading-[1.05] text-foreground">
            Updates and resources.
          </h2>
          <p className="max-w-[46ch] text-base leading-[1.7] text-muted">
            Plain-language explainers on what&rsquo;s changed in income tax, GST and company law, plus a monthly
            compliance calendar.
          </p>
        </div>

        <ul className="grid grid-cols-1 border-t-2 border-foreground/85 md:grid-cols-3">
          {RESOURCES.map(({ title, body, href }, i) => (
            <li
              key={title}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              className="border-b border-border-light md:border-b-0 md:border-r md:last:border-r-0 md:[&:not(:first-child)]:pl-8 md:[&:not(:last-child)]:pr-8"
            >
              <Link href={href} className="group flex h-full flex-col gap-4 py-8">
                <h3 className="font-serif text-[30px] leading-[1.1] text-foreground transition-colors duration-200 group-hover:text-accent-dark">
                  {title}
                </h3>
                <p className="flex-1 text-[15px] leading-[1.65] text-muted">{body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-dark">
                  Open
                  <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
