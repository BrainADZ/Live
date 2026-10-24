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
      className="erp-automation-preview relative [container-type:inline-size] [aspect-ratio:832_/_360] overflow-hidden [background:linear-gradient(120deg,_#9dcbff,_#b8d2d2_57%,_#e4d57a)]"
      aria-hidden="true"
    >
      <div className="erp-automation-app-panel absolute [top:20%] [left:24%] grid [grid-template-columns:0.9fr_1.4fr] [gap:2.2cqw] [width:71%] [min-height:105%] [padding:2.8cqw] [border-radius:2cqw] [background:#fff] [color:#19243a]">
        <div className="erp-automation-record [&_p]:[margin:1.2cqw_0_0] [&_p]:[font-size:1.15cqw] [&_p]:font-medium [&_p]:[line-height:1.5]">
          <div className="erp-automation-record-heading flex [flex-wrap:wrap] items-center [gap:0.6cqw] [margin-bottom:1cqw] [font-size:1.2cqw] font-semibold [line-height:1.4] [&_small]:[padding:0.2cqw_0.5cqw] [&_small]:[border-radius:0.6cqw] [&_small]:[background:#eef4fc] [&_small]:[font-size:0.8cqw] [&_small]:font-normal">
            <span>{slide.title}</span>
            <small>Sample data</small>
          </div>

          <div className="erp-automation-record-owner flex items-center [gap:0.8cqw] [&_>_div]:grid [&_>_div]:[gap:0.3cqw] [&_>_div]:[font-size:1cqw] [&_>_div]:[line-height:1.4] [&_strong]:font-medium [&_>_div_>_span]:[color:#778197] [&_>_div_>_span]:[font-size:0.9cqw]">
            <span className="erp-automation-record-icon flex items-center justify-center [flex-shrink:0] [width:3.5cqw] [height:3.5cqw] rounded-full [background:#eef0ff] [color:#5c54d2] [&_svg]:[width:2cqw] [&_svg]:[height:2cqw]">
              <Workflow />
            </span>
            <div>
              <strong>{slide.record}</strong>
              <span>{slide.team}</span>
            </div>
          </div>

          <p>{slide.description}</p>
        </div>

        <div className="erp-automation-charts grid [align-content:start] [gap:1cqw]">
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
              className="erp-automation-chart-card [padding:1.6cqw] [border:1px_solid_#d9dfe9] [border-radius:1.5cqw] [&_h3]:[margin:0_0_1.2cqw] [&_h3]:[font-size:1cqw] [&_h3]:font-medium [&_h3]:[line-height:1.4]"
              key={chart.title}
            >
              <h3>{chart.title}</h3>

              <div className="erp-automation-chart-content flex items-center [gap:1.7cqw]">
                <div className="erp-automation-donut relative grid [place-items:center] [flex-shrink:0] [width:11.5cqw] [height:11.5cqw] rounded-full [background:conic-gradient(_#0b83ef_0_40%,_#eb4967_40%_55%,_#ffb10c_55%_65%,_#8d63df_65%_80%,_#00b99b_80%_100%_)] [&_>_div]:absolute [&_>_div]:[inset:1.1cqw] [&_>_div]:flex [&_>_div]:flex-col [&_>_div]:items-center [&_>_div]:justify-center [&_>_div]:[border:0.7cqw_solid_#f2f5fe] [&_>_div]:rounded-full [&_>_div]:[background:#fff] [&_strong]:[font-size:1.8cqw] [&_strong]:font-medium [&_strong]:[line-height:1.2] [&_span]:[margin-top:0.3cqw] [&_span]:[font-size:0.9cqw]">
                  <div>
                    <strong>{chart.score}</strong>
                    <span>{chart.label}</span>
                  </div>
                </div>

                <ul className="erp-automation-chart-legend grid [flex:1] [gap:1.3cqw] [min-width:0] [margin:0] [padding:0] [list-style:none] [&_li]:flex [&_li]:items-start [&_li]:[gap:0.6cqw] [&_li]:[font-size:0.85cqw] [&_li]:[line-height:1.4] [&_li:nth-child(2)_.erp-automation-legend-dot]:[background:#ed5671] [&_li:nth-child(3)_.erp-automation-legend-dot]:[background:#ffbc22] [&_li_>_div]:grid [&_li_>_div]:[flex:1] [&_li_>_div]:[gap:0.5cqw] [&_li_>_div]:[min-width:0]">
                  {chart.items.map((item, index) => (
                    <li key={item}>
                      <span className="erp-automation-legend-dot [flex-shrink:0] [width:0.65cqw] [height:0.65cqw] [margin-top:0.25cqw] rounded-full [background:#498eff]" />
                      <div>
                        <span>{item}</span>
                        <span className="erp-automation-legend-bar block [height:0.55cqw] overflow-hidden [border-radius:1cqw] [background:#f0f2f7] [&_>_span]:block [&_>_span]:h-full [&_>_span]:[border-radius:inherit] [&_>_span]:[background:#d1d8e4]">
                          <span style={{ width: `${85 - index * 18}%` }} />
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

      <div className="erp-automation-floating-table absolute [top:56%] [left:5%] [width:42%] [padding:1.6cqw] [border:1px_solid_#d7deea] [border-radius:2cqw] [background:#fff] [color:#566278] [box-shadow:0_0.8cqw_2cqw_#25355308] [&_table]:w-full [&_table]:[border-collapse:collapse] [&_table]:[table-layout:fixed] [&_table]:text-center [&_table]:[font-size:1.1cqw] [&_th]:[height:3cqw] [&_th]:[border-bottom:1px_solid_#edf0f6] [&_th]:[color:#8690a1] [&_th]:[font-size:0.9cqw] [&_th]:font-normal [&_td]:[height:3cqw] [&_td]:[border-bottom:1px_solid_#f2f4f8] [&_td]:overflow-hidden [&_td]:[white-space:nowrap] [&_td]:[text-overflow:ellipsis] [&_th:nth-child(2)]:[border-inline:2px_solid_#9a94ff] [&_th:nth-child(2)]:[background:#faf9ff] [&_th:nth-child(2)]:[color:#24283b] [&_td:nth-child(2)]:[border-inline:2px_solid_#9a94ff] [&_td:nth-child(2)]:[background:#faf9ff] [&_td:nth-child(2)]:[color:#24283b] [&_td:nth-child(2)]:[font-size:1.6cqw] [&_td:nth-child(2)]:font-semibold">
        <table>
          <thead>
            <tr>
              {slide.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
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
      className="erp-automation-automation [padding:60px_0_80px] [background:#fff] [&_h2]:[margin:0_0_18px] [&_h2]:[color:#193175] [&_h2]:[font-size:clamp(34px,_3vw,_48px)] [&_h2]:font-medium [&_h2]:[line-height:1.16] [&_h2]:[letter-spacing:-1.2px] max-[760px]:[padding:32px_0_48px] max-[760px]:[&_h2]:[font-size:clamp(30px,_6.6vw,_40px)] max-[760px]:[&_h2]:[letter-spacing:-0.8px]"
      id="erp-workflow"
      aria-labelledby="erp-automation-heading"
    >
      <div className="erp-automation-inner [width:min(1070px,_calc(100%_-_64px))] [margin:auto] max-[760px]:[width:calc(100%_-_40px)]">
        <h2 id="erp-automation-heading">
          Automate simple to complex
          <br />
          business processes
        </h2>
        <p className="erp-automation-description [max-width:930px] [margin:0] [color:#151515] [font-size:18px] [line-height:1.65] max-[760px]:[font-size:16px]">
          BrainADZ ERP helps you connect and streamline everyday operations with
          configured workflows, approvals and task routing, so your team can
          focus on the work that moves your business forward.
        </p>

        <ul className="erp-automation-feature-list grid [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:24px_50px] [max-width:930px] [margin:30px_0_50px] [padding:0] [list-style:none] [&_li]:flex [&_li]:items-center [&_li]:[gap:8px] [&_li]:[color:#202020] [&_li]:[font-size:18px] [&_li]:font-medium [&_li]:[line-height:1.5] [&_svg]:[flex-shrink:0] [&_svg]:[color:#193175] max-[760px]:[grid-template-columns:minmax(0,_1fr)] max-[760px]:[gap:16px] max-[760px]:[margin:25px_0_30px] max-[760px]:[&_li]:[font-size:16px]">
          {features.map((feature) => (
            <li key={feature}>
              <CheckCircle2
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
