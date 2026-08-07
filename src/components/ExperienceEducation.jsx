const timeline = [
  {
    type: "WORK",
    title: "IT Intern",
    organization: "Equity Bank Uganda",
    period: "2025",
    items: [
      "Supported digital banking infrastructure",
      "Software troubleshooting",
      "Hardware support",
      "IT documentation",
      "Enterprise systems maintenance",
    ],
  },
  {
    type: "WORK",
    title: "Customer Service Assistant",
    organization: "Equity Bank Uganda",
    period: "2025",
    items: [
      "Assisted customers using digital banking platforms",
      "Account verification",
      "Customer support",
      "Data management",
    ],
  },
  {
    type: "EDUCATION",
    title: "Certificate in Software Engineering",
    organization: "Refactory Academy",
    period: "2026",
    items: [
      "Specializing in Software Engineering",
      "Database Systems",
      "Web Development",
      "Object-Oriented Programming",
    ],
  },
  {
    type: "EDUCATION",
    title: "Software & AI Engineering",
    organization: "Turing College",
    period: "2026-present",
    items: [
      "Full-Stack Software Development",
      "Backend Development",
      "Frontend Development",
      "Artificial Intelligence",
    ],
  },
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="bg-[#0B1120] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-5 mb-20">
          <span className="text-[#4FFFB0] text-lg font-semibold">
            06.
          </span>

          <h2 className="text-4xl font-bold text-white">
            Experience & Education
          </h2>

          <div className="hidden lg:block flex-1 h-px bg-slate-700"></div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-[#6C63FF]" />

          <div className="space-y-8">

            {timeline.map((item, index) => (

              <div
                key={index}
                className="relative flex gap-10"
              >

                {/* Timeline Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full border-2 border-[#6C63FF] bg-[#0B1120]" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#11182B] border border-[#27324A] rounded-3xl p-6 transition-all duration-300 hover:border-[#6C63FF] hover:shadow-[0_15px_40px_rgba(108,99,255,0.25)]">

                  {/* Badge */}
                  <span
                    className={`inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-widest mb-5
                    ${
                      item.type === "WORK"
                        ?  "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                        : item.type === "EDUCATION"
                        ? "bg-[#6C63FF]/10 text-[#A99BFF] border border-[#6C63FF]/40"
                        : "bg-violet-500/10 text-violet-300 border border-violet-500/30"
                    }`}
                  >
                    {item.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-[#6C63FF] text-lxl">
                      {item.organization}
                    </span>

                    <span className="text-slate-500">
                      •
                    </span>

                    <span className="text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">

                    {item.items.map((point, i) => (

                      <li
                        key={i}
                        className="flex items-start gap-4 text-slate-300"
                      >
                        <span className="text-[#6C63FF] mt-1.5 text-xs">
                          ▸
                        </span>

                        <span className="leading-6">
                          {point}
                        </span>
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}