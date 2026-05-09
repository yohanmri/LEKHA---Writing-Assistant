import React from 'react';
import { 
  FileText, 
  Globe, 
  BookOpen, 
  Zap, 
  Maximize, 
  Grid, 
  PanelLeft, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  Copy, 
  Layout 
} from 'lucide-react';

const RibbonGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex flex-col h-full border-r border-gray-200 px-2 py-1 flex-shrink-0">
    <div className="flex-1 flex items-center gap-0.5">
      {children}
    </div>
    <div className="text-[9px] text-gray-400 text-center mt-1 uppercase tracking-tighter select-none">
      {label}
    </div>
  </div>
);

const IconButton: React.FC<{ icon: React.ElementType; label?: string; large?: boolean }> = ({ icon: Icon, label, large }) => (
  <button className={`flex flex-col items-center justify-center hover:bg-gray-100 rounded px-1.5 transition-colors ${large ? 'h-full min-w-[48px]' : 'h-8'}`}>
    <Icon size={large ? 24 : 18} strokeWidth={large ? 1.5 : 2} className="text-gray-700" />
    {label && <span className="text-[10px] mt-0.5 text-gray-600">{label}</span>}
  </button>
);

const ViewTab: React.FC = () => {
  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Views">
        <IconButton icon={FileText} label="Print Layout" large />
        <IconButton icon={Globe} label="Web Layout" large />
        <IconButton icon={BookOpen} label="Reading Mode" large />
        <IconButton icon={Zap} label="Focus Mode" large />
      </RibbonGroup>

      <RibbonGroup label="Show">
        <IconButton icon={Maximize} label="Ruler" />
        <IconButton icon={Grid} label="Gridlines" />
        <IconButton icon={PanelLeft} label="Nav Pane" />
      </RibbonGroup>

      <RibbonGroup label="Zoom">
        <IconButton icon={Search} label="Zoom" large />
        <IconButton icon={ZoomIn} label="100%" />
        <div className="flex flex-col h-full justify-center">
          <IconButton icon={Layout} label="One Page" />
          <IconButton icon={Copy} label="Two Pages" />
        </div>
      </RibbonGroup>
    </div>
  );
};

export default ViewTab;
