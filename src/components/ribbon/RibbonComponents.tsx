import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// ─── Shared Ribbon Primitives ──────────────────────────────────────────────────

export const RibbonGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex flex-col h-full border-r border-gray-200 px-2 py-1 flex-shrink-0">
    <div className="flex-1 flex items-center gap-0.5">
      {children}
    </div>
    <div className="text-[9px] text-gray-400 text-center mt-1 uppercase tracking-tighter select-none">
      {label}
    </div>
  </div>
);

// Large vertical button (icon + label, full height)
export const LargeBtn: React.FC<{
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  active?: boolean;
  color?: string;
  hasArrow?: boolean;
}> = ({ icon: Icon, label, onClick, active, color, hasArrow }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center rounded px-2 py-1 transition-colors min-w-[44px] h-full gap-0.5
      ${active ? 'bg-amber-50 text-[#C9973A]' : 'hover:bg-gray-100 text-gray-700'}`}
  >
    <Icon size={22} strokeWidth={1.5} style={color ? { color } : {}} />
    <span className="text-[10px] whitespace-nowrap text-center leading-tight">{label}</span>
    {hasArrow && <ChevronDown size={9} className="text-gray-400" />}
  </button>
);

// Small horizontal button
export const SmallBtn: React.FC<{
  icon: React.ElementType;
  label?: string;
  onClick?: () => void;
  active?: boolean;
  title?: string;
}> = ({ icon: Icon, label, onClick, active, title }) => (
  <button
    onClick={onClick}
    title={title}
    className={`flex items-center gap-1 rounded px-1 py-0.5 transition-colors h-7
      ${active ? 'bg-amber-50 text-[#C9973A]' : 'hover:bg-gray-100 text-gray-700'}`}
  >
    <Icon size={16} strokeWidth={2} />
    {label && <span className="text-[11px]">{label}</span>}
  </button>
);

// Sinhala-accent large button
export const SinhalaBtn: React.FC<{
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  active?: boolean;
}> = ({ icon: Icon, label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center rounded px-2 py-1 transition-colors min-w-[56px] h-full gap-0.5
      ${active ? 'bg-green-50 text-[#1A7A6E]' : 'hover:bg-gray-100 text-gray-700'}`}
  >
    <Icon size={22} strokeWidth={1.5} className={active ? 'text-[#1A7A6E]' : ''} />
    <span className="text-[10px] whitespace-nowrap text-center leading-tight">{label}</span>
  </button>
);

// Dropdown wrapper hook
export function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return { open, setOpen, ref };
}

// Split-button with dropdown (large button + arrow that opens menu)
export const SplitLargeBtn: React.FC<{
  icon: React.ElementType;
  label: string;
  items: { label: string; sub?: string; divider?: boolean }[];
  onMain?: () => void;
  color?: string;
}> = ({ icon: Icon, label, items, onMain, color }) => {
  const { open, setOpen, ref } = useDropdown();

  return (
    <div ref={ref} className="relative flex h-full">
      <button
        onClick={onMain}
        className="flex flex-col items-center justify-center rounded-l px-2 py-1 transition-colors min-w-[44px] h-full gap-0.5 hover:bg-gray-100 text-gray-700"
      >
        <Icon size={22} strokeWidth={1.5} style={color ? { color } : {}} />
        <span className="text-[10px] whitespace-nowrap text-center leading-tight">{label}</span>
      </button>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-end pb-2.5 px-0.5 hover:bg-gray-100 rounded-r text-gray-400 transition-colors h-full"
      >
        <ChevronDown size={10} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[200] min-w-[160px] py-1">
          {items.map((item, i) =>
            item.divider ? (
              <div key={i} className="border-t border-gray-100 my-1" />
            ) : (
              <button
                key={i}
                onClick={() => setOpen(false)}
                className="w-full text-left px-3 py-1.5 text-[12px] hover:bg-gray-50 flex flex-col"
              >
                <span>{item.label}</span>
                {item.sub && <span className="text-[10px] text-gray-400">{item.sub}</span>}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

// Small dropdown button (select-like)
export const DropBtn: React.FC<{
  label: string;
  items: { label: string; divider?: boolean }[];
  className?: string;
}> = ({ label, items, className = '' }) => {
  const { open, setOpen, ref } = useDropdown();

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 border border-gray-200 rounded px-2 h-6 text-[11px] hover:border-gray-300 bg-white transition-colors"
      >
        <span>{label}</span>
        <ChevronDown size={10} className="text-gray-400" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[200] min-w-[140px] py-1">
          {items.map((item, i) =>
            item.divider ? (
              <div key={i} className="border-t border-gray-100 my-1" />
            ) : (
              <button
                key={i}
                onClick={() => setOpen(false)}
                className="w-full text-left px-3 py-1.5 text-[12px] hover:bg-gray-50"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

// Divider
export const RibbonDivider = () => <div className="w-px h-8 bg-gray-200 mx-1 self-center" />;

// Color swatch row
export const ColorRow: React.FC<{ colors: string[]; onPick?: (c: string) => void }> = ({ colors, onPick }) => (
  <div className="flex gap-0.5 p-1 flex-wrap max-w-[112px]">
    {colors.map((c) => (
      <button
        key={c}
        onClick={() => onPick?.(c)}
        className="w-4 h-4 rounded-sm border border-gray-300 hover:scale-110 transition-transform"
        style={{ backgroundColor: c }}
        title={c}
      />
    ))}
  </div>
);

export const COLORS = [
  '#000000','#434343','#666666','#999999','#b7b7b7','#cccccc','#d9d9d9','#ffffff',
  '#ff0000','#ff9900','#ffff00','#00ff00','#00ffff','#4a86e8','#0000ff','#9900ff',
  '#ff00ff','#e06666','#f6b26b','#ffd966','#93c47d','#76a5af','#6fa8dc','#8e7cc3',
];
