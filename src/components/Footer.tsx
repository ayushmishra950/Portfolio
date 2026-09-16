import { navItems, profile, socials } from '../data/portfolio'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="nav__brand">
            <span className="nav__logo">{profile.initials}</span>
            <span className="nav__name">{profile.name}</span>
          </a>
          <p className="footer__tagline">{profile.role} · {profile.location}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <ul className="social-list">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                className="icon-btn"
                aria-label={social.label}
                {...(social.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon name={social.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="footer__top">
          Back to top <Icon name="arrowUp" size={16} />
        </a>
      </div>
    </footer>
  )
}
