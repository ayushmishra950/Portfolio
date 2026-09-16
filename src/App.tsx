import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar, type Theme } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  // index.html sets the initial theme before paint to avoid a flash
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="bg-decor" aria-hidden="true">
        <div className="bg-decor__grid" />
        <div className="bg-decor__blob bg-decor__blob--1" />
        <div className="bg-decor__blob bg-decor__blob--2" />
        <div className="bg-decor__blob bg-decor__blob--3" />
      </div>

      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
