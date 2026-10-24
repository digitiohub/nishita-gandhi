"use client";

import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceGroups, serviceHref } from "@/lib/content/site";

export function FaqTabs() {
  return (
    <Tabs defaultValue={serviceGroups[0].slug}>
      <TabsList aria-label="FAQ topics">
        {serviceGroups.map((g) => (
          <TabsTrigger key={g.slug} value={g.slug}>
            {g.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {serviceGroups.map((g) => (
        // forceMount keeps every answer in the HTML for search engines; inactive tabs are just hidden
        <TabsContent key={g.slug} value={g.slug} forceMount className="space-y-14 data-[state=inactive]:hidden">
          {g.services.map((s) => (
            <section key={s.slug} aria-labelledby={`faq-${s.slug}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2 id={`faq-${s.slug}`} className="font-serif-text text-[24px] italic leading-snug text-foreground">
                  {s.name}
                </h2>
                <Link href={serviceHref(s)} className="text-sm font-semibold text-accent-dark underline-offset-4 hover:underline">
                  About this service
                </Link>
              </div>
              <Accordion type="single" collapsible className="mt-3 border-t border-border-light">
                {s.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-lg">{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
