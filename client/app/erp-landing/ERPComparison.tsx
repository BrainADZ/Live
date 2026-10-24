/* eslint-disable @next/next/no-img-element */


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
      className="erp-comparison-comparison [padding:64px_0_80px] [background:#193175] [color:#fff] [&_h2]:[max-width:800px] [&_h2]:[margin:0_auto_44px] [&_h2]:[color:#fff] [&_h2]:[font-size:clamp(30px,_2.7vw,_42px)] [&_h2]:font-medium [&_h2]:[line-height:1.2] [&_h2]:[letter-spacing:-1px] [&_h2]:text-center max-[760px]:[padding:44px_0_52px] max-[760px]:[&_h2]:[margin-bottom:30px] max-[760px]:[&_h2]:[font-size:clamp(28px,_6vw,_36px)] max-[760px]:[&_h2]:[letter-spacing:-0.7px]"
      id="erp-comparison"
      aria-labelledby="erp-comparison-heading"
    >
      <div className="erp-comparison-inner [width:min(1070px,_calc(100%_-_64px))] [margin:auto] max-[760px]:[width:calc(100%_-_32px)]">
        <h2 id="erp-comparison-heading">
          See how BrainADZ ERP compares
          <br />
          with others
        </h2>

        <div
          className="erp-comparison-table-wrap [padding-top:12px] [overflow-x:auto] [border-radius:18px] [&:focus-visible]:[outline:3px_solid_#fff] [&:focus-visible]:[outline-offset:5px]"
          role="region"
          aria-label="BrainADZ ERP and Others feature comparison"
          tabIndex={0}
        >
          <table className={"erp-comparison-table w-full [min-width:600px] [border-spacing:0] [border-radius:18px] [background:#fff] [color:#1c2433] [table-layout:fixed] [&_th]:[padding:22px_26px] [&_th]:[border-bottom:1px_solid_#d8d8d8] [&_th]:[font-size:15px] [&_th]:font-normal [&_th]:[line-height:1.6] [&_th]:text-center [&_th]:[vertical-align:middle] [&_th]:[overflow-wrap:break-word] [&_td]:[padding:22px_26px] [&_td]:[border-bottom:1px_solid_#d8d8d8] [&_td]:[font-size:15px] [&_td]:font-normal [&_td]:[line-height:1.6] [&_td]:text-center [&_td]:[vertical-align:middle] [&_td]:[overflow-wrap:break-word] [&_th:first-child]:text-left [&_th:first-child]:font-medium [&_thead_th]:[height:94px] [&_thead_th]:[border-bottom-color:#c9ced6] [&_thead_th]:font-medium [&_thead_th:first-child]:[border-top-left-radius:18px] [&_thead_th:last-child]:[border-top-right-radius:18px] [&_thead_th:nth-child(2)]:[border-right:1px_solid_#193175] [&_thead_th:nth-child(2)]:[border-left:1px_solid_#193175] [&_thead_th:nth-child(2)]:[background:#ffedc7] [&_td:nth-child(2)]:[border-right:1px_solid_#193175] [&_td:nth-child(2)]:[border-left:1px_solid_#193175] [&_td:nth-child(2)]:[background:#ffedc7] [&_thead_th:nth-child(2)]:relative [&_thead_th:nth-child(2)::before]:absolute [&_thead_th:nth-child(2)::before]:[top:-12px] [&_thead_th:nth-child(2)::before]:[right:-1px] [&_thead_th:nth-child(2)::before]:[left:-1px] [&_thead_th:nth-child(2)::before]:[height:16px] [&_thead_th:nth-child(2)::before]:[border:1px_solid_#193175] [&_thead_th:nth-child(2)::before]:[border-bottom:0] [&_thead_th:nth-child(2)::before]:[border-radius:14px_14px_0_0] [&_thead_th:nth-child(2)::before]:[background:#ffedc7] [&_thead_th:nth-child(2)::before]:[content:\"\"] [&_tbody_tr:last-child_th]:[border-bottom:0] [&_tbody_tr:last-child_td]:[border-bottom:0] [&_tbody_tr:last-child_th]:[border-bottom-left-radius:18px] [&_tbody_tr:last-child_td:nth-child(2)]:[border-radius:0_0_14px_14px] [&_tbody_tr:last-child_td:last-child]:[border-bottom-right-radius:18px] max-[760px]:[min-width:580px] max-[760px]:[&_th]:[padding:18px] max-[760px]:[&_th]:[font-size:13px] max-[760px]:[&_td]:[padding:18px] max-[760px]:[&_td]:[font-size:13px]"}>
            <colgroup>
              <col className="erp-comparison-category-column [width:27%]" />
              <col className="erp-comparison-brainadz-column [width:37%]" />
              <col className="erp-comparison-others-column [width:36%]" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Category / Feature</th>
                <th
                  scope="col"
                  aria-label="BrainADZ ERP"
                >
                  <div className="erp-comparison-brand flex items-center justify-center [gap:14px] [&_img]:block [&_img]:[width:auto] [&_img]:[height:44px] [&_img]:[object-fit:contain] [&_>_span]:[border-left:1px_solid_#dac89f] [&_>_span]:[padding-left:14px] [&_>_span]:[font-size:24px] [&_>_span]:font-semibold [&_>_span]:[line-height:1] max-[760px]:[&_img]:[height:36px] max-[760px]:[&_>_span]:[font-size:21px]">
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
                  <span className="erp-comparison-others-heading [font-size:24px] font-medium max-[760px]:[font-size:21px]">Others</span>
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

        <p className="erp-comparison-note max-w-232.5 m-[24px_auto_0] [color:#fff] [font-size:12px] [line-height:1.6] text-center max-[760px]:[margin-top:18px] max-[760px]:[font-size:11px]">
          BrainADZ features and services are configured to the agreed project
          scope. Other offerings vary by product and plan.
        </p>
      </div>
    </section>
  );
}
