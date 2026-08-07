import nyondostock from "../assets/nyondo.PNG";

const projects = [
  {
    title: "NyondoStock Hardware Management System",
    image: nyondostock,
    description:
      "A system that eliminates paperwork by digitizing hardware business operations. It tracks sales, manages stock, generates receipts, handles deposits and credit, and maintains a complete payment history for the business.",
    technologies: [
      "JavaScript",
      "MongoDB",
      "Node.js",
      "CSS",
      "Pug",
    ],
    features: [
      "Sales Registration",
      "Stock Registration",
      "Deposit Management",
      "Credit Management",
      "Report Generation",
      "Payment Tracking",
    ],
  },
  {
    title: "I Must Play App",
    image: null,
    description:
      "An application built to bridge the gap between talented players in underserved areas and professional clubs and academies by providing a platform for discovery and connection.",
    technologies: [
      "Firebase",
      "Tailwind CSS",
      "MVVM Architecture",
    ],
    features: [
      "Authentication",
      "Search & Filtering",
      "Firebase Integration",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0B1120] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-5 mb-16">
          <span className="text-[#4FFFB0] text-xl font-semibold">
            05.
          </span>

          <h2 className="text-4xl font-bold text-white">
            Projects
          </h2>

          <div className="hidden lg:block flex-1 h-px bg-slate-700"></div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#11182B] border border-[#27324A] rounded-3xl overflow-hidden transition-all duration-300 hover:border-[#6C63FF] hover:shadow-[0_15px_40px_rgba(108,99,255,0.25)]"
            >

              {/* Screenshot */}
              <div className="overflow-hidden h-60 border-b border-[#27324A]">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1A2238] flex items-center justify-center text-slate-500 text-lg">
                    Screenshot Coming Soon
                  </div>
                )}

              </div>

              {/* Content */}
              <div className="p-8">

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-5">
                  {project.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-[#1A2238] border border-[#6C63FF] text-[#D8D5FF] text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Description */}
                <p className="text-slate-400 leading-8 mb-8">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">

                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 rounded-xl bg-[#1A2238] border border-[#6C63FF] text-[#D8D5FF] text-sm font-medium transition-all duration-300 hover:bg-[#6C63FF] hover:text-white"
                    >
                      {feature}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}