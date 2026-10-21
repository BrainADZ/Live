import type { Metadata } from "next";
import { redirect } from "next/navigation";
import DemoThankYou from "@/components/DemoThankYou";

export const metadata: Metadata = {
  title: "Thank You for Requesting a Demo",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string | string[] }>;
}) {
  if ((await searchParams).from === "smart-erp") {
    redirect("/smart-erp/thank-you");
  }

  return <DemoThankYou />;
}
