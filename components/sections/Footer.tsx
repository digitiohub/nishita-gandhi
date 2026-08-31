import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-dark bg-bg-dark px-6 pb-10 pt-16 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-xl text-foreground-inv">Nishita Gandhi</p>
            <p className="mt-2 text-sm text-muted-inv">
              Chartered Accountant &middot; Mumbai, India
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv transition-colors hover:text-foreground-inv"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv">
              ICAI Registered
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Nishita Gandhi on LinkedIn"
              className="text-muted-inv transition-colors hover:text-accent"
            >
              <LinkedinLogo size={18} weight="fill" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border-dark pt-6 text-xs text-muted-inv sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Nishita Gandhi. All rights reserved.</p>
          <p>Chartered Accountant &middot; ICAI Membership</p>
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
