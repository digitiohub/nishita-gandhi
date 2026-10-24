import Link from "next/link";
import { ArrowRight, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { client } from "@/lib/tokens";

// The close on every inner page: the three real ways to reach Nishita
export function CtaBand({ title = "Tell us what's going on.", body }: { title?: string; body?: string }) {
  return (
    <section className="relative overflow-hidden bg-bg-dark px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div data-reveal>
          <h2 className="font-serif text-[clamp(2.2rem,4.6vw,3.75rem)] leading-[1.06] text-foreground-inv">{title}</h2>
          <p className="mt-5 max-w-[52ch] text-base leading-[1.65] text-muted-inv">
            {body ??
              "A short call or email is enough to start: what you need, what's already been filed, and what the deadline is."}
          </p>
        </div>
        <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:w-[340px] lg:flex-col lg:justify-self-end [&>*]:lg:w-full">
          <Button size="lg" className="group" asChild>
            <a href={`tel:${client.phoneHref}`}>
              <Phone size={16} weight="bold" aria-hidden="true" />
              Call {client.phone}
            </a>
          </Button>
          <Button size="lg" variant="outline-inverse" asChild>
            <a href={`mailto:${client.email}`}>
              <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
              Email
            </a>
          </Button>
          <Button size="lg" variant="outline-inverse" className="group" asChild>
            <Link href="/contact">
              Contact form
              <ArrowRight
                size={16}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
