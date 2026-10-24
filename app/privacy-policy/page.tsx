import { ProsePage } from "@/components/site/ProsePage";
import { pageMeta } from "@/lib/content/site";
import { client } from "@/lib/tokens";

export const metadata = pageMeta("privacy-policy", "/privacy-policy");

const mail = <a href={`mailto:${client.email}`}>{client.email}</a>;

const ITEMS: [string, React.ReactNode][] = [
  ["What we collect", "Your name, phone, email and what you tell us in the form or by email."],
  ["Why", "To reply to your enquiry and, if you become a client, to provide services and meet legal obligations."],
  [
    "Sharing",
    "We don't sell or rent personal data. It's shared only with providers who host our website or email, under confidentiality, or where the law requires.",
  ],
  ["Retention", "Enquiries are kept only as long as needed; client records as the law and professional standards require."],
  ["Security", "Reasonable technical and organisational safeguards."],
  ["Your rights", <>Access, correction, deletion or withdrawal of consent – write to {mail}.</>],
  ["Cookies", "Essential cookies only."],
  ["Grievance contact", <>CA Nishita Gandhi, {mail}.</>],
];

export default function PrivacyPage() {
  return (
    <ProsePage title="Privacy Policy" crumb="Privacy Policy">
      <dl className="border-t-2 border-foreground/85">
        {ITEMS.map(([k, v]) => (
          <div key={k} className="grid grid-cols-1 gap-1 border-b border-border-light py-5 sm:grid-cols-[200px_1fr] sm:gap-8">
            <dt>{k}</dt>
            <dd className="text-[16px] leading-[1.7]">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="text-[15px] text-muted">
        Prepared with reference to the Digital Personal Data Protection Act, 2023; updated as rules are notified.
      </p>
    </ProsePage>
  );
}
