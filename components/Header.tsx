'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-syne">
          <span className="text-gray-900">Anuj</span>
          <span className="text-accent-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 font-space-mono text-sm">
          <a href="#projects" className="text-gray-600 hover:text-accent-primary transition">Projects</a>
          <a href="#about" className="text-gray-600 hover:text-accent-primary transition">About</a>
          <a href="#contact" className="text-gray-600 hover:text-accent-primary transition">Contact</a>
        </div>
      </nav>
    </header>
  )
}
