import { PageHeader } from "@/components/site/PageHeader";

// Short legal / policy pages: one readable column on cream
export function ProsePage({ title, crumb, children }: { title: string; crumb: string; children: React.ReactNode }) {
  return (
    <>
      <PageHeader crumbs={[{ label: "Home", href: "/" }, { label: crumb }]} title={title} />
      <div className="bg-bg-light px-6 py-16 lg:px-10 lg:py-24">
        <div
          data-reveal
          className="mx-auto max-w-[68ch] space-y-6 text-[17px] leading-[1.75] text-foreground/85 [&_a]:font-semibold [&_a]:text-accent-dark [&_a]:underline [&_dt]:font-serif-text [&_dt]:text-[19px] [&_dt]:text-foreground"
        >
          {children}
        </div>
      </div>
    </>
  );
}
