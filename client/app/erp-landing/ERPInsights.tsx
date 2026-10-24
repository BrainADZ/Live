"use client";

import {
  CheckCircle2,
  Database,
  Layers,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import ERPPreviewCarousel from "./ERPPreviewCarousel";

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
      className="erp-insights-preview relative [container-type:inline-size] [aspect-ratio:816_/_320] overflow-hidden [background:linear-gradient(120deg,_#9ecfff,_#bad3d1_57%,_#e4d57b)] [color:#20242d] [&_h3]:[margin:0_0_1.4cqw] [&_h3]:[color:#151515] [&_h3]:[font-size:1.7cqw] [&_h3]:font-medium [&_h3]:[line-height:1.3]"
      aria-hidden="true"
    >
      <aside className="erp-insights-builder-rail absolute [top:12%] [left:5.5%] grid [align-content:start] [gap:2.4cqw] [width:7%] h-full [padding:2.5cqw_0] [border-radius:1cqw_1cqw_0_0] [background:#172b37] [color:#d5e0e8] text-center [&_>_span]:grid [&_>_span]:[justify-items:center] [&_>_span]:[gap:0.5cqw] [&_svg]:[width:1.6cqw] [&_svg]:[height:1.6cqw] [&_small]:[font-size:0.8cqw]">
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

      <div className="erp-insights-builder-palette absolute [top:12%] [left:13.3%] [width:18%] h-full [padding:1.4cqw] [border-radius:1cqw_1cqw_0_0] [background:#08222c] [color:#53c4ed] [font-size:0.85cqw] [&_>_span]:block [&_>_span]:[margin-bottom:1cqw]">
        <div className="erp-insights-search [margin-bottom:1.5cqw] [padding:0.6cqw] [border:1px_solid_#39505b] [border-radius:0.4cqw] [color:#92a7b4]">Search fields</div>
        <span>FIELDS</span>
        <span>RELATED RECORDS</span>
        <span>ACTIONS</span>
        <div className="erp-insights-field-buttons grid [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:0.55cqw] [&_>_span]:flex [&_>_span]:items-center [&_>_span]:justify-center [&_>_span]:[min-height:2.2cqw] [&_>_span]:[border-radius:0.4cqw] [&_>_span]:[background:#203b46] [&_>_span]:[color:#d2dfe5] [&_>_span]:[font-size:0.65cqw] [&_>_span]:text-center">
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
        <div className="erp-insights-palette-section [margin:1.6cqw_0_1cqw]">WORKSPACE SETTINGS</div>
        <div className="erp-insights-field-buttons grid [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:0.55cqw] [&_>_span]:flex [&_>_span]:items-center [&_>_span]:justify-center [&_>_span]:[min-height:2.2cqw] [&_>_span]:[border-radius:0.4cqw] [&_>_span]:[background:#203b46] [&_>_span]:[color:#d2dfe5] [&_>_span]:[font-size:0.65cqw] [&_>_span]:text-center">
          {["Permissions", "Validation", "Approvals", "Notifications"].map(
            (field) => (
              <span key={field}>{field}</span>
            ),
          )}
        </div>
      </div>

      <div className="erp-insights-workspace absolute [top:19%] [left:33%] flex [width:76%] [min-height:100%] overflow-hidden [border:0.5cqw_solid_#172632] [border-radius:2.2cqw_0_0] [background:#fff]">
        <aside className="erp-insights-workspace-nav flex [flex:0_0_14cqw] flex-col [gap:1.5cqw] [padding:1.4cqw] [background:#20345d] [color:#d4def3] [font-size:0.8cqw] [&_strong]:[margin-bottom:0.8cqw] [&_strong]:[font-size:1cqw]">
          <strong>BrainADZ</strong>
          {["Overview", "Orders", "Inventory", "Accounts", "Reports"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </aside>

        <div className="erp-insights-workspace-body [flex:1] [min-width:0] [padding:1.8cqw]">
          <div className="erp-insights-workspace-header flex justify-between [gap:1cqw] [margin-bottom:2cqw] [font-size:0.8cqw] [&_>_span:last-child]:[color:#8a94a6]">
            <span>Purchase order workspace</span>
            <span>Sample data</span>
          </div>

          <div className="erp-insights-workspace-cards grid [grid-template-columns:1fr_1.15fr_1fr] [gap:1.4cqw] [&_article]:[min-width:0] [&_article]:[padding:1.5cqw] [&_article]:[border:1px_solid_#edf0f5] [&_article]:[border-radius:1cqw] [&_article]:[font-size:0.9cqw] [&_dl]:grid [&_dl]:[gap:0.4cqw] [&_dl]:[margin:0.8cqw_0_0] [&_dl]:[font-size:0.7cqw] [&_dt]:[color:#8c95a5] [&_dd]:[margin:0_0_0.8cqw] [&_.erp-insights-summary-card]:items-center [&_.erp-insights-summary-card]:[background:#fcf8ef] [&_.erp-insights-summary-card]:text-center">
            <article className="erp-insights-order-card flex flex-col items-start [gap:1cqw]">
              <div className="erp-insights-avatar grid [place-items:center] [width:5cqw] [height:5cqw] [border-radius:1cqw] [background:#f9ccac] [color:#694032] [font-size:1.6cqw] font-semibold">NS</div>
              <strong>Northstar Supplies</strong>
              <span className="erp-insights-approved [padding:0.2cqw_0.5cqw] [border-radius:0.4cqw] [background:#e5f7ec] [color:#159662] [font-size:0.65cqw]">APPROVED</span>
              <dl>
                <dt>Purchase order</dt>
                <dd>PO-204</dd>
                <dt>Assigned to</dt>
                <dd>Finance team</dd>
                <dt>Department</dt>
                <dd>Operations</dd>
              </dl>
            </article>

            <article className="erp-insights-summary-card flex flex-col items-start [gap:1cqw] [&_>_strong]:[font-size:1.8cqw]">
              <span>Order summary</span>
              <strong>₹24,500</strong>
              <div className="erp-insights-package-icon grid [place-items:center] [width:7cqw] [height:7cqw] [margin:1cqw_0] rounded-full [background:#f0e7d6] [color:#b18a42] [&_svg]:[width:4cqw] [&_svg]:[height:4cqw]">
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

            <article className="erp-insights-activity-card [&_>_div]:flex [&_>_div]:items-start [&_>_div]:[gap:0.5cqw] [&_>_div]:[margin-top:2cqw] [&_>_div]:[font-size:0.7cqw] [&_svg]:[flex-shrink:0] [&_svg]:[width:1cqw] [&_svg]:[height:1cqw] [&_svg]:[color:#22996c]">
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

      <div className="erp-insights-access-card absolute [top:69%] [left:29.5%] grid [gap:0.55cqw] [width:18%] [padding:1.4cqw] [border:0.6cqw_solid_#fff] [border-radius:1.4cqw] [background:#fff3e9] [box-shadow:0_1cqw_3cqw_#2e3c5b10] [color:#686c7a] [font-size:0.75cqw] [&_strong]:[color:#273650] [&_strong]:[font-size:0.85cqw] [&_strong]:font-medium">
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
      className="erp-insights-preview relative [container-type:inline-size] [aspect-ratio:816_/_320] overflow-hidden [background:linear-gradient(120deg,_#9ecfff,_#bad3d1_57%,_#e4d57b)] [color:#20242d] [&_h3]:[margin:0_0_1.4cqw] [&_h3]:[color:#151515] [&_h3]:[font-size:1.7cqw] [&_h3]:font-medium [&_h3]:[line-height:1.3]"
      aria-hidden="true"
    >
      <article className="erp-insights-performance-card absolute [padding:2.8cqw] [border:1px_solid_#e3e7e8] [border-radius:2cqw] [background:#fff] [top:15%] [left:5%] [width:25%] [&_>_strong]:[font-size:2.1cqw] [&_>_strong]:font-semibold [&_p]:[margin:0.4cqw_0_0.9cqw] [&_p]:[color:#777] [&_p]:[font-size:1cqw] [&_p]:[line-height:1.5] [&_h3:not(:first-child)]:[margin-top:2.2cqw]">
        <h3>Team performance</h3>
        <strong>343</strong>
        <p>Tasks completed this month</p>
        <div className="erp-insights-progress [height:0.4cqw] [background:#ededed] [&_>_span]:block [&_>_span]:h-full [&_>_span]:[background:#eb4a57]">
          <span style={{ width: "67%" }} />
        </div>
        <h3>Order performance</h3>
        <strong>910</strong>
        <p>50% of 1,820 planned orders</p>
        <div className={`erp-insights-progress [height:0.4cqw] [background:#ededed] [&_>_span]:block [&_>_span]:h-full [&_>_span]:[background:#eb4a57] erp-insights-green-progress [&_>_span]:[background:#23b44d]`}>
          <span style={{ width: "50%" }} />
        </div>
      </article>

      <article className="erp-insights-revenue-card absolute [padding:2.8cqw] [border:1px_solid_#e3e7e8] [border-radius:2cqw] [background:#fff] [top:31%] [left:24.5%] [width:29%]">
        <h3>Revenue share</h3>
        <div className="erp-insights-revenue-chart relative grid [place-items:center] [height:13.5cqw] [margin:1.8cqw_0_1.4cqw] [&_>_span]:absolute [&_>_span]:[color:#6e6e6e] [&_>_span]:[font-size:1cqw]">
          <span className="erp-insights-revenue-top [top:0] [left:0]">₹22,410</span>
          <span className="erp-insights-revenue-right [top:3cqw] [right:-0.4cqw]">₹50,138</span>
          <span className="erp-insights-revenue-left [bottom:0] [left:-0.5cqw]">₹27,452</span>
          <div className="erp-insights-donut grid [place-items:center] [width:8.5cqw] [height:8.5cqw] rounded-full [background:conic-gradient(#ea414b_0_50%,_#f3a23d_50%_72%,_#1faf51_72%_100%)] [&_>_span]:[width:5cqw] [&_>_span]:[height:5cqw] [&_>_span]:rounded-full [&_>_span]:[background:#fff]">
            <span />
          </div>
        </div>
        <div className={"erp-insights-revenue-legend flex justify-center [gap:1.8cqw] [color:#777] [font-size:1cqw] [&_>_span::before]:inline-block [&_>_span::before]:[width:0.7cqw] [&_>_span::before]:[height:0.7cqw] [&_>_span::before]:[margin-right:0.4cqw] [&_>_span::before]:[background:#ea414b] [&_>_span::before]:[content:\"\"] [&_>_span:nth-child(2)::before]:[background:#f3a23d] [&_>_span:nth-child(3)::before]:[background:#1faf51]"}>
          {["East", "West", "Central"].map((region) => (
            <span key={region}>{region}</span>
          ))}
        </div>
      </article>

      <article className="erp-insights-target-card absolute [padding:2.8cqw] [border:1px_solid_#e3e7e8] [border-radius:2cqw] [background:#fff] [top:31%] [left:55.2%] [width:41%]">
        <h3>Individual target tracker</h3>
        {[
          { initials: "AS", target: "₹400k", value: "₹360k", progress: "90%" },
          { initials: "RK", target: "₹550k", value: "₹480k", progress: "87%" },
        ].map((person) => (
          <div
            className="erp-insights-target-row flex items-end [gap:1cqw] [margin-top:1.5cqw] [&:nth-of-type(2)_.erp-insights-target-avatar]:[background:#d3beca]"
            key={person.initials}
          >
            <span className="erp-insights-target-avatar grid [place-items:center] [flex-shrink:0] [width:3.3cqw] [height:3.3cqw] [border:0.3cqw_solid_#e2e9f1] rounded-full [background:#bfcfdf] [color:#fff] [font-size:0.9cqw]">{person.initials}</span>
            <div className="erp-insights-target-detail [flex:1] [min-width:0] [&_>_span]:block [&_>_span]:[margin-bottom:0.5cqw] [&_>_span]:[font-size:0.9cqw] [&_>_span]:text-right">
              <span>Target: {person.target}</span>
              <div className="erp-insights-target-bar [height:3cqw] overflow-hidden [border-radius:2cqw] [background:#ededed] [&_>_span]:flex [&_>_span]:items-center [&_>_span]:justify-center [&_>_span]:h-full [&_>_span]:[border-right:0.3cqw_solid_#6b7682] [&_>_span]:[background:#7bb4f7] [&_>_span]:[color:#fff] [&_>_span]:[font-size:1.1cqw] [&_>_span]:font-semibold">
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
      className="erp-automation-automation [padding:60px_0_80px] [background:#fff] [&_h2]:[margin:0_0_18px] [&_h2]:[color:#193175] [&_h2]:[font-size:clamp(34px,_3vw,_48px)] [&_h2]:font-medium [&_h2]:[line-height:1.16] [&_h2]:[letter-spacing:-1.2px] max-[760px]:[padding:32px_0_48px] max-[760px]:[&_h2]:[font-size:clamp(30px,_6.6vw,_40px)] max-[760px]:[&_h2]:[letter-spacing:-0.8px]"
      id="erp-insights"
      aria-labelledby="erp-insights-heading"
    >
      <div className="erp-automation-inner [width:min(1070px,_calc(100%_-_64px))] [margin:auto] max-[760px]:[width:calc(100%_-_40px)]">
        <h2 id="erp-insights-heading">
          Enterprise-Grade Customization and
          <br />
          Deep Insights
        </h2>
        <p className="erp-automation-description [max-width:930px] [margin:0] [color:#151515] [font-size:18px] [line-height:1.65] max-[760px]:[font-size:16px]">
          BrainADZ ERP brings configurable workspaces, reporting and compatible
          API integrations together, helping you shape a connected system around
          your business.
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
