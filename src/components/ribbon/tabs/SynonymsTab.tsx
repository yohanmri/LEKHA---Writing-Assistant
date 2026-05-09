import React from 'react';
import { Search, Book, PanelRightOpen, ListChecks } from 'lucide-react';
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

const IconButton: React.FC<{ icon: React.ElementType; label?: string; onClick?: () => void; active?: boolean }> = ({ icon: Icon, label, onClick, active }) => (
  <button 
    onClick={onClick}
    className={`
      flex flex-col items-center justify-center rounded px-2 py-1 transition-colors min-w-[56px] h-full
      ${active ? 'bg-green-50 text-[#1A7A6E]' : 'hover:bg-gray-100 text-gray-700'}
    `}
  >
    <Icon size={24} strokeWidth={1.5} />
    {label && <span className="text-[10px] mt-0.5 whitespace-nowrap">{label}</span>}
  </button>
);

const SynonymsTab: React.FC = () => {
  const { sidePanel, setSidePanel } = useAppStore();

  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Vocabulary">
        <IconButton icon={Search} label="Find Synonyms" />
        <IconButton 
          icon={PanelRightOpen} 
          label="Thesaurus Panel" 
          onClick={() => setSidePanel(sidePanel === 'synonyms' ? null : 'synonyms')}
          active={sidePanel === 'synonyms'}
        />
        <IconButton icon={ListChecks} label="Synonyms List" />
      </RibbonGroup>

      <div className="flex flex-col justify-center px-4">
        <div className="bg-green-100 text-[#1A7A6E] px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
          <Book size={10} />
          <span>SINHALA INTELLIGENCE ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default SynonymsTab;
