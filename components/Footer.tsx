"use client";

export default function Footer() {
  return (
    <footer className="hero-gradient py-24 px-4 min-h-[50vh] flex items-center justify-center border-t border-white/5">
      <div className="container-max text-center">
        
        {/* Animated Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a3a6b] to-[#0a2040] border border-white/10 flex items-center justify-center shadow-2xl relative">
            <div className="absolute inset-0 rounded-full border border-[#c9a227]/30 animate-ping opacity-50" style={{ animationDuration: '3s' }} />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12L11 15L16 9" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Main Message */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          شكراً على <span className="shimmer-text">حسن استماعكم</span>
        </h2>
        
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          أتمنى أن يكون هذا العرض قد قدم رؤية واضحة حول أهمية المشروع.
          <br className="hidden sm:block" />
          أنا مستعد الآن للإجابة على أسئلتكم ومناقشة التفاصيل.
        </p>

        <div className="divider-gold mx-auto mb-12" />

        {/* Presenter Info */}
        <div className="inline-block glass rounded-3xl p-6 sm:px-12 text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
            مقدم المشروع
          </p>
          <p className="text-white font-bold text-lg mb-1">
            دبز خير الدين
          </p>
        </div>

      </div>
    </footer>
  );
}
