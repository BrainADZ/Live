/* eslint-disable @next/next/no-img-element */

import { comparison as styles } from "./tailwind";

const comparisons = [
  {
    feature: "Core business modules",
    brainadz:
      "Finance, inventory, sales, purchasing and operations planned in one ERP.",
    others:
      "Module coverage and available business functions depend on the product and edition.",
  },
  {
    feature: "Automation & approvals",
    brainadz:
      "Approval stages, responsibilities and task routing configured around your processes.",
    others:
      "Workflow options, automation limits and approval features vary by product and plan.",
  },
  {
    feature: "Customization & access",
    brainadz:
      "Fields, workspaces and role-based access aligned with your agreed business requirements.",
    others:
      "Customization options and access controls depend on the platform and implementation.",
  },
  {
    feature: "Reporting & dashboards",
    brainadz:
      "Reports and dashboards configured around your ERP data and business indicators.",
    others:
      "Report types, dashboard flexibility and analytics access vary by product and edition.",
  },
  {
    feature: "Business integrations",
    brainadz:
      "Compatible APIs and connections to your existing business tools scoped for your project.",
    others:
      "Available connectors, API access and usage limits depend on the provider and plan.",
  },
  {
    feature: "Migration & onboarding",
    brainadz:
      "Source-data assessment, migration planning and implementation guidance included in the agreed scope.",
    others:
      "Migration, training and onboarding arrangements depend on the provider and service package.",
  },
  {
    feature: "Pricing & implementation",
    brainadz:
      "A project proposal based on your modules, workflows, integrations and implementation needs.",
    others:
      "Subscription, licensing and implementation costs depend on the provider, edition and plan.",
  },
];

export default function ERPComparison() {
  return (
    <section
      className={styles.comparison}
      id="erp-comparison"
      aria-labelledby="erp-comparison-heading"
    >
      <div className={styles.inner}>
        <h2 id="erp-comparison-heading">
          See how BrainADZ ERP compares
          <br />
          with others
        </h2>

        <div
          className={styles.tableWrap}
          role="region"
          aria-label="BrainADZ ERP and Others feature comparison"
          tabIndex={0}
        >
          <table className={styles.table}>
            <colgroup>
              <col className={styles.categoryColumn} />
              <col className={styles.brainadzColumn} />
              <col className={styles.othersColumn} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Category / Feature</th>
                <th
                  scope="col"
                  aria-label="BrainADZ ERP"
                >
                  <div className={styles.brand}>
                    <img
                      src="/logos/logo--22.png"
                      alt="BrainADZ"
                      width="100"
                      height="44"
                    />
                    <span>ERP</span>
                  </div>
                </th>
                <th scope="col">
                  <span className={styles.othersHeading}>Others</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison) => (
                <tr key={comparison.feature}>
                  <th scope="row">{comparison.feature}</th>
                  <td>{comparison.brainadz}</td>
                  <td>{comparison.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>
          BrainADZ features and services are configured to the agreed project
          scope. Other offerings vary by product and plan.
        </p>
      </div>
    </section>
  );
}
