const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We discuss your goals, requirements, and budget. We clarify scope and recommend the best solution.",
  },
  {
    number: "2",
    title: "Plan & Proposal",
    description:
      "You receive a clear proposal with deliverables, timeline, and transparent pricing, no surprises.",
  },
  {
    number: "3",
    title: "Build & Review",
    description:
      "We build in short, reviewable milestones so you can see progress and give feedback along the way.",
  },
  {
    number: "4",
    title: "Launch & Support",
    description:
      "Clean handover with documentation, plus ongoing support and maintenance options if you need them.",
  },
];

export default function WorkProcess() {
  return (
    <section
      id="process"
      className="bg-[#0B1120] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-5 mb-16">
          <span className="text-[#4FFFB0] text-xl font-bold">
            04.
          </span>

          <span className="text-4xl font-bold text-white">
            How We Work Together
          </span>

          <div className="hidden lg:block flex-1 h-px bg-slate-700"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#11182B] border border-[#27324A] rounded-3xl p-8
              hover:border-[#6C63FF]
              hover:shadow-[0_15px_40px_rgba(108,99,255,0.35)]
              "
            >
              {/* Number */}
              <div className="w-14 h-14 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-2xl font-bold mb-8">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-white text-lxl font-bold mb-5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#A7B0C0] text-lg leading-9">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}