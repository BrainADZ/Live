const team = [
  {
    name: "Sarthak Raina",
    designation: "Corporate Sale & Project Manager",
    image: "/team/cops.png",
  },
  {
    name: "Anand Upadhyay",
    designation: "Technical Manager",
    image: "/team/tech.png",
  },
];

export default function ERPTeam({ onContact }: { onContact: () => void }) {
  return (
    <section
      aria-labelledby="erp-team-heading"
      className="bg-[#f8faff] px-5 py-16 text-[#262626] md:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-300">
        <div className="mx-auto mb-10 max-w-160 text-center md:mb-12">
          <p className="mb-3 text-[13px] uppercase tracking-[2.5px] text-[#193175]">
            Meet Our Experts
          </p>
          <h2
            id="erp-team-heading"
            className="text-[36px] leading-[1.15] tracking-[-1.3px] md:text-[48px]"
          >
            The People Behind Your ERP Journey
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {team.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-2xl border border-[#dfe6f1] bg-white shadow-[0_12px_40px_rgba(25,49,117,0.06)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e9eef8]">
                <img
                  src={person.image}
                  alt={person.name}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="px-6 py-7 text-center md:px-8 md:py-8">
                <h3 className="text-2xl font-semibold tracking-[-0.5px]">
                  {person.name}
                </h3>
                <p className="mt-2 min-h-12 text-base text-[#616161]">
                  {person.designation}
                </p>
                <button
                  type="button"
                  onClick={onContact}
                  className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[#193175] px-8 font-medium text-white transition-colors hover:bg-[#10245d]"
                >
                  Contact Us
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
