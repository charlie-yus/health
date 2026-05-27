import { TabId } from '../types';

interface BottomNavProps {
  currentTab: TabId;
  onChangeTab: (tab: TabId) => void;
}

export default function BottomNav({ currentTab, onChangeTab }: BottomNavProps) {
  const tabs: Array<{ id: TabId; icon: string; label: string; activeIconType: string }> = [
    { id: 'home', icon: 'home', label: '首页', activeIconType: '1' },
    { id: 'health', icon: 'medical_services', label: '健康', activeIconType: '1' },
    { id: 'life', icon: 'local_mall', label: '生活', activeIconType: '1' },
    { id: 'social', icon: 'group', label: '社交', activeIconType: '1' },
    { id: 'mine', icon: 'person', label: '我的', activeIconType: '1' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-2 py-2 pb-safe bg-surface-container-lowest shadow-[0_-4px_16px_rgba(0,0,0,0.06)] rounded-t-2xl">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={`flex flex-col items-center justify-center p-2.5 min-w-[64px] min-h-[64px] rounded-2xl transition-all duration-200 active:scale-90 ${
              isActive
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:bg-surface-variant/50'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: isActive ? `'FILL' ${tab.activeIconType}` : "'FILL' 0" }}
            >
              {tab.icon}
            </span>
            <span className={`mt-1 text-sm ${isActive ? 'font-label-lg text-label-lg font-bold' : 'font-body-lg text-body-lg'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
