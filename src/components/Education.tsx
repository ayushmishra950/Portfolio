import { education } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Learning"
      title="Education &"
      highlight="Training"
      subtitle="The academic foundation behind my development work."
    >
      <ul className="edu-grid">
        {education.map((item, i) => (
          <li key={item.degree}>
            <Reveal className="card card--hover edu-card" delay={Math.min(i, 3) * 80}>
              <span className="icon-tile icon-tile--gradient">
                <Icon name="graduation" size={24} />
              </span>
              <div className="edu-card__body">
                <h3 className="edu-card__degree">{item.degree}</h3>
                <p className="edu-card__inst">{item.institution}</p>
                {item.description && <p className="edu-card__desc">{item.description}</p>}
                {item.period && (
                  <span className="period edu-card__period">
                    <Icon name="calendar" size={14} /> {item.period}
                  </span>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
