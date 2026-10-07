import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import type { ExpertiseCardData } from '../../data/expertise'

export function ExpertiseCard({ card }: { card: ExpertiseCardData }) {
  const cardRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start 70%'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 1], [8, 0])

  return (
    <article ref={cardRef} className="sticky w-full">
      <motion.div
        style={reduceMotion ? undefined : { scale, y }}
      >
        <div
          
          className="expertise-card flex w-full flex-col justify-between overflow-hidden rounded-[1.875rem] p-[clamp(1.5rem,5vw,3rem)] text-white md:rounded-[2.25rem]"

        >
          <motion.h3 
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="m-0 flex flex-col font-display text-[45px] md:text-[70px] lg:text-[90px] font-semibold leading-[.98] tracking-[-.045em]"
          >
            <span>{card.title}</span>
            <span className="text-white/50">{card.secondaryTitle}</span>
          </motion.h3>

          <div className="flex flex-col items-start gap-5 md:gap-6">
            <ul aria-label="Tools" className="m-0 flex list-none flex-wrap gap-2 p-0">
              {card.tags.map((tag, index) => (
                <motion.li
                  key={tag}
                  initial={reduceMotion ? false : { opacity: 0, x: -8, y: 8 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-full bg-accent-alt px-4 py-2 font-body text-base leading-none text-white md:px-5 md:text-xl"
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="m-0 max-w-200 font-body text-[15px] md:text-[25px] lg:text-[35px] leading-[1.2] text-white/90"
            >
              {card.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </article>
  )
}
