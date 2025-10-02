import Navbar from "../Component/Navbar";
import DataSummary from "../Component/Upload/DataSummary";
import FileUploadCard from "../Component/Upload/FileUploadCard";
import UploadHeader from "../Component/Upload/UploadHeader";

const Upload = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/aa.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-16">
          {/* Main Card Container */}
          <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 md:p-8">
            <UploadHeader />

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Left Column - File Upload (3 columns) */}
              <div className="lg:col-span-3">
                <FileUploadCard />
              </div>

              {/* Right Column - Data Summary (2 columns) */}
              <div className="lg:col-span-2">
                <DataSummary />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Upload;
