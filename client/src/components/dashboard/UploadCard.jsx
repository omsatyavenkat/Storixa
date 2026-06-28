import { UploadCloud } from "lucide-react";

function UploadCard() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-8 border border-slate-800">

      <div className="flex items-center gap-3">
        <UploadCloud className="text-cyan-400" size={30} />

        <div>
          <h2 className="text-2xl font-bold text-white">
            Upload Files
          </h2>

          <p className="text-gray-400">
            Upload your documents securely.
          </p>
        </div>
      </div>

      <div className="border-2 border-dashed border-slate-700 rounded-xl mt-6 p-10 text-center">

        <UploadCloud
          className="mx-auto text-cyan-400"
          size={50}
        />

        <p className="text-white mt-4">
          Drag & Drop your files here
        </p>

        <p className="text-gray-500 mt-2">
          or
        </p>

        <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-semibold">
          Browse Files
        </button>

      </div>

    </div>
  );
}

export default UploadCard;