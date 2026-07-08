import { useEffect, useState } from "react";
import { FileText, Download, Trash2, Search } from "lucide-react";
import {
  getFiles,
  downloadFile,
  deleteFile,
} from "../../services/fileService";

function RecentFiles() {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const data = await getFiles();
      setFiles(data.files);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this file?"
    );

    if (!confirmDelete) return;

    try {
      const response = await deleteFile(id);

      alert(response.message);

      loadFiles();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  const filteredFiles = files.filter((file) =>
    file.originalName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-8 border border-slate-800">

      <h2 className="text-2xl font-bold text-white mb-5">
        Recent Files
      </h2>

      {/* Search */}
      <div className="relative mb-6">

        <Search
          className="absolute left-4 top-3 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search files..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-800 text-white rounded-xl pl-12 pr-4 py-3 border border-slate-700 outline-none focus:border-cyan-400"
        />

      </div>

      {filteredFiles.length === 0 ? (
        <p className="text-gray-400">
          No matching files found.
        </p>
      ) : (
        <div className="space-y-4">

          {filteredFiles.map((file) => (
            <div
              key={file._id}
              className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">

                <FileText className="text-cyan-400" />

                <div>
                  <p className="text-white font-medium">
                    {file.originalName}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {(file.fileSize / 1024).toFixed(2)} KB
                  </p>
                </div>

              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => downloadFile(file._id)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg"
                >
                  <Download size={18} />
                </button>

                <button
                  onClick={() => handleDelete(file._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default RecentFiles;