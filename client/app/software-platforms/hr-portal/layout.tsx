import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Portal | BrainADZ Live",
  description:
    "Showcase BrainADZ HR Portal for hiring, attendance, employee records, payroll and performance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
