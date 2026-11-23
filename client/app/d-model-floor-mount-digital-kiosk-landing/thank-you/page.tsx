import type { Metadata } from "next";
import DemoThankYou from "@/components/DemoThankYou";

export const metadata: Metadata = {
  title: "Thank You | D-Model Floor Mount Digital Kiosk",
  robots: { index: false, follow: false },
  alternates: { canonical: "/d-model-floor-mount-digital-kiosk-landing/thank-you" },
};

export default function Page() {
  return <DemoThankYou enquiryLanding productName="D-Model Floor Mount Digital Kiosk" returnHref="/d-model-floor-mount-digital-kiosk-landing" />;
}
