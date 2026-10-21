import type { Metadata } from "next";
import PolicyPage from "@/components/legal/PolicyPage";
import { termsSections } from "@/data/legalPolicies";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Website usage and engagement terms for BrainADZ Live software services, business platforms and digital signage products.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditions() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      heroImage="/hero/about.webp"
      description="Clear terms for using our website and enquiring about software, business platforms and digital signage solutions."
      sections={termsSections}
    />
  );
}
