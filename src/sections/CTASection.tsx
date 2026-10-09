import { motion, useReducedMotion } from 'motion/react'
import logo from '../assets/Aniekan_logo.png'
import { useContactSheet } from '../components/contact/contactSheetContext'

export function CTASection() {
  const reduceMotion = useReducedMotion()
  const openContact = useContactSheet()

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-background pb-section"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative isolate mx-auto flex max-md:w-full w-[90%] min-h-100 flex-col items-start justify-end lg:justify-between gap-8 max-md:gap-15 overflow-hidden rounded-3xl max-md:rounded-none bg-accent-alt/60 px-7 py-10 sm:px-10 md:flex-row md:items-end md:px-12 md:py-12 lg:px-16 lg:py-14"
      >
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 top-0 -right-40 z-0 w-136 opacity-[0.1]  md:w-170"
        />
        <div className="relative z-10">
          <p className="font-body text-[0.625rem] font-bold uppercase tracking-wide text-black md:text-xs">
            Ready for what’s next?
          </p>
          <h2
            id="cta-heading"
            className="mt-2 max-w-3xl font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[.98] font-bold tracking-[-.055em] text-black"
          >
            Let’s turn your next
            <br className="hidden sm:block" /> challenge into <span className="text-white">growth.</span>
          </h2>
        </div>

        <button
          type="button"
          onClick={openContact}
          className="group relative isolate z-10 inline-flex h-12 min-w-42 shrink-0 items-center justify-between gap-5 overflow-hidden rounded-full bg-black py-[.3rem] pl-4 pr-[.35rem] font-body text-sm font-bold whitespace-nowrap text-white shadow-[0_.25rem_.35rem_rgba(0,0,0,.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black motion-reduce:transition-none md:h-[3.7rem] md:min-w-[13.2rem] md:pl-[1.7rem] md:text-base"
        >
          <span aria-hidden="true" className="absolute inset-y-[.3rem] right-[.35rem] z-20 w-[2.4rem] overflow-hidden rounded-full bg-white transition-[width] duration-500 ease-in-out group-hover:w-[calc(100%-0.7rem)] group-focus-visible:w-[calc(100%-0.7rem)] motion-reduce:transition-none md:w-[3.15rem]" />
          <span className="relative z-30 transition-colors duration-500 group-hover:text-black group-focus-visible:text-black">Contact Me</span>
          <span aria-hidden="true" className="relative z-30 inline-flex size-[2.4rem] shrink-0 items-center justify-center text-black transition-transform duration-500 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none md:size-[3.15rem]">
            <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current md:size-6" strokeWidth="1.8"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </span>
        </button>
      </motion.div>
    </section>
  )
}
