import Navbar from "../components/Navbar";

export default function Main() {
    return (
        <main className="w-full pt-20 pb-0 ">
          <div className="w-full px-4 ">
            <span className="hamim-font text-white text-8xl text-center justify-center flex">
              WELCOME
            </span>

            <p className="text-white mt-4 text-center mb-[24%]">
              Ini adalah konten yang bisa di-scroll
            </p>

            <Navbar />

            <div className="mt-10 h-[150vh]"></div>
          </div>
        </main>
    );
}