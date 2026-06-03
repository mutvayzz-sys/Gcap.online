import { useEffect, useState, useCallback } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './sections/Hero'
import Manifesto from './sections/Manifesto'
import Systems from './sections/Systems'
import Business from './sections/Business'
import GenerativeField from './sections/GenerativeField'
import Footer from './sections/Footer'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import GrainOverlay from './components/GrainOverlay'
import LanguagePicker from './components/LanguagePicker'

import { useLanguage } from './components/LanguageProvider'

gsap.registerPlugin(ScrollTrigger)

function AppShell() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={`relative transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <GrainOverlay />
        <Navigation />
        <main>
          <Hero />
          <Manifesto />
          <Systems />
          <Business />
          <GenerativeField />
        </main>
        <Footer />
      </div>
      <LanguagePicker />
    </>
  )
}

export default function App() {
  const { translation } = useLanguage()

  useEffect(() => {
    document.title = `${translation.nav.brand} — ${translation.hero.eyebrow}`
  }, [translation])

  return <AppShell />
}
