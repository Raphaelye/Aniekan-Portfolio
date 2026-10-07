import { motion, useReducedMotion } from 'motion/react'
import logo from '../assets/Aniekan_logo.png'
import { AnimatedPillLink } from '../components/ui/AnimatedPillLink'

export function CTASection() {
  const reduceMotion = useReducedMotion()

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

        <AnimatedPillLink
          to="/#contact"
          tone="dark"
          className="relative z-10 shrink-0 shadow-[0_.25rem_.35rem_rgba(0,0,0,.2)]"
        >
          Contact Me
        </AnimatedPillLink>
      </motion.div>
    </section>
  )
}
