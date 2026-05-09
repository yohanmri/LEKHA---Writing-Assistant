import React from 'react';
import {
  Search, BookOpen, PanelRightOpen, ListChecks,
  BookMarked, RefreshCw, ArrowLeftRight, Settings,
  Languages, ToggleLeft, Lightbulb
} from 'lucide-react';
import { RibbonGroup, SinhalaBtn, SplitLargeBtn, LargeBtn, DropBtn } from '../RibbonComponents';
import { useAppStore } from '../../../store/useAppStore';

const SynonymsTab: React.FC = () => {
  const { sidePanel, setSidePanel } = useAppStore();

  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* STATUS BADGE */}
      <div className="flex flex-col justify-center px-3 h-full border-r border-gray-200">
        <div className="bg-green-50 border border-green-200 text-[#1A7A6E] px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1.5">
          <Languages size={12} />
          <span>SINHALA THESAURUS ACTIVE</span>
        </div>
      </div>

      {/* VOCABULARY */}
      <RibbonGroup label="Vocabulary">
        <SplitLargeBtn icon={Search} label="Find Synonyms" items={[
          { label: 'Search Selected Word' },
          { label: 'Search Typed Word...' },
          { label: 'Search in Dictionary...' },
        ]} color="#1A7A6E" />
        <SinhalaBtn
          icon={PanelRightOpen}
          label="Thesaurus Panel"
          onClick={() => setSidePanel(sidePanel === 'synonyms' ? null : 'synonyms')}
          active={sidePanel === 'synonyms'}
        />
        <SplitLargeBtn icon={ListChecks} label="Synonym List" items={[
          { label: 'Show as Flyout' },
          { label: 'Show in Panel' },
          { label: 'Replace Word' },
          { divider: true },
          { label: 'Copy to Clipboard' },
        ]} color="#1A7A6E" />
        <SinhalaBtn icon={BookMarked} label="Add to Custom Dict" />
      </RibbonGroup>

      {/* WORD FORMS */}
      <RibbonGroup label="Word Forms">
        <div className="flex flex-col gap-1 px-1 justify-center h-full">
          <div className="text-[10px] text-gray-500">Selected word:</div>
          <input
            type="text"
            placeholder="Type or select word..."
            className="border border-gray-200 rounded px-2 h-6 text-[11px] outline-none w-40 focus:border-[#1A7A6E]"
          />
          <div className="flex gap-1">
            <SplitLargeBtn icon={ArrowLeftRight} label="Forms" items={[
              { label: 'Base Form' },
              { label: 'Past Tense' },
              { label: 'Present Tense' },
              { label: 'Future Tense' },
              { label: 'Plural' },
              { label: 'Singular' },
            ]} color="#1A7A6E" />
          </div>
        </div>
      </RibbonGroup>

      {/* SETTINGS */}
      <RibbonGroup label="Settings">
        <div className="flex flex-col gap-1 px-1 justify-center h-full">
          <DropBtn label="Formal Register" items={[
            { label: 'Formal (ලිඛිත)' },
            { label: 'Informal (කතා)' },
            { label: 'Literary (සාහිත්‍ය)' },
            { label: 'Religious (ආගමික)' },
          ]} />
          <DropBtn label="Show: All Synonyms" items={[
            { label: 'All Synonyms' },
            { label: 'Common Only' },
            { label: 'Rare / Literary' },
          ]} />
          <div className="flex items-center gap-1 mt-1">
            <input type="checkbox" id="autoSyn" className="w-3 h-3 accent-[#1A7A6E]" />
            <label htmlFor="autoSyn" className="text-[10px] text-gray-500">Auto-suggest synonyms</label>
          </div>
        </div>
      </RibbonGroup>

      {/* INTELLIGENCE */}
      <RibbonGroup label="AI Intelligence">
        <SinhalaBtn icon={Lightbulb} label="Smart Suggest" />
        <SinhalaBtn icon={RefreshCw} label="Refresh Cache" />
        <SinhalaBtn icon={Settings} label="AI Settings" />
      </RibbonGroup>

    </div>
  );
};

export default SynonymsTab;
