export default function HealthScreen() {
  return (
    <div className="flex flex-col pb-stack-lg">
      <header className="flex flex-col px-margin-page pt-stack-lg pb-stack-md w-full bg-transparent sticky top-0 z-10">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
              <img alt="Elderly user portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGefWqXtDQWO9NCho43ug8ggKC_TuAGdRvFI2UoXv8x0NKtjZzFx3Ry7J0bTZlglwXwZrpvc0zx16Zf4OE7hAXfS_GEJ1tXQh86E5ceJHJWx4c0wGWmd6-W1GtmwmtmKmy1T6O0uTdB1uTT0r3ZXzEjlUxrQ42YFkVgN5U_KRzdcVbbzbJEESEA6BJOqpk9rCARCOkjJwbt2GRw8StyJM_7IfEVHjomBLbE_pqI6DVmuZu4MEtvUgrKtwbvF4sAN59Lhvji2-1Q"/>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed">早上好，张爷爷</span>
              <span className="font-label-lg text-label-lg text-on-surface-variant">关注健康，享受美好每一天</span>
            </div>
          </div>
          <button aria-label="Settings Voice" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-primary shrink-0">
            <span className="material-symbols-outlined text-[28px]">settings_voice</span>
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-stack-lg px-margin-page">
        {/* SOS Button Section */}
        <section className="w-full flex justify-center py-4">
          <button className="sos-pulse bg-error w-40 h-40 rounded-full shadow-lg flex flex-col items-center justify-center text-on-error relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
            <span className="material-symbols-outlined text-[48px] mb-2 relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            <span className="font-headline-lg-mobile text-headline-lg-mobile relative z-10">SOS</span>
            <span className="font-label-lg text-label-lg opacity-90 relative z-10 mt-1">一键呼救</span>
          </button>
        </section>

        {/* Health Score Card */}
        <section className="bg-surface-container-lowest rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-surface-container-low flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
            <svg className="text-primary" fill="currentColor" height="200" viewBox="0 0 24 24" width="200">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.36 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path>
            </svg>
          </div>
          <div className="flex justify-between items-center relative z-10">
            <h2 className="font-headline-md text-headline-md text-on-surface">本周健康评分</h2>
            <div className="w-16 h-16 rounded-full border-4 border-primary-fixed flex items-center justify-center bg-surface">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">85<span className="text-sm tracking-normal">分</span></span>
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10">
            <span className="font-headline-lg text-headline-lg text-primary">良好</span>
            <span className="font-body-lg text-body-lg text-on-surface-variant flex items-center bg-primary-fixed/20 px-2 py-1 rounded-full">
              比上周 <span className="material-symbols-outlined text-sm mx-1 text-primary">arrow_upward</span> 5分
            </span>
          </div>
        </section>

        {/* Health Metrics Grid (Bento) */}
        <section className="grid grid-cols-2 gap-gutter-card">
          <div className="bg-surface-container-lowest rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition-shadow min-h-[touch-target-min]">
            <div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface-variant text-sm">血压</span>
              <span className="font-body-xl-mobile text-body-xl-mobile text-on-surface leading-tight">128/78 <span className="text-xs text-on-surface-variant font-normal">mmHg</span></span>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition-shadow min-h-[touch-target-min]">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>opacity</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface-variant text-sm">血糖</span>
              <span className="font-body-xl-mobile text-body-xl-mobile text-on-surface leading-tight">6.2 <span className="text-xs text-on-surface-variant font-normal">mmol/L</span></span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition-shadow min-h-[touch-target-min]">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface-variant text-sm">心率</span>
              <span className="font-body-xl-mobile text-body-xl-mobile text-on-surface leading-tight">72 <span className="text-xs text-on-surface-variant font-normal">次/分</span></span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-[20px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center gap-3 hover:shadow-md transition-shadow min-h-[touch-target-min]">
            <div className="w-12 h-12 rounded-full bg-[#E0E7FF] text-[#4338CA] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>bedtime</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface-variant text-sm">睡眠</span>
              <span className="font-body-xl-mobile text-body-xl-mobile text-on-surface leading-tight">7.2 <span className="text-xs text-on-surface-variant font-normal">小时</span></span>
            </div>
          </div>
        </section>

        {/* Medication Plans */}
        <section className="bg-surface-container-lowest rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-surface-container-low flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-headline-md text-headline-md text-on-surface">今日用药计划</h3>
            <button className="font-label-lg text-label-lg text-primary flex items-center">
              用药记录 <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container border border-surface-variant min-h-[touch-target-min]">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center w-12 text-on-surface-variant">
                <span className="font-label-lg font-bold">早晨</span>
                <span className="text-sm">08:00</span>
              </div>
              <div className="w-px h-10 bg-outline-variant"></div>
              <div className="flex flex-col">
                <span className="font-body-xl-mobile text-body-xl-mobile text-on-surface leading-snug">降压片 5mg</span>
                <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">1片 口服</span>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-lg text-sm shrink-0">
              已服用
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container border-2 border-secondary/30 min-h-[touch-target-min]">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center w-12 text-on-surface">
                <span className="font-label-lg font-bold text-secondary">中午</span>
                <span className="text-sm text-secondary">12:00</span>
              </div>
              <div className="w-px h-10 bg-outline-variant"></div>
              <div className="flex flex-col">
                <span className="font-body-xl-mobile text-body-xl-mobile text-on-surface font-bold leading-snug">降糖片 50mg</span>
                <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">1片 口服</span>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-sm animate-pulse shrink-0">
              待服用
            </div>
          </div>
        </section>

        {/* Online Consultation */}
        <section className="relative rounded-[24px] overflow-hidden bg-primary-container text-on-primary-container p-6 flex flex-col justify-center min-h-[140px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-4">
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-80 mix-blend-multiply">
            <img alt="Friendly doctor smiling" className="w-full h-full object-cover object-left-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVqBkEEg4RgxCxJEp6LwheLWhapHUXgAT5M_mUH1PsWm-b3pJd3HPu4bOcex-QSjOUvWsO4JCeU_B4rwb4BCJqaVZPJx5m7CjPnHmvpG3yK_tUh7IgC3L1cyfu-vfq5YtqA55VRbxkz7T2xGT28v3T8m_u0FVjmDuHngE1Ealw5d5jBEGLbmZ-qZtPuIZvepY-ae-40WRgqFUftqFQ3Q5voSpzlZGNW5tL4Va7r7vI7l4iqjET4ME8vzel3oEth3bym_nJ6TpFPg"/>
          </div>
          <div className="relative z-10 w-2/3">
            <h3 className="font-headline-md text-headline-md mb-2">在线问诊</h3>
            <p className="font-body-lg text-body-lg opacity-90 mb-4 text-sm leading-relaxed">专业医生在线解答健康问题</p>
            <button className="bg-surface text-primary font-label-lg px-6 py-2 rounded-full flex items-center gap-2 w-fit hover:bg-surface-bright transition-colors shadow-sm">
              去问诊 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
