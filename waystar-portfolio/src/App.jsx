import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Pipeline from './components/Pipeline'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Game from './components/Game'

export default function App() {
  const [active, setActive] = useState('home')

  const pages = {
    home: <Home setActive={setActive} />,
    pipeline: <Pipeline />,
    about: <About />,
    projects: <Projects />,
    resume: <Resume />,
    game: <Game />,
  }

  return (
    <div className="bg-[#080808] min-h-screen text-white">
      <Nav active={active} setActive={setActive} />
      <main className="pt-14">
        {pages[active]}
      </main>
    </div>
  )
}