import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { languageLabels, languageNames, languages } from '../i18n'

export default function LanguagePicker() {
  const { pickerOpen, setLanguage, closePicker, translation, language } = useLanguage()

  return (
    <AnimatePresence>
      {pickerOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/88 px-4 py-6 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-xl rounded-[2rem] border border-paper/10 bg-paper/[0.08] p-6 md:p-8 text-paper shadow-[0_30px_80px_-45px_rgba(0,0,0,0.75)]"
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">
                  {translation.nav.brand}
                </p>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                  {translation.picker.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closePicker}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/10 text-paper/70 transition duration-200 ease-out hover:bg-paper/8 hover:text-paper active:scale-95"
                aria-label="Close language picker"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <p className="mt-4 max-w-lg text-sm md:text-base leading-relaxed text-paper/68">
              {translation.picker.body}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {languages.map((entry) => {
                const active = language === entry
                return (
                  <button
                    key={entry}
                    type="button"
                    onClick={() => setLanguage(entry)}
                    className={`rounded-[1.35rem] border px-4 py-4 text-left transition duration-200 ease-out active:scale-[0.99] ${
                      active
                        ? 'border-paper/35 bg-paper text-deep'
                        : 'border-paper/10 bg-paper/[0.04] text-paper hover:bg-paper/8 hover:border-paper/20'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-lg tracking-tight">{languageNames[entry]}</span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">{languageLabels[entry]}</span>
                    </div>
                    <p className={`mt-3 text-xs leading-relaxed ${active ? 'text-deep/68' : 'text-paper/58'}`}>
                      {translation.picker.choose}
                    </p>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/38">
                {translation.picker.helper}
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-paper/10 bg-paper/[0.05] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-paper/55">
                <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                {languageLabels[language]}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
