/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import ERPLocations from "@/app/erp-landing/ERPLocations";
import ProductClientCarousel from "@/components/ProductClientCarousel";
import SmartBoardEnquiryForm, { SmartBoardAboutPopup } from "@/components/SmartBoardEnquiryForm";
import SmartBoardHeroCarousel from "@/components/SmartBoardHeroCarousel";
import SmartBoardStats from "./SmartBoardStats";
import layout from "./SmartBoardLayout.module.css";

export const metadata: Metadata = {
  title: "Smart Board for Teaching | BrainADZ Live",
  description: "Interactive smart boards for classrooms, meeting spaces and smarter collaboration.",
  alternates: { canonical: "/smart-board-for-teaching" },
};

const solutions = [
  { title: "Schools & Classrooms", description: "Bring lessons, visual content and on-screen writing into one interactive space." },
  { title: "Colleges & Universities", description: "Support lectures, discussions and presentations with a large interactive display." },
  { title: "Coaching & Training", description: "Explain concepts, annotate learning material and keep sessions engaging." },
  { title: "Conference Rooms", description: "Present ideas and collaborate around shared content in meetings." },
];

// Independent copy of the homepage Why Choose cards and icons.
const reasons = [
  { title: "Hardware + Software Expertise", description: "We combine smart display products with reliable software systems for complete digital solutions.", icon: "/product-landing/smart-board/why/hardware-software.svg" },
  { title: "AI-driven Approach", description: "Our solutions are designed with automation, analytics, and AI capabilities for smarter operations.", icon: "/product-landing/smart-board/why/ai.svg" },
  { title: "Secure Architecture", description: "We focus on scalable, secure, and maintainable technology architecture for business growth.", icon: "/product-landing/smart-board/why/architecture.svg" },
  { title: "Custom Workflows", description: "Every business is different, so we design workflows and systems around your actual needs.", icon: "/product-landing/smart-board/why/workflow.svg" },
  { title: "Reliable Support", description: "From setup to maintenance, our team supports your digital systems with a practical approach.", icon: "/product-landing/smart-board/why/support.svg" },
  { title: "Business-first Delivery", description: "We build technology that helps improve communication, engagement, automation, and performance.", icon: "/product-landing/smart-board/why/business.svg" },
];

const faqs = [
  {
    question: "Can a smart board connect to a laptop or external device?",
    answer: "Yes, most interactive flat panels support external device connectivity through compatible ports such as HDMI and USB. This allows users to connect laptops and other supported devices for presentations and content display.",
  },
  {
    question: "Does using a smart board require technical knowledge?",
    answer: "No advanced technical knowledge is generally required for basic operations. Users can learn common functions such as writing, opening presentations and navigating the display with simple guidance.",
  },
  {
    question: "Can an existing classroom projector be replaced with a smart board?",
    answer: "Yes, an interactive flat panel can serve as an alternative to a traditional projector and projection screen. The right choice depends on classroom size, viewing requirements and the existing setup.",
  },
  {
    question: "Does a smart board require an internet connection to work?",
    answer: "Not necessarily. Basic functions such as displaying content and writing on the screen may work without internet. However, online applications, cloud services and certain content-sharing features may require connectivity.",
  },
  {
    question: "How should an interactive flat panel be maintained?",
    answer: "Clean the screen using a soft microfiber cloth and a manufacturer-approved screen cleaner. Avoid harsh chemicals, excessive moisture and sharp objects to protect the display surface.",
  },
  {
    question: "What should I check before purchasing a smart board?",
    answer: "Consider screen size, display resolution, touch responsiveness, operating system, connectivity, software compatibility, warranty and after-sales support. Also check whether the selected model supports your intended teaching or business applications.",
  },
];

export default function Page() {
  return (
    <main className="bg-white text-[#17243b]">
      <header className="relative z-10 border-b border-slate-200 bg-white">
        <div className={`${layout.container} flex items-center justify-between py-3`}>
          <img src="/logos/logo--22.png" alt="BrainADZ Live" width={160} height={104} className="h-12 w-auto sm:h-14" />
          <a href="#hero-enquiry" className="rounded-full bg-[#193175] px-5 py-3 text-sm font-semibold text-white">
            Contact Us
          </a>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden py-14 md:py-20">
        <SmartBoardHeroCarousel />
        <div className={`${layout.container} relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16`}>
          <div className="text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a9c6ff]">Interactive Display Solutions</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[clamp(3rem,4.5vw,4.6rem)]">
              Smart Board for Teaching That Makes Every Lesson More Interactive
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Upgrade your classrooms and meeting spaces with interactive smart boards designed for better teaching, seamless presentations and smarter collaboration.
            </p>
            <a href="#hero-enquiry" className="mt-8 inline-flex rounded-full bg-[#ed2027] px-7 py-3.5 font-semibold text-white hover:bg-[#c91921]">
              Get a Free Quote
            </a>
          </div>
          <SmartBoardEnquiryForm id="hero-enquiry" heading="Let's Find the Right Smart Board for Your Space" buttonText="Submit Enquiry" />
        </div>
      </section>

      {/* 2. About the product */}
      <section className={`${layout.container} grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#31569c]">About the Product</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">A Smart Board Built for Interactive Teaching</h2>
          <p className="mt-6 leading-8 text-slate-600">
            A smart board brings teaching material, presentations and on-screen interaction together on one large display. Teachers can explain ideas visually, write and annotate during lessons, and keep digital content in view for the whole class.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            It can be used to show slides, videos, diagrams and other learning resources. In a meeting or training room, the same interactive screen helps teams present information and discuss it together.
          </p>
          <p className="mt-4 mb-8 leading-8 text-slate-600">
            The right screen size, device connections and software depend on your room and the model you choose. Share your requirements to explore a setup that fits your space.
          </p>
          <SmartBoardAboutPopup />
        </div>
        <div className="overflow-hidden rounded-3xl bg-[#eef3fb]">
          <img src="/overview/Teaching-Panel.webp" alt="Interactive teaching display in a learning space" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* 3. Statistics */}
      <SmartBoardStats />

      {/* 4. Product video */}
      <section className={`${layout.container} py-20`}>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#31569c]">See the smart board in action</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          See How an Interactive Smart Board Changes the Learning Experience
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          A smart board is more than a display. It brings teaching materials, presentations and interactive activities together on one screen.
        </p>
        <div className="mt-9 flex aspect-video max-h-[580px] items-center justify-center overflow-hidden rounded-3xl border border-[#d9e3f2] bg-[#eaf0fa] px-5 text-center">
          <div>
            <span aria-hidden="true" className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#193175] text-3xl text-white">▶</span>
            <p className="mt-5 text-xl font-semibold">Smart board product video</p>
            <p className="mt-2 text-slate-600">Video will appear here when it is ready.</p>
          </div>
        </div>
      </section>

      {/* 5. Clients and experts */}
      <ProductClientCarousel heading="Trusted by Businesses and Institutions" contentClassName={layout.container} />
      <section id="talk-to-experts" className="scroll-mt-20 bg-[#193175] py-20 text-white">
        <div className={`${layout.container} grid items-center gap-10 lg:grid-cols-2`}>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9ccff]">Our team is here to help</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Talk To Our Experts</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
              Tell us about your classroom, institution or meeting space. Our team can help you explore a suitable smart board setup.
            </p>
          </div>
          <SmartBoardEnquiryForm id="team-enquiry" heading="Tell Us About Your Space" subtext="Our product team will get in touch with you." buttonText="Submit Enquiry" />
        </div>
      </section>

      {/* 6. Solutions */}
      <section className={`${layout.container} py-20`}>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#31569c]">Where smart boards work</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Our Solutions and Applications</h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <span className="text-sm font-bold text-[#31569c]">0{index + 1}</span>
              <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Why choose us */}
      <section className="bg-white py-20 text-[#161616]">
        <div className={layout.container}>
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] uppercase tracking-[2.5px] text-[#193175]">Why Choose BrainADZ Live</p>
              <h2 className="max-w-[760px] text-[38px] leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Technology Solutions Built with Clarity, Reliability, and Scale
              </h2>
            </div>
            <p className="max-w-[780px] text-[17px] font-light leading-[1.75] text-[#525252] md:text-[19px] lg:justify-self-end lg:text-right">
              We help businesses move from idea to execution with smart hardware, custom software, automation, and AI-enabled systems.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <article key={item.title} className="group relative min-h-[265px] overflow-hidden rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(22,22,22,0.07)] md:p-8">
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#193175]/[0.07] transition duration-300 group-hover:scale-125" />
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#dbe3f0] bg-white">
                  <img src={item.icon} alt="" aria-hidden="true" className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10" />
                </div>
                <h3 className="relative z-10 mt-7 text-[21px] leading-[1.35] tracking-[-0.4px] text-[#262626] md:text-[22px]">{item.title}</h3>
                <p className="relative z-10 mt-4 max-w-[420px] text-[15px] font-light leading-[1.7] text-[#616161] md:text-[16px]">{item.description}</p>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
          <a href="#talk-to-experts" className="mt-9 inline-flex rounded-full bg-[#193175] px-7 py-3.5 font-semibold text-white hover:bg-[#284b9a]">
            Talk to Our Product Expert
          </a>
        </div>
      </section>

      {/* 8. FAQs and lower form */}
      <section className={`${layout.container} grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#31569c]">Common questions</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Frequently Asked Questions</h2>
          <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-7 font-semibold marker:hidden">
                  {faq.question}
                  <span className="float-right text-[#193175] group-open:hidden">+</span>
                  <span className="float-right hidden text-[#193175] group-open:inline">−</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-6 lg:self-start">
          <SmartBoardEnquiryForm id="lower-enquiry" heading="Let's Find the Right Smart Board for Your Requirements" subtext="Share your requirements with us." buttonText="Get Your Best Quote" />
        </div>
      </section>

      {/* 9. Presence */}
      <footer aria-label="Our presence" className="bg-white text-[#111]">
        <ERPLocations contentClassName={layout.container} />
      </footer>
    </main>
  );
}
