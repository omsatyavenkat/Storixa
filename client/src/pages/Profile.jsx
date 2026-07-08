import Sidebar from "../components/dashboard/Sidebar";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-white mb-8">
          Profile
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 max-w-2xl">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                {user?.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {user?.email}
              </p>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-gray-400">
                Account Type
              </p>

              <h3 className="text-white text-xl font-semibold mt-2">
                Free
              </h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-gray-400">
                Storage Limit
              </p>

              <h3 className="text-white text-xl font-semibold mt-2">
                5 GB
              </h3>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;