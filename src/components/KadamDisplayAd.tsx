import React, { useEffect } from 'react';

export default function KadamDisplayAd() {
  useEffect(() => {
    const win = window as any;
    win.k_init = win.k_init || [];
    win.k_init.push({
        id: 'Rsggar421361',
        type: 'bn',
        domain: 'hdbkome.com',
        refresh: false,
        next: 0
    });
  }, []);

  return (
    <div className="w-[300px] h-[240px] mx-auto flex justify-center items-center overflow-hidden bg-white/5 rounded-xl border border-white/10">
      {/* Kadam Display Ad Slot - Using both class and ID for compatibility */}
      <div id="Rsggar421361" className="Rsggar421361 w-full h-full"></div>
    </div>
  );
}
