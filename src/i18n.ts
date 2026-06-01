export type Language = 'en' | 'ar' | 'th'

export const languages: Language[] = ['en', 'ar', 'th']

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  ar: 'AR',
  th: 'TH',
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  ar: 'العربية',
  th: 'ไทย',
}

export type Translation = {
  nav: {
    brand: string
    home: string
    manifesto: string
    systems: string
    demo: string
    business: string
    contact: string
    language: string
  }
  hero: {
    eyebrow: string
    title: [string, string, string]
    subtitle: string
    primary: string
    secondary: string
  }
  manifesto: {
    eyebrow: string
    title: [string, string]
    body: string
    quote: string
    caption: string
    principles: Array<{ title: string; body: string }>
  }
  systems: {
    eyebrow: string
    title: [string, string]
    items: Array<{
      id: string
      name: string
      description: string
      tags: string[]
    }>
  }
  demo: {
    eyebrow: string
    title: [string, string]
    body: string
    options: Array<{ title: string; text: string }>
    fields: {
      businessType: string
      integrationType: string
      email: string
      phone: string
      notes: string
    }
    placeholders: {
      businessType: string
      integrationType: string
      email: string
      phone: string
      notes: string
    }
    selectPrompt: string
    submit: string
    helper: string
    receivedTitle: string
    receivedBody: string
  }
  business: {
    eyebrow: string
    title: [string, string]
    body: string
    bullets: string[]
    cardTitle: string
    cardBody: string
    contact: string
    phoneNote: string
  }
  footer: {
    links: Array<{ text: string; href: string; external?: boolean }>
    copyright: string
    descriptor: string
  }
  loading: {
    title: string
    subtitle: string
  }
  picker: {
    title: string
    body: string
    helper: string
    choose: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      brand: 'GCAP',
      home: 'Signal',
      manifesto: 'Manifesto',
      systems: 'Systems',
      demo: 'Demo',
      business: 'Business',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Generative Computational Arts Platform',
      title: ['Signal', 'becomes', 'form'],
      subtitle:
        'A living computational organism where signal enters, memory catches it, and the invisible becomes watchable.',
      primary: 'Enter the system',
      secondary: 'Switch language',
    },
    manifesto: {
      eyebrow: '01 · Philosophy',
      title: ['Taste is trained,', 'not innate.'],
      body:
        'We believe beauty is leverage. Every unseen detail compounds into an experience that feels inevitable. The best interfaces disappear and leave only intent.',
      quote:
        '“The page is the trailer. The trailer is the interface. The interface is the organism.”',
      caption: 'GCAP design ethos',
      principles: [
        {
          title: 'Spatial consistency',
          body: 'Every animation has a purpose. Motion indicates state, provides feedback, and keeps the system legible.',
        },
        {
          title: 'Invisible details',
          body: 'Custom easing, hardware-accelerated transforms, and spring physics create interfaces that feel alive.',
        },
        {
          title: 'Computational beauty',
          body: 'Generative systems produce variation without losing structure. Each session becomes its own composition.',
        },
      ],
    },
    systems: {
      eyebrow: '02 · Architecture',
      title: ['Six systems.', 'One organism.'],
      items: [
        {
          id: 'SYS.01',
          name: 'Signal',
          description:
            'Real-time intake layer. Every event arrives as signal, and every signal becomes a thread in the larger composition.',
          tags: ['Stream', 'Event-driven', 'Reactive'],
        },
        {
          id: 'SYS.02',
          name: 'Memory',
          description:
            'Persistent context engine. Not storage, memory. The system recalls what matters and lets the rest fall away.',
          tags: ['Vector DB', 'Context', 'Recall'],
        },
        {
          id: 'SYS.03',
          name: 'Kanban',
          description:
            'Shared work surfaces that route tasks through agents. Work moves with intent instead of noise.',
          tags: ['Routing', 'Surface', 'Flow'],
        },
        {
          id: 'SYS.04',
          name: 'Conductor',
          description:
            'Orchestration layer that coordinates agent swarms. It keeps timing, not noise, at the center.',
          tags: ['Orchestrate', 'Schedule', 'Coordinate'],
        },
        {
          id: 'SYS.05',
          name: 'Swarm',
          description:
            'Autonomous agent collective. Each agent stays simple, but together they produce emergent intelligence.',
          tags: ['Agents', 'Emergent', 'Collective'],
        },
        {
          id: 'SYS.06',
          name: 'World',
          description:
            'The visible layer. GCAP renders the invisible watchable, turning data into atmosphere.',
          tags: ['Visualize', 'Render', 'World'],
        },
      ],
    },
    demo: {
      eyebrow: '03 · Demo request',
      title: ['See what it can do,', 'then ask for the right demo.'],
      body:
        'We shape the demo around your business type and the integration you actually need. Keep it clear, and the setup stays clear.',
      options: [
        {
          title: 'Prepared demo',
          text: 'Tell us what kind of business you run and what you want to connect, and we shape the demo before you arrive.',
        },
        {
          title: 'Live in-person demo',
          text: 'Leave your phone number and we will arrange a live demo with the right setup and the right person in the room.',
        },
        {
          title: 'Remote setup',
          text: 'For international customers, we can prepare the system remotely and walk your team through it online.',
        },
      ],
      fields: {
        businessType: 'Business type',
        integrationType: 'Type of integration',
        email: 'Email',
        phone: 'Phone for live demo',
        notes: 'Notes',
      },
      placeholders: {
        businessType: 'Retail, clinic, agency, real estate, hospitality...',
        integrationType: 'Choose the kind of help you want',
        email: 'you@company.com',
        phone: 'Optional, if you want us to call you',
        notes: 'Tell us a little about the result you want. We will prepare the right demo in plain language.',
      },
      selectPrompt: 'Choose the kind of help you want',
      submit: 'Prepare my demo',
      helper:
        'Leave a phone number if you want a live in-person demo. If you are outside the UAE, we can set up the system remotely and walk your team through it online.',
      receivedTitle: 'Request received',
      receivedBody: 'We will prepare a demo for',
    },
    business: {
      eyebrow: '04 · Business help',
      title: ['We help you connect AI', 'to how your business actually works.'],
      body:
        'If you are a founder or a business owner, we can help you think through the setup, the handoff, and the rollout. No jargon, no confusion, just a clean path from idea to working system.',
      bullets: [
        'Consultancy to choose the right approach for your team',
        'Integration help so your tools and workflows stay connected',
        'A simple rollout plan your team can understand quickly',
      ],
      cardTitle: 'Tell us what you want to improve.',
      cardBody:
        'Use the demo form above, or contact us directly if you already know what you need. For international customers, we can work remotely and keep the setup simple.',
      contact: 'Contact by email',
      phoneNote:
        'Prefer phone? Leave your number in the demo form and we will call you back to arrange a live in-person demo.',
    },
    footer: {
      links: [
        { text: 'Enter the lab', href: '#hero' },
        { text: 'Read the manifesto', href: '#manifesto' },
        { text: 'Request a demo', href: '#demo' },
        { text: 'Business help', href: '#business' },
        { text: 'Contact', href: 'mailto:hello@gcap.online', external: true },
      ],
      copyright: '© 2025 GCAP Labs. All rights reserved. Built with intent.',
      descriptor: 'Generative Computational Arts Platform',
    },
    loading: {
      title: 'GCAP',
      subtitle: 'Initializing generative systems...',
    },
    picker: {
      title: 'Choose your language',
      body: 'Select the language for your first visit. You can switch anytime.',
      helper: 'Your choice will be saved in this browser.',
      choose: 'Choose',
    },
  },
  ar: {
    nav: {
      brand: 'GCAP',
      home: 'الإشارة',
      manifesto: 'البيان',
      systems: 'الأنظمة',
      demo: 'العرض التجريبي',
      business: 'الأعمال',
      contact: 'التواصل',
      language: 'اللغة',
    },
    hero: {
      eyebrow: 'منصة الفنون الحاسوبية التوليدية',
      title: ['تتحول', 'الإشارة', 'إلى شكل'],
      subtitle:
        'كائن حاسوبي حي تدخل إليه الإشارة فتلتقطها الذاكرة، ثم يصبح ما كان خفياً قابلاً للمشاهدة.',
      primary: 'ادخل إلى النظام',
      secondary: 'تبديل اللغة',
    },
    manifesto: {
      eyebrow: '01 · الفلسفة',
      title: ['الذوق يُصنع', 'ولا يولد.',],
      body:
        'نؤمن أن الجمال قوة عملية. كل تفصيلة غير مرئية تتراكم لتصنع تجربة تبدو حتمية. أفضل الواجهات تختفي وتترك خلفها النية فقط.',
      quote: '«الصفحة هي المقطع الدعائي، والمقطع هو الواجهة، والواجهة هي الكائن.»',
      caption: 'روح تصميم GCAP',
      principles: [
        {
          title: 'اتساق مكاني',
          body: 'لكل حركة سبب. الحركة توضّح الحالة، تقدّم التغذية الراجعة، وتحافظ على وضوح النظام.',
        },
        {
          title: 'تفاصيل غير مرئية',
          body: 'منحنيات توقيت دقيقة، وتحويلات مسرّعة عتادياً، وفيزياء نابضة تصنع واجهات تبدو حيّة.',
        },
        {
          title: 'جمال حاسوبي',
          body: 'الأنظمة التوليدية تصنع تنوعاً من دون أن تفقد البنية. كل جلسة تصبح تكويناً مستقلاً بذاته.',
        },
      ],
    },
    systems: {
      eyebrow: '02 · البنية',
      title: ['ستة أنظمة.', 'كائن واحد.'],
      items: [
        {
          id: 'SYS.01',
          name: 'الإشارة',
          description:
            'طبقة الاستقبال الفورية. كل حدث يصل كإشارة، وكل إشارة تتحول إلى خيط في التكوين الأكبر.',
          tags: ['تدفق', 'موجّه بالأحداث', 'استجابة'],
        },
        {
          id: 'SYS.02',
          name: 'الذاكرة',
          description:
            'محرك سياق دائم. ليست مجرد تخزين، بل ذاكرة. يستعيد النظام ما يهم ويترك الباقي ينساب بعيداً.',
          tags: ['قاعدة متجهات', 'سياق', 'استرجاع'],
        },
        {
          id: 'SYS.03',
          name: 'كانبان',
          description:
            'مساحات عمل مشتركة توجه المهام عبر الوكلاء. تتحرك الأعمال بقصد، لا بضجيج.',
          tags: ['توجيه', 'سطح', 'تدفق'],
        },
        {
          id: 'SYS.04',
          name: 'القائد',
          description:
            'طبقة التنسيق التي تضبط جيوش الوكلاء. تحافظ على الإيقاع، لا على الفوضى.',
          tags: ['تنسيق', 'جدولة', 'إدارة'],
        },
        {
          id: 'SYS.05',
          name: 'السرب',
          description:
            'مجموعة وكلاء مستقلين. كل وكيل بسيط، لكنهم معاً ينتجون ذكاءً ناشئاً.',
          tags: ['وكلاء', 'ناشئ', 'جماعة'],
        },
        {
          id: 'SYS.06',
          name: 'العالم',
          description:
            'الطبقة المرئية. GCAP يجعل غير المرئي قابلاً للمشاهدة ويحوّل البيانات إلى أجواء.',
          tags: ['تصوير', 'عرض', 'عالم'],
        },
      ],
    },
    demo: {
      eyebrow: '03 · طلب العرض',
      title: ['شاهد ما يمكنه فعله،', 'ثم اطلب العرض المناسب.'],
      body:
        'نصمم العرض بحسب نوع عملك ونوع التكامل الذي تحتاجه فعلاً. إذا بقي الطلب واضحاً، بقي الإعداد واضحاً.',
      options: [
        {
          title: 'عرض مُحضّر',
          text: 'أخبرنا بنوع نشاطك وما تريد ربطه، ونجهز العرض قبل وصولك.',
        },
        {
          title: 'عرض مباشر في الموقع',
          text: 'اترك رقم هاتفك وسنرتب عرضاً مباشراً بالإعداد المناسب والشخص المناسب في الغرفة.',
        },
        {
          title: 'إعداد عن بُعد',
          text: 'للعملاء خارج الإمارات، يمكننا تجهيز النظام عن بُعد وشرح الخطوات لفريقك عبر الإنترنت.',
        },
      ],
      fields: {
        businessType: 'نوع النشاط',
        integrationType: 'نوع التكامل',
        email: 'البريد الإلكتروني',
        phone: 'هاتف العرض المباشر',
        notes: 'ملاحظات',
      },
      placeholders: {
        businessType: 'تجزئة، عيادة، وكالة، عقارات، ضيافة...',
        integrationType: 'اختر نوع المساعدة التي تريدها',
        email: 'you@company.com',
        phone: 'اختياري إذا أردت أن نتصل بك',
        notes: 'أخبرنا باختصار عن النتيجة التي تريدها. سنجهز العرض المناسب بلغة بسيطة.',
      },
      selectPrompt: 'اختر نوع المساعدة التي تريدها',
      submit: 'جهّز العرض لي',
      helper:
        'اترك رقم هاتف إذا أردت عرضاً مباشراً في الموقع. إذا كنت خارج الإمارات، يمكننا إعداد النظام عن بُعد وشرح كل شيء لفريقك عبر الإنترنت.',
      receivedTitle: 'تم استلام الطلب',
      receivedBody: 'سنجهز عرضاً لـ',
    },
    business: {
      eyebrow: '04 · مساعدة الأعمال',
      title: ['نساعدك على ربط الذكاء الاصطناعي', 'بشكل عملك الفعلي.'],
      body:
        'إذا كنت مؤسساً أو صاحب عمل، يمكننا مساعدتك في التفكير في الإعداد، والتسليم، والإطلاق. لا مصطلحات معقدة، لا ارتباك، فقط طريق واضح من الفكرة إلى نظام يعمل.',
      bullets: [
        'استشارة لاختيار النهج المناسب لفريقك',
        'مساعدة في الربط حتى تظل الأدوات ومسارات العمل متصلة',
        'خطة إطلاق بسيطة يفهمها فريقك بسرعة',
      ],
      cardTitle: 'أخبرنا بما تريد تحسينه.',
      cardBody:
        'استخدم نموذج العرض أعلاه، أو تواصل معنا مباشرة إذا كنت تعرف ما تحتاجه بالفعل. للعملاء الدوليين، يمكننا العمل عن بُعد مع إبقاء الإعداد بسيطاً.',
      contact: 'التواصل بالبريد',
      phoneNote:
        'تفضل الاتصال؟ اترك رقمك في نموذج العرض وسنعاود الاتصال لترتيب عرض مباشر في الموقع.',
    },
    footer: {
      links: [
        { text: 'ادخل إلى المختبر', href: '#hero' },
        { text: 'اقرأ البيان', href: '#manifesto' },
        { text: 'اطلب عرضاً', href: '#demo' },
        { text: 'مساعدة الأعمال', href: '#business' },
        { text: 'التواصل', href: 'mailto:hello@gcap.online', external: true },
      ],
      copyright: '© 2025 GCAP Labs. جميع الحقوق محفوظة. صُمم بنية.',
      descriptor: 'منصة الفنون الحاسوبية التوليدية',
    },
    loading: {
      title: 'GCAP',
      subtitle: 'جارٍ تهيئة الأنظمة التوليدية...',
    },
    picker: {
      title: 'اختر لغتك',
      body: 'اختر لغة أول زيارة لك. يمكنك التبديل في أي وقت.',
      helper: 'سيُحفظ اختيارك في هذا المتصفح.',
      choose: 'اختر',
    },
  },
  th: {
    nav: {
      brand: 'GCAP',
      home: 'สัญญาณ',
      manifesto: 'แนวคิด',
      systems: 'ระบบ',
      demo: 'เดโม',
      business: 'ธุรกิจ',
      contact: 'ติดต่อ',
      language: 'ภาษา',
    },
    hero: {
      eyebrow: 'แพลตฟอร์มศิลปะเชิงคำนวณแบบกำเนิด',
      title: ['สัญญาณ', 'กลายเป็น', 'รูปทรง'],
      subtitle:
        'สิ่งมีชีวิตเชิงคำนวณที่สัญญาณไหลเข้ามา ความทรงจำรับไว้ และสิ่งที่มองไม่เห็นถูกทำให้มองเห็นได้.',
      primary: 'เข้าสู่ระบบ',
      secondary: 'เปลี่ยนภาษา',
    },
    manifesto: {
      eyebrow: '01 · ปรัชญา',
      title: ['รสนิยมฝึกได้', 'ไม่ใช่สิ่งที่ติดตัวมาแต่กำเนิด.'],
      body:
        'เราเชื่อว่าความงามคือพลังที่ใช้งานได้จริง รายละเอียดที่มองไม่เห็นทุกชิ้นค่อย ๆ รวมกันจนเกิดประสบการณ์ที่ดูเหมือนเป็นธรรมชาติ อินเทอร์เฟซที่ดีที่สุดจะหายไป เหลือไว้เพียงเจตนา.',
      quote: '“หน้าเว็บคือทีเซอร์ ทีเซอร์คืออินเทอร์เฟซ อินเทอร์เฟซคือสิ่งมีชีวิต.”',
      caption: 'จิตวิญญาณการออกแบบของ GCAP',
      principles: [
        {
          title: 'ความสอดคล้องเชิงพื้นที่',
          body: 'ทุกการเคลื่อนไหวมีเหตุผล มันบอกสถานะ ให้ฟีดแบ็ก และทำให้ระบบอ่านง่าย',
        },
        {
          title: 'รายละเอียดที่มองไม่เห็น',
          body: 'จังหวะการเคลื่อนที่ที่คมชัด ทรานส์ฟอร์มที่เร่งด้วยฮาร์ดแวร์ และฟิสิกส์แบบสปริงทำให้อินเทอร์เฟซมีชีวิต',
        },
        {
          title: 'ความงามเชิงคำนวณ',
          body: 'ระบบกำเนิดรูปแบบทำให้เกิดความหลากหลายโดยไม่เสียโครงสร้าง แต่ละเซสชันกลายเป็นองค์ประกอบของตัวเอง',
        },
      ],
    },
    systems: {
      eyebrow: '02 · โครงสร้าง',
      title: ['หกระบบ.', 'สิ่งมีชีวิตหนึ่งเดียว.'],
      items: [
        {
          id: 'SYS.01',
          name: 'สัญญาณ',
          description:
            'ชั้นรับข้อมูลแบบเรียลไทม์ เหตุการณ์ทุกชิ้นมาถึงในรูปสัญญาณ และสัญญาณทุกเส้นกลายเป็นเส้นเรื่องในภาพรวม.',
          tags: ['สตรีม', 'อีเวนต์', 'ตอบสนอง'],
        },
        {
          id: 'SYS.02',
          name: 'ความทรงจำ',
          description:
            'เอนจินบริบทถาวร ไม่ใช่ที่เก็บข้อมูล แต่คือความทรงจำ ระบบจะจำสิ่งสำคัญแล้วปล่อยส่วนที่เหลือให้ผ่านไป.',
          tags: ['เวกเตอร์ DB', 'บริบท', 'เรียกคืน'],
        },
        {
          id: 'SYS.03',
          name: 'คัมบัง',
          description:
            'พื้นที่ทำงานร่วมกันที่ส่งต่องานผ่านเอเจนต์ งานเคลื่อนไปอย่างมีเจตนา ไม่ใช่ด้วยเสียงรบกวน.',
          tags: ['การส่งต่อ', 'พื้นที่', 'ไหล'],
        },
        {
          id: 'SYS.04',
          name: 'วาทยกร',
          description:
            'ชั้นประสานงานที่จัดจังหวะของฝูงเอเจนต์ มันคอยรักษาเวลา ไม่ใช่ความวุ่นวาย.',
          tags: ['ประสาน', 'จัดตาราง', 'กำกับ'],
        },
        {
          id: 'SYS.05',
          name: 'ฝูง',
          description:
            'กลุ่มเอเจนต์อิสระ แต่ละตัวเรียบง่าย ทว่าร่วมกันแล้วเกิดความฉลาดแบบอุบัติใหม่.',
          tags: ['เอเจนต์', 'อุบัติใหม่', 'รวมหมู่'],
        },
        {
          id: 'SYS.06',
          name: 'โลก',
          description:
            'ชั้นที่มองเห็นได้ GCAP ทำให้สิ่งที่มองไม่เห็นกลายเป็นสิ่งที่รับรู้ได้ เปลี่ยนข้อมูลให้เป็นบรรยากาศ.',
          tags: ['แสดงผล', 'เรนเดอร์', 'โลก'],
        },
      ],
    },
    demo: {
      eyebrow: '03 · ขอเดโม',
      title: ['ดูว่ามันทำอะไรได้', 'แล้วค่อยขอเดโมที่ใช่.'],
      body:
        'เราปรับเดโมให้เข้ากับประเภทธุรกิจและการเชื่อมต่อที่คุณต้องใช้จริง ๆ ถ้าคำขอชัด การตั้งค่าก็จะชัดตาม.',
      options: [
        {
          title: 'เดโมที่เตรียมไว้',
          text: 'บอกเราว่าคุณทำธุรกิจแบบไหนและต้องการเชื่อมอะไร เราจะเตรียมเดโมให้ก่อนคุณมาถึง.',
        },
        {
          title: 'เดโมสดในสถานที่',
          text: 'ฝากเบอร์โทรไว้ แล้วเราจะจัดเดโมสดพร้อมการตั้งค่าที่เหมาะสมและคนที่เหมาะสมในห้อง.',
        },
        {
          title: 'ตั้งค่าระยะไกล',
          text: 'สำหรับลูกค้าต่างประเทศ เราสามารถเตรียมระบบจากระยะไกลและพาทีมของคุณผ่านขั้นตอนออนไลน์ได้.',
        },
      ],
      fields: {
        businessType: 'ประเภทธุรกิจ',
        integrationType: 'ประเภทการเชื่อมต่อ',
        email: 'อีเมล',
        phone: 'เบอร์โทรสำหรับเดโมสด',
        notes: 'หมายเหตุ',
      },
      placeholders: {
        businessType: 'ค้าปลีก, คลินิก, เอเจนซี, อสังหา, โรงแรม...',
        integrationType: 'เลือกประเภทความช่วยเหลือที่คุณต้องการ',
        email: 'you@company.com',
        phone: 'ไม่บังคับ หากต้องการให้เราโทรกลับ',
        notes: 'เล่าให้เราฟังสั้น ๆ ว่าคุณต้องการผลลัพธ์แบบไหน เราจะเตรียมเดโมที่เหมาะสมให้ในภาษาที่เข้าใจง่าย.',
      },
      selectPrompt: 'เลือกประเภทความช่วยเหลือที่คุณต้องการ',
      submit: 'เตรียมเดโมให้ฉัน',
      helper:
        'ใส่เบอร์โทรถ้าคุณต้องการเดโมสดในสถานที่ หากคุณอยู่นอกสหรัฐอาหรับเอมิเรตส์ เราสามารถตั้งค่าระบบระยะไกลและพาทีมของคุณผ่านขั้นตอนออนไลน์ได้.',
      receivedTitle: 'ได้รับคำขอแล้ว',
      receivedBody: 'เราจะเตรียมเดโมสำหรับ',
    },
    business: {
      eyebrow: '04 · ช่วยธุรกิจ',
      title: ['เราช่วยคุณเชื่อม AI', 'เข้ากับวิธีที่ธุรกิจของคุณทำงานจริง.'],
      body:
        'หากคุณเป็นผู้ก่อตั้งหรือเจ้าของธุรกิจ เราช่วยคิดเรื่องการตั้งค่า การส่งต่อ และการเปิดใช้งานได้แบบไม่ใช้ศัพท์ยาก ๆ แค่ทางเดินที่ชัดเจนจากไอเดียไปสู่ระบบที่ใช้งานได้จริง.',
      bullets: [
        'คำปรึกษาเพื่อเลือกแนวทางที่เหมาะกับทีมของคุณ',
        'ช่วยเชื่อมระบบให้เครื่องมือและเวิร์กโฟลว์ของคุณยังเชื่อมกันอยู่',
        'แผนเปิดใช้งานที่เรียบง่ายให้ทีมเข้าใจได้เร็ว',
      ],
      cardTitle: 'บอกเราว่าคุณอยากปรับปรุงอะไร.',
      cardBody:
        'ใช้ฟอร์มเดโมด้านบน หรือทักหาเราโดยตรงถ้าคุณรู้แล้วว่าต้องการอะไร สำหรับลูกค้าต่างประเทศ เราทำงานระยะไกลได้และยังคงการตั้งค่าให้เรียบง่าย.',
      contact: 'ติดต่อทางอีเมล',
      phoneNote:
        'ถ้าสะดวกทางโทรศัพท์ ฝากเบอร์ไว้ในฟอร์มเดโม แล้วเราจะติดต่อกลับเพื่อนัดเดโมสดในสถานที่.',
    },
    footer: {
      links: [
        { text: 'เข้าสู่แล็บ', href: '#hero' },
        { text: 'อ่านแนวคิด', href: '#manifesto' },
        { text: 'ขอเดโม', href: '#demo' },
        { text: 'ช่วยธุรกิจ', href: '#business' },
        { text: 'ติดต่อ', href: 'mailto:hello@gcap.online', external: true },
      ],
      copyright: '© 2025 GCAP Labs. สงวนลิขสิทธิ์. สร้างขึ้นด้วยเจตนา',
      descriptor: 'แพลตฟอร์มศิลปะเชิงคำนวณแบบกำเนิด',
    },
    loading: {
      title: 'GCAP',
      subtitle: 'กำลังเริ่มต้นระบบกำเนิด...',
    },
    picker: {
      title: 'เลือกภาษาของคุณ',
      body: 'เลือกภาษาสำหรับการเข้าชมครั้งแรก คุณสามารถเปลี่ยนได้ทุกเมื่อ.',
      helper: 'ตัวเลือกของคุณจะถูกบันทึกไว้ในเบราว์เซอร์นี้',
      choose: 'เลือก',
    },
  },
}

export const getTranslation = (language: Language) => translations[language]
