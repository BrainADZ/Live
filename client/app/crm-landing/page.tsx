import type { Metadata } from "next";
import CRMLanding from "./CRMLanding";

export const metadata: Metadata = {
  title: "CRM Software for Smarter Sales | BrainADZ Live",
  description: "Connect leads, customers, sales workflows and reporting with a CRM configured around your business. Request a BrainADZ Live CRM demo.",
};

export default function Page() {
  return <CRMLanding />;
}
