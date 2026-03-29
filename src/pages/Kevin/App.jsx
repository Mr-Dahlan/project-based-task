import { useState } from 'react'
import { data } from './data'


function Avatar() {
  const [error, setError] = useState(false)
  const initials = data.nama.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

  if (error) {
    return (
      <div className="w-24 h-24 rounded-2xl bg-[#3a3a3a] flex items-center justify-center text-2xl font-bold text-[#a78bfa]">
        {initials}
      </div>
    )
  }
  return (
    <img
      src={data.foto}
      alt={data.nama}
      onError={() => setError(true)}
      className="w-24 h-24 rounded-2xl object-cover"
    />
  )
}


function SkillLogo({ nama, logo }) {
  const [error, setError] = useState(false)
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-xl bg-[#3a3a3a] flex items-center justify-center">
        {error ? (
          <span className="text-xs text-[#888]">{nama.slice(0, 2)}</span>
        ) : (
          <img
            src={logo}
            alt={nama}
            onError={() => setError(true)}
            className="w-8 h-8 object-contain"
          />
        )}
      </div>
      <span className="text-xs text-[#888888]">{nama}</span>
    </div>
  )
}


function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#2e2e2e] border border-[#3a3a3a] rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}


function Label({ children }) {
  return (
    <p className="text-xs font-semibold text-[#888888] uppercase tracking-widest mb-4">
      {children}
    </p>
  )
}


export default function App() {
  const { nama, kelas, jurusan, domisili, tentang, skills } = data

  return (
    <div className="flex justify-center item-center min-h-screen bg-[#1e1e1e] py-12 px-4">
      <div className="justify-center item-center max-w-lg mx-auto flex flex-col gap-4">

        {}
        <Card>
          <div className="flex gap-5 items-center mb-5">
            <Avatar />
            <div>
              <h1 className="text-lg font-bold text-[#ececec]">{nama}</h1>
              <p className="text-sm text-[#a78bfa] mt-0.5">{jurusan}</p>
            </div>
          </div>

          <div className="h-px bg-[#3a3a3a] mb-4" />

          <div className="flex flex-col gap-2.5">
            <Row label="Kelas"    value={kelas}    />
            <Row label="Domisili" value={domisili} />
          </div>
        </Card>

        {}
        <Card>
          <Label>Tentang Saya</Label>
          <p className="text-sm text-[#b0b0b0] leading-relaxed text-justify">{tentang}</p>
        </Card>

        {}
        <Card>
          <Label>Skills</Label>
          <div className="flex flex-wrap gap-4">
            {skills.map((s, i) => (
              <SkillLogo key={i} nama={s.nama} logo={s.logo} />
            ))}
          </div>
        </Card>

      </div>
    </div>
  )
}


function Row({ label, value }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-[#888888]">{label}</span>
      <span className="text-[#ececec] font-medium">{value}</span>
    </div>
  )
}
