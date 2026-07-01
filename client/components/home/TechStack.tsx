"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

type TabType = "technologies" | "databases" | "cloudDevops";

type StackItem = {
  name: string;
  icon: string;
};

const tabs: { label: string; value: TabType }[] = [
  {
    label: "Technologies",
    value: "technologies",
  },
  {
    label: "Databases",
    value: "databases",
  },
  {
    label: "Cloud & DevOps",
    value: "cloudDevops",
  },
];

const techStack: Record<TabType, StackItem[]> = {
  technologies: [
    { name: ".Net", icon: "/icons/NET.svg" },
    { name: "C#", icon: "/icons/CSharp.svg" },
    { name: "Golang", icon: "/icons/GoLand.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "PHP", icon: "/icons/PHP.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "R", icon: "/icons/R.svg" },

    { name: "Swift", icon: "/icons/Swift.svg" },
    { name: "Angular", icon: "/icons/Angular.svg" },
    { name: "Django", icon: "/icons/Django.svg" },
    { name: "Salesforce", icon: "/icons/Salesforce.svg" },
    { name: "Flutter", icon: "/icons/Flutter.svg" },
    { name: "Laravel", icon: "/icons/Laravel.svg" },

    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "React", icon: "/icons/React.svg" },
    { name: "Vue.js", icon: "/icons/Vue.js.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
  ],

  databases: [
  // SQL Databases
  {
    name: "MySQL",
    icon: "/icons/MySQL.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/PostgresSQL.svg",
  },
  {
    name: "SQL Server",
    icon: "/icons/SQLServer.svg",
  },
  {
    name: "Oracle",
    icon: "/icons/Oracle.svg",
  },
  {
    name: "MariaDB",
    icon: "/icons/Maria.svg",
  },

  // NoSQL Databases
  {
    name: "MongoDB",
    icon: "/icons/MongoDB.svg",
  },
  {
    name: "Cassandra",
    icon: "/icons/Cassandra.svg",
  },
  {
    name: "Redis",
    icon: "/icons/Redis.svg",
  },
  {
    name: "DynamoDB",
    icon: "/icons/AWS.svg",
  },
  {
    name: "Couchbase",
    icon: "/icons/CouchDB.svg",
  },
],

  cloudDevops: [
    { name: "AWS", icon: "/icons/AWS.svg" },
    { name: "Google Cloud", icon: "/icons/GoogleCloud.svg" },
    { name: "Terraform", icon: "/icons/Terraform.svg" },
    { name: "Power BI", icon: "/icons/PowerBI.svg" },
    { name: "SharePoint", icon: "/icons/SharePoint.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },

    { name: "Apache Kafka", icon: "/icons/Kafka.svg" },
    { name: "Jenkins", icon: "/icons/Jenkins.svg" },
    { name: "Azure", icon: "/icons/Azure.svg" },
    { name: "Docker", icon: "/icons/Docker.svg" },
  ],
};

const rowPattern: Record<TabType, number[]> = {
  technologies: [8, 6, 4],
  databases: [6, 4],
  cloudDevops: [6, 4],
};

function createRows(items: StackItem[], pattern: number[]) {
  let start = 0;

  return pattern.map((count) => {
    const row = items.slice(start, start + count);
    start += count;
    return row;
  });
}

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TabType>("technologies");

  const activeItems = techStack[activeTab];
  const rows = createRows(activeItems, rowPattern[activeTab]);

  return (
    <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
      <div className="mx-auto max-w-450">
        {/* HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tech Stack
            </p>

            <h2 className="max-w-170 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Modern technologies behind smarter digital systems
            </h2>
          </div>

          <p
            className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            We combine reliable software architecture, AI capabilities, cloud
            infrastructure, and hardware integration to build scalable business
            solutions.
          </p>
        </div>

        {/* TABS */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24"
          data-aos="fade-up"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`relative pb-3 text-[17px] font-light leading-none tracking-[-0.2px] transition-all duration-300 md:text-[19px] ${
                  isActive
                    ? "text-[#161616]"
                    : "text-[#8d8d8d] hover:text-[#3c5b9b]"
                }`}
              >
                {tab.label}

                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#3c5b9b] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* TECH STACK ROWS */}
        <div className="mx-auto max-w-315">
          <div className="space-y-5 md:space-y-6">
            {rows.map((row, rowIndex) => (
              <div
                key={`${activeTab}-${rowIndex}`}
                className="flex flex-wrap items-center justify-center gap-y-5"
              >
                {row.map((item, index) => (
                  <div
                    key={item.name}
                    data-aos="card-reveal"
                    data-aos-delay={Math.min(index * 100, 300)}
                    data-aos-duration="520"
                    className={`group flex min-h-29.5 w-1/2 flex-col items-center justify-center px-5 py-4 text-center transition-all duration-300 hover:bg-[#f8faff] sm:w-1/3 md:w-37.5 lg:w-36.25 ${
                      index !== row.length - 1
                        ? "md:border-r md:border-dotted md:border-[#bdbdbd]"
                        : ""
                    }`}
                  >
                    {/* ICON */}
                    <div className="flex h-11.5 w-full items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-10 max-w-18.5 object-contain transition-all duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    {/* NAME */}
                    <h3 className="mt-4 text-[15px] font-light leading-[1.3] tracking-[-0.2px] text-[#3c5b9b] transition duration-300 group-hover:text-[#2f4a82] md:text-[16px]">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}