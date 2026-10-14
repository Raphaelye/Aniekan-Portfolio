import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage').then(({ HomePage }) => ({ default: HomePage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(({ CaseStudiesPage }) => ({ default: CaseStudiesPage })))
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage').then(({ CaseStudyDetailPage }) => ({ default: CaseStudyDetailPage })))
const ExpertisePage = lazy(() => import('./pages/ExpertisePage').then(({ ExpertisePage }) => ({ default: ExpertisePage })))

const pageFallback = (
  <main className="flex min-h-dvh items-center justify-center bg-background">
    <p role="status" className="font-body text-sm text-text-muted">Loading page…</p>
  </main>
)

function withPageFallback(page: ReactNode) {
  return <Suspense fallback={pageFallback}>{page}</Suspense>
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={withPageFallback(<HomePage />)} />
        <Route path="/about" element={withPageFallback(<AboutPage />)} />
        <Route path="/case-studies" element={withPageFallback(<CaseStudiesPage />)} />
        <Route path="/case-studies/:slug" element={withPageFallback(<CaseStudyDetailPage />)} />
        <Route path="/expertise" element={withPageFallback(<ExpertisePage />)} />
      </Route>
    </Routes>
  )
}

export default App
