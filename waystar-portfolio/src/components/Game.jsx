import { useState, useEffect, useRef } from 'react'

const CORRECT_ORDER = [
  { id: 'commit',   emoji: '💻', name: 'Code Push' },
  { id: 'build',    emoji: '⚙️',  name: 'Build' },
  { id: 'test',     emoji: '🧪', name: 'Test' },
  { id: 'docker',   emoji: '🐳', name: 'Docker' },
  { id: 'registry', emoji: '📦', name: 'Registry' },
  { id: 'harness',  emoji: '🚀', name: 'Harness CD' },
  { id: 'k8s',      emoji: '☸️',  name: 'Kubernetes' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function launchConfetti() {
  const colors = ['#FF6900', '#fff', '#4ade80', '#facc15', '#f87171', '#60a5fa']
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div')
    piece.style.cssText = `
      position:fixed;
      left:${Math.random() * 100}vw;
      top:-10px;
      width:${Math.random() * 8 + 6}px;
      height:${Math.random() * 8 + 6}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
      pointer-events:none;
      z-index:9999;
      animation:confettiFall ${Math.random() * 2 + 2}s ${Math.random() * 0.5}s linear forwards;
    `
    document.body.appendChild(piece)
    piece.addEventListener('animationend', () => piece.remove())
  }
}

export default function Game() {
  const [bank, setBank] = useState(() => shuffle(CORRECT_ORDER))
  const [pipeline, setPipeline] = useState([])
  const [selected, setSelected] = useState(null)
  const [selectedZone, setSelectedZone] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [cardStates, setCardStates] = useState({})
  const [attempts, setAttempts] = useState(0)
  const [wins, setWins] = useState(0)

  const clearFeedback = () => {
    setFeedback(null)
    setCardStates({})
  }

  const handleCardClick = (id, zone) => {
    clearFeedback()
    if (selected === id) {
      setSelected(null)
      setSelectedZone(null)
      return
    }
    if (selected && selectedZone !== zone) {
      // Move selected card to this zone
      if (zone === 'pipeline') {
        const card = bank.find(c => c.id === selected) || pipeline.find(c => c.id === selected)
        setBank(prev => prev.filter(c => c.id !== selected))
        setPipeline(prev => prev.filter(c => c.id !== selected).concat(card))
      } else {
        const card = pipeline.find(c => c.id === selected) || bank.find(c => c.id === selected)
        setPipeline(prev => prev.filter(c => c.id !== selected))
        setBank(prev => prev.filter(c => c.id !== selected).concat(card))
      }
      setSelected(null)
      setSelectedZone(null)
      return
    }
    setSelected(id)
    setSelectedZone(zone)
  }

  const handleZoneClick = (zone) => {
    if (!selected) return
    if (selectedZone === zone) {
      setSelected(null)
      setSelectedZone(null)
      return
    }
    const srcList = selectedZone === 'bank' ? bank : pipeline
    const card = srcList.find(c => c.id === selected)
    if (zone === 'pipeline') {
      setBank(prev => prev.filter(c => c.id !== selected))
      setPipeline(prev => [...prev, card])
    } else {
      setPipeline(prev => prev.filter(c => c.id !== selected))
      setBank(prev => [...prev, card])
    }
    setSelected(null)
    setSelectedZone(null)
  }

  const checkPipeline = () => {
    if (pipeline.length !== CORRECT_ORDER.length) {
      setFeedback({ msg: `Place all ${CORRECT_ORDER.length} stages in the pipeline first!`, type: 'error' })
      return
    }
    setAttempts(a => a + 1)
    const states = {}
    let allCorrect = true
    pipeline.forEach((card, i) => {
      if (card.id === CORRECT_ORDER[i].id) {
        states[card.id] = 'correct'
      } else {
        states[card.id] = 'wrong'
        allCorrect = false
      }
    })
    setCardStates(states)
    if (allCorrect) {
      setWins(w => w + 1)
      setFeedback({ msg: '✓ Pipeline passing! Deployment successful. 🎉', type: 'success' })
      launchConfetti()
    } else {
      setFeedback({ msg: '✗ Build failed. Check your stage order and try again.', type: 'error' })
    }
  }

  const resetGame = () => {
    setBank(shuffle(CORRECT_ORDER))
    setPipeline([])
    setSelected(null)
    setSelectedZone(null)
    clearFeedback()
  }

  const cardClass = (id, zone) => {
    const state = cardStates[id]
    const isSelected = selected === id
    let base = 'flex flex-col items-center gap-1 bg-[#1a1a1a] border rounded-lg px-3 py-3 min-w-[88px] cursor-pointer transition-all duration-200 '
    if (isSelected) return base + 'border-[#FF6900] bg-[#FF6900]/10 shadow-[0_0_0_2px_#FF6900] -translate-y-1 scale-105'
    if (state === 'correct') return base + 'border-green-400 bg-green-400/10'
    if (state === 'wrong') return base + 'border-red-400 bg-red-400/10 animate-bounce'
    return base + 'border-white/10 hover:border-[#FF6900] hover:-translate-y-0.5'
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center">
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>

      <div className="flex items-center justify-center gap-3 font-mono text-[#FF6900] text-xs tracking-widest uppercase mb-4">
        <div className="w-6 h-px bg-[#FF6900]"></div>
        Mini Game
      </div>
      <h2 className="text-5xl font-extrabold tracking-tight mb-2">
        Build the <span className="text-[#FF6900]">Pipeline</span> 🚀
      </h2>
      <p className="font-mono text-sm text-gray-400 mb-1">Arrange the stages in the correct order to deploy the app.</p>
      <p className="font-mono text-xs text-gray-600 mb-8">Tap a card to select it · Tap the other zone or another card to move it</p>

      {/* Bank */}
      <div className="font-mono text-xs text-gray-500 uppercase tracking-widest text-left mb-2">Stage bank:</div>
      <div
        className="flex flex-wrap gap-2 justify-center min-h-[90px] p-4 bg-[#141414] border-2 border-dashed border-white/10 rounded-xl mb-4 cursor-pointer"
        onClick={() => handleZoneClick('bank')}
      >
        {bank.length === 0
          ? <span className="font-mono text-xs text-gray-600 self-center">Empty</span>
          : bank.map(card => (
            <div key={card.id} className={cardClass(card.id, 'bank')} onClick={e => { e.stopPropagation(); handleCardClick(card.id, 'bank') }}>
              <span className="text-2xl">{card.emoji}</span>
              <span className="font-mono text-[10px] text-gray-300 uppercase tracking-wide">{card.name}</span>
            </div>
          ))
        }
      </div>

      {/* Pipeline */}
      <div className="font-mono text-xs text-[#FF6900] uppercase tracking-widest text-left mb-2">→ Your pipeline (in order):</div>
      <div
        className="flex flex-wrap gap-2 justify-center min-h-[90px] p-4 bg-[#FF6900]/5 border-2 border-dashed border-[#FF6900]/25 rounded-xl mb-4 cursor-pointer"
        onClick={() => handleZoneClick('pipeline')}
      >
        {pipeline.length === 0
          ? <span className="font-mono text-xs text-gray-600 self-center">Drop stages here</span>
          : pipeline.map(card => (
            <div key={card.id} className={cardClass(card.id, 'pipeline')} onClick={e => { e.stopPropagation(); handleCardClick(card.id, 'pipeline') }}>
              <span className="text-2xl">{card.emoji}</span>
              <span className="font-mono text-[10px] text-gray-300 uppercase tracking-wide">{card.name}</span>
            </div>
          ))
        }
      </div>

      {/* Feedback */}
      <div className={`font-mono text-sm min-h-6 mb-4 ${feedback?.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
        {feedback?.msg}
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-center mb-4">
        <button onClick={checkPipeline} className="bg-[#FF6900] text-black font-mono text-xs font-bold tracking-widest uppercase px-6 py-3 rounded hover:bg-[#cc5400] transition-all hover:-translate-y-0.5">
          🚀 Deploy
        </button>
        <button onClick={resetGame} className="bg-transparent text-white font-mono text-xs tracking-widest uppercase px-6 py-3 rounded border border-white/20 hover:border-[#FF6900] hover:text-[#FF6900] transition-all">
          ↺ Shuffle
        </button>
      </div>

      <div className="font-mono text-xs text-gray-600">
        Attempts: <span className="text-[#FF6900]">{attempts}</span> · Wins: <span className="text-[#FF6900]">{wins}</span>
      </div>
    </div>
  )
}