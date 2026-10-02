import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion, useReducedMotion } from 'motion/react'
import portrait from '../assets/Hero.png'

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[max(48rem,100svh)] overflow-hidden bg-hero-backdrop text-white max-md:min-h-svh "
    >
      <img
        src={portrait}
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

      <div className="relative z-20 flex min-h-[max(48rem,100svh)] items-end justify-between gap-8 px-[clamp(2rem,3.5vw,2.67rem)] pb-[clamp(9rem,15vh,10rem)] max-md:min-h-[max(48rem,100svh)] max-md:flex-col max-md:items-start max-md:justify-end max-md:gap-10 max-md:px-5 max-md:pt-80 max-md:pb-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
          className="pb-[clamp(5rem,9vh,6rem)] max-md:pb-0 max-md:mb-25"
        >
          <h1
            id="hero-title"
            className="font-display text-[clamp(3.5rem,7.5vw,6.8rem)] leading-[.90] font-bold tracking-[-.055em] whitespace-nowrap max-md:text-[clamp(2.6rem,12vw,4.5rem)]"
          >
            I Turn
            Attention<br />
            into <span className="text-accent-alt">Revenue</span>.
          </h1>
          <p className="mt-[1.3rem] font-body text-[clamp(1.1rem,1.9vw,1.625rem)] whitespace-nowrap text-white/80 max-md:text-[clamp(.9rem,3.5vw,1.2rem)] max-[390px]:text-[.85rem]">
            Growth <span className="text-accent-alt" aria-hidden="true">•</span> Acquisition{' '}
            <span className="text-accent-alt" aria-hidden="true">•</span> Market Expansion
          </p>
          <a
            href="#case-studies"
            className="group relative isolate mt-[3.55rem] inline-flex h-[3.7rem] min-w-[13.2rem] items-center justify-between gap-5 overflow-hidden rounded-full bg-accent-alt py-[.3rem] pr-[.35rem] pl-[1.7rem] font-body text-[1.2rem] font-bold whitespace-nowrap no-underline shadow-[0_.25rem_.35rem_rgba(0,0,0,.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent max-md:mt-7 max-md:h-12 max-md:min-w-42 max-md:pl-4 max-md:text-sm"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-[.3rem] right-[.35rem] z-20 w-[3.15rem] overflow-hidden rounded-full bg-white transition-[width] duration-500 ease-in-out group-hover:w-[calc(100%-0.7rem)] group-focus-visible:w-[calc(100%-0.7rem)] motion-reduce:transition-none max-md:w-[2.4rem]"
            >
              <span className="absolute inset-y-0 right-0 flex w-50 items-center pl-[1.35rem] font-body text-[1.2rem] font-bold text-black max-md:w-[9.8rem] max-md:pl-[.65rem] max-md:text-sm">
                View Works
              </span>
            </span>
            <span className="relative z-10 text-white">
              View Works
            </span>
            <span className="relative z-30 inline-flex size-[3.15rem] shrink-0 items-center justify-center text-black transition-transform duration-500 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none max-md:size-[2.4rem]" aria-hidden="true">
              <HugeiconsIcon icon={ArrowRight01Icon} size={24} strokeWidth={1.8} color="currentColor" className="max-md:size-5" />
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
          className="m-0 min-h-[9.2rem] w-[min(28rem,34vw)] shrink-0 rounded-[1.25rem] border border-white/25 bg-black/65 px-[2.1rem] py-5 font-body text-[clamp(1rem,1.65vw,1.375rem)] leading-[1.19] shadow-sm max-md:min-h-0 max-md:w-full max-md:max-w-md max-md:p-4 max-md:text-base max-md:leading-[1.35] max-md:hidden"
        >
          Growth marketing leader scaling brands, markets, and acquisition across fintech, crypto, proptech and B2B.
        </motion.p>
      </div>
    </section>
  )
}
