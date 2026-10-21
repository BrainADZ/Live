import type { Metadata } from "next";
import PolicyPage from "@/components/legal/PolicyPage";
import { privacySections } from "@/data/legalPolicies";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BrainADZ Live handles information shared through website enquiries, service discussions and product requests.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      heroImage="/hero/cloud-consulting.webp"
      description="How we handle the information you share while exploring our services, requesting a product or working with our team."
      sections={privacySections}
    />
  );
}
