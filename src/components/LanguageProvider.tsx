import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getTranslation, type Language, translations } from '../i18n'

const STORAGE_KEY = 'gcap-language'

type LanguageContextValue = {
  language: Language
  isRtl: boolean
  translation: ReturnType<typeof getTranslation>
  setLanguage: (language: Language) => void
  pickerOpen: boolean
  openPicker: () => void
  closePicker: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'ar' || value === 'th'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [pickerOpen, setPickerOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(stored)) {
      setLanguageState(stored)
      setPickerOpen(false)
    } else {
      setPickerOpen(true)
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return

    const rtl = language === 'ar'
    document.documentElement.lang = language
    document.documentElement.dir = rtl ? 'rtl' : 'ltr'
    document.documentElement.dataset.lang = language
    document.body.dataset.lang = language
    document.body.dataset.dir = rtl ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, language)

    const current = translations[language]
    document.title = `${current.nav.brand} — ${current.hero.eyebrow}`

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', current.hero.subtitle)
    }
  }, [language, ready])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    setPickerOpen(false)
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isRtl: language === 'ar',
      translation: getTranslation(language),
      setLanguage,
      pickerOpen,
      openPicker: () => setPickerOpen(true),
      closePicker: () => setPickerOpen(false),
    }),
    [language, pickerOpen]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return value
}
