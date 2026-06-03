import { useRef, useState, type FormEvent } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../components/LanguageProvider'

type DemoSubmission = {
  businessType: string
  integrationType: string
  phone: string
  email: string
  notes: string
}

function DemoRequestForm() {
  const { translation, language } = useLanguage()
  const [submitted, setSubmitted] = useState<DemoSubmission | null>(null)
  const responseCopy = {
    en: {
      focused: 'focused on',
      callbackLive: 'We will also use the phone number you shared for a live-demo callback.',
      callbackFallback: 'If you want a live demo, add your number next time and we will call you back.',
      reply: 'Reply address:',
      notes: 'Notes:',
      yourBusiness: 'your business',
    },
    ar: {
      focused: 'مع التركيز على',
      callbackLive: 'سنستخدم أيضاً رقم الهاتف الذي شاركته للاتصال بخصوص العرض المباشر.',
      callbackFallback: 'إذا أردت عرضاً مباشراً، أضف رقمك في المرة القادمة وسنعاود الاتصال بك.',
      reply: 'عنوان الرد:',
      notes: 'ملاحظات:',
      yourBusiness: 'نشاطك',
    },
    th: {
      focused: 'โดยโฟกัสที่',
      callbackLive: 'เราจะใช้เบอร์โทรที่คุณให้ไว้เพื่อติดต่อกลับเกี่ยวกับเดโมสดด้วย.',
      callbackFallback: 'ถ้าคุณต้องการเดโมสด ให้ใส่เบอร์ไว้ครั้งหน้า แล้วเราจะโทรกลับหา.',
      reply: 'อีเมลตอบกลับ:',
      notes: 'หมายเหตุ:',
      yourBusiness: 'ธุรกิจของคุณ',
    },
  } as const

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const nextSubmission: DemoSubmission = {
      businessType: String(formData.get('businessType') || '').trim(),
      integrationType: String(formData.get('integrationType') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      notes: String(formData.get('notes') || '').trim(),
    }
    setSubmitted(nextSubmission)
    event.currentTarget.reset()
  }

  return (
    <div className="glass rounded-[2rem] border border-ink/10 bg-paper/80 p-6 shadow-[0_20px_60px_-35px_rgba(26,24,20,0.28)] md:p-8">
      <div className="mb-8">
        <span className="label mb-3 block">{translation.demo.eyebrow}</span>
        <h3 className="display-md text-ink">
          {translation.demo.title[0]}
          <br />
          {translation.demo.title[1]}
        </h3>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">{translation.demo.fields.businessType}</span>
          <input
            name="businessType"
            type="text"
            placeholder={translation.demo.placeholders.businessType}
            className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 text-sm text-ink outline-none placeholder:text-ink/35 transition duration-200 ease-out focus:border-signal focus:ring-2 focus:ring-signal/20"
          />
        </label>

        <label className="block space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">{translation.demo.fields.integrationType}</span>
          <select
            name="integrationType"
            className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 text-sm text-ink outline-none transition duration-200 ease-out focus:border-signal focus:ring-2 focus:ring-signal/20"
            defaultValue=""
          >
            <option value="" disabled>
              {translation.demo.selectPrompt}
            </option>
            {translation.demo.options.map((option) => (
              <option key={option.title} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">{translation.demo.fields.email}</span>
            <input
              name="email"
              type="email"
              placeholder={translation.demo.placeholders.email}
              className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 text-sm text-ink outline-none placeholder:text-ink/35 transition duration-200 ease-out focus:border-signal focus:ring-2 focus:ring-signal/20"
            />
          </label>

          <label className="block space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">{translation.demo.fields.phone}</span>
            <input
              name="phone"
              type="tel"
              placeholder={translation.demo.placeholders.phone}
              className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 text-sm text-ink outline-none placeholder:text-ink/35 transition duration-200 ease-out focus:border-signal focus:ring-2 focus:ring-signal/20"
            />
          </label>
        </div>

        <label className="block space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">{translation.demo.fields.notes}</span>
          <textarea
            name="notes"
            rows={4}
            placeholder={translation.demo.placeholders.notes}
            className="w-full rounded-[1.5rem] border border-ink/10 bg-paper px-4 py-4 text-sm text-ink outline-none placeholder:text-ink/35 transition duration-200 ease-out focus:border-signal focus:ring-2 focus:ring-signal/20"
          />
        </label>

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-ink/95 active:scale-[0.98]"
        >
          {translation.demo.submit}
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
        </button>

        <p className="text-sm leading-relaxed text-ink/58">{translation.demo.helper}</p>
      </form>

      {submitted && (
        <div className="mt-8 rounded-[1.5rem] border border-moss/20 bg-moss/8 p-5 text-sm text-ink/80">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-moss">{translation.demo.receivedTitle}</p>
          <p className="leading-relaxed">
            {translation.demo.receivedBody} <span className="font-semibold text-ink">{submitted.businessType || responseCopy[language].yourBusiness}</span>
            {submitted.integrationType ? ` ${responseCopy[language].focused} ${submitted.integrationType}` : ''}.
            {submitted.phone ? ` ${responseCopy[language].callbackLive}` : ` ${responseCopy[language].callbackFallback}`}
          </p>
          {submitted.email && <p className="mt-3 text-ink/60">{responseCopy[language].reply} {submitted.email}</p>}
          {submitted.notes && <p className="mt-2 text-ink/60">{responseCopy[language].notes} {submitted.notes}</p>}
        </div>
      )}
    </div>
  )
}

export default function Business() {
  const demoRef = useRef<HTMLElement>(null)
  const businessRef = useRef<HTMLElement>(null)
  const { translation } = useLanguage()

  useGSAP(() => {
    if (!demoRef.current) return
    const demoBlocks = demoRef.current.querySelectorAll('.demo-reveal')
    gsap.fromTo(
      demoBlocks,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: demoRef.current,
          start: 'top 82%',
        },
      },
    )
  }, { scope: demoRef })

  useGSAP(() => {
    if (!businessRef.current) return
    const businessBlocks = businessRef.current.querySelectorAll('.business-reveal')
    gsap.fromTo(
      businessBlocks,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: businessRef.current,
          start: 'top 82%',
        },
      },
    )
  }, { scope: businessRef })

  return (
    <>
      <section
        id="demo"
        ref={demoRef}
        className="relative w-full bg-paper py-32 md:py-44"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 lg:px-24">
          <div className="editorial-grid items-start gap-12">
            <div className="demo-reveal opacity-0">
              <span className="label mb-4 block">{translation.demo.eyebrow}</span>
              <h2 className="display-lg max-w-3xl text-ink">
                {translation.demo.title[0]}
                <br />
                {translation.demo.title[1]}
              </h2>
              <p className="body-lg mt-8 max-w-xl">{translation.demo.body}</p>

              <div className="mt-10 grid gap-4">
                {translation.demo.options.map((option) => (
                  <div
                    key={option.title}
                    className="rounded-[1.75rem] border border-ink/10 bg-ink/[0.03] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-signal/25"
                  >
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">{option.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/68 md:text-base">{option.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="demo-reveal opacity-0">
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>

      <section
        id="business"
        ref={businessRef}
        className="relative w-full overflow-hidden bg-deep py-32 md:py-48"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(196,168,130,0.16) 0%, transparent 34%), radial-gradient(circle at 80% 10%, rgba(74,93,78,0.14) 0%, transparent 30%), radial-gradient(circle at 55% 100%, rgba(217,196,160,0.09) 0%, transparent 40%)',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 lg:px-24">
          <div className="business-reveal mb-16 opacity-0 md:mb-24">
            <span className="label mb-4 block text-paper/30">{translation.business.eyebrow}</span>
            <h2 className="display-lg max-w-4xl text-paper">
              {translation.business.title[0]}
              <br />
              {translation.business.title[1]}
            </h2>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="business-reveal opacity-0">
              <p className="body-lg max-w-2xl text-paper/68">{translation.business.body}</p>

              <div className="mt-10 grid max-w-2xl gap-4">
                {translation.business.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-[1.5rem] border border-paper/10 bg-paper/4 px-5 py-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-signal" />
                    <p className="text-sm leading-relaxed text-paper/74 md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="business-reveal opacity-0">
              <div className="glass-dark rounded-[2rem] border border-paper/10 p-6 md:p-8">
                <span className="label mb-4 block text-paper/30">{translation.business.cardTitle}</span>
                <h3 className="font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">
                  {translation.business.cardTitle}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/62 md:text-base">
                  {translation.business.cardBody}
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:hello@gcap.online?subject=AI%20integration%20help"
                    className="group inline-flex w-full items-center justify-between rounded-full border border-paper/12 bg-paper/8 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-paper/12 active:scale-[0.98]"
                  >
                    {translation.business.contact}
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                  </a>

                  <div className="rounded-[1.5rem] border border-paper/10 bg-paper/5 p-5 text-sm leading-relaxed text-paper/68">
                    {translation.business.phoneNote}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
