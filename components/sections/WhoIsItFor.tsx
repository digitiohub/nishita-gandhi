import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

// Each row opens the matching entry on /who-we-work-with
const AUDIENCES = [
  { label: "Salaried professionals, investors and families", id: "individuals-and-families" },
  { label: "NRIs and people moving to or from India", id: "nris-and-people-moving-countries" },
  { label: "Proprietors, traders and family businesses", id: "proprietors-traders-and-family-businesses" },
  { label: "Private limited companies and LLPs", id: "private-limited-companies-and-llps" },
  { label: "Contractors and project-based businesses", id: "contractors-and-project-businesses" },
  { label: "Startups setting up for the first time", id: "startups" },
];

export function WhoIsItFor() {
  return (
    <section id="clients" className="bg-bg-light px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-serif text-[clamp(2.4rem,4.6vw,3.5rem)] leading-[1.08] text-foreground">
            Individuals, families and businesses at every stage.
          </h2>
          <p className="mt-6 max-w-[42ch] text-base leading-[1.7] text-muted">
            Whether it&rsquo;s a single return or a full year of company compliance, you get the same direct
            attention.
          </p>
          <p className="mt-8 font-serif-text text-xl italic text-foreground">If that&rsquo;s you, let&rsquo;s talk.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/who-we-work-with">See who we work with</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        <ul className="border-t-2 border-foreground/85">
          {AUDIENCES.map(({ label, id }, i) => (
            <li key={id} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <Link
                href={`/who-we-work-with#${id}`}
                className="group flex items-center justify-between gap-6 border-b border-border-light py-6 transition-colors duration-200 hover:border-accent-dark/50"
              >
                <span className="font-serif text-[24px] leading-[1.2] text-foreground transition-colors duration-200 group-hover:text-accent-dark sm:text-[28px]">
                  {label}
                </span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-accent-dark"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
