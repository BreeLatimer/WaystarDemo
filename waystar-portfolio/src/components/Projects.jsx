const projects = [
    {
      meta: 'Featured · 2026',
      title: 'WaystarDemo CI/CD Pipeline',
      desc: 'Full end-to-end pipeline from code commit to blue/green Kubernetes deployment. Built with GitHub Actions, Harness, Docker, and .NET 8. This very site runs through it, every update automatically builds, tests, containerizes, and deploys.',
      tags: ['.NET 8', 'Docker', 'GitHub Actions', 'Harness', 'Kubernetes', 'Blue/Green', 'xUnit'],
      link: 'https://github.com/BreeLatimer/WaystarDemo',
    },
    {
      meta: 'Idaho State Controller · 2023–2025',
      title: 'SDLC Modernization & Atlassian Migration',
      desc: 'Led a year-long transformation of Idaho\'s software development lifecycle from ITIL to Agile/DevOps. Migrated development and project organization tools from ServiceNow to Atlassian Cloud.',
      tags: ['Atlassian Cloud', 'Jira', 'Agile', 'ITIL', 'Change Mgmt', 'ServiceNow'],
    },
    {
        meta: 'Boise State Senior Design · 2023',
        title: 'Totalled: Expense Breakdown Tool',
        desc: 'Built with a team of 4 for the Boise State Mechanical & Biomedical Engineering Department. A Kotlin desktop app that uses Excel workbooks of spending and team data, analyzes and groups expenses, and generates team-based invoice breakdowns for project sponsors.',
        tags: ['Kotlin', 'Gradle', 'Desktop App', 'Excel Automation', 'GitHub Actions', 'CI/CD'],
        link: 'https://github.com/cs481-ekh/s23-totalled',
      },
    {
      meta: 'SEL · 2021–2023',
      title: 'Python Automation Tool',
      desc: 'Built an automation tool that saved 55+ hours per month. Deployed as part of production software on critical electrical infrastructure used globally.',
      tags: ['Python', 'Automation', 'C#/.NET', 'NUnit', 'Critical Infrastructure'],
    },
  ]
  
  export default function Projects() {
    return (
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="flex items-center gap-3 font-mono text-[#FF6900] text-xs tracking-widest uppercase mb-4">
          <div className="w-6 h-px bg-[#FF6900]" />
          Projects
        </div>
        <h2 className="text-5xl font-extrabold tracking-tight mb-12">
          What I've <span className="text-[#FF6900]">built.</span>
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-24">
          {projects.map(p => (
            <div key={p.title} className="bg-[#141414] border border-white/5 rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:border-[#FF6900]/50 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF6900] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-2">{p.meta}</div>
              <div className="text-lg font-bold mb-3">{p.title}</div>
              <div className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">{p.desc}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="font-mono text-[10px] text-gray-500 bg-white/3 border border-white/8 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-[#FF6900] hover:underline">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }