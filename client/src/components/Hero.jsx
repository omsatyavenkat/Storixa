function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-24 px-6">

      <h1 className="text-6xl md:text-7xl font-extrabold text-cyan-400">
        Store. Share. Secure.
      </h1>

      <p className="mt-8 text-xl text-gray-300 max-w-2xl">
        Storixa is your secure cloud storage platform for uploading,
        organizing and accessing files anytime, anywhere.
      </p>

      <div className="flex gap-6 mt-12">

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition duration-300">
          Get Started
        </button>

        <button className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300">
          Login
        </button>

      </div>

    </section>
  );
}

export default Hero;