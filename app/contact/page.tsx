import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { ContactChannels } from "@/components/sections/Contact";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("contact", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Contact – Chartered Accountant in Mulund, Mumbai"
        lede="Tell us what you need."
      />
      <div className="bg-bg-light px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          {/* The form sits in a navy folder on the cream page: the start of a new file */}
          <section
            aria-label="Enquiry form"
            data-reveal
            className="relative rounded-lg bg-bg-dark p-7 shadow-[0_32px_64px_-36px_rgba(14,26,43,0.7)] sm:p-10 lg:p-12"
          >
            <span aria-hidden="true" className="absolute -top-3 left-8 h-4 w-32 rounded-t-[10px] bg-bg-dark" />
            <ContactForm />
          </section>
          <section aria-labelledby="office" className="rounded-lg bg-bg-dark p-7 sm:p-10 lg:self-start">
            <h2 id="office" className="font-serif text-[32px] leading-tight text-foreground-inv">
              CA Nishita Gandhi
            </h2>
            <p className="mb-7 mt-2 text-[15px] text-muted-inv">By appointment &middot; most work can be done online.</p>
            <ContactChannels />
          </section>
        </div>
      </div>
    </>
  );
}
