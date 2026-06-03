import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../components/LanguageProvider'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null)
  const { translation } = useLanguage()

  useGSAP(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll('.manifesto-reveal')
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
          },
          delay: index * 0.08,
        },
      )
    })

    const quote = sectionRef.current.querySelector('.manifesto-quote')
    if (quote) {
      gsap.fromTo(
        quote,
        { y: 60 },
        {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: quote,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )
    }
  }, { scope: sectionRef })

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full bg-paper py-32 md:py-48"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 lg:px-24">
        <div className="editorial-grid mb-24">
          <div className="manifesto-reveal opacity-0">
            <span className="label mb-4 block">{translation.manifesto.eyebrow}</span>
            <h2 className="display-lg text-ink mb-8">
              {translation.manifesto.title[0]}
              <br />
              {translation.manifesto.title[1]}
            </h2>
          </div>
          <div className="manifesto-reveal flex items-end opacity-0">
            <p className="body-lg max-w-md">{translation.manifesto.body}</p>
          </div>
        </div>

        <div className="manifesto-quote relative border-y border-ink/10 py-16 md:py-24">
          <blockquote className="display-md max-w-4xl italic text-ink/90">
            {translation.manifesto.quote}
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px w-8 bg-signal" />
            <span className="label">{translation.manifesto.caption}</span>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {translation.manifesto.principles.map((item, index) => (
            <div
              key={item.title}
              className="manifesto-reveal group opacity-0"
              style={{ marginTop: index === 1 ? '3rem' : '0' }}
            >
              <div className="glass h-full p-8 transition-all duration-300 group-hover:border-signal/20">
                <span className="mb-4 block font-mono text-xs text-signal/60">0{index + 1}</span>
                <h3 className="mb-4 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="body-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
