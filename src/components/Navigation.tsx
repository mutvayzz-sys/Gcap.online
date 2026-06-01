import { useRef, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from './LanguageProvider'

export default function Navigation() {
  const { translation, language } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const navItems = [
    { label: translation.nav.home, href: '#hero' },
    { label: translation.nav.manifesto, href: '#manifesto' },
    { label: translation.nav.systems, href: '#systems' },
    { label: translation.nav.demo, href: '#demo' },
    { label: translation.nav.business, href: '#business' },
    { label: translation.nav.contact, href: '#footer' },
  ]

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="glass-dark mx-4 mt-4 rounded-xl px-5 py-3 flex items-center justify-between gap-4">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault()
              scrollTo('#hero')
            }}
            className="font-display font-bold text-lg text-paper tracking-tight"
          >
            {translation.nav.brand}
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollTo(item.href)
                }}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/50 hover:text-paper transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div>
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="md:hidden text-paper/70 hover:text-paper transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="0" y1="1" x2="20" y2="1" />
                <line x1="0" y1="7" x2="20" y2="7" />
                <line x1="0" y1="13" x2="20" y2="13" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-deep/95 backdrop-blur-2xl flex flex-col items-center justify-center px-6 py-10">
          <button
            onClick={() => setMenuOpen(false)}
            className={`absolute top-6 ${language === 'ar' ? 'left-6 right-auto' : 'right-6'} text-paper/60 hover:text-paper transition-colors`}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper/24">
              {translation.nav.language} · {language.toUpperCase()}
            </p>
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollTo(item.href)
                }}
                className="font-display font-bold text-3xl text-paper hover:text-signal transition-colors duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
