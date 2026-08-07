import founder from "../assets/sera.png";

function About() {
  return (
    <section
      id="about"
      className="bg-[#07111F] text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">


        {/* ABOUT TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">


          {/* LEFT SIDE */}
          <div>

           <p className="font-semibold text-2xl mb-5">
                <span className="text-green-400">
                  01.
                </span>{" "}
                <span className="text-4xl font-bold text-white">
                    About Sheriflix
                </span>
            </p>



            <p className="mt-8 text-gray-400 text-lg leading-relaxed">

              Sheriflix Solutions UG is a Mukono based company that builds
              custom websites, web systems, and mobile applications.

              We specialise in turning ideas into reliable digital products,
              company portals, Android apps, and more. Every solution is
              secure, scalable, and built to grow with your business.

            </p>


            <p className="mt-6 text-gray-400 text-lg leading-relaxed">

              Every project starts with understanding your goals and ends
              with a product that works reliably in the real world,
              documented, tested, and ready to grow with your business.

            </p>


          </div>



          {/* RIGHT SIDE CARDS */}
          <div className="space-y-6">


            {/* WEB & APP */}
            <div
              className="
              rounded-3xl 
              bg-[#111827]
              border border-green-400/20
              p-7
              hover:border-[#6C63FF] hover:translate-y-2 transition-all duration-300
             
              "
            >

              <div className="text-4xl mb-5">
                🖥️
              </div>


              <h3 className="text-2xl font-bold">
                Web & App Development
              </h3>


              <p className="mt-3 text-gray-400 leading-relaxed">

                We design and develop modern websites, web systems,
                and mobile applications that are fast, secure,
                and built for growth.

              </p>

            </div>




            {/* AI */}
            <div
              className="
              rounded-3xl
              bg-[#111827]
              border border-cyan-400/20
              p-7
              hover:border-[#6C63FF]
              hover:translate-y-2 transition-all duration-300
              "
            >

              <div className="text-4xl mb-5">
                🤖
              </div>


              <h3 className="text-2xl font-bold">
                AI Integration
              </h3>


              <p className="mt-3 text-gray-400 leading-relaxed">

                We integrate artificial intelligence solutions
                that automate processes, improve efficiency,
                and create smarter digital experiences.

              </p>

            </div>





            {/* ENTERPRISE */}
            <div
              className="
              rounded-3xl
              bg-[#111827]
              border border-green-400/20
              p-7
              hover:border-[#6C63FF]
              hover:translate-y-2 transition-all duration-300
              "
            >

              <div className="text-4xl mb-5">
                🏢
              </div>


              <h3 className="text-2xl font-bold">
                Enterprise Experience
              </h3>


              <p className="mt-3 text-gray-400 leading-relaxed">

                We create scalable solutions designed for
                organisations that need reliability, security,
                and long-term performance.

              </p>

            </div>


          </div>


        </div>





        {/* FOUNDER SECTION */}
        <div
          className="
          mt-20
          rounded-3xl
          bg-[#111827]
          border border-white/10
          p-8 md:p-10
          transition-all
          duration-500
          hover:border-[#6C63FF]
          hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
          "
        >


          <div className="flex flex-col md:flex-row gap-10 items-center">


            {/* PHOTO LEFT */}
            <div className="flex-shrink-0">

              <img
                src={founder}
                alt="Sherinah Spellah"
                className="
                w-36
                h-36
                md:w-44
                md:h-44
                rounded-full
                object-cover
                border-4
                border-[#6C63FF]
                "
              />

            </div>





            {/* EDUCATION RIGHT */}
            <div>


            <div className="inline-block bg-[#6C63FF] px-5 py-2 rounded-3xl">
              <h3 className="text-xl font-bold text-white">
                FOUNDER
              </h3>

            </div>


              <p className="text-white-400 font-semibold mt-2">
                Sherinah Spellah
              </p>



              <p className="mt-4 text-gray-400 text-lg leading-relaxed">

                My journey in technology began with a passion for
                programming, innovation, and solving problems through
                software.

                Through continuous learning and practical experience,
                I developed skills in software engineering, web
                development, mobile applications, and artificial
                intelligence.

                Today, I focus on building digital products that help
                businesses and organisations operate efficiently
                and grow.

              </p>




              {/* SKILLS */}
              <div className="mt-6 flex flex-wrap gap-3">


                <span className="px-4 py-2 rounded-full bg-[#6C63FF] text-white">
                  Software Engineering
                </span>


                <span className="px-4 py-2 rounded-full bg-[#6C63FF] text-white">
                  Artificial Intelligence
                </span>


                <span className="px-4 py-2 rounded-full bg-[#6C63FF] text-white">
                  Full Stack Development
                </span>


              </div>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}

export default About;