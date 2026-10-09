import { useOutletContext } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { CTASection } from '../sections/CTASection'
import { HeroSection } from '../sections/HeroSection'
import { HighlightsSection } from '../sections/HighlightsSection'
import { ProcessSection } from '../sections/ProcessSection'
import { SocialProof } from '../sections/SocialProof'

export function HomePage() {
  const { preloaderComplete } = useOutletContext<{ preloaderComplete: boolean }>()

  return (
    <>
      <main className="select-none">
        <HeroSection preloaderComplete={preloaderComplete} />
        <SocialProof />
        <ProcessSection />
        <HighlightsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
