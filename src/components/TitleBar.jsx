import React from 'react';

const TitleBar = () => {
  return (
    <div className="h-[40px] bg-toolbar-bg flex items-center justify-between px-4 border-b border-toolbar-border shrink-0 select-none">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-accent-primary flex items-center justify-center text-[#1C1C1C] font-bold text-sm">
          ශ
        </div>
        <span className="font-semibold text-text-dark text-sm tracking-wide">ලේඛා</span>
      </div>

      {/* Title */}
      <div className="flex-1 flex justify-center">
        <input 
          type="text" 
          defaultValue="Untitled Document.si" 
          className="bg-transparent text-center text-text-dark text-sm hover:bg-toolbar-hover px-2 py-1 rounded outline-none focus:ring-1 focus:ring-accent-primary w-48 transition-colors"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3">
        <button className="text-text-muted hover:text-text-dark transition-colors flex items-center space-x-1 px-2 py-1 rounded hover:bg-toolbar-hover">
          <i className="ph ph-floppy-disk text-lg"></i>
          <span className="text-xs">Save</span>
        </button>
        <button className="bg-accent-primary/10 text-accent-primary hover:bg-accent-primary hover:text-[#1C1C1C] transition-colors flex items-center space-x-1 px-3 py-1 rounded-full border border-accent-primary/20">
          <i className="ph ph-share-network text-lg"></i>
          <span className="text-xs font-medium">Share</span>
        </button>
        <div className="w-6 h-6 rounded-full bg-accent-secondary flex items-center justify-center text-white text-xs font-bold shadow-sm cursor-pointer border border-accent-secondary/50">
          Y
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
