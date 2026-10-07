import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

export function CaseStudyDetailPage() {
  const { slug } = useParams()
  const study = caseStudies.find((entry) => entry.slug === slug)

  if (!study) return <Navigate to="/case-studies" replace />

  return (
    <main className="bg-background pb-section text-text-primary">
      <section className="section-container relative isolate flex min-h-[65svh] items-end overflow-hidden rounded-b-4xl pt-32 sm:min-h-[75svh]">
        <img
          src={study.image}
          alt={study.imageAlt}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 flex w-full flex-col items-start gap-4 pb-10 text-white sm:pb-14 lg:pb-16">
          <div className="flex items-center gap-3 mb-10">
            <Link
              to="/case-studies"
              aria-label="Back to case studies"
              title="Back to Case Studies"
              className="inline-flex size-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-colors hover:border-accent-alt hover:bg-accent-alt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-alt sm:size-15"
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                size={22}
                strokeWidth={1.8}
                color="currentColor"
                aria-hidden="true"
              />
            </Link> <span className='text-accent text-sm md:text-lg font-bold'>Back to Case Studies</span>
          </div>
          <p className="m-0 font-body text-xs font-semibold uppercase tracking-[0.12em] text-white/75 sm:text-sm">
            {study.company}
          </p>
          <h1 className="m-0 max-w-4xl font-display text-3xl font-bold leading-tight tracking-[-.04em] sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>
          <p className="m-0 max-w-2xl font-body text-base leading-relaxed text-white/80 sm:text-lg">
            {study.description}
          </p>
        </div>
      </section>

      {study.metric && (
        <section className="section-container flex flex-col pt-10 sm:pt-14">
          <p className="m-0 font-body text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
            Measurable impact
          </p>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="m-0 font-display text-4xl font-bold tracking-tight text-accent-alt sm:text-6xl">
              {study.metric}
            </p>
            <p className="m-0 font-body text-base font-medium text-text-primary sm:text-lg">
              {study.metricLabel}
            </p>
          </div>
        </section>
      )}
    </main>
  )
}
