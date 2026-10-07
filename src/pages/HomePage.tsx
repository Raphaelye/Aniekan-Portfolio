import { Footer } from '../components/layout/Footer'
import { CTASection } from '../sections/CTASection'
import { HeroSection } from '../sections/HeroSection'
import { HighlightsSection } from '../sections/HighlightsSection'
import { ProcessSection } from '../sections/ProcessSection'
import { SocialProof } from '../sections/SocialProof'

export function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <SocialProof />
        <ProcessSection />
        <HighlightsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
