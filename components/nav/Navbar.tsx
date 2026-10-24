"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, List, Phone } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { knowledgeCentre, mainNav, serviceGroups, serviceHref } from "@/lib/content/site";
import { client } from "@/lib/tokens";
import { cn } from "@/lib/utils";

const isIn = (pathname: string, base: string) => pathname === base || pathname.startsWith(`${base}/`);

function Logo() {
  return (
    <Link href="/" aria-label="CA Nishita Gandhi, home" className="flex shrink-0 items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-accent/10 font-serif text-[15px] text-foreground-inv">
        NG
      </span>
      <span className="leading-none">
        <span className="block font-serif text-[19px] text-foreground-inv">Nishita Gandhi</span>
        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-inv">
          Chartered Accountant
        </span>
      </span>
    </Link>
  );
}

// Plain link styled like a menu trigger, with the shared animated underline
function TopLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <NavigationMenuLink asChild active={active}>
      <Link href={href} className={navigationMenuTriggerStyle}>
        {label}
        <span
          aria-hidden="true"
          className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 group-data-[active]:scale-x-100"
        />
      </Link>
    </NavigationMenuLink>
  );
}

function MenuLink({ href, title, body }: { href: string; title: string; body?: string }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group/link block rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-surface-dark focus-visible:bg-surface-dark"
      >
        <span className="flex items-center justify-between gap-3 text-sm font-semibold text-foreground-inv">
          {title}
          <ArrowRight
            size={13}
            weight="bold"
            aria-hidden="true"
            className="-translate-x-1 text-accent opacity-0 transition-[opacity,transform] duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
          />
        </span>
        {body && <span className="mt-1 block text-[13px] leading-[1.5] text-muted-inv">{body}</span>}
      </Link>
    </NavigationMenuLink>
  );
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger data-active={isIn(pathname, "/services") ? "" : undefined}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[880px] grid-cols-3 gap-x-4 gap-y-6 p-6">
              {serviceGroups.map((group) => (
                <div key={group.slug}>
                  <Link
                    href={`/services#${group.slug}`}
                    className="mb-1 block px-3 font-serif-text text-[17px] italic text-muted-inv transition-colors hover:text-foreground-inv"
                  >
                    {group.name}
                  </Link>
                  {group.services.map((s) => (
                    <MenuLink key={s.slug} href={serviceHref(s)} title={s.name} />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-border-dark bg-surface-dark/50 px-9 py-4 text-sm">
              <span className="text-muted-inv">Fifteen services across six areas.</span>
              <Link href="/services" className="font-semibold text-accent underline-offset-4 hover:underline">
                See all services
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {mainNav.map((l) => (
          <NavigationMenuItem key={l.href}>
            <TopLink {...l} active={isIn(pathname, l.href)} />
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger data-active={isIn(pathname, "/knowledge-centre") ? "" : undefined}>
            Knowledge Centre
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[560px] grid-cols-2 gap-1 p-4">
              {knowledgeCentre.map((k) => (
                <MenuLink key={k.href} href={k.href} title={k.title} body={k.body} />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const linkClass = (active: boolean) =>
    cn(
      "block border-b border-border-dark py-4 font-serif text-[26px] leading-tight transition-colors hover:text-accent",
      active ? "text-accent" : "text-foreground-inv"
    );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground-inv transition-colors hover:bg-foreground-inv/10"
        >
          <List className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex w-[88vw] flex-col overflow-y-auto">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Mobile" className="mt-10">
          <Link href="/" onClick={close} className={linkClass(pathname === "/")}>
            Home
          </Link>
          <Accordion type="single" collapsible defaultValue={isIn(pathname, "/services") ? "services" : undefined}>
            <AccordionItem value="services" className="border-border-dark">
              <AccordionTrigger className="py-4 font-serif text-[26px] font-normal text-foreground-inv">
                Services
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                {serviceGroups.map((g) => (
                  <div key={g.slug} className="mt-3 first:mt-0">
                    <p className="font-serif-text text-sm italic text-muted-inv">{g.name}</p>
                    {g.services.map((s) => (
                      <Link
                        key={s.slug}
                        href={serviceHref(s)}
                        onClick={close}
                        className={cn(
                          "block py-2 text-[15px] transition-colors hover:text-accent",
                          pathname === serviceHref(s) ? "text-accent" : "text-muted-inv"
                        )}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {mainNav.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className={linkClass(isIn(pathname, l.href))}>
              {l.label}
            </Link>
          ))}
          <Accordion type="single" collapsible defaultValue={isIn(pathname, "/knowledge-centre") ? "kc" : undefined}>
            <AccordionItem value="kc" className="border-border-dark">
              <AccordionTrigger className="py-4 font-serif text-[26px] font-normal text-foreground-inv">
                Knowledge Centre
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                {knowledgeCentre.map((k) => (
                  <Link
                    key={k.href}
                    href={k.href}
                    onClick={close}
                    className={cn(
                      "block py-2 text-[15px] transition-colors hover:text-accent",
                      pathname === k.href ? "text-accent" : "text-muted-inv"
                    )}
                  >
                    {k.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link href="/contact" onClick={close} className={linkClass(pathname === "/contact")}>
            Contact
          </Link>
        </nav>
        <a
          href={`tel:${client.phoneHref}`}
          className="mt-auto flex items-center gap-3 pt-10 text-sm text-muted-inv transition-colors hover:text-accent"
        >
          <Phone size={18} className="text-accent" aria-hidden="true" />
          {client.phone}
        </a>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 8));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-bg-dark/70 px-6 lg:px-10 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300",
        scrolled && "border-border-dark bg-bg-dark/95 shadow-[0_8px_32px_rgba(4,10,20,0.35)]"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6">
        <Logo />
        <DesktopMenu pathname={pathname} />
        <div className="flex items-center gap-2">
          <Button size="sm" variant={pathname === "/contact" ? "outline-inverse" : "default"} className="hidden sm:inline-flex" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <div className="lg:hidden">
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
}
