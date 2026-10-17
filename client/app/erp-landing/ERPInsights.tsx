"use client";

import {
  CheckCircle2,
  Database,
  Layers,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import ERPPreviewCarousel from "./ERPPreviewCarousel";
import section from "./automation.module.css";
import styles from "./insights.module.css";

const features = [
  "Configurable ERP Workspaces",
  "Advanced Reporting & Dashboards",
  "API & Business Tool Integrations",
  "Role-Based Security Controls",
  "Data Validation & Quality Checks",
];

function BuilderPreview() {
  return (
    <div
      className={styles.preview}
      aria-hidden="true"
    >
      <aside className={styles.builderRail}>
        {[
          { icon: Database, label: "Data" },
          { icon: Layers, label: "Elements" },
          { icon: Settings, label: "Style" },
          { icon: LayoutDashboard, label: "Layout" },
        ].map(({ icon: Icon, label }) => (
          <span key={label}>
            <Icon />
            <small>{label}</small>
          </span>
        ))}
      </aside>

      <div className={styles.builderPalette}>
        <div className={styles.search}>Search fields</div>
        <span>FIELDS</span>
        <span>RELATED RECORDS</span>
        <span>ACTIONS</span>
        <div className={styles.fieldButtons}>
          {[
            "Text field",
            "Select",
            "Date",
            "Amount",
            "Status",
            "Assign owner",
          ].map((field) => (
            <span key={field}>{field}</span>
          ))}
        </div>
        <div className={styles.paletteSection}>WORKSPACE SETTINGS</div>
        <div className={styles.fieldButtons}>
          {["Permissions", "Validation", "Approvals", "Notifications"].map(
            (field) => (
              <span key={field}>{field}</span>
            ),
          )}
        </div>
      </div>

      <div className={styles.workspace}>
        <aside className={styles.workspaceNav}>
          <strong>BrainADZ</strong>
          {["Overview", "Orders", "Inventory", "Accounts", "Reports"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </aside>

        <div className={styles.workspaceBody}>
          <div className={styles.workspaceHeader}>
            <span>Purchase order workspace</span>
            <span>Sample data</span>
          </div>

          <div className={styles.workspaceCards}>
            <article className={styles.orderCard}>
              <div className={styles.avatar}>NS</div>
              <strong>Northstar Supplies</strong>
              <span className={styles.approved}>APPROVED</span>
              <dl>
                <dt>Purchase order</dt>
                <dd>PO-204</dd>
                <dt>Assigned to</dt>
                <dd>Finance team</dd>
                <dt>Department</dt>
                <dd>Operations</dd>
              </dl>
            </article>

            <article className={styles.summaryCard}>
              <span>Order summary</span>
              <strong>₹24,500</strong>
              <div className={styles.packageIcon}>
                <Layers />
              </div>
              <dl>
                <dt>Order items</dt>
                <dd>18 items</dd>
                <dt>Delivery status</dt>
                <dd>Scheduled</dd>
                <dt>Payment terms</dt>
                <dd>Net 30</dd>
              </dl>
            </article>

            <article className={styles.activityCard}>
              <strong>Recent activity</strong>
              {[
                "Approval complete",
                "Purchase released",
                "Invoice pending",
              ].map((activity) => (
                <div key={activity}>
                  <CheckCircle2 />
                  <span>{activity}</span>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>

      <div className={styles.accessCard}>
        <span>Workspace access</span>
        <strong>Finance manager</strong>
        <span>Review & approve</span>
        <strong>Operations team</strong>
        <span>View & update</span>
      </div>
    </div>
  );
}

function ReportingPreview() {
  return (
    <div
      className={styles.preview}
      aria-hidden="true"
    >
      <article className={styles.performanceCard}>
        <h3>Team performance</h3>
        <strong>343</strong>
        <p>Tasks completed this month</p>
        <div className={styles.progress}>
          <span style={{ width: "67%" }} />
        </div>
        <h3>Order performance</h3>
        <strong>910</strong>
        <p>50% of 1,820 planned orders</p>
        <div className={`${styles.progress} ${styles.greenProgress}`}>
          <span style={{ width: "50%" }} />
        </div>
      </article>

      <article className={styles.revenueCard}>
        <h3>Revenue share</h3>
        <div className={styles.revenueChart}>
          <span className={styles.revenueTop}>₹22,410</span>
          <span className={styles.revenueRight}>₹50,138</span>
          <span className={styles.revenueLeft}>₹27,452</span>
          <div className={styles.donut}>
            <span />
          </div>
        </div>
        <div className={styles.revenueLegend}>
          {["East", "West", "Central"].map((region) => (
            <span key={region}>{region}</span>
          ))}
        </div>
      </article>

      <article className={styles.targetCard}>
        <h3>Individual target tracker</h3>
        {[
          { initials: "AS", target: "₹400k", value: "₹360k", progress: "90%" },
          { initials: "RK", target: "₹550k", value: "₹480k", progress: "87%" },
        ].map((person) => (
          <div
            className={styles.targetRow}
            key={person.initials}
          >
            <span className={styles.targetAvatar}>{person.initials}</span>
            <div className={styles.targetDetail}>
              <span>Target: {person.target}</span>
              <div className={styles.targetBar}>
                <span style={{ width: person.progress }}>{person.value}</span>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}

export default function ERPInsights() {
  return (
    <section
      className={section.automation}
      id="erp-insights"
      aria-labelledby="erp-insights-heading"
    >
      <div className={section.inner}>
        <h2 id="erp-insights-heading">
          Enterprise-Grade Customization and
          <br />
          Deep Insights
        </h2>
        <p className={section.description}>
          BrainADZ ERP brings configurable workspaces, reporting and compatible
          API integrations together, helping you shape a connected system around
          your business.
        </p>

        <ul className={section.featureList}>
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
          label="ERP customization and insights previews"
          slides={[
            {
              title: "Customizable ERP workspace",
              preview: <BuilderPreview />,
            },
            {
              title: "Advanced reporting and dashboards",
              preview: <ReportingPreview />,
            },
          ]}
        />
      </div>
    </section>
  );
}
