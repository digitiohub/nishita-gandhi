export const colors = {
  bgLight: "#F6F3EC",
  bgDark: "#16181D",
  surfaceDark: "#1F222A",
  borderDark: "#2C303A",
  borderLight: "#E3DDCE",
  foreground: "#1B1A16",
  foregroundInv: "#F6F3EC",
  muted: "#6B665C",
  mutedInv: "#9A9DA6",
  accent: "#3457D5",
  accentDark: "#28409E",
  accentMuted: "rgba(52,87,213,0.15)",
} as const;

export const fontSizeScale = [12, 14, 16, 20, 24, 32, 48, 64] as const;

export const radius = {
  navPill: 9999,
  ctaButton: 9999,
  serviceCard: 4,
  calloutCard: 4,
  badge: 9999,
} as const;

export const client = {
  name: "Nishita Gandhi",
  title: "Chartered Accountant",
  tagline: "Your numbers, handled. Your business, protected.",
  experienceYears: 10,
  foundersAdvised: 100,
  location: "Mumbai, India",
  email: "hello@nishitagandhi.com",
  phone: "+91 99676 46373",
  phoneHref: "+919967646373",
  specializations: [
    "Direct Tax Compliance (Income Tax, TDS, Advance Tax)",
    "Indirect Tax / GST (Registration, Monthly Filings, Notices)",
    "Statutory & Internal Audit",
    "Founder-friendly Financial Advisory",
  ],
} as const;
