"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { List } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv transition-colors hover:text-foreground-inv"
    >
      {label}
      <span className="absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-bg-dark/90 backdrop-blur transition-[border-color,box-shadow] duration-300",
        scrolled && "border-border-dark shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="outline-inverse" size="sm" asChild>
            <a href="#contact">Book a Call</a>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Button variant="outline-inverse" size="sm" asChild>
            <a href="#contact">Book a Call</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center text-foreground-inv"
              >
                <List className="h-5 w-5" weight="regular" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-12 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold uppercase tracking-[0.06em] text-foreground-inv transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
