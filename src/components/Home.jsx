import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#07111F] text-white flex flex-col items-center justify-center px-6 py-24"
    >

      {/* Profile Image */}
      <div className="relative w-40 h-40 mb-8">

        <div className="absolute inset-0 rounded-full bg-green-400 blur-3xl opacity-30"></div>

        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-green-400 to-cyan-400">

          <img
            src={profile}
            alt="Sherinah Spellah"
            className="w-full h-full rounded-full object-cover border-4 border-[#07111F]"
          />

        </div>

      </div>


      {/* Company Name */}
      <h1 className="text-3xl md:text-2xl font-bold text-green-400 text-center">
        SHERIFLIX TECH SOLUTIONS
      </h1>


      {/* Statement */}
      <p className="mt-6 text-xl md:text-2xl text-center max-w-3xl text-gray-200">
        WEB AND MOBILE APPLICATIONS
      </p>


      {/* Services */}
      <div className="mt-8 flex flex-col items-center gap-3 text-cyan-400 text-lg font-semibold">

        <span>WEB DEVELOPMENT</span>

        <span>APP DEVELOPMENT</span>

        <span>ARTIFICIAL INTELLIGENCE</span>

      </div>


      {/* Description */}
      <p className="mt-8 max-w-4xl text-center text-gray-400 text-lg leading-relaxed">
        I design and build custom websites, web systems, and mobile applications
        for businesses and organisations. From company portals and SaaS platforms
        to Android apps, we turn your ideas into reliable, scalable digital products.
      </p>


    </section>
  );
}

export default Home;