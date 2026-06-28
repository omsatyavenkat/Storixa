import { FileText } from "lucide-react";

function RecentFiles() {
  const files = [];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-8 border border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-4">
        Recent Files
      </h2>

      {files.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          <FileText size={40} className="mx-auto mb-3" />
          <p>No files uploaded yet.</p>
        </div>
      ) : (
        files.map((file) => (
          <div key={file.id}>{file.name}</div>
        ))
      )}
    </div>
  );
}

export default RecentFiles;