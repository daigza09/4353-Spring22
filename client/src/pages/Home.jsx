import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-8 bg-white">Welcome to the Home Page</h1>
      <div className="rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 bg-white">Big White Box</h2>
        {/* content */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 bg-white">About Us</h3>
          {/* content*/}
        </div>
        <div className="rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 bg-white">Want a fuel quote?</h3>
          {/* content */}
        </div>
        <div className="rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 bg-white">Feel free to contact us!</h3>
          {/* content */}
        </div>
      </div>
    </main>
  );
}

export default Home;



