import React from 'react';
import {
  RefreshCw, MapPin, PanelRightOpen, BookMarked, Settings,
  Languages, ArrowLeftRight, ToggleLeft, Check, X,
  SlidersHorizontal, Lightbulb, Globe2, BookOpen
} from 'lucide-react';
import { RibbonGroup, SinhalaBtn, SplitLargeBtn, LargeBtn, DropBtn } from '../RibbonComponents';
import { useAppStore } from '../../../store/useAppStore';

const DialectTab: React.FC = () => {
  const { sidePanel, setSidePanel } = useAppStore();

  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* STATUS BADGE */}
      <div className="flex flex-col justify-center px-3 h-full border-r border-gray-200">
        <div className="bg-green-50 border border-green-200 text-[#1A7A6E] px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1.5">
          <Globe2 size={12} />
          <span>DIALECT CONVERTER ACTIVE</span>
        </div>
      </div>

      {/* CONVERSION */}
      <RibbonGroup label="Conversion">
        <SplitLargeBtn icon={RefreshCw} label="Convert All" items={[
          { label: 'Convert Full Document' },
          { label: 'Convert Selection Only' },
          { label: 'Convert Paragraph' },
          { divider: true },
          { label: 'Preview Conversion...' },
          { label: 'Undo Last Conversion' },
        ]} color="#1A7A6E" />
        <SinhalaBtn
          icon={PanelRightOpen}
          label="Dialect Panel"
          onClick={() => setSidePanel(sidePanel === 'dialect' ? null : 'dialect')}
          active={sidePanel === 'dialect'}
        />
        <div className="flex flex-col gap-1 px-1 justify-center h-full">
          <div className="text-[10px] text-gray-500">Source Dialect:</div>
          <DropBtn label="Auto-detect" items={[
            { label: 'Auto-detect' },
            { label: 'Standard (Colombo)' },
            { label: 'Southern (Galle/Matara)' },
            { label: 'Kandyan (Kandy)' },
            { label: 'Northern (Jaffna)' },
            { label: 'Low-country' },
          ]} />
          <div className="text-[10px] text-gray-500 mt-0.5">Target Dialect:</div>
          <DropBtn label="Standard Sinhala" items={[
            { label: 'Standard (ප්‍රමිත)' },
            { label: 'Colombo (කොළඹ)' },
            { label: 'Galle (ගාල්ල)' },
            { label: 'Kandy (කන්ඩේ)' },
            { label: 'Matara (මාතර)' },
            { label: 'Jaffna (යාපනය)' },
          ]} />
        </div>
      </RibbonGroup>

      {/* REGISTER */}
      <RibbonGroup label="Register">
        <div className="flex flex-col gap-1 px-1 justify-center h-full">
          <DropBtn label="Formal ↔ Informal" items={[
            { label: 'Keep Original' },
            { label: 'Formal (ලිඛිත)' },
            { label: 'Informal (කතා)' },
            { label: 'Literary (සාහිත්‍ය)' },
            { label: 'Religious (ආගමික)' },
            { label: 'News (පුවත්)' },
          ]} />
          <DropBtn label="Script: Standard" items={[
            { label: 'Standard Sinhala Script' },
            { label: 'Colloquial Script' },
            { label: 'Archaic Script' },
          ]} />
          <div className="flex items-center gap-1 mt-1">
            <input type="checkbox" id="autoConv" className="w-3 h-3 accent-[#1A7A6E]" />
            <label htmlFor="autoConv" className="text-[10px] text-gray-500">Auto-convert as you type</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" id="showDiff" defaultChecked className="w-3 h-3 accent-[#1A7A6E]" />
            <label htmlFor="showDiff" className="text-[10px] text-gray-500">Highlight changes</label>
          </div>
        </div>
      </RibbonGroup>

      {/* DICTIONARY */}
      <RibbonGroup label="Dictionary">
        <SinhalaBtn icon={BookMarked} label="Add to Dictionary" />
        <SplitLargeBtn icon={BookOpen} label="Manage Dict" items={[
          { label: 'View Custom Dictionary' },
          { label: 'Add Word...' },
          { label: 'Remove Word...' },
          { divider: true },
          { label: 'Import Dictionary...' },
          { label: 'Export Dictionary...' },
          { label: 'Reset to Default' },
        ]} color="#1A7A6E" />
        <SinhalaBtn icon={MapPin} label="Regional Words" />
      </RibbonGroup>

      {/* AI */}
      <RibbonGroup label="AI Tools">
        <SinhalaBtn icon={Lightbulb} label="Smart Convert" />
        <SinhalaBtn icon={Languages} label="Transliterate" />
        <SinhalaBtn icon={SlidersHorizontal} label="Settings" />
      </RibbonGroup>

    </div>
  );
};

export default DialectTab;
