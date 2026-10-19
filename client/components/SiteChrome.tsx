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
    pathname === "/smart-erp" ||
    pathname === "/erp-demo" ||
    pathname === "/erp-landing" ||
    pathname === "/crm-landing";
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
