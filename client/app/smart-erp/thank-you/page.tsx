import type { Metadata } from "next";
import DemoThankYou from "@/components/DemoThankYou";

export const metadata: Metadata = {
  title: "Thank You for Requesting an ERP Demo",
  robots: { index: false, follow: false },
  alternates: { canonical: "/smart-erp/thank-you" },
};

export default function ErpThankYouPage() {
  return <DemoThankYou erpLanding />;
}
