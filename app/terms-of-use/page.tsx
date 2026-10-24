import { ProsePage } from "@/components/site/ProsePage";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("terms-of-use", "/terms-of-use");

export default function TermsPage() {
  return (
    <ProsePage title="Terms of Use" crumb="Terms of Use">
      <p>
        By using this website you agree to these terms. Content is general information and may change without
        notice. Please don&rsquo;t copy or republish it without permission. The website is provided &lsquo;as
        is&rsquo;, without warranties. Indian law applies; courts in Mumbai have jurisdiction.
      </p>
    </ProsePage>
  );
}
