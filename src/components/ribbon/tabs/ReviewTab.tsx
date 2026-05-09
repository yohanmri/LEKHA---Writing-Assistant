import React from 'react';
import {
  SpellCheck, Volume2, Hash,
  MessageSquare, ChevronLeft, ChevronRight, X, MessageSquarePlus, Eye,
  GitBranch, Check, SkipBack, SkipForward, CheckCheck,
  FileSearch, GitMerge, FileDiff,
  Lock, Shield
} from 'lucide-react';
import { RibbonGroup, LargeBtn, SmallBtn, SplitLargeBtn, DropBtn } from '../RibbonComponents';

const ReviewTab: React.FC = () => {
  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* PROOFING */}
      <RibbonGroup label="Proofing">
        <SplitLargeBtn icon={SpellCheck} label="Spelling & Grammar" items={[
          { label: 'Spelling & Grammar (F7)' },
          { label: 'Check Document' },
          { label: 'Check Selection' },
          { divider: true },
          { label: 'Set Proofing Language...' },
          { label: 'Spelling Options...' },
        ]} />
        <SplitLargeBtn icon={Volume2} label="Read Aloud" items={[
          { label: 'Read Aloud (Ctrl+Alt+Space)' },
          { label: 'Read Selection' },
          { label: 'Pause Reading' },
          { label: 'Stop Reading' },
          { divider: true },
          { label: 'Reading Speed...' },
          { label: 'Voice Settings...' },
        ]} />
        <SplitLargeBtn icon={Hash} label="Word Count" items={[
          { label: 'Word Count (Ctrl+Shift+G)' },
          { label: 'Character Count' },
          { label: 'Paragraph Count' },
          { label: 'Line Count' },
          { divider: true },
          { label: 'Show in Status Bar' },
        ]} />
      </RibbonGroup>

      {/* SPEECH */}
      <RibbonGroup label="Language">
        <SplitLargeBtn icon={SpellCheck} label="Language" items={[
          { label: 'Set Proofing Language...' },
          { label: 'Language Preferences...' },
          { label: 'Translate Selection' },
          { label: 'Translate Document...' },
        ]} />
        <SplitLargeBtn icon={FileSearch} label="Translate" items={[
          { label: 'Translate Selection' },
          { label: 'Translate Document' },
          { label: 'Mini Translator' },
          { label: 'Sinhala ↔ English' },
          { label: 'Choose Translation Language...' },
        ]} />
      </RibbonGroup>

      {/* COMMENTS */}
      <RibbonGroup label="Comments">
        <LargeBtn icon={MessageSquarePlus} label="New Comment" />
        <SplitLargeBtn icon={X} label="Delete" items={[
          { label: 'Delete Comment' },
          { label: 'Delete All Comments in Document' },
          { label: 'Delete All Resolved Comments' },
        ]} />
        <div className="flex flex-col h-full justify-center">
          <SmallBtn icon={ChevronLeft} label="Previous" title="Previous Comment" />
          <SmallBtn icon={ChevronRight} label="Next" title="Next Comment" />
        </div>
        <SplitLargeBtn icon={Eye} label="Show Comments" items={[
          { label: 'Show All Comments' },
          { label: 'Show Active Comments' },
          { label: 'Show Resolved Comments' },
          { label: 'Hide All Comments' },
        ]} />
      </RibbonGroup>

      {/* TRACKING */}
      <RibbonGroup label="Tracking">
        <SplitLargeBtn icon={GitBranch} label="Track Changes" items={[
          { label: 'Track Changes (Ctrl+Shift+E)' },
          { label: 'Lock Tracking...' },
          { label: 'Change Tracking Options...' },
        ]} />
        <div className="flex flex-col gap-1 px-1 justify-center h-full">
          <DropBtn label="All Markup" items={[
            { label: 'All Markup' },
            { label: 'Simple Markup' },
            { label: 'No Markup' },
            { label: 'Original' },
          ]} />
          <SplitLargeBtn icon={Eye} label="Show Markup" items={[
            { label: 'Comments' },
            { label: 'Ink' },
            { label: 'Insertions & Deletions' },
            { label: 'Formatting' },
            { divider: true },
            { label: 'Balloons ▶' },
            { label: 'Specific People ▶' },
          ]} />
        </div>
        <SplitLargeBtn icon={FileSearch} label="Reviewing Pane" items={[
          { label: 'Reviewing Pane Vertical' },
          { label: 'Reviewing Pane Horizontal' },
        ]} />
      </RibbonGroup>

      {/* CHANGES */}
      <RibbonGroup label="Changes">
        <SplitLargeBtn icon={CheckCheck} label="Accept" items={[
          { label: 'Accept and Move to Next' },
          { label: 'Accept This Change' },
          { label: 'Accept All Changes Shown' },
          { label: 'Accept All Changes' },
          { label: 'Accept All Changes & Stop Tracking' },
        ]} />
        <SplitLargeBtn icon={X} label="Reject" items={[
          { label: 'Reject and Move to Next' },
          { label: 'Reject This Change' },
          { label: 'Reject All Changes Shown' },
          { label: 'Reject All Changes' },
          { label: 'Reject All Changes & Stop Tracking' },
        ]} />
        <div className="flex flex-col h-full justify-center">
          <SmallBtn icon={SkipBack} label="Previous" title="Previous Change" />
          <SmallBtn icon={SkipForward} label="Next" title="Next Change" />
        </div>
      </RibbonGroup>

      {/* COMPARE */}
      <RibbonGroup label="Compare">
        <SplitLargeBtn icon={FileDiff} label="Compare" items={[
          { label: 'Compare Two Versions...' },
          { label: 'Show Source Documents ▶' },
          { label: 'Hide Source Documents' },
        ]} />
        <LargeBtn icon={GitMerge} label="Combine" />
      </RibbonGroup>

      {/* PROTECT */}
      <RibbonGroup label="Protect">
        <SplitLargeBtn icon={Lock} label="Block Authors" items={[
          { label: 'Block All' },
          { label: 'Block This Section' },
          { label: 'Stop Blocking' },
        ]} />
        <LargeBtn icon={Shield} label="Restrict Editing" />
      </RibbonGroup>

    </div>
  );
};

export default ReviewTab;
