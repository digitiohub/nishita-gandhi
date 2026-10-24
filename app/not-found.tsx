import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Page not found" }]}
        title="This page isn't in the file."
        lede="The link may be old or mistyped. Every service and resource is listed on the sitemap."
      />
      <div className="bg-bg-light px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3">
          <Button size="lg" asChild>
            <Link href="/">Go to the home page</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/sitemap">Open the sitemap</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
