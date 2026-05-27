export default function LifeScreen() {
  return (
    <div className="flex flex-col pb-stack-lg">
      <header className="bg-surface flex justify-between items-center px-margin-page py-4 w-full sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
          <div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold tracking-tight">便捷生活</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-sm">北京市 · 朝阳区</p>
          </div>
        </div>
        <button aria-label="Settings" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high hover:bg-surface-variant transition-colors">
          <span className="material-symbols-outlined text-primary text-2xl">settings</span>
        </button>
      </header>

      <main className="px-margin-page pt-4 space-y-stack-lg">
        {/* Grid Cards for Services */}
        <section className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-start p-4 rounded-xl bg-primary-fixed-dim/20 hover:bg-primary-fixed-dim/30 transition-colors h-32 relative overflow-hidden">
            <span className="font-headline-md text-headline-md text-primary mb-1">本地便民</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant text-sm text-left leading-relaxed">办事咨询<br/>邻里互助</span>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-5xl text-primary opacity-50">storefront</span>
          </button>
          
          <button className="flex flex-col items-start p-4 rounded-xl bg-secondary-fixed-dim/20 hover:bg-secondary-fixed-dim/30 transition-colors h-32 relative overflow-hidden">
            <span className="font-headline-md text-headline-md text-secondary mb-1">生活服务</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant text-sm text-left leading-relaxed">家政保洁<br/>维修服务</span>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-5xl text-secondary opacity-50">cleaning_services</span>
          </button>
          
          <button className="flex flex-col items-start p-4 rounded-xl bg-tertiary-fixed-dim/20 hover:bg-tertiary-fixed-dim/30 transition-colors h-32 relative overflow-hidden">
            <span className="font-headline-md text-headline-md text-tertiary mb-1">志愿服务</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant text-sm text-left leading-relaxed">爱心陪伴<br/>帮扶关怀</span>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-5xl text-tertiary opacity-50">volunteer_activism</span>
          </button>
          
          <button className="flex flex-col items-start p-4 rounded-xl bg-surface-tint/10 hover:bg-surface-tint/20 transition-colors h-32 relative overflow-hidden">
            <span className="font-headline-md text-headline-md text-primary mb-1">便捷支付</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant text-sm text-left leading-relaxed">水电燃气<br/>话费充值</span>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-5xl text-primary opacity-50">account_balance_wallet</span>
          </button>
        </section>

        {/* Recommended List */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">为您推荐</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 shadow-sm border border-white/50 cursor-pointer">
              <img alt="Haircut Service" className="w-16 h-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfqO9UOiGU4RD0mKgsiNvMPvc3hplPlapI8Ng6pEWRWAv-uVDYDXYS6h45XNSvdGcO0lZ76ZkvqJ9cvMP-m9CUBwlnz_8NvNqu6GGJo3bjm_8HnH2aX03KBt8lsd66W6Gtsqv-dmyRYs-f-A1FP00Vuc0A5TIEqc8f084PV8IeSHxibZVgTEfrKmOcNb4WaFiy78hwE6PKxiceV8Htu2hMYQSFSJoRV09G1_BFGqMVxIlFw4rdvIrvU8-oxyST2pmCaoiMqo1kPg"/>
              <div className="flex-grow">
                <h3 className="font-body-xl-mobile text-body-xl-mobile text-on-surface font-semibold">上门理发</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">专业理发师上门服务，清爽舒适</p>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 shadow-sm border border-white/50 cursor-pointer">
              <img alt="Bathing Service" className="w-16 h-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM2aD0j9JtZMWfQuLl2NqN1ytXhcTSZ2Q8y9eB_fLJOw_69IukH7Q-heBGe5hz8-V1_EXbiqvtJuCw_7GxxyrTUiAGZUThStgs53ORtNSj44ZBaUm33tG44zyEkqOvVRapaCjNrQms770ZACvb_vCNpgh_Z-DfzqlW4uENnvvmTEG3AWLNyAtSF2xOAZmKSDY4PJsq6-F1K5eGqEfR9JDph-5NYaXsuD-H2HyfAlW4o0DpMti7EoteyiZnt5KU5P1mkENc32Eeiw"/>
              <div className="flex-grow">
                <h3 className="font-body-xl-mobile text-body-xl-mobile text-on-surface font-semibold">上门沐浴</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">助浴服务，安全贴心</p>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
          </div>
        </section>

        {/* Map Mode Preview */}
        <section className="mt-8 mb-8 relative rounded-xl overflow-hidden shadow-md h-64 bg-surface-container-low border border-outline-variant/30 flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXYVayUp5KI-o9EDTp9mYBHpu3tTKdu5IBgyjd1sZCFk0YkKEwKJxvP7mJISz6RiUhElNeQE1mt4DVmhH9v4P2gGKSjqoIkauiJ_yzzrgn2wpFNzML_F2zVEe_C02-X7PGwqzIKbNRezP2yDlKdcH6ftfHFk3wbwvno-0XeNgrRQQFAD70BxzBhtPg8xS0hrGK3Ihgm1dgAxnenqjedKk5FmfluKn9XgxS4t8fAbGvL4kXLJ1RJyipR3RMNkJgVWvo42OQY7oJ5w')" }}></div>
          <div className="relative z-10 bg-white/80 backdrop-blur-md p-4 rounded-lg flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">map</span>
            <span className="font-body-xl-mobile text-body-xl-mobile text-on-surface font-semibold">便捷出行地图</span>
            <span className="font-body-lg text-body-lg text-on-surface-variant text-sm text-center">周边设施一目了然</span>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button aria-label="一键叫车" className="fixed bottom-[100px] right-6 w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform z-40 active:scale-95">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>directions_car</span>
      </button>
    </div>
  );
}
