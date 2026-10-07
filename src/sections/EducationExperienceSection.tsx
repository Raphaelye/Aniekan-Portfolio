import { type ReactNode, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import cv from '../assets/Aniekan_Udofia_CV.pdf'
import { education, experience, type ResumeEntryData } from '../data/education'
import { AnimatedPillLink } from '../components/ui/AnimatedPillLink'
import { SectionHeader } from '../components/ui/SectionHeader'

function PanelIcon({ type }: { type: 'education' | 'experience' }) {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-alt text-white sm:size-11">
      {type === 'education' ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.7">
          <path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z" />
          <path d="M6.5 11.1v5.1c3.2 2.4 7.8 2.4 11 0v-5.1M21.5 9v6" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.7">
          <rect x="3" y="7" width="18" height="13" rx="2.5" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18m-11 0v2h4v-2" />
        </svg>
      )}
    </span>
  )
}

function ResumeEntry({
  entry,
  index,
  reduceMotion,
}: {
  entry: ResumeEntryData
  index: number
  reduceMotion: boolean | null
}) {
  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-1.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
    >
      <div className="min-w-0">
        <h4 className="m-0 font-body text-base font-semibold leading-snug text-text-primary sm:text-lg">
          {entry.title}
        </h4>
        <p className="mb-0 mt-1 max-w-prose font-body text-xs leading-relaxed text-text-muted sm:text-sm">
          {entry.organization}
        </p>
      </div>
      <p className="m-0 shrink-0 font-body text-sm font-medium text-text-primary sm:pt-0.5 sm:text-right sm:text-base">
        {entry.period}
      </p>
    </motion.li>
  )
}

function ResumePanel({
  title,
  type,
  entries,
  reduceMotion,
  children,
}: {
  title: string
  type: 'education' | 'experience'
  entries: readonly ResumeEntryData[]
  reduceMotion: boolean | null
  children?: ReactNode
}) {
  const entriesRef = useRef<HTMLUListElement>(null)
 
  

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flex min-w-0 flex-1 flex-col rounded-[1.75rem] border-l-2 border-accent-alt bg-foreground p-5 shadow-[0_16px_36px_rgba(0,0,0,0.07)] sm:p-7 lg:p-8"
    >
      <div className="flex items-center justify-between gap-3 border-b border-text-muted/25 pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <PanelIcon type={type} />
          <h3 className="m-0 font-display text-xl font-semibold tracking-[-.02em] text-text-primary sm:text-2xl lg:text-3xl">
            {title}
          </h3>
        </div>
        {type === 'experience' && (
          <span className="hidden shrink-0 font-body text-xs font-medium text-text-muted sm:inline">
            Selected experience
          </span>
        )}
      </div>

      <div className="relative mt-5">
       
        <ul ref={entriesRef} className="m-0 list-none space-y-3 ">
          {entries.map((entry, index) => (
            <ResumeEntry
              key={`${entry.title}-${entry.period}`}
              entry={entry}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>
      </div>

      {children}
    </motion.article>
  )
}

export function EducationExperienceSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="education-experience-heading"
      className="section-container flex flex-col bg-background py-section text-text-primary"
    >
      <SectionHeader
        id="education-experience-heading"
        eyebrow="Career journey"
        title="Education & Experience"
        className="mb-8 text-center sm:mb-10 lg:mb-12"
      />

      <div className="flex flex-col items-stretch  mt-10 max-md:mt-0 gap-5 lg:flex-row lg:items-start lg:gap-6">
        <ResumePanel title="Education" type="education" entries={education} reduceMotion={reduceMotion} />
        <ResumePanel title="Experience" type="experience" entries={experience} reduceMotion={reduceMotion}>
          <AnimatedPillLink
            href={cv}
            external
            aria-label="See more — view the full CV in a new tab"
            size="compact"
            className="mt-10 self-center font-semibold shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
          >
            See More
          </AnimatedPillLink>
        </ResumePanel>
      </div>
    </section>
  )
}
