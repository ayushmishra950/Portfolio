import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  highlight?: string
  subtitle?: string
  alt?: boolean
  children: ReactNode
}

export function Section({ id, eyebrow, title, highlight, subtitle, alt, children }: SectionProps) {
  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        <Reveal className="section-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-gradient">{highlight}</span>
              </>
            )}
          </h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
