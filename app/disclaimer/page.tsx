import { ProsePage } from "@/components/site/ProsePage";
import { pageMeta } from "@/lib/content/site";

export const metadata = pageMeta("disclaimer", "/disclaimer");

export default function DisclaimerPage() {
  return (
    <ProsePage title="Disclaimer" crumb="Disclaimer">
      <p>
        Under the rules of the Institute of Chartered Accountants of India, chartered accountants may not solicit
        work or advertise. This website exists to give information about the practice to people who look for it of
        their own accord.
      </p>
      <p>
        Content here is general information, not professional advice. Laws, rates and due dates change often, and
        the content may not reflect the latest position. Please don&rsquo;t act on anything here without advice on
        your specific facts.
      </p>
      <p>
        Using this website, or sending information through it, does not create a client relationship. CA Nishita
        Gandhi is not responsible for any loss from action taken on the basis of this website. External links are
        provided for convenience; we&rsquo;re not responsible for their content.
      </p>
    </ProsePage>
  );
}
