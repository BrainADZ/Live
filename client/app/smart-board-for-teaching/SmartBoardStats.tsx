import styles from "./SmartBoardStats.module.css";
import layout from "./SmartBoardLayout.module.css";

const stats = [
  { value: 14, label: "Years of Experience", description: "In digital display solutions" },
  { value: 500, label: "Clients Served", description: "Across different industries" },
  { value: 1000, label: "Projects Completed", description: "Across various applications" },
  { value: 20, label: "Product Solutions", description: "For modern spaces" },
];

export default function SmartBoardStats() {
  return (
    <section className="bg-white py-20 text-[#161616]">
      <div className={layout.container}>
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#193175]" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#193175]">Numbers That Matter</p>
          </div>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Creating Measurable Impact through <span className="text-[#193175]">Technology</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Our numbers reflect practical technology, reliable execution, and the long-term value we create for modern businesses.
          </p>
        </div>
        <div className={`${styles.grid} bg-white`}>
          {stats.map((item) => (
            <div key={item.label} className={`${styles.item} relative flex min-h-[205px] flex-col items-center px-4 pb-8 pt-8 text-center md:min-h-[225px] md:pb-10 md:pt-9 lg:min-h-[235px]`}>
              <div className="flex items-start justify-center">
                <span className="text-[44px] font-medium leading-none tracking-[-2px] text-[#193175] md:text-[50px] lg:text-[52px]">{item.value}</span>
                <span className="ml-[2px] text-[27px] font-medium leading-none text-[#193175] md:text-[31px]">+</span>
              </div>
              <p className="mt-12 max-w-[260px] text-[15px] font-medium leading-[1.4] tracking-[-0.3px] text-[#555555] md:mt-14 md:text-[17px] lg:text-[18px]">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-[#616161] md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
