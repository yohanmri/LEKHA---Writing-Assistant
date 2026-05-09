import React from 'react';
import {
  SpellCheck, CheckCircle2, AlertCircle, PanelRightOpen,
  SkipForward, SkipBack, X, Settings,
  Languages, ToggleLeft, RefreshCw, Lightbulb,
  SlidersHorizontal, BookOpen
} from 'lucide-react';
import { RibbonGroup, SinhalaBtn, SplitLargeBtn, LargeBtn, DropBtn } from '../RibbonComponents';
import { useAppStore } from '../../../store/useAppStore';

const GrammarTab: React.FC = () => {
  const { sidePanel, setSidePanel } = useAppStore();

  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* STATUS BADGE */}
      <div className="flex flex-col justify-center px-3 h-full border-r border-gray-200">
        <div className="bg-green-50 border border-green-200 text-[#1A7A6E] px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1.5">
          <Languages size={12} />
          <span>SINHALA GRAMMAR ENGINE ON</span>
        </div>
      </div>

      {/* PROOFING */}
      <RibbonGroup label="Grammar Check">
        <SplitLargeBtn icon={CheckCircle2} label="Check Grammar" items={[
          { label: 'Check Full Document' },
          { label: 'Check Selection Only' },
          { label: 'Check & Fix Automatically' },
          { divider: true },
          { label: 'Check Punctuation' },
          { label: 'Check Sentence Structure' },
          { label: 'Check Word Agreement' },
        ]} color="#1A7A6E" />
        <SinhalaBtn
          icon={PanelRightOpen}
          label="Grammar Panel"
          onClick={() => setSidePanel(sidePanel === 'grammar' ? null : 'grammar')}
          active={sidePanel === 'grammar'}
        />
        <div className="flex flex-col h-full justify-center">
          <SinhalaBtn icon={SkipBack} label="Prev Error" />
          <SinhalaBtn icon={SkipForward} label="Next Error" />
        </div>
        <SinhalaBtn icon={X} label="Ignore Error" />
        <SinhalaBtn icon={CheckCircle2} label="Accept Fix" />
      </RibbonGroup>

      {/* PUNCTUATION */}
      <RibbonGroup label="Punctuation">
        <SplitLargeBtn icon={SpellCheck} label="Punctuation" items={[
          { label: 'Check All Punctuation' },
          { label: 'Check Commas (,)' },
          { label: 'Check Periods (.)' },
          { label: 'Check Question Marks (?)' },
          { label: 'Check Exclamation Marks (!)' },
          { divider: true },
          { label: 'Sinhala Punctuation Rules' },
          { label: 'Punctuation Settings...' },
        ]} color="#1A7A6E" />
        <SinhalaBtn icon={AlertCircle} label="Show Errors" />
        <SinhalaBtn icon={RefreshCw} label="Auto-Correct" />
      </RibbonGroup>

      {/* RULES */}
      <RibbonGroup label="Grammar Rules">
        <div className="flex flex-col gap-1 px-1 justify-center h-full">
          <DropBtn label="Sensitivity: Medium" items={[
            { label: 'Low (Basic errors only)' },
            { label: 'Medium (Standard)' },
            { label: 'High (Strict)' },
            { label: 'Custom...' },
          ]} />
          <DropBtn label="Style: Formal" items={[
            { label: 'Formal (ලිඛිත)' },
            { label: 'Informal (කතා)' },
            { label: 'Academic (අධ්‍යාපනික)' },
            { label: 'News (පුවත්)' },
            { label: 'Literary (සාහිත්‍ය)' },
          ]} />
          <div className="flex items-center gap-1 mt-1">
            <input type="checkbox" id="autoGram" defaultChecked className="w-3 h-3 accent-[#1A7A6E]" />
            <label htmlFor="autoGram" className="text-[10px] text-gray-500">Underline grammar errors</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" id="autoFix" className="w-3 h-3 accent-[#1A7A6E]" />
            <label htmlFor="autoFix" className="text-[10px] text-gray-500">Auto-fix minor errors</label>
          </div>
        </div>
      </RibbonGroup>

      {/* AI */}
      <RibbonGroup label="AI Assistant">
        <SinhalaBtn icon={Lightbulb} label="Smart Rewrite" />
        <SinhalaBtn icon={BookOpen} label="Grammar Guide" />
        <SinhalaBtn icon={SlidersHorizontal} label="Settings" />
      </RibbonGroup>

    </div>
  );
};

export default GrammarTab;
