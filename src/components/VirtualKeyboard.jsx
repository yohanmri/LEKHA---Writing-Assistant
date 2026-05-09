import React from 'react';

const VirtualKeyboard = ({ onClose }) => {
  const rows = [
    [
      { s: 'අ', e: 'a' }, { s: 'ආ', e: 'aa' }, { s: 'ඇ', e: 'ae' }, { s: 'ඈ', e: 'aee' },
      { s: 'ඉ', e: 'i' }, { s: 'ඊ', e: 'ii' }, { s: 'උ', e: 'u' }, { s: 'ඌ', e: 'uu' },
      { s: 'එ', e: 'e' }, { s: 'ඒ', e: 'ee' }, { s: 'ඔ', e: 'o' }, { s: 'ඕ', e: 'oo' }
    ],
    [
      { s: 'ක', e: 'ka' }, { s: 'ඛ', e: 'kha' }, { s: 'ග', e: 'ga' }, { s: 'ඝ', e: 'gha' },
      { s: 'ච', e: 'ca' }, { s: 'ඡ', e: 'cha' }, { s: 'ජ', e: 'ja' }, { s: 'ඣ', e: 'jha' }
    ],
    [
      { s: 'ට', e: 'ta' }, { s: 'ඨ', e: 'tha' }, { s: 'ඩ', e: 'da' }, { s: 'ඪ', e: 'dha' },
      { s: 'ණ', e: 'na' }, { s: 'ත', e: 'tha' }, { s: 'ද', e: 'da' }, { s: 'ධ', e: 'dha' }, { s: 'න', e: 'na' }
    ],
    [
      { s: 'ප', e: 'pa' }, { s: 'ඵ', e: 'pha' }, { s: 'බ', e: 'ba' }, { s: 'භ', e: 'bha' }, { s: 'ම', e: 'ma' },
      { s: 'ය', e: 'ya' }, { s: 'ර', e: 'ra' }, { s: 'ල', e: 'la' }, { s: 'ව', e: 'wa' },
      { s: 'ශ', e: 'sha' }, { s: 'ෂ', e: 'sha' }, { s: 'ස', e: 'sa' }, { s: 'හ', e: 'ha' }, { s: 'ළ', e: 'la' }
    ]
  ];

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-toolbar-bg border border-toolbar-border rounded-xl shadow-2xl p-4 w-auto z-40 select-none animate-slide-up cursor-move">
      <div className="flex justify-between items-center mb-4 cursor-move pb-2 border-b border-toolbar-border/50">
        <div className="flex items-center space-x-2 text-text-muted">
          <i className="ph ph-dots-six-vertical"></i>
          <span className="text-xs uppercase font-semibold tracking-wider">Sinhala Phonetic Keyboard</span>
        </div>
        <button onClick={onClose} className="text-text-muted hover:text-red-400 transition-colors p-1 rounded-full hover:bg-toolbar-hover">
          <i className="ph ph-x"></i>
        </button>
      </div>

      <div className="flex flex-col space-y-2">
        {rows.map((row, i) => (
          <div key={i} className={`flex justify-center space-x-1.5 ${i === 1 ? 'ml-4' : i === 2 ? 'ml-8' : ''}`}>
            {row.map((key, j) => (
              <button 
                key={j} 
                className="w-12 h-14 bg-background-desk rounded flex flex-col items-center justify-center hover:bg-accent-primary hover:text-[#1C1C1C] text-text-dark transition-colors key-press shadow-sm group"
              >
                <span className="font-document text-lg mb-1">{key.s}</span>
                <span className="text-[10px] text-text-muted opacity-70 group-hover:text-[#1C1C1C]/80">{key.e}</span>
              </button>
            ))}
          </div>
        ))}
        
        {/* Spacebar Row */}
        <div className="flex justify-center space-x-2 mt-2">
          <button className="w-16 h-12 bg-background-desk rounded flex items-center justify-center hover:bg-accent-primary text-text-dark transition-colors shadow-sm key-press">
            <i className="ph ph-arrow-fat-up"></i>
          </button>
          <button className="w-96 h-12 bg-background-desk rounded flex items-center justify-center hover:bg-toolbar-hover text-text-dark transition-colors shadow-sm key-press text-xs font-medium text-text-muted">
            Space
          </button>
          <button className="w-16 h-12 bg-background-desk rounded flex items-center justify-center hover:bg-accent-primary text-text-dark transition-colors shadow-sm key-press">
            <i className="ph ph-backspace"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
