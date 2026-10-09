import { type PointerEvent, useCallback, useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { Outlet, useLocation } from 'react-router-dom'
import { IntroPreloader } from '../IntroPreloader'
import { ContactSheetProvider } from '../contact/ContactSheet'
import { Navbar } from './Navbar'

function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return null
}

export function Layout() {
  const [preloaderComplete, setPreloaderComplete] = useState(false)
  const handlePreloaderComplete = useCallback(() => setPreloaderComplete(true), [])
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(-500)
  const pointerY = useMotionValue(-500)
  const pointerOpacity = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 28, mass: 0.6 })
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 28, mass: 0.6 })
  const smoothOpacity = useSpring(pointerOpacity, { stiffness: 90, damping: 24 })

  const trackPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return

    pointerX.set(event.clientX)
    pointerY.set(event.clientY)
    pointerOpacity.set(1)
  }

  return (
    <ContactSheetProvider>
      <div
        onPointerMove={trackPointer}
        onPointerLeave={() => pointerOpacity.set(0)}
        className="min-h-svh"
      >
        <IntroPreloader onComplete={handlePreloaderComplete} />
        <ScrollToTop />
        <Navbar />
        <Outlet context={{ preloaderComplete }} />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-49 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,113,77,0.14)_0%,rgba(255,113,77,0.06)_68%,transparent_92%)] max-lg:hidden"
          style={{ x: smoothX, y: smoothY, opacity: smoothOpacity }}
        />
      </div>
    </ContactSheetProvider>
  )
}
