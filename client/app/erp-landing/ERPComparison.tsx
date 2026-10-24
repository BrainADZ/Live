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
      className="bg-[#193175] pt-11 pb-13 text-white md:pt-16 md:pb-20"
      id="erp-comparison"
      aria-labelledby="erp-comparison-heading"
    >
      <div className="mx-auto w-full max-w-283.5 px-4 md:px-8">
        <h2
          className="mx-auto mb-7.5 max-w-200 text-center text-[clamp(28px,6vw,36px)] leading-[1.2] font-medium tracking-[-0.7px] md:mb-11 md:text-[clamp(30px,2.7vw,42px)] md:tracking-[-1px]"
          id="erp-comparison-heading"
        >
          See how BrainADZ ERP compares
          <br />
          with others
        </h2>

        <div
          className="overflow-x-auto rounded-[18px] pt-3 focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-white"
          role="region"
          aria-label="BrainADZ ERP and Others feature comparison"
          tabIndex={0}
        >
          <table className="w-full min-w-145 table-fixed border-spacing-0 rounded-[18px] bg-white text-[13px] leading-[1.6] text-[#1c2433] md:min-w-150 md:text-[15px]">
            <colgroup>
              <col className="w-[27%]" />
              <col className="w-[37%]" />
              <col className="w-[36%]" />
            </colgroup>
            <thead>
              <tr>
                <th
                  className="h-23.5 rounded-tl-[18px] border-b border-[#c9ced6] p-4.5 text-left align-middle font-medium wrap-break-word md:px-6.5 md:py-5.5"
                  scope="col"
                >
                  Category / Feature
                </th>
                <th
                  className="relative h-23.5 border-x border-b border-x-[#193175] border-b-[#c9ced6] bg-[#ffedc7] p-4.5 text-center align-middle font-medium before:absolute before:-inset-x-px before:-top-3 before:h-4 before:rounded-t-[14px] before:border before:border-b-0 before:border-[#193175] before:bg-[#ffedc7] before:content-[''] md:px-6.5 md:py-5.5"
                  scope="col"
                  aria-label="BrainADZ ERP"
                >
                  <div className="flex items-center justify-center gap-3.5">
                    <img
                      className="block h-9 w-auto object-contain md:h-11"
                      src="/logos/logo--22.png"
                      alt="BrainADZ"
                      width="100"
                      height="44"
                    />
                    <span className="border-l border-[#dac89f] pl-3.5 text-[21px] leading-none font-semibold md:text-2xl">
                      ERP
                    </span>
                  </div>
                </th>
                <th
                  className="h-23.5 rounded-tr-[18px] border-b border-[#c9ced6] p-4.5 text-center align-middle font-medium md:px-6.5 md:py-5.5"
                  scope="col"
                >
                  <span className="text-[21px] md:text-2xl">Others</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison) => (
                <tr className="group" key={comparison.feature}>
                  <th
                    className="border-b border-[#d8d8d8] p-4.5 text-left align-middle font-medium wrap-break-word group-last:rounded-bl-[18px] group-last:border-b-0 md:px-6.5 md:py-5.5"
                    scope="row"
                  >
                    {comparison.feature}
                  </th>
                  <td className="border-x border-b border-x-[#193175] border-b-[#d8d8d8] bg-[#ffedc7] p-4.5 text-center align-middle wrap-break-word group-last:rounded-b-[14px] group-last:border-b-0 md:px-6.5 md:py-5.5">
                    {comparison.brainadz}
                  </td>
                  <td className="border-b border-[#d8d8d8] p-4.5 text-center align-middle wrap-break-word group-last:rounded-br-[18px] group-last:border-b-0 md:px-6.5 md:py-5.5">
                    {comparison.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-4.5 max-w-232.5 text-center text-[11px] leading-[1.6] md:mt-6 md:text-xs">
          BrainADZ features and services are configured to the agreed project
          scope. Other offerings vary by product and plan.
        </p>
      </div>
    </section>
  );
}
