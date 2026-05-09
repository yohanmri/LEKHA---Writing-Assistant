import React from 'react';
import { 
  File, 
  Table, 
  Image, 
  Square, 
  Type, 
  Link, 
  Bookmark, 
  Navigation,
  Columns,
  Hash,
  Shapes,
  Sigma,
  AtSign
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

const InsertTab: React.FC = () => {
  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Pages">
        <IconButton icon={File} label="Cover Page" large />
        <IconButton icon={File} label="Blank Page" large />
        <IconButton icon={File} label="Page Break" large />
      </RibbonGroup>

      <RibbonGroup label="Tables">
        <IconButton icon={Table} label="Table" large />
      </RibbonGroup>

      <RibbonGroup label="Media">
        <IconButton icon={Image} label="Picture" large />
        <IconButton icon={Shapes} label="Shapes" large />
        <IconButton icon={Square} label="Icons" large />
      </RibbonGroup>

      <RibbonGroup label="Links">
        <IconButton icon={Link} label="Link" />
        <IconButton icon={Bookmark} label="Bookmark" />
        <IconButton icon={Navigation} label="Cross-ref" />
      </RibbonGroup>

      <RibbonGroup label="Header & Footer">
        <IconButton icon={Columns} label="Header" />
        <IconButton icon={Columns} label="Footer" />
        <IconButton icon={Hash} label="Page #" />
      </RibbonGroup>

      <RibbonGroup label="Symbols">
        <IconButton icon={Sigma} label="Equation" />
        <IconButton icon={AtSign} label="Symbol" />
      </RibbonGroup>
    </div>
  );
};

export default InsertTab;
