import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wayfinding Software | BrainADZ Live",
  description:
    "Explore Wayezy mobile wayfinding for store discovery, floor maps and visitor directions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
