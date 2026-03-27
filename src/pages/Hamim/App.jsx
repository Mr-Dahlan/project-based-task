import Parent from "./Parent";
import Navbar from "./components/Navbar";
import bgImage from "./images/bg.jpg";

export default function HamimApp() {
  return (
    <div className="min-w-screen min-h-screen">
      <Parent>
        <main className="w-full pt-20 pb-10 ">
          <div className="w-full px-4 ">

            <h1 className="text-white text-4xl font-bold text-center">
              Welcome
            </h1>

            <p className="text-white mt-4 text-center">
              Ini adalah konten yang bisa di-scroll
            </p>

            <Navbar/>

            <div className="mt-10 h-[150vh]"></div>
          </div>
        </main>
      </Parent>
    </div>
  );
}
