import { motion, useReducedMotion } from 'motion/react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { CaseStudyCard } from '../components/ui/CaseStudyCard'
import { caseStudies } from '../data/caseStudies'

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="case-studies-section-heading"
      className="section-container flex flex-col bg-background py-section text-text-primary"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        
      >
        <SectionHeader
          id="case-studies-section-heading"
          eyebrow="Selected works"
          title="Growth in Action"
          className="mb-0"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center mt-15 md:mt-18 lg:mt-20 gap-5 sm:gap-6">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </div>
    </section>
  )
}
