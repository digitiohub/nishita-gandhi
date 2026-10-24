import type { Metadata } from "next";

import servicesData from "./services.json";
import meta from "./meta.json";

export type Service = (typeof servicesData.services)[number];

export const services: Service[] = servicesData.services;
export const processSteps = servicesData.steps;

const GROUP_SLUGS: Record<string, string> = {
  "Income Tax": "income-tax",
  GST: "gst",
  "Audit & Assurance": "audit-assurance",
  "Business & Corporate": "business-corporate",
  "Accounting & Advisory": "accounting-advisory",
  Certifications: "certifications",
};

export const serviceGroups = Object.entries(GROUP_SLUGS).map(([name, slug]) => ({
  name,
  slug,
  services: services.filter((s) => s.group === name),
}));

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceByName = (name: string) => services.find((s) => s.name === name);
export const serviceHref = (s: Service) => `/services/${s.slug}`;

export const knowledgeCentre = [
  {
    title: "Updates & Articles",
    href: "/knowledge-centre/updates",
    body: "Short, practical explainers on new rules and what they mean for you.",
  },
  {
    title: "Compliance Calendar",
    href: "/knowledge-centre/compliance-calendar",
    body: "Key recurring due dates under income tax, GST, payroll and company law.",
  },
  {
    title: "Frequently Asked Questions",
    href: "/knowledge-centre/faqs",
    body: "Straight answers on income tax, GST, audit, company compliance and certificates.",
  },
  {
    title: "Useful Links",
    href: "/knowledge-centre/useful-links",
    body: "Official portals for income tax, GST, company law, TDS and UDIN verification.",
  },
];

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Who We Work With", href: "/who-we-work-with" },
];

export const legalNav = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Sitemap", href: "/sitemap" },
];

type PageKey = keyof typeof meta;

// Titles and descriptions carried over from the live site so search listings stay the same
export function pageMeta(key: PageKey, path: string): Metadata {
  const { title, description } = meta[key];
  return { title: { absolute: title }, description, alternates: { canonical: path } };
}
