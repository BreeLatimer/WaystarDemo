import { useState } from 'react'

export default function Nav({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'pipeline', label: 'Pipeline Project' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'game', label: '🎮 Build the Pipeline' },
  ]

  const handleTab = (id) => {
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-[#FF6900]/20">
      <div className="flex items-center justify-between px-6 h-14">
      

        {/* Burger button — always visible */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
        >
          <span className={`block h-px bg-[#FF6900] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px bg-[#FF6900] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px bg-[#FF6900] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Logo */}
        <div className="font-mono text-[#FF6900] text-xs tracking-wide">
          bree@latimer:~$
        </div>

      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="border-t border-[#FF6900]/20 bg-black/95">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              className={`w-full text-left px-6 py-4 font-mono text-sm tracking-widest uppercase border-b border-white/5 transition-all ${
                active === tab.id
                  ? 'text-[#FF6900] bg-[#FF6900]/5'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <a href="https://github.com/BreeLatimer/WaystarDemo/actions/workflows/pipeline.yml" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/actions/workflow/status/BreeLatimer/WaystarDemo/pipeline.yml?branch=main&style=flat&logo=github&label=Pipeline&color=FF6900" alt="CI Pipeline" />
          </a>
        </div>
      )}
    </nav>
  )
}