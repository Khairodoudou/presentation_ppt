"use client";

const results = [
  {
    number: "01",
    category: "كفاءة العمليات",
    title: "إنهاء العمل اليدوي وتسريع الإجراءات",
    text: "رقمنة شاملة لإدارة الحجوزات وإرسال البيانات القانونية بأمان وسرعة، مما يوفر وقت وجهد أصحاب الفنادق.",
    color: "from-blue-600 to-blue-800",
  },
  {
    number: "02",
    category: "تجربة الزائر",
    title: "منظومة سياحية موحدة وسهلة الوصول",
    text: "تمكين السائح من التخطيط، الحجز الموثوق، واكتشاف المسارات والجواهر السياحية عبر واجهة موحدة ذكية.",
    color: "from-[#1a3a6b] to-[#0a2040]",
  },
  {
    number: "03",
    category: "صناعة القرار",
    title: "رؤية فورية مبنية على بيانات دقيقة",
    text: "تزويد وزارة السياحة وأصحاب المصلحة بمؤشرات ونسب إشغال حية تنهي الاعتماد على التقارير التقديرية أو المتأخرة.",
    color: "from-teal-600 to-teal-800",
  },
  {
    number: "04",
    category: "الاستثمار الذكي",
    title: "توجيه الاستثمارات لسد العجز الفندقي",
    text: "استثمار موجه بالذكاء الاصطناعي يكشف الفرص الاستثمارية الحقيقية ويوزع المشاريع بعدالة على مختلف الولايات.",
    color: "from-amber-600 to-amber-800",
  },
  {
    number: "05",
    category: "الأداء الاقتصادي",
    title: "رفع نسب الإشغال وتنشيط الحركة",
    text: "زيادة مداخيل مؤسسات الإيواء وتوزيع النشاط السياحي على مدار فصول السنة بدلاً من الاقتصار على مواسم الذروة.",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    number: "06",
    category: "الرؤية الوطنية",
    title: "دعم التحول الرقمي السياحي",
    text: "المساهمة الفعلية في التحول الرقمي الشامل لقطاع السياحة وجعله رافداً تنموياً عصرياً للاقتصاد الوطني.",
    color: "from-purple-600 to-purple-800",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-gradient-2 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label section-label-dark">القسم الخامس</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 mt-4">
            النتائج{" "}
            <span className="shimmer-text">المنتظرة</span>
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-base">
            المخرجات الاستراتيجية والأثر الميداني المباشر لتطبيق المنصة الوطنية الذكية
          </p>
        </div>

        {/* Results grid (6 distinct, impactful outcomes) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {results.map((r, i) => (
            <div
              key={i}
              className="card-dark rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`bg-gradient-to-br ${r.color} text-white text-xs font-black w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {r.number}
                </div>
                <div className="flex-1 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-bold">
                    {r.category}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stat cards (2 focused stats) */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {[
            {
              value: "+20",
              label: "مسير شملتهم الدراسة الميدانية",
              sublabel: "تشخيص واقعي للمشاكل والاحتياجات",
              color: "from-[#c9a227] to-[#f0c040]",
            },
            {
              value: "69",
              label: "ولاية عبر التراب الوطني",
              sublabel: "منظومة وطنية متكاملة وشاملة",
              color: "from-teal-400 to-teal-600",
            },
          ].map((stat, i) => (
            <div key={i} className="counter-card text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div
                className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-white font-bold text-base sm:text-lg">{stat.label}</div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Final CTA / Conclusion */}
        <div className="glass rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="divider-gold mx-auto mb-6" />
          <h3 className="text-white font-black text-2xl sm:text-3xl mb-4">
            نحو منظومة رقمية وطنية موحدة
          </h3>
          <p className="text-white/80 leading-relaxed mx-auto text-sm sm:text-base max-w-2xl mb-8">
            المشروع ليس مجرد موقع إلكتروني أو تطبيق، بل هو بنية تحتية رقمية وطنية
            تعيد رسم تجربة الإيواء والسياحة في الجزائر، وتسهم في تحقيق التنمية المستدامة
            وفق أعلى معايير الأمان والتكنولوجيا الحديثة.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "التحول الرقمي",
              "الذكاء الاصطناعي",
              "السياحة الجزائرية",
              "منصة وطنية موحدة",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 text-[#f0c040] text-xs sm:text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
