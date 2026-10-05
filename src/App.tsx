import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { CTASection } from './sections/CTASection'
import { HeroSection } from './sections/HeroSection'
import { HighlightsSection } from './sections/HighlightsSection'
import { ProcessSection } from './sections/ProcessSection'
import { SocialProof } from './sections/SocialProof'

function App() {
  return (
    <>
      <Navbar />
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

export default App
