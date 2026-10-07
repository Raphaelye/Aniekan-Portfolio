import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import portrait from '../assets/about.png'
import { SectionHeader } from '../components/ui/SectionHeader'

const metrics = [
  {
    value: '9+',
    label: 'Years of Expertise',
    description: 'Building growth systems and expanding brands.',
  },
  {
    value: '7+',
    label: 'Companies Served',
    description: 'Growth experience across ambitious companies.',
  },
  {
    value: '6+',
    label: 'Industries Served',
    description: 'Fintech, crypto, proptech, B2B services and real estate.',
  },
  {
    value: '360°',
    label: 'Growth Expertise',
    description: 'Acquisition, conversion, revenue, and scale.',
  },
]

function AnimatedMetric({ metric }: { metric: (typeof metrics)[number] }) {
  const metricRef = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(metricRef, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)
  const target = Number.parseInt(metric.value, 10)
  const suffix = metric.value.slice(String(target).length)

  useEffect(() => {
    if (!isInView || reduceMotion) return

    let animationFrame = 0
    let startTime: number | undefined
    const duration = 1800

    const updateCount = (timestamp: number) => {
      startTime ??= timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3

      setCount(target * easedProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, reduceMotion, target])

  const displayedCount = reduceMotion ? target : Math.round(count)

  return (
    <motion.p
      ref={metricRef}
      aria-label={metric.value}
      initial={reduceMotion ? false : { opacity: 0, y: -28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="m-0 font-body text-[42px] leading-none font-semibold text-center tracking-tighter text-text-primary sm:text-[60px] lg:text-[100px]"
    >
      <span aria-hidden="true">{displayedCount}{suffix}</span>
    </motion.p>
  )
}

export function AboutMainSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="about-main-heading"
      className="section-container relative isolate flex flex-col gap-10 overflow-hidden bg-background pt-10 text-text-primary md:gap-14 md:pt-16 lg:gap-16 lg:pt-30"
    >
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <SectionHeader
          id="about-main-heading"
          eyebrow="About me"
          title={<>Meet Aniekan</>}
          className="mb-0"
        />
      </motion.header>

      <div className="relative z-10 flex flex-col-reverse items-center mt-0 lg:mt-10 gap-10 md:flex-row md:gap-8 lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-col gap-5 font-body text-[15px] leading-[1.55] md:flex-1 md:text-base lg:text-[20px]"
        >
          <p className="m-0 ">
            I specialize in connecting marketing strategy to commercial outcomes. My experience spans paid acquisition, market expansion, go-to-market strategy, affiliate growth, partnerships, SEO/GEO, CRO, marketing automation, community building and revenue-focused campaign execution.
          </p>
          <p className="m-0  text-text-muted">
            I&apos;ve worked across highly competitive and trust-sensitive industries where acquisition alone isn&apos;t enough. The real challenge is building the entire journey from first impression to qualified lead, customer activation and revenue.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-text-muted md:gap-x-6 md:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-foreground text-accent-alt shadow-[0_3px_12px_rgba(0,0,0,0.12)]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8">
                  <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
              </span>
              Dubai
            </span>
            <a
              href="mailto:business@aniekanimebong.com"
              className="inline-flex items-center gap-2 text-text-muted no-underline transition-colors hover:text-accent-alt focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-alt"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-foreground text-accent-alt shadow-[0_3px_12px_rgba(0,0,0,0.12)]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="3" />
                  <path d="m5 7 7 5 7-5" />
                </svg>
              </span>
              business@aniekanimebong.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88, rotate: 3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-82.5 w-full items-end justify-center sm:min-h-97.5 md:min-h-87.5 md:flex-1 lg:min-h-107.5"
        >
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { rotate: [12, 15, 12], y: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[12%] left-1/2 h-[72%] w-[74%] -translate-x-1/2 rounded-[34px] bg-accent-alt shadow-[0_18px_30px_rgba(0,0,0,0.15)]"
          />
          <div className="absolute bottom-0 left-1/2 h-[78%] w-[82%] -translate-x-1/2 overflow-hidden rounded-[30px] bg-[#858585] shadow-[0_18px_35px_rgba(0,0,0,0.16)]" />
          <motion.img
            src={portrait}
            alt="Aniekan Udofia in a blue and green checkered suit"
            initial={reduceMotion ? false : { y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 h-80 w-auto max-w-[88%] object-contain object-bottom sm:h-95 md:h-85 lg:h-105"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mt-10 flex flex-wrap gap-x-4 gap-y-7 max-md:mt-0 lg:flex-nowrap lg:gap-x-9">
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex w-[calc(50%-0.5rem)] flex-col justify-center items-center sm:w-[calc(50%-0.5rem)] lg:flex-1"
          >
            <AnimatedMetric metric={metric} />
            <div className="mt-1 border-t-2 border-dotted text-center border-text-muted/50 pt-2">
              <h3 className="m-0 font-body text-sm font-semibold text-text-primary sm:text-base">
                {metric.label}
              </h3>
              <p className="mt-1 mb-0 max-w-55 font-body text-[11px] leading-[1.35] text-text-muted sm:text-xs">
                {metric.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
