import { useEffect } from "react";

const Popup = ({ type = "info", title, message, onClose, autoClose = false }) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const typeStyles = {
    success: {
      border: "border-green-500",
      bg: "bg-green-500/10",
      icon: "✓",
      iconBg: "bg-green-500",
      text: "text-green-400",
    },
    error: {
      border: "border-red-500",
      bg: "bg-red-500/10",
      icon: "✕",
      iconBg: "bg-red-500",
      text: "text-red-400",
    },
    warning: {
      border: "border-yellow-500",
      bg: "bg-yellow-500/10",
      icon: "!",
      iconBg: "bg-yellow-500",
      text: "text-yellow-400",
    },
    info: {
      border: "border-blue-500",
      bg: "bg-blue-500/10",
      icon: "i",
      iconBg: "bg-blue-500",
      text: "text-blue-400",
    },
  };

  const style = typeStyles[type] || typeStyles.info;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className={`bg-[#0a0f1a] border-2 ${style.border} rounded-lg shadow-2xl max-w-md w-full mx-4 animate-slide-in-up`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div
              className={`${style.iconBg} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm`}
            >
              {style.icon}
            </div>
            <h3 className={`${style.text} font-semibold text-lg`}>
              {title || type.charAt(0).toUpperCase() + type.slice(1)}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-gray-300 text-sm leading-relaxed">{message}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-5 border-t border-gray-800">
          <button
            onClick={onClose}
            className={`px-6 py-2 ${style.iconBg} hover:opacity-90 text-white rounded-md text-sm font-medium transition-all duration-300`}
          >
            OK
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Popup;
