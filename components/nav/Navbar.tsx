"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { List, Phone } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { client } from "@/lib/tokens";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#clients" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a
      href={href}
      aria-current={active ? "true" : undefined}
      className={cn(
        "group relative py-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv transition-colors duration-200 hover:text-foreground-inv focus-visible:text-foreground-inv",
        active && "text-foreground-inv"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </a>
  );
}

function Logo() {
  return (
    <a href="#top" aria-label="Nishita Gandhi, home" className="flex shrink-0 items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-accent/10">
        <span className="font-serif text-sm text-foreground-inv">NG</span>
      </div>
      <div className="leading-none">
        <p className="font-serif text-base text-foreground-inv">Nishita Gandhi</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-inv">
          Chartered Accountant
        </p>
      </div>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  // Highlight the link of the section crossing the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-bg-dark/60 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300",
        scrolled && "border-border-dark bg-bg-dark/90 shadow-[0_8px_32px_rgba(4,10,20,0.35)]"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} active={active === link.href} />
          ))}
        </div>

        <div className="hidden lg:block">
          <Button size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="outline-inverse" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-foreground-inv transition-colors hover:bg-foreground-inv/10"
              >
                <List className="h-5 w-5" weight="regular" />
              </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              <SheetTitle className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-inv">
                Menu
              </SheetTitle>
              <div className="mt-10 flex flex-col">
                {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease, delay: 0.1 + i * 0.05 }}
                    className="border-b border-border-dark py-4 font-serif text-2xl text-foreground-inv transition-colors hover:text-accent"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <a
                href={`tel:${client.phoneHref}`}
                className="mt-auto flex items-center gap-3 text-sm text-muted-inv transition-colors hover:text-accent"
              >
                <Phone size={18} className="text-accent" />
                {client.phone}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
