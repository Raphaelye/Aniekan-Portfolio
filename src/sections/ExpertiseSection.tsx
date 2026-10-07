import { ExpertiseCard } from '../components/expertise/ExpertiseCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { expertiseCards } from '../data/expertise'
import { motion, useReducedMotion } from 'motion/react'

export function ExpertiseSection() {

  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="expertise-skills-heading" className="section-container flex flex-col bg-background py-section text-text-primary">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        
      >
        <SectionHeader
          id="expertise-skills-section-heading"
          eyebrow="Speciallized skills"
          title="Tailored Expertise for Your Brand"
          className="mb-0"
        />

      </motion.div>

      <div className="expertise-stack mt-15 md:mt-18 lg:mt-25" aria-label="Specialized skills">
        {expertiseCards.map((card) => (
          <ExpertiseCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
