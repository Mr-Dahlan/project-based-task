import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Profile from "./Profile";
import Galery from "./Galery";
import TextType from "../components/TextType";
import DecryptedText from "../components/DecryptedText";

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

        <p className="text-white mt-4 text-center mb-[24%]">
          Who is
          <TextType
            text={[
              " Hamim G. Dahlan",
              " The Best Engineer",
              " The Most Genius Man",
              " The Next Tony Stark",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            texts={[
              "Welcome to React Bits! Good to see you!",
              "Build some amazing experiences!",
            ]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </p>

        <Navbar />
        <Profile />
        <Galery />
      </div>
    </main>
  );
}
