import type { Metadata } from "next";
import ERPLanding from "../erp-landing/ERPLanding";

export const metadata: Metadata = {
  title: "ERP Software for Smarter Business | BrainADZ Live",
  description:
    "Connect finance, inventory, sales and operations with an ERP configured around your business. Request a BrainADZ Live ERP demo.",
  alternates: { canonical: "/smart-erp" },
};

export default function Page() {
  return <ERPLanding />;
}
