"use client";
import React, { useState,useEffect } from "react";

export default function Navbar( ) {
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
  return(
    <nav 
    id="navbar"
    className={`bg-gray-800 mt-[25%] w-full h-20  ${position ? "sticky top-0 z-50" : "relative"}`}>
hai
    </nav>
  )
}