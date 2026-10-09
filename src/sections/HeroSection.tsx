import { motion, useReducedMotion } from 'motion/react'
import { AnimatedPillLink } from '../components/ui/AnimatedPillLink'
import { heroImages } from '../data/heroImages'

export function HeroSection({ preloaderComplete }: { preloaderComplete: boolean }) {
  const reduceMotion = useReducedMotion()
  const revealHero = preloaderComplete || reduceMotion

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-dvh overflow-hidden bg-hero-backdrop text-white md:min-h-[max(48rem,100dvh)]"
    >
      <img
        src={heroImages.home}
        alt=""
        width="540"
        height="703"
        className="pointer-events-none absolute top-15 left-1/2 z-0 h-150 w-auto max-w-none -translate-x-1/2 md:top-15 md:bottom-0 md:h-full md:mask-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,1)_50%,rgba(102,102,102,1)_100%)] opacity-60 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.82)_78%,black_100%)]"
      />

      <div className="section-container relative z-20 flex min-h-dvh items-end justify-between gap-8 md:min-h-[max(48rem,100dvh)] max-md:flex-col max-md:items-start max-md:justify-end max-md:gap-10 max-md:pt-[clamp(6rem,20dvh,12rem)] max-md:pb-5">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={revealHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="pb-[clamp(5rem,9vh,6rem)] max-md:mb-[clamp(2.5rem,12dvh,6.25rem)] max-md:pb-0"
        >
          <h1
            id="hero-title"
            className="font-display text-[clamp(3.5rem,7.5vw,6.8rem)] leading-[.90] font-bold tracking-[-.055em] whitespace-nowrap max-md:text-[clamp(2.3rem,11.5vw,4.5rem)]"
          >
            I Turn
            Attention<br />
            into <span className="text-accent-alt">Revenue</span>.
          </h1>
          <p className="mt-[1.3rem] font-body text-[clamp(1.1rem,1.9vw,1.625rem)] whitespace-nowrap text-white/80 max-md:text-[clamp(.9rem,3.5vw,1.2rem)] max-[390px]:text-[.85rem]">
            Growth <span className="text-accent-alt" aria-hidden="true">•</span> Acquisition{' '}
            <span className="text-accent-alt" aria-hidden="true">•</span> Market Expansion
          </p>
          <AnimatedPillLink
            to="/case-studies"
            className="mt-[3.55rem] text-[1.2rem] shadow-[0_.25rem_.35rem_rgba(0,0,0,.3)] max-md:mt-7"
          >
            View Works
          </AnimatedPillLink>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={revealHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          className="m-0 min-h-[9.2rem] w-[min(28rem,34vw)] shrink-0 rounded-[1.25rem] border border-white/25 bg-black/65 px-[2.1rem] py-5 font-body text-[clamp(1rem,1.65vw,1.375rem)] leading-[1.19] shadow-sm max-md:min-h-0 max-md:w-full max-md:max-w-md max-md:p-4 max-md:text-base max-md:leading-[1.35] max-md:hidden"
        >
          Growth marketing leader scaling brands, markets, and acquisition across fintech, crypto, proptech and B2B.
        </motion.p>
      </div>
    </section>
  )
}
