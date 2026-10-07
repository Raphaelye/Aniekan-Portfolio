import logoMarker from '../assets/logo_marker.png'
import { speakingEngagements } from '../data/speakingEngagements'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion, useReducedMotion } from 'motion/react'

function EngagementCards({ duplicate = false }: { duplicate?: boolean }) {

  
  return (
    <ul
      aria-label={duplicate ? undefined : 'Speaking and education engagements'}
      aria-hidden={duplicate || undefined}
      className="m-0 flex flex-none list-none gap-3 pr-3"
    >
      {speakingEngagements.map((engagement) => (
        <li key={engagement.title} className="h-58 w-44 flex-none sm:h-62 sm:w-48 lg:h-54 lg:w-40 xl:h-77 xl:w-58 2xl:h-88 2xl:w-64">
          <article className="group relative isolate flex h-full w-full overflow-hidden rounded-[1.25rem] bg-black text-white">
            <img
              src={engagement.image}
              alt={duplicate ? '' : engagement.imageAlt}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/10"
            />
            <span className="relative z-10 mt-auto flex w-full flex-col gap-1.5 p-4 sm:p-5">
              <span className="font-display text-sm font-semibold leading-tight tracking-[-.02em] sm:text-base">
                {engagement.title}
              </span>
              <span className="font-body text-xs leading-snug text-white/75 sm:text-sm">
                {engagement.role}
              </span>
            </span>
          </article>
        </li>
      ))}
    </ul>
  )
}

export function SpeakingEducationSection() {

  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="speaking-education-heading"
      className="section-container flex flex-col overflow-hidden bg-background py-section text-text-primary"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        
      >
        <SectionHeader
          id="speaking-education-heading"
          eyebrow="Speaking and Education"
          title="On Stage & In Conversation"
          className="mb-0"
        />
      
      </motion.div>

      <div className="group flex flex-col gap-4 mt-15 md:mt-18 lg:mt-30 md:flex-row md:items-center md:gap-0 lg:mx-auto lg:w-fit lg:max-w-full">
        <div className="relative z-10 flex min-h-55 shrink-0 flex-col justify-end overflow-hidden rounded-[1.25rem] bg-[linear-gradient(180deg,#ff5a1f_0%,#993613_100%)] p-5 text-white shadow-[0_12px_28px_rgba(0,0,0,0.24)] sm:min-h-61.25 sm:p-6 md:-mr-8 md:min-h-67 md:w-61.25 lg:min-h-80 lg:w-55 xl:min-h-86 xl:w-72 xl:p-7 2xl:min-h-98 2xl:w-80 2xl:p-8">
          <img
            aria-hidden="true"
            src={logoMarker}
            className="pointer-events-none absolute -bottom-10 left-20 h-70 w-auto -rotate-12 object-cover opacity-20 xl:-bottom-12 xl:left-24 xl:h-80 2xl:-bottom-14 2xl:left-28 2xl:h-96"
          />
          <p className="relative z-10 m-0 max-w-80 font-display text-base font-semibold leading-snug tracking-[-.02em] sm:text-[20px]">
            Selected Speaking &amp; Training Engagements:
          </p>
        </div>

        <div className="min-w-0 flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:mask-none lg:w-150.5 lg:flex-none xl:w-213.5 2xl:w-234.5">
          <div className="flex w-max animate-speaking-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
            <EngagementCards />
            <EngagementCards duplicate />
          </div>
        </div>
      </div>
    </section>
  )
}
