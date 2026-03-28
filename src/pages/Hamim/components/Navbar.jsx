import { useState, useEffect } from "react";
import Logo from "../images/logo.png"
import DecryptedText from "./DecryptedText";

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

    const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <nav
      id="navbar"
      className={`hamim-path bg-black/70 w-full h-20 flex flex-row justify-between items-center rounded-xl
        ${position ? "sticky top-2 z-50" : "relative"}`}
    >
      <div className=" flex w-auto m-5 ml-20 h-full justify-center items-center">
        <img
          src={Logo}
          alt="logo"
          className="h-15 w-auto object-contain rounded-full"
        />
      </div>

      <ul className="flex flex-row justify-between items-center w-1/3 m-5 mr-20 text-white-900 hamim-font text-2xl ">
        <li><a onClick={() => scrollToSection("Profile")} className="cursor-pointer hover:text-purple-600"><DecryptedText  text="Profile"/></a></li>
        <li><a onClick={() => scrollToSection("galery")} className="cursor-pointer hover:text-purple-600"><DecryptedText text="Galery"/></a></li>
        <li><a onClick={() => scrollToSection("expert")} className="cursor-pointer hover:text-purple-600"><DecryptedText text="Expert"/></a></li>
        <li><a onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-purple-600"><DecryptedText text="Call Me"/></a></li>
      </ul>
    </nav>
  );
}
