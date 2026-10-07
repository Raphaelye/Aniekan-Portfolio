import type { ReactNode } from 'react'
import marker from '../../assets/logo_marker.png'

type SectionHeaderProps = {
  id: string
  eyebrow: string
  title: ReactNode
  description?: string
  className?: string
  align?: 'left' | 'center'
  titleClassName?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  className = 'mb-0 lg:mb-25',
  align = 'center',
  titleClassName = 'text-3xl md:text-5xl lg:text-6xl',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className={`flex min-w-0 flex-col gap-1 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
        <p className="flex items-center gap-px font-body text-xs font-semibold uppercase text-accent-alt md:text-sm">
          <img src={marker} alt="" width="1351" height="1164" className="size-6 shrink-0 object-contain" />
          {eyebrow}
        </p>
        <h2 id={id} className={`font-display font-semibold tracking-[-.02em] text-text-primary ${titleClassName}`}>
          {title}
        </h2>
      </div>
      
    </div>
  )
}
