function Stats() {
  return (
    <section className="mt-28 mb-24 px-8">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-5xl font-bold text-cyan-400">
            10K+
          </h2>

          <p className="mt-3 text-gray-400">
            Files Stored
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-5xl font-bold text-cyan-400">
            99.9%
          </h2>

          <p className="mt-3 text-gray-400">
            Uptime
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-5xl font-bold text-cyan-400">
            256-bit
          </h2>

          <p className="mt-3 text-gray-400">
            Encryption
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-5xl font-bold text-cyan-400">
            24/7
          </h2>

          <p className="mt-3 text-gray-400">
            Cloud Access
          </p>
        </div>

      </div>

    </section>
  );
}

export default Stats;