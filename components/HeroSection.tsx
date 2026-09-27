"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-blue-600/20 top-10 -right-32" />
      <div className="orb w-80 h-80 bg-[#c9a227]/15 bottom-10 -left-20" />
      <div className="orb w-64 h-64 bg-teal-600/15 top-1/2 left-1/4" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text content — in RTL grid, first column renders on the RIGHT */}
          <div className="space-y-8">
            {/* Badge */}
            <div>
              <div className="section-label section-label-dark">
                مشروع - 2026
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight">
                منصة{" "}
                <span className="shimmer-text">وطنية ذكية</span>
                <br />
                للإيواء والسياحة
              </h1>
              <div className="divider-gold" />
              <p className="text-lg text-white/75 leading-relaxed max-w-lg">
                منصة وطنية ذكية تعتمد على الذكاء الاصطناعي والبيانات لرقمنة قطاع الإيواء والسياحة، وربط جميع الفاعلين ضمن منظومة رقمية موحدة وآمنة.
              </p>
            </div>

            {/* Personal info cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="glass rounded-2xl p-5">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                  المقدم
                </p>
                <p className="text-white font-bold text-lg mb-3">
                  دبز خير الدين
                </p>
                <div className="space-y-1.5">
                  <p className="text-[#c9a227] text-sm font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                    مطور ومقاول رقمي
                  </p>
                  <p className="text-[#c9a227] text-sm font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                    متخرج من جامعة باجي مختار عنابة تخصص شبكات وأمن المعلومات
                  </p>
                  <p className="text-[#c9a227] text-sm font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                    عضو بدار الشباب خالد نور الدين حي بني محافر عنابة
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs — flex start = right side in RTL */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("#problematic")}
                className="px-8 py-3.5 bg-gradient-to-r from-[#c9a227] to-[#f0c040] text-[#0a1628] rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                اكتشف المشروع
              </button>
              <button
                onClick={() => handleScroll("#objectives")}
                className="px-8 py-3.5 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                الاهداف
              </button>
            </div>
          </div>

          {/* Visual — second column, renders on the LEFT in RTL grid */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Central logo/icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="pulse-ring w-56 h-56 rounded-full bg-gradient-to-br from-[#1a3a6b] to-[#0a2040] border border-white/10 flex items-center justify-center shadow-2xl">
                  <div className="w-48 h-48 flex items-center justify-center bg-white rounded-full shadow-lg z-10">
                    <Image 
                      src="/logo.png" 
                      alt="شعار" 
                      width={220} 
                      height={220} 
                      className="object-contain scale-125" 
                    />
                  </div>
                </div>
              </div>

              {/* Orbiting stats */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-2 text-center">
                <div className="text-[#c9a227] font-black text-xl">+20</div>
                <div className="text-white/70 text-xs">مسير مقابل</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 glass rounded-2xl px-4 py-2 text-center">
                <div className="text-[#c9a227] font-black text-xl">AI</div>
                <div className="text-white/70 text-xs">ذكاء اصطناعي</div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-2 text-center">
                <div className="text-[#c9a227] font-black text-xl">69</div>
                <div className="text-white/70 text-xs">ولاية</div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 glass rounded-2xl px-4 py-2 text-center">
                <div className="text-[#c9a227] font-black text-xl">100%</div>
                <div className="text-white/70 text-xs">رقمي وموحّد</div>
              </div>

              {/* Ring decorations */}
              <div className="absolute inset-4 rounded-full border border-white/8 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-8 rounded-full border border-[#c9a227]/15 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => handleScroll("#problematic")}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="scroll-indicator group-hover:border-[#c9a227]/60 transition-colors">
              <div className="scroll-dot" />
            </div>
            <span className="text-white/40 text-xs font-medium tracking-widest uppercase">
              انتقل لاسفل
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
