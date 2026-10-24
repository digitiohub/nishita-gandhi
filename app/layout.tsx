import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Caslon_Text, Manrope } from "next/font/google";

import { MotionProvider } from "@/components/MotionProvider";
import { RevealObserver } from "@/components/RevealObserver";
import { Navbar } from "@/components/nav/Navbar";
import { BackToTop } from "@/components/nav/BackToTop";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const caslonDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caslon-display",
  display: "swap",
});

const caslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-caslon-text",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canishitagandhi.yanisa.in"),
  title: "Chartered Accountant in Mulund, Mumbai | CA Nishita Gandhi",
  description:
    "CA Nishita Gandhi, Chartered Accountant in Mulund, Mumbai: income tax, GST, audit, corporate tax, NRI taxation, company compliance and accounting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${caslonDisplay.variable} ${caslonText.variable} ${manrope.variable}`}>
      <head>
        {/* Reveal styles only apply once JS is known to run, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans antialiased">
        <div id="top" />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg-dark transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
          <RevealObserver />
        </MotionProvider>
      </body>
    </html>
  );
}
