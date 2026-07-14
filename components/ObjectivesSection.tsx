"use client";

const strategicObjectives = [
  {
    id: "01",
    title: "رقمنة قطاع الإيواء والسياحة",
    goal: "الانتقال من التسيير التقليدي إلى منظومة رقمية متكاملة",
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
    goal: "جمع جميع الفاعلين داخل منصة واحدة",
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
    goal: "تقديم تجربة رقمية حديثة ومتكاملة للسائح",
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
    title: "الذكاء الاصطناعي والبيانات",
    goal: "تحويل البيانات إلى معلومات وقرارات ذكية",
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

const platformActors = [
  { label: "الفنادق", icon: "🏨" },
  { label: "دور الإيواء", icon: "🏡" },
  { label: "المرشدون", icon: "🧭" },
  { label: "وكالات السفر", icon: "✈️" },
  { label: "النقل", icon: "🚌" },
  { label: "المطاعم", icon: "🍽️" },
  { label: "وزارة السياحة", icon: "🏛️" },
  { label: "المستثمرون", icon: "🏦" },
  { label: "السياح", icon: "👤" },
];

const touristFeatures = [
  { title: "الحجز الإلكتروني", desc: "حجز سريع وموثوق للفنادق والخدمات من مكان واحد." },
  { title: "الخريطة الذكية", desc: "خريطة تفاعلية تظهر المعالم، الفنادق، والمسارات بدقة." },
  { title: "اقتراح الفنادق", desc: "ترشيحات ذكية مبنية على ميزانية واهتمامات السائح." },
  { title: "اقتراح الرحلات", desc: "مسارات وبرامج سياحية مصممة خصيصاً لتناسب تفضيلاتك." },
  { title: "الدفع الإلكتروني", desc: "طرق دفع آمنة ومتنوعة لتسهيل المعاملات المالية." },
  { title: "دليل سياحي ذكي", desc: "معلومات شاملة ومحدثة عن كل المعالم والوجهات." },
  { title: "دعم عدة لغات", desc: "واجهة متعددة اللغات لخدمة السياح المحليين والدوليين." },
  { title: "اقتراح الأنشطة", desc: "أفكار للأنشطة والفعاليات المتاحة خلال فترة إقامتك." },
];

const dataTypes = [
  "الحجوزات",
  "نسب الإشغال",
  "مدة الإقامة",
  "الجنسيات",
  "الوجهات الأكثر زيارة",
  "المواسم",
  "تقييمات السياح",
  "الخدمات الأكثر طلبًا",
];

const aiFeatures = [
  {
    title: "AI Tourism Investment Advisor",
    subtitle: "مستشار الاستثمار الذكي",
    desc: "يحلل المؤشرات الجغرافية والاقتصادية ويقدم توصيات استثمارية مدروسة.",
    example: "ولاية جانت: سياح كثر + فنادق قليلة + إشغال مرتفع  ← فرصة استثمارية واعدة",
    color: "from-amber-600 to-amber-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Smart Investment Map",
    subtitle: "خريطة الاستثمار الذكية",
    desc: "خريطة تفاعلية تصنف مناطق الجزائر حسب الفرص الاستثمارية بالألوان.",
    example: "أخضر: فرص مرتفعة  |  أصفر: فرص متوسطة  |  أحمر: مناطق مشبعة",
    color: "from-green-600 to-green-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "National Tourism Observatory",
    subtitle: "مرصد السياحة الوطني",
    desc: "لوحة مؤشرات فورية معتمدة على بيانات حقيقية بدلاً من انتظار التقارير.",
    example: "متابعة الحجوزات + الإشغال + توزيع السياح + متوسط مدة الإقامة",
    color: "from-blue-600 to-blue-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M8 17V13M12 17V9M16 17V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "AI Hotel Recommendation",
    subtitle: "توصية الفنادق بالذكاء الاصطناعي",
    desc: "يقترح الفندق الأنسب لكل سائح بناءً على ميزانيته ونوع رحلته وتقييماته.",
    example: "تحليل: الميزانية + نوع الرحلة + العائلة + الأطفال + الهدوء",
    color: "from-[#1a3a6b] to-[#0a2040]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "AI Smart Map",
    subtitle: "الخريطة الذكية",
    desc: "تساعد على بناء مسار سياحي ذكي مع اقتراح بدائل وأماكن قريبة.",
    example: "فنادق بديلة + أماكن سياحية + مطاعم + أنشطة + مسار ذكي",
    color: "from-teal-600 to-teal-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "AI Hidden Gems",
    subtitle: "الجواهر المخفية",
    desc: "يساعد على اكتشاف أماكن غير معروفة وتوزيع الحركة السياحية على كامل التراب.",
    example: "قرى سياحية + مواقع طبيعية + مسارات جديدة + وجهات بديلة",
    color: "from-purple-600 to-purple-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "National Digital Tourism Cloud",
    subtitle: "السحابة الرقمية الوطنية",
    desc: "بنية سحابية وطنية تسمح لكل مؤسسة بالعمل داخل منظومة موحدة.",
    example: "عمل موحد + أمن البيانات + صلاحيات محددة لكل جهة",
    color: "from-sky-600 to-sky-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "AI Emergency SOS",
    subtitle: "خدمة الطوارئ الذكية",
    desc: "في حالة الطوارئ، يرسل النظام الموقع الجغرافي للسائح إلى الجهة المختصة فورًا.",
    example: "السائح يضغط SOS ← إرسال الموقع الجغرافي للجهة المختصة",
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
        </div>

        {/* Strategic objectives grid */}
        <div className="mb-16">
          <div className="mb-10">
            <span className="section-label">الأهداف الاستراتيجية</span>
            <div className="divider-gold mt-2" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicObjectives.map((obj) => (
              <div key={obj.id} className="card-premium rounded-3xl overflow-hidden">
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

        {/* Platform actors */}
        <div className="card-premium rounded-3xl p-8 mb-16">
          <div className="mb-6">
            <span className="section-label">المنصة الوطنية الموحدة تربط</span>
            <h3 className="text-xl font-bold text-[#0a1628] mt-2">
              جميع الفاعلين في منظومة واحدة
            </h3>
            <div className="divider-gold mt-2" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {platformActors.map((actor, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-blue-50/50 hover:bg-blue-100/50 transition-colors"
              >
                <span className="text-2xl">{actor.icon}</span>
                <span className="text-[#0a1628] text-xs font-semibold text-center leading-tight">
                  {actor.label}
                </span>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
            {["تبادل المعلومات بسهولة", "تقليل تكرار البيانات", "تحسين التنسيق"].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tourist features */}
        <div className="card-premium rounded-3xl p-8 mb-16">
          <div className="mb-6">
            <span className="section-label">تحسين تجربة السائح</span>
            <h3 className="text-xl font-bold text-[#0a1628] mt-2">
              تجربة رقمية حديثة ومتكاملة
            </h3>
            <div className="divider-gold mt-2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {touristFeatures.map((f, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-4 rounded-xl bg-teal-50/60 hover:bg-teal-100/60 transition-colors border border-teal-100/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  <span className="text-[#0a1628] text-sm font-bold">{f.title}</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed ms-4">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-teal-700 font-semibold text-sm mt-4 pt-4 border-t border-gray-100">
            النتيجة: زيادة رضا السائح
          </p>
        </div>

        {/* AI & Data */}
        <div className="mb-16">
          <div className="section-gradient-2 rounded-3xl p-10 mb-10">
            <span className="section-label section-label-dark">الذكاء الاصطناعي والبيانات</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-4">
              البيانات هي الثروة الحقيقية
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-3xl">
              اليوم، الجميع يتحدث عن السياحة، لكن قليلون يتحدثون عن البيانات.
              مشروعنا لا يهدف فقط إلى رقمنة الخدمات، بل إلى تحويل البيانات
              إلى معلومات، والمعلومات إلى قرارات.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dataTypes.map((d, i) => (
                <div key={i} className="glass rounded-xl p-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f0c040] flex-shrink-0" />
                  <span className="text-white/85 text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((f, i) => (
              <div key={i} className="card-premium rounded-3xl overflow-hidden group">
                <div className={`bg-gradient-to-br ${f.color} p-5`}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                    {f.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm leading-tight">{f.subtitle}</h4>
                  <p className="text-white/60 text-xs mt-1">{f.title}</p>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-xs leading-relaxed mb-3">{f.desc}</p>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-gray-500 text-xs leading-relaxed">{f.example}</p>
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
