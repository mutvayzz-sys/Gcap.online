import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../components/LanguageProvider'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const { translation } = useLanguage()

  useGSAP(() => {
    if (!footerRef.current) return

    const links = footerRef.current.querySelectorAll('.footer-link')
    gsap.fromTo(
      links,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      },
    )

    const brand = footerRef.current.querySelector('.footer-brand')
    gsap.fromTo(
      brand,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 70%',
        },
      },
    )
  }, { scope: footerRef })

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative w-full bg-deep py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 lg:px-24">
        <div className="footer-brand mb-20 opacity-0 md:mb-32">
          <h2 className="font-display text-[clamp(80px,18vw,240px)] font-bold leading-none tracking-tighter text-paper/5 select-none">
            {translation.nav.brand}
          </h2>
        </div>

        <div className="mb-20 flex flex-col gap-4">
          {translation.footer.links.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="footer-link group inline-flex items-center gap-4 font-display text-2xl font-bold text-paper transition-colors duration-200 hover:text-signal md:text-4xl"
            >
              {link.text}
              <span className="inline-block text-signal/60 transition-transform duration-300 group-hover:translate-x-2">
                {link.external ? '↗' : '→'}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-paper/10 pt-8 md:flex-row md:items-end">
          <p className="font-sans text-xs text-paper/25">
            {translation.footer.copyright}
          </p>
          <div className="text-right">
            <span className="font-display text-sm font-bold text-paper/40">{translation.nav.brand}</span>
            <p className="mt-1 font-sans text-[10px] text-paper/20">
              {translation.footer.descriptor}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
