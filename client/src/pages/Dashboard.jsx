import Sidebar from "../components/dashboard/Sidebar";
import StatsCards from "../components/dashboard/StatsCards";
import UploadCard from "../components/dashboard/UploadCard";
import RecentFiles from "../components/dashboard/RecentFiles";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Welcome Section */}
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

        {/* Statistics Cards */}
        <StatsCards />

        {/* Storage Usage */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mt-8">

          <h2 className="text-2xl font-semibold text-white">
            Storage Usage
          </h2>

          <p className="text-gray-400 mt-2">
            You have used 0 MB of your available storage.
          </p>

          <div className="w-full h-3 bg-slate-700 rounded-full mt-6">

            <div className="h-3 bg-cyan-500 rounded-full w-0"></div>

          </div>

          <div className="flex justify-between mt-3 text-gray-300">

            <span>0 MB Used</span>

            <span>5 GB Total</span>

          </div>

        </div>

        {/* Upload Card */}
        <UploadCard />

        {/* Recent Files */}
        <RecentFiles />

      </main>

    </div>
  );
}

export default Dashboard;