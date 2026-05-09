import React from 'react';

const LeftPanel = ({ isCollapsed, toggleCollapse }) => {
  return (
    <div className={`
      bg-toolbar-bg border-r border-toolbar-border transition-all duration-300 flex flex-col relative
      ${isCollapsed ? 'w-0 overflow-hidden border-none' : 'w-[220px]'}
    `}>
      {!isCollapsed && (
        <>
          <div className="p-3 border-b border-toolbar-border flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Navigator</span>
            <div className="flex space-x-1">
              <button className="p-1 hover:bg-toolbar-hover rounded text-accent-primary"><i className="ph ph-list-dashes"></i></button>
              <button className="p-1 hover:bg-toolbar-hover rounded text-text-muted"><i className="ph ph-squares-four"></i></button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 text-sm">
            <div className="text-text-dark cursor-pointer py-1 px-2 hover:bg-toolbar-hover rounded transition-colors truncate">
              ගුණපාල සහ වී ඇට
            </div>
            <div className="text-text-muted cursor-pointer py-1 px-2 pl-6 hover:bg-toolbar-hover rounded transition-colors text-xs truncate">
              දකුණු සිරිලක
            </div>
          </div>
        </>
      )}
      
      {/* Collapse Toggle */}
      <button 
        onClick={toggleCollapse}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-toolbar-border rounded-r-md flex items-center justify-center hover:bg-accent-primary hover:text-[#1C1C1C] text-text-muted transition-colors shadow-sm z-10"
      >
        <i className={`ph ${isCollapsed ? 'ph-caret-right' : 'ph-caret-left'}`}></i>
      </button>
    </div>
  );
};

export default LeftPanel;
