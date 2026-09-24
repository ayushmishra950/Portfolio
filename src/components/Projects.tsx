import { useRef, useState, type CSSProperties } from 'react'
import { projects, type Project } from '../data/portfolio'
import { Icon } from './Icon'
import { ProjectMenu } from './ProjectMenu'
import { ProjectModal } from './ProjectModal'
import { Reveal } from './Reveal'
import { Section } from './Section'

const ALL = 'All'
const INITIAL_VISIBLE = 6
const MAX_CARD_FEATURES = 4
const MAX_CARD_TECH = 5
const COVER_HUES = [262, 190, 320, 150, 25, 215]

const hueFor = (project: Project) => COVER_HUES[Math.max(projects.indexOf(project), 0) % COVER_HUES.length]

export function Projects() {
  const [filter, setFilter] = useState(ALL)
  const [showAll, setShowAll] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  const categories = [ALL, ...new Set(projects.map((project) => project.category))]
  const filtered = filter === ALL ? projects : projects.filter((project) => project.category === filter)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE)

  const selectFilter = (category: string) => {
    setFilter(category)
    setShowAll(false)
  }

  const openDetails = (project: Project, returnFocusTo: HTMLElement | null) => {
    returnFocusRef.current = returnFocusTo
    setSelected(project)
  }

  const closeDetails = () => {
    setSelected(null)
    returnFocusRef.current?.focus()
  }

  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Featured"
      highlight="Projects"
      subtitle="Enterprise systems, social platforms and real-time web products I have designed and developed."
      alt
    >
      {categories.length > 2 && (
        <div className="filters" role="group" aria-label="Filter projects by category">
          {categories.map((category) => {
            const count =
              category === ALL ? projects.length : projects.filter((p) => p.category === category).length
            return (
              <button
                key={category}
                type="button"
                className={`filter-btn${filter === category ? ' is-active' : ''}`}
                onClick={() => selectFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
                <span className="filter-btn__count">{count}</span>
              </button>
            )
          })}
        </div>
      )}

      <ul className="projects-grid">
        {visible.map((project, i) => {
          const extraFeatures = project.features.length - MAX_CARD_FEATURES
          const extraTech = project.tech.length - MAX_CARD_TECH
          return (
            <li key={project.title}>
              <Reveal
                className="card card--hover project-card"
                delay={Math.min(i, 5) * 70}
                onClick={(e) =>
                  openDetails(project, e.currentTarget.querySelector<HTMLElement>('.project-card__title-btn'))
                }
              >
                <div className="project-card__cover" style={{ '--hue': hueFor(project) } as CSSProperties}>
                  <div className="project-card__badges">
                    <span className="pill">{project.category}</span>
                    {project.status && <span className="pill pill--status">{project.status}</span>}
                  </div>
                  <span className="project-card__cover-icon">
                    <Icon name={project.icon} size={30} />
                  </span>
                </div>

                <ProjectMenu project={project} onView={(trigger) => openDetails(project, trigger)} />

                <div className="project-card__body">
                  <h3 className="project-card__title">
                    {/* Real button so keyboard users can open details; its click bubbles to the card */}
                    <button type="button" className="project-card__title-btn">
                      {project.title}
                    </button>
                  </h3>
                  <p className="project-card__desc">{project.description}</p>

                  <ul className="feature-list">
                    {project.features.slice(0, MAX_CARD_FEATURES).map((feature) => (
                      <li key={feature}>
                        <Icon name="check" size={14} />
                        {feature}
                      </li>
                    ))}
                    {extraFeatures > 0 && <li className="project-card__more">+{extraFeatures} more</li>}
                  </ul>

                  <div className="project-card__footer">
                    <ul className="tag-list">
                      {project.tech.slice(0, MAX_CARD_TECH).map((tech) => (
                        <li key={tech} className="tag">
                          {tech}
                        </li>
                      ))}
                      {extraTech > 0 && <li className="tag">+{extraTech}</li>}
                    </ul>
                    <span className="project-card__cta" aria-hidden="true">
                      View details <Icon name="arrowRight" size={16} />
                    </span>
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>

      {filtered.length > INITIAL_VISIBLE && (
        <div className="section-action">
          <button type="button" className="btn btn--ghost" onClick={() => setShowAll((value) => !value)}>
            {showAll ? 'Show less' : `Show all ${filtered.length} projects`}
          </button>
        </div>
      )}

      <ProjectModal project={selected} hue={selected ? hueFor(selected) : COVER_HUES[0]} onClose={closeDetails} />
    </Section>
  )
}
