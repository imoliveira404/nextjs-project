export default function Home() {
  return (

    <main className="min-h-screen text-white bg-gradient-to-br from-gray-850 via-black to-black-950">


      <nav className="w-full px-8 py-4 flex justify-between items-center">
        <h1 className="text-2x1 font-bold">INSIDEBOX</h1>

        <ul className="hidden md:flex gap-8 text-lm">
          <li className="cursor-pointer hover:text-blue-400 transition">HOME</li>
          <li className="cursor-pointer hover:text-blue-400 transition">ABOUT</li>
          <li className="cursor-pointer hover:text-blue-400 transition">CONTACT</li>
        </ul>

      </nav>

      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

          <div className="flex-1 space-y-6">

            <h1 className="text-5xl">

              Structure Your Brilliance:<br />
              <span className="text-blue-500 drop-shadow-lg font-bold">Welcome to the Box.</span>

            </h1>

            <p className="text-gray-300 text-lg md:text-xl">
              Stop scattering your ideas. Clarify your vision and execute your plans in a single, dedicated environment.
            </p>

            <div className="flex gap-4">
              <button>btn-1</button>
              <button>btn-2</button>
            </div>


          </div>
        </div>

      </section>

    </main>

  );
}
