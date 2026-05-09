import React, { useState } from 'react';
import {
  Clipboard, Copy, Scissors, Paintbrush,
  Bold, Italic, Underline, Strikethrough, Subscript, Superscript,
  Highlighter, Baseline, Eraser, CaseSensitive,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, IndentDecrease, IndentIncrease,
  SortAsc, Pilcrow, ChevronDown,
  Search, Replace, MousePointer2, Keyboard,
  LineChart, BetweenHorizonalEnd, BetweenVerticalEnd
} from 'lucide-react';
import {
  RibbonGroup, LargeBtn, SmallBtn, SplitLargeBtn, DropBtn,
  RibbonDivider, useDropdown, COLORS, ColorRow
} from '../RibbonComponents';
import { useAppStore } from '../../../store/useAppStore';

const FONTS = [
  'Noto Sans Sinhala', 'Abhaya Libre', 'Yaldevi',
  'Arial', 'Times New Roman', 'Calibri', 'Georgia', 'Verdana', 'Courier New',
];
const SIZES = ['8','9','10','11','12','14','16','18','20','22','24','28','32','36','48','72'];

const ColorPickerBtn: React.FC<{ icon: React.ElementType; label: string; title: string }> = ({ icon: Icon, label, title }) => {
  const { open, setOpen, ref } = useDropdown();
  return (
    <div ref={ref} className="relative">
      <button
        title={title}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-0.5 rounded px-1 py-0.5 hover:bg-gray-100 h-7 text-gray-700"
      >
        <Icon size={16} strokeWidth={2} />
        <ChevronDown size={9} className="text-gray-400" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[200] p-1">
          <div className="text-[10px] text-gray-400 px-1 mb-1">{title}</div>
          <ColorRow colors={COLORS} onPick={() => setOpen(false)} />
          <div className="border-t border-gray-100 mt-1 pt-1 px-1">
            <button className="text-[11px] text-[#C9973A] hover:underline">Custom Color...</button>
          </div>
        </div>
      )}
    </div>
  );
};

const HomeTab: React.FC = () => {
  const { isKeyboardOpen, toggleKeyboard } = useAppStore();
  const [fontSize, setFontSize] = useState('11');
  const [fontFamily, setFontFamily] = useState('Noto Sans Sinhala');

  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* CLIPBOARD */}
      <RibbonGroup label="Clipboard">
        <SplitLargeBtn
          icon={Clipboard}
          label="Paste"
          onMain={() => document.execCommand('paste')}
          items={[
            { label: 'Paste (Ctrl+V)' },
            { label: 'Paste Special...', sub: 'Choose paste format' },
            { label: 'Paste as Plain Text' },
            { divider: true },
            { label: 'Keep Source Formatting' },
            { label: 'Merge Formatting' },
            { label: 'Text Only' },
          ]}
        />
        <div className="flex flex-col h-full justify-center">
          <SmallBtn icon={Scissors} label="Cut" title="Cut (Ctrl+X)" onClick={() => document.execCommand('cut')} />
          <SmallBtn icon={Copy} label="Copy" title="Copy (Ctrl+C)" onClick={() => document.execCommand('copy')} />
          <SmallBtn icon={Paintbrush} label="Format Painter" title="Copy formatting" />
        </div>
      </RibbonGroup>

      {/* FONT */}
      <RibbonGroup label="Font">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <select
              value={fontFamily}
              onChange={e => setFontFamily(e.target.value)}
              className="text-[11px] border border-gray-200 rounded px-1 h-6 w-36 outline-none hover:border-gray-300 bg-white"
            >
              {FONTS.map(f => <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>)}
            </select>
            <select
              value={fontSize}
              onChange={e => setFontSize(e.target.value)}
              className="text-[11px] border border-gray-200 rounded px-1 h-6 w-12 outline-none hover:border-gray-300 bg-white"
            >
              {SIZES.map(s => <option key={s}>{s}</option>)}
            </select>
            <div className="flex items-center">
              <SmallBtn icon={CaseSensitive} title="Grow Font (Ctrl+>)" />
              <SmallBtn icon={CaseSensitive} title="Shrink Font (Ctrl+<)" />
              <SmallBtn icon={Eraser} title="Clear All Formatting" />
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <SmallBtn icon={Bold} title="Bold (Ctrl+B)" />
            <SmallBtn icon={Italic} title="Italic (Ctrl+I)" />
            <SmallBtn icon={Underline} title="Underline (Ctrl+U)" />
            <SmallBtn icon={Strikethrough} title="Strikethrough" />
            <SmallBtn icon={Subscript} title="Subscript (Ctrl+=)" />
            <SmallBtn icon={Superscript} title="Superscript (Ctrl+Shift+=)" />
            <RibbonDivider />
            <ColorPickerBtn icon={Highlighter} label="H" title="Text Highlight Color" />
            <ColorPickerBtn icon={Baseline} label="A" title="Font Color" />
          </div>
        </div>
      </RibbonGroup>

      {/* PARAGRAPH */}
      <RibbonGroup label="Paragraph">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-0.5">
            <SplitLargeBtn icon={List} label="" items={[
              { label: 'None' },
              { label: 'Bullet •' },
              { label: 'Disc ●' },
              { label: 'Circle ○' },
              { label: 'Square ■' },
              { divider: true },
              { label: 'Define New Bullet...' },
            ]} />
            <SplitLargeBtn icon={ListOrdered} label="" items={[
              { label: 'None' },
              { label: '1. 2. 3.' },
              { label: 'a. b. c.' },
              { label: 'I. II. III.' },
              { label: 'A. B. C.' },
              { divider: true },
              { label: 'Define New Format...' },
            ]} />
            <SmallBtn icon={IndentDecrease} title="Decrease Indent" />
            <SmallBtn icon={IndentIncrease} title="Increase Indent" />
            <RibbonDivider />
            <SmallBtn icon={SortAsc} title="Sort" />
            <SmallBtn icon={Pilcrow} title="Show/Hide Formatting Marks" />
          </div>
          <div className="flex items-center gap-0.5">
            <SmallBtn icon={AlignLeft} title="Align Left (Ctrl+L)" />
            <SmallBtn icon={AlignCenter} title="Center (Ctrl+E)" />
            <SmallBtn icon={AlignRight} title="Align Right (Ctrl+R)" />
            <SmallBtn icon={AlignJustify} title="Justify (Ctrl+J)" />
            <RibbonDivider />
            <SplitLargeBtn icon={BetweenHorizonalEnd} label="" items={[
              { label: '1.0' },
              { label: '1.15' },
              { label: '1.5' },
              { label: '2.0' },
              { label: '2.5' },
              { label: '3.0' },
              { divider: true },
              { label: 'Line Spacing Options...' },
              { label: 'Add Space Before Paragraph' },
              { label: 'Remove Space After Paragraph' },
            ]} />
            <ColorPickerBtn icon={BetweenVerticalEnd} label="" title="Shading Color" />
          </div>
        </div>
      </RibbonGroup>

      {/* STYLES */}
      <RibbonGroup label="Styles">
        <div className="flex items-center gap-1">
          {[
            { name: 'Normal', preview: 'AaBbCc', style: '' },
            { name: 'No Spacing', preview: 'AaBbCc', style: 'tracking-tight' },
            { name: 'Heading 1', preview: 'AaBbCc', style: 'font-bold text-blue-700' },
            { name: 'Heading 2', preview: 'AaBbCc', style: 'font-bold text-blue-500' },
            { name: 'Title', preview: 'AaBbCc', style: 'font-bold text-gray-900 text-[12px]' },
            { name: 'Subtitle', preview: 'AaBbCc', style: 'italic text-gray-500' },
          ].map(s => (
            <div key={s.name} className="border border-gray-200 rounded p-1 h-12 w-[60px] flex flex-col justify-between hover:bg-gray-50 hover:border-[#C9973A] cursor-pointer transition-colors">
              <span className={`text-[10px] ${s.style}`}>{s.preview}</span>
              <span className="text-[8px] text-gray-500 leading-tight">{s.name}</span>
            </div>
          ))}
          <button className="flex items-center justify-center hover:bg-gray-100 rounded h-12 px-1 text-gray-500">
            <div className="flex flex-col">
              <ChevronDown size={12} />
              <ChevronDown size={12} className="-mt-1" />
            </div>
          </button>
        </div>
      </RibbonGroup>

      {/* EDITING */}
      <RibbonGroup label="Editing">
        <SplitLargeBtn icon={Search} label="Find" items={[
          { label: 'Find (Ctrl+F)' },
          { label: 'Advanced Find...' },
          { label: 'Go To... (Ctrl+G)' },
        ]} />
        <LargeBtn icon={Replace} label="Replace" />
        <SplitLargeBtn icon={MousePointer2} label="Select" items={[
          { label: 'Select All (Ctrl+A)' },
          { label: 'Select Objects' },
          { label: 'Select All Matching Text' },
        ]} />
        <LargeBtn icon={Keyboard} label="Keyboard" onClick={toggleKeyboard} active={isKeyboardOpen} />
      </RibbonGroup>

    </div>
  );
};

export default HomeTab;
