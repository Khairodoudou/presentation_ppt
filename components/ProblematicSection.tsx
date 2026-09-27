"use client";

const problems = [
  "صعوبة تسيير العمليات اليومية",
  "إدارة الحجوزات والغرف",
  "إعداد الفواتير والتقارير",
  "تكرار إدخال البيانات",
  "اختلاف مستوى الرقمنة بين المؤسسات",
  "الاعتماد على طرق تقليدية في بعض المؤسسات",
];

const stakeholders = [
  {
    title: "السائح",
    issues: ["صعوبة التخطيط للرحلة", "صعوبة العثور على الخدمات المناسبة", "غياب منصة موحدة"],
    color: "from-blue-600 to-blue-800",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "الفنادق ودور الإيواء",
    issues: ["صعوبات التسيير", "ضعف التكامل الرقمي", "كثرة الإجراءات الإدارية"],
    color: "from-[#1a3a6b] to-[#0a2040]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "المرشدون السياحيون",
    issues: ["ضعف الظهور الرقمي", "صعوبة الوصول إلى الزبائن"],
    color: "from-teal-600 to-teal-800",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "المستثمرون",
    issues: ["نقص البيانات والتحليلات", "صعوبة اتخاذ قرارات الاستثمار"],
    color: "from-amber-600 to-amber-800",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "وزارة السياحة",
    issues: ["الحاجة إلى مؤشرات وإحصائيات دقيقة", "دعم التخطيط واتخاذ القرار"],
    color: "from-purple-600 to-purple-800",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ProblematicSection() {
  return (
    <section id="problematic" className="section-gradient-1 section-padding">
      <div className="container-max">

        {/* Section header — text-center works the same in RTL */}
        <div className="text-center mb-16">
          <span className="section-label">القسم الثاني</span>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-blue mb-4">
            الاشكالية
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* How the idea came */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Text content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="section-label">كيف جاءت الفكرة؟</span>
                <h3 className="text-2xl font-bold text-[#0a1628]">
                  من تجربة شخصية إلى مشروع وطني
                </h3>
                <div className="divider-gold" />
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                بدأت الفكرة من تجربة شخصية. في كل صيف، عندما أسافر داخل الجزائر،
                كنت أواجه صعوبة في العثور على فندق تتوفر فيه غرف، رغم وجود العديد
                من الفنادق في المنطقة. في كثير من الأحيان كنت أضطر إلى الاتصال
                بعدة فنادق أو التنقل بينها حتى أجد غرفة شاغرة.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                في البداية اعتقدت أن المشكلة تتعلق بالحجز فقط، لكنني تساءلت:
              </p>
              <div className="glass-dark rounded-2xl p-6">
                <p className="text-[#f0c040] font-bold text-lg leading-relaxed">
                  "لماذا لا توجد منصة وطنية تجمع جميع مؤسسات الإيواء وتعرض
                  توفر الغرف بشكل مباشر؟"
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                هذا السؤال كان نقطة البداية، وقررت أن أنزل إلى الميدان لأفهم
                الواقع الحقيقي للقطاع، بدل الاعتماد على الافتراضات.
              </p>
            </div>

            {/* Field study card */}
            <div className="card-premium rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-[#0a1628]">الدراسة الميدانية</h3>
                <div className="feature-icon bg-blue-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="#1a3a6b" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" stroke="#1a3a6b" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                بدأت بزيارة عدد من الفنادق ودور الإيواء، وأجريت لقاءات مع أكثر من{" "}
                <span className="font-bold text-[#1a3a6b]">20 مسيرًا</span> للاستماع
                إلى المشاكل اليومية التي يواجهونها. كنت أعتقد أن أكبر مشكلة هي
                الحجز، لكنني اكتشفت أن هذا ليس إلا جزءًا صغيرًا من التحديات.
              </p>

              <h4 className="font-bold text-[#0a1628] mb-4 text-sm uppercase tracking-wide">
                أهم المشاكل المكتشفة:
              </h4>
              <div className="space-y-3">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {/* In RTL: bullet dot renders on the right, text on the left — natural list */}
                    <div className="w-2 h-2 rounded-full bg-[#c9a227] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bigger discovery */}
        <div className="mb-20">
          <div className="section-gradient-2 rounded-3xl p-10">
            <span className="section-label section-label-dark">اكتشاف المشكلة الأكبر</span>
            <p className="text-white/85 leading-relaxed mb-6 mt-4 max-w-3xl">
              أثناء النقاش مع المسيرين، أخبرني معظمهم أن هناك تحديًا آخر يتكرر بشكل
              يومي، وهو إعداد وإرسال المعلومات المطلوبة للجهات المختصة، وهي عملية
              تستغرق وقتًا وجهدًا، ويمكن تحسينها إذا توفرت حلول رقمية مناسبة.
            </p>
            <div className="glass rounded-2xl p-6 max-w-2xl">
              <p className="text-[#f0c040] font-bold text-base leading-relaxed">
                المشكلة ليست داخل الفندق فقط، بل في غياب التكامل الرقمي بين
                مختلف الفاعلين.
              </p>
            </div>
          </div>
        </div>

        {/* Secure Channel Diagram */}
        <div className="mb-20">
          <div className="card-premium rounded-3xl p-8 lg:p-12 border border-blue-100/50 relative overflow-hidden bg-white/50 backdrop-blur-sm">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-gradient-to-r from-transparent via-teal-100/40 to-transparent blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Hotel (Right side in RTL) */}
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#9a7b1b] flex items-center justify-center shadow-lg shadow-[#c9a227]/20 mb-4 transform transition-transform hover:scale-105 duration-300 border-4 border-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 9h6M9 13h6M9 17h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#0a1628]">الفندق</h4>
                <span className="text-sm text-gray-500 font-medium">نقطة التسجيل</span>
              </div>

              {/* Secure Channel (Middle) */}
              <div className="flex-1 flex flex-col items-center justify-center relative w-full my-12 md:my-0">
                <div className="w-full relative flex items-center justify-center">
                  {/* The connection line */}
                  <div className="absolute w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1a3a6b] via-teal-400 to-[#c9a227] w-full animate-pulse opacity-70"></div>
                  </div>
                  
                  {/* Animated data packets */}
                  <div className="absolute w-full flex justify-between px-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)] animate-bounce`} style={{ animationDelay: `${i * 150}ms` }}></div>
                    ))}
                  </div>

                  {/* Central badge */}
                  <div className="bg-white px-8 py-4 rounded-2xl shadow-xl shadow-teal-900/5 border border-teal-100 flex flex-col items-center gap-2 z-10 transform -translate-y-1">
                    <div className="flex items-center gap-2 text-teal-600 mb-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-bold text-lg">قناة آمنة ومشفّرة</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-bold">معلومات النزيل</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-bold hidden sm:inline-block">بيانات الهوية</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Police Station (Left side in RTL) */}
              <div className="flex flex-col items-center z-10 w-full md:w-1/4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a3a6b] to-[#0a2040] flex items-center justify-center shadow-lg shadow-blue-900/20 mb-4 transform transition-transform hover:scale-105 duration-300 border-4 border-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#0a1628]">الجهات الأمنية</h4>
                <span className="text-sm text-gray-500 font-medium">مركز الشرطة</span>
              </div>
              
            </div>
          </div>
        </div>


        {/* All stakeholders */}
        <div className="mb-16">
          <div className="mb-10">
            <span className="section-label">توسيع نطاق الدراسة</span>
            <h3 className="text-2xl font-bold text-[#0a1628] mt-2">
              هل المشكلة تخص الفنادق فقط؟
            </h3>
            <div className="divider-gold mt-3" />
            <p className="text-gray-600 mt-4 text-sm">
              كل طرف يواجه تحديات خاصة به — وكل جهة تعمل بمنظومة منفصلة
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {stakeholders.map((s, i) => (
              <div key={i} className="card-premium rounded-2xl overflow-hidden group">
                <div className={`bg-gradient-to-br ${s.color} p-4 flex items-center gap-3`}>
                  {/* In RTL flex: icon is on the RIGHT, title on the LEFT naturally */}
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm">{s.title}</h4>
                </div>
                <div className="p-4 space-y-2">
                  {s.issues.map((issue, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs leading-relaxed">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="card-premium rounded-3xl p-10 border-r-4 border-[#c9a227]">
          <span className="section-label">الاستنتاج</span>
          <p className="text-[#0a1628] font-bold text-xl leading-relaxed max-w-4xl mt-4">
            المشكلة ليست في غياب برنامج لتسيير الفنادق فقط، بل في{" "}
            <span className="gradient-text">غياب منظومة رقمية وطنية موحدة</span>{" "}
            تربط مختلف الفاعلين في قطاع الإيواء والسياحة، وتستغل البيانات
            والذكاء الاصطناعي لتحسين الإدارة، ودعم الاستثمار، وتطوير تجربة
            السائح، والمساهمة في تسريع التحول الرقمي للقطاع.
          </p>
        </div>

      </div>
    </section>
  );
}

