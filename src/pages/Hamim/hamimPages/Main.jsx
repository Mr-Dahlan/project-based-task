import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Profile from "./Profile";
import Galery from "./Galery";
import Expert from "./Expert";
import CallMe from "./CallMe";
import TextType from "../components/TextType";

export default function Main() {
  const [word, setWord] = useState("Hamim G. Dahlan");
  const [index, setIndex] = useState(0);

  const words = ["", "", "", ""];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        setWord(words[nextIndex]);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full pt-20 pb-0 ">
      <div className="w-full px-4">
        <span className="hamim-font text-white text-8xl text-center justify-center flex">
          WELCOME
        </span>

        <div className="text-white mt-4 text-center mb-[24%]">
          Who is
          <TextType
            text={[
              " Hamim G. Dahlan",
              " The Best Engineer",
              " The Most Genius Man",
              " The Next Tony Stark",
              " Not Vibe Coder",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </div>

        <Navbar />
        <Profile />
        <Galery />
        <Expert/>
        <CallMe/>
      </div>
    </main>
  );
}
