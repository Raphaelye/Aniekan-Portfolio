import { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'
import animationData from '../data/aniekanLogoIntro.json'

const HOLD_FRAME = 254
const REVEAL_FRAME = 262
const END_FRAME = 283
const BLACK_HOLD_MS = 90
const INK = [0.05, 0.05, 0.05]

type PreloaderPhase = 'loading' | 'waiting' | 'diving' | 'revealing' | 'blackout' | 'revealed'

type JsonObject = { [key: string]: unknown }

function applyBrandColors(value: unknown): void {
  if (Array.isArray(value)) {
    value.forEach(applyBrandColors)
    return
  }

  if (typeof value !== 'object' || value === null) return

  const record = value as JsonObject

  if (record.ty === 'fl' && typeof record.c === 'object' && record.c !== null) {
    const color = record.c as JsonObject

    if (Array.isArray(color.k) && color.k.every((channel) => typeof channel === 'number')) {
      color.k = [...INK, color.k[3] ?? 1]
    }
  }

  Object.values(record).forEach(applyBrandColors)
}

function createPreloaderAnimationData() {
  const data = structuredClone(animationData)
  data.layers = data.layers.filter((layer) => layer.nm !== 'background')
  applyBrandColors(data)
  return data
}

const preloaderAnimationData = createPreloaderAnimationData()

export function IntroPreloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [phase, setPhase] = useState<PreloaderPhase>('loading')

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    if (!containerRef.current) {
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: preloaderAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      },
    })

    let stage: 'intro' | 'waiting' | 'outro' = 'intro'
    let pageReady = false
    let cancelled = false
    let revealing = false
    let revealTimer: number | undefined

    const startOutro = () => {
      if (stage !== 'waiting' || !pageReady) return

      stage = 'outro'
      setPhase('diving')
      animation.playSegments([HOLD_FRAME, END_FRAME], true)
    }

    const handlePageLoad = () => {
      void document.fonts.ready.then(() => {
        if (cancelled) return
        pageReady = true
        startOutro()
      })
    }

    const handleEnterFrame = (event: { currentTime: number }) => {
      if (stage === 'outro' && !revealing && event.currentTime >= REVEAL_FRAME - HOLD_FRAME) {
        revealing = true
        setPhase('revealing')
      }
    }
    const handleComplete = () => {
      if (stage === 'intro') {
        stage = 'waiting'
        if (!pageReady) setPhase('waiting')
        startOutro()
        return
      }

      if (stage !== 'outro') return

      setPhase('blackout')
      revealTimer = window.setTimeout(() => {
        if (cancelled) return
        document.body.style.overflow = previousOverflow
        setPhase('revealed')
        onComplete()
      }, BLACK_HOLD_MS)
    }

    animation.addEventListener('enterFrame', handleEnterFrame)
    animation.addEventListener('complete', handleComplete)
    const handleDomLoaded = () => {
      animation.playSegments([0, HOLD_FRAME], true)
    }
    animation.addEventListener('DOMLoaded', handleDomLoaded)
    if (document.readyState === 'complete') handlePageLoad()
    else window.addEventListener('load', handlePageLoad, { once: true })

    return () => {
      cancelled = true
      window.clearTimeout(revealTimer)
      window.removeEventListener('load', handlePageLoad)
      animation.removeEventListener('enterFrame', handleEnterFrame)
      animation.removeEventListener('complete', handleComplete)
      animation.removeEventListener('DOMLoaded', handleDomLoaded)
      animation.destroy()
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete])

  return (
    <div className={`preloader ${phase}`} aria-hidden={phase === 'revealed'}>
      <div className="preloader__bg" />
      <div ref={containerRef} className="preloader__lottie" />
    </div>
  )
}
