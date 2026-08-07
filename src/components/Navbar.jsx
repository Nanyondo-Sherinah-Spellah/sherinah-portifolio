function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#07111F]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Sheriflix
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-white">

          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-cyan-400 transition">
            Services
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#experience" className="hoover:text-cyan-400 transition"> Experience</a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;