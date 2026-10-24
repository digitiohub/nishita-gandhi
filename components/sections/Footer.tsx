import Link from "next/link";

import { knowledgeCentre, legalNav, services, serviceHref } from "@/lib/content/site";
import { client } from "@/lib/tokens";

const linkClass = "block py-1.5 text-sm text-muted-inv transition-colors duration-200 hover:text-accent";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-serif-text text-base italic text-foreground-inv">{title}</h2>
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-dark bg-bg-dark px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_0.7fr] lg:gap-10">
          <div>
            <p className="font-serif text-[28px] leading-tight text-foreground-inv">CA Nishita Gandhi</p>
            <p className="mt-2 text-sm text-muted-inv">Chartered Accountant &middot; Member, ICAI</p>
            <address className="mt-6 text-sm not-italic leading-[1.7] text-muted-inv">
              {client.address}
              <br />
              By appointment &middot; English, Hindi, Gujarati
            </address>
            <div className="mt-5 flex flex-col">
              <a href={`tel:${client.phoneHref}`} className={linkClass}>
                {client.phone}
              </a>
              <a href={`mailto:${client.email}`} className={linkClass}>
                {client.email}
              </a>
            </div>
          </div>

          <Column title="Services">
            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s)} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Resources">
            <ul>
              {knowledgeCentre.map((k) => (
                <li key={k.href}>
                  <Link href={k.href} className={linkClass}>
                    {k.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className={linkClass}>
                  About Nishita
                </Link>
              </li>
              <li>
                <Link href="/who-we-work-with" className={linkClass}>
                  Who We Work With
                </Link>
              </li>
              <li>
                <Link href="/chartered-accountant-mulund" className={linkClass}>
                  Chartered Accountant in Mulund
                </Link>
              </li>
            </ul>
          </Column>

          <Column title="Legal">
            <ul>
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </Column>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border-dark pt-6 text-xs leading-[1.6] text-muted-inv sm:flex-row sm:items-start sm:justify-between">
          <p>&copy; 2026 CA Nishita Gandhi. All rights reserved.</p>
          <p className="max-w-[64ch] sm:text-right">
            Information on this website is general and is not professional advice. Please speak to us
            about your specific facts before acting on it.
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-6 mt-10 select-none text-center font-serif text-[22vw] leading-none text-foreground-inv/[0.04] sm:text-[16vw]"
      >
        NISHITA
      </p>
    </footer>
  );
}
