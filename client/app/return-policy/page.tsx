import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "@/components/legal/PolicyPage";

export const metadata: Metadata = {
  title: "Return Policy",
  description: "Return, replacement and cancellation guidance for BrainADZ Live digital signage hardware, software and project services.",
  alternates: {
    canonical: "/return-policy",
  },
};

const sections: PolicySection[] = [
  {
    id: "scope",
    title: "What this policy covers",
    paragraphs: [
      "BrainADZ Live provides digital signage hardware, software platforms, custom development and consulting services. Return, replacement, cancellation and refund arrangements vary by the nature of the purchase and are governed by the approved quotation, order confirmation or project agreement, subject to applicable law.",
      "Please confirm the relevant terms before placing an order. This policy does not establish a universal change-of-mind return window or a fixed refund period for all products and services.",
    ],
  },
  {
    id: "hardware",
    title: "Hardware returns and delivery issues",
    paragraphs: [
      "For digital standees, kiosks, interactive displays, LED screens, video walls and related hardware, check the delivered model, quantity and visible condition when it arrives. Report damage, missing items, a wrong product or a suspected defect promptly to support@brainadzlive.com with the order reference and available evidence.",
      "The appropriate remedy depends on the issue, applicable warranty, agreed specifications and your legal rights. Contact our team to arrange assessment and receive return or collection instructions before shipping an item.",
    ],
  },
  {
    id: "custom",
    title: "Customised products and change-of-mind requests",
    paragraphs: [
      "Products with custom enclosures, branding, dimensions, fabrication or project-specific configuration may have different cancellation and change-of-mind arrangements from standard hardware. Eligibility and any costs depend on the agreed order terms and the stage of production.",
      "Customisation does not remove applicable rights where goods are defective, damaged, incorrectly supplied or do not match the agreed specifications. A request should be assessed on its circumstances rather than treated as automatically ineligible.",
    ],
  },
  {
    id: "software",
    title: "Software, licences and project services",
    paragraphs: [
      "Custom software, CRM and ERP implementation, integrations, cloud consulting, design work and other services cannot be returned in the same way as physical goods. Cancellation, licence access, milestone payments and refunds depend on the written engagement terms, work performed and applicable legal rights.",
      "Report a delivery issue or a difference from the agreed scope with the relevant requirement and supporting details. Correction, further delivery, cancellation or a refund may be considered as appropriate under the agreement and applicable law. Third-party licence or subscription terms may also apply.",
    ],
  },
  {
    id: "request",
    title: "How to raise a request",
    paragraphs: [
      "Email support@brainadzlive.com with the subject 'Return or cancellation request' and include the details below. You can also contact us through the website if you need help identifying the correct reference.",
    ],
    bullets: [
      "Your name, company and contact details.",
      "Order, invoice or project reference and the relevant delivery or purchase date.",
      "Product model, serial number where available, or the service concerned.",
      "A description of the issue and any useful photos, videos or agreed specification details.",
      "The remedy you are requesting, such as assessment, replacement, cancellation or refund.",
    ],
  },
  {
    id: "handling",
    title: "Assessment, packaging and shipping",
    paragraphs: [
      "Keep the product, accessories and available packaging safe while a request is assessed. Suitable packaging helps prevent further damage during an agreed return. Original packaging may assist handling, but its absence does not automatically remove applicable statutory rights.",
      "Our team will confirm the next steps, any inspection needed and the return or collection arrangement. Responsibility for shipping, installation removal or handling costs depends on the reason for the return, written terms and applicable law; these details should be confirmed before an item is dispatched.",
    ],
  },
  {
    id: "refunds",
    title: "Refunds and cancellations",
    paragraphs: [
      "Where a refund or cancellation is approved or legally required, the amount, payment method and expected processing time will be communicated for the specific request. Payment-provider processing may affect when funds appear in your account.",
      "Any proposed deductions for completed work, custom production or other costs must be consistent with the agreed terms and applicable law and explained to you. Contact us for the status of an existing request rather than creating a new order or return shipment.",
    ],
  },
  {
    id: "warranty",
    title: "Warranty and continuing support",
    paragraphs: [
      "A return request and a warranty or repair request may follow different procedures. The warranty period, coverage, installation conditions and support scope are set out in the applicable product documents or agreement. Include those documents when reporting a warranty issue where available.",
      "This policy does not limit mandatory remedies for defective or misdescribed goods or deficient services. For questions about an order, return or warranty, contact support@brainadzlive.com; general enquiries can be sent to info@brainadzlive.com.",
    ],
  },
];

export default function ReturnPolicy() {
  return (
    <PolicyPage
      title="Return Policy"
      heroImage="/hero/software-platforms.webp"
      description="Guidance for hardware returns, replacements and cancellations across our digital signage products, software platforms and project services."
      sections={sections}
    />
  );
}
