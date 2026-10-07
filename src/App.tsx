import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { AboutPage } from './pages/AboutPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage'
import { ExpertisePage } from './pages/ExpertisePage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
      </Route>
    </Routes>
  )
}

export default App
