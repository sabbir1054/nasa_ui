import Navbar from './Navbar';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Image with fixed positioning */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20">
          {/* Main Heading */}
          <div className="text-center mb-4 animate-fade-in-down">
            <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-1 tracking-wider animate-glow" style={{ letterSpacing: '0.05em' }}>
              EXOPLANETS
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide animate-gradient" style={{
              background: 'linear-gradient(90deg, #60A5FA 0%, #34D399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
            }}>
              THE AI MISSION
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-gray-400 text-center max-w-2xl mb-6 text-xs md:text-sm leading-relaxed px-4 font-light tracking-wide animate-fade-in" style={{ letterSpacing: '0.02em', animationDelay: '0.2s' }}>
            FROM FLICKERS OF STARLIGHT TO THE DISCOVERY OF NEW WORLDS, 
            WE HARNESS THE POWER OF ARTIFICIAL INTELLIGENCE TO EXPLORE THE UNKNOWN. 
            OUR MISSION TRANSFORMS RAW SPACE DATA INTO DISCOVERIES, 
            BRINGING THE HUNT FOR EXOPLANETS TO SCIENTISTS, DREAMERS, AND CITIZEN EXPLORERS EVERYWHERE.
          </p>

          {/* CTA Button (Link) */}
          <Link
            to="/upload"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-9 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-blue-500/50 mb-10 md:mb-12 animate-pulse-slow inline-block"
            style={{ letterSpacing: "0.1em" }}
          >
            <span className="inline-block group-hover:animate-bounce">
              HUNT EXOPLANET
            </span>
          </Link>

          {/* Feature Cards Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full px-4 pb-16">
            {/* AI-Powered Detection */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-blue-400 transition-colors">AI-Powered Detection</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Advanced Machine Learning trained on NASA datasets</p>
                </div>
              </div>
            </div>

            {/* Interactive Visuals */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/30 to-pink-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-pink-400 transition-colors">Interactive Visuals</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Explore raw and processed light curves in real time.</p>
                </div>
              </div>
            </div>

            {/* Public Engagement */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/30 to-green-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-green-400 transition-colors">Public Engagement</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Citizen scientists can upload and analyze their own data.</p>
                </div>
              </div>
            </div>

            {/* Multilingual Access */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-blue-400 transition-colors">Multilingual Access</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Designed for global accessibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(96, 165, 250, 0.3),
                         0 0 20px rgba(96, 165, 250, 0.2),
                         0 0 30px rgba(96, 165, 250, 0.1);
          }
          50% {
            text-shadow: 0 0 20px rgba(96, 165, 250, 0.4),
                         0 0 30px rgba(96, 165, 250, 0.3),
                         0 0 40px rgba(96, 165, 250, 0.2);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient-shift 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
