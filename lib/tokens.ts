export const colors = {
  bgLight: "#F6F3EC",
  bgDark: "#0E1A2B",
  surfaceDark: "#14243A",
  borderDark: "#22344E",
  borderLight: "#E3DDCE",
  foreground: "#14202E",
  foregroundInv: "#F6F3EC",
  muted: "#5B6270",
  mutedInv: "#9AA7BA",
  accent: "#5EC4B6",
  accentDark: "#1A6B62",
  accentMuted: "rgba(94,196,182,0.15)",
} as const;

export const fontSizeScale = [12, 14, 16, 20, 24, 32, 48, 64] as const;

export const radius = {
  navPill: 9999,
  ctaButton: 9999,
  serviceCard: 8,
  calloutCard: 8,
  badge: 9999,
} as const;

export const client = {
  name: "Nishita Gandhi",
  title: "Chartered Accountant",
  experienceYears: 10,
  qualifiedYear: 2015,
  location: "Mulund West, Mumbai",
  address: "1720, The Gateway, Mulund West, Mumbai 400080",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=1720+The+Gateway+Mulund+West+Mumbai+400080",
  email: "nishita993@gmail.com",
  phone: "+91 99676 46373",
  phoneHref: "+919967646373",
  languages: ["English", "Hindi", "Gujarati"],
} as const;
