export default function Home() {
  return (

    <main className="min-h-screen bg-gray-950 text-white">
     

      <nav className="w-full px-8 py-4 flex justify-between items-center">
        <h1 className="text-2x1 font-bold">INSIDEBOX</h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="cursor-pointer hover:text-blue-400 transition">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition">About</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Contact</li>
        </ul>

      </nav>

    </main>
    
  );
}
