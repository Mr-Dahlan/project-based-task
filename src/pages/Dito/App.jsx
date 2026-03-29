import fotoSaya from "./IMG/IMG_8428.JPG";
export default function DitoApp() {
  const biodata = {
    nama: "Hanindito Pratama Wicaksono",
    nim: "253140701111005",
    kelas: "T2B",
    jurusan: "Teknologi Informasi",
    lokasi: "DKI Jakarta",
    foto: fotoSaya ,
  };

  const tentangSaya = [
    {
      label: "Hobi",
      isi: "Saya senang menganalisa hal-hal random di sekitar saya — dari pola kebiasaan orang, tren teknologi, hingga hal-hal kecil yang sering luput dari perhatian. Bagi saya, menganalisa adalah cara menikmati dunia.",
    },
    {
      label: "Kepribadian",
      isi: "Saya adalah pribadi yang bertanggung jawab, ramah, dan sopan. Saya tidak terburu-buru dalam mengambil keputusan — setiap pilihan saya pertimbangkan dengan matang agar hasilnya tidak disesali.",
    },
    {
      label: "Tujuan",
      isi: "Ingin menjadi pribadi yang baik dan membanggakan kedua orang tua. Bagi saya, kesuksesan yang paling berarti adalah ketika orang-orang yang saya cintai bisa bangga melihat perjalanan saya.",
    },
    {
      label: "Mengapa IT?",
      isi: "Dunia IT menarik bagi saya karena penuh tantangan dan keunikan. Khususnya di bidang analisa IT — setiap masalah punya pola tersembunyi yang seru untuk ditemukan dan dipecahkan.",
    },
  ];

  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{ backgroundColor: "#0f172a", fontFamily: "Georgia, serif" }}
    >
      <div className="max-w-3xl mx-auto space-y-10">

      
        <div className="text-center">
          <h1
            className="text-2xl font-bold tracking-widest uppercase"
            style={{ color: "#e2e8f0", letterSpacing: "0.2em" }}
          >
            Biografi
          </h1>
          <div
            className="mx-auto mt-2 h-px w-24"
            style={{ backgroundColor: "#7dd3fc" }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          
          <div className="shrink-0">
            <div
              className="w-44 h-52 flex items-center justify-center text-sm"
              style={{
                border: "1px solid #7dd3fc",
                backgroundColor: "#1e293b",
                color: "#94a3b8",
              }}
            >
              {biodata.foto ? (
                <img
                  src={biodata.foto}
                  alt="Foto"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span></span>
              )}
            </div>
          </div>

        
          <div className="flex-1 w-full">
            {[
              ["ID", biodata.nim],
              ["NAME", biodata.nama],
              ["CLASS", biodata.kelas],
              ["MAJOR", biodata.jurusan],
              ["LOCATION", biodata.lokasi],
            ].map(([key, val]) => (
              <div
                key={key}
                className="flex py-3"
                style={{ borderBottom: "1px solid #1e3a5f" }}
              >
                <span
                  className="w-32 text-sm font-semibold tracking-widest uppercase shrink-0"
                  style={{ color: "#7dd3fc" }}
                >
                  {key}
                </span>
                <span className="text-sm" style={{ color: "#cbd5e1" }}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h2
            className="text-center text-xl font-bold mb-1 tracking-wide"
            style={{ color: "#e2e8f0" }}
          >
            Tentang Saya
          </h2>
          <div
            className="mx-auto mb-6 h-px w-20"
            style={{ backgroundColor: "#7dd3fc" }}
          />

          <div
            className="p-6 space-y-5 text-sm leading-relaxed"
            style={{
              border: "1px solid #1e3a5f",
              backgroundColor: "#0f1f35",
              color: "#94a3b8",
            }}
          >
            {tentangSaya.map((item) => (
              <div key={item.label}>
                <span
                  className="font-semibold uppercase tracking-widest text-xs"
                  style={{ color: "#7dd3fc" }}
                >
                  {item.label}
                </span>
                <p className="mt-1" style={{ color: "#cbd5e1" }}>
                  {item.isi}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="text-center text-xs pt-4"
          style={{
            borderTop: "1px solid #1e3a5f",
            color: "#475569",
          }}
        >
          {biodata.nama} · {biodata.nim}
        </div>

      </div>
    </div>
  );
}