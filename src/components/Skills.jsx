function Skills() {
  const programming = ["JavaScript", "Python", "HTML & CSS", "Typescript"];

  const frameworks = ["Bootstrap & Tailwind CSS", "LangChain", "Streamlit", "React"];

  const databases = ["MongoDB", "SQL", "Postgress"];

  const tools = ["Git", "GitHub", "VS Code", "XAMPP"];

  const otherSkills = [
    "RAG",
    "Large Language Models",
    "AI data & Retrieval",
    "Application Security",
  ];

  const SmallCard = ({ item }) => (
    <div
      className="
      bg-[#1A2435]
      rounded-xl
      border border-[#6C63FF]
      py-2
      px-3
      text-sm
      text-center
      text-gray-200
      hover:bg-[#6C63FF]
      hover:text-black
      hover:border-[#6C63FF]-400
      "
    >
      {item}
    </div>
  );

  const SectionCard = ({ title, items }) => (
    <div
      className="
      bg--[#6C63FF]
      rounded-3xl
      border border-white/10
      p-6
      text-[#6C63FF]
      hover:border-[#6C63FF]
      hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
      "
    >
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <SmallCard key={item} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="bg-[#07111F] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-2xl font-semibold mb-5">
            <span className="text-green-400">03.</span>{" "}
            <span className="text-4xl font-bold text-white">
              Technical Skills
            </span>
          </p>

          <p className="mt-5 text-gray-400 max-w-2xl text-lg">
            Technologies, tools and methodologies used to build
            reliable, scalable and secure software solutions.
          </p>

        </div>

        {/* Programming Languages */}

        <div className="mb-8">

          <div className="bg-[#111827] rounded-3xl border border-white/10 p-6 hover:border-[#6C63FF]-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">

            <h3 className="text-2xl font-bold mb-4 text-[#6C63FF]">
              Programming Languages
            </h3>

            <div className="grid md:grid-cols-4 gap-4">
              {programming.map((item) => (
                <SmallCard key={item} item={item} />
              ))}
            </div>

          </div>

        </div>

        {/* Frameworks & Databases */}

        <div className="grid lg:grid-cols-2 gap-8 mb-6">

          <SectionCard
            title="Frameworks & Libraries"
            items={frameworks}
          />

          <SectionCard
            title="Databases"
            items={databases}
          />

        </div>

        {/* Other Skills & Tools */}

        <div className="grid lg:grid-cols-2 gap-8">

          <SectionCard
            title="Other Skills"
            items={otherSkills}
          />

          <SectionCard
            title="Tools"
            items={tools}
          />

        </div>

      </div>
    </section>
  );
}

export default Skills;