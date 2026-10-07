import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../../data/caseStudies'

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : (index % 2) * 0.1 }}
      className="w-full md:w-[calc(50%-0.75rem)]"
    >
      <Link
        to={`/case-studies/${study.slug}`}
        aria-label={`${study.company}: ${study.title}`}
        className="group relative isolate flex min-h-80 overflow-hidden rounded-3xl bg-black text-white no-underline shadow-[0_14px_32px_rgba(0,0,0,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-alt sm:min-h-88 lg:min-h-96"
      >
        <img
          src={study.image}
          alt={study.imageAlt}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/30 transition-colors duration-500 group-hover:from-black/95 group-hover:via-black/45 motion-reduce:transition-none"
        />
        <span className="relative z-10 mt-auto flex w-full items-end justify-between gap-4 p-5 sm:p-6">
          <span className="flex min-w-0 flex-col gap-1.5">
            <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/75 sm:text-xs">
              {study.company}
            </span>
            <span className="max-w-lg font-display text-lg font-semibold leading-tight tracking-[-.02em] text-white sm:text-xl lg:text-2xl">
              {study.title}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-alt text-white transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none sm:size-11"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </span>
      </Link>
    </motion.article>
  )
}
