import { AboutHeroSection } from '../sections/AboutHeroSection'
import { AboutMainSection } from '../sections/AboutMainSection'
import { EducationExperienceSection } from '../sections/EducationExperienceSection'
import { CTASection } from '../sections/CTASection'
import { Footer } from '../components/layout/Footer'

export function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutMainSection />
      <EducationExperienceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
