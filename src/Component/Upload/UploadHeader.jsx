const UploadHeader = ({ satellite, setSatellite, model, setModel }) => {
  const models = [
    { value: "xgb", label: "XGB BOOST" },
    { value: "gb", label: "Gradient Boosting" },
    { value: "rf", label: "Random Forest" },
    { value: "dt", label: "Decision Tree" },
    { value: "svm", label: "SVM" },
    { value: "lr", label: "Logistic Regression" },
  ];

  return (
    <div className="mb-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-white mb-4">
        Select a NASA dataset
      </h2>
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setSatellite("KOI")}
          className={`px-6 py-2 text-sm rounded-md font-medium transition-all duration-300 ${
            satellite === "KOI"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-transparent border border-gray-700 text-white hover:bg-white/5"
          }`}
        >
          KOI
        </button>
        <button
          onClick={() => setSatellite("K2")}
          className={`px-6 py-2 text-sm rounded-md font-medium transition-all duration-300 ${
            satellite === "K2"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-transparent border border-gray-700 text-white hover:bg-white/5"
          }`}
        >
          K2
        </button>
        <button
          onClick={() => setSatellite("TESS")}
          className={`px-6 py-2 text-sm rounded-md font-medium transition-all duration-300 ${
            satellite === "TESS"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-transparent border border-gray-700 text-white hover:bg-white/5"
          }`}
        >
          TESS
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-white text-base font-medium mb-3">Select Model</h3>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full bg-[#151b2a] border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="">Choose a model...</option>
          {models.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UploadHeader;
