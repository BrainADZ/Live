/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  CloudCog,
  CloudUpload,
  DatabaseBackup,
  Gauge,
  GitBranch,
  HardDrive,
  LifeBuoy,
  LockKeyhole,
  Minus,
  MonitorCog,
  Network,
  Plus,
  RefreshCcw,
  Rocket,
  Search,
  ServerCog,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "platforms" | "devops" | "containers" | "monitoring";

type StackItem = {
  name: string;
  icon: string;
};

const cloudServices = [
  {
    title: "Cloud Strategy & Advisory",
    text: "We assess your business goals, current systems and workloads to create a clear cloud roadmap.",
    icon: CloudCog,
  },
  {
    title: "Cloud Migration",
    text: "Move applications, data and infrastructure to the cloud with controlled planning and minimal disruption.",
    icon: CloudUpload,
  },
  {
    title: "Cloud Architecture",
    text: "Design secure, scalable and cost-efficient cloud environments for modern business workloads.",
    icon: ServerCog,
  },
  {
    title: "Cloud Security",
    text: "Strengthen cloud infrastructure with access control, monitoring, compliance and secure deployment practices.",
    icon: ShieldCheck,
  },
  {
    title: "Cost Optimization",
    text: "Identify unused resources, optimize workloads and reduce unnecessary cloud spending.",
    icon: TrendingUp,
  },
  {
    title: "Managed Cloud Support",
    text: "Keep your cloud environment monitored, updated, optimized and ready for business growth.",
    icon: LifeBuoy,
  },
];

const adoptionItems = [
  {
    title: "Cloud Strategy & Assessment",
    text: "We review your applications, infrastructure, business goals and risks to define a practical cloud adoption plan.",
  },
  {
    title: "Cloud Migration",
    text: "We help move workloads, databases and services to cloud platforms with structured planning and controlled execution.",
  },
  {
    title: "Infrastructure Modernization",
    text: "We modernize legacy infrastructure using cloud-native services, automation and scalable deployment models.",
  },
  {
    title: "Multi-Cloud Solutions",
    text: "We design cloud environments that can work across AWS, Azure, Google Cloud and hybrid ecosystems.",
  },
  {
    title: "DevOps & Automation",
    text: "We improve delivery speed through CI/CD pipelines, infrastructure automation and repeatable deployment workflows.",
  },
  {
    title: "Cloud Security",
    text: "We build security into cloud environments with identity management, access control, monitoring and governance.",
  },
  {
    title: "Monitoring & Optimization",
    text: "We monitor cloud performance, availability and usage to continuously improve efficiency and reliability.",
  },
  {
    title: "Disaster Recovery",
    text: "We plan backup, recovery and failover strategies to reduce downtime and protect business continuity.",
  },
];

const benefits = [
  {
    title: "Reduce Application Cost",
    text: "We optimize cloud resources, remove unnecessary infrastructure expenses and modernize applications to reduce operational costs while maintaining performance and scalability.",
  },
  {
    title: "Backup & Disaster Recovery",
    text: "Protect critical business data with automated backups, disaster recovery planning and rapid restoration strategies that support uptime and business continuity.",
  },
  {
    title: "Seamless Cloud Integration",
    text: "Connect cloud platforms with existing applications, databases, APIs and third-party services to create a unified ecosystem that improves efficiency and data accessibility.",
  },
  {
    title: "Enhanced Collaboration",
    text: "Enable secure collaboration through cloud-based workspaces, shared resources and real-time communication tools that keep distributed teams connected and productive.",
  },
  {
    title: "Streamlined Business Workflows",
    text: "Automate repetitive processes and optimize operational workflows using cloud-native technologies that increase productivity and simplify everyday operations.",
  },
  {
    title: "Improved Performance",
    text: "Improve application speed, infrastructure efficiency and system reliability through continuous monitoring, cloud optimization and intelligent resource management.",
  },
  {
    title: "Advanced Analytics & Insights",
    text: "Use cloud-powered analytics, dashboards and business intelligence solutions to transform data into actionable insights for smarter decisions.",
  },
  {
    title: "Automatic Software Updates",
    text: "Keep applications and infrastructure secure with automated updates, patch management and continuous improvements that reduce downtime and maintenance effort.",
  },
  {
    title: "Flexible Scalability & Pricing",
    text: "Scale cloud resources up or down based on business demand while maintaining predictable costs and avoiding unnecessary spending.",
  },
];

const cloudProcess = [
  {
    title: "Discover & Assess",
    text: "We analyze workloads, infrastructure, cost, risk and current cloud readiness.",
    icon: Search,
  },
  {
    title: "Strategy & Plan",
    text: "We define a clear cloud roadmap, migration plan and platform strategy.",
    icon: Workflow,
  },
  {
    title: "Design & Architect",
    text: "We plan secure, scalable and cost-efficient cloud architecture.",
    icon: CloudCog,
  },
  {
    title: "Migrate & Implement",
    text: "We move systems, data and workloads with controlled execution.",
    icon: CloudUpload,
  },
  {
    title: "Optimize & Manage",
    text: "We monitor, tune, secure and improve your cloud environment continuously.",
    icon: Settings2,
  },
  {
    title: "Scale & Evolve",
    text: "We help your cloud ecosystem grow with new business and technology needs.",
    icon: Rocket,
  },
];

const cloudProcessLayout = [
  { ...cloudProcess[0], left: "21.75%", top: "0px" },
  { ...cloudProcess[1], left: "78.25%", top: "0px" },
  { ...cloudProcess[2], left: "21.75%", top: "300px" },
  { ...cloudProcess[3], left: "78.25%", top: "300px" },
  { ...cloudProcess[4], left: "21.75%", top: "570px" },
  { ...cloudProcess[5], left: "78.25%", top: "570px" },
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Cloud Platforms", value: "platforms" },
  { label: "DevOps", value: "devops" },
  { label: "Containers", value: "containers" },
  { label: "Monitoring", value: "monitoring" },
];

const techStack: Record<TabType, StackItem[]> = {
  platforms: [
    { name: "AWS", icon: "/icons/AWS.svg" },
    { name: "Microsoft Azure", icon: "/icons/Azure.svg" },
    { name: "Google Cloud", icon: "/icons/GoogleCloud.svg" },
    { name: "Oracle Cloud", icon: "/icons/Oracle.svg" },
    { name: "IBM Cloud", icon: "/icons/IBMCloud.svg" },
    { name: "DigitalOcean", icon: "/icons/DigitalOcean.svg" },
  ],
  devops: [
    { name: "Jenkins", icon: "/icons/Jenkins.svg" },
    { name: "GitLab", icon: "/icons/GitLab.svg" },
    { name: "GitHub Actions", icon: "/icons/GitHub.svg" },
    { name: "Terraform", icon: "/icons/Terraform.svg" },
    { name: "Ansible", icon: "/icons/Ansible.svg" },
    { name: "Prometheus", icon: "/icons/Prometheus.svg" },
  ],
  containers: [
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
    { name: "Helm", icon: "/icons/Helm.svg" },
    { name: "OpenShift", icon: "/icons/OpenShift.svg" },
    { name: "NGINX", icon: "/icons/NGINX.svg" },
    { name: "Istio", icon: "/icons/Istio.svg" },
  ],
  monitoring: [
    { name: "Grafana", icon: "/icons/Grafana.svg" },
    { name: "Prometheus", icon: "/icons/Prometheus.svg" },
    { name: "Datadog", icon: "/icons/Datadog.svg" },
    { name: "New Relic", icon: "/icons/NewRelic.svg" },
    { name: "ELK Stack", icon: "/icons/Elastic.svg" },
    { name: "CloudWatch", icon: "/icons/AWS.svg" },
  ],
};

const whyChoose = [
  {
    title: "Cloud Strategy Expertise",
    text: "We help you choose the right cloud path based on your business goals, workload needs and long-term scalability.",
  },
  {
    title: "Security-First Planning",
    text: "Cloud architecture is designed with access control, compliance, governance and data protection from the start.",
  },
  {
    title: "Cost Optimization Focus",
    text: "We help reduce unnecessary cloud spend through right-sizing, monitoring and smart resource planning.",
  },
  {
    title: "End-to-End Support",
    text: "From assessment and migration to monitoring and optimization, BrainADZ supports your full cloud journey.",
  },
];

const supportItems = [
  "24/7 cloud monitoring and uptime visibility",
  "Backup, recovery and business continuity planning",
  "Security updates, access control and patch management",
  "Performance tuning for applications and infrastructure",
  "Cost tracking, resource optimization and scaling support",
];

const faqs = [
  {
    q: "What is cloud consulting?",
    a: "Cloud consulting helps businesses plan, migrate, secure, optimize and manage cloud infrastructure based on their goals and workloads.",
  },
  {
    q: "Can BrainADZ help migrate our existing applications to the cloud?",
    a: "Yes. We assess your current systems, plan the migration approach and help move workloads to the cloud with controlled execution.",
  },
  {
    q: "Which cloud platforms do you work with?",
    a: "We work with AWS, Microsoft Azure, Google Cloud and other cloud ecosystems depending on business needs and project requirements.",
  },
  {
    q: "Do you provide cloud security and optimization?",
    a: "Yes. We support cloud security, monitoring, cost optimization, backup planning, performance tuning and ongoing management.",
  },
  {
    q: "Can you support hybrid or multi-cloud environments?",
    a: "Yes. We can plan hybrid and multi-cloud architectures for businesses that need flexibility across different platforms and infrastructure environments.",
  },
];

export default function CloudConsultingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("platforms");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/services/hero/cloud-consulting.jpg"
          alt="Cloud Consulting Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Services</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Cloud Consulting</span>
          </div>

          <div className="mt-12 max-w-220 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Cloud Consulting Services
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-205 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Strategic cloud consulting, migration, optimization and security services that help businesses modernize infrastructure, reduce costs and scale with confidence.
            </p>

            <div className="mt-8">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  Enquire Now
  <span className="text-[20px] leading-none">↗</span>
</button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Overview
            </p>
            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Cloud strategy designed for performance, scale and business agility.
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ helps businesses plan, migrate, secure and optimize cloud environments. We align your cloud roadmap with real business needs so your infrastructure becomes easier to manage, faster to scale and more cost-efficient.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {[
              ["Cloud Readiness", "Understand current systems and define the right cloud adoption path."],
              ["Secure Architecture", "Build cloud environments with identity, access and governance in mind."],
              ["Cost Visibility", "Track cloud spending and optimize resources for better efficiency."],
              ["Scalable Growth", "Prepare infrastructure for future users, workloads and business expansion."],
            ].map(([title, text], index) => (
              <div key={title} className="border-t border-black/10 pt-6">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">0{index + 1}</span>
                <h3 className="mt-3 text-[22px] font-light tracking-[-0.4px]">{title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLOUD */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Why Move to Cloud
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Build a more flexible and efficient business foundation.
              </h2>
            </div>
            <p className="max-w-190 text-[16px] font-light leading-[1.7] text-black/65">
              Cloud adoption helps businesses reduce dependency on rigid infrastructure, improve availability, support remote teams and scale systems faster without unnecessary operational complexity.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-5">
            {["Business Agility", "Cost Optimization", "High Availability", "Better Security", "Global Scalability"].map((item, index) => (
              <div key={item} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">0{index + 1}</span>
                <h3 className="mt-3 text-[22px] font-light tracking-[-0.4px]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Cloud Consulting Services
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Cloud solutions for strategy, migration, security and optimization.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]">
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon size={27} className="text-[#3C5B9B] transition group-hover:text-white" />
                  </div>
                  <h3 className="text-[23px] font-light tracking-[-0.4px]">{item.title}</h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS STICKY SECTION */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Cloud Benefits
            </p>
            <h2 className="max-w-185 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Benefits of partnering with BrainADZ cloud consulting.
            </h2>
            <p className="mt-6 max-w-175 text-[16px] font-light leading-[1.75] text-black/70">
              Our cloud consulting services offer expert guidance in strategic planning, cost optimization, security and scalability, helping businesses fully harness cloud technology for accelerated growth, operational efficiency and long-term success.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8">
              <h3 className="text-[28px] font-light leading-[1.15] tracking-[-0.7px] text-[#3C5B9B]">
                Let&apos;s Optimize Your Cloud Strategy
              </h3>
              <a href="/contact" className="mt-7 inline-flex h-12.5 items-center justify-center gap-3 rounded-sm bg-[#3C5B9B] px-6 text-[14px] font-semibold text-white transition hover:bg-[#2f4a82]">
                Get Expert Guidance <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div>
            {benefits.map((item, index) => (
              <div key={item.title} className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[78px_1fr]">
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[14px] font-semibold text-[#3C5B9B]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[24px] font-light tracking-[-0.5px] text-black">{item.title}</h3>
                  <p className="mt-3 text-[16px] font-light leading-[1.75] text-black/65">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADOPTION JOURNEY */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Cloud Adoption Journey
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Cloud transformation with BrainADZ.
            </h2>
            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              We guide your cloud journey from assessment to continuous optimization, helping your business move with clarity instead of guesswork.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {adoptionItems.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">0{index + 1}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-8 lg:px-12 lg:py-14">
        <div
          className="pointer-events-none absolute -right-[9%] -top-[8%] hidden h-[116%] w-[32%] opacity-35 lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at center, rgba(60, 91, 155, 0.18) 0 1px, transparent 1px 14px)",
            transform: "rotate(5deg) scaleX(0.72)",
          }}
        />

        <div className="mx-auto max-w-[1500px]">
          <div className="relative z-10 mx-auto mb-12 max-w-[1180px] text-center lg:mb-14">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Cloud Consulting Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our cloud consulting roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A structured path to assess, plan, migrate, optimize and scale your cloud environment with confidence.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {cloudProcess.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== cloudProcess.length - 1 && <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#3C5B9B]/45" />}
                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3C5B9B] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon size={23} strokeWidth={2.4} className="text-[#3C5B9B]" />
                      </div>
                      <div>
                        <h3 className="text-[22px] font-light leading-tight tracking-[-0.5px]">{item.title}</h3>
                        <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/65">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden h-[790px] lg:block">
            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1600 790" fill="none" aria-hidden="true" preserveAspectRatio="none">
              <defs>
                <marker id="cloud-process-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>
              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
            </svg>

            {cloudProcessLayout.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group absolute z-10 w-[390px] -translate-x-1/2 text-center" style={{ left: item.left, top: item.top }}>
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#3C5B9B]" />
                  </div>
                  <h3 className="mt-6 text-[30px] font-light leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">{item.title}</h3>
                  <p className="mx-auto mt-4 max-w-[330px] text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-white px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450 text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Cloud Platforms</p>
          <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Leading cloud platforms. Practical implementation.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud", "DigitalOcean", "IBM Cloud"].map((item) => (
              <div key={item} className="border-t border-black/10 pt-7 text-[20px] font-light text-black/75">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">Tech Stack</p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies powering cloud consulting and modernization
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use cloud platforms, DevOps tools, container technologies and monitoring systems to build reliable cloud environments.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button key={tab.value} type="button" onClick={() => setActiveTab(tab.value)} className={`relative pb-3 text-[17px] font-light leading-none tracking-[-0.2px] transition-all duration-300 md:text-[19px] ${isActive ? "text-[#161616]" : "text-[#8d8d8d] hover:text-[#3c5b9b]"}`}>
                  {tab.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#3c5b9b] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
                </button>
              );
            })}
          </div>

          <div className="mx-auto max-w-315">
            <div className="space-y-5 md:space-y-6">
              {[techStack[activeTab].slice(0, 4), techStack[activeTab].slice(4, 6)].map((row, rowIndex) => (
                <div key={`${activeTab}-${rowIndex}`} className="flex flex-wrap items-center justify-center gap-y-5">
                  {row.map((item, index) => (
                    <div key={item.name} className={`group flex min-h-29.5 w-1/2 flex-col items-center justify-center px-5 py-4 text-center transition-all duration-300 hover:bg-[#f8faff] sm:w-1/3 md:w-37.5 lg:w-36.25 ${index !== row.length - 1 ? "md:border-r md:border-dotted md:border-[#bdbdbd]" : ""}`}>
                      <div className="flex h-11.5 w-full items-center justify-center">
                        <img src={item.icon} alt={item.name} loading="lazy" decoding="async" className="max-h-10 max-w-18.5 object-contain transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      </div>
                      <h3 className="mt-4 text-[15px] font-light leading-[1.3] tracking-[-0.2px] text-[#3c5b9b] transition duration-300 group-hover:text-[#2f4a82] md:text-[16px]">{item.name}</h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Why Choose BrainADZ</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">A practical cloud partner for strategy, security and growth.</h2>
          </div>
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">0{index + 1}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img src="/services/hero/cloud-support.jpg" alt="Cloud support and optimization" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Support & Cloud Optimization</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Keep your cloud environment secure, optimized and ready to scale.</h2>
            <div className="mt-9 space-y-5">
              {supportItems.map((item) => (
                <div key={item} className="flex gap-4 border-t border-black/10 pt-5">
                  <ShieldCheck size={22} className="mt-1 shrink-0 text-[#3C5B9B]" />
                  <p className="text-[16px] font-light leading-[1.65] text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">FAQ</p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Common questions about cloud consulting.</h2>
          </div>

          <div className="mx-auto max-w-300 space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`overflow-hidden rounded-[26px] border bg-white transition ${openFaq === index ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10"}`}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">{faq.q}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#3C5B9B]">{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                {openFaq === index && (
                  <div className="mx-5 border-t border-[#3C5B9B]/15 pb-6 pt-4 md:mx-6">
                    <p className="text-[15px] font-light leading-[1.75] text-black/65">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#3C5B9B] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img src="/about.avif" alt="BrainADZ Cloud Consulting" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">Ready to build your cloud advantage?</h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">Let BrainADZ help you migrate, optimize and scale with secure cloud consulting services.</p>
              </div>
              <a href="/contact" className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]">
                <span>Enquire Now</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <PopupForm
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>
    </main>
  );
}