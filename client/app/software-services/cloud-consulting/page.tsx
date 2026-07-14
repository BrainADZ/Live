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
    title: "Cloud Strategy & Assessment",
    text: "We assess your applications, infrastructure, workloads and business priorities to define the right cloud approach.",
    icon: CloudCog,
  },
  {
    title: "Cloud Migration",
    text: "Move applications, databases and workloads to the cloud through a planned migration approach designed to reduce business disruption.",
    icon: CloudUpload,
  },
  {
    title: "Cloud Architecture & Setup",
    text: "Design and configure cloud environments around your performance, security, availability and scalability requirements.",
    icon: ServerCog,
  },
  {
    title: "Cloud Security & Access",
    text: "Improve identity, permissions, network controls, monitoring and secure deployment practices across your cloud environment.",
    icon: ShieldCheck,
  },
  {
    title: "Cost & Performance Optimization",
    text: "Review cloud usage, right-size resources and improve workload performance without paying for capacity you do not need.",
    icon: TrendingUp,
  },
  {
    title: "Cloud Support & Management",
    text: "Keep cloud environments monitored, maintained and optimized as applications, workloads and business requirements change.",
    icon: LifeBuoy,
  },
];

const adoptionItems = [
  {
    title: "Cloud Readiness Assessment",
    text: "We review your current applications, infrastructure, dependencies and risks to identify what should move, what should change and what should stay.",
  },
  {
    title: "Platform & Architecture Planning",
    text: "We select the right cloud setup and define how workloads, networks, storage, databases and access controls should be structured.",
  },
  {
    title: "Application & Data Migration",
    text: "We plan and execute the movement of applications, databases and workloads with testing, validation and rollback considerations.",
  },
  {
    title: "Hybrid & Multi-Cloud Planning",
    text: "We help structure environments that combine existing infrastructure with one or more cloud platforms when the business case requires it.",
  },
  {
    title: "DevOps & Deployment Automation",
    text: "We improve build, release and infrastructure workflows through CI/CD, automation and repeatable deployment practices.",
  },
  {
    title: "Security & Access Controls",
    text: "We strengthen identities, permissions, network access, secrets and monitoring across cloud resources and connected systems.",
  },
  {
    title: "Monitoring & Cost Optimization",
    text: "We track usage, performance and resource consumption to identify issues, reduce waste and keep cloud operations visible.",
  },
  {
    title: "Backup & Recovery Planning",
    text: "We define backup, restore and recovery approaches based on the importance of your applications and business data.",
  },
];

const benefits = [
  {
    title: "A Clearer Cloud Roadmap",
    text: "Know what should move to the cloud, what should be modernized and which platform approach fits your applications, workloads and business priorities.",
  },
  {
    title: "Controlled Migration",
    text: "Move applications and data through a planned process with dependency checks, testing and validation instead of treating migration as a simple lift-and-shift exercise.",
  },
  {
    title: "Better Cost Control",
    text: "Improve visibility into cloud usage, right-size resources and reduce spending on idle or oversized infrastructure.",
  },
  {
    title: "Stronger Availability & Recovery",
    text: "Plan backups, restore processes and resilient cloud architecture around the level of continuity your business systems actually require.",
  },
  {
    title: "Improved Security & Access",
    text: "Strengthen identity, permissions, network controls and monitoring so cloud resources are easier to protect and manage.",
  },
  {
    title: "Flexible Scaling",
    text: "Adjust infrastructure as users, traffic and workloads grow without depending on fixed on-premise capacity for every change.",
  },
  {
    title: "Connected Applications & Data",
    text: "Integrate cloud services with existing applications, databases and APIs so systems can share data and support connected workflows.",
  },
  {
    title: "Faster, Repeatable Delivery",
    text: "Use DevOps practices and deployment automation to make releases more consistent and reduce manual infrastructure work.",
  },
  {
    title: "Ongoing Operational Visibility",
    text: "Track performance, availability, usage and cost so cloud decisions are based on what is actually happening in the environment.",
  },
];

const cloudProcess = [
  {
    title: "Discover & Assess",
    text: "We review your applications, infrastructure, workloads, dependencies, cost and current cloud readiness.",
    icon: Search,
  },
  {
    title: "Strategy & Plan",
    text: "We define the cloud approach, priorities, migration sequence and delivery roadmap around your business needs.",
    icon: Workflow,
  },
  {
    title: "Design & Architect",
    text: "We plan the cloud environment, networking, access, data, availability and deployment approach.",
    icon: CloudCog,
  },
  {
    title: "Migrate & Implement",
    text: "We move and configure workloads through controlled execution, testing and validation.",
    icon: CloudUpload,
  },
  {
    title: "Monitor & Optimize",
    text: "We improve performance, cost, security and operational visibility after the environment is running.",
    icon: Settings2,
  },
  {
    title: "Support & Evolve",
    text: "We help adapt the cloud environment as applications, users and business requirements change.",
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
    title: "Workload-First Cloud Planning",
    text: "We recommend a cloud approach based on your applications, data, dependencies and business priorities—not a one-size-fits-all platform decision.",
  },
  {
    title: "Business Continuity in Mind",
    text: "Migration is planned in stages with testing, validation and fallback considerations to reduce avoidable disruption.",
  },
  {
    title: "Security and Cost Considered Together",
    text: "We plan access, monitoring, performance and resource usage together so the environment is practical to operate after launch.",
  },
  {
    title: "Support Beyond Migration",
    text: "BrainADZ Live can continue supporting monitoring, optimization, integrations and technical improvements as your cloud environment evolves.",
  },
];

const supportItems = [
  "Cloud monitoring, alerts and uptime visibility",
  "Backup, restore and recovery planning",
  "Security updates, permissions and access reviews",
  "Performance tuning for applications and infrastructure",
  "Cost tracking, resource right-sizing and scaling support",
];

const faqs = [
  {
    q: "What does cloud consulting include?",
    a: "Cloud consulting can include readiness assessment, platform and architecture planning, migration, security, cost optimization, monitoring, backup and ongoing technical support.",
  },
  {
    q: "Can BrainADZ Live move our existing applications to the cloud?",
    a: "Yes. We first review the application, infrastructure, data and dependencies, then plan the migration approach based on what can move as-is and what may need changes.",
  },
  {
    q: "Which cloud platforms do you work with?",
    a: "We work with AWS, Microsoft Azure, Google Cloud and other cloud environments based on project requirements, existing systems and the architecture being planned.",
  },
  {
    q: "Can you work with our existing on-premise infrastructure?",
    a: "Yes. A full cloud move is not always necessary. We can plan hybrid setups that connect existing infrastructure with cloud services when that is the more practical approach.",
  },
  {
    q: "Do you help with cloud cost and performance optimization?",
    a: "Yes. We review usage, resource sizing, performance and operational visibility to identify waste, bottlenecks and opportunities for improvement.",
  },
  {
    q: "Do you provide support after migration?",
    a: "Yes. We can support monitoring, troubleshooting, access updates, performance improvements, cost reviews and changes required as applications and workloads evolve.",
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
          src="/hero/cloud-consulting.jpg"
          alt="Cloud Consulting Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
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
              We help businesses assess, migrate, secure and optimize cloud environments so applications and infrastructure are easier to manage, scale and improve over time.
            </p>

            <div className="mt-8">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  Enquire Now
  <span className="text-[20px] leading-none">↗</span>
</button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>
            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Plan the right cloud environment for the systems your business actually runs.
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live helps businesses make practical cloud decisions—from assessing existing applications and infrastructure to planning migration, architecture, security, cost and ongoing operations. The goal is not to move everything blindly, but to build the right cloud setup for your workloads and business needs.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {[
              ["Cloud Readiness", "Understand what should move, what should change and what should remain as it is."],
              ["Secure Architecture", "Plan identity, permissions, networks and data protection from the start."],
              ["Cost Visibility", "Understand resource usage and reduce spending on capacity you do not need."],
              ["Operational Flexibility", "Adjust infrastructure and services as applications and workloads change."],
            ].map(([title, text], index) => (
              <div key={title} className="border-t border-black/10 pt-6">
                <span className="text-[13px] font-semibold text-[#193175]">0{index + 1}</span>
                <h3 className="mt-3 text-[22px] font-light tracking-[-0.4px]">{title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLOUD */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Why Move to Cloud
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Move beyond infrastructure that is difficult to change or scale.
              </h2>
            </div>
            <p className="max-w-190 text-[16px] font-light leading-[1.7] text-black/65">
              The right cloud setup can make infrastructure easier to scale, improve availability and give teams better visibility into systems and costs. The value comes from choosing the right services and architecture—not simply moving everything to the cloud.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-5">
            {["Flexible Scaling", "Cost Visibility", "Better Availability", "Stronger Access Control", "Faster Deployment"].map((item, index) => (
              <div key={item} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#193175]">0{index + 1}</span>
                <h3 className="mt-3 text-[22px] font-light tracking-[-0.4px]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Cloud Consulting Services
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Cloud consulting for assessment, migration, architecture and ongoing optimization.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]">
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon size={27} className="text-[#193175] transition group-hover:text-white" />
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
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Cloud Benefits
            </p>
            <h2 className="max-w-185 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              What a well-planned cloud approach can improve.
            </h2>
            <p className="mt-6 max-w-175 text-[16px] font-light leading-[1.75] text-black/70">
              Cloud consulting should solve practical infrastructure and application problems. We focus on clearer planning, controlled migration, stronger visibility and an environment that can be managed as your systems change.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8">
              <h3 className="text-[28px] font-light leading-[1.15] tracking-[-0.7px] text-[#193175]">
                Plan Your Next Cloud Move
              </h3>
              <a href="/contact" className="mt-7 inline-flex h-12.5 items-center justify-center gap-3 rounded-sm bg-[#193175] px-6 text-[14px] font-semibold text-white transition hover:bg-[#2f4a82]">
                Discuss Your Cloud Needs <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div>
            {benefits.map((item, index) => (
              <div key={item.title} className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[78px_1fr]">
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#193175]/10 text-[14px] font-semibold text-[#193175]">
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Cloud Adoption Journey
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A practical path from assessment to ongoing cloud operations.
            </h2>
            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              We help you decide what to move, design the right environment, execute the change carefully and improve the setup after it is running.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {adoptionItems.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#193175]">0{index + 1}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-4 lg:px-12 lg:py-14">
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Cloud Consulting Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              How we plan and deliver cloud consulting
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A clear process to understand your current setup, plan the right change, implement it carefully and keep improving the environment after launch.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {cloudProcess.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== cloudProcess.length - 1 && <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#193175]/45" />}
                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#193175] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon size={23} strokeWidth={2.4} className="text-[#193175]" />
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
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#193175" />
                </marker>
              </defs>
              <path d="M 392 43 L 1208 43" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-process-arrowhead)" />
            </svg>

            {cloudProcessLayout.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group absolute z-10 w-[390px] -translate-x-1/2 text-center" style={{ left: item.left, top: item.top }}>
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#193175]" />
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
      <section className="bg-white px-5 py-16 md:px-4 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450 text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">Cloud Platforms</p>
          <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Cloud platforms selected around the project requirement.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud", "DigitalOcean", "IBM Cloud"].map((item) => (
              <div key={item} className="border-t border-black/10 pt-7 text-[20px] font-light text-black/75">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">Tech Stack</p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Platforms and tools used across cloud projects
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use cloud platforms, deployment tools, container technologies and monitoring systems according to the architecture and operational needs of each project.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button key={tab.value} type="button" onClick={() => setActiveTab(tab.value)} className={`relative pb-3 text-[17px] font-light leading-none tracking-[-0.2px] transition-all duration-300 md:text-[19px] ${isActive ? "text-[#161616]" : "text-[#8d8d8d] hover:text-[#193175]"}`}>
                  {tab.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#193175] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
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
                      <h3 className="mt-4 text-[15px] font-light leading-[1.3] tracking-[-0.2px] text-[#193175] transition duration-300 group-hover:text-[#2f4a82] md:text-[16px]">{item.name}</h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">Why Choose BrainADZ Live</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Cloud decisions based on your systems—not a fixed template.</h2>
          </div>
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#193175]">0{index + 1}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img src="/services/hero/cloud-support.jpg" alt="Cloud support and optimization" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">Support & Cloud Optimization</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Keep your cloud environment visible, maintained and ready for change.</h2>
            <div className="mt-9 space-y-5">
              {supportItems.map((item) => (
                <div key={item} className="flex gap-4 border-t border-black/10 pt-5">
                  <ShieldCheck size={22} className="mt-1 shrink-0 text-[#193175]" />
                  <p className="text-[16px] font-light leading-[1.65] text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">FAQ</p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Common questions businesses ask before a cloud project.</h2>
          </div>

          <div className="mx-auto max-w-300 space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`overflow-hidden rounded-[26px] border bg-white transition ${openFaq === index ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10"}`}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">{faq.q}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#193175]">{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                {openFaq === index && (
                  <div className="mx-5 border-t border-[#193175]/15 pb-6 pt-4 md:mx-6">
                    <p className="text-[15px] font-light leading-[1.75] text-black/65">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
                  <section className="lazy-section bg-white py-8">
                                <div className="mx-auto max-w-450 px-4 lg:px-10">
                                  <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
                                    <div className="hidden w-[32%] shrink-0 md:block">
                                      <img
                                        src="/CTA/Cloud-CTA.jpg"
                                        alt="BrainADZ Live Cloud Consulting Services"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                                      <div className="max-w-145">
                                        <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                                          Planning a cloud migration or improving your current setup?
                                        </h3>
                                        <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                                          Let BrainADZ Live assess your current systems and help plan the right cloud approach for migration, architecture, security and ongoing optimization.
                                        </p>
                                      </div>
                                      <button
                          type="button"
                          onClick={() => setIsPopupOpen(true)}
                          className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
                        >
                                        <span>Enquire Now</span>
                                        <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                                          →
                                        </span>
                                      </button>
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
