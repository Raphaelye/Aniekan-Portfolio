import { CaseStudyHero } from '../sections/CaseStudyHero'
import { CaseStudiesSection } from '../sections/CaseStudiesSection'
import { CTASection } from '../sections/CTASection'
import { Footer } from '../components/layout/Footer'

export function CaseStudiesPage() {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudiesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
