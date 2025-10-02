const PredictionResults = ({ results, downloadUrl }) => {
  if (!results || results.length === 0) {
    return null;
  }

  // Get all available columns from first result
  const sampleResult = results[0];
  const columns = Object.keys(sampleResult);

  // Format column header
  const formatHeader = (key) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Format cell value
  const formatValue = (key, value) => {
    if (value === null || value === undefined) return '-';
    if (key.toLowerCase().includes('prob_') || key === 'Confidence') {
      return (value * 100).toFixed(2) + '%';
    }
    return value.toString();
  };

  return (
    <div className="mt-6 animate-slide-in-up">
      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-base font-medium">
            Predicted
          </h3>
          <div className="flex gap-3">
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-300"
              >
                Export
              </a>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                {columns.map((col) => (
                  <th key={col} className="text-left text-gray-400 text-xs font-medium pb-3 px-2">
                    {formatHeader(col)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-[#151b2a] transition-colors"
                >
                  {columns.map((col) => (
                    <td
                      key={col}
                      className={`py-3 px-2 ${
                        col === 'Row_Number' ? 'text-white' :
                        col === 'Match' ?
                          (item[col] === 'Yes' ? 'text-green-400' : 'text-red-400') :
                          'text-gray-400'
                      }`}
                    >
                      {formatValue(col, item[col])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PredictionResults;
