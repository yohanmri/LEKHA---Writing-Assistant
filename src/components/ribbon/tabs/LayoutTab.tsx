import React from 'react';
import { 
  Columns, 
  Square, 
  Maximize, 
  Layout, 
  Move, 
  Layers, 
  AlignLeft, 
  RefreshCw 
} from 'lucide-react';

const RibbonGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex flex-col h-full border-r border-gray-200 px-2 py-1">
    <div className="flex-1 flex items-center gap-1">
      {children}
    </div>
    <div className="text-[9px] text-gray-400 text-center mt-auto uppercase tracking-tighter">
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

const LayoutTab: React.FC = () => {
  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Page Setup">
        <IconButton icon={Maximize} label="Margins" large />
        <IconButton icon={Layout} label="Orientation" large />
        <IconButton icon={Square} label="Size" large />
        <IconButton icon={Columns} label="Columns" large />
      </RibbonGroup>

      <RibbonGroup label="Paragraph">
        <div className="flex flex-col gap-1 p-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] w-12 text-gray-500">Indent:</span>
            <input type="number" defaultValue={0} className="w-12 text-[10px] border border-gray-200 rounded px-1" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] w-12 text-gray-500">Spacing:</span>
            <input type="number" defaultValue={0} className="w-12 text-[10px] border border-gray-200 rounded px-1" />
          </div>
        </div>
      </RibbonGroup>

      <RibbonGroup label="Arrange">
        <IconButton icon={Move} label="Position" />
        <IconButton icon={Layers} label="Wrap Text" />
        <IconButton icon={AlignLeft} label="Align" />
        <IconButton icon={RefreshCw} label="Rotate" />
      </RibbonGroup>
    </div>
  );
};

export default LayoutTab;
