// ------------------------------------------------------------
// Translation Store (editable)
// - Edit Arabic text under translations.ar
// - English values are captured from the default HTML into translations.en
// ------------------------------------------------------------
const translations = {
  en: {
    meta: {},
    text: {},
    alt: {},
    placeholder: {}
  },
  ar: {
    meta: {
      home: {
        title: "GB للاستيراد والتصدير | حلول تجارة عالمية",
        description: "GB شركة استيراد وتصدير موثوقة تقدم حلول توريد وشحن دولي بكفاءة وجودة عالية.",
        keywords: "GB, gbcomp.com, شركة استيراد وتصدير, تجارة دولية, خدمات تصدير, خدمات استيراد",
        ogTitle: "GB للاستيراد والتصدير | حلول تجارة عالمية",
        ogDescription: "خدمات استيراد وتصدير احترافية من GB مع توريد موثوق وخطط شحن فعالة.",
        twitterTitle: "GB للاستيراد والتصدير | حلول تجارة عالمية",
        twitterDescription: "خدمات استيراد وتصدير احترافية من GB مع توريد موثوق وخطط شحن فعالة."
      },
      exports: {
        title: "صادرات GB | منتجات تصدير دولية",
        description: "تعرف على خدمات التصدير من GB مع فئات منتجات موثقة وخطط تسليم عالمية موثوقة.",
        keywords: "صادرات GB, منتجات تصدير, شركة استيراد وتصدير, تصدير زراعي, تصدير منسوجات",
        ogTitle: "صادرات GB | منتجات تصدير دولية",
        ogDescription: "نماذج منتجات تصدير من GB مع رقابة جودة وتخطيط لوجستي منظم.",
        twitterTitle: "صادرات GB | منتجات تصدير دولية",
        twitterDescription: "نماذج منتجات تصدير من GB مع رقابة جودة وتخطيط لوجستي منظم."
      },
      imports: {
        title: "واردات GB | حلول استيراد استراتيجية",
        description: "اكتشف خدمات الاستيراد من GB للماكينات والمواد الخام وقطع الغيار والمستلزمات الصناعية.",
        keywords: "واردات GB, شركة استيراد, استيراد ماكينات, استيراد قطع غيار, توريد صناعي",
        ogTitle: "واردات GB | حلول استيراد استراتيجية",
        ogDescription: "حلول استيراد من GB مع تقييم الموردين والتحقق من الجودة قبل التوريد.",
        twitterTitle: "واردات GB | حلول استيراد استراتيجية",
        twitterDescription: "حلول استيراد من GB مع تقييم الموردين والتحقق من الجودة قبل التوريد."
      },
      about: {
        title: "من نحن | GB شريك تجارة دولية",
        description: "تعرف على رسالة GB ورؤيتها وقيمها كشركة متخصصة في الاستيراد والتصدير.",
        keywords: "من نحن GB, ملف شركة استيراد وتصدير, رسالة ورؤية, شريك تجارة دولية",
        ogTitle: "من نحن | GB شريك تجارة دولية",
        ogDescription: "اكتشف ملف GB المؤسسي وقيمها ونهجها في الشراكات التجارية طويلة المدى.",
        twitterTitle: "من نحن | GB شريك تجارة دولية",
        twitterDescription: "اكتشف ملف GB المؤسسي وقيمها ونهجها في الشراكات التجارية طويلة المدى."
      },
      contact: {
        title: "تواصل مع GB | دعم الاستيراد والتصدير",
        description: "تواصل مع GB للاستفسارات التجارية وطلبات التسعير وخدمات الاستيراد والتصدير.",
        keywords: "تواصل مع GB, استفسار استيراد وتصدير, استشارة تجارية, gbcomp.com",
        ogTitle: "تواصل مع GB | دعم الاستيراد والتصدير",
        ogDescription: "تواصل مع GB عبر البريد أو واتساب أو نموذج الاتصال لدعم مشاريع التجارة الدولية.",
        twitterTitle: "تواصل مع GB | دعم الاستيراد والتصدير",
        twitterDescription: "تواصل مع GB عبر البريد أو واتساب أو نموذج الاتصال لدعم مشاريع التجارة الدولية."
      }
    },
    common: {
      nav: {
        home: "الرئيسية",
        exports: "الصادرات",
        imports: "الواردات",
        about: "من نحن",
        contact: "تواصل معنا",
        quote: "اطلب عرض سعر"
      },
      readMore: "اقرأ المزيد",
      footer: {
        company: "GB",
        about: "GB شركة استيراد وتصدير احترافية تقدم حلول توريد ولوجستيات موثوقة لشركاء التجارة العالمية.",
        domain: "النطاق:",
        quickLinks: "روابط سريعة",
        contact: "بيانات التواصل",
        emailLabel: "البريد:",
        whatsappLabel: "واتساب:",
        address: "القاهرة – مصر",
        rights: "جميع الحقوق محفوظة"
      }
    },
    home: {
      hero: {
        eyebrow: "تميز في التجارة الدولية",
        title: "حلول استيراد وتصدير متقدمة لدعم نمو أعمالك عالميًا",
        text: "تدعم GB المصنعين والموزعين وشركات التجزئة عبر توريد موثوق ورقابة جودة دقيقة وتنفيذ لوجستي فعال.",
        ctaPrimary: "ابدأ مشروعك التجاري",
        ctaSecondary: "استعرض كتالوج الصادرات",
        trust1: "شبكة موردين معتمدة",
        trust2: "إجراءات متوافقة مع المتطلبات",
        trust3: "تغطية إقليمية وعالمية",
        cardTitle: "ملخص الأداء التجاري",
        metric1: "مسار تجاري نشط",
        metric2: "منتج مُدار",
        metric3: "نسبة تسليم في الموعد"
      },
      alt: {
        heroImage: "حاويات شحن في ميناء تجارة دولي",
        gallery1: "منتجات زراعية للتصدير في عبوات كبيرة",
        gallery2: "إدارة مستودعات ولوجستيات للتجارة الدولية",
        gallery3: "لفات أقمشة ضمن سلسلة توريد التصدير",
        gallery4: "مواد تغليف وكرتون مخصصة للشحن",
        gallery5: "معدات صناعية داخل منشأة إنتاج حديثة",
        gallery6: "سفينة شحن تمثل عمليات التجارة البحرية العالمية",
        whyImage: "فريق عمليات تجارية يدير شحنات الاستيراد والتصدير"
      },
      gallery: {
        eyebrow: "عرض المنتجات",
        title: "محفظة منتجات عالية الطلب",
        text: "يعرض هذا القسم الفئات الرئيسية التي تديرها GB ضمن عمليات الاستيراد والتصدير في أسواق متعددة.",
        cap1: "سلع زراعية",
        cap2: "لوجستيات ومستودعات",
        cap3: "مواد نسيجية",
        cap4: "حلول التغليف",
        cap5: "معدات صناعية",
        cap6: "عمليات التجارة البحرية"
      },
      why: {
        eyebrow: "لماذا GB",
        title: "نهج موثوق وقابل للتوسع في التجارة الدولية",
        text: "من تأهيل الموردين إلى جدولة الشحنات، تعتمد GB على آلية عمل دقيقة تحافظ على الاستمرارية والثقة في التسليم.",
        point1: "استراتيجية شراء وتوريد منظمة",
        point2: "دعم الوثائق والاستعداد الجمركي",
        point3: "إدارة جودة وخطط شحن دقيقة",
        point4: "متابعة مهنية من الاستفسار حتى التسليم"
      },
      categories: {
        title: "فئات تجارية مميزة",
        text: "حلول توريد وتوزيع مرنة للقطاعات التي تتطلب استقرارًا في الجودة والمدة الزمنية.",
        c1Title: "القطاع الزراعي",
        c1Text: "حبوب ومنتجات غذائية تُدار وفق معايير جودة دقيقة.",
        c2Title: "المنسوجات",
        c2Text: "أقمشة قطنية ومواد نسيجية لعملاء التصنيع والجملة.",
        c3Title: "القطاع الصناعي",
        c3Text: "قطع ومكونات صناعية تدعم استمرارية خطوط الإنتاج.",
        c4Title: "التغليف",
        c4Text: "مواد تغليف جاهزة للنقل لحماية الشحنات أثناء التصدير."
      },
      overview: {
        title: "استكشف صفحات خدمات GB",
        text: "انتقل مباشرة إلى كل صفحة للاطلاع على فئات المنتجات والخدمات وفرص الشراكة.",
        eTitle: "الصادرات",
        eText: "راجع منتجات التصدير النموذجية وفئات التوزيع الدولية.",
        iTitle: "الواردات",
        iText: "اكتشف خيارات الاستيراد للقطاع الصناعي والتجاري.",
        aTitle: "من نحن",
        aText: "تعرف على قيم GB ومكانتها ونهجها طويل المدى.",
        cTitle: "تواصل معنا",
        cText: "تواصل مع فريقنا لطلبات الأسعار والتوريد والتخطيط التجاري."
      },
      seo: {
        title: "شريك استيراد وتصدير موثوق للنمو طويل المدى",
        p1: "تساعد GB الشركات على بناء سلاسل توريد دولية أقوى عبر التوريد العملي وضبط الجودة وإدارة اللوجستيات بكفاءة. ندعم عمليات التصدير والاستيراد مع تواصل واضح وجداول زمنية واقعية.",
        p2: "في gbcomp.com نركز على تقليل المخاطر في التعاملات العابرة للحدود مع ضمان منتجات موثوقة ووثائق متوافقة وعلاقات تجارية مستقرة."
      },
      cta: {
        title: "جاهز لتوسيع تجارتك الدولية؟",
        text: "تحدث مع GB لتخطيط دورة الاستيراد أو التصدير القادمة بثقة ووضوح.",
        button: "تواصل مع فريق GB"
      }
    },
    exports: {
      hero: {
        eyebrow: "خدمات التصدير",
        title: "توريد تصديري معتمد للمشترين الدوليين",
        text: "توفر GB منتجات جاهزة للتصدير مع تدقيق الموردين ومعايير تغليف واضحة وتخطيط مسارات شحن موثوق."
      },
      intro: {
        title: "عمليات تصدير احترافية بجودة ثابتة",
        text: "يدعم قسم التصدير لدينا تجار الجملة والموزعين بتسعير عملي ووثائق دقيقة وتواصل شفاف من تأكيد الطلب حتى التسليم النهائي."
      },
      alt: {
        p1: "أكياس أرز ممتازة معدة للتصدير",
        p2: "ثمار حمضية طازجة مختارة للتصدير",
        p3: "لفات أقمشة قطنية لعقود التصدير",
        p4: "صناديق كرتون مموج للتغليف والنقل",
        p5: "مكونات معدنية صناعية للتصدير",
        p6: "أعشاب وتوابل مجففة معبأة للتصدير"
      },
      products: {
        title: "نماذج منتجات التصدير",
        text: "يمكنك نسخ أي بطاقة منتج لإضافة المزيد إلى الكتالوج لاحقًا.",
        p1Category: "زراعي",
        p1Title: "أرز حبة طويلة ممتاز",
        p1Text: "أرز مفروز ومصنف لتجار الأغذية والأسواق بالجملة.",
        p2Category: "منتجات غذائية",
        p2Title: "حمضيات طازجة",
        p2Text: "منتج تصديري بفرز وتعبئة ومعالجات سلسلة تبريد عند الحاجة.",
        p3Category: "منسوجات",
        p3Title: "لفات قماش قطني",
        p3Text: "مواد نسيجية موثوقة لقطاعات الملابس والتصنيع.",
        p4Category: "تغليف",
        p4Title: "صناديق كرتون مموج",
        p4Text: "تغليف قوي لحماية الشحنات والتخزين الآمن.",
        p5Category: "صناعي",
        p5Title: "مكونات معدنية",
        p5Text: "مكونات دقيقة للمصانع التي تحتاج توريدًا ثابتًا بكميات كبيرة.",
        p6Category: "منتجات غذائية",
        p6Title: "أعشاب وتوابل مجففة",
        p6Text: "منتجات معبأة بعناية لعملاء التجزئة والصناعات الغذائية."
      },
      points: {
        p1Title: "إدارة الوثائق",
        p1Text: "إعداد الفواتير وقوائم التعبئة والوثائق التنظيمية بدقة.",
        p2Title: "إشراف التغليف",
        p2Text: "إجراءات تغليف منظمة لتقليل مخاطر المناولة أثناء الشحن.",
        p3Title: "تخطيط التسليم العالمي",
        p3Text: "تنسيق شحن متوازن بين التكلفة والسرعة والاعتمادية."
      },
      cta: {
        title: "تحتاج عرض سعر تصدير مخصص؟",
        text: "أرسل سوق الوجهة والكميات المستهدفة للحصول على عرض مناسب.",
        button: "تواصل مع فريق الصادرات"
      }
    },
    imports: {
      hero: {
        eyebrow: "خدمات الاستيراد",
        title: "حلول استيراد استراتيجية للإنتاج والتوزيع",
        text: "تساعد GB العملاء في تأمين الماكينات والمكونات والمواد الصناعية عبر توريد منظم وتخطيط تسليم موثوق."
      },
      intro: {
        title: "عمليات استيراد تدعم استمرارية الأعمال",
        text: "ندمج تقييم الموردين وفحص الجودة وتخطيط المسارات لحماية دورة الشراء وتقليل التأخير التشغيلي."
      },
      alt: {
        p1: "ماكينات CNC مستوردة لعمليات الإنتاج",
        p2: "مواد خام معدنية معالجة للتصنيع",
        p3: "قطع غيار مستوردة للصيانة الصناعية",
        p4: "مكونات وإكسسوارات إلكترونية للتوزيع",
        p5: "مواد تغليف مستوردة للاستخدام الصناعي",
        p6: "معدات مناولة مواد للمستودعات"
      },
      products: {
        title: "نماذج منتجات الاستيراد",
        text: "كل بطاقة أدناه قابلة للنسخ والتعديل لإضافة منتجاتك مستقبلاً.",
        p1Category: "ماكينات",
        p1Title: "ماكينات إنتاج CNC",
        p1Text: "معدات دقيقة للمصانع التي تحتاج جودة إنتاج ثابتة.",
        p2Category: "مواد خام",
        p2Title: "لفائف معدنية معالجة",
        p2Text: "مواد بدرجات موثوقة لعمليات التصنيع والتجميع.",
        p3Category: "قطع غيار",
        p3Title: "قطع غيار ميكانيكية",
        p3Text: "مكونات بديلة تدعم استمرارية التشغيل وكفاءة الصيانة.",
        p4Category: "إلكترونيات",
        p4Title: "ملحقات إلكترونية",
        p4Text: "خطوط إكسسوارات عملية للتجزئة والتركيب الفني.",
        p5Category: "مستلزمات تغليف",
        p5Title: "مستلزمات تغليف صناعية",
        p5Text: "أفلام وأشرطة ومواد مساندة للتخزين والنقل الآمن.",
        p6Category: "معدات صناعية",
        p6Title: "معدات مناولة المواد",
        p6Text: "معدات تشغيلية تعزز الحركة والتخزين وسرعة سير العمل."
      },
      points: {
        p1Title: "تقييم الموردين",
        p1Text: "فحص موثوقية الموردين وقدرتهم الإنتاجية وثبات الجودة.",
        p2Title: "التحقق من الجودة",
        p2Text: "مراجعات قبل الشحن وتأكيد المواصفات قبل التسليم النهائي.",
        p3Title: "استراتيجية النقل",
        p3Text: "تخطيط مسارات متوازن لتحسين مدة التوريد والتحكم في التكلفة."
      },
      cta: {
        title: "ابنِ مسار استيراد قوي مع GB",
        text: "أرسل مواصفاتك ومتطلباتك لنقدم دعمًا مناسبًا لاحتياجاتك.",
        button: "تواصل مع فريق الواردات"
      }
    },
    about: {
      hero: {
        eyebrow: "من نحن",
        title: "شريك موثوق في الاستيراد والتصدير الدولي",
        text: "تعمل GB بنموذج تجاري عملي يركز على الجودة والمصداقية والقيمة طويلة المدى لشركاء الأعمال عبر الحدود."
      },
      overview: {
        title: "نبذة عن الشركة",
        p1: "تأسست GB لربط الموردين والمشترين الموثوقين من خلال عمليات استيراد وتصدير منظمة. ندعم العملاء الذين يحتاجون تنفيذًا عمليًا وتواصلًا واضحًا وتخطيطًا دقيقًا للشحن.",
        p2: "يساعد فريقنا عبر gbcomp.com الشركات على توسيع أنشطتها التجارية إقليميًا ودوليًا من خلال التوريد المنضبط ودقة الوثائق وشفافية الخدمة."
      },
      alt: {
        overviewImage: "فريق تجاري محترف يناقش استراتيجية أعمال دولية",
        visual1: "عمليات ميناء الحاويات باستخدام الرافعات والشحن",
        visual2: "مصافحة أعمال ترمز إلى شراكات دولية طويلة المدى",
        visual3: "مستودع لوجستي وإدارة توزيع للتجارة العالمية"
      },
      visuals: {
        title: "نظرة داخل عمليات GB العالمية",
        text: "لمحة بصرية عن الشراكات والموانئ وأنظمة اللوجستيات التي تدعم تنفيذنا للتجارة الدولية.",
        cap1: "تنسيق الموانئ",
        cap2: "شراكات استراتيجية",
        cap3: "لوجستيات متكاملة"
      },
      mvv: {
        title: "الرسالة والرؤية والقيم الأساسية",
        missionTitle: "الرسالة",
        missionText: "تقديم خدمات استيراد وتصدير فعالة تعزز أداء عملائنا في الأسواق العالمية.",
        visionTitle: "الرؤية",
        visionText: "أن نكون شركة تجارة موثوقة معروفة بالثبات والجودة وسرعة الاستجابة للسوق.",
        valuesTitle: "القيم الأساسية",
        valuesText: "النزاهة، المساءلة، الشفافية، والنمو عبر شراكات طويلة المدى."
      },
      positioning: {
        p1Title: "الثقة والامتثال",
        p1Text: "ندير العمليات التجارية بوعي تنظيمي ودقة في الوثائق.",
        p2Title: "معايير الجودة",
        p2Text: "رقابة الموردين وفحوص المنتجات تدعم نتائج ثابتة في الجودة.",
        p3Title: "موثوقية اللوجستيات",
        p3Text: "نحسن مسارات الشحن لتقليل المخاطر وضمان استمرارية التسليم.",
        p4Title: "شراكات طويلة الأمد",
        p4Text: "تعمل GB كشريك تجاري استراتيجي وليس مزود خدمة قصير المدى."
      },
      seo: {
        title: "جاهزون لتحديات التجارة الدولية الحديثة",
        p1: "مع تغير احتياجات الأسواق، تواصل GB التركيز على التنفيذ الموثوق والتوريد العملي والتواصل الواضح. نواكب أولويات العملاء المتعلقة بالجودة واستقرار الجداول وإدارة المخاطر اللوجستية.",
        p2: "التزامنا بالشراكة والاعتمادية يساعد العملاء على توسيع عملياتهم التجارية بثقة أكبر في الأسواق الجديدة والحالية."
      },
      cta: {
        title: "ابدأ شراكتك مع GB",
        text: "تواصل مع فريقنا لمناقشة خطط التوريد ومتطلبات التصدير أو فرص الاستيراد.",
        button: "تحدث مع GB"
      }
    },
    contact: {
      hero: {
        eyebrow: "تواصل معنا",
        title: "لنخطط معًا لمشروعك القادم في الاستيراد أو التصدير",
        text: "شارك متطلباتك وسيتواصل فريقنا معك بخطة عملية تناسب منتجك وأهدافك السوقية."
      },
      modal: {
        eyebrow: "فريق التواصل",
        title: "تواصل معنا",
        text: "تواصل مع GB للحصول على دعم احترافي في الاستيراد والتصدير، التسعير التجاري، وتخطيط عمليات الشحن."
      },
      form: {
        title: "أرسل لنا رسالة",
        text: "استخدم النموذج لطلبات التسعير والاستفسارات والشراكات التجارية.",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "اكتب الاسم الكامل",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "example@email.com",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "+20 100 000 0000",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "موضوع الاستفسار",
        messageLabel: "الرسالة",
        messagePlaceholder: "اكتب تفاصيل طلبك",
        submit: "إرسال الاستفسار",
        success: "شكرًا لك. تم استلام استفسارك وسنقوم بالتواصل معك قريبًا."
      },
      info: {
        title: "بيانات التواصل",
        emailTitle: "البريد الإلكتروني",
        whatsappTitle: "واتساب",
        addressTitle: "العنوان",
        addressText: "القاهرة – مصر",
        hoursTitle: "مواعيد العمل",
        hoursLine1: "الإثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً",
        hoursLine2: "السبت: 10:00 صباحًا - 2:00 ظهرًا"
      },
      map: {
        title: "مكان الخريطة (عنصر بديل)",
        text: "يمكنك استبدال هذا القسم بخريطة Google مدمجة أو موقع المكتب عند التحديث."
      },
      alt: {
        map: "صورة بديلة لموقع الخريطة داخل المدينة",
        cover: "فريق تواصل أعمال عالمي داخل مكتب احترافي"
      },
      cta: {
        title: "ابدأ التواصل مع GB",
        text: "تواصل معنا اليوم للحصول على دعم سريع في التوريد والتسعير وتنفيذ العمليات التجارية.",
        button: "راسل GB عبر البريد"
      }
    }
  }
};

const STORAGE_KEY = "gb_site_language";
const SUPPORTED_LANGS = ["en", "ar"];
const FALLBACK_FORM_SUCCESS = {
  en: "Thank you. Your inquiry has been received. We will contact you shortly.",
  ar: "شكرًا لك. تم استلام استفسارك وسنقوم بالتواصل معك قريبًا."
};

let currentLanguage = "en";

function getNestedValue(obj, keyPath) {
  return keyPath
    .split(".")
    .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function captureDefaultState() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!(key in translations.en.text)) {
      translations.en.text[key] = element.textContent;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    if (!(key in translations.en.alt)) {
      translations.en.alt[key] = element.getAttribute("alt") || "";
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (!(key in translations.en.placeholder)) {
      translations.en.placeholder[key] = element.getAttribute("placeholder") || "";
    }
  });

  translations.en.meta.title = document.title;
  translations.en.meta.description = document.querySelector('[data-meta="description"]')?.getAttribute("content") || "";
  translations.en.meta.keywords = document.querySelector('[data-meta="keywords"]')?.getAttribute("content") || "";
  translations.en.meta.ogTitle = document.querySelector('[data-meta="og:title"]')?.getAttribute("content") || "";
  translations.en.meta.ogDescription = document.querySelector('[data-meta="og:description"]')?.getAttribute("content") || "";
  translations.en.meta.twitterTitle = document.querySelector('[data-meta="twitter:title"]')?.getAttribute("content") || "";
  translations.en.meta.twitterDescription = document.querySelector('[data-meta="twitter:description"]')?.getAttribute("content") || "";
}

function setMetaContent(selector, value) {
  const node = document.querySelector(selector);
  if (node && typeof value === "string") {
    node.setAttribute("content", value);
  }
}

function updateMeta(lang, page) {
  if (lang === "ar") {
    const meta = translations.ar.meta?.[page];
    if (!meta) return;

    document.title = meta.title;
    setMetaContent('[data-meta="description"]', meta.description);
    setMetaContent('[data-meta="keywords"]', meta.keywords);
    setMetaContent('[data-meta="og:title"]', meta.ogTitle);
    setMetaContent('[data-meta="og:description"]', meta.ogDescription);
    setMetaContent('[data-meta="twitter:title"]', meta.twitterTitle);
    setMetaContent('[data-meta="twitter:description"]', meta.twitterDescription);
    return;
  }

  document.title = translations.en.meta.title;
  setMetaContent('[data-meta="description"]', translations.en.meta.description);
  setMetaContent('[data-meta="keywords"]', translations.en.meta.keywords);
  setMetaContent('[data-meta="og:title"]', translations.en.meta.ogTitle);
  setMetaContent('[data-meta="og:description"]', translations.en.meta.ogDescription);
  setMetaContent('[data-meta="twitter:title"]', translations.en.meta.twitterTitle);
  setMetaContent('[data-meta="twitter:description"]', translations.en.meta.twitterDescription);
}

function applyLanguage(lang, savePreference = true) {
  if (!SUPPORTED_LANGS.includes(lang)) {
    lang = "en";
  }

  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = lang === "ar" ? getNestedValue(translations.ar, key) : translations.en.text[key];
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    const value = lang === "ar" ? getNestedValue(translations.ar, key) : translations.en.alt[key];
    if (typeof value === "string") {
      element.setAttribute("alt", value);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const value = lang === "ar" ? getNestedValue(translations.ar, key) : translations.en.placeholder[key];
    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  const page = document.body.getAttribute("data-page");
  updateMeta(lang, page);

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang-btn") === lang);
  });

  if (savePreference) {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}

function initLanguageSwitcher() {
  const queryLang = new URLSearchParams(window.location.search).get("lang");
  const storedLang = localStorage.getItem(STORAGE_KEY);

  const initialLang = SUPPORTED_LANGS.includes(queryLang)
    ? queryLang
    : SUPPORTED_LANGS.includes(storedLang)
      ? storedLang
      : "en";

  applyLanguage(initialLang, true);

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetLang = button.getAttribute("data-lang-btn");
      applyLanguage(targetLang, true);
    });
  });
}

function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    const closeMenu = () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("open");
    };

    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      siteNav.classList.toggle("open");
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          closeMenu();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (
        window.innerWidth <= 900 &&
        siteNav.classList.contains("open") &&
        !siteNav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav ul a").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

function initRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${(index % 6) * 60}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  const formStatus = document.querySelector(".form-status");
  if (!form || !formStatus) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const successText =
      currentLanguage === "ar"
        ? getNestedValue(translations.ar, "contact.form.success") || FALLBACK_FORM_SUCCESS.ar
        : FALLBACK_FORM_SUCCESS.en;

    formStatus.textContent = successText;
    formStatus.classList.add("success");
    form.reset();
  });
}

function initContactModal() {
  const modal = document.querySelector("[data-contact-modal]");
  if (!modal) return;

  const panel = modal.querySelector(".contact-modal-panel");
  const closeButton = modal.querySelector("[data-close-contact-modal]");
  const openTriggers = document.querySelectorAll("[data-open-contact-modal]");
  const form = modal.querySelector("#contact-modal-form");
  const formStatus = modal.querySelector(".modal-form-status");

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (formStatus) {
      formStatus.textContent = "";
      formStatus.classList.remove("success");
    }
  };

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (formStatus) {
      formStatus.textContent = "";
      formStatus.classList.remove("success");
    }

    const firstInput = form?.querySelector("input, textarea");
    setTimeout(() => firstInput?.focus(), 120);
  };

  openTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    });
  });

  closeButton?.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  panel?.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  if (form && formStatus) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const successText =
        currentLanguage === "ar"
          ? getNestedValue(translations.ar, "contact.form.success") || FALLBACK_FORM_SUCCESS.ar
          : FALLBACK_FORM_SUCCESS.en;

      formStatus.textContent = successText;
      formStatus.classList.add("success");
      form.reset();
    });
  }
}

function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

captureDefaultState();
initNavigation();
initLanguageSwitcher();
initRevealAnimation();
initContactForm();
initContactModal();
initFooterYear();
