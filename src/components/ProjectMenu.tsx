import { useEffect, useId, useRef, useState } from 'react'
import type { Project } from '../data/portfolio'
import { Icon } from './Icon'

type ProjectMenuProps = {
  project: Project
  onView: (returnFocusTo: HTMLElement | null) => void
}

const ITEM_SELECTOR = '[role="menuitem"]:not([aria-disabled="true"])'

/** Three-dot options menu shown on each project card. */
export function ProjectMenu({ project, onView }: ProjectMenuProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    rootRef.current?.querySelector<HTMLElement>(ITEM_SELECTOR)?.focus()

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    // Clicks inside the menu must not trigger the card's own click handler
    <div
      ref={rootRef}
      className={`project-menu${open ? ' is-open' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        ref={triggerRef}
        type="button"
        className="project-menu__trigger"
        aria-label={`Options for ${project.title}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name="moreVertical" size={18} />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label={`${project.title} options`}
          className="project-menu__list"
          onKeyDown={(e) => {
            if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
            e.preventDefault()
            const items = [...e.currentTarget.querySelectorAll<HTMLElement>(ITEM_SELECTOR)]
            const current = items.indexOf(document.activeElement as HTMLElement)
            const step = e.key === 'ArrowDown' ? 1 : -1
            items[(current + step + items.length) % items.length]?.focus()
          }}
        >
          <button
            type="button"
            role="menuitem"
            className="project-menu__item"
            onClick={() => {
              setOpen(false)
              onView(triggerRef.current)
            }}
          >
            <Icon name="eye" size={16} />
            View Details
          </button>

          {project.liveUrl ? (
            <a
              role="menuitem"
              className="project-menu__item"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <Icon name="external" size={16} />
              Open Project
            </a>
          ) : (
            <span role="menuitem" aria-disabled="true" className="project-menu__item is-disabled">
              <Icon name="external" size={16} />
              Live link coming soon
            </span>
          )}
        </div>
      )}
    </div>
  )
}
