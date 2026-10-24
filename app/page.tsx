import { Navbar } from "@/components/nav/Navbar";
import { BackToTop } from "@/components/nav/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Practice } from "@/components/sections/Practice";
import { Services } from "@/components/sections/Services";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Practice />
        <Services />
        <WhoIsItFor />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
