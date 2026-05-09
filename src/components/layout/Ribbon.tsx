import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import HomeTab from '../ribbon/tabs/HomeTab';
import InsertTab from '../ribbon/tabs/InsertTab';
import LayoutTab from '../ribbon/tabs/LayoutTab';
import ReferencesTab from '../ribbon/tabs/ReferencesTab';
import SynonymsTab from '../ribbon/tabs/SynonymsTab';
import GrammarTab from '../ribbon/tabs/GrammarTab';
import DialectTab from '../ribbon/tabs/DialectTab';
import ReviewTab from '../ribbon/tabs/ReviewTab';
import ViewTab from '../ribbon/tabs/ViewTab';

const Ribbon: React.FC = () => {
  const { activeTab, setActiveTab } = useAppStore();

  const tabs = [
    'HOME', 'INSERT', 'LAYOUT', 'REFERENCES', 
    'SYNONYMS', 'GRAMMAR', 'DIALECT', 
    'REVIEW', 'VIEW'
  ];

  const sinhalaTabs = ['SYNONYMS', 'GRAMMAR', 'DIALECT'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'HOME': return <HomeTab />;
      case 'INSERT': return <InsertTab />;
      case 'LAYOUT': return <LayoutTab />;
      case 'REFERENCES': return <ReferencesTab />;
      case 'SYNONYMS': return <SynonymsTab />;
      case 'GRAMMAR': return <GrammarTab />;
      case 'DIALECT': return <DialectTab />;
      case 'REVIEW': return <ReviewTab />;
      case 'VIEW': return <ViewTab />;
      default: return <div className="flex items-center text-gray-400 text-sm px-4 italic">Tab content for {activeTab} is under development...</div>;
    }
  };

  return (
    <div className="bg-white flex flex-col z-40 border-b border-gray-200 shadow-sm">
      {/* Tab Bar */}
      <div className="flex px-4 border-b border-gray-100">
        {tabs.map((tab) => {
          const isSinhala = sinhalaTabs.includes(tab);
          const isActive = activeTab === tab;
          
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2 text-[11px] font-semibold tracking-wide transition-all relative
                ${isActive ? 'text-gray-900' : 'text-gray-500 hover:bg-gray-50'}
              `}
            >
              {tab}
              {isActive && (
                <div 
                  className={`
                    absolute bottom-0 left-0 right-0 h-[2px] 
                    ${isSinhala ? 'bg-[#1A7A6E]' : 'bg-[#C9973A]'}
                  `} 
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Ribbon Groups */}
      <div className="h-[76px] px-4 bg-white flex overflow-x-auto no-scrollbar items-center">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Ribbon;
