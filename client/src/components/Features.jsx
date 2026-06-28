import { ShieldCheck, Upload, Cloud } from "lucide-react";

function Features() {
  return (
    <section className="mt-32 px-8">

      <h2 className="text-4xl font-bold text-center mb-14">
        Why Choose Storixa?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-slate-900 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">

          <ShieldCheck
            size={60}
            className="text-cyan-400 mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">
            Secure Storage
          </h3>

          <p className="text-gray-400">
            Protect your files with secure authentication and modern encryption.
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">

          <Upload
            size={60}
            className="text-cyan-400 mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">
            Fast Uploads
          </h3>

          <p className="text-gray-400">
            Upload photos, videos and documents quickly with a smooth experience.
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">

          <Cloud
            size={60}
            className="text-cyan-400 mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">
            Cloud Access
          </h3>

          <p className="text-gray-400">
            Access your files securely from anywhere and on any device.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;