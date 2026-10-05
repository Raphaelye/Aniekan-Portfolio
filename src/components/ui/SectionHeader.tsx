import type { ReactNode } from 'react'
import marker from '../../assets/logo_marker.png'

type SectionHeaderProps = {
  id: string
  eyebrow: string
  title: ReactNode
  description?: string
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  className = 'mb-0 lg:mb-25',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="min-w-0 justify-center items-center flex flex-col gap-1">
        <p className="flex items-center gap-px font-body text-xs font-semibold uppercase text-accent-alt md:text-sm">
          <img src={marker} alt="" width="1351" height="1164" className="size-6 shrink-0 object-contain" />
          {eyebrow}
        </p>
        <h2 id={id} className="font-display text-2xl md:text-4xl lg:text-5xl  font-semibold tracking-[-.02em] text-text-primary">
          {title}
        </h2>
      </div>
      
    </div>
  )
}
