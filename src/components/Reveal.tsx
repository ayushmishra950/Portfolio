import { useEffect, useRef, type CSSProperties, type MouseEventHandler, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  onClick?: MouseEventHandler<HTMLDivElement>
}

/** Fades its children in once they scroll into view. */
export function Reveal({ children, className = '', delay = 0, onClick }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={style} onClick={onClick}>
      {children}
    </div>
  )
}
