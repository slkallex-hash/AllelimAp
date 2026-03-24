import React, { useEffect } from 'react';

export default function JuicyAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbyjuicy = window.adsbyjuicy || []).push({'adzone': 1113423});
    } catch (e) {
      console.error('JuicyAds error', e);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-[300px] h-[250px] bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
      <ins id="1113423" data-width="300" data-height="250"></ins>
    </div>
  );
}
