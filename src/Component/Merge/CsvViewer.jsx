/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import Popup from "../Popup";
import { getApiUrl } from "../../config/api";

const CsvViewer = ({ csvUrl, filename, onClose }) => {
  const [csvData, setCsvData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [satellite, setSatellite] = useState("KOI");
  const [model, setModel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [popup, setPopup] = useState(null);

  const models = [
    { value: "xgb", label: "XGB BOOST" },
    { value: "gb", label: "Gradient Boosting" },
    { value: "rf", label: "Random Forest" },
    { value: "dt", label: "Decision Tree" },
    { value: "svm", label: "SVM" },
    { value: "lr", label: "Logistic Regression" },
  ];

  useEffect(() => {
    if (csvUrl) {
      fetchCsvData();
    }
  }, [csvUrl]);

  const fetchCsvData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(csvUrl);
      const text = await response.text();

      // Parse CSV
      const lines = text.split("\n").filter((line) => line.trim());
      if (lines.length === 0) {
        setError("CSV file is empty");
        return;
      }

      // Parse headers
      const headers = lines[0].split(",").map((h) => h.trim());
      setColumns(headers);

      // Parse data rows
      const data = lines.slice(1).map((line, index) => {
        const values = line.split(",").map((v) => v.trim());
        const row = { _index: index };
        headers.forEach((header, i) => {
          row[header] = values[i] || "";
        });
        return row;
      });

      setCsvData(data);
    } catch (err) {
      setError("Failed to load CSV file");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartTesting = async () => {
    if (!model) {
      setPopup({
        type: "warning",
        title: "Model Not Selected",
        message: "Please select a machine learning model before starting the training process.",
      });
      return;
    }

    setLoading(true);

    try {
      // Fetch the CSV file as a blob
      const csvResponse = await fetch(csvUrl);
      const csvBlob = await csvResponse.blob();
      const csvFile = new File([csvBlob], filename, { type: 'text/csv' });

      // Create FormData
      const formData = new FormData();
      formData.append('file', csvFile);
      formData.append('satellite', satellite);
      formData.append('model', model);

      // Send training request
      const response = await fetch(getApiUrl('/api/train'), {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.ok) {
        // Navigate to training page with job details
        window.location.href = `/training?jobId=${data.job_id}&statusUrl=${encodeURIComponent(data.status_url)}&satellite=${satellite}&model=${model}`;
      } else {
        setPopup({
          type: "error",
          title: "Training Failed",
          message: data.message || "Failed to start the training process. Please check your data and try again.",
        });
      }
    } catch (err) {
      setPopup({
        type: "error",
        title: "Connection Error",
        message: "Failed to connect to the training server. Please check your internet connection and try again.",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Pagination
  const totalPages = Math.ceil(csvData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = csvData.slice(startIndex, endIndex);

  if (!csvUrl) return null;

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

      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 animate-slide-in-up">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-white">
            Preview and Test
          </h2>
          <p className="text-gray-400 text-xs mt-1">{filename}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          ✕
        </button>
      </div>

      {loading ? (
        <LoadingSpinner message="Loading CSV..." />
      ) : error ? (
        <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Side - CSV Table (3 columns) */}
          <div className="lg:col-span-3">
            {/* Table with horizontal scroll */}
            <div className="overflow-x-auto border border-gray-800 rounded-lg">
              <table className="w-full text-sm min-w-max">
                <thead>
                  <tr className="border-b border-gray-800 bg-[#151b2a]">
                    <th className="text-left text-gray-400 text-xs font-medium py-3 px-3 sticky left-0 bg-[#151b2a]">
                      #
                    </th>
                    {columns.map((col, index) => (
                      <th
                        key={index}
                        className="text-left text-gray-400 text-xs font-medium py-3 px-3 whitespace-nowrap"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-[#151b2a] transition-colors"
                    >
                      <td className="py-2.5 px-3 text-gray-400 text-xs sticky left-0 bg-[#0a0f1a]">
                        {startIndex + index + 1}
                      </td>
                      {columns.map((col, colIndex) => (
                        <td
                          key={colIndex}
                          className="py-2.5 px-3 text-gray-400 text-xs whitespace-nowrap"
                        >
                          {row[col] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3">
                <div className="text-gray-400 text-xs">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(endIndex, csvData.length)} of {csvData.length} rows
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-gray-400 text-xs">Rows:</label>
                  <select
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-[#151b2a] border border-gray-700 text-white text-xs rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                  >
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-xs bg-[#151b2a] border border-gray-700 text-white rounded hover:bg-[#1a2132] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="px-3 py-1 text-xs text-gray-400">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-xs bg-[#151b2a] border border-gray-700 text-white rounded hover:bg-[#1a2132] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar (1 column) */}
          <div className="lg:col-span-1 space-y-4">
            {/* Select Satellite */}
            <div>
              <h3 className="text-white text-sm font-medium mb-3">
                Select a NASA Satellite
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setSatellite("KOI")}
                  className={`flex-1 py-2 text-xs rounded font-medium transition-all ${
                    satellite === "KOI"
                      ? "bg-blue-600 text-white"
                      : "bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]"
                  }`}
                >
                  KOI
                </button>
                <button
                  onClick={() => setSatellite("K2")}
                  className={`flex-1 py-2 text-xs rounded font-medium transition-all ${
                    satellite === "TOI"
                      ? "bg-blue-600 text-white"
                      : "bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]"
                  }`}
                >
                  K2
                </button>
                <button
                  onClick={() => setSatellite("TESS")}
                  className={`flex-1 py-2 text-xs rounded font-medium transition-all ${
                    satellite === "TESS"
                      ? "bg-blue-600 text-white"
                      : "bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]"
                  }`}
                >
                  TESS
                </button>
              </div>
            </div>

            {/* Select Model */}
            <div>
              <h3 className="text-white text-sm font-medium mb-3">
                Select a Model
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {models.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setModel(m.value)}
                    className={`py-2 text-xs rounded font-medium transition-all ${
                      model === m.value
                        ? "bg-blue-600 text-white"
                        : "bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Start Testing Button */}
            <button
              onClick={handleStartTesting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded text-sm font-medium transition-all duration-300"
            >
              Start Training
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default CsvViewer;
