const timeline = [
    { year: '2019–2023', title: 'B.S. Computer Science — Boise State', detail: 'KKPsi elected leader, marching band member, and Computer Science graduate!' },
    { year: '2021–2023', title: 'Software Engineer Intern — SEL', detail: 'Python automation saving 55+ hrs/month. C#/.NET experience on critical electrical infrastructure.' },
    { year: '2023–2025', title: 'DevOps Lead — Idaho State Controller', detail: 'Led SDLC modernization, Atlassian Cloud integratsion, and an Agile transformation, changing how the state does software development on their payroll system.' },
    { year: '2024', title: 'Moved to Louisville, KY', detail: 'New city and new beginnings!' },
    { year: '2026', title: 'M.S. Computer Science — University of Louisville', detail: 'Admitted. First generation graduate student. Speed School of Engineering.' },
    { year: 'Next', title: 'Cloud Architect', detail: 'The destination. Working toward it every day.', muted: true },
  ]
  
  const skills = [
    'C# / .NET', 'Python', 'JavaScript', 'SQL', 'Docker', 'Kubernetes',
    'GitHub Actions', 'Harness', 'Azure', 'AWS (studying)', 'Linux',
    'Jira', 'Atlassian Cloud', 'Agile / DevOps', 'ITIL', 'xUnit / NUnit',
  ]
  
  export default function About() {
    return (
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
  
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 font-mono text-[#FF6900] text-xs tracking-widest uppercase mb-4">
              <div className="w-6 h-px bg-[#FF6900]" />
              About
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Software Engineer and DevOps Leader
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              I specialize in DevOps practices
              and designing systems that help teams ship faster and more reliably!
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              I led a year-long SDLC modernization for the State of Idaho, built an automation script at my internship, saving
              55+ hours per month, and recently built this entire CI/CD pipeline from scratch.
              I'm pursuing my M.S. in Computer Science at the University of Louisville. I am
              the first person in my family to attend graduate school.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I'm an advocate, a servant leader, and someone who
              genuinely loves the craft of engineering.
            </p>
  
            <div className="border-t border-[#FF6900]/20 pt-6">
              <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-3">Skills</div>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="font-mono text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded hover:border-[#FF6900] hover:text-[#FF6900] transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
  
          {/* Timeline */}
          <div>
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-6">Timeline</div>
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${item.muted ? 'bg-gray-600' : 'bg-[#FF6900]'}`} />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-[#FF6900]/15 mt-1" />}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#FF6900] mb-1">{item.year}</div>
                    <div className="text-sm font-bold mb-1">{item.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </div>
    )
  }