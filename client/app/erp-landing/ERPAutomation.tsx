"use client";

import { CheckCircle2, Workflow } from "lucide-react";
import ERPPreviewCarousel from "./ERPPreviewCarousel";
import styles from "./automation.module.css";

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
      className={styles.preview}
      aria-hidden="true"
    >
      <div className={styles.appPanel}>
        <div className={styles.record}>
          <div className={styles.recordHeading}>
            <span>{slide.title}</span>
            <small>Sample data</small>
          </div>

          <div className={styles.recordOwner}>
            <span className={styles.recordIcon}>
              <Workflow />
            </span>
            <div>
              <strong>{slide.record}</strong>
              <span>{slide.team}</span>
            </div>
          </div>

          <p>{slide.description}</p>
        </div>

        <div className={styles.charts}>
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
              className={styles.chartCard}
              key={chart.title}
            >
              <h3>{chart.title}</h3>

              <div className={styles.chartContent}>
                <div className={styles.donut}>
                  <div>
                    <strong>{chart.score}</strong>
                    <span>{chart.label}</span>
                  </div>
                </div>

                <ul className={styles.chartLegend}>
                  {chart.items.map((item, index) => (
                    <li key={item}>
                      <span className={styles.legendDot} />
                      <div>
                        <span>{item}</span>
                        <span className={styles.legendBar}>
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

      <div className={styles.floatingTable}>
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
      className={styles.automation}
      id="erp-workflow"
      aria-labelledby="erp-automation-heading"
    >
      <div className={styles.inner}>
        <h2 id="erp-automation-heading">
          Automate simple to complex
          <br />
          business processes
        </h2>
        <p className={styles.description}>
          BrainADZ ERP helps you connect and streamline everyday operations with
          configured workflows, approvals and task routing, so your team can
          focus on the work that moves your business forward.
        </p>

        <ul className={styles.featureList}>
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
