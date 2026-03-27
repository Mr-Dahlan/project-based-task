import bgImage from "./images/nw-bg.jpg";

export default function Parent({ children }) {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
}
