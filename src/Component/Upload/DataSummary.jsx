const DataSummary = ({ onPredict, onReset, loading, results }) => {
  // Calculate stats from results
  const totalPredicted = results?.length || 0;

  // Initialize all classes with 0, then count actual results
  const classDistribution = {
    'CONFIRMED': 0,
    'CANDIDATE': 0,
    'FALSE POSITIVE': 0
  };

  if (results && results.length > 0) {
    results.forEach(r => {
      const predictedClass = r.Predicted_Class;
      if (predictedClass) {
        classDistribution[predictedClass] = (classDistribution[predictedClass] || 0) + 1;
      }
    });
  }

  return (
    <div className="space-y-5">
      {/* Summary Section */}
      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-white text-base font-medium mb-4">Summary</h3>

        <div className="space-y-3">
          {/* Row Predicted */}
          <div className="flex items-center justify-between p-3 bg-[#151b2a] rounded-md hover:bg-[#1a2132] transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-sm"></div>
              <span className="text-white text-sm">Row Predicted</span>
            </div>
            <span className="text-blue-400 text-sm font-medium">{totalPredicted}</span>
          </div>
        </div>
      </div>

      {/* Class Distribution Section - Always show when results exist */}
      {results && results.length > 0 && (
        <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-white text-base font-medium mb-4">Class Distribution</h3>

          <div className="space-y-3">
            {Object.entries(classDistribution).map(([className, count]) => (
              <div key={className} className="flex items-center justify-between p-3 bg-[#151b2a] rounded-md hover:bg-[#1a2132] transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                  <span className="text-white text-sm">{className}</span>
                </div>
                <span className="text-blue-400 text-sm font-medium">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
        <button
          onClick={onPredict}
          disabled={loading}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white py-2.5 rounded-md text-sm font-medium transition-all duration-300"
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
        <button
          onClick={onReset}
          disabled={loading}
          className="px-6 bg-white/5 border border-gray-700 text-white py-2.5 rounded-md text-sm font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default DataSummary;
