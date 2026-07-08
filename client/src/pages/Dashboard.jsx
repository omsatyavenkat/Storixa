import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import StatsCards from "../components/dashboard/StatsCards";
import UploadCard from "../components/dashboard/UploadCard";
import RecentFiles from "../components/dashboard/RecentFiles";
import { getFiles } from "../services/fileService";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [files, setFiles] = useState([]);
  const [stats, setStats] = useState({
    totalFiles: 0,
    totalUploads: 0,
    storageUsed: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getFiles();

      setFiles(data.files);
      setStats(data.stats);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back,
            <span className="text-cyan-400 font-semibold">
              {" "}{user?.name}
            </span>
          </p>

          <p className="text-gray-500 mt-1">
            Manage all your files securely from one place.
          </p>
        </div>

        {/* Live Stats */}
        <StatsCards stats={stats} />

        {/* Storage Usage */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mt-8">

          <h2 className="text-2xl font-semibold text-white">
            Storage Usage
          </h2>

          <p className="text-gray-400 mt-2">
            {(stats.storageUsed / (1024 * 1024)).toFixed(2)} MB of 5 GB Used
          </p>

          <div className="w-full h-3 bg-slate-700 rounded-full mt-6">

            <div
              className="h-3 bg-cyan-500 rounded-full"
              style={{
                width: `${(stats.storageUsed / (5 * 1024 * 1024 * 1024)) * 100}%`,
              }}
            ></div>

          </div>

        </div>

        {/* Upload */}
        <UploadCard />

        {/* Recent Files */}
        <RecentFiles />

      </main>

    </div>
  );
}

export default Dashboard;