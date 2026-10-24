import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

// Copy from the live homepage
export function Practice() {
  return (
    <section id="practice" className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <h2 data-reveal className="font-serif text-[clamp(2.6rem,5.6vw,4.75rem)] leading-[1.04] text-foreground">
          One Chartered Accountant.
          <br />
          <span className="font-serif-text italic">Your whole file.</span>
        </h2>

        <div className="space-y-6 self-end text-[17px] leading-[1.75] text-foreground/80">
          <p data-reveal>
            Compliance problems usually start in the gaps – between whoever files the GST, whoever does the income
            tax, and whoever looks after the company filings. Here, they&rsquo;re handled together. Your returns, your
            GST and your ROC filings tell one consistent story, and when the department asks a question, the person
            answering already knows your file.
          </p>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Every engagement follows the Chartered Accountants Act, 1949, the ICAI Code of Ethics and ICAI&rsquo;s
            Standards on Auditing. Your information stays confidential.
          </p>
          <Link
            data-reveal
            style={{ "--i": 2 } as React.CSSProperties}
            href="/about"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent-dark underline-offset-4 hover:underline"
          >
            About Nishita
            <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
