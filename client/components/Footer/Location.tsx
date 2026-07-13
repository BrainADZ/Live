/* eslint-disable @next/next/no-img-element */

const locations = [
  {
    country: "Delhi",
    office: "Head Office",
    flag: "/location/india.png",
    address: [
      "Apex Square 3, UGF, Plot 6, Pocket B-3, Sector-17, Dwarka, New Delhi 110075, India",
    ],
  },
  {
    country: "Mumbai",
    office: "Regional Office",
    flag: "/location/india.png",
    address: [
      "911/9th Floor, 11JMIMA Complex, Off Link Road, Mindspace, Malad West, Mumbai 400064, Maharashtra, India",
    ],
  },
  {
    country: "Dubai",
    office: "International Office",
    flag: "/location/flag.png",
    address: [
      "Wood Leads Technical Services LLC (Hamdan Abid), Warehouse No -8, Ras Al Khor Indl Area 1, Dubai, UAE",
    ],
  },
  {
    country: "Thailand",
    office: "International Office",
    flag: "/location/thailand.png",
    address: [
      "96/26, Manthana 2, Soi Si Dan 22, Khambon Bang Kaew Subdistrict, Bang Phli District, Samut Prakan Province, Bangkok 10540, Thailand",
    ],
  },
];

export default function LocationsSection() {
  return (
    <section className="lazy-section bg-[#f2f2f2] px-6 py-12 text-[#161616] md:px-10 md:py-14 lg:px-12">
      <div className="mx-auto max-w-450">
        {/* HEADING */}
        <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">
          <div data-aos="fade-right">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#193175]" />

              <p className="text-[11px] font-normal uppercase tracking-[2.2px] text-[#193175]">
                Our Global Presence
              </p>
            </div>

            <h2 className="max-w-[680px] text-[34px] font-light leading-[1.08] tracking-[-1.4px] text-[#161616] md:text-[40px] lg:text-[44px]">
              Connected across{" "}
              <span className="text-[#193175]">
                global markets.
              </span>
            </h2>
          </div>

          <p
            className="max-w-[540px] text-[14px] font-light leading-[1.65] text-[#616161] md:text-[16px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Working across borders to deliver technology, digital products,
            and long-term business support.
          </p>
        </div>

        {/* LOCATION CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {locations.map((location, index) => (
            <article
              key={`${location.country}-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative min-h-[245px] overflow-hidden rounded-[22px] border border-[#d2d2d2] bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-[#193175]/60 hover:shadow-[0_16px_45px_rgba(60,91,155,0.10)]"
            >
              {/* TOP HOVER LINE */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />

              {/* TOP ROW */}
              <div className="flex items-start justify-between">
                {/* FLAG */}
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#e2e2e2] bg-white">
                  <img
                    src={location.flag}
                    alt={`${location.country} flag`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* INDEX */}
                {/* <span className="pt-1 text-[9px] tracking-[1.8px] text-[#193175]/40">
                  {String(index + 1).padStart(2, "0")}
                </span> */}
              </div>

              {/* COUNTRY */}
              <div className="mt-7">
                <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-[#193175]">
                  {location.office}
                </p>

                <h3 className="mt-2 text-[24px] font-light leading-none tracking-[-0.6px] text-[#161616]">
                  {location.country}
                </h3>
              </div>

              {/* ADDRESS */}
              <address className="mt-7 not-italic">
                {location.address.map((line) => (
                  <p
                    key={line}
                    className="text-[14px] font-light leading-[1.6] text-[#5f5f5f] md:text-[15px]"
                  >
                    {line}
                  </p>
                ))}
              </address>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}