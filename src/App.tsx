import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './sections/HeroSection'
import { ProcessSection } from './sections/ProcessSection'
import { SocialProof } from './sections/SocialProof'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="relative bg-background max-md:pt-3">
          <SocialProof />
          <ProcessSection />
        </div>
      </main>
    </>
  )
}

export default App
