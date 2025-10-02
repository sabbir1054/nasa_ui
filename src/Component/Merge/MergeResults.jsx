import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import LoadingSpinner from '../LoadingSpinner';

const MergeResults = forwardRef(({ onUseCsv }, ref) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMergedFiles();
  }, []);

  // Expose fetchMergedFiles to parent via ref
  useImperativeHandle(ref, () => ({
    refresh: fetchMergedFiles
  }));

  const fetchMergedFiles = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://203.190.12.138:8001/api/merge');
      const data = await response.json();

      if (data.ok) {
        setFiles(data.files || []);
      } else {
        setError('Failed to fetch merged files');
      }
    } catch (err) {
      setError('Failed to connect to the server');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const handleUse = (file) => {
    if (onUseCsv) {
      onUseCsv(file);
    }
  };

  return (
    <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-base font-medium">
          Existing Merged CSVs
        </h3>
        <button
          onClick={fetchMergedFiles}
          disabled={loading}
          className="text-gray-400 hover:text-white text-xs transition-colors"
        >
          {loading ? 'Loading...' : '↻ Refresh'}
        </button>
      </div>

      {error && (
        <div className="mb-4 bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

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
            {loading ? (
              <tr>
                <td colSpan="5">
                  <LoadingSpinner message="Loading merged files..." />
                </td>
              </tr>
            ) : files.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-400 text-sm">
                  No merged files available
                </td>
              </tr>
            ) : (
              files.map((file, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-[#151b2a] transition-colors"
                >
                  <td className="py-3 text-white text-sm" title={file.filename}>
                    {file.filename.length > 50 ? file.filename.substring(0, 50) + '...' : file.filename}
                  </td>
                  <td className="py-3 text-gray-400 text-sm">{file.rows}</td>
                  <td className="py-3 text-gray-400 text-sm">{formatFileSize(file.size_bytes)}</td>
                  <td className="py-3 text-gray-400 text-sm">{formatDate(file.modified)}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleUse(file)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-300"
                    >
                      Use
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});

MergeResults.displayName = 'MergeResults';

export default MergeResults;
