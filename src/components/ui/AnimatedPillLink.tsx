import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, type To } from 'react-router-dom'

type AnimatedPillLinkProps = {
  children: ReactNode
  className?: string
  to?: To
  href?: string
  external?: boolean
  size?: 'default' | 'compact'
  tone?: 'accent' | 'dark'
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-label'>

export function AnimatedPillLink({
  children,
  className = '',
  to,
  href,
  external = false,
  size = 'default',
  tone = 'accent',
  'aria-label': ariaLabel,
}: AnimatedPillLinkProps) {
  const compact = size === 'compact'
  const arrow = compact ? (
    <path d="M7 17 17 7M8 7h9v9" />
  ) : (
    <path d="M5 12h14m-6-6 6 6-6 6" />
  )

  const linkClassName = `group relative isolate inline-flex items-center justify-between overflow-hidden rounded-full py-[.3rem] pr-[.35rem] font-body font-bold whitespace-nowrap no-underline shadow-[0_.25rem_.35rem_rgba(0,0,0,.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none ${
    compact
      ? 'h-11 min-w-[6.75rem] gap-2 pl-4 text-sm'
      : 'h-[3.7rem] min-w-[13.2rem] gap-5 pl-[1.7rem] text-base max-md:h-12 max-md:min-w-42 max-md:pl-4 max-md:text-sm'
  } ${tone === 'dark' ? 'bg-black focus-visible:outline-black' : 'bg-accent-alt'} ${className}`

  const content = (
    <>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className={`absolute inset-y-[.3rem] right-[.35rem] z-20 overflow-hidden rounded-full bg-white transition-[width] duration-500 ease-in-out group-hover:w-[calc(100%-0.7rem)] group-focus-visible:w-[calc(100%-0.7rem)] motion-reduce:transition-none ${compact ? 'w-9' : 'w-[3.15rem] max-md:w-[2.4rem]'}`} />
      <span aria-hidden="true" className="relative z-30 text-white transition-colors duration-500 group-hover:text-black group-focus-visible:text-black motion-reduce:transition-none">
        {children}
      </span>
      <span aria-hidden="true" className={`relative z-30 inline-flex shrink-0 items-center justify-center text-black transition-transform duration-500 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none ${compact ? 'size-9' : 'size-[3.15rem] max-md:size-[2.4rem]'}`}>
        <svg aria-hidden="true" viewBox="0 0 24 24" className={`fill-none stroke-current ${compact ? 'size-4' : 'size-6 max-md:size-5'}`} strokeWidth="1.8">
          {arrow}
        </svg>
      </span>
    </>
  )

  if (to !== undefined) {
    return (
      <Link to={to} aria-label={ariaLabel} className={linkClassName}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={linkClassName}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {content}
    </a>
  )
}
