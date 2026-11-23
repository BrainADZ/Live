"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import SocialMediaSection from "@/components/Footer/SocialMedia";
import LocationsSection from "@/components/Footer/Location";
import Footer from "@/components/Footer/Footer";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()?.replace(/\/$/, "");
  const isLanding =
    pathname === "/thank-you" ||
    pathname === "/smart-erp/thank-you" ||
    pathname === "/smart-erp" ||
    pathname === "/erp-demo" ||
    pathname === "/erp-landing" ||
    pathname === "/crm-landing" ||
    pathname === "/smart-board-for-teaching" ||
    pathname === "/smart-board-for-teaching/thank-you" ||
    pathname === "/d-model-floor-mount-digital-kiosk-landing" ||
    pathname === "/d-model-floor-mount-digital-kiosk-landing/thank-you" ||
    pathname === "/self-ordering-kiosk-landing" ||
    pathname === "/self-ordering-kiosk-landing/thank-you";
  if (isLanding) return <>{children}</>;
  return (
    <>
      <Navbar />
      {children}
      <SocialMediaSection />
      <LocationsSection />
      <Footer />
    </>
  );
}
