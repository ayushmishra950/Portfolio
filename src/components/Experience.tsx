import { experiences } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Professional"
      highlight="Experience"
      subtitle="1.8+ years building production web applications, APIs and dashboards."
    >
      <ol className="timeline">
        {experiences.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="timeline__item">
            <span className={`timeline__dot${job.current ? ' timeline__dot--current' : ''}`} aria-hidden="true" />
            <Reveal className="card card--hover exp-card" delay={Math.min(i, 3) * 80}>
              <div className="exp-card__head">
                <div className="exp-card__title-wrap">
                  <h3 className="exp-card__role">{job.role}</h3>
                  <p className="exp-card__company">
                    <Icon name="briefcase" size={16} /> {job.company}
                    {job.location && <span className="exp-card__location">· {job.location}</span>}
                  </p>
                </div>
                <div className="exp-card__badges">
                  {job.current && <span className="badge-current">Current</span>}
                  <span className="period">
                    <Icon name="calendar" size={14} /> {job.period}
                  </span>
                </div>
              </div>

              <ul className="check-list">
                {job.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {job.tags && job.tags.length > 0 && (
                <ul className="tag-list">
                  {job.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
