export default function Nav({ active, setActive }) {
    const tabs = [
      { id: 'home', label: 'Home' },
      { id: 'pipeline', label: 'Pipeline' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'resume', label: 'Resume' },
      { id: 'game', label: '🎮 Play' },
    ]
  
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14 bg-black/90 backdrop-blur border-b border-[#FF6900]/20">
        <div className="font-mono text-[#FF6900] text-xs tracking-wide hidden md:block">
          bree@latimer:~$
        </div>
  
        <div className="flex items-center h-full">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`h-full px-4 font-mono text-xs tracking-widest uppercase border-b-2 transition-all duration-200 ${
                active === tab.id
                  ? 'text-[#FF6900] border-[#FF6900]'
                  : 'text-gray-500 border-transparent hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
  
        <div className="flex items-center gap-2 font-mono text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Pipeline passing
        </div>
      </nav>
    )
  }