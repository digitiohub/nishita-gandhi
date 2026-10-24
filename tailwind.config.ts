import type { Config } from "tailwindcss";

const config: Config = {
  future: { hoverOnlyWhenSupported: true },
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#5EC4B6",
        "accent-dark": "#1A6B62",
        "bg-light": "#F6F3EC",
        "bg-dark": "#0E1A2B",
        "surface-dark": "#14243A",
        "border-dark": "#22344E",
        "border-light": "#E3DDCE",
        foreground: "#14202E",
        "foreground-inv": "#F6F3EC",
        muted: "#5B6270",
        "muted-inv": "#9AA7BA",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "#5EC4B6",
          foreground: "#0E1A2B",
        },
        secondary: {
          DEFAULT: "#14243A",
          foreground: "#F6F3EC",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        accent2: {
          DEFAULT: "hsl(var(--accent2))",
          foreground: "hsl(var(--accent2-foreground))",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
