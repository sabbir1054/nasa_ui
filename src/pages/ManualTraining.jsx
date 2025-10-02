import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import LoadingSpinner from "../Component/LoadingSpinner";
import Popup from "../Component/Popup";

const ManualTraining = () => {
  const navigate = useNavigate();
  const [satellite, setSatellite] = useState("KOI");
  const [model, setModel] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.name.endsWith(".csv")) {
        setPopup({
          type: "warning",
          title: "Invalid File Type",
          message: "Please select a CSV file. Only .csv files are supported.",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleTrain = async () => {
    // Validation
    if (!file) {
      setPopup({
        type: "warning",
        title: "Missing File",
        message: "Please upload a CSV file before starting training.",
      });
      return;
    }

    if (!model) {
      setPopup({
        type: "warning",
        title: "Missing Model",
        message: "Please select a model before starting training.",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("satellite", satellite);
    formData.append("model", model);

    try {
      const response = await fetch("http://203.190.12.138:8002/api/train", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.ok) {
        // Redirect to training page with query parameters
        const params = new URLSearchParams({
          jobId: data.job_id,
          statusUrl: data.status_url,
          satellite: satellite,
          model: model,
        });
        navigate(`/training?${params.toString()}`);
      } else {
        setPopup({
          type: "error",
          title: "Training Failed",
          message:
            data.message ||
            "Failed to start training. Please check your file and try again.",
        });
      }
    } catch (err) {
      setPopup({
        type: "error",
        title: "Connection Error",
        message:
          "Unable to connect to the training server. Please check your internet connection and ensure the server is running.",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSatellite("KOI");
    setModel("");
    setFile(null);
    // Reset file input field
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";
  };

  return (
    <>
      {popup && (
        <Popup
          type={popup.type}
          title={popup.title}
          message={popup.message}
          onClose={() => setPopup(null)}
        />
      )}
      {loading && (
        <LoadingSpinner message="Starting training..." overlay={true} />
      )}

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
          <Navbar />

          <div className="max-w-5xl mx-auto px-6 pt-40 pb-16">
            <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 md:p-8 animate-slide-in-up">
              <h2 className="text-2xl font-semibold text-white mb-6 animate-fade-in">
                Manual Training
              </h2>

              <div className="space-y-6">
                {/* Satellite Selection */}
                <div
                  className="bg-[#151b2a] border border-gray-700 rounded-lg p-5 animate-slide-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <h3 className="text-white text-base font-medium mb-4">
                    Select Satellite
                  </h3>
                  <div className="flex gap-4">
                    {["KOI", "K2", "TCE"].map((sat) => (
                      <button
                        key={sat}
                        onClick={() => setSatellite(sat)}
                        className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                          satellite === sat
                            ? "bg-blue-600 text-white"
                            : "bg-white/5 border border-gray-700 text-gray-400 hover:bg-white/10"
                        }`}
                      >
                        {sat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Model Selection */}
                <div
                  className="bg-[#151b2a] border border-gray-700 rounded-lg p-5 animate-slide-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-white text-base font-medium mb-4">
                    Select Model
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["xgb", "gb", "rf", "dt", "svm", "lr"].map((mdl) => (
                      <button
                        key={mdl}
                        onClick={() => setModel(mdl)}
                        className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                          model === mdl
                            ? "bg-blue-600 text-white"
                            : "bg-white/5 border border-gray-700 text-gray-400 hover:bg-white/10"
                        }`}
                      >
                        {mdl === "xgb" ? "XGB BOOST" :
                         mdl === "gb" ? "GRADIENT BOOST" :
                         mdl === "rf" ? "RANDOM FOREST" :
                         mdl === "dt" ? "DECISION TREE" :
                         mdl === "svm" ? "SVM" :
                         "LOGISTIC REGRESSION"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CSV Upload */}
                <div
                  className="bg-[#151b2a] border border-gray-700 rounded-lg p-5 animate-slide-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <h3 className="text-white text-base font-medium mb-4">
                    Upload Training CSV
                  </h3>
                  <div className="flex items-center gap-3">
                    <label className="bg-white/10 hover:bg-white/20 border border-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer">
                      Choose File
                      <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </label>
                    <span className="text-gray-500 text-sm">
                      {file ? file.name : "No File Chosen"}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className="flex gap-4 animate-slide-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <button
                    onClick={handleTrain}
                    disabled={loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white py-3 rounded-md text-sm font-medium transition-all duration-300"
                  >
                    {loading ? "Starting Training..." : "Start Training"}
                  </button>
                  <button
                    onClick={handleReset}
                    disabled={loading}
                    className="px-8 bg-white/5 border border-gray-700 text-white py-3 rounded-md text-sm font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Reset
                  </button>
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
    </>
  );
};

export default ManualTraining;
