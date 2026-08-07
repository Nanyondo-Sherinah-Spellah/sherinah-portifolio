function Services() {

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Custom websites, company portals, SaaS platforms, and web systems built for performance and growth."
    },

    {
      icon: "📱",
      title: "Mobile Applications",
      description:
        "Modern Android applications designed to solve problems and provide great user experiences."
    },

    {
      icon: "🤖",
      title: "AI Solutions",
      description:
        "Artificial intelligence integration, automation, and intelligent systems that improve efficiency."
    },

    {
      icon: "⚙️",
      title: "Business Automation",
      description:
        "Digital solutions that automate workflows and help businesses operate smarter."
    },

    {
      icon: "☁️",
      title: "SaaS Platforms",
      description:
        "Scalable software products designed for businesses and organisations."
    },

    {
      icon: "🔒",
      title: "Enterprise Systems",
      description:
        "Secure and reliable systems built to support organisational growth."
    }
  ];


  return (
    <section
      id="services"
      className="bg-[#07111F] text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        <div className="text-left mb-14">

          <p className="text-2xl font-semibold mb-5">
                <span className="text-green-400">
                    02.
                </span>{" "}
                <span className="text-4xl font-bold text-white">
                    Services
                </span>
          </p>


          <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
            We create reliable digital solutions that help businesses
            transform ideas into scalable products.
          </p>

        </div>



        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {services.map((service, index) => (

            <div
              key={index}
              className="flex-1 bg-[#11182B] border border-[#27324A] rounded-3xl p-6 transition-all duration-300 hover:border-[#6C63FF] hover:shadow-[0_15px_40px_rgba(108,99,255,0.25)]"
            >

              <div className="text-4xl mb-5">
                {service.icon}
              </div>


              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>


              <p className="mt-4 text-gray-400 leading-relaxed">
                {service.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default Services;