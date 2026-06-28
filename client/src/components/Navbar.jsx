import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-slate-950 text-white">

      <h1 className="text-3xl font-bold text-cyan-400">
        Storixa
      </h1>

      <div className="flex gap-8 text-lg">

        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:text-cyan-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-cyan-400 transition"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;