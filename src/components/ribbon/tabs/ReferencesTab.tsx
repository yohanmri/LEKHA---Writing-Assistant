import React from 'react';
import {
  FileText, PlusCircle, RefreshCw, ChevronDown,
  MessageSquarePlus, ArrowDownToLine, Navigation,
  Quote, Library, BookOpen, Globe2,
  Hash, BookMarked, List,
  Footprints, Superscript,
} from 'lucide-react';
import { RibbonGroup, LargeBtn, SmallBtn, SplitLargeBtn, DropBtn } from '../RibbonComponents';

const ReferencesTab: React.FC = () => {
  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* TABLE OF CONTENTS */}
      <RibbonGroup label="Table of Contents">
        <SplitLargeBtn icon={FileText} label="Table of Contents" items={[
          { label: 'Automatic Table 1' },
          { label: 'Automatic Table 2' },
          { label: 'Manual Table' },
          { divider: true },
          { label: 'Custom Table of Contents...' },
          { label: 'Remove Table of Contents' },
          { label: 'Save Selection to Gallery...' },
        ]} />
        <div className="flex flex-col h-full justify-center">
          <SplitLargeBtn icon={PlusCircle} label="Add Text" items={[
            { label: 'Do Not Show in Table' },
            { label: 'Level 1' },
            { label: 'Level 2' },
            { label: 'Level 3' },
          ]} />
          <LargeBtn icon={RefreshCw} label="Update Table" />
        </div>
      </RibbonGroup>

      {/* FOOTNOTES */}
      <RibbonGroup label="Footnotes">
        <LargeBtn icon={MessageSquarePlus} label="Insert Footnote" />
        <LargeBtn icon={ArrowDownToLine} label="Insert Endnote" />
        <div className="flex flex-col h-full justify-center">
          <SplitLargeBtn icon={Navigation} label="Next Footnote" items={[
            { label: 'Next Footnote' },
            { label: 'Previous Footnote' },
            { label: 'Next Endnote' },
            { label: 'Previous Endnote' },
          ]} />
          <LargeBtn icon={Footprints} label="Show Notes" />
        </div>
      </RibbonGroup>

      {/* CITATIONS & BIBLIOGRAPHY */}
      <RibbonGroup label="Citations & Bibliography">
        <SplitLargeBtn icon={Quote} label="Insert Citation" items={[
          { label: 'Add New Source...' },
          { label: 'Add New Placeholder...' },
          { label: 'Search Libraries...' },
        ]} />
        <LargeBtn icon={Library} label="Manage Sources" />
        <div className="flex flex-col gap-1 px-1">
          <DropBtn label="APA" className="" items={[
            { label: 'APA' },
            { label: 'MLA' },
            { label: 'Chicago' },
            { label: 'ISO 690' },
            { label: 'GOST' },
            { label: 'Turabian' },
            { label: 'Vancouver' },
          ]} />
          <SplitLargeBtn icon={BookOpen} label="Bibliography" items={[
            { label: 'Bibliography' },
            { label: 'References' },
            { label: 'Works Cited' },
            { divider: true },
            { label: 'Insert Bibliography' },
          ]} />
        </div>
      </RibbonGroup>

      {/* CAPTIONS */}
      <RibbonGroup label="Captions">
        <LargeBtn icon={Hash} label="Insert Caption" />
        <div className="flex flex-col h-full justify-center">
          <LargeBtn icon={List} label="Table of Figures" />
          <LargeBtn icon={RefreshCw} label="Update Table" />
          <LargeBtn icon={Navigation} label="Cross-reference" />
        </div>
      </RibbonGroup>

      {/* INDEX */}
      <RibbonGroup label="Index">
        <LargeBtn icon={BookMarked} label="Mark Entry" />
        <div className="flex flex-col h-full justify-center">
          <LargeBtn icon={List} label="Insert Index" />
          <LargeBtn icon={RefreshCw} label="Update Index" />
        </div>
      </RibbonGroup>

      {/* TABLE OF AUTHORITIES */}
      <RibbonGroup label="Table of Authorities">
        <LargeBtn icon={BookMarked} label="Mark Citation" />
        <div className="flex flex-col h-full justify-center">
          <LargeBtn icon={List} label="Insert Table" />
          <LargeBtn icon={RefreshCw} label="Update Table" />
        </div>
      </RibbonGroup>

    </div>
  );
};

export default ReferencesTab;
