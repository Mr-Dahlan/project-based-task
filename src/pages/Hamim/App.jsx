import { useEffect, useRef } from "react";
import Parent from "./Parent";
import Main from "./hamimPages/Main";
import Footer from "./hamimPages/Footer";
import Back from "./components/Back.jsx"
import Lenis from "lenis";


export default function HamimApp() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-w-screen min-h-screen">
      <Parent>
	<Back/>
        <Main/>
        <Footer/>
      </Parent>
    </div>
  );
}
