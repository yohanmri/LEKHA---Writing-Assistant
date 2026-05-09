import React, { useState } from 'react';

const DocumentArea = ({ onDocumentClick }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });

  const handleWordClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPopupPos({
      top: rect.top - 160, // approximate popup height
      left: rect.left - 50
    });
    setPopupVisible(true);
  };

  const closePopup = () => setPopupVisible(false);

  return (
    <div 
      className="flex-1 bg-background-desk overflow-y-auto relative p-8 flex justify-center transition-colors duration-200" 
      onClick={() => {
        if (popupVisible) closePopup();
        if (onDocumentClick) onDocumentClick();
      }}
    >
      
      {/* The A4 Page */}
      <div 
        className="w-[21cm] min-h-[29.7cm] bg-white document-shadow relative p-[2.54cm] text-text-document font-document text-[14pt] leading-relaxed select-text"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-4">
          ගුණපාල සිය රන්වන් වී ඇට මඩට මුදා හළේය.
        </p>
        <p className="mb-4">
          <span className="dialect-highlight" onClick={handleWordClick}>ඔයා</span> <span className="dialect-highlight" onClick={handleWordClick}>කොස්</span> <span className="dialect-highlight" onClick={handleWordClick}>කනවාද</span>? අපි ගෙදර යනවා.
        </p>
        <p className="mb-4 text-justify">
          දකුණු සිරිලක ගැඹුරු වන පියසකට මායිම් වූ නිහඬ ගම්මානයක ජීවත් වූ ගුණපාල යනු හුදෙක් ගොවියෙකු පමණක් නොවීය. ඔහු තම ජීවිතයම ගොවිතැන වෙනුවෙන් කැප කළ අව්‍යාජ මිනිසෙකි.
        </p>
      </div>

      {/* Suggestion Popup */}
      {popupVisible && (
        <div 
          className="fixed bg-toolbar-bg border border-accent-primary rounded-xl shadow-2xl z-50 w-64 text-sm animate-fade-in-up"
          style={{ top: Math.max(100, popupPos.top), left: Math.max(10, popupPos.left) }}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-3 border-b border-toolbar-border bg-background-app/50 rounded-t-xl flex justify-between items-center">
            <span className="font-document text-lg text-text-dark font-medium">ඔයා</span>
            <button onClick={closePopup} className="text-text-muted hover:text-white"><i className="ph ph-x"></i></button>
          </div>
          
          <div className="p-2 space-y-1">
            <div className="flex items-center justify-between p-2 hover:bg-toolbar-hover rounded cursor-pointer group">
              <div className="flex items-center space-x-2">
                <i className="ph ph-check-circle text-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                <span className="font-document text-base text-text-dark">ඔහේ</span>
                <span className="text-xs text-text-muted">(Galle)</span>
              </div>
              <button className="text-[10px] bg-accent-primary text-[#1C1C1C] px-2 py-1 rounded font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Use</button>
            </div>
            
            <div className="flex items-center justify-between p-2 hover:bg-toolbar-hover rounded cursor-pointer group">
              <div className="flex items-center space-x-2">
                <i className="ph ph-check-circle text-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                <span className="font-document text-base text-text-dark">ඔයැයි</span>
                <span className="text-xs text-text-muted">(Matara)</span>
              </div>
              <button className="text-[10px] bg-accent-primary text-[#1C1C1C] px-2 py-1 rounded font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Use</button>
            </div>
          </div>
          
          <div className="p-2 border-t border-toolbar-border flex justify-between gap-2">
            <button className="flex-1 text-xs border border-accent-primary/50 text-accent-primary py-1.5 rounded hover:bg-accent-primary hover:text-[#1C1C1C] transition-colors">
              Add to Dictionary
            </button>
            <button className="px-3 text-xs text-text-muted hover:text-text-dark py-1.5 rounded hover:bg-toolbar-hover transition-colors" onClick={closePopup}>
              Skip
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentArea;
