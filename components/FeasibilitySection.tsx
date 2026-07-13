"use client";

const feasibilityItems = [
  {
    number: "01",
    title: "القابلية التقنية",
    subtitle: "Faisabilité Technique",
    color: "from-blue-600 to-blue-800",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    items: [
      { title: "التقنيات متوفرة", desc: "الاعتماد على أحدث تقنيات الويب السحابية." },
      { title: "ربط تدريجي", desc: "يمكن إدماج الفنادق في المنصة بشكل مرحلي دون تعطيل العمل." },
      { title: "توسع تقني", desc: "بنية تحتية قابلة للتوسع لاستيعاب عدد غير محدود من المستخدمين." },
      { title: "ذكاء اصطناعي مرن", desc: "إمكانية دمج خوارزميات الذكاء الاصطناعي على مراحل." },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "القابلية الاقتصادية",
    subtitle: "Faisabilité Économique",
    color: "from-amber-600 to-amber-800",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200",
    items: [
      { title: "نموذج اشتراك (SaaS)", desc: "اشتراكات رمزية للفنادق مقابل خدمات الإدارة السحابية." },
      { title: "خدمات إضافية", desc: "توفير ميزات متقدمة مدفوعة مثل تحليلات السوق للمستثمرين." },
      { title: "شراكات استراتيجية", desc: "فرص للتعاون مع القطاعين العام والخاص." },
      { title: "كفاءة التكلفة", desc: "تكلفة الرقمنة أقل بكثير من التسيير التقليدي على المدى الطويل." },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "القابلية التشغيلية",
    subtitle: "Faisabilité Opérationnelle",
    color: "from-green-600 to-green-800",
    lightBg: "bg-green-50",
    borderColor: "border-green-200",
    items: [
      { title: "مرحلة الإطلاق (MVP)", desc: "يبدأ المشروع بإثبات المفهوم مع عدد محدود من الفنادق." },
      { title: "التوسع الولائي", desc: "تطبيق المنظومة على مستوى ولاية نموذجية واحدة." },
      { title: "التوسع الجهوي", desc: "نشر المنصة لتشمل عدة ولايات متجاورة." },
      { title: "التغطية الوطنية", desc: "تعميم المنصة على كامل التراب الوطني." },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <polyline points="12 6 12 12 16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "القابلية القانونية",
    subtitle: "Faisabilité Juridique",
    color: "from-purple-600 to-purple-800",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200",
    items: [
      { title: "حماية البيانات", desc: "التزام كامل بقوانين حماية البيانات الشخصية." },
      { title: "الأطر التنظيمية", desc: "احترام جميع قوانين وتنظيمات قطاع السياحة الجزائري." },
      { title: "الربط الحكومي", desc: "تبادل البيانات مع الجهات الرسمية يتم ضمن أطر قانونية مشفرة." },
      { title: "الأمن السيبراني", desc: "تطبيق أعلى معايير أمن المعلومات للحماية من الاختراقات." },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9 12 11 14 15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "القابلية المؤسساتية",
    subtitle: "Faisabilité Institutionnelle",
    color: "from-[#1a3a6b] to-[#0a2040]",
    lightBg: "bg-indigo-50",
    borderColor: "border-indigo-200",
    items: [
      { title: "يتوافق مع أهداف SDAT 2030", desc: "يدعم المخطط التوجيهي للتهيئة السياحية 2030 في تطوير السياحة الوطنية." },
      { title: "ينسجم مع توجهات SITEV 2025", desc: "يتماشى مع توصيات الصالون الدولي للسياحة للرقمنة والذكاء الاصطناعي." },
      { title: "التحول الرقمي", desc: "يساهم مباشرة في الاستراتيجية الوطنية لرقمنة القطاعات الحيوية." },
      { title: "دعم الاستثمار", desc: "يتوافق مع رؤية الدولة لتشجيع الاستثمار المدعوم بالبيانات." },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M3 9h18M9 21V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const mvpSteps = [
  { step: "MVP", label: "عدد محدود من الفنادق", desc: "إثبات المفهوم", color: "bg-blue-100 text-blue-700" },
  { step: "ولاية", label: "توسع على مستوى الولاية", desc: "اختبار وتحسين", color: "bg-teal-100 text-teal-700" },
  { step: "جهوي", label: "عدة ولايات", desc: "النمو الإقليمي", color: "bg-amber-100 text-amber-700" },
  { step: "وطني", label: "المستوى الوطني", desc: "الهدف النهائي", color: "bg-green-100 text-green-700" },
];

export default function FeasibilitySection() {
  return (
    <section id="feasibility" className="bg-white section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">القسم الخامس</span>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-blue mb-4">
            قابلية تنفيذ المشروع
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Feasibility cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {feasibilityItems.map((item, i) => (
            <div
              key={i}
              className={`card-premium rounded-3xl overflow-hidden ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${item.color} p-6`}>
                <div className="flex items-center justify-between">
                  {/* Reversing order for RTL: icon on left, number on right isn't strictly necessary if it looks fine, but flex-row naturally puts first child on right. Let's keep it as is, just swap children if we want number on right. Let's put number first (right) and icon second (left). */}
                  <div className="text-white/30 text-3xl font-black">{item.number}</div>
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-black text-lg">{item.title}</h3>
                  <p className="text-white/60 text-xs mt-1">{item.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="space-y-3">
                  {item.items.map((point, j) => (
                    <div
                      key={j}
                      className={`flex flex-col gap-1.5 p-3 rounded-xl ${item.lightBg} border ${item.borderColor}`}
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-br ${item.color}`}
                        />
                        <span className="text-[#0a1628] font-bold text-sm">
                          {point.title}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed ms-4">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MVP roadmap */}
        <div className="card-premium rounded-3xl p-10 mb-10">
          <div className="mb-8">
            <span className="section-label">خارطة الطريق التشغيلية</span>
            <h3 className="text-xl font-bold text-[#0a1628] mt-2">
              من الفكرة إلى المستوى الوطني
            </h3>
            <div className="divider-gold mt-2" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {mvpSteps.map((step, i) => (
              <div key={i} className="flex-1 w-full sm:w-auto">
                <div className="relative">
                  <div className={`${step.color} rounded-2xl p-5 text-center`}>
                    <div className="font-black text-2xl mb-1">{step.step}</div>
                    <div className="font-semibold text-sm mb-1">{step.label}</div>
                    <div className="text-xs opacity-70">{step.desc}</div>
                  </div>
                  {i < mvpSteps.length - 1 && (
                    <div className="hidden sm:flex absolute top-1/2 -left-4 -translate-y-1/2 z-10">
                      {/* Arrow now points left for RTL */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="#c9a227" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alignment banner */}
        <div className="section-gradient-2 rounded-3xl p-10">
          <div>
            <span className="section-label section-label-dark">التوافق المؤسساتي</span>
          </div>
          <p className="text-white/90 leading-relaxed text-base max-w-4xl mt-4">
            مشروعنا لا يأتي خارج رؤية الدولة، بل ينسجم معها. فهو يساهم في
            تجسيد أهداف{" "}
            <span className="text-[#f0c040] font-bold">SDAT 2030</span> (المخطط
            التوجيهي للتهيئة السياحية لآفاق 2030)، ويتوافق مع التوجهات التي
            تم التأكيد عليها خلال{" "}
            <span className="text-[#f0c040] font-bold">SITEV 2025</span>، خاصة
            فيما يتعلق بالتحول الرقمي، واستغلال البيانات، والذكاء الاصطناعي،
            ودعم الاستثمار السياحي.
          </p>
        </div>
      </div>
    </section>
  );
}
