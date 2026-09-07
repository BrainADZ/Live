import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import SocialMediaSection from "@/components/Footer/SocialMedia";
import LocationsSection from "@/components/Footer/Location";
import Footer from "@/components/Footer/Footer";
import AosProvider from "@/components/AosProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brainadzlive.com";

const siteDescription =
  "BrainADZ Live builds custom software, web and mobile applications, cloud solutions, business platforms, and digital signage products for modern businesses.";

const routeTitles: Record<string, string> = {
  "/about-us": "About Us",
  "/about-us/how-we-work-and-function": "How We Work and Function",
  "/about-us/our-core-team": "Our Core Team",

  "/blog": "Technology Insights and Blog",
  "/careers": "Careers",
  "/case-studies": "Technology Case Studies",
  "/community": "Technology Community",
  "/consulting": "Technology Consulting Services",
  "/contact-us": "Contact Us",

  "/digital-signage-products": "Digital Signage Products",

  "/digital-signage-products/a-frame-digital-standee":
    "A-Frame Digital Standee",

  "/digital-signage-products/commercial-led-displays-screens":
    "Commercial LED Displays and Screens",

  "/digital-signage-products/d-model-floor-mount-digital-kiosk":
    "D-Model Floor Mount Digital Kiosk",

  "/digital-signage-products/digital-teaching-conference-board-ifpd":
    "Digital Teaching and Conference Board (IFPD)",

  "/digital-signage-products/lfd-video-walls":
    "LFD Video Walls",

  "/digital-signage-products/self-ordering-kiosk":
    "Self-Ordering Kiosk",

  "/digital-signage-products/vertical-floor-mount-digital-kiosk":
    "Vertical Floor Mount Digital Kiosk",

  "/digital-signage-products/vertical-mobile-charging-digital-kiosk":
    "Vertical Mobile Charging Digital Kiosk",

  "/digital-signage-products/wall-mount-digital-signage":
    "Wall Mount Digital Signage",

  "/industries": "Industries We Serve",

  "/industries/automotive":
    "Automotive Technology Solutions",

  "/industries/education-tech":
    "Education Technology Solutions",

  "/industries/facility-management":
    "Facility Management Technology Solutions",

  "/industries/finance-tech":
    "Financial Technology Solutions",

  "/industries/health-care":
    "Healthcare Technology Solutions",

  "/industries/insurance-tech":
    "Insurance Technology Solutions",

  "/industries/media-entertainment":
    "Media and Entertainment Technology Solutions",

  "/industries/property-tech":
    "Property Technology Solutions",

  "/industries/retail":
    "Retail Technology Solutions",

  "/industries/telecom":
    "Telecom Technology Solutions",

  "/industries/transport":
    "Transport Technology Solutions",

  "/industries/travel-hospitality":
    "Travel and Hospitality Technology Solutions",

  "/software-platforms":
    "Business Software Platforms",

  "/software-platforms/cloud-signage-software":
    "Cloud Signage Software",

  "/software-platforms/crm-software":
    "CRM Software",

  "/software-platforms/erp-software":
    "ERP Software",

  "/software-platforms/pos":
    "POS Billing Software",

  "/software-platforms/signage-application":
    "Digital Signage Application",

  "/software-services":
    "Software Development Services",

  "/software-services/api-integration":
    "API Integration Services",

  "/software-services/application-modernization":
    "Application Modernization Services",

  "/software-services/cloud-consulting":
    "Cloud Consulting Services",

  "/software-services/crm-development":
    "CRM Development Services",

  "/software-services/enterprise-software-solutions":
    "Enterprise Software Solutions",

  "/software-services/erp-development":
    "ERP Development Services",

  "/software-services/mobile-app-development":
    "Mobile App Development Services",

  "/software-services/saas-development":
    "SaaS Development Services",

  "/software-services/software-development":
    "Custom Software Development Services",

  "/software-services/ui-ux-design":
    "UI/UX Design Services",

  "/software-services/web-app-development":
    "Web App Development Services",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "BrainADZ Live | Software, Cloud & Digital Signage Solutions",
    template: "%s | BrainADZ Live",
  },

  description: siteDescription,

  applicationName: "BrainADZ Live",

  authors: [
    {
      name: "BrainADZ Live",
      url: siteUrl,
    },
  ],

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

  verification: {
    google:
      "4GUu01sDPZQ2D1rPn74tulJyTFb9yNhb6JlPKOkgrTg",
  },

  icons: {
    icon: [
      {
        url: "/logos/icon.png",
        type: "image/png",
      },
    ],

    shortcut: "/logos/icon.png",

    apple: [
      {
        url: "/logos/icon.png",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BrainADZ Live",

    title:
      "BrainADZ Live | Software, Cloud & Digital Signage Solutions",

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

    title:
      "BrainADZ Live | Software, Cloud & Digital Signage Solutions",

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

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();

  const pathname =
    headerList.get("x-canonical-path") || "/";

  return {
    ...defaultMetadata,

    ...(routeTitles[pathname]
      ? {
          title: routeTitles[pathname],
        }
      : {}),

    alternates: {
      canonical: pathname,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
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
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
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
