export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-black/70 py-6 flex justify-center items-center">
        <span className="text-white text-sm">
          &copy; {new Date().getFullYear()} Dibuat dengan ☕
        </span>
      </div>
    </footer>
  )
}