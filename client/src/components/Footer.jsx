import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold text-cyan-400">
              Storixa
            </h2>

            <p className="mt-4 text-gray-400">
              Store, organize and access your files securely from anywhere.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Register
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              omsatyavenkat@gmail.com
            </p>

            <p className="text-gray-400 mt-2">
              Built with ❤️ using the MERN Stack
            </p>

          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <p className="text-center text-gray-500">
          © 2026 Storixa. Designed & Developed by <span className="text-cyan-400">Om Satya</span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;