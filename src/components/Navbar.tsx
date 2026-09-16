import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/portfolio'
import { Icon } from './Icon'

export type Theme = 'light' | 'dark'

type NavbarProps = {
  theme: Theme
  onToggleTheme: () => void
}

const MOBILE_BREAKPOINT = 1080

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(navItems[0]?.id ?? '')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock page scroll and wire Escape / resize while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled || open ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={close} aria-label={`${profile.name} — home`}>
          <span className="nav__logo">{profile.initials}</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link${active === item.id ? ' is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a href="#contact" className="btn btn--primary btn--sm nav__cta">
            Hire Me
          </a>
          <button
            type="button"
            className="icon-btn nav__toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__mobile${open ? ' is-open' : ''}`}>
        <nav className="container nav__mobile-inner" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={close}
              className={`nav__mobile-link${active === item.id ? ' is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary" onClick={close}>
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}
