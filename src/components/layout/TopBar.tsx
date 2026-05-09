import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { useDropdown } from '../ribbon/RibbonComponents';
import {
  Save, History, Share2, Download, ChevronDown, UserCircle,
  FileText, File, Code, Printer, FileType2
} from 'lucide-react';

const TopBar: React.FC = () => {
  const { documentTitle, setDocumentTitle, saveStatus } = useAppStore();
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(documentTitle);
  const exportDropdown = useDropdown();
  const shareDropdown = useDropdown();

  const handleBlur = () => {
    setIsEditing(false);
    setDocumentTitle(tempTitle);
  };

  const exportOptions = [
    { icon: FileType2, label: 'Export as PDF', sub: 'Best for sharing & printing', color: '#e53e3e' },
    { icon: File, label: 'Export as DOCX', sub: 'Microsoft Word format', color: '#2b6cb0' },
    { icon: FileText, label: 'Export as TXT', sub: 'Plain text, no formatting', color: '#718096' },
    { icon: Code, label: 'Export as HTML', sub: 'For web publishing', color: '#d97706' },
    { divider: true },
    { icon: Printer, label: 'Print', sub: 'Ctrl+P', color: '#2d3748' },
  ];

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50 flex-shrink-0">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="text-[#C9973A] font-bold text-xl mr-1 select-none">ලේඛා</div>
        {isEditing ? (
          <input
            className="border border-[#C9973A] outline-none text-sm font-medium focus:ring-1 focus:ring-[#C9973A] px-2 py-1 rounded min-w-[200px]"
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
            autoFocus
          />
        ) : (
          <div
            className="text-sm font-medium cursor-pointer hover:bg-gray-100 px-2 py-1 rounded truncate max-w-[300px] text-gray-700"
            onClick={() => { setIsEditing(true); setTempTitle(documentTitle); }}
            title="Click to rename"
          >
            {documentTitle}
          </div>
        )}
      </div>

      {/* Center */}
      <div className="flex-1" />

      {/* Right side */}
      <div className="flex items-center gap-1">

        {/* Save button */}
        <button className="p-2 hover:bg-gray-100 rounded flex items-center gap-1.5 text-sm text-gray-600 transition-colors">
          <Save size={16} />
          <span className="text-[13px]">Save</span>
          <span className={`w-1.5 h-1.5 rounded-full ml-0.5 ${
            saveStatus === 'saved' ? 'bg-green-400' :
            saveStatus === 'saving' ? 'bg-amber-400 animate-pulse' :
            'bg-red-400'
          }`} />
        </button>

        {/* Version History */}
        <button className="p-2 hover:bg-gray-100 rounded text-gray-500 transition-colors" title="Version History">
          <History size={16} />
        </button>

        {/* Share dropdown */}
        <div ref={shareDropdown.ref} className="relative">
          <button
            onClick={() => shareDropdown.setOpen(!shareDropdown.open)}
            className="p-2 hover:bg-gray-100 rounded text-gray-500 transition-colors"
            title="Share"
          >
            <Share2 size={16} />
          </button>
          {shareDropdown.open && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-[300] min-w-[200px] py-1">
              <div className="px-3 py-2 border-b border-gray-100 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Share Document</div>
              {['Share with People...', 'Copy Link', 'Embed in Website...', 'Email as Attachment...', 'Email as PDF...'].map(item => (
                <button key={item} onClick={() => shareDropdown.setOpen(false)} className="w-full text-left px-3 py-2 text-[13px] hover:bg-gray-50">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Export dropdown */}
        <div ref={exportDropdown.ref} className="relative ml-1">
          <button
            onClick={() => exportDropdown.setOpen(!exportDropdown.open)}
            className="bg-[#C9973A] hover:bg-[#B08432] text-white px-3 py-1.5 rounded flex items-center gap-2 text-[13px] font-medium transition-colors"
          >
            <Download size={15} />
            <span>Export</span>
            <ChevronDown size={13} className={`transition-transform ${exportDropdown.open ? 'rotate-180' : ''}`} />
          </button>

          {exportDropdown.open && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-[300] min-w-[240px] py-1 overflow-hidden">
              <div className="px-3 py-2 border-b border-gray-100 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Export Document</div>
              {exportOptions.map((opt, i) =>
                (opt as any).divider ? (
                  <div key={i} className="border-t border-gray-100 my-1" />
                ) : (
                  <button
                    key={i}
                    onClick={() => exportDropdown.setOpen(false)}
                    className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-3 group transition-colors"
                  >
                    {opt.icon && <opt.icon size={16} style={{ color: opt.color }} />}
                    <div>
                      <div className="text-[13px] font-medium text-gray-800">{opt.label}</div>
                      {opt.sub && <div className="text-[11px] text-gray-400">{opt.sub}</div>}
                    </div>
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* User avatar */}
        <button className="ml-1 p-1 text-gray-400 hover:text-gray-600 transition-colors" title="Account">
          <UserCircle size={26} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
