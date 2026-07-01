import AboutCompany from "@/components/about/AboutCompany";
import CoreValues from "@/components/about/CoreValue";
import FutureCommitments from "@/components/about/FutureCommit";
import Hero from "@/components/about/Hero";
import MissionVision from "@/components/about/Mission&Vision";
import FastFacts from "@/components/about/StatsFact";
import CtaSection from "@/components/home/CTA";
import DigitalExcellenceTimeline from "@/components/about/OurJourney";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <AboutCompany />
      <MissionVision />
      <CtaSection />
      <CoreValues />
      <FastFacts />
      <DigitalExcellenceTimeline />
      <FutureCommitments />

      {/* baaki about page sections yaha call honge */}
    </main>
  );
}