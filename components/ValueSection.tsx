"use client";

const stakeholderValues = [
  {
    title: "المستثمر",
    color: "from-amber-500 to-amber-700",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    items: [
      "دراسة السوق",
      "اختيار أفضل منطقة للاستثمار",
      "تقليل المخاطر",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "وزارة السياحة",
    color: "from-[#1a3a6b] to-[#0a2040]",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    items: [
      "مؤشرات تساعد على التخطيط",
      "توجيه الحوافز الاستثمارية",
      "تقييم أداء القطاع",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M3 9h18M9 21V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "الدولة",
    color: "from-green-600 to-green-800",
    lightBg: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    items: [
      "دعم اتخاذ القرار بالاعتماد على البيانات",
      "تسريع التحول الرقمي",
      "تحسين التخطيط الوطني",
      "تسهيل العمل على المصالح الأمنية",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "الفنادق",
    color: "from-purple-600 to-purple-800",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    items: [
      "زيادة نسب الإشغال",
      "تحسين التسويق",
      "توصيات ذكية للأسعار والخدمات",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "السائح",
    color: "from-teal-600 to-teal-800",
    lightBg: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700",
    items: [
      "تجربة مخصصة",
      "رحلة أسهل",
      "توصيات دقيقة",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function ValueSection() {
  return (
    <section id="value" className="section-gradient-1 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">القسم الرابع</span>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-blue mb-4">
            القيمة المضافة لكل طرف
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            المنصة لا تخدم طرفًا واحدًا فقط، بل تقدم قيمة حقيقية لجميع
            الفاعلين في منظومة السياحة والإيواء
          </p>
        </div>

        {/* Value cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stakeholderValues.map((sv, i) => (
            <div key={i} className="card-premium rounded-3xl overflow-hidden group">
              {/* Card header */}
              <div className={`bg-gradient-to-br ${sv.color} p-6`}>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-3">
                  {sv.icon}
                </div>
                <h3 className="text-white font-black text-xl">{sv.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="space-y-3">
                  {sv.items.map((item, j) => (
                    <div
                      key={j}
                      className={`flex items-start gap-2 p-3 rounded-xl ${sv.lightBg} border ${sv.borderColor}`}
                    >
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-br ${sv.color}`} />
                      <span className={`text-sm font-medium ${sv.textColor} leading-relaxed`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary banner */}
        <div className="mt-16 section-gradient-2 rounded-3xl p-10 text-center">
          <h3 className="text-white font-black text-2xl mb-4">
            منظومة تكاملية تخدم الجميع
          </h3>
          <p className="text-white/75 leading-relaxed max-w-3xl mx-auto">
            كل طرف يجد في المنصة الأداة التي تحل مشكلته الخاصة، بينما تعمل
            المنظومة ككل على تحقيق التكامل الرقمي الوطني في قطاع الإيواء
            والسياحة.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["مستثمرون", "وزارة السياحة", "الدولة", "الفنادق", "السياح"].map(
              (actor, i) => (
                <div key={i} className="glass rounded-full px-5 py-2.5">
                  <span className="text-white font-semibold text-sm">{actor}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
