export default function GuardianScreen() {
  return (
    <div className="flex flex-col pb-stack-lg bg-ink-wash min-h-full">
      <header className="flex justify-between items-center px-margin-page py-4 w-full bg-surface/90 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-fixed shadow-sm bg-surface-variant flex items-center justify-center">
            <img alt="Elderly user portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnLVhIhueoCAAEeECy5SbTE5B-rpFEhQ1vqLlkHPxK7MKKl8iPC_aVgGTrI0sWFrX_MUy7-jEIjDTyopRlSLwHhfV55bG0HXrNdcEJ3h19dkVDWzBQZkZVpN23u8Km4NLE3je2omSuRhCQtGUwNCjMyMxd2PUUjWb43zr0pFM1hchS6hP2BCEmGtDA8C7Yt7jPL8B1xBaEaIFjcUZWosrMFR5xh0b59Kx2cjWLTgmHLkrw21AcnJfCb9mjb-mG6-BRVFYPv8aw6w"/>
          </div>
          <div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary flex items-center gap-2">
              张妈妈 
              <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-medium border border-secondary-fixed-dim">
                本人
              </span>
            </h1>
            <p className="text-sm text-on-surface-variant mt-0.5">72岁</p>
          </div>
        </div>
        <button className="w-12 h-12 flex items-center justify-end text-primary hover:bg-surface-container-high rounded-full relative active:scale-95 duration-150 transition-all">
          <span className="material-symbols-outlined text-[28px]">notifications</span>
          <span className="absolute top-2 right-2 w-3 h-3 bg-error rounded-full border-2 border-surface"></span>
        </button>
      </header>

      <main className="px-margin-page space-y-stack-lg flex-1 py-4">
        {/* Health Overview */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-headline-md text-headline-md text-primary">今日健康概览</h2>
            <span className="text-xs text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">update</span> 10:30 更新
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Heart Rate */}
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-surface-container flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-error-container opacity-20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span className="text-lg font-medium text-on-surface">心率</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-bold text-on-surface">68</span>
                <span className="text-sm text-on-surface-variant">次/分</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="text-sm text-primary-container font-medium">正常</span>
              </div>
            </div>

            {/* Blood Pressure */}
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-surface-container flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-secondary-container opacity-20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>blood_pressure</span>
                <span className="text-lg font-medium text-on-surface">血压</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-on-surface tracking-tight">128/78</span>
                <span className="text-xs text-on-surface-variant flex-shrink-0">mmHg</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="text-sm text-primary-container font-medium">正常</span>
              </div>
            </div>

            {/* Blood Oxygen */}
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-surface-container flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-400 opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-blue-500" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                <span className="text-lg font-medium text-on-surface">血氧</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-bold text-on-surface">98</span>
                <span className="text-sm text-on-surface-variant">%</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="text-sm text-primary-container font-medium">正常</span>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-surface-container flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-secondary opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>directions_walk</span>
                <span className="text-lg font-medium text-on-surface">步数</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-bold text-on-surface">1826</span>
                <span className="text-sm text-on-surface-variant">步</span>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-sm text-secondary font-medium">适中</span>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Status */}
        <section className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-sm border border-white flex items-center justify-between mt-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-fixed-variant">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-on-surface">安全状态</h3>
              <p className="text-sm text-on-surface-variant mt-0.5">居家 · 安全围栏内</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-primary bg-primary-fixed-dim/30 px-3 py-1.5 rounded-full text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">check_circle</span> 全部正常
          </div>
        </section>

        {/* Remote Actions */}
        <section className="mt-6 mb-8">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">快捷操作</h2>
          <div className="grid grid-cols-4 gap-2">
            <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors active:scale-95">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[28px]">videocam</span>
              </div>
              <span className="text-sm text-on-surface font-medium">视频通话</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors active:scale-95">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined text-[28px]">local_mall</span>
              </div>
              <span className="text-sm text-on-surface font-medium">代订服务</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors active:scale-95">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-[#8b5cf6]">
                <span className="material-symbols-outlined text-[28px]">insert_chart</span>
              </div>
              <span className="text-sm text-on-surface font-medium">查看周报</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors active:scale-95">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[28px]">settings</span>
              </div>
              <span className="text-sm text-on-surface font-medium">提醒设置</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
