import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    alert("Button clicked!");
    
    console.log("Form submitted");

    try {
      const response = await emailjs.send(
        "service_jcw41vj",
        "template_b0w0cjp",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        },
        "VSesed9K-kLffZidt"
      );

      console.log("EmailJS Success:", response);

      setStatus("✅ Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        `❌ ${
          error?.text ||
          error?.message ||
          "Something went wrong while sending the message."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0B1120] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-5 mb-16">
          <span className="text-[#4FFFB0] text-xl font-semibold">
            07.
          </span>

          <h2 className="text-4xl font-bold text-white">
            Contact
          </h2>

          <div className="hidden lg:block flex-1 h-px bg-slate-700"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>

            <h3 className="text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h3>

            <p className="text-slate-400 leading-8 mb-10">
              Have a project, an idea, or a business challenge?
              I'm always open to discussing software solutions,
              freelance opportunities, and collaborations.
            </p>

            <a
              href="mailto:nsherinahspellah@gmail.com"
              className="flex items-center gap-5 bg-[#11182B] border border-[#27324A] rounded-2xl p-5 mb-5  hover:translate-x-2 hover:border-[#6C63FF] transition-all duration-300"
            >
              <Mail className="text-[#6C63FF]" size={22} />
              <span className="text-white">
                nsherinahspellah@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/Nanyondo-Sherinah-Spellah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#11182B] border border-[#27324A] rounded-2xl p-5 mb-5  hover:translate-x-2 hover:border-[#6C63FF] transition-all duration-300"
            >
              <FaGithub className="text-[#6C63FF] text-xl" />
              <span className="text-white">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nanyondo-sherinah-spellah-573091411"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#11182B] border border-[#27324A] rounded-2xl p-5 mb-5  hover:translate-x-2 hover:border-[#6C63FF] transition-all duration-300"
            >
              <FaLinkedin className="text-[#6C63FF] text-xl" />
              <span className="text-white">
                LinkedIn
              </span>
            </a>

            <div className="flex items-center gap-5 bg-[#11182B] border border-[#27324A] rounded-2xl p-5  hover:translate-x-2 mb-5 hover:border-[#6C63FF] transition-all duration-300">
              <Phone className="text-[#6C63FF]" size={22} />
              <span className="text-white">
                +256 754 888980 / +256 744 631017
              </span>
            </div>

            <div className="flex items-center gap-5 bg-[#11182B] border border-[#27324A] rounded-2xl p-5 hover:border-[#6C63FF] hover:translate-x-2 transition-all duration-300">
              <MapPin className="text-[#6C63FF]" size={22} />
              <span className="text-white">
                Mukono, Uganda
              </span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-[#11182B] border border-[#27324A] rounded-3xl p-8">

            <form onSubmit={sendEmail} noValidate>

              <div className="grid md:grid-cols-2 gap-5 mb-5">

                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="bg-[#0B1120] border border-[#27324A] rounded-xl p-4 text-white outline-none focus:border-[#6C63FF]"
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="bg-[#0B1120] border border-[#27324A] rounded-xl p-4 text-white outline-none focus:border-[#6C63FF]"
                />

              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-[#0B1120] border border-[#27324A] rounded-xl p-4 text-white mb-5 outline-none focus:border-[#6C63FF]"
              />

              <textarea
                rows={7}
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#0B1120] border border-[#27324A] rounded-xl p-4 text-white mb-8 resize-none outline-none focus:border-[#6C63FF]"
              />

              <button
                type="submit"
                disabled={loading}
                onClick={() => console.log("Button clicked")}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] text-white font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center mt-5 text-white">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}