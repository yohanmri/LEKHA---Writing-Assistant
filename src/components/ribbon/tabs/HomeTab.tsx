import React from 'react';
import { 
  Clipboard, 
  Type, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Search,
  Replace,
  MousePointer2,
  ChevronDown,
  Highlighter,
  Baseline,
  Eraser,
  Indent,
  Outdent,
  ArrowDownWideNarrow,
  Pilcrow
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

const IconButton: React.FC<{ icon: React.ElementType; label?: string; subLabel?: string; large?: boolean }> = ({ icon: Icon, label, large }) => (
  <button className={`flex flex-col items-center justify-center hover:bg-gray-100 rounded px-1.5 transition-colors ${large ? 'h-full min-w-[48px]' : 'h-8'}`}>
    <Icon size={large ? 24 : 18} strokeWidth={large ? 1.5 : 2} className="text-gray-700" />
    {label && <span className="text-[10px] mt-0.5 text-gray-600">{label}</span>}
  </button>
);

const HomeTab: React.FC = () => {
  return (
    <div className="flex h-full items-center">
      <RibbonGroup label="Clipboard">
        <IconButton icon={Clipboard} label="Paste" large />
        <div className="flex flex-col">
          <IconButton icon={MousePointer2} label="Cut" />
          <IconButton icon={MousePointer2} label="Copy" />
        </div>
        <IconButton icon={Type} label="Format Painter" />
      </RibbonGroup>

      <RibbonGroup label="Font">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <select className="text-[11px] border border-gray-200 rounded px-1 h-6 w-32 outline-none">
              <option>Noto Sans Sinhala</option>
              <option>Abhaya Libre</option>
              <option>Yaldevi</option>
            </select>
            <select className="text-[11px] border border-gray-200 rounded px-1 h-6 w-12 outline-none">
              <option>11</option>
              <option>12</option>
              <option>14</option>
            </select>
            <div className="flex items-center border-l border-gray-200 ml-1 pl-1">
              <IconButton icon={Type} />
              <IconButton icon={Type} />
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <IconButton icon={Bold} />
            <IconButton icon={Italic} />
            <IconButton icon={Underline} />
            <IconButton icon={Strikethrough} />
            <IconButton icon={Type} />
            <div className="w-[1px] h-4 bg-gray-200 mx-1" />
            <IconButton icon={Highlighter} />
            <IconButton icon={Baseline} />
            <IconButton icon={Eraser} />
          </div>
        </div>
      </RibbonGroup>

      <RibbonGroup label="Paragraph">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-0.5">
            <IconButton icon={List} />
            <IconButton icon={ListOrdered} />
            <IconButton icon={List} />
            <div className="w-[1px] h-4 bg-gray-200 mx-1" />
            <IconButton icon={Outdent} />
            <IconButton icon={Indent} />
            <div className="w-[1px] h-4 bg-gray-200 mx-1" />
            <IconButton icon={ArrowDownWideNarrow} />
            <IconButton icon={Pilcrow} />
          </div>
          <div className="flex items-center gap-0.5">
            <IconButton icon={AlignLeft} />
            <IconButton icon={AlignCenter} />
            <IconButton icon={AlignRight} />
            <IconButton icon={AlignJustify} />
            <div className="w-[1px] h-4 bg-gray-200 mx-1" />
            <IconButton icon={Type} />
            <IconButton icon={Type} />
          </div>
        </div>
      </RibbonGroup>

      <RibbonGroup label="Styles">
        <div className="flex items-center gap-1">
          <div className="border border-gray-200 rounded p-1 h-12 w-16 flex flex-col justify-between hover:bg-gray-50 cursor-pointer">
            <span className="text-[10px] font-bold">AaBbCc</span>
            <span className="text-[8px] text-gray-500">Normal</span>
          </div>
          <div className="border border-gray-200 rounded p-1 h-12 w-16 flex flex-col justify-between hover:bg-gray-50 cursor-pointer">
            <span className="text-[10px] font-bold text-blue-600">AaBbCc</span>
            <span className="text-[8px] text-gray-500">Heading 1</span>
          </div>
          <button className="flex items-center justify-center hover:bg-gray-100 rounded px-1">
            <ChevronDown size={14} />
          </button>
        </div>
      </RibbonGroup>

      <RibbonGroup label="Editing">
        <div className="flex flex-col">
          <IconButton icon={Search} label="Find" />
          <IconButton icon={Replace} label="Replace" />
          <IconButton icon={MousePointer2} label="Select" />
        </div>
      </RibbonGroup>
    </div>
  );
};

export default HomeTab;
