import React from 'react';

const RightPanel = ({ isCollapsed, toggleCollapse, activeTab }) => {
  let panelTitle = 'Suggestions';
  let badgeCount = 0;
  let cards = [];
  let showStats = false;
  let primaryColor = 'text-accent-primary border-accent-primary bg-accent-primary';

  if (activeTab === 'Dialect') {
    panelTitle = 'Dialect Suggestions';
    badgeCount = 12;
    showStats = true;
    cards = [
      { orig: 'ඔයා', sug: 'ඔහේ', type: 'Pronoun', context: 'Galle dialect' },
      { orig: 'කොස්', sug: 'හේරලිය', type: 'Noun', context: 'Southern' },
      { orig: 'කනවාද', sug: 'කනවයි', type: 'Verb', context: 'Matara' },
    ];
  } else if (activeTab === 'Synonyms') {
    panelTitle = 'Synonyms';
    badgeCount = 5;
    primaryColor = 'text-blue-500 border-blue-500 bg-blue-500';
    cards = [
      { orig: 'ගොවියෙකු', sug: 'ගොවිරාල', type: 'Noun', context: 'Formal Synonym' },
      { orig: 'නිහඬ', sug: 'ශාන්ත', type: 'Adjective', context: 'Literary' },
    ];
  } else if (activeTab === 'Grammar') {
    panelTitle = 'Grammar Corrections';
    badgeCount = 3;
    primaryColor = 'text-green-500 border-green-500 bg-green-500';
    cards = [
      { orig: 'හළේය', sug: 'හැළුවේය', type: 'Verb Conjugation', context: 'Standard Written' },
      { orig: 'පියසකට', sug: 'පියසට', type: 'Suffix', context: 'Usage rule' },
    ];
  }

  return (
    <div className={`
      bg-background-app border-l border-toolbar-border transition-all duration-300 flex flex-col relative
      ${isCollapsed ? 'w-0 overflow-hidden border-none' : 'w-[280px]'}
    `}>
      {!isCollapsed && (
        <>
          <div className="p-4 border-b border-toolbar-border flex items-center justify-between sticky top-0 bg-background-app z-10">
            <span className="text-sm font-semibold text-text-dark">{panelTitle}</span>
            <span className={`${primaryColor.split(' ')[2]} text-white text-[10px] px-2 py-0.5 rounded-full font-bold`}>{badgeCount}</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Cards */}
            {cards.map((item, i) => (
              <div key={i} className={`bg-toolbar-bg border-l-[3px] ${primaryColor.split(' ')[1]} rounded shadow-sm flex flex-col group overflow-hidden`}>
                <div className="p-3 border-b border-toolbar-border/50">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-document text-lg flex items-center space-x-2">
                      <span className="text-text-muted line-through decoration-red-500/50">{item.orig}</span>
                      <i className={`ph ph-arrow-right text-sm ${primaryColor.split(' ')[0]}`}></i>
                      <span className={`${primaryColor.split(' ')[0]} font-medium`}>{item.sug}</span>
                    </div>
                  </div>
                  <div className="text-xs text-text-muted flex items-center space-x-1">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.context}</span>
                  </div>
                </div>
                <div className="flex bg-toolbar-bg/50">
                  <button className="flex-1 py-2 text-xs font-medium text-green-500 hover:bg-green-500/10 transition-colors flex items-center justify-center space-x-1">
                    <i className="ph ph-check"></i><span>{activeTab === 'Synonyms' ? 'Apply' : 'Accept'}</span>
                  </button>
                  <div className="w-[1px] bg-toolbar-border"></div>
                  <button className="flex-1 py-2 text-xs font-medium text-red-500 hover:bg-red-500/10 transition-colors flex items-center justify-center space-x-1">
                    <i className="ph ph-x"></i><span>{activeTab === 'Synonyms' ? 'Ignore' : 'Reject'}</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Bottom Stats for Dialect */}
            {showStats && (
              <div className="mt-8 pt-4 border-t border-toolbar-border space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Accuracy</span>
                  <span className="text-accent-primary font-bold text-lg">82%</span>
                </div>
                <div className="w-full bg-toolbar-bg rounded-full h-2 overflow-hidden border border-toolbar-border">
                  <div className="bg-accent-primary h-2 rounded-full w-[82%]"></div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Coverage</span>
                  <span className="text-accent-secondary font-bold text-lg">70%</span>
                </div>
                <div className="w-full bg-toolbar-bg rounded-full h-2 overflow-hidden border border-toolbar-border">
                  <div className="bg-accent-secondary h-2 rounded-full w-[70%]"></div>
                </div>
              </div>
            )}

          </div>
        </>
      )}

      {/* Collapse Toggle */}
      <button 
        onClick={toggleCollapse}
        className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-toolbar-border rounded-l-md flex items-center justify-center hover:bg-accent-primary hover:text-white text-text-muted transition-colors shadow-sm z-10"
      >
        <i className={`ph ${isCollapsed ? 'ph-caret-left' : 'ph-caret-right'}`}></i>
      </button>
    </div>
  );
};

export default RightPanel;
