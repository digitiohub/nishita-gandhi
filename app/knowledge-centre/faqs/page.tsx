import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqTabs } from "@/components/site/FaqTabs";
import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { pageMeta, services } from "@/lib/content/site";

export const metadata = pageMeta("knowledge-centre_faqs", "/knowledge-centre/faqs");

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Knowledge Centre", href: "/knowledge-centre" }, { label: "FAQs" }]}
        title="Frequently Asked Questions"
        lede="Answers to common questions on income tax, GST, audit, company compliance and CA certificates. General information only."
      />
      <div className="bg-bg-light px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[980px]" data-reveal>
          <FaqTabs />
        </div>
      </div>
      <CtaBand title="Question not answered here?" />
      <FaqJsonLd faqs={services.flatMap((s) => s.faqs)} />
    </>
  );
}
