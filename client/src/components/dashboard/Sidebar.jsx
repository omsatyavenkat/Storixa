import {
  LayoutDashboard,
  Folder,
  Star,
  Trash2,
  Settings,
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

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        Storixa
      </h1>

      <nav className="flex flex-col gap-4">

        <button className="flex items-center gap-3 hover:text-cyan-400">
          <LayoutDashboard size={22} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 hover:text-cyan-400">
          <Folder size={22} />
          My Files
        </button>

        <button className="flex items-center gap-3 hover:text-cyan-400">
          <Star size={22} />
          Favorites
        </button>

        <button className="flex items-center gap-3 hover:text-cyan-400">
          <Trash2 size={22} />
          Trash
        </button>

        <button className="flex items-center gap-3 hover:text-cyan-400">
          <Settings size={22} />
          Settings
        </button>

      </nav>

      <div className="mt-auto">

        <button
          onClick={logout}
          className="flex items-center gap-3 text-red-400 hover:text-red-500"
        >
          <LogOut size={22} />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;