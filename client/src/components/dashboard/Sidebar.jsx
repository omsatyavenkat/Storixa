import {
  LayoutDashboard,
  Folder,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col p-6">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        Storixa
      </h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <LayoutDashboard size={22} />
          Dashboard
        </button>

        <button
          onClick={() => navigate("/my-files")}
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <Folder size={22} />
          My Files
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <User size={22} />
          Profile
        </button>

      </nav>

      {/* Logout */}
      <div className="mt-auto">

        <button
          onClick={logout}
          className="flex items-center gap-3 text-red-400 hover:text-red-500 transition"
        >
          <LogOut size={22} />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;