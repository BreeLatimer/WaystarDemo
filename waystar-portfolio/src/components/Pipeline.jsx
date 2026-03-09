const otherProjects = [
  {
    meta: 'Idaho State Controller · 2023–2025',
    title: 'SDLC Modernization & Atlassian Migration',
    desc: 'Led a year-long transformation of Idaho\'s software development lifecycle from ITIL to Agile/DevOps. Migrated from ServiceNow to Atlassian Cloud. 100+ forms, 300+ users, 4 teams, cross-functional stakeholder alignment.',
    tags: ['Atlassian Cloud', 'Jira', 'Agile', 'ITIL', 'Change Mgmt', 'ServiceNow'],
  },
  {
    meta: 'SEL · 2021–2023',
    title: 'Python Automation Tool',
    desc: 'Built automation that saved 55+ hours per month — recovering a full work week every month. Deployed as part of production software on critical electrical infrastructure used globally.',
    tags: ['Python', 'Automation', 'C#/.NET', 'NUnit', 'Critical Infrastructure'],
  },
  {
    meta: 'Boise State Senior Design · 2023',
    title: 'Totalled — Expense Breakdown Tool',
    desc: 'Built with a team of 4 for the Boise State Mechanical & Biomedical Engineering Department. A Kotlin desktop app that ingests Excel workbooks of spending and team data, analyzes and groups expenses, and generates team-based invoice breakdowns for project sponsors.',
    tags: ['Kotlin', 'Gradle', 'Desktop App', 'Excel Automation', 'GitHub Actions', 'CI/CD'],
    link: 'https://github.com/cs481-ekh/s23-totalled',
  },
]

const techStack = [
  { layer: 'API', tech: 'ASP.NET Core Web API (.NET 8)' },
  { layer: 'Testing', tech: 'xUnit' },
  { layer: 'Containerization', tech: 'Docker (multi-stage build)' },
  { layer: 'Source Control', tech: 'GitHub' },
  { layer: 'CI Pipeline', tech: 'GitHub Actions' },
  { layer: 'Container Registry', tech: 'GitHub Container Registry (GHCR)' },
  { layer: 'CD Pipeline', tech: 'Harness' },
  { layer: 'Orchestration', tech: 'Kubernetes (Docker Desktop)' },
  { layer: 'Deploy Strategy', tech: 'Blue/Green' },
]

const decisions = [
  {
    title: 'Multi-stage Dockerfile',
    desc: 'Separates build and runtime environments, keeping the final image lean and production-ready. The build stage uses the full .NET SDK, while the runtime stage uses only the ASP.NET runtime — no build tools in production.',
  },
  {
    title: 'Docker Layer Caching',
    desc: 'Copies .csproj and restores dependencies before copying source code. The expensive restore step only reruns when dependencies actually change, not on every code change. This makes pipeline runs significantly faster.',
  },
  {
    title: 'Pipeline Gate',
    desc: 'The Docker build job has a needs: build-and-test dependency. If any test fails, the pipeline stops completely. A Docker image is never built from broken code — broken code never reaches the registry.',
  },
  {
    title: 'Blue/Green Deployment',
    desc: 'Harness maintains two identical environments. New versions deploy to the inactive environment first, then Harness swaps the Kubernetes service selectors instantly — achieving zero-downtime deployments with immediate rollback capability.',
  },
]

const learned = [
  'Structuring CI pipelines with meaningful job dependencies and fail-fast gates',
  'Optimizing Docker builds for caching and image size',
  'Connecting a container registry to a CD platform',
  'Configuring Kubernetes manifests for real deployments',
  'Executing a blue/green deployment strategy with zero downtime',
]

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20 min-h-screen">
      <div className="flex items-center gap-3 font-mono text-[#FF6900] text-xs tracking-widest uppercase mb-4">
        <div className="w-6 h-px bg-[#FF6900]"></div>
        Pipeline Project
      </div>
      <h2 className="text-5xl font-extrabold tracking-tight mb-16">
        What I've <span className="text-[#FF6900]">built.</span>
      </h2>

      {/* Featured Project */}
      <div className="border border-[#FF6900]/30 rounded-xl overflow-hidden mb-16">

        {/* Header */}
        <div className="bg-[#FF6900]/8 border-b border-[#FF6900]/20 px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest">Featured · 2026</div>
            <div className="flex items-center gap-2 font-mono text-xs text-green-400">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              Pipeline passing
            </div>
          </div>
          <h3 className="text-2xl font-extrabold mb-2">WaystarDemo CI/CD Pipeline</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            A production-style CI/CD pipeline built with .NET 8, Docker, GitHub Actions, and Harness — 
            showcasing a complete path from code commit to blue/green deployment on Kubernetes. 
            This portfolio site is deployed through the same pipeline it documents.
          </p>
          <a
            href="https://github.com/BreeLatimer/WaystarDemo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-mono text-xs text-[#FF6900] hover:underline">
  
            View on GitHub →
          </a>
        </div>

        <div className="p-8 space-y-10">

          {/* Pipeline Architecture */}
          <div>
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-4">Pipeline Architecture</div>
            <div className="bg-[#090909] border border-white/5 rounded-lg p-4 font-mono text-xs text-gray-400 overflow-x-auto mb-6">
              Code Push → GitHub Actions → Build & Test → Docker Image → GHCR → Harness → Kubernetes (Blue/Green)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#141414] border border-white/5 rounded-lg p-5">
                <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-3">CI Pipeline (GitHub Actions)</div>
                <p className="text-xs text-gray-500 mb-3">On every push to main:</p>
                <ol className="space-y-2">
                  {[
                    'Build & Test — Restores dependencies, compiles, and runs xUnit tests',
                    'Docker Build — Only runs if tests pass (job dependency gate)',
                    'Push to Registry — Publishes image to GitHub Container Registry',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                      <span className="text-[#FF6900] font-mono text-xs flex-shrink-0">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-[#141414] border border-white/5 rounded-lg p-5">
                <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-3">CD Pipeline (Harness)</div>
                <p className="text-xs text-gray-500 mb-3">On trigger:</p>
                <ol className="space-y-2">
                  {[
                    'Pulls latest image from GHCR',
                    'Deploys to Kubernetes using Blue/Green strategy',
                    'Swaps service selectors for zero-downtime cutover',
                    'Old environment remains available for instant rollback',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                      <span className="text-[#FF6900] font-mono text-xs flex-shrink-0">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-4">Tech Stack</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left font-mono text-xs text-gray-500 uppercase tracking-widest pb-3 pr-8">Layer</th>
                    <th className="text-left font-mono text-xs text-gray-500 uppercase tracking-widest pb-3">Technology</th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-none">
                      <td className="py-3 pr-8 font-mono text-xs text-[#FF6900]">{row.layer}</td>
                      <td className="py-3 text-gray-300 text-sm">{row.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Project Structure */}
          <div>
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-4">Project Structure</div>
            <div className="bg-[#090909] border border-white/5 rounded-lg p-5 font-mono text-xs text-gray-400 leading-relaxed overflow-x-auto">
              <div>WaystarDemoV2/</div>
              <div className="ml-4">├── .github/</div>
              <div className="ml-8">└── workflows/</div>
              <div className="ml-12">└── <span className="text-[#FF6900]">pipeline.yml</span> <span className="text-gray-600"># GitHub Actions CI pipeline</span></div>
              <div className="ml-4">├── WaystarDemo/</div>
              <div className="ml-8">├── Controllers/</div>
              <div className="ml-12">└── <span className="text-[#FF6900]">WeatherForecastController.cs</span></div>
              <div className="ml-8">├── <span className="text-[#FF6900]">Dockerfile</span> <span className="text-gray-600"># Multi-stage Docker build</span></div>
              <div className="ml-8">├── Program.cs</div>
              <div className="ml-8">└── WaystarDemo.csproj</div>
              <div className="ml-4">├── WaystarDemo.Tests/</div>
              <div className="ml-8">├── <span className="text-[#FF6900]">UnitTest1.cs</span> <span className="text-gray-600"># xUnit tests</span></div>
              <div className="ml-8">└── WaystarDemo.Tests.csproj</div>
              <div className="ml-4">├── k8s/</div>
              <div className="ml-8">├── <span className="text-[#FF6900]">deployment.yaml</span> <span className="text-gray-600"># Kubernetes Deployment manifest</span></div>
              <div className="ml-8">└── <span className="text-[#FF6900]">service.yaml</span> <span className="text-gray-600"># Kubernetes Service manifest</span></div>
              <div className="ml-4">└── WaystarDemo.sln</div>
            </div>
          </div>

          {/* Key Design Decisions */}
          <div>
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-4">Key Design Decisions</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {decisions.map(d => (
                <div key={d.title} className="bg-[#141414] border border-white/5 rounded-lg p-5 hover:border-[#FF6900]/40 transition-all">
                  <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-2">{d.title}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Running Locally */}
          <div>
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-4">Running Locally</div>
            <div className="bg-[#090909] border border-white/5 rounded-lg overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#111] border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
              </div>
              <div className="p-5 font-mono text-xs text-gray-400 leading-loose">
                <div className="text-gray-600"># Run the API</div>
                <div><span className="text-[#FF6900]">$</span> cd WaystarDemo && dotnet run</div>
                <div className="mt-3 text-gray-600"># Run tests</div>
                <div><span className="text-[#FF6900]">$</span> dotnet test WaystarDemo.Tests/WaystarDemo.Tests.csproj</div>
                <div className="mt-3 text-gray-600"># Build Docker image</div>
                <div><span className="text-[#FF6900]">$</span> docker build -t waystar-demo .</div>
                <div className="mt-3 text-gray-600"># Run container</div>
                <div><span className="text-[#FF6900]">$</span> docker run -p 5004:8080 waystar-demo</div>
                <div className="mt-4 text-gray-600">API available at: http://localhost:5004/weatherforecast</div>
              </div>
            </div>
          </div>

          {/* What I Learned */}
          <div>
            <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest mb-4">What I Learned</div>
            <ul className="space-y-2">
              {learned.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                  <span className="text-[#FF6900] font-mono text-xs mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}