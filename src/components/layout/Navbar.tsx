import { useEffect, useRef, useState } from 'react'
import { Cancel01Icon, MailSend01Icon, Menu01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import logo from '../../assets/Aniekan_logo.png'
import { ThemeToggle } from '../ui/ThemeToggle'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Expertise', href: '#expertise' },
]

const focusStyle = 'focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent-alt'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
      <header className="fixed inset-x-0 top-4 z-50 flex items-center justify-between gap-3 px-4 md:top-8 md:justify-center lg:px-12.5">
      <motion.nav
        aria-label="Main navigation"
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-20 grid min-h-14 flex-1 grid-cols-[2.75rem_1fr] items-center rounded-full bg-background p-1.5 text-text-primary shadow-[0_0.5rem_1.4rem_rgba(0,0,0,0.25)] md:min-h-16 md:w-[min(34rem,calc(100%-9rem))] md:flex-none md:grid-cols-[3.25rem_1fr_3.25rem] lg:w-[min(47rem,calc(100%-9.375rem))]"
      >
        <a
          className={`inline-flex size-11 items-center justify-center rounded-full bg-nav-control shadow-[0_0.125rem_0.4rem_rgba(0,0,0,0.35)] md:size-13 ${focusStyle}`}
          href="#home"
          aria-label="Aniekan — Home"
        >
          <img src={logo} alt="" width="392" height="338" className="h-auto w-[1.9rem] md:w-9" />
        </a>

        <div className="hidden items-center justify-center gap-3 md:flex lg:gap-5">
          {links.map(({ label, href }, index) => (
            <a
              key={href}
              href={href}
              aria-current={index === 0 ? 'page' : undefined}
              className={`relative shrink-0 py-1.5 font-body text-base leading-[1.2] font-medium whitespace-nowrap no-underline hover:text-accent-alt lg:text-[1.0625rem] ${focusStyle} ${index === 0 ? "after:absolute after:bottom-0 after:left-1/2 after:h-[0.3rem] after:w-[0.55rem] after:-translate-x-1/2 after:rounded-full after:bg-accent-alt after:content-['']" : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end md:-translate-x-1">
          <a
            className={`hidden size-11 items-center justify-center rounded-full bg-nav-control text-accent-alt shadow-[0_0.125rem_0.4rem_rgba(0,0,0,0.35)] md:inline-flex ${focusStyle}`}
            href="#contact"
            aria-label="Contact Aniekan"
          >
            <HugeiconsIcon icon={MailSend01Icon} size={23} strokeWidth={1.7} color="currentColor" />
          </a>
          <button
            ref={menuButtonRef}
            className={`inline-flex size-10 items-center justify-center rounded-full bg-nav-control text-accent-alt shadow-[0_0.125rem_0.4rem_rgba(0,0,0,0.35)] md:hidden ${focusStyle}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.18 }}
            >
              <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} size={23} strokeWidth={1.8} color="currentColor" />
            </motion.span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.72, x: 22, y: -16 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.82, x: 16, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }}
            transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 24, mass: 0.9 }}
            className="absolute top-[calc(100%+0.5rem)] right-26 left-4 z-10 flex origin-top-right flex-col gap-1 rounded-3xl border border-text-primary/10 bg-background p-2 pt-4 font-body text-text-primary shadow-[0_1rem_2rem_rgba(0,0,0,0.28)] md:hidden"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 font-medium no-underline transition-colors hover:bg-accent/10 hover:text-accent-alt ${focusStyle}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`mt-1 flex items-center justify-between rounded-xl border-t border-text-primary/10 px-4 py-3 font-medium no-underline transition-colors hover:bg-accent/10 hover:text-accent-alt ${focusStyle}`}
            >
              <span>Contact</span>
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-nav-control text-accent-alt">
                <HugeiconsIcon icon={MailSend01Icon} size={20} strokeWidth={1.7} color="currentColor" />
              </span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="relative z-20 md:absolute md:right-4 lg:right-12.5">
        <ThemeToggle />
      </div>
    </header>
  )
}
