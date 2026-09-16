import { useEffect, useId, useRef, type CSSProperties } from 'react'
import type { Project } from '../data/portfolio'
import { Icon } from './Icon'

type ProjectModalProps = {
  project: Project | null
  hue: number
  onClose: () => void
}

/** Full project details, rendered in a native <dialog> (focus trap, Esc and top layer for free). */
export function ProjectModal({ project, hue, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  useEffect(() => {
    document.body.classList.toggle('modal-open', project !== null)
    return () => document.body.classList.remove('modal-open')
  }, [project])

  // Every close path (X, Close, backdrop, Esc) goes through here, so parent state
  // never depends on the native `close` event being delivered.
  const close = () => {
    if (dialogRef.current?.open) dialogRef.current.close()
    onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby={titleId}
      // Handle Esc ourselves: browsers may skip the native cancel without recent user activation
      onCancel={(e) => {
        e.preventDefault()
        close()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          close()
        }
      }}
      // A click whose target is the dialog itself landed on the backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
    >
      {project && (
        <div className="project-modal__panel">
          <button
            type="button"
            className="project-modal__close"
            onClick={close}
            aria-label="Close project details"
            autoFocus
          >
            <Icon name="close" size={18} />
          </button>

          <div className="project-modal__scroll">
            <div className="project-card__cover project-modal__cover" style={{ '--hue': hue } as CSSProperties}>
              <div className="project-card__badges">
                <span className="pill">{project.category}</span>
                {project.status && <span className="pill pill--status">{project.status}</span>}
              </div>
              <span className="project-card__cover-icon">
                <Icon name={project.icon} size={34} />
              </span>
            </div>

            <div className="project-modal__body">
              <h3 id={titleId} className="project-modal__title">
                {project.title}
              </h3>
              <p className="project-modal__desc">{project.description}</p>

              <h4 className="project-modal__heading">Key Features</h4>
              <ul className="project-modal__features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="project-modal__heading">Tech Stack</h4>
              <ul className="tag-list">
                {project.tech.map((tech) => (
                  <li key={tech} className="tag tag--accent">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-modal__footer">
            <button type="button" className="btn btn--ghost" onClick={close}>
              Close
            </button>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Open Project <Icon name="external" size={16} />
              </a>
            ) : (
              <span className="btn btn--ghost is-disabled" aria-disabled="true">
                Live link coming soon
              </span>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}
