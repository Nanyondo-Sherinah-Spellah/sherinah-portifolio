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
                    About me
                </span>
            </p>



            <p className="mt-8 text-gray-400 text-lg leading-relaxed">

             I specialise in developing custom websites, web applications, business systems, and mobile applications, transforming ideas into functional, secure, and scalable products. I also explore AI development, including building intelligent AI agents and automating workflows to create smarter digital experiences.

            </p>


            <p className="mt-6 text-gray-400 text-lg leading-relaxed">

              Every project starts with understanding your goals and ends
              with a product that works reliably in the real world,
              documented, tested, and ready to grow with your business.

            </p>

            <br />
            <br />
            <br />
   
            

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
                🤖
              </div>


              <h3 className="text-2xl font-bold">
                AI Agent Development & Automation
              </h3>


              <p className="mt-3 text-gray-400 leading-relaxed">

                Designing and developing intelligent AI agents that reason, make decisions, use tools, manage workflows, and automate tasks to solve real-world problems. Experienced in building AI-powered solutions using agent architectures, LLMs, workflow orchestration, memory management, and human-in-the-loop systems.

              </p>

            </div>


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



      </div>


    </section>
  );
}

export default About;