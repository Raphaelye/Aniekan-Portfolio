import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion, useReducedMotion } from 'motion/react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { processSteps } from '../data/processSteps'

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <section id="process" aria-labelledby="process-heading" className="bg-background pt-10 md:pt-20 lg:pt-30 pb-section ">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          
        >
          <SectionHeader
            id="case-studies-section-heading"
            eyebrow="How I Work"
            title="The Connected Process"
            className="mb-0"
          />
        </motion.div>
          
        
        <div
          aria-label="Process stages"
          className=" mt-15 md:mt-18 lg:mt-25 flex w-[90%] snap-x snap-mandatory items-stretch gap-4 overflow-x-auto mx-auto scrollbar-none [&::-webkit-scrollbar]:hidden md:mx-auto md:w-[74vw] md:max-w-189.5 md:gap-2.5 md:overflow-visible md:pb-0 md:pr-0 lg:w-[88vw] lg:max-w-6xl lg:gap-3"
        >
          {processSteps.map((step, index) => {
            const active = activeStep === index

            return (
              <motion.button
                key={step.id}
                type="button"
                layout={!reduceMotion}
                transition={{ layout: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] } }}
                onClick={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                aria-label={`${step.title}: ${step.description}`}
                aria-pressed={active}
                className={`group relative h-84 w-[82vw] max-w-88 shrink-0 snap-start overflow-hidden rounded-[2.25rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:h-90 md:max-w-none md:snap-none lg:h-112 ${active ? 'md:min-w-0 md:flex-1' : 'md:w-20 md:flex-none lg:w-24'}`}
              >
                <img
                  src={step.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none ${active ? 'scale-100' : 'scale-105 group-hover:scale-[1.08]'}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 ${active ? 'bg-black/20' : 'bg-black/45'}`}
                />
                <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />

                <span className={`absolute top-4 z-10 flex size-12 items-center justify-center rounded-full bg-white text-accent-alt transition-[left,transform] duration-300 motion-reduce:transition-none ${active ? 'left-5' : 'left-5 md:left-1/2 md:-translate-x-1/2'}`}>
                  <HugeiconsIcon icon={step.icon} size={24} strokeWidth={1.8} color="currentColor" aria-hidden="true" />
                </span>

                <span className={`absolute right-5 bottom-7 left-5 z-10 block text-white transition-opacity duration-300 motion-reduce:transition-none lg:right-7 lg:bottom-9 lg:left-7 ${active ? 'opacity-100' : 'md:opacity-0'}`}>
                  <span className="block font-display text-[1.875rem] leading-none font-semibold tracking-[-.035em] md:text-[2rem] lg:text-[2.75rem]">
                    {step.title}
                  </span>
                  <span className="mt-1.5 block max-w-56 font-body text-xs leading-[1.4] text-white/80 lg:mt-2 lg:max-w-72 lg:text-[0.9375rem]">
                    {step.description}
                  </span>
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
