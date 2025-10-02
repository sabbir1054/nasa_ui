import { useState } from "react";
import Navbar from "../Component/Navbar";
import DataSummary from "../Component/Upload/DataSummary";
import FileUploadCard from "../Component/Upload/FileUploadCard";
import UploadHeader from "../Component/Upload/UploadHeader";
import PredictionResults from "../Component/Upload/PredictionResults";

const Upload = () => {
  const [satellite, setSatellite] = useState('KOI');
  const [model, setModel] = useState('');
  const [fromRow, setFromRow] = useState('');
  const [toRow, setToRow] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePredict = async () => {
    if (!file) {
      setError('Please upload a file');
      return;
    }
    if (!model) {
      setError('Please select a model');
      return;
    }

    setError('');
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('satellite', satellite);
    formData.append('model', model);
    if (fromRow) formData.append('from_row', fromRow);
    if (toRow) formData.append('to_row', toRow);

    try {
      const response = await fetch('http://203.190.12.138:8002/api/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.ok) {
        setResults(data.results);
        setDownloadUrl(data.csv_file);
      } else {
        setError('Prediction failed. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSatellite('KOI');
    setModel('');
    setFromRow('');
    setToRow('');
    setFile(null);
    setResults(null);
    setDownloadUrl('');
    setError('');
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/aa.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-16">
          {/* Main Card Container */}
          <div className="bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 md:p-8 mb-6">
            <UploadHeader
              satellite={satellite}
              setSatellite={setSatellite}
              model={model}
              setModel={setModel}
            />

            {error && (
              <div className="mb-4 bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Left Column - File Upload (3 columns) */}
              <div className="lg:col-span-3">
                <FileUploadCard
                  fromRow={fromRow}
                  setFromRow={setFromRow}
                  toRow={toRow}
                  setToRow={setToRow}
                  file={file}
                  setFile={setFile}
                />
              </div>

              {/* Right Column - Data Summary (2 columns) */}
              <div className="lg:col-span-2">
                <DataSummary
                  onPredict={handlePredict}
                  onReset={handleReset}
                  loading={loading}
                  results={results}
                />
              </div>
            </div>
          </div>

          {/* Prediction Results Table - Separate Card */}
          <PredictionResults results={results} downloadUrl={downloadUrl} />
        </div>
      </div>

      {/* Custom Animations */}
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Upload;
