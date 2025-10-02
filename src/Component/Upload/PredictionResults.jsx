import { useState } from 'react';

const PredictionResults = ({ results, downloadUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  // Pagination calculations
  const totalPages = Math.ceil(results.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = results.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 md:p-8 animate-slide-in-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-base font-medium">
          Predicted
        </h3>
        <div className="flex items-center gap-3">
          {/* Rows per page selector */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="bg-[#151b2a] border border-gray-700 text-white text-xs rounded px-2 py-1 focus:outline-none focus:border-blue-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

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
            {currentData.map((item, index) => (
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

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
        <div className="text-gray-400 text-xs">
          Showing {startIndex + 1} to {Math.min(endIndex, results.length)} of {results.length} entries
        </div>

        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-xs bg-[#151b2a] border border-gray-700 text-white rounded hover:bg-[#1a2132] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-1">
            {getPageNumbers().map((page, index) => (
              page === '...' ? (
                <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-400 text-xs">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]'
                  }`}
                >
                  {page}
                </button>
              )
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-xs bg-[#151b2a] border border-gray-700 text-white rounded hover:bg-[#1a2132] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionResults;
