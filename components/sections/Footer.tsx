import { client } from "@/lib/tokens";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#clients" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-dark bg-bg-dark px-6 pb-10 pt-16 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-serif text-xl text-foreground-inv">Nishita Gandhi</p>
            <p className="mt-2 text-sm text-muted-inv">
              Chartered Accountant &middot; ACA, Member of ICAI
            </p>
            <p className="mt-1 text-sm text-muted-inv">{client.address}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1 sm:gap-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv transition-colors hover:text-foreground-inv"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col text-sm lg:items-end">
            <a href={`tel:${client.phoneHref}`} className="py-1.5 text-muted-inv transition-colors hover:text-accent">
              {client.phone}
            </a>
            <a href={`mailto:${client.email}`} className="py-1.5 text-muted-inv transition-colors hover:text-accent">
              {client.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border-dark pt-6 text-xs leading-[1.6] text-muted-inv sm:flex-row sm:items-start sm:justify-between">
          <p>&copy; 2026 Nishita Gandhi. All rights reserved.</p>
          <p className="max-w-[60ch] sm:text-right">
            Information on this website is general and is not professional
            advice. Please speak to us about your specific facts before acting
            on it.
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-6 mt-10 select-none text-center font-serif text-[22vw] font-normal leading-none text-foreground-inv/[0.04] sm:text-[16vw]"
      >
        NISHITA
      </p>
    </footer>
  );
}
