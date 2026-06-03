import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useLanguage } from './LanguageProvider'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const { translation } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [percent, setPercent] = useState(0)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })

    const startTime = Date.now()
    const duration = 2200
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setPercent(Math.floor(progress * 100))
      if (progress >= 1) {
        clearInterval(interval)
      }
    }, 30)

    const timeout = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          onComplete()
        },
      })
    }, 2800)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-deep flex flex-col items-center justify-center px-6"
    >
      <div ref={logoRef} className="opacity-0 translate-y-4 flex flex-col items-center text-center">
        <span className="font-display font-bold text-[42px] text-paper tracking-tight">
          {translation.loading.title}
        </span>
        <div
          className="mt-3 h-px bg-signal"
          style={{ width: `${percent}%`, maxWidth: '120px', transition: 'width 0.1s linear' }}
        />
      </div>

      <div className="mt-6 font-mono text-xs text-paper/40 tracking-widest">
        {percent}%
      </div>

      <p className="mt-3 font-sans text-xs font-light italic text-paper/25 text-center">
        {translation.loading.subtitle}
      </p>
    </div>
  )
}
