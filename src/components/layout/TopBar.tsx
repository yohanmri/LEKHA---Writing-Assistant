import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { 
  Save, 
  History, 
  Share2, 
  Download, 
  ChevronDown, 
  UserCircle 
} from 'lucide-react';

const TopBar: React.FC = () => {
  const { documentTitle, setDocumentTitle } = useAppStore();
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(documentTitle);

  const handleBlur = () => {
    setIsEditing(false);
    setDocumentTitle(tempTitle);
  };

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="text-[#C9973A] font-bold text-xl mr-2">ලේඛා</div>
        {isEditing ? (
          <input
            className="border-none outline-none text-sm font-medium focus:ring-1 focus:ring-[#C9973A] px-2 py-1 rounded"
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <div 
            className="text-sm font-medium cursor-pointer hover:bg-gray-100 px-2 py-1 rounded truncate max-w-[300px]"
            onClick={() => setIsEditing(true)}
          >
            {documentTitle}
          </div>
        )}
      </div>

      {/* Center - Empty */}
      <div className="flex-1"></div>

      {/* Right side */}
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-gray-100 rounded flex items-center gap-1.5 text-sm text-gray-600">
          <Save size={18} />
          <span>Save</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <History size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <Share2 size={18} />
        </button>
        
        <div className="relative ml-2">
          <button className="bg-[#C9973A] hover:bg-[#B08432] text-white px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium transition-colors">
            <Download size={16} />
            <span>Export</span>
            <ChevronDown size={14} />
          </button>
        </div>

        <button className="ml-2 p-1 text-gray-400 hover:text-gray-600">
          <UserCircle size={28} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
