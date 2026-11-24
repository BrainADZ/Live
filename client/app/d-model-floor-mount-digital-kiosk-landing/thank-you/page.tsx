import type { Metadata } from "next";
import ProductThankYou from "@/components/ProductThankYou";

export const metadata: Metadata = {
  title: "Thank You | D-Model Floor Mount Digital Kiosk",
  robots: { index: false, follow: false },
  alternates: { canonical: "/d-model-floor-mount-digital-kiosk-landing/thank-you" },
};

export default function Page() {
  return <ProductThankYou productName="D-Model Floor Mount Digital Kiosk" returnHref="/d-model-floor-mount-digital-kiosk-landing" />;
}
