import React from 'react';

const RibbonToolbar = ({ activeTab, isKeyboardOpen, toggleKeyboard, theme, setTheme, isRightPanelOpen, toggleRightPanel }) => {
  if (activeTab === 'Dialect') {
    return (
      <div className="h-[90px] bg-accent-dialectBg border-b border-accent-secondary/30 flex items-center px-4 space-x-6 shrink-0 transition-colors duration-150 overflow-x-auto">
        {/* Conversion Group */}
        <div className="flex flex-col space-y-2 h-full justify-center pr-6 border-r border-accent-secondary/20">
          <div className="text-[10px] text-accent-secondary uppercase font-semibold tracking-wider">Conversion</div>
          <div className="flex items-center space-x-3">
            <button className="bg-accent-primary text-[#1C1C1C] hover:bg-yellow-500 font-medium px-4 py-1.5 rounded flex items-center space-x-2 transition-colors shadow-sm">
              <i className="ph ph-arrows-left-right text-lg"></i>
              <span>Convert to Southern Dialect</span>
            </button>
            <div className="flex items-center space-x-2 bg-background-app/50 px-2 py-1 rounded border border-toolbar-border">
              <span className="text-xs">Auto Convert</span>
              <div className="w-8 h-4 bg-accent-secondary rounded-full flex items-center px-0.5 cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-full translate-x-4 transition-transform"></div>
              </div>
            </div>
            <select className="bg-background-app/50 border border-toolbar-border rounded text-xs px-2 py-1 outline-none text-text-dark appearance-none">
              <option>Galle</option>
              <option>Matara</option>
              <option>Hambantota</option>
              <option>All Southern</option>
            </select>
          </div>
        </div>

        {/* Suggestions Group */}
        <div className="flex flex-col space-y-2 h-full justify-center pr-6 border-r border-accent-secondary/20">
          <div className="text-[10px] text-accent-secondary uppercase font-semibold tracking-wider">Suggestions</div>
          <div className="flex items-center space-x-2">
            <button className="flex flex-col items-center justify-center w-12 h-12 rounded hover:bg-toolbar-hover text-green-500 transition-colors">
              <i className="ph ph-check-circle text-xl mb-1"></i>
              <span className="text-[9px]">Accept All</span>
            </button>
            <button className="flex flex-col items-center justify-center w-12 h-12 rounded hover:bg-toolbar-hover text-red-500 transition-colors">
              <i className="ph ph-x-circle text-xl mb-1"></i>
              <span className="text-[9px]">Reject All</span>
            </button>
            <button className="flex flex-col items-center justify-center w-14 h-12 rounded hover:bg-toolbar-hover text-accent-primary border border-accent-primary/50 transition-colors">
              <i className="ph ph-check-square-offset text-xl mb-1"></i>
              <span className="text-[9px]">Selected</span>
            </button>
            <div className="w-[1px] h-8 bg-toolbar-border mx-2"></div>
            <button 
              onClick={toggleRightPanel}
              className={`flex flex-col items-center justify-center w-16 h-12 rounded transition-colors ${isRightPanelOpen ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/50' : 'hover:bg-toolbar-hover text-text-muted hover:text-text-dark'}`}
            >
              <i className="ph ph-sidebar-simple text-xl mb-1"></i>
              <span className="text-[9px] text-center leading-tight">Dialect Panel</span>
            </button>
          </div>
        </div>

        {/* Dictionary Group */}
        <div className="flex flex-col space-y-2 h-full justify-center pr-6 border-r border-accent-secondary/20">
          <div className="text-[10px] text-accent-secondary uppercase font-semibold tracking-wider">Dictionary</div>
          <div className="flex items-center space-x-1">
            <button className="flex flex-col items-center justify-center w-14 h-12 rounded hover:bg-toolbar-hover transition-colors text-text-dark">
              <i className="ph ph-plus-circle text-xl mb-1 text-accent-primary"></i>
              <span className="text-[9px]">Add Word</span>
            </button>
            <button className="flex flex-col items-center justify-center w-14 h-12 rounded hover:bg-toolbar-hover transition-colors text-text-dark">
              <i className="ph ph-book-open text-xl mb-1"></i>
              <span className="text-[9px]">Dictionary</span>
            </button>
            <button className="flex flex-col items-center justify-center w-12 h-12 rounded hover:bg-toolbar-hover transition-colors text-text-dark">
              <i className="ph ph-export text-xl mb-1"></i>
              <span className="text-[9px]">Export</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'Synonyms') {
    return (
      <div className="h-[90px] bg-toolbar-bg border-b border-toolbar-border flex items-center px-4 space-x-6 shrink-0 transition-colors duration-150 overflow-x-auto">
        {/* Synonyms Tools */}
        <div className="flex flex-col space-y-2 h-full justify-center pr-6 border-r border-toolbar-border">
          <div className="text-[10px] text-accent-primary uppercase font-semibold tracking-wider">Vocabulary</div>
          <div className="flex items-center space-x-2">
            <button className="flex flex-col items-center justify-center w-14 h-12 rounded hover:bg-toolbar-hover text-text-muted hover:text-text-dark transition-colors">
              <i className="ph ph-text-aa text-xl mb-1 text-accent-primary"></i>
              <span className="text-[9px]">Find Synonyms</span>
            </button>
            <button className="flex flex-col items-center justify-center w-14 h-12 rounded hover:bg-toolbar-hover text-text-muted hover:text-text-dark transition-colors">
              <i className="ph ph-book-bookmark text-xl mb-1"></i>
              <span className="text-[9px]">Thesaurus</span>
            </button>
            <div className="w-[1px] h-8 bg-toolbar-border mx-2"></div>
            <button 
              onClick={toggleRightPanel}
              className={`flex flex-col items-center justify-center w-16 h-12 rounded transition-colors ${isRightPanelOpen ? 'bg-blue-500/20 text-blue-500 border border-blue-500/50' : 'hover:bg-toolbar-hover text-text-muted hover:text-text-dark'}`}
            >
              <i className="ph ph-sidebar-simple text-xl mb-1"></i>
              <span className="text-[9px] text-center leading-tight">Synonyms Panel</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'Grammar') {
    return (
      <div className="h-[90px] bg-toolbar-bg border-b border-toolbar-border flex items-center px-4 space-x-6 shrink-0 transition-colors duration-150 overflow-x-auto">
        {/* Grammar Tools */}
        <div className="flex flex-col space-y-2 h-full justify-center pr-6 border-r border-toolbar-border">
          <div className="text-[10px] text-accent-primary uppercase font-semibold tracking-wider">Proofing</div>
          <div className="flex items-center space-x-2">
            <button className="flex flex-col items-center justify-center w-16 h-12 rounded hover:bg-toolbar-hover text-text-muted hover:text-text-dark transition-colors">
              <i className="ph ph-spellcheck text-xl mb-1 text-green-500"></i>
              <span className="text-[9px]">Check Grammar</span>
            </button>
            <button className="flex flex-col items-center justify-center w-16 h-12 rounded hover:bg-toolbar-hover text-text-muted hover:text-text-dark transition-colors">
              <i className="ph ph-quotes text-xl mb-1"></i>
              <span className="text-[9px]">Punctuation</span>
            </button>
            <div className="w-[1px] h-8 bg-toolbar-border mx-2"></div>
            <button 
              onClick={toggleRightPanel}
              className={`flex flex-col items-center justify-center w-16 h-12 rounded transition-colors ${isRightPanelOpen ? 'bg-green-500/20 text-green-500 border border-green-500/50' : 'hover:bg-toolbar-hover text-text-muted hover:text-text-dark'}`}
            >
              <i className="ph ph-sidebar-simple text-xl mb-1"></i>
              <span className="text-[9px] text-center leading-tight">Grammar Panel</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'View') {
    return (
      <div className="h-[90px] bg-toolbar-bg border-b border-toolbar-border flex items-center px-4 space-x-6 shrink-0 transition-colors duration-150 overflow-x-auto">
        {/* Theme Group */}
        <div className="flex flex-col space-y-2 h-full justify-center pr-6 border-r border-toolbar-border">
          <div className="text-[10px] text-accent-primary uppercase font-semibold tracking-wider">Theme</div>
          <div className="flex items-center space-x-2 bg-background-app/50 p-1 rounded border border-toolbar-border">
            <button 
              onClick={() => setTheme('dark')}
              className={`px-3 py-1 rounded text-xs flex items-center space-x-1 transition-colors ${theme === 'dark' ? 'bg-toolbar-hover text-text-dark shadow-sm' : 'text-text-muted hover:text-text-dark'}`}
            >
              <i className="ph ph-moon"></i>
              <span>Dark Mode</span>
            </button>
            <button 
              onClick={() => setTheme('light')}
              className={`px-3 py-1 rounded text-xs flex items-center space-x-1 transition-colors ${theme === 'light' ? 'bg-toolbar-hover text-text-dark shadow-sm' : 'text-text-muted hover:text-text-dark'}`}
            >
              <i className="ph ph-sun"></i>
              <span>Light Mode</span>
            </button>
          </div>
        </div>

        {/* View Group */}
        <div className="flex flex-col space-y-2 h-full justify-center pr-6 border-r border-toolbar-border">
          <div className="text-[10px] text-accent-primary uppercase font-semibold tracking-wider">Views</div>
          <div className="flex items-center space-x-1">
            <button className="flex flex-col items-center justify-center w-14 h-12 rounded bg-toolbar-hover text-text-dark transition-colors">
              <i className="ph ph-file text-xl mb-1"></i>
              <span className="text-[9px]">Print Layout</span>
            </button>
            <button className="flex flex-col items-center justify-center w-14 h-12 rounded hover:bg-toolbar-hover text-text-muted hover:text-text-dark transition-colors">
              <i className="ph ph-globe text-xl mb-1"></i>
              <span className="text-[9px]">Web Layout</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default Home Tab
  return (
    <div className="h-[90px] bg-toolbar-bg border-b border-toolbar-border flex items-center px-4 space-x-6 shrink-0 transition-colors duration-150 overflow-x-auto">
      {/* Clipboard */}
      <div className="flex space-x-1 pr-6 border-r border-toolbar-border h-full items-center">
        <button className="flex flex-col items-center justify-center w-12 h-14 rounded hover:bg-toolbar-hover text-text-muted hover:text-text-dark">
          <i className="ph ph-clipboard text-2xl mb-1 text-accent-primary"></i>
          <span className="text-[10px]">Paste</span>
        </button>
        <div className="flex flex-col space-y-1">
          <button className="flex items-center space-x-1 hover:bg-toolbar-hover px-2 py-1 rounded text-xs text-text-muted hover:text-text-dark">
            <i className="ph ph-scissors"></i><span>Cut</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-toolbar-hover px-2 py-1 rounded text-xs text-text-muted hover:text-text-dark">
            <i className="ph ph-copy"></i><span>Copy</span>
          </button>
        </div>
      </div>

      {/* Font */}
      <div className="flex flex-col justify-center space-y-2 pr-6 border-r border-toolbar-border h-full">
        <div className="flex space-x-2">
          <select className="bg-background-app border border-toolbar-border rounded text-xs px-2 py-1 w-32 outline-none text-text-dark appearance-none font-document">
            <option>Noto Sans Sinhala</option>
            <option>Abhaya Libre</option>
            <option>Inter</option>
          </select>
          <select className="bg-background-app border border-toolbar-border rounded text-xs px-2 py-1 w-12 outline-none text-text-dark appearance-none">
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>
        </div>
        <div className="flex space-x-1 items-center">
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center font-bold text-sm font-document">ත්</button>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center italic text-sm font-document">ඉ</button>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center underline text-sm font-document">ු</button>
          <div className="w-[1px] h-4 bg-toolbar-border mx-1"></div>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-sm border-b-4 border-red-500">A</button>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-sm border-b-4 border-yellow-400 bg-toolbar-hover">
            <i className="ph ph-highlighter text-lg"></i>
          </button>
        </div>
      </div>

      {/* Paragraph */}
      <div className="flex flex-col justify-center space-y-2 pr-6 border-r border-toolbar-border h-full">
        <div className="flex space-x-1">
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-text-muted hover:text-text-dark"><i className="ph ph-text-align-left text-lg"></i></button>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-text-muted hover:text-text-dark"><i className="ph ph-text-align-center text-lg"></i></button>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-text-muted hover:text-text-dark"><i className="ph ph-text-align-right text-lg"></i></button>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-text-muted hover:text-text-dark"><i className="ph ph-text-align-justify text-lg"></i></button>
        </div>
        <div className="flex space-x-1">
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-text-muted hover:text-text-dark"><i className="ph ph-list-bullets text-lg"></i></button>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-text-muted hover:text-text-dark"><i className="ph ph-list-numbers text-lg"></i></button>
          <div className="w-[1px] h-4 bg-toolbar-border mx-1 my-auto"></div>
          <button className="w-7 h-7 rounded hover:bg-toolbar-hover flex items-center justify-center text-text-muted hover:text-text-dark"><i className="ph ph-line-height text-lg"></i></button>
        </div>
      </div>

      {/* Sinhala Keyboard */}
      <div className="flex items-center pl-2">
        <button 
          onClick={toggleKeyboard}
          className={`
            flex flex-col items-center justify-center w-16 h-16 rounded transition-all
            ${isKeyboardOpen ? 'bg-accent-secondary/20 text-accent-secondary shadow-[0_0_15px_rgba(26,122,110,0.3)] border border-accent-secondary/50' : 'hover:bg-toolbar-hover text-text-muted hover:text-text-dark'}
          `}
        >
          <div className="font-bold text-lg mb-0.5 font-document">සිං</div>
          <i className="ph ph-keyboard text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default RibbonToolbar;
