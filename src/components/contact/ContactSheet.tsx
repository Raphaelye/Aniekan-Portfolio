import { useCallback, useEffect, useRef, useState, type FormEvent, type PointerEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useDragControls, useReducedMotion } from 'motion/react'
import portrait from '../../assets/Hero.png'
import logoMarker from '../../assets/logo_marker.png'
import { ContactSheetContext } from './contactSheetContext'

const emailAddress = 'business@aniekanimebong.com'
const topics = ['Growth strategy', 'Speaking & training', 'Partnership', 'Something else'] as const

export function ContactSheetProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openSheet = useCallback(() => setOpen(true), [])
  const closeSheet = useCallback(() => setOpen(false), [])

  return (
    <ContactSheetContext.Provider value={openSheet}>
      {children}
      {createPortal(
        <AnimatePresence>
          {open && <ContactSheet onClose={closeSheet} />}
        </AnimatePresence>,
        document.body,
      )}
    </ContactSheetContext.Provider>
  )
}

function ContactSheet({ onClose }: { onClose: () => void }) {
  const reduceMotion = useReducedMotion()
  const dragControls = useDragControls()
  const dialogRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [topic, setTopic] = useState<(typeof topics)[number]>(topics[0])

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const appRoot = document.getElementById('root')
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (appRoot) appRoot.inert = true
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])',
      ))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (appRoot) appRoot.inert = false
      previousFocus?.focus()
    }
  }, [onClose])

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!reduceMotion) dragControls.start(event)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const name = String(fields.get('name') ?? '').trim()
    const email = String(fields.get('email') ?? '').trim()
    const company = String(fields.get('company') ?? '').trim()
    const message = String(fields.get('message') ?? '').trim()
    if (!name || !email || !message) return

    const subject = `Website enquiry — ${topic}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      ...(company ? [`Company: ${company}`] : []),
      `Interested in: ${topic}`,
      '',
      message,
    ].join('\n')

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const enter = reduceMotion ? { duration: 0 } : { type: 'spring' as const, stiffness: 260, damping: 32, mass: 1 }

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center select-none"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/70"
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: reduceMotion ? 'blur(0px)' : 'blur(10px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: reduceMotion ? 0 : 0.35 }}
      />
      <motion.section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-sheet-title"
        aria-describedby="contact-sheet-description"
        tabIndex={-1}
        drag={reduceMotion ? false : 'y'}
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.2 }}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          if (info.offset.y > 120 || info.velocity.y > 700) onClose()
        }}
        initial={reduceMotion ? false : { y: '100%', opacity: 0.75 }}
        animate={{ y: 0, opacity: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0.9, transition: { duration: 0.34, ease: [0.4, 0, 1, 1] } }}
        transition={enter}
        className="relative flex max-h-[96dvh] w-full max-w-295 lg:max-w-450 flex-col overflow-hidden rounded-t-[30px] border border-b-0 border-text-primary/15 bg-background text-text-primary shadow-[0_-24px_80px] shadow-black/40 outline-none md:max-h-[92dvh] md:rounded-t-[40px]"
      >
        <div className="relative z-20 flex h-14 shrink-0 items-center justify-center border-b border-text-primary/10 bg-background md:h-16">
          <div
            aria-hidden="true"
            onPointerDown={startDrag}
            className="flex h-full w-24 touch-none items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <span className="h-1.5 w-12 rounded-full bg-text-primary/30" />
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close contact sheet"
            className="absolute right-4 flex size-9 items-center justify-center rounded-full border border-text-primary/15 bg-text-primary/5 text-text-primary transition-colors hover:bg-text-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-alt md:right-8 md:size-10"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.7" strokeLinecap="round">
              <path d="M5 5 19 19M19 5 5 19" />
            </svg>
          </button>
        </div>

        <div className="flex min-h-0 flex-col overflow-y-auto overscroll-contain md:flex-row">
          <div className="relative isolate flex shrink-0 flex-col justify-between gap-8 overflow-hidden border-b border-text-primary/10 px-6 pb-8 pt-7 sm:px-9 md:w-[42%] md:border-b-0 md:border-r md:px-12 md:pb-12 md:pt-11">
            <img src={logoMarker} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-20 -z-10 w-120 max-w-none rotate-[-18deg] opacity-[0.09] md:-bottom-20 md:-left-28 md:w-150" />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.22em] text-accent-alt md:mb-10">
                
                Start a conversation
              </p>
              <h2 id="contact-sheet-title" className="max-w-100 font-display text-[38px] leading-[1.02] font-semibold tracking-[-0.055em] sm:text-[46px] md:text-[50px] lg:text-[58px]">
                Let&apos;s make the <span className="text-accent-alt">next move</span> count.
              </h2>
              <p id="contact-sheet-description" className="mt-5 max-w-107.5 font-body text-sm leading-relaxed text-text-muted sm:text-base md:mt-7">
                Tell me what you&apos;re building, where growth feels stuck, and what success looks like.
              </p>
            </motion.div>

            <div className="flex items-center gap-4 border-t border-text-primary/10 pt-6 md:pt-7">
              <div className="flex size-13 shrink-0 items-end justify-center overflow-hidden rounded-full border border-text-primary/20 bg-gray">
                <img src={portrait} alt="" className="h-13 w-auto object-contain object-bottom" />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="font-body text-sm font-semibold">Aniekan Udofia</span>
                <a href={`mailto:${emailAddress}`} className="truncate font-body text-xs text-text-muted underline-offset-4 transition-colors hover:text-accent-alt hover:underline focus-visible:outline-2 focus-visible:outline-accent-alt sm:text-sm">
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-w-0 flex-1 flex-col gap-6 bg-foreground px-6 pb-9 pt-8 font-body sm:px-9 md:gap-7 md:px-11 md:pb-12 md:pt-11"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-alt">The brief</span>
              <p className="text-sm leading-relaxed text-text-muted">A few details to get the conversation started.</p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row">
              <label className="flex min-w-0 flex-1 flex-col gap-2 text-xs font-semibold text-text-primary">
                Your name <span className="sr-only">required</span>
                <input name="name" required autoComplete="name" placeholder="Your name" className="h-12 w-full rounded-xl border border-text-primary/15 bg-text-primary/5 px-4 text-sm font-normal text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-alt focus:bg-text-primary/8" />
              </label>
              <label className="flex min-w-0 flex-1 flex-col gap-2 text-xs font-semibold text-text-primary">
                Email address <span className="sr-only">required</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className="h-12 w-full rounded-xl border border-text-primary/15 bg-text-primary/5 px-4 text-sm font-normal text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-alt focus:bg-text-primary/8" />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-xs font-semibold text-text-primary">
              <span>Company <span className="font-normal text-text-muted">(optional)</span></span>
              <input name="company" autoComplete="organization" placeholder="Your company or project" className="h-12 w-full rounded-xl border border-text-primary/15 bg-text-primary/5 px-4 text-sm font-normal text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-alt focus:bg-text-primary/8" />
            </label>

            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 text-xs font-semibold text-text-primary">What are you looking for?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={topic === item}
                    onClick={() => setTopic(item)}
                    className={`min-h-10 rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-alt ${topic === item ? 'border-accent-alt bg-accent-alt text-black' : 'border-text-primary/15 bg-text-primary/5 text-text-muted hover:border-text-primary/35 hover:text-text-primary'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-2 text-xs font-semibold text-text-primary">
              Tell me a little more <span className="sr-only">required</span>
              <textarea name="message" required rows={4} placeholder="What challenge are you working through?" className="w-full resize-y rounded-xl border border-text-primary/15 bg-text-primary/5 px-4 py-3 text-sm font-normal leading-relaxed text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-alt focus:bg-text-primary/8" />
            </label>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
              <p className="max-w-55 text-xs leading-relaxed text-text-muted">Opens your email app with your message ready.</p>
              <button type="submit" className="group flex min-h-13 items-center justify-center gap-4 rounded-full bg-accent-alt px-6 font-body text-sm font-bold text-black shadow-[0_8px_24px] shadow-accent-alt/20 transition-[background-color,transform,box-shadow] hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_12px_28px] hover:shadow-accent-alt/32 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-alt motion-reduce:transform-none sm:shrink-0">
                Continue in email
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current transition-transform group-hover:translate-x-1 motion-reduce:transform-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h15m-6-6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </motion.form>
        </div>
      </motion.section>
    </div>
  )
}
