/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import ERPLocations from "@/app/erp-landing/ERPLocations";
import ProductClientCarousel from "@/components/ProductClientCarousel";
import SmartBoardEnquiryForm, { SmartBoardAboutPopup } from "@/components/SmartBoardEnquiryForm";
import SmartBoardHeroCarousel from "@/components/SmartBoardHeroCarousel";
import SmartBoardStats from "./SmartBoardStats";
import SmartBoardProducts from "./SmartBoardProducts";
import layout from "./SmartBoardLayout.module.css";

export const metadata: Metadata = {
  title: "Smart Board for Teaching | BrainADZ Live",
  description: "Interactive smart boards for classrooms, meeting spaces and smarter collaboration.",
  alternates: { canonical: "/smart-board-for-teaching" },
};

const solutions = [
  { title: "Smart Board for Classroom", description: "Make classroom teaching more interactive with digital lessons, annotations and visual presentations.", icon: "/signage-products/smart-classrooms.svg" },
  { title: "Smart Boards for Business", description: "Improve meetings, presentations and brainstorming with interactive digital displays.", icon: "/signage-products/corporate-learning.svg" },
  { title: "Digital Board for Teaching", description: "Help educators explain concepts using multimedia content and interactive teaching tools.", icon: "/signage-products/education-training-spaces.svg" },
  { title: "Coaching & Training Centres", description: "Support visual learning and interactive training sessions.", icon: "/signage-products/coaching-centers.svg" },
];

const reasons = [
  { title: "Interactive Display Options", description: "Display solutions for different learning and working environments.", icon: "/signage-products/professional-digital-display.svg" },
  { title: "Touch-Based Interaction", description: "Make digital content easier to navigate and interact with.", icon: "/signage-products/smart-classrooms.svg" },
  { title: "Requirement-Based Selection", description: "Explore suitable display configurations based on your needs.", icon: "/signage-products/requirement-based-setup.svg" },
  { title: "Multiple Applications", description: "Support teaching, training, meetings and presentations.", icon: "/signage-products/education-training-spaces.svg" },
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

      {/* 2. About us */}
      <section className={`${layout.container} grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#31569c]">About Us</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Making Digital Communication More Interactive</h2>
          <p className="mt-6 leading-8 text-slate-600">
            BrainADZ Live provides digital display solutions designed to improve the way people communicate, present and share information.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Our interactive display solutions bring digital content and touch-based interaction together, helping educational institutions and businesses create more engaging learning and working environments.
          </p>
          <p className="mt-4 mb-8 leading-8 text-slate-600">
            Whether you are upgrading a classroom or setting up a modern conference room, we help you explore display solutions suited to your requirements.
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
        <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-[#193175]" /><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#193175]">See the smart board in action</p></div>
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
          See How an Interactive Smart Board Changes the Learning Experience
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
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

      {/* 5. Products */}
      <SmartBoardProducts />

      {/* 6. Clients and experts */}
      <ProductClientCarousel heading="Trusted by Businesses and Institutions" contentClassName={layout.container} landingPage />
      <section id="talk-to-experts" className="scroll-mt-20 bg-[#193175] py-12 text-white md:py-14">
        <div className={layout.container}>
          <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-[#b9ccff]" /><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#b9ccff]">Our team is here to help</p></div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Talk To Our Experts</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
            Tell us about your classroom, institution or meeting space. Our team can help you explore a suitable smart board setup.
          </p>
          <div className="mx-auto mt-8 grid max-w-[520px] justify-items-center gap-5 sm:grid-cols-2">
            {[
              { image: "/team/cops.png", name: "Sarthak Raina", designation: "Corporate Sale & Project Manager" },
              { image: "/team/tech.png", name: "Anand Upadhyay", designation: "Technical Manager" },
            ].map((member) => (
              <article key={member.name} className="h-[250px] w-[250px] overflow-hidden rounded-2xl bg-white text-[#17243b] shadow-lg">
                <img src={member.image} alt={member.name} loading="lazy" className="h-[165px] w-full object-cover object-center" />
                <div className="flex flex-col items-center px-2 py-1.5">
                  <h3 className="text-base font-semibold leading-5">{member.name}</h3>
                  <p className="mt-0.5 text-xs leading-4 text-slate-600">{member.designation}</p>
                  <a href="#hero-enquiry" className="mt-1.5 inline-flex rounded-full bg-[#193175] px-4 py-1.5 text-xs font-semibold leading-4 text-white hover:bg-[#284b9a]">
                    View Contact
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Solutions */}
      <section className={`${layout.container} py-20`}>
        <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-[#193175]" /><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#193175]">Where smart boards work</p></div>
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Our Solutions and Applications</h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {solutions.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-7 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#dbe3f0] bg-white">
                <img src={item.icon} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Why choose us */}
      <section className="bg-white py-20 text-[#161616]">
        <div className={layout.container}>
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-[#193175]" /><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#193175]">Why Choose BrainADZ Live</p></div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
              Technology Solutions Built with Clarity, Reliability, and Scale
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              We help businesses move from idea to execution with smart hardware, custom software, automation, and AI-enabled systems.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <article key={item.title} className="group relative flex min-h-[190px] gap-4 overflow-hidden rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(22,22,22,0.07)]">
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#193175]/[0.07] transition duration-300 group-hover:scale-125" />
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#dbe3f0] bg-white">
                  <img src={item.icon} alt="" aria-hidden="true" className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold leading-snug text-[#262626]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#616161]">{item.description}</p>
                </div>
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
          <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-[#193175]" /><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#193175]">Common questions</p></div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Frequently Asked Questions</h2>
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
        <ERPLocations contentClassName={layout.container} landingPage />
      </footer>
    </main>
  );
}
