// // components/Section2.jsx
// const Section2 = () => {
//   return (
//     // top padding to clear the fixed navbar height; adjust if your nav is taller/shorter
//     <section className="relative w-full bg-black overflow-hidden pt-20 md:pt-24">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{
//           backgroundImage: "url(/section2bg.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: 0,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content Container - Centered */}
//       <div className="relative z-0 flex items-center justify-center min-h-screen px-4 py-20">
//         <div className="max-w-3xl w-full">
//           {/* Single Card Container with both sections */}
//           <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-12 hover:bg-white/10 transition-all duration-300 animate-slide-up relative">
//             {/* TSS Satellite - Top Left of Card */}
//             <div className="absolute -top-12 -left-12 z-10 animate-float">
//               <img
//                 src="/tss.png"
//                 alt="TESS Satellite"
//                 className="w-28 md:w-36 lg:w-40 object-contain hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             {/* Kepler Satellite - Bottom Right of Card */}
//             <div className="absolute -bottom-12 -right-12 z-10 animate-float-delayed">
//               <img
//                 src="/kepler.png"
//                 alt="Kepler Satellite"
//                 className="w-28 md:w-36 lg:w-40 object-contain hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             {/* TESS Section */}
//             <div className="mb-10 pb-10 border-b border-white/10">
//               <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
//                 <span className="text-blue-400">TESS (Transiting Exoplanet Survey Satellite)</span>
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
//                 NASA's TESS (Transiting Exoplanet Survey Satellite) scans the
//                 sky in search of exoplanets. It helps scientists analyze
//                 brightness variations in stars, which can indicate orbiting
//                 planets. By processing data and isolating patterns, researchers
//                 predict the existence of planets beyond our solar system.
//               </p>
//               <a
//                 href="https://science.nasa.gov/mission/tess/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
//                   Read more
//                 </button>
//               </a>
//             </div>

//             {/* K2 Section */}
//             <div className="mb-10 pb-10 border-b border-white/10">
//               <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
//                 <span className="text-blue-400">K2 (Kepler’s Second Mission)</span>
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
//                 After the failure of two of Kepler’s reaction wheels, NASA repurposed the telescope for a new mission: K2.
//                 Instead of staring at one patch of sky, K2 observed multiple fields along the ecliptic plane. This gave
//                 scientists data not only on exoplanets, but also on stars, galaxies, and even supernovae. Despite
//                 operating with limited stability, K2 extended Kepler’s legacy and discovered hundreds of new worlds.
//               </p>
//               <a
//                 href="https://science.nasa.gov/mission/kepler/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
//                   Read more
//                 </button>
//               </a>
//             </div>

//             {/* KOI */}
//             <div>
//               <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
//                 <span className="text-blue-400">KOI (Kepler Objects of Interest)</span>
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
//                 NASA’s Kepler mission generated a catalog of Kepler Objects of Interest (KOIs)
//                 — potential exoplanet signals detected in star brightness data.
//                 Each KOI represents a dip in starlight that might be caused by a transiting planet.
//                 Not all KOIs are confirmed; some are later validated as planets, while others turn out to be false positives.
//                 This catalog became the foundation for thousands of confirmed exoplanets
//                 and remains one of the most important resources for planetary science.
//               </p>
//               <a
//                 href="https://science.nasa.gov/exoplanet-catalog/koi-159901/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
//                   Read more
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="relative z-10 w-full bg-black/40 max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10">
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//           {/* Logo and Copyright */}
//           <div className="flex flex-col gap-3">
//             <div className="flex items-center gap-2">
//               <img src="/logo.png" alt="Spectra AI Logo" className="h-7 w-auto" />
//             </div>
//             <p className="text-gray-400 text-xs leading-relaxed">
//               © Team Spectra 2025. All rights reserved
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-wrap items-center gap-6 md:gap-10">
//             <a href="#" className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide">Features</a>
//             <a href="#" className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide">Services</a>
//             <a href="#" className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide">About</a>
//             <a href="#" className="text-white text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wide">How to Use</a>
//           </div>

//           {/* Socials */}
//           <div className="flex items-center gap-3">
//             <a href="#" className="w-9 h-9 bg-[#1a2942]/80 hover:bg-blue-500/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="Twitter">
//               <svg className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//               </svg>
//             </a>
//             <a href="#" className="w-9 h-9 bg-[#1a2942]/80 hover:bg-pink-500/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="Instagram">
//               <svg className="w-4 h-4 text-white group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM18.406 4.155a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//               </svg>
//             </a>
//             <a href="#" className="w-9 h-9 bg-[#1a2942]/80 hover:bg-blue-400/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="Telegram">
//               <svg className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z" />
//               </svg>
//             </a>
//             <a href="#" className="w-9 h-9 bg-[#1a2942]/80 hover:bg-blue-600/30 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="Facebook">
//               <svg className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
//         .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
//         .animate-slide-up-delayed { animation: slide-up 0.8s ease-out 0.2s forwards; opacity: 0; }
//       `}</style>
//     </section>
//   );
// };

// export default Section2;


// components/Section2.jsx
const Section2 = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden pt-32 md:pt-0">
      {/* Animated Background with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/section2bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-twinkle-delayed"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-6xl w-full">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Mission Technology
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore the cutting-edge satellites and data catalogs powering our exoplanet discoveries
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 mt-24">
            {/* TESS Card */}
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-blue-950/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-slide-up">
              {/* Floating Satellite */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
                <div className="relative animate-float">
                  <img
                    src="/tss.png"
                    alt="TESS Satellite"
                    className="w-32 h-32 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-20">
                <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full mb-4">
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">Active Mission</span>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  TESS
                </h3>
                <p className="text-blue-400 text-sm font-semibold mb-4">Transiting Exoplanet Survey Satellite</p>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  NASA's all-sky survey mission scanning for exoplanets through stellar brightness variations. 
                  Advanced photometry detects transiting worlds across 200,000+ stars.
                </p>

                <a
                  href="https://science.nasa.gov/mission/tess/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold group/link"
                >
                  Explore Mission
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* K2 Card */}
            <div className="group relative bg-gradient-to-br from-purple-900/20 to-purple-950/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {/* Floating Satellite */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
                <div className="relative animate-float-delayed">
                  <img
                    src="/kepler.png"
                    alt="Kepler Satellite"
                    className="w-32 h-32 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-20">
                <div className="inline-block px-4 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-full mb-4">
                  <span className="text-purple-300 text-xs font-bold uppercase tracking-wider">Extended Mission</span>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  K2
                </h3>
                <p className="text-purple-400 text-sm font-semibold mb-4">Kepler's Second Mission</p>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Born from innovation after mechanical failure, K2 observed multiple ecliptic fields, 
                  discovering hundreds of new worlds while studying stars, galaxies, and supernovae.
                </p>

                <a
                  href="https://science.nasa.gov/mission/kepler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold group/link"
                >
                  Explore Mission
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* KOI Card */}
            <div className="group relative bg-gradient-to-br from-cyan-900/20 to-cyan-950/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Floating Icon */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
                <div className="relative animate-float">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 rotate-6 group-hover:rotate-12">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-20">
                <div className="inline-block px-4 py-1.5 bg-cyan-500/20 border border-cyan-400/30 rounded-full mb-4">
                  <span className="text-cyan-300 text-xs font-bold uppercase tracking-wider">Data Catalog</span>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  KOI
                </h3>
                <p className="text-cyan-400 text-sm font-semibold mb-4">Kepler Objects of Interest</p>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  The foundational catalog of potential exoplanets. Each KOI represents a transit signal 
                  awaiting validation—the bedrock of thousands of confirmed planetary discoveries.
                </p>

                <a
                  href="https://science.nasa.gov/exoplanet-catalog/koi-159901/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold group/link"
                >
                  Explore Catalog
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all">
              <div className="text-4xl font-black text-blue-400 mb-2">5000+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Confirmed Exoplanets</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all">
              <div className="text-4xl font-black text-purple-400 mb-2">200K+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Stars Observed</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all">
              <div className="text-4xl font-black text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Objects of Interest</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Spectra AI Logo" className="h-8 w-auto" />
              </div>
              <p className="text-gray-500 text-xs">
                © Team Spectra 2025. All rights reserved
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="#" className="text-gray-400 text-sm font-medium hover:text-white transition-colors uppercase tracking-wider">Features</a>
              <a href="#" className="text-gray-400 text-sm font-medium hover:text-white transition-colors uppercase tracking-wider">Services</a>
              <a href="#" className="text-gray-400 text-sm font-medium hover:text-white transition-colors uppercase tracking-wider">About</a>
              <a href="#" className="text-gray-400 text-sm font-medium hover:text-white transition-colors uppercase tracking-wider">How to Use</a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-400/50 rounded-xl flex items-center justify-center transition-all duration-300 group" aria-label="Twitter">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-400/50 rounded-xl flex items-center justify-center transition-all duration-300 group" aria-label="Instagram">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM18.406 4.155a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-400/20 border border-white/10 hover:border-blue-400/50 rounded-xl flex items-center justify-center transition-all duration-300 group" aria-label="Telegram">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-xl flex items-center justify-center transition-all duration-300 group" aria-label="Facebook">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes twinkle-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-slide-up { 
          animation: slide-up 0.8s ease-out forwards; 
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-twinkle-delayed {
          animation: twinkle-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Section2;