import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLinux,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Expert() {
  const techLogos = [
    <SiReact />,
    <SiNextdotjs />,
    <SiTypescript />,
    <SiTailwindcss />,
    <FaGithub />,
    <SiLinux />,
  ];

  // bebas panjang sekarang
  const loopLogos = Array(8).fill(techLogos).flat();

  return (
    <div id="expert" className="mb-10 pt-50">
      <h2 className="hamim-font text-4xl flax text-center">My Expertise</h2>
      <div className="marquee-wrapper py-20">
        <div className="marquee-track">
          {loopLogos.map((logo, i) => (
            <div
              key={i}
              className="mx-10 text-white text-5xl flex items-center"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
