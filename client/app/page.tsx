import AboutSection from "@/components/home/About";
import BlogSection from "@/components/home/Blog";
import BrandCarousel from "@/components/home/BrandCarousel";
import CtaSection from "@/components/home/CTA";
// import Hero from "@/components/home/Hero";
import HeroSlider from "@/components/home/Hero-Slider";
import IndustriesSection from "@/components/home/Industries";
import InsideBadzSection from "@/components/home/InsideBadz";
import NewsSection from "@/components/home/News";
import ProductSection from "@/components/home/Product";
import ServiceSection from "@/components/home/Service";
import StatsSection from "@/components/home/Stats";
import TeamSection from "@/components/home/Team";
import TechStackSection from "@/components/home/TechStack";
import TestimonialSection from "@/components/home/Testimonials";
import WhyChooseSection from "@/components/home/WhyBrainADZ";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      {/* <Hero /> */}
      <AboutSection />
      <CtaSection />
      <ServiceSection />
      <ProductSection />
      <BrandCarousel />
      <IndustriesSection />
      <InsideBadzSection />
      <div className="minimal-scroll-reveal">
        <StatsSection />
        <TechStackSection />
        <WhyChooseSection />
        <CtaSection />
        <TeamSection />
        <TestimonialSection />
        <BlogSection />

        {/* DIVIDER */}
        <div
          className="mx-auto mt-4 h-px w-full max-w-450 bg-[#d0d0d0] px-4 md:px-12"
          data-aos="fade-up"
        />
        <NewsSection />
      </div>
    </main>
  );
}
