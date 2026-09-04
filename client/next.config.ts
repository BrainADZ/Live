import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      {
        source: "/services/software-services",
        destination: "/software-services",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/software-services/:path*",
        permanent: true,
      },
      {
        source: "/products/digital-signage-products",
        destination: "/digital-signage-products",
        permanent: true,
      },
      { source: "/blog/:slug", destination: "/blog", permanent: true },
      {
        source: "/case-studies/:slug",
        destination: "/case-studies",
        permanent: true,
      },
      { source: "/faqs", destination: "/contact-us", permanent: true },
      {
        source: "/privacy-policy",
        destination: "/contact-us",
        permanent: true,
      },
      { source: "/terms", destination: "/contact-us", permanent: true },
      {
        source: "/privacy-choices",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/consumer-health-privacy",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/unsubscribe",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
