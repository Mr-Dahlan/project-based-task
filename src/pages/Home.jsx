import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Selamat Datang</h1>
      <h2>Silahkan Pilih Halaman</h2>

      <div className="flex gap-4">
        <Link to="/hamim">
          <button className="px-6 py-3  bg-blue-500 rounded-xl hover:bg-blue-600">
            Halaman Hamim G. Dahlan
          </button>
        </Link>

        <Link to="/dito">
          <button className="px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600">
            Halaman Dito Pratama W
          </button>
        </Link>

        <Link to="/kevin">
          <button className="px-6 py-3 bg-purple-500 rounded-xl hover:bg-purple-600">
            Halaman Kevin Surya W
          </button>
        </Link>
      </div>
    </div>
  );
}
