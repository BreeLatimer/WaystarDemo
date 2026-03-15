export default function Home({ setActive }) {
    return (
        <div className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-14 max-w-5xl mx-auto relative">
  
        {/* Glow effects */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#FF6900]/8 rounded-full blur-3xl pointer-events-none -z-10" />
<div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-[#FF6900]/5 rounded-full blur-3xl pointer-events-none -z-10" />
  
        <div className="relative">
  
          {/* Top tag */}
          <div className="flex items-center gap-3 font-mono text-[#FF6900] text-xs tracking-widest uppercase mb-6">
            <div className="w-6 h-px bg-[#FF6900]"></div>
            Built for Waystar · Louisville, KY
          </div>
  
          {/* Hero headline */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-6">
            Bree<br />
            <span className="text-[#FF6900]">Latimer</span>
          </h1>
  
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-4">
            Hi there! I'm Bree, a DevOps Engineer specializing in CI/CD pipelines and zero-downtime delivery.
            I built this site to serve as a portfolio to demonstrate the deployment pipeline I have built, specifically to demonstrate
            what I can bring to the Waystar team.
          </p>
  
          {/* Pipeline callout card */}
          <div
            onClick={() => setActive('pipeline')}
            className="cursor-pointer group my-8 p-5 bg-[#141414] border border-[#FF6900]/30 rounded-xl hover:border-[#FF6900] hover:shadow-[0_0_40px_rgba(255,105,0,0.15)] transition-all max-w-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest">Featured Project</div>
              <div className="flex items-center gap-2 font-mono text-xs text-green-400">
                <a href="https://github.com/BreeLatimer/WaystarDemo/actions/workflows/pipeline.yml" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.com/BreeLatimer/WaystarDemo/actions/workflows/pipeline.yml/badge.svg" alt="CI Pipeline" />
                </a>
              </div>
            </div>
            <div className="text-xl font-bold mb-2">End-to-End CI/CD Pipeline</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A production-grade pipeline built with GitHub Actions and Harness. Automatically builds,
              tests, containerizes, and deploys to Kubernetes with zero-downtime blue/green releases.
              I built this pipline to mirror the same stack Waystar runs in production as closely as I can.
            </p>
  
            {/* Mini pipeline flow */}
            <div className="flex items-center gap-1 flex-wrap">
              {['💻 Code', '⚙️ Build', '🧪 Test', '🐳 Docker', '📦 Registry', '🚀 Harness', '☸️ K8s'].map((step, i, arr) => (
                <>
                  <span key={step} className="font-mono text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded">{step}</span>
                  {i < arr.length - 1 && <span key={`a${i}`} className="text-[#FF6900]/50 text-xs">→</span>}
                </>
              ))}
            </div>
  
            <div className="font-mono text-xs text-[#FF6900] mt-4 group-hover:underline">
              View full pipeline →
            </div>
          </div>
  
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActive('pipeline')}
              className="bg-[#FF6900] text-black font-mono text-xs font-bold tracking-widest uppercase px-6 py-3 rounded hover:bg-[#cc5400] transition-all hover:-translate-y-0.5"
            >
              View Pipeline →
            </button>
            <button
              onClick={() => setActive('about')}
              className="bg-transparent text-white font-mono text-xs tracking-widest uppercase px-6 py-3 rounded border border-[#FF6900]/30 hover:border-[#FF6900] hover:text-[#FF6900] transition-all"
            >
              About Me
            </button>
            <button
              onClick={() => setActive('resume')}
              className="bg-transparent text-white font-mono text-xs tracking-widest uppercase px-6 py-3 rounded border border-[#FF6900]/30 hover:border-[#FF6900] hover:text-[#FF6900] transition-all"
            >
              Resume
            </button>
            <button
              onClick={() => setActive('game')}
              className="bg-transparent text-white font-mono text-xs tracking-widest uppercase px-6 py-3 rounded border border-[#FF6900]/30 hover:border-[#FF6900] hover:text-[#FF6900] transition-all"
            >
              🎮 Play a game
            </button>
          </div>
        </div>
      </div>
    )
  }