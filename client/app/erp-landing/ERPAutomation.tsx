"use client";

import { CheckCircle2, Workflow } from "lucide-react";
import ERPPreviewCarousel from "./ERPPreviewCarousel";

const features = [
  "Multi-Step Workflow Automation",
  "Approval & Process Blueprints",
  "Automated Task Reminders",
  "Rule-Based Order Routing",
  "Customizable Business Workflows",
];

const slides = [
  {
    title: "Connected approval workflows",
    record: "Purchase order PO-204",
    team: "Finance & purchasing",
    description: "Keep every approval moving.",
    primaryTitle: "Approval overview",
    primaryScore: 82,
    primaryLabel: "Approved",
    factors: ["Manager approval", "Budget verified", "Vendor confirmed"],
    secondaryTitle: "Pending actions",
    secondaryScore: 18,
    secondaryLabel: "In review",
    nextSteps: ["Finance review", "Purchase release", "Notify owner"],
    columns: ["RECORD", "VALUE", "STATUS"],
    rows: [
      ["PO-204", "24,500", "Approved"],
      ["PO-205", "18,250", "In review"],
      ["PO-206", "32,800", "Queued"],
    ],
  },
  {
    title: "Automated order routing",
    record: "Sales order SO-318",
    team: "Sales & operations",
    description: "Connect each step of fulfilment.",
    primaryTitle: "Order readiness",
    primaryScore: 94,
    primaryLabel: "Ready",
    factors: ["Stock confirmed", "Payment verified", "Dispatch planned"],
    secondaryTitle: "Next workflow steps",
    secondaryScore: 6,
    secondaryLabel: "Pending",
    nextSteps: ["Create invoice", "Assign dispatch", "Update customer"],
    columns: ["ORDER", "VALUE", "STATUS"],
    rows: [
      ["SO-318", "48,900", "Ready"],
      ["SO-319", "21,500", "Processing"],
      ["SO-320", "64,200", "Complete"],
    ],
  },
  {
    title: "Inventory replenishment rules",
    record: "Stock rule INV-102",
    team: "Inventory & warehouse",
    description: "Give low stock a clear next step.",
    primaryTitle: "Stock coverage",
    primaryScore: 68,
    primaryLabel: "Available",
    factors: ["Stock on hand", "Purchase scheduled", "Supplier assigned"],
    secondaryTitle: "Replenishment actions",
    secondaryScore: 32,
    secondaryLabel: "On order",
    nextSteps: ["Check threshold", "Raise purchase order", "Notify warehouse"],
    columns: ["PRODUCT", "STOCK", "STATUS"],
    rows: [
      ["SKU-101", "128", "Available"],
      ["SKU-102", "12", "Reorder"],
      ["SKU-103", "56", "Available"],
    ],
  },
];

function WorkflowPreview({ slide }: { slide: (typeof slides)[number] }) {
  return (
    <div
      className="@container relative aspect-832/360 overflow-hidden bg-[linear-gradient(120deg,#9dcbff,#b8d2d2_57%,#e4d57a)]"
      aria-hidden="true"
    >
      <div className="absolute top-[20%] left-[24%] grid min-h-[105%] w-[71%] grid-cols-[0.9fr_1.4fr] gap-[2.2cqw] rounded-[2cqw] bg-white p-[2.8cqw] text-[#19243a]">
        <div>
          <div className="mb-[1cqw] flex flex-wrap items-center gap-[0.6cqw] text-[1.2cqw] leading-[1.4] font-semibold">
            <span>{slide.title}</span>
            <small className="rounded-[0.6cqw] bg-[#eef4fc] px-[0.5cqw] py-[0.2cqw] text-[0.8cqw] font-normal">
              Sample data
            </small>
          </div>

          <div className="flex items-center gap-[0.8cqw]">
            <span className="flex h-[3.5cqw] w-[3.5cqw] shrink-0 items-center justify-center rounded-full bg-[#eef0ff] text-[#5c54d2]">
              <Workflow className="h-[2cqw] w-[2cqw]" />
            </span>
            <div className="grid gap-[0.3cqw] text-[1cqw] leading-[1.4]">
              <strong className="font-medium">{slide.record}</strong>
              <span className="text-[0.9cqw] text-[#778197]">{slide.team}</span>
            </div>
          </div>

          <p className="mx-0 mt-[1.2cqw] mb-0 text-[1.15cqw] leading-normal font-medium">
            {slide.description}
          </p>
        </div>

        <div className="grid content-start gap-[1cqw]">
          {[
            {
              title: slide.primaryTitle,
              score: slide.primaryScore,
              label: slide.primaryLabel,
              items: slide.factors,
            },
            {
              title: slide.secondaryTitle,
              score: slide.secondaryScore,
              label: slide.secondaryLabel,
              items: slide.nextSteps,
            },
          ].map((chart) => (
            <div
              className="rounded-[1.5cqw] border border-[#d9dfe9] p-[1.6cqw]"
              key={chart.title}
            >
              <h3 className="mx-0 mt-0 mb-[1.2cqw] text-[1cqw] leading-[1.4] font-medium">
                {chart.title}
              </h3>

              <div className="flex items-center gap-[1.7cqw]">
                <div className="relative grid h-[11.5cqw] w-[11.5cqw] shrink-0 place-items-center rounded-full bg-[conic-gradient(#0b83ef_0_40%,#eb4967_40%_55%,#ffb10c_55%_65%,#8d63df_65%_80%,#00b99b_80%_100%)]">
                  <div className="absolute inset-[1.1cqw] flex flex-col items-center justify-center rounded-full border-[0.7cqw] border-[#f2f5fe] bg-white">
                    <strong className="text-[1.8cqw] leading-[1.2] font-medium">
                      {chart.score}
                    </strong>
                    <span className="mt-[0.3cqw] text-[0.9cqw]">
                      {chart.label}
                    </span>
                  </div>
                </div>

                <ul className="grid min-w-0 flex-1 list-none gap-[1.3cqw] p-0">
                  {chart.items.map((item, index) => (
                    <li
                      className="flex items-start gap-[0.6cqw] text-[0.85cqw] leading-[1.4]"
                      key={item}
                    >
                      <span
                        className={`mt-[0.25cqw] size-[0.65cqw] shrink-0 rounded-full ${index === 1 ? "bg-[#ed5671]" : index === 2 ? "bg-[#ffbc22]" : "bg-[#498eff]"}`}
                      />
                      <div className="grid min-w-0 flex-1 gap-[0.5cqw]">
                        <span>{item}</span>
                        <span className="block h-[0.55cqw] overflow-hidden rounded-[1cqw] bg-[#f0f2f7]">
                          <span
                            className="block h-full rounded-[inherit] bg-[#d1d8e4]"
                            style={{ width: `${85 - index * 18}%` }}
                          />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[56%] left-[5%] w-[42%] rounded-[2cqw] border border-[#d7deea] bg-white p-[1.6cqw] text-[#566278] shadow-[0_0.8cqw_2cqw_#25355308]">
        <table className="w-full table-fixed border-collapse text-center text-[1.1cqw]">
          <thead>
            <tr>
              {slide.columns.map((column) => (
                <th
                  className="h-[3cqw] border-b border-[#edf0f6] text-[0.9cqw] font-normal text-[#8690a1] nth-2:border-x-2 nth-2:border-x-[#9a94ff] nth-2:bg-[#faf9ff] nth-2:text-[#24283b]"
                  key={column}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td
                    className="h-[3cqw] overflow-hidden border-b border-[#f2f4f8] text-ellipsis whitespace-nowrap nth-2:border-x-2 nth-2:border-x-[#9a94ff] nth-2:bg-[#faf9ff] nth-2:text-[1.6cqw] nth-2:font-semibold nth-2:text-[#24283b]"
                    key={index}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ERPAutomation() {
  return (
    <section
      className="bg-white px-0 pt-15 pb-20 max-[760px]:px-0 max-[760px]:pt-8 max-[760px]:pb-12"
      id="erp-workflow"
      aria-labelledby="erp-automation-heading"
    >
      <div className="mx-auto w-full max-w-283.5 px-5 md:px-8">
        <h2
          className="mx-0 mt-0 mb-4.5 text-[clamp(34px,3vw,48px)] leading-[1.16] font-medium tracking-[-1.2px] text-[#193175] max-[760px]:text-[clamp(30px,6.6vw,40px)] max-[760px]:tracking-[-0.8px]"
          id="erp-automation-heading"
        >
          Automate simple to complex
          <br />
          business processes
        </h2>
        <p className="m-0 max-w-232.5 text-[18px] leading-[1.65] text-[#151515] max-[760px]:text-[16px]">
          BrainADZ ERP helps you connect and streamline everyday operations with
          configured workflows, approvals and task routing, so your team can
          focus on the work that moves your business forward.
        </p>

        <ul className="mx-0 mt-7.5 mb-12.5 grid max-w-232.5 list-none grid-cols-2 gap-x-12.5 gap-y-6 p-0 max-[760px]:mx-0 max-[760px]:mt-6.25 max-[760px]:mb-7.5 max-[760px]:grid-cols-1 max-[760px]:gap-4">
          {features.map((feature) => (
            <li
              className="flex items-center gap-2 text-[18px] leading-normal font-medium text-[#202020] max-[760px]:text-[16px]"
              key={feature}
            >
              <CheckCircle2
                className="shrink-0 text-[#193175]"
                size={17}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <ERPPreviewCarousel
          label="ERP automation previews"
          slides={slides.map((slide) => ({
            title: slide.title,
            preview: <WorkflowPreview slide={slide} />,
          }))}
        />
      </div>
    </section>
  );
}
