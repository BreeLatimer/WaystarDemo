const steps = [
  { emoji: '💻', label: 'Code Push' },
  { emoji: '⚙️', label: 'Build' },
  { emoji: '🧪', label: 'Test' },
  { emoji: '🐳', label: 'Docker' },
  { emoji: '📦', label: 'Registry' },
  { emoji: '🚀', label: 'Harness CD' },
  { emoji: '☸️', label: 'Kubernetes' },
]

const stack = [
  { icon: '⚡', name: '.NET 8', role: 'API Framework' },
  { icon: '🧪', name: 'xUnit', role: 'Unit Testing' },
  { icon: '🐳', name: 'Docker', role: 'Containerization' },
  { icon: '⚙️', name: 'GitHub Actions', role: 'CI Pipeline' },
  { icon: '📦', name: 'GHCR', role: 'Container Registry' },
  { icon: '🚀', name: 'Harness', role: 'CD Platform' },
  { icon: '☸️', name: 'Kubernetes', role: 'Orchestration' },
  { icon: '🔵', name: 'Blue/Green', role: 'Deploy Strategy' },
]

const decisions = [
  { title: 'Multi-stage Dockerfile', desc: 'Separates build and runtime environments. Final image is lean, production-ready, and contains no build tools.' },
  { title: 'Layer Caching Strategy', desc: 'Copies .csproj and restores dependencies before copying source. The expensive restore only reruns when dependencies change.' },
  { title: 'Pipeline Gate', desc: 'Docker build job has needs: build-and-test. If any test fails, the pipeline stops. Broken code never reaches the registry.' },
  { title: 'Blue/Green Deploy', desc: 'New versions deploy to inactive environment first. Harness swaps Kubernetes service selectors instantly — zero downtime, instant rollback.' },
]

export default function Pipeline() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <div className="flex items-center gap-3 font-mono text-[#FF6900] text-xs tracking-widest uppercase mb-4">
        <div className="w-6 h-px bg-[#FF6900]" />
        CI/CD Pipeline
      </div>
      <h2 className="text-5xl font-extrabold tracking-tight mb-4">
        From commit to <span className="text-[#FF6900]">production.</span>
      </h2>
      <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-12">
        A fully automated pipeline built with GitHub Actions and Harness —
        deploying to Kubernetes with zero-downtime blue/green releases.
      </p>

      {/* Pipeline flow */}
      <div className="flex items-center gap-0 overflow-x-auto pb-4 pt-6 mb-12">
        {steps.map((step, i) => (
          <>
            <div key={step.label} className="flex flex-col items-center min-w-[100px] group">
              <div className="relative w-14 h-14 bg-[#141414] border border-[#FF6900]/20 rounded-xl flex items-center justify-center text-2xl mb-2 transition-all group-hover:border-[#FF6900] group-hover:shadow-[0_0_20px_rgba(255,105,0,0.2)] group-hover:-translate-y-1">
                {step.emoji}
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-black text-[8px] font-bold">✓</div>
              </div>
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wide text-center">{step.label}</div>
            </div>
            {i < steps.length - 1 && (
              <div key={`arrow-${i}`} className="text-[#FF6900]/50 text-lg px-1 mb-4 flex-shrink-0">→</div>
            )}
          </>
        ))}
      </div>

      {/* Terminal */}
      <div className="bg-[#090909] border border-[#FF6900]/20 rounded-xl overflow-hidden mb-12">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#111] border-b border-[#FF6900]/10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono text-xs text-gray-600 ml-2">pipeline.log</span>
        </div>
        <div className="p-6 font-mono text-sm leading-loose">
          <div><span className="text-[#FF6900]">$</span> <span className="text-white">git push origin main</span></div>
          <div className="text-gray-500">Triggering GitHub Actions workflow...</div>
          <div className="text-green-400">✓ Restore complete (2.1s)</div>
          <div className="text-green-400">✓ Build succeeded</div>
          <div className="text-green-400">✓ Tests passed — total: 1, failed: 0, succeeded: 1 (3.8s)</div>
          <div className="text-green-400">✓ Docker image built (multi-stage, optimized layers)</div>
          <div className="text-green-400">✓ Pushed → ghcr.io/breelatimer/waystar-demo:latest</div>
          <div className="text-green-400">✓ Harness pipeline triggered</div>
          <div className="text-gray-500">Executing blue/green deployment strategy...</div>
          <div className="text-gray-500">&nbsp;&nbsp;Selectors for Service One [harness.io/color: blue]</div>
          <div className="text-gray-500">&nbsp;&nbsp;Selectors for Service Two [harness.io/color: green]</div>
          <div className="text-gray-500">&nbsp;&nbsp;Swapping service selectors...</div>
          <div className="text-green-400">✓ Deployment successful. Zero downtime. Blue/green swap complete.</div>
          <div><span className="text-[#FF6900]">$</span> <span className="text-white animate-pulse">_</span></div>
        </div>
      </div>

      {/* Stack */}
      <h3 className="text-2xl font-extrabold mb-2">Tech Stack</h3>
      <p className="text-gray-500 text-sm mb-6">Every tool chosen intentionally.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {stack.map(s => (
          <div key={s.name} className="bg-[#141414] border border-white/5 rounded-lg p-4 hover:border-[#FF6900] hover:-translate-y-1 transition-all">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="font-mono text-xs font-bold mb-1">{s.name}</div>
            <div className="text-xs text-gray-500">{s.role}</div>
          </div>
        ))}
      </div>

      {/* Design decisions */}
      <h3 className="text-2xl font-extrabold mb-6">Key Design Decisions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {decisions.map(d => (
          <div key={d.title} className="bg-[#141414] border border-white/5 rounded-lg p-5 hover:border-[#FF6900] transition-all">
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-2">{d.title}</div>
            <div className="text-sm text-gray-400 leading-relaxed">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}