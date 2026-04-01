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
  }, []);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden min-h-[250px] bg-white/5 rounded-xl border border-white/10">
      {/* Kadam Ad Slot - Using both class and ID for compatibility */}
      <div id="esGqFf421361" className="esGqFf421361"></div>
    </div>
  );
}
