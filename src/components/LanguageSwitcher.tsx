import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './LanguageProvider'

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M1.5 8h13M8 1.5c1.9 1.7 3 4 3 6.5s-1.1 4.8-3 6.5M8 1.5c-1.9 1.7-3 4-3 6.5s1.1 4.8 3 6.5" strokeLinecap="round" />
    </svg>
  )
}

export default function LanguageSwitcher() {
  const { language, setLanguage, translation } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex items-center gap-2 rounded-full border border-paper/12 bg-paper/[0.06] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/72 transition duration-200 ease-out hover:bg-paper/10 hover:text-paper active:scale-[0.98]"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={translation.nav.language}
      >
        <GlobeIcon />
        <span>{language.toUpperCase()}</span>
      </button>

      {open && (
        <div className={`absolute top-[calc(100%+0.75rem)] min-w-44 rounded-[1.35rem] border border-paper/10 bg-deep/95 p-2 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)] backdrop-blur-xl ${language === 'ar' ? 'left-0' : 'right-0'}`}>
          {(['en', 'ar', 'th'] as const).map((entry) => (
            <button
              key={entry}
              type="button"
              onClick={() => {
                setLanguage(entry)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between rounded-[1rem] px-3 py-3 text-left transition duration-200 ease-out active:scale-[0.99] ${
                language === entry
                  ? 'bg-paper text-deep'
                  : 'text-paper/70 hover:bg-paper/8 hover:text-paper'
              }`}
            >
              <span className="font-display text-base tracking-tight">{entry === 'en' ? 'English' : entry === 'ar' ? 'العربية' : 'ไทย'}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">{entry.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
