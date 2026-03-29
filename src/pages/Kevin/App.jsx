import React from "react";

export default function VinsrProfile() {
  return (
    // halaman profil vin-sr
    <div className="min-h-screen bg-gray-950 text-white" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs */}
      <div className="fixed top-[-80px] left-[-80px] w-80 h-80 bg-cyan-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-[-80px] right-[-80px] w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">

        {/* Top badge */}
        <div className="flex justify-center mb-10">
          <span className="text-xs tracking-widest uppercase text-cyan-400 border border-cyan-800 px-4 py-1 rounded-full bg-cyan-950">
            Student Profile
          </span>
        </div>

        {/* Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">

          {/* Banner */}
          <div className="h-28 w-full bg-gradient-to-r from-cyan-900 via-indigo-900 to-gray-900 relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #00f0ff 0, #00f0ff 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* Avatar */}
          <div className="flex justify-center -mt-14 mb-4">
            <div className="w-28 h-28 rounded-full border-4 border-gray-900 overflow-hidden shadow-lg shadow-cyan-900/40">
              <img
                src="https://preview.redd.it/my-little-sister-asked-why-i-have-a-bitten-donut-as-my-v0-gkvotat6phzd1.jpeg?auto=webp&s=abb28bc8aa0e4bd323ccaeffd1e1ca946c346667"
                alt="Foto Profil Vinsr Wcks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Identity */}
          <div className="text-center px-8 pb-2">
            <h1 className="text-2xl font-bold tracking-tight text-white">Vinsr Wcks</h1>
            <p className="text-cyan-400 text-sm mt-1 tracking-widest uppercase">@vin-sr</p>
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-2 px-8 py-4">
            {[
              { label: "Kelas", value: "T22" },
              { label: "Prodi", value: "Informatika Kelas Atas" },
              { label: "Domisili", value: "Surabaya" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-center"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm text-white font-medium mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-8 border-t border-gray-800 my-2" />

          {/* About */}
          <div className="px-8 py-6">
            <h2 className="text-xs uppercase tracking-widest text-cyan-500 mb-3">Tentang Diri</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {/* GANTI TEKS DI BAWAH INI DENGAN 100 KATA TENTANG DIRIMU */}
              Aku adalah anak informatika yang tertarik pada dunia IT. Sejak kecil aku sudah penasaran
              bagaimana teknologi bisa mengubah cara manusia bekerja dan berinteraksi. Di kampus, aku
              aktif belajar pemrograman, mulai dari web development hingga eksplorasi kecerdasan buatan.
              Aku percaya bahwa teknologi bukan sekadar alat, tetapi jembatan menuju solusi nyata untuk
              masalah di sekitar kita. Ke depannya, aku ingin berkontribusi di industri teknologi Indonesia
              dan terus berkembang menjadi developer yang tidak hanya mahir secara teknis, tetapi juga
              mampu berpikir kreatif dan solutif dalam setiap tantangan yang dihadapi.
              {/* SAMPAI SINI */}
            </p>
          </div>

          {/* Footer card */}
          <div className="bg-gray-800/50 px-8 py-4 flex items-center justify-between">
            <span className="text-xs text-gray-600">project-based-task © 2025</span>
            <span className="text-xs text-cyan-700 font-mono">localhost:3000/vin-sr</span>
          </div>

        </div>
      </div>
    </div>
  );
}