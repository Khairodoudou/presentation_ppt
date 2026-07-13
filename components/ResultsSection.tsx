"use client";

const results = [
  {
    number: "01",
    text: "رقمنة قطاع الإيواء والسياحة في الجزائر",
    color: "from-blue-600 to-blue-800",
    category: "رقمنة",
  },
  {
    number: "02",
    text: "إنشاء منصة وطنية موحدة تربط جميع الفاعلين في القطاع",
    color: "from-[#1a3a6b] to-[#0a2040]",
    category: "توحيد",
  },
  {
    number: "03",
    text: "تحسين تسيير الفنادق ودور الإيواء وتقليل العمل الإداري اليدوي",
    color: "from-teal-600 to-teal-800",
    category: "تسيير",
  },
  {
    number: "04",
    text: "تسهيل تجربة الحجز والوصول إلى الخدمات السياحية",
    color: "from-purple-600 to-purple-800",
    category: "خدمات",
  },
  {
    number: "05",
    text: "تحسين تجربة السائح قبل وأثناء وبعد الرحلة",
    color: "from-pink-600 to-pink-800",
    category: "سائح",
  },
  {
    number: "06",
    text: "توفير مؤشرات وإحصائيات دقيقة تساعد على اتخاذ القرار",
    color: "from-amber-600 to-amber-800",
    category: "بيانات",
  },
  {
    number: "07",
    text: "دعم الاستثمار السياحي بالاعتماد على البيانات والذكاء الاصطناعي",
    color: "from-green-600 to-green-800",
    category: "استثمار",
  },
  {
    number: "08",
    text: "تحسين توزيع المشاريع السياحية على مختلف ولايات الوطن",
    color: "from-sky-600 to-sky-800",
    category: "توزيع",
  },
  {
    number: "09",
    text: "المساهمة في زيادة نسب إشغال مؤسسات الإيواء",
    color: "from-indigo-600 to-indigo-800",
    category: "إشغال",
  },
  {
    number: "10",
    text: "تعزيز الترويج للوجهات السياحية الجزائرية",
    color: "from-rose-600 to-rose-800",
    category: "ترويج",
  },
  {
    number: "11",
    text: "دعم التحول الرقمي في قطاع السياحة بما يتماشى مع SDAT 2030",
    color: "from-orange-600 to-orange-800",
    category: "SDAT 2030",
  },
  {
    number: "12",
    text: "إنشاء قاعدة بيانات وطنية تساعد في التخطيط وتطوير القطاع مع احترام القوانين",
    color: "from-cyan-600 to-cyan-800",
    category: "قاعدة بيانات",
  },
  {
    number: "13",
    text: "تشجيع الابتكار واستخدام الذكاء الاصطناعي في الخدمات السياحية",
    color: "from-violet-600 to-violet-800",
    category: "ابتكار",
  },
  {
    number: "14",
    text: "المساهمة في رفع جودة الخدمات وتعزيز تنافسية القطاع السياحي",
    color: "from-emerald-600 to-emerald-800",
    category: "جودة",
  },
  {
    number: "15",
    text: "المساهمة في جذب المزيد من السياح وتشجيع الاستثمار في القطاع",
    color: "from-fuchsia-600 to-fuchsia-800",
    category: "جذب",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-gradient-2 section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label section-label-dark">القسم السادس</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 mt-4">
            النتائج{" "}
            <span className="shimmer-text">المنتظرة</span>
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-white/65 mt-4 max-w-2xl mx-auto">
            المخرجات المتوقعة من تطبيق المنصة الوطنية الذكية للإيواء والسياحة
          </p>
        </div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {results.map((r, i) => (
            <div
              key={i}
              className="card-dark rounded-2xl p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className={`bg-gradient-to-br ${r.color} text-white text-xs font-black w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {r.number}
                </div>
                <div className="flex-1">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white/60 text-xs font-medium mb-2">
                    {r.category}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-medium">
                    {r.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              value: "15",
              label: "نتيجة مباشرة منتظرة",
              sublabel: "من تطبيق المنصة",
              color: "from-[#c9a227] to-[#f0c040]",
            },
            {
              value: "69",
              label: "ولاية جزائرية",
              sublabel: "نطاق التغطية المستهدف",
              color: "from-teal-500 to-teal-700",
            },
            {
              value: "2030",
              label: "أفق SDAT",
              sublabel: "التوافق مع الرؤية الوطنية",
              color: "from-blue-500 to-blue-700",
            },
          ].map((stat, i) => (
            <div key={i} className="counter-card text-center">
              <div
                className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-white font-bold">{stat.label}</div>
              <div className="text-white/50 text-sm mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Final CTA / Conclusion */}
        <div className="glass rounded-3xl p-10 text-center">
          <div className="divider-gold mx-auto mb-6" />
          <h3 className="text-white font-black text-2xl mb-4">
            نحو منظومة رقمية وطنية موحدة
          </h3>
          <p className="text-white/75 leading-relaxed max-w-3xl mx-auto text-base">
            هذا المشروع ليس مجرد فكرة تقنية، بل هو رؤية شاملة لتحويل قطاع
            السياحة والإيواء في الجزائر إلى منظومة رقمية ذكية ومتكاملة، تخدم
            السائح والمستثمر والدولة في آنٍ واحد، وتضع الجزائر على خريطة
            التحول الرقمي السياحي العالمي.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "التحول الرقمي",
              "الذكاء الاصطناعي",
              "SDAT 2030",
              "السياحة الجزائرية",
              "منصة وطنية",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full border border-[#c9a227]/40 text-[#f0c040] text-sm font-semibold"
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
