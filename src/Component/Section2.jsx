const Section2 = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/section2bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
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
                NASA's TESS (Transiting Exoplanet Survey Satellite) scans the sky in search of exoplanets. It helps scientists analyze brightness variations in stars, which can indicate orbiting planets. By processing data and isolating patterns, researchers predict the existence of planets beyond our solar system.
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
                The Kepler space telescope was NASA's first planet-hunting mission. Different in design, a subset of data from Kepler K2 missions has aided in further validation of exoplanets. Using light curves collected by Kepler, astronomers have been able to confirm thousands of planets beyond our solar system. Many of these exoplanets reside in systems we never knew existed — groundbreaking revelations made possible by analyzing the archive of the data.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Read more
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
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
