import React, { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import TabBar from './components/TabBar';
import RibbonToolbar from './components/RibbonToolbar';
import LeftPanel from './components/LeftPanel';
import DocumentArea from './components/DocumentArea';
import RightPanel from './components/RightPanel';
import VirtualKeyboard from './components/VirtualKeyboard';
import StatusBar from './components/StatusBar';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  // Apply theme to body
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Right panel is now toggled manually via Ribbon buttons

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background-app text-text-dark font-sans">
      <TitleBar />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <RibbonToolbar 
        activeTab={activeTab} 
        isKeyboardOpen={isKeyboardOpen} 
        toggleKeyboard={() => setIsKeyboardOpen(!isKeyboardOpen)} 
        theme={theme}
        setTheme={setTheme}
        isRightPanelOpen={!rightPanelCollapsed}
        toggleRightPanel={() => setRightPanelCollapsed(!rightPanelCollapsed)}
      />
      
      <div className="flex-1 flex overflow-hidden relative">
        <LeftPanel 
          isCollapsed={leftPanelCollapsed} 
          toggleCollapse={() => setLeftPanelCollapsed(!leftPanelCollapsed)} 
        />
        
        <DocumentArea onDocumentClick={() => setRightPanelCollapsed(true)} />
        
        {['Dialect', 'Synonyms', 'Grammar'].includes(activeTab) && (
          <RightPanel 
            isCollapsed={rightPanelCollapsed} 
            toggleCollapse={() => setRightPanelCollapsed(!rightPanelCollapsed)} 
            activeTab={activeTab}
          />
        )}
        
        {isKeyboardOpen && (
          <VirtualKeyboard onClose={() => setIsKeyboardOpen(false)} />
        )}
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
