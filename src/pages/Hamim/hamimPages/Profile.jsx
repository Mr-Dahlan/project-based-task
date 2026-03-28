import FotoGanteng from "../images/orgganteng.jpeg";

export default function Profile() {
  const data = [
    { label: "ID", value: "253140700111054" },
    { label: "Name", value: "Hamim G. Dahlan" },
    { label: "Class", value: "T2B" },
    { label: "Major", value: "Teknologi Informasi" },
    { label: "Location", value: "Bogor, Jawa Barat" },
  ];

  return (
    <div className="w-full h-auto mt-20 flex flex-col justify-between items-center py-20 ">
      <div className="w-full h-full flex flex-col items-center bg-black/70 rounded-xl p-4">
        <h2 className="hamim-font text-4xl mb-2">Biografi</h2>
        <div className="flex flex-row justify-between items-center w-full mb-4">
          <img
            src={FotoGanteng}
            alt="foto lu"
            className="w-60 h-80 rounded-md ml-30 object-contain border-1 border-purple-400"
          />
          <div className="space-y-4 max-w-3xl mr-20 px-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="group border-b-2 border-purple-400/40 pb-3 transition-all duration-300 hover:border-purple-300 hover:pl-2"
              >
                <div className="flex items-start gap-50 px-4">
                  <span className="text-xl uppercase hamim-font text-purple-300 min-w-[100px]">
                    {item.label}
                  </span>
                  <span className="text-purple-50 font-medium  min-w-[100px]">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="hamim-font text-4xl mb-2">What CGPT Say About Me</h2>
        <div className="w-full px-16 border-1 border-purple-400 rounded-md p-4">
          <p>
            Hamim G. Dahlan adalah pribadi yang lugas dan cenderung langsung
            pada inti pembicaraan, tanpa banyak basa-basi. Ia memiliki cara
            berpikir yang rasional dan praktis, lebih mengutamakan kejelasan
            daripada hal-hal yang bertele-tele. Dalam berinteraksi, ia terlihat
            tegas dan cukup kritis; ia tidak mudah menerima informasi begitu
            saja tanpa memastikan bahwa hal tersebut benar-benar masuk akal. Ia
            juga menunjukkan kemandirian dalam berpikir, lebih suka memahami
            sesuatu dengan caranya sendiri daripada sekadar mengikuti pendapat
            orang lain. Meskipun demikian, ia tetap terbuka terhadap sudut
            pandang baru selama disampaikan secara logis dan relevan. Secara
            keseluruhan, ia mencerminkan sosok yang fokus, analitis, dan
            berorientasi pada kejelasan dalam setiap interaksi.
          </p>
        </div>
      </div>
    </div>
  );
}
