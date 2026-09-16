import { skillGroups } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="Skills &"
      highlight="Technologies"
      subtitle="The languages, frameworks and tools I use to build complete products end-to-end."
      alt
    >
      <ul className="skills-grid">
        {skillGroups.map((group, i) => (
          <li key={group.title}>
            <Reveal className="card card--hover skill-card" delay={Math.min(i, 5) * 70}>
              <div className="skill-card__head">
                <span className="icon-tile">
                  <Icon name={group.icon} size={22} />
                </span>
                <div>
                  <h3 className="skill-card__title">{group.title}</h3>
                  <span className="skill-card__count">
                    {group.items.length} {group.items.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
              </div>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
