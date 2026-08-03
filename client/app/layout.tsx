import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SocialMediaSection from "@/components/Footer/SocialMedia";
import LocationsSection from "@/components/Footer/Location";
import Footer from "@/components/Footer/Footer";
import AosProvider from "@/components/AosProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brainadzlive.in";

const siteDescription =
  "BrainADZ Live builds custom software, web and mobile applications, cloud solutions, business platforms, and digital signage products for modern businesses.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BrainADZ Live | Software, Cloud & Digital Signage Solutions",
    template: "%s | BrainADZ Live",
  },
  description: siteDescription,
  applicationName: "BrainADZ Live",
  authors: [{ name: "BrainADZ Live", url: siteUrl }],
  creator: "BrainADZ Live",
  publisher: "BrainADZ Live",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "cloud consulting",
    "CRM software",
    "ERP software",
    "digital signage solutions",
    "digital standee",
    "BrainADZ Live",
  ],
  icons: {
    icon: [{ url: "/logos/icon.png", type: "image/png" }],
    shortcut: "/logos/icon.png",
    apple: [{ url: "/logos/icon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BrainADZ Live",
    title: "BrainADZ Live | Software, Cloud & Digital Signage Solutions",
    description: siteDescription,
    images: [
      {
        url: "/logos/logo.png",
        width: 655,
        height: 394,
        alt: "BrainADZ Live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainADZ Live | Software, Cloud & Digital Signage Solutions",
    description: siteDescription,
    images: ["/logos/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BrainADZ Live",
              url: siteUrl,
              logo: `${siteUrl}/logos/logo.png`,
              email: "info@brainadzlive.com",
              sameAs: [
                "https://www.facebook.com/brainadzlive",
                "https://www.instagram.com/brainadz.live/",
                "https://www.linkedin.com/company/brainadz-live/",
                "https://www.youtube.com/@BrainADZLive",
              ],
            }),
          }}
        />
        <AosProvider />
        <Navbar />
        {children}
        <SocialMediaSection />
        <LocationsSection />
        <Footer />
      </body>
    </html>
  );
}
