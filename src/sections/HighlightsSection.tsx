import { useEffect, useRef, useState } from 'react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { highlights, type Highlight } from '../data/highlights'

function AnimatedMetric({ highlight }: { highlight: Highlight }) {
  const metricRef = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(metricRef, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)
  const decimals = 'decimals' in highlight ? highlight.decimals : 0

  useEffect(() => {
    if (!isInView || reduceMotion) return

    let animationFrame = 0
    let startTime: number | undefined
    const duration = 2300

    const updateCount = (timestamp: number) => {
      startTime ??= timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = progress < 0.5
        ? 4 * progress ** 3
        : 1 - (-2 * progress + 2) ** 3 / 2

      setCount(highlight.value * easedProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(animationFrame)
  }, [highlight.value, isInView, reduceMotion])

  const displayedCount = reduceMotion ? highlight.value : count
  const formattedCount = decimals
    ? displayedCount.toFixed(decimals)
    : Math.round(displayedCount).toLocaleString('en-US')

  return (
    <p
      ref={metricRef}
      aria-label={`${highlight.prefix}${highlight.value}${highlight.suffix}`}
      className="relative z-10 mt-6 font-body oldstyle-nums text-[clamp(3.25rem,6vw,5rem)] pointer-none leading-none tracking-wide font-semibold text-text-primary md:mt-7"
    >
      <span aria-hidden="true">
        {highlight.prefix}{formattedCount}{highlight.suffix}
      </span>
    </p>
  )
}

export function HighlightsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="relative isolate overflow-hidden bg-background px-gutter pt-10 md:pt-20 lg:pt-30 pb-section"
    >
      

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              id="highlights-heading"
              eyebrow="Highlights"
              title="Growth Backed by Numbers."
            />
          </motion.div>

        </div>

        <div className="relative mt-15 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:mt-11 md:pb-0 md:pr-0 lg:grid-cols-3 lg:gap-5">
          <motion.a
            href="#case-studies"
            initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={reduceMotion ? undefined : { scale: 1.045, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex min-h-12 max-lg:mb-5 items-center justify-self-center gap-3 rounded-full bg-accent-alt px-6 font-body text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] outline-none transition-shadow hover:shadow-[0_14px_32px_rgba(255,99,54,0.35)] focus-visible:ring-2 focus-visible:ring-accent-alt focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none sm:col-span-2 md:text-base lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2"
          >
            See Case Studies
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={19}
              strokeWidth={2}
              color="currentColor"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </motion.a>

          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.company}
              initial={reduceMotion ? false : { opacity: 0, y: 38, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : 0.12 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative isolate flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-[1.75rem] bg-foreground px-6 py-6 text-center shadow-[0_18px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_24px_46px_rgba(0,0,0,0.16)] motion-reduce:transition-none md:min-h-66 md:px-10 md:py-8 lg:min-h-80 ${index === 1 ? 'lg:mt-20' : ''}`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/5 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,113,77,0.3),transparent_72%)]"
              />
              <p className="relative z-10 font-body text-xs font-medium text-text-muted md:text-sm">
                {highlight.company}
              </p>
              <h3 className="relative z-10 mt-1 max-w-64 font-body text-sm  font-semibold text-text-primary md:text-base">
                {highlight.result}
              </h3>
              <AnimatedMetric highlight={highlight} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
