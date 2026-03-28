export default function DitoApp() {
  const biodata = {
    nama: "Hanindito Pratama Wicakasono",
    jurusan: "Teknologi Informasi",
    universitas: "Universitas Brawijaya",
    angkatan: "2025",
    kota: "Jakata",
    email: "ditopratama.2809@gmail.com",
  };

  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "MySQL",
    "Git & GitHub",
  ];

  const pengalaman = [
    {
      tahun: "2025 – Sekarang",
      judul: "Mahasiswa Aktif",
      tempat: "Universitas Brawijaya",
      keterangan: "Belajar pengembangan web dan juga membantu berkarya dengan cara sendiri",
    },
    {
      tahun: "2025 - Sekarang",
      judul: "Anggota UKM Provoks",
      tempat: "Universitas Brawijaya",
      keterangan: "Ikut belajar tentang pemograman dan perkembangaan teknologi",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-10">

        {/* ── HEADER / BIODATA ── */}
        <div className="border-b border-gray-700 pb-8">
          <h1 className="text-3xl font-bold text-white mb-1">{biodata.nama}</h1>
          <p className="text-gray-400 text-sm mb-4">
            {biodata.jurusan} · {biodata.universitas} · Angkatan {biodata.angkatan}
          </p>
          <div className="flex flex-col gap-1 text-sm text-gray-400">
            <span>📍 {biodata.kota}</span>
            <span>📧 {biodata.email}</span>
          </div>
        </div>

        {/* ── SKILL ── */}
        <div>
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
            Keahlian
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-[#1e1e1e] border border-gray-700 text-gray-300 text-sm px-3 py-1 rounded"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
            Pengalaman
          </h2>
          <div className="space-y-6">
            {pengalaman.map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-xs text-gray-500 w-28 shrink-0 pt-0.5">{p.tahun}</div>
                <div>
                  <p className="text-white font-medium">{p.judul}</p>
                  <p className="text-gray-500 text-sm mb-1">{p.tempat}</p>
                  <p className="text-gray-400 text-sm">{p.keterangan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          {biodata.nama} · {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}