import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Tracker | BrainADZ Live",
  description:
    "Explore BrainADZ Project Tracker dashboards, project boards, tasks and team collaboration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
