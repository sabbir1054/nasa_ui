/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Training = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const statusUrl = searchParams.get("statusUrl");
  const satellite = searchParams.get("satellite");
  const model = searchParams.get("model");

  const [status, setStatus] = useState("PENDING");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!statusUrl) return;

    let pollingInterval;
    let timeInterval;

    // Start elapsed time counter
    timeInterval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    // Start status polling every 2 seconds
    const pollStatus = async () => {
      try {
        const response = await fetch(statusUrl);
        const data = await response.json();

        if (data.ok) {
          setStatus(data.status);

          if (data.status === "SUCCEEDED") {
            setIsLoading(false);
            setResult(data.result);
            setProgress(100);
            clearInterval(pollingInterval);
            clearInterval(timeInterval);
          } else if (data.status === "FAILED") {
            setError(data.error || "Training failed");
            clearInterval(pollingInterval);
            clearInterval(timeInterval);
          } else {
            // Simulate progress for PENDING/RUNNING
            setProgress((prev) => Math.min(prev + 2, 90));
          }
        }
      } catch (err) {
        console.error("Failed to fetch status:", err);
      }
    };

    // Initial poll
    pollStatus();

    // Set up interval
    pollingInterval = setInterval(pollStatus, 2000);

    return () => {
      clearInterval(pollingInterval);
      clearInterval(timeInterval);
    };
  }, [statusUrl]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const formatPercentage = (value) => {
    return (value * 100).toFixed(2) + "%";
  };

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
        <Navbar />

        <div className="max-w-5xl mx-auto px-6 pt-40 pb-16">
          <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-8 animate-slide-in-up">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Model Training Progress
            </h2>

            {/* Status Badge */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400 text-sm">Status:</span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  status === "SUCCEEDED"
                    ? "bg-green-600 text-white"
                    : status === "FAILED"
                    ? "bg-red-600 text-white"
                    : "bg-blue-600 text-white animate-pulse"
                }`}
              >
                {status === "SUCCEEDED"
                  ? "✓ Completed"
                  : status === "FAILED"
                  ? "✗ Failed"
                  : "⟳ Running..."}
              </span>
            </div>

            {/* Progress Bar */}
            {status !== "SUCCEEDED" && status !== "FAILED" && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">
                    Training Progress
                  </span>
                  <span className="text-blue-400 text-sm font-medium">
                    {progress}%
                  </span>
                </div>
                <div className="w-full bg-[#151b2a] rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Time Counter */}
            <div className="mb-8 p-4 bg-[#151b2a] rounded-lg border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Elapsed Time</span>
                <span className="text-2xl font-mono text-blue-400">
                  {formatTime(elapsedTime)}
                </span>
              </div>
            </div>

            {/* Training Parameters */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-[#151b2a] rounded-lg border border-gray-700">
                <div className="text-gray-400 text-xs mb-1">Satellite</div>
                <div className="text-white text-lg font-medium">
                  {satellite}
                </div>
              </div>
              <div className="p-4 bg-[#151b2a] rounded-lg border border-gray-700">
                <div className="text-gray-400 text-xs mb-1">Model</div>
                <div className="text-white text-lg font-medium">
                  {model?.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500 rounded-lg">
                <div className="text-red-400 text-sm">{error}</div>
              </div>
            )}

            {/* Results Display */}
            {result && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Training Results
                </h3>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-[#151b2a] rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="text-gray-400 text-xs mb-2">Accuracy</div>
                    <div className="text-white text-2xl font-bold">
                      {formatPercentage(result.accuracy)}
                    </div>
                  </div>
                  <div className="p-4 bg-[#151b2a] rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="text-gray-400 text-xs mb-2">CV Mean</div>
                    <div className="text-white text-2xl font-bold">
                      {formatPercentage(result.cv_mean)}
                    </div>
                  </div>
                  <div className="p-4 bg-[#151b2a] rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="text-gray-400 text-xs mb-2">CV Std</div>
                    <div className="text-white text-2xl font-bold">
                      ± {formatPercentage(result.cv_std)}
                    </div>
                  </div>
                  <div className="p-4 bg-[#151b2a] rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="text-gray-400 text-xs mb-2">AUC Score</div>
                    <div className="text-white text-2xl font-bold">
                      {formatPercentage(result.auc_score)}
                    </div>
                  </div>
                </div>

                {/* Training Time */}
                <div className="p-4 bg-[#151b2a] rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      Training Duration
                    </span>
                    <span className="text-blue-400 text-lg font-medium">
                      {result.elapsed_sec?.toFixed(2)} seconds
                    </span>
                  </div>
                </div>

                {/* Confusion Matrix */}
                {result.cm_norm_image_url && (
                  <div className="p-6 bg-[#151b2a] rounded-lg border border-gray-700">
                    <h4 className="text-white text-lg font-medium mb-4">
                      Confusion Matrix (Normalized)
                    </h4>
                    <div className="flex justify-center">
                      <img
                        src={`http://203.190.12.138:8002${result.cm_norm_image_url}`}
                        alt="Confusion Matrix"
                        className="max-w-full h-auto rounded-lg border border-gray-700"
                      />
                    </div>
                  </div>
                )}

                {/* Download Model Button */}
                {/* {result.model_url && (
                  <div className="flex justify-center">
                    <a
                      href={`http://203.190.12.138:8002${result.model_url}`}
                      download
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Trained Model
                    </a>
                  </div>
                )} */}
              </div>
            )}

            {/* Back Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => (window.location.href = "/merge")}
                className="px-6 py-2 bg-[#151b2a] border border-gray-700 text-white rounded-lg hover:bg-[#1a2132] transition-colors"
              >
                ← Back to Merge
              </button>
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Training;
