export default function Home() {
  return (

    <main className="min-h-screen text-white bg-linear-to-br from-gray-800 via-gray to-gray-850">


      <header className="sticky top-4 z-50">
        <div className="header-inner bg-black text-white-100 container mx-auto flex items-center justify-between p-4 shadow-md rounded-2xl">

          <a className="flex items-center space-x-2 text-white-100 hover:text-gray-300 transition duration-300">
            <div className="logo flex items-center space-x-2">

              <h1 className="text-xl font-bold cursor-pointer">INSIDEBOX</h1>
            </div>
          </a>

          <nav className="nav-links hidden md:flex space-x-6 text-sm font-medium">
            <a className="text-white-100 hover:text-gray-300 transition cursor-pointer">Integrações</a>
            <a className="text-white-100 hover:text-gray-300 transition cursor-pointer">Clientes</a>
            <a className="text-white-100 hover:text-gray-300 transition cursor-pointer">Como funciona</a>
            <a className="text-white-100 hover:text-gray-300 transition cursor-pointer">FAQ</a>
            <a className="text-white-100 hover:text-gray-300 transition cursor-pointer">Contato</a>
          </nav>

          <div className="actions hidden md:flex space-x-3">
            <button className="btn btn-pjt text-white-100 hover:text-gray-300 transition text-sm font-medium cursor-pointer">
              Projetos
            </button>

            <a href="https://wa.me/message/KD2EVB6QSWXBI1" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-ctc bg-white hover:text-gray-700 text-black font-semibold py-2 px-4 rounded-lg text-sm transition duration-300 flex items-center space-x-1 shadow-md hover:shadow-lg cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                Contratar
              </button>
            </a>
          </div>

          <button className="menu-toggle md:hidden text-gray-800 text-2xl" aria-label="Abrir menu">
            ☰
          </button>


        </div>

      </header>

      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-16 px-4">

          <div className="flex-1 space-y-6 mt-8">

            <h1 className="text-5xl font-bold">
              Structure Your Brilliance:<br />
              <span className=" drop-shadow-lg font-bold">Welcome to the Box.</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mt-8">
              Stop scattering your ideas. Clarify your vision and execute your plans in a single, dedicated environment.
            </p>

            <div className="flex">
              <button className="bg-gray-100 hover:bg-white-250 text-black font-bold py-2 px-4 mt-8 rounded-lg shadow-lg transform transition duration-150 hover:scale-105">Let's get started</button>
            </div>

          </div>

          <div>
            <img src="/img1.png" className="max-w-2xs" alt="" />
          </div>

        </div>


      </section>

    </main>

  );
}
