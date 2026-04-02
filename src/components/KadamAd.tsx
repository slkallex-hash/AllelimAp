import React, { useEffect } from 'react';

export default function KadamAd() {
  useEffect(() => {
    const win = window as any;
    win.k_init = win.k_init || [];
    win.k_init.push({
        id: 'RGzsqy421364',
        type: 'bn',
        domain: 'hdbkome.com',
        refresh: false,
        next: 0
    });
  }, []);

  return (
    <div className="w-[300px] h-[240px] mx-auto flex justify-center items-center overflow-hidden bg-white/5 rounded-xl border border-white/10">
      {/* Kadam Ad Slot */}
      <div id="RGzsqy421364" className="RGzsqy421364 w-full h-full"></div>
    </div>
  );
}
