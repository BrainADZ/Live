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
      className="@container relative aspect-816/320 overflow-hidden bg-[linear-gradient(120deg,#9ecfff,#bad3d1_57%,#e4d57b)] text-[#20242d]"
      aria-hidden="true"
    >
      <aside className="absolute top-[12%] left-[5.5%] grid h-full w-[7%] content-start gap-[2.4cqw] rounded-[1cqw_1cqw_0_0] bg-[#172b37] px-0 py-[2.5cqw] text-center text-[#d5e0e8]">
        {[
          { icon: Database, label: "Data" },
          { icon: Layers, label: "Elements" },
          { icon: Settings, label: "Style" },
          { icon: LayoutDashboard, label: "Layout" },
        ].map(({ icon: Icon, label }) => (
          <span className="grid justify-items-center gap-[0.5cqw]" key={label}>
            <Icon className="h-[1.6cqw] w-[1.6cqw]" />
            <small className="text-[0.8cqw]">{label}</small>
          </span>
        ))}
      </aside>

      <div className="absolute top-[12%] left-[13.3%] h-full w-[18%] rounded-[1cqw_1cqw_0_0] bg-[#08222c] p-[1.4cqw] text-[0.85cqw] text-[#53c4ed]">
        <div className="mb-[1.5cqw] rounded-[0.4cqw] border border-[#39505b] p-[0.6cqw] text-[#92a7b4]">
          Search fields
        </div>
        <span className="mb-[1cqw] block">FIELDS</span>
        <span className="mb-[1cqw] block">RELATED RECORDS</span>
        <span className="mb-[1cqw] block">ACTIONS</span>
        <div className="grid grid-cols-2 gap-[0.55cqw]">
          {[
            "Text field",
            "Select",
            "Date",
            "Amount",
            "Status",
            "Assign owner",
          ].map((field) => (
            <span
              className="flex min-h-[2.2cqw] items-center justify-center rounded-[0.4cqw] bg-[#203b46] text-center text-[0.65cqw] text-[#d2dfe5]"
              key={field}
            >
              {field}
            </span>
          ))}
        </div>
        <div className="mx-0 mt-[1.6cqw] mb-[1cqw]">WORKSPACE SETTINGS</div>
        <div className="grid grid-cols-2 gap-[0.55cqw]">
          {["Permissions", "Validation", "Approvals", "Notifications"].map(
            (field) => (
              <span
                className="flex min-h-[2.2cqw] items-center justify-center rounded-[0.4cqw] bg-[#203b46] text-center text-[0.65cqw] text-[#d2dfe5]"
                key={field}
              >
                {field}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="absolute top-[19%] left-[33%] flex min-h-full w-[76%] overflow-hidden rounded-[2.2cqw_0_0] border-[0.5cqw] border-[#172632] bg-white">
        <aside className="flex flex-[0_0_14cqw] flex-col gap-[1.5cqw] bg-[#20345d] p-[1.4cqw] text-[0.8cqw] text-[#d4def3]">
          <strong className="mb-[0.8cqw] text-[1cqw]">BrainADZ</strong>
          {["Overview", "Orders", "Inventory", "Accounts", "Reports"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </aside>

        <div className="min-w-0 flex-1 p-[1.8cqw]">
          <div className="mb-[2cqw] flex justify-between gap-[1cqw] text-[0.8cqw]">
            <span className="last:text-[#8a94a6]">
              Purchase order workspace
            </span>
            <span className="last:text-[#8a94a6]">Sample data</span>
          </div>

          <div className="grid grid-cols-[1fr_1.15fr_1fr] gap-[1.4cqw]">
            <article className="flex min-w-0 flex-col items-start gap-[1cqw] rounded-[1cqw] border border-[#edf0f5] p-[1.5cqw] text-[0.9cqw]">
              <div className="grid h-[5cqw] w-[5cqw] place-items-center rounded-[1cqw] bg-[#f9ccac] text-[1.6cqw] font-semibold text-[#694032]">
                NS
              </div>
              <strong>Northstar Supplies</strong>
              <span className="rounded-[0.4cqw] bg-[#e5f7ec] px-[0.5cqw] py-[0.2cqw] text-[0.65cqw] text-[#159662]">
                APPROVED
              </span>
              <dl className="mx-0 mt-[0.8cqw] mb-0 grid gap-[0.4cqw] text-[0.7cqw]">
                <dt className="text-[#8c95a5]">Purchase order</dt>
                <dd className="mx-0 mt-0 mb-[0.8cqw]">PO-204</dd>
                <dt className="text-[#8c95a5]">Assigned to</dt>
                <dd className="mx-0 mt-0 mb-[0.8cqw]">Finance team</dd>
                <dt className="text-[#8c95a5]">Department</dt>
                <dd className="mx-0 mt-0 mb-[0.8cqw]">Operations</dd>
              </dl>
            </article>

            <article className="flex min-w-0 flex-col items-center gap-[1cqw] rounded-[1cqw] border border-[#edf0f5] bg-[#fcf8ef] p-[1.5cqw] text-center text-[0.9cqw]">
              <span>Order summary</span>
              <strong className="text-[1.8cqw]">₹24,500</strong>
              <div className="mx-0 my-[1cqw] grid h-[7cqw] w-[7cqw] place-items-center rounded-full bg-[#f0e7d6] text-[#b18a42]">
                <Layers className="h-[4cqw] w-[4cqw]" />
              </div>
              <dl className="mx-0 mt-[0.8cqw] mb-0 grid gap-[0.4cqw] text-[0.7cqw]">
                <dt className="text-[#8c95a5]">Order items</dt>
                <dd className="mx-0 mt-0 mb-[0.8cqw]">18 items</dd>
                <dt className="text-[#8c95a5]">Delivery status</dt>
                <dd className="mx-0 mt-0 mb-[0.8cqw]">Scheduled</dd>
                <dt className="text-[#8c95a5]">Payment terms</dt>
                <dd className="mx-0 mt-0 mb-[0.8cqw]">Net 30</dd>
              </dl>
            </article>

            <article className="min-w-0 rounded-[1cqw] border border-[#edf0f5] p-[1.5cqw] text-[0.9cqw]">
              <strong>Recent activity</strong>
              {[
                "Approval complete",
                "Purchase released",
                "Invoice pending",
              ].map((activity) => (
                <div
                  className="mt-[2cqw] flex items-start gap-[0.5cqw] text-[0.7cqw]"
                  key={activity}
                >
                  <CheckCircle2 className="h-[1cqw] w-[1cqw] shrink-0 text-[#22996c]" />
                  <span>{activity}</span>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>

      <div className="absolute top-[69%] left-[29.5%] grid w-[18%] gap-[0.55cqw] rounded-[1.4cqw] border-[0.6cqw] border-white bg-[#fff3e9] p-[1.4cqw] text-[0.75cqw] text-[#686c7a] shadow-[0_1cqw_3cqw_#2e3c5b10]">
        <span>Workspace access</span>
        <strong className="text-[0.85cqw] font-medium text-[#273650]">
          Finance manager
        </strong>
        <span>Review & approve</span>
        <strong className="text-[0.85cqw] font-medium text-[#273650]">
          Operations team
        </strong>
        <span>View & update</span>
      </div>
    </div>
  );
}

function ReportingPreview() {
  return (
    <div
      className="@container relative aspect-816/320 overflow-hidden bg-[linear-gradient(120deg,#9ecfff,#bad3d1_57%,#e4d57b)] text-[#20242d]"
      aria-hidden="true"
    >
      <article className="absolute top-[15%] left-[5%] w-1/4 rounded-[2cqw] border border-[#e3e7e8] bg-white p-[2.8cqw]">
        <h3 className="mx-0 mt-0 mb-[1.4cqw] text-[1.7cqw] leading-[1.3] font-medium text-[#151515]">
          Team performance
        </h3>
        <strong className="text-[2.1cqw] font-semibold">343</strong>
        <p className="mx-0 mt-[0.4cqw] mb-[0.9cqw] text-[1cqw] leading-normal text-[#777]">
          Tasks completed this month
        </p>
        <div className="h-[0.4cqw] bg-[#ededed]">
          <span
            className="block h-full bg-[#eb4a57]"
            style={{ width: "67%" }}
          />
        </div>
        <h3 className="mt-[2.2cqw] mb-[1.4cqw] text-[1.7cqw] leading-[1.3] font-medium text-[#151515]">
          Order performance
        </h3>
        <strong className="text-[2.1cqw] font-semibold">910</strong>
        <p className="mx-0 mt-[0.4cqw] mb-[0.9cqw] text-[1cqw] leading-normal text-[#777]">
          50% of 1,820 planned orders
        </p>
        <div className="h-[0.4cqw] bg-[#ededed]">
          <span
            className="block h-full bg-[#23b44d]"
            style={{ width: "50%" }}
          />
        </div>
      </article>

      <article className="absolute top-[31%] left-[24.5%] w-[29%] rounded-[2cqw] border border-[#e3e7e8] bg-white p-[2.8cqw]">
        <h3 className="mx-0 mt-0 mb-[1.4cqw] text-[1.7cqw] leading-[1.3] font-medium text-[#151515]">
          Revenue share
        </h3>
        <div className="relative mx-0 mt-[1.8cqw] mb-[1.4cqw] grid h-[13.5cqw] place-items-center">
          <span className="absolute top-0 left-0 text-[1cqw] text-[#6e6e6e]">
            ₹22,410
          </span>
          <span className="absolute top-[3cqw] right-[-0.4cqw] text-[1cqw] text-[#6e6e6e]">
            ₹50,138
          </span>
          <span className="absolute bottom-0 left-[-0.5cqw] text-[1cqw] text-[#6e6e6e]">
            ₹27,452
          </span>
          <div className="grid h-[8.5cqw] w-[8.5cqw] place-items-center rounded-full bg-[conic-gradient(#ea414b_0_50%,#f3a23d_50%_72%,#1faf51_72%_100%)]">
            <span className="h-[5cqw] w-[5cqw] rounded-full bg-white" />
          </div>
        </div>
        <div className="flex justify-center gap-[1.8cqw] text-[1cqw] text-[#777]">
          {[
            { name: "East", color: "before:bg-[#ea414b]" },
            { name: "West", color: "before:bg-[#f3a23d]" },
            { name: "Central", color: "before:bg-[#1faf51]" },
          ].map((region) => (
            <span
              className={`before:mr-[0.4cqw] before:inline-block before:size-[0.7cqw] before:content-[''] ${region.color}`}
              key={region.name}
            >
              {region.name}
            </span>
          ))}
        </div>
      </article>

      <article className="absolute top-[31%] left-[55.2%] w-[41%] rounded-[2cqw] border border-[#e3e7e8] bg-white p-[2.8cqw]">
        <h3 className="mx-0 mt-0 mb-[1.4cqw] text-[1.7cqw] leading-[1.3] font-medium text-[#151515]">
          Individual target tracker
        </h3>
        {[
          { initials: "AS", target: "₹400k", value: "₹360k", progress: "90%" },
          { initials: "RK", target: "₹550k", value: "₹480k", progress: "87%" },
        ].map((person, index) => (
          <div
            className="mt-[1.5cqw] flex items-end gap-[1cqw]"
            key={person.initials}
          >
            <span
              className={`grid size-[3.3cqw] shrink-0 place-items-center rounded-full border-[0.3cqw] border-[#e2e9f1] text-[0.9cqw] text-white ${index === 1 ? "bg-[#d3beca]" : "bg-[#bfcfdf]"}`}
            >
              {person.initials}
            </span>
            <div className="min-w-0 flex-1">
              <span className="mb-[0.5cqw] block text-right text-[0.9cqw]">
                Target: {person.target}
              </span>
              <div className="h-[3cqw] overflow-hidden rounded-[2cqw] bg-[#ededed]">
                <span
                  className="flex h-full items-center justify-center border-r-[0.3cqw] border-r-[#6b7682] bg-[#7bb4f7] text-[1.1cqw] font-semibold text-white"
                  style={{ width: person.progress }}
                >
                  {person.value}
                </span>
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
      className="bg-white px-0 pt-15 pb-20 max-[760px]:px-0 max-[760px]:pt-8 max-[760px]:pb-12"
      id="erp-insights"
      aria-labelledby="erp-insights-heading"
    >
      <div className="mx-auto w-full max-w-283.5 px-5 md:px-8">
        <h2
          className="mx-0 mt-0 mb-4.5 text-[clamp(34px,3vw,48px)] leading-[1.16] font-medium tracking-[-1.2px] text-[#193175] max-[760px]:text-[clamp(30px,6.6vw,40px)] max-[760px]:tracking-[-0.8px]"
          id="erp-insights-heading"
        >
          Enterprise-Grade Customization and
          <br />
          Deep Insights
        </h2>
        <p className="m-0 max-w-232.5 text-[18px] leading-[1.65] text-[#151515] max-[760px]:text-[16px]">
          BrainADZ ERP brings configurable workspaces, reporting and compatible
          API integrations together, helping you shape a connected system around
          your business.
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
