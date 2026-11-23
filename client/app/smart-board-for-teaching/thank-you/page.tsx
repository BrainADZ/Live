import type { Metadata } from "next";
import DemoThankYou from "@/components/DemoThankYou";

export const metadata: Metadata = {
  title: "Thank You | Smart Board for Teaching",
  robots: { index: false, follow: false },
  alternates: { canonical: "/smart-board-for-teaching/thank-you" },
};

export default function Page() {
  return <DemoThankYou enquiryLanding productName="Smart Board for Teaching" returnHref="/smart-board-for-teaching" />;
}
