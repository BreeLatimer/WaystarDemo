export default function Resume() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-[#FF6900] text-xs tracking-widest uppercase mb-3">
              <div className="w-6 h-px bg-[#FF6900]" />
              Resume
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight">
              Bree <span className="text-[#FF6900]">Latimer</span>
            </h2>
          </div>
          <a
            href="/BreeLatimerWaystarResume.pdf"
            download
            className="bg-[#FF6900] text-black font-mono text-xs font-bold tracking-widest uppercase px-5 py-3 rounded hover:bg-[#cc5400] transition-all hover:-translate-y-0.5 mt-2"
          >
            ↓ Download PDF
          </a>
        </div>

        <div className="w-full rounded-xl overflow-hidden border border-[#FF6900]/20" style={{ height: '80vh' }}>
          <iframe
            src="/BreeLatimerWaystarResume.pdf"
            className="w-full h-full"
            title="Bree Latimer Resume"
          />
        </div>
      </div>
    </>
  )
}