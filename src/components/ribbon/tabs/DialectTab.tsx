import React from 'react';
import { RefreshCw, MapPin, PanelRightOpen, BookMarked, Settings } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

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

const IconButton: React.FC<{ icon: React.ElementType; label?: string; onClick?: () => void; active?: boolean; large?: boolean }> = ({ icon: Icon, label, onClick, active, large }) => (
  <button 
    onClick={onClick}
    className={`
      flex flex-col items-center justify-center rounded px-2 py-1 transition-colors min-w-[64px] h-full
      ${active ? 'bg-green-50 text-[#1A7A6E]' : 'hover:bg-gray-100 text-gray-700'}
    `}
  >
    <Icon size={large ? 28 : 24} strokeWidth={1.5} className={large ? 'text-[#1A7A6E]' : ''} />
    {label && <span className="text-[10px] mt-0.5 whitespace-nowrap">{label}</span>}
  </button>
);

const DialectTab: React.FC = () => {
  const { sidePanel, setSidePanel } = useAppStore();

  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Conversion">
        <IconButton icon={RefreshCw} label="Convert All" large />
        <div className="flex flex-col gap-1 mx-2">
          <select className="text-[10px] border border-gray-200 rounded px-1 py-0.5 outline-none w-24">
            <option>Colombo</option>
            <option>Galle</option>
            <option>Kandy</option>
            <option>Matara</option>
          </select>
          <div className="flex items-center gap-1">
            <input type="checkbox" id="auto" className="w-3 h-3" />
            <label htmlFor="auto" className="text-[9px] text-gray-500">Auto Convert</label>
          </div>
        </div>
        <IconButton 
          icon={PanelRightOpen} 
          label="Dialect Panel" 
          onClick={() => setSidePanel(sidePanel === 'dialect' ? null : 'dialect')}
          active={sidePanel === 'dialect'}
        />
      </RibbonGroup>

      <RibbonGroup label="Dictionary">
        <IconButton icon={BookMarked} label="Add to Dict" />
        <IconButton icon={Settings} label="Manage" />
      </RibbonGroup>
    </div>
  );
};

export default DialectTab;
