const LoadingSpinner = ({ message = 'Loading...', overlay = false }) => {
  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center">
          {/* Spinner */}
          <div className="relative w-20 h-20">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
            {/* Spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 bg-blue-500/20 rounded-full animate-pulse"></div>
          </div>

          {/* Loading text */}
          {message && (
            <p className="mt-6 text-white text-lg font-medium animate-pulse">
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Spinner */}
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        {/* Inner pulsing circle */}
        <div className="absolute inset-2 bg-blue-500/20 rounded-full animate-pulse"></div>
      </div>

      {/* Loading text */}
      {message && (
        <p className="mt-4 text-gray-400 text-sm animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
