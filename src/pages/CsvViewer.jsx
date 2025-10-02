/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import LoadingSpinner from '../Component/LoadingSpinner';

const CsvViewer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [csvData, setCsvData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [satellite, setSatellite] = useState('KOI');
  const [model, setModel] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);

  const csvUrl = searchParams.get('url');
  const filename = searchParams.get('filename');

  const models = [
    { value: 'xgb', label: 'XGB BOOST' },
    { value: 'gb', label: 'Gradient Boosting' },
    { value: 'rf', label: 'Random Forest' },
    { value: 'dt', label: 'Decision Tree' },
    { value: 'svm', label: 'SVM' },
    { value: 'lr', label: 'Logistic Regression' }
  ];

  useEffect(() => {
    if (csvUrl) {
      fetchCsvData();
    }
  }, [csvUrl]);

  const fetchCsvData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(csvUrl);
      const text = await response.text();

      // Parse CSV
      const lines = text.split('\n').filter(line => line.trim());
      if (lines.length === 0) {
        setError('CSV file is empty');
        return;
      }

      // Parse headers
      const headers = lines[0].split(',').map(h => h.trim());
      setColumns(headers);

      // Parse data rows
      const data = lines.slice(1).map((line, index) => {
        const values = line.split(',').map(v => v.trim());
        const row = { _index: index };
        headers.forEach((header, i) => {
          row[header] = values[i] || '';
        });
        return row;
      });

      setCsvData(data);
    } catch (err) {
      setError('Failed to load CSV file');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartTesting = () => {
    if (!model) {
      alert('Please select a model');
      return;
    }
    // Navigate to upload page with pre-selected options
    navigate(`/upload?satellite=${satellite}&model=${model}`);
  };

  // Pagination
  const totalPages = Math.ceil(csvData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = csvData.slice(startIndex, endIndex);

  return (
    <>
      {loading && <LoadingSpinner message="Loading CSV..." overlay={true} />}

      <div className="relative min-h-screen w-full bg-black">
        {/* Background Image */}
        <div
          className="fixed inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/aa.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <Navbar />

          <div className="max-w-[95%] mx-auto px-6 pt-40 pb-16">
            <div className="flex gap-6">
              {/* Left Side - CSV Table */}
              <div className="flex-1 bg-[#0a0f1a] border border-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">
                      Preview CSV File
                    </h2>
                    <p className="text-gray-400 text-sm">{filename}</p>
                  </div>
                  <button
                    onClick={() => navigate('/merge')}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    ← Back to Merge
                  </button>
                </div>

                {error && (
                  <div className="mb-4 bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left text-gray-400 text-xs font-medium pb-3 px-2">#</th>
                        {columns.map((col, index) => (
                          <th key={index} className="text-left text-gray-400 text-xs font-medium pb-3 px-2">
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
                          <td className="py-3 px-2 text-gray-400">{startIndex + index + 1}</td>
                          {columns.map((col, colIndex) => (
                            <td key={colIndex} className="py-3 px-2 text-gray-400">
                              {row[col] || '-'}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                    <div className="text-gray-400 text-xs">
                      Showing {startIndex + 1} to {Math.min(endIndex, csvData.length)} of {csvData.length} rows
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 text-xs bg-[#151b2a] border border-gray-700 text-white rounded hover:bg-[#1a2132] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      <span className="px-3 py-1 text-xs text-gray-400">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 text-xs bg-[#151b2a] border border-gray-700 text-white rounded hover:bg-[#1a2132] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar */}
              <div className="w-80 space-y-6">
                {/* Select Satellite */}
                <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-white text-base font-medium mb-4">
                    Select a NASA Satellite
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSatellite('KOI')}
                      className={`flex-1 py-2 text-sm rounded-md font-medium transition-all ${
                        satellite === 'KOI'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]'
                      }`}
                    >
                      KOI
                    </button>
                    <button
                      onClick={() => setSatellite('TOI')}
                      className={`flex-1 py-2 text-sm rounded-md font-medium transition-all ${
                        satellite === 'TOI'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]'
                      }`}
                    >
                      TOI
                    </button>
                    <button
                      onClick={() => setSatellite('TESS')}
                      className={`flex-1 py-2 text-sm rounded-md font-medium transition-all ${
                        satellite === 'TESS'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]'
                      }`}
                    >
                      TESS
                    </button>
                  </div>
                </div>

                {/* Select Model */}
                <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6">
                  <h3 className="text-white text-base font-medium mb-4">
                    Select a Model
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {models.map((m) => (
                      <button
                        key={m.value}
                        onClick={() => setModel(m.value)}
                        className={`py-2 text-xs rounded-md font-medium transition-all ${
                          model === m.value
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#151b2a] border border-gray-700 text-white hover:bg-[#1a2132]'
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-sm font-medium transition-all duration-300"
                >
                  Start Testing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CsvViewer;
