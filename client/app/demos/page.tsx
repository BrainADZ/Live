/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LayoutDashboard,
  MonitorPlay,
  Shirt,
} from "lucide-react";

const demos = [
  {
    title: "CRM Software Demo",
    category: "Sales Platform",
    image: "/services/hero/Retail-CRM-and-Campaign-Management-System.png",
    href: "/software-platforms/crm-software",
    icon: BarChart3,
    points: ["Lead tracking", "Sales pipeline", "Team reports"],
  },
  {
    title: "ERP Software Demo",
    category: "Business Operations",
    image: "/services/Software-Development-Models.avif",
    href: "/software-platforms/erp-software",
    icon: LayoutDashboard,
    points: ["Finance modules", "Inventory control", "Approval flow"],
  },
  {
    title: "Cloud Signage Demo",
    category: "Screen Management",
    image: "/products/Led.png",
    href: "/software-platforms/cloud-signage-software",
    icon: MonitorPlay,
    points: ["Media library", "Remote scheduling", "Device reports"],
  },
  {
    title: "Signage Application Demo",
    category: "Digital Display",
    image: "/products/Selforder.png",
    href: "/software-platforms/signage-application",
    icon: MonitorPlay,
    points: ["Playlists", "Screen control", "Content updates"],
  },
  {
    title: "Virtual Trial Room Demo",
    category: "Retail Experience",
    image: "/services/hero/mobile.jpeg",
    href: "/software-platforms/virtual-trail-room",
    icon: Shirt,
    points: ["Try-on flow", "Product mapping", "Engagement insights"],
  },
];

export default function DemosPage() {
  return (
    <main className="bg-white text-[#111827]">
      <section className="relative min-h-120 overflow-hidden bg-black text-white md:min-h-135">
        <img
          src="/services/hero/how-to-be-a-software-developer.jpg"
          alt="BrainADZ software demos"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.72)_38%,rgba(0,0,0,0.24)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-120 max-w-450 flex-col justify-end px-5 py-10 md:min-h-135 md:px-8 lg:px-12">
          <div className="max-w-210 pb-6">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#9bbcff]">
              BrainADZ Demos
            </p>
            <h1 className="text-[40px] font-semibold leading-[1.08] tracking-[-1.2px] md:text-[58px]">
              Software Demos
            </h1>
            <p className="mt-5 max-w-175 text-[16px] font-light leading-[1.65] text-white/86 md:text-[19px]">
              Explore CRM, ERP, signage and virtual trial room demo paths built
              for sales teams, operations teams and customer-facing businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Demo Library
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Choose the platform demo you want to review.
              </h2>
            </div>

            <p className="max-w-190 text-[16px] font-light leading-[1.7] text-black/65">
              Each demo path gives a quick look at the platform modules,
              workflows and business use cases before you discuss customization
              with the BrainADZ team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {demos.map((demo) => {
              const Icon = demo.icon;

              return (
                <article
                  key={demo.title}
                  className="group overflow-hidden border border-black/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#3C5B9B]/35 hover:shadow-[0_28px_90px_rgba(60,91,155,0.13)]"
                >
                  <div className="relative h-58 overflow-hidden bg-[#f6f8fc]">
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3C5B9B] shadow-[0_12px_35px_rgba(0,0,0,0.16)]">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                      {demo.category}
                    </p>
                    <h3 className="mt-3 text-[25px] font-light leading-tight tracking-[-0.5px]">
                      {demo.title}
                    </h3>

                    <div className="mt-5 grid gap-3">
                      {demo.points.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <CheckCircle2 size={18} className="text-[#3C5B9B]" />
                          <span className="text-[14px] font-light text-black/65">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={demo.href}
                      className="mt-7 inline-flex h-12 items-center justify-center gap-3 bg-[#3C5B9B] px-5 text-[13px] font-bold text-white transition hover:bg-[#2f4a82]"
                    >
                      Open Demo <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
