import React, { useState } from 'react';
import {
  FileText, FileX, Scissors,
  Table, Grid2x2, Grid3x3,
  Image, ImagePlus, Monitor, Globe2,
  Square, Shapes, Star, Triangle,
  Link, Bookmark, Navigation,
  PanelTop, PanelBottom, Hash,
  TextCursorInput, FileSignature, CalendarDays, Type,
  Sigma, AtSign, ChevronDown
} from 'lucide-react';
import { RibbonGroup, LargeBtn, SmallBtn, SplitLargeBtn, DropBtn, useDropdown } from '../RibbonComponents';

// Table grid picker
const TablePicker: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [hover, setHover] = useState<[number, number]>([0, 0]);
  const ROWS = 8, COLS = 10;

  return (
    <div className="p-2">
      <div className="text-[11px] text-gray-500 mb-2">
        {hover[0] > 0 ? `${hover[1]} × ${hover[0]} Table` : 'Insert Table'}
      </div>
      <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
        {Array.from({ length: ROWS * COLS }).map((_, idx) => {
          const row = Math.floor(idx / COLS) + 1;
          const col = (idx % COLS) + 1;
          const isActive = row <= hover[0] && col <= hover[1];
          return (
            <div
              key={idx}
              className={`w-5 h-5 border rounded-sm cursor-pointer transition-colors ${
                isActive ? 'bg-[#C9973A] border-[#C9973A]' : 'border-gray-300 hover:border-gray-400'
              }`}
              onMouseEnter={() => setHover([row, col])}
              onClick={onClose}
            />
          );
        })}
      </div>
      <div className="border-t border-gray-100 mt-2 pt-1 space-y-0.5">
        <button className="w-full text-left text-[12px] px-1 py-1 hover:bg-gray-50 rounded">Insert Table...</button>
        <button className="w-full text-left text-[12px] px-1 py-1 hover:bg-gray-50 rounded">Draw Table</button>
        <button className="w-full text-left text-[12px] px-1 py-1 hover:bg-gray-50 rounded">Excel Spreadsheet</button>
        <button className="w-full text-left text-[12px] px-1 py-1 hover:bg-gray-50 rounded">Quick Tables ▶</button>
      </div>
    </div>
  );
};

const TableDropBtn: React.FC = () => {
  const { open, setOpen, ref } = useDropdown();
  return (
    <div ref={ref} className="relative h-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center rounded px-2 py-1 transition-colors min-w-[44px] h-full gap-0.5 hover:bg-gray-100 text-gray-700"
      >
        <Table size={22} strokeWidth={1.5} />
        <span className="text-[10px]">Table</span>
        <ChevronDown size={9} className="text-gray-400" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[200]">
          <TablePicker onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

const ShapesDropBtn: React.FC = () => {
  const { open, setOpen, ref } = useDropdown();
  const categories = [
    { name: 'Lines', shapes: ['─', '→', '↔', '⤷', '↗', '⟹'] },
    { name: 'Basic Shapes', shapes: ['□', '◯', '△', '⬡', '⬟', '☆'] },
    { name: 'Arrows', shapes: ['⇒', '⇐', '⇑', '⇓', '⇔', '⤋'] },
    { name: 'Callouts', shapes: ['💬', '💭', '🗨', '🗯', '📢', '📣'] },
  ];

  return (
    <div ref={ref} className="relative h-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center rounded px-2 py-1 hover:bg-gray-100 text-gray-700 h-full gap-0.5 min-w-[44px]"
      >
        <Shapes size={22} strokeWidth={1.5} />
        <span className="text-[10px]">Shapes</span>
        <ChevronDown size={9} className="text-gray-400" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[200] p-2 w-56">
          {categories.map(cat => (
            <div key={cat.name} className="mb-2">
              <div className="text-[10px] text-gray-400 font-medium mb-1">{cat.name}</div>
              <div className="flex gap-1 flex-wrap">
                {cat.shapes.map((s, i) => (
                  <button key={i} onClick={() => setOpen(false)} className="w-7 h-7 text-lg hover:bg-gray-100 rounded flex items-center justify-center">{s}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const InsertTab: React.FC = () => {
  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* PAGES */}
      <RibbonGroup label="Pages">
        <SplitLargeBtn icon={FileText} label="Cover Page" items={[
          { label: 'Annual Report' },
          { label: 'Banded' },
          { label: 'Facet' },
          { label: 'Ion' },
          { label: 'Motion' },
          { label: 'Retrospect' },
          { divider: true },
          { label: 'Remove Current Cover Page' },
          { label: 'Save Selection to Gallery...' },
        ]} />
        <LargeBtn icon={FileX} label="Blank Page" />
        <SplitLargeBtn icon={Scissors} label="Page Break" items={[
          { label: 'Page Break (Ctrl+Enter)' },
          { label: 'Column Break' },
          { label: 'Text Wrapping Break' },
          { divider: true },
          { label: 'Next Page (Section Break)' },
          { label: 'Continuous' },
          { label: 'Even Page' },
          { label: 'Odd Page' },
        ]} />
      </RibbonGroup>

      {/* TABLE */}
      <RibbonGroup label="Tables">
        <TableDropBtn />
      </RibbonGroup>

      {/* MEDIA */}
      <RibbonGroup label="Media">
        <SplitLargeBtn icon={Image} label="Picture" items={[
          { label: 'This Device...' },
          { label: 'Online Pictures...' },
          { label: 'From URL...' },
          { divider: true },
          { label: 'Stock Images...' },
        ]} />
        <ShapesDropBtn />
        <SplitLargeBtn icon={Square} label="Icons" items={[
          { label: 'Insert Icon...' },
          { label: 'Browse Icons Library' },
        ]} />
        <LargeBtn icon={Monitor} label="Screenshot" />
      </RibbonGroup>

      {/* LINKS */}
      <RibbonGroup label="Links">
        <SplitLargeBtn icon={Link} label="Link" items={[
          { label: 'Insert Link (Ctrl+K)' },
          { label: 'Recent Links ▶' },
          { label: 'Existing File or Webpage' },
          { label: 'Place in This Document' },
          { label: 'Email Address' },
        ]} />
        <LargeBtn icon={Bookmark} label="Bookmark" />
        <LargeBtn icon={Navigation} label="Cross-ref" />
      </RibbonGroup>

      {/* HEADER & FOOTER */}
      <RibbonGroup label="Header & Footer">
        <SplitLargeBtn icon={PanelTop} label="Header" items={[
          { label: 'Blank' },
          { label: 'Blank (Three Columns)' },
          { label: 'Alphabet' },
          { label: 'Annual' },
          { label: 'Austin' },
          { label: 'Banded' },
          { divider: true },
          { label: 'Edit Header' },
          { label: 'Remove Header' },
          { label: 'Save Selection to Gallery...' },
        ]} />
        <SplitLargeBtn icon={PanelBottom} label="Footer" items={[
          { label: 'Blank' },
          { label: 'Blank (Three Columns)' },
          { label: 'Alphabet' },
          { label: 'Annual' },
          { divider: true },
          { label: 'Edit Footer' },
          { label: 'Remove Footer' },
          { label: 'Save Selection to Gallery...' },
        ]} />
        <SplitLargeBtn icon={Hash} label="Page #" items={[
          { label: 'Top of Page ▶' },
          { label: 'Bottom of Page ▶' },
          { label: 'Page Margins ▶' },
          { label: 'Current Position ▶' },
          { divider: true },
          { label: 'Format Page Numbers...' },
          { label: 'Remove Page Numbers' },
        ]} />
      </RibbonGroup>

      {/* TEXT */}
      <RibbonGroup label="Text">
        <SplitLargeBtn icon={TextCursorInput} label="Text Box" items={[
          { label: 'Simple Text Box' },
          { label: 'Austin Quote' },
          { label: 'Banded Quote' },
          { divider: true },
          { label: 'Draw Text Box' },
          { label: 'Save Selection to Gallery...' },
        ]} />
        <LargeBtn icon={Type} label="WordArt" />
        <SplitLargeBtn icon={Type} label="Drop Cap" items={[
          { label: 'None' },
          { label: 'Dropped' },
          { label: 'In Margin' },
          { divider: true },
          { label: 'Drop Cap Options...' },
        ]} />
        <LargeBtn icon={FileSignature} label="Signature" />
        <SplitLargeBtn icon={CalendarDays} label="Date & Time" items={[
          { label: 'dd/MM/yyyy' },
          { label: 'dddd, MMMM d, yyyy' },
          { label: 'MMMM d, yyyy' },
          { label: 'M/d/yyyy' },
          { divider: true },
          { label: 'More Formats...' },
        ]} />
      </RibbonGroup>

      {/* SYMBOLS */}
      <RibbonGroup label="Symbols">
        <SplitLargeBtn icon={Sigma} label="Equation" items={[
          { label: 'Insert New Equation' },
          { label: 'Ink Equation' },
          { divider: true },
          { label: 'Pythagorean Theorem' },
          { label: 'Area of Circle' },
          { label: 'Quadratic Formula' },
          { label: 'Taylor Expansion' },
          { divider: true },
          { label: 'More Equations from Office.com...' },
        ]} />
        <SplitLargeBtn icon={AtSign} label="Symbol" items={[
          { label: '© Copyright' },
          { label: '® Registered' },
          { label: '™ Trademark' },
          { label: '± Plus-Minus' },
          { label: '≠ Not Equal' },
          { label: '≤ Less or Equal' },
          { label: '≥ Greater or Equal' },
          { label: '÷ Division' },
          { label: '× Multiplication' },
          { divider: true },
          { label: 'More Symbols...' },
          { label: 'Sinhala Characters...' },
        ]} />
      </RibbonGroup>

    </div>
  );
};

export default InsertTab;
