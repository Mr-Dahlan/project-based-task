import { useState, useEffect } from "react";
import Logo from "../images/logo.png"

export default function Navbar() {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setPosition(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`bg-white/20 w-full h-20 flex flex-row justify-between items-center rounded-xl
        ${position ? "sticky top-2 z-50" : "relative"}`}
    >
      <div className=" flex m-5 ml-10 h-full justify-center items-center">
        <img
          src={Logo}
          alt="logo"
          className="h-8 w-auto object-contain rounded-full"
        />
      </div>

      <ul className="flex flex-row justify-between items-center w-1/3 m-5">
        <li><a href="#about">Stalk Me</a></li>
        <li><a href="#galery">Galery</a></li>
        <li><a href="#expert">Expert</a></li>
        <li><a href="#contact">Call Me</a></li>
      </ul>
    </nav>
  );
}
