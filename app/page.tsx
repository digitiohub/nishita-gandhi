import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Practice } from "@/components/sections/Practice";
import { Services } from "@/components/sections/Services";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Resources } from "@/components/sections/Resources";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("home", "/");

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Practice />
      <Services />
      <WhoIsItFor />
      <Process />
      <About />
      <Resources />
      <Faq />
      <Contact />
    </>
  );
}
