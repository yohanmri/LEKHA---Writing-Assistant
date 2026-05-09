import React from 'react';
import { 
  SpellCheck, 
  Type, 
  Volume2, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  X, 
  History, 
  FileSearch 
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

const ReviewTab: React.FC = () => {
  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Proofing">
        <IconButton icon={SpellCheck} label="Spelling" large />
        <IconButton icon={Type} label="Word Count" />
        <IconButton icon={Volume2} label="Read Aloud" />
      </RibbonGroup>

      <RibbonGroup label="Comments">
        <IconButton icon={MessageSquare} label="New Comment" large />
        <div className="flex flex-col">
          <IconButton icon={ChevronLeft} label="Previous" />
          <IconButton icon={ChevronRight} label="Next" />
        </div>
        <IconButton icon={X} label="Delete" />
      </RibbonGroup>

      <RibbonGroup label="Tracking">
        <IconButton icon={History} label="Track Changes" large />
        <div className="flex flex-col">
          <IconButton icon={Check} label="Accept" />
          <IconButton icon={X} label="Reject" />
        </div>
      </RibbonGroup>

      <RibbonGroup label="Compare">
        <IconButton icon={FileSearch} label="Compare" large />
      </RibbonGroup>
    </div>
  );
};

export default ReviewTab;
