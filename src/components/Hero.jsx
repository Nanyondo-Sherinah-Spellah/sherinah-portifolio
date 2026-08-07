import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#07111F]"
    >
      {/* ===================== Background ===================== */}

      {/* Purple Glow */}
      <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] rounded-full bg-[#6C63FF]/20 blur-[160px] animate-pulse"></div>

      {/* Cyan Glow */}
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[150px] animate-pulse"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[150px]"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute top-24 left-24 w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>

      <div className="absolute top-48 right-40 w-3 h-3 rounded-full bg-[#6C63FF] animate-pulse"></div>

      <div className="absolute bottom-24 left-1/3 w-2 h-2 rounded-full bg-white animate-ping"></div>

      <div className="absolute bottom-40 right-24 w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></div>

      {/* ===================== Content ===================== */}

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#11182B]/80 border border-[#6C63FF]/40 backdrop-blur-md mb-6">

            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-[#6C63FF] text-sm">
              AVAILABLE FOR FREELANCE AND AI PROJECTS
            </span>

          </div>

          <p className="text-cyan-400 text-lg mb-4">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Nanyondo Sherinah Spellah
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#6C63FF] mt-4">
            Software & AI Engineer
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8 max-w-xl">
            I design and build modern web applications, intelligent
            software systems and AI-powered solutions that solve
            real-world problems while delivering exceptional user
            experiences.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#6C63FF] text-white font-semibold hover:bg-[#7A72FF] transition duration-300 shadow-lg shadow-[#6C63FF]/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-[#6C63FF] text-[#6C63FF] font-semibold hover:bg-[#6C63FF] hover:text-white transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative w-80 h-80 animate-[float_6s_ease-in-out_infinite]">

            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#6C63FF] via-cyan-400 to-blue-500 blur-3xl opacity-40 animate-pulse"></div>

            {/* Border */}
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-[#6C63FF] via-cyan-400 to-blue-500">

              <img
                src={profile}
                alt="Nanyondo Sherinah Spellah"
                className="w-full h-full rounded-full object-cover border-4 border-[#07111F]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;