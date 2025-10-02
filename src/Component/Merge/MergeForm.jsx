import { useState } from 'react';

const MergeForm = () => {
  return (
    <div className="space-y-5">
      {/* CSV A Section */}
      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up">
        <h3 className="text-white text-base font-medium mb-4">CSV A</h3>
        <div className="flex items-center gap-3">
          <button className="bg-white/10 hover:bg-white/20 border border-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
            Choose File
          </button>
          <span className="text-gray-500 text-sm">No File Choosen</span>
        </div>
      </div>

      {/* CSV B Section */}
      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-white text-base font-medium mb-4">CSV B</h3>
        <div className="flex items-center gap-3">
          <button className="bg-white/10 hover:bg-white/20 border border-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
            Choose File
          </button>
          <span className="text-gray-500 text-sm">No File Choosen</span>
        </div>
      </div>

      {/* Output Name Section */}
      <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-5 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-white text-base font-medium mb-4">
          Output Name (Optional)
        </h3>
        <input
          type="text"
          placeholder="e.g merged_custom.csv"
          className="w-full bg-[#151b2a] border border-gray-700 rounded-md px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md text-sm font-medium transition-all duration-300">
          Merge
        </button>
        <button className="px-6 bg-white/5 border border-gray-700 text-white py-2.5 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-300">
          Reset
        </button>
      </div>
    </div>
  );
};

export default MergeForm;
