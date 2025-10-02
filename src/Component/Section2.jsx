const Section2 = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/section2bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-3xl w-full">
          {/* Single Card Container with both sections */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-12 hover:bg-white/10 transition-all duration-300 animate-slide-up relative">
            {/* TSS Satellite - Top Left of Card */}
            <div className="absolute -top-12 -left-12 z-10 animate-float">
              <img
                src="/tss.png"
                alt="TESS Satellite"
                className="w-28 md:w-36 lg:w-40 object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Kepler Satellite - Bottom Right of Card */}
            <div className="absolute -bottom-12 -right-12 z-10 animate-float-delayed">
              <img
                src="/kepler.png"
                alt="Kepler Satellite"
                className="w-28 md:w-36 lg:w-40 object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* TESS Section */}
            <div className="mb-10 pb-10 border-b border-white/10">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                <span className="text-blue-400">TESS</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                NASA's TESS (Transiting Exoplanet Survey Satellite) scans the
                sky in search of exoplanets. It helps scientists analyze
                brightness variations in stars, which can indicate orbiting
                planets. By processing data and isolating patterns, researchers
                predict the existence of planets beyond our solar system.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Read more
              </button>
            </div>

            {/* Kepler / K2 Section */}
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                <span className="text-blue-400">Kepler / K2</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                The Kepler space telescope was NASA's first planet-hunting
                mission. Different in design, a subset of data from Kepler K2
                missions has aided in further validation of exoplanets. Using
                light curves collected by Kepler, astronomers have been able to
                confirm thousands of planets beyond our solar system. Many of
                these exoplanets reside in systems we never knew existed —
                groundbreaking revelations made possible by analyzing the
                archive of the data.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Spectra Pi Logo"
                className="h-7 w-auto"
              />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              © Team Spectra 2025. All rights reserved
            </p>
          </div>

          {/* Quick Links - Horizontal Layout */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <a
              href="#"
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide"
            >
              How to Use
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* Twitter */}
            <a
              href="#"
              className="w-9 h-9 bg-[#1a2942]/80 hover:bg-blue-500/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 bg-[#1a2942]/80 hover:bg-pink-500/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 text-white group-hover:text-pink-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="#"
              className="w-9 h-9 bg-[#1a2942]/80 hover:bg-blue-400/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 bg-[#1a2942]/80 hover:bg-blue-600/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Section2;
