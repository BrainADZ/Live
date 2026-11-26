import type { Metadata } from "next";
import ProductThankYou from "@/components/ProductThankYou";

export const metadata: Metadata = {
  title: "Thank You | Self Ordering Kiosk",
  robots: { index: false, follow: false },
  alternates: { canonical: "/self-ordering-kiosk-landing/thank-you" },
};

export default function Page() {
  return <ProductThankYou productName="Self Ordering Kiosk" returnHref="/self-ordering-kiosk-landing" illustrationSrc="/thankyou-page/Self%20Ordering%20Kiosk%20Thank%20You.webp" showOverlayText={false} />;
}
