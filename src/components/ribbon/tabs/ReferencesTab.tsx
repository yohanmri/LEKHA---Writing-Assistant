import React from 'react';
import { 
  FileText, 
  PlusSquare, 
  RefreshCw, 
  Quote, 
  Library, 
  Hash,
  BookOpen
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

const ReferencesTab: React.FC = () => {
  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Table of Contents">
        <IconButton icon={FileText} label="Contents" large />
        <IconButton icon={PlusSquare} label="Add Text" />
        <IconButton icon={RefreshCw} label="Update" />
      </RibbonGroup>

      <RibbonGroup label="Footnotes">
        <IconButton icon={PlusSquare} label="Insert Footnote" large />
        <IconButton icon={PlusSquare} label="Insert Endnote" />
      </RibbonGroup>

      <RibbonGroup label="Citations">
        <IconButton icon={Quote} label="Insert Citation" large />
        <IconButton icon={Library} label="Manage Sources" />
      </RibbonGroup>

      <RibbonGroup label="Index">
        <IconButton icon={Hash} label="Mark Entry" />
        <IconButton icon={BookOpen} label="Insert Index" />
      </RibbonGroup>
    </div>
  );
};

export default ReferencesTab;
