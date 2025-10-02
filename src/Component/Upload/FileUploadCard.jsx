import { useState } from 'react';

const FileUploadCard = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
  };

  return (
    <div className="space-y-5">
      {/* Select Range Section */}
      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up">
        <h3 className="text-white text-base font-medium mb-4">
          Select Range (Optional)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-xs mb-2 block">From Row</label>
            <input
              type="text"
              placeholder="e.g 0"
              className="w-full bg-[#151b2a] border border-gray-700 rounded-md px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-2 block">To Row</label>
            <input
              type="text"
              placeholder="e.g 99"
              className="w-full bg-[#151b2a] border border-gray-700 rounded-md px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-white text-base font-medium mb-4">
          Drag & drop your own light curve file
        </h3>

        <div
          className={`border-2 border-dashed ${
            isDragging ? 'border-blue-500 bg-blue-500/5' : 'border-gray-700'
          } rounded-lg p-8 transition-all duration-300 cursor-pointer hover:border-gray-600`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            {/* Upload Icon */}
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-3">Drag CVS or FITS file Here</p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all duration-300">
              Browse Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadCard;
