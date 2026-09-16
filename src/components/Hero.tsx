import { Fragment, useEffect, useState, type CSSProperties } from 'react'
import { codeSnippet, heroHighlights, profile, socials, type CodeValue } from '../data/portfolio'
import { Icon } from './Icon'

function CodeToken({ value }: { value: CodeValue }) {
  if (typeof value === 'boolean' || typeof value === 'number') {
    return <span className="tok-bool">{String(value)}</span>
  }
  if (Array.isArray(value)) {
    return (
      <>
        <span className="tok-punc">[</span>
        {value.map((item, i) => (
          <Fragment key={`${item}-${i}`}>
            <span className="tok-str">"{item}"</span>
            {i < value.length - 1 && <span className="tok-punc">, </span>}
          </Fragment>
        ))}
        <span className="tok-punc">]</span>
      </>
    )
  }
  return <span className="tok-str">"{value}"</span>
}

export function Hero() {
  const roles = profile.roles
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (roles.length < 2) return
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800)
    return () => window.clearInterval(id)
  }, [roles.length])

  const [firstName, ...lastName] = profile.name.split(' ')
  const lastLine = codeSnippet.entries.length + 2

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          {profile.availability && (
            <div className="status-badge">
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </div>
          )}
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__title">
            {firstName} <span className="text-gradient">{lastName.join(' ')}</span>
          </h1>
          <p className="hero__role">
            <span className="hero__role-prefix" aria-hidden="true">
              &gt;
            </span>
            <span key={roleIndex} className="hero__role-text">
              {roles[roleIndex]}
            </span>
          </p>
          <p className="hero__summary">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects <Icon name="arrowRight" size={18} />
            </a>
            <a href={profile.resumeUrl} className="btn btn--ghost" download>
              <Icon name="download" size={18} /> Download Resume
            </a>
          </div>

          <div className="hero__meta">
            <ul className="social-list">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    className="icon-btn"
                    aria-label={social.label}
                    title={social.label}
                    {...(social.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
            <span className="hero__location">
              <Icon name="location" size={16} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="code-window">
            <div className="code-window__bar">
              <span className="code-window__dot code-window__dot--red" />
              <span className="code-window__dot code-window__dot--yellow" />
              <span className="code-window__dot code-window__dot--green" />
              <span className="code-window__file">{codeSnippet.fileName}</span>
            </div>
            <pre className="code-window__body">
              <code>
                <span className="code-line">
                  <span className="code-line__num">1</span>
                  <span className="tok-kw">const</span> <span className="tok-var">{codeSnippet.variable}</span>{' '}
                  <span className="tok-punc">= {'{'}</span>
                </span>
                {codeSnippet.entries.map(([key, value], i) => (
                  <span className="code-line" key={key}>
                    <span className="code-line__num">{i + 2}</span>
                    {'  '}
                    <span className="tok-key">{key}</span>
                    <span className="tok-punc">: </span>
                    <CodeToken value={value} />
                    <span className="tok-punc">,</span>
                  </span>
                ))}
                <span className="code-line">
                  <span className="code-line__num">{lastLine}</span>
                  <span className="tok-punc">{'};'}</span>
                </span>
              </code>
            </pre>
          </div>

          {heroHighlights.length > 0 && (
            <ul className="hero__highlights">
              {heroHighlights.map((item, i) => (
                <li
                  key={item.title}
                  className="float-card"
                  style={{ '--float-delay': `${i * -2}s` } as CSSProperties}
                >
                  <span className="float-card__icon">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span>
                    <span className="float-card__title">{item.title}</span>
                    <span className="float-card__subtitle">{item.subtitle}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
