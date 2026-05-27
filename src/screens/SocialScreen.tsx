export default function SocialScreen() {
  return (
    <div className="flex flex-col pb-stack-lg">
      <header className="sticky top-0 z-40 bg-surface flex justify-between items-center px-margin-page py-4 w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container flex items-center justify-center border-2 border-surface-variant">
            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4iLicbzRHhxAoFSWQT4MOUd8MhwF893sGujFO__dK8ZVozPdX1q0a8UpgFKN2x52vkLyL4wi_rFgv9_NAn5TRiJkuiX3sgqIEYL-1aS3gSx4x_ZiIgJFrtFoURJTHAoUz-s87o6OY6DiDnFBpVkw4jbytDcH6PH9zrwOWblJ924NkAwRQe62lk1GrNKf5pQA14sFjLP9VKaKtatsG0gSEgWIITTsghOrQ2Xm2Y0C2oJxH33okt8lCM9wL6Fi3u8bQl6EsxoEiqg"/>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold tracking-tight">暮岁社交</h1>
        </div>
        <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high active:scale-95 duration-150 text-primary">
          <span className="material-symbols-outlined text-[28px]">wb_sunny</span>
        </button>
      </header>

      <main className="px-margin-page py-stack-md flex flex-col gap-stack-lg">
        {/* Tab Navigation */}
        <nav className="flex gap-6 border-b border-surface-variant pb-2">
          <button className="text-title-md font-title-md text-primary font-bold relative after:content-[''] after:absolute after:bottom-[-9px] after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:bg-primary after:rounded-t-full">
            社区活动
          </button>
          <button className="text-title-md font-title-md text-on-surface-variant font-medium hover:text-primary transition-colors">
            老年大学
          </button>
        </nav>

        {/* Section: Activities */}
        <section className="flex flex-col gap-4 mt-2">
          <div className="flex justify-between items-end">
            <h2 className="text-headline-md font-headline-md text-on-surface">活动推荐</h2>
            <button className="text-label-md font-label-md text-on-surface-variant flex items-center hover:text-primary transition-colors">
              更多活动 <span className="material-symbols-outlined ml-1 text-[18px]">chevron_right</span>
            </button>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-low flex flex-col gap-3 relative overflow-hidden active:scale-[0.98] transition-transform duration-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10"></div>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-body-xl font-body-xl text-on-surface mb-2 font-semibold">重阳敬老联欢会</h3>
                  <div className="flex items-center gap-1 text-on-surface-variant text-label-md mb-1.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>10月20日 09:30</span>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant text-label-md">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span className="truncate max-w-[150px]">社区活动中心</span>
                  </div>
                </div>
                <span className="bg-secondary-container/20 text-secondary font-label-md px-3 py-1 rounded-full text-sm font-medium">报名中</span>
              </div>
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-surface-variant/50">
                <div className="flex -space-x-2">
                  <img alt="User" className="w-8 h-8 rounded-full border-2 border-surface-container-lowest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8x9JosOSPoJyw4UrToo0hBuARQdngolGss6Ya6UOe_Bpsvmb1tBUAIGQApcVGftlkHGHlSO6HfVk1Eggap459KpXBslFOdEs9FS4P5EYjmkNWX-BF-O-m3d_FD8O0qPmRFMZEsF2hUv-kGd7UH_kWLlcffmdbxZIDhUBL4CGr35ywohY4PzHDXqjZpXIWMjg4ekdaB3WnN0NT1vfH3dVZ8b9d-498aBA0udn2G9ZUTi_wnWRX62MD642Ca_uiIX3DUsJCDC8Ekg"/>
                  <img alt="User" className="w-8 h-8 rounded-full border-2 border-surface-container-lowest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaFIaFoclEkZSFMC94sK8GNl0_XibpgB-Jr1hmieMI2cYCIyOaEo_ARqkv_BsUjrF3oh0J1ePdLC1jGeaR223VivV9yzPIWzKFdD148TQyjCUHsQXY6O0XMREy-r45dRiZyNAetTzo4Ds5IyhlaekkgntubZmdeQZD0D2TuJFRPiVcoPFBCmvMDdce3N-NiPTycAJ458gUkhuRYAsVNDLndq4HQqaAt0c-5nvdIDgn0o_t0oMO8aFCF8A_C7jQ6QXNrRmOxWQP3w"/>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high flex items-center justify-center text-xs text-on-surface-variant font-medium">+30</div>
                </div>
                <span className="text-sm text-on-surface-variant">32人已报名</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-low flex flex-col gap-3 relative overflow-hidden active:scale-[0.98] transition-transform duration-200">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-body-xl font-body-xl text-on-surface mb-2 font-semibold">秋季健康义诊</h3>
                  <div className="flex items-center gap-1 text-on-surface-variant text-label-md mb-1.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>10月25日 08:30</span>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant text-label-md">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span className="truncate max-w-[150px]">社区卫生服务站</span>
                  </div>
                </div>
                <span className="bg-secondary-container/20 text-secondary font-label-md px-3 py-1 rounded-full text-sm font-medium">报名中</span>
              </div>
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-surface-variant/50">
                <div className="flex -space-x-2">
                  <img alt="User" className="w-8 h-8 rounded-full border-2 border-surface-container-lowest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArhJIS8jx_hH9tz8jjOQ9hGRVJ9jdYQN3VVHYp5yPSKR6EZ_76YHU9t9ZvynKwM49EvOkdA6SU1Mf3Qid5nSi_a9lAjsMrBPqDstkSNkzUo5c0Dm8V4CH-7aeULcI4_FhzxHOsYJ7lU0eEfCULQbC6LtV1MWG9XFw15mr8lEwXb8tSpqshin5XdFLKZVTJONXdH1z88-e7RHPA-bG5JXG4jkSqaXkuE4uAl99rfQFMhuzmXyXjfMojyea862x4qI6GBoNhpQCh9g"/>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high flex items-center justify-center text-xs text-on-surface-variant font-medium">+27</div>
                </div>
                <span className="text-sm text-on-surface-variant">28人已报名</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Courses */}
        <section className="flex flex-col gap-4 mt-6">
          <h2 className="text-headline-md font-headline-md text-on-surface">老年大学课程</h2>
          <div className="grid grid-cols-2 gap-gutter-card">
            
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-low flex flex-col justify-between min-h-[150px] relative overflow-hidden group active:scale-[0.98] transition-transform">
              <div className="z-10">
                <h3 className="text-title-md font-title-md text-on-surface mb-1">书法课</h3>
                <p className="text-sm text-on-surface-variant mb-4 leading-snug">每周二 09:00<br/>墨香修心</p>
                <button className="bg-primary text-on-primary text-sm px-4 py-1.5 rounded-full w-fit">报名</button>
              </div>
              <div className="absolute -bottom-2 -right-2 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[80px]">brush</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-low flex flex-col justify-between min-h-[150px] relative overflow-hidden group active:scale-[0.98] transition-transform">
              <div className="z-10">
                <h3 className="text-title-md font-title-md text-on-surface mb-1">智能手机课</h3>
                <p className="text-sm text-on-surface-variant mb-4 leading-snug">每周四 09:00<br/>玩转智能生活</p>
                <button className="bg-primary text-on-primary text-sm px-4 py-1.5 rounded-full w-fit">报名</button>
              </div>
              <div className="absolute -bottom-2 -right-2 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[80px]">smartphone</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-low flex flex-col justify-between min-h-[150px] relative overflow-hidden group active:scale-[0.98] transition-transform">
              <div className="z-10">
                <h3 className="text-title-md font-title-md text-on-surface mb-1">健身课</h3>
                <p className="text-sm text-on-surface-variant mb-4 leading-snug">每周一 08:30<br/>科学运动</p>
                <button className="bg-primary text-on-primary text-sm px-4 py-1.5 rounded-full w-fit">报名</button>
              </div>
              <div className="absolute -bottom-2 -right-2 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[80px]">fitness_center</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-low flex flex-col justify-between min-h-[150px] relative overflow-hidden group active:scale-[0.98] transition-transform">
              <div className="z-10">
                <h3 className="text-title-md font-title-md text-on-surface mb-1">讲座</h3>
                <p className="text-sm text-on-surface-variant mb-4 leading-snug">每周六 10:00<br/>健康与生活</p>
                <button className="bg-primary text-on-primary text-sm px-4 py-1.5 rounded-full w-fit">报名</button>
              </div>
              <div className="absolute -bottom-2 -right-2 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[80px]">record_voice_over</span>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
