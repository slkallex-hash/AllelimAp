import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FixedAdBannerProps {
  position: 'top' | 'bottom';
}

export default function FixedAdBanner({ position }: FixedAdBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed left-0 w-full z-50 flex items-center justify-center bg-black/90 backdrop-blur-md border-white/10 shadow-2xl transition-all duration-300 ${
        position === 'top' ? 'top-0 border-b' : 'bottom-0 border-t'
      }`}
      style={{ height: '60px' }}
    >
      {/* Close Button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
        aria-label="Fechar anúncio"
      >
        <X size={16} />
      </button>

      {/* Ad Container */}
      <div className="relative w-full max-w-[320px] h-[50px] flex items-center justify-center overflow-hidden">
        <iframe
          src="/ad-banner.html"
          width="320"
          height="50"
          scrolling="no"
          frameBorder="0"
          className="w-[320px] h-[50px]"
          title={`Fixed Ad ${position}`}
          sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        />
      </div>
    </div>
  );
}
