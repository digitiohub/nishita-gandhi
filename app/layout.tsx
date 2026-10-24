import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CA Nishita Gandhi, Chartered Accountant in Mulund, Mumbai",
  description:
    "Income tax, NRI tax, GST, audit and company compliance. Chartered Accountant since 2015, based in Mulund West, Mumbai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
