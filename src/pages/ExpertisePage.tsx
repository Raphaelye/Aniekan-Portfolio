import { ExpertiseHero } from '../sections/ExpertiseHero'
import { ExpertiseSection } from '../sections/ExpertiseSection'
import { SpeakingEducationSection } from '../sections/SpeakingEducationSection'
import { CTASection } from '../sections/CTASection'
import { Footer } from '../components/layout/Footer'

export function ExpertisePage() {
  return (
    <main className="select-none">
      <ExpertiseHero />
      <ExpertiseSection />
      <SpeakingEducationSection />
      <CTASection />
      <Footer />
    </main>
  )
}
