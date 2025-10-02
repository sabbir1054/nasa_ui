const MergeResults = () => {
  const csvData = [
    { name: 'Merged.csv', rows: '9564', size: '2.9 MB', modified: '2025-10-01 17:01:40' },
    { name: 'Merged.csv', rows: '9564', size: '2.9 MB', modified: '2025-10-01 17:01:40' },
    { name: 'Merged.csv', rows: '9564', size: '2.9 MB', modified: '2025-10-01 17:01:40' },
    { name: 'Merged.csv', rows: '9564', size: '2.9 MB', modified: '2025-10-01 17:01:40' },
    { name: 'Merged.csv', rows: '9564', size: '2.9 MB', modified: '2025-10-01 17:01:40' },
    { name: 'Merged.csv', rows: '9564', size: '2.9 MB', modified: '2025-10-01 17:01:40' },
  ];

  return (
    <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
      <h3 className="text-white text-base font-medium mb-4">
        Existing Merged CSVs
      </h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-400 text-xs font-medium pb-3">Name</th>
              <th className="text-left text-gray-400 text-xs font-medium pb-3">Rows</th>
              <th className="text-left text-gray-400 text-xs font-medium pb-3">Size</th>
              <th className="text-left text-gray-400 text-xs font-medium pb-3">Modified</th>
              <th className="text-left text-gray-400 text-xs font-medium pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-[#151b2a] transition-colors"
              >
                <td className="py-3 text-white text-sm">{item.name}</td>
                <td className="py-3 text-gray-400 text-sm">{item.rows}</td>
                <td className="py-3 text-gray-400 text-sm">{item.size}</td>
                <td className="py-3 text-gray-400 text-sm">{item.modified}</td>
                <td className="py-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-300">
                    Use
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MergeResults;
