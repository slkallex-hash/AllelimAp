import React, { useEffect } from 'react';

export default function KadamAd() {
  useEffect(() => {
    const win = window as any;
    win.k_init = win.k_init || [];
    win.k_init.push({
        id: 'esGqFf421361',
        type: 'bn',
        domain: 'hdbkome.com',
        refresh: false,
        next: 0
    });
    
    if (!document.querySelector('script[src="https://hdbkome.com/6s2kbgt0.js"]')) {
      const s = document.createElement('script');
      s.setAttribute('async', 'true');
      s.setAttribute('charset', 'utf-8');
      s.setAttribute('data-cfasync', 'false');
      s.src = 'https://hdbkome.com/6s2kbgt0.js'; 
      document.head && document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden min-h-[250px] bg-white/5 rounded-xl border border-white/10">
      <div className="esGqFf421361"></div>
    </div>
  );
}
