import React from 'react';
import { SpellCheck, Languages, PanelRightOpen, CheckCircle2 } from 'lucide-react';
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

const GrammarTab: React.FC = () => {
  const { sidePanel, setSidePanel } = useAppStore();

  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Proofing">
        <IconButton icon={CheckCircle2} label="Check Grammar" />
        <IconButton icon={SpellCheck} label="Punctuation" />
        <IconButton 
          icon={PanelRightOpen} 
          label="Grammar Panel" 
          onClick={() => setSidePanel(sidePanel === 'grammar' ? null : 'grammar')}
          active={sidePanel === 'grammar'}
        />
      </RibbonGroup>

      <div className="flex flex-col justify-center px-4">
        <div className="bg-green-100 text-[#1A7A6E] px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
          <Languages size={10} />
          <span>GRAMMAR ASSISTANT ON</span>
        </div>
      </div>
    </div>
  );
};

export default GrammarTab;
