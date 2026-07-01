import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SocialMediaSection from "@/components/Footer/SocialMedia";
import Footer from "@/components/Footer/Footer";
import AosProvider from "@/components/AosProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login Page",
  description: "Login Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AosProvider />
        <Navbar />
        {children}
        <SocialMediaSection />
        <Footer />
      </body>
    </html>
  );
}
