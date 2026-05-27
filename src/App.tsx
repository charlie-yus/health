/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TabId } from './types';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import HealthScreen from './screens/HealthScreen';
import LifeScreen from './screens/LifeScreen';
import SocialScreen from './screens/SocialScreen';
import GuardianScreen from './screens/GuardianScreen';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('home');

  const renderScreen = () => {
    switch (currentTab) {
      case 'home':
        return <HomeScreen />;
      case 'health':
        return <HealthScreen />;
      case 'life':
        return <LifeScreen />;
      case 'social':
        return <SocialScreen />;
      case 'mine':
        return <GuardianScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-[480px] mx-auto bg-background min-h-screen relative shadow-2xl overflow-hidden flex flex-col pb-[100px] ring-1 ring-outline-variant/20">
      <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
        {renderScreen()}
      </div>
      <BottomNav currentTab={currentTab} onChangeTab={setCurrentTab} />
    </div>
  );
}
