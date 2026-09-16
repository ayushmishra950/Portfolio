import { profile, stats, strengths } from '../data/portfolio'
import type { IconName } from './Icon'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

const infoItems: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'user', label: 'Role', value: profile.role },
  { icon: 'briefcase', label: 'Experience', value: profile.experience },
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'location', label: 'Location', value: profile.location },
]

export function About() {
  const [lead, ...paragraphs] = profile.about

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Turning ideas into"
      highlight="real products"
      subtitle="A quick look at who I am, what I do and how I work."
    >
      <div className="about__grid">
        <Reveal className="about__text">
          {lead && <p className="about__lead">{lead}</p>}
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}

          <ul className="info-list">
            {infoItems.map((item) => {
              const content = (
                <>
                  <span className="info-item__icon">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span className="info-item__text">
                    <span className="info-item__label">{item.label}</span>
                    <span className="info-item__value">{item.value}</span>
                  </span>
                </>
              )
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="info-item info-item--link">
                      {content}
                    </a>
                  ) : (
                    <div className="info-item">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        <div className="about__side">
          <ul className="stats-grid">
            {stats.map((stat, i) => (
              <li key={stat.label}>
                <Reveal className="card stat" delay={i * 80}>
                  <span className="stat__value text-gradient">{stat.value}</span>
                  <span className="stat__label">{stat.label}</span>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="card strengths" delay={160}>
            <h3 className="card-heading">
              <Icon name="star" size={18} /> Core Strengths
            </h3>
            <ul className="tag-list">
              {strengths.map((strength) => (
                <li key={strength} className="tag tag--accent">
                  {strength}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
