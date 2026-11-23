import type { Metadata } from "next";
import DemoThankYou from "@/components/DemoThankYou";

export const metadata: Metadata = {
  title: "Thank You | Self Ordering Kiosk",
  robots: { index: false, follow: false },
  alternates: { canonical: "/self-ordering-kiosk-landing/thank-you" },
};

export default function Page() {
  return <DemoThankYou enquiryLanding productName="Self Ordering Kiosk" returnHref="/self-ordering-kiosk-landing" />;
}
