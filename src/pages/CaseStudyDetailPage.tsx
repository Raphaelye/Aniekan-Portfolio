import { useEffect, useRef, useState } from 'react'
import { ArrowLeft01Icon, Cancel01Icon, ZoomInIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { caseStudyDetails, type DetailImage } from '../data/caseStudyDetails'

export function CaseStudyDetailPage() {
  const { slug } = useParams()
  const study = caseStudies.find((entry) => entry.slug === slug)
  const [activeImage, setActiveImage] = useState<DetailImage | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !activeImage) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()

    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [activeImage])

  if (!study) return <Navigate to="/case-studies" replace />

  const detail = caseStudyDetails[study.slug]

  return (
    <main className="bg-background pb-section text-text-primary">
      <section className="section-container relative isolate flex min-h-[65svh] items-end overflow-hidden rounded-b-4xl pt-32 sm:min-h-[75svh]">
        <img
          src={study.image}
          alt={study.imageAlt}
          fetchPriority="high"
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

      {detail && (
        <section
          aria-labelledby="case-study-details-heading"
          className="section-container flex flex-col gap-10 pt-10 sm:gap-14 sm:pt-14"
        >
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="m-0 font-body text-xs font-semibold uppercase tracking-[0.12em] text-accent-alt sm:text-sm">
              Inside the work
            </p>
            <h2
              id="case-study-details-heading"
              className="m-0 font-display text-3xl font-bold leading-tight tracking-[-.04em] sm:text-4xl lg:text-5xl"
            >
              Campaign snapshots.
            </h2>
            <p className="m-0 max-w-2xl font-body text-base leading-relaxed text-text-muted sm:text-lg">
              {detail.introduction}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:gap-14">
            {detail.images.map((image, index) => (
              <figure key={image.src} className="m-0 flex flex-col gap-4 border-t border-text-primary/15 pt-5 sm:gap-5 sm:pt-6">
                <figcaption className="flex items-center justify-between gap-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-body text-xs font-semibold tabular-nums text-accent-alt sm:text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-base font-semibold text-text-primary sm:text-lg">
                      {image.caption}
                    </span>
                  </div>
                  <span className="font-body text-xs tabular-nums text-text-muted">
                    {String(index + 1).padStart(2, '0')} / {String(detail.images.length).padStart(2, '0')}
                  </span>
                </figcaption>
                <button
                  type="button"
                  onClick={() => setActiveImage(image)}
                  aria-label={`View full image: ${image.alt}`}
                  className={`flex w-full items-center justify-center overflow-hidden rounded-3xl bg-white p-3 shadow-[0_14px_32px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-alt sm:p-6 ${image.portrait ? 'max-w-xl self-center' : ''}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="block h-auto w-full object-contain"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className="group inline-flex w-fit items-center gap-2 font-body text-xs font-semibold text-text-muted underline-offset-4 transition-colors hover:text-accent-alt hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-alt sm:text-sm"
                >
                  View full image
                  <HugeiconsIcon icon={ZoomInIcon} size={16} strokeWidth={1.8} color="currentColor" aria-hidden="true" />
                </button>
              </figure>
            ))}
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-label={activeImage ? `${activeImage.caption} image preview` : 'Image preview'}
        onClose={() => setActiveImage(null)}
        onClick={(event) => {
          const dialog = event.currentTarget
          const { left, right, top, bottom } = dialog.getBoundingClientRect()
          if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
            dialog.close()
          }
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-6xl overflow-auto rounded-3xl border-0 bg-background p-4 text-text-primary shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop:bg-black/80 sm:p-6"
      >
        {activeImage && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <p className="m-0 font-display text-base font-semibold sm:text-lg">{activeImage.caption}</p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close image preview"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-text-primary transition-colors hover:bg-accent-alt hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-alt"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={1.8} color="currentColor" aria-hidden="true" />
              </button>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white p-2 sm:p-4">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                className="block max-h-[calc(100dvh-10rem)] max-w-full object-contain"
              />
            </div>
          </div>
        )}
      </dialog>
    </main>
  )
}
