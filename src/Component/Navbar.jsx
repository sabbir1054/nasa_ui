const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="" srcset="" />
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-8 text-white text-sm">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#community" className="hover:text-blue-400 transition">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
