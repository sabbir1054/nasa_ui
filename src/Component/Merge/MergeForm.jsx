import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import Popup from "../Popup";

const MergeForm = ({ onMergeSuccess }) => {
  const [fileA, setFileA] = useState(null);
  const [fileB, setFileB] = useState(null);
  const [outputName, setOutputName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [popup, setPopup] = useState(null);

  const handleFileASelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.name.endsWith('.csv')) {
        setPopup({
          type: "warning",
          title: "Invalid File Type",
          message: "Please select a CSV file. Only .csv files are supported for merging.",
        });
        return;
      }
      setFileA(file);
      setError("");
    }
  };

  const handleFileBSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.name.endsWith('.csv')) {
        setPopup({
          type: "warning",
          title: "Invalid File Type",
          message: "Please select a CSV file. Only .csv files are supported for merging.",
        });
        return;
      }
      setFileB(file);
      setError("");
    }
  };

  const handleMerge = async () => {
    if (!fileA || !fileB) {
      setPopup({
        type: "warning",
        title: "Missing Files",
        message: "Please select both CSV files (CSV A and CSV B) before proceeding with the merge.",
      });
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    // Generate default filename if not provided
    const defaultFilename =
      outputName ||
      `merged_${new Date().toISOString().replace(/:/g, "-").split(".")[0]}.csv`;

    const formData = new FormData();
    formData.append("file_a", fileA);
    formData.append("file_b", fileB);
    formData.append("dedupe", "true");
    formData.append("output_name", defaultFilename);

    try {
      const response = await fetch("http://203.190.12.138:8002/api/merge", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.ok || response.ok) {
        setSuccess(`Files merged successfully! ${data.merged_filename || defaultFilename}`);
        setPopup({
          type: "success",
          title: "Merge Successful",
          message: `Your CSV files have been successfully merged into "${data.merged_filename || defaultFilename}". You can find it in the merged files list.`,
        });
        setFileA(null);
        setFileB(null);
        setOutputName("");
        // Reset file input fields
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => input.value = '');
        // Trigger refresh of the merge results list
        if (onMergeSuccess) {
          onMergeSuccess();
        }
      } else {
        setError(data.message || "Merge failed. Please try again.");
        setPopup({
          type: "error",
          title: "Merge Failed",
          message: data.message || "The merge operation failed. Please ensure both CSV files have compatible structures and try again.",
        });
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
      setPopup({
        type: "error",
        title: "Connection Error",
        message: "Unable to connect to the merge server. Please check your internet connection and ensure the server is running.",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFileA(null);
    setFileB(null);
    setOutputName("");
    setError("");
    setSuccess("");
    // Reset file input fields
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => input.value = '');
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
      {loading && <LoadingSpinner message="Merging files..." overlay={true} />}

      <div className="space-y-5">
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-md text-sm">
            {success}
          </div>
        )}

        {/* CSV A Section */}
        <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up">
          <h3 className="text-white text-base font-medium mb-4">CSV A</h3>
          <div className="flex items-center gap-3">
            <label className="bg-white/10 hover:bg-white/20 border border-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer">
              Choose File
              <input
                type="file"
                accept=".csv"
                onChange={handleFileASelect}
                className="hidden"
              />
            </label>
            <span className="text-gray-500 text-sm">
              {fileA ? fileA.name : "No File Chosen"}
            </span>
          </div>
        </div>

        {/* CSV B Section */}
        <div
          className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="text-white text-base font-medium mb-4">CSV B</h3>
          <div className="flex items-center gap-3">
            <label className="bg-white/10 hover:bg-white/20 border border-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer">
              Choose File
              <input
                type="file"
                accept=".csv"
                onChange={handleFileBSelect}
                className="hidden"
              />
            </label>
            <span className="text-gray-500 text-sm">
              {fileB ? fileB.name : "No File Chosen"}
            </span>
          </div>
        </div>

        {/* Output Name Section */}
        <div
          className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-white text-base font-medium mb-4">
            Output Name (Optional)
          </h3>
          <input
            type="text"
            placeholder="e.g merged_custom.csv"
            value={outputName}
            onChange={(e) => setOutputName(e.target.value)}
            className="w-full bg-[#151b2a] border border-gray-700 rounded-md px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Action Buttons */}
        <div
          className="flex gap-3 animate-slide-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={handleMerge}
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white py-2.5 rounded-md text-sm font-medium transition-all duration-300"
          >
            {loading ? "Merging..." : "Merge"}
          </button>
          <button
            onClick={handleReset}
            disabled={loading}
            className="px-6 bg-white/5 border border-gray-700 text-white py-2.5 rounded-md text-sm font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default MergeForm;
