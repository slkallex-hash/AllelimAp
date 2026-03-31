import React, { useEffect } from 'react';

declare global {
  interface Window {
    k_init: any[];
  }
}

export default function KadamAd() {
  useEffect(() => {
    window.k_init = window.k_init || [];
    window.k_init.push({
      id: 'dZnDsn421364',
      type: 'bn',
      domain: 'hdbkome.com',
      refresh: false,
      next: 0
    });

    if (!document.querySelector('script[src="https://hdbkome.com/ekzh6e5g.js"]')) {
      const s = document.createElement('script');
      s.setAttribute('async', 'true');
      s.setAttribute('charset', 'utf-8');
      s.setAttribute('data-cfasync', 'false');
      s.src = 'https://hdbkome.com/ekzh6e5g.js';
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-8 overflow-hidden">
      <div className="dZnDsn421364 min-h-[50px] min-w-[300px]"></div>
    </div>
  );
}
