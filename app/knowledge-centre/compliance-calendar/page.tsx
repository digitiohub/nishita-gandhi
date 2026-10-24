import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { ComplianceCalendar } from "@/components/site/ComplianceCalendar";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("knowledge-centre_compliance-calendar", "/knowledge-centre/compliance-calendar");

export default function CompliancePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Knowledge Centre", href: "/knowledge-centre" }, { label: "Compliance Calendar" }]}
        title="Compliance Calendar"
        lede="Key recurring due dates under income tax, GST, payroll and company law. Dates can be changed or extended by the government – please confirm before acting."
      />
      <div className="bg-bg-light px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[980px]" data-reveal>
          <ComplianceCalendar />
        </div>
      </div>
      <CtaBand title="Want these dates tracked for you?" />
    </>
  );
}
