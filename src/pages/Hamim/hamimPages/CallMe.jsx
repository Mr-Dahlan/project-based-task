import { FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "6281284415966";
  const message = "Halo, saya ingin bertanya sesuatu #thisnotmynomber haha";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-white">Call Me 🤙</h1>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-110"
        >
          <FaWhatsappSquare className="text-6xl text-white-500 hover:text-white-600" />
        </a>

        <p className="mt-4 text-white-600">Klik untuk chat via WhatsApp</p>
      </div>
    </div>
  );
}

