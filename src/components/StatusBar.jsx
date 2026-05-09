import React from 'react';

const StatusBar = () => {
  return (
    <div className="h-[28px] bg-background-app flex items-center justify-between px-4 border-t border-toolbar-border shrink-0 select-none text-[11px] text-text-muted">
      {/* Left */}
      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-1 cursor-pointer hover:text-text-dark">
          <i className="ph ph-file-text"></i>
          <span>Page 1 of 1</span>
        </span>
        <span className="flex items-center space-x-1 cursor-pointer hover:text-text-dark">
          <i className="ph ph-calculator"></i>
          <span>Words: 19</span>
        </span>
        <span className="flex items-center space-x-1 cursor-pointer hover:text-text-dark">
          <i className="ph ph-text-aa"></i>
          <span>Characters: 124</span>
        </span>
      </div>

      {/* Center */}
      <div className="flex items-center space-x-2">
        <button className="hover:bg-toolbar-hover px-2 py-0.5 rounded text-accent-primary font-medium">සිං Sinhala</button>
        <span>|</span>
        <button className="hover:bg-toolbar-hover px-2 py-0.5 rounded">EN English</button>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-1 text-accent-primary font-medium cursor-pointer">
          <span>🟡 3 found</span>
        </span>
        
        {/* Zoom */}
        <div className="flex items-center space-x-2 bg-toolbar-bg rounded px-2 py-0.5">
          <button className="hover:text-text-dark"><i className="ph ph-magnifying-glass-minus"></i></button>
          <span>100%</span>
          <button className="hover:text-text-dark"><i className="ph ph-magnifying-glass-plus"></i></button>
        </div>

        {/* View Toggles */}
        <div className="flex items-center space-x-1">
          <button className="p-1 hover:bg-toolbar-hover rounded text-text-dark bg-toolbar-hover" title="Print Layout">
            <i className="ph ph-file"></i>
          </button>
          <button className="p-1 hover:bg-toolbar-hover rounded" title="Web Layout">
            <i className="ph ph-globe"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
