import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { uploadFile } from "../../services/fileService";

function UploadCard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      setUploading(true);

      const response = await uploadFile(selectedFile);

      alert(response.message);

      console.log("Uploaded File:", response.file);

      // Reset after upload
      setSelectedFile(null);

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "File upload failed."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mt-8">

      <div className="flex items-center gap-3 mb-6">
        <UploadCloud size={32} className="text-cyan-400" />

        <div>
          <h2 className="text-2xl font-bold text-white">
            Upload Files
          </h2>

          <p className="text-gray-400">
            Upload your documents, images, videos and more.
          </p>
        </div>
      </div>

      <input
        type="file"
        onChange={(e) => {
          if (e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
          }
        }}
        className="block w-full text-white
        file:bg-cyan-500
        file:text-white
        file:border-0
        file:px-4
        file:py-2
        file:rounded-lg
        file:mr-4
        file:cursor-pointer
        cursor-pointer"
      />

      {selectedFile && (
        <div className="mt-4 text-green-400">
          Selected File: <strong>{selectedFile.name}</strong>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`mt-6 px-6 py-3 rounded-xl text-white font-semibold transition
        ${
          uploading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-cyan-500 hover:bg-cyan-600"
        }`}
      >
        {uploading ? "Uploading..." : "Upload File"}
      </button>

    </div>
  );
}

export default UploadCard;