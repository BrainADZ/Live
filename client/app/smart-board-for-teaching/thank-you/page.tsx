import type { Metadata } from "next";
import ProductThankYou from "@/components/ProductThankYou";

export const metadata: Metadata = {
  title: "Thank You | Smart Board for Teaching",
  robots: { index: false, follow: false },
  alternates: { canonical: "/smart-board-for-teaching/thank-you" },
};

export default function Page() {
  return <ProductThankYou productName="Smart Board for Teaching" returnHref="/smart-board-for-teaching" />;
}
