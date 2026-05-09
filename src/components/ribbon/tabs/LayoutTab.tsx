import React from 'react';
import {
  Maximize2, RotateCcw, Columns3, Scissors,
  AlignLeft, AlignCenter,
  Move, Layers, Send, BringToFront, SendToBack,
  Group, Ungroup, RefreshCw,
  ArrowLeftRight, ArrowUpDown,
  AlignStartVertical, AlignCenterVertical, AlignEndVertical,
  AlignStartHorizontal, AlignCenterHorizontal, AlignEndHorizontal,
} from 'lucide-react';
import { RibbonGroup, LargeBtn, SmallBtn, SplitLargeBtn, RibbonDivider } from '../RibbonComponents';

const LayoutTab: React.FC = () => {
  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* PAGE SETUP */}
      <RibbonGroup label="Page Setup">
        <SplitLargeBtn icon={Maximize2} label="Margins" items={[
          { label: 'Normal', sub: 'Top: 1" Bottom: 1" Left: 1" Right: 1"' },
          { label: 'Narrow', sub: 'Top: 0.5" Bottom: 0.5" Left: 0.5" Right: 0.5"' },
          { label: 'Moderate', sub: 'Top: 1" Bottom: 1" Left: 0.75" Right: 0.75"' },
          { label: 'Wide', sub: 'Top: 1" Bottom: 1" Left: 2" Right: 2"' },
          { label: 'Mirrored', sub: 'Top: 1" Bottom: 1" Inside: 1.25" Outside: 1"' },
          { label: 'Office 2003 Default', sub: 'Top: 1" Bottom: 1" Left: 1.25" Right: 1.25"' },
          { divider: true },
          { label: 'Custom Margins...' },
        ]} />
        <SplitLargeBtn icon={RotateCcw} label="Orientation" items={[
          { label: 'Portrait ▣' },
          { label: 'Landscape ▭' },
        ]} />
        <SplitLargeBtn icon={AlignLeft} label="Size" items={[
          { label: 'Letter', sub: '8.5" × 11"' },
          { label: 'Tabloid', sub: '11" × 17"' },
          { label: 'Legal', sub: '8.5" × 14"' },
          { label: 'Executive', sub: '7.25" × 10.5"' },
          { label: 'A3', sub: '11.69" × 16.54"' },
          { label: 'A4', sub: '8.27" × 11.69"' },
          { label: 'A5', sub: '5.83" × 8.27"' },
          { label: 'B5 (JIS)', sub: '7.17" × 10.12"' },
          { divider: true },
          { label: 'More Paper Sizes...' },
        ]} />
        <SplitLargeBtn icon={Columns3} label="Columns" items={[
          { label: 'One' },
          { label: 'Two' },
          { label: 'Three' },
          { label: 'Left' },
          { label: 'Right' },
          { divider: true },
          { label: 'More Columns...' },
        ]} />
        <SplitLargeBtn icon={Scissors} label="Breaks" items={[
          { label: '— Page Breaks —' },
          { label: 'Page', sub: 'Ctrl+Enter' },
          { label: 'Column' },
          { label: 'Text Wrapping' },
          { divider: true },
          { label: '— Section Breaks —' },
          { label: 'Next Page' },
          { label: 'Continuous' },
          { label: 'Even Page' },
          { label: 'Odd Page' },
        ]} />
        <SplitLargeBtn icon={AlignLeft} label="Line Numbers" items={[
          { label: 'None' },
          { label: 'Continuous' },
          { label: 'Restart Each Page' },
          { label: 'Restart Each Section' },
          { label: 'Suppress for Current Paragraph' },
          { divider: true },
          { label: 'Line Numbering Options...' },
        ]} />
        <SplitLargeBtn icon={AlignLeft} label="Hyphenation" items={[
          { label: 'None' },
          { label: 'Automatic' },
          { label: 'Manual...' },
          { divider: true },
          { label: 'Hyphenation Options...' },
        ]} />
      </RibbonGroup>

      {/* PARAGRAPH SPACING */}
      <RibbonGroup label="Paragraph">
        <div className="flex flex-col gap-1.5 p-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 w-20">Indent Left:</span>
            <input type="number" defaultValue={0} min={0} step={0.5}
              className="w-14 text-[11px] border border-gray-200 rounded px-1 h-5 outline-none" />
            <span className="text-[10px] text-gray-400">cm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 w-20">Indent Right:</span>
            <input type="number" defaultValue={0} min={0} step={0.5}
              className="w-14 text-[11px] border border-gray-200 rounded px-1 h-5 outline-none" />
            <span className="text-[10px] text-gray-400">cm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 w-20">Spacing Before:</span>
            <input type="number" defaultValue={0} min={0} step={6}
              className="w-14 text-[11px] border border-gray-200 rounded px-1 h-5 outline-none" />
            <span className="text-[10px] text-gray-400">pt</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 w-20">Spacing After:</span>
            <input type="number" defaultValue={8} min={0} step={6}
              className="w-14 text-[11px] border border-gray-200 rounded px-1 h-5 outline-none" />
            <span className="text-[10px] text-gray-400">pt</span>
          </div>
        </div>
      </RibbonGroup>

      {/* ARRANGE */}
      <RibbonGroup label="Arrange">
        <SplitLargeBtn icon={Move} label="Position" items={[
          { label: '— In Line with Text —' },
          { label: 'Top Left' },
          { label: 'Top Center' },
          { label: 'Top Right' },
          { label: 'Middle Left' },
          { label: 'Middle Center' },
          { label: 'Middle Right' },
          { label: 'Bottom Left' },
          { label: 'Bottom Center' },
          { label: 'Bottom Right' },
          { divider: true },
          { label: 'More Layout Options...' },
        ]} />
        <SplitLargeBtn icon={Layers} label="Wrap Text" items={[
          { label: 'In Line with Text' },
          { label: 'Square' },
          { label: 'Tight' },
          { label: 'Through' },
          { label: 'Top and Bottom' },
          { label: 'Behind Text' },
          { label: 'In Front of Text' },
          { divider: true },
          { label: 'Edit Wrap Points' },
          { label: 'More Layout Options...' },
        ]} />
        <SplitLargeBtn icon={BringToFront} label="Bring Forward" items={[
          { label: 'Bring to Front' },
          { label: 'Bring Forward' },
          { label: 'Bring in Front of Text' },
        ]} />
        <SplitLargeBtn icon={SendToBack} label="Send Backward" items={[
          { label: 'Send to Back' },
          { label: 'Send Backward' },
          { label: 'Send Behind Text' },
        ]} />
        <SplitLargeBtn icon={AlignCenterVertical} label="Align" items={[
          { label: 'Align Left' },
          { label: 'Align Center' },
          { label: 'Align Right' },
          { divider: true },
          { label: 'Align Top' },
          { label: 'Align Middle' },
          { label: 'Align Bottom' },
          { divider: true },
          { label: 'Distribute Horizontally' },
          { label: 'Distribute Vertically' },
          { divider: true },
          { label: 'Align to Page' },
          { label: 'Align to Margin' },
          { label: 'Align Selected Objects' },
        ]} />
        <LargeBtn icon={Group} label="Group" />
        <SplitLargeBtn icon={RefreshCw} label="Rotate" items={[
          { label: 'Rotate Right 90°' },
          { label: 'Rotate Left 90°' },
          { label: 'Flip Vertical' },
          { label: 'Flip Horizontal' },
          { divider: true },
          { label: 'More Rotation Options...' },
        ]} />
      </RibbonGroup>

    </div>
  );
};

export default LayoutTab;
