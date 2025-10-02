const UploadHeader = () => {
  return (
    <div className="mb-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-white mb-4">
        Select a NASA dataset
      </h2>
      <div className="flex gap-3">
        <button className="px-6 py-2 bg-blue-600 text-white text-sm rounded-md font-medium hover:bg-blue-700 transition-all duration-300">
          KOI
        </button>
        <button className="px-6 py-2 bg-transparent border border-gray-700 text-white text-sm rounded-md font-medium hover:bg-white/5 transition-all duration-300">
          TOI
        </button>
        <button className="px-6 py-2 bg-transparent border border-gray-700 text-white text-sm rounded-md font-medium hover:bg-white/5 transition-all duration-300">
          TESS
        </button>
      </div>
    </div>
  );
};

export default UploadHeader;
