import Meme from "../images/meme.jpg";
import { useState } from "react";

export default function Galery() {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  return (
    <div id="galery" className="pt-10">

      <div
        
        className="w-full h-screen  flex flex-col justify-between items-center p-10 pt-20 "
      >
        <div className="w-full h-full flex flex-col items-center bg-black/70 rounded-xl">
          <h2 className="mt-8 mb-4 hamim-font text-4xl">Galery</h2>
          <div className="flex flex-row justify-around items-center w-full">
            <div
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            >
              {hovered1 ? (
                <div>
                  <img
                    src={Meme}
                    alt="meme cat eyebrow"
                    className="w-60 h-60 rounded-md mt-4 object-contain border-1 border-purple-400"
                  />
                  <h2>You still here?</h2>
                  <p>I Said no more photo</p>
                </div>
              ) : (
                <div className="w-60 h-70 rounded-md mt-4  border-1 bg-gray-500 border-purple-400" />
              )}
            </div>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered ? (
                <div>
                  <img
                    src={Meme}
                    alt="meme cat eyebrow"
                    className="w-60 h-60 rounded-md mt-4 object-contain border-1 border-purple-400"
                  />
                  <h2>What are you looking for?</h2>
                  <p>Sory no more photo</p>
                </div>
              ) : (
                <div className="w-60 h-70 rounded-md mt-4  border-1 bg-gray-500 border-purple-400" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
