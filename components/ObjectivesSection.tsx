"use client";

import Image from "next/image";

const strategicObjectives = [
  {
    id: "01",
    title: "رقمنة قطاع الإيواء والسياحة",
    goal: "الانتقال من التسيير التقليدي واليدوي إلى منظومة رقمية متكاملة وسلسة.",
    color: "from-blue-600 to-blue-800",
    iconBg: "bg-blue-100",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1d4ed8" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "إنشاء منصة وطنية موحدة",
    goal: "ربط كافة الفاعلين في القطاع ضمن قاعدة بيانات واحدة وتنسيق مشترك.",
    color: "from-[#1a3a6b] to-[#0a2040]",
    iconBg: "bg-blue-50",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="2" stroke="#1a3a6b" strokeWidth="2"/>
        <circle cx="5" cy="19" r="2" stroke="#1a3a6b" strokeWidth="2"/>
        <circle cx="19" cy="19" r="2" stroke="#1a3a6b" strokeWidth="2"/>
        <path d="M12 7v4M7 18l3-4M17 18l-3-4" stroke="#1a3a6b" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "تحسين تجربة السائح",
    goal: "حجز موثوق، مسارات وتوصيات مخصصة، وخدمات رقمية تسهل حركة السائح.",
    color: "from-teal-600 to-teal-800",
    iconBg: "bg-teal-50",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="7" r="4" stroke="#0d9488" strokeWidth="2"/>
        <path d="M16 3.13a4 4 0 010 7.75" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "توظيف البيانات والذكاء الاصطناعي",
    goal: "تحويل البيانات الميدانية إلى مؤشرات دقيقة لدعم الاستثمار والقرار التنموي.",
    color: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-50",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="#7c3aed" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const dataTypes = [
  "الحجوزات والإشغال",
  "متوسط مدة الإقامة",
  "توزيع السياح والجنسيات",
  "المواسم والذروة",
  "الوجهات الأكثر طلباً",
  "تقييمات الخدمات",
  "فرص العرض والطلب",
  "مؤشرات الاستثمار المحلي",
];

const aiFeatures = [
  {
    title: "National Tourism Observatory",
    subtitle: "مرصد السياحة الوطني",
    desc: "لوحة مؤشرات فورية معتمدة على بيانات حقيقية بدلاً من التقارير الورقية المتأخرة.",
    example: "متابعة الحجوزات ونسب الإشغال والتدفقات السياحية عبر كافة الولايات لحظياً.",
    color: "from-blue-600 to-blue-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M8 17V13M12 17V9M16 17V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "AI Tourism Investment Advisor",
    subtitle: "مستشار وخريطة الاستثمار الذكي",
    desc: "يحلل الفجوات الفندقية ويصنف المناطق حسب الفرص الاستثمارية لتوجيه رؤوس الأموال.",
    example: "تحليل مناطق العجز الفندقي مع إقبال سياحي مرتفع لتحديد أولويات الاستثمار.",
    color: "from-amber-600 to-amber-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "AI Smart Travel Experience",
    subtitle: "تجربة السائح والجواهر المخفية",
    desc: "اقتراح فنادق ومسارات ذكية حسب ميزانية السائح مع تسليط الضوء على الوجهات غير المعروفة.",
    example: "توصيات شخصية + دليل سياحي ذكي + توزيع السياح نحو وجهات بديلة ومناطق ريفية.",
    color: "from-teal-600 to-teal-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "AI Safety & Emergency SOS",
    subtitle: "منظومة الأمان والطوارئ الذكية",
    desc: "ربط رقمي آمن يتيح في حالات الطوارئ تحديد الموقع الجغرافي والإشعار الفوري للجهات المختصة.",
    example: "زر استغاثة طارئ SOS يرسل الإحداثيات الجغرافية بدقة فائقة إلى المصالح المعنية.",
    color: "from-red-600 to-red-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ObjectivesSection() {
  return (
    <section id="objectives" className="bg-white section-padding">
      <div className="container-max">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">القسم الثالث</span>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-blue mb-4">
            أهداف المشروع
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            خطة متكاملة للانتقال بقطاع الإيواء والسياحة نحو التميز الرقمي المستدام
          </p>
        </div>

        {/* Strategic objectives grid */}
        <div className="mb-16">
          <div className="mb-10">
            <span className="section-label">الأهداف الاستراتيجية</span>
            <div className="divider-gold mt-2" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicObjectives.map((obj) => (
              <div key={obj.id} className="card-premium rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className={`bg-gradient-to-br ${obj.color} p-6`}>
                  <div className="text-white/40 text-4xl font-black mb-2">{obj.id}</div>
                  <h3 className="text-white font-bold text-base leading-tight">{obj.title}</h3>
                </div>
                <div className="p-6">
                  <div className={`feature-icon ${obj.iconBg} mb-4`}>{obj.icon}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{obj.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified Ecosystem Architecture Showcase */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="section-label">الهندسة الشاملة للمشروع</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0a1628] mt-3">
              معمارية المنظومة الموحدة (Unified Ecosystem)
            </h3>
            <div className="divider-gold mx-auto mt-3" />
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              مخطط تفاعلي يوضح ترابط كافة المتدخلين بالقلب السحابي للمنصة والذكاء الاصطناعي
            </p>
          </div>

          <div className="card-premium rounded-3xl p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#0a1628] via-[#0d1e38] to-[#12233f] text-white shadow-2xl border border-white/10 relative overflow-hidden group">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl pointer-events-none" />

            {/* The Visual Architecture Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8 group-hover:border-[#c9a227]/40 transition-colors duration-500">
              <Image
                src="/project_overview.jpg"
                alt="الهندسة الشاملة للمنظومة الوطنية الذكية للإيواء والسياحة"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                priority
              />
            </div>

            {/* 4 Interactive Actor Explanation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass rounded-2xl p-4 border border-white/10 hover:border-blue-400/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <h4 className="font-bold text-white text-sm">الفنادق ومؤسسات الإيواء</h4>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  تسيير آلي للغرف، الحجوزات ونسب الإشغال، وإلغاء المعاملات الورقية.
                </p>
              </div>

              <div className="glass rounded-2xl p-4 border border-white/10 hover:border-teal-400/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <h4 className="font-bold text-white text-sm">الجهات الأمنية والوزارة</h4>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  قناة مشفرة وآمنة لبيانات النزلاء مع لوحة مؤشرات فورية للقطاع.
                </p>
              </div>

              <div className="glass rounded-2xl p-4 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <h4 className="font-bold text-white text-sm">المستثمرون وأصحاب المشاريع</h4>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  خريطة استثمارية ذكية ترصد الفجوات والفرص الواعدة لتوجيه رؤوس الأموال.
                </p>
              </div>

              <div className="glass rounded-2xl p-4 border border-white/10 hover:border-rose-400/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400 flex-shrink-0" />
                  <h4 className="font-bold text-white text-sm">السياح والزوار</h4>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  تطبيق ذكي لحجز موثوق، مسارات مخصصة، وزر النجدة الفوري (SOS).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI & Data */}
        <div>
          <div className="section-gradient-2 rounded-3xl p-8 sm:p-10 mb-10 shadow-xl">
            <span className="section-label section-label-dark">الذكاء الاصطناعي والبيانات</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-4">
              البيانات هي الثروة الحقيقية
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-3xl text-sm sm:text-base">
              مشروعنا لا يكتفي برقمنة الخدمات التشغيلية، بل يوظف البيانات المجمعة لتحويلها
              إلى رؤى استراتيجية وقرارات ذكية تخدم كافة المتدخلين في القطاع.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {dataTypes.map((d, i) => (
                <div key={i} className="glass rounded-xl p-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f0c040] flex-shrink-0" />
                  <span className="text-white/85 text-xs sm:text-sm font-medium">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI features grid (4 distinct high-impact pillars) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((f, i) => (
              <div key={i} className="card-premium rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-br ${f.color} p-5`}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                    {f.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm leading-tight">{f.subtitle}</h4>
                  <p className="text-white/60 text-xs mt-1 font-mono">{f.title}</p>
                </div>
                <div className="p-5 flex flex-col justify-between h-[calc(100%-110px)]">
                  <p className="text-gray-700 text-xs leading-relaxed mb-4">{f.desc}</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">{f.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
