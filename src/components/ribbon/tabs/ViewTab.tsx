import React, { useState } from 'react';
import {
  FileText, Globe2, BookOpen, Zap, Maximize,
  Grid2x2, PanelLeft, Search, ZoomIn, ZoomOut, Minimize2,
  Columns2, LayoutTemplate, SplitSquareHorizontal, MonitorPlay,
  Minus, Plus, RefreshCw
} from 'lucide-react';
import { RibbonGroup, LargeBtn, SmallBtn, SplitLargeBtn, DropBtn, RibbonDivider } from '../RibbonComponents';
import { useAppStore } from '../../../store/useAppStore';

const ViewTab: React.FC = () => {
  const { zoomLevel, setZoomLevel } = useAppStore();
  const [activeView, setActiveView] = useState('print');

  const views = [
    { id: 'print', icon: FileText, label: 'Print Layout' },
    { id: 'web', icon: Globe2, label: 'Web Layout' },
    { id: 'read', icon: BookOpen, label: 'Reading Mode' },
    { id: 'focus', icon: Zap, label: 'Focus Mode' },
    { id: 'draft', icon: Minus, label: 'Draft' },
    { id: 'outline', icon: LayoutTemplate, label: 'Outline' },
  ];

  return (
    <div className="flex h-full items-center overflow-x-auto">

      {/* VIEWS */}
      <RibbonGroup label="Views">
        {views.map(v => (
          <LargeBtn
            key={v.id}
            icon={v.icon}
            label={v.label}
            onClick={() => setActiveView(v.id)}
            active={activeView === v.id}
          />
        ))}
      </RibbonGroup>

      {/* IMMERSIVE */}
      <RibbonGroup label="Immersive">
        <LargeBtn icon={MonitorPlay} label="Immersive Reader" />
        <SplitLargeBtn icon={Zap} label="Focus" items={[
          { label: 'Enter Focus Mode' },
          { label: 'Focus Color: Default' },
          { label: 'Focus Color: Dark' },
          { label: 'Text Width: Normal' },
          { label: 'Text Width: Narrow' },
          { label: 'Text Width: Wide' },
        ]} />
      </RibbonGroup>

      {/* PAGE MOVEMENT */}
      <RibbonGroup label="Page Movement">
        <LargeBtn icon={SplitSquareHorizontal} label="Vertical" />
        <LargeBtn icon={Columns2} label="Side to Side" />
      </RibbonGroup>

      {/* SHOW */}
      <RibbonGroup label="Show">
        <div className="flex flex-col gap-1 px-1 justify-center h-full">
          {[
            { id: 'ruler', label: 'Ruler' },
            { id: 'grid', label: 'Gridlines' },
            { id: 'nav', label: 'Navigation Pane' },
          ].map(item => (
            <div key={item.id} className="flex items-center gap-1.5">
              <input type="checkbox" id={item.id} defaultChecked={item.id === 'nav'} className="w-3 h-3 accent-[#C9973A]" />
              <label htmlFor={item.id} className="text-[11px] text-gray-600 cursor-pointer">{item.label}</label>
            </div>
          ))}
        </div>
      </RibbonGroup>

      {/* ZOOM */}
      <RibbonGroup label="Zoom">
        <SplitLargeBtn icon={Search} label="Zoom" items={[
          { label: 'Zoom Dialog...' },
          { label: '50%' },
          { label: '75%' },
          { label: '100%' },
          { label: '125%' },
          { label: '150%' },
          { label: '200%' },
          { divider: true },
          { label: 'Page Width' },
          { label: 'Whole Page' },
          { label: 'Two Pages' },
        ]} />
        <div className="flex flex-col h-full justify-center gap-1">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
              className="w-6 h-6 border border-gray-200 rounded hover:bg-gray-100 flex items-center justify-center text-gray-600"
            >
              <Minus size={12} />
            </button>
            <span className="text-[11px] font-medium text-gray-700 w-10 text-center">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel(Math.min(400, zoomLevel + 10))}
              className="w-6 h-6 border border-gray-200 rounded hover:bg-gray-100 flex items-center justify-center text-gray-600"
            >
              <Plus size={12} />
            </button>
          </div>
          <input
            type="range"
            min={50}
            max={400}
            step={10}
            value={zoomLevel}
            onChange={e => setZoomLevel(Number(e.target.value))}
            className="w-24 h-1.5 accent-[#C9973A]"
          />
          <div className="flex gap-1">
            <button onClick={() => setZoomLevel(100)} className="text-[10px] border border-gray-200 rounded px-1.5 py-0.5 hover:bg-gray-100">100%</button>
            <button onClick={() => setZoomLevel(100)} className="text-[10px] border border-gray-200 rounded px-1.5 py-0.5 hover:bg-gray-100">Page Width</button>
          </div>
        </div>
        <LargeBtn icon={Minimize2} label="One Page" />
        <LargeBtn icon={Columns2} label="Two Pages" />
        <LargeBtn icon={Maximize} label="Page Width" />
      </RibbonGroup>

      {/* WINDOW */}
      <RibbonGroup label="Window">
        <LargeBtn icon={Plus} label="New Window" />
        <LargeBtn icon={LayoutTemplate} label="Arrange All" />
        <SplitLargeBtn icon={SplitSquareHorizontal} label="Split" items={[
          { label: 'Split Window' },
          { label: 'Remove Split' },
        ]} />
        <SplitLargeBtn icon={Columns2} label="View Side by Side" items={[
          { label: 'View Side by Side' },
          { label: 'Synchronous Scrolling' },
          { label: 'Reset Window Position' },
        ]} />
        <LargeBtn icon={RefreshCw} label="Switch Windows" />
      </RibbonGroup>

      {/* MACROS */}
      <RibbonGroup label="Macros">
        <SplitLargeBtn icon={Zap} label="Macros" items={[
          { label: 'View Macros (Alt+F8)' },
          { label: 'Record Macro...' },
          { label: 'Pause Recording' },
          { divider: true },
          { label: 'Macro Security...' },
        ]} />
      </RibbonGroup>

    </div>
  );
};

export default ViewTab;
