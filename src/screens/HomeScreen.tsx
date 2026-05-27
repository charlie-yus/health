export default function HomeScreen() {
  return (
    <div className="relative min-h-full flex flex-col">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-fixed-dim/20 to-transparent pointer-events-none z-0"></div>

      {/* Header */}
      <header className="flex flex-col px-margin-page pt-stack-lg pb-stack-md bg-transparent relative z-10 w-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary flex items-center gap-2">
              早上好，李爷爷{' '}
              <span className="text-[28px] leading-none animate-bounce" style={{ animationDuration: '2s' }}>👋</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">愿您今天心情舒畅，事事顺心！</p>
          </div>
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-surface-container-lowest shadow-sm shrink-0">
            <img 
              alt="Elderly user portrait" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpnbrg56dbU-8SRzeTzQ4B9QcyKq51rYNWHalKZUhx5pStjcTPeRZnXAUvGHkeZedcFszkyBwuQkReLmlvzfwHVMPHhed9MMjwXMWf9ozXujNsryrjKLpMkcfBLdJPSAFz9XBkvnOrHa3v_dVvfSd0vY1aDeKPvGs5l_K8rpOx1Iuv64GNsyuKS_mz-t4urpIW-gGBvtzSJ8g6VzyUklH6dfAQ6vdoDKNpxVcaZKSly_0BmeIqoBaD8NM2HafjMfvm4UfSzwLi6w" 
            />
          </div>
        </div>
      </header>

      <main className="px-margin-page flex flex-col gap-stack-md relative z-10 pb-stack-lg">
        {/* Weather & Date Card */}
        <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/20 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-secondary-fixed/30 rounded-full text-secondary-container">
              <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>partly_cloudy_day</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">18<span className="text-xl">℃</span></span>
                <span className="font-body-lg text-body-lg text-on-surface-variant">多云转晴</span>
              </div>
              <div className="mt-1 inline-flex items-center bg-primary-fixed/50 text-primary-container px-2 py-0.5 rounded-full text-sm font-medium w-max">
                空气优 32
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="font-label-lg text-label-lg text-on-surface">5月18日 周日</span>
            <span className="font-body-lg text-body-lg text-on-surface-variant mt-1">四月廿一</span>
          </div>
        </section>

        {/* Medication Reminder Card */}
        <section className="bg-error-container/30 border border-tertiary-fixed-dim/50 rounded-3xl p-5 shadow-sm mt-2 relative overflow-hidden">
          <span className="material-symbols-outlined absolute -bottom-6 -right-4 text-[120px] text-tertiary/5 select-none pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>pill</span>
          
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2 text-tertiary">
              <span className="material-symbols-outlined animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
              <h2 className="font-label-lg text-label-lg font-bold">用药提醒</h2>
            </div>
            <span className="material-symbols-outlined text-tertiary/60">chevron_right</span>
          </div>
          
          <div className="flex items-end gap-4 mb-2 relative z-10">
            <span className="font-display-lg text-display-lg text-tertiary leading-none">08:30</span>
            <div className="flex flex-col pb-1">
              <span className="font-body-xl text-body-xl text-on-surface font-semibold">降压片 <span className="font-normal text-on-surface-variant text-base ml-1">1片</span></span>
              <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-0.5">每天 08:30 服用</span>
            </div>
          </div>
          
          <button className="w-full min-h-[56px] mt-4 bg-tertiary text-on-tertiary rounded-2xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform relative z-10">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home_health</span>
            我已服药
          </button>
        </section>

        {/* Health Overview Card */}
        <section className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm border border-outline-variant/20 mt-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-label-lg text-label-lg text-on-surface">今日健康概览</h2>
            <button className="font-body-lg text-body-lg text-on-surface-variant flex items-center text-sm hover:text-primary">
              查看详情 <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 divide-x divide-outline-variant/30">
            <div className="flex flex-col items-center text-center px-1">
              <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mb-1">血压</span>
              <span className="font-headline-md text-headline-md text-on-surface">128/78</span>
              <span className="text-xs text-on-surface-variant/70 mt-1">mmHg</span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mb-1">心率</span>
              <span className="font-headline-md text-headline-md text-on-surface">76</span>
              <span className="text-xs text-on-surface-variant/70 mt-1">次/分</span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mb-1">步数</span>
              <span className="font-headline-md text-headline-md text-primary">3520</span>
              <span className="text-xs text-on-surface-variant/70 mt-1">步</span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-outline-variant/20 text-center">
            <span className="text-xs text-on-surface-variant/60">数据来自 05-18 07:30</span>
          </div>
        </section>

        {/* Quick Services */}
        <section className="mt-4 mb-6">
          <h2 className="font-label-lg text-label-lg text-on-surface mb-4 px-1">快捷服务</h2>
          <div className="grid grid-cols-4 gap-2">
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-md active:scale-90 transition-transform relative">
                <div className="absolute inset-0 rounded-full border-2 border-tertiary animate-ping opacity-20"></div>
                <span className="font-headline-md text-headline-md font-bold tracking-wider">SOS</span>
              </div>
              <span className="font-body-lg text-body-lg text-on-surface text-sm">一键呼救</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-[1.25rem] bg-primary-fixed text-primary-fixed-variant flex items-center justify-center shadow-sm active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_3</span>
              </div>
              <span className="font-body-lg text-body-lg text-on-surface text-sm">联系家人</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-[1.25rem] bg-secondary-fixed text-secondary-fixed-variant flex items-center justify-center shadow-sm active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_taxi</span>
              </div>
              <span className="font-body-lg text-body-lg text-on-surface text-sm">叫车出行</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-[1.25rem] bg-surface-tint text-on-primary flex items-center justify-center shadow-sm active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
              </div>
              <span className="font-body-lg text-body-lg text-on-surface text-sm">语音助手</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
