import Sidebar from "../components/dashboard/Sidebar";
import RecentFiles from "../components/dashboard/RecentFiles";

function MyFiles() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-white">
          My Files
        </h1>

        <p className="text-gray-400 mt-2 mb-8">
          Manage all your uploaded files.
        </p>

        <RecentFiles />

      </main>

    </div>
  );
}

export default MyFiles;