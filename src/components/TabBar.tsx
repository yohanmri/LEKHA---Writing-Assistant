import React from 'react';

const tabs = ['Home', 'Insert', 'Synonyms', 'Grammar', 'Dialect', 'Review', 'View'];

const TabBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="h-[36px] bg-background-app flex items-end px-2 pt-1 border-b border-toolbar-border shrink-0 select-none overflow-x-auto no-scrollbar">
      <div className="flex space-x-1">
        {tabs.map(tab => {
          const isActive = activeTab === tab;
          const isDialect = tab === 'Dialect';
          const activeColor = isDialect ? 'text-accent-secondary border-accent-secondary' : 'text-accent-primary border-accent-primary';
          const baseColor = 'text-text-muted border-transparent';
          
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-1 text-[11px] uppercase tracking-wider font-semibold rounded-t-md transition-all duration-150
                border-b-2 hover:bg-toolbar-hover whitespace-nowrap
                ${isActive ? `bg-toolbar-bg ${activeColor}` : baseColor}
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
